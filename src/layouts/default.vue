<template>
    <div>
        <LayoutNavbarMain />
        <div class="flex pt-16 overflow-hidden ">

            <LayoutSidebarMain />

            <div id="main-content" class="relative w-full h-full overflow-y-auto lg:ml-64 common-colors">

                <LayoutSubnavbarMain />
                <main class="mt-10 px-4 pt-6 h-fit">
                    <slot />
                </main>
            </div>

        </div>

    </div>
</template>
