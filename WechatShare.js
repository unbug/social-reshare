define(function(require, exports, module) {
    var WechatShare = (function(){
        var meta = {
            appid: '',
            img_url: null,
            img_width: '200',
            img_height: '200',
            link: window.location.href,
            url: window.location.href,
            desc: document.title,
            content: document.title,
            title: document.title
        },dirtyTimer = 0,dirtyCount = 0;
        function setMeta(data){
            data = data || {};
            meta = {
                appid: data.appid || '',
                img_url: data.img_url || null,
                img_width: data.img_width || meta.img_width,
                img_height: data.img_height || meta.img_height,
                link: data.link || data.url || window.location.href,
                url: data.url || data.link || window.location.href,
                desc: data.desc || data.content || document.title,
                content: data.content || data.desc || document.title,
                title: data.title || document.title
            }
        }
        function command(name){
            window.WeixinJSBridge.invoke(name,meta, function(res) {});
        }
        function weixinJSBridgeListener(){
            if(window.WeixinJSBridge && !window.WeixinJSBridge.__ListenerRegistered) {
                window.WeixinJSBridge.__ListenerRegistered = true;
                window.WeixinJSBridge.on('menu:share:appmessage', function (argv) {
                    command('sendAppMessage');
                });
                window.WeixinJSBridge.on('menu:share:timeline', function (argv) {
                    command('shareTimeline');
                });
                window.WeixinJSBridge.on('menu:share:weibo', function (argv) {
                    command('shareWeibo');
                });
                return;
            }
            dirtyTimer && clearTimeout(dirtyTimer);
            if(dirtyCount<60){
                dirtyCount++;
                dirtyTimer = setTimeout(weixinJSBridgeListener,1000);
            }
        }
        if(/MicroMessenger/i.test(window.navigator.userAgent)){
            weixinJSBridgeListener();
            document.addEventListener('WeixinJSBridgeReady', weixinJSBridgeListener, false);
        }

        return setMeta;
    })();

    return WechatShare;
});