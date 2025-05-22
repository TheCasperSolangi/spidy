// app/components/sections/CTA.jsx
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
export default function CTA() {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Partner with us to build innovative digital solutions that will help your business thrive in the modern world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary">Get Started Today</Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}