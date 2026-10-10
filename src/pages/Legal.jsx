import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Shield, FileText } from 'lucide-react'

export default function Legal() {
  const sections = [
    { icon: FileText, title: 'Licensing', desc: 'All music is licensed under Creative Commons BY-NC-ND 4.0.' },
    { icon: Shield, title: 'Copyright', desc: 'HarleyVexx and HarleyVexx-4Creators\'101 are protected works.' },
    { icon: Scale, title: 'EIN Verified', desc: 'Business entity verified with valid EIN.' },
  ]

  return (
    <div className="min-h-[calc(100vh-5rem)] relative z-10 px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Legal</h1>
      <div className="space-y-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border-2 border-red-600/20 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center flex-shrink-0">
              <section.icon className="w-6 h-6 text-red-200" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-1">{section.title}</h3>
              <p className="text-red-200/60 text-sm">{section.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
