// ==UserScript==
// @name         qinhh
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://cdn.bootcss.com/jquery/3.5.1/jquery.min.js
// @match        http://mail.mind-ea.cn/coremail/XT5/index.jsp*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var parentDOM = document.getElementsByClassName('u-divider');
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    div1.style.zIndex = "99";
    div1.style.left = "93%";
    div1.style.top = "16%";
    div1.style.position = "absolute";
    div1.innerHTML = '<div id="open" ><button type="button"   style="transform: scale(0.9);width:110px;height: 29px; background-color:#00a6c1;border-color:red;border-radius: 5px;font-size:12px;color: #ffff;">曼德邮箱查询📭</button></div>';
    div2.innerHTML ='<div id="neirong" style="transform: scale(0.9);z-index: 99;visibility:hidden; width:776px;height: 600px;position:fixed;top:260px;left:53%;margin:auto;">'+
        '<div id="closeid" onclick="close()" style="color: #e52525;font-size:24px;" > 关闭 ❌ </div>'+
        '<iframe src="http://10.44.142.41:8899/system/email" width="108%" height="400"  ></iframe></div>';
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    div2.addEventListener("mousedown", function (e) {
        document.getElementById("neirong").style.visibility = 'hidden';
    });

    div1.addEventListener("mousedown", function (e) {
        document.getElementById("neirong").style.visibility = "visible";
    });

})();
