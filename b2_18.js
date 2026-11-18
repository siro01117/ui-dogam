// B2 그림 보충 (N=18): ps 18. 개념이라 개념이 보이는 작은 장면으로 그린다 (b2_11.js 방식).
{
const A=(c,inner)=>`<g class="b2x18 b2a-${c}">${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames)=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s}@keyframes b2a-${name}{${frames}}`);
css(`.b2x18{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const C=K.C, W="#FFFFFF", n2=K.n2, G="#DDE1EA", LN="#8A92A0", DK="#3A4050";
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DK,r:h/2});               // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});        // 흰 면 위 글줄
const pill=(x,y,w,h,s,{f=C.blue,ink=W,size=8}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
const gi=(cx,cy,size,inner)=>`<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(size/24)})">${inner}</g>`;
const p=(d,style)=>`<path d="${d}" style="${style}"/>`;
const dashC=(cx,cy,r,s,sw,da)=>`<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:none;stroke:${s};stroke-width:${sw};stroke-dasharray:${da}"/>`;
// 표정: 0 무표정 · 1 웃음 · 2 찡그림
const face=(cx,cy,m,r=8)=>{const c=[C.sub,C.blue,C.red][m];
  return K.circ(cx,cy,r,{f:W,s:c,sw:1.5})+K.circ(cx-2.8,cy-2,1,{f:c})+K.circ(cx+2.8,cy-2,1,{f:c})
  +K.path([`M${cx-2.5} ${cy+2.5}h5`,`M${cx-3.2} ${cy+1.5}q3.2 3.2 6.4 0`,`M${cx-3.2} ${cy+4}q3.2 -3.2 6.4 0`][m],{s:c,sw:1.3})};
Object.assign(K.ICON,{
  q18gift:["M4 11h16v9H4z","M3 7.500h18V11H3z","M12 7.500V20","M12 7.500C10 3.500 6 4.500 7.500 7.500","M12 7.500c2-4 6-3 4.500 0"],
});

// 같은 고기, 같은 비율. 말만 다르다
TH2["프레이밍 효과"]=K=>{
  const ring=(cx,cy,col,len,rot)=>K.circ(cx,cy,13,{s:G,sw:6})
    +`<circle cx="${cx}" cy="${cy}" r="13" transform="rotate(${rot} ${cx} ${cy})" stroke-linecap="butt" style="fill:none;stroke:${col};stroke-width:6;stroke-dasharray:${len} 100"/>`;
  return K.card(14,14,62,72,12)+ring(45,42,C.red,8.17,-90)+K.txt(45,75,"지방 10%",{size:8.5,fill:C.red,w:700,a:"middle"})
  +K.card(84,14,62,72,12)+K.rect(84,14,62,72,{s:C.blue,sw:1.3,r:12})+ring(115,42,C.blue,73.51,-54)+K.txt(115,75,"살코기 90%",{size:8.5,fill:C.blue,w:700,a:"middle"})};

// 이미 쓴 돈이 크게 보이고, 손은 '계속'으로 간다
TH2["매몰 비용"]=K=>K.card(18,10,124,80,14)
  +K.txt(30,26,"이미 쓴 돈",{size:7.5,fill:C.sub,w:700})+K.txt(30,43,"30,000원",{size:14,fill:C.ink,w:700})
  +K.rect(30,50,100,5,{f:C.skel,r:2.5})+K.rect(30,50,78,5,{f:C.mute,r:2.5})
  +K.rect(30,64,40,16,{f:W,s:C.line,sw:1,r:8})+K.txt(50,74.8,"그만",{size:8,fill:C.mute,w:700,a:"middle"})
  +pill(76,64,54,16,"계속")
  +K.fing(122,78);

// 같은 물건인데 '내 것' 쪽 값이 더 크다
TH2["소유 효과"]=K=>`<g style="opacity:.75">`+K.card(16,26,52,54,12)
  +K.rect(22,32,40,24,{f:C.skel,r:7})+K.icon("image",42,44,13,C.mute,1.4)
  +K.txt(42,72,"1만원",{size:8,fill:C.sub,w:700,a:"middle"})+`</g>`
  +K.card(82,12,64,76,14)+K.rect(82,12,64,76,{s:C.blue,sw:1.3,r:14})
  +K.rect(90,24,48,32,{f:C.soft,r:9})+K.icon("image",114,40,17,C.blue,1.5)
  +pill(86,16,28,13,"내 것",{size:7.5})
  +K.txt(114,76,"2만원",{size:12.5,fill:C.ink,w:700,a:"middle"});

// 먼저 받은 선물, 그 아래 갚는 버튼
TH2["호혜성"]=K=>K.card(18,10,124,80,14)
  +K.rect(26,18,108,34,{f:C.soft,r:10})
  +K.icon("q18gift",45,35,19,C.blue,1.7)
  +K.txt(62,33,"무료 선물",{size:9,fill:C.ink,w:700})+gbar(62,39,40)
  +K.circ(121,35,6.5,{f:"rgba(31,169,113,.16)"})+K.icon("check",121,35,8,C.green,2.2)
  +pill(26,62,108,18,"구독하기",{size:8.5})
  +K.fing(122,78);

// 3개면 웃고, 24개면 못 고른다
TH2["선택의 역설"]=K=>{const cols=[C.blue,"#F6B9CB","#BFE8D2","#FFD9A0","#C9D6FF","#D9C8F5"];let g="";
  for(let r=0;r<4;r++)for(let c=0;c<6;c++)g+=K.rect(77+c*11,15+r*12,8,9,{f:cols[(r*2+c)%6],r:3,o:c===0&&r===0?.7:1});
  return K.card(14,22,48,56,12)
  +[.9,.55,.3].map((o,i)=>K.rect(21+i*12,30,10,17,{f:C.blue,r:4,o})).join("")
  +face(38,62,1)
  +K.card(70,8,76,84,12)+g+face(108,75,2)};

// 칸 넷을 내가 채우느냐, 앱이 대신 하느냐. 일의 양은 같다
TH2["테슬러의 법칙"]=K=>K.card(14,8,60,68,12)
  +[0,1,2,3].map(i=>K.rect(22,16+i*13.5,44,9,{f:W,s:"#B4BAC6",sw:1,r:4.5})+K.rect(26,19+i*13.5,[14,22,10,18][i],3,{f:G,r:1.5})).join("")
  +K.txt(44,90,"내가 입력",{size:7.5,fill:C.sub,w:700,a:"middle"})
  +K.card(86,8,60,68,12)
  +K.rect(94,16,44,9,{f:W,s:"#B4BAC6",sw:1,r:4.5})+K.rect(98,19,14,3,{f:G,r:1.5})
  +K.circ(116,51,16,{f:C.soft})+K.icon("settings",116,51,19,C.blue,1.8)
  +K.txt(116,90,"앱이 처리",{size:7.5,fill:C.blue,w:700,a:"middle"});

// 누르자마자(0.4초 안에) 결과가 뜬다. 파란 버튼 위라 손가락 자리는 흰 테로 그린다
TH2["도허티 임계"]=K=>K.card(14,32,52,38,14,C.blue)+K.txt(40,55,"검색",{size:11,fill:W,w:700,a:"middle"})
  +A("n18tap",K.circ(57,63,7.5,{f:"rgba(255,255,255,.35)"})+K.circ(57,63,4.2,{f:C.blue,s:W,sw:1.6}))
  +K.path("M68 51h6M71.500 48.500l2.500 2.500-2.500 2.500",{s:C.blue,sw:1.5})
  +K.card(16,8,48,16,8)+K.txt(40,19,"0.4초 안",{size:7.5,fill:C.blue,w:700,a:"middle"})
  +A("n18dh",K.card(78,12,68,76,12)+tbar(88,22,30,4.5)
    +[0,1,2].map(i=>K.circ(93,42+i*16,5,{f:i?C.skel:C.blue})+gbar(103,40+i*16,[34,26,30][i])).join(""));
kf("n18tap",3,"0%,12%{opacity:1;transform:none}20%,28%{opacity:0;transform:none}30%{opacity:0;transform:scale(1.6)}40%,46%{opacity:1;transform:scale(.8)}56%,100%{opacity:1;transform:none}");
kf("n18dh",3,"0%,12%{opacity:1;transform:none}20%,44%{opacity:0;transform:translateY(6px)}56%,100%{opacity:1;transform:none}");

// 같은 구성. 투박한 쪽과 다듬은 쪽, 마음은 다듬은 쪽으로
TH2["미적 사용성 효과"]=K=>K.rect(16,16,54,70,{f:"#ECEDF0",s:LN,sw:1})
  +K.rect(16,16,54,11,{f:"#B4BAC6"})
  +K.rect(22,33,42,20,{f:"#DADDE3",s:LN,sw:.8})
  +K.rect(22,58,36,3.5,{f:"#B4BAC6"})+K.rect(22,64.5,26,3.5,{f:"#B4BAC6"})
  +K.rect(22,73,28,9,{f:C.mute})
  +K.card(86,10,58,80,14)
  +tbar(94,19,26,4.5)
  +K.rect(94,29,42,24,{f:C.soft,r:8})+K.icon("image",115,41,13,C.blue,1.5)
  +gbar(94,59,36)+gbar(94,66,26)
  +K.rect(94,74,42,11,{f:C.blue,r:5.5})
  +K.card(133,3,18,18,9)+gi(142,12.5,10,p(K.ICON.heart,`fill:${C.red};stroke:${C.red};stroke-width:1`));

// 목록의 처음 · 끝만 진하고 가운데는 흐리다
TH2["서열 위치 효과"]=K=>K.card(22,8,116,84,14)
  +[0,1,2,3,4].map(i=>{const y=20+i*15, e=i===0||i===4;
    return K.circ(36,y,5,{f:e?C.blue:"#E6E9F0"})+(e?tbar(48,y-2.5,i?50:62):K.rect(48,y-2,[0,54,66,46][i],4,{f:"#E6E9F0",r:2}))}).join("");

// 거의 다 찬 스탬프 카드
TH2["목표 가속 효과"]=K=>{let g="";
  for(let i=0;i<10;i++){const cx=32+(i%5)*24, cy=47+Math.floor(i/5)*23;
    g+=i<8?K.circ(cx,cy,9,{f:C.blue})+K.icon("check",cx,cy,9,W,2.4)
      :dashC(cx,cy,9,C.blue,1.3,"3 3")+(i===9?K.icon("q18gift",cx,cy,10,C.blue,1.6):"")}
  return K.card(16,10,128,80,14)
  +K.txt(28,27,"스탬프",{size:8.5,fill:C.ink,w:700})+K.txt(132,27,"2개 남음",{size:8,fill:C.blue,w:700,a:"end"})+g};

// 조각을 내 손으로 끼워 맞춘다. 그래서 더 아낀다
TH2["이케아 효과"]=K=>K.card(14,10,98,80,14)
  +K.rect(22,18,82,20,{f:C.soft,r:7})+K.txt(63,31,"내가 만든",{size:8,fill:C.blue,w:700,a:"middle"})
  +K.rect(22,42,39,40,{f:C.blue,r:7,o:.45})
  +`<rect x="65" y="42" width="39" height="40" rx="7" style="fill:rgba(47,107,255,.06);stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`
  +`<g transform="rotate(9 111 62)">`+K.card(92,42,39,40,7,C.blue)+`</g>`
  +K.fing(126,78)
  +K.card(128,6,20,20,10)+gi(138,16.5,11,p(K.ICON.heart,`fill:${C.red};stroke:${C.red};stroke-width:1`));

// 다들 들어가 있는데 내 자리만 비었다
TH2["FOMO"]=K=>K.card(16,10,128,80,14)
  +["#C9D6FF","#F6B9CB","#BFE8D2","#FFD9A0"].map((f,i)=>K.circ(34+i*23,36,8,{f})+K.circ(34+i*23,36,11,{s:C.red,sw:1.4})).join("")
  +dashC(126,36,10.5,C.mute,1.3,"3 3")+K.txt(126,39,"나",{size:8,fill:C.mute,w:700,a:"middle"})
  +K.rect(26,60,58,15,{f:"rgba(229,72,77,.12)",r:7.5})+K.circ(34,67.5,2.5,{f:C.red})
  +K.txt(40,70,"지금 진행 중",{size:7,fill:C.red,w:700})
  +pill(92,59.500,42,16,"참여");

// 끊겨 있어도 동그라미 · 네모로 보인다
TH2["폐쇄성의 법칙"]=K=>K.card(18,14,124,72,14)
  +`<circle cx="54" cy="50" r="19" transform="rotate(-30 54 50)" stroke-linecap="butt" style="fill:none;stroke:${DK};stroke-width:4;stroke-dasharray:20.85 9"/>`
  +`<path d="M87 44V31H100M112 31H125V44M125 56V69H112M100 69H87V56" stroke-linecap="butt" stroke-linejoin="miter" style="fill:none;stroke:${C.blue};stroke-width:4"/>`;

// 점들이 물결 한 줄, 곧은 줄 하나로 이어져 보인다
TH2["연속성의 법칙"]=K=>{let g="";
  for(let i=0;i<=8;i++){const t=i/8;g+=K.circ(30+100*t,72-44*t,3,{f:DK})}
  for(let i=0;i<=12;i++){const t=i/12;if(i===6)continue;g+=K.circ(30+100*t,50-21*Math.sin(t*Math.PI*2),3,{f:DK})}
  return K.card(16,12,128,76,14)+g};

// 간격은 똑같다. 테두리 안에 든 것끼리 묶인다
TH2["공통 영역의 법칙"]=K=>K.card(14,14,132,72,14)
  +K.rect(22,24,36,52,{f:C.soft,s:C.blue,sw:1,r:10})+K.rect(62,24,76,52,{f:C.soft,s:C.blue,sw:1,r:10})
  +[34,50,66].map(y=>[0,1,2,3,4,5].map(i=>K.circ(30+i*20,y,4.5,{f:DK})).join("")).join("");

// 흰 잔으로도, 마주 본 두 얼굴로도 보인다
TH2["전경과 배경"]=K=>{const h=p("M79.8 16H102C102 26 95 27 96 33C96.500 37 89 44 88 47C87.500 49 92 49 92 52C92 54 89.500 55 90 57C90.500 59 93 59 93 62C93 68 104 72 104 84H79.8Z","fill:#fff");
  return K.card(30,8,100,84,14,C.blue)+h+`<g transform="translate(160 0) scale(-1 1)">${h}</g>`};

// 온갖 것이 한 화면에 몰려 있고, 머리 쓰는 양은 꽉 찼다
TH2["인지 부하"]=K=>K.card(14,10,96,80,12)
  +K.rect(20,15,84,9,{f:C.amber,r:4.5,o:.9})
  +[C.blue,C.red,C.green,C.amber,DK].map((f,i)=>K.rect(20+i*17,28,14,8,{f,r:4})).join("")
  +K.rect(20,40,40,20,{f:C.skel,r:5})+K.rect(64,40,40,20,{f:C.skel,r:5})
  +K.circ(22,41,4.5,{f:C.red})+K.circ(102,58,4.5,{f:C.red})
  +gbar(20,64,84,3.5)+gbar(20,70,60,3.5)
  +[C.blue,C.red,C.green].map((f,i)=>K.rect(20+i*29,77,26,9,{f,r:4.5})).join("")
  +K.card(50,34,44,24,6)+tbar(56,40,20,4)+gbar(56,48,30,3.5)+K.icon("x",87,41,6,C.sub,1.6)
  +K.card(118,10,28,80,12)
  +K.rect(127,18,10,50,{f:C.skel,r:5})+K.rect(127,22,10,46,{f:C.red,r:5})
  +K.icon("alert",132,79,11,C.red,1.8);

// 머릿속 그림(장바구니)과 화면의 버튼이 같은 모양
TH2["멘탈 모델"]=K=>K.circ(34,76,13,{f:"#C9D6FF"})+K.icon("user",34,76,15,C.blue,1.8)
  +K.circ(39,58,2.2,{f:W})+K.circ(43,51,3.4,{f:W})
  +K.card(24,8,52,36,16)+K.icon("cart",50,26,19,C.blue,1.8)
  +K.card(92,12,54,76,12)
  +tbar(100,22,24,4.5)+K.rect(100,32,38,26,{f:C.skel,r:7})
  +K.rect(100,66,38,15,{f:C.blue,r:7.5})+K.icon("cart",119,73.5,10,W,1.8);
}
