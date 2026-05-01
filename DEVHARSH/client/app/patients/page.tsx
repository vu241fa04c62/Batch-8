'use client'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import GlassCard from '@/components/GlassCard'
import { Search, Plus, Filter, MoreVertical, User } from 'lucide-react'

const patients = [
  { id: 1, name: 'John Doe', age: 45, disease: 'Hypertension', doctor: 'Dr. Sarah Smith', status: 'Stable' },
  { id: 2, name: 'Alice Johnson', age: 29, disease: 'Diabetes Type II', doctor: 'Dr. Michael Chen', status: 'Critical' },
  { id: 3, name: 'Robert Wilson', age: 62, disease: 'Recovering from Surgery', doctor: 'Dr. Sarah Smith', status: 'Recovering' },
  { id: 4, name: 'Emma Brown', age: 34, disease: 'Asthma', doctor: 'Dr. Michael Chen', status: 'Stable' },
]

export default function PatientsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Patient Registry</h1>
            <p className="text-slate-400">Manage and monitor patient health records</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold shadow-neon-blue"
          >
            <Plus size={20} /> Add New Patient
          </motion.button>
        </header>

        <GlassCard className="mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                placeholder="Search by name, ID or disease..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50"
              />
            </div>
            <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Filter size={18} /> Filters
            </button>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 gap-4">
          {patients.map((patient, i) => (
            <motion.div
              key={patient.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-4 flex items-center justify-between border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-primary group-hover:shadow-neon-blue transition-all">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white">{patient.name}</h3>
                  <p className="text-sm text-slate-400">ID: #PT-2026-{patient.id} • {patient.age} years old</p>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Condition</p>
                  <p className="text-sm text-slate-200 font-medium">{patient.disease}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Assigned Doctor</p>
                  <p className="text-sm text-slate-200 font-medium">{patient.doctor}</p>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    patient.status === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    patient.status === 'Stable' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {patient.status}
                  </span>
                </div>
                <button className="text-slate-500 hover:text-white p-2">
                  <MoreVertical size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
