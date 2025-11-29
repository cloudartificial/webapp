import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'YOUR-REPO-NAME' with your actual GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: 'webapp', 
})