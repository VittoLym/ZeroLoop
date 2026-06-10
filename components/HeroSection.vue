<template>
  <section class="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[#8B5CF6]/5 blur-[160px] rounded-full pointer-events-none" />
    <div class="relative z-10 space-y-8 max-w-4xl mx-auto">
      <div class=" tag-2 section-reveal inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#8B5CF6]/80 backdrop-blur-md">
        <span class="text-[10px]">✦</span> Automation &amp; Full Stack Development
      </div>
      <h1 ref="heading" class=" mandarina text-[clamp(30px,7vw,72px)] font-bold leading-[1.05] tracking-[-0.04em] text-white">
        Automate the loop.<br />Focus on what <em class="text-[#7C3AED] not-italic">matters</em>.
      </h1>
      <p class="section-reveal text-lg leading-relaxed text-[#8B949E] max-w-2xl mx-auto">
        We build internal tools, automations, and integrations that eliminate repetitive work and help businesses operate smarter.
      </p>
      <div class="section-reveal flex flex-col md:flex-row items-center justify-center gap-5 pt-4">
        <a href="#work" class="w-full md:w-auto tactile-btn text-white px-10 py-4 rounded-full font-bold transition-all hover:border-white/20 active:scale-95">
          See our work
        </a>
        <a href="#contact" class="w-full md:w-auto border border-white/5 text-white/60 px-10 py-4 rounded-full font-bold hover:bg-white/5 hover:text-white transition-all active:scale-95">
          Get in touch
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const heading = ref(null)

onMounted(() => {
  const el = heading.value
  if (!el) return

  const html = el.innerHTML
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  el.innerHTML = ''

  const process = (node) => {
    if (node.nodeType === 3) {
      const frag = document.createDocumentFragment()

      ;(node.textContent || '').split('').forEach(ch => {
        const s = document.createElement('span')
        s.textContent = ch === ' ' ? '\u00A0' : ch
        s.style.cssText =
          'display:inline-block;opacity:0;transform:translateY(20px)'
        frag.appendChild(s)
      })

      return frag
    }

    const clone = node.cloneNode(false)

    node.childNodes.forEach(c => {
      clone.appendChild(process(c))
    })

    return clone
  }

  tmp.childNodes.forEach(n => {
    el.appendChild(process(n))
  })

  el.querySelectorAll('span').forEach((s, i) => {
    setTimeout(() => {
      s.style.transition = 'all 0.6s cubic-bezier(0.34,1.56,0.64,1)'
      s.style.opacity = '1'
      s.style.transform = 'translateY(0)'
    }, 100 + i * 25)
  })
})
</script>
<style>
.mandarina{
  min-width: 45vw;
}
.tag-2{
  font-size: 14px;
}
@media (max-width: 768px) {
  .tag-2{    
  font-size:clamp(7px,8px,10px);
  }
}
</style>