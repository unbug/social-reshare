Readme
=========
通常分享一个网页到社交平台（如，微信，易信等），用户在这些平台的 app 里打开并进行二次分享时，理想的分享格式会对你的网页带来可观的流量，不可忽视。
这些平台有的去抓取特定的内容，有的去抓取指定的 meta 标签，有的则需要监听事件，比较复杂。```SocialAppReshare``` 通过一个方法简化这些操作。
```SocialAppReshare```会将你指定的分享参数按不同 app 的规则生成好，保证用户点击 app 的分享功能时分享的是你指定的格式和内容。


Install
==========
```shell
bower install social-reshare --save-dev
```

Get started
==========
1. 通过 AMD 方式：

```js
var SAR = require('SocialAppReshare');

SAR({
   title: String 'share title',
   text: String 'share text',
   summary: String 'share summary',
   imageurl: String 'share image url',
   thumburl: String 'share image thumb url',
   link: String 'share link'
});

```

2. 通过引入脚本方式

```html
<script src="dist/sar.min.js"></script>
<script>
    SocialAppReshare({
               title: String 'share title',
               text: String 'share text',
               summary: String 'share summary',
               imageurl: String 'share image url',
               thumburl: String 'share image thumb url',
               link: String 'share link'
           });
</script>
```

Build
=========
Build 一个压缩的版本到 dist 目录
```shell
gulp
```


Contribute
==============
本项目目前只支持微信，易信，其他平台因本人开发过程中未涉及，会慢慢添加，更重要的是如果你已经在项目中用到了这里没有平台，请不要吝啬贡献你的代码。

急需补充的App：
 - 微博
 - QQ
 - 手机淘宝
 - 【欢迎补充，可以放私家的】


FAQ
===============
- 本项目只能处理支持 client 端个性化格式的平台，服务端爬虫类的不支持（如 Facebook）。
- 微信貌似有个域名白名单，如果你的页面在微信里无效可以试试注册公众账号添加。