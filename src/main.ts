// --------------------------------------
// 📦 Importações principais do Vue
// --------------------------------------
import { createApp } from 'vue'

// --------------------------------------
// 🧩 Componente principal da aplicação
// --------------------------------------
import App from './App.vue'

// --------------------------------------
// 🎨 Estilos globais
// --------------------------------------
import './style.css'
import './assets/main.css'

// --------------------------------------
// ⭐ FontAwesome (ícones específicos)
// --------------------------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSort,     // Ícone de ordenação genérica
  faSortUp,   // Ícone de ordenação crescente
  faSortDown  // Ícone de ordenação decrescente
} from '@fortawesome/free-solid-svg-icons'

// Adiciona apenas os ícones necessários à biblioteca FontAwesome
library.add(faSort, faSortUp, faSortDown)

// --------------------------------------
// 🚀 Inicialização da aplicação Vue
// --------------------------------------
const app = createApp(App)

// Registra o componente de ícone globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

// Monta a aplicação no elemento com ID 'app'
app.mount('#app')
