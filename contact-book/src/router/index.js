import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddContactView from '../views/AddContactView.vue';
import EditContactView from '../views/EditContactView.vue';
import ContactDetailView from '../views/ContactDetailView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/add', name: 'add', component: AddContactView },
  { path: '/edit/:id', name: 'edit', component: EditContactView, props: true },
  { path: '/contact/:id', name: 'detail', component: ContactDetailView, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
