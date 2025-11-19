<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  hue: number
}

const particles = ref<Particle[]>([])
const animationFrame = ref<number>()

const createParticle = (): Particle => ({
  id: Date.now() + Math.random(),
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  size: Math.random() * 4 + 2,
  speedX: (Math.random() - 0.5) * 0.5,
  speedY: (Math.random() - 0.5) * 0.5,
  opacity: Math.random() * 0.5 + 0.3,
  hue: Math.random() * 60 + 200 // 蓝紫色范围
})

const animate = () => {
  particles.value = particles.value.map(particle => ({
    ...particle,
    x: particle.x + particle.speedX,
    y: particle.y + particle.speedY,
    opacity: particle.opacity * 0.995,
    hue: particle.hue + 0.5
  })).filter(particle => 
    particle.opacity > 0.01 &&
    particle.x > -50 && particle.x < window.innerWidth + 50 &&
    particle.y > -50 && particle.y < window.innerHeight + 50
  )

  // 随机添加新粒子
  if (particles.value.length < 30 && Math.random() < 0.1) {
    particles.value.push(createParticle())
  }

  animationFrame.value = requestAnimationFrame(animate)
}

onMounted(() => {
  // 初始化粒子
  for (let i = 0; i < 20; i++) {
    particles.value.push(createParticle())
  }
  animate()
})

onUnmounted(() => {
  if (animationFrame.value) {
    cancelAnimationFrame(animationFrame.value)
  }
})
</script>

<template>
  <div class="simple-background">
    <!-- 渐变背景 -->
    <div class="gradient-overlay"></div>
    
    <!-- 粒子效果 -->
    <div 
      v-for="particle in particles" 
      :key="particle.id"
      class="particle"
      :style="{
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        opacity: particle.opacity,
        backgroundColor: `hsl(${particle.hue}, 70%, 60%)`,
        boxShadow: `0 0 ${particle.size * 2}px hsl(${particle.hue}, 70%, 60%)`
      }"
    />
  </div>
</template>

<style scoped>
.simple-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%);
  animation: gradientShift 8s ease-in-out infinite alternate;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes gradientShift {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>