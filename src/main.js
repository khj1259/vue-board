import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import { BoardList, BoardInput } from './pages';

Vue.use(VueRouter); // router 기능 확장 선언

const routes = [
    // 이곳에 router 를 등록할 것 입니다.
    {
      path: '/',
      component: BoardList
   },
   {
      path: '/insert',
      component: BoardInput
   }
];

// router 객체생성
const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router // router 추가
})
