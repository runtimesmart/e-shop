/**
 * 配置编译环境和线上环境
 */

let baseUrl = ''
let routerMode = 'hash'
let baseImgPath
let pageSize = 10

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://server-tshopcrm.chetuobang.com'
  // baseUrl = 'http://120.55.240.254:18204'
  // baseUrl = 'http://192.168.60.31:18204'
  // baseUrl = 'https://tsapi.chetuobang.com';
  // baseUrl = 'https://www.easy-mock.com/mock/5c3c4a64687e5c3ded21833b/vm'
  // baseImgPath = '../assets/img/';
} else {
  baseUrl = 'http://server-tshopcrm.chetuobang.com'
  // baseUrl = 'http://120.55.240.254:18204'
  // baseUrl = 'https://tsapi.chetuobang.com';
  //   baseImgPath = '//elm.cangdu.org/img/';
}

export {
  baseUrl,
  routerMode,
  baseImgPath,
  pageSize
}
