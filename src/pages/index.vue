<script setup lang="ts">
useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <div>
        <PagesHomePortfolio />
        <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
                <!-- TODO: too slooooow fix please -->
                <!-- TODO: create server paths to fetch data -->
                <PagesHomeCurrentValuations />
            </div>
            <!-- Right Content -->
            <div class="grid grid-cols-1 gap-4">
                <div>
                    <PagesHomeQuestions />
                </div>
                <div>
                    <HPagesomeNews />
                </div>
            </div>
        </div>

    </div>
</template>
  