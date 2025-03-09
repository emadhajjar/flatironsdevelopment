import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import pluginReact from "@eslint-react/eslint-plugin";
import pluginJs from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";
import tsEslintParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import depend from "eslint-plugin-depend";
import pluginESx from "eslint-plugin-es-x";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import html from "eslint-plugin-html";
import pluginImportX from "eslint-plugin-import-x";
import json from "eslint-plugin-json";
import jsxA11y from "eslint-plugin-jsx-a11y";
import noSecrets from "eslint-plugin-no-secrets";
import perfectionist from "eslint-plugin-perfectionist";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginSecurity from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
// import tailwind from "eslint-plugin-tailwindcss";
import testingLibrary from "eslint-plugin-testing-library";
import turbo from "eslint-plugin-turbo";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import workspaces from "eslint-plugin-workspaces";
import globals from "globals";
import tsEslint from "typescript-eslint";

export const eslintConfig = tsEslint.config(
  {
    ignores: ["**/node_modules", "**/dist", "**/*.gen.ts"],
  },
  eslintPlugin.configs["flat/recommended"],
  pluginJs.configs.recommended,
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.typescript,
  perfectionist.configs["recommended-natural"],
  pluginESx.configs["flat/no-new-in-esnext"],
  depend.configs["flat/recommended"],
  eslintPluginUnicorn.configs["flat/recommended"],
  sonarjs.configs.recommended,
  pluginSecurity.configs.recommended,
  comments.recommended,
  ...tsEslint.configs.strict,
  ...tsEslint.configs.stylistic,
  // ...tailwind.configs["flat/recommended"],
  ...pluginQuery.configs["flat/recommended"],
  ...pluginRouter.configs["flat/recommended"],
  {
    files: ["**/*.html"],
    plugins: { html },
  },
  {
    files: ["**/*.json"],
    ...json.configs["recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["eslint.js"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: tsEslintParser,
      sourceType: "module",
    },
  },
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    ...testingLibrary.configs["flat/dom"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...pluginReact.configs.recommended,
    languageOptions: {
      parser: tsEslintParser,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...jsxA11y.flatConfigs.recommended,
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "no-secrets": noSecrets,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      turbo,
      "unused-imports": unusedImports,
      workspaces,
    },
    rules: {
      ...workspaces.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-extraneous-class": "off",
      "import-x/default": "off",
      "import-x/no-named-as-default-member": "off",
      "jsx-a11y/click-events-have-key-events": "warn",
      "no-secrets/no-secrets": "error",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": "off",
      "sonarjs/no-commented-code": "warn",
      "sonarjs/todo-tag": "warn",
      "tailwindcss/no-custom-classname": "off",
      "unicorn/filename-case": "off",
      "unicorn/prevent-abbreviations": "warn",
      "unused-imports/no-unused-imports": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  eslintConfigPrettier,
);
