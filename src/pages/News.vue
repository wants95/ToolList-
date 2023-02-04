<template>
  <div>
<p>这是news组件
    {{$route.query}}
</p>

  </div>
</template>

<script>
export default {
name:'News',
mounted() {
    console.log(this.$route)
},
}
</script>

<style>

</style>