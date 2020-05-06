// pages/home/detail/childCmps/w-shopinfo/w-shopinfo.js
// const computedBehavior = require('../../../../../npms/miniprogram_npm/miniprogram-computed')
// const computedBehavior = require('miniprogram-computed')
Component({
  /**
   * 组件的属性列表
   */
  // behaviors: [computedBehavior],
  properties: {
    info:{
      type:Object,
      value:null
    }
  },
  computed: {
    isBetter(isBetter){
      return isBetter?'red':'green'
    },
    test(){
      return '1111'
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

  }
})
