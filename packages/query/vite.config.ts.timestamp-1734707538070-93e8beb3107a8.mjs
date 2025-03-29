// vite.config.ts
import { resolve } from "node:path";
import vue from "file:///Users/wouter/Documents/Wisemen/Libraries/wisemen-vue-core/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_vue@3.4.29/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///Users/wouter/Documents/Wisemen/Libraries/wisemen-vue-core/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.5/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/wouter/Documents/Wisemen/Libraries/wisemen-vue-core/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.5_typescript@5.4.5_vite@5.3.1/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/wouter/Documents/Wisemen/Libraries/wisemen-vue-core/packages/query";
var projectRootDir = resolve(__vite_injected_original_dirname);
var vite_config_default = defineConfig({
  build: {
    lib: {
      name: "vue-core-query",
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      fileName: "index"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library (Vue)
      external: [
        "vue"
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd291dGVyL0RvY3VtZW50cy9XaXNlbWVuL0xpYnJhcmllcy93aXNlbWVuLXZ1ZS1jb3JlL3BhY2thZ2VzL3F1ZXJ5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvd291dGVyL0RvY3VtZW50cy9XaXNlbWVuL0xpYnJhcmllcy93aXNlbWVuLXZ1ZS1jb3JlL3BhY2thZ2VzL3F1ZXJ5L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy93b3V0ZXIvRG9jdW1lbnRzL1dpc2VtZW4vTGlicmFyaWVzL3dpc2VtZW4tdnVlLWNvcmUvcGFja2FnZXMvcXVlcnkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuY29uc3QgcHJvamVjdFJvb3REaXIgPSByZXNvbHZlKF9fZGlybmFtZSlcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBuYW1lOiAndnVlLWNvcmUtcXVlcnknLFxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5IChWdWUpXG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAndnVlJyxcbiAgICAgIF0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gUHJvdmlkZSBnbG9iYWwgdmFyaWFibGVzIHRvIHVzZSBpbiB0aGUgVU1EIGJ1aWxkXG4gICAgICAgIC8vIGZvciBleHRlcm5hbGl6ZWQgZGVwc1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICBjbGVhblZ1ZUZpbGVOYW1lOiB0cnVlLFxuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAnc3JjL3Rlc3QvKionLFxuICAgICAgICAnc3JjLyoqL3N0b3J5LyoqJyxcbiAgICAgICAgJ3NyYy8qKi8qLnN0b3J5LnZ1ZScsXG4gICAgICBdLFxuICAgICAgdHNjb25maWdQYXRoOiAndHNjb25maWcuYnVpbGQuanNvbicsXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiByZXNvbHZlKHByb2plY3RSb290RGlyLCAnc3JjJyksXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZZLFNBQVMsZUFBZTtBQUVyYSxPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU0saUJBQWlCLFFBQVEsZ0NBQVM7QUFHeEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUE7QUFBQSxNQUdiLFVBQVU7QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQSxRQUdOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsZ0JBQWdCLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
