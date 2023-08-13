

<template>
    <nav class="fixed z-50 w-full border-b common-colors">
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
                    <!-- Theme -->
                    <NavbarThemeToggle />
                    <!-- Profile -->
                    <NavbarUserMenu />
                </div>
            </div>
        </div>
    </nav>
</template>