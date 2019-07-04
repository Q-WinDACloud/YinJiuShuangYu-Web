import axios from 'axios';
import * as Tool from './tool';
import Cookies from 'js-cookie';

export var ApiCommonMethodMixin = {
  methods: {
    getUnionId() {
      return Cookies.get('unionId');
    },
    getToken() {
      return window.localStorage.getItem('token') ? window.localStorage.getItem('token') :'';
    },
    getShortUnionId() {
      return Cookies.get('shortUnionId');
    },
    genReqBody(param, options) {
      let other = {
        token: this.getToken(),
        appId: 3,
        unionId: this.getUnionId(),
        ...options
      };
      return Tool.genReqBody(param, other);
    },
    httpPost(url, param, options) {
      return axios({
        method: 'POST',
        url,
        data: this.genReqBody(param, options)
      }).then(res => {
        if (!res.data) {
          throw new Error('服务器错误');
        }
        if (res.data.code == 1) {
          // throw new Error(Tool.messageBox(res.data.msg));
        }
        if (res.data.code == 2) {
          // this.$router.push({path: '/Login'})
        }
        if (res.data.code == 5500) {
          // throw new Error(Tool.messageBox(res.data.msg).then(action => {
          //   if (action == 'confirm') {
          //     this.$router.push({path: '/Login'})
          //     location.reload(); 
          //   }
          // }));
        }
        return res.data.single ? res.data.single : res.data;
      })
    }
  }
};
