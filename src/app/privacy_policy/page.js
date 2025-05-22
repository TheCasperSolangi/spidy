'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
    <Header />
    <div className="max-w-4xl mx-auto px-6 py-20 text-left">
      <Badge className="mb-4 px-4 py-1 bg-primary/10 text-primary border-none">Privacy Policy</Badge>

      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Our Commitment to Your Privacy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-muted-foreground mb-10 text-lg"
      >
        This Privacy Policy describes how we collect, use, and safeguard your personal information when you use our services.
      </motion.p>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p className="text-muted-foreground">
            We collect basic personal information such as name, email, and any data you submit through forms or account registration.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use your information to provide and improve our services, communicate with you, and ensure the platform is secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Cookies & Tracking</h2>
          <p className="text-muted-foreground">
            We use cookies to personalize your experience, analyze usage, and deliver relevant content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
          <p className="text-muted-foreground">
            We may use third-party tools and services (like analytics or hosting) that have access to limited user data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
          <p className="text-muted-foreground">
            We implement best practices and technologies to protect your data from unauthorized access or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-muted-foreground">
            You have the right to access, modify, or delete your data. You can contact us at any time for support.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this policy from time to time. Updates will be posted on this page with the effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-muted-foreground">
            For questions or concerns about this policy, please email us at <a href="mailto:privacy@spidysofts.com" className="text-primary underline">privacy@spidysofts.com</a>.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  )
}