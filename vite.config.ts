import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router'],
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for core React libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
          }
          // Separate chunk for router
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          // Separate chunk for Radix UI components
          if (id.includes('node_modules/@radix-ui')) {
            return 'radix-ui';
          }
          // Separate chunk for framer-motion
          if (id.includes('node_modules/framer-motion')) {
            return 'motion';
          }
          // Separate chunk for lucide icons
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
          // Convex in separate chunk
          if (id.includes('node_modules/convex')) {
            return 'convex';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    // Enable asset inlining for small files
    assetsInlineLimit: 4096,
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
