import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Route, Truck, BarChart2, Clock, MapPin,
  Search, CheckSquare, ExternalLink, ChevronRight,
  Package
} from 'lucide-react'

const BASE = '/ikea-ops-tools/apps'

interface App {
  id: string
  title: string
  description: string
  file: string
  icon: React.ReactNode
  tag: string
  tagColor: string
}

const APPS: App[] = [
  {
    id: 'ruteo-pr',
    title: 'Ruteo PR',
    description: 'Pre Ruteo y Post Ruteo con polinomio, scoring, y exportación de correo para operaciones IKEA.',
    file: 'app_ruteo_pr.html',
    icon: <Route size={20} />,
    tag: 'Ruteo',
    tagColor: 'text-ikea-blue bg-ikea-blue/10 border-ikea-blue/20',
  },
  {
    id: 'ruteador',
    title: 'Ruteador IKEA v9',
    description: 'Herramienta principal de asignación de rutas por commune, VEH codes y Pre-Ola.',
    file: 'ruteador-ikea-v9.html',
    icon: <Truck size={20} />,
    tag: 'Ruteo',
    tagColor: 'text-ikea-blue bg-ikea-blue/10 border-ikea-blue/20',
  },
  {
    id: 'auditoria',
    title: 'Auditoría de Rutas',
    description: 'Revisión y auditoría de rutas generadas, validación de ISOs y conteo de tickets.',
    file: 'auditoria_rutas.html',
    icon: <CheckSquare size={20} />,
    tag: 'Auditoría',
    tagColor: 'text-ikea-green bg-ikea-green/10 border-ikea-green/20',
  },
  {
    id: 'ruteo-24hrs',
    title: 'Ruteo 24 hrs',
    description: 'Gestión de entregas express y rutas de 24 horas con priorización automática.',
    file: 'ruteo-24hrs.html',
    icon: <Clock size={20} />,
    tag: 'Express',
    tagColor: 'text-ikea-orange bg-ikea-orange/10 border-ikea-orange/20',
  },
  {
    id: 'reporte',
    title: 'Reporte de Rutas',
    description: 'Generación de reportes consolidados con métricas de desempeño y KPIs de entrega.',
    file: 'reporte_rutas.html',
    icon: <BarChart2 size={20} />,
    tag: 'Reportes',
    tagColor: 'text-ikea-purple bg-ikea-purple/10 border-ikea-purple/20',
  },
  {
    id: 'isos-geo',
    title: 'ISOs Faltantes Geo',
    description: 'Visualización geográfica de ISOs faltantes y análisis de cobertura por zona.',
    file: 'isos_faltantes_geo.html',
    icon: <MapPin size={20} />,
    tag: 'Geo',
    tagColor: 'text-ikea-teal bg-ikea-teal/10 border-ikea-teal/20',
  },
  {
    id: 'consultor',
    title: 'Consultor de ISOs',
    description: 'Consulta y verificación de ISOs individuales con historial y estado actual.',
    file: 'consultor_isos.html',
    icon: <Search size={20} />,
    tag: 'Consulta',
    tagColor: 'text-ikea-yellow bg-ikea-yellow/10 border-ikea-yellow/20',
  },
  {
    id: 'vehiculos',
    title: 'Verificador de Vehículos',
    description: 'Control y verificación de flota vehicular, capacidades y asignaciones activas.',
    file: 'verificador_vehiculos.html',
    icon: <Package size={20} />,
    tag: 'Flota',
    tagColor: 'text-ikea-red bg-ikea-red/10 border-ikea-red/20',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
}

export default function Home() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-ikea-bg bg-grid relative">
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% -10%, rgba(0,81,186,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-header-gradient flex items-center justify-center shadow-lg shadow-ikea-blue/20">
              <Truck size={18} className="text-white" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-ikea-dim">
              IKEA Ops Tools
            </span>
          </div>
          <h1 className="text-3xl font-bold text-ikea-text tracking-tight">
            Panel de Herramientas
          </h1>
          <p className="mt-2 text-ikea-muted text-sm max-w-lg">
            Suite de herramientas internas para operaciones logísticas y ruteo de entregas.
          </p>
        </motion.div>

        {/* App grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {APPS.map((app) => (
            <motion.a
              key={app.id}
              variants={item}
              href={`${BASE}/${app.file}`}
              onMouseEnter={() => setHoveredId(app.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col gap-3 p-4 rounded-xl border border-ikea-border bg-ikea-surface
                         hover:border-ikea-blue/40 hover:bg-ikea-surface2 transition-all duration-200
                         cursor-pointer no-underline"
              style={{
                boxShadow:
                  hoveredId === app.id
                    ? '0 0 0 1px rgba(0,81,186,0.25), 0 4px 24px rgba(0,81,186,0.08)'
                    : undefined,
              }}
            >
              {/* Icon + tag row */}
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-ikea-surface3 border border-ikea-border flex items-center justify-center text-ikea-muted group-hover:text-ikea-blue group-hover:border-ikea-blue/30 transition-colors">
                  {app.icon}
                </div>
                <span
                  className={`text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border ${app.tagColor}`}
                >
                  {app.tag}
                </span>
              </div>

              {/* Title + description */}
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-sm font-semibold text-ikea-text group-hover:text-white transition-colors">
                    {app.title}
                  </h2>
                  <ChevronRight
                    size={13}
                    className="text-ikea-dim group-hover:text-ikea-blue transition-all group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-1 text-[12px] text-ikea-muted leading-relaxed">
                  {app.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-1 text-[11px] text-ikea-dim group-hover:text-ikea-blue/70 transition-colors">
                <ExternalLink size={11} />
                <span>{app.file}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-[11px] text-ikea-dim"
        >
          IKEA Ops Tools · Uso interno · {new Date().getFullYear()}
        </motion.p>
      </div>
    </div>
  )
}
