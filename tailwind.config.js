/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'crossLines': 'repeating-linear-gradient(to bottom right, #334155 0px, #334155 2.5px, #0f172a 2.5px, #0f172a 5px)',
        'conicGradient70': 'conic-gradient(#F76B8A 70%, #9cacaf 30%)',
        'conicGradient75': 'conic-gradient(#F76B8A 75%, #9cacaf 25%)',
        'conicGradient80': 'conic-gradient(#F76B8A 80%, #9cacaf 20%)',
        'conicGradient85': 'conic-gradient(#F76B8A 85%, #9cacaf 15%)',
        'conicGradient90': 'conic-gradient(#F76B8A 90%, #9cacaf 10%)',
        

      },
      colors: {
        'iconColor': '#F76B8A',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'roll': 'rolling 2s ease-in-out',
        'move': 'moving 2s ease-in-out',
        'rotateY': 'rotateY 0.8s ease-in-out forwards',
        'rotateYReverse': 'rotateY 0.8s ease-in-out forwards',
      },
      keyframes: {
        spin: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        rolling: {
          '0%': {transform: 'translateX(-100%) rotate(-360deg)'},
          '100%': {transform: 'translateX(0) rotate(0)'},
        },
        moving: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' }
        },
        rotateYReverse: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' }
        },
      }
    },
  },

  variants: {
    scrollBehavior: ['responsive'],
  },

  plugins: [],
}

