<script setup lang="ts">
defineProps<{
  title: string;
  version: string;
  description: string;
}>();
</script>

<template>
  <AtomsSpotlightCard>
    <h2 class="text-lg font-medium mb-2 text-neutral-200">
      {{ title }}
    </h2>
    <p class="text-neutral-500 text-sm mb-4">
      v{{ version }}
    </p>
    <p class="text-neutral-400 leading-relaxed">
      {{ description }}
    </p>
  </AtomsSpotlightCard>
</template>
