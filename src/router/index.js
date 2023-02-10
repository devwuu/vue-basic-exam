import { createRouter, createWebHistory } from 'vue-router'
import TestComponent from "../components/TestComponent.vue";
import ToDoMain from "@/components/ToDoMain.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TestComponent
    },
    {
      path: '/todo',
      name: 'todo',
      component: ToDoMain
    }
  ]
})

export default router
