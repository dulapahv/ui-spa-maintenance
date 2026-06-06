import { defineConfig } from "vitest/config";

// Served from a subpath (dulapahv.dev/maintenance), so every asset URL must be
// prefixed with /maintenance/ — otherwise the browser would request assets from
// the domain root, outside this Worker's route.
export default defineConfig({
  base: "/maintenance/",
  test: {
    environment: "jsdom",
  },
});
