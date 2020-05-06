import {
  request
} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    data: {
      iid
    }
  })
}
export function getRecommends() {
  return request({
    url: '/recommend'
  })
}
export class GoodsBaseInfo {
  constructor(itemInfo, colums, services) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.desc = itemInfo.desc;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.iid = itemInfo.iid
    this.colums = colums;
    this.services = services;
    this.readPrice = itemInfo.lowNowPrice;
  }
}
export class ShopInfo {
  constructor(shopinfo) {
    this.logo = shopinfo.shopLogo;
    this.name = shopinfo.name;
    this.fans = shopinfo.cFans;
    this.sells = shopinfo.cSells;
    this.score = shopinfo.score;
    this.goodsCount = shopinfo.cGoods;
  }
}
export class Cart {
  constructor(detailInfo, itemInfo) {
    this.desc = detailInfo.desc;
    this.img = detailInfo.detailImage[0].list[0];
    this.price = itemInfo.lowNowPrice;
    this.title = itemInfo.title;
    this.iid = itemInfo.iid
  }
}
export class ParamInfo {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.info = info.set;
    this.sizes = rule.tables;
  }
}