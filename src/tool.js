import Cookies from 'js-cookie';
import axios from 'axios';
import ApiUrl from './api-url';
// import { MessageBox } from 'element-ui';

export function genReqBody(param, other) {
  let body = {
    token:window.localStorage.getItem('token') == 'undefined' ? '' : window.localStorage.getItem('token'),
    param,
    appId: 3
  };

  return body;
}

export function uploadFile(file) {
  var formData = new FormData();
  formData.append('file', file);
  return axios({
    method: 'POST',
    url: ApiUrl.file,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    if (!res.data) {
      throw new Error('上传失败');
    }
    if (res.data.code !== 0) {
      throw new Error(res.data.showMsg);
    }
    return res.data.data.fullFilename;
  });
}

export var M = {
  /**
   * 乘法
   * Tool.M.multipy(1.002, 10, 10)
   */
  multipy() {
    let digits = 0;
    return [...arguments].reduce((r, n) => {
      n = Number(n);
      let segments = n.toString().split('.');
      if (segments.length > 1) {
        digits += segments[1].length;
      }
      return r * Number(segments.join(''))
    }, 1) / Math.pow(10, digits);
  },
  /**
   * 除法
   * @param {*} dividend 被除数
   * @param {*} divisor 除数
   */
  divide(dividend, divisor) {
    dividend = Number(dividend);
    divisor = Number(divisor);

    let digits = 0;

    let segments = dividend.toString().split('.');
    if (segments.length > 1) {
      digits -= segments[1].length;
    }
    dividend = Number(segments.join(''));

    segments = divisor.toString().split('.');
    if (segments.length > 1) {
      digits += segments[1].length;
    }
    divisor = Number(segments.join(''));

    return (dividend / divisor) * Math.pow(10, digits);
  }
}

export var qs = {
  stringify: function (obj) {
    if (!obj) {
      return '';
    }
    return Object.keys(obj).map(key => key + '=' + encodeURIComponent(obj[key])).join('&');
  },
  parse: function (str) {
    return str.split('&').reduce((obj, it) => {
      let arr = it.split('=');
      obj[arr[0]] = decodeURIComponent(arr[1]);
      return obj;
    }, {});
  }
};

export function request(url, param, options) {
  let body = genReqBody(param, {
    token: window.localStorage.getItem('token') == 'undefined' ? '' : window.localStorage.getItem('token'),
    unionId: Cookies.get('unionId'),
    appId: 17,
    userType: 0,
    ...options
  })
  return axios({  method: 'POST', url,  data: body}).then(res => {
    if (!res.data) {
      throw new Error('服务器错误');
    }
    if (res.data.code !== 0) {
      throw new Error(res.data.showMsg);
    }
    return res.data;
  })
}

export function padTwoZero(num) {
  return ('00' + num).substr(-2);
}

// export function Box(message) {
//   return MessageBox.confirm(message, "提示", {
//     confirmButtonText: "确定",
//     distinguishCancelAndClose: true,
//     showClose: false,
//     showCancelButton: false,
//     closeOnClickModal: false,
//     type: 'warning'
//   })
// }

export function formatDateTimeT(ts, format = 'YYYY-MM-DD HH:mm:ss') {
  let date = new Date(ts);
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => {
    switch (match) {
      case 'YYYY':
        return date.getFullYear();
      case 'MM':
        return padTwoZero(date.getMonth() + 1);
      case 'DD':
        return padTwoZero(date.getDate());
      case 'HH':
        return padTwoZero(date.getHours());
      case 'mm':
        return padTwoZero(date.getMinutes());
      case 'ss':
        return padTwoZero(date.getSeconds());
      default:
        return match;
    }
  });
};

export function formatDateTimeG(ts, format = 'YYYY/MM/DD') {
  let date = new Date(ts);
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => {
    switch (match) {
      case 'YYYY':
        return date.getFullYear();
      case 'MM':
        return padTwoZero(date.getMonth() + 1);
      case 'DD':
        return padTwoZero(date.getDate());
      default:
        return match;
    }
  });
};

// 过滤价格
export function toFixed(num, n) {
  var result = parseFloat(num);
  result = Math.round(num) / n;
  var s_x = result.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += '0';
  }
  return s_x;
}

/**手机号中间四位替换成*号 */
export function hidePhone(data){
  var result = data.substr(0,3)+"****"+data.substr(7);
  return result;
};
/** 价格计算 */
export function add(num1, num2) {
  var r1, r2, m, n;
  try { r1 = num1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = num2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return ((num1 * m + num2 * m) / m).toFixed(n);
}
export function sub(num1, num2) {
  var r1, r2, m, n;
  try { r1 = num1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = num2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  n = (r1 >= r2) ? r1 : r2;
  m = Math.pow(10, Math.max(r1, r2));
  return ((num1 * m - num2 * m) / m).toFixed(n);
}
export function mul(num1, num2) {
  var m = 0;
  try { m += num1.toString().split(".")[1].length } catch (e) { }
  try { m += num2.toString().split(".")[1].length } catch (e) { }
  return (Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", ""))) / Math.pow(10, m)
}
export function div(arg1, arg2) {
  var t1 = 0, t2 = 0, r1, r2;
  try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
  try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}