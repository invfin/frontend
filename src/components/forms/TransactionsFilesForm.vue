<script setup lang="ts">
import type { AccountResult } from '@/interfaces';
import GetOrCreateAccountForm from './GetOrCreateAccountForm.vue';

const files = defineModel<[]>('files', { required: true });
const account = defineModel<AccountResult>('account', { required: true });
</script>

<template>
  <GetOrCreateAccountForm v-model="account" />
  <v-row>
    <v-col>
      <v-file-input
        name="files"
        v-model="files"
        :show-size="1000"
        color="deep-purple-accent-4"
        label="File input"
        placeholder="Select your files"
        prepend-icon="mdi-paperclip"
        variant="outlined"
        counter
        multiple
        required
        :rules="[(v) => v.length > 0 || 'Required']"
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
    </v-col>
  </v-row>
</template>
