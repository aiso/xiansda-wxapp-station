'use strict';

const xsd = require('../../xsd/index')

Page({
  data:{
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    url:null,
  	prod:null,
  	agent:null,
    amount:0.00
  },
  onLoad(options){
    this.setData({url:'station/item/'+options.id})
    this.loadData()
  },
  onShow(){
    xsd.api.isDirty(this.data.url) && this.loadData()
  },
  loadData(){
    xsd.api.get(this.data.url, true).then(data=>{
      const amount = (!!data.agent)?parseFloat(data.agent.fee)+parseFloat(data.item.price):0.00
      this.setData({
        prod:data.item,
        agent:data.agent,
        amount
      })
    })
  },
  deleteAgent(){
    wx.showModal({
      title: '提示',
      content: '你确定要取消代理？',
      success: res => {
        if(res.confirm){
          xsd.api.delete('station/agent/'+this.data.agent.id).then(data=>{
            wx.navigateBack()
          })
        }
      }
    })
  }
})