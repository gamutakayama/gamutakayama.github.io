<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
import BingHeroBackground from "./BingHeroBackground.js";
</script>

<template>
  <BlogHero>
    <template #bg>
      <BingHeroBackground />
    </template>
    <template #info="info">
      <HitokotoBlogHero v-bind="info" />
    </template>
  </BlogHero>
</template>
