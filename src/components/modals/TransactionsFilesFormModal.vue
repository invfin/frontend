<script setup>
import { ref, watch } from 'vue';
import { MailboxIcon } from 'vue-tabler-icons';
import { post } from '@/utils/helpers/fetch-wrapper';
import TransactionsFilesForm from '../forms/TransactionsFilesForm.vue';

const dialog = ref(false);
const files = ref([]);
const account_name = ref('');
const account_category = ref('');
const account_subcategory = ref('');
const account_date = ref('');
const account_description = ref('');
const account_recurrence = ref('');
const account_amount = ref('');
const account_fees = ref('');

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

  formData.append('account_name', account_name.value);
  formData.append('account_category', account_category.value);
  formData.append('account_subcategory', account_subcategory.value);
  formData.append('account_date', account_date.value);
  formData.append('account_description', account_description.value);
  formData.append('account_recurrence', account_recurrence.value);
  formData.append('account_amount', account_amount.value);
  formData.append('account_fees', account_fees.value);

  post('upload/transactions', formData);

  files.value = [];
  account_name.value = '';
  account_category.value = '';
  account_subcategory.value = '';
  account_date.value = '';
  account_description.value = '';
  account_recurrence.value = '';
  account_amount.value = '';
  account_fees.value = '';
  close();
}

const propsExt = defineProps({
  title: String,
  path: String
});
</script>

<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ props }">
      <v-list-item value="" color="secondary" class="no-spacer" v-bind="props">
        <template v-slot:prepend>
          <v-avatar size="40" class="mr-3 py-2">
            <MailboxIcon />
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
          <TransactionsFilesForm
            v-model:files="files"
            v-model:account_name="account_name"
            v-model:account_category="account_category"
            v-model:account_subcategory="account_subcategory"
            v-model:account_date="account_date"
            v-model:account_description="account_description"
            v-model:account_recurrence="account_recurrence"
            v-model:account_amount="account_amount"
            v-model:account_fees="account_fees"
          />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="close"> Cancel </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-divider></v-divider>
</template>
