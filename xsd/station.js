'use strict';

const api = require('request.js')
const sync = require('../utils/sync')

const login = (accessCode, userinfo) => {
	const code = 'station-test' // 测试用
    return api.post('station/login', {code, userinfo}).then(data=>{
    	sync.setEntity('auth', data.user)
    	//sync.setEntity('station', data.station)
    	return data.user
    })
}

const auth = () => {
	const auth = sync.getSync('auth')
	if(!!auth){
	    var timeStr = auth.last_access.split(/[\s:-]/),
	        loginTime = new Date(timeStr[0], timeStr[1]-1, timeStr[2], timeStr[3], timeStr[4], timeStr[5]),
	        currTime = new Date();
	    if(currTime.getTime() - loginTime.getTime() > auth.expire*1000){
	    	sync.setEntity('auth', null)
	    	wx.navigateTo({url:'/pages/index/index'})
	    }else
	    	return auth
	}else
		wx.navigateTo({url:'/pages/index/index'})
}

module.exports = {
	login,
	auth
}