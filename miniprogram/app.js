//app.js
App({
  onLaunch: function () {
    
    // if (!wx.cloud) {
    //   console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    // } else {
    //   wx.cloud.init({
    //     env: 'cloud1-7g0ozq0ud3be3e12',
    //     traceUser: true,
    //   })
    // }
    //页面加载的过程中获取设备屏幕高度////////
    const windowHeight = wx.getSystemInfoSync().windowHeight;
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    console.log(windowWidth)
    this.globalData = {
      windowHeight: windowHeight,
      windowWidth: windowWidth
    }
    //获取openid
    var self = this
  },
  globalData:{
    email:'',
    name:'',
    xuehao:''
  },
  onPullDownRefresh:function(){
    this.onRefresh();
  },
onRefresh:function(){
    //导航条加载动画
    wx.showNavigationBarLoading();
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
    }, 2000);
  },
apiHost:"https://rabid.work"
})