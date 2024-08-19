<script setup lang="ts">
import AccountForm from './AccountForm.vue';

const currencies = [
  { id: 0, name: 'USD', desc: 'US Dolar' },
  { id: 1, name: 'EUR', desc: 'Euro' }
];

const name = defineModel('name', { required: true, default: '' });
const category = defineModel('category', { required: true, default: '' });
const subcategory = defineModel('subcategory', { required: true, default: '' });
const date = defineModel('date', { required: true, default: new Date() });
const description = defineModel('description', { required: true, default: '' });
const comment = defineModel('comment', { required: true, default: '' });
const currency = defineModel('currency', { required: true, default: 0 });
const amount = defineModel('amount', { required: true, default: 0 });
//TODO: add investment fields
const account_name = defineModel('account_name', { default: '' });
const account_category = defineModel('account_category', { default: '' });
const account_subcategory = defineModel('account_subcategory', { default: '' });
const account_date = defineModel('account_date', { default: '' });
const account_description = defineModel('account_description', { default: '' });
const account_recurrence = defineModel('account_recurrence', { default: '' });
const account_amount = defineModel('account_amount', { default: 0 });
const account_fees = defineModel('account_fees', { default: [] });
</script>

<template>
  <AccountForm
    v-model:name="account_name"
    v-model:category="account_category"
    v-model:subcategory="account_subcategory"
    v-model:date="account_date"
    v-model:description="account_description"
    v-model:recurrence="account_recurrence"
    v-model:amount="account_amount"
    v-model:fees="account_fees"
  />

  <v-text-field label="Nombre" v-model="name" placeholder="Seguro de vida" variant="outlined"></v-text-field>
  <v-text-field label="Categoría" v-model="category" placeholder="Inversion" variant="outlined"></v-text-field>
  <v-text-field label="subcategory" v-model="subcategory" placeholder="firstrade" variant="outlined"></v-text-field>
  <v-date-input label="Fecha" :model-value="date" variant="outlined"></v-date-input>
  <v-textarea label="description" v-model="description" variant="outlined"></v-textarea>
  <v-textarea label="comment" v-model="comment" variant="outlined"></v-textarea>
  <v-input v-model="amount" label="amount"></v-input>
  <v-select
    v-model="currency"
    :items="currencies"
    item-title="name"
    item-value="id"
    label="Select"
    persistent-hint="false"
    return-object
    single-line
  ></v-select>
</template>
