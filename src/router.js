import Vue                  from 'vue';
import Home                 from './components/Home.vue';
import Login                from './components/Login.vue';
import { IonicVueRouter }   from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path        : '/',
      name        : 'home',
      component   : Home
    },
    {
      path        : '/login',
      name        : 'login',
      component   : Login
    }
  ]
});
