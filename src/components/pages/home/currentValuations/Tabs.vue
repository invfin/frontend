<script setup lang="ts">

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
      <GeneralPopoverButton popoverId="popover-description" />
    </h3>
    <GeneralPopover 
            id="popover-description"
            title=""
            content=""
            linkValue=""
            linkPath=""
        />

    <GeneralTabs :name="'homeValuations' + tabs.length" :tabs="tabs">
      <div v-for="tab in tabs" class="hidden pt-4" :id="tab.slug" role="tabpanel" :aria-labelledby="tab.slug + '-tab'">
        <template>

          <div v-if="isFavorite && user && !user.hasFavsCompanies">
            Favoritos vacíos
          </div>
          <div v-else-if="isFavorite && !user">
            Registrate para tener favoritos
          </div>

          <PagesHomeCurrentValuationsVerticalList v-else :asset="tab.slug" />
        </template>
      </div>
    </GeneralTabs>
  </div>
</template>
