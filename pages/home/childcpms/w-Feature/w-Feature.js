// pages/home/childcpms/w-Feature/w-Feature.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    Isloaded:false
  },
  ready(){
  },
  /**
   * 组件的方法列表
   */
  methods: {
    loaded(){
      if(!this.data.Isloaded)
        this.triggerEvent("loaded")
    }
  }
})
