'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

export default function TermsOfServicePage() {
  return (
    <>
    <Header />
    <div className="max-w-4xl mx-auto px-6 py-20 text-left">
      <Badge className="mb-4 px-4 py-1 bg-primary/10 text-primary border-none">Terms of Service</Badge>

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Terms & Conditions for Using Our Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground mb-10 text-lg"
      >
        By accessing or using our services, you agree to be bound by the following terms. Please read them carefully.
      </motion.p>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By using our website or services, you agree to these Terms of Service. If you do not agree, please do not use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
          <p className="text-muted-foreground">
            You agree to use our services only for lawful purposes and in a manner that does not violate any laws or regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content, branding, and intellectual property on this site are owned by SpidySofts Pvt Ltd and may not be copied without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Account Responsibility</h2>
          <p className="text-muted-foreground">
            If you create an account with us, you are responsible for maintaining its security and all activities under it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Modifications to the Service</h2>
          <p className="text-muted-foreground">
            We may update, modify, or discontinue parts of the service at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
          <p className="text-muted-foreground">
            We reserve the right to suspend or terminate your access if you violate these terms or misuse the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            We are not liable for any indirect or consequential damages arising from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
          <p className="text-muted-foreground">
            These terms are governed by the laws of Pakistan, and any disputes shall be resolved under its jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
          <p className="text-muted-foreground">
            For any questions regarding these terms, please contact us at <a href="mailto:legal@spidysofts.com" className="text-primary underline">legal@spidysofts.com</a>.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  )
}