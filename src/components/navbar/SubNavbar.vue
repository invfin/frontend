<template>
    <nav class="bg-white border border-gray-200 dark:border-gray-700 dark:bg-black fixed z-30 overflow-x-scroll w-[104rem]">
        <div class="max-w-screen-xl px-4 py-3">
            <div class="flex items-center ">
                <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                    <li id="badge-dismiss-dark">
                        <span
                            class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
                            Dark
                            <button type="button"
                                class="inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                                data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                                <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Remove badge</span>
                            </button>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>