'use client'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  Calendar, 
  Pill, 
  BarChart3, 
  Mail, 
  LogOut,
  Hospital
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Patients', href: '/patients' },
  { icon: UserSquare2, label: 'Doctors', href: '/doctors' },
  { icon: Calendar, label: 'Appointments', href: '/appointments' },
  { icon: Pill, label: 'Pharmacy', href: '/pharmacy' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: Mail, label: 'Contact', href: '/contact' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-screen w-64 glass border-r border-white/10 z-50 flex flex-col p-4"
    >
      <div className="flex items-center gap-3 px-4 py-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon-blue">
          <Hospital className="text-white" size={24} />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          Lumina Care
        </span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive ? 'bg-primary/20 text-primary-glow shadow-neon-blue border border-primary/30' : 'text-slate-400'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeGlow"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-glow shadow-neon-blue"
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </nav>

      <motion.button
        whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 mt-auto transition-colors"
      >
        <LogOut size={20} />
        <span className="font-medium">Logout</span>
      </motion.button>
    </motion.div>
  )
}
