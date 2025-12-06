module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // colors: {
      //   brand: {
      //     50: '#f3f7ff',
      //     100: '#e6f0ff',
      //     500: '#2563eb', 
      //   },
        
      //   ui: {
      //     bg: '#f1f6fb',
      //     card: '#ffffff',
      //     muted: '#6b7280'
      //   },
      //   accent: {
      //     green: '#10b981',
      //     orange: '#f59e0b',
      //   }
      // },
      // borderRadius: {
      //   lgcard: '12px',
      //   xlcard: '16px'
      // },
      // boxShadow: {
      //   soft: '0 6px 20px rgba(22, 27, 37, 0.06)'
      // }
      fontFamily: {
        heading: ['"Fixel Display"', 'sans-serif'], // для заголовков
        body: ['"Open Sans"', 'sans-serif'],        // для обычного текста
      },
    },
    
  },
  plugins: [],
}
