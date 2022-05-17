import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const ShopCar = () => import('views/shopcar/ShopCar');
const ProFile = () => import('views/profile/ProFile');

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcar',
    component: ShopCar
  },
  {
    path: '/profile',
    component: ProFile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
