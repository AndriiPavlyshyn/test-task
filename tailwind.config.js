/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    borderRadius: {
      DEFAULT: 'var(--radius)',
      lg: 'var(--radius-lg)'
    },
    fontFamily: {
      inter: 'var(--font-inter)'
    },
    boxShadow: {
      DEFAULT: '0 0 24px 0 rgba(139, 139, 139, 0.25)',
      panel: '0 0 7px 0 rgba(165, 165, 165, 0.25)'
    },
    colors: {
      // Accent
      'accent': 'rgb(var(--color-accent) / <alpha-value>)',
      
      'grey': 'rgb(var(--color-grey) / <alpha-value>)',
      'white': 'var(--color-white)',
    },
    container: {
      padding: '15px',
      screens: {
        xl: '1320px'
      }
    },
    screens: {
      'mobile-small': '320px',
      'mobile-medium': '375px',
      'mobile-large': '480px',
      'tablet': '640px',
      'tablet-medium': '768px',
      'tablet-large': '960px',
      'laptop': '1200px',
      'desktop': '1440px',
    },
    fontSize: {
      'px9': 'var(--px-9)',
      'px10': 'var(--px-10)',
      'px11': 'var(--px-11)',
      'px12': 'var(--px-12)',
      'px13': 'var(--px-13)',
      'px14': 'var(--px-14)',
      'px15': 'var(--px-15)',
      'px16': 'var(--px-16)',
      'px20': 'var(--px-20)',
    }
  },
  plugins: [],
}

