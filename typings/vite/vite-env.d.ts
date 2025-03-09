/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnvironment;
}

interface ImportMetaEnvironment {
  readonly API_URL: string;
}
