Readme
=========
通常分享一个网页到社交平台（如，微信，易信等），用户在这些平台的 app 里打开并进行二次分享时，理想的分享格式会对你的网页带来可观的流量，不可忽视。
这些平台有的去抓取特定的内容，有的去抓取指定的 meta 标签，有的则需要监听事件，比较复杂。```SocialReshare``` 通过一个方法简化这些操作。


Get started
==========
```js
var SocialReshare = require('SocialReshare');

SocialReshare({
               title: String 'share title',
               text: String 'share text',
               summary: String 'share summary',
               imageurl: String 'share image url',
               thumburl: String 'share image thumb url',
               link: String 'share link'
           });

```

Contribute
==============
本项目目前只支持微信，易信，其他平台因本人开发过程中未涉及，会慢慢添加，更重要的是如果你已经在项目中用到了这里没有平台，请不要吝啬贡献你的代码。


FAQ
===============
- 本项目目前只有 AMD 版本，很快会有 gulp 工具支持合并及压缩,并提交到 Bower。
- 本项目只能处理支持 client 端个性化格式的平台，服务端爬虫类的不支持（如 Facebook）。