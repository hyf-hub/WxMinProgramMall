import {request} from './request'

export function getHomeData() {
  return request({
    url: '/home/multidata'
  })
}

export function getgoodsData(type,page) {
  return request({
    url: '/home/data',
    data:{
      type,
      page
    }
  })
}