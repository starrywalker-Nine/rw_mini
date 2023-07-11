var app = getApp()

Page({
  data: {
    userInfo: {},
    logged: false,
  },
  onLoad: function (options) {
    var self=this
   
    self.setData({
      marginTop: app.globalData.windowHeight / 10 * 4.5,
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              self.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  ///////根据身份跳转到不同的页面///////////
  onGetUserInfo: function (e) {
   
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        userInfo: e.detail.userInfo
      })
    }
  },
  /* 学生 */
  bindGetUserInfo(e) {
   
    var logged = e.detail.userInfo
    if (logged){
      
      this.newstudent()
    }else{
      wx.showToast({
        title: '授权以后才可以使用哦~',
        icon: 'none',
        duration: 1500
      })
    }
  },
  newstudent: function (e) {
    
    wx.navigateTo({
      url: '../login-s/login-s',
    })
          
        
    
  },
 
  
/* 工作 */
  bindGetUserInfogongzuo(e) {
   
    var logged = e.detail.userInfo
    if (logged) {
      this.gongzuo()
    } else {
      wx.showToast({
        title: '授权以后才可以使用哦~',
        icon: 'none',
        duration: 1500
      })
    }
  },
  gongzuo: function (e) {
  
          wx.navigateTo({
            url: '../shenhe/denglu/denglu',
          })
   
        }
        
       
      
    


})
