(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},5363:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var t=r(5893),c=r(1664),i=r.n(c),a=r(9008),o=r.n(a),s=r(1673),l=r.n(s);function u(e){var n=e.children,r=e.title;return(0,t.jsxs)("div",{className:l().body,children:[(0,t.jsxs)("div",{className:l()["page-content"],children:[(0,t.jsxs)(o(),{children:[(0,t.jsxs)("title",{children:[" Next-BTC | ",void 0===r?"test-task":r]}),(0,t.jsx)("meta",{name:"description",content:"next app with BTC price"}),(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("nav",{className:l().nav,children:[(0,t.jsx)(i(),{href:"/",children:(0,t.jsx)("a",{children:"HOME"})}),(0,t.jsx)(i(),{href:"/usd",children:(0,t.jsx)("a",{children:"USD"})}),(0,t.jsx)(i(),{href:"/euro",children:(0,t.jsx)("a",{children:"EURO"})})]}),(0,t.jsx)("main",{children:n})]}),(0,t.jsx)("footer",{className:l().footer,children:(0,t.jsx)("a",{href:"https://github.com/PavloMarkov?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:"Powered by Pavlo Markov"})})]})}},3678:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var t=r(5893);r(9008);var c=r(7294),i=r(9473),a=r(1673),o=r.n(a),s=r(5363),l=r(2564);function u(){var e=(0,i.I0)(),n=(0,c.useState)(0),r=n[0],a=n[1];(0,c.useEffect)(function(){fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(function(e){return e.json()}).then(function(n){var r={date:n.time.updateduk,currencyValue:{USD:n.bpi.USD.rate,EUR:n.bpi.EUR.rate,GBP:n.bpi.GBP.rate}};e((0,l.WX)(r))});var n=setInterval(function(){return a(function(e){return e+1})},36e5);return function(){return clearInterval(n)}},[r,e]);var u=(0,i.v9)(function(e){return e.currency[e.currency.length-1].currencyValue});return(0,t.jsx)(s.default,{children:(0,t.jsx)("div",{className:o().container,children:(0,t.jsxs)("main",{className:o().main,children:[(0,t.jsx)("h1",{className:o().title,children:"Hello there!"}),(0,t.jsx)("h3",{children:"Current BTC price is:"}),u?(0,t.jsx)("h3",{children:"".concat(u.USD," USD")}):(0,t.jsx)("p",{children:"Loading..."}),(0,t.jsx)("h4",{children:"".concat(u.EUR," EUR")}),(0,t.jsx)("h4",{children:"".concat(u.GBP," GBP")})]})})})}},1673:function(e){e.exports={body:"Home_body__rmfLT","page-content":"Home_page-content__axylN",container:"Home_container__97eC3",nav:"Home_nav__esSPu",main:"Home_main__OVLM4",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",error:"Home_error__E8BKp",link:"Home_link__huVil",currencyValue:"Home_currencyValue__D60s7"}}},function(e){e.O(0,[996,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);