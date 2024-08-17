import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy  } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/hero/',
          dest: '', 
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets', 
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]', 
      },
    },
  },
});