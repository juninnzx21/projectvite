<script setup>
/**
 * Importações
 */
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/**
 * Propriedades esperadas pelo componente:
 * - column: a coluna atual do ícone
 * - sortColumn: a coluna que está sendo ordenada
 * - sortAsc: se a ordenação é ascendente ou descendente
 */
const props = defineProps({
  column: { type: String, required: true },
  sortColumn: { type: String, required: true },
  sortAsc: { type: Boolean, required: true }
})

/**
 * Computed property que define o ícone a ser exibido:
 * - 'sort' se a coluna atual não for a ordenada
 * - 'sort-up' se estiver ordenando de forma ascendente
 * - 'sort-down' se estiver ordenando de forma descendente
 */
const iconName = computed(() => {
  const isCurrentSortedColumn = props.sortColumn === props.column

  if (!isCurrentSortedColumn) return 'sort'
  return props.sortAsc ? 'sort-up' : 'sort-down'
})
</script>

<template>
  <!-- Ícone da ordenação usando FontAwesome -->
  <font-awesome-icon
    :icon="iconName"
    class="ml-1 text-sm"
    aria-hidden="true"
  />
</template>
