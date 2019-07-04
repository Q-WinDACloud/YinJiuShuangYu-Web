<template>
    <div class="ContactUs">
        <div class="banner">
            <img src="/static/imgs/icon_banner7.png" alt="" class="bigImg">
            <img :src='$t("ContactUs.bannerImg")' alt="" class="smallImg">
        </div>
        <div class="globalStyle">
            <!-- 留言板 -->
            <p class="title">{{$t("ContactUs.model1.title")}}</p>
            <p class="des">{{$t("ContactUs.model1.des")}}</p>
            <ul class="contactUl">
                <li>
                    <p>{{$t("ContactUs.model1.input.name[0]")}}</p>
                    <input maxlength="10" type="text" class="inputStyle" v-model="userName" :placeholder='$t("ContactUs.model1.input.name[1]")'>
                </li>
                <li>
                    <p>{{$t("ContactUs.model1.input.contactAddress[0]")}}</p>
                    <el-select v-model="value" :placeholder='$t("ContactUs.model1.input.contactAddress[1]")'>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.label">
                        </el-option>
                    </el-select>
                </li>
                <li>
                    <p>{{$t("ContactUs.model1.input.phone[0]")}}</p>
                    <input type="text" class="inputStyle" id="mobile" v-model="mobile" :placeholder='$t("ContactUs.model1.input.phone[1]")'>
                </li>
                <li class="codeStyle">
                    <div>
                        <p>{{$t("ContactUs.model1.input.code[0]")}}</p>
                        <input type="text" maxlength="6" class="inputStyle" v-model="code" :placeholder='$t("ContactUs.model1.input.code[1]")'>
                    </div>
                    <p class="sendCode">
                        <i v-if="iscodeSend">{{txtGetVerificationCode}}</i>
                        <i v-else @click="sendCode()">{{$t("ContactUs.model1.input.code[2]")}}</i>
                    </p>
                </li>
                <li>
                    <p>{{$t("ContactUs.model1.input.email[0]")}}</p>
                    <input type="text" class="inputStyle" id="mazey" v-model="email" :placeholder='$t("ContactUs.model1.input.email[1]")'>
                </li>
                <li>
                    <p>{{$t("ContactUs.model1.input.companyName[0]")}}</p>
                    <input type="text" class="inputStyle" v-model="companyName" :placeholder='$t("ContactUs.model1.input.companyName[1]")'>
                </li>
                 <li class="longerInput">
                    <p>{{$t("ContactUs.model1.input.address[0]")}}</p>
                    <input type="text" class="inputStyle" v-model="companyAddress" :placeholder='$t("ContactUs.model1.input.address[1]")'>
                </li>
                 <li class="longerInput" id="longerInput">
                    <p>{{$t("ContactUs.model1.input.message[0]")}}</p>
                    <textarea class="inputStyle" v-model="memo" :placeholder='$t("ContactUs.model1.input.message[1]")' maxlength="60"></textarea>
                    <span class="contentStyle">{{memo != null ? memo.length : 0}}/60</span>
                </li>
            </ul>
            <p class="submit" @click="submit">{{$t("ContactUs.model1.bottom")}}</p>
            <!-- 资料下载 -->
            <p class="title">{{$t("ContactUs.model2.title")}}</p>
            <p class="des">{{$t("ContactUs.model2.des")}}</p>
            <ul :class="list.length>=4 ? 'msgUl' : 'msgUlTwo'"> 
                <li v-for="(item,index) of list" :key="index" :class="list.length>=4 ? 'msgLi' : 'msgLiTwo'">
                    <img src="/static/imgs/icon_down.png" alt="" class="img">
                    <p class="excelName">{{item.fileName}}</p>
                    <p class="downBtn" @click="downLoad(item)">
                        {{$t("ContactUs.model2.buttom")}}
                    </p>
                </li>
            </ul>
            <p class="noList" v-if="list.length<=0">
                暂无文件
            </p>
        </div>
        <transition name="component-fade" mode="out-in">
            <div class="successModal" v-if="isSuccess">
                <!-- 提交成功弹出框 -->
                <div class="dialogDiv" width="30%">
                    <img src="/static/imgs/Group.png" alt="" class="dimg1">
                    <div class="dialogFooter">
                        <img src="/static/imgs/close.png" alt="" @click="handleClose" class="dimg2">
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import ApiUrl from "@/api-url";
import { ApiCommonMethodMixin } from "@/mixin";
import * as Tool from '@/tool';
import { MessageBox ,Message} from 'element-ui';

export default { 
    mixins: [ApiCommonMethodMixin],
    data(){
        return{
            isSuccess:false,
            txtGetVerificationCode:'发送验证码',
            iscodeSend:false,
            options: this.$t("ContactUs.model1.select"),
            value: '',
            userName:null,
            mobile:null, 
            companyAddress: null, 
            companyName: null, 
            email: null, 
            memo: null, 
            pageSize:9,
            pageNum:1,
            totalRecords:null,
            list:[],
            code:null,
        }
    },
    watch:{
        // isSuccess(){
        //     if(this.isSuccess == true){
        //         let that = this
        //         setTimeout(function () {
        //             that.isSuccess = false
        //         }, 1000)
        //     }
        // },
        memo(){
            if(this.memo != '' && this.memo != null && this.memo.length >= 60){
                Message({
                    showClose: true,
                    message: '超出字数',
                    type: 'error'
                });
            }
        }
    },
    mounted(){
        document.documentElement.scrollTop=1;
        this.getList();
    },
    methods:{
        // 获取列表
        getList(num){
            let param = {
                pageNum: this.pageNum,
                pageSize: 1000
            };
            this.httpPost(ApiUrl.document.list, param).then(
                res => {   
                    this.list = res.dataList;
                    this.totalRecords = res.totalRecords
                },
                err => {
                    console.log(err);
                }
            );
        },
        // 下载至本地
        downLoad(item){
            let param = item.id;
            this.httpPost(ApiUrl.document.countDownload, param).then(
                res => {   
                    if(res.msg == "下载资料成功"){
                        window.open(item.fileUrl, '_blank'); 
                    }
                },
                err => {
                    console.log(err);
                }
            );
        },
        // 获取验证码
        sendCode(){
            if(this.mobile == null || this.mobile == ''){
                MessageBox.confirm('请输入手机号码', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'warning'
                })
                return;
            }
            let param = {
                mobile: this.mobile,  
                serviceType: 11
            };
            this.httpPost(ApiUrl.code.getSmsCode, param).then(
                res => {   
                    this.iscodeSend = true;
                    this.changeBtn();
                },
                err => {
                    console.log(err);
                }
            );
        },
        //60s倒计时
        changeBtn() {
            if (this.txtGetVerificationCode != '发送验证码') {
                return;
            }
            let countDown = () => {
                this.isBg = false;
                setTimeout(() => {
                    let txt = this.txtGetVerificationCode;
                    let second = Number(txt.substring(0, txt.length - 1));
                    if (second > 1) {
                        this.txtGetVerificationCode = (second - 1) + 's';
                        countDown();
                    } else {
                        this.txtGetVerificationCode = '发送验证码';
                        this.isBg = true;
                    }
                }, 1000);
            };
            this.txtGetVerificationCode = '60s';
            countDown();
        },
        // 校验验证码
        submit(){
            if(this.userName == null || this.userName == ''){
                MessageBox.confirm('请输入姓名', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'warning'
                })
                return;
            }
            if(this.value == null || this.value == ''){
                MessageBox.confirm('请选择联系基地', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'warning'
                })
                return;
            }
            if(this.mobile == null || this.mobile == ''){
                MessageBox.confirm('请输入手机号码', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'warning'
                })
                return;
            }
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            var objmobile = document.getElementById("mobile"); 
            if(!myreg.test(objmobile.value)){ 
                MessageBox.confirm('请输入正确的手机号', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'error'
                })
                return false;
            }

            if(this.email == null || this.email == ''){
                MessageBox.confirm('请输入邮箱地址', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'warning'
                })
                return;
            }
            
            // var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
            var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); //正则表达式
            var obj = document.getElementById("mazey"); //要验证的对象
            if(!reg.test(obj.value)){ //正则验证不通过，格式不对
                MessageBox.confirm('请输入正确的邮箱地址', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'error'
                })
                return false;
        　　}
            if(this.companyName == null || this.companyName == ''){
                MessageBox.confirm('请输入公司名称', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'warning'
                })
                return;
            }
            if(this.companyAddress == null || this.companyAddress == ''){
                MessageBox.confirm('请输入公司地址', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'warning'
                })
                return;
            }
            if(this.memo == null || this.memo == ''){
                MessageBox.confirm('请输入留言', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'warning'
                })
                return;
            }
            if(this.code == null || this.code == ''){
                MessageBox.confirm('请输入验证码', "提示", {
                    confirmButtonText: "确定",
                    distinguishCancelAndClose: true,
                    showClose: false,
                    showCancelButton: false,
                    closeOnClickModal: false,
                    type: 'warning'
                })
                return;
            }
            let param = {
                mobile:this.mobile,
                smsCode:this.code,
                serviceType:11
            };
            this.httpPost(ApiUrl.code.SmsCode, param).then(
                res => {   
                    this.submitMsg();
                },
                err => {
                    console.log(err);
                }
            );
        },
        // 提交留言
        submitMsg(){
            let param = {
                base: this.value, 
                companyAddress: this.companyAddress, 
                companyName: this.companyName, 
                email: this.email, 
                memo: this.memo, 
                mobile: this.mobile,  
                userName: this.userName 
            };
            this.httpPost(ApiUrl.form.save, param).then(
                res => {   
                    this.isSuccess = true;
                    this.value = null;
                    this.companyAddress= null;
                    this.companyName= null;
                    this.email= null;
                    this.memo= null;
                    this.mobile= null; 
                    this.userName= null; 
                },
                err => {
                    console.log(err);
                }
            );
        },
        handleClose(){
            this.isSuccess = false;
        }
    }
}
</script>

<style scoped>
.noList{
    text-align: center;
    margin: 0 0 9rem 0;
    font-size:1.33rem;
    color: #AAAAAA;
    font-weight:400;
    width:100%;
    height:9.56rem;
    background:rgba(241,241,241,1);
    text-align: center;
    line-height: 9.56rem;
}
.ContactUs{
    margin-bottom: 8rem;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #AAAAAA;
    font-family:PingFangSC-Regular;
}
input:-moz-placeholder, textarea:-moz-placeholder {
    color: #AAAAAA;
    font-family:PingFangSC-Regular;
}
input::-moz-placeholder, textarea::-moz-placeholder {
    color: #AAAAAA;
    font-family:PingFangSC-Regular;
}
input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color: #AAAAAA;
    font-family:PingFangSC-Regular;
}
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
.title{
    font-size:2rem;
    font-weight:400;
    color:rgba(48,48,48,1);
    line-height:2.78rem;
    text-align: center;
    margin: 3rem 0 1rem 0;
}
.des{
    text-align: center;
    margin-bottom: 2rem;
    font-size:0.78rem;
}
.contactUl{
    font-size:0.78rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.contactUl li{
    width: 45%;
    margin-bottom: 1rem;
    width:30.56rem;
    min-height:2.78rem;
    background:rgba(255,255,255,1);
    border:0.06rem solid rgba(228,225,225,1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.contactUl li p{
    margin: 0 0 0 2rem;
    min-width: 5rem;
}
.contactUl .longerInput{
    width: 100%;
    position: relative;
}
.contentStyle{
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    height:0.78rem;
    font-size:0.78rem;
    color:rgba(170,170,170,1);
}
.contactUl .codeStyle{
    border:none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.contactUl .codeStyle div{
    border:0.06rem solid rgba(228,225,225,1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width:22.67rem;
    height:2.78rem;
}
.inputStyle{
    height: 2rem;
    border: none;
    width: 70%;
}
.contactUl .codeStyle .sendCode{
    width:6.72rem;
    height:2.78rem;
    background:rgba(255,255,255,1);
    text-align: center;
    line-height: 2.78rem;
    cursor: pointer;
    margin: 0;
}
.contactUl .codeStyle .sendCode i{
    display: block;
    width:6.72rem;
    height:2.78rem;
    border:0.06rem solid rgba(66,153,35,1);
    color: rgba(66,153,35,1);
    font-style: normal;
}
#longerInput{
    min-height:7.33rem;
    align-items: flex-start;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
}
#longerInput textarea{
    width: 90%;
    min-height: 98%;
    height: 5rem;
    resize: none;
}
.submit{
    width:62.72rem;
    height:2.78rem;
    background:linear-gradient(180deg,rgba(105,181,63,1) 0%,rgba(66,153,35,1) 100%);
    border-radius:0.56rem;
    text-align: center;
    color: #fff;
    line-height: 2.78rem;
    font-size:0.78rem;
    margin: 1rem auto;
    margin-bottom:2rem; 
    cursor: pointer;
}
/* 资料下载 */
.msgUl{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-top:0.06rem solid rgba(228,225,225,1);
    border-left:0.06rem solid rgba(228,225,225,1);
    font-size:0.78rem;
    box-sizing: border-box;
}
.msgLi{
    width:16.59rem;
    height:16rem;
    background:rgba(255,255,255,1);
    border-right:0.06rem solid rgba(228,225,225,1);
    border-bottom:0.06rem solid rgba(228,225,225,1);
    box-sizing: border-box;
}
.msgUlTwo{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-left:0.06rem solid rgba(228,225,225,1);
    /* border-top:0.06rem solid rgba(228,225,225,1); */
    font-size:0.78rem;
    box-sizing: border-box;
}
.msgLiTwo{
    width:16.59rem;
    height:16rem;
    background:rgba(255,255,255,1);
    border-right:0.06rem solid rgba(228,225,225,1);
    border-top:0.06rem solid rgba(228,225,225,1);
    border-bottom:0.06rem solid rgba(228,225,225,1);
    box-sizing: border-box;
}
.msgUl li img,.msgUlTwo li img{
    margin: 0 auto;
    margin-top: 1.8rem;
    width:9rem;
    height:7rem;
}
.excelName{
    font-weight:400;
    text-align: center;
    margin: 1rem 0 1.5rem 0;
}
.downBtn{
    width:7.44rem;
    height:2.22rem;
    color: #fff;
    text-align: center;
    line-height: 2.22rem;
    background:linear-gradient(180deg,rgba(105,181,63,1) 0%,rgba(66,153,35,1) 100%);
    border-radius:0.56rem;
    margin: 0.2rem auto;
    cursor: pointer;
}
/* 提交留言成功 */
.successModal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 1000;
    width:100%;
    height:100%;
    background:rgba(48,48,48,0.7);
    font-size:1.11rem;
    text-align: center;
    line-height: 3.22rem;
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
.dialogDiv{
}
.dimg1{
    width:22.22rem;
    height:17.11rem;
}
.dimg2{
    width:2.78rem;
    height:2.78rem;
    margin-top: 2rem;
    cursor: pointer;
}
.dp1{
    height:2.67rem;
    background:rgba(246,246,235,1);
    text-align: left;
    border-radius:0.44rem 0.44rem 0rem 0rem;
    font-size:0.78rem;
    color: #320C07;
    padding-left: 1rem;
}
.dp2{
    font-size:1rem;
    font-weight:400;
    color:rgba(48,48,48,1);
    text-align: center;
}
.dp3{
    font-size:0.78rem;
    font-weight:400;
    color:rgba(48,48,48,1);
    text-align: center;
}
.dialogFooter{
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content:center;
    justify-content: center;
    -webkit-align-items:center;
    align-items: center;
    margin-top: 1rem;
}
.dialogFooter p{
    width:5.33rem;
    height:1.78rem;
    font-size:0.78rem;
    color: #429923;
    border:0.06rem solid rgba(66,153,35,1);
    text-align: center;
    line-height: 1.78rem;
    border-radius:0.44rem;
    cursor: pointer;
}
</style>
<style>
.ContactUs .el-input__inner{
    border: none;
}
.ContactUs .el-select-dropdown__item .selected{
    color: #429923;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .5s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}
</style>
