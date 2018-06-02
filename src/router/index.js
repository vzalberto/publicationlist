import Vue from 'vue';
import Router from 'vue-router';
import Editorial from '@/components/Editorial';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Editorial',
      component: Editorial,
    },
  ],
});
