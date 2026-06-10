<template>
  <section id="services" class="mx-auto max-w-container px-6 py-32">
    <!-- Header -->
    <div class="mb-16 flex flex-col items-center text-center">
      <h2 class="mb-4 text-3xl font-semibold tracking-tight text-text-primary">What we do</h2>
      <div class="h-px w-8 rounded-full bg-primary/50" />
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div
        v-for="service in services"
        :key="service.title"
        class="glass-card group rounded-2xl p-10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20"
      >
        <div class="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-2xl">
          {{ service.icon }}
        </div>
        <h3 class="mb-4 text-xl font-semibold tracking-tight text-text-primary">{{ service.title }}</h3>
        <p class="leading-relaxed text-text-secondary">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: '⚙️',
    title: 'Process Automation',
    description: 'Eliminate manual tasks and repetitive workflows. We connect your existing tools using Python, Selenium, OCR, and custom bots — creating seamless, hands-free operations.',
  },
  {
    icon: '🧱',
    title: 'Full Stack Development',
    description: 'Web applications, internal tools, and REST APIs built with React, Vue, and Node.js. Clean code, scalable architecture, no over-engineering.',
  },
  {
    icon: '🤖',
    title: 'AI & Integrations',
    description: 'WhatsApp bots, LLM-powered workflows, and third-party integrations that connect your tools and reduce manual overhead across the board.',
  },
]
</script>
