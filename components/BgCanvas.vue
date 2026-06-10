<template>
  <div class="bg-container">
    <canvas ref="canvas" />
  </div>
</template>

<script setup>
const canvas = ref()

let ctx
let particles = []
let animationId

const initCanvas = () => {
  const c = canvas.value

  c.width = window.innerWidth
  c.height = window.innerHeight

  ctx = c.getContext('2d')

  particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 2 + 1
  }))
}

const animate = () => {
  const c = canvas.value

  ctx.clearRect(0, 0, c.width, c.height)

  ctx.fillStyle = 'rgba(139,92,246,0.15)'
  ctx.strokeStyle = 'rgba(139,92,246,0.05)'

  particles.forEach((p, i) => {
    p.x += p.vx
    p.y += p.vy

    if (p.x < 0 || p.x > c.width) p.vx *= -1
    if (p.y < 0 || p.y > c.height) p.vy *= -1

    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fill()

    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j]

      const dist = Math.hypot(
        p.x - p2.x,
        p.y - p2.y
      )

      if (dist < 200) {
        ctx.globalAlpha = 1 - dist / 200

        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()

        ctx.globalAlpha = 1
      }
    }
  })

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas()
  animate()

  window.addEventListener('resize', initCanvas)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', initCanvas)
})
</script>

<style scoped>
.bg-container {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: #050505;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>