(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-515a8379"],{"0095":function(e,t,n){"use strict";n("95c5")},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),c=n("1d80"),l=n("4840"),o=n("8aa5"),s=n("50c4"),u=n("14c3"),f=n("9263"),d=n("d039"),p=[].push,g=Math.min,v=4294967295,h=!d((function(){return!RegExp(v,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(c(this)),a=void 0===n?v:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,a);var l,o,s,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,h=new RegExp(e.source,d+"g");while(l=f.call(h,r)){if(o=h.lastIndex,o>g&&(u.push(r.slice(g,l.index)),l.length>1&&l.index<r.length&&p.apply(u,l.slice(1)),s=l[0].length,g=o,u.length>=a))break;h.lastIndex===l.index&&h.lastIndex++}return g===r.length?!s&&h.test("")||u.push(""):u.push(r.slice(g)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=c(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var c=n(r,e,this,i,r!==t);if(c.done)return c.value;var f=a(e),d=String(this),p=l(f,RegExp),x=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"y":"g"),E=new p(h?f:"^(?:"+f.source+")",b),_=void 0===i?v:i>>>0;if(0===_)return[];if(0===d.length)return null===u(E,d)?[d]:[];var m=0,y=0,R=[];while(y<d.length){E.lastIndex=h?y:0;var I,C=u(E,h?d:d.slice(y));if(null===C||(I=g(s(E.lastIndex+(h?0:y)),d.length))===m)y=o(d,y,x);else{if(R.push(d.slice(m,y)),R.length===_)return R;for(var k=1;k<=C.length-1;k++)if(R.push(C[k]),R.length===_)return R;y=m=I}}return R.push(d.slice(m)),R}]}),!h)},"13aa":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+e.globalData.fondoBannerPrincipal+")"}}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[e.icono.length?n("div",{staticClass:"banner-interno__titulo__icono me-3"},[n("i",{class:e.icono})]):e._e(),n("h2",{staticClass:"mb-0"},[e._v(e._s(e.titulo))])])])])},i=[],a={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},c=a,l=(n("0095"),n("2877")),o=Object(l["a"])(c,r,i,!1,null,null,null);t["default"]=o.exports},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"3cb4":function(e,t,n){"use strict";n("ddc8")},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),c=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==i(e))}},"64ef":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"curso-main-container referencias"},[n("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},e._l(e.orderedData,(function(t){return n("div",{key:t.link,staticClass:"referencias__item"},[e._v(" "+e._s(t.referencia)+" "),t.link?n("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.link)+" "),n("i",{staticClass:"fas fa-external-link-alt"})]):e._e(),n("hr",{staticClass:"my-3"})])})),0)],1)},i=[],a=n("2909"),c=(n("1276"),n("ac1f"),n("13aa")),l=n("ecc5"),o={name:"Referencias",components:{BannerInterno:c["default"]},mixins:[l["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var e=this,t=Object(a["a"])(this.referenciasData).sort((function(t,n){var r=e.quitarAcentos(t.referencia.split(" ")[0].toLowerCase()),i=e.quitarAcentos(n.referencia.split(" ")[0].toLowerCase());return r<i?-1:r>i?1:0}));return t}}},s=o,u=(n("3cb4"),n("2877")),f=Object(u["a"])(s,r,i,!1,null,null,null);t["default"]=f.exports},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||s;f&&(l=function(e){var t,n,i,l,f=this,d=s&&f.sticky,p=r.call(f),g=f.source,v=0,h=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),n=new RegExp("^(?:"+g+")",p)),u&&(n=new RegExp("^"+g+"$(?!\\s)",p)),o&&(t=f.lastIndex),i=a.call(d?n:f,h),d?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:o&&i&&(f.lastIndex=f.global?i.index+i[0].length:t),u&&i&&i.length>1&&c.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=l},"95c5":function(e,t,n){},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),c=n("9263"),l=n("9112"),o=a("species"),s=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var g=a(e),v=!i((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),h=v&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!v||!h||"replace"===e&&(!s||!u||d)||"split"===e&&!p){var x=/./[g],b=n(g,""[e],(function(e,t,n,r,i){return t.exec===c?v&&!i?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),E=b[0],_=b[1];r(String.prototype,e,E),r(RegExp.prototype,g,2==t?function(e,t){return _.call(e,this,t)}:function(e){return _.call(e,this)})}f&&l(RegExp.prototype[g],"sham",!0)}},ddc8:function(e,t,n){}}]);
//# sourceMappingURL=referencias.9c275882.js.map