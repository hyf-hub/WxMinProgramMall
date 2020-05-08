// pages/cart/cart.js
const appInst = getApp();
const computedBehavior = require('miniprogram-computed')
Page({

  /**
   * 页面的初始数据
   */
  behaviors: [computedBehavior],
  data: {
    cartlist: [],
  },
  computed: {
    isShow(data) {
      let cartlist = data.cartlist;
      let select = cartlist.find(item => item.select)
      console.log(Boolean(select));
      return Boolean(select)
    },

    // bottomShow(data) {
    //   let cartlist = data.cartlist;
    //   let find = cartlist.find(item => {
    //     return item.select
    //   })
    //   console.log(find);
    //   return Boolean(find)
    // }
  },
  selectAll() {
    console.log('全选');
    let cartlist = this.data.cartlist
    let isShow = this.data.isShow
    const check = cartlist.map(item => {
      item.select = !isShow
      return item
    })
    this.setData({
      cartlist: check,
    })
  },
  itemselect(e) {
    let cartlist = this.data.cartlist
    let isShow = this.data.isShow
    let index = e.detail
    // cartlist[index].select = !cartlist[index].select
    let temp = cartlist[index]
    temp.select = !temp.select
    cartlist =  cartlist.splice(index, 1, temp)
    //这里直接通过索引更改值不会触发计算属性
    // const check = cartlist.map(item => {
    //   item.select = isShow
    //   return item
    // })
    // [`cartlist[${index}].select`]: select
    this.setData({
      cartlist: cartlist
    })
    //  console.log('全选');
    // let cartlist = this.data.cartlist
    // let isShow = this.data.isShow
    // const check = cartlist.map(item => {
    //   item.select = !isShow
    //   return item
    // })
    // this.setData({
    //   cartlist: check,
    // })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cartlist: appInst.globalData.catlist
    })
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