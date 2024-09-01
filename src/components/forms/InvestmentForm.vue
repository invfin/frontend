<script setup lang="ts">
import type { AssetDetail, InvestmentDetail } from '@/interfaces';

const asset = defineModel<AssetDetail>('asset', {
  default: {
    category: '',
    name: '',
    companyId: null
  }
});
const investment = defineModel<InvestmentDetail>('investment', {
  default: {
    quantity: 0,
    cost: 0
  }
});

async function getCompanies() {
  return [
    { companyId: 0, name: 'INTC', category: 'company' },
    { companyId: 1, name: 'AMD', category: 'company' }
  ];
}

const companies = await getCompanies();
</script>

<template>
  <v-row>
    <v-col cols="12" sm="4">
      <v-text-field
        :rules="[(v: any) => !!v || 'Required']"
        v-model="investment.quantity"
        label="Cantidad"
        type="number"
        variant="outlined"
      >
      </v-text-field>
    </v-col>
    <v-col cols="12" sm="4">
      <v-text-field :rules="[(v: any) => !!v || 'Required']" v-model="investment.cost" label="Precio" type="number" variant="outlined">
      </v-text-field>
    </v-col>
    <v-col cols="12" sm="4">
      <v-select v-model="asset" :items="companies" item-title="name" label="Activo" return-object single-line></v-select>
    </v-col>
  </v-row>
</template>
