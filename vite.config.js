import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  server: {
    host: true,       // exposes to LAN
    port: 5173,       // your chosen port
    strictPort: true, // optional: prevent auto-changing port
  },
};

