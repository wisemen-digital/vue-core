// vite.config.ts
import { resolve } from "node:path";
import vue from "file:///Users/kirylmaltsav/Workspace/wisemen/vue-core/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.10_vue@3.4.26/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///Users/kirylmaltsav/Workspace/wisemen/vue-core/node_modules/.pnpm/vite@5.2.10_@types+node@18.19.31_sass@1.75.0/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/kirylmaltsav/Workspace/wisemen/vue-core/node_modules/.pnpm/vite-plugin-dts@3.9.0_@types+node@18.19.31_typescript@5.4.5_vite@5.2.10/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/kirylmaltsav/Workspace/wisemen/vue-core/packages/components";
var projectRootDir = resolve(__vite_injected_original_dirname);
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      fileName: "index",
      name: "vue-core"
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library (Vue)
      external: [
        "vue",
        "vue-i18n",
        "vue-router",
        "zod",
        "radix-vue"
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "radix-vue": "radixVue",
          "vue": "Vue",
          "vue-i18n": "VueI18n",
          "vue-router": "VueRouter",
          "zod": "zod"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2lyeWxtYWx0c2F2L1dvcmtzcGFjZS93aXNlbWVuL3Z1ZS1jb3JlL3BhY2thZ2VzL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9raXJ5bG1hbHRzYXYvV29ya3NwYWNlL3dpc2VtZW4vdnVlLWNvcmUvcGFja2FnZXMvY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMva2lyeWxtYWx0c2F2L1dvcmtzcGFjZS93aXNlbWVuL3Z1ZS1jb3JlL3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuY29uc3QgcHJvamVjdFJvb3REaXIgPSByZXNvbHZlKF9fZGlybmFtZSlcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgICAgbmFtZTogJ3Z1ZS1jb3JlJyxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5IChWdWUpXG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAnem9kJyxcbiAgICAgICAgJ3JhZGl4LXZ1ZScsXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIFByb3ZpZGUgZ2xvYmFsIHZhcmlhYmxlcyB0byB1c2UgaW4gdGhlIFVNRCBidWlsZFxuICAgICAgICAvLyBmb3IgZXh0ZXJuYWxpemVkIGRlcHNcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICdyYWRpeC12dWUnOiAncmFkaXhWdWUnLFxuICAgICAgICAgICd2dWUnOiAnVnVlJyxcbiAgICAgICAgICAndnVlLWkxOG4nOiAnVnVlSTE4bicsXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXInOiAnVnVlUm91dGVyJyxcbiAgICAgICAgICAnem9kJzogJ3pvZCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBkdHMoe1xuICAgICAgY2xlYW5WdWVGaWxlTmFtZTogdHJ1ZSxcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ3NyYy90ZXN0LyoqJyxcbiAgICAgICAgJ3NyYy8qKi9zdG9yeS8qKicsXG4gICAgICAgICdzcmMvKiovKi5zdG9yeS52dWUnLFxuICAgICAgXSxcbiAgICAgIHRzY29uZmlnUGF0aDogJ3RzY29uZmlnLmJ1aWxkLmpzb24nLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShwcm9qZWN0Um9vdERpciwgJ3NyYycpLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3WCxTQUFTLGVBQWU7QUFFaFosT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU16QyxJQUFNLGlCQUFpQixRQUFRLGdDQUFTO0FBR3hDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUEsTUFHYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQTtBQUFBLFFBR04sU0FBUztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFVBQ1AsWUFBWTtBQUFBLFVBQ1osY0FBYztBQUFBLFVBQ2QsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLE1BQ2xCLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxnQkFBZ0IsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
