<template>
  <div class="header">
    <div class="globalStyle">
      <div class="companyname">
        <img src="/static/imgs/icon_logo.png" alt="" >
        <div class="c_Title">
          <p>{{$t("footer.CompanyName")}}</p>
          <p>www.yjenjoy.cn</p>
        </div>
      </div>
      <ul>
        <router-link tag="li" to="/main/home" active-class="activeClass">{{$t("header.l1")}}</router-link>
        <router-link tag="li" to="/main/ProductsUsing" active-class="activeClass">{{$t("header.l2")}}</router-link>
        <router-link tag="li" to="/main/CooperationCase" active-class="activeClass">{{$t("header.l3")}}</router-link>
        <router-link tag="li" to="/main/CompanyIntr" active-class="activeClass">{{$t("header.l4")}}</router-link>
        <router-link tag="li" to="/main/ContactUs" active-class="activeClass">{{$t("header.l5")}}</router-link>
      </ul>
      <!-- <div class="changelanguage">
        <p :class="isChange=='zh' ? '' : 'colorC'" @click="change('zh')">中文</p><i>|</i><p :class="isChange=='en' ? '' : 'colorC'" @click="change('en')">English</p>
      </div> -->
    </div>
  </div>
</template>
<script>
import { setup } from "../../locales/index.js";
export default {
  data () {
    return {
      isChange:'zh'
    }
  },
  mounted (){
  },
  methods:{
    change(language){
      this.isChange = language;
      setup(language);
      sessionStorage.getItem('language',language);
    },
  }
}
</script>
<style scoped>
.header{
  height:6.67rem;
  background:rgba(32,32,32,1);
  width: 100%;
  align-items: center;
  /* position: fixed;
  top: 0; */
}
.globalStyle{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
}
.companyname{
  width: 18rem;
  height:4.5rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family:STSongti-SC-Regular;
}
.companyname img{
  width:5rem;
  margin-right: 0.8rem;
}
.c_Title{
  font-size:0.93rem;
  color: #fff;
}
.c_Title p:nth-child(1){
  margin-bottom: 0.3rem;
}
ul{
  display: flex;
  justify-content: center;
  align-items: center;
}
li{
  width:8rem;
  height:6.67rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.activeClass{
  background:rgba(66,153,35,1);
}
.changelanguage{
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.changelanguage i{
  margin:0 0.5rem;
}
.changelanguage p{
  cursor: pointer;
}
.colorC{
  color: #AAAAAA;
}
</style>