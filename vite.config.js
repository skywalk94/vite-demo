import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtovw from 'postcss-px-to-viewport'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        pxtovw({
          // 更多配置参考：https://github.com/evrone/postcss-px-to-viewport
          viewportWidth: 750, // 设计稿宽度
          unitPrecision: 2, // 保留小数点后2位
          exclude: [/node_modules/], //忽略哪些文件转换
        })
      ]
    }
  },
})
