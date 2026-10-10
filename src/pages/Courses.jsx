import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Music2 } from 'lucide-react'

export default function Courses() {
  const courses = [
    { title: 'Music Production 101', desc: 'Learn the basics of music production from scratch.', level: 'Beginner' },
    { title: 'Artist Brand Building', desc: 'Build your brand as an independent artist.', level: 'Intermediate' },
    { title: 'Streaming & Distribution', desc: 'Get your music on every platform the right way.', level: 'All Levels' },
  ]

  return (
    <div className="min-h-[calc(100vh-5rem)] relative z-10 px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-black/60 backdrop-blur-md rounded-2xl p-8 border-2 border-red-600/20 hover:border-red-500/40 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-red-200" />
            </div>
            <span className="inline-block text-xs text-red-300 bg-red-900/30 px-3 py-1 rounded-full mb-3">{course.level}</span>
            <h3 className="text-white text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-red-200/60 text-sm">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
