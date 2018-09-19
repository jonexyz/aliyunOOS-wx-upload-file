//index.js
//获取应用实例

const uploadImage = require('../../aliyun_oss/uploadAliyun.js');

const app = getApp()

Page({
  data: {
    motto: '',

  },
  upload: function(res) {
    //console.log(res)

    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        

        console.log(tempFilePaths)

        uploadImage(tempFilePaths[0], "images/", function(res) {
          console.log("上传成功") //todo 做任何你想做的事
        }, function(res) {
          console.log("上传失败") //todo 做任何你想做的事
        })

      }
    })
  }
})