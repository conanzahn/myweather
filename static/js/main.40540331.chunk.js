(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{48:function(n,e,t){},49:function(n,e,t){},76:function(n,e,t){"use strict";t.r(e);var i,c,a,r,o,d,s,b,j,l,p,x,h,O,u,f,m,g,y,w,v,k,z,S,D,L,A,C,F,M,W,T,_,E,I,N,R,G,P,H,Y,q,B,J,Z,K,U,Q,V,X,$,nn,en,tn,cn,an,rn,on=t(4),dn=t.n(on),sn=t(33),bn=t.n(sn),jn=(t(48),t(43)),ln=t(8),pn=t(9),xn=t(11),hn=t(10),On=(t(49),t(2)),un=t(3),fn=t(37),mn=t(1),gn=un.b.div(i||(i=Object(On.a)(["\n    margin-top: 3%;\n    /* display:flex;\n    flex-direction: column;\n    align-items: center; */\n"]))),yn=un.b.div(c||(c=Object(On.a)(["\n    color: #5cac8e;\n"]))),wn=un.b.div(a||(a=Object(On.a)(["\n    font-size: 25px;\n    font-family: 'Courgette', cursive;\n"]))),vn=function(){return Object(mn.jsxs)(gn,{children:[Object(mn.jsx)(yn,{children:Object(mn.jsx)(fn.a,{size:"35px"})}),Object(mn.jsx)(wn,{children:"My Weather"})]})},kn=t(15),zn=t(38),Sn=un.b.button(r||(r=Object(On.a)(["\n    border: 1px hidden black;\n    background-color: #464545;\n    color: white;\n    border-radius: 15px;\n    margin-bottom: .2em;\n    text-transform: none;\n    letter-spacing: .16em;\n    font-size: 1em;\n    font-weight: 600;\n    \n    :hover {\n        border: 1.5px solid black;\n        border-radius: 8px;\n        background-color: #464545;\n        color: white;\n    }\n    :focus{\n        border: 1.5px solid black;\n        border-radius: 8px;\n        background-color: white;\n        color: #464545;\n        outline: none;\n    }\n\n    ","\n\n    ","\n\n    ","\n    "])),(function(n){return n.width&&Object(un.a)(o||(o=Object(On.a)(["width: ",";"])),n.width)}),(function(n){return{small:Object(un.a)(d||(d=Object(On.a)(["\n        padding: 10px 12px;\n        font-size: 12px;\n        "]))),medium:Object(un.a)(s||(s=Object(On.a)(["\n        padding: 12px 18px;\n        font-size: 1em;\n        "]))),large:Object(un.a)(b||(b=Object(On.a)(["\n        padding: 16px 18px;\n        font-size: 18px;\n        "])))}[n.size||"medium"]}),(function(n){return{primary:Object(un.a)(j||(j=Object(On.a)(["\n        background: #e0446d;\n        color: white;\n        "]))),secondary:Object(un.a)(l||(l=Object(On.a)(["\n        background: #f5f8fd;\n        color: #008fb4;\n        "]))),search:Object(un.a)(p||(p=Object(On.a)(["\n        border: hidden;\n        background-color: #5cac8e;\n        color: white;\n        :hover {\n        background-color: #437764;\n        color: white;\n        border-radius: 15px;\n        border: hidden;\n        }\n        "])))}[n.variant]})),Dn=t(17),Ln=t.n(Dn),An=un.b.div(x||(x=Object(On.a)(["\n    border: none;\n    margin-top: 5%;\n    display: flex;\n    justify-content: center;\n    outline: 0;\n"]))),Cn=un.b.div(h||(h=Object(On.a)(["\n    outline: 0;\n"]))),Fn=un.b.div(O||(O=Object(On.a)(["\n    display: flex;\n    outline:0;\n"]))),Mn=un.b.div(u||(u=Object(On.a)(["\n    border-radius:15px;\n    padding: 3px 5px 3px;\n    display: flex;\n    background: white;\n"]))),Wn=un.b.div(f||(f=Object(On.a)(["\n    margin: 5px 5px 0;\n    color: #555454;\n"]))),Tn=un.b.input(m||(m=Object(On.a)(["\n    border: none;\n    background: none;\n    padding:9px 10px;\n    font-size:15px;\n    :focus-visible{\n        outline:0;\n    }\n"]))),_n=un.b.div(g||(g=Object(On.a)(["\n    margin-left: 5%;\n    margin-top: 0.5%;\n"]))),En=function(n){Object(xn.a)(t,n);var e=Object(hn.a)(t);function t(){var n;Object(ln.a)(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(n=e.call.apply(e,[this].concat(c))).search=function(){var e=Object(kn.a)(n).keyWordElement.value;console.log("keyword",n.keyWordElement),n.props.updateAppState({isFirst:!1,isLoading:!0}),Ln.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=","06097b28b073d46a2f450fe6f7112b58","&units=","metric")).then((function(e){n.props.updateAppState({isLoading:!1,result:e.data})}),(function(e){n.props.updateAppState({isLoading:!1,err:e.message})}))},n}return Object(pn.a)(t,[{key:"render",value:function(){var n=this;return Object(mn.jsxs)(An,{children:[Object(mn.jsx)(Cn,{children:Object(mn.jsx)(Fn,{children:Object(mn.jsxs)(Mn,{children:[Object(mn.jsx)(Wn,{children:Object(mn.jsx)(zn.a,{size:"25px"})}),Object(mn.jsx)(Tn,{ref:function(e){return n.keyWordElement=e},type:"text",id:"city",name:"city",placeholder:"Sydney"})]})})}),Object(mn.jsx)(_n,{children:Object(mn.jsx)(Sn,{onClick:this.search,size:"small",variant:"search",children:" Search "})})]})}}]),t}(dn.a.Component),In=t(12),Nn=t.n(In),Rn=function(n){var e={Thunderstorm:"SLEET",Drizzle:"RAIN",Rain:"RAIN",Snow:"SNOW",Mist:"FOG",Smoke:"FOG",Dust:"FOG",Fog:"FOG",Squall:"WIND",Tornado:"WIND",Clear:"CLEAR_DAY",Clouds:"PARTLY_CLOUDY_DAY",Default:"Cloudy"};return e[n]||e.Default},Gn=un.b.div(y||(y=Object(On.a)(["\n    opacity: 0.8;\n    color: #353434;\n    /* width: 260px; */\n    margin-top: 1%; \n    padding: 10px 5px 10px;\n"]))),Pn=un.b.div(w||(w=Object(On.a)(["\n    border: none;\n    width: 260px;\n    padding: 0 5px 0;\n    letter-spacing: .25em;\n    text-transform: uppercase;\n    display: flex;\n    font-size:16px;\n    font-weight:bolder;\n    color: white;\n    margin-left: 5%;\n"]))),Hn=un.b.div(v||(v=Object(On.a)(["\n    display:flex;\n    justify-content: center;\n    margin-left: 1%;\n\n"]))),Yn=un.b.div(k||(k=Object(On.a)(["\n    letter-spacing: .1em;\n    display: inline-block;\n    border-radius: 25% 10%;\n    background: #4d4d4d;\n    opacity: 0.65;\n    color: #ffffff;\n    width: 140px;\n    margin-top: 2% ; \n    margin-right: 3%;\n    padding: 10px 5px 10px;\n"]))),qn=un.b.div(z||(z=Object(On.a)(["\n    margin-bottom: 10px;\n"]))),Bn=un.b.div(S||(S=Object(On.a)(["\n    padding: 2px 0 2px;\n"]))),Jn=un.b.div(D||(D=Object(On.a)(["\n    font-weight: bold;\n"]))),Zn=function(n){Object(xn.a)(t,n);var e=Object(hn.a)(t);function t(n){var i;return Object(ln.a)(this,t),(i=e.call(this,n)).state={results:""},i}return Object(pn.a)(t,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.fore_lat,i=e.fore_lon;Ln.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(i,"&appid=","06097b28b073d46a2f450fe6f7112b58","&units=","metric")).then((function(e){console.log("forecast-response",e);var t=e.data.daily;n.setState({day0:t[0].dt,day0icon:t[0].weather[0].main,day0temp:t[0].temp.day,day1:t[1].dt,day1icon:t[1].weather[0].main,day1temp:t[1].temp.day,day2:t[2].dt,day2icon:t[2].weather[0].main,day2temp:t[2].temp.day,day3:t[3].dt,day3icon:t[3].weather[0].main,day3temp:t[3].temp.day,day4:t[4].dt,day4icon:t[4].weather[0].main,day4temp:t[4].temp.day})}))}},{key:"render",value:function(){var n=this.state,e=n.day0,t=n.day0icon,i=n.day0temp,c=n.day1,a=n.day1icon,r=n.day1temp,o=n.day2,d=n.day2icon,s=n.day2temp,b=n.day3,j=n.day3icon,l=n.day3temp,p=n.day4,x=n.day4icon,h=n.day4temp;return Object(mn.jsxs)(Gn,{children:[Object(mn.jsx)(Pn,{children:"5 Days Forecast"}),Object(mn.jsxs)(Hn,{children:[Object(mn.jsxs)(Yn,{children:[Object(mn.jsx)(qn,{children:new window.Date(1e3*e).toDateString().substr(4,6)}),Object(mn.jsx)(Bn,{children:Object(mn.jsx)(Nn.a,{icon:Rn(t),size:20,color:"white"})}),Object(mn.jsxs)(Jn,{children:[Math.floor(i)," \u2103"]})]}),Object(mn.jsxs)(Yn,{children:[Object(mn.jsx)(qn,{children:new window.Date(1e3*c).toDateString().substr(4,6)}),Object(mn.jsx)(Bn,{children:Object(mn.jsx)(Nn.a,{icon:Rn(a),size:20,color:"white"})}),Object(mn.jsxs)(Jn,{children:[Math.floor(r)," \u2103"]})]}),Object(mn.jsxs)(Yn,{children:[Object(mn.jsx)(qn,{children:new window.Date(1e3*o).toDateString().substr(4,6)}),Object(mn.jsx)(Bn,{children:Object(mn.jsx)(Nn.a,{icon:Rn(d),size:20,color:"white"})}),Object(mn.jsxs)(Jn,{children:[Math.floor(s)," \u2103"]})]}),Object(mn.jsxs)(Yn,{children:[Object(mn.jsx)(qn,{children:new window.Date(1e3*b).toDateString().substr(4,6)}),Object(mn.jsx)(Bn,{children:Object(mn.jsx)(Nn.a,{icon:Rn(j),size:20,color:"white"})}),Object(mn.jsxs)(Jn,{children:[Math.floor(l)," \u2103"]})]}),Object(mn.jsxs)(Yn,{children:[Object(mn.jsx)(qn,{children:new window.Date(1e3*p).toDateString().substr(4,6)}),Object(mn.jsx)(Bn,{children:Object(mn.jsx)(Nn.a,{icon:Rn(x),size:20,color:"white"})}),Object(mn.jsxs)(Jn,{children:[Math.floor(h)," \u2103"]})]})]})]})}}]),t}(dn.a.Component),Kn=t(7),Un=un.b.div(L||(L=Object(On.a)(["\n    border-radius: 30px;\n    background: black;\n    opacity: 0.5;\n    /* border: 1px solid; */\n    margin: 10% 10% 10%;\n    padding: 20px 0 20px;\n"]))),Qn=un.b.div(A||(A=Object(On.a)(["\n    color: white;\n    font-size: 20px;\n"]))),Vn=un.b.div(C||(C=Object(On.a)(["\n    margin-top: 2%;\n    color: #ffec81;\n"]))),Xn=un.b.b(F||(F=Object(On.a)(["\n    color: #47af89;\n"]))),$n=function(){return Object(mn.jsxs)(Un,{children:[Object(mn.jsx)(Qn,{children:"Welcome to this Weather App!"}),Object(mn.jsx)(Vn,{children:Object(mn.jsx)(Kn.e,{size:"35px"})}),Object(mn.jsxs)(Qn,{children:["Please input a ",Object(mn.jsx)(Xn,{children:"cityname"})," to ",Object(mn.jsx)(Xn,{children:"seach"})," weather infomation."]})]})},ne=t(39),ee=un.b.div(M||(M=Object(On.a)(["\n    border-radius: 30px;\n    background: #d3d3d3;\n    opacity: 0.6;\n    /* border: 1px solid; */\n    margin: 10% 10% 10%;\n    padding: 20px 0 20px;\n"]))),te=un.b.div(W||(W=Object(On.a)(["\n    color: red;\n    font-size: 20px;\n"]))),ie=un.b.div(T||(T=Object(On.a)(["\n    margin-top: 2%;\n    color: #fde974;\n"]))),ce=un.b.b(_||(_=Object(On.a)(["\n    /* color: #47af89; */\n"]))),ae=function(){return Object(mn.jsxs)(ee,{children:[Object(mn.jsx)(te,{children:Object(mn.jsx)(ce,{children:"Sorry, request failed!"})}),Object(mn.jsx)(ie,{children:Object(mn.jsx)(ne.a,{size:"35px"})}),Object(mn.jsxs)(te,{children:["Please input a ",Object(mn.jsx)(ce,{children:"correct cityname"})," or ",Object(mn.jsx)(ce,{children:"try it again"}),"."]})]})},re=t(40),oe=un.b.div(E||(E=Object(On.a)(["\n    margin: 10% 10% 10%;\n    padding: 20px 0 20px;\n"]))),de=un.b.div(I||(I=Object(On.a)(["\n    color: white;\n    font-size: 20px;\n    font-weight: bold;\n    letter-spacing:0.15em;\n"]))),se=un.b.div(N||(N=Object(On.a)(["\n    margin-top: 2%;\n    color: white;\n"]))),be=function(){return Object(mn.jsxs)(oe,{children:[Object(mn.jsx)(se,{children:Object(mn.jsx)(re.a,{size:"60px"})}),Object(mn.jsx)(de,{children:"Loading..."})]})},je=un.b.div(R||(R=Object(On.a)(["\n    border: none;\n    width: 100%;\n    margin-top: 5%;\n"]))),le=un.b.div(G||(G=Object(On.a)(["\n    border: none;\n    color: white;\n    width: 260px;\n    padding: 0 5px 0;\n    letter-spacing: .25em;\n    text-transform: uppercase;\n    margin-left: 5%;\n"]))),pe=un.b.div(P||(P=Object(On.a)(["\n    display: flex;\n    padding: 0 15px 0;\n    font-size: 16px;\n    font-weight: bold;\n"]))),xe=un.b.div(H||(H=Object(On.a)(["\n    display: flex;\n    padding: 0 15px 0;\n    font-size: 11px;\n"]))),he=un.b.div(Y||(Y=Object(On.a)(["\n    border: none;\n    display: flex;\n    justify-content:center;\n"]))),Oe=un.b.div(q||(q=Object(On.a)(["\n    display: flex;\n    border-radius:15px;\n    background: white;\n    opacity: 0.5;\n    color: #353434;\n    width: 260px;\n    margin-top: 2%; \n    padding: 10px 5px 10px;\n"]))),ue=un.b.div(B||(B=Object(On.a)(["\n    margin: 2px 6px 2px;\n    padding-left: 30px;\n"]))),fe=un.b.div(J||(J=Object(On.a)(["\n    margin-left: 5%;\n    \n"]))),me=un.b.div(Z||(Z=Object(On.a)(["\n    display:flex;\n    font-size: 25px;\n    font-weight: bold;\n"]))),ge=un.b.div(K||(K=Object(On.a)(["\n    display:flex;\n    font-size: 16px;\n"]))),ye=un.b.div(U||(U=Object(On.a)(["\n    margin-left: 15%;\n    margin-top: 2%; \n    border-radius:15px;\n    background: white;\n    opacity: 0.5;\n    color: #353434;\n    width: 360px;\n    padding: 10px 5px 10px;\n"]))),we=un.b.div(Q||(Q=Object(On.a)(["\n    display: flex;\n"]))),ve=un.b.div(V||(V=Object(On.a)(["\n    margin: 2px 27px 2px;\n"]))),ke=un.b.div(X||(X=Object(On.a)(["\n    font-weight: bold;\n"]))),ze=un.b.div($||($=Object(On.a)(["\n\n"]))),Se=function(n){Object(xn.a)(t,n);var e=Object(hn.a)(t);function t(){return Object(ln.a)(this,t),e.apply(this,arguments)}return Object(pn.a)(t,[{key:"render",value:function(){var n=this.props,e=n.result,t=n.isFirst,i=n.isLoading,c=n.err,a=e.coord,r=e.dt,o=e.main,d=e.name,s=e.sys,b=e.weather,j=e.wind;return console.log("render=====",this.props.result),Object(mn.jsx)(je,{children:t?Object(mn.jsx)($n,{}):i?Object(mn.jsx)(be,{}):c?Object(mn.jsx)(ae,{}):Object(mn.jsxs)(mn.Fragment,{children:[Object(mn.jsxs)(le,{children:[Object(mn.jsxs)(pe,{children:[d,", ",s.country]}),Object(mn.jsx)(xe,{children:new window.Date(1e3*r).toLocaleString()})]}),Object(mn.jsxs)(he,{children:[Object(mn.jsxs)(Oe,{children:[Object(mn.jsx)(ue,{children:Object(mn.jsx)(Nn.a,{icon:Rn(b[0].main),size:80,color:"black"})}),Object(mn.jsxs)(fe,{children:[Object(mn.jsxs)(me,{children:[Math.floor(o.temp)," \u2103"]}),Object(mn.jsx)(ge,{children:b[0].description})]})]}),Object(mn.jsxs)(ye,{children:[Object(mn.jsxs)(we,{children:[Object(mn.jsxs)(ve,{children:[Object(mn.jsxs)(ke,{children:[Math.floor(o.temp_max),"\u2103"]}),Object(mn.jsx)(ze,{children:"High"})]}),Object(mn.jsxs)(ve,{children:[Object(mn.jsx)(ke,{children:new window.Date(1e3*s.sunrise).toLocaleTimeString()}),Object(mn.jsx)(ze,{children:"Sunrise"})]}),Object(mn.jsxs)(ve,{children:[Object(mn.jsxs)(ke,{children:[j.speed,"Km/h"]}),Object(mn.jsx)(ze,{children:"Wind"})]})]}),Object(mn.jsxs)(we,{children:[Object(mn.jsxs)(ve,{children:[Object(mn.jsxs)(ke,{children:[Math.floor(o.temp_min),"\u2103"]}),Object(mn.jsx)(ze,{children:"Low"})]}),Object(mn.jsxs)(ve,{children:[Object(mn.jsx)(ke,{children:new window.Date(1e3*s.sunset).toLocaleTimeString()}),Object(mn.jsx)(ze,{children:"Sunset"})]}),Object(mn.jsxs)(ve,{children:[Object(mn.jsxs)(ke,{children:[o.humidity,"%"]}),Object(mn.jsx)(ze,{children:"Humidity"})]})]})]})]}),Object(mn.jsx)(Zn,{fore_lat:a.lat,fore_lon:a.lon})]})})}}]),t}(dn.a.Component),De=t(22),Le=t(23),Ae=t(41),Ce=t(42),Fe=[{link:"http://haonan.zhang.website.s3-website.us-east-2.amazonaws.com/",label:"Web",icon:Object(mn.jsx)(Ae.a,{})},{link:"https://github.com/conanzahn",label:"Github",icon:Object(mn.jsx)(Kn.b,{})},{link:"https://www.linkedin.com/in/haonan-zhang-unsw/",label:"Linkedin",icon:Object(mn.jsx)(Kn.d,{})},{link:"https://www.instagram.com/conanzahn/",label:"Instagram",icon:Object(mn.jsx)(Kn.c,{})},{link:"mailto:conanzahn@gmail.com",label:"Email",icon:Object(mn.jsx)(Ce.a,{})},{link:"https://www.facebook.com/haonan.zhang.1420/",label:"Facebook",icon:Object(mn.jsx)(Kn.a,{})},{link:"https://twitter.com/ConanZahn",label:"Twitter",icon:Object(mn.jsx)(Kn.f,{})}],Me=un.b.div(nn||(nn=Object(On.a)(["\n    border-top: 1px solid hsla(0,0%,82.7%,.3);\n    margin:5% 5% 1%;\n"]))),We=un.b.div(en||(en=Object(On.a)(["\n    background: #000000;\n    opacity:0.8;\n    border-radius: 50% 20% / 10% 40%;\n    margin-top: 1%;\n    padding: 10px 5px 10px;\n"]))),Te=un.b.div(tn||(tn=Object(On.a)(["\n    padding-top: 1%;\n"]))),_e=un.b.div(cn||(cn=Object(On.a)(["\n    display: inline;\n    margin: 0 6px 0;\n"]))),Ee=un.b.a(an||(an=Object(On.a)(["\n    color: white;\n"]))),Ie=un.b.div(rn||(rn=Object(On.a)(['\n    color: #aaa;\n    font-family: "Raleway",Helvetica,sans-serif;\n    font-size: .5em;\n    font-weight: bold;\n    letter-spacing: .25em;\n    text-transform: uppercase;\n    margin-top: 1%;\n    padding-bottom: 1%;\n']))),Ne=Object(mn.jsx)(De.a,{icon:Le.a,color:"#552c2cc5"}),Re=Object(mn.jsx)(De.a,{icon:Le.b,color:"red"}),Ge=function(){return Object(mn.jsx)(Me,{children:Object(mn.jsxs)(We,{children:[Object(mn.jsx)(Te,{children:Fe.map((function(n){return Object(mn.jsx)(_e,{children:Object(mn.jsx)(Ee,{href:n.label,children:n.icon})},n.label)}))}),Object(mn.jsxs)(Ie,{children:["\xa9 Copyright 2021 | Made with ",Re," and ",Ne," by Haonan Zhang."]})]})})},Pe=function(n){Object(xn.a)(t,n);var e=Object(hn.a)(t);function t(){var n;Object(ln.a)(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(n=e.call.apply(e,[this].concat(c))).state={result:{},isFirst:!0,isLoading:!1,err:""},n.updateAppState=function(e){n.setState(e)},n}return Object(pn.a)(t,[{key:"render",value:function(){return Object(mn.jsxs)("div",{className:"App",children:[Object(mn.jsx)(vn,{}),Object(mn.jsx)(En,{updateAppState:this.updateAppState}),Object(mn.jsx)(Se,Object(jn.a)({},this.state)),Object(mn.jsx)(Ge,{})]})}}]),t}(dn.a.Component),He=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,77)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};bn.a.render(Object(mn.jsx)(dn.a.StrictMode,{children:Object(mn.jsx)(Pe,{})}),document.getElementById("root")),He()}},[[76,1,2]]]);
//# sourceMappingURL=main.40540331.chunk.js.map