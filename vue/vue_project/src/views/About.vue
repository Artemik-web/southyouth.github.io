<!-- setup表示可以写vue3的组合式API -->
<script setup>
import { ref } from 'vue'
import { Plus, Minus, Setting, Check, Star, User, Brush, ArrowLeft } from '@element-plus/icons-vue'

// 响应式数据
const message = ref('欢迎来到我们的Vue项目!')
const counter = ref(0)
const isCardVisible = ref(true)

// 方法定义
const incrementCounter = () => {
  counter.value++
}

const decrementCounter = () => {
  if (counter.value > 0) {
    counter.value--
  }
}

const toggleCard = () => {
  isCardVisible.value = !isCardVisible.value
}

const goBack = () => {
  window.history.back()
}
</script>

<template>
  <div class="about-container">
    <!-- 动态背景 -->
    <div class="bg-gradient">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>

    <!-- 主要内容 -->
    <div class="content-wrapper">
      <!-- 头部导航 -->
      <nav class="navbar">
        <el-button :icon="ArrowLeft" circle @click="goBack" class="back-btn" />
        <h1 class="page-title">关于我们</h1>
        <div class="placeholder"></div>
      </nav>

      <!-- 欢迎横幅 -->
      <div class="hero-section glass-card">
        <h2 class="hero-title">{{ message }}</h2>
        <p class="hero-subtitle">探索现代前端开发的无限可能</p>
        <div class="hero-divider"></div>
      </div>

      <!-- 主要内容区域 -->
      <div class="main-content">
        <!-- 卡片容器 -->
        <el-row :gutter="24">
          <!-- 介绍卡片 -->
          <el-col :xs="24" :md="12">
            <div class="glass-card info-card">
              <div class="card-header">
                <h3>
                  <el-icon><User /></el-icon>
                  项目介绍
                </h3>
                <el-button size="small" @click="toggleCard" class="toggle-btn">
                  {{ isCardVisible ? '隐藏' : '显示' }}
                </el-button>
              </div>
              <transition name="fade">
                <div v-show="isCardVisible" class="card-content">
                  <p>这是一个基于Vue 3和Element Plus构建的现代化前端项目。</p>
                  <p>我们使用了最新的技术栈来确保最佳的用户体验。</p>
                  <div class="tech-tags">
                    <span class="tag tag-vue">Vue 3</span>
                    <span class="tag tag-element">Element Plus</span>
                    <span class="tag tag-vite">Vite</span>
                  </div>
                </div>
              </transition>
            </div>
          </el-col>

          <!-- 计数器卡片 -->
          <el-col :xs="24" :md="12">
            <div class="glass-card counter-card">
              <div class="card-header">
                <h3>
                  <el-icon><Plus /></el-icon>
                  互动计数器
                </h3>
              </div>
              <div class="counter-content">
                <div class="counter-display">{{ counter }}</div>
                <div class="counter-label">当前计数</div>
                <div class="counter-buttons">
                  <el-button class="btn-dec" @click="decrementCounter">
                    <el-icon><Minus /></el-icon>
                  </el-button>
                  <el-button class="btn-inc" @click="incrementCounter">
                    <el-icon><Plus /></el-icon>
                  </el-button>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>

        <!-- 按钮展示区 -->
        <div class="section-wrapper glass-card buttons-section">
          <h2 class="section-title">
            <el-icon><Brush /></el-icon>
            按钮样式展示
          </h2>
          <div class="button-grid">
            <el-button class="glass-btn">默认按钮</el-button>
            <el-button type="primary" class="glass-btn primary">主要按钮</el-button>
            <el-button type="success" class="glass-btn success">成功按钮</el-button>
            <el-button type="info" class="glass-btn info">信息按钮</el-button>
            <el-button type="warning" class="glass-btn warning">警告按钮</el-button>
            <el-button type="danger" class="glass-btn danger">危险按钮</el-button>
            <el-button plain class="glass-btn plain">朴素按钮</el-button>
            <el-button type="primary" plain class="glass-btn primary-plain">主要朴素</el-button>
            <el-button type="success" round class="glass-btn success-round">圆角成功</el-button>
            <el-button type="info" round class="glass-btn info-round">圆角信息</el-button>
          </div>
        </div>

        <!-- 特色功能区 -->
        <div class="features-section">
          <el-row :gutter="24">
            <el-col :xs="24" :md="8">
              <div class="glass-card feature-card">
                <div class="feature-icon icon-1">
                  <el-icon><Setting /></el-icon>
                </div>
                <h3>高性能</h3>
                <p>基于Vite构建工具，提供闪电般的热更新体验</p>
              </div>
            </el-col>
            <el-col :xs="24" :md="8">
              <div class="glass-card feature-card">
                <div class="feature-icon icon-2">
                  <el-icon><Check /></el-icon>
                </div>
                <h3>易维护</h3>
                <p>采用Vue 3 Composition API，代码结构清晰</p>
              </div>
            </el-col>
            <el-col :xs="24" :md="8">
              <div class="glass-card feature-card">
                <div class="feature-icon icon-3">
                  <el-icon><Star /></el-icon>
                </div>
                <h3>现代化</h3>
                <p>集成Element Plus UI组件库，界面美观大方</p>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 底部技术栈信息 -->
        <div class="footer glass-card">
          <div class="tech-stack">
            <span class="tech-item"><el-icon><Code /></el-icon> Built with Vue 3 + Element Plus</span>
          </div>
          <p class="copyright">© 2025 Modern Frontend Project</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 深色渐变背景 */
.about-container {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  overflow: hidden;
  padding: 0;
}

/* 动态渐变圆圈 */
.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(100, 200, 255, 0.3) 0%, transparent 70%);
  animation: float 15s infinite ease-in-out;
}

.circle-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.circle-2 {
  width: 300px;
  height: 300px;
  bottom: 100px;
  left: -50px;
  animation-delay: 3s;
  background: radial-gradient(circle, rgba(255, 100, 200, 0.25) 0%, transparent 70%);
}

.circle-3 {
  width: 200px;
  height: 200px;
  bottom: 30%;
  right: 20%;
  animation-delay: 6s;
  background: radial-gradient(circle, rgba(100, 255, 150, 0.2) 0%, transparent 70%);
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -30px) scale(1.1); }
  50% { transform: translate(0, 60px) scale(0.9); }
  75% { transform: translate(-30px, -30px) scale(1.05); }
}

/* 内容包装器 */
.content-wrapper {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 玻璃拟态卡片 */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.45);
}

/* 导航栏 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px 0;
}

.back-btn {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.page-title {
  color: white;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.placeholder {
  width: 32px;
}

/* Hero区域 */
.hero-section {
  text-align: center;
  margin-bottom: 32px;
  padding: 40px 24px;
}

.hero-title {
  color: white;
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 12px 0;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin: 0;
}

.hero-divider {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  margin: 24px auto 0 auto;
  border-radius: 2px;
}

/* 主要内容 */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 卡片头部 */
.info-card .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-header h3 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.card-header h3 .el-icon {
  color: #60a5fa;
}

.toggle-btn {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

/* 卡片内容 */
.card-content p {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin-bottom: 12px;
}

/* 技术标签 */
.tech-tags {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: white;
}

.tag-vue {
  background: linear-gradient(135deg, #4fc08d 0%, #35495e 100%);
}

.tag-element {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
}

.tag-vite {
  background: linear-gradient(135deg, #646cff 0%, #747bff 100%);
}

/* 计数器卡片 */
.counter-card {
  height: 100%;
}

.counter-content {
  text-align: center;
}

.counter-display {
  font-size: 64px;
  font-weight: 700;
  color: white;
  text-shadow: 0 4px 20px rgba(96, 165, 250, 0.5);
  line-height: 1;
  margin-bottom: 8px;
}

.counter-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-bottom: 24px;
}

.counter-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.counter-buttons .el-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-dec {
  background: rgba(239, 68, 68, 0.8);
  border-color: transparent;
  color: white;
}

.btn-dec:hover {
  background: rgba(239, 68, 68, 1);
  color: white;
}

.btn-inc {
  background: rgba(59, 130, 246, 0.8);
  border-color: transparent;
  color: white;
}

.btn-inc:hover {
  background: rgba(59, 130, 246, 1);
  color: white;
}

/* 按钮区域 */
.section-wrapper {
  margin-top: 0;
}

.section-title {
  color: white;
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-title .el-icon {
  color: #fbbf24;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
}

.glass-btn {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: white;
  transition: all 0.3s ease;
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.glass-btn.primary {
  background: rgba(59, 130, 246, 0.7);
  border-color: rgba(59, 130, 246, 0.8);
}

.glass-btn.primary:hover {
  background: rgba(59, 130, 246, 0.9);
}

.glass-btn.success {
  background: rgba(34, 197, 94, 0.7);
  border-color: rgba(34, 197, 94, 0.8);
}

.glass-btn.success:hover {
  background: rgba(34, 197, 94, 0.9);
}

.glass-btn.info {
  background: rgba(148, 163, 184, 0.7);
  border-color: rgba(148, 163, 184, 0.8);
}

.glass-btn.info:hover {
  background: rgba(148, 163, 184, 0.9);
}

.glass-btn.warning {
  background: rgba(245, 158, 11, 0.7);
  border-color: rgba(245, 158, 11, 0.8);
}

.glass-btn.warning:hover {
  background: rgba(245, 158, 11, 0.9);
}

.glass-btn.danger {
  background: rgba(239, 68, 68, 0.7);
  border-color: rgba(239, 68, 68, 0.8);
}

.glass-btn.danger:hover {
  background: rgba(239, 68, 68, 0.9);
}

/* 特色卡片 */
.features-section {
  margin-top: 0;
}

.feature-card {
  text-align: center;
  height: 100%;
  padding: 32px 24px;
}

.feature-card:hover {
  transform: translateY(-8px);
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 20px auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: white;
}

.icon-1 {
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  box-shadow: 0 4px 20px rgba(96, 165, 250, 0.5);
}

.icon-2 {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  box-shadow: 0 4px 20px rgba(52, 211, 153, 0.5);
}

.icon-3 {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  box-shadow: 0 4px 20px rgba(251, 191, 36, 0.5);
}

.feature-card h3 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin: 0;
}

/* 底部 */
.footer {
  text-align: center;
  padding: 20px;
}

.tech-stack {
  margin-bottom: 10px;
}

.tech-item {
  color: rgba(255, 255, 255, 0.7);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
}

.tech-item .el-icon {
  color: #60a5fa;
}

.copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin: 0;
}

/* 淡入动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 28px;
  }

  .page-title {
    font-size: 22px;
  }

  .circle-1 {
    width: 250px;
    height: 250px;
  }

  .circle-2 {
    width: 200px;
    height: 200px;
  }

  .button-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .counter-display {
    font-size: 48px;
  }

  .el-col {
    margin-bottom: 24px;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 12px;
  }

  .button-grid {
    grid-template-columns: 1fr;
  }

  .glass-card {
    padding: 16px;
  }
}
</style>