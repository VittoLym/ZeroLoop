<template>
  <footer class="w-full border-t border-white/5 bg-surface py-12">
    <div class="mx-auto flex max-w-container flex-col items-center justify-between gap-6 px-6 md:flex-row">
      <div class="flex items-center gap-4 text-sm text-text-secondary/60">
        <span class="font-semibold text-text-primary tracking-tight">Zeroloop © 2026.</span>
        <span class="opacity-40">Built for precision.</span>
      </div>
      <div class="flex gap-8">
        <a v-for="link in links" :key="link.label" :href="link.href" class="text-sm text-text-secondary/60 transition-colors hover:text-text-primary">
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devvitto/' },
  { label: 'GitHub', href: 'https://github.com/vittolym' },
]
</script>
