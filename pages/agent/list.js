"use strict";
const xsd = require('../../xsd/index')

Page({
  data:{
  	agents:[]
  },
  onLoad(){
  	this.reload()
  },
  reload(){
  	xsd.api.get('station/agents').then(data=>{
  	  this.setData({agents:data.agents})
  	})
  }

})