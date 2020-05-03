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
    currentType: 'pop'
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
  _getgoodsData(type){
    getgoodsData(type,1)
    .then(res=>{
      let temp = this.data.goodslist;
      temp[type].list.push(...res.data.data.list)
      this.setData({
        goodslist:temp
      })
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
    this.setData({
      currentType: temp
    })
    console.log(temp);
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
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})