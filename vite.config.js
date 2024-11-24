import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://attendanceappadminportal.onrender.com/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''), // Optional: removes `/api` from the path
            },
        },
    },

})