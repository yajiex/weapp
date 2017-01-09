//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    plans: [],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindCreateNewItem: function () {
    wx.navigateTo({
      url: '../item/item'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onShow: function () {
    console.log('onShow')
    var that = this
    wx.getStorage({
      key: 'plans',
      success: function (res) {
        // success
        console.log("success");
        that.setData({
          plans: res.data
        })
      },
      fail: function (res) {
        console.log("fail");
      },
      complete: function (res) {
        console.log("complete");
      }
    })
  }
})
