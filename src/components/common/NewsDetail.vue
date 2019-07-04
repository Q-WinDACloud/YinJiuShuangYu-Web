<template>
    <div class="NewsDetail" :style="curHeight">
        <div class="globalStyle">
            <p class="p1"><span @click="toNew">{{$t("NewsDetail.p1")}}</span> > {{$t("NewsDetail.p2")}}</p>
            <p class="title">{{title}}</p>
            <div class="content">
                <p v-html="content"></p>
            </div>
            <div class="foot">
                <p class="companyName">江苏林德曼新材料科技有限公司</p>
                <p class="creatTime">{{filterDate(createTime)}}</p>
            </div>
            <div class="pageDiv">
                <p :class="pageNum == 1 ? 'activeN' : ''" @click="upBtn">{{$t("NewsDetail.s1")}}</p>
                <p :class="pageNum == totalRecords ? 'activeN' : 'activeP'" @click="downBtn">{{$t("NewsDetail.s2")}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import ApiUrl from "@/api-url";
import Cookies from "js-cookie";
import { ApiCommonMethodMixin } from "@/mixin";
import * as Tool from '@/tool';
export default { 
    mixins: [ApiCommonMethodMixin],
    data(){
        return{
            curHeight:null,
            id:null,
            title:null,
            content:null,
            createTime:null,
            tabNum:null,
            pageNum:1,
            totalRecords:null,
        }
    },
    beforeMount(){
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        this.curHeight ='min-height:'+ h +'px;'; //减去页面上固定高度height
    },
    mounted(){
        document.documentElement.scrollTop=1;
        if(this.$route.query.id){
            this.id = Cookies.get('id') ? Cookies.get('id') :this.$route.query.id;
            this.tabNum = this.$route.query.tabNum;
            this.pageNum = Cookies.get('pageNum') ? Cookies.get('pageNum') :this.$route.query.pageNum;
            this.totalRecords = Cookies.get('totalRecords') ? Cookies.get('totalRecords') : this.$route.query.totalRecords;
            this.getMsg(this.id);
        }
    },
    methods:{
        // 获取编辑信息
        getMsg(id){
            let param = id;
            this.httpPost(ApiUrl.news.queryDetail, param).then(
                res => {   
                    this.title = res.title;
                    let main = res.content.replace(/[\r\n]/g,'<br>');
                    this.content = main.split(' ').join('&nbsp');
                    this.createTime = res.createTime;
                },
                err => {
                    console.log(err);
                }
            );
        },
        getList(){
            let param = {
                pageNum: this.pageNum,
                pageSize: 1,
                base:this.tabNum==0 ? '山东基地' : '江苏基地'
            };
            this.httpPost(ApiUrl.news.list, param).then(
                res => {   
                    this.title = res.dataList[0].title;
                    let main = res.content.replace(/[\r\n]/g,'<br>');
                    this.content = main.split(' ').join('&nbsp');
                    this.createTime = res.dataList[0].createTime;
                    this.pageNum = res.pageNum;
                    this.totalRecords = res.totalRecords;

                    Cookies.set('id',res.dataList[0].id);
                    Cookies.set('pageNum',res.pageNum);
                    Cookies.set('totalRecords',res.totalRecords);
                },
                err => {
                    console.log(err);
                }
            );
        },
        // 上一篇
        upBtn(){
            if(this.pageNum == 1){
                return;
            }
            this.pageNum = this.pageNum -1;
            this.getList();
        },
        // 下一篇
        downBtn(){
            if(this.pageNum == this.totalRecords){
                console.log(this.pageNum)
                return;
            }
            this.pageNum = Number(this.pageNum) + 1;
            this.getList();
        },
        // 跳转界面
        toNew(){
            this.$router.push({name:"CompanyIntr",params:{top:1}})
        },
        // 时间过滤
        filterDate(time) {
            return Tool.formatDateTimeG(time);
        },
    },
    destroyed(){
        Cookies.remove("id")
        Cookies.remove("pageNum")
        Cookies.remove("totalRecords")
    }
}
</script>
<style scoped>
.NewsDetail{
    position: relative;
}
.p1{
    font-size:0.89rem;
    font-weight:400;
    color:rgba(48,48,48,1);
    margin: 2rem 0 1rem 0;
}
.p1 span{
    cursor: pointer;
}
.pageDiv{
    position: absolute;
    bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    font-size:0.78rem;
    margin-bottom: 2rem;
}
.pageDiv p{
    cursor: pointer;
}
.pageDiv p:nth-child(1){
    margin-right: 2rem;
}
.pageDiv .activeP{
    color: #303030;
}
.pageDiv .activeN{
    color: #AAAAAA;
}
.title{
    font-size:0.89rem;
    font-weight:600;
    color:rgba(48,48,48,1);
    margin-bottom: 1rem;
    text-align: center;
}
.content{
    font-size:0.78rem;
    color: #303030;
}
.content p{
    /* text-indent: 2em; */
    color: #303030;
    line-height: 1.8rem;
}
.foot{
    margin: 4rem 0 5rem 0;
}
.foot p{
    text-align: right;
}
.companyName{
    font-size:0.89rem;
    font-weight:400;
    color:rgba(48,48,48,1);
    margin-bottom: 0.8rem;
}
.creatTime{
    font-size:0.89rem;
    font-weight:400;
    color:rgba(155,155,155,1);
}
</style>

