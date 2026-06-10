<template>
  <header class="sticky top-0 z-50 w-full border-b border-white/5 bg-surface/60 backdrop-blur-xl">
    <div class="mx-auto flex max-w-container items-center justify-between px-6 py-4">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 text-xl font-bold tracking-tight text-text-primary">
        <img src="/logo-icon.svg" alt="Zeroloop" class="h-7 w-7" />
        Zeroloop<span class="text-primary">.</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- CTA -->
      <a
        href="#contact"
        class="btn-primary rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
      >
        Get in touch
      </a>

      <!-- Mobile menu toggle -->
      <button
        class="flex items-center justify-center rounded-lg p-2 text-text-secondary hover:text-text-primary md:hidden"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="border-t border-white/5 bg-surface px-6 py-4 md:hidden">
      <nav class="flex flex-col gap-4">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
</script>
