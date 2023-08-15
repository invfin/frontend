<script setup lang="ts">
import { ref } from 'vue';

type Option = {
  value: string | number;
  label: string | number;
};

defineProps<{
  value: any
  title: string
  options: Option[]
}>();

const emit = defineEmits(['update:value']);

function emitValue(e) {
  emit('update:value', e.target.value);
}

</script>

<template>
  <label class="sr-only">{{ title }}</label>
  <select @input="emitValue" class="
    block py-2.5 px-0
    text-sm text-black
    bg-transparent border-0 
    border-b-2 border-black 
    appearance-none dark:text-white 
    dark:border-white focus:outline-none 
    focus:ring-0 focus:border-gray-200 peer">
    <option value="" selected>{{ title }}</option>
    <option class="text-black dark:text-white" v-for="option in options" :value="option.value">{{ option.label }}</option>
  </select>
</template>