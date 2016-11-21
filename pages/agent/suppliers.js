'use strict';
const xsd = require('../../xsd/index')

Page({
  data:{
  	suppliers:[]
  },
  onShow(){
  	xsd.api.get('station/suppliers', true).then(data=>{
  	  this.setData({
  	  	suppliers:data.suppliers
  	  })
  	})
  }

})