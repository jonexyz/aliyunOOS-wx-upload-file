var config = {
  //aliyun OSS config
  uploadImageUrl: 'https://xxxxxx.oss-cn-hangzhou.aliyuncs.com', // 外网访问 Bucket 域名
  AccessKeySecret: '',  // 阿里云 AccessKey ID
  OSSAccessKeyId: '',  // 阿里云 Access Key Secret
  timeout: 87600 //这个是上传文件时Policy的失效时间
};
module.exports = config