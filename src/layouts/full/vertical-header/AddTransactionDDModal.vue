<script setup>
import { ref, watch } from 'vue';
import { BuildingStoreIcon, SendIcon, MailboxIcon } from 'vue-tabler-icons';
import { post } from '@/utils/helpers/fetch-wrapper';

const dialog = ref(false);
const files = ref([]);

const fileSource = ref('');

// Watchers
watch(dialog, (val) => {
  if (!val) close();
});

const close = () => {
  dialog.value = false;
};

function save() {
  const formData = new FormData();

  files.value.forEach((file, index) => {
    formData.append(`file${index}`, file);
  });

  formData.append('source', fileSource.value);

  post('upload/transactions', formData);
  files.value = [];
  fileSource.value = '';
  close();
}

const propsExt = defineProps({
  title: String,
  path: String
});
</script>

<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ props }">
      <v-list-item value="" color="secondary" class="no-spacer" v-bind="props">
        <template v-slot:prepend>
          <v-avatar size="40" class="mr-3 py-2">
            <div v-if="propsExt.title === 'Inversion'"><BuildingStoreIcon /></div>
            <div v-else-if="propsExt.title === 'Ingreso'"><SendIcon /></div>
            <div v-else-if="propsExt.title === 'Egreso'"><MailboxIcon /></div>
          </v-avatar>
        </template>
        <div class="d-inline-flex align-center justify-space-between w-100">
          <h6 class="text-subtitle-1 font-weight-regular">{{ propsExt.title }}</h6>
        </div>
        <p class="text-subtitle-2 text-medium-emphasis mt-1">Añade una {{ propsExt.title }}</p>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ propsExt.title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-text-field label="Origen" v-model="fileSource" placeholder="firstrade" variant="outlined"></v-text-field>

          <v-file-input
            v-model="files"
            :show-size="1000"
            color="deep-purple-accent-4"
            label="File input"
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            variant="outlined"
            counter
            multiple
          >
            <template v-slot:selection="{ fileNames }">
              <template v-for="(fileName, index) in fileNames" :key="fileName">
                <v-chip v-if="index < 2" class="me-2" color="deep-purple-accent-4" size="small" label>
                  {{ fileName }}
                </v-chip>

                <span v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2"> +{{ files.length - 2 }} File(s) </span>
              </template>
            </template>
          </v-file-input>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="close"> Cancel </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
