import type { Configuration } from 'lint-staged';

export const lintStagedConfig: Configuration = {
  '**/*.(md|json)': ['yarn prettier --write'],
  '**/*.(ts|tsx)': ['yarn web check-types'],
  '**/*.{js,ts,jsx,tsx}': ['prettier --list-different', 'eslint'],
};
