<template>
    <div>
        <Navbar />
        <div class="flex pt-16 overflow-hidden bg-white dark:bg-black">

            <Sidebar />

            <div id="main-content" class="relative w-full h-full overflow-y-auto bg-white lg:ml-64 dark:bg-black">

                <NavbarSubNavbar />
                <main class="mt-10">
                    <slot />
                </main>
            </div>

        </div>

    </div>
</template>
