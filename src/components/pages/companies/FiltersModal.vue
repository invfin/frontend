<script setup lang="ts">
defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue'])


function emitValue() {
  emit('update:modelValue', { complexFilter: filters.value });
}

const filters = ref({});
const availableKeys = ref([]);

function addAnotherComplexFilter() {
  let index: number | undefined = availableKeys.value.pop();
  if (index === undefined) {
    index = Object.keys(filters.value).length;
  }
  filters.value[index] = {};
}

function removeComplexFilter(index: number) {
  delete filters.value[index];
  availableKeys.value.push(index);
}
</script>

<template>
  <div id="companiesFiltersModal" tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-7xl max-h-full">
      <!-- Modal content -->
      <div class="relative shadow widget-common-style">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Filtros especializados
          </h3>
          <button type="button" data-modal-hide="companiesFiltersModal"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <div v-for="(key, value) in filters" :key="value" class="mt-8 flex">
            <CompaniesComplexFilter :value="filters[value]" @update:filterValue="filters[value] = $event" />
            <button @click="removeComplexFilter(value)"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
          <button @click="addAnotherComplexFilter" type="button" class="
          py-2.5 px-5 mr-2 mb-2 text-sm 
          font-medium text-black focus:outline-none bg-white 
          rounded-lg border border-black hover:bg-gray-100 
          hover:text-blue-700 focus:z-10 focus:ring-4 
          focus:ring-gray-200 dark:focus:ring-gray-700 
          dark:bg-black dark:text-white dark:border-gray-600 
          dark:hover:text-white dark:hover:bg-gray-700">
            Añadir otro filtro
          </button>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end">
          <button @click="emitValue" type="button" data-modal-hide="companiesFiltersModal"
            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Buscar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>