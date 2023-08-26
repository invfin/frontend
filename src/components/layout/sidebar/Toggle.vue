<script setup lang="ts">
import { ref } from 'vue';

let sidebarExtended = ref(false);


function toggleSidebar() {
    if (isMobile()) {
        return;
    }
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const subnavbar = document.getElementById('subnavbar');

    if (sidebarExtended) {
        changeStyle(sidebar, mainContent, subnavbar);
        sidebarExtended.value = false;
    } else {
        changeStyle(sidebar, mainContent, subnavbar);
        sidebarExtended.value = true;
    }
}

function isMobile(): boolean {
    return window.innerWidth < 768;
}

function changeStyle(sidebar: HTMLElement, mainContent: HTMLElement, subnavbar: HTMLElement) {
    sidebar.classList.toggle('lg:w-16'); // sidebar collapsed
    sidebar.classList.toggle('lg:w-64');
    mainContent.classList.toggle('lg:ml-16'); // sidebar collapsed
    mainContent.classList.toggle('lg:ml-64');
    const toHide = sidebar.getElementsByClassName('hiddeWithSidebar');
    Array.from(toHide).forEach(e => e.classList.toggle('hidden'));
    //TODO: when the subnavbar has to be put it back
    subnavbar.classList.toggle('w-[104rem]');
    subnavbar.classList.toggle('w-[116rem]'); // sidebar collapsed

}
</script>


<template>
    <button data-collapse-toggle="sidebar" aria-expanded="true" aria-controls="sidebar" @click="toggleSidebar" class="
        p-2 text-gray-600 rounded cursor-pointer 
        hover:text-black 
        hover:bg-gray-100 focus:bg-gray-100 
        dark:focus:bg-gray-700 focus:ring-2 
        focus:ring-gray-100 dark:focus:ring-gray-700 
        dark:text-white dark:hover:bg-gray-700 
        dark:hover:text-white">
        <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
        </svg>
        <svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
    </button>
</template>