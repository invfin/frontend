

<template>
    <nav class="fixed z-50 w-full border-b common-colors">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <LayoutSidebarToggle />
                    <LayoutNavbarLogo />
                </div>
                <div class="flex items-center">
                    <!-- Search -->
                    <LayoutSearchToggle />
                    <!-- Notifications -->
                    <LayoutNavbarNotification />
                    <!-- Theme -->
                    <LayoutNavbarThemeToggle />
                    <!-- Profile -->
                    <LayoutNavbarUserMenu />
                </div>
            </div>
        </div>
    </nav>
</template>