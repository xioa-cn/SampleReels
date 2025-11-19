<script setup lang="ts">
import {ref} from "vue";

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  image?: string
  status: 'completed' | 'in-progress' | 'planned'
}

interface Props {
  project: Project
}

const props = defineProps<Props>()

const project = ref<Project>(props.project)
const imageLoadError = ref(false)

const handleImageError = (event: Event) => {
  console.warn(`Failed to load image: ${project.value.image}`, event)
  imageLoadError.value = true
}

const handleImageLoad = () => {
  console.log(`Successfully loaded image: ${project.value.image}`)
}

const getStatusText = (status: Project['status']) => {
  switch (status) {
    case 'completed':
      return '已完成'
    case 'in-progress':
      return '进行中'
    case 'planned':
      return '计划中'
    default:
      return '未知'
  }
}

const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'completed':
      return '#10b981'
    case 'in-progress':
      return '#f59e0b'
    case 'planned':
      return '#6b7280'
    default:
      return '#6b7280'
  }
}
</script>

<template>
  <div class="project-card">
    <!-- 项目状态标签 -->
    <div class="status-badge" :style="{ backgroundColor: getStatusColor(project.status) }">
      {{ getStatusText(project.status) }}
    </div>

    <!-- 项目图片 -->
    <div class="project-image">
      <img
        v-if="project.image && !imageLoadError"
        :src="project.image"
        :alt="project.title"
        @error="handleImageError"
        @load="handleImageLoad"
      />
      <div v-else class="placeholder-image">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
    </div>

    <!-- 项目内容 -->
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>

      <!-- 技术栈标签 -->
      <div class="technologies">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>

      <!-- 项目链接 -->
      <div class="project-links">
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          class="link-button primary"
        >
          查看项目
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15,3 21,3 21,9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          class="link-button secondary"
        >
          源代码
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.status-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
}

.placeholder-image svg {
  width: 48px;
  height: 48px;
  opacity: 0.5;
}

.project-content {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  line-height: 1.3;
}

.project-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-tag {
  background: #f3f4f6;
  color: #374151;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background: #e5e7eb;
  transform: translateY(-1px);
}

.project-links {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  flex: 1;
  justify-content: center;
}

.link-button svg {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.link-button:hover svg {
  transform: translateX(2px);
}

.link-button.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.link-button.primary:hover {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.link-button.secondary {
  background: #f9fafb;
  color: #374151;
  border: 1px solid #e5e7eb;
}

.link-button.secondary:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .project-content {
    padding: 20px;
  }

  .project-title {
    font-size: 1.25rem;
  }

  .project-links {
    flex-direction: column;
  }

  .link-button {
    flex: none;
  }
}
</style>
