<script setup>
import { ref, watch } from 'vue';
import GoalForm from '../forms/GoalForm.vue';
import { TargetArrowIcon } from 'vue-tabler-icons';

const dialog = ref(false);

watch(dialog, (val) => {
  if (!val) close();
});

const close = () => {
  dialog.value = false;
};

const propsExt = defineProps({
  title: String,
  path: String
});
</script>

<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ props }">
      <v-list-item color="secondary" class="no-spacer" v-bind="props">
        <template v-slot:prepend>
          <v-avatar size="40" class="mr-3 py-2">
            <TargetArrowIcon />
          </v-avatar>
        </template>
        <div class="d-inline-flex align-center justify-space-between w-100">
          <h6 class="text-subtitle-1 font-weight-regular">{{ propsExt.title }}</h6>
        </div>
        <p class="text-subtitle-2 text-medium-emphasis mt-1">Añade una {{ propsExt.title }}</p>
      </v-list-item>
    </template>

    <GoalForm>
      <template #header>
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>
      </template>

      <template #footer>
        <v-btn variant="outlined" @click="close"> Cancelar </v-btn>
        <v-btn variant="outlined" type="submit"> Save </v-btn>
      </template>
    </GoalForm>
  </v-dialog>
  <v-divider></v-divider>
</template>
