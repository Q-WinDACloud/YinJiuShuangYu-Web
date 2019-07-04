<template>
    <div class="footer">
        <div class="footerTop">
            <div class="globalStyle">
                <div class="footerLeft">
                    <div class="companyname">
                        <img src="/static/imgs/icon_logo.png" alt="" >
                        <div class="c_Title">
                            <p>{{$t("footer.CompanyName")}}</p>
                            <p>www.yjenjoy.cn</p>
                        </div>
                    </div>
                    <p>{{$t("footer.contact")}}</p>
                    <p>{{$t("footer.phone")}}</p>
                </div>
                <div class="footerRight">
                    <ul>
                        <router-link tag="li" to="/main/home" active-class="activeClass">{{$t("header.l1")}}</router-link>
                        <router-link tag="li" to="/main/ProductsUsing" active-class="activeClass">{{$t("header.l2")}}</router-link>
                        <router-link tag="li" to="/main/CooperationCase" active-class="activeClass">{{$t("header.l3")}}</router-link>
                        <router-link tag="li" to="/main/CompanyIntr" active-class="activeClass">{{$t("header.l4")}}</router-link>
                        <router-link tag="li" to="/main/ContactUs" active-class="activeClass">{{$t("header.l5")}}</router-link>
                    </ul>
                    <p>{{$t("footer.headquarters")}}</p>
                    <p>{{$t("footer.information")}}</p>
                    <p>{{$t("footer.informationTwo")}}</p>
                </div>
            </div>
        </div>
        <div class="footerBottom">
            <!-- 备案号：dfguyfxdftyuhgΩd -->
        </div>
    </div>
</template>
<style scoped>
.footer{
    height: 20rem;
    width: 100%;
    font-size:0.8rem;
    font-weight:400;
    color:rgba(255,255,255,1);
}
ul{
    width: 32rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
li{
    height: 3rem;
    line-height: 3em;
    cursor: pointer;
}
p{
    margin-top: 1rem;
}
.footerTop{
    height:17.39rem;
    background:rgba(32,32,32,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width: 1092px){
    .footer{
        width: 100%;
        position: fixed;
        bottom: 0;
    }
    .footerTop{
        height:17.39rem;
        background:rgba(32,32,32,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
.globalStyle{
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content:center;
    justify-content: center;
    -webkit-align-items:center;
    align-items: center;
}
.footerBottom{
    height:2.78rem;
    background:rgba(32,32,32,1);
}
.companyname{
    width: 24rem;
    height: 4rem;
    margin-bottom: 1rem;
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
.c_Title p{
  margin: 0;
}
.c_Title p:nth-child(2){
    margin-top: 0.2rem;
    font-size:0.78rem;
}
.footerLeft{
    margin-right: 9rem;
    width: 50%;
}
.footerBottom{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

