import {
  Loading
} from 'element-ui'
import axios from './axios'

export function get (url, data = {}) {
  let loadingInstance = Loading.service({
    fullscreen: true
  })
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: data
    }).then(response => {
      loadingInstance.close()
      if (response.data) {
        if (response.data.code === 0) {
          console.log(response.data)
          return resolve(response.data)
        } else {
          // this.$message.error(response.message)
          return resolve(response.data)
        }
      }
    }).catch(err => {
      loadingInstance.close()
      reject(err)
    })
  })
}

export async function post (url, data = {}) {
  let loadingInstance = Loading.service({
    fullscreen: true
  })
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        loadingInstance.close()
        if (response.data.code === 0) {
          return resolve(response.data)
        } else {
          return resolve(response.data)
          // this.$message.error(response.message)
        }
      })
      .catch(err => {
        loadingInstance.close()
        reject(err)
      })
  })
}

// export async function exportFile (url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.EXPORT(url, data)
//       .then(response => {
//         if (response.data.code === 0) {
//           return resolve(response.data)
//         } else {
//           return resolve(response.data)
//         }
//       })
//       .catch(error => {
//         reject(error)
//       })
//   })
// }

// export default {
//   // 导出报表
//   exportExcel: params => {
//     return axios.EXPORT('outOfDate/excel/export', params)
//   }
// }

// export async function upload (url, data = {}) {
//   let loadingInstance = Loading.service({
//     fullscreen: true
//   })
//   return new Promise((resolve, reject) => {
//     axios.upload(url, data)
//       .then(response => {
//         loadingInstance.close()
//         if (response.data.code === 0) {
//           return resolve(response.data)
//         } else {
//           return resolve(response.data)
//           // this.$message.error(response.message)
//         }
//       })
//       .catch(err => {
//         loadingInstance.close()
//         reject(err)
//       })
//   })
// }
