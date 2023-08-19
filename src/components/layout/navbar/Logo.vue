<script setup>
import roundLogo from '@/assets/images/round-logo.svg';
</script>


<template>
    <NuxtLink to="" class="flex ml-2 md:mr-24">
        <img :src="roundLogo" class="h-8 mr-3" alt="InvFin Logo" />
        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">InvFin</span>
    </NuxtLink>
</template>