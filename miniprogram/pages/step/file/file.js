// pages/abc/abc.js
const app = getApp();
Page({
    data: {
        imgs: [],
        tempfilePaths:[],
        test:''
       },
      // 上传图片
       chooseImg: function (e) {
        var that = this;
        var imgs = this.data.imgs;
        if (imgs.length >= 3) {
         this.setData({
          lenMore: 1
         });
         setTimeout(function () {
          that.setData({
           lenMore: 0
          });
         }, 2500);
         return false;
        }
        wx.chooseImage({
         // count: 1, // 默认9
         sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
         sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
         success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
          var imgs = that.data.imgs;
          // // console.log(tempFilePaths + '----');
          for (var i = 0; i < tempFilePaths.length; i++) {
           if (imgs.length >=3) {
            that.setData({
             imgs: imgs,
             tempfilePaths:tempFilePaths
            });
            return false;
           } else {
            imgs.push(tempFilePaths[i]);
           }
          }
          // // console.log(imgs);
          that.setData({
           imgs: imgs,
           tempfilePaths:tempFilePaths
          });
         }
        });
       },

       uploadImg:function(){
        var that=this
        for (var i=0; i<(that.data.imgs).length;i++){ 
          wx.uploadFile({
            url: app.apiHost+'/api/upload_file', //接受图片的接口地址
            filePath: that.data.imgs[i],
            name:  app.globalData.email,
            header: {
              "Content-Type": "multipart/form-data"
            },
            formData: {
                user: 'test'
            },
            success (res){
              const data1 = JSON.parse(res.data) //字符串转json对象
              if( data1.code==200){
                wx.showToast({
               title: '图片上传成功',
               icon: 'success',
               duration: 2000,
             }) 
           }else{
             wx.showToast({
               title: '图片上传失败',
               icon: 'loading',
               duration: 2000
             })}
       
 },fail(res){
  // console.log(res)
  // const data =res.data
     wx.showToast({
       title: '图片上传失败',
       icon: 'loading',
       duration: 2000
     })
   }})
   if(i+1 ==((that.data.imgs).length)){
    wx.request({
  url: app.apiHost+'/api/updateisFinishedbyID', //仅为示例，并非真实的接口地址
  method:'POST',
  data: {
   cardID: app.globalData.email
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success (res) {
      setTimeout(function(){
        wx.navigateBack({
          delta:1}) },2000)
},
fail:function(err){
  // console.log(err)
}
}) 
  }
}
},
 
       // 删除图片
       deleteImg: function (e) {
        var imgs = this.data.imgs;
        var index = e.currentTarget.dataset.index;
        imgs.splice(index, 1);
        this.setData({
         imgs: imgs
        });
       },
       // 预览图片
       previewImg: function (e) {
         //获取当前图片的下标
        var index = e.currentTarget.dataset.index;
         //所有图片
        var imgs = this.data.imgs;
        wx.previewImage({
         //当前显示图片
         current: imgs[index],
         //所有图片
         urls: imgs
        })
       }  
})
