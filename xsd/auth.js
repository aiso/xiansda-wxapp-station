'use strict';

const Promise = require("../utils/bluebird.min")
const api = require('request.js')
const sync = require('../utils/sync')

const AUTH_KEY = 'XSD_AUTH_STATION_KEY'

const load = () => {
	return new Promise((resolve, reject)=>{
		wx.getStorage({
			key:AUTH_KEY,
			success:res=>{
				getApp().globalData.user = res.data
				resolve(res.data)
			}
		})
	})
}

const store = (user) => {
	return new Promise((resolve, reject)=>{
		wx.setStorage({
			key:AUTH_KEY,
			data:user,
			success:res=>{
				getApp().globalData.user = user
				resolve()
			},
			fail:()=>{reject()}
		})
	})
}

const clean = () => {
	try {
	  wx.removeStorageSync(AUTH_KEY)
	  getApp().globalData.user = null
	} catch (e) {
	  // Do something when catch error
	}
}

const check = () => {
	const user = getApp().globalData.user
	if(!!user)
		return user
	else{
		wx.navigateTo({url:'/pages/user/login'})
		return null
	}
}

module.exports = {
	load,
	store,
	check
}