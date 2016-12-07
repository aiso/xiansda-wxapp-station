"user strict"
const xsd = require("../../xsd/index")

Page({
  data:{
  	userInfo:null,
  	station:null
  },
  onLoad(){
    const user = getApp().globalData.user
    this.setData({userInfo:user.wxinfo, station:user.profile})
  },
  test(e){
  	console.log(e.target.dataset.sid)
  }
})