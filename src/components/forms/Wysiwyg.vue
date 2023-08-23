<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <ClientOnly placeholder="Loading...">
    <QuillEditor theme="snow" toolbar="full" v-model:content="value" contentType="html" />

  </ClientOnly>
</template>

<style>
.ql-editor {
  font-size: 16px;
}
</style>