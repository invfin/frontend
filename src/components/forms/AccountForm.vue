<script setup lang="ts">
import { ref } from 'vue';

type Fee = {
  name: string;
  recurrence: string;
  amount: number;
  description: string;
};

const name = defineModel('name', { default: '' });
const category = defineModel('category', { default: '' });
const subcategory = defineModel('subcategory', { default: '' });
const description = defineModel('description', { default: '' });
const recurrence = defineModel('recurrence', { default: '' });

const fees = defineModel('fees', { default: [] as Fee[] });
const recurrences = ['Annualy', 'Monthly'];

const isNew = ref(false);
const accounts = ref([]);
</script>

<template>
  <div v-if="isNew || accounts.length === 0">
    <v-text-field label="Account Nombre" v-model="name" placeholder="Seguro de vida" variant="outlined"></v-text-field>
    <v-text-field label="Account Categoría" v-model="category" placeholder="Inversion" variant="outlined"></v-text-field>
    <v-text-field label="Account subcategory" v-model="subcategory" placeholder="firstrade" variant="outlined"></v-text-field>
    <v-textarea label="Account description" v-model="description" variant="outlined"></v-textarea>
    <v-row v-for="(fee, index) in fees" :key="index">
      <v-text-field v-model="fee.name" label="Nombre" placeholder="Seguro de vida" variant="outlined"></v-text-field>
      <v-select v-model="fee.recurrence" :items="recurrences" label="Select" return-object single-line></v-select>
      <v-col>
        <v-text-field v-model="fee.amount" label="amount" type="number"></v-text-field>
        <v-textarea label="description" v-model="fee.description" variant="outlined"></v-textarea>
        <v-btn variant="outlined" @click="fees.splice(index, 1)">Remove fee {{ index }}</v-btn>
      </v-col>
    </v-row>
    <v-btn
      variant="outlined"
      @click="
        fees = [
          {
            name: '',
            recurrence: '',
            amount: 0,
            description: ''
          },
          ...fees
        ]
      "
      >Addd fees</v-btn
    >
    <v-btn v-if="accounts.length !== 0" variant="outlined" @click="isNew = false">Select account</v-btn>
  </div>

  <div v-else>
    <v-row>
      <v-col>
        <v-select v-model="recurrence" :items="accounts" label="Select" return-object single-line variant="outlined"></v-select>
      </v-col>
      <v-col>
        <v-btn variant="outlined" @click="isNew = true">Addd account</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
