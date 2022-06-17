import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const ShopCar = () => import('views/shopcar/ShopCar');
const ProFile = () => import('views/profile/ProFile');
const Login = () => import('views/Login');

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    meta: {
      isShowTabBar: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowTabBar: true
    }
  },
  {
    path: '/shopcar',
    component: ShopCar,
    meta: {
      isShowTabBar: true
    }
  },
  {
    path: '/profile',
    component: ProFile,
    meta: {
      isShowTabBar: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
