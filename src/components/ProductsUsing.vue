<template>
    <div class="ProductsUsing">
        <div class="banner">
            <img src="/static/imgs/icon_banner4.png" alt="" class="bigImg">
            <img :src='$t("ProductsUsing.bannerImg")' alt="" class="smallImg">
        </div>
       <div class="main globalStyle">
            <ul class="leftTab">
                <li @click="changeBtn(0)" :class="changeNum == 0 ? 'activeBtn' : ''">{{$t("ProductsUsing.fly.title")}}</li>
                <li @click="changeBtn(1)" :class="changeNum == 1 ? 'activeBtn' : ''">{{$t("ProductsUsing.shop.title")}}</li>
                <li @click="changeBtn(2)" :class="changeNum == 2 ? 'activeBtn' : ''">{{$t("ProductsUsing.cart.title")}}</li>
                <li @click="changeBtn(3)" :class="changeNum == 3 ? 'activeBtn' : ''">{{$t("ProductsUsing.air.title")}}</li>
            </ul>
            <div class="content">
                <!-- 航空行业 -->
                <div class="fly" v-if="changeNum == 0">
                    <p>{{$t("ProductsUsing.fly.content.p1")}}</p>
                    <p>{{$t("ProductsUsing.fly.content.p2")}}</p>
                    <p>{{$t("ProductsUsing.fly.content.p3")}}</p>
                    <p>{{$t("ProductsUsing.fly.content.p4")}}</p>
                    <p>{{$t("ProductsUsing.fly.content.p5")}}</p>
                    <div class="flyDiv">
                        <img src="/static/imgs/icon_industry1.png" alt="">
                        <img src="/static/imgs/icon_industry2.png" alt="">
                    </div>
                    <p>{{$t("ProductsUsing.fly.content.p6")}}</p>
                    <p>{{$t("ProductsUsing.fly.content.p7")}}</p>
                    <p>{{$t("ProductsUsing.fly.content.p8")}}</p>
                    <p>{{$t("ProductsUsing.fly.content.p9")}}</p>
                </div>
                <!-- 船舶行业 -->
                <div class="shop" v-else-if="changeNum == 1">
                    <img src="/static/imgs/icon_industry3.png" alt="" class="shopImgOne">
                    <p>{{$t("ProductsUsing.shop.content.p1")}}</p>
                    <p>{{$t("ProductsUsing.shop.content.p7")}}</p>
                    <p>{{$t("ProductsUsing.shop.content.p2")}}</p>
                    <p>{{$t("ProductsUsing.shop.content.p3")}}</p>
                    <p>{{$t("ProductsUsing.shop.content.p4")}}</p>
                    <p>{{$t("ProductsUsing.shop.content.p5")}}</p>
                    <p>{{$t("ProductsUsing.shop.content.p6")}}</p>
                    <img src="/static/imgs/icon_industry4.png" alt="" class="shopImgTwo">
                </div>
                <!-- 交通运输 -->
                <div class="cart" v-else-if="changeNum == 2">
                    <div class="cartDiv">
                        <img src="/static/imgs/icon_industry5.png" alt="">
                        <img src="/static/imgs/icon_industry6.png" alt="">
                        <img src="/static/imgs/icon_industry7.png" alt="">
                    </div>
                    <p>{{$t("ProductsUsing.cart.content.p1")}}</p>
                    <p>{{$t("ProductsUsing.cart.content.p2")}}</p>
                    <p>{{$t("ProductsUsing.cart.content.p3")}}</p>
                    <p>{{$t("ProductsUsing.cart.content.p4")}}</p>
                    <p>{{$t("ProductsUsing.cart.content.p5")}}</p>
                    <p>{{$t("ProductsUsing.cart.content.p6")}}</p>
                    <p>{{$t("ProductsUsing.cart.content.p7")}}</p>
                    <p>{{$t("ProductsUsing.cart.content.p8")}}</p>
                    <p>{{$t("ProductsUsing.cart.content.p9")}}</p>
                </div>
                <!-- 风能行业 -->
                <div class="air" v-else-if="changeNum == 3">
                    <p>{{$t("ProductsUsing.air.content.p1")}}</p>
                    <p>{{$t("ProductsUsing.air.content.p2")}}</p>
                    <p>{{$t("ProductsUsing.air.content.p3")}}</p>
                    <img src="/static/imgs/icon_industry8.png" alt="" class="airImgTwo">
                    <p>{{$t("ProductsUsing.air.content.p4")}}</p>
                    <p>{{$t("ProductsUsing.air.content.p5")}}</p>
                    <p>{{$t("ProductsUsing.air.content.p6")}}</p>
                    <p>{{$t("ProductsUsing.air.content.p7")}}</p>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            changeNum:0//行业切换
        }
    },
    mounted(){
        document.documentElement.scrollTop=1;
    },
    methods:{
        // 行业切换
        changeBtn(num){
            this.changeNum = num
        }
    }
}
</script>

<style scoped>
.banner{
  width:100%;
  height:27rem;
  position: relative;
}
.bigImg{
  width:100%;
  height:100%;
}
.smallImg{
  position: absolute;
  top: 3rem;
  left: 25%;
}
.main{
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 4rem;
}
.leftTab{
    height: 100%;
    width:12.94rem;
    border:0.06rem solid rgba(228,225,225,1);
    border-bottom: none;
    margin-right: 2rem;
    font-size:0.89rem;
}
.leftTab li{
    width:12.94rem;
    height:2.78rem;
    text-align: center;
    line-height: 2.78rem;
    background:rgba(255,255,255,1);
    border-bottom:0.06rem solid rgba(228,225,225,1);
    cursor: pointer;
}
.leftTab .activeBtn{
    background:rgba(66,153,35,1);
    color: #fff;
}
.content{
    width:50.56rem;
    font-size:0.78rem;
}
.content p{
    text-indent: 2em;
    line-height: 1.5rem;
}
/* 航空行业 */
.flyDiv{
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}
.flyDiv img{
    width:24.67rem;
    height:15.39rem;
}
.flyDiv img:nth-child(1){
    margin-right: 3rem;
}
/* 船舶行业 */
.shopImgOne{
    width:24.78rem;
    height:16.67rem;
    float: right;
    margin-left: 2rem;
}
.shopImgTwo{
    width:51.67rem;
    height:22.56rem;
    margin-top: 2rem;
}
/* 交通运输 */
.cartDiv{
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
}
.cartDiv img{
    margin: 0.5rem;
    width:16.39rem;
    height:12rem;
}
/* 风能行业 */
.airImgTwo{
    width:51.39rem;
    height:13.28rem;
    margin: 1rem auto;
    margin-bottom: 1rem;
}
</style>

