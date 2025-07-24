<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Título principal -->
      <h1 class="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        🛒 Lista de Produtos
      </h1>

      <!-- Campo de busca -->
      <div class="mb-12 flex justify-center">
        <input
          v-model="search"
          @input="fetchProdutos"
          type="text"
          placeholder="🔍 Buscar produto..."
          class="w-2/4 max-w-sm px-4 py-3 rounded-xl shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Buscar produto"
        />
      </div>

      <!-- Estado de carregamento ou erro -->
      <div v-if="loading" class="text-center text-blue-600 text-lg mb-4">
        🔄 Carregando...
      </div>

      <div v-else-if="error" class="text-center text-red-600 text-lg mb-4">
        ❌ Erro ao carregar produtos
      </div>
      <br>
      <!-- Tabela de produtos -->
      <div
        class="overflow-x-auto bg-white shadow-lg border border-gray-300 rounded-xl mt-8"
        role="region"
        aria-live="polite"
      >
        <table class="table-auto w-full border-collapse text-sm border border-gray-300">
          <!-- Cabeçalho da tabela com ordenação -->
          <thead class="bg-blue-600 text-white">
            <tr>
              <th
                scope="col"
                class="border px-4 py-2 text-left cursor-pointer select-none"
                @click="sortBy('id')"
                @keydown.enter.prevent="sortBy('id')"
                tabindex="0"
                aria-sort="none"
              >
                ID
                <SortIcon :column="'id'" :sortColumn="sortColumn" :sortAsc="sortAsc" />
              </th>

              <th
                scope="col"
                class="border px-4 py-2 text-left cursor-pointer select-none"
                @click="sortBy('nome')"
                @keydown.enter.prevent="sortBy('nome')"
                tabindex="0"
              >
                Nome
                <SortIcon :column="'nome'" :sortColumn="sortColumn" :sortAsc="sortAsc" />
              </th>

              <th
                scope="col"
                class="border px-4 py-2 text-left cursor-pointer select-none"
                @click="sortBy('preco')"
                @keydown.enter.prevent="sortBy('preco')"
                tabindex="0"
              >
                Preço
                <SortIcon :column="'preco'" :sortColumn="sortColumn" :sortAsc="sortAsc" />
              </th>

              <th
                scope="col"
                class="border px-4 py-2 text-left cursor-pointer select-none"
                @click="sortBy('categoria')"
                @keydown.enter.prevent="sortBy('categoria')"
                tabindex="0"
              >
                Categoria
                <SortIcon :column="'categoria'" :sortColumn="sortColumn" :sortAsc="sortAsc" />
              </th>
            </tr>
          </thead>

          <!-- Corpo da tabela com produtos -->
          <tbody>
            <tr
              v-for="produto in sortedProdutos"
              :key="produto.id"
              class="hover:bg-blue-50 transition-colors"
            >
              <td class="border px-4 py-2">{{ produto.id }}</td>
              <td class="border px-4 py-2">{{ produto.nome }}</td>
              <td class="border px-4 py-2">
                R$ {{ Number(produto.preco).toFixed(2) }}
              </td>
              <td class="border px-4 py-2">{{ produto.categoria }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Mensagem quando nenhum produto for encontrado -->
        <div
          v-if="!produtos.length && !loading && !error"
          class="p-6 text-center text-gray-500"
        >
          Nenhum produto encontrado.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
 * Composable API do Vue 3
 */
import { ref, computed, onMounted } from 'vue'
import SortIcon from './components/SortIcon.vue' // Ícone de ordenação (ajuste o caminho se necessário)

/*
 * Estados reativos
 */
const produtos = ref([])               // Lista de produtos
const search = ref('')                // Campo de busca
const loading = ref(false)           // Estado de carregamento
const error = ref(false)             // Estado de erro
const sortColumn = ref('id')         // Coluna atual de ordenação
const sortAsc = ref(true)            // Direção da ordenação

/*
 * Função para buscar os produtos na API
 */
async function fetchProdutos() {
  loading.value = true
  error.value = false

  try {
    const baseURL = 'https://api.juninnzxtec.com.br/api/produtos.php'
    const url = search.value
      ? `${baseURL}?search=${encodeURIComponent(search.value)}`
      : baseURL

    const response = await fetch(url)
    if (!response.ok) throw new Error('Erro na requisição')

    produtos.value = await response.json()
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

/*
 * Função para alterar a ordenação
 */
function sortBy(coluna) {
  if (sortColumn.value === coluna) {
    sortAsc.value = !sortAsc.value
  } else {
    sortColumn.value = coluna
    sortAsc.value = true
  }
}

/*
 * Computed para ordenar os produtos
 */
const sortedProdutos = computed(() => {
  return [...produtos.value].sort((a, b) => {
    let valA = a[sortColumn.value]
    let valB = b[sortColumn.value]

    // Converter valores numéricos
    if (sortColumn.value === 'preco' || sortColumn.value === 'id') {
      valA = Number(valA)
      valB = Number(valB)
    } else {
      valA = valA.toString().toLowerCase()
      valB = valB.toString().toLowerCase()
    }

    // Ordenação crescente ou decrescente
    if (valA < valB) return sortAsc.value ? -1 : 1
    if (valA > valB) return sortAsc.value ? 1 : -1
    return 0
  })
})

/*
 * Disparar a busca ao carregar o componente
 */
onMounted(fetchProdutos)
</script>
