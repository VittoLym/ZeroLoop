<template>
  <section id="about" class="bg-[#050505] border-y border-white/5">
    <div class="max-w-[1200px] mx-auto px-6 py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div class="section-reveal relative flex justify-center">
          <div class="photo-bevel w-full max-w-[400px] aspect-square overflow-hidden rounded-sm bg-black group">
            <img alt="Vitto - Software Developer" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110" src="../assets/img/vitto.jpeg">
            <!-- Replace with: <img src="/your-photo.jpg" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110" /> -->
            <div class="w-full h-full flex items-center justify-center text-8xl opacity-10">👤</div>
            <div class="absolute inset-0 border border-white/5" />
          </div>
        </div>
        <div class="section-reveal space-y-8">
          <h2 class="text-3xl font-semibold tracking-tight text-white">Behind Zeroloop</h2>
          <p class="text-lg leading-relaxed text-[#8B949E]">
            Zeroloop is a specialized one-person engineering consultancy led by
            <strong class="text-white">Vitto</strong>, a full-stack developer based in Buenos Aires.
          </p>
          <p class="leading-relaxed text-[#8B949E]/80 text-sm">
            We don't just build software; we build efficiency. With a background in developing high-performance applications and complex automation scripts, we help businesses transition from chaotic manual processes to predictable, scalable digital workflows.
          </p>
          <div class="flex gap-8 pt-2">
            <a href="https://www.linkedin.com/in/devvitto/" target="_blank"
               class="flex items-center gap-2 text-sm text-white/60 hover:text-[#8B5CF6] transition-colors">
              LinkedIn ↗
            </a>
            <a href="https://github.com/vittolym" target="_blank"
               class="flex items-center gap-2 text-sm text-white/60 hover:text-[#8B5CF6] transition-colors">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
