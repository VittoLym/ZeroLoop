<template>
  <section class="section-reveal max-w-[1200px] mx-auto px-6 py-24 overflow-hidden">
    <h2 class="text-3xl font-semibold tracking-tight text-white text-center mb-16">Tech we work with</h2>
    <div class="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
      <span v-for="t in stack" :key="t"
            class="font-mono text-base text-white/40 hover:text-white hover:scale-110 transition-all cursor-default whitespace-nowrap">
        {{ t }}
      </span>
    </div>
  </section>
</template>

<script setup>
const stack = [
  'React','Vue','Nuxt','Next.js','Node.js','Python',
  'Flutter','PostgreSQL','MongoDB','Docker','Git',
  'AWS','Tailwind','Selenium','WhatsApp API',
]
</script>
