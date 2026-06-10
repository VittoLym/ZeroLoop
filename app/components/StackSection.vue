<template>
  <section class="mx-auto max-w-container overflow-hidden px-6 py-32">
    <h2 class="mb-16 text-center text-3xl font-semibold tracking-tight text-text-primary">Tech we work with</h2>
    <div class="flex flex-wrap justify-center gap-x-10 gap-y-6">
      <span
        v-for="tech in stack"
        :key="tech"
        class="cursor-default font-mono text-base text-text-secondary/40 transition-colors hover:text-text-primary"
      >
        {{ tech }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const stack = [
  'React', 'Vue', 'Nuxt', 'Next.js', 'Node.js', 'Python',
  'Flutter', 'PostgreSQL', 'MongoDB', 'Docker', 'Git',
  'AWS', 'Tailwind', 'Selenium', 'WhatsApp API',
]
</script>
