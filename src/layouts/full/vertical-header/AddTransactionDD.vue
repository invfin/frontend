<script setup lang="ts">
import AddTransactionDDModal from './AddTransactionDDModal.vue';
import TransactionsFilesFormModal from '@/components/modals/TransactionsFilesFormModal.vue';
import InvestmentFormModal from '@/components/modals/InvestmentFormModal.vue';
import TransactionFormModal from '@/components/modals/TransactionFormModal.vue';
</script>

<template>
  <div class="pa-4">
    <div class="d-flex align-center justify-space-between mb-3">
      <h6 class="text-subtitle-1">Añade algo</h6>
    </div>
  </div>
  <v-divider></v-divider>
  <v-list class="py-0" lines="three">
    <TransactionFormModal title="Inversion" path="investments" />
    <InvestmentFormModal title="Transacción" path="transactions" />
    <TransactionsFilesFormModal title="Ficheros" path="Ficheros" />
    <AddTransactionDDModal title="Objetivo" path="Objetivo" />
    <v-list-item value="" color="secondary" class="no-spacer">
      <template v-slot:prepend>
        <v-avatar size="40" class="mr-3 py-2">
          <PhotoIcon />
        </v-avatar>
      </template>
      <div class="d-inline-flex align-center justify-space-between w-100">
        <h6 class="text-subtitle-1 font-weight-regular">Análisis</h6>
      </div>
      <p class="text-subtitle-2 text-medium-emphasis mt-1">Añade un análisis</p>
    </v-list-item>
    <v-divider></v-divider>
  </v-list>
</template>
