// components/w-goods/w-goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{}
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
    goodsclick(){
      const iid = this.data.item.iid
      wx.navigateTo({
        url: `/pages/home/detail/detail?iid=${iid}`,
        success: (result)=>{
          console.log(result);
        },
        fail: (err)=>{console.log(err);},
      });
    }
  }
})
