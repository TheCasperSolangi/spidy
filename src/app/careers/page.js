'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

export default function CareersPage() {
  return (
    <>
    <Header /> 
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <Badge className="mb-4 px-4 py-1 bg-primary/10 text-primary text-sm border-none">Careers</Badge>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-4"
      >
        Uh-oh... We’re Full Right Now!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-muted-foreground max-w-xl text-lg mb-8"
      >
        We’re currently not hiring, but we’re always looking out for talented people. Keep an eye out for openings!
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="shadow-md border-0 bg-transparent">
          <CardContent className="p-0">
            <img
              src="https://thumbs.dreamstime.com/b/no-vacancy-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-89132132.jpg" // public unDraw image link
              alt="Careers Illustration"
              className="rounded-xl w-full max-w-md mx-auto"
            />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button variant="outline">Check Back Later</Button>
      </motion.div>
    </div>
    <Footer />
    </>
  )
}