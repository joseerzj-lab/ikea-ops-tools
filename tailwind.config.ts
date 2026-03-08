import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // IKEA Ops brand tokens
        ikea: {
          bg:        '#0d1117',
          surface:   '#161b22',
          surface2:  '#1c2128',
          surface3:  '#22272e',
          border:    '#30363d',
          border2:   '#3d444d',
          blue:      '#0051BA',
          'blue-dark': '#003A8C',
          'blue-mid':  '#1a6dd4',
          yellow:    '#FFDA1A',
          green:     '#3fb950',
          red:       '#f85149',
          orange:    '#f0883e',
          purple:    '#a371f7',
          teal:      '#00c48c',
          text:      '#e6edf3',
          muted:     '#8b949e',
          dim:       '#656d76',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'fade-up':   'fadeUp 0.5s ease both',
        'fade-in':   'fadeIn 0.3s ease both',
        'slide-up':  'slideUp 0.2s cubic-bezier(0.16,1,0.3,1) both',
        'glow-pulse':'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px) scale(0.97)' },
          to:   { opacity: '1', transform: 'none' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,81,186,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,81,186,.04) 1px, transparent 1px)',
        'header-gradient': 'linear-gradient(135deg, #003A8C, #0051BA 55%, #1a6dd4)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      borderRadius: {
        'xl2': '12px',
      },
    },
  },
  plugins: [],
} satisfies Config
