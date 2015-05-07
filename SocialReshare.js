define(function(require, exports, module) {
    var WechatShare = require('WechatShare');
    var YiXinShare = require('YiXinShare');

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
     function SocialReshare(option){
        option = option || {};
        option.link = option.link || window.location.href;
        option.title = option.title || document.title;
        option.summary = option.summary || option.title;
        option.text = option.text || option.summary;
        option.thumburl = option.thumburl;
        option.imageurl = option.imageurl || option.thumburl;


        updateWechatShareMeta(option.title,option.summary,option.thumburl || option.imageurl);
        updateYiXinShareMeta(option.summary,option.thumburl || option.imageurl);
    }

    function updateWechatShareMeta(title,content,link,img){
        WechatShare({
            title: title,
            content: content,
            link: link ,
            img_url: img
        });
    }
    function updateYiXinShareMeta(content,img){
        YiXinShare({
            content: content,
            img: img
        });
    }

    return SocialReshare;
});
