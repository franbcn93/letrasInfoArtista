(this.webpackJsonpletras_canciones=this.webpackJsonpletras_canciones||[]).push([[0],{23:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(17),n=a.n(r),i=(a(23),a(6)),l=a.n(i),j=a(18),o=a(3),d=a(4),b=a(7),m=a(0),h=function(e){var t=e.guardarBusquedaLetra,a=Object(c.useState)({artista:"",cancion:""}),s=Object(o.a)(a,2),r=s[0],n=s[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),j=l[0],h=l[1],u=r.artista,O=r.cancion,x=function(e){n(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)("div",{className:"bg-info",children:[j?Object(m.jsx)("p",{className:"alert alert-danger text-center p-2",children:"Todos los campos son obligatorios"}):null,Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==u.trim()&&""!==O.trim()?(h(!1),t(r)):h(!0)},className:"col card text-white bg-transparent mb-5 pt-5 pb-2",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("legend",{className:"text-center",children:"Buscador Letras Canciones"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Artista"}),Object(m.jsx)("input",{type:"text",className:"form-control",name:"artista",placeholder:"Nombre Artista",onChange:x,value:u})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Canci\xf3n"}),Object(m.jsx)("input",{type:"text",className:"form-control",name:"cancion",placeholder:"Nombre Canci\xf3n",onChange:x,value:O})]})})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary float-right",children:"Buscar"})]})})})})]})},u=function(e){var t=e.letra;if(0===t.length)return null;var a=t.lyrics,s=t.album;return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)("h2",{className:"card-text",children:"Letra Canci\xf3n"}),Object(m.jsxs)("div",{className:"card-text",style:{paddingBottom:"20px"},children:[Object(m.jsx)("strong",{children:"Album: "})," ",s]}),Object(m.jsx)("p",{className:"card-text letra",children:a})]})},O=function(e){var t=e.info;if(0===Object.keys(t).length)return null;var a=t.strArtistThumb,c=t.strGenre,s=t.strBiographyES;return Object(m.jsxs)("div",{className:"card border-light",children:[Object(m.jsx)("div",{className:"card-header bg-primary text-light font-weight-bold",children:"Informaci\xf3n Artista"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("img",{src:a,alt:"Logo Artista"}),Object(m.jsxs)("p",{className:"card-text",children:["G\xe9nero: ",c]}),Object(m.jsx)("h2",{className:"card-text",children:"Biograf\xeda:"}),Object(m.jsx)("p",{className:"card-text",children:s}),Object(m.jsxs)("p",{className:"card-text",children:[Object(m.jsx)("a",{href:"https://".concat(t.strFacebook),target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("i",{className:"fab fa-facebook"})}),Object(m.jsx)("a",{href:"https://".concat(t.strTwitter),target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("i",{className:"fab fa-twitter"})}),Object(m.jsx)("a",{href:"".concat(t.strLastFMChart),target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)("i",{className:"fab fa-lastfm"})})]})]})]})},x=a(8),p=a.n(x);var f=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(""),n=Object(o.a)(r,2),i=n[0],d=n[1],b=Object(c.useState)({}),x=Object(o.a)(b,2),f=x[0],v=x[1];return Object(c.useEffect)((function(){0!==Object.keys(a).length&&function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,s,r,n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.artista,a.cancion,"https://api.happi.dev/v1/music/artists/5244/albums/782880/tracks/13244206/lyrics?apikey=0a42d6kmXpNGFR3I76mDvapwXAS9jUPQpBVmi32irHFdSvBsj5LOMB4F",c="https://www.theaudiodb.com/api/v1/json/1/search.php?s=".concat(t),e.next=5,Promise.all([p()("https://api.happi.dev/v1/music/artists/5244/albums/782880/tracks/13244206/lyrics?apikey=0a42d6kmXpNGFR3I76mDvapwXAS9jUPQpBVmi32irHFdSvBsj5LOMB4F"),p()(c)]);case 5:s=e.sent,r=Object(o.a)(s,2),n=r[0],i=r[1],d(n.data.result),v(i.data.artists[0]),console.log(n),console.log(i);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(h,{guardarBusquedaLetra:s}),Object(m.jsx)("div",{className:"container mt-5",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)(O,{info:f})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)(u,{letra:i})})]})})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.219776ef.chunk.js.map