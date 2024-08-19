<script setup lang="ts">
import AccountForm from './AccountForm.vue';

const files = defineModel('files', { default: [] });
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

  <v-file-input
    v-model="files"
    :show-size="1000"
    color="deep-purple-accent-4"
    label="File input"
    placeholder="Select your files"
    prepend-icon="mdi-paperclip"
    variant="outlined"
    counter
    multiple
  >
    <template v-slot:selection="{ fileNames }">
      <template v-for="(fileName, index) in fileNames" :key="fileName">
        <v-chip v-if="index < 2" class="me-2" color="deep-purple-accent-4" size="small" label>
          {{ fileName }}
        </v-chip>

        <span v-else-if="index === 2" class="text-overline text-grey-darken-3 mx-2"> +{{ files.length - 2 }} File(s) </span>
      </template>
    </template>
  </v-file-input>
</template>
