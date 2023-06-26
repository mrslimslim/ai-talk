import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "@vueuse/core", "pinia"],
      dts: "src/auto-imports.d.ts",
      vueTemplate: true,
      dirs: ["src/hooks"],
    }),
    Unocss(),
  ],
  resolve: {
    alias: {
      // @映射src目录
      "@": "/src",
    },
  },
});
