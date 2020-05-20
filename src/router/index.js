import Vue from 'vue'
import VueRouter from 'vue-router'
import step1 from '@/components/step-1.vue'
import step2 from '@/components/step-2.vue'
import step3 from '@/components/step-3.vue'

Vue.use(VueRouter)


const routes = [
    {path: '/', component: step1 },
    {path: '/payment', component: step2},
    {path: '/completed', component: step3}
 ]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
export default router