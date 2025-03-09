import type { Config } from "prettier";
import type { PluginEmbedOptions } from "prettier-plugin-embed";
import type { SqlBaseOptions } from "prettier-plugin-sql";
import type { PluginOptions as TailwindcssOptions } from "prettier-plugin-tailwindcss";

type PrettierConfig = Config &
  PluginEmbedOptions &
  SortJsonOptions &
  SqlBaseOptions &
  TailwindcssOptions;

type SortJsonOptions = Record<string, any>;

const config: Config = {
  // arrowParens: 'always',
  experimentalTernaries: true,
  jsxSingleQuote: true,
  // trailingComma: 'all',
  plugins: [
    "prettier-plugin-embed",
    "prettier-plugin-prisma",
    "prettier-plugin-sort-json",
    "prettier-plugin-sql",
    "prettier-plugin-tailwindcss",
  ],
  printWidth: 100,
  // semi: true,
  singleQuote: true,
  // tabWidth: 2,
};

const prettierPluginEmbedConfig: PluginEmbedOptions = {
  embeddedSqlTags: ["sql"],
};

const prettierPluginSortJsonConfig: SortJsonOptions = {
  jsonRecursiveSort: true,
};

const prettierPluginSqlConfig: SqlBaseOptions = {
  keywordCase: "upper",
  language: "postgresql",
};

const prettierPluginTailwindcssConfig: TailwindcssOptions = {
  tailwindFunctions: ["clsx"],
};

export const prettierConfig: PrettierConfig = {
  ...config,
  ...prettierPluginEmbedConfig,
  ...prettierPluginSortJsonConfig,
  ...prettierPluginSqlConfig,
  ...prettierPluginTailwindcssConfig,
};
