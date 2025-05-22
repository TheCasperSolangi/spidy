// app/api/send/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    console.log('API route called'); // Debug log
    
    const body = await request.json();
    console.log('Request body:', body); // Debug log
    
    // Validate required fields
    if (!body.to || !body.subject || !body.text) {
      console.log('Missing required fields:', { to: !!body.to, subject: !!body.subject, text: !!body.text });
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Check if RESEND_API_KEY is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    console.log('Attempting to send email with Resend...');
    
    const emailData = {
      from: 'contact@spidysofts.com', // This should be a domain you've verified with Resend
      to: body.to,
      subject: body.subject,
      text: body.text,
      html: body.html,
      reply_to: body.from
    };
    
    console.log('Email data:', emailData);
    
    const { data, error } = await resend.emails.send(emailData);

    console.log('Resend response:', { data, error }); // Debug log

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: error.message || error }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true, data }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('API route error:', error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}