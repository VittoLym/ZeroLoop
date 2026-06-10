<template>
  <section class="section-reveal relative border-y border-white/5 bg-[#000] py-16">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div v-for="m in metrics" :key="m.value" class="space-y-2 group">
          <div class="font-bold text-[clamp(36px,5vw,56px)] text-[#8B5CF6] tracking-tighter transition-transform group-hover:scale-110 duration-500">
            {{ m.value }}
          </div>
          <div class="text-xs font-medium text-[#8B949E] uppercase tracking-widest">{{ m.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  { value: '100k+', label: 'Records processed' },
  { value: '95%',   label: 'Time reduction' },
  { value: '24/7',  label: 'Automated workflows' },
]
</script>
