import React from 'react'
import { motion } from 'framer-motion'
import { Music2 } from 'lucide-react'

export default function Catalog() {
  const tracks = [
    { title: 'Track One', platform: 'All platforms', streams: '12M+' },
    { title: 'Track Two', platform: 'All platforms', streams: '8M+' },
    { title: 'Track Three', platform: 'All platforms', streams: '15M+' },
    { title: 'Track Four', platform: 'All platforms', streams: '6M+' },
    { title: 'Track Five', platform: 'All platforms', streams: '9M+' },
    { title: 'Track Six', platform: 'All platforms', streams: '7M+' },
  ]

  return (
    <div className="min-h-[calc(100vh-5rem)] relative z-10 px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Music Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, i) => (
          <motion.div
            key={track.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border-2 border-red-600/20 hover:border-red-500/40 transition-all"
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center mb-4">
              <Music2 className="w-8 h-8 text-red-200" />
            </div>
            <h3 className="text-white text-lg font-bold mb-1">{track.title}</h3>
            <p className="text-red-200/60 text-sm">{track.platform}</p>
            <p className="text-red-400 text-sm font-semibold mt-2">{track.streams} streams</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
