

<template>
    <nav class="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-black dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <NavbarMobileToggle />
                    <NavbarLogo />
                </div>
                <div class="flex items-center">
                    <!-- Search -->
                    <SearchToggle />
                    <!-- Notifications -->
                    <NavbarNotification />
                    <!-- Apps -->
                    <NavbarAppsMenu />
                    <!-- Theme -->
                    <NavbarThemeToggle />
                    <!-- Profile -->
                    <NavbarUserMenu />
                </div>
            </div>
        </div>
    </nav>
</template>