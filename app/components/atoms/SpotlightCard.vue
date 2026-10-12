<script setup lang="ts">
const colorMode = useColorMode();
const divRef = ref<HTMLElement | null>(null);
const position = reactive({ x: 0, y: 0 });
const opacity = ref(0);

const spotlightColor = computed(() => {
  return colorMode.value === 'dark'
    ? 'rgba(255, 255, 255, 0.06)'
    : 'rgba(0, 0, 0, 0.035)';
});

function handleMouseMove(e: MouseEvent) {
  if (!divRef.value)
    return;

  const rect = divRef.value.getBoundingClientRect();
  position.x = e.clientX - rect.left;
  position.y = e.clientY - rect.top;
}

function handleMouseEnter() {
  opacity.value = 1;
}

function handleMouseLeave() {
  opacity.value = 0;
}
</script>

<template>
  <div
    ref="divRef"
    class="relative p-6 border border-neutral-200/80 bg-white/70 shadow-xs hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-none dark:hover:border-neutral-700 rounded-lg overflow-hidden group transition-colors duration-300"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="pointer-events-none absolute -inset-px transition opacity duration-300"
      :style="{
        opacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
      }"
    />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
