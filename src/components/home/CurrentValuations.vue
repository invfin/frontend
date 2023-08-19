<script setup lang="ts">
const tabs = [
    { name: "Más activos", slug: "companies" },
    { name: "Mayor aumento", slug: "etfs" },
    { name: "Mayor disminución", slug: "favs" },
];

const favTabs = [
    { name: "Empresas", slug: "companies" },
    { name: "Etfs", slug: "etfs" },
];
</script>
<template>
    <div>
        <HomeCurrentValuationsTabs title="Acvtividad del momento" :tabs="tabs" :isFavorite="false" class="mb-4" />
        <HomeCurrentValuationsTabs title="Tus favoritos" :tabs="favTabs" :isFavorite="true" />
    </div>
</template>
