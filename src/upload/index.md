---
description: kool ui Upload 上传文件
group: 数据录入
keywords: ['kool ui', 'upload', '上传文件']
toc: content
---

# Upload 上传文件

文件选择上传控件。

## 何时使用

## 代码演示

<code src="./demo/BasicUpload.tsx">基本类型</code>

## API

### props

| 参数            | 类型                                  | 默认值 | 描述                                                                                                                                                                                                     |
| :-------------- | :------------------------------------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action          | string                                | -      | 上传的地址                                                                                                                                                                                               |
| defaultFileList | object[]                              | -      | 默认已经上传的文件列表                                                                                                                                                                                   |
| onChange        | function                              | -      | 上传文件改变时的回调，                                                                                                                                                                                   |
| onRemove        | function(file): boolean               | -      | 点击移除文件时的回调，返回值为 false 时不移除。                                                                                                                                                          |
| onSuccess       | function                              | -      | 文件上传成功的回调                                                                                                                                                                                       |
| onError         | function                              | -      | 文件上传失败的回调                                                                                                                                                                                       |
| onProgress      | function                              | -      | 文件上传中的回调                                                                                                                                                                                         |
| beforeUpload    | (file, fileList) => boolean / Promise | -      | 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象） |
