// types/vue-shims.d.ts

// Este módulo declara para o TypeScript como lidar com arquivos `.vue`
// quando eles são importados dentro de arquivos TypeScript (.ts ou .tsx).

declare module '*.vue' {
  // Importa o tipo base de componente do Vue 3
  import { DefineComponent } from 'vue';

  // Define que qualquer arquivo .vue exporta um componente Vue padrão
  const component: DefineComponent<{}, {}, any>;

  // Exporta esse componente como default
  export default component;
}
