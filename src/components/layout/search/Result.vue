<script setup lang="ts">
import { ref } from 'vue';
import lupa from '@/assets/images/lupa.svg';
import { Modal } from 'flowbite';



let searchResults = ref([] as SearchResult[]);
let searchQuery = ref('');
let waiting = ref(false);

const handleSearchQuery = async () => {

    if (searchQuery.value.trim() === '') {
        searchResults.value = [] as SearchResult[];
        return;
    }
    let { pending } = await useFetch("https://example.com:8000/api/v1/search/", {
        query: { search: searchQuery },
        server: false,
        lazy: true,
        onResponse({ request, response, options }) {
            let result = response._data as SearchResult[];
            searchResults.value = result;
        },

    });
    waiting.value = pending.value;
};

const handleImageError = (result: SearchResult) => {
    result.logo = lupa;
    result.isImageError = true;
};

function formatPath(result: SearchResult): string {
    return `/${result.inside}/${result.path}`;
}

function hideModal() {
    const $targetEl = document.getElementById('searchModal');
    const modal = new Modal($targetEl);
    modal.hide();
}

</script>

<template>
    <div id="searchModal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative shadow widget-common-style">
                <button type="button" class="
                    absolute top-3 right-2.5 
                    text-black bg-transparent 
                    hover:bg-gray-200 hover:text-black 
                    rounded-lg text-sm w-8 h-8 ml-auto 
                    inline-flex justify-center items-center 
                    dark:hover:bg-gray-600 dark:hover:text-white
                    dark:text-white" @click="hideModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-black dark:text-white">Buscar</h3>
                    <div class="space-y-6">
                        <div class="relative">
                            <div class="relative mb-6">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">

                                    <svg class="w-4 h-4 common-text" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>

                                </div>
                                <input v-model="searchQuery" @input="handleSearchQuery" type="search" id="input-group-1"
                                    class="
                                    widget-common-style
                                    text-sm focus:ring-blue-500 
                                    focus:border-blue-500 block 
                                    w-full pl-10 p-4 dark:focus:ring-blue-500 
                                    dark:focus:border-blue-500">
                            </div>

                            <div class="relative overflow-y-auto p-4 h-[40rem]">
                                <div v-if="searchQuery" v-for="result in searchResults" class="relative group mt-6"
                                    @click="hideModal">
                                    <NuxtLink :to="formatPath(result)">
                                        <div
                                            class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                                        </div>
                                        <div
                                            class="relative px-7 py-6 ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-6 widget-common-style">
                                            <img class="w-8 h-8 common-text" aria-hidden="true" :src="result.logo"
                                                @error="() => handleImageError(result)" :alt="result.title"
                                                :style="{ filter: result.isImageError ? 'brightness(0) grayscale(100%)' : 'none' }">
                                            <div class="space-y-2">
                                                <p class="common-text">{{ result.title }}</p>
                                            </div>
                                        </div>
                                    </NuxtLink>
                                </div>
                                <div v-else>

                                    <div role="status" v-if="waiting" v-for="_ in [0, 0, 0, 0, 0, 0, 0, 0, 0]"
                                        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                                        <div
                                            class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                <path
                                                    d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                            </svg>
                                        </div>
                                        <div class="w-full">
                                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5">
                                            </div>
                                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5">
                                            </div>
                                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5">
                                            </div>
                                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                        </div>
                                        <span class="sr-only">Loading...</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




