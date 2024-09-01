<script setup lang="ts">
import { ref, watch } from 'vue';
import { FilesIcon } from 'vue-tabler-icons';
import { post } from '@/utils/helpers/fetch-wrapper';
import TransactionsFilesForm from '../forms/TransactionsFilesForm.vue';
import type { AccountResult, AddInformationModalProps } from '@/interfaces';
import { useAuthStore } from '@/stores/auth';
import { defaultAccountResult, getAccountCoreInfo } from '@/utils';

const form = ref(null);
const dialog = ref(false);
const { user } = useAuthStore();

const account = ref<AccountResult>(defaultAccountResult(user.currencyId));

const files = ref<[]>([]);

watch(dialog, (val) => {
  if (!val) close();
});

const close = () => {
  dialog.value = false;
};

async function save() {
  if (form.value) {
    const accountInfo = await getAccountCoreInfo(account.value);
    if (accountInfo) {
      const formData = new FormData();
      files.value.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });

      formData.append('accountId', accountInfo.id.toString());
      formData.append('currencyId', accountInfo.currencyId.toString());
      formData.append('source', accountInfo.company);
      const response = await post('upload/transactions', formData);
      if (response.message) {
        return;
      }

      files.value = [];
      account.value = defaultAccountResult(user.currencyId);
      close();
    }
  }
}

defineProps<AddInformationModalProps>();
</script>

<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ props }">
      <v-list-item color="secondary" class="no-spacer" v-bind="props">
        <template v-slot:prepend>
          <v-avatar size="40" class="mr-3 py-2">
            <FilesIcon />
          </v-avatar>
        </template>
        <div class="d-inline-flex align-center justify-space-between w-100">
          <h6 class="text-subtitle-1 font-weight-regular">{{ title }}</h6>
        </div>
        <p class="text-subtitle-2 text-medium-emphasis mt-1">{{ subtitle }}</p>
      </v-list-item>
    </template>

    <v-card>
      <v-form fast-fail validate-on="input" v-model="form" @submit.prevent="save">
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <TransactionsFilesForm v-model:files="files" v-model:account="account" />
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="outlined" @click="close"> Cancel </v-btn>
          <v-btn variant="outlined" type="submit"> Save </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
  <v-divider></v-divider>
</template>
