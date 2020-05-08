// pages/cart/childCpms/w-cartbottom/w-cartbottom.js
// const computedBehavior = require('miniprogram-computed')
// const appInst = getApp();

Component({
  /**
   * 组件的属性列表
   */
  // behaviors: [computedBehavior],
  properties: {
    isShow:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // cartlist: appInst.globalData.catlist,
  },
  // computed: {
  //   selected(data) {
  //     let cartlist = [...data.cartlist]
  //     if (cartlist) {
  //       let length = cartlist.filter(item => {
  //         console.log(item);
  //         return item.selected
  //       }).length
  //       return length
  //     }
  //   }
  // },
  /**
   * 组件的方法列表
   */
  methods: {
    select(){
      this.triggerEvent("select")
    },
    // select(){
      // let select = this.selectComponent('#select')
      // console.log(select);
      // select.setData({
      //   isShow:false
      // })
      // console.log(appInst.globalData.catlist);
      // appInst.globalData.catlist = this.data.cartlist.map(item => {
      //   console.log(item);
      //   item.select = !item.select
      //   return item
      // })
      // appInst.Allselect(true)
    // }
  }
})