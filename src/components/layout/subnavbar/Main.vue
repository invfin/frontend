<script setup lang="ts">
let visits = useVisits();
</script>

<template>
    <nav id="subnavbar" class="border-t border-b fixed z-30 overflow-x-scroll w-[104rem] common-colors px-4 py-3">
        <div class="flex items-center ">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <LayoutSubnavbarEntry v-for="visit in visits" :visit="visit" />
            </ul>
        </div>
    </nav>
</template>