// B2 그림 보충 (N=11): st 12 · ps 14 · rs 7. 부품이 아니라 개념이라 개념이 보이는 작은 장면으로 그린다.
{
const C=K.C, W="#FFFFFF", n2=K.n2, G="#DDE1EA", LN="#8A92A0";
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});        // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});        // 흰 면 위 글줄
const pill=(x,y,w,h,s,{f=C.blue,ink=W,size=8}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
// 24 기준 좌표로 그린 조각을 원하는 자리 · 크기로
const gi=(cx,cy,size,inner)=>`<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(size/24)})">${inner}</g>`;
const p=(d,style)=>`<path d="${d}" style="${style}"/>`;
Object.assign(K.ICON,{
  q11moon:"M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z",
  q11down:"M5 9l7 7 7-7",
});

/* ───────── st · 디자인 스타일 · 시스템 ───────── */
// 색 앱바 + 그림자 면 + 물결(리플) + 둥근 네모 FAB
TH2["머티리얼 디자인"]=K=>K.card(18,12,104,76,10)
  +K.rect(18,12,104,24,{f:C.blue,r:10})+K.rect(18,26,104,10,{f:C.blue})
  +K.icon("menu",31,24,10,W,2)+K.rect(42,21.5,36,5,{f:W,r:2.5})
  +gbar(28,45,70)+gbar(28,54,52)
  +K.circ(44,72,12,{f:C.blue,o:.14})+K.txt(44,75,"확인",{size:8,fill:C.blue,w:700,a:"middle"})
  +K.card(100,58,34,34,11,C.blue)+K.icon("plus",117,75,15,W,2.4);

// 면 자체가 어두운 화면
TH2["다크 모드"]=K=>K.card(20,10,120,80,14,"#14161B")
  +K.icon("q11moon",36,25,12,"#FFD86B",1.8)
  +K.rect(48,22.5,38,5,{f:"#F2F4F8",r:2.5})
  +K.rect(112,19,20,12,{f:C.blue,r:6})+K.circ(126,25,4.4,{f:W})
  +[38,62].map((y,i)=>K.rect(28,y,104,20,{f:"#23262E",r:9})+K.circ(40,y+10,5,{f:i?"#3A3F4B":C.blue})
    +K.rect(51,y+5,i?40:52,4,{f:"#C9CED8",r:2})+K.rect(51,y+12,i?60:44,3.5,{f:"#4A505D",r:1.75})).join("");

// 여러 색 얼룩이 사방에서 번져 섞인 면
TH2["메시 그라데이션"]=K=>{const i=K.id(),c="b211c"+i,f="b211f"+i;
  return `<defs><clipPath id="${c}"><rect x="18" y="10" width="124" height="80" rx="16"/></clipPath><filter id="${f}" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="13"/></filter></defs>`
  +K.rect(18,10,124,80,{f:"#FFD9E6",r:16,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})"><g filter="url(#${f})">`
  +K.circ(38,24,36,{f:"#5B7CFF"})+K.circ(128,26,34,{f:"#FF7FA8"})+K.circ(114,88,34,{f:"#FFC15E"})+K.circ(34,90,32,{f:"#8F63FF"})+K.circ(82,52,16,{f:"#7FE3D0"})
  +`</g></g>`
  +K.rect(30,66,46,6,{f:W,r:3,o:.92})+K.rect(30,77,30,4,{f:W,r:2,o:.6})};

// 어두운 밤 바탕에 빛 띠가 흐른다
TH2["오로라 배경"]=K=>{const i=K.id(),c="b211c"+i,f="b211f"+i;
  const rib=(d,s,sw,o)=>p(d,`fill:none;stroke:${s};stroke-width:${sw};opacity:${o}`);
  return `<defs><clipPath id="${c}"><rect x="18" y="10" width="124" height="80" rx="16"/></clipPath><filter id="${f}" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="6"/></filter></defs>`
  +K.rect(18,10,124,80,{f:"#090E22",r:16,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})"><g filter="url(#${f})">`
  +rib("M10 40C44 16 84 46 150 14","#A77BFF",12,.75)
  +rib("M8 60C40 30 72 68 102 40S146 30 160 22","#3CF2B0",15,.85)
  +rib("M0 74C40 54 80 84 120 58S150 52 165 46","#49B8FF",10,.6)
  +`</g>`
  +[[34,20],[58,16],[96,18],[126,34],[112,24]].map(([x,y])=>K.circ(x,y,.8,{f:W,o:.8})).join("")
  +`</g>`
  +K.rect(30,72,44,5,{f:W,r:2.5,o:.92})+K.rect(30,81,28,3.5,{f:W,r:1.75,o:.55})};

// 같은 면, 높이만 다르다: 그림자가 점점 크고 흐려진다
TH2["엘리베이션"]=K=>{const i=K.id(), sh=[[.6,.7,.18],[3,3,.24],[8.5,6.5,.3]];
  return `<defs>`+sh.map(([dy,sd,o],j)=>`<filter id="b211e${i}_${j}" x="-60%" y="-60%" width="220%" height="260%"><feDropShadow dx="0" dy="${dy}" stdDeviation="${sd}" flood-color="#2B3A8C" flood-opacity="${o}"/></filter>`).join("")+`</defs>`
  +K.bar(18,86,124,2,"rgba(47,60,120,.10)")
  +sh.map((s,j)=>{const x=18+j*44,y=38-j*8;
    return K.rect(x,y,36,36,{f:W,r:9,fx:`url(#b211e${i}_${j})`})+K.txt(x+18,y+22,String(j),{size:11,fill:j===2?C.blue:C.sub,w:700,a:"middle"})}).join("")};

// 같은 네모, 모서리만 0 · 8 · 18
TH2["코너 반경"]=K=>[0,8,18].map((r,j)=>{const x=16+j*46,y=24;
  const d=r?`M${x} ${y+r+5}V${y+r}A${r} ${r} 0 0 1 ${x+r} ${y}H${x+r+5}`:`M${x} ${y+12}V${y}H${x+12}`;
  return K.card(x,y,36,36,r)+K.path(d,{s:C.blue,sw:2.2})+K.txt(x+18,y+53,String(r),{size:9,fill:C.sub,w:700,a:"middle"})}).join("");

// 글자 크기 계단
TH2["타입 스케일"]=K=>K.card(18,8,124,84,14)
  +[[19,"제목","32",31],[13,"소제목","20",51],[9.5,"본문","16",66],[7,"캡션","12",80]].map(([s,l,n,y],i)=>
    K.txt(30,y,l,{size:s,fill:C.ink,w:i<2?700:500})+K.txt(130,y,n,{size:7,fill:i?C.mute:C.blue,w:700,a:"end"})).join("");

// 포인트색 단계 + 보조색 묶음
TH2["컬러 팔레트"]=K=>K.card(18,12,124,76,14)
  +[.14,.32,.55,.78,1].map((o,i)=>K.rect(28+i*21.5,22,18,34,{f:C.blue,r:6,o})).join("")
  +[C.ink,C.mute,C.red,C.green,C.amber].map((c,i)=>K.circ(37+i*21.5,72,6.5,{f:c})).join("");

// 8 간격 모눈에 딱 맞춘 상자, 사이 간격 8
TH2["8pt 그리드"]=K=>{const c="b211c"+K.id();let g="";
  for(let x=24;x<144;x+=8)g+=K.line(x,10,x,90,{s:C.blue,sw:.5,o:.2});
  for(let y=18;y<90;y+=8)g+=K.line(16,y,144,y,{s:C.blue,sw:.5,o:.2});
  const box=(x,y,w,h)=>K.rect(x,y,w,h,{f:C.blue,r:3,o:.16})+K.rect(x,y,w,h,{s:C.blue,sw:1,r:3});
  const gap=(x,y,w,h)=>K.rect(x,y,w,h,{f:"rgba(229,72,77,.22)"})+K.txt(x+w/2,y+h/2+2.5,"8",{size:7,fill:C.red,w:700,a:"middle"});
  return K.card(16,10,128,80,12)
  +`<defs><clipPath id="${c}"><rect x="16" y="10" width="128" height="80" rx="12"/></clipPath></defs><g clip-path="url(#${c})">${g}</g>`
  +box(32,26,40,24)+box(80,26,48,24)+box(32,58,96,16)+gap(72,26,8,24)+gap(32,50,96,8)};

// 같은 아이콘 셋을 세 가지 방식으로: 선 / 채움 / 두 톤
TH2["라인 아이콘"]=K=>K.card(18,22,124,56,16)
  +K.icon("home",44,50,26,C.ink,1.8)+K.icon("bell",80,50,26,C.ink,1.8)+K.icon("image",116,50,26,C.ink,1.8);

TH2["솔리드 아이콘"]=K=>{const s=`fill:${C.ink};stroke:${C.ink};stroke-width:1.2`, w="fill:none;stroke:#fff;stroke-width:1.7";
  return K.card(18,22,124,56,16)
  +gi(44,50,26,p("M4 11l8-7 8 7v9h-5v-6h-6v6H4z",s))
  +gi(80,50,26,p("M6 16V11a6 6 0 0 1 12 0v5l2 2H4z",s)+p("M10 20.4a2 2 0 0 0 4 0z",s))
  +gi(116,50,26,p("M4 5h16v14H4z",s)+p("M5 16l4-4 4 4 3-3 3 3",w)+p("M15.5 8.6v.01","fill:none;stroke:#fff;stroke-width:2.4"))};

TH2["듀오톤 아이콘"]=K=>{const lo=`fill:${C.blue};stroke:none;opacity:.28`, hi=`fill:${C.blue};stroke:${C.blue};stroke-width:.8`, ln=`fill:none;stroke:${C.blue};stroke-width:1.8`;
  return K.card(18,22,124,56,16)
  +gi(44,50,26,p("M4 11l8-7 8 7v9H4z",lo)+p("M9.8 20v-6h4.4v6z",hi)+p("M3.5 11.5L12 4l8.500 7.5",ln))
  +gi(80,50,26,p("M6 16V11a6 6 0 0 1 12 0v5l2 2H4z",lo)+p("M10 20.4a2 2 0 0 0 4 0z",hi)+p("M4 18h16",ln))
  +gi(116,50,26,p("M4 5h16v14H4z",lo)+p("M4 16l5-5 4 4 3-3 4 4v3H4z",hi)+`<circle cx="15.5" cy="8.6" r="1.7" style="fill:${C.blue}"/>`)};

/* ───────── ps · 심리 ───────── */
// 선택지 2개 vs 12개
TH2["힉의 법칙"]=K=>{let g="";
  for(let r=0;r<4;r++)for(let c=0;c<3;c++)g+=K.rect(79+c*21,18+r*17,18,11,{f:G,r:5.5});
  return K.card(14,26,50,48,12)+K.rect(20,34,38,13,{f:C.blue,r:6.5})+K.rect(20,53,38,13,{f:G,r:6.5})
  +K.card(72,10,74,80,12)+g};

// 크고 가까운 버튼 / 작고 먼 버튼
TH2["피츠의 법칙"]=K=>K.blk(14,12,62,14,7)
  +p("M36 66L127 22",`fill:none;stroke:${C.mute};stroke-width:.9;stroke-dasharray:2 3`)
  +K.card(128,12,18,13,6.5)+K.icon("x",137,18.5,6,C.sub,1.6)
  +K.card(46,50,86,36,18,C.blue)+K.txt(89,72.5,"확인",{size:12,fill:W,w:700,a:"middle"})
  +K.fing(30,72);

// 어느 앱이나 같은 자리: 위 메뉴 · 검색, 아래 탭
TH2["제이콥의 법칙"]=K=>{
  const scr=(x,me)=>{const c=me?C.blue:C.mute;
    return `<g${me?"":` style="opacity:.62"`}>`+K.card(x,12,40,76,9)+(me?K.rect(x,12,40,76,{s:C.blue,sw:1.3,r:9}):"")
    +K.icon("menu",x+9,22,8,c,1.8)+K.icon("search",x+31,22,8,c,1.8)
    +K.rect(x+6,30,28,22,{f:C.skel,r:5})+gbar(x+6,57,24,3.5)+gbar(x+6,64,16,3.5)
    +K.line(x+1,74,x+39,74,{s:C.line,sw:.6})
    +[0,1,2].map(i=>K.circ(x+10+i*10,81,2.6,{f:i===0?c:G})).join("")+`</g>`};
  return scr(14,0)+scr(106,0)+scr(60,1)};

// 긴 숫자 한 줄 → 세 덩어리
TH2["밀러의 법칙"]=K=>K.card(16,12,128,76,14)
  +K.txt(80,35,"01012345678",{size:9.5,fill:C.mute,a:"middle"})
  +[[24,30,"010"],[59,36,"1234"],[100,36,"5678"]].map(([x,w,s])=>K.rect(x,46,w,26,{f:C.blue,r:8,o:.12})+K.txt(x+w/2,63,s,{size:11,fill:C.ink,w:700,a:"middle"})).join("");

// 같은 점, 간격만으로 세 묶음
TH2["근접성의 법칙"]=K=>K.card(18,14,124,72,14)
  +[34,50,66].map(y=>[36,50,73,87,110,124].map(x=>K.circ(x,y,5,{f:"#3A4050"})).join("")).join("");

// 같은 간격, 색 · 모양으로 줄이 갈린다
TH2["유사성의 법칙"]=K=>K.card(18,14,124,72,14)
  +[34,50,66].map((y,r)=>[0,1,2,3,4,5].map(i=>{const x=35+i*18;
    return r===1?K.rect(x-5,y-5,10,10,{f:"#B4BAC6",r:2.5}):K.circ(x,y,5,{f:C.blue})}).join("")).join("");

// 회색들 사이 하나만 색
TH2["폰 레스토프 효과"]=K=>{let g="";
  for(let r=0;r<3;r++)for(let c=0;c<5;c++)if(!(r===1&&c===3))g+=K.rect(32+c*21,23+r*20,14,14,{f:G,r:4.5});
  return K.card(18,12,124,76,14)+g+K.card(93,41,18,18,6,C.blue)};

// 다 못 채운 진행률, 하나 남은 할 일
TH2["자이가르닉 효과"]=K=>K.card(18,12,124,76,14)
  +K.txt(30,31,"프로필 완성",{size:8.5,fill:C.ink,w:700})+K.txt(130,31,"80%",{size:8.5,fill:C.blue,w:700,a:"end"})
  +K.rect(30,37,100,6,{f:C.skel,r:3})+K.rect(30,37,80,6,{f:C.blue,r:3})
  +K.circ(36,58,5.5,{f:C.blue,o:.16})+K.icon("check",36,58,7,C.blue,2.2)+gbar(48,56,52)+K.line(46,58,102,58,{s:C.mute,sw:.7})
  +K.circ(36,75,5.5,{s:C.blue,sw:1.5})+tbar(48,72.75,64,4.5);

// 경험 곡선에서 절정과 끝만 남는다
TH2["피크엔드 법칙"]=K=>K.card(16,12,128,76,14)
  +K.line(28,80,132,80,{s:C.line,sw:.8})
  +K.path("M28 72C40 70 46 64 54 60S66 38 76 38S90 68 100 68S118 58 128 52",{s:"#C9CED6",sw:2})
  +[[76,38,"절정"],[128,52,"끝"]].map(([x,y,l])=>K.circ(x,y,8.5,{f:C.blue,o:.16})+K.circ(x,y,4.5,{f:C.blue})+K.txt(x,y-12,l,{size:7.5,fill:C.blue,w:700,a:"middle"})).join("");

// 여러 사람 얼굴 + 몇 명이 샀는지 + 별점
TH2["사회적 증거"]=K=>K.card(18,14,124,72,14)
  +[["#C9D6FF",38],["#F6B9CB",50],["#BFE8D2",62]].map(([f,x])=>K.circ(x,38,9,{f,s:W,sw:2})).join("")
  +K.txt(78,41.5,"1,204명 구매",{size:9,fill:C.ink,w:700})
  +[0,1,2,3,4].map(i=>gi(35+i*12,66,11,p(K.ICON.star,`fill:${C.amber};stroke:${C.amber};stroke-width:1`))).join("")
  +K.txt(96,69.5,"4.8",{size:9.5,fill:C.ink,w:700});

// 몇 개 안 남았다는 표시, 거의 빈 재고 막대
TH2["희소성"]=K=>K.card(18,12,124,76,14)
  +K.rect(26,20,46,60,{f:C.skel,r:9})+K.icon("image",49,50,16,C.mute,1.4)
  +tbar(80,25,44)+gbar(80,35,30)
  +K.rect(80,46,48,15,{f:"rgba(229,72,77,.12)",r:7.5})+K.txt(104,56.6,"3개 남음",{size:7.5,fill:C.red,w:700,a:"middle"})
  +K.rect(80,70,52,5,{f:C.skel,r:2.5})+K.rect(80,70,8,5,{f:C.red,r:2.5});

// 아무것도 안 골라 놨지만 한쪽에 슬쩍 '추천'
TH2["넛지"]=K=>K.card(18,12,124,76,14)
  +K.rect(24,19,112,28,{f:C.blue,r:10,o:.1})
  +K.circ(37,33,5.5,{f:W,s:C.mute,sw:1.3})+tbar(48,30.75,38,4.5)+pill(100,26.5,30,13,"추천",{size:7})
  +K.circ(37,65,5.5,{f:W,s:C.mute,sw:1.3})+gbar(48,63,52);

// 기본만 보이고, 나머지는 '더 보기' 아래에 흐리게 접혀 있다
TH2["점진적 공개"]=K=>K.rect(26,70,108,10,{f:W,r:5,o:.6})+K.rect(26,84,108,10,{f:W,r:5,o:.3})
  +K.card(18,6,124,60,14)
  +[19,35].map((y,i)=>K.circ(34,y,5,{f:C.skel})+gbar(46,y-2,i?48:66)).join("")
  +K.line(26,46,134,46,{s:C.hair,sw:.6})
  +K.txt(76,59,"더 보기",{size:8,fill:C.blue,w:700,a:"middle"})+K.icon("q11down",97,56,8,C.blue,2);

// 밋밋한 글자 vs 누르고 싶게 솟은 버튼
TH2["어포던스"]=K=>K.blk(14,34,56,32,10)+K.txt(42,53.6,"확인",{size:10,fill:C.mute,w:700,a:"middle"})
  +K.rect(84,40,62,32,{f:C.blue,r:12,fx:"url(#b2lift)"})+K.rect(84,40,62,32,{f:"#000",r:12,o:.3})
  +K.rect(84,34,62,32,{f:C.blue,r:12})+K.rect(92,37.5,46,3,{f:W,r:1.5,o:.35})
  +K.txt(115,53.6,"확인",{size:10,fill:W,w:700,a:"middle"})
  +K.circ(136,56,7,{f:"rgba(255,255,255,.35)"})+K.circ(136,56,4,{f:W});   // 파란 버튼 위라 닿은 자리는 흰색

/* ───────── rs · 리서치 · 설계 ───────── */
// 가상의 한 사람 프로필
TH2["페르소나"]=K=>K.card(16,10,128,80,14)
  +K.circ(41,35,13,{f:"#C9D6FF"})+K.icon("user",41,35,15,C.blue,1.8)
  +K.txt(62,33,"김민지",{size:10,fill:C.ink,w:700})+K.txt(62,44,"29 · 직장인",{size:7,fill:C.sub})
  +pill(26,56,36,13,"퇴근길",{f:C.soft,ink:C.blue,size:7})+pill(66,56,36,13,"모바일",{f:C.soft,ink:C.blue,size:7})
  +tbar(26,77,28,4)+gbar(60,77,62);

// 단계 칸 + 기분 곡선 + 표정
TH2["사용자 여정 지도"]=K=>{
  const face=(cx,cy,m)=>{const c=[C.sub,C.blue,C.red][m];
    return K.circ(cx,cy,7,{f:W,s:c,sw:1.4})+K.circ(cx-2.5,cy-2,.9,{f:c})+K.circ(cx+2.5,cy-2,.9,{f:c})
    +K.path([`M${cx-2.5} ${cy+2.5}h5`,`M${cx-3} ${cy+1.5}q3 3 6 0`,`M${cx-3} ${cy+3.8}q3 -3 6 0`][m],{s:c,sw:1.2})};
  return K.card(14,10,132,80,14)
  +[0,1,2,3].map(i=>K.rect(22+i*30,17,26,9,{f:i===2?"rgba(229,72,77,.14)":C.skel,r:4.5})+(i?K.line(20+i*30,30,20+i*30,82,{s:C.hair,sw:.6}):"")).join("")
  +K.path("M35 54C45 54 55 42 65 42S85 70 95 70S115 46 125 46",{s:"#C9CED6",sw:1.6})
  +face(35,54,0)+face(65,42,1)+face(95,70,2)+face(125,46,1)};

// 실제로 눌러 보게 하고, 옆에서 된 것 · 막힌 것을 적는다
TH2["사용성 테스트"]=K=>K.card(18,10,52,80,12)
  +tbar(26,20,24,4)+K.rect(26,30,36,26,{f:C.skel,r:6})+K.rect(26,66,36,13,{f:C.blue,r:6.5})
  +K.card(82,16,62,68,12)
  +[[32,1],[50,0],[68,1]].map(([y,ok],i)=>K.circ(96,y,6.5,{f:ok?"rgba(31,169,113,.16)":"rgba(229,72,77,.14)"})
    +K.icon(ok?"check":"x",96,y,8,ok?C.green:C.red,2.2)+(ok?gbar(108,y-2,[28,0,22][i]):K.rect(108,y-2.25,26,4.5,{f:C.red,r:2.25,o:.55}))).join("")
  +K.circ(50,72.5,7,{f:"rgba(255,255,255,.35)"})+K.circ(50,72.5,4,{f:W});   // 파란 버튼 위라 닿은 자리는 흰색

// 카드를 묶음 칸으로 옮겨 나눈다
TH2["카드 소팅"]=K=>{
  const grp=(x,c)=>`<rect x="${x}" y="12" width="58" height="76" rx="10" style="fill:rgba(255,255,255,.45);stroke:${C.mute};stroke-width:1;stroke-dasharray:3 3"/>`+K.rect(x+8,20,22,4.5,{f:c,r:2.25});
  const cd=(x,y,w)=>K.card(x,y,44,14,5)+gbar(x+7,y+5,w);
  return grp(14,C.blue)+grp(88,C.amber)
  +cd(21,32,26)+cd(21,50,20)+cd(95,32,24)
  +`<g transform="rotate(-9 80 68)">`+K.card(58,60,44,16,5)+tbar(65,65.75,26,4.5)+`</g>`
  +K.fing(98,72)};

// 색 없이 선과 상자만
TH2["와이어프레임"]=K=>K.card(22,8,116,84,12)
  +K.rect(32,18,96,30,{s:LN,sw:1.1,r:3})+K.line(32,18,128,48,{s:LN,sw:.9})+K.line(128,18,32,48,{s:LN,sw:.9})
  +K.line(33,57,100,57,{s:"#B4BAC6",sw:2.6})+K.line(33,64.5,82,64.5,{s:"#B4BAC6",sw:2.6})
  +K.rect(32,72,44,12,{s:LN,sw:1.1,r:3})+K.rect(84,72,44,12,{f:"#B4BAC6",r:3});

// 화면의 버튼에서 다음 화면으로 이어진 연결선 + 재생
TH2["프로토타입"]=K=>K.card(14,16,54,72,10)
  +tbar(22,25,22,4)+gbar(22,34,36)+gbar(22,42,28)
  +K.rect(22,68,38,12,{f:C.blue,r:6,o:.16})+K.rect(22,68,38,12,{s:C.blue,sw:1.2,r:6})
  +K.card(92,16,54,72,10)
  +K.rect(100,24,38,24,{f:C.skel,r:6})+tbar(100,55,24,4)+gbar(100,64,36)+gbar(100,72,26)
  +K.path("M60 74C80 74 72 32 91 32",{s:C.blue,sw:1.6})+K.path("M87 28.5L91.500 32l-4.5 3.5",{s:C.blue,sw:1.6})
  +K.circ(60,74,3,{f:C.blue,s:W,sw:1.2})
  +K.card(70,4,20,20,10,C.blue)+gi(80.6,14,10,p("M8 5l11 7-11 7z","fill:#fff;stroke:#fff;stroke-width:2"));

// 시작 → 화면 → 갈림길 → 두 갈래
TH2["유저 플로우"]=K=>{
  const ah=(x,y)=>K.path(`M${x-3} ${y-2.5}L${x} ${y}l-3 2.5`,{s:LN,sw:1.2});
  return K.line(42,50,53,50,{s:LN,sw:1.2})+ah(53,50)+K.line(84,50,94,50,{s:LN,sw:1.2})+ah(94,50)
  +K.path("M108 37V22H127",{s:LN,sw:1.2})+ah(127,22)+K.path("M108 63V78H127",{s:LN,sw:1.2})+ah(127,78)
  +K.card(10,40,32,20,10,C.blue)+K.txt(26,52.8,"시작",{size:7.5,fill:W,w:700,a:"middle"})
  +K.card(54,39,30,22,6)+gbar(60,46,18,3.5)+gbar(60,52.500,12,3.5)
  +`<path d="M108 36l14 14-14 14-14-14z" style="fill:#fff;stroke:${C.hair};stroke-width:.5" filter="url(#b2lift)"/>`+K.txt(108,53.6,"?",{size:10,fill:C.blue,w:700,a:"middle"})
  +K.card(128,13,22,18,6)+K.icon("check",139,22,9,C.green,2.2)
  +K.card(128,69,22,18,6)+K.icon("x",139,78,8,C.red,2.2)};
}
