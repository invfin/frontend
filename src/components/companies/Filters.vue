<script setup lang="ts">
const props = defineProps(['modelValue']);


const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  console.log(props.modelValue);
  let value = {};
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="widget-common-style">
    <div class="p-6 rounded-xl shadow-lg">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div class="flex flex-col">
          <label for="name" class="font-medium text-sm text-stone-600">Name</label>
          <input type="text" id="name" placeholder="john doe"
            class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
        </div>

        <div class="flex flex-col">
          <label for="email" class="font-medium text-sm text-stone-600">Email</label>
          <input type="email" id="email" placeholder="johndoe@example.com"
            class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
        </div>

        <div class="flex flex-col">
          <label for="date" class="font-medium text-sm text-stone-600">Published Date</label>
          <input type="date" id="date"
            class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
        </div>

        <div class="flex flex-col">
          <label for="status" class="font-medium text-sm text-stone-600">Status</label>

          <select id="status"
            class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
            <option>Active</option>
            <option>Pending</option>
            <option>Deleted</option>
          </select>
        </div>
      </div>

      <div class="grid md:flex grid-cols-2 justify-end space-x-4 w-full mt-6">
        <button
          class="px-4 py-2 rounded-lg text-stone-50 bg-stone-400 hover:bg-stone-500 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10">
          Reset
        </button>

        <button @click="emitValue"
          class="px-4 py-2 rounded-lg text-orange-50 bg-orange-400 hover:bg-orange-500 font-bold text-white shadow-lg shadow-orange-200 transition ease-in-out duration-200 translate-10">
          Search
        </button>
      </div>
    </div>
  </div>
</template>