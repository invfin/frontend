<script setup lang="ts">
import { ref } from 'vue';

import CustomCard from '@/components/shared/CustomCard.vue';

const review = ref('30%');
</script>

<template>
  <CustomCard>
    <template #title>
      Progress
      <div class="text-green-darken-3 text-h3 font-weight-bold">90%</div>

      <div class="text-h6 text-medium-emphasis font-weight-regular">$2,938.00 remaining</div>
    </template>

    <div :style="`right: calc(${review} - 32px)`" class="position-absolute mt-n8 text-caption text-green-darken-3">Eligibility review</div>
    <v-progress-linear color="green-darken-3" height="22" model-value="90" rounded="lg">
      <v-badge :style="`right: ${review}`" class="position-absolute" color="white" dot inline></v-badge>
    </v-progress-linear>

    <div class="d-flex justify-space-between py-3">
      <span class="text-green-darken-3 font-weight-medium"> $26,442.00 remitted </span>

      <span class="text-medium-emphasis"> $29,380.00 total </span>
    </div>
    <template #link>
      <v-divider></v-divider>

      <v-list-item append-icon="mdi-chevron-right" lines="two" subtitle="Details and agreement" link></v-list-item>
    </template>
  </CustomCard>
</template>
