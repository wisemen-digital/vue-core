// vite.config.ts
import { resolve } from "node:path";
import vue from "file:///Users/wouter/Documents/Documenten%20-%20Laptop%20van%20Wouter/Wisemen/Libraries/wisemen-vue-core/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_vue@3.4.29/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///Users/wouter/Documents/Documenten%20-%20Laptop%20van%20Wouter/Wisemen/Libraries/wisemen-vue-core/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.5/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/wouter/Documents/Documenten%20-%20Laptop%20van%20Wouter/Wisemen/Libraries/wisemen-vue-core/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.5_typescript@5.4.5_vite@5.3.1/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/wouter/Documents/Documenten - Laptop van Wouter/Wisemen/Libraries/wisemen-vue-core/packages/query";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd291dGVyL0RvY3VtZW50cy9Eb2N1bWVudGVuIC0gTGFwdG9wIHZhbiBXb3V0ZXIvV2lzZW1lbi9MaWJyYXJpZXMvd2lzZW1lbi12dWUtY29yZS9wYWNrYWdlcy9xdWVyeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3dvdXRlci9Eb2N1bWVudHMvRG9jdW1lbnRlbiAtIExhcHRvcCB2YW4gV291dGVyL1dpc2VtZW4vTGlicmFyaWVzL3dpc2VtZW4tdnVlLWNvcmUvcGFja2FnZXMvcXVlcnkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3dvdXRlci9Eb2N1bWVudHMvRG9jdW1lbnRlbiUyMC0lMjBMYXB0b3AlMjB2YW4lMjBXb3V0ZXIvV2lzZW1lbi9MaWJyYXJpZXMvd2lzZW1lbi12dWUtY29yZS9wYWNrYWdlcy9xdWVyeS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5cbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5jb25zdCBwcm9qZWN0Um9vdERpciA9IHJlc29sdmUoX19kaXJuYW1lKVxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIG5hbWU6ICd2dWUtY29yZS1xdWVyeScsXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gbWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIGRlcHMgdGhhdCBzaG91bGRuJ3QgYmUgYnVuZGxlZFxuICAgICAgLy8gaW50byB5b3VyIGxpYnJhcnkgKFZ1ZSlcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBQcm92aWRlIGdsb2JhbCB2YXJpYWJsZXMgdG8gdXNlIGluIHRoZSBVTUQgYnVpbGRcbiAgICAgICAgLy8gZm9yIGV4dGVybmFsaXplZCBkZXBzXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHRzKHtcbiAgICAgIGNsZWFuVnVlRmlsZU5hbWU6IHRydWUsXG4gICAgICBleGNsdWRlOiBbXG4gICAgICAgICdzcmMvdGVzdC8qKicsXG4gICAgICAgICdzcmMvKiovc3RvcnkvKionLFxuICAgICAgICAnc3JjLyoqLyouc3RvcnkudnVlJyxcbiAgICAgIF0sXG4gICAgICB0c2NvbmZpZ1BhdGg6ICd0c2NvbmZpZy5idWlsZC5qc29uJyxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHJlc29sdmUocHJvamVjdFJvb3REaXIsICdzcmMnKSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa2YsU0FBUyxlQUFlO0FBRTFnQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU0saUJBQWlCLFFBQVEsZ0NBQVM7QUFHeEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUE7QUFBQSxNQUdiLFVBQVU7QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQSxRQUdOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxNQUNsQixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEsZ0JBQWdCLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
