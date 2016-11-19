//index.js
//获取应用实例
var app = getApp()
var xsd = require("../../xsd/index")
var sync = require('../../utils/sync')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  login(){
    app.getUserInfo().then(userInfo=>{
      this.setData({userInfo})
      return {userInfo, accessCode:app.globalData.accessCode}
    }).then(params=>{
      //return app.loginXsd(params.accessCode, params.userInfo)
      return xsd.client.login(params.accessCode, params.userInfo)
    }).then(auth=>{
      this.setData({
        retry:true,
        welcome:'登录成功'
      })
      console.log('aaaaaaaaaaa')
      wx.navigateTo({url:'../item/list'})
    }).catch(err=>{
      this.setData({
        retry:true,
        welcome:err
      })
    })
  },
  onLoad: function () {
    console.log('onLoad')
    this.login()
  }
})
