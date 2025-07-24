/// <reference types="vite/client" />

/**
 * Esse arquivo serve para o TypeScript entender as variáveis globais
 * injetadas pelo Vite durante o processo de build.
 *
 * Com isso, podemos usar `import.meta.env` com autocompletar e verificação de tipos.
 *
 * Exemplo de uso:
 *   const apiUrl = import.meta.env.VITE_API_URL;
 *
 * Se quiser personalizar os tipos, crie ou edite um arquivo chamado `env.d.ts`:
 *   declare interface ImportMetaEnv {
 *     readonly VITE_API_URL: string;
 *   }
 *   interface ImportMeta {
 *     readonly env: ImportMetaEnv;
 *   }
 */
