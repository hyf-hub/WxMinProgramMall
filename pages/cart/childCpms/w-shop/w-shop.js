// pages/cart/childCpms/w-shop/w-shop.js
const appInst = getApp();
const computedBehavior = require('miniprogram-computed')
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [computedBehavior],
  properties: {
    item: {
      type: Object,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cartlist: appInst.globalData.catlist,
    index: 0
  },
  computed: {
    isShow(data) {
      return data.item && data.item.select ? true : false
    },
    cart(data) {
      return appInst.globalData.catlist[data.index].select
    }
  },
  watch: {
    'appInst.globalData.catlist': function (cartlist) {
      console.log('变化');
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    select() {
      this.triggerEvent("select")
      // let cartlist = appInst.globalData.catlist
      // let iid = this.data.item.iid
      // let index = cartlist.findIndex(item => {
      //   return item.iid = iid
      // })
      // console.log(cartlist);
      // cartlist[index].select = !cartlist[index].select
      // appInst.globalData.setData({
      //   cartlist
      // })
      // appInst.setselect(index)
      // console.log(appInst.globalData.catlist);
    },
    setShow(show) {
      this.setData({
        'item.select': show
      })
    }
  },

})