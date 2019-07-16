(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(n,e,t){n.exports=t(41)},41:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(21),o=t.n(i),c=t(10),l=t(8),s=t(6),m=[{title:"001 Title",hash:"rEgzmB"},{title:"002 Menu Icon",hash:"agxrqY"},{title:"084 Book Cover",hash:"vqMOYQ"}],u=Object(r.createContext)(null),d={project:m[0]},f=function(n){var e=n.children,t=Object(r.useState)(d),i=Object(s.a)(t,2),o=i[0],c=i[1];return a.a.createElement(u.Provider,{value:{selectedProject:o,setSelectedProject:c}},e)},h=t(1),b=t(2);function g(){var n=Object(h.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  @media (max-width: 1000px) {\n    margin-left: 0;\n    flex-direction: column;\n  }\n"]);return g=function(){return n},n}function p(){var n=Object(h.a)(["\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n    @media (max-width: 425px) {\n      font-size: 8px;\n    }\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n  \n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 2rem;\n    font-family: 'Courier New', 'Courier', sans-serif;  \n  }\n"]);return p=function(){return n},n}var v=Object(b.a)(p()),x=b.c.div(g());function j(){var n=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  transition: all 0.8s ease 0.6s;\n  ",";\n\n  p {\n    color: #075a97;\n  }\n"]);return j=function(){return n},n}var E=b.c.div(j(),function(n){return n.animateProps}),w=function(n){var e=n.user,t=n.hash,r=n.height,i=n.width,o=n.theme,c=n.tab,l=n.title,s="//codepen.io/".concat(e,"/embed/").concat(t,"/?height=").concat(r,"&theme-id=").concat(o,"&default-tab=").concat(c),m="http://codepen.io/".concat(e),u="".concat(m,"/pen/").concat(t,"/");return a.a.createElement("iframe",{title:"100 Days CSS - ".concat(l),width:i,height:r,scrolling:"no",src:s,frameBorder:"no",style:{height:r,width:i,margin:"7rem 0"}},a.a.createElement("a",{href:u},"See this pen")," by ",e," (",a.a.createElement("a",{href:e},"@",e),") on"," ",a.a.createElement("a",{href:"http://codepen.io"},"CodePen"),".")};w.defaultProps={height:"45rem",width:"40rem",tab:"result",theme:"light",user:"ryasan86"};var O=w,y={opacity:0},z=function(){var n=Object(r.useState)(y),e=Object(s.a)(n,2),t=e[0],i=e[1],o=Object(r.useContext)(u).selectedProject.project;return Object(r.useEffect)(i,[]),a.a.createElement(E,{animateProps:t},o?a.a.createElement(O,{hash:o.hash,title:o.title}):a.a.createElement("p",null,"Project Not Found \u2639"))};function k(){var n=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(147deg, #002f4e 0%, #04619f 74%);\n  color: white;\n  position: relative;\n  overflow: hidden;\n\n  &:before {\n    content: '';\n    height: ",";\n    width: ",";\n    position: absolute;\n    background: white;\n    border-radius: 50%;\n    left: -130%;\n    top: calc(-"," / 6);\n    z-index: 10;\n    @media (max-width: 1150px) {\n      margin-left: 0;\n      display: none;\n    }\n  }\n\n  .content {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    margin-left: 250px;\n    transition: all 0.3s;\n\n    @media (max-width: 1350px) {\n      margin-left: 150px;\n    }\n    @media (max-width: 1150px) {\n      margin-left: 0;\n      align-items: center;\n    }\n  }\n\n  .description {\n    margin: 0;\n    max-width: 350px;\n    font-size: 2rem;\n    transition: all 0.8s ease;\n    ",";\n    @media (max-width: 1000px) {\n      text-align: center;\n    }\n  }\n"]);return k=function(){return n},n}var N=b.c.div(k(),"150%","150%","150%",function(n){return n.animateState});function _(){var n=Object(h.a)(["\n  color: white;\n  position: relative;\n  display: flex;\n  transition: all 0.8s ease;\n  ",";\n\n  .numbers-container {\n    display: flex;\n    position: relative;\n    width: 20rem;\n\n    .one {\n      width: 2.5rem;\n      height: 10rem;\n      border-radius: 0.5rem;\n      background: white;\n      box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.8);\n      position: relative;\n      z-index: 2;\n\n      &:before {\n        content: '';\n        position: absolute;\n        background: white;\n        width: 2.5rem;\n        height: 5rem;\n        top: 0;\n        left: -2rem;\n        border-radius: 0.5rem;\n        transform: rotate(50deg);\n      }\n    }\n\n    .zero {\n      width: 10rem;\n      height: 10rem;\n      border: 2.5rem solid white;\n      border-radius: 50%;\n      box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.8);\n      position: absolute;\n\n      &.zero-1 {\n        right: 8.7rem;\n        z-index: 1;\n      }\n\n      &.zero-2 {\n        right: 0;\n      }\n    }\n  }\n\n  .text-container {\n    text-transform: uppercase;\n    margin-left: 1rem;\n\n    .text {\n      margin: 0;\n      line-height: 0.97;\n      &.big {\n        font-size: 8rem;\n        font-weight: 600;\n      }\n\n      &.small {\n        font-size: 2.4rem;\n      }\n    }\n  }\n"]);return _=function(){return n},n}var C=b.c.div(_(),function(n){return n.animateState}),S=function(){var n=Object(r.useState)({opacity:0,transform:"translateX(100%)"}),e=Object(s.a)(n,2),t=e[0],i=e[1];return Object(r.useEffect)(i,[]),a.a.createElement(C,{animateState:t},a.a.createElement("div",{className:"numbers-container"},a.a.createElement("div",{className:"number one"}),a.a.createElement("div",{className:"number zero zero-1"}),a.a.createElement("div",{className:"number zero zero-2"})),a.a.createElement("div",{className:"text-container"},a.a.createElement("h1",{className:"text big"},"days"),a.a.createElement("h3",{className:"text small"},"css challenge")))},R=t(13);function P(){var n=Object(h.a)(["\n  margin-left: 10rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  transition: all 0.8s ease;\n  ",";\n  @media (max-width: 1150px) {\n    margin-left: 0;\n  }\n\n  .nav-btn {\n    margin: 0;\n    background: none;\n    border: 0;\n    outline: 0;\n    cursor: pointer;\n    z-index: 10;\n    background: white;\n    width: 5rem;\n    height: 5rem;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.3s;\n    &:hover {\n      background: #ecf0f1;\n    }\n\n    .nav-btn__arrow {\n      border: solid #075a97;\n      border-width: 0 0.4rem 0.4rem 0;\n      display: inline-block;\n      padding: 0.2rem;\n      height: 2rem;\n      width: 2rem;\n      position: relative;\n\n      &.left {\n        left: 0.4rem;\n        transform: rotate(135deg);\n        ",";\n      }\n      &.right {\n        right: 0.4rem;\n        transform: rotate(-45deg);\n        ",";\n      }\n    }\n  }\n\n  h3 {\n    width: 23rem;\n    font-size: 2.4rem;\n    text-align: center;\n    margin: 0;\n  }\n"]);return P=function(){return n},n}function I(){var n=Object(h.a)(["\n  animation: "," 0.3s ease-out;\n"]);return I=function(){return n},n}function A(){var n=Object(h.a)(["\n  animation: "," 0.3s ease-out;\n"]);return A=function(){return n},n}function T(){var n=Object(h.a)(["\n  0% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-35deg) skew(30deg);\n  }\n  100% {\n    transform: rotate(-45deg);\n  }\n"]);return T=function(){return n},n}function L(){var n=Object(h.a)(["\n  0% {\n    transform: rotate(135deg);\n  }\n  50% {\n    transform: rotate(150deg) skew(30deg);\n  }\n  100% {\n    transform: rotate(135deg);\n  }\n"]);return L=function(){return n},n}var B=Object(b.d)(L()),M=Object(b.d)(T()),W=Object(b.b)(A(),B),K=Object(b.b)(I(),M),F=b.c.div(P(),function(n){return n.nav},function(n){return n.left&&W},function(n){return n.right&&K}),V={left:!1,right:!1,nav:{opacity:0,transform:"translateX(-100%)"}},Y=function(n,e){switch(e){case"NAV_ENTER":return Object(R.a)({},n,{nav:null});case"LEFT_ARROW_CLICK":return Object(R.a)({},n,{left:!0,right:!1});case"RIGHT_ARROW_CLICK":return Object(R.a)({},n,{left:!1,right:!0});default:return Object(R.a)({},n,{left:!1,right:!1})}},q=Object(l.f)(function(n){var e=n.history,t=n.location,i=Object(r.useContext)(u),o=i.setSelectedProject,c=i.selectedProject,l=Object(r.useState)(0),d=Object(s.a)(l,2),f=d[0],h=d[1],b=Object(r.useReducer)(Y,V),g=Object(s.a)(b,2),p=g[0],v=g[1],x=function(n){h(n),o({project:m[n]}),e.push("/?day=".concat(n+1))};return Object(r.useEffect)(function(){var n=new URLSearchParams(t.search),e=parseInt(n.get("day"))-1;x(e||0),v("NAV_ENTER")},[]),a.a.createElement(F,p,a.a.createElement("button",{className:"nav-btn prev-btn",onClick:function(){var n=f<=0?m.length-1:f-1;v("LEFT_ARROW_CLICK"),x(n)},onAnimationEnd:v},a.a.createElement("i",{className:"nav-btn__arrow left"})),a.a.createElement("h3",null,c.project&&c.project.title||a.a.createElement("span",null,"\u2639")),a.a.createElement("button",{className:"nav-btn next-btn",onClick:function(){var n=f>=m.length-1?0:f+1;v("RIGHT_ARROW_CLICK"),x(n)},onAnimationEnd:v},a.a.createElement("i",{className:"nav-btn__arrow right"})))}),G=Object(l.f)(function(){var n=Object(r.useState)({opacity:0,transform:"translateY(100%)"}),e=Object(s.a)(n,2),t=e[0],i=e[1];return Object(r.useEffect)(i,[]),a.a.createElement(N,{animateState:t},a.a.createElement("div",{className:"content"},a.a.createElement(S,null),a.a.createElement(q,null),a.a.createElement("p",{className:"description"},"A a collection of 100 builds over the course of 100 days to strengthen CSS layout, transition, and animation skills.")))});function H(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  h2 {\n    color: #075a97;\n    margin-top: 20%;\n  }\n\n  button {\n    background: 0;\n    border: 3px solid #075a97;\n    color: #075a97;\n    font-size: 2rem;\n    border-radius: 2rem;\n    padding: 0.2rem 2rem;\n    transition: all 0.3s;\n    cursor: pointer;\n\n    &:hover {\n      background: #075a97;\n      color: white;\n    }\n  }\n"]);return H=function(){return n},n}var J=b.c.div(H()),U=Object(l.f)(function(n){var e=n.history.goBack;return a.a.createElement(J,null,a.a.createElement("h2",null,"Uh oh! Page not found ",a.a.createElement("span",null,"\u2639"),"\ufe0f"),a.a.createElement("button",{onClick:e},"go back"))});function X(){var n=Object(h.a)(["\n  @media (max-width: 1000px) {\n    fill: #fff;\n    & > path:first-of-type {\n      fill: #075a97;\n    }\n  }\n\n  &:hover {\n    .octo-arm {\n      animation: "," 560ms ease-in-out;\n      @media (max-width: 425px) {\n        animation: none;\n      }\n    }\n  }\n"]);return X=function(){return n},n}function D(){var n=Object(h.a)(["\n  0%,\n  100% {\n    transform: rotate(0);\n  }\n  20%,\n  60% {\n    transform: rotate(-25deg);\n  }\n  40%,\n  80% {\n    transform: rotate(10deg);\n  }\n"]);return D=function(){return n},n}var Q=Object(b.d)(D()),Z=b.c.svg(X(),Q),$=function(){return a.a.createElement("a",{href:"https://github.com/ryasan86/100_days_css",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(Z,{xmlns:"http://www.w3.org/2000/svg",width:"80",height:"80",viewBox:"0 0 250 250",fill:"#075a97",style:{position:"absolute",top:0,right:0,zIndex:100,cursor:"pointer"}},a.a.createElement("path",{d:"M0 0l115 115h15l12 27 108 108V0z",fill:"#fff"}),a.a.createElement("path",{className:"octo-arm",d:"M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16",style:{WebkitTransformOrigin:"130px 106px",transformOrigin:"130px 106px"}}),a.a.createElement("path",{className:"octo-body",d:"M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"})))},nn=function(){return a.a.createElement(x,null,a.a.createElement($,null),a.a.createElement(z,null),a.a.createElement(G,null))},en=function(){return a.a.createElement(c.a,{basename:"/100_days_css"},a.a.createElement(f,null,a.a.createElement(v,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:nn}),a.a.createElement(l.a,{component:U}))))};o.a.render(a.a.createElement(en,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d4d48e6f.chunk.js.map