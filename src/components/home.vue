<template>
    <div class="homePage">
      <!-- 轮播图 -->
      <div class="bannerDiv">
        <el-carousel class="banner">
          <el-carousel-item v-for="(item,index) of bannerList" :key="index" interval="3000">
            <img :src="item.img+''" alt="" class="bannerImg">
          </el-carousel-item>
        </el-carousel>
        <img :src='$t("home.bannerImg")' alt="" class="bannerTopImg">
      </div>
      <!-- 产品类目 -->
      <div class="productCategory globalStyle">
        <p class="title">{{$t("home.productCategory.title")}}</p>
        <p class="des">{{$t("home.productCategory.des")}}</p>
        <ul class="Ul">
          <li>
            <img src="/static/imgs/icon_PVN.png" alt="">
            <p class="P1">{{$t("home.productCategory.li[0].title")}}</p>
            <p class="P2">{{$t("home.productCategory.li[0].des")}}</p>
          </li>
          <li>
            <img src="/static/imgs/icon_PVC.png" alt="">
            <p class="P1">{{$t("home.productCategory.li[1].title")}}</p>
            <p class="P2">{{$t("home.productCategory.li[1].des")}}</p>
          </li> 
          <li>
            <img src="/static/imgs/icon_balsa.png" alt="">
            <p class="P1">{{$t("home.productCategory.li[2].title")}}</p>
            <p class="P2">{{$t("home.productCategory.li[2].des")}}</p>
          </li>
        </ul>
      </div>
      <!-- 应用范围 -->
      <div class="applicationRange globalStyle">
        <p class="title">{{$t("home.applicationRange.title")}}</p>
        <p class="des">{{$t("home.applicationRange.des")}}</p>
        <ul class="Ul">
          <li>
            <img src="/static/imgs/icon_industry2.png" alt="">
            <p class="P1">{{$t("home.applicationRange.li[0].title")}}</p>
          </li>
          <li>
            <img src="/static/imgs/icon_industry3.png" alt="">
            <p class="P1">{{$t("home.applicationRange.li[1].title")}}</p>
          </li> 
          <li>
            <img src="/static/imgs/icon_industry6.png" alt="">
            <p class="P1">{{$t("home.applicationRange.li[2].title")}}</p>
          </li>
          <li>
            <img src="/static/imgs/icon_range4.png" alt="">
            <p class="P1">{{$t("home.applicationRange.li[3].title")}}</p>
          </li>
        </ul>
      </div>
      <!-- 夹层结构 -->
      <div class="sandwichStructure globalStyle">
        <p class="title">{{$t("home.sandwichStructure.title")}}</p>
        <ul class="sandwichStructureUl">
          <li @click="changeNumBtn(0)" :class="changNum == 0 ? 'activeColor' : ''">{{$t("home.sandwichStructure.three[0]")}}</li>
          <li @click="changeNumBtn(1)" :class="changNum == 1 ? 'activeColor' : ''">{{$t("home.sandwichStructure.three[1]")}}</li>
          <li @click="changeNumBtn(2)" :class="changNum == 2 ? 'activeColor' : ''">{{$t("home.sandwichStructure.three[2]")}}</li>
        </ul>
        <transition name="fade" mode="out-in">
          <div class="transitionDiv">
            <!-- 夹层结构介绍 -->
            <div class="clickOne"  v-if="changNum == 0">
              <p class="p1">{{$t("home.sandwichStructure.t1.p1")}}</p>
              <p class="p2">{{$t("home.sandwichStructure.t1.p2")}}</p>
              <p class="p3">{{$t("home.sandwichStructure.t1.p3")}}</p>
              <div class="admin">
                <div class="left">
                  <p class="leftTitle">{{$t("home.sandwichStructure.t1.p4")}}</p>
                  <p class="p2">{{$t("home.sandwichStructure.t1.p5")}}</p>
                  <p class="p2">{{$t("home.sandwichStructure.t1.p6")}}</p>
                </div>
                <table class="right" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>{{$t("home.sandwichStructure.t1.table1.th[0]")}}</td>
                    <td>{{$t("home.sandwichStructure.t1.table1.th[1]")}}</td>
                  </tr>
                  <tr>
                    <td>
                      <p class="trTitle">{{$t("home.sandwichStructure.t1.table1.tr1[0].title")}}</p>
                      <p>{{$t("home.sandwichStructure.t1.table1.tr1[0].td1")}}</p>
                      <p>{{$t("home.sandwichStructure.t1.table1.tr1[0].td2")}}</p>
                      <p>{{$t("home.sandwichStructure.t1.table1.tr1[0].td3")}}</p>
                      <p>{{$t("home.sandwichStructure.t1.table1.tr1[0].td4")}}</p>
                      <p>{{$t("home.sandwichStructure.t1.table1.tr1[0].td5")}}</p>
                    </td>
                    <td>
                      {{$t("home.sandwichStructure.t1.table1.tr2[0].pic")}}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="trTitle">{{$t("home.sandwichStructure.t1.table1.tr1[1].title")}}</p>
                      <p>{{$t("home.sandwichStructure.t1.table1.tr1[1].td1")}}</p>
                      <p>{{$t("home.sandwichStructure.t1.table1.tr1[1].td2")}}</p>
                    </td>
                    <td>
                      {{$t("home.sandwichStructure.t1.table1.tr2[1].pic")}}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- 夹层结构特点 -->
            <div class="clickOne" v-if="changNum == 1">
              <p class="p1">{{$t("home.sandwichStructure.t2.p1")}}</p>
              <ul class="clickTwoUl">
                <li>
                  <p>{{$t("home.sandwichStructure.t2.ul[0].title")}}</p>
                  <p>{{$t("home.sandwichStructure.t2.ul[0].des")}}</p>
                </li>
                <li>
                  <p>{{$t("home.sandwichStructure.t2.ul[1].title")}}</p>
                  <p>{{$t("home.sandwichStructure.t2.ul[1].des")}}</p>
                </li>
                <li>
                  <p>{{$t("home.sandwichStructure.t2.ul[2].title")}}</p>
                  <p>{{$t("home.sandwichStructure.t2.ul[2].des")}}</p>
                </li>
                <li>
                  <p>{{$t("home.sandwichStructure.t2.ul[3].title")}}</p>
                  <p>{{$t("home.sandwichStructure.t2.ul[3].des")}}</p>
                </li>
              </ul>
              <img src="/static/imgs/icon_aoki1.png" alt="" class="clickTwoImg">
            </div>
            <!-- 夹层结构制造工艺 -->
            <div class="clickOne" v-if="changNum == 2">
                <ul class="clickTwoUl">
                  <li>
                    <p>{{$t("home.sandwichStructure.t3.ul[0].title")}}</p>
                    <p>{{$t("home.sandwichStructure.t3.ul[0].des")}}</p>
                  </li>
                  <li>
                    <p>{{$t("home.sandwichStructure.t3.ul[1].title")}}</p>
                    <p>{{$t("home.sandwichStructure.t3.ul[1].des")}}</p>
                  </li>
                  <li>
                    <p>{{$t("home.sandwichStructure.t3.ul[2].title")}}</p>
                    <p>{{$t("home.sandwichStructure.t3.ul[2].des")}}</p>
                  </li>
                </ul>
                <div class="clickThreeDiv">
                  <img src="/static/imgs/icon_aoki2.png" alt="" class="clickThreeDivOne">
                  <p>
                    <img src="/static/imgs/icon_aoki3.png" alt="">
                    <img src="/static/imgs/icon_aoki4.png" alt="">
                  </p>
                </div>
              </div>
          </div>
        </transition>
      </div>
      <!-- 工作场景 -->
      <div class="workScene globalStyle">
        <p class="title">{{$t("home.workScene.title")}}</p>
        <p class="des">{{$t("home.workScene.des")}}</p>
        <ul class="workSceneUlOne">
          <li>
            <img src="/static/imgs/icon_ scene1.png" alt="">
            <p>{{$t("home.workScene.workSceneUl[0]")}}</p>
          </li>
          <li>
            <img src="/static/imgs/icon_ scene2.png" alt="">
            <p>{{$t("home.workScene.workSceneUl[1]")}}</p>
          </li>
          <li>
            <img src="/static/imgs/icon_ scene3.png" alt="">
            <p>{{$t("home.workScene.workSceneUl[2]")}}</p>
          </li>
        </ul>
        <ul class="workSceneUlTwo">
          <li>
            <img src="/static/imgs/icon_ scene4.png" alt="">
            <p>{{$t("home.workScene.workSceneUl[3]")}}</p>
          </li>
          <li>
            <div>
              <img src="/static/imgs/icon_ scene5.png" alt="">
              <p>{{$t("home.workScene.workSceneUl[4]")}}</p>
            </div>
            <div>
              <img src="/static/imgs/icon_ scene6.png" alt="">
              <p>{{$t("home.workScene.workSceneUl[5]")}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      changNum:0,//夹层结构切换
      bannerList:[
        {
          img:"/static/imgs/banner2/icon_banner1.jpg",
        },{
          img:"/static/imgs/banner2/icon_banner2.jpg",
        },{
          img:"/static/imgs/banner2/icon_banner3.jpg",
        }
      ]
    }
  },
  mounted (){
    document.documentElement.scrollTop=1;
  },
  methods:{
    // 夹层结构--切换
    changeNumBtn(num){
      this.changNum = num;
    }
  }
}
</script>
<style scoped>
/* 轮播图 */
.bannerDiv{
  position: relative;
}
.bannerImg{
  height: 100%;
  width: 100%;
}
.bannerTopImg{
  position: absolute;
  top: 5rem;
  right: 13rem;
  z-index: 9999;
  width: 33%;
}
.el-carousel-item {
  background: red;
  height:30.56rem;

}
/* 产品类目 */
.title{
  width: 100%;
  font-size:2rem;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 1rem;
}
.des{
  text-align: center;
  font-size:0.78rem;
  margin-bottom: 2rem;
}
.Ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.productCategory .Ul li{
  width:21.44rem;
  height:17.5rem;
  border-radius:0.44rem;
  border:0.06rem solid rgba(228,225,225,1);
  transition:all 0.3s;
  background: #fff;
}
.productCategory .Ul li:hover{
  transform: scale(1.1);
}
.productCategory .Ul li img{
  width:5.56rem;
  height:5.56rem;
  border-radius: 50%;
  margin: 1rem auto;
}
.P1{
  width: 100%;
  text-align: center;
  font-size:1rem;
  margin-bottom: 0.6rem;
}
.P2{
  font-size:0.72rem;
  width: 20rem;
  height: 7rem;
  line-height: 1.9rem;
  margin: 0 auto;
}
/* 应用范围 */
.applicationRange .Ul li{
  width:15.83rem;
}
.applicationRange .Ul li img{
  width:15.83rem;
  height:10.89rem;
  margin-bottom: 2rem;
}
/* 夹层结构 */
.sandwichStructure{
  font-size:0.78rem;
}
.sandwichStructureUl{
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.sandwichStructureUl li{
  width:8.33rem;
  height:2.22rem;
  background:rgba(255,255,255,1);
  border:0.06rem solid rgba(228,225,225,1);
  text-align: center;
  line-height: 2.22rem;
  cursor: pointer;
}
.sandwichStructureUl .activeColor{
  border:0.06rem solid #429923;
  color: #429923;
}
/* 夹层结构介绍 */
.clickOne .p1{
  text-indent:2em;
  margin-bottom: 1rem;
}
.clickOne .p2{
  text-indent:2em;  
  line-height: 2rem;
  margin-bottom: 1rem;
}
.clickOne .p3{
  text-indent:2em;
  margin-bottom: 1rem;
}
/* 夹层结构的特点 */
.clickTwoUl p:nth-child(1){
  text-indent:2em;
  font-size:1rem;
  font-weight:600;
  color:rgba(48,48,48,1);
  line-height:1.39rem;
}
.clickTwoUl p:nth-child(2){
  text-indent:2em;
  margin: 1rem 0;
}
.clickTwoImg{
  width:39.17rem;
  height:9.17rem;
  margin: 0 auto;
}
/* 夹层结构制作工艺 */
.clickThreeDiv{
  margin: 3rem auto;
  display: flex;
  justify-content: center;
}
.clickThreeDivOne{
  width:15.94rem;
  height:12.94rem;
  margin-right: 2rem;
} 
.clickThreeDiv p img{
  width:26.11rem;
  height:6.33rem;
}
.clickThreeDiv p img:nth-child(1){
  margin-bottom: 0.6rem;
}
.admin{
  display: flex;
  justify-content: space-between;
}
.left{
  width: 40%;
}
.leftTitle{
  font-size:1rem;
  font-weight:600;
  color:rgba(48,48,48,1);
  line-height:1.39rem;
  margin: 2rem 0;
}
.right{
  width:34.11rem;
  height:20.11rem;
  background:rgba(255,255,255,1);
  border-right:0.06rem solid rgba(228,225,225,1);
  border-bottom:0.06rem solid rgba(228,225,225,1);
}
.right td{
  padding-left: 1rem;
  border-left:0.06rem solid rgba(228,225,225,1);
  border-top:0.06rem solid rgba(228,225,225,1);
}
.right td p{
  margin-top: 0.5rem;
}
/* 工作场景 */
.workScene{
  font-size:0.78rem;
  margin-bottom: 12rem;
}
.workSceneUlOne{
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.workSceneUlOne li{
  width:21.44rem;
  height:14.83rem;
  position: relative;
  overflow: hidden;
}
.workSceneUlOne img{
  width:21.44rem;
  height:14.83rem;
  transition:all 0.3s;
}
.workSceneUlOne p{
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  height:2.11rem;
  line-height: 2.11rem;
  background:rgba(48,48,48,0.7);
  transition:all 0.3s;
}
.workSceneUlOne li:hover p{
  transform: translateY(2.11rem);
}
.workSceneUlOne li:hover img{
  transform: scale(1.1);
}
.workSceneUlTwo{
  color: #fff;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
.workSceneUlTwo li{
  width:33.61rem;
  height:25.22rem;
  overflow: hidden;
}
.workSceneUlTwo li:nth-child(1):hover p{
  transform: translateY(2.11rem);
}
.workSceneUlTwo li:nth-child(1){
  width:33.61rem;
  height:25.22rem;
  position: relative;
  margin-right: 1rem;
}
.workSceneUlTwo li:nth-child(1) img{
  width:33.61rem;
  height:25.22rem;
  transition:all 0.3s;
}
.workSceneUlTwo li:nth-child(1):hover img{
  transform: scale(1.1);
}
.workSceneUlTwo  p{
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  height:2.11rem;
  line-height: 2.11rem;
  background:rgba(48,48,48,0.7);
  transition:all 0.3s;
}
.workSceneUlTwo li:nth-child(2) div{
  width:31.78rem;
  height:12.06rem;
  position: relative;
  margin-bottom: 1.1rem;
  transition:all 0.3s;
  overflow: hidden;
}
.workSceneUlTwo li:nth-child(2) div:hover p{
  transform: translateY(2.11rem);
}
.workSceneUlTwo li:nth-child(2) img{
  width:31.78rem;
  height:12.06rem;
  transition:all 0.3s;
}
.workSceneUlTwo li:hover div:hover img{
  transform: scale(1.1);
}
</style>
<style>
.homePage .el-carousel__container{
  width: 100%;
  height:39rem;
}
.homePage .component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.homePage .component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
.homePage .el-carousel__indicators--horizontal{
  width: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 2rem;
}
.homePage .el-carousel__indicator--horizontal{
  width:1.11rem;
  height:1.11rem;
  background:rgba(255,255,255,1);
  border-radius: 50%;
  padding: 0;
}
.homePage .el-carousel__button{
  display: none;
}
.homePage .is-active{
  background: #429923;
}
</style>
