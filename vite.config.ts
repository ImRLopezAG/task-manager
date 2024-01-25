import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import path from 'path'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [million.vite({ auto: true }), TanStackRouterVite(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@components': path.resolve(__dirname, './src/app/components'),
      '@ui': path.resolve(__dirname, './src/app/components/ui'),
      '@hooks': path.resolve(__dirname, './src/app/hooks'),
      '@libs': path.resolve(__dirname, './src/lib'),
      '@type': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  }
})
