<script setup lang="ts">
import AmountForm from './AmountForm.vue';
import type { Account } from '@/interfaces';

const account = defineModel<Account>({ required: true });
</script>

<template>
  <v-card variant="outlined" class="mb-4">
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            name="name"
            label="Account Nombre"
            :rules="[(v: any) => !!v || 'Required']"
            v-model="account.name"
            placeholder="Seguro de vida"
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            label="Account Categoría"
            :rules="[(v: any) => !!v || 'Required']"
            v-model="account.category"
            placeholder="Inversion"
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            label="Company"
            :rules="[(v: any) => !!v || 'Required']"
            v-model="account.company"
            placeholder="firstrade"
            variant="outlined"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea label="Account description" v-model="account.description" variant="outlined" />
        </v-col>
      </v-row>
      <AmountForm v-model="account.fees" name="fee" />
      <AmountForm v-model="account.rates" name="rate" />
    </v-card-text>
  </v-card>
</template>
