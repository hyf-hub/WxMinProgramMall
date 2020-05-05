// pages/home/home.js
import {
  getHomeData,
  getgoodsData
} from '../../nethwork/home'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: {},
    feature: {},
    titleType: ['流行', '新款', '精选'],
    goodslist: {
      'pop': {
        list: []
      },
      'new': {
        list: []
      },
      'sell': {
        list: []
      }
    },
    currentType: 'pop',
    IsBackShow: false,
    scrollTop: 0,
    IsTarbBar1: false,
    TabbarTop: 0,
    TarbarHeight: 0,
    currentScroll: 0
  },
  _getHomeData() {
    getHomeData()
      .then(res => {
        const banner = res.data.data.banner.list.map(item => item.image)
        this.setData({
          banner,
          feature: res.data.data.recommend.list
        })
      })
  },
  _getgoodsData(type) {
    let page = this.data.goodslist[this.data.currentType].page + 1 || 1;
    getgoodsData(type, page)
      .then(res => {
        let temp = this.data.goodslist;
        temp[type].list.push(...res.data.data.list)
        temp[type].page = page
        this.setData({
          goodslist: temp
        })
        wx.hideLoading();
      })
  },
  getData() {
    this._getHomeData();
    this._getgoodsData('pop');
    this._getgoodsData('new');
    this._getgoodsData('sell');
  },
  // tabbar点击事件
  typechange(event) {
    const index = event.detail;
    let temp = 'pop'
    switch (index) {
      case 0:
        temp = 'pop';
        break
      case 1:
        temp = 'new';
        break
      case 2:
        temp = 'sell';
        break
    }
    // 记录当前滚动的位置
    // console.log(this.selectComponent('#tabbar'));
    console.log(this.data.currentScroll);
    //设置上一个元素的高度
    let item = this.data.goodslist
    let type = this.data.currentType
    item[type].scrollTop = this.data.currentScroll
    // 获取当前元素的高度
    let currentScroll = item[temp].scrollTop ? item[temp].scrollTop : this.data.TabbarTop + 50
    this.setData({
      currentType: temp,
      goodslist: item,
      scrollTop: currentScroll
    })
    // 同步标签
    this.selectComponent('#tabbar').settype(index);
    this.selectComponent('#tabbar-temp').settype(index);

    // let tabbar1 =  this.selectComponent('#tabbar1')
    // tabbar1.changetype()
    // tabbar.changeType(this.data.currentType);
  },
  backtop() {
    this.setData({
      scrollTop: 584
    })
  },
  // synctype(type) {
  //   let temp = 0;
  //   switch (type) {
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
  //   return temp
  // },
  imgload() {
    const query = wx.createSelectorQuery()
    query.select('#tabbar').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(res => {
      // res[0].top // #the-id节点的上边界坐标
      this.setData({
        TabbarTop: res[1].scrollHeight, // 显示区域的竖直滚动位置
        TarbarHeight: res[0].height
      })
    })
  },
  // 滚动事件
  scrollchange(event) {
    // 返回顶部按钮是否显示
    const IsShow = this.data.IsBackShow
    const tabbar = this.data.IsTarbBar1
    const tabbartop = this.data.TabbarTop + this.data.TarbarHeight
    const scrollTop = event.detail.scrollTop
    // this.currentScroll = scrollTop;
    this.setData({
      currentScroll: scrollTop
    })
    // console.log(event);
    // console.log(query);
    if (scrollTop > 625 && !IsShow) {
      this.setData({
        IsBackShow: true
      })
    } else if (IsShow && scrollTop < 625) {
      this.setData({
        IsBackShow: false
      })
    }
    // 控制tarbar是否显示
    if (scrollTop > tabbartop && !tabbar) {
      this.setData({
        IsTarbBar1: true
      })
    } else if (tabbar && scrollTop < tabbartop) {
      this.setData({
        IsTarbBar1: false
      })
    }
  },
  // 上拉加载更多
  loadmore() {
    wx.showLoading({
      title: "加载中",
      mask: true,
    });
    this._getgoodsData(this.data.currentType);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    // console.log(getHomeData);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {

  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})