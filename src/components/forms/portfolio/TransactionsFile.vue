<script setup lang="ts">
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const props = defineProps<{
  modalId: string;
  modalTitle: string;
  modelValue: boolean;
}>();

const origin: Ref<string> = ref("");
const multipleFiles: Ref<File | undefined> = ref(undefined);
const filesUploading: Ref<boolean> = ref(false);
const filesUploaded: Ref<boolean> = ref(false);

const emit = defineEmits(["update:modelValue"]);

function onFileChanged($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    multipleFiles.value = target.files;
  }
}

async function saveForm() {
  const formData = new FormData();
  formData.append("origin", origin.value);
  filesUploading.value = true;
  for (let i = 0; i < multipleFiles.value.length; i++) {
    formData.append("transactions_file", multipleFiles.value[i]);
    const { data, pending, error, refresh, status } = await CustomClient.post("transactions", formData);
  }
  filesUploading.value = false;
  filesUploaded.value = true;
  //TODO: clean the values when modal close
}

async function emitValue() {
  await saveForm();
  emit("update:modelValue", true);
}

const origins = ["Personal", "ING", "Firsttrade"];

</script>
<template>
  <GeneralModal :modalId="modalId" :modalTitle="modalTitle">
    <template #body>
      <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="origin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Origen</label>
          <select id="origin" v-model="origin"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option v-for="option in origins" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="sm:col-span-2">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload multiple
            files</label>
          <input @change="onFileChanged"
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files" type="file" multiple />
        </div>
        <div v-if="filesUploading">
          Loading ...
        </div>
        <div v-if="filesUploaded">
          Ready </div>

      </div>
    </template>
    <template #footer>
      <div class="flex flex-col items-center">
        <button type="button" @click="emitValue" class="common-button px-10">
          Guardar
        </button>
      </div>
    </template>
  </GeneralModal>
</template>
