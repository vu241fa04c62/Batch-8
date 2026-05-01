'use client'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import GlassCard from '@/components/GlassCard'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Support Center</h1>
          <p className="text-slate-400">Get in touch with the hospital administration</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <GlassCard className="h-full">
              <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Full Name</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Email</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Subject</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 outline-none" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 outline-none resize-none" placeholder="Your message here..." />
                </div>
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-neon-blue flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </GlassCard>
          </motion.div>

          <div className="space-y-6">
            <ContactInfo icon={MapPin} label="Location" value="221B Baker Street, Neo City, Earth" />
            <ContactInfo icon={Phone} label="Phone" value="+1 (555) 000-HEALTH" />
            <ContactInfo icon={Mail} label="Email" value="support@luminacare.io" />
            
            <GlassCard className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h3 className="text-white font-bold mb-2">Emergency?</h3>
              <p className="text-slate-400 text-sm mb-4">Our emergency department is open 24/7 for urgent medical needs.</p>
              <button className="text-red-400 font-bold text-sm hover:underline">Call Emergency Hotline →</button>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  )
}

function ContactInfo({ icon: Icon, label, value }: any) {
  return (
    <GlassCard className="flex items-center gap-4">
      <div className="p-3 rounded-xl bg-white/5 text-primary-glow border border-white/10">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </GlassCard>
  )
}
