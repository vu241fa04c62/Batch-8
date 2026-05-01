'use client'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import GlassCard from '@/components/GlassCard'
import { Pill, Search, AlertCircle, Package, ArrowUpRight } from 'lucide-react'

const inventory = [
  { id: 1, name: 'Paracetamol', category: 'Analgesic', stock: 1240, price: '$5.00', status: 'In Stock' },
  { id: 2, name: 'Amoxicillin', category: 'Antibiotic', stock: 12, price: '$12.50', status: 'Low Stock' },
  { id: 3, name: 'Insulin', category: 'Diabetes', stock: 450, price: '$45.00', status: 'In Stock' },
  { id: 4, name: 'Lisinopril', category: 'Blood Pressure', stock: 0, price: '$15.00', status: 'Out of Stock' },
]

export default function PharmacyPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Pharmacy Inventory</h1>
          <p className="text-slate-400">Manage medicine stock and distribution</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <StatMini label="Total Medicines" value="482" icon={Package} color="blue" />
          <StatMini label="Low Stock Alerts" value="12" icon={AlertCircle} color="red" />
          <StatMini label="Daily Dispensed" value="1.2k" icon={Pill} color="purple" />
        </div>

        <GlassCard className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                placeholder="Search medicine inventory..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50"
              />
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-neon-blue">
              Add New Stock
            </button>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 font-semibold text-slate-400">Medicine Name</th>
                  <th className="pb-4 font-semibold text-slate-400">Category</th>
                  <th className="pb-4 font-semibold text-slate-400">Stock Level</th>
                  <th className="pb-4 font-semibold text-slate-400">Price</th>
                  <th className="pb-4 font-semibold text-slate-400">Status</th>
                  <th className="pb-4 font-semibold text-slate-400">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {inventory.map((item, i) => (
                  <motion.tr 
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 font-bold text-white">{item.name}</td>
                    <td className="py-4 text-slate-300">{item.category}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 w-24 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              item.stock < 100 ? 'bg-red-500 shadow-neon-red' : 'bg-emerald-500 shadow-neon-green'
                            }`}
                            style={{ width: `${Math.min((item.stock / 1500) * 100, 100)}%` }}
                          />
                        </div>
                        <span className="text-sm text-slate-400">{item.stock}</span>
                      </div>
                    </td>
                    <td className="py-4 text-white font-medium">{item.price}</td>
                    <td className="py-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded-lg ${
                        item.status === 'In Stock' ? 'text-emerald-400 bg-emerald-500/10' :
                        item.status === 'Low Stock' ? 'text-amber-400 bg-amber-500/10' :
                        'text-red-400 bg-red-500/10'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="p-2 text-slate-500 hover:text-primary transition-colors">
                        <ArrowUpRight size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </main>
    </div>
  )
}

function StatMini({ label, value, icon: Icon, color }: any) {
  const colors: any = {
    blue: 'text-primary bg-primary/10 shadow-neon-blue',
    red: 'text-red-500 bg-red-500/10 shadow-neon-red',
    purple: 'text-secondary bg-secondary/10 shadow-neon-purple',
  }
  return (
    <GlassCard className="flex items-center gap-4">
      <div className={`p-3 rounded-xl ${colors[color]}`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </GlassCard>
  )
}
