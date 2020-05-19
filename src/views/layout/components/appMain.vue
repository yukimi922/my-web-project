<template>
  <div class="app_main">
    <!-- $route.fullpath 可以识别当前页面路由的完整地址，当地址发生改变(包括参数改变)则重新渲染页面(例如动态路由参数的变化) -->
    <router-view :key="$route.fullpath">

    </router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>