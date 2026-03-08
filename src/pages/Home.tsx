import { motion } from 'framer-motion'
import { ArrowRight, Plus, Truck } from 'lucide-react'
import AppCard from '../components/AppCard'
import GridBackground from '../components/GridBackground'

const APPS = [
  {
    href: 'apps/ruteador-ikea-v9.html',
    icon: '🗺️',
    name: 'Route Planner',
    desc: 'PostSales dispatch dashboard — routes, repeats, pickups and delivery management.',
    tag: 'PostSales',
    accent: 'from-ikea-blue to-ikea-blue-mid',
    iconBg: 'bg-blue-900/30 border border-blue-700/30',
    tagColor: 'text-blue-300 bg-blue-900/30 border border-blue-700/30',
  },
  {
    href: 'apps/auditoria_rutas.html',
    icon: '🔍',
    name: 'Route Auditor',
    desc: 'Commune-by-vehicle analysis, address validation and ISO detection.',
    tag: 'Audit',
    accent: 'from-teal-500 to-teal-600',
    iconBg: 'bg-teal-900/30 border border-teal-700/30',
    tagColor: 'text-teal-300 bg-teal-900/30 border border-teal-700/30',
  },
  {
    href: 'apps/ruteo-24hrs.html',
    icon: '⚡',
    name: '24H Route Engine',
    desc: 'SCI pre-routing, SimpliRoute plan cross-check and final export pipeline.',
    tag: '24H',
    accent: 'from-orange-500 to-orange-600',
    iconBg: 'bg-orange-900/30 border border-orange-700/30',
    tagColor: 'text-orange-300 bg-orange-900/30 border border-orange-700/30',
  },
  {
    href: 'apps/isos_faltantes_geo.html',
    icon: '📍',
    name: 'Geo ISO Tracker',
    desc: 'Unassigned visits review, base cross-check and duplicate ISO detection.',
    tag: 'Geo',
    accent: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-900/30 border border-purple-700/30',
    tagColor: 'text-purple-300 bg-purple-900/30 border border-purple-700/30',
  },
  {
    href: 'apps/app_ruteo_pr.html',
    icon: '📦',
    name: 'PR Route Builder',
    desc: 'Pre-route and post-route for the PR channel with optimized final exports.',
    tag: 'PR',
    accent: 'from-yellow-400 to-yellow-500',
    iconBg: 'bg-yellow-900/30 border border-yellow-700/30',
    tagColor: 'text-yellow-300 bg-yellow-900/30 border border-yellow-700/30',
  },
  {
    href: 'apps/reporte_rutas.html',
    icon: '📊',
    name: 'Route Reporter',
    desc: 'Live route progress tracking, planning metrics and per-vehicle status.',
    tag: 'Report',
    accent: 'from-red-500 to-red-600',
    iconBg: 'bg-red-900/30 border border-red-700/30',
    tagColor: 'text-red-300 bg-red-900/30 border border-red-700/30',
  },
  {
    href: 'apps/consultor_isos.html',
    icon: '🔎',
    name: 'ISO Inspector',
    desc: 'Query delivery status, comments and non-delivery reasons per ISO.',
    tag: 'ISOs',
    accent: 'from-teal-400 to-teal-500',
    iconBg: 'bg-teal-900/30 border border-teal-700/30',
    tagColor: 'text-teal-300 bg-teal-900/30 border border-teal-700/30',
  },
  {
    href: 'apps/verificador_vehiculos.html',
    icon: '🚛',
    name: 'Fleet Verifier',
    desc: 'SimpliRoute + Report cross-check. Validates plate assignment per vehicle.',
    tag: 'Fleet',
    accent: 'from-purple-400 to-purple-500',
    iconBg: 'bg-purple-900/30 border border-purple-700/30',
    tagColor: 'text-purple-300 bg-purple-900/30 border border-purple-700/30',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ikea-bg overflow-x-hidden">
      {/* Background layers */}
      <GridBackground />

      {/* Radial glow */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-60 animate-glow-pulse"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,81,186,.22) 0%, transparent 70%)',
        }}
      />

      {/* Page content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 pb-20">

        {/* ── Header ── */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-16 flex flex-col items-center text-center gap-5"
        >
          {/* Logo row */}
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #003A8C, #1a6dd4)',
                boxShadow: '0 8px 32px rgba(0,81,186,.45), 0 0 0 1px rgba(0,81,186,.4)',
              }}
            >
              <Truck className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-extrabold tracking-[2.5px] text-ikea-yellow uppercase leading-tight">
                IKEA Ops Tools
              </span>
              <span className="text-[10px] text-ikea-dim tracking-widest font-mono mt-0.5">
                internal suite · logistics &amp; routing
              </span>
            </div>
          </div>

          {/* Divider bar */}
          <div
            className="w-14 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #FFDA1A, transparent)' }}
          />

          {/* Description */}
          <p className="text-[12px] text-ikea-muted max-w-md leading-relaxed text-balance">
            Internal tooling for route management, dispatch operations,
            and ecommerce delivery workflows.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6 pt-1">
            {[
              { value: '8', label: 'Tools' },
              { value: 'RM', label: 'Region' },
              { value: '∞', label: 'Routes' },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center gap-0.5">
                <span className="text-lg font-bold text-ikea-yellow font-mono leading-none">{s.value}</span>
                <span className="text-[9px] text-ikea-dim uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.header>

        {/* ── Apps section ── */}
        <div className="pt-14 flex flex-col gap-6">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <div className="flex-1 h-px bg-ikea-border" />
            <span className="text-[9px] font-bold tracking-[2.5px] text-ikea-dim uppercase">
              Applications
            </span>
            <div className="flex-1 h-px bg-ikea-border" />
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
          >
            {APPS.map((app) => (
              <motion.div key={app.href} variants={itemVariants}>
                <AppCard {...app} />
              </motion.div>
            ))}

            {/* Add card */}
            <motion.div variants={itemVariants}>
              <button
                onClick={() => alert('Coming soon')}
                className="
                  w-full min-h-[160px] rounded-xl border border-dashed border-ikea-border
                  flex flex-col items-center justify-center gap-3
                  text-ikea-dim text-[11px] font-semibold
                  transition-all duration-200
                  hover:border-ikea-blue hover:text-ikea-blue hover:bg-blue-950/20
                  cursor-pointer group
                "
              >
                <div className="
                  w-9 h-9 rounded-full border-2 border-dashed border-current
                  flex items-center justify-center
                  transition-transform duration-200 group-hover:rotate-90 group-hover:scale-110
                ">
                  <Plus className="w-4 h-4" />
                </div>
                <span>New application</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-5 text-[10px] text-ikea-dim font-mono tracking-wide border-t border-ikea-border">
        IKEA Operations Tools · Internal system · {new Date().getFullYear()}
      </footer>
    </div>
  )
}
