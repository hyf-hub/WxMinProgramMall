// components/w-tabbar/w-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleType:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event){
      const index = event.target.dataset.index;
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('typechange',index)
    }
  }
})
