<script setup lang="ts">
import { EntryOption } from "@/types/index";

const menus = [
    { title: "Inicio", path: "/" },

    { title: "Screener", path: "/companies" },
    { title: "Portfolio", path: "/portfolio" },

    { title: "Diccionario", path: "/diccionario" },
    { title: "Blogs", path: "/blogs" },

    { title: "Roboadvisor", path: "/roboadvisors" },

    { title: "Super Inversores", path: "/superinvestors" },

] as EntryOption[];

</script>

<template>
    <aside id="sidebar"
        class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 lg:w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
        aria-label="Sidebar">
        <div class="relative flex flex-col flex-1 min-h-0 pt-0 border-r common-colors">
            <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                <div class="flex-1 px-3 space-y-1 divide-y divide-black dark:divide-white">
                    <ul class="pb-2 space-y-2">
                        <li v-for="menu in menus">
                            <LayoutSidebarEntry :title=menu.title :path=menu.path />
                        </li>
                    </ul>
                    <!-- <div class="pt-2 space-y-2">
                        <div
                            class="hiddeWithSidebar flex items-center p-2 text-base text-black rounded-lg hover:bg-gray-100 group dark:text-white dark:hover:bg-gray-700">
                            <span class="ml-3" sidebar-toggle-item>Subscripciones</span>
                        </div>
                        <SidebarEntry title="Escritores" path="/escritores" />
                        <SidebarEntry title="Empresas" path="/empresas" />

                    </div> -->

                </div>
                <!-- <SidebarAnnouncement /> -->
            </div>

        </div>
    </aside>

    <div class="fixed inset-0 z-10 hidden bg-black/50 dark:bg-black/90" id="sidebarBackdrop"></div>
</template>