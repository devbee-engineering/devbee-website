import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // ✅ correct since repo name is devbee
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
