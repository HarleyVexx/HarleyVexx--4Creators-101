import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, TrendingUp, Users, Music2 } from 'lucide-react'

export default function Pitch() {
  return (
    <div className="min-h-[calc(100vh-5rem)] relative z-10 px-6 py-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">The HarleyVexx Pitch</h1>
        <p className="text-xl text-red-200/80 text-center max-w-3xl mx-auto mb-12">
          An independent music brand with 57M+ streams, 100% owned and self-built, now expanding into education and creator tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: TrendingUp, title: 'Proven Reach', desc: '57M+ streams across Spotify, YouTube, SoundCloud, and more.' },
          { icon: Users, title: 'Loyal Audience', desc: 'A growing worldwide community across social platforms.' },
          { icon: Music2, title: 'Original Catalog', desc: 'A full catalog of original, owned music with clear licensing.' },
          { icon: Briefcase, title: 'Business Ready', desc: 'EIN verified, properly structured, and ready for partnership.' },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border-2 border-red-600/20"
          >
            <item.icon className="w-10 h-10 text-red-400 mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-red-200/60 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
