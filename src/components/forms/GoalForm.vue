<script setup>
import { ref } from 'vue';

const name = ref('');
</script>

<template>
  <v-card>
    <slot name="header"></slot>

    <v-card-text>
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field label="Account Nombre" v-model="name" placeholder="Seguro de vida" variant="outlined" />
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="footer"></slot>
    </v-card-actions>
  </v-card>
</template>
