import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  process.env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      API_URL: `"${process.env.API_URL}"`,
    },
    plugins: [
      TanStackRouterVite({ autoCodeSplitting: true, target: 'react' }),
      tailwindcss(),
      tsconfigPaths(),
      viteReact(),
    ],
    server: {
      port: Number(process.env.WEB_PORT),
    },
  };
});
