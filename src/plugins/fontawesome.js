// Importa a biblioteca central do FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'

// Importa o componente Vue para usar os ícones no template
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa apenas os ícones necessários para otimização de bundle
import {
  faSort,      // Ícone de ordenação padrão
  faSortUp,    // Ícone de ordenação ascendente
  faSortDown   // Ícone de ordenação descendente
} from '@fortawesome/free-solid-svg-icons'

// Adiciona os ícones importados à biblioteca global do FontAwesome
library.add(faSort, faSortUp, faSortDown)

// Exporta o componente para ser registrado globalmente no Vue
export { FontAwesomeIcon }
