<template>
  <div class="content">
    <h1 ref="tit" :class="{'animate__bounce':temp,'animate__animated':temp}">哈哈哈哈</h1>
    <button @click="shakeUp()">点击</button>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return{
        temp:false
      }
    },
    methods:{
      shakeUp(){
        this.temp = true;
        setInterval(() => {
          // this.$refs.tit.removeAttribute("class")
        }, 5000);
      }
    }
  }
</script>
<style scoped>
</style>