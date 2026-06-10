<template>
  <section class="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
    <!-- Ambient glow -->
    <div class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

    <div class="relative z-10 mx-auto max-w-4xl space-y-8">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-primary/80 backdrop-blur-md">
        <span class="text-[10px]">✦</span>
        Automation &amp; Full Stack Development
      </div>

      <!-- Headline -->
      <h1 class="text-display text-text-primary">
        Automate the loop.<br />
        Focus on what <em class="text-primary not-italic">matters</em>.
      </h1>

      <!-- Subheading -->
      <p class="mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary">
        We build internal tools, automations, and integrations that eliminate repetitive work and help businesses operate smarter.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
        <a
          href="#work"
          class="btn-ghost w-full rounded-full px-10 py-4 text-sm font-bold text-text-primary transition-all hover:border-white/20 active:scale-95 sm:w-auto"
        >
          See our work
        </a>
        <a
          href="#contact"
          class="w-full rounded-full border border-white/5 px-10 py-4 text-sm font-bold text-text-secondary transition-all hover:bg-white/5 hover:text-text-primary active:scale-95 sm:w-auto"
        >
          Get in touch
        </a>
      </div>
    </div>
  </section>
</template>
