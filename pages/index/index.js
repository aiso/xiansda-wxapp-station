//index.js
//获取应用实例
var app = getApp()
var xsd = require("../../xsd/index")
var sync = require('../../utils/sync')

Page({
  data: {
    access:false,
    retry:false,
    welcome: '正在登录鲜时达...',
    userInfo: {},
  },
  login(){
    this.setData({
      welcome: '正在登录鲜时达...',
      retry:false
    })

    wx.showNavigationBarLoading()

    app.getUserInfo().then(userInfo=>{
      this.setData({userInfo})
      return {userInfo, accessCode:app.globalData.accessCode}
    }).then(params=>{
      const postData = {code: params.accessCode, userInfo:params.userInfo}
      postData.code='station-test1' //测试用
      return xsd.api.post('station/login', postData).then(data=>{
        wx.hideNavigationBarLoading()
        if(!!data.user){
          this.setData({
            welcome:'正在跳转...'
          })
          xsd.station.login(data.user)
        }else{
          this.setData({
            access:true,
            retry:false,
            welcome:'无效用户'
          })
        }
      })

    }).catch(err=>{
      wx.hideNavigationBarLoading()
      this.setData({
        welcome:err,
        retry:true
      })
    })
  },
  onLoad: function () {
    console.log('onLoad')
    this.login()
  }
})
