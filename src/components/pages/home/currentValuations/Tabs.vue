<script setup lang="ts">
import { Tab } from "@/types/index";

const user = useUser()

defineProps<{
  title: string,
  tabs: Tab[],
  isFavorite: boolean
}>()
</script>
<template>
  <div class="p-4 sm:p-6 widget-common-style">
    <h3 class="flex items-center mb-4 text-lg font-semibold text-black dark:text-white">{{ title }}
      <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button"><svg
          class="w-4 h-4 ml-2 text-gray-400 hover:text-white0" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"></path>
        </svg><span class="sr-only">Show information</span></button>
    </h3>
    <GeneralPopover id="popover-description" />

    <GeneralTabs :name="'homeValuations' + tabs.length" :tabs="tabs">
      <div v-for="tab in tabs" class="hidden pt-4" :id="tab.slug" role="tabpanel" :aria-labelledby="tab.slug + '-tab'">
        <template>

          <div v-if="isFavorite && user.loged && !user.hasFavs">
            Favoritos vacíos
          </div>
          <div v-else-if="isFavorite && !user.loged">
            Registrate para tener favoritos
          </div>

          <PagesHomeCurrentValuationsVerticalList v-else :asset="tab.slug" />
        </template>
      </div>
    </GeneralTabs>
  </div>
</template>