// const ENV = "dev";
const ENV = "test";
// const ENV = "prod";

let baseUrl = {
    back: {
        dev: "http://192.168.2.144:8092",
        test: "http://192.168.2.9:8092",
        prod: "https://www.yjenjoy.cn",
    },
    api:{
        dev: "http://192.168.2.143:8090",
        test: "http://192.168.2.9:8090",
        prod: "https://www.yjenjoy.cn",
    }
};

const b = (c = "website", e = "dev") => {
    if (ENV !== "dev") {
        return baseUrl[c][ENV];
    } else {
        return baseUrl[c][e];
    }
};

export default {
    back: b('back'),
    form:{
        save: b("back") + "/yingjiu-back/form/skip/save", //用户留言
    },
    code:{
        getSmsCode:b("api")+"/jinghan-user/api/smsCode/v165/skip/getSmsCode",//获取验证码
        SmsCode:b("api")+"/jinghan-user/api/smsCode/skip/validate/SmsCode",//获取验证码
    },
    news:{
        list: b("back") + "/yingjiu-back/news/skip/list", //新闻列表
        queryDetail: b("back") + "/yingjiu-back/news/skip/queryDetail", //新闻详情
    },
    document:{
        list: b("back") + "/yingjiu-back/document/skip/list", //产品文档列表
        countDownload: b("back") + "/yingjiu-back/document/skip/countDownload", //统计资料下载
    }
};