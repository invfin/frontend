<script setup lang="ts">

defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue'])

let countryFilterValue = ref("");
let industryFilterValue = ref("");

const countryFilterOptions = ["USA", "France", "Spain"];
const industryFilterOptions = ["Steel", "Finances", "Transport"];

const basicFilters = ref([
  { name: "Categoría", options: countryFilterOptions, model: countryFilterValue },
  { name: "Subcategoría", options: industryFilterOptions, model: industryFilterValue },
]);

function emitValue(_e: any) {
  let value = {
    country: countryFilterValue.value,
    industry: industryFilterValue.value,
  };
  emit('update:modelValue', value)
};

function restartFilters() {
  emit('update:modelValue', {})
};
</script>

<template>
  <div class="widget-common-style">
    <div class="p-6 rounded-xl shadow-lg">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <div v-for="filter in basicFilters" class="flex flex-col">
          <label :for="filter.name" class="block mb-2 text-sm font-medium common-text">{{ filter.name }}</label>
          <select v-model="filter.model" class="
              widget-common-style text-sm
              focus:ring-blue-500 focus:border-blue-500
              dark:focus:ring-blue-500 dark:focus:border-blue-500
              block w-full p-2.5 dark:placeholder-gray-400
              text-sm font-medium common-text
              ">
            <option value="">--------------</option>
            <option v-for="option in filter.options" :key="option">
              {{ option }}
            </option>
          </select>
        </div>
      <div class="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
        <button type="button" @click="restartFilters"
          class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
          Restablecer filtros
        </button>
        <button @click="emitValue" type="button"
          class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Buscar
        </button>
      </div>
      </div>

    </div>
  </div>
</template>



