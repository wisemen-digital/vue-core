// vite.config.ts
import { resolve } from "node:path";
import vue from "file:///Users/robbe/work/2024/vue-core/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.2_lightningcss@1.27.0_sass@1.77.5__vue@3.4.35_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///Users/robbe/work/2024/vue-core/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.2_lightningcss@1.27.0_sass@1.77.5/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/robbe/work/2024/vue-core/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.2_rollup@4.24.0_typescript@5.4.5_vite@5.3.1_@types+no_d5uatkwoos2wihitv7burungji/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/robbe/work/2024/vue-core/packages/components";
var projectRootDir = resolve(__vite_injected_original_dirname);
var vite_config_default = defineConfig({
  build: {
    lib: {
      name: "vue-core",
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      fileName: "index"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library (Vue)
      external: [
        "vue",
        "vue-i18n",
        "vue-router",
        "zod",
        "reka-ui"
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "reka-ui": "RekaUI",
          "vue": "Vue",
          "vue-i18n": "VueI18n",
          "vue-router": "VueRouter",
          "zod": "Zod"
        }
      }
    }
  },
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
      exclude: [
        "src/test/**",
        "src/**/story/**",
        "src/**/*.story.vue"
      ],
      tsconfigPath: "tsconfig.build.json"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcm9iYmUvd29yay8yMDI0L3Z1ZS1jb3JlL3BhY2thZ2VzL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yb2JiZS93b3JrLzIwMjQvdnVlLWNvcmUvcGFja2FnZXMvY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcm9iYmUvd29yay8yMDI0L3Z1ZS1jb3JlL3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuY29uc3QgcHJvamVjdFJvb3REaXIgPSByZXNvbHZlKF9fZGlybmFtZSlcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBuYW1lOiAndnVlLWNvcmUnLFxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5IChWdWUpXG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAnem9kJyxcbiAgICAgICAgJ3Jla2EtdWknLFxuICAgICAgXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBQcm92aWRlIGdsb2JhbCB2YXJpYWJsZXMgdG8gdXNlIGluIHRoZSBVTUQgYnVpbGRcbiAgICAgICAgLy8gZm9yIGV4dGVybmFsaXplZCBkZXBzXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICAncmVrYS11aSc6ICdSZWthVUknLFxuICAgICAgICAgICd2dWUnOiAnVnVlJyxcbiAgICAgICAgICAndnVlLWkxOG4nOiAnVnVlSTE4bicsXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXInOiAnVnVlUm91dGVyJyxcbiAgICAgICAgICAnem9kJzogJ1pvZCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBkdHMoe1xuICAgICAgY2xlYW5WdWVGaWxlTmFtZTogdHJ1ZSxcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ3NyYy90ZXN0LyoqJyxcbiAgICAgICAgJ3NyYy8qKi9zdG9yeS8qKicsXG4gICAgICAgICdzcmMvKiovKi5zdG9yeS52dWUnLFxuICAgICAgXSxcbiAgICAgIHRzY29uZmlnUGF0aDogJ3RzY29uZmlnLmJ1aWxkLmpzb24nLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShwcm9qZWN0Um9vdERpciwgJ3NyYycpLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyVSxTQUFTLGVBQWU7QUFFblcsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU16QyxJQUFNLGlCQUFpQixRQUFRLGdDQUFTO0FBR3hDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUEsTUFHYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQTtBQUFBLFFBR04sU0FBUztBQUFBLFVBQ1AsV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFVBQ1AsWUFBWTtBQUFBLFVBQ1osY0FBYztBQUFBLFVBQ2QsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLE1BQ2xCLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxnQkFBZ0IsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
