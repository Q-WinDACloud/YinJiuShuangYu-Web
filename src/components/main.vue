<template>
  <div class="main" :style="curHeight">
    <headerPage/>
    <div class="centent">
      <router-view></router-view>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import headerPage from '@/components/common/headerPage.vue'
import footerPage from '@/components/common/footerPage.vue'
export default {
  components:{
    headerPage,footerPage
  },
  data () {
    return {
      curHeight:0,
    }
  },
  beforeMount(){
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    this.curHeight ='min-height:'+ h +'px;'; //减去页面上固定高度height
  },
}
</script>

<style scoped>
.main{
  position: relative;
}
@media (max-width: 1092px){
  .centent{
    padding-bottom: 20rem;
  }
}
</style>
