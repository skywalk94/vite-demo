import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import path from "path"

export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            resolves: [VantResolve()],
        })
    ],
    alias: {
        "@": path.resolve(__dirname, "src")
    },
    base: './',
    server: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
})