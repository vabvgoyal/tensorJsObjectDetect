(this.webpackJsonpobjectDetection=this.webpackJsonpobjectDetection||[]).push([[0],{253:function(e,t,n){e.exports=n(289)},258:function(e,t,n){},264:function(e,t){},265:function(e,t){},273:function(e,t){},276:function(e,t){},277:function(e,t){},287:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r=n(57),a=n.n(r),c=n(231),i=n.n(c),o=(n(258),n(4)),u=n.n(o),l=n(11),s=n(6),f=(n(288),n(251)),d=n(252),h=n.n(d),p=(n(287),function(e,t){e.forEach((function(e){var n=Object(s.a)(e.bbox,4),r=n[0],a=n[1],c=n[2],i=n[3],o=e.class,u=Math.floor(16777215*Math.random()).toString(16);t.strokeStyle="#"+u,t.font="18px Arial",t.beginPath(),t.fillStyle="#"+u,t.fillText(o,r,a),t.rect(r,a,c,i),t.stroke()}))});var v=function(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.useRef)(null),o=Object(r.useRef)(null),d=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.load();case 2:t=e.sent,console.log("Handpose model loaded."),setInterval((function(){v(t)}),10);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof i.current||null===i.current||4!==i.current.video.readyState){e.next=14;break}return n=i.current.video,r=i.current.video.videoWidth,a=i.current.video.videoHeight,i.current.video.width=r,i.current.video.height=a,o.current.width=r,o.current.height=a,e.next=10,t.detect(n);case 10:l=e.sent,s=o.current.getContext("2d"),c(!1),p(l,s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){d()}),[]),a.a.createElement("div",{className:"App"},n&&a.a.createElement("div",null,"Loading Camera"),a.a.createElement("header",{className:"App-header"},a.a.createElement(h.a,{ref:i,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:"100%",height:"100%"}}),a.a.createElement("canvas",{ref:o,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:640,height:480}})))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))}},[[253,1,2]]]);
//# sourceMappingURL=main.1de8d97a.chunk.js.map