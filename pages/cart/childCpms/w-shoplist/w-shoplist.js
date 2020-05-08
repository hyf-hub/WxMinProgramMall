// pages/cart/childCpms/w-shoplist/w-shoplist.js
const appInst =  getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartlist:{
      type:Object,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    select(e) {
        const index = e.currentTarget.dataset.index;
        this.triggerEvent("select",index)
    }
  }
})