import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@configs': '/src/configs',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@contexts': '/src/contexts',
      '@routes': '/src/routes',
    },
  },
})
