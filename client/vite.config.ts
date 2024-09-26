import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@libs': '/src/libs',
      '@providers': '/src/providers',
      '@assets': '/src/assets',
      '@containers': '/src/containers'
    }
  }
})
