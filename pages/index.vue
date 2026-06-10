<template>
  <div class="dot-grid min-h-screen overflow-x-hidden">
    <BgCanvas />
    <AppNav />
    <main>
      <HeroSection />
      <MetricsSection />
      <ServicesSection />
      <WorkSection />
      <StackSection />
      <AboutSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useHead({ htmlAttrs: { class: 'dark' } })

// Scroll reveal con directiva v-intersection
const { $observe } = useNuxtApp()

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('active')
        observer.unobserve(e.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))
})
</script>
