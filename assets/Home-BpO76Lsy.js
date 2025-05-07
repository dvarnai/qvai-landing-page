import{w as G}from"./with-props-BurUXKPG.js";import{o as e,a as o}from"./chunk-AYJ5UCUI-BJpQ5qTT.js";const J=()=>e.jsxs("div",{className:"fixed inset-0 overflow-hidden pointer-events-none perspective-container",children:[e.jsx("div",{className:"absolute inset-0 opacity-30 gradient-background"}),e.jsx("div",{className:"absolute opacity-10 grid-lines"}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 h-full opacity-20 wave-effect"}),e.jsx("style",{jsx:!0,children:`
                .perspective-container {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }

                .gradient-background {
                    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 100%),
                    radial-gradient(circle at 50% 30%, rgba(76, 0, 255, 0.8), transparent 60%),
                    radial-gradient(circle at 70% 60%, rgba(0, 183, 255, 0.8), transparent 50%);
                    transform: translateZ(-10px) rotateX(5deg);
                    animation: float-gradients 15s ease-in-out infinite alternate;
                }

                .grid-lines {
                    top: -500px;
                    left: -500px;
                    right: -500px;
                    bottom: -500px;
                    background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.5) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.5) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 0.5) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.5) 75%, rgba(255, 255, 255, 0.5) 76%, transparent 77%, transparent);
                    background-size: 50px 50px;
                    transform: translateZ(-20px) rotateX(10deg);
                    animation: float-grid 20s ease-in-out infinite alternate;
                }

                .wave-effect {
                    background: linear-gradient(180deg, transparent 0%, transparent 40%, rgba(0, 183, 255, 0.1) 80%, rgba(76, 0, 255, 0.2) 100%);
                    background-size: 200% 200%;
                    transform: translateZ(-5px) rotateX(3deg);
                    animation: wave 15s ease infinite, float-wave 12s ease-in-out infinite alternate;
                }

                @keyframes float-gradients {
                    0% {
                        transform: translateZ(-10px) rotateX(5deg) translateY(0);
                    }
                    100% {
                        transform: translateZ(-10px) rotateX(5deg) translateY(-20px);
                    }
                }

                @keyframes float-grid {
                    0% {
                        transform: translateZ(-20px) rotateX(10deg) translateX(0);
                    }
                    100% {
                        transform: translateZ(-20px) rotateX(10deg) translateX(-30px);
                    }
                }

                @keyframes float-wave {
                    0% {
                        transform: translateZ(-5px) rotateX(3deg) translateY(0);
                    }
                    100% {
                        transform: translateZ(-5px) rotateX(3deg) translateY(-15px);
                    }
                }

                @keyframes wave {
                    0% {
                        background-position: 0% 0%;
                    }
                    50% {
                        background-position: 100% 100%;
                    }
                    100% {
                        background-position: 0% 0%;
                    }
                }
            `})]});/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),te=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase()),H=s=>{const t=te(s);return t.charAt(0).toUpperCase()+t.slice(1)},K=(...s)=>s.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim(),ae=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var se={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=o.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:n="",children:c,iconNode:b,...k},N)=>o.createElement("svg",{ref:N,...se,width:t,height:t,stroke:s,strokeWidth:r?Number(a)*24/Number(t):a,className:K("lucide",n),...!c&&!ae(k)&&{"aria-hidden":"true"},...k},[...b.map(([v,p])=>o.createElement(v,p)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(s,t)=>{const a=o.forwardRef(({className:r,...n},c)=>o.createElement(le,{ref:c,iconNode:t,className:K(`lucide-${ee(H(s))}`,`lucide-${s}`,r),...n}));return a.displayName=H(s),a};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],ne=m("brain",re);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],ie=m("chart-line",oe);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],W=m("chevron-right",ce);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],w=m("code",de);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],xe=m("cpu",me);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ge=m("database",he);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ue=m("lock",pe);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],fe=m("menu",be);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],S=m("message-square",ye);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Z=m("server",ke);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],M=m("shield",ve);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ne=m("star",je);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],we=m("x",ze);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],I=m("zap",Me),O=({className:s="",showGlow:t=!0})=>e.jsxs("div",{className:`relative z-10 ${s}`,children:[e.jsxs("div",{className:"text-3xl font-['Montserrat'] font-light tracking-tight",children:[e.jsx("span",{className:"text-white",children:"Q"}),e.jsx("span",{className:"text-[#ef4444]",children:"v"}),e.jsx("span",{className:"text-white",children:"AI"})]}),t&&e.jsx("div",{className:"absolute -inset-4 bg-blue-500/10 rounded-full blur-xl -z-10"})]}),Ae=()=>{const[s,t]=o.useState(!1),[a,r]=o.useState(!1);return o.useEffect(()=>{const n=()=>{const c=window.scrollY>10;c!==s&&t(c)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[s]),e.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s?"bg-black/70 backdrop-blur-lg py-3":"bg-transparent py-5"}`,children:[e.jsxs("div",{className:"container mx-auto px-6 md:px-12 flex justify-between items-center",children:[e.jsx(O,{}),e.jsxs("div",{className:"hidden lg:flex items-center space-x-1",children:[[{label:"Szolgáltatások",href:"#szolgáltatások"},{label:"Hogyan működik",href:"#hogyan-mukodik"},{label:"Technológiáink",href:"#technológiáink"},{label:"Kapcsolat",href:"#kapcsolat"}].map((n,c)=>e.jsxs("a",{href:n.href,className:"relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200 group",children:[e.jsx("span",{className:"relative z-10",children:n.label}),e.jsx("span",{className:"absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"})]},c)),e.jsxs("button",{className:"ml-4 relative group",children:[e.jsx("span",{className:"absolute inset-0 rounded-md bg-gradient-to-tr from-blue-600 to-purple-600 opacity-90 group-hover:opacity-100 blur-sm transition-all duration-200 group-hover:blur-md"}),e.jsx("span",{className:"relative block bg-gradient-to-tr from-blue-500 to-purple-600 rounded-md px-5 py-2 text-sm font-medium text-white",children:"Kapcsolatfelvétel"})]})]}),e.jsx("button",{className:"lg:hidden text-white p-2 focus:outline-none",onClick:()=>r(!a),children:a?e.jsx(we,{className:"h-6 w-6"}):e.jsx(fe,{className:"h-6 w-6"})})]}),e.jsx("div",{className:`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${a?"translate-x-0":"translate-x-full"}`,children:e.jsxs("div",{className:"flex flex-col items-center justify-center h-full space-y-8 p-8",children:[[{label:"Szolgáltatások",href:"#szolgáltatások"},{label:"Hogyan működik",href:"#hogyan-mukodik"},{label:"Technológiáink",href:"#technológiáink"},{label:"Kapcsolat",href:"#kapcsolat"}].map((n,c)=>e.jsx("a",{href:n.href,className:"text-xl font-medium text-gray-200 hover:text-white",onClick:()=>r(!1),children:n.label},c)),e.jsx("button",{className:"mt-4 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-md text-white font-medium",onClick:()=>r(!1),children:"Kapcsolatfelvétel"})]})})]})},Ce=({className:s})=>{const t=o.useRef(null),a=o.useRef([]),r=o.useRef(0),n=o.useRef(0),b=o.useRef(1e3/24),k=o.useRef(0),N=o.useRef(0),v=180;return o.useEffect(()=>{const p=t.current;if(!p)return;const x=p.getContext("2d",{alpha:!1,desynchronized:!0});if(!x)return;const L=()=>{if(!p)return;const d=Math.max(window.innerWidth,document.documentElement.clientWidth),h=Math.max(window.innerHeight,document.documentElement.clientHeight),i=d,u=h,g=Math.min(window.devicePixelRatio||1,1.5);p.width=i*g,p.height=u*g,p.style.width="100%",p.style.height="100%",x.scale(g,g),a.current.length===0?X(i,u):P(i,u)},P=(d,h)=>{a.current.forEach(i=>{i.x<0&&(i.x=0),i.x>d&&(i.x=d),i.y<0&&(i.y=0),i.y>h&&(i.y=h)})},_=[{r:59,g:130,b:246},{r:147,g:51,b:234}],V=(d,h)=>{const i=Math.random()*d,u=Math.random()*h,g=_[Math.floor(Math.random()*_.length)];return{x:i,y:u,r:g.r,g:g.g,b:g.b,velocity:{x:(Math.random()-.5)*.4,y:(Math.random()-.5)*.4}}},X=(d,h)=>{const i=Math.max(60,Math.floor(d*h/15e3));a.current=[];for(let u=0;u<i;u++)a.current.push(V(d,h))},j=d=>{if(!x||!p){r.current=requestAnimationFrame(j);return}const h=d-n.current;if(h<b.current){r.current=requestAnimationFrame(j);return}n.current=d-h%b.current,k.current++,d-N.current>=1e3&&(k.current=0,N.current=d);const i=Math.max(window.innerWidth,document.documentElement.clientWidth),u=Math.max(window.innerHeight,document.documentElement.clientHeight),g=i,z=u,R=p.getBoundingClientRect();if(R.bottom<0||R.top>window.innerHeight){x.fillStyle="rgb(0, 0, 0)",x.fillRect(0,0,g,z),r.current=requestAnimationFrame(j);return}const B=h/(1e3/60);x.fillStyle="rgb(0, 0, 0)",x.fillRect(0,0,g,z);for(let f=0;f<a.current.length;f++){const l=a.current[f];l.x+=l.velocity.x*B,l.y+=l.velocity.y*B,l.x<0?(l.velocity.x=Math.abs(l.velocity.x),l.x=0):l.x>g&&(l.velocity.x=-Math.abs(l.velocity.x),l.x=g),l.y<0?(l.velocity.y=Math.abs(l.velocity.y),l.y=0):l.y>z&&(l.velocity.y=-Math.abs(l.velocity.y),l.y=z)}x.lineWidth=.8;for(let f=0;f<a.current.length;f++){const l=a.current[f];for(let A=f+1;A<a.current.length;A++){const y=a.current[A],E=l.x-y.x,F=l.y-y.y,T=E*E+F*F;if(T<v*v){const U=Math.sqrt(T),Y=Math.max(0,1-U/v),q=(C=>1-Math.pow(1-C,3))(Y);if(q>.02){const C=Math.floor((l.r+y.r)/2),D=Math.floor((l.g+y.g)/2),Q=Math.floor((l.b+y.b)/2);x.strokeStyle=`rgba(${C}, ${D}, ${Q}, ${q*.6})`,x.beginPath(),x.moveTo(l.x,l.y),x.lineTo(y.x,y.y),x.stroke()}}}}r.current=requestAnimationFrame(j)},$=()=>{L()};return L(),n.current=performance.now(),r.current=requestAnimationFrame(j),window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$),cancelAnimationFrame(r.current)}},[]),e.jsx("canvas",{ref:t,className:s||"absolute inset-0 w-full h-full"})},Se=({time:s})=>e.jsxs("div",{className:"relative z-10 px-6 md:px-12 lg:px-24 h-screen pt-28 flex flex-col md:flex-row items-center justify-center",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[e.jsx(Ce,{className:"absolute inset-0 w-full h-full"}),e.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:`
                            linear-gradient(to bottom, transparent 75%, rgba(10,10,15,0.5) 90%, rgba(10,10,15,1) 100%),
                            radial-gradient(circle at 15% 100%, rgba(10,10,15,0.8) 0%, rgba(10,10,15,0.4) 30%, transparent 60%),
                            radial-gradient(circle at 85% 100%, rgba(10,10,15,0.8) 0%, rgba(10,10,15,0.4) 30%, transparent 60%)
                        `,zIndex:5}}),e.jsx("div",{className:"absolute bottom-0 bg-gradient-to-br from-blue-900/30 to-purple-600/30 opacity-70",style:{filter:"blur(30px)",width:"calc(100% + 20px)",height:"calc(100% + 20px)"}}),e.jsx("div",{className:"absolute w-1/3 h-1/3 rounded-full blur-3xl",style:{background:"radial-gradient(circle, rgba(76, 0, 255, 0.3) 0%, transparent 70%)",left:"10%",top:"15%",opacity:.6}}),e.jsx("div",{className:"absolute w-2/5 h-2/5 rounded-full blur-3xl",style:{background:"radial-gradient(circle, rgba(0, 183, 255, 0.3) 0%, transparent 70%)",right:"5%",bottom:"10%",opacity:.6}}),e.jsx("div",{className:"absolute w-1/3 h-1/3 rounded-full blur-3xl",style:{background:"radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)",right:"-5%",top:"20%",opacity:.6}})]}),e.jsxs("div",{className:"md:w-1/2 mb-12 md:mb-0 relative z-20",children:[e.jsxs("h1",{className:"text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fadeSlideUp",style:{animationDelay:"0.1s",animationFillMode:"forwards"},children:[e.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600",children:"AI ügynökökkel"}),e.jsx("br",{}),"a Jövő Vállalkozásaiért"]}),e.jsx("p",{className:"text-lg md:text-xl mb-8 text-gray-300 max-w-lg opacity-0 animate-fadeSlideUp",style:{animationDelay:"0.3s",animationFillMode:"forwards"},children:"Automatizálja ismétlődő folyamatait önálló AI ügynökökkel, hogy csapata arra koncentrálhasson, ami igazán számít."}),e.jsx("div",{className:"opacity-0 animate-fadeSlideUp",style:{animationDelay:"0.5s",animationFillMode:"forwards"},children:e.jsxs("button",{className:"bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition flex items-center gap-2 font-medium hover:translate-y-[-2px]",children:["Kezdje el most ",e.jsx(W,{size:18})]})})]}),e.jsx("div",{className:"md:w-1/2 hidden md:flex justify-center relative z-10 opacity-0 animate-fadeIn",style:{animationDelay:"0.6s",animationFillMode:"forwards"},children:e.jsxs("div",{className:"relative w-96 h-96",children:[e.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), transparent 70%)",filter:"blur(20px)",opacity:.8}}),[0,1,2].map(t=>e.jsx("div",{className:"absolute border border-blue-500/20 hidden md:block",style:{top:`${t*15}%`,left:`${t*15}%`,right:`${t*15}%`,bottom:`${t*15}%`,borderRadius:"50%",boxShadow:"0 0 20px rgba(59, 130, 246, 0.05)",opacity:.7}},t)),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"relative",children:[e.jsx(w,{size:90,className:"text-white hidden md:block",style:{filter:"drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))"}}),e.jsx(Z,{size:80,className:"text-blue-400 absolute opacity-80 hidden md:block",style:{left:"-4rem",top:"-4rem",filter:"drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"}}),e.jsx(S,{size:70,className:"text-purple-400 absolute opacity-80 hidden md:block",style:{right:"-3rem",top:"-3rem",filter:"drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))"}}),e.jsx(I,{size:70,className:"text-blue-400 absolute opacity-80 hidden md:block",style:{right:"-3rem",bottom:"-3rem",filter:"drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"}}),e.jsx(M,{size:80,className:"text-purple-400 absolute opacity-80 hidden md:block",style:{left:"-4rem",bottom:"-4rem",filter:"drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))"}})]})})]})}),e.jsx("style",{jsx:!0,children:`
                @keyframes fadeSlideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                .animate-fadeSlideUp {
                    animation: fadeSlideUp 0.8s ease-out;
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out;
                }
            `})]}),Ie=({icon:s,iconBg:t,title:a,description:r})=>e.jsxs("div",{className:"bg-gray-900/40 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-gray-800/30 group transition-all duration-300 hover:bg-gray-900/60 hover:border-blue-500/30 flex flex-col h-full",children:[e.jsx("div",{className:"mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300",children:s}),e.jsx("h3",{className:"text-lg font-medium mb-2 text-white group-hover:text-blue-300 transition-colors duration-300",children:a}),e.jsx("p",{className:"text-gray-400 text-sm flex-grow",children:r}),e.jsx("div",{className:"mt-4 h-6 overflow-hidden",children:e.jsxs("div",{className:"transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 text-blue-400 flex items-center text-xs font-medium",children:[e.jsx("span",{className:"no-underline",children:"Tovább"}),e.jsx("svg",{className:"w-3 h-3 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})]})})]}),Le=()=>{const s=[{icon:e.jsx(I,{size:24,className:"text-blue-400"}),iconBg:"",title:"Automatizációs AI Ügynökök",description:"Automatizálja a rutinfeladatokat és folyamatokat intelligens AI ügynökök segítségével, növelve a hatékonyságot és csökkentve a hibalehetőségeket."},{icon:e.jsx(S,{size:24,className:"text-purple-400"}),iconBg:"",title:"Vevőszolgálati Chatbotok",description:"Fejlett, természetes nyelvű chatbotok, amelyek hatékonyan kezelik az ügyfelek kérdéseit és problémáit, 24/7 rendelkezésre állással."},{icon:e.jsx(w,{size:24,className:"text-blue-400"}),iconBg:"",title:"Egyedi Fejlesztések",description:"Speciális igényekre szabott AI megoldások, amelyek teljesítik a vállalkozása egyedi követelményeit és célkitűzéseit."},{icon:e.jsx(M,{size:24,className:"text-purple-400"}),iconBg:"",title:"Biztonsági Rendszerek",description:"AI-alapú felügyeleti és biztonsági megoldások, amelyek megelőzik a fenyegetéseket és védik vállalkozása adatait."},{icon:e.jsx(Z,{size:24,className:"text-blue-400"}),iconBg:"",title:"Adatelemzés",description:"Fejlett AI-alapú adatelemzési megoldások, amelyek értékes betekintést nyújtanak és segítik az adatvezérelt döntéshozatalt."},{icon:e.jsx(Ne,{size:24,className:"text-purple-400"}),iconBg:"",title:"AI Integráció",description:"Meglévő rendszereihez illeszkedő, zökkenőmentes AI-integráció, amely maximalizálja a befektetés megtérülését."}];return e.jsxs("div",{id:"szolgaltatasok",className:"relative z-10 px-6 md:px-12 lg:px-24 py-16 min-h-screen flex flex-col justify-center overflow-hidden section-blend-top",children:[e.jsx("div",{className:"absolute inset-0 z-[1]",style:{backgroundColor:"rgb(10, 10, 15)"}}),e.jsx("div",{className:"absolute inset-0 opacity-5 z-[1]",style:{backgroundImage:`radial-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px), 
                           radial-gradient(rgba(167, 139, 250, 0.3) 1px, transparent 1px)`,backgroundSize:"40px 40px, 30px 30px",backgroundPosition:"0 0, 20px 20px"}}),e.jsx("div",{className:"floating-orb z-[2]",style:{top:"15%",left:"15%",width:"400px",height:"400px",opacity:.32,filter:"blur(60px) brightness(1.05)",background:"radial-gradient(circle at center, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.1) 70%)",animation:"float 60s ease-in-out infinite",mixBlendMode:"screen"}}),e.jsx("div",{className:"floating-orb z-[2]",style:{bottom:"20%",right:"15%",width:"450px",height:"450px",opacity:.28,filter:"blur(75px) brightness(1.05)",background:"radial-gradient(circle at center, rgba(147, 51, 234, 0.8), rgba(147, 51, 234, 0.05) 70%)",animation:"float 75s ease-in-out infinite reverse",mixBlendMode:"screen"}}),e.jsx("div",{className:"floating-orb z-[2]",style:{top:"50%",left:"35%",width:"320px",height:"320px",opacity:.25,filter:"blur(50px) brightness(1.05)",background:"radial-gradient(circle at center, rgba(79, 70, 229, 0.7), rgba(79, 70, 229, 0.05) 70%)",animation:"float 90s ease-in-out 15s infinite",mixBlendMode:"screen"}}),e.jsxs("div",{className:"mb-12 text-center relative z-10",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold",children:e.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600",children:"Szolgáltatásaink"})}),e.jsx("div",{className:"mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 flex-grow",children:s.map((t,a)=>e.jsx(Ie,{icon:t.icon,iconBg:t.iconBg,title:t.title,description:t.description},a))})]})},_e=({number:s,title:t,description:a,icon:r})=>e.jsxs("div",{className:"bg-gray-900/60 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex-1 group h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("div",{className:"text-blue-400 text-4xl font-bold mr-3 group-hover:text-blue-300 transition-colors",children:s}),e.jsx("div",{className:"text-blue-400 w-8 h-8 group-hover:text-blue-300 transition-colors",children:r})]}),e.jsx("h3",{className:"text-xl font-bold mb-3 group-hover:text-white transition-colors",children:t}),e.jsx("p",{className:"text-gray-400 text-sm leading-relaxed flex-grow",children:a})]}),$e=()=>{const s=[{number:"01",title:"Konzultáció",description:"Feltérképezzük vállalatának egyedi kihívásait és lehetőségeit, azonosítva azokat a kulcsterületeket, ahol a mesterséges intelligencia valódi versenyelőnyt biztosíthat.",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})},{number:"02",title:"Tervezés",description:"Kidolgozzuk az Ön igényeire szabott AI stratégiát és megoldási tervet, amely egyensúlyt teremt a technológiai innováció és a konkrét üzleti célok között.",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})},{number:"03",title:"Fejlesztés",description:"Kifejlesztjük az Ön egyedi AI ügynökét, amely illeszkedik a vállalati folyamataihoz. A fejlesztés során szoros együttműködésben, folyamatos visszajelzések alapján finomítjuk a rendszert.",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})},{number:"04",title:"Integráció",description:"Az elkészült AI megoldást beillesztjük a meglévő vállalati ökoszisztémába, átfogó képzést és támogatást biztosítva a gördülékeny átálláshoz és a hosszú távú sikerhez.",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}];return e.jsxs("div",{id:"hogyan-mukodik",className:"relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-20 md:py-24",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10"}),e.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("p",{className:"text-blue-400 font-medium mb-2",children:"Folyamatunk"}),e.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold",children:e.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600",children:"Hogyan Működik"})}),e.jsx("p",{className:"mt-4 text-gray-400 max-w-2xl mx-auto",children:"Átlátható és jól strukturált folyamatunk biztosítja, hogy az AI megoldás teljes mértékben az Ön vállalatának céljaihoz igazodjon, és kézzelfogható üzleti értéket hozzon létre."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:s.map((t,a)=>e.jsx("div",{className:"transform transition-transform duration-300 hover:-translate-y-2",children:e.jsx(_e,{number:t.number,title:t.title,description:t.description,icon:t.icon})},a))})]})]})},Re=()=>{const s=[{icon:e.jsx(ne,{size:22,className:"text-blue-500"}),title:"Élvonalbeli LLM Modellek",subtitle:"Nyelvfeldolgozás",color:"blue"},{icon:e.jsx(ie,{size:22,className:"text-purple-500"}),title:"Adaptív AI Megoldások",subtitle:"Teljesítmény",color:"purple"},{icon:e.jsx(xe,{size:22,className:"text-cyan-500"}),title:"Multi-modális Technológia",subtitle:"Komplex feldolgozás",color:"cyan"},{icon:e.jsx(M,{size:22,className:"text-emerald-500"}),title:"Biztonságos AI Keretrendszer",subtitle:"Megbízhatóság",color:"emerald"},{icon:e.jsx(ge,{size:22,className:"text-amber-500"}),title:"Vektoros Adattárolás",subtitle:"Tudásbázis",color:"amber"},{icon:e.jsx(I,{size:22,className:"text-yellow-500"}),title:"Sebességoptimalizált Modellek",subtitle:"Valós idejű válaszok",color:"yellow"},{icon:e.jsx(w,{size:22,className:"text-rose-500"}),title:"Integrált Fejlesztőkörnyezet",subtitle:"API kapcsolatok",color:"rose"},{icon:e.jsx(ue,{size:22,className:"text-indigo-500"}),title:"Zárt Körű AI Rendszer",subtitle:"Privát adatkezelés",color:"indigo"}];return e.jsx("div",{id:"technologiak",className:"relative px-4 md:px-8 py-12 bg-black/40 backdrop-blur-sm",children:e.jsxs("div",{className:"max-w-screen-xl mx-auto",children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-bold mb-3 text-center",children:e.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600",children:"Élvonalbeli Technológiák"})}),e.jsx("p",{className:"text-gray-400 text-base text-center max-w-xl mx-auto mb-8",children:"Technológiai megközelítésünk a költséghatékonyság és a teljesítmény egyensúlyán alapul. Mindig az üzleti problémához legjobban illeszkedő modellt választjuk, ami akár 70%-os megtakarítást is jelenthet."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:s.map((t,a)=>e.jsx("div",{className:`bg-gray-900/60 rounded-lg overflow-hidden border border-gray-800 hover:border-${t.color}-500/50 hover:bg-gray-800/60 transition duration-300 group`,children:e.jsxs("div",{className:`bg-gradient-to-r from-${t.color}-900/70 to-gray-900 p-4 flex items-center`,children:[e.jsx("div",{className:`p-2 rounded-full bg-${t.color}-900/50 mr-3 group-hover:bg-${t.color}-900/80 transition duration-300`,children:t.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-medium text-gray-400 uppercase tracking-wide",children:t.subtitle}),e.jsx("h3",{className:"text-base font-medium text-white",children:t.title})]})]})},a))})]})})},Be=()=>e.jsxs("div",{id:"kapcsolat",className:"relative z-10 px-8 md:px-16 lg:px-24 py-24 bg-black/40 backdrop-blur-sm",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-16 text-center",children:e.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600",children:"Kapcsolat"})}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-12",children:[e.jsxs("div",{className:"md:w-1/2",children:[e.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Lépjen kapcsolatba velünk"}),e.jsx("p",{className:"text-gray-300 mb-8",children:"Készen áll arra, hogy a következő szintre emelje vállalkozását AI ügynökeink segítségével? Töltse ki az űrlapot, és szakértőink hamarosan felveszik Önnel a kapcsolatot."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"bg-blue-500/20 p-3 rounded-lg",children:e.jsx(S,{size:20,className:"text-blue-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:"Email"}),e.jsx("div",{className:"text-gray-400",children:"hello@qvai.hu"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"bg-blue-500/20 p-3 rounded-lg",children:e.jsx(M,{size:20,className:"text-blue-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:"Telefon"}),e.jsx("div",{className:"text-gray-400",children:"+36 1 234 5678"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"bg-blue-500/20 p-3 rounded-lg",children:e.jsx(w,{size:20,className:"text-blue-400"})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:"Cím"}),e.jsx("div",{className:"text-gray-400",children:"1048 Budapest, Székpatak utca 19."})]})]})]})]}),e.jsx("div",{className:"md:w-1/2",children:e.jsxs("form",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Név"}),e.jsx("input",{type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white",placeholder:"Az Ön neve"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Vállalat"}),e.jsx("input",{type:"text",className:"w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white",placeholder:"Cég neve"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Email"}),e.jsx("input",{type:"email",className:"w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white",placeholder:"email@pelda.hu"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Telefon"}),e.jsx("input",{type:"tel",className:"w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white",placeholder:"+36 1 234 5678"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Üzenet"}),e.jsx("textarea",{className:"w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white h-32",placeholder:"Írja le, miben segíthetünk..."})]}),e.jsx("button",{className:"bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition w-full",children:"Küldés"})]})})]})]}),Ee=()=>e.jsx("div",{className:"relative z-10 px-8 md:px-16 lg:px-24 py-24",children:e.jsxs("div",{className:"bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-12 rounded-2xl border border-blue-500/30 backdrop-blur-sm",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-6 text-center",children:"Készen áll a digitális transzformációra?"}),e.jsx("p",{className:"text-lg text-center mb-8 text-gray-300 max-w-2xl mx-auto",children:"Lépjen kapcsolatba velünk még ma, és fedezze fel, hogyan alakíthatja át vállalkozását egyedi AI ügynökökkel."}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("button",{className:"bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition flex items-center gap-2",children:["Kapcsolatfelvétel ",e.jsx(W,{size:18})]})})]})}),Fe=()=>e.jsx("footer",{className:"relative z-10 px-8 md:px-16 lg:px-24 py-12",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[e.jsx(O,{showGlow:!1,className:"mb-4 md:mb-0"}),e.jsxs("div",{className:"flex space-x-6 mb-4 md:mb-0",children:[e.jsx("a",{href:"#szolgaltatasok",className:"hover:text-blue-400 transition",children:"Szolgáltatások"}),e.jsx("a",{href:"#hogyan-mukodik",className:"hover:text-blue-400 transition",children:"Hogyan működik"}),e.jsx("a",{href:"#esettanulmanyok",className:"hover:text-blue-400 transition",children:"Technológiáink"}),e.jsx("a",{href:"#kapcsolat",className:"hover:text-blue-400 transition",children:"Kapcsolat"})]}),e.jsx("div",{className:"text-gray-500 text-sm",children:"© 2025 QvAI Szolgáltató Kft. Minden jog fenntartva."})]})}),Te=()=>{const[s,t]=o.useState(0),[a,r]=o.useState(0),n=o.useRef(0),c=()=>{r(b=>b+.01),n.current=requestAnimationFrame(c)};return o.useEffect(()=>{const b=()=>{t(window.scrollY)};return window.addEventListener("scroll",b),n.current=requestAnimationFrame(c),()=>{window.removeEventListener("scroll",b),cancelAnimationFrame(n.current)}},[]),e.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-black via-black to-[#050510] text-white font-sans overflow-hidden relative",children:[e.jsx(J,{}),e.jsx(Ae,{}),e.jsx(Se,{time:a}),e.jsx(Le,{}),e.jsx($e,{}),e.jsx(Re,{}),e.jsx(Be,{}),e.jsx(Ee,{}),e.jsx(Fe,{})]})},Ze=G(Te);export{Ze as default};
