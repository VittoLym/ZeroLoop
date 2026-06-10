<template>
  <section id="work" class="border-y border-white/5 bg-[#000]">
    <div class="max-w-[1200px] mx-auto px-6 py-24">
      <div class="section-reveal mb-16">
        <h2 class="text-3xl font-semibold tracking-tight text-white mb-2">Work</h2>
        <p class="text-sm italic text-[#8B949E]/60">Real projects, real impact. Details kept confidential.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="p in projects" :key="p.title"
             class="section-reveal group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] p-2 transition-all duration-500 hover:border-[#8B5CF6]/20 hover:-translate-y-2">
          <div class="aspect-video w-full rounded-xl bg-[#111] flex items-center justify-center overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent" />
            <span class="text-5xl opacity-10 group-hover:scale-110 transition-transform duration-700">{{ p.icon }}</span>
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in p.tags" :key="tag" class="text-bubble">{{ tag }}</span>
            </div>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold tracking-tight text-white">{{ p.title }}</h3>
              <a v-if="p.link" :href="p.link" target="_blank"
                 class="text-[#8B5CF6] hover:underline flex items-center gap-1 text-sm font-medium">
                Source ↗
              </a>
            </div>
            <p class="text-[#8B949E] text-sm mt-2 leading-relaxed">{{ p.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup >
const projects = [
  {
    icon: '📊',
    title: 'Budget Automation System',
    tags: ['Python', 'Node.js', 'React'],
    description: 'Reduced quote generation from 2 hours to under 2 minutes for a catering & events company processing 100+ quotes/month.',
    link: null,
  },
  {
    icon: '📦',
    title: 'Stock & Cost Management App',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    description: 'Real-time inventory tracking and cost visibility across all events. Eliminated spreadsheet chaos entirely.',
    link: null,
  },
  {
    icon: '🤖',
    title: 'AI-Powered Internal Bot',
    tags: ['Python', 'WhatsApp API', 'LLM'],
    description: 'Natural language bot that answered operational queries instantly, reducing internal interruptions significantly.',
    link: null,
  },
  {
    icon: '⚡',
    title: 'CAEngine',
    tags: ['Python', 'GitHub API', 'X', 'LinkedIn', 'Bluesky'],
    description: 'Analyzes any GitHub repository and automatically publishes the most interesting content across social platforms.',
    link: 'https://github.com/devvitto/caengine',
  },
]
</script>
