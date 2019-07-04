<template>
  <div class="CooperationCase">
    <div class="banner">
      <img src="/static/imgs/icon_banner5.png" alt="" class="bigImg">
      <img :src='$t("CooperationCase.bannerImg")' alt="" class="smallImg">
    </div>
    <div class="globalStyle">
      <!-- Sinoma 中国中材 -->
      <p class="title">{{$t("CooperationCase.modal1.title")}}</p>
      <table class="table" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td><p>{{$t("CooperationCase.modal1.th[0]")}}</p></td>
          <td><p>{{$t("CooperationCase.modal1.th[1]")}}</p></td>
          <td><p>{{$t("CooperationCase.modal1.th[2]")}}</p></td>
        </tr>
        <tr>
          <td>
            <p>{{$t("CooperationCase.modal1.td1[0]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal1.td2[0]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal1.td3[0]")}}</p>
            <p>{{$t("CooperationCase.modal1.td3[1]")}}</p>
            <p>{{$t("CooperationCase.modal1.td3[2]")}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{{$t("CooperationCase.modal1.td1[1]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal1.td2[1]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal1.td3[3]")}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{{$t("CooperationCase.modal1.td1[2]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal1.td2[2]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal1.td3[4]")}}</p>
          </td>
        </tr>
      </table>
      <!-- 株洲时代新材料科技有限公司 -->
      <p class="title">{{$t("CooperationCase.modal2.title")}}</p>
      <table class="table" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td><p>{{$t("CooperationCase.modal2.th[0]")}}</p></td>
          <td><p>{{$t("CooperationCase.modal2.th[1]")}}</p></td>
          <td><p>{{$t("CooperationCase.modal2.th[2]")}}</p></td>
        </tr>
        <tr>
          <td>
            <p>{{$t("CooperationCase.modal2.td1[0]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal2.td2[0]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal2.td3[0]")}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{{$t("CooperationCase.modal2.td1[1]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal2.td2[1]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal2.td3[1]")}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{{$t("CooperationCase.modal2.td1[2]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal2.td2[2]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal2.td3[2]")}}</p>
          </td>
        </tr>
      </table>
      <!-- 明阳集团 -->
      <p class="title">{{$t("CooperationCase.modal3.title")}}</p>
      <table class="table" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td><p>{{$t("CooperationCase.modal3.th[0]")}}</p></td>
          <td><p>{{$t("CooperationCase.modal3.th[1]")}}</p></td>
          <td><p>{{$t("CooperationCase.modal3.th[2]")}}</p></td>
        </tr>
        <tr>
          <td>
              <p>{{$t("CooperationCase.modal3.td1[0]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal3.td2[0]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal3.td3[0]")}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{{$t("CooperationCase.modal3.td1[1]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal3.td2[1]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal3.td3[1]")}}</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>{{$t("CooperationCase.modal3.td1[2]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal3.td2[2]")}}</p>
          </td>
          <td>
            <p>{{$t("CooperationCase.modal3.td3[2]")}}</p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    document.documentElement.scrollTop=1;
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
  right: 25%;
}
.globalStyle{
    margin-bottom: 5rem;
}
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.33rem;
    font-weight:600;
    color:rgba(48,48,48,1);
    margin-top: 3rem;
    margin-bottom: 2rem;
}
.table{
    width:100%;
    background:rgba(255,255,255,1);
    border-right:0.06rem solid rgba(228,225,225,1);
    border-bottom:0.06rem solid rgba(228,225,225,1);
}
.table tr:nth-child(1) td{
    width: 15rem;
}
.table tr:nth-child(2) td{
    width: 51rem;
}
.table td{
    border-left:0.06rem solid rgba(228,225,225,1);
    border-top:0.06rem solid rgba(228,225,225,1);
}
.table td p{
    height:2.78rem;
    line-height:2.78rem;
    text-align: center;
}
</style>
