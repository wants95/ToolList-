import Vue from "vue"
import VueRouter from 'vue-router'
import HelloWorld from '../pages/HelloWorld.vue'
import about from '../pages/about.vue'
import News from '../pages/News.vue'
//穿建一个路由器


export default new VueRouter({
    routes:[
        {   name:'hello',
            path:'/hello',
            component:HelloWorld
    }
        ,
        {
            path:'/about',
            component:about,
            children:[//子路由，path中不需加'/'
                {   name:'news',//命名，简化跳转
                    path:'news',
                    component:News
                }
            ]
        }
        
    ]
})
