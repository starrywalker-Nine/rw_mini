var app = getApp();
Page({

  data() {
    return{
        email: " ",
    password: "  ",
    }
  
  },
  bindEmailInput: function (event) {
    this.setData({
      email: event.detail.value
    })
    app.globalData.email=event.detail.value
  
  },
  bindPasswordInput: function (event) {
    this.setData({
      password: event.detail.value
    })
   
  },
  // 提交表单查询数据库判断

  login: function (event) {
 

  
    wx.request({
      url: app.apiHost+'/api/login', //仅为示例，并非真实的接口地址
      method:'POST',
      data: {
        cardID: event.detail.value.身份证号,
        password: event.detail.value.密码
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {

      if (res.cookies.length>1) {
        wx.showModal({
          title: "登陆成功",
          content: "欢迎来到最美人文,遇到更美好的自己",
          success() {
            wx.switchTab({
             url: '../step/step',
             })
          }
        });
      } 
      else{
        wx.showModal({
          title: "登陆失败",
          content: "请确认账号密码正确",
        });
      }
    
      },
      fail:function(err){
        // console.log(err)
      }
    }) 
   


   },




  onLoad: function (options) {
  
    wx.setNavigationBarTitle({
      title: '新生登陆'
    })
    this.setData({
      marginTop: app.globalData.windowHeight / 10 * 6
    })
  }
})