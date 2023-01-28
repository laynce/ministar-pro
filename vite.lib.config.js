import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(() => {
  return {
    base: './',
    build: {
      outDir: 'lib',
      minify: false,
      lib: {
        entry: resolve(__dirname, 'index.js'),
        name: 'myLib',
        formats: ["es"],
        // the proper extensions will be added
        fileName: 'my-lib',
        
      }
    },
  }
})