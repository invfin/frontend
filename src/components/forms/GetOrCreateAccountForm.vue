<script setup lang="ts">
import { ref } from 'vue';
import type { AccountResult, AccountCoreInfo } from '@/interfaces';
import AccountForm from './AccountForm.vue';

const account_result = defineModel<AccountResult>({ required: true });

const accounts = ref<AccountCoreInfo[]>([]);
</script>

<template>
  <AccountForm v-if="accounts.length === 0" v-model="account_result.account" />

  <div v-else>
    <v-row>
      <v-col>
        <v-select
          v-model="account_result.coreInfo"
          :items="accounts"
          label="Select"
          return-object
          single-line
          variant="outlined"
        ></v-select>
      </v-col>
      <v-col>
        <v-btn variant="outlined">Addd account</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
