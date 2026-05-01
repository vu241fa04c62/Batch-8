'use client'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import GlassCard from '@/components/GlassCard'
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts'

const growthData = [
  { month: 'Jan', patients: 1200, revenue: 45000 },
  { month: 'Feb', patients: 1900, revenue: 52000 },
  { month: 'Mar', patients: 1600, revenue: 48000 },
  { month: 'Apr', patients: 2100, revenue: 61000 },
  { month: 'May', patients: 2400, revenue: 55000 },
  { month: 'Jun', patients: 2800, revenue: 72000 },
]

const diseaseDistribution = [
  { name: 'Cardiology', value: 400 },
  { name: 'Neurology', value: 300 },
  { name: 'Orthopedics', value: 300 },
  { name: 'Pediatrics', value: 200 },
  { name: 'General', value: 500 },
]

const COLORS = ['#0ea5e9', '#a855f7', '#10b981', '#f59e0b', '#ef4444']

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Hospital Analytics</h1>
          <p className="text-slate-400">Data-driven insights for better healthcare</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GlassCard className="h-[450px]">
            <h3 className="text-lg font-bold text-white mb-6">Patient Growth & Revenue</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis yAxisId="left" stroke="#0ea5e9" />
                  <YAxis yAxisId="right" orientation="right" stroke="#a855f7" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                  />
                  <Line yAxisId="left" type="monotone" dataKey="patients" stroke="#0ea5e9" strokeWidth={3} dot={{ fill: '#0ea5e9' }} />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#a855f7" strokeWidth={3} dot={{ fill: '#a855f7' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard className="h-[450px]">
            <h3 className="text-lg font-bold text-white mb-6">Department Wise Distribution</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={diseaseDistribution}
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {diseaseDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="text-center">
            <p className="text-slate-400 mb-2">Avg. Patient Satisfaction</p>
            <h4 className="text-4xl font-bold text-emerald-400 shadow-neon-green inline-block px-4 py-2 rounded-2xl bg-emerald-500/10">98.2%</h4>
          </GlassCard>
          <GlassCard className="text-center">
            <p className="text-slate-400 mb-2">Operational Efficiency</p>
            <h4 className="text-4xl font-bold text-primary shadow-neon-blue inline-block px-4 py-2 rounded-2xl bg-primary/10">94.5%</h4>
          </GlassCard>
          <GlassCard className="text-center">
            <p className="text-slate-400 mb-2">Resource Utilization</p>
            <h4 className="text-4xl font-bold text-secondary shadow-neon-purple inline-block px-4 py-2 rounded-2xl bg-secondary/10">88.9%</h4>
          </GlassCard>
        </div>
      </main>
    </div>
  )
}
