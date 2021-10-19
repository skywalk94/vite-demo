import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import path from "path"

export default defineConfig({
    plugins: [vue(),
    styleImport({
        libs: [
            {
                libraryName: 'vant',
                esModule: true,
                resolveStyle: (name) => `vant/es/${name}/style`,
            },
        ],
    }),
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