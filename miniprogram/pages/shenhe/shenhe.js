var cityData = require('../../utils/city.js'); 
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [],
    
   
    qyopen: false, //点击筛选滑动弹窗显示效果，默认不显示
    qyshow: true, //用户点击闭关区域的弹窗设置，默认不显示
    
    isfull: false,
    cityleft: cityData.getCity(), //区域的下拉框筛选项内容
    citycenter: {}, //区域左边筛选框后的显示的中间内容部分
    cityright: {}, //区域的中间内容部分后显示的右边内容
    select1: '', //选中后的第二个子菜单，默认显示子菜单
    select2: '', //选择部分的中间
    select3: '', //选择部分的右边
    shownavindex: '',
    list: []
   
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.setData({
    //   citycenter: this.data.cityleft['地铁'],
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 列表下拉框是否隐藏
  listqy: function(e) {
    if (this.data.qyopen) {
      this.setData({
        qyopen: false,
        qyshow: false,
        isfull: false,
        shownavindex: 0
      })
    } else {
      this.setData({
        qyopen: true,
        qyshow: false,
        isfull: true,
        shownavindex: e.currentTarget.dataset.nav
      })
    }

  },
  
  
  // 第一栏选择内容
  selectleft: function(e) {
    this.setData({
      cityright: {},
      citycenter: this.data.cityleft[e.currentTarget.dataset.city],
      select1: e.target.dataset.city,
      select2: ''
    });
  },
  // 中间栏选择的内容
  selectcenter: function(e) {
    this.setData({
      cityright: this.data.citycenter[e.currentTarget.dataset.city],
      select2: e.target.dataset.city
    });
  },
  // 左边栏选择的内容
  selectright: function(e) {

    this.setData({ 
        select3: e.currentTarget.dataset.city        
    });

   
  },
  // 点击灰色背景隐藏所有的筛选内容
  hidebg: function(e) {
    this.setData({
      qyopen: false,
      qyshow: true,
      isfull: false,
      shownavindex: 0,
    })
  },
  // 清空筛选项
  quyuEmpty: function() {
    this.setData({
      select1: '',
      select2: '',
      select3: ''
    })
  },
  // 选择筛选项后，点击提交
  submitFilter: function() {
    var that=this
  
    // console.log('选择的一级选项是：' + that.data.select1);
    // console.log('选择的二级选项是：' + that.data.select2);
    // console.log('选择的三级选项是：' + that.data.select3);
    // 区域下拉框
    that.setData({
      qyopen: false,
      qyshow: false,
      isfull: false,
      shownavindex: 0
    })
    wx.request({
      url: app.apiHost+'/api/countALL', //仅为示例，并非真实的接口地址
      method:'POST',
      data: {
        college:that.data.select1,
       major: that.data.select2,
       class:that.data.select3
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        
        that.setData({
          list:res.data
        })
        // console.log(res.data);
       
        
    },
    fail:function(err){
      // console.log(err)
    }
  }) 
  
  },
 


 
  
})