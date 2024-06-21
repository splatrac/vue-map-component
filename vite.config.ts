import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "es",
    minify: false,
    rollupOptions: {
        external: ['vue'],
        input: ['src/index.ts'],
        output: {
            globals: {
                vue: "Vue"
            },
            dir: "dist",
        },
    },
    lib: {
      entry: 'src/index.ts',
      name: 'vue-map-component',
      fileName: 'vue-map-component',
      formats: ['es', 'umd', 'cjs'],
    },
  },
  plugins: [vue()],
});
