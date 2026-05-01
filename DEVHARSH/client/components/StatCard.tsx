'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import GlassCard from './GlassCard'

interface StatCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  trend?: string
  color?: 'blue' | 'purple' | 'green'
  delay?: number
}

export default function StatCard({ label, value, icon: Icon, trend, color = 'blue', delay = 0 }: StatCardProps) {
  const colors = {
    blue: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30 shadow-neon-blue',
    purple: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30 shadow-neon-purple',
    green: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30 shadow-neon-green',
  }

  return (
    <GlassCard delay={delay} className="group relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors[color]} blur-3xl opacity-20 -mr-8 -mt-8`} />
      
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium mb-1">{label}</p>
          <motion.h3 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: delay + 0.2 }}
            className="text-3xl font-bold text-white tracking-tight"
          >
            {value}
          </motion.h3>
          {trend && (
            <p className="text-xs font-medium text-emerald-400 mt-2 flex items-center gap-1">
              <span>↑</span> {trend}
            </p>
          )}
        </div>
        
        <div className={`p-3 rounded-xl bg-gradient-to-br ${colors[color]} border transition-transform group-hover:scale-110 duration-300`}>
          <Icon size={24} />
        </div>
      </div>
    </GlassCard>
  )
}
