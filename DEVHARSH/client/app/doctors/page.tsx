'use client'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import GlassCard from '@/components/GlassCard'
import { Star, Phone, Mail, Award } from 'lucide-react'

const doctors = [
  { 
    id: 1, 
    name: 'Dr. Sarah Smith', 
    specialization: 'Cardiologist', 
    rating: 4.9, 
    experience: '12 Years', 
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  { 
    id: 2, 
    name: 'Dr. Michael Chen', 
    specialization: 'Neurologist', 
    rating: 4.8, 
    experience: '8 Years', 
    status: 'Busy',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  { 
    id: 3, 
    name: 'Dr. Elena Rodriguez', 
    specialization: 'Pediatrician', 
    rating: 5.0, 
    experience: '15 Years', 
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200'
  },
]

export default function DoctorsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Medical Staff</h1>
          <p className="text-slate-400">Our world-class specialists and surgeons</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <GlassCard className="relative h-full flex flex-col items-center text-center overflow-hidden border border-white/5 group-hover:border-primary/50 transition-colors">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-primary transition-colors">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute -bottom-2 -right-2 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                    doctor.status === 'Available' ? 'bg-emerald-500 text-white shadow-neon-green' : 'bg-amber-500 text-white shadow-neon-amber'
                  }`}>
                    {doctor.status}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
                <p className="text-primary-glow font-medium text-sm mb-4">{doctor.specialization}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold">{doctor.rating}</span>
                  </div>
                  <div className="w-px h-4 bg-white/10" />
                  <div className="flex items-center gap-1 text-slate-400">
                    <Award size={16} />
                    <span className="text-sm">{doctor.experience}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 w-full mt-auto">
                  <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                    <Phone size={16} /> Contact
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-neon-blue hover:brightness-110 transition-all">
                    View Profile
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
