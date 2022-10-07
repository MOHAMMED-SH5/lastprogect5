import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Dashbordpacket/Home.vue')
  },
  {
    path: '/MyProfile',
    name: 'MyProfile',
    component: () => import('../views/Dashbordpacket/MyProfile.vue')
  },
  {
    path: '/StaticPage',
    name: 'StaticPage',
    component: () => import('../views/Dashbordpacket/StaticPage.vue')
  },
  {
    path: '/CalendePage',
    name: 'CalendePage',
    component: () => import('../views/Dashbordpacket/CalendePage.vue')
  },
  {
    path: '/MessagePage',
    name: 'MessagePage',
    component: () => import('../views/Dashbordpacket/MessagePage.vue')
  },
  {
    path: '/FavoritePage',
    name: 'FavoritePage',
    component: () => import('../views/Dashbordpacket/FavoritePage.vue')
  },
  {
    path: '/BlogPage',
    name: 'BlogPage',
    component: () => import('../views/Dashbordpacket/BlogPage.vue')
  },
  {
    path: '/AddPostpage',
    name: 'AddPostpage',
    component: () => import('../views/Dashbordpacket/AddPostpage.vue')
  },
  {
    path: '/CommunityPage',
    name: 'CommunityPage',
    component: () => import('../views/Dashbordpacket/CommunityPage.vue')
  },
  {
    path: '/RegisterPage',
    name: 'RegisterPage',
    component: () => import('../views/Dashbordpacket/RegisterPage.vue')
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: () => import('../views/Dashbordpacket/LoginPage.vue')
  },
  {
    path: '/profileSetting',
    name: 'profileSetting',
    component: () => import('../views/Acountsetting/profileSetting.vue') 
  },
  {
    path: '/WithdrawPage',
    name: 'WithdrawPage',
    component: () => import('../views/Acountsetting/WithdrawPage.vue') 
  },
  {
    path: '/LogOut',
    name: 'LogOut',
    component: () => import('../views/Acountsetting/LogOut.vue') 
  },
  {
    path: '/BecomeStudent',
    name: 'BecomeStudent',
    component: () => import('../views/Acountsetting/BecomeStudent.vue') 
  },
  {
    path: '/ForgetPasswotd',
    name: 'ForgetPasswotd',
    component: () => import('../views/Acountsetting/ForgetPasswotd.vue') 
  }
  
  
  
  
]

const router = new VueRouter({
  routes,
})

export default router
