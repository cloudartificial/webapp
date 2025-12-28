import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// UPDATED: Set base to '/' for custom domain (removed /webapp/)
export default defineConfig({
  plugins: [react()],
  base: '/', 
})