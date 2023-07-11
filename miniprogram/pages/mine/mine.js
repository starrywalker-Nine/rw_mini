var app = getApp()

Page({
  data: {
 list:{}
  },

 onPullDownRefresh:function(){
   this.onRefresh()
this.onLoad()
 },

 onRefresh:function(){
  //导航条加载动画
  wx.showNavigationBarLoading()
  //loading 提示框
  wx.showLoading({
    title: '刷新中...',
  })
  
  setTimeout(function () {
    wx.hideLoading();
    wx.hideNavigationBarLoading();
    //停止下拉刷新
    wx.stopPullDownRefresh();
  }, 1500)
},

  


  
  onLoad: function(options) {

    var self = this
    wx.request({
       url: app.apiHost+'/api/findbyID', //仅为示例，并非真实的接口地址
      method:'POST',
      data: {
       cardID: app.globalData.email 
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res);
      self.setData({
        list:res.data
      })
      
    },
 
    fail:function(err){
      // console.log(err)
    }
    }) 
  },

  onShow(e){

  },
 


 
})