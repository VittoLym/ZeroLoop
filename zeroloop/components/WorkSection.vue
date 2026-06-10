<template>
  <section id="work" class="border-y border-white/5 bg-surface-card">
    <div class="mx-auto max-w-container px-6 py-32">
      <!-- Header -->
      <div class="mb-16">
        <h2 class="mb-2 text-3xl font-semibold tracking-tight text-text-primary">Work</h2>
        <p class="text-sm italic text-text-secondary/60">Real projects, real impact. Details kept confidential.</p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface p-2 transition-all hover:border-primary/20"
        >
          <!-- Thumbnail -->
          <div class="relative aspect-video w-full overflow-hidden rounded-xl bg-surface-high">
            <div class="absolute inset-0 flex items-center justify-center text-5xl opacity-10">
              {{ project.icon }}
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="mb-4 flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold tracking-tight text-text-primary">{{ project.title }}</h3>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Source ↗
              </a>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-text-secondary">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
    description: 'Analyzes any GitHub repository and automatically publishes content across social platforms.',
    link: 'https://github.com/devvitto/caengine',
  },
]
</script>
