<script setup lang="ts">
import type { TermPart } from "@/types";

const props = defineProps<{
  termPart: TermPart
}>()

let refTermPartContent = ref(props.termPart.content);
let refTermPartTitle = ref(props.termPart.title);

let editing = ref(false);

const toggleEditing = () => {
  editing.value = !editing.value;
};
//TODO: finish saving edits
</script>
<template>
  <div>
    <div v-if="editing" class="p-4">
      <div class="relative widget-common-style">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 rounded-t">
            <input type="text" v-model="refTermPartTitle" class="text-3xl rounded-lg widget-common-style">
            <button type="button" class="button-cross" @click="toggleEditing">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4">
            <FormsWysiwyg v-model="refTermPartContent" />
          </div>
          <!-- Modal footer -->
          <div class="flex items-center p-4 rounded-b justify-end">
            <button @click="toggleEditing" type="button"
              class="text-gray-500  bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>

            <button @click="toggleEditing" type="button"
              class="text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
              accept</button>
          </div>
        </div>
      </div>
    </div>

    <section v-else class="mt-10">
      <h2 class="text-3xl mb-2 subpixel-antialiased font-bold">
        {{ refTermPartTitle }} <span class="text-sm font-bold" @click="toggleEditing" style="cursor: pointer;">[ Editar
          ]</span>
      </h2>
      <div class="text-lg" v-html="refTermPartContent"></div>
    </section>
  </div>
</template>

