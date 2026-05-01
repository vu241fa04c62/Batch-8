'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Hospital, User, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [role, setRole] = useState('Patient')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-neon-blue mx-auto mb-6"
          >
            <Hospital className="text-white" size={32} />
          </motion.div>
          <h1 className="text-4xl font-bold text-white mb-2">Join Lumina Care</h1>
          <p className="text-slate-400">Experience the future of healthcare technology</p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Select Your Role</h3>
            <div className="space-y-3">
              {['Patient', 'Doctor', 'Admin'].map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`w-full p-4 rounded-2xl border transition-all flex items-center gap-4 ${
                    role === r 
                    ? 'bg-primary/20 border-primary text-white shadow-neon-blue' 
                    : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${role === r ? 'bg-primary text-white' : 'bg-slate-800'}`}>
                    {r === 'Patient' && <User size={18} />}
                    {r === 'Doctor' && <ShieldCheck size={18} />}
                    {r === 'Admin' && <ShieldCheck size={18} />}
                  </div>
                  <span className="font-bold">{r}</span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Full Name</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 outline-none" placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 outline-none" placeholder="john@example.com" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Password</label>
              <input type="password" title="password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 outline-none" placeholder="••••••••" required />
            </div>
            
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-neon-blue flex items-center justify-center gap-2 group"
              >
                Create Account
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <p className="text-center text-slate-500 text-sm pt-4">
              Already have an account?{' '}
              <Link href="/login" className="text-primary-glow font-bold hover:underline">Sign In</Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
