// pages/home/detail/childCmps/w-shopinfo/w-shopinfo.js
const computedBehavior = require('miniprogram-computed')
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [computedBehavior],
  properties: {
    info: {
      type: Object,
      value: null
    }
  },
  computed: {
    isBetter(isBetter) {
      return isBetter ? 'red' : 'green'
    },
    sell(data) {
      return data.info?(data.info.sells > 10000 ? (data.info.sells / 10000).toFixed(1) + "万" : data.info.sells):'0'
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