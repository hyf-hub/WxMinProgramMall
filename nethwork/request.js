import {
  ADDRESS,
  TIMEOUT
} from './address'
export function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: ADDRESS + options.url,
      timeout: TIMEOUT,
      data:options.data,
      success: function(res){
          resolve(res);
      },
      fail:reject
    })
  })
}