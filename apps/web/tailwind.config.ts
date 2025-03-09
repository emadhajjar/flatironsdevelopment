import type { Config } from 'tailwindcss';

import tailwindcssForms from '@tailwindcss/forms';
import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [tailwindcssAnimated, tailwindcssForms],
  theme: {},
} satisfies Config;
