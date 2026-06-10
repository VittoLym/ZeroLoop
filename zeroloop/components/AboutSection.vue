<template>
  <section id="about" class="border-y border-white/5 bg-surface">
    <div class="mx-auto max-w-container px-6 py-32">
      <div class="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
        <!-- Photo -->
        <div class="flex justify-center">
          <div class="relative aspect-square w-full max-w-sm overflow-hidden rounded-sm bg-surface-high shadow-[10px_10px_30px_-5px_rgba(0,0,0,0.8)]">
            <!-- Replace src with your actual photo -->
            <div class="flex h-full w-full items-center justify-center text-8xl opacity-10">👤</div>
            <div class="absolute inset-0 border border-white/5" />
          </div>
        </div>

        <!-- Text -->
        <div class="space-y-6">
          <h2 class="text-3xl font-semibold tracking-tight text-text-primary">Behind Zeroloop</h2>
          <p class="text-lg leading-relaxed text-text-secondary">
            Zeroloop is a one-person consultancy run by
            <strong class="text-text-primary">Vitto</strong>,
            a Full Stack Developer and Automation Specialist based in Buenos Aires, Argentina.
          </p>
          <p class="leading-relaxed text-text-secondary/80">
            With 3+ years building internal tools and automations for real businesses, the focus is on solutions that have direct impact on how companies operate — not just code that works, but systems that save time, reduce errors, and scale.
          </p>
          <p class="text-sm text-text-secondary/50">Available for remote projects worldwide.</p>

          <div class="flex gap-6 pt-2">
            <a
              href="https://www.linkedin.com/in/devvitto/"
              target="_blank"
              class="flex items-center gap-2 text-sm text-text-secondary/60 transition-colors hover:text-primary"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/vittolym"
              target="_blank"
              class="flex items-center gap-2 text-sm text-text-secondary/60 transition-colors hover:text-primary"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
