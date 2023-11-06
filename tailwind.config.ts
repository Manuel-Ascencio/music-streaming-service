import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#92abcf',
        darkBlue: '#0a192f',
        skyBlue: '#00bfff',
        white: '#ccd6f6'
      }
    }
  },
  plugins: []
}
export default config
