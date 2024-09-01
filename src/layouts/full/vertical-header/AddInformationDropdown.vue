<script setup lang="ts">
import TransactionsFilesFormModal from '@/components/modals/TransactionsFilesFormModal.vue';
import TransactionFormModal from '@/components/modals/TransactionFormModal.vue';
import GoalFormModal from '@/components/modals/GoalFormModal.vue';
</script>

<template>
  <div class="pa-4">
    <div class="d-flex align-center justify-space-between mb-3">
      <h6 class="text-subtitle-1">Pon al día tus cuentas</h6>
    </div>
  </div>
  <v-divider></v-divider>
  <v-list class="py-0" lines="three">
    <TransactionFormModal title="Inversión" category="investment" subtitle="Añade una inversión" />
    <TransactionFormModal title="Transacción" category="transaction" subtitle="Añade una transacción" />
    <TransactionsFilesFormModal title="Ficheros" category="files" subtitle="Añade inversiones o transacciones desde ficheros" />
    <GoalFormModal title="Objetivo" path="Objetivo" />
    <v-list-item color="secondary" class="no-spacer" to="creator">
      <template v-slot:prepend>
        <v-avatar size="40" class="mr-3 py-2">
          <LayoutDashboardIcon />
        </v-avatar>
      </template>
      <div class="d-inline-flex align-center justify-space-between w-100">
        <h6 class="text-subtitle-1 font-weight-regular">Dashboard</h6>
      </div>
      <p class="text-subtitle-2 text-medium-emphasis mt-1">Añade un dashboard</p>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item color="secondary" class="no-spacer" href="creator">
      <template v-slot:prepend>
        <v-avatar size="40" class="mr-3 py-2">
          <FileAnalyticsIcon />
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
