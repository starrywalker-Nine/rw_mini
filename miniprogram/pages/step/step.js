var app = getApp()

Page({
  data: {
   
  },
  
 
  //提交表单上传
  okk: function(options) {  
    var banji = options.detail.value.banji//banji 
    var sushe = options.detail.value.sushe //联系方式
    var xueyuan =options.detail.value.xueyuan
    var zhuanye =options.detail.value.zhuanye
   var pattern = /^\d{1}-\d{3}$/
    if (banji.length==1) {
      if (pattern.test(sushe)) {
        if(xueyuan.length>5){
          if(zhuanye.length>2){
                  wx.request({
          url: app.apiHost+'/api/updateID', 
          method:'POST',
          data: {
           cardID:app. globalData.email,
           class:banji,
           dorms:sushe,
           college:xueyuan,
           major:zhuanye
            
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            // console.log(res)
            wx.showModal({
              content: "提交成功",
            }); 
        
        },
        fail:function(err){
          // console.log(err)
        }
      }) 
          }else {
            wx.showModal({
              content: "请输入正确专业",
            });
          }

        }else {
        wx.showModal({
          content: "请输入正确学院",
        });
      }
  
        
      } else {
        wx.showModal({
          content: "请输入正确宿舍号",
        });
      }
    } else {
      wx.showModal({
        content: "请输入正确班级",
      });
    } 

 
  },
  upfile:function(e){
    wx.navigateTo({
      url: 'file/file',
    })
  }

})