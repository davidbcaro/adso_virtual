(function(e){function n(n){for(var o,i,c=n[0],u=n[1],s=n[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(o=!1)}o&&(r.splice(n--,1),e=u(u.s=a[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return u.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{"chunk-0206bfa0":"ed4caa0d","chunk-04b93936":"4cd99df8","chunk-0cfca828":"2a6a22bb","chunk-13303073":"c20862a8","chunk-13a6037e":"b849e802","chunk-1479a341":"084a9d34","chunk-1fb07a61":"d0c4724e","chunk-2c06842c":"ec74b073","chunk-2d208d90":"30f2d413","chunk-2d21d0e2":"f04661b4","chunk-2d22c123":"514a540d","chunk-2e80bb9a":"515708d7","chunk-3c94cd2f":"0c10d7db","chunk-4cdd78c0":"e958b361","chunk-515a8379":"1cd47f5b","chunk-522cec8c":"0b1dc463","chunk-53ccb27e":"bd4fd835","chunk-59974754":"40b5f944","chunk-7432e4d4":"b082528e","chunk-766a929b":"08eec8fa","chunk-839300a6":"5994e05d","chunk-c796899c":"caf4a865",comple:"d36126c3",creditos:"f8142bda",glosario:"fbf8a4b4",intro:"9980de1a",referencias:"9c275882",tema1:"52701155",tema2:"15a70c5a",tema3:"7a1997e2"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var n=[],a={"chunk-04b93936":1,"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-3c94cd2f":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-7432e4d4":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema3:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3c94cd2f":"1dbe8d4a","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"073d8973","chunk-522cec8c":"99a35118","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"04ab07f3","chunk-7432e4d4":"99a35118","chunk-766a929b":"1b0545d4","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"8b592c5c",creditos:"6240c160",glosario:"cc27d99d",intro:"0e433876",referencias:"55cf9e5a",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"d25b9016"}[e]+".css",t=u.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===t))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===t)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],f.parentNode.removeChild(f),a(r)},f.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,a[1](d)}t[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,a){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(a,o,function(n){return e[n]}.bind(null,o));return a},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"230f":function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.5da12654.svg"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=r,u=(a("cf25"),a("2877")),s=Object(u["a"])(c,i,t,!1,null,null,null),l=s.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("8c4f")),f=a("ae58"),p=a("7e58");o["a"].use(d["a"]);var m=new d["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema3").then(a.bind(null,"3eb5"))}}]},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=m,b=a("1c2c"),v=(a("becf"),a("7b17"),a("ab8b"),a("a3a0"),a("4bc7"),a("78df"),{global:{componenteFormativo:"Virtualización",descripcionCurso:"En este componente formativo se aborda el tema de virtualización, sus diferentes tipos y algunas herramientas útiles para este proceso. Esta virtualización se comprende como una arquitectura de software que posibilita la ejecución de varios sistemas operativos de servidor como invitado en host de servidor físico específico.",imagenBannerPrincipal:a("ae0a"),fondoBannerPrincipal:a("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Generalidades de la virtualización",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Tipos de virtualización",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Virtualización de servidores",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Virtualización a nivel de sistema operativo o basada en contenedores",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Virtualización a nivel de sistema operativo o basada en contenedores",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Virtualización de escritorios",hash:"t_2_4"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Herramientas de virtualización de servidores",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Ejemplo de virtualización",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Heim, B. (s. f.). Tecnologías de virtualización - Virtualización. Conceptos de Virtualización.",link:"https://sites.google.com/site/virutalizacionyha/tecnologias-de-virtualizacion"},{referencia:"VMware. (s. f.). Virtualización. VMware.",link:"https://www.vmware.com/co/solutions/virtualization.html"}],glosario:[{termino:"Binarios",significado:"tipo de archivos que contiene información requerida para la ejecución de ciertas aplicaciones."},{termino:"Data center",significado:"es un espacio donde se aloja un conjunto de equipos e infraestructura con el fin de brindar servicios a un grupo específico de usuarios."},{termino:"Librerías",significado:"conjunto de códigos construidos en un lenguaje de programación que sirve para ser reutilizado por otras aplicaciones."},{termino:"SDN",significado:"redes definidas por software."},{termino:"VM",significado:"máquina virtual."},{termino:"VLAN",significado:"red de área local virtual."},{termino:"VPN",significado:"red privada virtual."}],complementario:[{texto:"Generalidades de la virtualización: AlbertoLopez TECH TIPS. (2021). ¿Qué es la virtualización? ¿Para qué sirve la Virtualización? Tipos de virtualización de sistemas. YouTube. ",tipo:"Video",link:"https://youtu.be/K1vPbQtOlSc"},{texto:"Tipos de virtualización: AlbertoLopez TECH TIPS. (2021). Tipos de virtualización. 10 tipos de virtualización explicadas (de S.O., VDI, VPS, hardware, etc.). YouTube.",tipo:"Video",link:"https://youtu.be/LMl2_W7cRME"},{texto:"Herramientas de virtualización de servidores: VMware. (s.f.). Download VMware Workstation Pro. VMware. ",tipo:"Página web",link:"https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html"},{texto:"Herramientas de virtualización de servidores: VirtualBox. (s.f.). Download VirtualBox. VirtualBox",tipo:"Página web",link:"https://www.virtualbox.org/wiki/Downloads"},{texto:"Herramientas de virtualización de servidores: Docs Microsoft. (2019). Install Hyper-V on Windows 10. Docs Microsoft.",tipo:"Página web",link:"https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v"},{texto:"Herramientas de virtualización de servidores: QEMU. (s.f.). Download QEMU. QEMU. ",tipo:"Página web",link:"https://www.qemu.org/download/"},{texto:"Herramientas de virtualización de servidores: Parallels. (s.f.). Run Windows on Mac. Parallels. ",tipo:"Página web",link:"https://www.parallels.com"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:["Nombre 1","Nombre 2"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var g=a("9224");o["a"].prototype.$package=g,o["a"].config.productionTip=!1,o["a"].directive("child",{bind:function(e,n){e.appendChild(n.value)}}),new o["a"]({router:h,store:b["a"],render:function(e){return e(l)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.1","core-js":"^3.6.5","ecored-base-pkg":"2.3.1","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,n,a){},ae0a:function(e,n,a){e.exports=a.p+"img/banner-princiapal.861be8a9.svg"},cf25:function(e,n,a){"use strict";a("fea6")},fea6:function(e,n,a){}});
//# sourceMappingURL=app.e3f0ebcd.js.map