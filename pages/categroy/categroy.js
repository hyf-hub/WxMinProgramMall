// pages/categroy/categroy.js
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "../../nethwork/categroy.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Categorylist: [],
    iconlist: [],
    shoplist: {},
    Showshoplist: [],
    currentIndex: 0,
    currentType: 'pop',
    Showgoodslist: [],
    scrolltop: 0,
    titleType: ['流行', '新款', '精选'],
  },
  // 获取分类数据
  async _getCategory() {
    let res = await getCategory()
    let list = res.data.data.category.list
    this.setData({
      Categorylist: list
    })
    this._getSubcategory(list[0].maitKey)
  },
  _getSubcategory(maitKey) {
    getSubcategory(maitKey)
      .then(res => {
        let data = this.data.shoplist
        data[maitKey] = data[maitKey] || {}
        data[maitKey].iconlist = res.data.data.list
        this.setData({
          shoplist: data,
          Showshoplist: data[maitKey].iconlist
        })
        let Categorylist = this.data.Categorylist;
        const index = this.data.currentIndex
        // return getCategoryDetail(Categorylist[index].miniWallkey, 'pop')
        this._getCategoryDetail(Categorylist[index].miniWallkey, 'pop');
      })
      // .then(res => {
      //   let data = this.data.shoplist
      //   let type = this.data.currentType
      //   data[maitKey][type] = res.data
      //   // `data[${maitKey}].${type}`.push(...res.data)
      //   this.setData({
      //     shoplist: data,
      //     Showgoodslist: res.data
      //   })
      // })
  },
  async _getCategoryDetail(miniWallkey, listtype = "pop") {
    let data = this.data.shoplist
    let res = {}
    let maitKey = this.data.Categorylist[this.data.currentIndex].maitKey
    if (!(data[maitKey] && data[maitKey][listtype])){
       res = await getCategoryDetail(miniWallkey, listtype)
       console.log(data[maitKey][listtype]);
    }
    data[maitKey][listtype] = data[maitKey][listtype] || res.data
    // `data[${maitKey}].${type}`.push(...res.data)
    this.setData({
      shoplist: data,
      Showgoodslist: data[maitKey][listtype]
    })
  },
  listclcik(maitKey) {
    maitKey = maitKey.detail
    let data = this.data.shoplist
    if (data[maitKey]) {
      this.setData({
        Showshoplist: data[maitKey].iconlist
      })
    } else
      this._getSubcategory(maitKey)
    // let selQuery = wx.createSelectorQuery('#Ctglist');
    this.setData({
      scrolltop: 0,
      currentType:'pop'
    })
    this.selectComponent("#tabbar").settype(0)
    // this.setData({})
  },
  tabbarclick(e) {
    let index = e.detail;
    let temp = 'pop';
    switch (index) {
      case 0:
        temp = 'pop';
        break;
      case 1:
        temp = 'new';
        break;
      case 2:
        temp = 'sell';
        break;
    }
    this.setData({
      currentType: temp
    })
    let Categorylist = this.data.Categorylist;
    const currentIndex = this.data.currentIndex
    this._getCategoryDetail(Categorylist[currentIndex].miniWallkey, temp)
  },
  setcurrentIndex(e) {
    let index = e.detail
    this.setData({
      currentIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求数据
    this._getCategory()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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