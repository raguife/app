import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, FolderOpen, ClipboardList, Settings } from 'lucide-react'

export default function App() {
  const tools = [
    {
      title: 'Gestão de Tarefas',
      icon: <ClipboardList className='w-10 h-10 text-green-700' />,
      description: 'Organize e acompanhe suas demandas de marketing.'
    },
    {
      title: 'Inteligência Comercial',
      icon: <BarChart3 className='w-10 h-10 text-green-700' />,
      description: 'Acompanhe indicadores e dados de mercado.'
    },
    {
      title: 'Downloads',
      icon: <FolderOpen className='w-10 h-10 text-green-700' />,
      description: 'Baixe materiais e arquivos da equipe de marketing.'
    },
    {
      title: 'Outras Ferramentas',
      icon: <Settings className='w-10 h-10 text-green-700' />,
      description: 'Acesse integrações e utilitários internos.'
    }
  ]

  return (
    <div className='min-h-screen bg-green-700 flex flex-col items-center justify-center text-white p-4'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-3xl md:text-4xl font-bold mb-8'
      >
        Ferramentas Marketing Raguife
      </motion.h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full'>
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className='rounded-2xl shadow-lg hover:shadow-xl bg-white text-green-800 p-6 flex flex-col items-center space-y-4'>
              {tool.icon}
              <h2 className='text-xl font-semibold text-center'>{tool.title}</h2>
              <p className='text-center text-sm text-gray-600'>{tool.description}</p>
              <button className='bg-green-700 text-white hover:bg-green-800 rounded-xl px-4 py-2 mt-2'>Em breve</button>
            </div>
          </motion.div>
        ))}
      </div>

      <footer className='mt-10 text-sm opacity-70'>© 2025 Raguife Marketing</footer>
    </div>
  )
}
