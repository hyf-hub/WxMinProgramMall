// pages/categroy/childCmps/w-categroyist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Categorylist:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
    // scrolltop:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e){
      const index = e.target.dataset.index
      this.setData({
        currentIndex:index
      })
      this.triggerEvent("listclcik", this.data.Categorylist[index].maitKey)
      this.triggerEvent("setcurrentIndex",index)
    },
    // setscrollTop(top){
    //   console.log(top);
    //   this.setData({
    //     scrolltop:top
    //   })
    // }
  }
})
