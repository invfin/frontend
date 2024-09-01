<script setup lang="ts">
import type { Amount } from '@/interfaces';

defineProps({ name: String });

const amounts = defineModel<Amount[]>({ required: true });
const recurrences = ['Annualy', 'Monthly', 'Once', 'Per buy'];
</script>

<template>
  <v-expansion-panels class="mt-4">
    <v-expansion-panel v-for="(amount, index) in amounts" :key="index">
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col class="d-flex justify-start" cols="4"> {{ name }} {{ index }} </v-col>
            <v-col class="text-grey" cols="8">
              <v-fade-transition leave-absolute>
                <span v-if="expanded" key="0"> Enter a {{ name }} </span>
                <span v-else key="1">
                  {{ amount.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
        <template v-slot:actions>
          <!-- eslint-disable-next-line vue/no-deprecated-v-on-native-modifier -->
          <v-icon @click.native.stop="amounts.splice(index, 1)"> <TrashIcon /> </v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row>
          <v-col cols="12" sm="3">
            <v-text-field
              :rules="[(v: any) => !!v || 'Required']"
              v-model="amount.name"
              label="Nombre"
              placeholder="Seguro de vida"
              variant="outlined"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
              v-model="amount.recurrence"
              :rules="[(v: any) => !!v || 'Required']"
              :items="recurrences"
              label="Recurrencia"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="amount.amount"
              :rules="[(v: any) => !!v || 'Required']"
              label="amount"
              type="number"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-checkbox v-model="amount.percentage" name="isPercentage" variant="outlined" label="es en porcenatge"></v-checkbox>
          </v-col>

          <v-col cols="12">
            <v-textarea label="description" v-model="amount.description" variant="outlined"></v-textarea>
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
  <v-btn
    class="mt-4"
    variant="outlined"
    @click="
      amounts = [
        {
          name: '',
          recurrence: '',
          amount: 0,
          description: '',
          percentage: false
        },
        ...amounts
      ]
    "
    >Add {{ name }}s</v-btn
  >
</template>
