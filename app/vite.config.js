import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue': 'vue/dist/vue.esm-bundler.js',//Add this for runtime compiler
        '@': path.resolve(__dirname, './src'),
      },
  },
  server: {
      host: true,
      port: 3005
  }
})
