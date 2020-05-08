// components/w-select/w-select.js
const computedBehavior = require('miniprogram-computed')
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [computedBehavior],
  properties: {
    Show: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},
  computed: {
    isShow(data) {
      return data.Show
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    iconclick() {
      this.setData({
        Show: !this.data.Show
      })
      this.triggerEvent("select")
    }
  }
})