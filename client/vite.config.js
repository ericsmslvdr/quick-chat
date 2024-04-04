import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@config': '/src/config',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@providers': '/src/providers',
    },
  },
})
