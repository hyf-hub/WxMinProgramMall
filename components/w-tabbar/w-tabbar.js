// components/w-tabbar/w-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleType: {
      type: Array,
      value: []
    },
    type: {
      type: String,
      value: 'pop'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      const index = event.target.dataset.index;
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('typechange', index)
    },
    // synctype(e) {
    //   let temp = 0;
    //   switch (e) {
    //     case 'pop':
    //       temp = 0;
    //       break
    //     case 'new':
    //       temp = 1;
    //       break
    //     case 'sell':
    //       temp = 2;
    //       break
    //   }
    //   this.setData({
    //     currentIndex: temp
    //   })
    //   console.log(this.data.currentIndex);
    // },
    settype(index) {
      this.setData({
        currentIndex:index
      })
    }
  },
  // ready() {
  //   let e = this.data.type
  //   this.synctype(e)
  // },
})