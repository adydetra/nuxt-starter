<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === 'dark');

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
  <button
    aria-label="Color Mode"
    class="cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-neutral-100/80 text-neutral-800 hover:bg-neutral-200/80 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
    @click="toggleTheme"
  >
    <ColorScheme placeholder="...">
      <Icon
        v-if="isDark"
        name="line-md:moon-filled-alt-loop"
        class="text-xl"
      />
      <Icon
        v-else
        name="line-md:sunny-outline-loop"
        class="text-xl"
      />
    </ColorScheme>
  </button>
</template>
