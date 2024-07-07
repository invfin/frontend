<script setup lang="ts">
const props = defineProps({
  title: String
});
</script>

<template>
  <v-card elevation="0" class="overflow-hidden bubble-shape">
    <v-card-item>
      <slot name="title">
        <div class="d-sm-flex align-center justify-space-between">
          <v-card-title>{{ props.title }}</v-card-title>
        </div>
      </slot>
    </v-card-item>

    <v-card-text>
      <slot />
    </v-card-text>
    <slot name="link"></slot>
  </v-card>
</template>
