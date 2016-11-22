'use strict';
const xsd = require('../../xsd/index')
const supplierGetter = xsd.sync.suppliers.getter()

Page({
  data:{
  	suppliers:[]
  },
  onShow(){
    supplierGetter.get().then(suppliers=>{
      console.log(suppliers)
      this.setData({
        suppliers
      })
    })
  }

})