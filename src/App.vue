<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import Prism from "./components/Prism.vue"
import type {Project} from "./types/Project.ts";
import {useInformation} from "./hooks/useInformation.ts";

// 在这里配置你的项目信息
const webglSupported = ref(true)
const backgroundType = ref<'prism' | 'animated' | 'simple'>('prism')

// 检查WebGL支持
onMounted(() => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  if (!gl) {
    console.warn('WebGL not supported, using simple background')
    webglSupported.value = false
    backgroundType.value = 'simple'
  }
})

// 检查WebGL支持
onMounted(() => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  if (!gl) {
    console.warn('WebGL not supported, using simple background')
    webglSupported.value = false
  }
})
const {appInformation} = useInformation();
const projects = ref<Project[]>(appInformation.value)
</script>

<template>
  <div class="portfolio">
    <!-- Prism背景效果 -->
    <div v-if="backgroundType === 'prism' && webglSupported" class="prism-background">
      <Prism
          style="height: 100%"
        animation-type="rotate"
        :time-scale="0.5"
        :height="3.5"
        :base-width="5.5"
        :scale="3.6"
        :hue-shift="0"
        :color-frequency="1"
        :noise="0"
        :glow="1.2"
        :bloom="1.5"
      />
    </div>


    <!-- 头部 -->
      <header class="header">
        <div class="container">
          <h1 class="title">我的作品集</h1>
          <p class="subtitle">展示我的项目作品和技术积累</p>
        </div>
      </header>

      <!-- 项目展示区域 -->
      <main class="main">
        <div class="container">
          <div class="projects-grid">
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
          </div>
        </div>
      </main>

      <!-- 页脚 -->
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 我的作品集. All rights reserved.</p>
        </div>
      </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.22) 0%, rgba(118, 75, 162, 0.23) 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
  overflow-x: hidden;
}

.portfolio::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  pointer-events: none;
  z-index: 1;
}

.prism-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  opacity: 0.8;
  mix-blend-mode: screen;
}

.background-controls {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 8px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.control-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.control-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.control-btn.active {
  background:linear-gradient(135deg, rgba(102, 126, 234, 0.22) 0%, rgba(118, 75, 162, 0.23) 100%);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.header,
.main,
.footer {
  position: relative;
  z-index: 3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  text-align: center;
  padding: 80px 0 60px;
  color: white;
}

.title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.8s ease-out, titleGlow 3s ease-in-out infinite alternate;
}

.subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.main {
  padding: 40px 0 80px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.footer {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px 0;
  text-align: center;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer p {
  opacity: 0.8;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes titleGlow {
  from {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.3);
  }
  to {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.3);
  }
}

/* 添加滚动条样式 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .header {
    padding: 60px 0 40px;
  }
}
</style>
