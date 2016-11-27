"user strict"
const xsd = require("../../xsd/index")

Page({
  data:{
  	disabled:true
  },
  formSubmit(e){
  	console.log(e)
  	if(/^\d{4}$/.test(e.detail.value.station) && /^\w{12}$/.test(e.detail.value.access_code)){
  	  const app = getApp()
  	  app.getUserInfo().then(userInfo=>{
  	  	const postData = {code:app.globalData.accessCode, userInfo, access:e.detail.value}
  	  	!!getApp().globalData.debugUser && (postData.code = getApp().globalData.debugUser) //是否调试用户
  	  	xsd.api.post('station/access', postData).then(data=>{
  	  		xsd.station.login(data.user)
  	  	})
  	  })
  	}
  }

})