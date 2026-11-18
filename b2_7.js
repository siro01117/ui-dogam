// B2 그림 추가 7: nv · ly · pg
// 움직이는 부분은 class="b2x7 b2a-n7…". transform 속성이 있는 요소에는 직접 달지 않고 겉 g 로 감싼다.
{
const A=(c,inner,st="")=>`<g class="b2x7 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x7{transform-box:fill-box;transform-origin:center;animation-duration:3.2s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const n2=K.n2, C=K.C;
const DARK="#3A4050", GREY="#EEF1F8", SOFTBAR="#D3D8E3";
const PAS=["#CFE0FF","#FFE1C7","#D9F2E0","#F3D9F7","#FFF1B8","#D7E3EA"];
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DARK,r:h/2});       // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:SOFTBAR,r:h/2});    // 흰 면 위 글줄
const wtxt=(x,y,s,size=8.5)=>K.txt(x,y,s,{size,fill:"#fff",w:700,a:"middle"});

Object.assign(K.ICON,{
  q7down:"M6 9l6 6 6-6",
  q7folder:"M3 7.5A1.5 1.5 0 0 1 4.5 6H10l2 2.5h7.5A1.5 1.5 0 0 1 21 10v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z",
  q7file:["M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5z","M14 3.5V8h4"],
  q7mail:["M4 6h16v12H4z","M4 7l8 6.5L20 7"],
  q7moon:"M19 14.5A8 8 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z",
});
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b27p"+i,c="b27c"+i;
  const st=alt===2?[[0,"#C9F0DD"],[1,"#BFD8FF"]]:alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt===2?"#57B894":alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
// 얼굴 자리 (동그라미 + 사람 모양)
const face=(cx,cy,r,bg,fg)=>{const c="b27f"+K.id();
  return `<defs><clipPath id="${c}"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>`+K.circ(cx,cy,r,{f:bg})
   +`<g clip-path="url(#${c})">`+K.circ(cx,cy-r*.18,n2(r*.36),{f:fg})+K.circ(cx,cy+r*.95,n2(r*.62),{f:fg})+`</g>`};

/* ───────── nv · 내비게이션 ───────── */
TH2["사이드바"]=K=>K.blk(90,10,60,22,10)+K.blk(90,38,60,52,10)
  +K.card(10,6,72,88,12)
  +K.rect(18,14,10,10,{f:C.blue,r:3})+tbar(32,16.5,26,5)
  +K.rect(15,30,62,15,{f:C.soft,r:7.5})+K.icon("home",25,37.5,10,C.blue,1.8)+K.txt(34,40.5,"홈",{size:8,fill:C.blue,w:700})
  +[["search","검색"],["bookmark","보관함"],["settings","설정"]].map(([ic,s],i)=>{const y=53.5+i*16;
    return K.icon(ic,25,y,10,C.sub,1.7)+K.txt(34,y+3,s,{size:8,fill:C.sub})}).join("");

TH2["내비게이션 레일"]=K=>K.blk(62,10,84,22,10)+K.blk(62,38,84,52,10)
  +K.card(14,6,38,88,12)
  +K.rect(21,12,24,16,{f:C.soft,r:8})+K.icon("home",33,20,11,C.blue,1.8)+K.txt(33,36,"홈",{size:7,fill:C.blue,w:700,a:"middle"})
  +[["search","검색"],["bell","알림"]].map(([ic,s],i)=>{const y=50+i*24;
    return K.icon(ic,33,y,11,C.sub,1.7)+K.txt(33,y+14,s,{size:7,fill:C.sub,a:"middle"})}).join("");

TH2["메가 메뉴"]=K=>K.blk(10,6,140,18,9)+K.bar(18,13,14,4,"#fff")
  +K.txt(48,18,"제품",{size:8,fill:C.blue,w:700})+K.icon("q7down",69,15,7,C.blue,2)+K.bar(82,13,16,4,"#fff")+K.bar(106,13,16,4,"#fff")
  +K.card(10,28,140,66,12)
  +[["기능",[28,22,26]],["요금",[24,28,20]],["지원",[26,20,24]]].map(([h,ws],i)=>{const x=20+i*45;
    return K.txt(x,43,h,{size:8,w:700})+ws.map((w,j)=>K.rect(x,51+j*11,5,5,{f:j===0&&i===0?C.blue:C.skel,r:1.5})+gbar(x+8,51.5+j*11,w)).join("")
     +(i<2?K.line(x+39,36,x+39,86,{s:C.line,sw:.6}):"")}).join("");

TH2["목차"]=K=>K.blk(8,12,24,76,10)+K.blk(128,12,24,76,10)
  +K.card(38,6,84,88,12)+K.txt(48,22,"목차",{size:9,w:700})+K.line(48,27,112,27,{s:C.line,sw:.6})
  +K.txt(48,41,"1",{size:8,fill:C.blue,w:700})+tbar(57,35.5,40,4.5)
  +gbar(63,46,34)+gbar(63,54,42)
  +K.txt(48,70,"2",{size:8,fill:C.blue,w:700})+tbar(57,64.5,48,4.5)
  +K.txt(48,84,"3",{size:8,fill:C.blue,w:700})+tbar(57,78.5,32,4.5);

TH2["커맨드 팔레트"]=K=>K.blk(12,8,136,84,12)+K.rect(0,0,160,100,{f:C.dim})
  +K.card(22,10,116,80,12)
  +K.icon("search",34,24,10,C.mute,1.8)+K.txt(43,27,"명령 검색",{size:8,fill:C.mute})
  +K.rect(106,17.5,24,13,{f:GREY,s:C.line,sw:.6,r:4})+K.txt(118,26.5,"Ctrl K",{size:7,fill:C.sub,w:600,a:"middle"})
  +K.line(22,36,138,36,{s:C.line,sw:.6})
  +K.rect(27,40,106,15,{f:C.soft,r:6})+K.icon("plus",36,47.5,9,C.blue,2)+K.txt(45,50.5,"새 문서",{size:8,fill:C.blue,w:700})
  +K.icon("q7moon",36,63.5,9,C.sub,1.7)+K.txt(45,66.5,"다크 모드",{size:8,fill:C.ink})
  +K.icon("settings",36,79.5,9,C.sub,1.7)+K.txt(45,82.5,"설정 열기",{size:8,fill:C.ink});

TH2["페이지 인디케이터"]=K=>K.blk(4,10,18,48,9)+K.blk(138,10,18,48,9)+K.blk(28,6,104,56,12)
  +K.card(34,70,92,22,11)
  +[0,1,2,3,4].map(i=>i===1?K.rect(59.5,77,20,8,{f:C.blue,r:4}):K.circ(i===0?49.5:68.5+i*10.5,81,4,{f:"#CBD2E0"})).join("");

TH2["스크롤스파이"]=K=>{const c="b27s"+K.id();
  return K.blk(10,8,76,84,12)
  +`<defs><clipPath id="${c}"><rect x="10" y="8" width="76" height="84" rx="12"/></clipPath></defs><g clip-path="url(#${c})">`
  +A("n7spc",[0,1,2,3].map(i=>{const y=14+i*56;return K.rect(17,y,62,50,{f:"rgba(255,255,255,.75)",r:8})+K.bar(24,y+8,[30,24,34,28][i],5,"#B9C5E6")+K.bar(24,y+20,48,4)+K.bar(24,y+29,40,4)+K.bar(24,y+38,44,4)}).join(""))+`</g>`
  +K.card(94,12,56,76,12)+K.line(103,24,103,76,{s:C.line,sw:1.4})
  +A("n7spi",K.rect(101.5,25,3,14,{f:C.blue,r:1.5}))
  +["개요","기능","요금"].map((s,i)=>K.txt(111,35+i*18,s,{size:9,fill:C.mute,w:600})+A("n7spt"+i,K.txt(111,35+i*18,s,{size:9,fill:C.blue,w:700}),i?"opacity:0":"")).join("")};
kf("n7spc",3.2,"0%,22%{transform:none}33%,55%{transform:translateY(-56px)}66%,88%{transform:translateY(-112px)}100%{transform:none}");
kf("n7spi",3.2,"0%,22%{transform:none}33%,55%{transform:translateY(18px)}66%,88%{transform:translateY(36px)}100%{transform:none}");
kf("n7spt0",3.2,"0%,22%{opacity:1}33%,88%{opacity:0}100%{opacity:1}");
kf("n7spt1",3.2,"0%,22%{opacity:0}33%,55%{opacity:1}66%,100%{opacity:0}");
kf("n7spt2",3.2,"0%,55%{opacity:0}66%,88%{opacity:1}100%{opacity:0}");

/* ───────── ly · 배치 · 목록 ───────── */
TH2["디바이더"]=K=>K.card(16,8,128,84,14)
  +K.rect(28,18,18,18,{f:PAS[0],r:5})+tbar(54,21,50)+gbar(54,30,70)
  +K.line(28,50,132,50,{s:"#AEB6C6",sw:1.6})
  +K.rect(28,64,18,18,{f:PAS[1],r:5})+tbar(54,67,42)+gbar(54,76,62);

TH2["테이블"]=K=>K.card(10,8,140,84,10)
  +K.path("M10 26V18a10 10 0 0 1 10-10h120a10 10 0 0 1 10 10V26z",{f:GREY,s:"none"})
  +K.txt(20,20.5,"이름",{size:7.5,fill:C.sub,w:700})+K.txt(72,20.5,"상태",{size:7.5,fill:C.sub,w:700})+K.txt(142,20.5,"금액",{size:7.5,fill:C.sub,w:700,a:"end"})
  +[0,1,2].map(i=>{const y=26+i*22;return K.line(10,y,150,y,{s:C.line,sw:.7})+tbar(20,y+9,[34,26,38][i],4.5)
    +K.rect(72,y+5,26,12,{f:[C.soft,"#DDF3E7","#FFEFD6"][i],r:6})+K.circ(79,y+11,2,{f:[C.blue,C.green,C.amber][i]})+K.bar(84,y+9.25,10,3.5,["#A9C0FF","#9AD9BC","#F3D08F"][i])
    +gbar(142-[24,30,20][i],y+9,[24,30,20][i],4.5)}).join("")
  +K.line(64,8,64,92,{s:C.line,sw:.7})+K.line(106,8,106,92,{s:C.line,sw:.7});

TH2["타임라인"]=K=>K.card(18,6,124,88,14)
  +K.line(58,18,58,82,{s:"#C9D3EE",sw:1.6})
  +[["9시",1],["12시",0],["18시",0]].map(([s,on],i)=>{const y=22+i*28;
    return K.txt(48,y+3,s,{size:8,fill:on?C.blue:C.sub,w:on?700:500,a:"end"})
     +(on?K.circ(58,y,5,{f:C.blue})+K.circ(58,y,1.8,{f:"#fff"}):K.circ(58,y,4,{f:"#fff",s:"#A9B6DC",sw:1.6}))
     +tbar(70,y-5,[46,38,50][i],4.5)+gbar(70,y+3,[58,50,40][i],3.5)}).join("");

TH2["트리 뷰"]=K=>K.card(22,6,116,88,12)
  +K.path("M43 26V68M61 43V68",{s:C.line,sw:1})
  +K.icon("q7down",34,18,8,C.sub,2)+K.icon("q7folder",47,18,11,C.blue,1.7)+K.txt(56,21,"문서",{size:8,w:700})
  +K.icon("q7down",52,34,8,C.sub,2)+K.icon("q7folder",65,34,11,C.blue,1.7)+K.txt(74,37,"사진",{size:8,w:700})
  +K.rect(72,42,60,16,{f:C.soft,r:6})+K.icon("q7file",83,50,10,C.blue,1.6)+K.txt(92,53,"바다",{size:8,fill:C.blue,w:700})
  +K.icon("q7file",83,66,10,C.sub,1.6)+K.txt(92,69,"노을",{size:8,fill:C.ink})
  +K.icon("next",34,82,8,C.sub,2)+K.icon("q7folder",47,82,11,C.sub,1.7)+K.txt(56,85,"음악",{size:8,fill:C.ink});

TH2["칸반 보드"]=K=>[["할 일",C.sub,3],["진행",C.blue,2],["완료",C.green,1]].map(([s,col,n],i)=>{const x=8+i*49;
    return K.card(x,6,46,88,10,"#F3F5FA")+K.circ(x+8,17,2.5,{f:col})+K.txt(x+14,20,s,{size:7.5,w:700})
     +[...Array(n)].map((_,j)=>{const y=26+j*22;return K.rect(x+5,y,36,18,{f:"#fff",r:5,fx:"url(#b2lift)"})+K.bar(x+10,y+5,[22,18,24][(i+j)%3],3.5,DARK)+K.bar(x+10,y+11,[14,20,12][(i+j)%3],3)}).join("")}).join("");

TH2["리스트 아이템"]=K=>K.blk(16,6,128,20,10)+K.blk(16,74,128,20,10)
  +K.card(8,31,144,38,12)+face(28,50,11,PAS[0],"#8FA9EE")
  +K.txt(46,47,"김하나",{size:9,w:700})+gbar(46,54,58,4)
  +K.txt(128,47,"오전",{size:7,fill:C.mute,a:"end"})+K.icon("next",139,50,9,C.mute,2);

TH2["섹션 헤더"]=K=>K.card(8,10,144,28,12)
  +K.txt(20,28.5,"인기 상품",{size:11,w:700})+K.txt(131,28,"더보기",{size:8,fill:C.blue,w:700,a:"end"})+K.icon("next",138,25,8,C.blue,2)
  +K.blk(8,46,44,44,10)+K.blk(58,46,44,44,10)+K.blk(108,46,44,44,10);

TH2["캘린더 뷰"]=K=>{const cw=19,X=c=>13.5+c*cw,T=r=>31+r*21;
  const ev=(r,c,n,f,row=0)=>K.rect(X(c)+1.5,T(r)+11.5+row*5,cw*n-3,4,{f,r:2});
  return K.card(12,4,136,92,12)
  +K.txt(22,17,"11월",{size:9,w:700})+K.icon("back",124,13.5,8,C.sub,2)+K.icon("next",138,13.5,8,C.sub,2)
  +["일","월","화","수","목","금","토"].map((s,i)=>K.txt(X(i)+6.5,27,s,{size:7,fill:i===0?C.red:C.mute,a:"middle"})).join("")
  +[0,1,2].map(r=>K.line(12,T(r),148,T(r),{s:C.line,sw:.6})).join("")+[1,2,3,4,5,6].map(c=>K.line(X(c),31,X(c),96,{s:C.line,sw:.6})).join("")
  +[...Array(21)].map((_,i)=>{const c=i%7,r=Math.floor(i/7),d=i+8,on=d===19;
    return (on?K.circ(X(c)+6.5,T(r)+6,4.8,{f:C.blue}):"")+K.txt(X(c)+6.5,T(r)+8.5,d,{size:7,fill:on?"#fff":c===0?C.red:C.ink,w:on?700:500,a:"middle"})}).join("")
  +ev(0,2,1,"#A9C0FF")+ev(0,4,2,"#9AD9BC")
  +ev(1,1,3,"#F3D08F")+ev(1,4,1,C.blue)+ev(1,4,1,"#D9A8E6",1)
  +ev(2,0,2,"#D9A8E6")+ev(2,3,1,"#A9C0FF")+ev(2,5,2,"#9AD9BC")};

TH2["피드"]=K=>{const c="b27d"+K.id();
  return K.card(34,4,92,74,12)+face(46,15,6,PAS[3],"#B98BC8")+tbar(56,10.5,32,4.5)+gbar(56,18,20,3)+K.icon("more",118,15,9,C.mute,2)
  +photo(40,26,80,34,7)+K.icon("heart",47,69,10,C.red,1.8)+K.icon("chat",62,69,10,C.sub,1.7)+K.icon("bookmark",113,69,10,C.sub,1.7)
  +`<defs><clipPath id="${c}"><rect x="20" y="78" width="120" height="22"/></clipPath></defs><g clip-path="url(#${c})">`
  +K.card(34,84,92,40,12)+face(46,95,6,PAS[2],"#74BE95")+tbar(56,90.5,38,4.5)+`</g>`};

TH2["갤러리"]=K=>K.rect(22,5,116,60,{f:C.sf,r:12,fx:"url(#b2lift)"})+photo(22,5,116,60,12)
  +[0,1,2,3].map(i=>{const x=22+i*30.67;return K.rect(x,72,24,22,{f:C.sf,r:6,fx:"url(#b2lift)"})+photo(x,72,24,22,6,i===0?0:i%2?1:2)
    +(i===0?K.rect(x-1.5,70.5,27,25,{s:C.blue,sw:1.8,r:7.5}):"")}).join("");

TH2["스택"]=K=>{const gap=(y)=>`<rect x="52" y="${y}" width="56" height="8" rx="2" style="fill:${C.soft};stroke:${C.blue};stroke-width:.8" stroke-dasharray="2.5 2"/>`;
  return K.card(34,6,92,18,8)+tbar(44,12.5,44)
  +gap(27)
  +K.card(34,38,92,26,8)+K.rect(42,44,14,14,{f:PAS[0],r:4})+gbar(62,46,50)+gbar(62,54,34)
  +gap(67)
  +K.card(34,78,92,16,8,C.blue)+K.bar(64,84,32,4,"#fff")};

/* ───────── pg · 페이지 섹션 ───────── */
TH2["공지 바"]=K=>K.card(0,0,160,24,0,C.blue)
  +K.txt(76,15.5,"오늘만 무료 배송",{size:9,fill:"#fff",w:700,a:"middle"})+K.icon("next",116,12,8,"#fff",2)+K.icon("x",148,12,8,"rgba(255,255,255,.8)",1.8)
  +K.blk(10,32,140,14,7)+K.blk(10,52,140,40,12);

TH2["로고 클라우드"]=K=>{const g="#9AA3B4";
  const logos=[
    (x,y)=>K.circ(x,y,6,{s:g,sw:2.6}),
    (x,y)=>K.path(`M${x} ${y-6.5}L${x+7} ${y+5.5}H${x-7}Z`,{f:g,s:g,sw:1.5}),
    (x,y)=>K.rect(x-6,y-6,12,12,{f:g,r:3}),
    (x,y)=>K.path(`M${x} ${y-7}L${x+6.5} ${y}L${x} ${y+7}L${x-6.5} ${y}Z`,{f:g,s:g,sw:1.2}),
    (x,y)=>K.circ(x-3,y,5.5,{f:g})+K.circ(x+4,y,5.5,{f:g,o:.55}),
    (x,y)=>K.path(`M${x-6} ${y+5.5}V${y-5.5}L${x} ${y+1}L${x+6} ${y-5.5}V${y+5.5}`,{s:g,sw:2.6}),
  ];
  return K.card(10,10,140,80,14)+K.bar(60,20,40,4)
   +logos.map((f,i)=>{const x=24+(i%3)*44,y=45+Math.floor(i/3)*24;return f(x,y)+K.bar(x+11,y-2.5,[18,14,20,16,18,14][i],5,g)}).join("")};

TH2["CTA 섹션"]=K=>K.blk(14,4,132,14,7)+K.blk(14,84,132,12,6)
  +K.card(8,24,144,54,14,C.blue)
  +K.txt(80,43,"지금 시작해 보세요",{size:10,fill:"#fff",w:700,a:"middle"})
  +K.rect(52,52,56,18,{f:"#fff",r:9})+K.txt(80,64,"무료 체험",{size:8.5,fill:C.blue,w:700,a:"middle"});

TH2["뉴스레터 구독"]=K=>K.card(12,10,136,80,14)
  +K.rect(69,18,22,22,{f:C.soft,r:8})+K.icon("q7mail",80,29,13,C.blue,1.7)
  +K.txt(80,54,"소식 받아 보기",{size:9,w:700,a:"middle"})
  +K.rect(22,62,82,20,{f:"#fff",s:"#CBD2E0",sw:1,r:10})+K.txt(32,75,"이메일",{size:8,fill:C.mute})
  +K.rect(108,62,32,20,{f:C.blue,r:10})+wtxt(124,75,"구독",8.5);

TH2["비교표"]=K=>K.card(10,6,140,88,12)
  +K.rect(84,10,28,80,{f:C.soft,r:8})
  +K.txt(98,23,"우리",{size:8,fill:C.blue,w:700,a:"middle"})+K.txt(130,23,"타사",{size:8,fill:C.sub,w:600,a:"middle"})
  +[0,1,2].map(i=>{const y=30+i*20;return K.line(18,y,142,y,{s:C.line,sw:.7})+tbar(20,y+8,[44,36,50][i],4.5)
    +K.icon("check",98,y+10,11,C.blue,2.4)+(i===0?K.icon("check",130,y+10,11,C.mute,2.2):K.icon("x",130,y+10,9,C.red,2.2))}).join("");

TH2["팀 소개"]=K=>K.card(10,8,140,84,14)+tbar(62,17,36,5)
  +[["디자인",PAS[0],"#8FA9EE"],["개발",PAS[2],"#74BE95"],["기획",PAS[1],"#E9A56F"]].map(([s,bg,fg],i)=>{const cx=36+i*44;
    return face(cx,46,13,bg,fg)+tbar(cx-13,66,26,4.5)+K.txt(cx,82,s,{size:7.5,fill:C.sub,a:"middle"})}).join("");

TH2["이용 단계"]=K=>K.card(8,10,144,80,14)
  +K.line(47,36,69,36,{s:"#A9C0FF",sw:1.6})+K.line(91,36,113,36,{s:"#A9C0FF",sw:1.6})
  +["가입","선택","시작"].map((s,i)=>{const cx=36+i*44;
    return K.circ(cx,36,11,{f:C.blue})+K.txt(cx,40,i+1,{size:11,fill:"#fff",w:700,a:"middle"})
     +K.txt(cx,61,s,{size:8.5,w:700,a:"middle"})+K.bar(cx-14,68,28,3.5)+K.bar(cx-10,75,20,3.5)}).join("");
}
