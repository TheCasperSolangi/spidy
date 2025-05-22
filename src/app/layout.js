// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SpidySofts | Top Custom Software Development Company in [Your Location] | Web & Mobile App Development',
  description: 'SpidySofts is a leading custom software development company with 10+ years of experience. We specialize in web development, mobile app development, enterprise software solutions, and digital transformation. Trusted by 100+ clients worldwide. Get your free consultation and project quote today!',
  keywords: 'software development company, custom software development, web development services, mobile app development, software house, SpidySofts, enterprise software solutions, IT consulting, digital transformation, software engineers, [your city] software developers, app development company, custom web applications, software outsourcing, technology solutions, full-stack development, agile development, software consulting, business automation, cloud solutions',
  
  // Enhanced metadata for better search visibility
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  author: 'SpidySofts Development Team',
  publisher: 'SpidySofts',
  category: 'Technology, Software Development, IT Services',
  classification: 'Business',
  
  // Geo-targeting (replace with actual location)
  geo: {
    region: '[Your State/Province]',
    placename: '[Your City]',
    position: '[Latitude];[Longitude]',
    ICBM: '[Latitude], [Longitude]'
  },
  
  // Language and locale
  language: 'en-US',
  locale: 'en_US',
  
  // Structured data hints
  applicationName: 'SpidySofts',
  referrer: 'origin-when-cross-origin',
  
  openGraph: {
    title: 'SpidySofts | Trusted Custom Software Development Partner | Web & Mobile Solutions',
    description: 'Transform your business with innovative custom software solutions. Expert web development, mobile app development, and enterprise software services. 10+ years experience, 100+ successful projects. Free consultation available.',
    url: 'https://www.spidysofts.com',
    siteName: 'SpidySofts',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.spidysofts.com/images/spidysofts-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SpidySofts Custom Software Development Services - Web & Mobile App Development Company',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.spidysofts.com/images/spidysofts-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'SpidySofts Software Development Portfolio and Success Stories',
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@SpidySofts',
    creator: '@SpidySofts',
    title: 'SpidySofts | Custom Software Development Experts | Web & Mobile Apps',
    description: 'Transforming businesses with cutting-edge custom software solutions. Expert web development, mobile apps & enterprise software. 10+ years experience. Free consultation available!',
    images: [
      {
        url: 'https://www.spidysofts.com/images/spidysofts-twitter-card.jpg',
        alt: 'SpidySofts - Premier Software Development Company',
      }
    ],
  },
  
  // Additional social media optimization
  facebook: {
    appId: '[YOUR_FACEBOOK_APP_ID]', // Replace with actual Facebook App ID
  },
  
  // Schema.org structured data for rich snippets
  other: {
    // Business information
    'business:contact_data:street_address': '[Your Street Address]',
    'business:contact_data:locality': '[Your City]',
    'business:contact_data:region': '[Your State/Province]',
    'business:contact_data:postal_code': '[Your Postal Code]',
    'business:contact_data:country_name': '[Your Country]',
    'business:contact_data:phone_number': '[Your Phone Number]',
    'business:contact_data:email': 'info@spidysofts.com',
    'business:contact_data:website': 'https://www.spidysofts.com',
    
    // Article/Content metadata
    'article:author': 'SpidySofts Team',
    'article:publisher': 'https://www.facebook.com/SpidySofts',
    'article:section': 'Technology',
    'article:tag': 'Software Development, Web Development, Mobile Apps, Custom Software',
    
    // Additional SEO properties
    'theme-color': '#1a202c', // Replace with your brand color
    'msapplication-TileColor': '#1a202c',
    'msapplication-config': '/browserconfig.xml',
    
    // Rich snippets hints
    'price:currency': 'USD',
    'product:availability': 'in_stock',
    'product:condition': 'new',
    'product:retailer_item_id': 'software-development-services',
    
    // Local business schema hints
    'place:location:latitude': '[Your Latitude]',
    'place:location:longitude': '[Your Longitude]',
    
    // Rating and review hints (update with actual data)
    'rating:value': '4.9',
    'rating:scale': '5',
    'rating:count': '150',
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://www.spidysofts.com',
    languages: {
      'en-US': 'https://www.spidysofts.com',
      'en-GB': 'https://www.spidysofts.com/en-gb',
      // Add other language versions if available
    },
  },
  
  // Verification codes (replace with actual verification codes)
  verification: {
    google: '[YOUR_GOOGLE_SITE_VERIFICATION_CODE]',
    bing: '[YOUR_BING_VERIFICATION_CODE]',
    yandex: '[YOUR_YANDEX_VERIFICATION_CODE]',
  },
  
  // Icons and app manifest
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}

        {/* Floating WhatsApp Button (Bottom-Left) */}
        <a
          href="https://wa.me/923438021567?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Tawk.to Script */}
        <Script
          id="tawk.to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/682e730198a1b819123fc384/1irqn2fl4';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
