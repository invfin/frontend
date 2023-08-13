<template>
    <div>
        <Navbar />
        <div class="flex pt-16 overflow-hidden ">

            <Sidebar />

            <div id="main-content"
                class="relative w-full h-full overflow-y-auto lg:ml-64 bg-white text-black dark:bg-black dark:text-white">

                <SubNavbar />
                <main class="mt-10 px-4 pt-6 ">
                    <slot />
                </main>
            </div>

        </div>

    </div>
</template>
