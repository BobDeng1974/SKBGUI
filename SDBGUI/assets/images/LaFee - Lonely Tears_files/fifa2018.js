﻿!function(i){function t(r){if(e[r])return e[r].exports;var f=e[r]={i:r,l:!1,exports:{}};return i[r].call(f.exports,f,f.exports,t),f.l=!0,f.exports}var e={};return t.m=i,t.c=e,t.d=function(i,e,r){t.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:r})},t.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},t.t=function(i,e){if(1&e&&(i=t(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var f in i)t.d(r,f,function(t){return i[t]}.bind(null,f));return r},t.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return t.d(e,"a",e),e},t.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},t.p="",t(t.s=18)}({18:function(i,t,e){i.exports=e(88)},51:function(i,t,e){"use strict";function r(i,t){return 1-3*t+3*i}function f(i,t){return 3*t-6*i}function n(i){return 3*i}function a(i,t,e){return((r(t,e)*i+f(t,e))*i+n(t))*i}function o(i,t,e){return 3*r(t,e)*i*i+2*f(t,e)*i+n(t)}function d(i,t,e,r,f){var n=void 0,o=void 0,d=0;do o=t+(e-t)/2,n=a(o,r,f)-i,n>0?e=o:t=o;while(Math.abs(n)>v&&++d<p);return o}function l(i,t,e,r){for(var f=0;h>f;++f){var n=o(t,e,r);if(0===n)return t;var d=a(t,e,r)-i;t-=d/n}return t}function u(i,t,e,r){function f(t){for(var r=0,f=1,a=w-1;f!==a&&n[f]<=t;++f)r+=x;--f;var u=(t-n[f])/(n[f+1]-n[f]),c=r+u*x,s=o(c,i,e);return s>=g?l(t,c,i,e):0===s?c:d(t,r,r+x,i,e)}if(!(i>=0&&1>=i&&e>=0&&1>=e))throw new Error("bezier x values must be in [0, 1] range");var n=y?new s(w):new Array(w);if(i!==t||e!==r)for(var u=0;w>u;++u)n[u]=a(u*x,i,e);return function(n){return i===t&&e===r?n:0===n?0:1===n?1:a(f(n),t,r)}}e.r(t),e.d(t,"default",function(){return u});var c=window,s=c.Float32Array,h=4,g=.001,v=1e-7,p=10,w=11,x=1/(w-1),y="function"==typeof s},88:function(i,t,e){"use strict";function r(i,t,e,r,f,n,a){var o={x:t,y:e},d={x:r,y:f},l={x:n,y:a};return{x:(1-i)*(1-i)*o.x+2*i*(1-i)*l.x+i*i*d.x,y:(1-i)*(1-i)*o.y+2*i*(1-i)*l.y+i*i*d.y}}function f(i){return j(i)}function n(i){var t=null,e=void 0,r=void 0,f=void 0;if(!i)return!1;if(1===i.length)return i[0];for(var n=0;n<i.length;n++){var a=i[n];null===t?(t=a.x,e=a.x,r=a.y,f=a.y):(t=Math.min(a.x,t),r=Math.min(a.y,r),e=Math.max(a.x,e),f=Math.max(a.y,f))}return t||console.log(i),{x:e-(e-t)/2,y:f-(f-r)/2}}function a(i,t){for(var e=0,r=0,f=[],n=0;f.length<t.points.length;){var a=t.points[e],o=i[r];if(!o)return!1;if(o.length>=a?(f.push(r),e++):f=[],r++,n>100)break;n++}for(var d=[],l=0;l<f.length;l++)for(var u=f[l],c=i[u].splice(0,t.points[l]),s=0;s<c.length;s++)d.push(c[s]);return d}function o(){for(var i=960*M.scaleFactor,t=60*M.scaleFactor,e=[],r=0,f={x:i/2,y:i/2},n=0;i>r;){for(var a=Math.floor(r/t),o=[],d=1;a>=d;d++){var l=360/a*d*Math.PI/180;o.push({x:f.x+r/2*Math.cos(l),y:f.y+r/2*Math.sin(l)})}if(e.push(o),r+=2*t,n>100)break;n++}return e}function d(i){for(var t=i.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),r=[i[e],i[t]];i[t]=r[0],i[e]=r[1]}return i}e.r(t);var l=e(51),u=window,c=u.vkImage,s=u.cf,h=u.ce,g=u.domCA,v=!1,p=!1,w="fifa_confettiText",x="global_fifa_confetti_text",y="fifa_ballsContainer",m=4,X="fifa_ball",Y={toLeft:"fifa_ball_toLeft",toRight:"fifa_ball_toRight"},b=null,F=null,M={height:480,width:720,paddingHorizontal:200,paddingBottom:160,scaleFactor:window.devicePixelRatio,figureColorsCount:5},_={lineBig:{width:54,height:106,index:0,weight:0,rotatable:!0,duration:2e3,points:[2,2]},lineMedium:{width:62,height:50,index:1,weight:0,rotatable:!0,duration:2e3,points:[1,1]},line:{width:20,height:32,index:2,weight:0,rotatable:!0,scalable:!0,duration:2e3,points:[1]},dot:{width:16,height:16,index:3,scalable:!0,weight:0,duration:2e3,points:[1]}};if(M.scaleFactor>1)for(var T in _)_.hasOwnProperty(T)&&(_[T].width*=2,_[T].height*=2);var C={first:{delay:500,duration:1500,lines:[],items:[{figure:"lineBig",diffX:177,diffY:283},{figure:"line",diffX:124,diffY:96},{figure:"lineMedium",diffX:299,diffY:149},{figure:"line",diffX:252,diffY:416},{figure:"line",diffX:162,diffY:394},{figure:"line",diffX:69,diffY:237},{figure:"line",diffX:200,diffY:139},{figure:"dot",diffX:321,diffY:252},{figure:"dot",diffX:432,diffY:252},{figure:"dot",diffX:434,diffY:367},{figure:"line",diffX:209,diffY:68},{figure:"line",diffX:346,diffY:85},{figure:"line",diffX:346,diffY:85},{figure:"line",diffX:384,diffY:162},{figure:"line",diffX:368,diffY:244},{figure:"line",diffX:237,diffY:250},{figure:"line",diffX:280,diffY:303},{figure:"dot",diffX:30,diffY:259},{figure:"dot",diffX:106,diffY:330},{figure:"dot",diffX:142,diffY:197},{figure:"dot",diffX:172,diffY:219},{figure:"lineMedium",diffX:59,diffY:139},{figure:"dot",diffX:256,diffY:173}]},second:{duration:2e3,lines:[],items:[{figure:"lineBig",diffX:177,diffY:283},{figure:"line",diffX:124,diffY:96},{figure:"lineMedium",diffX:299,diffY:149},{figure:"line",diffX:252,diffY:416},{figure:"line",diffX:162,diffY:394},{figure:"line",diffX:69,diffY:237},{figure:"line",diffX:200,diffY:139},{figure:"dot",diffX:321,diffY:252},{figure:"dot",diffX:432,diffY:252},{figure:"dot",diffX:434,diffY:367},{figure:"line",diffX:209,diffY:68},{figure:"line",diffX:346,diffY:85},{figure:"line",diffX:346,diffY:85},{figure:"line",diffX:384,diffY:162},{figure:"line",diffX:368,diffY:244},{figure:"line",diffX:237,diffY:250},{figure:"line",diffX:280,diffY:303},{figure:"dot",diffX:30,diffY:259},{figure:"dot",diffX:106,diffY:330},{figure:"dot",diffX:142,diffY:197},{figure:"dot",diffX:172,diffY:219},{figure:"lineMedium",diffX:59,diffY:139},{figure:"dot",diffX:256,diffY:173}]}},B=!1,P=!1,O=!1,k=!1,S=void 0,j=Object(l["default"])(0,.43,.32,.39),z=Object(l["default"])(0,0,1,1);window.Fifa2018={init:function(){if(!v){var i=0;for(var t in _)_.hasOwnProperty(t)&&(_[t].top=i,i+=_[t].height);v=h("canvas",{width:(M.width+M.paddingHorizontal)*M.scaleFactor,height:(M.height+M.paddingBottom)*M.scaleFactor},{width:M.width+M.paddingHorizontal+"px",height:M.height+M.paddingBottom+"px",top:window.innerHeight-M.height-M.paddingBottom+"px",left:(window.innerWidth-M.width-M.paddingHorizontal)/2+"px",position:"fixed",zIndex:1e3,pointerEvents:"none",transform:"translate(0,0,0)"}),p=v.getContext("2d"),bodyNode.appendChild(v)}},destroy:function(){cancelAnimationFrame(O),p=!1,re(v),v=!1,P=!1},startFlapper:function(i){var t=this,e=g(i,"a");if(!e||"top_notify_btn"===e.id){if(M.paddingBottom=(window.innerHeight-M.height)/2,this.init(),cancelAnimationFrame(O),B)return this.start();var r=c();r.onload=function(){B=r,t.start()},r.src=M.scaleFactor>1?"/images/confetti_flapper_2x.png":"/images/confetti_flapper.png"}},start:function(){S=irand(0,M.figureColorsCount-1),P=clone(C,!0),this.clear(),this.findSpaceForFigures(),k=vkNow(),this.draw(),this.drawText(),this.drawBalls()},clearBalls:function(){F&&(clearInterval(F),F=null);var i=geByClass(y);i.forEach(re)},clearText:function(){b&&(clearTimeout(b),b=null),re(geByClass1(w))},clear:function(){for(var i in P)P.hasOwnProperty(i)&&(P[i].startTs=0,P[i].inited=!1);this.clearText()},findSpaceForFigures:function(){for(var i in P)if(P.hasOwnProperty(i)){var t=o(),e=P[i].items;d(e);for(var r=0;r<e.length;r++){var f=e[r],l=_[f.figure],u=n(a(t,_[f.figure]));u?(f.toX=u.x,f.toY=u.y-l.height-M.paddingBottom*M.scaleFactor-400):console.log("cant found")}}},drawText:function(){this.clearText();var i=getLang(x),t='\n    <div class="fifa_confettiText">\n      <div class="fifa_confettiText__wrap">\n        <span class="fifa_confettiText__message">'+i+"</span>\n       </div>\n    </div>",e=s(t);document.body.appendChild(e),b=setTimeout(this.clearText.bind(this),2e3)},drawBalls:function(){var i=h("div");addClass(i,y),F&&clearTimeout(F);for(var t=function(t){var e=h("div");addClass(e,X),i.appendChild(e);var r=t%2===0?Y.toLeft:Y.toRight;setTimeout(function(){addClass(e,r)},t*irand(100,500))},e=0;m>e;e++)t(e);document.body.appendChild(i),F=setTimeout(this.clearBalls.bind(this),5e3)},draw:function(){var i=this,t=vkNow(),e=(M.width+M.paddingHorizontal)*M.scaleFactor,n=M.height*M.scaleFactor;p.clearRect(0,0,e,n+M.paddingBottom*M.scaleFactor);var a=!0;for(var o in P)if(P.hasOwnProperty(o)){var d=P[o],l=d.delay,u=d.items,c=d.startTs,s=d.duration,h=d.lines,g=d.inited;if(c||(P[o].startTs=c=vkNow()),l){if(l>t-c)continue;P[o].delay=!1,P[o].startTs=c=vkNow()}for(var v=0;v<u.length;v++){var w=u[v],x=_[w.figure];g||(S++,S>=M.figureColorsCount&&(S=0),w.color=S,w.rotateDir=1===irand(0,1)?-1:1,w.inScale=.1,w.scale=1-(x.scalable?Math.min(1,Math.max(.5,irand(50,100)/100)):1),w.duration=s+irand(-300,300),"second"===o?(w.x=e+irand(-50,50)*M.scaleFactor,w.endX=50*M.scaleFactor*x.weight+irand(-50,300)*M.scaleFactor,w.toX=w.toX-x.width):(w.x=(-M.paddingHorizontal/2-irand(-50,50))*M.scaleFactor,w.endX=e-(50*M.scaleFactor*x.weight+irand(-50,300)*M.scaleFactor)-100*M.scaleFactor,w.toX=w.toX-x.width),w.y=n,w.endY=n+M.paddingBottom*M.scaleFactor);var y=Math.min(1,(t-c)/w.duration),m=f(y);1>y&&(a=!1);var X=w.color*x.width,Y=x.top,b=r(m,w.x,w.y,w.endX,w.endY,w.toX,w.toY);p.save();var F=w.inScale-w.scale;if(F>1)return console.log("scale",F);p.translate(b.x+x.width/2,b.y+x.height/2),p.scale(F,F),p.translate(-(b.x+x.width/2),-(b.y+x.height/2)),x.rotatable&&(p.translate(b.x+x.width/2,b.y+x.height/2),p.rotate((t-k)*w.rotateDir/3*Math.PI/180),p.translate(-(b.x+x.width/2),-(b.y+x.height/2))),w.inScale=1*z(Math.min(1,(t-c)/100)),p.drawImage(B,X,Y,x.width,x.height,b.x,b.y,x.width,x.height),p.restore()}P[o].inited=!0;for(var T=0;3>T;T++){h[T]||(h[T]={progress:0,hideProgress:0});var C="second"===o,j=z(Math.min(1,(t-c)/(C?200:150)));if(1!==j){p.strokeStyle="#49acf2",p.lineWidth=4*M.scaleFactor,p.beginPath();var H=0,I=0,A=0,N=0;switch(T){case 1:H=40,I=C?-100:-40,A=C?5:15,N=C?0:8;break;case 0:H=50,I=C?-125:-65,N=10;break;case 2:H=40,I=C?-150:-90,A=C?-15:-10,N=C?8:2}var R=H*j;R*=M.scaleFactor,I=I*Math.PI/180;var L=void 0;L="second"===o?e-100*M.scaleFactor:100*M.scaleFactor;var E=n;L+=A*M.scaleFactor,E+=N*M.scaleFactor;var D=L+R*Math.cos(I),W=E+R*Math.sin(I);p.moveTo(L,E),p.lineTo(D,W),p.stroke(),h[T].progress=j}}}return a?this.destroy():void(O=requestAnimationFrame(function(){return i.draw()}))}};try{stManager.done("fifa2018.js")}catch(H){}}});