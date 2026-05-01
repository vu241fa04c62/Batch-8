'use client'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import StatCard from '@/components/StatCard'
import GlassCard from '@/components/GlassCard'
import { 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp,
  Clock,
  ArrowUpRight
} from 'lucide-react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area 
} from 'recharts'

const visitData = [
  { name: 'Mon', visits: 45 },
  { name: 'Tue', visits: 52 },
  { name: 'Wed', visits: 48 },
  { name: 'Thu', visits: 61 },
  { name: 'Fri', visits: 55 },
  { name: 'Sat', visits: 40 },
  { name: 'Sun', visits: 32 },
]

const trendData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
]

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">Hospital Command Center</h1>
            <p className="text-slate-400">Welcome back, Dr. Admin. Here's what's happening today.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-2 pl-4"
          >
            <div className="text-right">
              <p className="text-sm font-medium text-white">System Status</p>
              <p className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Operational
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-white">
              <Activity size={20} />
            </div>
          </motion.div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            label="Total Patients" 
            value="12,840" 
            icon={Users} 
            trend="12% from last month"
            color="blue"
            delay={0.1}
          />
          <StatCard 
            label="Today's Appointments" 
            value="85" 
            icon={Calendar} 
            trend="5% higher"
            color="purple"
            delay={0.2}
          />
          <StatCard 
            label="Live Operations" 
            value="12" 
            icon={Activity} 
            color="green"
            delay={0.3}
          />
          <StatCard 
            label="Avg. Wait Time" 
            value="14m" 
            icon={Clock} 
            color="blue"
            delay={0.4}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <GlassCard delay={0.5} className="h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Weekly Patient Inflow</h3>
              <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-slate-400">
                <TrendingUp size={18} />
              </button>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={visitData}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="visits" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard delay={0.6} className="h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Disease Trends</h3>
              <button className="text-primary-glow text-sm font-medium flex items-center gap-1 hover:underline">
                View Report <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity={0.4}/>
                      <stop offset="100%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#a855f7" strokeWidth={3} fill="url(#areaGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  )
}
