<template>
  <section id="services" class="max-w-[1200px] mx-auto px-6 py-24">
    <div class="section-reveal mb-16 flex flex-col items-center text-center">
      <h2 class="text-3xl font-semibold tracking-tight text-white mb-4">What we do</h2>
      <div class="h-px w-8 rounded-full bg-[#8B5CF6]/50" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="s in services" :key="s.title"
           class="section-reveal group glass-card p-10 rounded-2xl">
        <div class="w-14 h-14 flex items-center justify-center rounded-xl bg-[#8B5CF6]/5 mb-8 transition-transform duration-500 group-hover:rotate-6 text-2xl">
          {{ s.icon }}
        </div>
        <h3 class="text-xl font-semibold tracking-tight text-white mb-4">{{ s.title }}</h3>
        <p class="text-[#8B949E] leading-relaxed text-sm">{{ s.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '⚙️',
    title: 'Process Automation',
    description: 'Eliminate manual data entry and repetitive workflows. We connect your existing tools using Python, Selenium, OCR, and custom bots to create seamless, hands-free operations.',
  },
  {
    icon: '🧱',
    title: 'Full Stack Development',
    description: 'Custom internal apps, dashboards, and portals built with modern tech stacks like React, Vue, and Node.js. Clean code, scalable architecture.',
  },
  {
    icon: '🤖',
    title: 'AI & Integrations',
    description: 'Leverage LLMs and custom AI agents to summarize reports, handle customer queries, or analyze complex datasets automatically.',
  },
]
</script>
