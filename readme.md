微信小程序上传图片到阿里云oss完整demo

需要配置阿里云 外网访问的Bucket 域名、以及阿里云AccessKey_ID、阿里云AccessKey_Secret 即可体验。

参照 https://www.jianshu.com/p/34d6dcbdc2e5 此篇博客基础上实现，添加了上传回调的设置。

配置文件 aliyun_oss/config.php 文件

配置文件中的 callbackBody 参数就是阿里云OSS返回给应用服务器的对应的具体信息

callbackBody中可以设置的系统变量有，其中imageInfo针对于图片格式，如果为非图片格式都为空：

- | :-: | -: 
系统变量 	含义
bucket 	bucket
object 	object
etag 	文件的etag，即返回给用户的etag字段
size 	object大小，CompleteMultipartUpload时为整个object的大小
mimeType 	资源类型，如jpeg图片的资源类型为image/jpeg
imageInfo.height 	图片高度
imageInfo.width 	图片宽度
imageInfo.format 	图片格式，如jpg、png等


注意:回调路由在正确回调之后返回值应为如下格式
``
<?php
    header("Content-Type: application/json");
    $data = array("Status"=>"Ok");
    echo json_encode($data);
?>

``

服务器回调具体可以参考https://help.aliyun.com/document_detail/31989.html?spm=a2c4g.11186623.2.13.73a83681rmUW8l#reference_b3p_cyw_wdb
