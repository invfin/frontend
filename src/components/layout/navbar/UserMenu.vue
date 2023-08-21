<script setup lang="ts">
let user = useUser();
</script>

<template>
    <div class="flex items-center ml-3">
        <div>
            <button type="button"
                class="flex text-sm bg-black rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" alt="user photo"
                    :src="getDomainPath(user ? user.foto : 'media/inversorinteligente.WebP')">
            </button>
        </div>
        <!-- Dropdown menu -->
        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
            id="dropdown-2">
            <div v-if="user">
                <div class="px-4 py-3" role="none">
                    <p class="text-sm text-black dark:text-white" role="none">
                        {{ user.username }}
                    </p>
                    <p class="text-sm font-medium text-black truncate dark:text-gray-300" role="none">
                        {{ user.email }}
                    </p>
                </div>
                <ul class="py-1" role="none">
                    <li>
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">Dashboard</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">Settings</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">Earnings</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">Sign out</a>
                    </li>
                </ul>
            </div>
            <div v-else>
                <div class="px-4 py-3" role="none">
                    <p class="text-sm text-black dark:text-white" role="none">
                        Bienvenido
                    </p>
                    <p class="text-sm font-medium text-black truncate dark:text-gray-300" role="none">
                        Al sitio de los verdaderos inversores
                    </p>
                </div>
                <ul class="py-1" role="none">
                    <li>
                        <NuxtLink to="auth/login"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">Unirme</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>