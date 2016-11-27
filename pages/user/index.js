"user strict"
const xsd = require("../../xsd/index")

Page({
  data:{
  	userInfo:null,
  	station:null
  },
  onLoad(){
  	const user = xsd.station.auth()
  	const userInfo = getApp().globalData.userInfo
  	this.setData({userInfo, station:user.profile})
  },
  test(e){
  	console.log(e.target.dataset.sid)
  }
})