// pages/home/home.js
import {
  getHomeData
} from '../../nethwork/home'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: {},
    feature:{},
  },
  _getHomeData() {
    getHomeData()
    .then(res => {
      const banner = res.data.data.banner.list.map(item=>item.image)
      this.setData({
          banner,
          feature: res.data.data.recommend.list
        })
      })
  },
  getData(){
    this._getHomeData();
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