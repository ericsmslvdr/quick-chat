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
      '@hooks': '/src/hooks',
      '@contexts': '/src/contexts',
      '@assets': '/src/assets',
      '@containers': '/src/containers'
    }
  }
})
