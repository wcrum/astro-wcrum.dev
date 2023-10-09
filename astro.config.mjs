import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://wcrum.dev',
  integrations: [
    icon({
      include: {
        mdi: ["*"], // Loads entire Material Design Icon set
        'line-md': ["*"],
        tabler: ['rv-truck']
      },
    }),
  ],
});
