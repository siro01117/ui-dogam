// B2 그림 보충 (N=35): ty 폰트 스타일 23 · tf 폰트 분류 15.
// 꾸밈(ty)은 글자에 효과를 입힌 모습을 그대로, 분류(tf)는 그 글꼴의 알아볼 특징을 그린다.
// 글자 특징을 가리키는 파란 표시는 3.2초 박자로 켜졌다 꺼진다(멈춘 모습은 켜진 상태). 꾸밈으로 쓴 파랑은 깜빡이지 않는다.
{
const C=K.C, n2=K.n2, INK="#12141A", BL=C.blue, W="#FFFFFF";
const HV="'Arial Black','Segoe UI Black',Arial,Helvetica,sans-serif", SANS="Arial,Helvetica,sans-serif", SER="'Times New Roman',Times,serif",
  MONO="Consolas,'Courier New',monospace", KR="'Malgun Gothic','Apple SD Gothic Neo','Noto Sans KR',sans-serif";
B2CSS+=`.b2x35{animation-duration:3.2s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}
.b2a-n35lit{animation-name:b2a-n35lit}.b2a-n35lis{animation-name:b2a-n35lis}.b2a-n35mk{animation-name:b2a-n35mk}.b2a-n35mq{animation-name:b2a-n35mq}
@keyframes b2a-n35lit{0%,42%,100%{fill:var(--acc)}50%,92%{fill:var(--off,#12141A)}}
@keyframes b2a-n35lis{0%,42%,100%{stroke:var(--acc)}50%,92%{stroke:var(--off,#12141A)}}
@keyframes b2a-n35mk{0%,42%,100%{opacity:1}50%,92%{opacity:0}}
@keyframes b2a-n35mq{0%,42%,100%{opacity:1}50%,92%{opacity:.25}}
`;
const LIT="b2x35 b2a-n35lit", LIS="b2x35 b2a-n35lis";
const MK=m=>`<g class="b2x35 b2a-n35mk">${m}</g>`, MQ=m=>`<g class="b2x35 b2a-n35mq">${m}</g>`;
// 글자: tl 을 주면 글꼴이 달라도 폭이 같게 맞춘다(g=1 이면 글자 자체를 늘이고, 아니면 자간만)
const T=(x,y,s,{size=9,fill=INK,w=700,a="middle",ff=SANS,fs="",st="",sw=0,o=1,tl=0,g=1,ex="",at=""}={})=>
  `<text x="${n2(x)}" y="${n2(y)}" font-size="${size}" font-weight="${w}" text-anchor="${a}" font-family="${ff}"${fs?` font-style="${fs}"`:""}${tl?` textLength="${tl}" lengthAdjust="${g?"spacingAndGlyphs":"spacing"}"`:""}${at?" "+at:""} style="fill:${fill}${sw?`;stroke:${st||fill};stroke-width:${sw}`:""}${o<1?`;opacity:${o}`:""}${ex?";"+ex:""}">${s}</text>`;
const P=(d,f,o=1)=>`<path d="${d}" style="fill:${f}${o<1?`;opacity:${o}`:""}"${f===BL&&o===1?` class="${LIT}"`:""}/>`;
const PE=(d,f)=>`<path d="${d}" fill-rule="evenodd" style="fill:${f}"/>`;
const S=(d,c,sw,x="",cls="")=>`<path d="${d}" style="fill:none;stroke:${c};stroke-width:${sw};stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:8${x}"${cls?` class="${cls}"`:""}/>`;
const R=(x,y,w,h,f)=>K.rect(x,y,w,h,{f,cls:f===BL?LIT:""});
const ell=(cx,cy,rx,ry,rot=0)=>{const a=rot*Math.PI/180,dx=rx*Math.cos(a),dy=rx*Math.sin(a);
  return `M${n2(cx+dx)} ${n2(cy+dy)}A${rx} ${ry} ${rot} 1 0 ${n2(cx-dx)} ${n2(cy-dy)}A${rx} ${ry} ${rot} 1 0 ${n2(cx+dx)} ${n2(cy+dy)}Z`};
const foot=(a,b,B,l,t,bh=0)=>`M${n2(a-l)} ${B}V${n2(B-t)}Q${a} ${n2(B-t)} ${a} ${n2(B-t-bh)}H${b}Q${b} ${n2(B-t)} ${n2(b+l)} ${n2(B-t)}V${B}Z`;
const head=(a,b,Tp,l,t,bh=0)=>`M${n2(a-l)} ${Tp}V${n2(Tp+t)}Q${a} ${n2(Tp+t)} ${a} ${n2(Tp+t+bh)}H${b}Q${b} ${n2(Tp+t)} ${n2(b+l)} ${n2(Tp+t)}V${Tp}Z`;
const page=(m,f)=>K.card(12,10,136,80,14,f)+m;
const clipCard=(id,x=12,y=10,w=136,h=80,r=14)=>`<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath>`;

/* ───────── ty · 폰트 스타일 ───────── */

// 납작한 색 면 위 글자에서 45도로 길게 뻗은 그림자
TH2["롱 섀도"]=K=>{const i=K.id(),cp="b235a"+i,g="b235b"+i;let sh="";for(let d=1;d<=50;d+=1)sh+=`<use href="#${g}" x="${d}" y="${d}"/>`;
  return `<defs>${clipCard(cp,22,14,116,72,16)}<g id="${g}">${T(72,64,"Aa",{size:40,ff:HV,w:900,fill:"#000",tl:66})}</g></defs>`
  +K.card(22,14,116,72,16,BL)+`<g clip-path="url(#${cp})"><g style="opacity:.26">${sh}</g></g>`+T(72,64,"Aa",{size:40,ff:HV,w:900,fill:W,tl:66})};

// 글자 → 흰 틈 → 바깥 테두리 한 겹 더
TH2["이중 외곽선"]=K=>{const o={size:38,ff:HV,w:900,tl:96,ex:"stroke-linejoin:round"};
  return page(T(80,64,"LINE",{...o,fill:"none",st:INK,sw:9.5})+T(80,64,"LINE",{...o,fill:"none",st:W,sw:6.2})+T(80,64,"LINE",{...o,fill:BL,st:INK,sw:1.5}))};

// 글자 밑이 녹아 흘러내린다
TH2["멜팅"]=K=>{const b=50,dr=[[31,15,5.5],[43.5,7,4.5],[54,21,5.5],[67,10,4.5],[79,16,5],[92.5,6,4.5],[104,12,5],[117,24,5.5],[126.5,8,4]];
  return page(T(80,b,"MELT",{size:34,ff:HV,w:900,fill:BL,tl:104})
  +K.rect(27,b-5,106,7,{f:BL,r:3})
  +dr.map(([x,l,w])=>K.rect(x-w/2,b-2,w,l+2,{f:BL,r:w/2})).join("")
  +K.circ(54,b+28,2.6,{f:BL})+K.circ(117,b+31.5,2.2,{f:BL})+K.circ(79,b+23,1.8,{f:BL}))};

// 글줄이 볼록한 틀(파란 점선)을 따라 휜다
TH2["워프"]=K=>{const L="WARPED",n=L.length,p=18.6,x0=80-p*(n-1)/2,sz=24,ch=sz*.716,sc=i=>1+.95*Math.sin(Math.PI*(i+.5)/n);
  let g="",top="",bot="";
  for(let i=0;i<n;i++)g+=`<g transform="translate(${n2(x0+i*p)} 50) scale(1 ${n2(sc(i))})">${T(0,ch/2,L[i],{size:sz,ff:SANS,w:700,tl:16.5})}</g>`;
  for(let k=0;k<=24;k++){const u=k/24,x=x0-p/2+u*p*n,s=1+.95*Math.sin(Math.PI*u),h=ch/2*s+3;top+=(k?"L":"M")+n2(x)+" "+n2(50-h);bot+=(k?"L":"M")+n2(x)+" "+n2(50+h)}
  const env=d=>`<path d="${d}" style="fill:none;stroke:${BL};stroke-width:1.1;stroke-dasharray:3 2.4"/>`;
  return page(MK(env(top)+env(bot)+env(`M${n2(x0-p/2)} ${n2(50-ch/2-3)}V${n2(50+ch/2+3)}`)+env(`M${n2(x0-p/2+p*n)} ${n2(50-ch/2-3)}V${n2(50+ch/2+3)}`))+g)};

// 한 글자만 옆으로 길게 잡아 늘였다(파랑)
TH2["스트레치"]=K=>{const o={size:36,ff:SANS,w:700,a:"start"};
  return page(T(24,63,"L",{...o,tl:16})+T(43,63,"O",{...o,tl:54,fill:BL,at:`class="${LIT}"`})+T(100,63,"N",{...o,tl:17})+T(120,63,"G",{...o,tl:17}))};

// 종이에 눌러 찍어 오목하게 들어간 글자: 위쪽 안 그림자 + 아래쪽 밝은 턱
TH2["레터프레스"]=K=>{const f="b235c"+K.id(),o={size:38,ff:SER,w:700,tl:104};
  return `<defs><filter id="${f}" x="-10%" y="-20%" width="120%" height="150%"><feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feGaussianBlur stdDeviation="1"/><feOffset dx=".6" dy="1.8" result="o"/><feFlood flood-color="#1B1408" flood-opacity=".7"/><feComposite in2="o" operator="in"/><feComposite in2="SourceAlpha" operator="in" result="s"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="s"/></feMerge></filter></defs>`
  +page(T(80,63.3,"Press",{...o,fill:W})+`<g filter="url(#${f})">`+T(80,62,"Press",{...o,fill:"#CFC6B4"})+`</g>`
  +K.rect(28,74,104,1.2,{f:"#D2C9B8"})+K.rect(28,75.2,104,.8,{f:W}),"#E9E2D4")};

// 어두운 바탕에 금빛 박
TH2["금박"]=K=>{const g="b235d"+K.id(),au="#E7C567",sp=(x,y,s)=>`<g transform="translate(${x-s/2} ${y-s/2}) scale(${n2(s/24)})"><path d="${K.ICON.sparkle}" style="fill:#FBE9A6"/></g>`;
  return `<defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#A9812A"/><stop offset=".22" stop-color="#F6DE8C"/><stop offset=".42" stop-color="#C39A3A"/><stop offset=".6" stop-color="#FFF4BF"/><stop offset=".8" stop-color="#B98D2F"/><stop offset="1" stop-color="#F0D377"/></linearGradient></defs>`
  +page(K.rect(17,15,126,70,{s:au,sw:.7,r:10,o:.55})+T(80,66,"Gold",{size:44,ff:SER,w:700,fill:`url(#${g})`,tl:98})+sp(124,27,11)+sp(34,74,8),"#1B2030")};

// 칠판에 분필로: 거친 가루 결
TH2["분필"]=K=>{const f="b235e"+K.id(),ch="#F5F4EC";
  return `<defs><filter id="${f}" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="1.25" numOctaves="2" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -3.4 2.5" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter></defs>`
  +K.card(12,10,136,80,10,"#B98B5C")+K.rect(16,14,128,72,{f:"#2F4B41",r:6})
  +`<g filter="url(#${f})">`+T(78,60,"Hello",{size:36,ff:"'Segoe Print','Comic Sans MS','Bradley Hand',cursive",w:700,fill:ch,tl:96})
  +K.path("M30 71C52 67.5 76 72.5 100 68.5C110 67 118 68.5 127 67.5",{s:ch,sw:2.4})+`</g>`
  +K.rect(118,79.500,15,4.5,{f:ch,r:1.5})+K.rect(100,81.500,10,2.5,{f:"#F3B6C4",r:1.2})};

// 전광판: 꺼진 점 사이에서 켜진 동그란 점이 글자를 만든다
TH2["도트 매트릭스"]=K=>{const F={T:["11111","00100","00100","00100","00100","00100","00100"],A:["01110","10001","10001","11111","10001","10001","10001"],X:["10001","10001","01010","00100","01010","10001","10001"],I:["11111","00100","00100","00100","00100","00100","11111"]};
  const p=5.3,x0=80-11*p,y0=50-3*p;let on="",off="";
  for(let r=0;r<7;r++)for(let c=0;c<23;c++){const li=(c/6)|0,ci=c%6,lit=ci<5&&F["TAXI"[li]][r][ci]==="1",d=`<circle cx="${n2(x0+c*p)}" cy="${n2(y0+r*p)}" r="${lit?2.1:1.7}"/>`;lit?on+=d:off+=d}
  return K.card(12,22,136,56,10,"#15171D")+`<g style="fill:#353947">${off}</g><g style="fill:#FFB43A">${on}</g>`};

// 막대 일곱 개를 켜고 꺼서 만든 숫자(꺼진 막대가 흐리게 보인다)
TH2["7세그먼트"]=K=>{const M={0:"abcdef",1:"bc",2:"abged",3:"abgcd",4:"fgbc",5:"afgcd",6:"afgedc",7:"abc",8:"abcdefg",9:"abfgcd"},w=18,h=38,t=4.6,y=31;
  const hz=(x,yy)=>`<path d="M${n2(x+1.2)} ${n2(yy)}l${t/2} ${-t/2}H${n2(x+w-1.2-t/2)}l${t/2} ${t/2}l${-t/2} ${t/2}H${n2(x+1.2+t/2)}Z"/>`;
  const vt=(x,y1,y2)=>`<path d="M${n2(x)} ${n2(y1+1.2)}l${t/2} ${t/2}V${n2(y2-1.2-t/2)}l${-t/2} ${t/2}l${-t/2} ${-t/2}V${n2(y1+1.2+t/2)}Z"/>`;
  const sg=x=>({a:hz(x,y),g:hz(x,y+h/2),d:hz(x,y+h),f:vt(x,y,y+h/2),b:vt(x+w,y,y+h/2),e:vt(x,y+h/2,y+h),c:vt(x+w,y+h/2,y+h)});
  let on="",off="";[[25,1],[51,2],[91,4],[117,5]].forEach(([x,d])=>{const s=sg(x);for(const k in s)M[d].includes(k)?on+=s[k]:off+=s[k]});
  return K.card(12,16,136,68,10,"#17191F")+`<g style="fill:#2A2D37;stroke:none">${off}</g><g style="fill:#FF4D4D;stroke:none">${on}<circle cx="80" cy="42" r="2.6"/><circle cx="80" cy="58" r="2.6"/></g>`};

// 글자와 기호만으로 그린 고양이
TH2["ASCII 아트"]=K=>{const L=[" /\\_/\\ ","( o.o )"," &gt; ^ &lt; "].map(s=>s.match(/&[a-z]+;|./g));
  return page(L.map((row,r)=>row.map((c,i)=>c===" "?"":T(80+(i-3)*10.5,37+r*20,c,{size:20,ff:MONO,w:700})).join("")).join(""))};

// 쨍한 보색 겹 테두리가 일렁인다
TH2["사이키델릭"]=K=>{const i=K.id(),f="b235f"+i,cp="b235g"+i,o={size:36,ff:HV,w:900,tl:92,ex:"stroke-linejoin:round"};
  const ring=(c,sw)=>T(80,63,"LOVE",{...o,fill:"none",st:c,sw});
  return `<defs>${clipCard(cp)}<filter id="${f}" filterUnits="userSpaceOnUse" x="0" y="1" width="160" height="98"><feTurbulence type="turbulence" baseFrequency=".028 .05" numOctaves="1" seed="11" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="11" xChannelSelector="R" yChannelSelector="G"/></filter></defs>`
  +page(`<g clip-path="url(#${cp})"><g filter="url(#${f})">`+ring("#FF4FA3",31)+ring("#FFD23F",24)+ring("#19C3B1",17)+ring("#FF7A1A",11)+ring("#FFE94A",5)+T(80,63,"LOVE",{...o,fill:"#7B2FE0"})+`</g></g>`,"#5B21C9")};

// 서부 포스터: 줄기보다 두꺼운 네모 돌기를 위아래에 얹은 나무 활자
TH2["웨스턴"]=K=>{const ink="#5B3620",w=17,h=36,y=32,t=7,s=5.5,m=y+h/2,r=(x,yy,ww,hh)=>`<rect x="${n2(x)}" y="${n2(yy)}" width="${n2(ww)}" height="${n2(hh)}"/>`;
  const G={H:x=>r(x,y,8,t)+r(x+w-8,y,8,t)+r(x,y+h-t,8,t)+r(x+w-8,y+h-t,8,t)+r(x+1.25,y,s,h)+r(x+w-1.25-s,y,s,h)+r(x+1.25,m-2,w-2.5,4),
    O:x=>`<path fill-rule="evenodd" d="M${x+4} ${y}H${x+w-4}L${x+w} ${y+4}V${y+h-4}L${x+w-4} ${y+h}H${x+4}L${x} ${y+h-4}V${y+4}ZM${x+s} ${y+t}V${y+h-t}H${x+w-s}V${y+t}Z"/>`,
    T:x=>r(x,y,w,t)+r(x,y,3.5,t+5)+r(x+w-3.5,y,3.5,t+5)+r(x+w/2-s/2,y,s,h)+r(x+w/2-5.5,y+h-t,11,t),
    E:x=>r(x,y,w,t)+r(x,y+h-t,w,t)+r(x+1.25,y,s,h)+r(x+1.25,m-2,10,4)+r(x+w-3.5,y,3.5,t+5)+r(x+w-3.5,y+h-t-5,3.5,t+5)+r(x+9.5,m-5,2.5,10),
    L:x=>r(x,y,8,t)+r(x,y+h-t,w,t)+r(x+1.25,y,s,h)+r(x+w-3.5,y+h-t-5,3.5,t+5)};
  const st=(cx,cy)=>`<g transform="translate(${cx-5} ${cy-5}) scale(${n2(10/24)})"><path d="${K.ICON.star}"/></g>`;
  return page(`<g style="fill:${ink};stroke:none">`+"HOTEL".split("").map((c,i)=>G[c](80-52.5+i*22)).join("")
  +r(28,20,104,1.6)+r(28,23.2,104,.7)+r(28,78.400,43,1.6)+r(89,78.400,43,1.6)+st(80,79.200)+`</g>`,"#F3E3C0")};

// 덩굴처럼 휘감기는 곡선 글자와 테두리 장식
TH2["아르누보"]=K=>{const gr="#3F5B3A",au="#C39A45",p=(d,s,sw)=>K.path(d,{s,sw});
  const vine=m=>`<g${m?` transform="translate(160 0) scale(-1 1)"`:""}>`+p("M30 83V44C30 24 52 15 80 15",au,1.6)+p("M35 83V46C35 29 54 20 80 20",au,.7)
    +p("M35 83C48 83.500 60 78 58 68C56.500 60 46 61 47 68C47.600 72 52 72 52.500 69",gr,1.8)
    +`<path d="M58 67C60 60 66 58 71 60C68 66 63 68.500 58 67Z" style="fill:${gr}"/>`+`<path d="M43 78.500C39.500 74 40.500 69.500 44 66.500C46.500 71 46 75.500 43 78.500Z" style="fill:${gr}"/>`+`</g>`;
  return page(vine(0)+vine(1)
  +`<path d="M80 27C76 44 70 64 63 75C61.500 77.500 58 77 59 74C64 60 72 42 78.500 27Z" style="fill:${gr}"/>`
  +`<path d="M78 27H82.500C88 44 95 62 102 71C104 73.500 107 72 106 76C100 78.500 94 77 91 71C86 60 81 44 78 27Z" style="fill:${gr}"/>`
  +p("M60 54C68 44 82 60 99 49C103 46.400 105 49 102 51.500",au,2.4)+K.circ(80,22.500,3.2,{f:au})+K.circ(80,22.500,1.2,{f:"#F7F0DE"}),"#F7F0DE")};

// 풍선껌처럼 부푼 글자 + 굵은 테두리 + 반짝 자국
TH2["버블 레터"]=K=>{const o={size:50,ff:SANS,w:700,tl:100,g:0,ex:"stroke-linejoin:round"},pk="#FF8FB6",hl=(x,y)=>K.path(`M${x} ${y+5}C${x} ${y+1.5} ${x+2} ${y} ${x+5} ${y}`,{s:W,sw:2.2});
  return page(T(80,66,"boo",{...o,fill:"none",st:INK,sw:11})+T(80,66,"boo",{...o,fill:pk,st:pk,sw:6.5})+hl(31,29)+hl(69,41)+hl(107,41))};

// 흰 면을 글자 모양대로 뚫어 뒤(파랑)가 비친다. 구멍 안쪽에 그림자
TH2["컷아웃"]=K=>{const i=K.id(),m="b235h"+i,f="b235i"+i,g="b235j"+i;
  return `<defs>${clipCard(m+"c")}${K.grad(g,[[0,"#2F6BFF"],[1,"#FF7AB8"]],1,0)}<mask id="${m}"><rect x="2" y="2" width="156" height="96" fill="#fff"/>${T(80,68,"CUT",{size:48,ff:HV,w:900,fill:"#000",tl:106})}</mask>`
  +`<filter id="${f}" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="2.6" stdDeviation="1.3" flood-color="#0E1440" flood-opacity=".8"/></filter></defs>`
  +K.card(12,10,136,80,14)+K.rect(14,12,132,76,{f:`url(#${g})`,r:13})+`<g clip-path="url(#${m}c)"><g filter="url(#${f})"><rect x="12" y="10" width="136" height="80" rx="14" mask="url(#${m})" style="fill:#fff"/></g></g>`};

// 글자 안이 사진으로 차 있다
TH2["이미지 채운 글자"]=K=>{const i=K.id(),cp="b235k"+i,g="b235l"+i;
  return `<defs>${K.grad(g,[[0,"#7FA6FF"],[1,"#F4BFE0"]],0,1)}<clipPath id="${cp}">${T(80,69,"SKY",{size:50,ff:HV,w:900,tl:112})}</clipPath></defs>`
  +page(`<g clip-path="url(#${cp})">`+K.rect(20,24,120,50,{f:`url(#${g})`})+K.circ(106,40,7,{f:"#FFF3C4"})
  +`<path d="M20 74L46 46L62 60L84 38L112 62L124 52L140 66V74Z" style="fill:#3C5BD8"/><path d="M20 74L38 60L56 70L80 54L104 70L122 62L140 72V74Z" style="fill:#263C9E"/></g>`)};

// 글줄이 원을 따라 빙 두른다
TH2["원형 텍스트"]=K=>{const id="b235m"+K.id();
  return `<defs><path id="${id}" d="M80 22.500A27.500 27.500 0 1 1 79.990 22.500"/></defs>`
  +K.card(34,4,92,92,46)+`<text font-size="10.500" font-weight="700" font-family="${KR}" textLength="169" lengthAdjust="spacing" style="fill:${INK}"><textPath href="#${id}" textLength="169" lengthAdjust="spacing">둥글게 도는 글자 ✦ 둥글게 도는 글자 ✦</textPath></text>`
  +K.circ(80,50,15,{f:BL})+`<g transform="translate(71 41) scale(.75)"><path d="${K.ICON.star}" style="fill:#fff"/></g>`};

// 글자끼리 포개어 겹친 자리가 섞여 보인다
TH2["겹친 글자"]=K=>{const o={size:56,ff:HV,w:900,ex:"mix-blend-mode:multiply"};
  return page(`<g style="isolation:isolate">`+T(52,70,"A",{...o,fill:BL})+T(80,70,"B",{...o,fill:"#FF6FA5"})+T(108,70,"C",{...o,fill:"#FFC23D"})+`</g>`)};

// 같은 낱말을 줄줄이 되풀이, 한 줄만 채웠다
TH2["반복 타이포"]=K=>{const cp="b235n"+K.id(),o={size:19,ff:HV,w:900,tl:112};
  return `<defs>${clipCard(cp)}</defs>`+page(`<g clip-path="url(#${cp})">`+[0,1,2,3,4,5].map(i=>T(80,19.500+i*15.5,"REPEAT",i===2?{...o,fill:BL}:{...o,fill:"none",st:INK,sw:.9})).join("")+`</g>`)};

// 화면이 넘치게 큰 글자(양옆이 잘린다), 나머지는 아주 작게
TH2["빅 타이포"]=K=>{const cp="b235o"+K.id();
  return `<defs>${clipCard(cp)}</defs>`+page(`<g clip-path="url(#${cp})">`+T(80,72,"BIG",{size:74,ff:HV,w:900,tl:158})+`</g>`
  +K.rect(22,79,34,3,{f:"#C9CFDB",r:1.5})+K.rect(114,76,24,8,{f:BL,r:4}))};

// 한 문구에 성격 다른 두 글꼴: 굵은 산세리프 + 기울인 세리프
TH2["믹스 폰트"]=K=>page(T(26,46,"MIX",{size:30,ff:HV,w:900,a:"start",tl:68})+T(26,76,"&amp; match",{size:30,ff:SER,w:400,fs:"italic",a:"start",fill:BL,tl:108}));

// 첫 글자 둘을 겹쳐 엮은 표식
TH2["모노그램"]=K=>K.card(40,10,80,80,40)+K.circ(80,50,33,{s:INK,sw:1.6})+K.circ(80,50,29.500,{s:INK,sw:.6})
  +T(68,59,"K",{size:36,ff:SER,w:700})+T(91,73,"M",{size:36,ff:SER,w:700,fill:BL,ex:"mix-blend-mode:multiply"});

/* ───────── tf · 폰트 분류 ───────── */

// 세리프 H O: 돌기 모양(파랑)과 가는 곳을 잇는 축(파란 선). b2_20 의 올드 스타일 · 모던 세리프와 같은 틀
const HO=({sw,bar,l,t,bh,irx,iry,rot})=>{const tp=24,b=76,cx=110,cy=50,a=rot*Math.PI/180,dx=-34*Math.sin(a),dy=34*Math.cos(a);
  const st=x=>R(x,tp,sw,52,INK)+P(foot(x,x+sw,b,l,t,bh),BL)+P(head(x,x+sw,tp,l,t,bh),BL);
  return page(R(34,50-bar/2,34+sw-8,bar,INK)+st(34)+st(60)+PE(ell(cx,cy,22,27)+ell(cx,cy,irx,iry,rot),INK)+MK(K.line(cx-dx,cy-dy,cx+dx,cy+dy,{s:BL,sw:1.4})))};
// 올드 스타일과 모던 사이: 축이 거의 곧고 대비는 중간, 돌기는 짧게 둥글려 잇는다
TH2["트랜지셔널"]=K=>HO({sw:9,bar:2.4,l:6,t:2.2,bh:3,irx:13,iry:24.8,rot:-5});

// 굵은 획과 실 같은 획(파랑)이 극단으로 갈린다: A N
TH2["디돈"]=K=>{const t=24,b=76,ax=50,n1=92,n2x=126,h=1.5,hl=(d)=>S(d,BL,h,"",LIS);
  return page(P(`M${ax-2} ${t}H${ax+4}L${ax+25} ${b}H${ax+13.5}Z`,INK)+hl(`M${ax-.5} ${t+2}L${ax-19} ${b}`)+hl(`M${ax-12} 58H${ax+13}`)
  +hl(`M${ax-27} ${b-.75}H${ax-11}`)+hl(`M${ax+7} ${b-.75}H${ax+31}`)
  +P(`M${n1-1} ${t}H${n1+10}L${n2x+1} ${b}H${n2x-9.5}Z`,INK)+hl(`M${n1} ${t}V${b}`)+hl(`M${n2x} ${t}V${b}`)
  +hl(`M${n1-8} ${t+.75}H${n1+1}`)+hl(`M${n1-8} ${b-.75}H${n1+8}`)+hl(`M${n2x-8} ${t+.75}H${n2x+8}`))};

// 고르게 다듬은 산세리프: 굵기가 일정하고 획 끝이 정확히 수평으로 잘린다(파란 선)
TH2["네오 그로테스크"]=K=>{const i=K.id(),a="b235p"+i,b="b235q"+i,mk=(x1,x2,y)=>K.line(x1,y,x2,y,{s:BL,sw:1.5});
  return `<defs><clipPath id="${a}"><path d="M0 0H160V41H60V59H160V100H0Z"/></clipPath><clipPath id="${b}"><path d="M0 0H160V59.5H112V66.5H160V100H0Z"/></clipPath></defs>`
  +page(`<g clip-path="url(#${a})">`+K.circ(54,50,21.500,{s:INK,sw:9})+`</g>`
  +`<g clip-path="url(#${b})">`+K.circ(112,56,15.500,{s:INK,sw:9})+`</g>`+K.rect(95,52.500,34,7,{f:INK})
  +MK(mk(64,85,41)+mk(64,85,59)+mk(114,137,66.500)))};

// 두꺼운 돌기가 줄기로 둥글게 이어지고(파랑), 획 끝이 공처럼 맺힌다(파랑)
TH2["클라렌든"]=K=>{const t=24,b=76,sw=10,st=(x,tp)=>R(x,tp,sw,b-tp,INK)+P(foot(x,x+sw,b,5,5.5,5),BL)+P(head(x,x+sw,tp,5,5.5,5),BL);
  return page(R(34,46,38,7.5,INK)+st(32,t)+st(62,t)
  +S("M108 60C108 49 113 42 123 42.500",INK,7)+R(98,38,sw,b-38,INK)+P(foot(98,98+sw,b,5,5.5,5),BL)+P(`M93 38H108V49H98Q98 43.500 93 43.500Z`,BL)
  +K.circ(124.500,47.500,6,{f:BL,cls:LIT}))};

// 타자기로 친 글자: 폭이 같고, 글자마다 진하기와 높이가 조금씩 어긋난다
TH2["타자기체"]=K=>{const ty=(s,x0,y,jit)=>s.split("").map((c,i)=>c===" "?"":T(x0+i*10.4,y+jit[i%jit.length],c,{size:16,ff:"'Courier New',Courier,monospace",w:700,fill:"#2A2C33",o:[1,.72,.9,1,.6,.95,.8][(i*3+s.length)%7]})).join("");
  return K.rect(14,70,132,18,{f:"#3A4050",r:9})+K.rect(8,74,10,10,{f:"#252933",r:3})+K.rect(142,74,10,10,{f:"#252933",r:3})
  +K.card(26,8,108,68,4)+ty("Dear Kim,",38,34,[0,.7,-.5,.3,0,-.6,.5])+ty("Hello",38,56,[.4,0,-.6,.6,0])
  +K.rect(93,44,2,14,{f:BL})+K.rect(26,66,108,1,{f:"#E2E6EC"})};

// 붓으로 눌러 시작해 삐쳐 끝낸 획 + 낙관
TH2["붓글씨체"]=K=>{const ink="#17171A",b=d=>`<path d="${d}" style="fill:${ink}"/>`;
  return page(b("M35 27C38.500 22.500 46.500 23.500 47.500 29C47.500 38 46.500 47 47 55.500C47.300 58.500 49.500 59.500 53 59.300C61 58.800 69 57 76.500 55C80.500 54 82 57.500 79 59.800C70 66 56 68.500 45 67.500C39.500 67 37 64 37.200 59C37.600 48 37.500 38 35 27Z")
  +b("M93 19C96.500 15 104.500 16.500 105 22.500C105.500 39 105.500 56 104 70C103.500 76 101 81 97.500 85C95.500 73 95.500 40 95 28C94.900 24.500 93.800 22 93 19Z")
  +b("M104 43.500C109 43.500 114 42.300 118.500 40.800C122.500 39.800 124 43.500 121 45.800C116 49.300 110 51 104 51Z")
  +K.rect(118,66,15,15,{f:"#D8362F",r:2.5})+K.path("M122 70.500H129V76.500H122ZM125.500 70.500V76.500",{s:W,sw:1.1}),"#F8F4EA")};

// 넓적한 펜촉을 한 각도로 잡고 쓴 글씨: 획 방향에 따라 굵기가 달라진다
TH2["캘리그래피체"]=K=>{const id="b235r"+K.id(),ang=32*Math.PI/180,L=3.3,ux=Math.cos(ang),uy=-Math.sin(ang);
  const n=x=>`M${x-4} 49.500L${x} 46V70M${x} 54C${x+3} 47 ${x+15} 43 ${x+15} 53V68L${x+19} 65.500`,
    a=x=>`M${x+15} 51C${x+11} 43.500 ${x} 45 ${x} 58C${x} 71 ${x+11} 71.500 ${x+15} 62M${x+15} 46V68L${x+19} 65.500`,
    o=x=>`M${x} 58A7.5 12 0 1 1 ${x+15} 58A7.5 12 0 1 1 ${x} 58`;
  let u="";for(let k=-10;k<=10;k++)u+=`<use href="#${id}" x="${n2(ux*L*k/10)}" y="${n2(uy*L*k/10)}"/>`;
  return `<defs><path id="${id}" d="${n(36)+n(88)+a(62)+o(114)}" style="fill:none;stroke:${INK};stroke-width:.9;stroke-linejoin:round;stroke-linecap:round"/></defs>`
  +page(K.line(22,42.500,138,42.500,{s:C.line,sw:.8})+K.line(22,73.500,138,73.500,{s:C.line,sw:.8})+K.line(22,26,138,26,{s:C.line,sw:.8,o:.6})
  +`<g transform="translate(9 0) skewX(-9)">${u}</g>`
  +MK(K.line(24-ux*4.5,33-uy*4.5,24+ux*4.5,33+uy*4.5,{s:BL,sw:2.2})))};

// 받침이 있든 없든 같은 네모 틀(파란 점선)을 꽉 채운다
TH2["네모꼴"]=K=>{const s=1.25,oy=25,sw=6.2,
  na=[[8,5.5,8,31],[8,31,25,31],[31.5,3,31.5,37],[31.5,19,36,19]],
  nam=[[8,4.5,8,18],[8,18,24,18],[31.5,3,31.5,23],[31.5,11.500,36,11.500],[9,28.500,9,37],[9,28.500,31.5,28.500],[31.5,28.500,31.5,37],[9,37,31.5,37]],
  g=(ox,L)=>L.map(([x1,y1,x2,y2])=>K.rect(ox+s*x1-sw/2,oy+s*y1-sw/2,s*(x2-x1)+sw,s*(y2-y1)+sw,{f:INK})).join(""),
  fr=ox=>MQ(K.rect(ox,oy,50,50,{f:C.soft,r:3})+`<rect x="${ox}" y="${oy}" width="50" height="50" rx="3" style="fill:none;stroke:${BL};stroke-width:1.2;stroke-dasharray:3 2.4"/>`);
  return page(fr(24)+fr(86)+g(24,na)+g(86,nam))};

// 코드용 글꼴: 0 과 O, 1 · l · I 가 헷갈리지 않게 붙인 표시(파랑)
TH2["코딩 폰트"]=K=>{const t=40,b=76,cy=58,sw=4.6,k=d=>S(d,INK,sw),l=d=>S(d,BL,sw*.8,"",LIS);
  return page(T(24,29,"if (O == 0 || l == 1)",{size:8,ff:MONO,w:400,a:"start",fill:C.sub,tl:98,g:0})
  +k(ell(30,cy,7.5,18-sw/2+2.3))+l(`M25.500 ${cy+9.5}L34.500 ${cy-9.5}`)
  +k(ell(56,cy,10,18-sw/2+2.3))
  +k(`M82 ${t}V${b}`)+l(`M82 ${t+1.6}L74.500 ${t+8}`)+l(`M74 ${b-1.8}H90`)
  +k(`M105 ${t}V${b-9}`)+l(`M98.500 ${t+1.8}H105`)+l(`M105 ${b-10}Q105 ${b-1.8} 113.500 ${b-1.8}`)
  +k(`M128 ${t}V${b}`)+l(`M121 ${t+1.8}H135`)+l(`M121 ${b-1.8}H135`))};

// 글자표 칸에 글자와 나란히 아이콘이 들어 있다: 글자처럼 한 색
TH2["아이콘 폰트"]=K=>{const cs=27,gp=4.5,x0=80-(4*cs+3*gp)/2,y0=50-(2*cs+gp)/2,it=["A","B","home","search","heart","star","bell","user"];
  return page(it.map((v,i)=>{const x=x0+(i%4)*(cs+gp),y=y0+((i/4)|0)*(cs+gp),sel=i===2;
    return K.rect(x,y,cs,cs,{f:sel?C.soft:W,s:sel?BL:C.line,sw:sel?1.4:1,r:6})+(v.length===1?T(x+cs/2,y+cs/2+6,v,{size:17,w:700}):K.icon(v,x+cs/2,y+cs/2,16,sel?BL:INK,1.9))}).join(""))};

// 글자 하나에 여러 색이 들어 있다: 색이 층층인 A 와 이모지
TH2["컬러 폰트"]=K=>{const cp="b235s"+K.id(),o={size:58,ff:HV,w:900};
  return `<defs><clipPath id="${cp}"><rect x="12" y="10" width="136" height="38"/></clipPath></defs>`
  +page(T(56.500,74,"A",{...o,fill:"#FF7AA8"})+T(53,70.500,"A",{...o,fill:BL})+`<g clip-path="url(#${cp})">`+T(53,70.500,"A",{...o,fill:"#FFC23D"})+`</g>`
  +K.circ(113,51,19,{f:"#FFC93C"})+K.circ(106,46,2.6,{f:INK})+K.circ(120,46,2.6,{f:INK})+K.path("M103.500 54.500C106 62.500 120 62.500 122.500 54.500Z",{f:"#8A3A1D",s:"none",sw:0})
  +K.circ(101.500,54,3,{f:"#FF8FA3",o:.8})+K.circ(124.500,54,3,{f:"#FF8FA3",o:.8}))};

// 같은 글이 기기마다 그 기기에 깔린 글꼴로 보인다
TH2["시스템 폰트"]=K=>{const ph=(x,ff,w)=>K.card(x,14,36,72,9)+K.rect(x+13,18.500,10,2.4,{f:"#D3D8E3",r:1.2})+T(x+18,50,"Aa",{size:18,ff,w})+T(x+18,66,"가나",{size:9,ff:ff+","+KR,w,fill:C.sub})+K.rect(x+12,78,12,2,{f:"#D3D8E3",r:1});
  return ph(10,"'Helvetica Neue',Arial,sans-serif",700)
  +K.card(52,22,56,56,7)+K.circ(58.500,28.500,1.6,{f:"#E5484D"})+K.circ(63.500,28.500,1.6,{f:"#F2A93B"})+K.circ(68.500,28.500,1.6,{f:"#1FA971"})+K.rect(52,34,56,.8,{f:C.line})
  +T(80,57,"Aa",{size:20,ff:"'Segoe UI',Tahoma,sans-serif",w:400})+T(80,71,"가나",{size:9,ff:"'Malgun Gothic',sans-serif",w:400,fill:C.sub})
  +ph(114,"Georgia,'Noto Serif',serif",700)};

// 제목용은 크게 볼 때 섬세하게, 본문용은 작게 읽을 때 또렷하게
TH2["본문용 · 제목용"]=K=>{const chip=(x,s,on)=>K.rect(x,72,30,11,{f:on?BL:C.soft,r:5.5})+T(x+15,80,s,{size:7,ff:KR,w:700,fill:on?W:BL});
  return page(T(45,62,"Ag",{size:44,ff:SER,w:400,tl:46})+chip(30,"제목용",1)
  +K.rect(73,20,.8,62,{f:C.line})
  +["다람쥐 헌 쳇바퀴에","타고파 다람쥐 헌","쳇바퀴에 타고파","다람쥐 헌 쳇바퀴"].map((s,i)=>T(82,30+i*11,s,{size:7.2,ff:KR,w:400,a:"start",fill:"#2A2C33"})).join("")+chip(82,"본문용",0))};

// 대문자 모양과 소문자 모양이 한 높이(파란 두 줄 사이)에 섞여 있다
TH2["유니케이스"]=K=>{const b=66,S0=38,k=.716/.519,up=(x,c)=>T(x,b,c,{size:S0,ff:SANS,w:700,a:"start"}),lo=(x,c)=>T(x,b,c,{size:n2(S0*k),ff:SANS,w:400,a:"start",st:INK,sw:.5});
  return page(MQ(K.line(20,b-S0*.716,140,b-S0*.716,{s:BL,sw:1.1})+K.line(20,b,140,b,{s:BL,sw:1.1}))
  +up(22,"M")+lo(54.500,"e")+up(85,"N")+lo(113,"u"))};

// 굵은 획 한가운데에 가는 선(파랑)을 파 넣었다
TH2["인라인 폰트"]=K=>{const t=31,b=69,m=50,h=5.75,cp="b235t"+K.id(),d=`M28 ${t}V${b}H43M63 ${t}V${b}M137 ${t}H122V${b}H137M122 ${m}H133`,nv=`M83 ${t}V${b}M102 ${t}V${b}`,nd=`M83 ${t}L102 ${b}`,
  ln=(dd,c,sw,cap,x="")=>`<path d="${dd}" style="fill:none;stroke:${c};stroke-width:${sw};stroke-linecap:${cap};stroke-linejoin:miter;stroke-miterlimit:10${x}"${c===BL?` class="${LIS}"`:""}/>`;
  return `<defs><clipPath id="${cp}"><rect x="77.250" y="${t-h}" width="30.5" height="${b-t+2*h}"/></clipPath></defs>`
  +page(ln(d+nv,INK,11.5,"square")+`<g clip-path="url(#${cp})">`+ln(`M77 ${t-12}L108 ${b+12}`,INK,12.5,"butt")+`</g>`
  +ln(d+nv+nd,BL,1.8,"butt",";--off:#FFFFFF"))};
}
