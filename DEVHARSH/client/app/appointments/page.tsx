'use client'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import GlassCard from '@/components/GlassCard'
import { Calendar as CalendarIcon, Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

const appointments = [
  { id: 1, patient: 'Ravi Teja', doctor: 'Dr. Kumar', time: '10:00 AM', date: 'May 01, 2026', status: 'Approved' },
  { id: 2, patient: 'Sita Ram', doctor: 'Dr. Rao', time: '11:30 AM', date: 'May 01, 2026', status: 'Pending' },
  { id: 3, patient: 'Arjun Singh', doctor: 'Dr. Reddy', time: '02:00 PM', date: 'May 01, 2026', status: 'Completed' },
  { id: 4, patient: 'Meera Bai', doctor: 'Dr. Kumar', time: '04:30 PM', date: 'May 02, 2026', status: 'Cancelled' },
]

export default function AppointmentsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Appointments</h1>
            <p className="text-slate-400">Schedule and monitor patient visits</p>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-neon-blue">
            Book Appointment
          </button>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {appointments.map((apt, i) => (
            <motion.div
              key={apt.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="flex items-center justify-between border-l-4 border-l-primary">
                <div className="flex items-center gap-6">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-primary">
                    <CalendarIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{apt.patient}</h3>
                    <p className="text-slate-400 text-sm">with <span className="text-primary-glow font-medium">{apt.doctor}</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-12">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock size={18} className="text-slate-500" />
                    <span>{apt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CalendarIcon size={18} className="text-slate-500" />
                    <span>{apt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {apt.status === 'Approved' && <StatusBadge text="Approved" color="blue" icon={CheckCircle2} />}
                    {apt.status === 'Pending' && <StatusBadge text="Pending" color="amber" icon={AlertCircle} />}
                    {apt.status === 'Completed' && <StatusBadge text="Completed" color="emerald" icon={CheckCircle2} />}
                    {apt.status === 'Cancelled' && <StatusBadge text="Cancelled" color="red" icon={XCircle} />}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors">Edit</button>
                    <button className="p-2 bg-white/5 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">Cancel</button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

function StatusBadge({ text, color, icon: Icon }: any) {
  const colors: any = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-neon-blue',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-neon-amber',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-neon-green',
    red: 'bg-red-500/10 text-red-400 border-red-500/20 shadow-neon-red',
  }
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${colors[color]}`}>
      <Icon size={14} />
      {text}
    </div>
  )
}
