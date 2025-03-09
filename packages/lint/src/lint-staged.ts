import type { Configuration } from 'lint-staged';

export const lintStagedConfig: Configuration = {
  '**/*.(md|json)': ['yarn prettier --write'],
  // '**/*.(ts|tsx)': ['tsc --skipLibCheck --noEmit'],
  '**/*.{js,ts,jsx,tsx}': ['prettier --list-different', 'eslint'],
};
