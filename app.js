//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  addcart(obj) {
    console.table(obj);
    let find = this.globalData.catlist.findIndex(item => {
      return item.iid == obj.iid
    })
    if (find != -1) {
      let count = this.globalData.catlist[find]
      this.globalData.catlist[find].count = count.count ? count.count + 1 : 2

    } else {
      this.globalData.catlist.push(obj)
    }
    if (this.addCartCallback) {
      this.addCartCallback()
    }
    // console.log(this.globalData.catlist.includes(obj.iid));
    console.log("添加到购物车");

  },
  setselect(index) {
    let select = this.globalData.catlist[index].select
    this.globalData.catlist[index].setselect = !select
  },
  Allselect(chekselect) {
    let catlist = this.globalData.catlist;
    this.globalData.catlist = catlist.map(item => item.select = chekselect)
  },
  globalData: {
    userInfo: null,
    catlist: [{
      count: 4,
      desc: "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮",
      iid: "1m7rp9w",
      imageURL: "//s5.mogucdn.com/mlcdn/c45406/180827_1590j44g2bk619i6655ji20ihikfb_640x960.jpg",
      price: 68.00,
      title: "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮",
    }]
  }
})