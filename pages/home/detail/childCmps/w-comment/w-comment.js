// pages/home/detail/childCmps/w-comment/w-comment.js
import {
  formatTime
} from "../../../../../utils/util.js"
const computedBehavior = require('miniprogram-computed')
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [computedBehavior],
  properties: {
    commentInfo: {
      type: Object,
      value: null
    }
  },
  computed: {
    detailtiem(data) {
      if (data.commentInfo) {
        const real = data.commentInfo.created * 1000
        const date = formatTime(new Date(real), '-')
        return date
      }
      return 0
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  show() {
    let tiem = new Data(this.data.commentInfo.created)
    console.log(formatTime(time));
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})