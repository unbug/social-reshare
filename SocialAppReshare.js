define(function(require, exports, module) {
    var Wechat = require('lib/Wechat');
    var YiXin = require('lib/YiXin');

    /**
     *
     * option = {
         title String 'share title',
         text String 'share text',
         summary String 'share summary',
         imageurl String 'share image url',
         thumburl String 'share image thumb url',
         link String 'share link'
         }
     */
     function SocialAppReshare(option){
        option = option || {};
        option.link = option.link || window.location.href;
        option.title = option.title || document.title;
        option.summary = option.summary || option.title;
        option.text = option.text || option.summary;
        option.thumburl = option.thumburl;
        option.imageurl = option.imageurl || option.thumburl;


        updateWechatMeta(option.title,option.summary,option.thumburl || option.imageurl);
        updateYiXinMeta(option.summary,option.thumburl || option.imageurl);
    }

    function updateWechatMeta(title,content,link,img){
        Wechat({
            title: title,
            content: content,
            link: link ,
            img_url: img
        });
    }
    function updateYiXinMeta(content,img){
        YiXin({
            content: content,
            img: img
        });
    }

    window.SocialAppReshare = SocialAppReshare;

    return SocialAppReshare;
});
