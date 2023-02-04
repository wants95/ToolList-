<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <hr>
    <!-- <a href=""></a> -->
    <router-link to="/hello">hello</router-link>
    <br>
    <router-link to="/about">about</router-link>
    <br>
    <!-- 跳转路由并携带query参数，to的字符串写法 -->
    <!-- <router-link :to="`/about/news?id=${msg.id}&title=${msg.title}`">news</router-link> -->

    <router-link to="/about/news?id=001&title=你好">news</router-link>

    <!-- to的对象写法 -->
    <router-link :to="{
    // path:'/about/news',
    name:'news',
    query:{
      id:msg.id,
      title:msg.title}
    }">
    news</router-link>

    <!-- query参数 ，例：?id=001&title=你好-->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './pages/HelloWorld.vue'
import about from './pages/about.vue'
import News from './pages/News.vue'
                                       
export default {
  name: 'App',
  components: {
    HelloWorld,
    about,
    News
  },
  data() {
    return {
      msg:
        {id:'001',title:'hello'}
      
    }
  },
}
</script>

<style>

</style>
