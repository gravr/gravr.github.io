import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import WriteFunction from '@/pages/WriteFunction';
import ViewGraph from '@/pages/ViewGraph';
import PredefinedFunctions from '@/pages/PredefinedFunctions';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/write-function',
      name: 'WriteFunction',
      component: WriteFunction,
    }, {
      path: '/predefined-functions',
      name: 'PredefinedFunctions',
      component: PredefinedFunctions,
    }, {
      path: '/view-graph',
      name: 'ViewGraph',
      component: ViewGraph,
    },
  ],
});
