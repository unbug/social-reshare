define(function(require, exports, module) {
    var MetaHandler = require('lib/MetaHandler');
    /**
     * 易信分享
     * @param data = {
     *  conetnt,img
     * }
     */
    function share(data){
        data = data || {};
        MetaHandler.createMeta('yixin-share-desc').setContent('yixin-share-desc',data.content||document.title);
        MetaHandler.createMeta('yixin-share-image').setContent('yixin-share-image',data.img);
    }
    return share;
});