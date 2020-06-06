import Vue from 'vue'
import Router from 'vue-router'
import mainbox from '../components/mianBox'
import mainbox2 from '../components/mianBox2'
import mainbox3 from '../components/mianBox3'
import mainbox4 from '../components/mianBox4'
import mainbox5 from '../components/mianBox5'
import login from '../components/login'
import allBox from '../components/allBox'
import allBox2 from '../components/allBox2'
Vue.use(Router)
export default new Router({
  routes: [
    {
      name: '',
      path: '/',
      component: login,


    },
    {
      name: 'success',
      path: '/success',
      component: allBox,
      children:[
        {
          name: 'mainbox',
          path: 'mainbox',
          component:mainbox
        },
        {
          name: 'mainbox2',
          path: 'mainbox2',
          component:mainbox2
        }
      ]
    },
//上级领导
    {
      name: 'success2',
      path: '/success2',
      component: allBox2,
      children:[
        {
          name: 'mainbox3',
          path: 'mainbox3',
          component:mainbox3
        },
        {
          name: 'mainbox4',
          path: 'mainbox4',
          component:mainbox4
        },
        {
          name: 'mainbox5',
          path: 'mainbox5',
          component:mainbox5
        }
      ]
    }

  ]
})
