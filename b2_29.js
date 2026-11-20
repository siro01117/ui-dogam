// B2 그림 추가 29: dt 데이터 · 차트 (차트 종류 · 차트 부속 · 표)
// 움직이는 부분은 class="b2x29 b2a-n29…". transform 속성이 있는 요소에는 클래스를 직접 달지 않고 겉 g 로 감싼다.
{
const A=(c,inner,st="")=>`<g class="b2x29 b2a-n29${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n29${name}{animation-name:b2a-n29${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n29${name}{${frames}}`);
css(`.b2x29{animation-duration:3.2s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:ease-in-out}`);
const n2=K.n2, C=K.C;
const SOFT="#C9D6FF", MID="#9DB6FF", DARK="#3A4050", AXIS="#C5CBD6", PALE="#F5F7FB";
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DARK,r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const wbar=(x,y,w,h=4,o=.9)=>K.rect(x,y,w,h,{f:"#fff",r:h/2,o});
const plot=()=>K.card(16,10,128,80,12)+[28,44,60].map(y=>K.line(28,y,132,y,{s:C.line,sw:.6})).join("");
const base=()=>K.line(28,76,132,76,{s:AXIS,sw:1.2});
const axes=()=>K.path("M30 20V76H134",{s:AXIS,sw:1.2});
const fillP=(d,f,o=1)=>`<path d="${d}" style="fill:${f};stroke:none${o<1?`;opacity:${o}`:""}"/>`;
const clipR=(x,y,w,h,r,inner)=>{const c="b229k"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const poly=p=>"M"+p.map(q=>q.join(" ")).join("L");
// 고리 조각 (t 는 0~1, 12시에서 시계 방향)
const ring=(cx,cy,r0,r1,a0,a1,f,o=1)=>{const p=(r,t)=>{const a=(t*360-90)*Math.PI/180;return n2(cx+r*Math.cos(a))+" "+n2(cy+r*Math.sin(a))};const big=a1-a0>.5?1:0;
  return `<path d="M${p(r0,a0)}L${p(r1,a0)}A${r1} ${r1} 0 ${big} 1 ${p(r1,a1)}L${p(r0,a1)}A${r0} ${r0} 0 ${big} 0 ${p(r0,a0)}Z" style="fill:${f};stroke:#fff;stroke-width:1.3${o<1?`;opacity:${o}`:""}"/>`};
// 세모 (위 · 아래)
const tri=(cx,cy,up,f,s=3.6)=>fillP(up?`M${n2(cx-s)} ${n2(cy+s*.8)}L${cx} ${n2(cy-s*.8)}L${n2(cx+s)} ${n2(cy+s*.8)}Z`:`M${n2(cx-s)} ${n2(cy-s*.8)}L${cx} ${n2(cy+s*.8)}L${n2(cx+s)} ${n2(cy-s*.8)}Z`,f);

/* ───────── 차트 종류 ───────── */
TH2["가로 막대 차트"]=K=>K.card(16,10,128,80,12)
  +[80,62,46,30].map((w,i)=>{const y=19+i*16.5;return gbar(26,y+3.5,15)+K.rect(48,y,w,11,{f:i===0?C.blue:SOFT,r:3})}).join("")
  +K.line(47,15,47,85,{s:AXIS,sw:1.2});

TH2["그룹 막대 차트"]=K=>plot()
  +[[30,20],[44,28],[34,48]].map(([a,b],i)=>{const x=35+i*34;
    return K.rect(x,76-a,11,a,{f:C.blue,r:2.5})+K.rect(x+12.5,76-b,11,b,{f:C.amber,r:2.5})}).join("")+base();

TH2["100% 누적 막대"]=K=>K.card(16,8,128,84,12)
  +K.txt(45,21.5,"100%",{size:7,fill:C.sub,a:"end"})+K.txt(45,80.5,"0",{size:7,fill:C.sub,a:"end"})
  +K.line(49,18,134,18,{s:C.line,sw:.8})
  +[[.5,.3,.2],[.34,.4,.26],[.62,.2,.18],[.24,.36,.4]].map((seg,i)=>{let y=78;const x=54+i*20.5;
    return seg.map((p,j)=>{const h=p*60;y-=h;return K.rect(x,y+.6,15,h-1.2,{f:[C.blue,MID,C.amber][j],r:2})}).join("")}).join("")
  +K.line(49,78,134,78,{s:AXIS,sw:1.2});

TH2["콤보 차트"]=K=>{const hs=[22,30,26,40,34],ys=[52,42,47,31,22];
  return plot()+hs.map((h,i)=>K.rect(33+i*20,76-h,13,h,{f:SOFT,r:3})).join("")+base()
  +K.path(poly(ys.map((y,i)=>[39.5+i*20,y])),{s:C.blue,sw:2.2})
  +ys.map((y,i)=>K.circ(39.5+i*20,y,2.8,{f:"#fff",s:C.blue,sw:1.6})).join("")};

TH2["스텝 차트"]=K=>plot()+base()
  +`<path d="M28 64H48V52H70V58H90V38H112V26H132" stroke-linejoin="miter" stroke-linecap="butt" style="fill:none;stroke:${C.blue};stroke-width:2.4"/>`;

TH2["히스토그램"]=K=>plot()
  +[8,16,30,44,52,40,26,14,6].map((h,i)=>K.rect(30.5+i*11,76-h,11,h,{f:C.blue,s:"#fff",sw:.9,r:1})).join("")+base();

TH2["박스 플롯"]=K=>plot()+base()
  +[[48,68,58,50,40,26],[80,62,50,42,32,18],[112,70,63,57,47,38]].map(([x,mn,q1,md,q3,mx])=>
    K.line(x,mn,x,mx,{s:C.blue,sw:1.4})+K.line(x-4.5,mn,x+4.5,mn,{s:C.blue,sw:1.4})+K.line(x-4.5,mx,x+4.5,mx,{s:C.blue,sw:1.4})
    +K.rect(x-9,q3,18,q1-q3,{f:SOFT,s:C.blue,sw:1.4,r:2})+K.line(x-9,md,x+9,md,{s:C.blue,sw:2.2})).join("")
  +K.circ(112,24,2.2,{f:"#fff",s:C.blue,sw:1.4});

TH2["버블 차트"]=K=>K.card(16,10,128,80,12)+axes()
  +[[46,62,5,.45],[62,42,9,.6],[88,54,14,.8],[110,32,7,.5],[124,52,4,.4],[114,64,5.5,.6],[72,26,4,.35]]
    .map(([x,y,r,o])=>K.circ(x,y,r,{f:C.blue,o})).join("")
  +K.circ(42,36,6.5,{f:C.amber,o:.75});

TH2["퍼널 차트"]=K=>{const W=[108,82,56,34,24];
  return K.card(16,8,128,84,12)+[0,1,2,3].map(i=>{const y=15+i*18,a=W[i]/2,b=W[i+1]/2;
    return fillP(`M${80-a} ${y}H${80+a}L${80+b} ${y+16}H${80-b}Z`,C.blue,[1,.72,.48,.28][i])}).join("")};

TH2["폭포 차트"]=K=>{const b=[[46,76,C.blue],[32,46,C.green],[24,32,C.green],[24,38,C.red],[38,76,C.blue]],lv=[46,32,24,38];
  return plot()+lv.map((y,i)=>K.line(47+i*20,y,53+i*20,y,{s:"#8A93A6",sw:.9})).join("")
  +b.map(([t,u,f],i)=>K.rect(33+i*20,t,14,u-t,{f,r:2.5})).join("")+base()};

TH2["생키 다이어그램"]=K=>{const band=(a0,a1,b0,b1,f)=>fillP(`M34 ${a0}C80 ${a0} 80 ${b0} 126 ${b0}V${b1}C80 ${b1} 80 ${a1} 34 ${a1}Z`,f,.3);
  return K.card(16,8,128,84,12)
  +band(20,38,18,36,C.blue)+band(38,50,45,57,C.blue)
  +band(56,60,36,40,C.amber)+band(60,66,57,63,C.amber)+band(66,80,68,82,C.amber)
  +K.rect(28,20,6,30,{f:C.blue,r:2})+K.rect(28,56,6,24,{f:C.amber,r:2})
  +K.rect(126,18,6,22,{f:DARK,r:2})+K.rect(126,45,6,18,{f:DARK,r:2})+K.rect(126,68,6,14,{f:DARK,r:2})};

TH2["선버스트"]=K=>{const cx=80,cy=50;
  return K.card(16,5,128,90,12)
  +ring(cx,cy,9,20,0,.42,C.blue)+ring(cx,cy,9,20,.42,.72,C.amber)+ring(cx,cy,9,20,.72,1,C.green)
  +[[0,.16,C.blue],[.16,.3,C.blue],[.3,.42,C.blue],[.42,.6,C.amber],[.6,.72,C.amber],[.72,.88,C.green]].map(([a,b,f])=>ring(cx,cy,20,31,a,b,f,.65)).join("")
  +[[0,.09,C.blue],[.09,.16,C.blue],[.3,.37,C.blue],[.42,.52,C.amber],[.72,.8,C.green]].map(([a,b,f])=>ring(cx,cy,31,40,a,b,f,.35)).join("")
  +K.circ(cx,cy,7.5,{f:DARK})};

TH2["불릿 차트"]=K=>K.card(14,14,132,72,12)
  +[[26,62,74],[54,38,56]].map(([y,m,t])=>gbar(24,y+6,14)
    +K.rect(44,y,90,16,{f:"#EEF1F6",r:2})+K.rect(44,y,68,16,{f:"#DFE4EE",r:2})+K.rect(44,y,42,16,{f:"#CBD2E0",r:2})
    +K.rect(44,y+5,m,6,{f:C.blue,r:1})+K.line(44+t,y-2,44+t,y+18,{s:DARK,sw:2.4})).join("");

TH2["지도 차트"]=K=>{const R=[[[40,24],[62,18],[70,34],[52,44],[36,38]],[[62,18],[92,16],[98,32],[70,34]],[[92,16],[118,22],[122,40],[98,32]],
    [[36,38],[52,44],[56,62],[40,68],[30,54]],[[52,44],[70,34],[98,32],[96,54],[74,60],[56,62]],[[98,32],[122,40],[126,58],[108,66],[96,54]],
    [[56,62],[74,60],[80,78],[60,82],[40,68]],[[74,60],[96,54],[108,66],[100,80],[80,78]]],op=[.3,.55,.18,.8,1,.42,.28,.65];
  return K.card(16,8,128,84,12)+R.map((p,i)=>fillP(poly(p)+"Z",C.blue,op[i])).join("")
  +R.map(p=>K.path(poly(p)+"Z",{s:"#fff",sw:1.6})).join("")};

TH2["워드 클라우드"]=K=>K.card(16,10,128,80,12)
  +K.txt(80,59,"디자인",{size:21,w:800,fill:C.blue,a:"middle"})
  +K.txt(38,35,"버튼",{size:13,w:700})+K.txt(70,33,"여백",{size:10,w:600,fill:C.mute})
  +K.txt(99,37,"색",{size:16,w:800,fill:C.amber})+K.txt(118,34,"선",{size:9,w:600,fill:C.sub})
  +K.txt(34,77,"아이콘",{size:10,w:600,fill:C.sub})+K.txt(70,79,"글꼴",{size:13,w:700,fill:MID})
  +K.txt(102,76,"모션",{size:9,w:600,fill:C.mute})+K.txt(122,56,"틀",{size:11,w:700});

TH2["픽토그램 차트"]=K=>{const man=(cx,cy,f)=>K.circ(cx,cy-7.5,3.4,{f})+fillP(`M${cx-5} ${cy+8}V${cy+1.5}a5 5 0 0 1 10 0V${cy+8}Z`,f);
  return K.card(16,12,128,76,12)+[[35,7],[66,3]].map(([cy,n])=>[0,1,2,3,4,5,6,7].map(i=>man(31+i*14,cy,i<n?C.blue:"#DDE2EC")).join("")).join("")};

TH2["네트워크 그래프"]=K=>{const N=[[78,48,8,C.blue],[44,28,5,MID],[38,62,4.5,MID],[110,26,5.5,MID],[118,62,6,C.amber],[92,78,4,SOFT],[60,78,3.5,SOFT],[134,42,3.5,SOFT]];
  const E=[[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,7],[4,7],[4,5],[2,6],[1,3]];
  return K.card(16,10,128,80,12)+E.map(([a,b])=>K.line(N[a][0],N[a][1],N[b][0],N[b][1],{s:AXIS,sw:1.2})).join("")
  +N.map(([x,y,r,f])=>K.circ(x,y,r,{f,s:"#fff",sw:1.4})).join("")};

TH2["조직도"]=K=>K.card(16,10,128,80,12)
  +K.path("M80 38V49M40 60V49H120V60M80 49V60",{s:"#A9B1C2",sw:1.3})
  +K.rect(60,20,40,18,{f:C.blue,r:6})+K.circ(70,29,4,{f:"#fff",o:.9})+wbar(77,27,16)
  +[22,62,102].map(x=>K.rect(x,60,36,18,{f:PALE,s:"#D3D8E3",sw:1,r:6})+K.circ(31+x-22,69,4,{f:MID})+gbar(38+x-22,67,14)).join("");

TH2["플로차트"]=K=>{const g="#8A93A6";
  return K.card(16,5,128,90,12)
  +K.path("M80 24V34M77.5 30.5L80 34L82.5 30.5M100 49H112M108.5 46.5L112 49L108.5 51.5M80 62V72M77.5 68.5L80 72L82.5 68.5",{s:g,sw:1.3})
  +K.rect(60,11,40,13,{f:C.blue,r:6.5})+wbar(71,15.5,18)
  +K.path("M80 36L100 49L80 62L60 49Z",{f:C.blueSoft,s:C.blue,sw:1.4})+K.txt(80,52.6,"?",{size:10,w:800,fill:C.blue,a:"middle"})
  +K.rect(112,41,26,16,{f:PALE,s:"#D3D8E3",sw:1,r:4})+gbar(118,47,14)
  +K.rect(60,72,40,15,{f:PALE,s:"#D3D8E3",sw:1,r:4})+gbar(70,77.5,20)};

TH2["마인드맵"]=K=>{const B=[["M100 47C110 47 104 24 116 24",116,18,"#DCE6FF",MID],["M100 50H118",118,44,"#FFEFD6",C.amber],["M100 53C110 53 104 76 116 76",116,70,"#DDF3E7",C.green],
    ["M60 47C50 47 56 24 44 24",20,18,"#FBE1EB","#E68FA3"],["M60 53C50 53 56 76 44 76",20,70,"#EADFFB","#A98BE0"]];
  return K.card(14,8,132,84,12)+B.map(([d,,,,s])=>K.path(d,{s,sw:1.8})).join("")
  +B.map(([,x,y,f,s])=>K.rect(x,y,24,12,{f,r:6})+K.rect(x+6,y+4.5,12,3,{f:s,r:1.5})).join("")
  +K.rect(60,41,40,18,{f:C.blue,r:9})+wbar(70,48,20)};

TH2["벤 다이어그램"]=K=>{const c="b229v"+K.id();
  return K.card(16,10,128,80,12)+`<defs><clipPath id="${c}"><circle cx="64" cy="50" r="27"/></clipPath></defs>`
  +K.circ(64,50,27,{f:"rgba(47,107,255,.14)"})+K.circ(96,50,27,{f:"rgba(242,169,59,.2)"})
  +`<g clip-path="url(#${c})">`+K.circ(96,50,27,{f:C.blue})+`</g>`
  +K.circ(64,50,27,{s:C.blue,sw:1.4})+K.circ(96,50,27,{s:C.amber,sw:1.4})};

TH2["잔디"]=K=>{let o=K.card(14,10,132,80,12)+gbar(23,18,12,3)+gbar(60.5,18,12,3)+gbar(98,18,12,3);let s=5;const op=[0,.3,.55,.8,1];
  for(let c=0;c<15;c++)for(let r=0;r<7;r++){s=(s*37+11)%101;let lv=s%5;if(c>10&&lv<2)lv+=2;if(c===14&&r>3)continue;const x=23+c*7.6,y=26+r*8;
    o+=lv?K.rect(x,y,6.2,6.2,{f:C.green,r:1.6,o:op[lv]}):K.rect(x,y,6.2,6.2,{f:"#E9ECF2",r:1.6})}
  return o};

/* ───────── 차트 부속 ───────── */
TH2["축 · 눈금"]=K=>K.card(16,8,128,84,12)
  +[58,80,102,124].map((x,i)=>K.rect(x-6,72-[20,34,26,42][i],12,[20,34,26,42][i],{f:"#E6ECFB",r:2.5})).join("")
  +K.path("M42 16V72H136",{s:C.blue,sw:1.8})
  +[24,40,56,72].map((y,i)=>K.line(38,y,42,y,{s:C.blue,sw:1.5})+K.txt(35,y+2.6,["30","20","10","0"][i],{size:7.5,w:600,a:"end"})).join("")
  +[58,80,102,124].map((x,i)=>K.line(x,72,x,76,{s:C.blue,sw:1.5})+K.txt(x,85,String(i+1),{size:7.5,w:600,a:"middle"})).join("");

TH2["격자선"]=K=>K.card(16,10,128,80,12)
  +[24,37,50,63].map(y=>`<line x1="30" y1="${y}" x2="134" y2="${y}" stroke-dasharray="2.5 2.5" style="stroke:${C.blue};stroke-width:1.2"/>`).join("")
  +[56,82,108,134].map(x=>`<line x1="${x}" y1="20" x2="${x}" y2="76" stroke-dasharray="2.5 2.5" style="stroke:${C.blue};stroke-width:1.2;opacity:.45"/>`).join("")
  +axes()+K.path("M30 62L56 52L82 57L108 36L134 28",{s:"#AEB6C6",sw:2});

TH2["데이터 라벨"]=K=>{const v=[["24",22],["38",36],["31",29],["52",48]];
  return K.card(16,10,128,80,12)+v.map(([s,h],i)=>{const x=35+i*24.5;
    return K.rect(x,76-h,16,h,{f:SOFT,r:3})+K.txt(x+8,72.5-h,s,{size:9.5,w:800,fill:C.blue,a:"middle"})}).join("")+base()};

TH2["주석"]=K=>K.card(16,10,128,80,12)+[44,60].map(y=>K.line(28,y,132,y,{s:C.line,sw:.6})).join("")+base()
  +K.path("M28 64L46 60L64 62L86 44L106 48L132 32",{s:"#AEB6C6",sw:2})
  +K.line(86,44,86,34,{s:C.blue,sw:1.2})
  +K.rect(62,17,48,17,{f:C.blueSoft,s:C.blue,sw:1.1,r:5})+K.txt(86,28.8,"출시일",{size:8.5,w:700,fill:C.blue,a:"middle"})
  +K.circ(86,44,3.6,{f:"#fff",s:C.blue,sw:1.8});

TH2["추세선"]=K=>K.card(16,10,128,80,12)+axes()
  +[[38,60],[44,70],[52,56],[58,64],[66,50],[72,60],[80,44],[86,54],[94,40],[100,48],[108,30],[114,42],[122,26],[128,36]].map(([x,y])=>K.circ(x,y,2.6,{f:MID})).join("")
  +K.line(34,68,132,27,{s:C.blue,sw:2.4});

TH2["목표선"]=K=>K.card(16,10,128,80,12)
  +[26,34,46,30,52].map((h,i)=>K.rect(40+i*19,76-h,12,h,{f:h>38?MID:"#DDE4F5",r:3})).join("")+base()
  +`<line x1="26" y1="38" x2="134" y2="38" stroke-dasharray="4 3" style="stroke:${C.blue};stroke-width:1.8"/>`
  +K.txt(27,33,"목표",{size:8.5,w:700,fill:C.blue});

TH2["차트 툴팁"]=K=>{const p=[[30,62],[50,56],[70,60],[92,40],[112,46],[132,30]];
  return plot()+base()
  +`<line x1="92" y1="16" x2="92" y2="76" stroke-dasharray="2.5 2.5" style="stroke:#8A93A6;stroke-width:1"/>`
  +K.path(poly(p),{s:C.blue,sw:2.2})+K.circ(92,40,4.2,{f:"#fff",s:C.blue,sw:2.2})
  +K.rect(40,15,46,25,{f:C.toast,r:6,fx:"url(#b2lift)"})+K.rect(47,20.5,18,3,{f:"#fff",r:1.5,o:.5})
  +K.txt(47,35,"1,240",{size:10,w:700,fill:"#fff"})
  +`<path d="M95 45v12l3.2-2.8 2.2 4.8 2-.9-2.2-4.7 4.2-.3z" style="fill:${C.ink};stroke:#fff;stroke-width:.9"/>`};

{ // 범위 브러시: 아래 작은 차트의 틀을 끌면 위 큰 차트가 그 구간을 보여 준다
const v=[.3,.45,.38,.55,.5,.7,.62,.8,.6,.72,.5,.64,.85];
const mini=v.map((t,i)=>[26+9*i,n2(79.5-t*12)]), big=v.map((t,i)=>[n2(26+(9*i-36)*2.7),n2(54-t*34)]);
TH2["범위 브러시"]=K=>K.card(16,6,128,88,12)
  +clipR(26,14,108,44,0,A("brt",K.path(poly(big),{s:C.blue,sw:2.2})))
  +K.line(26,58,134,58,{s:AXIS,sw:1})
  +K.rect(26,65,108,18,{f:"#F1F3F8",r:4})+K.path(poly(mini),{s:"#AEB6C6",sw:1.3})
  +A("brw",K.rect(62,65,40,18,{f:"rgba(47,107,255,.14)",s:C.blue,sw:1.4,r:2})
    +K.rect(59.5,69,5,10,{f:C.blue,r:2.5})+K.rect(99.5,69,5,10,{f:C.blue,r:2.5}));
kf("brw",3.2,"0%,12%{transform:none}36%,50%{transform:translateX(14px)}74%,88%{transform:translateX(-12px)}100%{transform:none}");
kf("brt",3.2,"0%,12%{transform:none}36%,50%{transform:translateX(-37.8px)}74%,88%{transform:translateX(32.4px)}100%{transform:none}");
}

TH2["기간 탭"]=K=>K.card(18,12,124,28,14)
  +K.rect(51.5,16,29,20,{f:C.blue,r:10})
  +["1일","1주","1달","1년"].map((s,i)=>K.txt(36.5+i*29.5,29.6,s,{size:10,w:700,fill:i===1?"#fff":C.sub,a:"middle"})).join("")
  +K.blk(18,48,124,42,12)+K.path("M30 78L48 70L66 74L86 60L104 64L130 54",{s:SOFT,sw:2.4});

TH2["사용량 바"]=K=>K.blk(16,6,128,12,6)+K.card(16,24,128,58,14)
  +K.txt(28,42,"저장 공간",{size:9.5,w:700})+K.txt(132,42,"12 / 15GB",{size:8,w:600,fill:C.sub,a:"end"})
  +K.rect(28,50,104,10,{f:C.skel,r:5})
  +clipR(28,50,104,10,5,K.rect(28,50,46,10,{f:C.blue})+K.rect(75,50,22,10,{f:MID})+K.rect(98,50,14,10,{f:C.amber}))
  +[[C.blue,28],[MID,62],[C.amber,96]].map(([f,x])=>K.circ(x+3,71,3,{f})+gbar(x+9,69,16)).join("");

TH2["순위 변동"]=K=>K.card(16,8,128,84,12)
  +[["1",1,"2"],["2",0,""],["3",-1,"1"]].map(([r,d,n],i)=>{const cy=24+i*26;
    return (i?K.line(26,cy-13,134,cy-13,{s:C.line,sw:.6}):"")
    +K.txt(31,cy+4,r,{size:12,w:800,a:"middle"})+K.circ(50,cy,7,{f:i===0?SOFT:C.skel})+tbar(63,cy-2.5,[34,28,38][i])
    +(d===0?K.rect(113,cy-1.2,10,2.4,{f:C.mute,r:1.2})
      :tri(113,cy,d>0,d>0?C.green:C.red)+K.txt(120,cy+3.8,n,{size:11,w:800,fill:d>0?C.green:C.red}))}).join("");

TH2["숫자 줄임"]=K=>{const tile=(x,ic,a,b)=>K.card(x,28,62,44,14)+K.icon(ic,x+14,50,13,C.mute,1.8)
    +`<text x="${x+24}" y="55" font-size="14" font-weight="800" style="fill:${C.ink}">${a}<tspan style="fill:${C.blue}">${b}</tspan></text>`;
  return K.blk(14,8,132,14,7)+K.blk(14,78,132,14,7)+tile(14,"heart","1.2","K")+tile(84,"eye","3.4","M")};

TH2["정렬 헤더"]=K=>K.card(16,10,128,80,12)
  +K.txt(28,25.5,"이름",{size:8.5,w:700,fill:C.sub})+K.path("M49 21.5l2.5-2.5 2.5 2.5M49 24.5l2.5 2.5 2.5-2.5",{s:C.mute,sw:1.2})
  +K.rect(82,15,54,15.5,{f:C.blueSoft,r:5})+K.txt(89,25.5,"가격",{size:8.5,w:700,fill:C.blue})
  +K.path("M118.5 26.5V19M115 22.2l3.5-3.5 3.5 3.5",{s:C.blue,sw:1.7})
  +K.line(16,34,144,34,{s:C.line,sw:.8})
  +["1,200","3,500","9,800"].map((s,i)=>{const y=47+i*15;return gbar(28,y-4,[34,42,30][i])+K.txt(89,y,s,{size:8.5,w:600})
    +(i<2?K.line(26,y+6.5,134,y+6.5,{s:C.line,sw:.5}):"")}).join("");

TH2["피벗 테이블"]=K=>{const cx=[69,95,121],ry=[43.5,57.5,72.5];
  return K.card(14,10,132,80,12)
  +K.rect(54,17,84,14,{f:C.blueSoft,r:4})+K.rect(22,33,30,45,{f:C.blueSoft,r:4})
  +["1월","2월","합계"].map((s,i)=>K.txt(cx[i],27.2,s,{size:7.5,w:700,fill:C.blue,a:"middle"})).join("")
  +["서울","부산","합계"].map((s,i)=>K.txt(37,ry[i],s,{size:7.5,w:700,fill:C.blue,a:"middle"})).join("")
  +[["12","30","42"],["8","20","28"],["20","50","70"]].map((row,r)=>row.map((s,c)=>K.txt(cx[c],ry[r],s,{size:8,w:r===2||c===2?800:500,a:"middle"})).join("")).join("")
  +K.line(56,48,136,48,{s:C.line,sw:.6})+K.line(56,62.5,136,62.5,{s:AXIS,sw:1})+K.line(108,34,108,77,{s:AXIS,sw:1})};
}
