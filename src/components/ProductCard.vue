<script setup lang="ts">
/**
 * Interface que define a estrutura de um produto
 */
interface Produto {
  id: number
  nome: string
  descricao: string
  preco: number
}

// Define as props recebidas pelo componente
const props = defineProps<{
  produto: Produto
}>()

/**
 * Função utilitária para formatar um valor numérico em moeda BRL
 * @param valor - número a ser formatado
 * @returns string formatada no padrão R$ 0,00
 */
const formatarPreco = (valor: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)
}
</script>

<template>
  <!-- Cartão de exibição do produto -->
  <div class="border p-4 rounded shadow bg-white">
    <!-- Nome do produto -->
    <h2 class="text-xl font-bold text-gray-800">
      {{ props.produto.nome }}
    </h2>

    <!-- Descrição do produto -->
    <p class="text-gray-600 mt-1">
      {{ props.produto.descricao }}
    </p>

    <!-- Preço formatado do produto -->
    <p class="text-green-600 font-semibold mt-3">
      {{ formatarPreco(props.produto.preco) }}
    </p>
  </div>
</template>
