import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface AppCardProps {
  href: string
  icon: string
  name: string
  desc: string
  tag: string
  accent: string
  iconBg: string
  tagColor: string
}

export default function AppCard({ href, icon, name, desc, tag, accent, iconBg, tagColor }: AppCardProps) {
  return (
    <a
      href={href}
      className="
        group relative flex flex-col gap-2.5 p-5 rounded-xl
        bg-ikea-surface border border-ikea-border
        text-ikea-text no-underline overflow-hidden
        transition-all duration-200 ease-out
        hover:-translate-y-1
        hover:border-blue-700/60
        hover:shadow-[0_12px_32px_rgba(0,0,0,.45),0_0_0_1px_rgba(0,81,186,.18)]
      "
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r ${accent}`} />

      {/* Icon */}
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 ${iconBg}`}>
        {icon}
      </div>

      {/* Name */}
      <div className="text-[13px] font-bold leading-tight">{name}</div>

      {/* Description */}
      <div className="text-[11px] text-ikea-muted leading-relaxed flex-1">{desc}</div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 mt-auto">
        <span className={`text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full font-mono ${tagColor}`}>
          {tag}
        </span>
        <ArrowRight
          className="w-4 h-4 text-ikea-dim transition-all duration-150 group-hover:text-ikea-yellow group-hover:translate-x-1"
          strokeWidth={2}
        />
      </div>
    </a>
  )
}
