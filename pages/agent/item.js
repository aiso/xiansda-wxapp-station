'use strict';

const xsd = require('../../xsd/index')

Page({
  data:{
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

  	prod:null,
  	agent:null,
    amount:0.00
  },
  onLoad(options){
  	xsd.api.get('station/item/'+options.id, true).then(data=>{
      const amount = (!!data.agent)?parseFloat(data.agent.fee)+parseFloat(data.item.price):0.00
  	  this.setData({
  	  	prod:data.item,
  	  	agent:data.agent,
        amount
  	  })
  	})
  },
  deleteAgent(){
  	//xsd.api.delete('station/agent')
  }
})