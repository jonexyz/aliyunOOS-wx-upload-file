var config = {
  //aliyun OSS config
  uploadImageUrl: 'https://xxxxxx.oss-cn-hangzhou.aliyuncs.com', // 外网访问 Bucket 域名 也可以是自己绑定oss对应的域名
  OSSAccessKeyId: '',  // 阿里云 AccessKey ID
  AccessKeySecret: '',  // 阿里云 Access Key Secret
  timeout: 87600 , //这个是上传文件时Policy的失效时间
  callbackUrl:'https://api.domain.com/api/index/index',  // 回调接口地址DEMO  具体参数自行配置
  callbackBody: 'bucket=${bucket}&object=${object}&etag=${etag}&size=${size}&mimeType=${mimeType}&my_var=${x:my_var}' // 回调返回的信息内容
};
module.exports = config
