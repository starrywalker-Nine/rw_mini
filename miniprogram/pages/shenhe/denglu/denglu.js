var app = getApp();
Page({
  data: {
    email: " ",
    password: "  "
  },
  //提交表单查询数据库判断
  login: function (event) {
    
    const xuehao = event.detail.value.xuehao.toString()
    const mima = event.detail.value.mima.toString()
   
   // // console.log(app.globalData.email)
        if (xuehao =="admin" && mima=="1122345") {
          wx.showModal({
            title: "工作人员登陆成功",
            success(){
              
              wx.navigateTo({
                url: '../../shenhe/taiozhuan/tiaozhuan',
              })
            },
          });
        } else {
          wx.showModal({
            title: "登陆失败",
            content: "非工作人员请走其他通道！",
          });
        }
      },
  onLoad: function (options) {
    /* 设置barTitle */
    wx.setNavigationBarTitle({
      title: '工作人员登陆'
    })
    this.setData({
      marginTop: app.globalData.windowHeight / 10 * 6
    })
  }
})