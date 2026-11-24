// B2 그림 보충 (N=45): tr 화면 전환 11개 (PowerPoint 화려한 전환, 전부 움직임)
// 앞 화면 = 흰 면 + 회색 목록, 다음 화면 = 파란 머리 띠 + 파란 사진 + 글. 화면 틀 · 색은 b2_43 과 같다.
// 도감은 평소 animation:none 으로 멈춰 있다. 요소의 기본 상태(인라인 style)를 "전환이 한창인 순간"으로 둔다.
// 한 주기 3초: 0~12% 앞 화면 · 12~58% 전환 · 58~88% 다음 화면 · 88~100% 처음으로.
{
const C=K.C, n2=K.n2;
const A=(c,inner,st="")=>`<g class="b2x45 b2a-n45${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,frames,extra="")=>css(`.b2a-n45${name}{animation-name:b2a-n45${name};${extra}}@keyframes b2a-n45${name}{${frames}}`);
css(`.b2x45{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.65,0,.35,1)}`);
const EIN="animation-timing-function:cubic-bezier(.55,0,.8,.2)", LIN="animation-timing-function:linear", EOUT="animation-timing-function:cubic-bezier(.2,.7,.3,1)";
// 화면 틀
const X=24,Y=10,W=112,H=80,R=12;
const photo=(x,y,w,h,r)=>{const i=K.id(),g="b245p"+i,c="b245q"+i;
  return `<defs>${K.grad(g,[[0,"#AFC6FF"],[1,"#E5C8F3"]],0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:#6A86E8"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const clip=(inner,x=X,y=Y,w=W,h=H,r=R)=>{const c="b245c"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const frame=()=>K.card(X,Y,W,H,R);
// 앞 화면: 제목 + 목록 네 줄
const oldRow=i=>{const y=Y+16*i;
  return K.rect(X,y,W,16,{f:"#fff"})+(i===0?tbar(34,y+6,44):K.circ(38,y+8,4.5,{f:"#D3D8E3"})+gbar(48,y+6,i%2?70:56));};
const oldS=()=>[0,1,2,3,4].map(oldRow).join("");
// 다음 화면: 파란 머리 띠 + 큰 사진 + 글
const newS=()=>K.rect(X,Y,W,H,{f:"#fff"})+K.rect(X,Y,W,16,{f:C.blue})+K.rect(34,16,40,4,{f:"rgba(255,255,255,.85)",r:2})
  +photo(34,32,92,30,7)+tbar(34,69,52)+gbar(34,79,74);
const clipTo=(d,inner)=>{const c="b245k"+K.id();return `<defs><clipPath id="${c}"><path d="${d}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const pts=a=>a.map(p=>p.map(n2).join(" ")).join(" ");
const poly=(a,st)=>`<polygon points="${pts(a)}" style="${st}"/>`;
const cpoly=a=>`polygon(${a.map(([x,y])=>`${n2(x)}px ${n2(y)}px`).join(",")})`;
// 앞 화면이 날아간 뒤 88% 에 제자리로 돌아오는 공통 꼴
const back=(none,end)=>`88%{transform:${end};opacity:0}88.5%{transform:${none};opacity:0}100%{transform:${none};opacity:1}`;
const DIM="#141A3C";

/* 넘어지기: 앞 화면이 아래 모서리를 축으로 뒤로 쓰러진다 (위가 좁아지며 내려감) */
{const P=a=>`perspective(170px) rotateX(${a}deg)`;
TH2["넘어지기"]=K=>frame()+clip(newS()
  +A("fo",oldS()+A("fd",K.rect(X,Y,W,H,{f:DIM}),"opacity:.22"),`transform-origin:50% 100%;transform:${P(40)}`));
kf("fo",`0%,12%{transform:${P(0)};opacity:1}54%{transform:${P(90)};opacity:1}55%{transform:${P(90)};opacity:0}`+back(P(0),P(90)),EIN);
kf("fd","0%,12%{opacity:0}54%,88%{opacity:.45}88.5%,100%{opacity:0}",EIN);}

/* 드레이프: 세로 띠마다 엇박자로 흘러내려 천처럼 물결친다 */
{const N=8,SW=W/N;
const lag=i=>.5+.5*Math.sin(i*.8+.6);
const strip=i=>{const x=X+SW*i,c="b245d"+K.id();
  return `<defs><clipPath id="${c}"><rect x="${n2(x-.2)}" y="${Y}" width="${n2(SW+.4)}" height="${H}"/></clipPath></defs><g clip-path="url(#${c})">${oldS()}${K.rect(x,Y,SW,H,{f:DIM,o:i%2?.14:.03})}</g>`};
const tf=(i,k)=>`translateY(${n2(k*(1+lag(i)*.5))}px) skewY(${i%2?6:-6}deg)`;
TH2["드레이프"]=K=>frame()+clip(newS()+[...Array(N)].map((_,i)=>A("dr"+i,strip(i),`transform:${tf(i,26)}`)).join(""));
for(let i=0;i<N;i++){const s=n2(12+lag(i)*10);
  kf("dr"+i,`0%,${s}%{transform:translateY(0px) skewY(0deg);opacity:1}${n2(s+12)}%{transform:${tf(i,22)};opacity:1}58%{transform:${tf(i,90)};opacity:1}`+back("translateY(0px) skewY(0deg)",tf(i,90)),"animation-timing-function:cubic-bezier(.5,0,.75,.4)")}}

/* 바람: 앞 화면이 휘어 들리며 옆으로 날아가고, 바람 줄이 지나간다 */
{const WN="translate(0px,0px) rotate(0deg) skewX(0deg) scale(1,1)", WM="translate(48px,-16px) rotate(-12deg) skewX(-26deg) scale(.6,.74)", WE="translate(150px,-46px) rotate(-24deg) skewX(-40deg) scale(.3,.5)";
const gust=[[24,"M8 30C40 22 70 36 104 26S150 20 160 24"],[46,"M0 52C34 44 66 58 100 48S140 40 156 46"],[68,"M14 74C44 66 78 80 110 70S146 64 160 68"]];
TH2["바람"]=K=>{const g="b245w"+K.id();
  return frame()+clip(newS()
  +A("wo",`<defs>${K.grad(g,[[0,"rgba(20,26,60,0)"],[1,"rgba(20,26,60,.22)"]],1,0)}</defs>`+oldS()+K.rect(X,Y,W,H,{f:`url(#${g})`}),`transform-origin:0% 100%;transform:${WM}`)
  +A("wg",gust.map(([y,d],i)=>K.path(d,{s:i===1?"#9FB2DF":"#C3CFEA",sw:i===1?1.8:1.3})).join("")))};
kf("wo",`0%,12%{transform:${WN};opacity:1}58%{transform:${WE};opacity:1}`+back(WN,WE),"animation-timing-function:cubic-bezier(.5,0,.7,.5)");
kf("wg","0%,10%{opacity:0;transform:translateX(-40px)}30%,40%{opacity:1;transform:translateX(0px)}62%,100%{opacity:0;transform:translateX(40px)}",LIN);}

/* 프레스티지: 아래쪽부터 둥글게 말리며 뒤로 넘어가 위로 날아간다 */
{const P=(y,a,s)=>`perspective(170px) translateY(${y}px) rotateX(${a}deg) scale(${s})`;
TH2["프레스티지"]=K=>{const g="b245r"+K.id();
  return frame()+clip(newS()
  +A("po",oldS()+A("pd",K.rect(X,Y,W,H,{f:DIM}),"opacity:.12")
     +`<defs>${K.grad(g,[[0,"#FFFFFF"],[.45,"#C3CADA"],[1,"#8F99B3"]],0,1)}</defs>`
     +A("pr",K.rect(X,Y+H-14,W,14,{f:`url(#${g})`,r:7}),"opacity:1"),`transform-origin:50% 0%;transform:${P(-8,-52,.92)}`))};
kf("po",`0%,12%{transform:${P(0,0,1)};opacity:1}30%{transform:${P(-4,-44,.96)};opacity:1}58%{transform:${P(-70,-80,.6)};opacity:1}`+back(P(0,0,1),P(-70,-80,.6)),"animation-timing-function:cubic-bezier(.45,0,.7,.6)");
kf("pr","0%,12%{opacity:0}24%,88%{opacity:1}88.5%,100%{opacity:0}",LIN);
kf("pd","0%,12%{opacity:0}58%,88%{opacity:.4}88.5%,100%{opacity:0}",LIN);}

/* 깨뜨리기: 금이 간 뒤 유리 조각이 사방으로 튀어 흩어진다 */
{const cx=70,cy=46;
const RIM=[[X,Y],[52,Y],[86,Y],[112,Y],[X+W,Y],[X+W,34],[X+W,64],[X+W,Y+H],[104,Y+H],[72,Y+H],[44,Y+H],[X,Y+H],[X,62],[X,32]];
const IN=[[cx,cy]];
const SH=RIM.map((p,i)=>{const q=RIM[(i+1)%RIM.length],c=IN[0];return [c,p,q]});
const dir=s=>{const mx=(s[0][0]+s[1][0]+s[2][0])/3-cx,my=(s[0][1]+s[1][1]+s[2][1])/3-cy,l=Math.hypot(mx,my)||1;return [mx/l,my/l]};
const tf=(i,k,r)=>{const [dx,dy]=dir(SH[i]);return `translate(${n2(dx*k)}px,${n2(dy*k+(k>20?k*.4:0))}px) rotate(${n2((i%2?1:-1)*r*(1+i%3*.4))}deg)`};
TH2["깨뜨리기"]=K=>frame()+clip(newS()+SH.map((s,i)=>A("fr"+i,
  clipTo(`M${pts(s)}Z`,oldS())+poly(s,`fill:none;stroke:#BFC7D6;stroke-width:.6`),`transform:${tf(i,5,1.5)}`)).join(""));
SH.forEach((s,i)=>kf("fr"+i,`0%,12%{transform:${tf(i,0,0)};opacity:1}20%,26%{transform:${tf(i,2.5,1)};opacity:1}58%{transform:${tf(i,74,40)};opacity:0}`+back(tf(i,0,0),tf(i,74,40)),EIN));}

/* 구기기: 종이처럼 구겨져 작은 공이 되고 아래로 떨어진다 */
{const M=16,cx=W/2,cy=H/2;
const rim=[...Array(M)].map((_,i)=>{const t=i/M*4;const q=Math.floor(t),f=t-q;
  return q===0?[W*f,0]:q===1?[W,H*f]:q===2?[W*(1-f),H]:[0,H*(1-f)]});
const JIT=[.92,.7,.86,.62,.9,.74,.58,.84,.68,.9,.6,.8,.7,.94,.64,.82];
const crum=rim.map(([x,y],i)=>[cx+(x-cx)*JIT[i],cy+(y-cy)*JIT[i]]);
const ball=rim.map((_,i)=>{const t=i/M*2*Math.PI-Math.PI*.75,r=34*(.86+.14*JIT[(i+5)%M]);return [cx+r*Math.cos(t),cy+r*Math.sin(t)]});
const CRE=["M24 34L46 44L62 30L84 48L104 38L136 50","M36 10L48 32L44 56L58 74L52 90","M136 22L112 40L118 62L98 90","M24 70L50 62L74 70L96 56L136 74","M70 10L66 30L80 46L74 64L86 90"];
const T=(y,s)=>`translateY(${y}px) scale(${s})`;
TH2["구기기"]=K=>frame()+clip(newS()
  +A("cr",A("cp",oldS()+A("cs",K.rect(X,Y,W,H,{f:DIM})+CRE.map(d=>K.path(d,{s:"#fff",sw:2.2})).join(""),"opacity:.16")
     +A("cl",CRE.map(d=>K.path(d,{s:"#9AA3B8",sw:.9})).join(""),"opacity:1"),`clip-path:${cpoly(crum)}`),`transform:${T(0,.56)}`));
kf("cr",`0%,12%{transform:${T(0,1)};opacity:1}38%{transform:${T(0,.3)};opacity:1}44%{transform:${T(-4,.26)};opacity:1}58%{transform:${T(84,.24)};opacity:1}`+back(T(0,1),T(84,.24)),"animation-timing-function:cubic-bezier(.4,0,.6,1)");
kf("cp",`0%,12%{clip-path:${cpoly(rim)}}24%{clip-path:${cpoly(crum)}}38%,88%{clip-path:${cpoly(ball)}}88.5%,100%{clip-path:${cpoly(rim)}}`,LIN);
kf("cl","0%,12%{opacity:0}26%,88%{opacity:1}88.5%,100%{opacity:0}",LIN);
kf("cs","0%,12%{opacity:0}38%,88%{opacity:.3}88.5%,100%{opacity:0}",LIN);}

/* 벗기기: 왼쪽 아래 모서리부터 스티커처럼 들리고, 통째로 떼어져 날아간다 */
{const kept=c=>[[0,0],[W,0],[W,H],[c,H],[0,H-c]], flap=c=>[[c,H],[c,H],[0,H-c],[c,H-c],[c,H-c]];
const FN="translate(0px,0px) rotate(0deg)", FM="translate(14px,-10px) rotate(5deg)", FE="translate(96px,-82px) rotate(24deg)";
TH2["벗기기"]=K=>{const g="b245f"+K.id();
  return frame()+clip(newS()
  +A("pf",A("pk",oldS(),`clip-path:${cpoly(kept(44))}`)
     +`<defs>${K.grad(g,[[0,"#C7CEDD"],[.55,"#F6F7FA"],[1,"#E2E6EE"]],1,0)}</defs>`
     +A("pl",K.rect(X,Y,W,H,{f:`url(#${g})`}),`clip-path:${cpoly(flap(44))};filter:drop-shadow(1.5px -1px 1.6px rgba(40,50,110,.3))`),
   `transform:${FM};filter:drop-shadow(0 3px 3px rgba(40,50,110,.22))`))};
kf("pk",`0%,12%{clip-path:${cpoly(kept(0))}}32%,88%{clip-path:${cpoly(kept(44))}}88.5%,100%{clip-path:${cpoly(kept(0))}}`,"animation-timing-function:cubic-bezier(.4,0,.4,1)");
kf("pl",`0%,12%{clip-path:${cpoly(flap(0))}}32%,88%{clip-path:${cpoly(flap(44))}}88.5%,100%{clip-path:${cpoly(flap(0))}}`,"animation-timing-function:cubic-bezier(.4,0,.4,1)");
kf("pf",`0%,22%{transform:${FN};opacity:1}32%{transform:${FM};opacity:1}58%{transform:${FE};opacity:1}`+back(FN,FE),EIN);}

/* 비행기: 앞 화면이 접혀 종이비행기가 되어 날아간다 */
{const plane=()=>poly([[-22,-13],[26,0],[-8,1]],"fill:#fff;stroke:#B8C0D0;stroke-width:.6")
   +poly([[-18,9],[26,0],[-8,1]],"fill:#D9DEEA;stroke:#B8C0D0;stroke-width:.6")
   +poly([[-8,1],[26,0],[-12,4]],"fill:#AEB6C8")
   +K.line(-11,-6.8,-1,-6.8,{s:"#D3D8E3",sw:2.4})+K.line(-9,-2.8,5,-2.8,{s:"#D3D8E3",sw:2.4});
const PN="translate(0px,0px) rotate(0deg) scale(.5)", PM="translate(26px,-16px) rotate(-14deg) scale(1)", PE="translate(92px,-58px) rotate(-22deg) scale(.7)";
TH2["비행기"]=K=>frame()+clip(newS()
  +A("ao",oldS(),"opacity:0")
  +A("at",K.path("M58 80C70 76 84 66 98 52",{s:"#9AA3B8",sw:1.1}).replace("/>",` stroke-dasharray="2.5 3"/>`),"opacity:1")
  +`<g transform="translate(80 54)">${A("ap",plane(),`transform:${PM}`)}</g>`);
kf("ao","0%,12%{transform:scale(1,1) rotate(0deg);opacity:1}28%{transform:scale(.36,.22) rotate(-8deg);opacity:.9}30%,88%{transform:scale(.3,.18) rotate(-8deg);opacity:0}88.5%{transform:none;opacity:0}100%{transform:none;opacity:1}","animation-timing-function:cubic-bezier(.5,0,.5,1)");
kf("ap",`0%,26%{transform:${PN};opacity:0}30%{transform:${PN};opacity:1}58%{transform:${PE};opacity:1}58.5%,100%{transform:${PE};opacity:0}`,"animation-timing-function:cubic-bezier(.4,0,.8,.6)");
kf("at","0%,32%{opacity:0}40%,48%{opacity:1}62%,100%{opacity:0}",LIN);}

/* 종이접기: 앞 화면이 마름모로 접히고 종이학이 되어 날갯짓하며 날아간다 */
{const ST="stroke:#B8C0D0;stroke-width:.6";
const crane=()=>poly([[-2,2],[-12,-22],[5,0]],`fill:#D5DBE8;${ST}`)
   +poly([[-13,2],[0,-3],[13,2],[0,9]],`fill:#EEF1F6;${ST}`)
   +poly([[-6,2],[-22,-13],[-3,5]],`fill:#fff;${ST}`)+poly([[-22,-13],[-27,-8],[-20,-10]],`fill:#fff;${ST}`)
   +poly([[6,2],[25,-12],[8,6]],`fill:#fff;${ST}`);
const wing=()=>poly([[-4,1],[11,-27],[7,3]],`fill:#fff;${ST}`)+K.line(3,-11,7,-11,{s:"#D3D8E3",sw:2})+K.line(4,-6,8,-6,{s:"#D3D8E3",sw:2});
const CN="translate(0px,0px) scale(.6)", CM="translate(24px,-12px) scale(1)", CE="translate(76px,-60px) scale(.7)";
TH2["종이접기"]=K=>frame()+clip(newS()
  +A("go",oldS(),"opacity:0")
  +`<g transform="translate(80 56)">${A("gc",crane()+A("gw",wing(),"transform-origin:30% 100%"),`transform:${CM}`)}</g>`);
kf("go","0%,12%{transform:rotate(0deg) scale(1,1);opacity:1}24%{transform:rotate(45deg) scale(.5,.7);opacity:1}32%,88%{transform:rotate(45deg) scale(.28,.4);opacity:0}88.5%{transform:none;opacity:0}100%{transform:none;opacity:1}","animation-timing-function:cubic-bezier(.5,0,.5,1)");
kf("gc",`0%,28%{transform:${CN};opacity:0}33%{transform:${CN};opacity:1}58%{transform:${CE};opacity:1}58.5%,100%{transform:${CE};opacity:0}`,"animation-timing-function:cubic-bezier(.4,0,.7,.7)");
kf("gw","0%,34%{transform:scaleY(1)}38%{transform:scaleY(.25)}42%{transform:scaleY(1)}46%{transform:scaleY(.25)}50%{transform:scaleY(1)}54%{transform:scaleY(.25)}58%,100%{transform:scaleY(1)}","animation-timing-function:ease-in-out");}

/* 물결: 가운데서 동심원 물결이 여러 겹 퍼지며 다음 화면이 드러난다 */
{const RG=[[3,.95],[4.7,.6],[6.4,.32]];
const ring=()=>`<circle cx="80" cy="50" r="10" style="fill:none;stroke:#fff;stroke-width:2.4;vector-effect:non-scaling-stroke"/><circle cx="80" cy="50" r="10.6" style="fill:none;stroke:rgba(47,107,255,.45);stroke-width:1;vector-effect:non-scaling-stroke"/><circle cx="80" cy="50" r="9.4" style="fill:none;stroke:rgba(20,26,60,.18);stroke-width:1;vector-effect:non-scaling-stroke"/>`;
TH2["물결"]=K=>frame()+clip(oldS()
  +A("rn",newS(),"clip-path:circle(30% at 50% 50%)")
  +RG.map(([s,o],i)=>A("rr"+i,ring(),`transform:scale(${s});opacity:${o}`)).join(""));
kf("rn","0%,12%{opacity:1;clip-path:circle(0% at 50% 50%)}58%,88%{opacity:1;clip-path:circle(75% at 50% 50%)}97%{opacity:0;clip-path:circle(75% at 50% 50%)}97.5%,100%{opacity:0;clip-path:circle(0% at 50% 50%)}","animation-timing-function:cubic-bezier(.3,0,.6,1)");
RG.forEach((_,i)=>{const s=12+i*7;kf("rr"+i,`0%,${s}%{transform:scale(.2);opacity:0}${s+3}%{transform:scale(1);opacity:1}${s+40}%,100%{transform:scale(8);opacity:0}`,LIN)});}

/* 벌집: 앞 화면이 육각형 조각으로 오그라들어 흩어지고, 다음 화면이 육각형으로 모인다 */
{const r=10.8,hw=Math.sqrt(3)*10/2,cells=[];
for(let row=0;row<7;row++)for(let col=0;col<8;col++){const x=X+col*hw*2+(row%2?hw:0),y=Y+row*15;cells.push([x,y,Math.min(5,Math.floor(((x-X)/W*.75+(y-Y)/H*.25)*6))])}
const hex=(x,y,b,p)=>`<g transform="translate(${n2(x)} ${n2(y)})"><polygon class="b2x45 b2a-n45h${p}${b}" points="${pts([...Array(6)].map((_,k)=>{const a=Math.PI/3*k+Math.PI/6;return [r*Math.cos(a),r*Math.sin(a)]}))}" style="fill:#fff;transform:${p==="o"?OS(b):NS(b)}"/></g>`;
const OB=b=>12+b*5, NB=b=>22+b*5, NOW=38, cl=v=>Math.max(0,Math.min(1,v));
const OS=b=>{const v=cl(1-(NOW-OB(b))/14);return `scale(${n2(v)}) rotate(${n2((1-v)*60)}deg)`}, NS=b=>{const v=cl((NOW-NB(b))/14);return `scale(${n2(v)}) rotate(${n2((1-v)*-60)}deg)`};
TH2["벌집"]=K=>{const mo="b245m"+K.id(),mn="b245n"+K.id(),mu=`maskUnits="userSpaceOnUse" x="${X}" y="${Y}" width="${W}" height="${H}"`;
  return `<defs><mask id="${mn}" ${mu}>${cells.map(([x,y,b])=>hex(x,y,b,"n")).join("")}</mask><mask id="${mo}" ${mu}>${cells.map(([x,y,b])=>hex(x,y,b,"o")).join("")}</mask></defs>`
  +frame()+clip(A("hb",K.rect(X,Y,W,H,{f:"#2A3350"}),"opacity:1")+`<g mask="url(#${mn})">${newS()}</g>`+A("hr",`<g mask="url(#${mo})">${oldS()}</g>`))};
kf("hr","0%,88%{opacity:1}88.5%{opacity:0}100%{opacity:1}",LIN);
kf("hb","0%,10%{opacity:0}16%,54%{opacity:1}64%,100%{opacity:0}",LIN);
for(let b=0;b<6;b++){const o=OB(b),n=NB(b);
  kf("ho"+b,`0%,${o}%{transform:scale(1) rotate(0deg)}${o+14}%,88%{transform:scale(0) rotate(60deg)}88.5%,100%{transform:scale(1) rotate(0deg)}`,"animation-timing-function:cubic-bezier(.5,0,.6,1)");
  kf("hn"+b,`0%,${n}%{transform:scale(0) rotate(-60deg)}${n+14}%,100%{transform:scale(1) rotate(0deg)}`,"animation-timing-function:cubic-bezier(.3,0,.4,1.3)")}}
}
