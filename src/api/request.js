import {post} from '@/config/http'

// 更新会员权益介绍图片接口
export const updateRightsImg = data => post('/rights/desc/modify', data)
// 获取会员权益介绍图片接口
export const getRightsImg = data => post('/rights/desc/query', data)
// 添加会员权益接口
export const addRights = data => post('/rights/add', data)
// 获取供应商列表
export const getSupplier = data => post('/supplier/list', data)
// 获取权益兑换码购买列表
export const getRightsCode = data => post('/rights/code/buy/list', data)

let config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  transformRequest: [function (data) {
    return data
  }]
}
export const addCoupon = data => post('/coupon/add', data, config)

export const couponDetail = data => post('/coupon/detail', data)
export const uploadFile = data => post('/upload', data)

let exportConfig = {
  responseType: 'blob'
}
export const exportFiles = data => post('/coupon/export/sku', data, exportConfig)
