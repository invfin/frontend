<script setup lang="ts">
import { ref, watch } from 'vue';
import { BusinessplanIcon, ArrowsRightLeftIcon } from 'vue-tabler-icons';

import TransactionForm from '../forms/TransactionForm.vue';
import { defaultAccountResult } from '@/utils';
import { useAuthStore } from '@/stores/auth';
import type { AccountResult, AddInformationModalProps, TransactionRequest } from '@/interfaces';

const dialog = ref(false);
const { user } = useAuthStore();
const account = ref<AccountResult>(defaultAccountResult(user.currencyId));

const transactionRequest = ref<TransactionRequest>({
  details: {
    description: '',
    comment: '',
    original_amount: 0.0,
    fee: 0.0
  },
  transaction: {
    date: new Date(),
    amount: 0.0,
    category: ''
  },
  investmentDetails: {
    quantity: 0,
    cost: 0
  },
  asset: {
    category: '',
    name: '',
    companyId: 0
  },
  account: { Id: 0 }
});

defineProps<AddInformationModalProps>();

watch(dialog, (val) => {
  if (!val) close();
});

const close = () => {
  dialog.value = false;
};
</script>

<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ props }">
      <v-list-item color="secondary" class="no-spacer" v-bind="props">
        <template v-slot:prepend>
          <v-avatar size="40" class="mr-3 py-2">
            <BusinessplanIcon v-if="category === 'investment'" />
            <ArrowsRightLeftIcon v-else />
          </v-avatar>
        </template>
        <div class="d-inline-flex align-center justify-space-between w-100">
          <h6 class="text-subtitle-1 font-weight-regular">{{ title }}</h6>
        </div>
        <p class="text-subtitle-2 text-medium-emphasis mt-1">{{ subtitle }}</p>
      </v-list-item>
    </template>

    <TransactionForm :category="category" v-model:transactionRequest="transactionRequest" v-model:account="account">
      <template #header>
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>
      </template>

      <template #footer>
        <v-btn variant="outlined" @click="close"> Cancelar </v-btn>
        <v-btn variant="outlined" type="submit"> Save </v-btn>
      </template>
    </TransactionForm>
  </v-dialog>
  <v-divider></v-divider>
</template>
