<template>
    <div>
        <Navbar />
        <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">

            <Sidebar />

            <div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                <main>
                    <slot />
                </main>
            </div>

        </div>

    </div>
</template>
