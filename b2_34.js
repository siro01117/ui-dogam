// B2 그림: st 3차 (색 · 효과 · 문서 · 스타일 사조 40개)
// 움직이는 것은 터미널 커서 하나 (class="b2x34 b2a-n34blink"). 필터는 선에도 먹게 userSpaceOnUse 로 잡는다.
{
const css=s=>{B2CSS+=s+"\n"};
css(`.b2x34{animation-duration:2.4s;animation-iteration-count:infinite;animation-fill-mode:both}`);
css(`.b2a-n34blink{animation-name:b2a-n34blink;animation-timing-function:steps(1,end)}@keyframes b2a-n34blink{0%,50%{opacity:1}25%,75%{opacity:0}}`);
const n2=K.n2, C=K.C, W="#fff";
const U=s=>"b234"+s+K.id();
const p=(d,st)=>`<path d="${d}" style="${st}"/>`;
const T=(x,y,s,{size=8,fill=C.ink,w=600,a="start",ff=""}={})=>`<text x="${n2(x)}" y="${n2(y)}" font-size="${size}" font-weight="${w}" text-anchor="${a}" style="fill:${fill}${ff?`;font-family:${ff}`:""}">${s}</text>`;
const tbar=(x,y,w,h=5,f="#3A4050")=>K.rect(x,y,w,h,{f,r:h/2});
const gbar=(x,y,w,h=4,f="#D3D8E3")=>K.rect(x,y,w,h,{f,r:h/2});
const clipR=(id,x,y,w,h,r)=>`<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath>`;
const lg=(id,stops,x2=0,y2=1)=>`<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}">${stops.map(([o,c,op])=>`<stop offset="${o}" style="stop-color:${c}${op!==undefined?`;stop-opacity:${op}`:""}"/>`).join("")}</linearGradient>`;
const FU=`filterUnits="userSpaceOnUse" x="0" y="0" width="160" height="100"`;
const pt=(cx,cy,r,a)=>[n2(cx+r*Math.sin(a*Math.PI/180)),n2(cy-r*Math.cos(a*Math.PI/180))];
const wedge=(cx,cy,r1,r2,a1,a2)=>{const [x1,y1]=pt(cx,cy,r2,a1),[x2,y2]=pt(cx,cy,r2,a2),[x3,y3]=pt(cx,cy,r1,a2),[x4,y4]=pt(cx,cy,r1,a1);
  return `M${x1} ${y1}A${r2} ${r2} 0 0 1 ${x2} ${y2}L${x3} ${y3}A${r1} ${r1} 0 0 0 ${x4} ${y4}Z`};
const wheel=(cx,cy,r1,r2,col)=>Array.from({length:12},(_,i)=>{const c=col(i);return c?p(wedge(cx,cy,r1,r2,i*30-15,i*30+15),`fill:${c};stroke:${c};stroke-width:.3`):""}).join("");
const hue=(i,s=80,l=57)=>`hsl(${i*30} ${s}% ${l}%)`;
const photo=(x,y,w,h,r,alt)=>{const g=U("pg"),c=U("pc");
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${lg(g,st)}${clipR(c,x,y,w,h,r)}</defs><g clip-path="url(#${c})">`+K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +p(`M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z`,`fill:${mt}`)+`</g>`};
// 중립 심볼 (잎 모양 + 구멍)
const sym=(cx,cy,r,f=C.blue,hole=W)=>p(`M${n2(cx-r)} ${n2(cy+r)}V${n2(cy)}a${r} ${r} 0 0 1 ${r}-${r}h${r}v${r}a${r} ${r} 0 0 1-${r} ${r}z`,`fill:${f}`)+K.circ(cx,cy,n2(r*.34),{f:hole});
const toggle=(x,y,w,h,on=true)=>K.rect(x,y,w,h,{f:on?C.blue:"#D5DAE4",r:h/2})+K.circ(on?x+w-h/2:x+h/2,y+h/2,n2(h/2-1.6),{f:W});

Object.assign(K.ICON,{
  q34sun:["M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z","M12 2.5v2.5","M12 19v2.5","M2.5 12H5","M19 12h2.5","M5.3 5.3l1.8 1.8","M16.9 16.9l1.8 1.8","M5.3 18.7l1.8-1.8","M16.9 7.1l1.8-1.8"],
  q34down:"M6 9l6 6 6-6",
  q34mail:["M4 6h16v12H4z","M4 7l8 6 8-6"],
  q34note:["M9 18V6l10-2v12","M9 18a2.5 2.5 0 1 1-2.5-2.5","M19 16a2.5 2.5 0 1 1-2.5-2.5"],
});

/* ───────── 화면 모드 · 색 ───────── */
TH2["라이트 모드"]=K=>K.card(20,10,120,80,14)
  +K.icon("q34sun",36,25,13,"#F2A93B",1.9)
  +K.rect(48,22.5,38,5,{f:C.ink,r:2.5})
  +K.rect(112,19,20,12,{f:"#D5DAE4",r:6})+K.circ(118,25,4.4,{f:W})
  +[38,62].map((y,i)=>K.rect(28,y,104,20,{f:"#F1F3F8",r:9})+K.circ(40,y+10,5,{f:i?"#C9CED8":C.blue})
    +K.rect(51,y+5,i?40:52,4,{f:"#3A4050",r:2})+K.rect(51,y+12,i?60:44,3.5,{f:"#C3C9D4",r:1.75})).join("");

// 검정 바탕 · 흰 테두리 · 노랑. 면 구분을 색이 아니라 굵은 선으로
TH2["고대비 모드"]=K=>K.card(20,10,120,80,10,"#000")
  +T(30,29.5,"알림",{size:11,fill:W,w:800})
  +K.rect(108,19,24,13,{s:W,sw:1.6,r:6.5})+K.circ(125,25.5,4,{f:"#FFE600"})
  +K.rect(29,38,102,18,{s:W,sw:1.6,r:4})+K.rect(36,44.5,46,5,{f:W,r:1})+K.path("M120 43.5l4 3.5-4 3.5",{s:"#FFE600",sw:2})
  +K.rect(29,63,48,19,{f:"#FFE600",r:4})+T(53,76,"확인",{size:9,fill:"#000",w:800,a:"middle"})
  +K.rect(83,63,48,19,{s:W,sw:1.6,r:4})+T(107,76,"취소",{size:9,fill:W,w:800,a:"middle"});

// 색 견본 한 장 + 그 색이 그대로 쓰인 아이콘 · 버튼
TH2["브랜드 컬러"]=K=>K.card(18,12,124,76,14)
  +K.rect(27,20,50,60,{f:C.blue,r:8,fx:"url(#b2lift)"})+p("M27 60h50v12a8 8 0 0 1-8 8H35a8 8 0 0 1-8-8z","fill:#fff")+K.rect(27.25,20.25,49.5,59.5,{s:C.hair,sw:.5,r:8})
  +sym(52,40,9,W,C.blue)+tbar(33,65.5,24,4.5)+gbar(33,73,15,3)
  +K.rect(88,20,26,26,{f:C.blue,r:8})+sym(101,33,6,W,C.blue)
  +K.circ(126,27,6,{f:C.blue})+K.path("M123.2 27.2l2 2 3.6-4",{s:W,sw:1.5})+K.rect(120,39,12,3.5,{f:C.blue,r:1.75})
  +K.rect(88,54,46,16,{f:C.blue,r:8})+K.rect(100,60.25,22,3.5,{f:W,r:1.75})
  +K.rect(88,76,30,3.5,{f:C.blue,r:1.75,o:.35});

// 넓이 차이: 주색 넓게, 보조색 그다음, 강조색은 조금
TH2["프라이머리 · 세컨더리 · 액센트"]=K=>K.card(16,12,128,76,14)
  +K.rect(24,20,64,46,{f:C.blue,r:9})+K.rect(92,20,30,46,{f:"#27324F",r:9})+K.rect(126,20,10,46,{f:"#F2A93B",r:5})
  +T(56,79,"주색",{size:7.5,fill:C.sub,a:"middle"})+T(107,79,"보조",{size:7.5,fill:C.sub,a:"middle"})+T(130.5,79,"강조",{size:7.5,fill:C.sub,a:"middle"});

TH2["뉴트럴"]=K=>{const c=U("c"),g=["#FFFFFF","#F3F4F6","#E2E5EA","#C5CAD3","#9AA1AE","#6B7280","#3A4050","#12141A"];
  return K.card(16,12,128,76,14)+`<defs>${clipR(c,26,22,108,30,8)}</defs><g clip-path="url(#${c})">`+g.map((f,i)=>K.rect(26+i*13.5,22,13.6,30,{f})).join("")+`</g>`
  +K.rect(26,22,108,30,{s:C.line,sw:.7,r:8})
  +tbar(26,61,52,5,"#12141A")+gbar(26,70.5,70,4,"#9AA1AE")+gbar(26,78,44,4,"#C5CAD3")
  +K.rect(106,62,28,16,{f:"#3A4050",r:8})+K.rect(113,68.25,14,3.5,{f:W,r:1.75})};

TH2["색상환"]=K=>K.card(30,6,100,88,16)
  +wheel(80,50,23,37,i=>hue(i))+wheel(80,50,10,22,i=>hue(i,78,78));

// 왼쪽: 마주 보는 두 색, 오른쪽: 이웃한 세 색
TH2["보색 · 유사색"]=K=>{const dim=i=>hue(i,38,88);
  const one=(cx,sel)=>wheel(cx,42,12,23,i=>sel.includes(i)?"":dim(i))+wheel(cx,42,10,27,i=>sel.includes(i)?hue(i):"");
  return K.card(10,8,140,84,14)
  +one(46,[1,7])+K.line(...pt(46,42,8.5,30),...pt(46,42,8.5,210),{s:C.ink,sw:1.3})+K.circ(46,42,2,{f:C.ink})
  +one(114,[6,7,8])
  +T(46,84,"보색",{size:8,fill:C.ink,a:"middle"})+T(114,84,"유사색",{size:8,fill:C.ink,a:"middle"})};

TH2["색조 · 채도 · 명도"]=K=>{const a=U("h"),b=U("s"),c=U("b");
  const knob=(x,y,f)=>K.circ(x,y,6.6,{f:W,s:"rgba(47,60,120,.22)",sw:.8})+K.circ(x,y,4,{f});
  return K.card(14,12,132,76,14)
  +`<defs>${lg(a,[0,1,2,3,4,5,6].map(i=>[n2(i/6),`hsl(${i*60} 90% 58%)`]),1,0)}${lg(b,[[0,"#A3A8B3"],[1,C.blue]],1,0)}${lg(c,[[0,"#000"],[1,C.blue]],1,0)}</defs>`
  +[["색조",a,96.8,"hsl(216 90% 58%)"],["채도",b,116,C.blue],["명도",c,110,C.blue]].map(([s,g,x,f],i)=>{const y=30+i*20;
    return T(24,y+3,s,{size:8.5,fill:C.ink})+K.rect(50,y-4.5,78,9,{f:`url(#${g})`,r:4.5})+knob(x,y,f)}).join("")};

// 가운데가 원래 색. 왼쪽은 흰색을, 오른쪽은 검정을 섞은 단계
TH2["틴트 · 셰이드"]=K=>{const o=[["#fff",.78],["#fff",.54],["#fff",.28],null,["#000",.26],["#000",.5],["#000",.72]];
  return K.card(14,12,132,76,14)
  +o.map((v,i)=>{const x=22.1+i*16.8,m=i===3,y=m?21:26,h=m?44:34;
    return K.rect(x,y,15,h,{f:C.blue,r:5})+(v?K.rect(x,y,15,h,{f:v[0],r:5,o:v[1]}):"")}).join("")
  +K.circ(33,75.5,3.6,{f:W,s:C.mute,sw:.9})+T(40,78.2,"흰색",{size:7.5,fill:C.sub})
  +K.circ(101,75.5,3.6,{f:"#12141A"})+T(108,78.2,"검정",{size:7.5,fill:C.sub})};

// 원뿔: 분홍 바탕에 파랑 조각을 점점 진하게 돌려 얹는다
TH2["선형 · 방사 · 원뿔 그라데이션"]=K=>{const a=U("l"),b=U("r"),c=U("k"),PK="#FF9CC2";let cone="";
  for(let i=0;i<60;i++){const [x1,y1]=pt(122,43,30,i*6),[x2,y2]=pt(122,43,30,i*6+6.4);cone+=p(`M122 43L${x1} ${y1}L${x2} ${y2}Z`,`fill:${C.blue};opacity:${n2((i+.5)/60)}`)}
  return K.card(10,14,140,72,14)
  +`<defs>${lg(a,[[0,C.blue],[1,PK]],1,1)}<radialGradient id="${b}"><stop offset="0" style="stop-color:${PK}"/><stop offset="1" style="stop-color:${C.blue}"/></radialGradient>${clipR(c,103,24,38,38,9)}</defs>`
  +K.rect(19,24,38,38,{f:`url(#${a})`,r:9})+K.rect(61,24,38,38,{f:`url(#${b})`,r:9})
  +`<g clip-path="url(#${c})">`+K.rect(103,24,38,38,{f:PK})+cone+`</g>`
  +["선형","방사","원뿔"].map((s,i)=>T(38+i*42,76,s,{size:8,fill:C.sub,a:"middle"})).join("")};

// 뒤의 체크무늬가 얼마나 비치는지
TH2["불투명도"]=K=>{const c=U("c"),q=U("q");
  return K.card(16,12,128,76,14)
  +`<defs>${clipR(c,24,20,112,42,9)}<pattern id="${q}" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 0h4v4H0zM4 4h4v4H4z" style="fill:#D5DAE6"/></pattern></defs>`
  +`<g clip-path="url(#${c})">`+K.rect(24,20,112,42,{f:"#F5F6FA"})+K.rect(24,20,112,42,{f:`url(#${q})`})+`</g>`
  +[1,.7,.4,.15].map((o,i)=>K.rect(30.5+i*26,27,22,28,{f:C.blue,r:6,o})+T(41.5+i*26,77,Math.round(o*100)+"%",{size:7.5,fill:C.sub,a:"middle"})).join("")};

/* ───────── 효과 ───────── */
TH2["드롭 섀도"]=K=>{const f=U("f");
  return `<defs><filter id="${f}" ${FU}><feDropShadow dx="5" dy="9" stdDeviation="5" flood-color="#27336B" flood-opacity=".42"/></filter></defs>`
  +K.blk(16,8,128,84,14)
  +K.rect(50,16,60,56,{f:W,r:14,fx:`url(#${f})`})+tbar(60,30,28)+gbar(60,41,40)+gbar(60,50,30)};

TH2["이너 섀도"]=K=>{const f=U("f");
  return `<defs><filter id="${f}" ${FU}><feComponentTransfer in="SourceAlpha"><feFuncA type="table" tableValues="1 0"/></feComponentTransfer><feGaussianBlur stdDeviation="4.5"/><feOffset dx="4" dy="7" result="o"/><feFlood flood-color="#27336B" flood-opacity=".6"/><feComposite in2="o" operator="in"/><feComposite in2="SourceAlpha" operator="in" result="s"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="s"/></feMerge></filter></defs>`
  +K.blk(16,8,128,84,14)
  +K.rect(50,20,60,56,{f:"#EEF1FA",r:14,fx:`url(#${f})`})+K.rect(50,20,60,56,{s:"rgba(255,255,255,.9)",sw:.8,r:14})};

// 면은 비우고 둘레 선만. 오른쪽은 굵기 견본
TH2["스트로크"]=K=>K.card(14,12,132,76,14)
  +K.rect(27,25,50,50,{s:C.blue,sw:5,r:13})
  +K.line(94,30,132,30,{s:C.ink,sw:1})+K.line(94,44,132,44,{s:C.ink,sw:2.5})
  +K.rect(89,52,48,15,{f:C.soft,r:5})+K.line(95,59.5,131,59.5,{s:C.blue,sw:5})
  +`<line x1="94" y1="76" x2="132" y2="76" style="stroke:${C.ink};stroke-width:1.6" stroke-dasharray="4 3.2"/>`;

// 곱하기: 겹친 자리가 섞여 어두워진다
TH2["블렌드 모드"]=K=>K.card(22,8,116,84,14)
  +`<g style="isolation:isolate">`+[[68.5,31,"#22C7F2"],[91.5,31,"#FF4FA3"],[80,50,"#FFD60A"]].map(([x,y,f])=>`<circle cx="${x}" cy="${y}" r="18.5" style="fill:${f};mix-blend-mode:multiply"/>`).join("")+`</g>`
  +K.rect(55,74,50,13,{f:W,s:C.line,sw:.8,r:6.5})+T(62,83.4,"곱하기",{size:7.5,fill:C.ink})+K.icon("q34down",96,80.5,8,C.sub,1.8);

// 왼쪽 절반은 깨끗한 면, 오른쪽 절반은 잔점이 깔린 면
TH2["노이즈"]=K=>{const c=U("c"),f=U("f"),g=U("g");
  const nz=(id,seed,v)=>`<filter id="${id}" ${FU}><feTurbulence type="fractalNoise" baseFrequency="1.3" numOctaves="2" seed="${seed}" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 ${v}  0 0 0 0 ${v}  0 0 0 0 ${v}  0 0 0 2.6 -1.2"/><feComposite in2="SourceGraphic" operator="in"/></filter>`;
  return `<defs>${clipR(c,28,8,104,84,12)}${nz(f,4,0)}${nz(g,11,1)}</defs>`
  +K.rect(28,8,104,84,{f:C.blue,r:12,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})">`+K.rect(80,8,52,84,{f:"#000",fx:`url(#${f})`,o:.55})+K.rect(80,8,52,84,{f:W,fx:`url(#${g})`,o:.5})+`</g>`
  +K.line(80,8,80,92,{s:W,sw:1.2,o:.9})
  +K.rect(40,44,28,5,{f:W,r:2.5,o:.85})+K.rect(92,44,28,5,{f:W,r:2.5,o:.85})};

TH2["패턴 배경"]=K=>{const c=U("c"),q=U("q");
  return K.card(18,8,124,84,14)
  +`<defs>${clipR(c,18,8,124,84,14)}<pattern id="${q}" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="2" style="fill:${C.blue};opacity:.3"/><circle cx="10.5" cy="10.5" r="2" style="fill:${C.blue};opacity:.3"/><path d="M9 3.5h3M10.5 2v3M2 10.5h3M3.5 9v3" style="fill:none;stroke:${C.blue};stroke-width:.8;opacity:.3"/></pattern></defs>`
  +`<g clip-path="url(#${c})">`+K.rect(18,8,124,84,{f:C.soft})+K.rect(18,8,124,84,{f:`url(#${q})`})+`</g>`
  +K.card(46,31,68,38,10)+tbar(55,41,34)+gbar(55,51,48)+K.rect(55,59,24,5,{f:C.blue,r:2.5})};

// 네모(점선)와 원(점선) 사이에 앉는 모양
TH2["스쿼클"]=K=>{let d="";const a=33,n=4.6;
  for(let i=0;i<96;i++){const t=i/96*2*Math.PI,cx=Math.cos(t),sy=Math.sin(t);
    d+=(i?"L":"M")+n2(80+a*Math.sign(cx)*Math.pow(Math.abs(cx),2/n))+" "+n2(50+a*Math.sign(sy)*Math.pow(Math.abs(sy),2/n))}
  return `<g filter="url(#b2lift)">`+p(d+"Z",`fill:${C.blue}`)+`</g>`
  +`<rect x="47" y="17" width="66" height="66" style="fill:none;stroke:${C.ink};stroke-width:.9;opacity:.55" stroke-dasharray="2.5 2.5"/>`
  +`<circle cx="80" cy="50" r="33" style="fill:none;stroke:#fff;stroke-width:.9;opacity:.75" stroke-dasharray="2.5 2.5"/>`
  +K.icon("sparkle",80,50,26,W,2)};

/* ───────── 문서 · 체계 ───────── */
TH2["무드보드"]=K=>{const q=U("q");
  const pin=(x,y)=>K.circ(x,y,1.8,{f:C.red});
  return K.card(12,6,136,88,12,"#F7F4EE")
  +`<defs><pattern id="${q}" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><path d="M0 1.5h6" style="stroke:#fff;stroke-width:1.6;opacity:.75"/></pattern></defs>`
  +`<g transform="rotate(-3 43 31)">`+K.rect(21,14,44,34,{f:W,r:3,fx:"url(#b2lift)"})+photo(23,16,40,30,2,true)+`</g>`+pin(43,15)
  +K.rect(71,15,40,13,{f:W,r:3,fx:"url(#b2lift)"})+["#E9B8A2","#D98C6A","#8FA387","#3D4A40"].map((f,i)=>K.rect(73+i*9,17,9,9,{f})).join("")
  +`<g transform="rotate(2 91 46)">`+K.rect(71,34,40,25,{f:"#D98C6A",r:3,fx:"url(#b2lift)"})+K.rect(71,34,40,25,{f:`url(#${q})`,r:3})+`</g>`+pin(91,35)
  +K.rect(117,14,23,25,{f:W,r:3,fx:"url(#b2lift)"})+T(128.5,32,"Aa",{size:13,fill:"#3D4A40",w:700,a:"middle",ff:"Georgia,'Times New Roman',serif"})
  +K.circ(128.5,53,9.5,{f:"#8FA387"})+p("M123.5 57.5c0-6 4-9.5 10-9.5 0 6-4 9.5-10 9.5z","fill:#F7F4EE;opacity:.9")
  +`<g transform="rotate(4 39 70)">`+K.rect(23,55,32,30,{f:W,r:3,fx:"url(#b2lift)"})+photo(25,57,28,26,2)+`</g>`+pin(39,56)
  +K.rect(63,66,22,20,{f:"#3D4A40",r:3,fx:"url(#b2lift)"})+K.circ(74,76,5,{s:"#E9B8A2",sw:1.4})
  +K.rect(93,69,44,15,{f:W,r:7.5,fx:"url(#b2lift)"})+T(115,79.3,"따뜻한",{size:8,fill:"#8A5A44",w:700,a:"middle"})};

// 문서 한 장: 색 · 글자 · 버튼 규칙
TH2["스타일 가이드"]=K=>K.card(26,5,108,90,10)
  +tbar(36,13,30,4.5)
  +[C.blue,"#12141A","#9AA1AE","#E2E6EC","#F2A93B"].map((f,i)=>K.circ(42+i*16,30,6,{f})).join("")
  +K.line(36,41,124,41,{s:C.line,sw:.7})
  +T(36,63,"Aa",{size:18,fill:C.ink,w:800})+tbar(68,47.5,54,6.5)+tbar(68,58,40,4.5,"#6B7280")+gbar(68,66,48,3.5)
  +K.line(36,73,124,73,{s:C.line,sw:.7})
  +K.rect(36,78,36,11,{f:C.blue,r:5.5})+K.rect(46,82,16,3,{f:W,r:1.5})
  +K.rect(77,78.6,36,9.8,{s:C.blue,sw:1.2,r:5})+K.rect(87,82,16,3,{f:C.blue,r:1.5});

// 토큰 → 부품 → 화면이 한 줄로 이어진 체계
TH2["디자인 시스템"]=K=>K.line(46,46,62,46,{s:C.blue,sw:1.4})+K.line(98,46,114,46,{s:C.blue,sw:1.4})
  +K.card(8,18,40,56,10)+[C.blue,"#12141A","#F2A93B"].map((f,i)=>K.circ(18+i*10,30,4,{f})).join("")
  +T(14,51,"Aa",{size:12,fill:C.ink,w:800})+[[14,4],[21,8],[32,12]].map(([x,w])=>K.rect(x,58,w,8,{f:C.blue,r:1.5,o:.3})).join("")
  +K.card(60,18,40,56,10)+K.rect(66,25,28,11,{f:C.blue,r:5.5})+K.rect(73,29,14,3,{f:W,r:1.5})
  +K.rect(66.5,41.5,27,10,{f:W,s:"#C5CAD3",sw:1,r:4})+gbar(70,45,12,3)
  +toggle(66,58,18,10)+K.rect(88,58.5,9,9,{f:C.blue,r:2.5})+K.path("M90.3 63.2l1.6 1.6 2.9-3.3",{s:W,sw:1.3})
  +K.card(112,18,40,56,10)+tbar(118,25,16,4)+K.rect(118,33,28,18,{f:C.soft,r:5})+gbar(118,55,24,3)+K.rect(118,62,28,7,{f:C.blue,r:3.5})
  +K.circ(54,46,2.6,{f:C.blue})+K.circ(106,46,2.6,{f:C.blue})
  +["토큰","부품","화면"].map((s,i)=>T(28+i*52,87,s,{size:8,fill:C.sub,a:"middle"})).join("");

// 왼쪽 목록에서 고르고, 오른쪽 칸마다 부품이 하나씩
TH2["컴포넌트 라이브러리"]=K=>{const cell=(i,inner)=>{const x=54+(i%3)*29.5,y=15+Math.floor(i/3)*36;return K.rect(x,y,26,32,{f:"#F3F5FA",r:7})+inner(x+13,y+16)};
  return K.card(12,8,136,84,12)
  +gbar(20,18,18,4,"#3A4050")+K.rect(18,26,24,10,{f:C.soft,r:5})+K.rect(22,29.25,14,3.5,{f:C.blue,r:1.75})+[41,51,61,71].map((y,i)=>gbar(22,y,[16,12,18,13][i],3.5)).join("")
  +K.line(47.5,8.5,47.5,91.5,{s:C.line,sw:.7})
  +cell(0,(x,y)=>K.rect(x-9,y-4.5,18,9,{f:C.blue,r:4.5})+K.rect(x-5,y-1.25,10,2.5,{f:W,r:1.25}))
  +cell(1,(x,y)=>toggle(x-8.5,y-5,17,10))
  +cell(2,(x,y)=>K.rect(x-5,y-5,10,10,{f:C.blue,r:3})+K.path(`M${x-2.6} ${y+.2}l1.9 1.9 3.3-3.8`,{s:W,sw:1.4}))
  +cell(3,(x,y)=>K.rect(x-10,y-4.5,20,9,{f:W,s:"#C5CAD3",sw:1,r:3.5})+K.line(x-7,y-2,x-7,y+2,{s:C.blue,sw:1}))
  +cell(4,(x,y)=>K.rect(x-10,y-4.5,20,9,{f:W,s:C.blue,sw:1,r:4.5})+K.circ(x-5.5,y,1.8,{f:C.blue})+K.rect(x-2,y-1.25,8,2.5,{f:C.blue,r:1.25}))
  +cell(5,(x,y)=>K.circ(x,y,6.5,{f:"#C9D6FF"})+K.circ(x+5,y-5,3,{f:C.red,s:"#F3F5FA",sw:1}))};

// 바로 쓸 수 있는 화면 여러 장 + 낱개 부품 한 묶음
TH2["UI 키트"]=K=>{const scr=(x,y,w,h,v)=>K.rect(x,y,w,h,{f:W,r:7,fx:"url(#b2lift)"})+K.rect(x+.25,y+.25,w-.5,h-.5,{s:C.hair,sw:.5,r:7})
    +tbar(x+5,y+7,w*.45,3.5)+(v?K.rect(x+5,y+15,w-10,h*.34,{f:v===1?"#DCE6FF":"#FBE1EB",r:4})+gbar(x+5,y+h*.34+20,w-14,3)+gbar(x+5,y+h*.34+26,w-20,3)
      :[0,1,2].map(i=>K.circ(x+8,y+19+i*10,3,{f:"#C9D6FF"})+gbar(x+14,y+17.5+i*10,w-22,3)).join(""))
    +K.rect(x+5,y+h-12,w-10,7,{f:C.blue,r:3.5});
  return `<g transform="rotate(-9 42 48)">`+scr(25,16,34,60,2)+`</g>`+`<g transform="rotate(9 118 48)">`+scr(101,16,34,60,0)+`</g>`+scr(61,8,38,68,1)
  +K.rect(36,82,26,10,{f:C.blue,r:5,fx:"url(#b2lift)"})+K.rect(43,85.5,12,3,{f:W,r:1.5})
  +K.rect(68,82,24,10,{f:W,s:C.blue,sw:1,r:5})+K.rect(74,85.5,12,3,{f:C.blue,r:1.5})
  +toggle(98,82,18,10)+K.circ(126,87,5,{f:"#C9D6FF"})};

// 로고 둘레 여백 규칙 + 색 + 해도 되는 예 · 안 되는 예
TH2["브랜드 가이드"]=K=>{const logo=(x,y,f=C.blue,g="#12141A")=>sym(x,y,6.5,f)+p(`M${x+10} ${y-3}h20v6h-20z`,`fill:${g}`);
  return K.card(12,8,136,84,12)
  +`<rect x="22" y="18" width="62" height="42" rx="3" style="fill:${C.soft};stroke:${C.blue};stroke-width:1" stroke-dasharray="3 2.5"/>`
  +K.rect(33,29,40,20,{f:W,r:1})+logo(42.5,39)
  +K.path("M27.5 26v6M25.5 29h4M53 20.5v6M51 23.5h4",{s:C.blue,sw:1})
  +[C.blue,"#12141A","#9AA1AE"].map((f,i)=>K.rect(22+i*14,68,11,14,{f,r:3})).join("")+K.rect(64.4,68.4,10.2,13.2,{f:W,s:C.line,sw:.8,r:3})
  +K.rect(94,16,44,32,{f:"#F3F5FA",r:6})+`<g transform="translate(101 32) scale(.72)">`+logo(6.5,0)+`</g>`
  +K.circ(132,21,5.5,{f:C.green})+K.path("M129.4 21.2l1.9 1.9 3.4-3.8",{s:W,sw:1.4})
  +K.rect(94,52,44,32,{f:"#F3F5FA",r:6})+`<g transform="translate(99 69) rotate(-12) scale(1.02 .5)">`+logo(6.5,0,"#F2A93B","#E5484D")+`</g>`
  +K.circ(132,57,5.5,{f:C.red})+K.path("M129.8 54.8l4.4 4.4M134.2 54.8l-4.4 4.4",{s:W,sw:1.4})};

// 그림(심볼) + 이름 글자(워드마크)
TH2["로고"]=K=>K.card(14,14,132,72,14)
  +sym(46,43,14)
  +T(72,52.5,"도감",{size:25,fill:C.ink,w:800})
  +K.path("M32 65v3h28v-3",{s:C.blue,sw:1.1})+K.path("M72 65v3h47v-3",{s:C.blue,sw:1.1})
  +T(46,78.5,"심볼",{size:7.5,fill:C.sub,a:"middle"})+T(95.5,78.5,"워드마크",{size:7.5,fill:C.sub,a:"middle"});

// 같은 내용, 다른 분위기: 발랄 vs 점잖음
TH2["톤 앤 매너"]=K=>K.card(9,13,68,74,18,"#FFF1CF")
  +K.circ(43,35,13,{f:"#FF9EB5"})+K.circ(38.5,32.5,1.6,{f:"#7A2140"})+K.circ(47.5,32.5,1.6,{f:"#7A2140"})+K.path("M37.5 38q5.5 5.5 11 0",{s:"#7A2140",sw:1.6,f:"none"})
  +T(43,63.5,"반가워요!",{size:9.5,fill:"#E2557B",w:800,a:"middle"})
  +K.rect(24,70,38,10,{f:"#FF7A9C",r:5})+K.rect(35,73.5,16,3,{f:W,r:1.5})
  +K.card(83,13,68,74,2,"#151B2E")
  +p("M117 23l11 12-11 12-11-12z","fill:none;stroke:#C8A96A;stroke-width:1.1")+p("M117 29l5.5 6-5.5 6-5.5-6z","fill:#C8A96A")
  +T(117,63.5,"환영합니다",{size:9,fill:"#EDE6D6",w:500,a:"middle",ff:"'Noto Serif KR',Batang,'Nanum Myeongjo',serif"})
  +K.rect(98,70.5,38,9.5,{s:"#C8A96A",sw:.9})+K.rect(109,74,16,2.2,{f:"#C8A96A"});

// 아이콘을 맞춰 그리는 안내선: 원 · 정사각 · 세로 · 가로 네모
TH2["아이콘 키라인"]=K=>{const o={s:C.blue,sw:.8,o:.75};let g="";for(let i=1;i<8;i++)g+=K.line(40+i*10,10,40+i*10,90,{s:C.line,sw:.5})+K.line(40,10+i*10,120,10+i*10,{s:C.line,sw:.5});
  return K.card(34,4,92,92,12)+g
  +K.rect(40,10,80,80,{s:C.blue,sw:.8,o:.75})
  +K.circ(80,50,34,o)+K.circ(80,50,14,o)+K.rect(50,20,60,60,{...o,r:3})+K.rect(54,14,52,72,{...o,r:3})+K.rect(44,24,72,52,{...o,r:3})
  +K.line(40,10,120,90,o)+K.line(120,10,40,90,o)+K.line(80,10,80,90,o)+K.line(40,50,120,50,o)
  +K.icon("bell",80,50,62,C.ink,2.6)};

/* ───────── 플랫폼 체계 ───────── */
// 큰 제목 + 둥근 묶음 목록 + 아래 탭 바 + 홈 표시 줄
TH2["HIG"]=K=>{const c=U("c");
  return K.card(36,3,88,94,15,"#F2F2F7")
  +T(45,23,"설정",{size:13,fill:"#000",w:800})
  +K.rect(45,28,70,10,{f:"#E3E3E9",r:5})+K.icon("search",51.5,33,6.5,"#8E8E93",2)+K.rect(57,31.4,20,3.2,{f:"#B4B4BB",r:1.6})
  +K.rect(45,43,70,31,{f:W,r:8})+K.line(60,58.5,115,58.5,{s:"#DADAE0",sw:.6})
  +K.rect(49.5,46.5,8.5,8.5,{f:"#FF9500",r:2.4})+K.rect(62,49,24,3.6,{f:"#1C1C1E",r:1.8})+K.rect(96,45.6,15.5,10,{f:"#34C759",r:5})+K.circ(106.5,50.6,3.9,{f:W})
  +K.rect(49.5,62,8.5,8.5,{f:"#007AFF",r:2.4})+K.rect(62,64.5,30,3.6,{f:"#1C1C1E",r:1.8})+K.path("M108 63.6l2.8 2.7-2.8 2.7",{s:"#C4C4CA",sw:1.4})
  +`<defs>${clipR(c,36,3,88,94,15)}</defs><g clip-path="url(#${c})">`+K.rect(36,78,88,19,{f:W,o:.92})+`</g>`+K.line(36.5,78,123.5,78,{s:"#D8D8DE",sw:.5})
  +K.icon("home",56,84.5,9,"#007AFF",1.9)+K.icon("search",80,84.5,9,"#8E8E93",1.9)+K.icon("user",104,84.5,9,"#8E8E93",1.9)
  +K.rect(66,92.2,28,2.2,{f:"#000",r:1.1})};

// 바탕이 비치는 아크릴 옆 판 + 선택 줄의 파란 알약 + 창 단추
TH2["플루언트 디자인"]=K=>{const c=U("c"),b=U("b");
  return `<defs>${clipR(c,10,7,140,86,12)}<filter id="${b}" ${FU}><feGaussianBlur stdDeviation="8"/></filter></defs>`
  +K.rect(10,7,140,86,{f:"#DCE9FB",r:12,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})"><g filter="url(#${b})">`+K.circ(34,32,26,{f:"#2F7BFF"})+K.circ(60,80,24,{f:"#8A5CF6"})+K.circ(120,22,22,{f:"#28C3D6"})+K.circ(136,84,20,{f:"#FF8FC0"})+`</g></g>`
  +K.rect(22,17,116,68,{f:W,r:7,o:.62,fx:"url(#b2lift)"})
  +p("M62 17h69a7 7 0 0 1 7 7v54a7 7 0 0 1-7 7H62z","fill:#FBFCFE")
  +K.rect(22.25,17.25,115.5,67.5,{s:"rgba(255,255,255,.9)",sw:.6,r:7})
  +K.path("M111.5 24h4",{s:"#3A4050",sw:.9})+K.rect(120.5,21.6,4.6,4.6,{s:"#3A4050",sw:.9})+K.path("M129.8 21.8l4.4 4.4M134.2 21.8l-4.4 4.4",{s:"#3A4050",sw:.9})
  +K.rect(26,34,32,11,{f:W,r:3.5,o:.75})+K.rect(26.6,36.5,2.2,6,{f:C.blue,r:1.1})
  +[25,39.5,53,66].map((y,i)=>K.rect(32,y-2.6+ (i?0:0),5.2,5.2,{f:i===1?C.blue:"#5B6478",r:1.4,o:i===1?1:.75})+K.rect(40.5,y-1.6,[13,14,11,15][i],3.2,{f:"#2A3040",r:1.6,o:i===1?1:.7})).join("")
  +tbar(70,31.5,32,5,"#1F2430")
  +[0,1].map(i=>K.rect(70+i*31,43,27,33,{f:W,s:"#E6E9F0",sw:.7,r:4})+K.rect(74+i*31,47,19,12,{f:i?"#E8E1FB":"#DCE9FF",r:2.5})+gbar(74+i*31,63,16,3)+gbar(74+i*31,69,11,3)).join("")};

/* ───────── 스타일 사조 ───────── */
// 하늘 · 풀밭 · 물방울 + 유리알 버튼
TH2["프루티거 에어로"]=K=>{const c=U("c"),s=U("s"),h=U("h"),b=U("b"),g=U("g"),r=U("r");
  const bub=(x,y,R)=>K.circ(x,y,R,{f:"rgba(255,255,255,.2)",s:"rgba(255,255,255,.85)",sw:.8})+p(`M${n2(x-R*.6)} ${n2(y-R*.2)}a${n2(R*.62)} ${n2(R*.62)} 0 0 1 ${n2(R*.5)}-${n2(R*.5)}`,"fill:none;stroke:#fff;stroke-width:1.3;opacity:.95");
  return `<defs>${clipR(c,22,6,116,88,14)}${lg(s,[[0,"#1C8FEA"],[.6,"#7FD2FB"],[1,"#D9F6FF"]])}${lg(h,[[0,"#A6E85C"],[1,"#2E9E3A"]])}${lg(b,[[0,"#8FE0FF"],[.5,"#1B9CF0"],[1,"#0A6ED1"]])}${lg(g,[[0,"#fff",.9],[1,"#fff",.15]])}<radialGradient id="${r}"><stop offset="0" style="stop-color:#fff;stop-opacity:.95"/><stop offset="1" style="stop-color:#fff;stop-opacity:0"/></radialGradient></defs>`
  +K.rect(22,6,116,88,{f:`url(#${s})`,r:14,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})">`+K.circ(40,20,30,{f:`url(#${r})`})
  +p("M22 80Q56 58 92 74T138 66V94H22z",`fill:url(#${h})`)+p("M22 86Q70 70 138 82V94H22z","fill:#fff;opacity:.18")
  +bub(118,26,9)+bub(100,14,4.5)+bub(36,56,6)+bub(126,48,3.5)+`</g>`
  +K.rect(46,34,68,26,{f:`url(#${b})`,s:"#fff",sw:1.2,r:13})
  +K.rect(50,36,60,11,{f:`url(#${g})`,r:6})
  +T(80,52,"시작",{size:11,fill:W,w:800,a:"middle"})};

// 각진 단색 타일 + 흰 아이콘 + 가는 큰 글자
TH2["메트로 UI"]=K=>{const t=(x,y,w,f,ic,extra="")=>K.rect(x,y,w,26,{f})+K.icon(ic,w>30?x+15:x+13,y+13,13,W,1.7)+extra;
  return K.card(14,6,132,88,2,"#1B1B1B")
  +T(23,23,"시작",{size:13,fill:W,w:300})
  +t(23,30,55,"#2D89EF","q34mail",T(71,50,"3",{size:11,fill:W,w:300,a:"end"}))+t(81,30,26,"#00A300","user")+t(110,30,26,"#E3A21A","image")
  +t(23,59,26,"#9F00A7","q34note")+t(52,59,26,"#EE1111","heart")+t(81,59,55,"#00ABA9","calendar",K.rect(110,66,18,3,{f:W,o:.9})+K.rect(110,73,12,3,{f:W,o:.6}))};

// 머리는 작고 팔다리는 길고 굵은, 납작한 사람
TH2["코퍼레이트 멤피스"]=K=>{const SK="#8E6CEF",L=(d,s,w)=>p(d,`fill:none;stroke:${s};stroke-width:${w}`);
  return K.card(20,5,120,90,14,"#FFF7EA")
  +p("M42 54c-6-22 14-40 38-36s46 10 40 36-28 34-48 32-26-16-30-32z","fill:#FFDCCB")
  +K.circ(40,24,5,{f:"#FFC83D"})+L("M118 70q4-4 8 0t8 0","#3D5AFE",1.8)
  +p("M36 88c-1-10 1-17 5-22 2 6 2 12 0 22zM40 88c3-8 8-12 13-13-1 6-5 11-13 13zM36 88c-4-6-8-9-12-9 1 5 5 8 12 9z","fill:#2BB673")
  +L("M77 58Q64 70 62 82","#3D5AFE",11.5)+L("M87 58Q100 66 102 82","#3D5AFE",11.5)
  +p("M50 88.5a5 5 0 0 1 5-5h12a3 3 0 0 1 3 3v2zM94 88.5v-2a3 3 0 0 1 3-3h12a5 5 0 0 1 5 5z","fill:#1E1B3A")
  +L("M73 39Q60 44 57 57",SK,7)+K.circ(57,58.5,4.2,{f:SK})
  +p("M72 36q10-4 20 0l-2 23H74z","fill:#FF7A45;stroke:#FF7A45;stroke-width:4")
  +L("M91 39Q104 37 110 23",SK,7)+K.circ(110.5,21.5,4.2,{f:SK})
  +K.rect(102,7,26,16,{f:W,r:4,fx:"url(#b2lift)"})+K.rect(106,11,12,3,{f:"#3D5AFE",r:1.5})+K.rect(106,16.5,18,2.6,{f:"#D3D8E3",r:1.3})
  +L("M82 29v5",SK,4.5)+K.circ(82,24.5,5.6,{f:SK})+p("M76.2 24.5a5.8 5.8 0 0 1 11.6-1c-3 .6-5.4-.4-6.6-2.4-1 1.8-2.6 3-5 3.4z","fill:#1E1B3A")+K.circ(88,18.5,2.6,{f:"#1E1B3A"})};

// 닳고 긁히고 얼룩진 면
TH2["그런지"]=K=>{const c=U("c"),f=U("f"),d=U("d");
  return `<defs>${clipR(c,26,8,108,84,3)}<filter id="${f}" ${FU}><feTurbulence type="fractalNoise" baseFrequency=".11" numOctaves="2" seed="3" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="3" xChannelSelector="R" yChannelSelector="G" result="d"/><feTurbulence type="fractalNoise" baseFrequency=".55" numOctaves="3" seed="9" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -9 5.9" result="m"/><feComposite in="d" in2="m" operator="in"/></filter>`
  +`<filter id="${d}" ${FU}><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="5" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 .92  0 0 0 0 .88  0 0 0 0 .78  0 0 0 4 -2.35"/><feComposite in2="SourceGraphic" operator="in"/></filter></defs>`
  +K.rect(26,8,108,84,{f:"#25211D",r:3,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})">`+K.rect(26,8,108,84,{f:"#000",fx:`url(#${d})`,o:.5})
  +`<g filter="url(#${f})">`+p("M30 66L128 50L130 70L34 84z","fill:#B3261E")+T(80,60,"거친",{size:40,fill:"#E9DFCA",w:900,a:"middle"})+K.rect(34,16,92,2.5,{f:"#E9DFCA"})+`</g>`
  +p("M40 12l18 80M96 8l-8 30M118 40l8 52M30 44l22 6","fill:none;stroke:#E9DFCA;stroke-width:.5;opacity:.45")
  +K.circ(118,24,3,{f:"#E9DFCA",o:.5})+K.circ(123,29,1.2,{f:"#E9DFCA",o:.5})+K.circ(112,19,.9,{f:"#E9DFCA",o:.5})+`</g>`};

// 각도 따라 무지갯빛이 도는 은박
TH2["홀로그래픽"]=K=>{const a=U("a"),b=U("b"),c=U("c");
  return `<defs>${lg(a,[[0,"#FFB0E4"],[.2,"#AEEBFF"],[.4,"#FFF6A8"],[.6,"#BDB0FF"],[.8,"#9BF3CF"],[1,"#FFB0E4"]],1,1)}${lg(b,[[0,"#fff",0],[.3,"#fff",.75],[.42,"#fff",0],[.62,"#fff",0],[.74,"#fff",.6],[.9,"#fff",0]],1,.35)}${clipR(c,24,14,112,72,12)}</defs>`
  +K.rect(24,14,112,72,{f:`url(#${a})`,r:12,fx:"url(#b2lift)"})+K.rect(24,14,112,72,{f:`url(#${b})`,r:12})
  +`<g clip-path="url(#${c})">`+p("M24 70Q70 40 136 62V86H24z","fill:#C9B8FF;opacity:.35")+p("M24 34Q80 4 136 30V14H24z","fill:#9FF0FF;opacity:.35")+`</g>`
  +K.rect(24.4,14.4,111.2,71.2,{s:"rgba(255,255,255,.9)",sw:.8,r:12})
  +K.icon("sparkle",46,36,22,W,2)+K.rect(36,62,44,5,{f:W,r:2.5,o:.9})+K.rect(36,72,28,4,{f:W,r:2,o:.7})
  +K.circ(118,68,8,{f:"rgba(255,255,255,.35)",s:W,sw:1})};

// 거울 같은 금속: 밝은 하늘 · 어두운 지평선 띠 · 다시 밝은 바닥
TH2["크롬"]=K=>{const g=U("g"),h=U("h");const st=[[0,"#FFFFFF"],[.3,"#B9C8E8"],[.49,"#5C6E9C"],[.51,"#10162B"],[.62,"#6F83B6"],[.86,"#EEF3FD"],[1,"#8D9BBE"]];
  return `<defs>${lg(g,st)}${lg(h,st.map(([o,c2])=>[1-o,c2]).reverse())}</defs>`
  +K.card(18,8,124,84,14,"#0E1016")
  +K.circ(54,48,23,{f:`url(#${g})`})+p("M39 38a17 17 0 0 1 14-10","fill:none;stroke:#fff;stroke-width:2.2;opacity:.9")
  +p("M106 14l4.6 13.4L124 32l-13.4 4.6L106 50l-4.6-13.4L88 32l13.4-4.6z",`fill:url(#${g});stroke:#DCE5F7;stroke-width:.6`)
  +K.rect(84,60,46,18,{f:`url(#${g})`,r:9})+K.rect(90,65.5,34,7,{f:"#0E1016",r:3.5})+K.rect(90,65.5,34,7,{s:`url(#${h})`,sw:1.2,r:3.5})};

// 어두운 바탕 + 빛이 번지는 테두리
TH2["네온 UI"]=K=>{const f=U("f"),PK="#FF3DCB",CY="#22E6FF";
  return `<defs><filter id="${f}" ${FU}><feGaussianBlur stdDeviation="2.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`
  +K.card(18,8,124,84,14,"#0A0A14")
  +`<g filter="url(#${f})">`+K.rect(32,20,96,24,{s:PK,sw:1.8,r:12})+T(80,36.2,"시작",{size:11,fill:"#FFC9F1",w:700,a:"middle"})
  +K.rect(32,56,32,17,{s:CY,sw:1.8,r:8.5})+K.circ(55.5,64.5,5,{f:CY})
  +K.line(76,64.5,128,64.5,{s:"#2A2A45",sw:2.4})+K.line(76,64.5,108,64.5,{s:CY,sw:2.4})+K.circ(108,64.5,4.6,{f:"#0A0A14",s:CY,sw:1.8})+`</g>`
  +K.rect(32,81,40,3,{f:"#2A2A45",r:1.5})};

// 검은 창 · 초록 고정폭 글자 · 네모 커서
TH2["터미널 스타일"]=K=>{const M="Consolas,'D2Coding','Courier New',monospace",G="#39F07A";
  return K.card(16,10,128,80,9,"#0B0E0C")
  +p("M16 26V19a9 9 0 0 1 9-9h110a9 9 0 0 1 9 9v7z","fill:#1B211D")
  +K.circ(27,18,2.6,{f:"#FF5F57"})+K.circ(35.5,18,2.6,{f:"#FEBC2E"})+K.circ(44,18,2.6,{f:"#28C840"})
  +T(26,43,"$ npm start",{size:10,fill:G,w:500,ff:M})
  +T(26,58,"&gt; ready 0.4s",{size:10,fill:"#1F9E52",w:500,ff:M})
  +T(26,73,"$",{size:10,fill:G,w:500,ff:M})
  +`<g class="b2x34 b2a-n34blink">`+K.rect(38,64.5,6,10.5,{f:G})+`</g>`};

// 종이 결이 올록볼록 보이는 면
TH2["종이 질감"]=K=>{const f=U("f"),c=U("c"),INK="#6A563C";
  return `<defs><filter id="${f}" ${FU}><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="4" seed="8" result="n"/><feDiffuseLighting in="n" lighting-color="#FFF6E2" surfaceScale=".9" result="l"><feDistantLight azimuth="50" elevation="58"/></feDiffuseLighting><feComposite in="l" in2="SourceGraphic" operator="in"/></filter>${clipR(c,30,8,100,84,2)}</defs>`
  +K.rect(30,8,100,84,{f:"#F3E8D0",r:2,fx:"url(#b2lift)"})+K.rect(30,8,100,84,{f:"#F3E8D0",r:2,fx:`url(#${f})`})
  +`<g clip-path="url(#${c})">`+p("M30 50h100","fill:none;stroke:#fff;stroke-width:.8;opacity:.6")+p("M30 50.8h100","fill:none;stroke:#8A7350;stroke-width:.5;opacity:.25")
  +p("M112 92l18-18v18z","fill:#D9C9A6")+p("M112 92l18-18-13 3z","fill:#FBF4E2")+`</g>`
  +K.rect(42,20,40,5,{f:INK,r:1,o:.8})+[32,40,60,68].map((y,i)=>K.rect(42,y,[76,58,76,44][i],3,{f:INK,r:1,o:.45})).join("")};

// 그림 둘레에 흰 테두리 + 그림자 = 떼어 붙인 느낌
TH2["스티커 스타일"]=K=>{const f=U("f");
  const stk=(n,cx,cy,size,rot,col)=>{const d=[].concat(K.ICON[n])[0],s=size/24;
    return `<g transform="rotate(${rot} ${cx} ${cy}) translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${d}" style="fill:#fff;stroke:#fff;stroke-width:${n2(7/s)}"/><path d="${d}" style="fill:${col};stroke:${col};stroke-width:${n2(1.2/s)}"/></g>`};
  return `<defs><filter id="${f}" ${FU}><feDropShadow dx="0" dy="1.8" stdDeviation="1.6" flood-color="#1E2A66" flood-opacity=".38"/></filter></defs>`
  +K.rect(14,8,132,84,{f:"#C7D3F6",r:14})
  +`<g filter="url(#${f})">`+stk("heart",50,40,44,-12,"#FF5C7A")+`</g>`
  +`<g filter="url(#${f})">`+stk("star",110,36,42,10,"#FFC83D")+`</g>`
  +`<g filter="url(#${f})"><g transform="rotate(-6 84 70)">`+K.rect(60,58,48,24,{f:W,r:12})+K.rect(63.5,61.5,41,17,{f:C.blue,r:8.5})+T(84,74,"최고!",{size:10,fill:W,w:800,a:"middle"})+`</g></g>`};

// 회색 창 · 볼록한 테두리 · 파란 제목 줄 · 계단진 커서
TH2["레트로 픽셀 UI"]=K=>{const bev=(x,y,w,h,up=true)=>K.rect(x,y,w,h,{f:"#C0C0C0"})+p(`M${x} ${y+h}V${y}H${x+w}`,`fill:none;stroke:${up?"#fff":"#404040"};stroke-width:1.5;stroke-linecap:square`)+p(`M${x+w} ${y}V${y+h}H${x}`,`fill:none;stroke:${up?"#404040":"#fff"};stroke-width:1.5;stroke-linecap:square`);
  const heart=[".XX.XX.","XXXXXXX","XXXXXXX",".XXXXX.","..XXX..","...X..."].map((r,j)=>[...r].map((ch,i)=>ch==="X"?K.rect(38+i*3,41+j*3,3.05,3.05,{f:"#E0263C"}):"").join("")).join("");
  return `<g shape-rendering="crispEdges" stroke-linejoin="miter">`+K.rect(24,10,112,80,{f:"#000"})+bev(25,11,110,78)
  +K.rect(29,15,102,14,{f:"#000080"})+T(33,25.6,"알림",{size:8.5,fill:W,w:700})
  +bev(117,17.5,11,9.5)+p("M120 20l5 4.5M125 20l-5 4.5","fill:none;stroke:#000;stroke-width:1.5")
  +heart+T(66,53,"저장할까요?",{size:9,fill:"#000",w:500})
  +bev(54,65,52,17)+K.rect(53,64,54,19,{s:"#000",sw:1})+T(80,77,"확인",{size:9,fill:"#000",w:700,a:"middle"})
  +`<rect x="57.5" y="68" width="45" height="11" style="fill:none;stroke:#000;stroke-width:.7" stroke-dasharray="1 1"/>`
  +p("M108 66v15l3.6-3.4 2.6 6 2.6-1.1-2.6-5.9h5z","fill:#fff;stroke:#000;stroke-width:1;stroke-linejoin:miter")+`</g>`};
}
