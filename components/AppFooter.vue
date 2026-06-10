<template>
  <footer class="w-full py-16 border-t border-white/5 bg-[#050505]">
    <div class="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex items-center gap-6 text-sm text-[#8B949E]">
        <span class="font-bold text-white tracking-tight">Zeroloop © 2026.</span>
        <span class="opacity-40">Built for precision.</span>
      </div>
      <div class="flex gap-10">
        <a v-for="l in links" :key="l.label" :href="l.href"
           class="text-sm text-[#8B949E]/60 hover:text-white transition-colors duration-300">
          {{ l.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup >
const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devvitto/' },
  { label: 'GitHub', href: 'https://github.com/vittolym' },
]
</script>