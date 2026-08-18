import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/test-project/",
  },

  tanstackStart: {
    server: { entry: "server" },
  },

  nitro: {
    preset: "node-server",
  },
});