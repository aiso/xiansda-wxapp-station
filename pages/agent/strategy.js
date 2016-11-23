'use strict';

const xsd = require('../../xsd/index')

Page({
  data:{
  	prod:null,
  	agent:null
  },
  onLoad(options){
  	xsd.api.get('station/item/'+options.id, true).then(data=>{
  	  this.setData({
  	  	prod:data.item,
  	  	agent:data.agent
  	  })
  	})
  }
})