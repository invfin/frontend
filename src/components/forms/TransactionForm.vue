<script setup lang="ts">
import { ref } from 'vue';
import type { AccountResult, TransactionRequest } from '@/interfaces';
import GetOrCreateAccountForm from './GetOrCreateAccountForm.vue';
import InvestmentForm from '../forms/InvestmentForm.vue';
import { post } from '@/utils/helpers/fetch-wrapper';

const props = defineProps({ category: String });

const transactionRequest = defineModel<TransactionRequest>('transactionRequest', { required: true });
const account = defineModel<AccountResult>('account', { required: true });

const form = ref(null);

async function save() {
  if (form.value) {
    const req = transactionRequest.value;
    req.transaction.amount = req.details.original_amount;
    req.transaction.category = props.category ? props.category : '';
    if (account.value.coreInfo) {
      req.account = { Id: account.value.coreInfo.id };
    } else if (account.value.account) {
      req.account = account.value.account;
    }

    const response = await post('transactions', req);
    if (response.message) {
      return;
    }
    close();
  }
}
</script>

<template>
  <v-card>
    <v-form fast-fail validate-on="input" v-model="form" @submit.prevent="save">
      <slot name="header"></slot>

      <v-card-text>
        <v-container>
          <GetOrCreateAccountForm v-model="account" />
          <Suspense v-if="props.category === 'investment'">
            <template #default>
              <InvestmentForm v-model:investment="transactionRequest.investmentDetails" v-model:asset="transactionRequest.asset" />
            </template>
            <template #fallback>
              <div>Loading...</div>
            </template>
          </Suspense>

          <v-row>
            <v-col cols="12" sm="4">
              <v-text-field
                :rules="[(v: any) => !!v || 'Required']"
                v-model="transactionRequest.details.fee"
                label="Fees"
                type="number"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                :rules="[(v: any) => !!v || 'Required']"
                v-model="transactionRequest.details.original_amount"
                label="Amount"
                type="number"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-date-picker elevation="24" v-model="transactionRequest.transaction.date" />
            </v-col>
            <v-col cols="12">
              <v-textarea label="Descripción" v-model="transactionRequest.details.description" variant="outlined" />
            </v-col>
            <v-col cols="12">
              <v-textarea label="Comentario" v-model="transactionRequest.details.comment" variant="outlined" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <slot name="footer"></slot>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
