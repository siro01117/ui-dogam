// B2 그림 보충 (N=44): tr 화면 전환 11개 (PowerPoint 전환, 전부 움직임)
// 앞 화면 = 흰 면 + 회색 목록, 다음 화면 = 파란 머리 띠 + 파란 사진 + 글. (b2_43 과 같은 틀)
// 도감은 평소 animation:none 으로 멈춰 있다. 요소의 기본 상태(인라인 style)를 "전환이 한창인 순간"으로 두고, 키프레임이 그 위를 덮는다.
{
const C=K.C, n2=K.n2;
const A=(c,inner,st="")=>`<g class="b2x44 b2a-n44${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n44${name}{animation-name:b2a-n44${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n44${name}{${frames}}`);
css(`.b2x44{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const EIO="animation-timing-function:cubic-bezier(.65,0,.35,1)", LIN="animation-timing-function:linear";
const D=3;
// 화면 틀
const X=24,Y=10,W=112,H=80,R=12;
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b244p"+i,c="b244q"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const clip=(inner,x=X,y=Y,w=W,h=H,r=R)=>{const c="b244c"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const frame=()=>K.card(X,Y,W,H,R);
const oldRow=i=>{const y=Y+16*i;
  return K.rect(X,y,W,16,{f:"#fff"})+(i===0?tbar(34,y+6,44):K.circ(38,y+8,4.5,{f:"#D3D8E3"})+gbar(48,y+6,i%2?70:56));};
const oldS=()=>[0,1,2,3,4].map(oldRow).join("");
const newS=()=>K.rect(X,Y,W,H,{f:"#fff"})+K.rect(X,Y,W,16,{f:C.blue})+K.rect(34,16,40,4,{f:"rgba(255,255,255,.85)",r:2})
  +photo(34,32,92,30,7)+tbar(34,69,52)+gbar(34,79,74);
// 앞 화면이 돌아오는 마무리: 다음 화면 층을 86~96% 에 흐리게 하고 97% 에 처음 자리로
const BACK="0%,86%{opacity:1}96%{opacity:0}97%,100%{opacity:1}";
// 고정된 무작위 순서 (매번 같은 그림)
const shuf=(n,seed)=>{const a=[...Array(n).keys()];let s=seed;for(let i=n-1;i>0;i--){s=(s*1103515245+12345)%2147483648;const j=s%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};

/* 나누기 전환: 앞 화면이 가운데 세로선에서 갈라져 평평하게 양옆으로 밀려난다 (문 열림처럼 꺾이지 않음) */
TH2["나누기 전환"]=K=>frame()+clip(newS()
  +A("spl",`<g filter="url(#b2lift)">${clip(oldS(),X,Y,W/2,H,0)}</g>`+K.rect(X+W/2-.6,Y,.6,H,{f:"#C9CFDB"}),"transform:translateX(-27px)")
  +A("spr",`<g filter="url(#b2lift)">${clip(oldS(),X+W/2,Y,W/2,H,0)}</g>`+K.rect(X+W/2,Y,.6,H,{f:"#C9CFDB"}),"transform:translateX(27px)"));
kf("spl",D,"0%,12%{transform:none}58%,86%{transform:translateX(-58px)}100%{transform:none}",EIO);
kf("spr",D,"0%,12%{transform:none}58%,86%{transform:translateX(58px)}100%{transform:none}",EIO);

/* 컷: 효과 없이 한 프레임에 바뀐다. 아래 타임라인의 재생 막대가 두 장면 경계를 지나는 순간 뚝 바뀜 */
const PH=62;
const cOld=()=>K.rect(X,Y,W,PH,{f:"#fff"})+tbar(34,19,44)+[0,1,2].map(i=>K.circ(38,37+i*13,4.5,{f:"#D3D8E3"})+gbar(48,35+i*13,i%2?56:70)).join("");
const cNew=()=>K.rect(X,Y,W,PH,{f:"#fff"})+K.rect(X,Y,W,14,{f:C.blue})+K.rect(34,15,40,4,{f:"rgba(255,255,255,.85)",r:2})+photo(34,28,92,24,7)+tbar(34,57,52,4.5);
TH2["컷"]=K=>frame()
  +clip(cNew()+A("cto",cOld(),"opacity:0"),X,Y,W,PH,R)
  +K.line(X,Y+PH,X+W,Y+PH,{s:C.line,sw:.6})
  +K.rect(34,78,45.4,6,{f:"#D3D8E3",r:2})+K.rect(80.6,78,45.4,6,{f:C.blue,r:2})
  +A("cth",K.line(80,75,80,87.5,{s:C.ink,sw:1.2})+`<path d="M77.3 74h5.4L80 77.2z" style="fill:${C.ink}"/>`);
kf("cto",D,"0%,49.9%{opacity:1}50%,100%{opacity:0}",LIN);
kf("cth",D,"0%{transform:translateX(-44px)}100%{transform:translateX(44px)}",LIN);

/* 임의 막대: 가는 가로 막대가 아무 순서로 하나씩 다음 화면으로 (돌지 않고 툭툭 바뀜) */
const RB=16, RBH=H/RB, RBO=shuf(RB,7);
TH2["임의 막대"]=K=>frame()+clip(newS()
  +[...Array(RB).keys()].map(i=>A("rb"+RBO[i],clip(oldS(),X,Y+RBH*i,W,RBH,0),RBO[i]<8?"opacity:0":"")).join(""));
for(let o=0;o<RB;o++){const s=n2(12+o*2.9),r=n2(86+o*.75);kf("rb"+o,D,`0%,${s}%{opacity:1}${n2(s+.4)}%,${r}%{opacity:0}${n2(r+.4)}%,100%{opacity:1}`,LIN)}

/* 도형 전환: 가운데서 플러스 모양 구멍이 커지며 다음 화면 (원형 리빌과 달리 모서리 있는 도형) */
const PLUS="M73 30H87V43H100V57H87V70H73V57H60V43H73Z";
TH2["도형 전환"]=K=>{const c="b244s"+K.id();
  return frame()+clip(oldS()
   +`<defs><clipPath id="${c}"><path class="b2x44 b2a-n44shp" style="transform:scale(1.8)" d="${PLUS}"/></clipPath></defs><g clip-path="url(#${c})">${newS()}</g>`
   +`<path class="b2x44 b2a-n44shp" vector-effect="non-scaling-stroke" style="transform:scale(1.8);fill:none;stroke:${C.blue};stroke-width:1.4" d="${PLUS}"/>`)};
kf("shp",D,"0%,12%{transform:scale(0)}58%,86%{transform:scale(9)}100%{transform:scale(0)}","animation-timing-function:cubic-bezier(.45,0,.6,1)");

/* 시계 전환: 가운데를 축으로 바늘이 한 바퀴 쓸고, 쓸고 간 부채꼴 자리에 다음 화면 */
TH2["시계 전환"]=K=>{const m="b244k"+K.id();
  return frame()+clip(oldS()
   +`<defs><mask id="${m}" maskUnits="userSpaceOnUse" x="${X}" y="${Y}" width="${W}" height="${H}"><path class="b2x44 b2a-n44ckm" pathLength="100" d="M80 15A35 35 0 1 1 80 85A35 35 0 1 1 80 15" style="fill:none;stroke:#fff;stroke-width:70;stroke-linecap:butt;stroke-dasharray:100 100;stroke-dashoffset:40"/></mask></defs>`
   +A("ckn",`<g mask="url(#${m})">${newS()}</g>`)
   +A("ckh",K.line(80,50,80,-30,{s:C.blue,sw:1.6})+K.circ(80,50,2.6,{f:C.blue}),"transform-box:view-box;transform-origin:80px 50px;transform:rotate(216deg)"))};
kf("ckm",D,"0%,12%{stroke-dashoffset:100}58%,96%{stroke-dashoffset:0}97%,100%{stroke-dashoffset:100}",LIN);
kf("ckh",D,"0%,12%{opacity:1;transform:rotate(0deg)}58%{opacity:1;transform:rotate(360deg)}62%,100%{opacity:0;transform:rotate(360deg)}",LIN);
kf("ckn",D,BACK,LIN);

/* 빗: 가는 띠가 번갈아 반대쪽으로 한꺼번에 빠진다 (슬라이스처럼 차례로 엇갈리지 않음) */
const CB=10, CBH=H/CB;
TH2["빗"]=K=>frame()+clip(newS()
  +[...Array(CB).keys()].map(i=>A("cb"+(i%2),`<g filter="url(#b2lift)">${clip(oldS(),X,Y+CBH*i,W,CBH,0)}</g>`+K.rect(X,Y+CBH*i,W,CBH,{s:"#C9CFDB",sw:.5}),`transform:translateX(${i%2?52:-52}px)`)).join(""));
kf("cb0",D,"0%,12%{transform:none}58%,86%{transform:translateX(-118px)}100%{transform:none}",EIO);
kf("cb1",D,"0%,12%{transform:none}58%,86%{transform:translateX(118px)}100%{transform:none}",EIO);

/* 상자 전환: 화면이 뒤로 물러나 작아진 채 상자처럼 돌고, 다 돌면 다시 다가온다 (큐브 전환은 물러나지 않음) */
const face=(scr,sh)=>K.card(X,Y,W,H,R)+clip(scr)+(sh?A(sh,K.rect(X,Y,W,H,{f:"#1E2864",r:R}),"opacity:.16"):"");
TH2["상자 전환"]=K=>K.blk(36,84,88,8,4)
  +A("bxo",
    A("bxa",face(oldS(),"bxas"),"transform-origin:100% 50%;transform:translateX(-50.4px) scaleX(.55) skewY(4deg)")
   +A("bxb",face(newS(),"bxbs"),"transform-origin:0 50%;transform:translateX(61.6px) scaleX(.45) skewY(-4.6deg)"),
   "transform-box:view-box;transform-origin:80px 50px;transform:scale(.74)")
  +A("bxr",face(oldS()),"opacity:0");
kf("bxo",D,"0%,8%{transform:scale(1)}24%,56%{transform:scale(.74)}72%,100%{transform:scale(1)}",EIO);
kf("bxa",D,"0%,24%{transform:translateX(0px) scaleX(1) skewY(0deg)}56%,100%{transform:translateX(-112px) scaleX(0) skewY(9deg)}",EIO);
kf("bxb",D,"0%,24%{transform:translateX(112px) scaleX(0) skewY(-9deg)}56%,100%{transform:translateX(0px) scaleX(1) skewY(0deg)}",EIO);
kf("bxas",D,"0%,24%{opacity:0}56%,100%{opacity:.35}",EIO);
kf("bxbs",D,"0%,24%{opacity:.35}56%,100%{opacity:0}",EIO);
kf("bxr",D,"0%,86%{opacity:0}97%,100%{opacity:1}",LIN);

/* 줄무늬 전환: 왼쪽 위 모서리에서 계단 모양 경계가 대각선으로 쓸고 간다 (와이프는 곧은 선) */
const ST=10;
let stair="";{let x=160,y=-160;stair=`M${x} ${y}`;while(x>-160){x-=ST;stair+=`H${x}`;y+=ST;stair+=`V${y}`}}
const STAIR_FILL=`M-400 -400H160V-160${stair.slice(stair.indexOf("H"))}H-400Z`;
TH2["줄무늬 전환"]=K=>{const c="b244t"+K.id();
  return frame()+clip(oldS()
   +`<defs><clipPath id="${c}"><path class="b2x44 b2a-n44stp" style="transform:translate(80px,50px)" d="${STAIR_FILL}"/></clipPath></defs><g clip-path="url(#${c})">${newS()}</g>`
   +`<path class="b2x44 b2a-n44stp" style="transform:translate(80px,50px);fill:none;stroke:${C.blue};stroke-width:5;opacity:.22" d="${stair}"/>`
   +`<path class="b2x44 b2a-n44stp" style="transform:translate(80px,50px);fill:none;stroke:${C.blue};stroke-width:1.3" d="${stair}"/>`)};
kf("stp",D,"0%,12%{transform:translate(24px,-6px)}58%,86%{transform:translate(136px,106px)}100%{transform:translate(24px,-6px)}",EIO);

/* 디졸브: 작은 네모 점이 아무 데서나 하나씩 다음 화면으로 (픽셀 전환처럼 화면 전체가 거칠어지지 않음) */
const DZ=8, DZC=W/DZ, DZR=H/DZ, DZG=12, DZO=shuf(DZC*DZR,11);
TH2["디졸브"]=K=>{const m="b244d"+K.id();
  const groups=[...Array(DZG)].map(()=>[]);
  DZO.forEach((cell,k)=>groups[k%DZG].push(K.rect(X+(cell%DZC)*DZ-.3,Y+Math.floor(cell/DZC)*DZ-.3,DZ+.6,DZ+.6,{f:"#000"})));
  return frame()+clip(newS()
   +`<defs><mask id="${m}" maskUnits="userSpaceOnUse" x="${X}" y="${Y}" width="${W}" height="${H}">${K.rect(X,Y,W,H,{f:"#fff"})}`
   +groups.map((g,i)=>A("dz"+i,g.join(""),i<6?"":"opacity:0")).join("")+`</mask></defs><g mask="url(#${m})">${oldS()}</g>`)};
for(let g=0;g<DZG;g++){const s=n2(12+g*3.9),r=n2(86+g*.9);kf("dz"+g,D,`0%,${s}%{opacity:0}${n2(s+.4)}%,${r}%{opacity:1}${n2(r+.4)}%,100%{opacity:0}`,LIN)}

/* 바둑판 전환: 칸이 엇갈려 두 번에 나눠 옆으로 차오른다 (타일 리빌처럼 칸이 사라지지 않음) */
const CK=16;
TH2["바둑판 전환"]=K=>{const c="b244b"+K.id();let r="";
  for(let j=0;j<H/CK;j++)for(let i=0;i<W/CK;i++){const a=(i+j)%2===0;
    r+=`<rect class="b2x44 b2a-n44ch${a?"a":"b"}" x="${X+i*CK}" y="${Y+j*CK}" width="${CK}" height="${CK}" style="transform-origin:0 50%;transform:scaleX(${a?1:.5})"/>`}
  return frame()+clip(oldS()+A("chn",`<defs><clipPath id="${c}">${r}</clipPath></defs><g clip-path="url(#${c})">${newS()}</g>`))};
kf("cha",D,"0%,12%{transform:scaleX(0)}34%,96%{transform:scaleX(1)}97%,100%{transform:scaleX(0)}",EIO);
kf("chb",D,"0%,34%{transform:scaleX(0)}56%,96%{transform:scaleX(1)}97%,100%{transform:scaleX(0)}",EIO);
kf("chn",D,BACK,LIN);

/* 뉴스 플래시: 다음 화면이 빙글빙글 돌면서 가운데서 커져 나타난다 (줌 전환은 돌지 않음) */
TH2["뉴스 플래시"]=K=>frame()+clip(oldS())
  +A("nf",K.card(X,Y,W,H,R)+clip(newS()),"transform:rotate(-165deg) scale(.5)");
kf("nf",D,"0%,12%{opacity:1;transform:rotate(-720deg) scale(0)}58%,86%{opacity:1;transform:rotate(0deg) scale(1)}96%{opacity:0;transform:rotate(0deg) scale(1)}97%,100%{opacity:0;transform:rotate(-720deg) scale(0)}","animation-timing-function:cubic-bezier(.3,.2,.4,1)");
}
