import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import Alternator from "alternator";
const timestamp = new Date().getTime();

export default defineConfig({
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        chunkFileNames: `js/${timestamp}-[hash].js`,
        entryFileNames: `js/${timestamp}-[hash].js`,
        assetFileNames: `assets/${timestamp}-[hash].[ext]`,
      },
    },
  },
  plugins: [
    react(),
    Alternator({
      injectFile: "src/index.jsx",
      routerDir: "src/pages", // 扫描的文件夹
      ext: ".jsx", // 文件后缀
      separateFile: ["authorize.jsx"], // 单独层级文件
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: true,
    port: 3010,
  },
});
