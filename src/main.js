import './assets/main.css'

import './assets/main.css'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Optional: Import Bootstrap JS for interactive components (e.g., tooltips, popovers)
import 'bootstrap';

// vue stuff
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

// router stuff
import{createRouter,createWebHistory}  from "vue-router";
import routes from "./router/routes";
import './assets/main.css'
let router = createRouter({
    history: createWebHistory(),
    routes: routes
});
const app = createApp(App)
app.use(router);
app.mount('#app');

