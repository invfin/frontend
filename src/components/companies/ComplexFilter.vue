<script setup lang="ts">
import { ref } from 'vue';


defineProps(['value']);
const emit = defineEmits(['update:filterValue'])

//TODO: add the rest of options
let allOptions = {
  "Income Statement": ["revenue", "net income"],
  "Balance Sheet": ["assets", "liability", "equity"],
  "Cashflow Statement": ["net income", "cashflow"],
  "Financial Ratios": ["per", "pb", "ps"],
}

// const financialRatios = ref([
//   { label: 'Current Ratio', refValue: ref('') },
//   { label: 'Debt-to-Equity Ratio', refValue: ref('') },
//   { label: 'Return on Assets (ROA)', refValue: ref('') },
//   { label: 'Return on Equity (ROE)', refValue: ref('') },
//   { label: 'Earnings Per Share (EPS)', refValue: ref('') },
//   { label: 'Price-to-Earnings Ratio (P/E)', refValue: ref('') },
//   { label: 'Gross Margin', refValue: ref('') },
//   { label: 'Operating Margin', refValue: ref('') },
//   { label: 'Net Profit Margin', refValue: ref('') },
//   // Add more ratios as needed
// ]);

// const ratios = financialRatios.value.map(ratio => ({ label: ratio.label, value: ratio.refValue }));

function formatOptions(options: any[]) {
  return options.map((option: any) => {
    return {
      label: option,
      value: option
    }
  })
}

function getSubCategories(category: string): string[] {
  if (category.length === 0) { return [] }
  return allOptions[category]
}

const categories = ref(formatOptions(Object.keys(allOptions)));
const selectedCategory = ref('');
const subCategories = ref([]);
const selectedSubCategory = ref('');
const operators = ref(formatOptions(['mayor que', 'menor que', 'igual que', 'entre']));
const selectedOperator = ref('');
const selectedValue = ref('');
const valueBetween = ref('');

function changeSubCategory(e) {
  selectedCategory.value = e;
  subCategories.value = formatOptions(getSubCategories(e));
}

function emitFilterValue() {
  const filterValue = {
    category: selectedCategory.value,
    subCategory: selectedSubCategory.value,
    operator: selectedOperator.value,
    value: selectedValue.value,
    valueBetween: valueBetween.value,
  };

  emit('update:filterValue', filterValue);
}

</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <FormsSelect title="Categoría" :options="categories" :value="selectedCategory" @update:value="changeSubCategory"
      @update:filterValue="emitFilterValue" />
    <FormsSelect title="Elemento" :options="subCategories" v-model:value="selectedSubCategory"
      @update:filterValue="emitFilterValue" />
    <FormsSelect title="Operador" :options="operators" v-model:value="selectedOperator"
      @update:filterValue="emitFilterValue" />
    <div v-if="'entre' === selectedOperator"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mr-4">
      <input class="widget-common-style" type="number" v-model="selectedValue" placeholder="min"
        @input="emitFilterValue" />
      <input class="widget-common-style" type="number" v-model="valueBetween" placeholder="max"
        @input="emitFilterValue" />
    </div>
    <input v-else class="widget-common-style" type="number" v-model="selectedValue" @input="emitFilterValue" />
</div></template>