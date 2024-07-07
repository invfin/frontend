<script setup lang="ts">
import CustomCard from '@/components/shared/CustomCard.vue';

const value = 33;
</script>

<template>
  <CustomCard>
    <div class="text-center">
      <v-progress-circular :model-value="value" :rotate="360" :size="100" :width="15" color="teal">
        <template v-slot:default> {{ value }} % </template>
      </v-progress-circular>
    </div>

    <template #link>
      <v-divider></v-divider>

      <v-list-item append-icon="mdi-chevron-right" lines="two" subtitle="Details and agreement" link></v-list-item>
    </template>
  </CustomCard>
</template>
