// B2 그림 보충 (N=38): ps 39. 개념이라 그 개념이 화면에서 드러나는 한 장면으로 그린다.
{
const C=K.C, W="#FFFFFF", n2=K.n2, G="#DDE1EA", D="#3A4050", LN="#B4BAC6";
const A=(c,inner,st="")=>`<g class="b2x38 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x38{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:D,r:h/2});               // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});       // 흰 면 위 글줄
const pill=(x,y,w,h,s,{f=C.blue,ink=W,size=8}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
const gi=(cx,cy,size,inner)=>`<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(size/24)})">${inner}</g>`;
const p=(d,style)=>`<path d="${d}" style="${style}"/>`;
const op=(o,inner)=>`<g style="opacity:${o}">${inner}</g>`;
const okDot=(cx,cy,r=5,f=C.blue)=>K.circ(cx,cy,r,{f})+K.icon("check",cx,cy,n2(r*1.3),W,2.2);
const SHIELD="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z";

// 믿는 쪽 글만 눈에 들어오고 반대쪽은 흐려진다
TH2["확증 편향"]=K=>K.card(18,12,124,76,14)
  +[0,1,2,3].map(i=>{const y=19+i*16;
    return i%2?op(.32,K.circ(33,y+6.5,4.5,{f:LN})+K.icon("x",33,y+6.5,5,W,2)+gbar(43,y+4.5,72))
      :K.rect(24,y,112,13,{f:C.soft,r:6.5})+okDot(33,y+6.5,4.5)+tbar(43,y+4.25,i?52:64,4.5)}).join("");

// 중간 것이 큰 것과 값이 거의 같아서 큰 것이 이득처럼 보인다
TH2["미끼 효과"]=K=>{
  const cup=(cx,s,f)=>p(`M${n2(cx-s)} ${n2(58-2.2*s)}H${n2(cx+s)}L${n2(cx+.7*s)} 58H${n2(cx-.7*s)}Z`,`fill:${f};stroke:${f};stroke-width:2.4`);
  return K.card(14,20,38,60,11)+cup(33,5,LN)+K.txt(33,72,"3,000",{size:7.5,fill:C.sub,a:"middle"})
    +K.card(61,20,38,60,11)+K.rect(61,20,38,60,{s:LN,sw:1,r:11})+cup(80,8.2,LN)+K.txt(80,72,"6,500",{size:7.5,fill:C.sub,a:"middle"})
    +K.card(108,20,38,60,11)+K.rect(108,20,38,60,{s:C.blue,sw:1.4,r:11})+cup(127,10,C.blue)+K.txt(127,72,"7,000",{size:7.5,fill:C.ink,w:700,a:"middle"})
    +okDot(127,20,6.5)};

// 같은 회색인데 바탕에 따라 달라 보인다
TH2["대조 효과"]=K=>K.card(18,14,124,72,14)
  +K.rect(24,20,54,60,{f:"#2B3040",r:9})+K.rect(82,20,54,60,{f:"#F3F5F9",s:C.line,sw:.6,r:9})
  +K.rect(40,39,22,22,{f:"#9AA1AE",r:5})+K.rect(98,39,22,22,{f:"#9AA1AE",r:5});

// 추천이 붙은 새것이 있어도 쓰던 대로 둔다
TH2["현상 유지 편향"]=K=>K.card(18,14,124,72,14)
  +K.rect(24,21,112,26,{f:C.soft,s:C.blue,sw:1.2,r:10})
  +K.circ(38,34,6,{f:W,s:C.blue,sw:1.6})+K.circ(38,34,3,{f:C.blue})+K.txt(50,37.2,"쓰던 그대로",{size:9,fill:C.ink,w:700})
  +K.rect(24,53,112,26,{f:W,s:C.line,sw:1,r:10})
  +K.circ(38,66,6,{f:W,s:LN,sw:1.6})+K.txt(50,69.2,"새 요금제",{size:9,fill:C.mute})
  +K.rect(102,60,28,12,{f:"rgba(31,169,113,.14)",r:6})+K.txt(116,68.6,"추천",{size:7,fill:C.green,w:700,a:"middle"});

// 사람이 몰린 쪽으로 따라간다
TH2["밴드왜건"]=K=>K.card(18,12,124,76,14)
  +["#C9D6FF","#F6B9CB","#BFE8D2","#FFE0BE","#D9C8F5"].map((f,i)=>K.circ(33+i*9,28,6,{f,s:W,sw:1.6})).join("")
  +K.txt(134,31,"82%",{size:9,fill:C.blue,w:700,a:"end"})
  +K.rect(26,38,108,8,{f:C.skel,r:4})+K.rect(26,38,89,8,{f:C.blue,r:4})
  +K.circ(33,61,6,{f:G,s:W,sw:1.6})+K.txt(134,64,"18%",{size:9,fill:C.mute,w:700,a:"end"})
  +K.rect(26,71,108,8,{f:C.skel,r:4})+K.rect(26,71,19,8,{f:LN,r:4});

// 전문가 얼굴과 인증 표시가 붙으면 믿는다
TH2["권위 편향"]=K=>K.card(18,14,124,72,14)
  +K.circ(48,48,17,{f:"#C9D6FF"})+K.icon("user",48,48.5,20,"#5B76D6",1.8)
  +K.circ(61,61,7.5,{f:W})+okDot(61,61,6)
  +K.txt(74,44,"전문의 추천",{size:9.5,fill:C.ink,w:700})+gbar(74,52,52)+gbar(74,61,36);

// 하나가 빛나면 나머지도 다 좋아 보인다
TH2["후광 효과"]=K=>K.card(18,14,124,72,14)
  +K.circ(50,53,25,{f:C.amber,o:.14})+K.circ(50,56,14,{f:"#C9D6FF"})
  +`<ellipse cx="50" cy="34" rx="13" ry="4" style="fill:none;stroke:${C.amber};stroke-width:2.6"/>`
  +[[38,36],[52,28],[66,33]].map(([y,w])=>K.circ(88,y,5,{f:C.blue,o:.16})+K.icon("check",88,y,6.5,C.blue,2.2)+tbar(98,y-2.25,w,4.5)).join("");

// 같은 마크를 자꾸 보다 보면 좋아진다
TH2["단순 노출 효과"]=K=>{
  const mark=(cx,o)=>op(o,K.rect(cx-11,31,22,22,{f:C.blue,r:7})+K.circ(cx,42,5,{f:W}));
  return K.card(16,18,128,64,14)
    +mark(44,.25)+mark(80,.55)+mark(116,1)
    +K.txt(44,68,"1번",{size:7.5,fill:C.mute,a:"middle"})+K.txt(80,68,"5번",{size:7.5,fill:C.mute,a:"middle"})+K.txt(116,68,"20번",{size:7.5,fill:C.ink,w:700,a:"middle"})
    +gi(128,31,13,p(K.ICON.heart,`fill:${C.red};stroke:${W};stroke-width:2.4`))};

// 앞에서 빵을 봤더니 빈칸이 '터'로 채워진다
TH2["점화 효과"]=K=>K.card(16,26,52,48,12)
  +p("M33 44c-3.4-1-3.2-9 3-9h12c6.2 0 6.4 8 3 9v11a2 2 0 0 1-2 2H35a2 2 0 0 1-2-2z",`fill:#F8DDA4;stroke:#D9A441;stroke-width:1.5`)
  +K.txt(42,69,"빵",{size:8,fill:C.sub,w:700,a:"middle"})
  +p("M71 50H81",`fill:none;stroke:${C.mute};stroke-width:1.2;stroke-dasharray:.1 3.2`)
  +K.card(84,26,60,48,12)
  +K.txt(102,56,"버",{size:16,fill:C.ink,w:700,a:"middle"})
  +K.rect(114,39,20,23,{f:C.soft,r:5})+p("M119 39H129A5 5 0 0 1 134 44V57A5 5 0 0 1 129 62H119A5 5 0 0 1 114 57V44A5 5 0 0 1 119 39Z",`fill:none;stroke:${C.blue};stroke-width:1;stroke-dasharray:2.4 2.4`)
  +K.txt(124,56,"터",{size:16,fill:C.blue,w:700,a:"middle"});

// 제목은 궁금하게, 답은 가려 두기
TH2["호기심 갭"]=K=>K.card(18,12,124,76,14)
  +K.txt(28,32,"1위는 바로…",{size:10.5,fill:C.ink,w:700})
  +gbar(28,41,104)+op(.6,gbar(28,50,90))+op(.28,gbar(28,59,98))
  +pill(52,68,56,14,"더 보기",{size:7.5});

// 100원과 0원은 100원 차이 이상으로 다르게 느껴진다
TH2["제로 가격 효과"]=K=>op(.75,K.card(16,33,48,34,11)+K.txt(40,54,"100원",{size:10,fill:C.mute,w:700,a:"middle"}))
  +K.card(72,16,72,68,14)+K.rect(72,16,72,68,{s:C.blue,sw:1.4,r:14})
  +pill(94,24,28,12,"무료",{size:7.5})
  +K.txt(108,67,"0원",{size:24,fill:C.blue,w:700,a:"middle"});

// 같은 돈인데 주머니를 나눠 따로 셈한다
TH2["심리적 회계"]=K=>[["식비",C.blue,"rgba(47,107,255,.14)",20],["여행",C.green,"rgba(31,169,113,.16)",9],["저축",C.amber,"rgba(242,169,59,.2)",15]].map(([l,c,bg,w],i)=>{const x=14+i*47;
    return K.card(x,22,38,56,11)+K.circ(x+19,40,9.5,{f:bg})+K.txt(x+19,43.4,"₩",{size:9.5,fill:c,w:700,a:"middle"})
      +K.txt(x+19,62,l,{size:8,fill:C.ink,w:700,a:"middle"})
      +K.rect(x+7,68,24,4,{f:C.skel,r:2})+K.rect(x+7,68,w,4,{f:c,r:2})}).join("");

// 나중의 큰 것보다 지금의 작은 것을 고른다
TH2["쌍곡형 할인"]=K=>K.card(16,20,60,60,13)+K.rect(16,20,60,60,{s:C.blue,sw:1.4,r:13})
  +K.txt(46,42,"지금",{size:8,fill:C.blue,w:700,a:"middle"})+K.txt(46,62,"1만원",{size:13,fill:C.ink,w:700,a:"middle"})
  +okDot(46,20,6.5)
  +op(.6,K.card(84,20,60,60,13)+K.txt(114,42,"1년 뒤",{size:8,fill:C.sub,w:700,a:"middle"})+K.txt(114,64,"2만원",{size:17,fill:C.sub,w:700,a:"middle"}));

// 작은 부탁부터 들어주게 하고 점점 큰 부탁으로
TH2["발 들여놓기"]=K=>K.card(16,12,128,76,14)
  +K.rect(24,20,54,16,{f:C.blue,r:8})+K.icon("check",33,28,7,W,2.2)+K.txt(40,30.8,"무료 체험",{size:7.5,fill:W,w:700})
  +K.rect(24,42,82,16,{f:C.soft,r:8})+K.txt(34,52.8,"회원 가입",{size:7.5,fill:C.blue,w:700})
  +K.rect(24,64,112,16,{f:W,s:LN,sw:1,r:8})+K.txt(34,74.8,"유료 결제",{size:7.5,fill:C.sub,w:700});

// 한번 하겠다고 한 것은 계속 지키려 한다
TH2["약속과 일관성"]=K=>K.card(18,12,124,76,14)
  +K.rect(26,20,108,22,{f:C.soft,r:10})+K.rect(33,25,12,12,{f:C.blue,r:3.5})+K.icon("check",39,31,9,W,2.4)
  +K.txt(51,34,"매일 10분 하기",{size:8.5,fill:C.ink,w:700})
  +["월","화","수","목","금","토","일"].map((d,i)=>{const x=32+i*16;
    return K.txt(x,55,d,{size:7,fill:i<5?C.sub:C.mute,a:"middle"})+(i<5?okDot(x,68,5.5):K.circ(x,68,4.75,{f:W,s:i===5?C.blue:LN,sw:1.5}))}).join("");

// 점수 · 레벨 · 메달 같은 게임 장치를 붙인다
TH2["게이미피케이션"]=K=>K.card(18,12,124,76,14)
  +p("M41 54L36 73L44 68.5L48 75L52 58Z",`fill:${C.blue};stroke:${C.blue};stroke-width:1`)+p("M57 54L62 73L54 68.5L50 75L46 58Z",`fill:${C.blue};stroke:${C.blue};stroke-width:1`)
  +K.circ(49,43,15.5,{f:C.amber})+K.circ(49,43,11.5,{s:W,sw:1.1,o:.7})
  +gi(49,42.6,15,p(K.ICON.star,`fill:${W};stroke:${W};stroke-width:1.2`))
  +K.txt(78,37,"Lv.3",{size:11,fill:C.ink,w:700})
  +K.rect(78,44,52,7,{f:C.skel,r:3.5})+K.rect(78,44,34,7,{f:C.blue,r:3.5})
  +K.rect(78,60,34,14,{f:C.soft,r:7})+K.txt(95,70,"+50P",{size:8,fill:C.blue,w:700,a:"middle"});

// 계기 → 행동 → 보상 → 투자, 네 칸이 한 바퀴
TH2["훅 모델"]=K=>{
  const node=(cx,cy,s,on)=>(on?K.card(cx-16,cy-8,32,16,8,C.blue):K.card(cx-16,cy-8,32,16,8))+K.txt(cx,cy+2.9,s,{size:8,fill:on?W:C.ink,w:700,a:"middle"});
  const ch=(x,y,a)=>`<g transform="translate(${x} ${y}) rotate(${a})">`+p("M-2.5 -3.4L1.8 0L-2.5 3.4",`fill:none;stroke:${C.blue};stroke-width:1.8`)+`</g>`;
  return `<ellipse cx="80" cy="50" rx="40" ry="28" style="fill:none;stroke:#C3CAD8;stroke-width:1.6"/>`
    +ch(108.3,30.2,35)+ch(108.3,69.8,145)+ch(51.7,69.8,215)+ch(51.7,30.2,325)
    +node(80,22,"계기",1)+node(120,50,"행동")+node(80,78,"보상")+node(40,50,"투자")};

// 신호 → 행동 → 보상, 세 칸이 도는 고리
TH2["습관 루프"]=K=>{
  const node=(cx,cy,s,on)=>(on?K.card(cx-16,cy-8,32,16,8,C.blue):K.card(cx-16,cy-8,32,16,8))+K.txt(cx,cy+2.9,s,{size:8,fill:on?W:C.ink,w:700,a:"middle"});
  const ch=(x,y,a)=>`<g transform="translate(${x} ${y}) rotate(${a})">`+p("M-2.5 -3.4L1.8 0L-2.5 3.4",`fill:none;stroke:${C.blue};stroke-width:1.8`)+`</g>`;
  return K.circ(80,53,29,{s:"#C3CAD8",sw:1.6})
    +ch(105.1,38.5,60)+ch(80,82,180)+ch(54.9,38.5,300)
    +node(80,24,"신호",1)+node(111,67.5,"행동")+node(49,67.5,"보상")};

// 너무 어렵지도 쉽지도 않은 가운데 띠
TH2["몰입"]=K=>K.card(16,10,128,80,14)
  +p("M36 60L112 20H130V32L52 76H36Z",`fill:${C.blue};stroke:none;opacity:.16`)
  +p("M36 18V76H132",`fill:none;stroke:${LN};stroke-width:1.3`)
  +K.txt(50,34,"불안",{size:8,fill:C.mute,w:700})+K.txt(126,68,"지루함",{size:8,fill:C.mute,w:700,a:"end"})
  +K.txt(83,52,"몰입",{size:10,fill:C.blue,w:700,a:"middle"})
  +K.circ(110,32,7,{f:C.blue,o:.18})+K.circ(110,32,3.6,{f:C.blue});

// 어떻게 적어 넣든 다 받아 준다
TH2["포스텔의 법칙"]=K=>K.card(16,12,128,76,14)
  +["010-1234-5678","010 1234 5678","01012345678"].map((s,i)=>{const y=20+i*21;
    return K.rect(24,y,112,16,{f:W,s:C.line,sw:1,r:8})+K.txt(33,y+10.8,s,{size:8,fill:C.ink})+okDot(126,y+8,5,C.green)}).join("");

// 같은 두 점 사이, 꼬인 길 말고 곧은 길
TH2["오컴의 면도날"]=K=>K.card(18,14,124,72,14)
  +K.path("M34 50C42 16 58 18 62 40S50 78 70 76S84 22 98 26S106 72 126 50",{s:"#C9CED6",sw:2})
  +K.line(34,50,126,50,{s:C.blue,sw:2.8})
  +K.circ(34,50,5.5,{f:D})+K.circ(126,50,5.5,{f:D});

// 다섯 중 하나(20%)가 결과의 80%를 만든다
TH2["파레토 법칙"]=K=>K.card(16,12,128,76,14)
  +p("M28 37H44L111 62H28Z",`fill:${C.blue};stroke:none;opacity:.12`)
  +[0,1,2,3,4].map(i=>K.rect(28+i*22,21,16,16,{f:i?G:C.blue,r:5})).join("")
  +K.txt(31,56,"20%",{size:8,fill:C.blue,w:700})
  +K.rect(28,62,104,14,{f:C.skel,r:7})+K.rect(28,62,83,14,{f:C.blue,r:7})
  +K.txt(69.5,72,"80%",{size:8.5,fill:W,w:700,a:"middle"});

// 복잡한 윤곽이 아니라 네모 하나 · 동그라미 하나로 본다
TH2["프래그난츠 법칙"]=K=>K.card(18,14,124,72,14)
  +K.rect(44,30,40,40,{f:"rgba(58,64,80,.07)",s:D,sw:2.4,r:3})
  +K.circ(96,50,22,{f:C.blue,o:.12})+K.circ(96,50,22,{s:C.blue,sw:2.4});

// 간격은 같아도 마주 보는 것끼리 한 쌍으로 보인다
TH2["대칭의 법칙"]=K=>K.card(18,14,124,72,14)
  +[44,80,116].map((c,i)=>{const s=`fill:none;stroke:${i===1?C.blue:D};stroke-width:2.8`;
    return i===1?p(`M${c-4} 33Q${c-14} 50 ${c-4} 67`,s)+p(`M${c+4} 33Q${c+14} 50 ${c+4} 67`,s)
      :p(`M${c-3} 33H${c-9}V67H${c-3}`,s)+p(`M${c+3} 33H${c+9}V67H${c+3}`,s)}).join("");

// 같은 쪽으로 같이 움직이는 것끼리 한 묶음
kf("n38fate",3,"0%,100%{transform:translateY(18px)}38%,82%{transform:none}");
TH2["공동 운명의 법칙"]=K=>K.card(18,14,124,72,14)
  +[0,2,5].map(i=>K.circ(32+i*16,60,5.5,{f:LN})).join("")
  +A("n38fate",[1,3,4,6].map(i=>{const x=32+i*16;return K.circ(x,43,5.5,{f:C.blue})+p(`M${x-3.5} 32L${x} 28.5L${x+3.5} 32`,`fill:none;stroke:${C.blue};stroke-width:1.6;opacity:.55`)}).join(""));

// 간격은 같아도 선으로 이어진 것끼리 한 묶음
TH2["균일 연결성"]=K=>K.card(18,14,124,72,14)
  +[41,67,93,119].map((x,i)=>{const c=i===0?C.blue:D;
    return K.line(x,38,x,62,{s:c,sw:3})+K.circ(x,38,6,{f:c})+K.circ(x,62,6,{f:c})}).join("");

// 손잡이 막대와 화살표가 '여길 끌어 올려요' 하고 알려 준다
TH2["시그니파이어"]=K=>K.blk(22,10,116,14,7)
  +p("M73 27.5L80 21.5L87 27.5",`fill:none;stroke:${C.blue};stroke-width:2;opacity:.45`)
  +K.card(22,36,116,54,14)
  +p("M73 34.5L80 28.5L87 34.5",`fill:none;stroke:${C.blue};stroke-width:2`)
  +K.rect(67,42,26,5,{f:C.blue,r:2.5})
  +tbar(34,57,46)+gbar(34,68,92)+gbar(34,77,68);

// 화구 배치와 손잡이 배치가 같아서 어느 게 어느 건지 안다
TH2["매핑"]=K=>K.card(16,18,58,64,12)
  +[[34,38],[56,38],[34,62],[56,62]].map(([x,y],i)=>i?K.circ(x,y,8,{s:LN,sw:2})+K.circ(x,y,3.5,{s:LN,sw:1.4})
    :K.circ(x,y,8,{f:C.blue,o:.14})+K.circ(x,y,8,{s:C.blue,sw:2})+K.circ(x,y,3.5,{f:C.blue})).join("")
  +K.card(86,18,58,64,12)
  +[[104,38],[126,38],[104,62],[126,62]].map(([x,y],i)=>K.circ(x,y,7,{f:i?G:C.blue})+K.line(x,y-1,x,y-5,{s:i?"#8A92A0":W,sw:1.8})).join("");

// 고르면 안 되는 날은 아예 못 누르게 막아 둔다
TH2["제약"]=K=>{let g="";
  for(let n=1;n<=21;n++){const x=32+((n-1)%7)*16,y=32+Math.floor((n-1)/7)*18;
    g+=n===10?K.circ(x,y,7.5,{f:C.blue})+K.txt(x,y+2.8,n,{size:8,fill:W,w:700,a:"middle"})
      :K.txt(x,y+2.8,n,{size:8,fill:n<10?"#C9CED6":C.ink,w:n<10?500:700,a:"middle"})}
  return K.card(18,14,124,72,14)+g+K.line(27,32,133,32,{s:"#C9CED6",sw:.9})+K.line(27,50,37,50,{s:"#C9CED6",sw:.9})+K.line(43,50,53,50,{s:"#C9CED6",sw:.9})};

// 빈칸에 떠올려 쓰기(왼쪽)보다 보고 고르기(오른쪽)가 쉽다
TH2["인식과 회상"]=K=>op(.8,K.card(14,24,58,52,12)
    +K.txt(43,43,"?",{size:13,fill:C.mute,w:700,a:"middle"})
    +K.rect(22,50,42,16,{f:W,s:LN,sw:1,r:8})+K.line(30,54,30,62,{s:C.blue,sw:1.4}))
  +K.card(82,14,64,72,13)
  +[["#F6B9CB",24],["#AFC6FF",18],["#BFE8D2",28]].map(([f,w],i)=>{const y=21+i*21;
    return (i===1?K.rect(89,y,50,16,{f:C.soft,s:C.blue,sw:1.2,r:8})+K.icon("check",130,y+8,7,C.blue,2.2):K.rect(89,y,50,16,{f:"#F3F5F9",r:8}))
      +K.circ(98,y+8,4,{f})+(i===1?tbar(106,y+5.75,w,4.5):gbar(106,y+6,w))}).join("");

// 죽 이어진 글줄을 뜻이 통하는 덩어리로 끊는다
TH2["청킹"]=K=>op(.75,K.card(14,14,56,72,12)+[0,1,2,3,4,5,6,7,8].map(i=>gbar(22,21+i*7,[40,34,38,30,40,36,28,38,32][i],3.6)).join(""))
  +[0,1,2].map(i=>{const y=14+i*25;return K.card(80,y,66,22,8)+K.rect(88,y+5.5,[24,30,20][i],4.5,{f:C.blue,r:2.25})+gbar(88,y+13.5,[48,40,50][i],3.6)}).join("");

// 광고처럼 생긴 띠는 눈이 건너뛴다
TH2["배너 블라인드니스"]=K=>K.card(18,10,124,80,14)
  +op(.6,K.rect(26,18,108,19,{f:"#EEF0F4",r:6})+p("M32 18H128A6 6 0 0 1 134 24V31A6 6 0 0 1 128 37H32A6 6 0 0 1 26 31V24A6 6 0 0 1 32 18Z",`fill:none;stroke:${LN};stroke-width:.9;stroke-dasharray:2.4 2.4`)
    +K.txt(80,30.6,"광고",{size:8,fill:C.mute,w:700,a:"middle"}))
  +tbar(26,46,62)+gbar(26,56.5,102)+gbar(26,65.5,84)+gbar(26,74.5,96)
  +p("M34 48.5L74 48.5L40 58.5L96 58.5L36 67.5L66 76.5",`fill:none;stroke:${C.blue};stroke-width:1;opacity:.55`)
  +[[34,48.5],[74,48.5],[40,58.5],[96,58.5],[36,67.5],[66,76.5]].map(([x,y])=>K.circ(x,y,3.4,{f:C.blue,o:.6})).join("");

// 두 화면에서 한 군데가 바뀌었는데 못 알아챈다
TH2["변화맹"]=K=>{
  const scr=(x,c)=>K.card(x,16,62,68,12)+K.rect(x+8,24,46,22,{f:C.skel,r:6})+K.icon("image",x+31,35,12,C.mute,1.4)
    +tbar(x+8,52,34,4.5)+gbar(x+8,60.5,44,3.6)+K.rect(x+8,69,24,9,{f:c,r:4.5});
  return scr(14,LN)+scr(84,C.blue)
    +p("M92 65.5H116A4 4 0 0 1 120 69.5V77.5A4 4 0 0 1 116 81.5H92A4 4 0 0 1 88 77.5V69.5A4 4 0 0 1 92 65.5Z",`fill:none;stroke:${C.blue};stroke-width:1;stroke-dasharray:2.2 2.4`)};

// 가운데 하던 일만 보이고 가장자리 알림은 안 보인다
TH2["터널 비전"]=K=>{const g="b238t"+K.id();
  return `<defs><radialGradient id="${g}" cx=".5" cy=".5" r=".62"><stop offset=".3" stop-color="#1E2446" stop-opacity="0"/><stop offset="1" stop-color="#1E2446" stop-opacity=".62"/></radialGradient></defs>`
    +K.card(16,10,128,80,14)
    +tbar(26,20,34)+K.circ(131,22.5,5.5,{f:C.red})+K.txt(131,25.2,"1",{size:7.5,fill:W,w:700,a:"middle"})
    +gbar(26,31,22)+gbar(26,76,40)+gbar(104,76,30)+K.rect(24,42,22,22,{f:C.skel,r:6})+K.rect(114,42,22,22,{f:C.skel,r:6})
    +K.rect(16,10,128,80,{f:`url(#${g})`,r:14})
    +pill(58,40,44,20,"결제",{size:9.5})+K.circ(80,50,22,{s:W,sw:1.2,o:.7})};

// 끝까지 가는 길을 막아서는 걸림돌
TH2["마찰"]=K=>K.card(16,16,128,68,14)
  +p("M38 50H108",`fill:none;stroke:${LN};stroke-width:1.4;stroke-dasharray:.1 4`)
  +[56,74,92].map(x=>K.rect(x-3,32,6,36,{f:C.amber,r:3})).join("")
  +K.fing(31,50)+pill(108,40,28,20,"구매",{size:8.5});

// 지우기 전에 일부러 한 번 멈춰 세운다
TH2["착한 마찰"]=K=>K.card(20,12,120,76,14)
  +K.circ(40,29,8.5,{f:C.red,o:.12})+K.icon("trash",40,29,10,C.red,1.6)
  +K.txt(54,32,"‘삭제’ 입력",{size:9,fill:C.ink,w:700})
  +K.rect(30,43,100,17,{f:W,s:C.blue,sw:1.2,r:8.5})+K.txt(39,54.6,"삭제",{size:8.5,fill:C.ink})+K.line(57.5,47.5,57.5,55.5,{s:C.blue,sw:1.3})
  +pill(30,66,100,15,"삭제하기",{f:C.red,size:8});

// 방패 · 자물쇠 · 인증 표시로 안심시킨다
TH2["신뢰 신호"]=K=>K.card(18,12,124,76,14)
  +gi(46,39,34,p(SHIELD,`fill:rgba(31,169,113,.14);stroke:${C.green};stroke-width:1.5`)+p("M8.4 12l2.6 2.6 4.6-5.2",`fill:none;stroke:${C.green};stroke-width:1.9`))
  +K.txt(70,37,"안전 결제",{size:10.5,fill:C.ink,w:700})+gbar(70,45,48)
  +[["lock",C.sub],["star",C.amber],["check",C.blue]].map(([ic,c],i)=>{const x=27+i*37;
    return K.rect(x,63,32,15,{f:W,s:C.line,sw:1,r:7.5})+K.icon(ic,x+9.5,70.5,8,c,1.7)+gbar(x+16,68.7,10,3.6)}).join("");

// 일하는 과정을 보여 주면 결과가 더 값져 보인다
kf("n38spin",2.4,"to{transform:rotate(720deg)}","animation-timing-function:linear");
TH2["노동 착시"]=K=>K.card(18,12,124,76,14)
  +okDot(34,26,5,C.green)+K.txt(45,28.9,"항공권 검색",{size:8,fill:C.sub})
  +okDot(34,44,5,C.green)+K.txt(45,46.9,"가격 비교",{size:8,fill:C.sub})
  +A("n38spin",K.circ(34,62,4.6,{s:C.skel,sw:2})+p("M34 57.4A4.6 4.6 0 0 1 38.6 62",`fill:none;stroke:${C.blue};stroke-width:2`))
  +K.txt(45,64.9,"최저가 찾는 중",{size:8,fill:C.ink,w:700})
  +K.rect(28,75,104,5,{f:C.skel,r:2.5})+K.rect(28,75,70,5,{f:C.blue,r:2.5});

// 일을 마쳤을 때 웃어 주는 작은 기쁨
TH2["딜라이트"]=K=>{const sp=(cx,cy,s)=>gi(cx,cy,s,p(K.ICON.sparkle,`fill:${C.amber};stroke:${C.amber};stroke-width:1.2`));
  return K.card(24,12,112,76,14)
    +K.circ(80,42,18,{f:C.blue})
    +p("M71 40Q74.5 35.5 78 40",`fill:none;stroke:${W};stroke-width:2.2`)+p("M82 40Q85.5 35.5 89 40",`fill:none;stroke:${W};stroke-width:2.2`)
    +p("M72 46.5Q80 55 88 46.5",`fill:none;stroke:${W};stroke-width:2.2`)
    +sp(50,30,13)+sp(110,25,10)+sp(113,52,7)+sp(46,55,6)
    +K.txt(80,77,"잘했어요!",{size:9,fill:C.ink,w:700,a:"middle"})};
}
