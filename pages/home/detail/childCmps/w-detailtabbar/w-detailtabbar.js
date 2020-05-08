// pages/home/detail/childCmps/w-detailtabbar/w-detailtabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    shoplist: [{
      icon: "/assets/images/detail/service.png",
      title: "客服",
    }, {
      icon: "/assets/images/detail/shop.png",
      title: "店铺",
    }, {
      icon: "/assets/images/detail/collect.png",
      title: "收藏",
    }]

  },
  /**
   * 组件的方法列表
   */
  methods: {
    buy() {
      wx.showModal({
        title: '温馨提示',
        content: '请到购物车进行结账',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
      });
    },
    addcart() {
      this.triggerEvent('addcart')
    }
  }
})