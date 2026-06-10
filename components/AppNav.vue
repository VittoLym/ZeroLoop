<template>
  <header class="sticky top-0 w-full z-50 bg-[#050505]/50 backdrop-blur-xl border-b border-white/5">
    <div class="flex justify-between items-center max-w-[1200px] mx-auto px-6 py-5">
      <a href="#" class="text-xl font-bold text-white flex items-center gap-2 tracking-tight hover:scale-105 transition-transform">
        <img class="logo" src="../assets/img/add-text-zeroloop-to-de--right-side-cropped.svg" alt="Logo Zeroloop">
      </a>
      <nav class="hidden md:flex items-center gap-10">
        <a v-for="l in links" :key="l.href" :href="l.href"
           class="text-xl font-medium text-[#8B949E] hover:text-white transition-colors duration-300">
          {{ l.label }}
        </a>
      </nav>
      <a href="#contact"
         class="metallic-glow text-white px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 active:scale-95 transition-all">
        Get in touch
      </a>
      <button class="md:hidden text-[#8B949E] hover:text-white p-2" @click="open = !open">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div v-if="open" class="md:hidden border-t border-white/5 bg-[#050505] px-6 py-4">
      <a v-for="l in links" :key="l.href" :href="l.href"
         class="block py-2 text-sm font-medium text-[#8B949E] hover:text-white" @click="open = false">
        {{ l.label }}
      </a>
    </div>
  </header>
</template>

<script setup >
const open = ref(false)
const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
</script>
<style scoped>
.logo{
  height: 7vh;
}
</style>