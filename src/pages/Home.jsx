import React from 'react'
import { motion } from 'framer-motion'
import { Music2, TrendingUp, Award, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] relative z-10 px-6 py-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent mb-6">
          HarleyVexx
        </h1>
        <p className="text-xl text-red-200/80 max-w-2xl mx-auto mb-12">
          Independent artist, producer, and creator. 57M+ streams across all platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          { icon: TrendingUp, label: '57M+ Streams', desc: 'Across all platforms' },
          { icon: Award, label: '100% Independent', desc: 'Owned & self-built' },
          { icon: Users, label: 'Growing Community', desc: 'Worldwide audience' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border-2 border-red-600/20 text-center"
          >
            <stat.icon className="w-10 h-10 text-red-400 mx-auto mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">{stat.label}</h3>
            <p className="text-red-200/60 text-sm">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-2 text-red-300/60 text-sm">
          <Music2 className="w-4 h-4" />
          Explore the catalog, courses, and more
        </div>
      </div>
    </div>
  )
}
