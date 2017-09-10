(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https'){
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else{
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?242bc9e8e07ef11d8b88e8dbcad7b886";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


(function () {
    var pageurl = window.location.host;
    if(pageurl==null||pageurl==null||pageurl==''){
        pageurl = "www.hktxcn.com/index.html";
    }
    var posturl = "http://data.zz.baidu.com/update?site="+pageurl+"&token=NVejTRHQJ42ysJKY";

    var hm = document.createElement("script");
    hm.src = posturl;
    var s = document.getElementsByTagName("script")[1];
    s.parentNode.insertBefore(hm, s);

})();