//ToDo: Import vue and name it Vue done
//ToDo: Import vue-router and name it VueRouter done
//ToDo: Import vue-resource and name it VueResource done

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//ToDo: Import App.vue and name it App
//ToDo: Import routes.js and use the {} passing routes
//ToDo: Import store/store.js and name it store [done 3]

import App from 'App.vue';
import {routes} from './routes.js';
import store from './store/store.js';

//ToDo Initialize VueRouter using Vue.use()
//ToDo Initialize VueResource using Vue.use() [done2]

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://final-project-c4608.firebaseio.com/'
//ToDo: Set Equal to your Firebase Database URL done

Vue.filter('currency', (value) => {
  //ToDo: Return value.toLocalString(), Add $ sign before the value done
  return "$" + value.toLocalString()
});

const router = new VueRouter({
  routes,
  mode: 'history'
    //ToDo: Set router mode to history
    //ToDo: Pass routes constant imported from above [done2]
});

new Vue({
  el: '#app',
  router,
  store,
    //ToDo: Pass the router constant to vue application done
    //ToDo: Pass store constant to vue application, done
  render: h => h(App)
})
