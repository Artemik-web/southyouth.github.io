import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/About.vue'
import SettingView from '../views/Setting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 这里是路由配置，每个路由都需要映射到一个组件。这里我们有两个路由，一个是主页，一个是关于页。
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },{
      path: '/setting',
      name: 'setting',
      component: SettingView,
    }
  ],
})

export default router