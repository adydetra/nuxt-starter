<script setup lang="ts">
import pkg from '../../../package.json';

const techStack = [
  {
    title: 'Nuxt',
    version: pkg.dependencies.nuxt.replace('^', ''),
    description: 'The Intuitive Vue Framework.',
  },
  {
    title: 'Tailwind CSS',
    version: pkg.dependencies.tailwindcss.replace('^', ''),
    description: 'A utility-first CSS framework for rapidly building modern websites.',
  },
  {
    title: 'ESLint',
    version: pkg.devDependencies.eslint.replace('^', ''),
    description: 'Find and fix problems in your JavaScript code.',
  },
  {
    title: 'Nuxt Icon',
    version: pkg.devDependencies['@nuxt/icon'].replace('^', ''),
    description: 'The Icon module for Nuxt.',
  },
  {
    title: 'Nuxt Color Mode',
    version: pkg.devDependencies['@nuxtjs/color-mode'].replace('^', ''),
    description: 'Auto-detecting dark and light mode switcher.',
  },
  {
    title: 'Nuxt Fonts',
    version: pkg.devDependencies['@nuxt/fonts'].replace('^', ''),
    description: 'Plug-and-play custom web font optimization for Nuxt.',
  },
];
</script>

<template>
  <div class="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-sans selection:bg-neutral-200 selection:text-neutral-900 dark:selection:bg-neutral-800 dark:selection:text-neutral-100 transition-colors duration-300">
    <div class="max-w-5xl mx-auto px-6 py-12">
      <header class="mb-16">
        <div class="flex items-center justify-between mb-6">
          <div class="w-12 h-12 bg-neutral-900 dark:bg-neutral-100 rounded-full transition-colors duration-300" />
          <AtomsColorMode />
        </div>
        <h1 class="text-4xl font-light tracking-tight mb-4 text-neutral-900 dark:text-neutral-100 transition-colors">
          Nuxt Starter
        </h1>
        <p class="text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed transition-colors">
          A simple, clean starter template focusing on typography and whitespace.
        </p>
      </header>

      <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MoleculesTechStackCard
          v-for="tech in techStack"
          :key="tech.title"
          v-bind="tech"
        />
      </main>

      <footer class="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500 flex justify-between items-center transition-colors">
        <p>&copy; 2025 - {{ new Date().getFullYear() }} Nuxt Starter. All rights reserved.</p>
        <p>
          by
          <NuxtLink
            to="https://www.adydetra.my.id"
            target="_blank"
            external
            class="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
          >
            adydetra
          </NuxtLink>
        </p>
      </footer>
    </div>
  </div>
</template>
