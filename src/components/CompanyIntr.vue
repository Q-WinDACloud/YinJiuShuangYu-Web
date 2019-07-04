<template>
    <div class="CompanyIntr">
        <div class="banner">
            <img src="/static/imgs/icon_banner6.png" alt="" class="bigImg">
            <img :src='$t("CompanyIntr.bannerImg")' alt="" class="smallImg">
        </div>
        <div class="globalStyle">
            <div class="address">
                <div class="left">
                    <p>{{$t("CompanyIntr.p1")}}</p>
                    <img src="/static/imgs/icon_about1.png" alt="">
                </div>
                <img src="/static/imgs/icon_about2.png" alt="" class="img">
            </div>
            <div class="newsModal">
                <p class="title">{{$t("CompanyIntr.title")}}</p>
                <ul class="newsModalUl">
                    <li @click="tabChange(0)" :class="tabNum == 0 ? 'activeTab' : ''">{{$t("CompanyIntr.news[0]")}}</li>
                    <li @click="tabChange(1)" :class="tabNum == 1 ? 'activeTab' : ''">{{$t("CompanyIntr.news[1]")}}</li>
                </ul>
                <ul class="mainUl" v-if="list.length>0">
                    <li v-for="(item,index) of list" :key="index" @click="toDetail(item,index)">
                        <div class="liTop">
                            <p>{{item.title}}</p>
                            <p>{{filterDate(item.createTime)}}</p>
                        </div>
                        <p class="mainContent">{{filerText(item.content)}}</p>
                    </li>
                </ul>
            </div>
            <p class="noList" v-if="list.length<=0">
                暂无文件
            </p>
            <!-- 分页 -->
            <div class="pagination" v-if="totalRecords>0">
                {{pageNum}}/{{Math.ceil(pagetotle)}}页
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="pageNum" :page-size="pageSize" layout="prev, pager, next" :total="totalRecords">
                </el-pagination>
                跳转至<input type="number" v-model="jumpPage" class="inptStyle"/>
                <p class="goStyle" @click="goBtn">GO</p>
            </div>
        </div>
    </div>
</template>
<script>
import ApiUrl from "@/api-url";
import { ApiCommonMethodMixin } from "@/mixin";
import Cookies from "js-cookie";
import * as Tool from '@/tool';
import { Message} from 'element-ui';
export default { 
    mixins: [ApiCommonMethodMixin],
    data(){
        return{
            list:[],
            pageSize:5,
            pageNum:1,
            totalRecords:null,
            jumpPage:null,
            tabNum:0,
            pagetotle:null,
        }
    },
    mounted(){
        this.getList();
        if(this.$route.params.top){
            document.documentElement.scrollTop= 1000;
        }else{
            document.documentElement.scrollTop=1;
        }
    },
    methods:{
        // 获取列表
        getList(){
            let param = {
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                base:this.tabNum==0 ? '山东基地' : '江苏基地'
            };
            this.httpPost(ApiUrl.news.list, param).then(
                res => {   
                    this.list = res.dataList;
                    this.totalRecords = res.totalRecords;
                    this.pagetotle = Number(res.totalRecords / this.pageSize)
                },
                err => {
                    console.log(err);
                }
            );
        },
        // 过滤文本
        filerText(text){
            if(text.length>=165){
                return text.substring(0,166)+'...'
            }else{
                return text;
            }
        },
        // 新闻详情页
        toDetail(item,index){
            if(this.pageNum > 1){
                var num = ((this.pageNum-1) * this.pageSize) + index + 1;
            }else{
                var num = index + 1
            }
            this.$router.push({path:"/main/CompanyIntr/NewsDetail",query:{id:item.id,tabNum:this.tabNum, pageNum:num , totalRecords:this.totalRecords}})
        },
        // tab切换列表
        tabChange(num){
            this.tabNum = num;
            this.jumpPage = null;
            this.pageNum = 1;
            this.getList();
        },
        // 跳转页面
        goBtn(){
            let num = Number(this.jumpPage);
            if(num > Math.ceil(this.pagetotle)){
                Message({
                    showClose: true,
                    message: '查询页码不得大于总页码数',
                    type: 'error'
                });
                this.jumpPage = null;
                return;
            }
            if(num != 0){
                this.pageNum = num;
                this.getList();               
            }
        },
        // 分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.jumpPage = null;
            this.pageNum = val;
            this.getList();
        },
        // 时间过滤
        filterDate(time) {
            return Tool.formatDateTimeG(time);
        },
    }
}
</script>

<style scoped>
.noList{
    text-align: center;
    margin: 4rem 0 9rem 0;
    font-size:1.33rem;
    color: #AAAAAA;
    font-weight:400;
    width:100%;
    height:9.56rem;
    background:rgba(241,241,241,1);
    text-align: center;
    line-height: 9.56rem;
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
  left: 25%;
}
.address{
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    justify-items: center;
    font-size:0.78rem;
}
.left{
    width:24.89rem;
    margin-right: 1rem;
}
.left p{
  text-indent:2em;
  margin-bottom: 1rem;
}
.img{
    width:40.89rem;
    height:18.39rem;
}
.left span{
    display: flex;
    justify-content: center;
    align-items: center;
}
.left span img{
    width:23.5rem;
height:12.89rem;
}
.title{
    font-size:2rem;
    font-weight:400;
    color:rgba(48,48,48,1);
    line-height:2.78rem;
    text-align: center;
    margin: 3rem 0 1rem 0;
}
.newsModalUl{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:0.78rem;
    margin-bottom: 1rem;
}
.newsModalUl li{
    width:11.67rem;
    height:2.22rem;
    background:rgba(255,255,255,1);
    border:0.06rem solid rgba(228,225,225,1);
    text-align: center;
    line-height: 2.22rem;
    cursor: pointer;
}
.newsModalUl li:nth-child(1){
    margin-right: 1rem;
}
.newsModalUl .activeTab{
    border:0.06rem solid #429923;
    color: #429923;
}
.mainUl {
    min-height: 23rem;
    margin-top: 2rem;
}
.mainUl li{
    width: 100%;
    height: 5.5rem;
    border-bottom:0.06rem solid #E5E3E3;
    padding-top: 1rem;
    cursor: pointer;
}
.liTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.liTop p:nth-child(1){
    font-size:0.89rem;
    width:50rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.liTop p:nth-child(2){
    font-size:0.89rem;
    color:rgba(155,155,155,1);
}
.mainContent{
    height: 2.5rem;
    margin-top: 0.4rem;
    font-size:0.78rem;
    text-indent: 2em;
    line-height: 1.3rem;
    overflow: hidden;
}
/* 分页 */
.pagination{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 7rem 0;
    font-size:0.78rem;
}
.inptStyle{
    width:2.67rem;
    height:1.33rem;
    background:rgba(255,255,255,1);
    border-radius:0.22rem;
    border:0.06rem solid rgba(200,208,218,1);
    text-align: center;
    line-height: 1.33rem;
    margin: 0 0.3rem 0 0.3rem;
}
.goStyle{
    width:2rem;
    height:1.33rem;
    background:rgba(66,153,35,1);
    border-radius:0.22rem;
    color: #fff;
    font-size:0.78rem;
    text-align: center;
    cursor: pointer;
    line-height: 1.33rem; 
}
</style>
<style>
.CompanyIntr .el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #429923;
    border:0.06rem solid #429923;
}
.el-pager li.active{
    background-color: #429923;
    border:0.06rem solid #429923;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    background-color: #fff;
    border:0.06rem solid rgba(200,208,218,1);
    border-radius:0.22rem;
}
</style>
