import { createRouter, createWebHistory } from 'vue-router'
import All from '../views/All'
import Active from '@/views/Active'
import Completed from '@/views/Completed'

const routes = [
  {
    path: '/',
    name: 'All',
    component: All 
	},
	{
		path: '/active',
		name: 'Active',
		component: Active
	},
	{
		path: '/completed',
		name: 'Completed',
		component: Completed
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
