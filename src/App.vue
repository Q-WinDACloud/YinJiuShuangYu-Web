<template>
  <div id="app">
    <!-- <headerPage/> -->
    <router-view :style="curHeight"></router-view>
    <!-- <footerPage/> -->
  </div>
</template>

<script>
import '../static/css/global.css'
// import headerPage from '@/components/common/headerPage.vue'
// import footerPage from '@/components/common/footerPage.vue'
export default {
  name: 'App',
  data(){
    return{
      curHeight:0,
    }
  },
  // ,components:{
  //   headerPage,footerPage
  // },
  beforeMount(){
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    this.curHeight ='min-height:'+ h +'px;' + 'min-whdth:'+ w +'px'; //减去页面上固定高度height
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
