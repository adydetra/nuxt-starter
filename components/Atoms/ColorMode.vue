<template>
  <button aria-label="Color Mode" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
    <Icon v-if="$colorMode.value == 'dark'" name="line-md:moon-filled-alt-loop" class="dark:text-white" :class="size" />
    <Icon v-else name="line-md:sunny-outline-loop" class="text-black" :class="size" />
  </button>
</template>

<script setup lang="ts">
type Theme = "light" | "dark";

const size = "w-6 h-6";
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>
