// B2 그림 보충 (N=40): rs 24 · ax 11 · tl 11. 부품이 아니라 개념 · 기능이라, 그 개념이 화면에서 드러나는 한 장면으로 그린다.
{
const C=K.C, W="#FFFFFF", n2=K.n2, LN="#8A92A0", PU="#8B5CF6", PK="#F0529C", SOFTBG="#F3F5FA";
const A=(c,inner,st="")=>`<g class="b2x40 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x40{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:ease-in-out}`);
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});        // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});        // 흰 면 위 글줄
const pill=(x,y,w,h,s,{f=C.blue,ink=W,size=8}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
const gi=(cx,cy,size,inner)=>`<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(size/24)})">${inner}</g>`;
const p=(d,style)=>`<path d="${d}" style="${style}"/>`;
const drect=(x,y,w,h,r,s,f="none",da="3 2.5",sw=1.1)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" style="fill:${f};stroke:${s};stroke-width:${sw};stroke-dasharray:${da}"/>`;
const dline=(d,s,da="2.5 2.5",sw=1.1)=>p(d,`fill:none;stroke:${s};stroke-width:${sw};stroke-dasharray:${da}`);
const tog=(x,y,on)=>K.rect(x,y,24,14,{f:on?C.blue:"#D3D8E3",r:7})+K.circ(on?x+17:x+7,y+7,5,{f:W});
const key=(x,y,w,h,s,on)=>K.card(x,y,w,h,4,on?C.blue:W)+(s?K.txt(x+w/2,y+h/2+2.7,s,{size:7.5,fill:on?W:C.ink,w:700,a:"middle"}):"");
const ok=(cx,cy,good,r=6.5)=>K.circ(cx,cy,r,{f:good?"rgba(31,169,113,.16)":"rgba(229,72,77,.14)"})+K.icon(good?"check":"x",cx,cy,r*1.25,good?C.green:C.red,2.2);
// 피그마식 컴포넌트 표시: 마름모 넷(원본) · 빈 마름모 하나(복사본)
const dia4=(cx,cy,c=PU)=>[[0,-3.2],[3.2,0],[0,3.2],[-3.2,0]].map(([dx,dy])=>p(`M${n2(cx+dx)} ${n2(cy+dy-2.2)}l2.2 2.2-2.2 2.2-2.2-2.2z`,`fill:${c};stroke:none`)).join("");
const dia1=(cx,cy,c=PU)=>p(`M${cx} ${cy-3.6}l3.6 3.6-3.6 3.6-3.6-3.6z`,`fill:#fff;stroke:${c};stroke-width:1.2`);
// 작은 사진(하늘 · 해 · 산)
const photo=(x,y,w,h,r)=>K.rect(x,y,w,h,{f:"#CFE0FF",r})+K.circ(x+w*.7,y+h*.3,Math.min(w,h)*.13,{f:C.amber})
  +p(`M${n2(x+w*.04)} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.42)}l${n2(w*.2)} ${n2(h*.33)} ${n2(w*.13)}-${n2(h*.17)} ${n2(w*.33)} ${n2(h*.42)}z`,`fill:#7F9BEA;stroke:none`);
Object.assign(K.ICON,{
  q40flag:["M6 21V4","M6 4.500h12l-2.500 4 2.500 4H6"],
  q40spk:"M4 10v4h3.500l5 4V6l-5 4z",
  q40a11y:["M12 4.200a1.700 1.700 0 1 1 0 3.400 1.700 1.700 0 0 1 0-3.400z","M6 10.500h12","M12 10.500v4.500","M12 15l-3.200 5.500","M12 15l3.200 5.500"],
});

/* ───────── rs · 리서치 · 설계 ───────── */
// 가장 잘하는 곳을 기준선으로 세우고 우리 막대가 얼마나 모자란지 본다
TH2["벤치마킹"]=K=>K.card(16,8,128,84,14)
  +[[37,78,"#C9CED8",C.amber],[57,50,C.blue,C.blue],[77,36,"#DDE1EA","#C9CED8"]].map(([y,w,f,lg],i)=>K.rect(26,y-6,12,12,{f:lg,r:4})+K.rect(44,y-5,w,10,{f,r:5})).join("")
  +K.txt(50,59.6,"우리",{size:7,fill:W,w:700})
  +dline("M97 57H119",C.blue,"2 2.5",1.2)
  +K.line(122,24,122,86,{s:C.amber,sw:1.4})
  +pill(107,12,30,13,"기준",{f:C.amber,size:7.5});

// 고객 · 앞 · 뒤 세 층에 놓인 칸과 층을 가르는 점선
TH2["서비스 블루프린트"]=K=>K.card(12,8,136,84,12)
  +K.txt(20,27.7,"고객",{size:7.5,fill:C.blue,w:700})+K.txt(20,53.7,"앞",{size:7.5,fill:C.sub,w:700})+K.txt(20,79.7,"뒤",{size:7.5,fill:C.sub,w:700})
  +dline("M18 38H142",LN,"2.5 2.5",.9)+dline("M18 64H142",C.blue,"4 2.5",1.1)
  +[57,91,125].map((x,i)=>K.line(x,32,x,44,{s:LN,sw:1})+(i?K.line(x,58,x,70,{s:LN,sw:1}):"")).join("")
  +K.line(70,25,78,25,{s:C.blue,sw:1.2})+K.line(104,25,112,25,{s:C.blue,sw:1.2})
  +[44,78,112].map((x,i)=>K.rect(x,18,26,14,{f:"#DCE6FF",s:C.blue,sw:1,r:4})+K.rect(x+5,23,[14,16,12][i],4,{f:C.blue,r:2})
    +K.rect(x,44,26,14,{f:W,s:"#B4BAC6",sw:1,r:4})+gbar(x+5,49,[16,12,14][i])
    +(i?K.rect(x,70,26,14,{f:C.skel,r:4})+K.rect(x+5,75,14,4,{f:"#B4BAC6",r:2}):"")).join("");

// 가운데 사용자, 가까운 고리와 먼 고리에 놓인 사람들
TH2["이해관계자 지도"]=K=>{
  const dot=(r,deg,c,s=5.5)=>{const a=deg*Math.PI/180,x=n2(80+r*Math.cos(a)),y=n2(50+r*Math.sin(a));return K.circ(x,y,s,{f:c,s:W,sw:1.2})+K.icon("user",x,y,s*1.25,W,1.6)};
  return K.circ(80,50,42,{f:C.blk})+K.circ(80,50,42,{s:"#C5CBDA",sw:.8})
  +`<circle cx="80" cy="50" r="27" style="fill:#fff" filter="url(#b2lift)"/>`+K.circ(80,50,27,{s:C.hair,sw:.5})
  +K.line(80,50,95,35,{s:C.line,sw:1})+K.line(80,50,63,60,{s:C.line,sw:1})
  +K.circ(80,50,11,{f:C.blue})+K.icon("user",80,50,13,W,1.8)
  +dot(20,-42,C.amber)+dot(20,150,C.green)
  +dot(35,-115,PK,5)+dot(35,-8,PU,5)+dot(35,62,"#9AA1AE",5)+dot(35,118,"#5B8DEF",5)+dot(35,196,"#9AA1AE",5)};

// 누가 · 어떤 상황에서 · 무엇을 하려는지 적은 짧은 이야기
TH2["시나리오"]=K=>K.card(18,10,124,80,14)
  +K.circ(38,29,11,{f:"#C9D6FF"})+K.icon("user",38,29,13,C.blue,1.8)
  +pill(56,22,36,14,"출근길",{f:C.soft,ink:C.blue,size:7.5})+pill(96,22,36,14,"한 손",{f:C.soft,ink:C.blue,size:7.5})
  +tbar(28,50,24,4.5)+gbar(56,50.25,76)+gbar(28,60,104)
  +gbar(28,70,62)+pill(96,65,36,14,"목표",{size:7.5})
  +gbar(28,80,40);

// 누가 · 무엇을 · 왜, 세 칸짜리 요구 카드
TH2["유저 스토리"]=K=>K.card(20,10,120,80,10)
  +K.rect(20,10,120,9,{f:C.amber,r:4.5})+K.rect(20,15,120,5,{f:C.amber})
  +[["누가",34,44],["무엇을",54,58],["왜",74,36]].map(([s,y,w],i)=>pill(28,y-7,36,14,s,{f:C.soft,ink:C.blue,size:7.5})
    +(i?gbar(72,y-2.25,w,4.5):tbar(72,y-2.25,w,4.5))).join("");

// 사람(액터)과 시스템 안 타원(할 수 있는 일)을 선으로 이은 그림
TH2["유스케이스"]=K=>{
  const el=(y,s)=>`<ellipse cx="106" cy="${y}" rx="28" ry="9.5" style="fill:#EAF0FF;stroke:${C.blue};stroke-width:1.1"/>`+K.txt(106,y+2.8,s,{size:7.5,fill:C.blue,w:700,a:"middle"});
  return K.card(66,8,80,84,12)
  +[26,50,74].map(y=>K.line(38,50,78,y,{s:LN,sw:1})).join("")
  +K.circ(26,34,6,{f:W,s:C.ink,sw:1.5})+K.path("M26 40v18M16 47h20M26 58l-8 13M26 58l8 13",{s:C.ink,sw:1.5})
  +el(26,"로그인")+el(50,"검색")+el(74,"결제")};

// 목표와 범위(넣는 것 · 빼는 것)를 적은 문서 한 장
TH2["PRD"]=K=>K.card(34,6,92,88,8)
  +K.txt(44,24,"PRD",{size:12,fill:C.ink,w:800})+K.rect(104,14,14,12,{f:C.soft,r:3})+K.icon("edit",111,20,8,C.blue,1.6)
  +K.line(44,30,116,30,{s:C.line,sw:1})
  +K.txt(44,42,"목표",{size:7.5,fill:C.blue,w:700})+gbar(44,46.5,72)+gbar(44,53.5,54)
  +K.txt(44,68,"범위",{size:7.5,fill:C.blue,w:700})
  +K.icon("check",48,75.5,7,C.green,2.2)+gbar(56,73.5,48)
  +K.icon("x",48,84.5,6.5,C.red,2.2)+gbar(56,82.5,36);

// 기능 번호 · 내용 · 필수 여부가 칸칸이 든 표
TH2["기능 명세"]=K=>K.card(14,10,132,80,10)
  +K.rect(14,10,132,17,{f:"#EEF1F7",r:10})+K.rect(14,20,132,7,{f:"#EEF1F7"})
  +tbar(22,16.5,14,4)+tbar(54,16.5,26,4)+tbar(113,16.5,20,4)
  +K.line(46,10,46,90,{s:C.line,sw:.8})+K.line(104,10,104,90,{s:C.line,sw:.8})+K.line(14,48,146,48,{s:C.line,sw:.8})+K.line(14,69,146,69,{s:C.line,sw:.8})
  +[37.5,58.5,79.5].map((y,i)=>K.txt(21,y+2.7,"F-0"+(i+1),{size:7.5,fill:C.sub,w:700})
    +gbar(54,y-5.5,[42,36,40][i])+gbar(54,y+1.5,[28,40,22][i])
    +pill(109,y-6.5,32,13,i===2?"선택":"필수",i===2?{f:C.skel,ink:C.sub,size:7.5}:{f:C.soft,ink:C.blue,size:7.5})).join("");

// 화면 그림에 번호를 달고 옆 칸에 번호별 설명
TH2["화면 설계서"]=K=>{
  const nb=(x,y,n)=>K.circ(x,y,6,{f:C.blue,s:W,sw:1.2})+K.txt(x,y+2.7,n,{size:7.5,fill:W,w:700,a:"middle"});
  return K.card(14,10,62,80,10)
  +K.rect(24,20,44,24,{s:LN,sw:1.1,r:3})+K.line(24,20,68,44,{s:LN,sw:.9})+K.line(68,20,24,44,{s:LN,sw:.9})
  +K.line(25,53,62,53,{s:"#B4BAC6",sw:2.6})+K.line(25,60,52,60,{s:"#B4BAC6",sw:2.6})
  +K.rect(24,69,44,13,{s:LN,sw:1.1,r:3})
  +nb(24,20,1)+nb(24,56,2)+nb(24,75.5,3)
  +K.card(86,10,60,80,10)+K.line(86,37,146,37,{s:C.line,sw:.8})+K.line(86,63,146,63,{s:C.line,sw:.8})
  +[24,50,76].map((y,i)=>nb(98,y,i+1)+gbar(110,y-5,[28,24,26][i])+gbar(110,y+2,[20,28,16][i])).join("")};

// 큰 일 하나를 1 · 2 · 3 단계로, 다시 2.1 · 2.2 로 쪼갠 가지
TH2["태스크 분석"]=K=>{
  const bx=(x,y,w,h,s)=>K.card(x,y,w,h,6)+K.txt(x+6,y+h/2+2.7,s,{size:7.5,fill:C.blue,w:700})+gbar(x+(s.length>1?20:14),y+h/2-2,w-(s.length>1?26:20));
  return K.path("M80 26V36M30 42V36H130V42M80 36V42M80 60V68M58 74V68H102V74",{s:LN,sw:1.2})
  +K.card(54,8,52,18,7,C.blue)+K.rect(64,14.5,32,5,{f:W,r:2.5})
  +bx(12,42,36,18,"1")+bx(62,42,36,18,"2")+bx(112,42,36,18,"3")
  +bx(38,74,40,17,"2.1")+bx(82,74,40,17,"2.2")};

// 핵심 하나만 진짜로, 나머지는 빈 점선 칸
TH2["MVP"]=K=>K.card(20,10,120,80,14)
  +K.rect(30,20,52,60,{f:C.blue,r:10})+K.circ(56,42,11,{f:"rgba(255,255,255,.22)"})+K.icon("check",56,42,13,W,2.4)
  +K.txt(56,67,"핵심",{size:9,fill:W,w:700,a:"middle"})
  +[20,42,64].map((y,i)=>drect(90,y,40,16,6,"#B4BAC6")+(i===1?K.txt(110,y+10.7,"나중",{size:7.5,fill:C.mute,w:700,a:"middle"}):K.rect(98,y+6,[24,0,18][i],4,{f:C.skel,r:2}))).join("");

// 시안과 만든 화면을 나란히 놓고 어긋난 곳을 짚는다
TH2["디자인 QA"]=K=>K.card(12,12,62,76,12)+K.card(86,12,62,76,12)
  +K.txt(21,26.5,"시안",{size:7.5,fill:C.sub,w:700})+K.txt(95,26.5,"구현",{size:7.5,fill:C.sub,w:700})
  +K.rect(21,32,44,14,{f:C.skel,r:5})+K.rect(95,32,44,14,{f:C.skel,r:5})+gbar(21,51,30)+gbar(95,51,14)
  +K.rect(21,62,44,15,{f:C.blue,r:7.5})
  +drect(95,62,44,15,7.5,C.red,"none","2.5 2",1)
  +K.rect(101,66,38,15,{f:C.blue,r:7.5,o:.85})
  +pill(113,47.5,28,12,"4px",{f:C.red,size:7.5})
  +K.circ(65,14,7,{f:C.green,s:W,sw:1.4})+K.icon("check",65,14,8,W,2.2)
  +K.circ(139,14,7,{f:C.red,s:W,sw:1.4})+K.icon("x",139,14,7,W,2.2);

// 시안에서 고른 요소의 수치 + 옆에 붙은 코드 칸
TH2["핸드오프"]=K=>K.card(12,12,76,76,10)
  +tbar(21,22,26,4.5)+gbar(21,31,40)
  +K.rect(21,58,58,20,{f:C.blue,r:10})
  +K.rect(18.5,55.5,63,25,{s:C.blue,sw:1,r:1})
  +[[18.5,55.5],[81.5,55.5],[18.5,80.5],[81.5,80.5]].map(([x,y])=>K.rect(x-2.2,y-2.2,4.4,4.4,{f:W,s:C.blue,sw:1})).join("")
  +pill(30,39,40,12,"120×44",{size:7.5})
  +dline("M82 68H96",C.blue,"2 2.5",1.2)
  +K.card(96,12,52,76,10,"#1B1E26")
  +K.txt(104,26.5,"CSS",{size:7.5,fill:"#8A92A0",w:700})
  +[[36,14,16],[46,18,10],[56,12,18],[66,16,12],[76,10,14]].map(([y,a,b])=>K.rect(104,y,a,4,{f:"#F28DB2",r:2})+K.rect(107+a,y,b,4,{f:"#8FB2FF",r:2})).join("");

// 시안 하나를 가운데 두고 여럿이 붙인 의견
TH2["디자인 크리틱"]=K=>{
  const cm=(x,y,w,c,a,b)=>K.card(x,y,w,22,9)+K.circ(x+11,y+11,5.5,{f:c})+gbar(x+20,y+6.5,a,3.5)+gbar(x+20,y+12.5,b,3.5);
  const pin=(x,y,c)=>K.circ(x,y,4,{f:c,s:W,sw:1.4});
  return K.card(46,20,68,62,10)
  +K.rect(54,28,52,22,{f:C.skel,r:5})+tbar(54,56,28,4.5)+gbar(54,64,44)+K.rect(54,71,30,7,{f:C.blue,r:3.5})
  +pin(58,32,C.amber)+pin(104,60,C.green)+pin(90,74.5,PK)
  +cm(8,6,50,C.amber,22,14)+cm(104,36,48,C.green,20,12)+cm(6,72,48,PK,20,14)};

// 접근성 항목별로 통과 · 미달을 매긴 점검표
TH2["접근성 감사"]=K=>K.card(14,10,132,80,14)
  +K.circ(42,50,19,{f:C.blue})+K.icon("q40a11y",42,50,27,W,2)
  +K.line(72,39,134,39,{s:C.line,sw:.8})+K.line(72,61,134,61,{s:C.line,sw:.8})
  +[["대비",28,1],["대체 글",50,0],["초점",72,1]].map(([s,y,g])=>ok(82,y,g)+K.txt(94,y+3,s,{size:8.5,fill:g?C.ink:C.red,w:600})).join("");

// 딱딱한 말을 지우고 알아듣는 말로 고쳐 쓴다
TH2["UX 라이팅"]=K=>K.card(16,12,128,76,14)
  +K.txt(28,36,"오류 코드 401",{size:9,fill:C.mute,w:500})+K.line(26,33,86,33,{s:C.red,sw:1.2})
  +K.circ(126,31,9,{f:C.soft})+K.icon("edit",126,31,11,C.blue,1.7)
  +K.rect(24,46,112,18,{f:C.soft,r:6})
  +K.txt(29,58.6,"다시 로그인해 주세요",{size:10,fill:C.ink,w:700})
  +gbar(28,74,48);

// 입력 칸 · 도움말 · 버튼 · 건너뛰기에 든 짧은 글들
TH2["마이크로카피"]=K=>K.card(26,6,108,88,12)
  +K.rect(36,15,88,18,{f:W,s:C.line,sw:1,r:6})+K.txt(43,27,"비밀번호",{size:7.5,fill:C.mute})
  +K.rect(36,37,66,12,{f:C.soft,r:4})+K.txt(39,45.6,"8자 이상 써 주세요",{size:7,fill:C.blue,w:600})
  +K.rect(36,55,88,18,{f:C.blue,r:9})+K.txt(80,67.1,"시작하기",{size:8.5,fill:W,w:700,a:"middle"})
  +K.rect(54,77,52,12,{f:C.soft,r:4})+K.txt(80,85.6,"나중에 할게요",{size:7,fill:C.blue,w:600,a:"middle"});

// 같은 얼굴(보이스)이 기쁠 때와 막혔을 때 다른 어조(톤)로 말한다
TH2["보이스 앤 톤"]=K=>K.path("M40 42L56 30M40 58L56 70",{s:"#B4BAC6",sw:1.2})
  +K.circ(28,50,15,{f:C.blue})+K.circ(22.5,46.5,1.7,{f:W})+K.circ(33.5,46.5,1.7,{f:W})+K.path("M21.500 53.500q6.500 6 13 0",{s:W,sw:1.8})
  +K.card(54,12,94,30,12,"#E7F7EF")+K.txt(66,30.4,"다 됐어요!",{size:9.5,fill:"#157A52",w:700})
  +K.card(54,58,94,30,12,"#FFF2DC")+K.txt(66,76.2,"다시 해 볼까요?",{size:9,fill:"#8A5A0B",w:700});

// 여정 가운데 한 군데가 빨갛게 막힌 자리
TH2["페인 포인트"]=K=>K.card(14,12,132,76,14)
  +K.line(34,62,96,62,{s:C.blue,sw:1.6})+dline("M96 62H126","#B4BAC6","3 3",1.6)
  +[34,64].map(x=>K.circ(x,62,6,{f:C.blue})+K.icon("check",x,62,7,W,2.2)).join("")
  +K.circ(126,62,5.5,{f:W,s:"#B4BAC6",sw:1.5})
  +K.circ(96,62,14,{f:"rgba(229,72,77,.16)"})+K.circ(96,62,8.5,{f:C.red})+K.icon("x",96,62,8.5,W,2.4)
  +K.circ(96,31,9,{f:W,s:C.red,sw:1.5})+K.circ(92.8,28.5,1.1,{f:C.red})+K.circ(99.2,28.5,1.1,{f:C.red})+K.path("M92 35.500q4 -4 8 0",{s:C.red,sw:1.4})
  +gbar(25,76,18,3.5)+gbar(55,76,18,3.5)+K.rect(86,76,20,3.5,{f:C.red,r:1.75,o:.6})+gbar(118,76,16,3.5);

// 말로 듣는 조사(따옴표 말풍선)와 숫자로 재는 조사(막대 · %)
TH2["정성 · 정량"]=K=>K.card(12,12,64,76,12)+K.card(84,12,64,76,12)
  +K.txt(21,27,"정성",{size:8,fill:C.sub,w:700})+K.txt(93,27,"정량",{size:8,fill:C.sub,w:700})
  +K.rect(20,34,48,24,{f:C.soft,r:8})+K.txt(24,50,"“",{size:15,fill:C.blue,w:800})+K.rect(35,41,26,4,{f:C.blue,r:2,o:.7})+K.rect(35,48.5,18,4,{f:C.blue,r:2,o:.45})
  +K.rect(28,63,40,17,{f:SOFTBG,r:7})+gbar(35,69.5,26)
  +K.txt(140,28,"72%",{size:10,fill:C.blue,w:800,a:"end"})
  +K.line(92,80,140,80,{s:C.line,sw:1})
  +[[94,16],[106,26],[118,40],[130,22]].map(([x,h],i)=>K.rect(x,80-h,8,h,{f:i===2?C.blue:"#C9D6FF",r:2.5})).join("");

// BETA 딱지가 붙은 앱 + 먼저 써 보는 몇 사람
TH2["베타 테스트"]=K=>K.card(18,24,56,56,16,C.blue)+K.icon("sparkle",46,52,30,W,1.8)
  +K.rect(44,14,40,16,{f:C.amber,r:8,fx:"url(#b2lift)"})+K.txt(64,24.9,"BETA",{size:8,fill:W,w:800,a:"middle"})
  +[0,1,2].map(r=>[0,1,2].map(c=>{const on=[[0,1],[1,0],[2,2]].some(([a,b])=>a===r&&b===c),x=100+c*18,y=30+r*20;
    return K.circ(x,y,7.5,{f:on?C.blue:"rgba(255,255,255,.7)",s:on?W:"none",sw:1.2})+K.icon("user",x,y,9,on?W:"#B4BAC6",1.6)}).join("")).join("");

// 사원증을 건 만든 사람이 자기 제품을 직접 쓴다
TH2["도그푸딩"]=K=>K.path("M34 4L44 21L54 4",{s:LN,sw:1.6})
  +K.card(20,22,48,64,9)+K.rect(38,18,12,7,{f:LN,r:2})
  +K.circ(44,46,11,{f:"#C9D6FF"})+K.icon("user",44,46,13,C.blue,1.8)
  +tbar(31,64,26,4.5)+gbar(29,73,30,3.5)
  +K.card(88,8,54,84,12)
  +pill(98,15,34,13,"사내용",{f:"#3A4050",size:7.5})
  +K.rect(96,34,38,22,{f:C.skel,r:6})+gbar(96,62,30)
  +K.rect(96,72,38,13,{f:C.blue,r:6.5})
  +K.circ(120,78.5,7,{f:"rgba(255,255,255,.35)"})+K.circ(120,78.5,4,{f:W});

// 기능마다 달린 깃발과 켜고 끄는 스위치
TH2["피처 플래그"]=K=>K.card(18,10,124,80,14)
  +K.line(28,37,132,37,{s:C.line,sw:.8})+K.line(28,63,132,63,{s:C.line,sw:.8})
  +[[24,1],[50,1],[76,0]].map(([y,on],i)=>K.icon("q40flag",35,y,13,on?C.blue:C.mute,1.7)
    +(on?tbar(46,y-2.25,[40,26,0][i],4.5):gbar(46,y-2.25,34,4.5))
    +(i===1?pill(77,y-6.5,26,13,"10%",{f:C.soft,ink:C.blue,size:7.5}):"")
    +tog(108,y-7,on)).join("");

// 머리 그림 2가지 × 버튼 모양 2가지 = 조합 넷, 그중 하나가 이김
TH2["다변량 테스트"]=K=>[0,1,2,3].map(i=>{const x=i%2?86:20,y=i<2?8:54,win=i===2;
    return K.card(x,y,54,38,9)
    +K.rect(x+6,y+6,42,13,{f:i%2?"#FBD3DF":"#C9D6FF",r:4})
    +K.rect(x+6,y+24,28,9,{f:"#3A4050",r:i<2?4.5:1.2})
    +(win?K.rect(x-1,y-1,56,40,{s:C.blue,sw:1.8,r:10})+K.circ(x+54,y,7,{f:C.blue,s:W,sw:1.4})+K.icon("check",x+54,y,8,W,2.2):"")}).join("");

/* ───────── ax · 접근성 ───────── */
// 초점이 놓인 버튼을 소리로 읽어 준다
kf("n40w1",2.6,"0%{opacity:.15}30%,100%{opacity:1}");
kf("n40w2",2.6,"0%,25%{opacity:.15}55%,100%{opacity:1}");
TH2["스크린 리더"]=K=>K.card(14,8,62,84,12)
  +tbar(23,19,24,4.5)+gbar(23,28,42)+gbar(23,36,32)
  +K.rect(23,63,44,16,{f:C.blue,r:8})+K.txt(45,74,"확인",{size:8.5,fill:W,w:700,a:"middle"})
  +K.rect(19.500,59.500,51,23,{s:C.ink,sw:1.8,r:4})
  +gi(106,30,34,p(K.ICON.q40spk,`fill:${C.blue};stroke:${C.blue};stroke-width:1.4`))
  +A("n40w1",gi(106,30,34,p("M15.500 9a4 4 0 0 1 0 6",`fill:none;stroke:${C.blue};stroke-width:1.6`)))
  +A("n40w2",gi(106,30,34,p("M18.200 6.200a8 8 0 0 1 0 11.600",`fill:none;stroke:${C.blue};stroke-width:1.6`)))
  +K.card(86,58,62,26,10)+K.txt(117,74.2,"확인, 버튼",{size:8.5,fill:C.ink,w:700,a:"middle"});

// 그림 아래 붙은 alt 글
TH2["대체 텍스트"]=K=>K.card(24,6,112,60,10)
  +photo(30,12,100,48,6)
  +K.card(24,72,112,22,8)
  +pill(30,77,26,12,"alt",{size:7.5})+K.txt(62,86.1,"해 뜨는 산",{size:8.5,fill:C.ink,w:600});

// Tab 을 누를 때마다 1 → 2 → 3 으로 옮겨 가는 초점
kf("n40f1",3,"0%,30%{opacity:1}34%,100%{opacity:0}");
kf("n40f2",3,"0%,30%{opacity:0}34%,63%{opacity:1}67%,100%{opacity:0}");
kf("n40f3",3,"0%,63%{opacity:0}67%,96%{opacity:1}100%{opacity:0}");
TH2["포커스 순서"]=K=>{
  const nb=(y,n)=>K.circ(31,y,6,{f:C.blue})+K.txt(31,y+2.7,n,{size:7.5,fill:W,w:700,a:"middle"});
  const ring=(y,w)=>K.rect(39.500,y-11,w+5,22,{s:C.blue,sw:1.7,r:8});
  return K.card(18,8,124,84,14)
  +dline("M31 30V44M31 56V68",C.blue,"2 2.5",1.2)
  +K.rect(42,16,88,17,{f:W,s:C.line,sw:1,r:6})+gbar(49,22.5,34)
  +K.rect(42,42,88,17,{f:W,s:C.line,sw:1,r:6})+gbar(49,48.5,26)
  +K.rect(42,68,46,17,{f:C.blue,r:8.5})+K.rect(53,74.5,24,4,{f:W,r:2})
  +nb(24.5,1)+nb(50.5,2)+nb(76.5,3)
  +A("n40f1",ring(24.5,88))+A("n40f2",ring(50.5,88),"opacity:0")+A("n40f3",ring(76.5,46),"opacity:0")
  +key(102,68,30,17,"Tab")};

// 화면의 큰 구역마다 붙은 이름표
TH2["랜드마크"]=K=>{
  const rg=(x,y,w,h,s)=>drect(x,y,w,h,5,C.blue,"rgba(47,107,255,.08)","3 2.5",1.1)+K.txt(x+w/2,y+h/2+2.7,s,{size:7.5,fill:C.blue,w:700,a:"middle"});
  return K.card(18,6,124,88,10)
  +rg(25,12,110,16,"header")+rg(25,32,32,40,"nav")+rg(61,32,74,40,"main")+rg(25,76,110,13,"footer")};

// 영상 아래 깔린 말 글자 + CC
TH2["자막"]=K=>K.card(16,10,128,80,12,"#1D2230")
  +K.circ(80,33,11,{f:"#3A4257"})+K.path("M57 62c0-11 10-17 23-17s23 6 23 17z",{f:"#3A4257",s:"none"})
  +K.rect(36,64,88,18,{f:"#000000",r:4,o:.8})+K.txt(80,76.1,"안녕하세요, 여러분",{size:8.5,fill:W,w:600,a:"middle"})
  +K.rect(116,17,20,13,{f:W,r:3})+K.txt(126,26.4,"CC",{size:8,fill:"#1D2230",w:800,a:"middle"});

// 글자 크기 막대를 올리면 화면 글자가 따라 커진다
TH2["큰 글씨 모드"]=K=>K.card(16,10,128,80,14)
  +K.txt(46,48,"가",{size:11,fill:C.mute,w:700,a:"middle"})
  +K.path("M58 44h10M64.500 40.500l3.500 3.500-3.500 3.500",{s:"#B4BAC6",sw:1.4})
  +K.txt(96,56,"가",{size:34,fill:C.ink,w:800,a:"middle"})
  +K.line(26,64,134,64,{s:C.line,sw:.8})
  +K.txt(30,79.5,"가",{size:7,fill:C.sub,w:700,a:"middle"})
  +K.rect(40,75,76,4,{f:C.skel,r:2})+K.rect(40,75,58,4,{f:C.blue,r:2})
  +[40,59,78,97,116].map(x=>K.circ(x,77,1.6,{f:x<=97?C.blue:"#C5CBDA"})).join("")
  +K.circ(97,77,6,{f:W,s:C.blue,sw:1.7})
  +K.txt(128,81.5,"가",{size:12,fill:C.ink,w:800,a:"middle"});

// 흐린 글자는 미달, 진한 글자는 통과. 아래는 대비 비율
TH2["색 대비 기준"]=K=>K.card(12,12,64,76,12)+K.card(84,12,64,76,12)
  +K.txt(44,58,"가",{size:28,fill:"#C9CED6",w:800,a:"middle"})
  +K.txt(116,58,"가",{size:28,fill:C.ink,w:800,a:"middle"})
  +pill(26,68,36,13,"2 : 1",{f:"rgba(229,72,77,.14)",ink:C.red,size:7.5})
  +pill(98,68,36,13,"7 : 1",{f:"rgba(31,169,113,.16)",ink:C.green,size:7.5})
  +K.circ(66,23,6,{f:C.red})+K.icon("x",66,23,6.5,W,2.2)
  +pill(116,17,24,12,"AA",{f:C.green,size:7.5});

// 마우스 없이 키만으로: 초점 테두리가 놓인 버튼 + 자판
TH2["키보드 접근"]=K=>{
  const ar=(x,y,d)=>key(x,y,13,13,"")+K.path(d,{s:C.ink,sw:1.4});
  return K.card(28,6,104,32,10)
  +K.rect(38,15,34,14,{f:C.skel,r:7})
  +K.rect(82,15,40,14,{f:C.blue,r:7})+K.rect(92,20,20,4,{f:W,r:2})
  +K.rect(79,12,46,20,{s:C.blue,sw:1.6,r:10})
  +key(12,50,38,19,"Tab",1)+key(55,50,44,19,"Enter")
  +key(12,74,26,18,"Esc")+key(43,74,56,18,"")
  +ar(120.500,48,"M124.500 56l2.500-3 2.500 3")
  +ar(106,63,"M114 67l-3 2.500 3 2.500")+ar(120.500,63,"M124.500 68l2.500 3 2.500-3")+ar(135,63,"M140 67l3 2.500-3 2.500")};

// 보이는 아이콘은 작아도 눌리는 자리는 44×44
TH2["터치 타깃"]=K=>K.blk(10,28,30,40,10)+K.blk(120,28,30,40,10)
  +drect(52,14,56,56,10,C.blue,"rgba(47,107,255,.10)","3.5 2.5",1.3)
  +K.card(68,30,24,24,12)+K.icon("x",80,42,11,C.ink,1.9)
  +K.fing(93,56)
  +pill(60,78,40,13,"44×44",{size:7.5});

// 색만으로는 같아 보이는 둘 → 모양 · 기호를 함께
TH2["색맹 대응"]=K=>K.card(12,12,64,76,12)+K.card(84,12,64,76,12)
  +K.txt(21,27,"색만",{size:7.5,fill:C.sub,w:700})+K.txt(93,27,"모양 함께",{size:7.5,fill:C.sub,w:700})
  +K.circ(31,54,11,{f:"#A69C62"})+K.circ(57,54,11,{f:"#AB985F"})
  +K.circ(103,54,11,{f:"#A69C62"})+K.icon("check",103,54,12,W,2.4)
  +K.rect(118,43,22,22,{f:"#AB985F",r:4})+K.icon("x",129,54,11,W,2.4)
  +K.circ(66,23,6,{f:C.red})+K.icon("x",66,23,6.5,W,2.2)
  +K.circ(138,23,6,{f:C.green})+K.icon("check",138,23,7,W,2.2)
  +gbar(22,74,18,3.5)+gbar(48,74,18,3.5)+gbar(94,74,18,3.5)+gbar(120,74,18,3.5);

// 설정을 켜면 휙 지나가던 움직임(잔상)이 멈춘 모습으로
TH2["모션 줄이기"]=K=>K.card(18,10,124,80,14)
  +K.rect(28,18,48,36,{f:SOFTBG,r:8})+K.rect(84,18,48,36,{f:SOFTBG,r:8})
  +K.circ(38,44,5,{f:C.blue,o:.15})+K.circ(45,36,5.5,{f:C.blue,o:.3})+K.circ(54,30,6,{f:C.blue,o:.5})+K.circ(64,28,6.5,{f:C.blue,o:.8})
  +K.path("M77.500 32.500l3.500 3.500-3.500 3.500",{s:C.mute,sw:1.5})
  +K.circ(108,36,7.5,{f:C.blue})
  +K.line(28,62,132,62,{s:C.line,sw:.8})
  +K.txt(28,78.6,"모션 줄이기",{size:8.5,fill:C.ink,w:600})+tog(108,68.5,1);

/* ───────── tl · 디자인 툴 ───────── */
// 이름표 달린 틀. 밖으로 나간 부분은 잘린다
TH2["프레임"]=K=>{const id="b240f"+K.id();
  return `<defs><clipPath id="${id}"><rect x="28" y="22" width="104" height="64"/></clipPath></defs>`
  +K.txt(28,17,"Frame 1",{size:7.5,fill:C.blue,w:600})
  +K.rect(28,22,104,64,{f:W,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${id})">`+K.rect(38,32,40,24,{f:C.skel,r:5})+gbar(38,64,48)+gbar(38,72,32)+K.circ(126,64,20,{f:"#FBD3DF"})+`</g>`
  +K.circ(126,64,20,{s:PK,sw:.9,o:.45})
  +K.rect(28,22,104,64,{s:C.blue,sw:1.3})
  +[[28,22],[132,22],[28,86],[132,86]].map(([x,y])=>K.rect(x-2.5,y-2.5,5,5,{f:W,s:C.blue,sw:1.1})).join("")};

// 줄 세운 요소 사이 간격과 둘레 여백이 자동으로 맞는다
TH2["오토 레이아웃"]=K=>K.card(18,26,124,48,10)
  +K.rect(18,26,124,48,{f:PK,o:.16,r:10})+K.rect(28,36,104,28,{f:W})
  +[28,64,100].map((x,i)=>K.rect(x,36,32,28,{f:"#DCE6FF",r:6})+K.rect(x+7,47.500,[18,14,16][i],5,{f:C.blue,r:2.5,o:.75})).join("")
  +[60,96].map(x=>K.rect(x,36,4,28,{f:PK,o:.3})+K.line(x+2,40,x+2,60,{s:PK,sw:1.2})+K.line(x+.5,40,x+3.5,40,{s:PK,sw:1.2})+K.line(x+.5,60,x+3.5,60,{s:PK,sw:1.2})).join("")
  +K.rect(18,26,124,48,{s:C.blue,sw:1.3,r:10})
  +pill(50,10,24,12,"4",{f:PK,size:7.5})+K.line(62,22,62,34,{s:PK,sw:1})
  +pill(125,80,24,12,"10",{f:PK,size:7.5})+K.line(137,72,137,80,{s:PK,sw:1});

// 원본 하나(마름모 넷)와 거기 이어진 복사본들(빈 마름모)
TH2["컴포넌트 · 인스턴스"]=K=>
  [20,50,80].map(y=>K.path(`M64 50C82 50 78 ${y} 96 ${y}`,{s:PU,sw:1,o:.6})).join("")
  +dia4(19,21.5)+K.txt(27,24.5,"원본",{size:7.5,fill:PU,w:700})
  +K.card(12,30,52,40,4)+K.rect(12,30,52,40,{s:PU,sw:1.5,r:4})
  +K.rect(20,42,36,16,{f:C.blue,r:8})+K.rect(29,48,18,4,{f:W,r:2})
  +[8,38,68].map(y=>K.card(96,y,52,24,4)+K.rect(96,y,52,24,{s:PU,sw:.9,r:4,o:.7})
    +K.rect(104,y+5,36,14,{f:C.blue,r:7})+K.rect(113,y+10,18,4,{f:W,r:2})+dia1(96,y)).join("");

// 보라 점선 묶음 안에 같은 버튼의 여러 모양
TH2["배리언트"]=K=>drect(14,10,132,82,8,PU,"rgba(139,92,246,.07)","4 3",1.3)
  +dia4(25,21.5)
  +[["기본",38],["테두리",58],["비활성",78]].map(([s,y],i)=>K.txt(24,y+2.7,s,{size:7.5,fill:C.sub,w:700})
    +(i===0?K.rect(62,y-8,72,16,{f:C.blue,r:8,fx:"url(#b2lift)"})+K.rect(84,y-2,28,4,{f:W,r:2})
     :i===1?K.rect(62,y-8,72,16,{f:W,s:C.blue,sw:1.3,r:8})+K.rect(84,y-2,28,4,{f:C.blue,r:2})
     :K.rect(62,y-8,72,16,{f:"#DDE1EA",r:8})+K.rect(84,y-2,28,4,{f:"#AEB5C2",r:2}))).join("")
  +K.rect(62,13,72,14,{f:"rgba(139,92,246,.14)",r:4})+K.rect(70,18,30,4,{f:PU,r:2,o:.7});

// 왼쪽 · 위에 고정된 요소(파란 핀)와 고정 표시 칸
TH2["제약 조건"]=K=>{
  const pinl=(x1,y1,x2,y2)=>K.line(x1,y1,x2,y2,{s:C.blue,sw:1.5})+(y1===y2?K.line(x1,y1-3,x1,y1+3,{s:C.blue,sw:1.5})+K.line(x2,y2-3,x2,y2+3,{s:C.blue,sw:1.5}):K.line(x1-3,y1,x1+3,y1,{s:C.blue,sw:1.5})+K.line(x2-3,y2,x2+3,y2,{s:C.blue,sw:1.5}));
  return K.rect(16,10,128,80,{f:W,fx:"url(#b2lift)"})+K.rect(16,10,128,80,{s:C.blue,sw:1.2})
  +dline("M76 39H142","#B4BAC6","2.5 2.5",1)+dline("M55 52V88","#B4BAC6","2.5 2.5",1)
  +pinl(17,39,34,39)+pinl(55,11,55,26)
  +K.rect(34,26,42,26,{f:C.blue,r:5})+K.rect(42,36.500,24,5,{f:W,r:2.5})
  +K.card(96,50,38,32,6)+K.rect(108,60,14,12,{f:SOFTBG,s:"#B4BAC6",sw:1,r:2})
  +K.line(100,66,106,66,{s:C.blue,sw:2})+K.line(115,53.500,115,58,{s:C.blue,sw:2})
  +K.line(124,66,130,66,{s:"#C5CBDA",sw:2})+K.line(115,74,115,78.500,{s:"#C5CBDA",sw:2})};

// 이름 붙여 저장해 둔 색(동그라미)과 글자 모양(Ag) 목록
TH2["색 · 글자 스타일"]=K=>K.card(26,6,108,88,12)
  +K.rect(31,11,98,19,{f:C.soft,r:6})
  +K.circ(43,20.5,6.5,{f:C.blue})+tbar(56,18.25,40,4.5)+K.icon("check",120,20.5,8,C.blue,2.2)
  +K.circ(43,39.5,6.5,{f:PK})+gbar(56,37.25,32,4.5)
  +K.line(34,51,126,51,{s:C.line,sw:.8})
  +K.txt(43,67.5,"Ag",{size:12,fill:C.ink,w:800,a:"middle"})+gbar(58,61.25,44,4.5)
  +K.txt(43,84.5,"Ag",{size:8.5,fill:C.sub,w:500,a:"middle"})+gbar(58,79.75,30,4.5);

// 사진 위에 얹은 동그라미 안쪽만 또렷이 보인다
TH2["마스크"]=K=>{const id="b240m"+K.id();
  return `<defs><clipPath id="${id}"><circle cx="80" cy="50" r="31"/></clipPath></defs>`
  +`<g style="opacity:.28">`+photo(24,12,112,76,8)+`</g>`
  +drect(24,12,112,76,8,LN,"none","3 2.5",1)
  +`<circle cx="80" cy="50" r="31" style="fill:#fff" filter="url(#b2lift)"/>`
  +`<g clip-path="url(#${id})">`+photo(24,12,112,76,8)+`</g>`
  +K.circ(80,50,31,{s:C.blue,sw:1.5})};

// 네모와 동그라미로 합치기 · 빼기 · 교차 · 제외
TH2["불리언 연산"]=K=>[["합치기",16,8],["빼기",84,8],["교차",16,54],["제외",84,54]].map(([s,x,y],i)=>{
    const cx=x+30,cy=y+13.5,id="b240b"+K.id();
    const sq=o=>K.rect(cx-15,cy-11,18,18,Object.assign({r:2},o)), ci=o=>K.circ(cx+5,cy+3,9.5,o);
    const cut=`<defs><clipPath id="${id}"><rect x="${cx-15}" y="${cy-11}" width="18" height="18" rx="2"/></clipPath></defs>`;
    const gl=`style="fill:none;stroke:${LN};stroke-width:.9;stroke-dasharray:2 2"`;
    const ghost=`<rect x="${cx-15}" y="${cy-11}" width="18" height="18" rx="2" ${gl}/><circle cx="${cx+5}" cy="${cy+3}" r="9.500" ${gl}/>`;
    return K.card(x,y,60,38,9)
    +(i===0?sq({f:C.blue})+ci({f:C.blue})
     :i===1?sq({f:C.blue})+ci({f:W})+ghost
     :i===2?cut+`<g clip-path="url(#${id})">`+ci({f:C.blue})+`</g>`+ghost
     :cut+sq({f:C.blue})+ci({f:C.blue})+`<g clip-path="url(#${id})">`+ci({f:W})+`</g>`)
    +K.txt(x+30,y+34.5,s,{size:7,fill:C.sub,w:700,a:"middle"})}).join("");

// 점(네모)과 손잡이(동그라미 달린 선)로 그리는 곡선 + 펜촉
TH2["펜 툴"]=K=>{
  const an=(x,y,on)=>K.rect(x-3,y-3,6,6,{f:on?C.blue:W,s:C.blue,sw:1.3});
  return K.card(14,10,132,80,14)
  +K.path("M32 68C48 30 76 26 90 48S114 70 118 36",{s:C.blue,sw:1.9})
  +K.line(76,26,104,70,{s:LN,sw:1})
  +K.circ(76,26,2.8,{f:W,s:C.blue,sw:1.2})+K.circ(104,70,2.8,{f:W,s:C.blue,sw:1.2})
  +an(32,68)+an(90,48,1)+an(118,36)
  +`<g transform="translate(113.700 31.700) scale(1.080)">`
    +p("M4 4L15 8.500l2 4.500-4 4-4.500-2z",`fill:#fff;stroke:${C.ink};stroke-width:1.3`)
    +p("M4 4l7 7",`fill:none;stroke:${C.ink};stroke-width:1.2`)
    +p("M11.800 10.400a1.400 1.400 0 1 1 0 2.800 1.400 1.400 0 0 1 0-2.800z",`fill:${C.ink};stroke:none`)
    +p("M14.300 18.300l4-4 3.200 3.200-4 4z",`fill:${C.ink};stroke:${C.ink};stroke-width:1.3`)+`</g>`};

// 같은 동그라미: 점과 선으로 매끈한 것 vs 네모 점으로 계단진 것
TH2["벡터 · 래스터"]=K=>{
  let px="";const s=4.4;
  for(let r=-4;r<=4;r++)for(let c=-4;c<=4;c++){const d=Math.hypot(r,c)*s;if(d>20.5)continue;
    px+=K.rect(116+c*s-s/2,45+r*s-s/2,s,s,{f:C.blue,o:d>17?.35:1})}
  return K.card(12,12,64,76,12)+K.card(84,12,64,76,12)
  +K.circ(44,45,19,{f:C.blue})+K.circ(44,45,19,{s:"#1E4FD0",sw:.9})
  +[[44,26],[63,45],[44,64],[25,45]].map(([x,y])=>K.rect(x-2.5,y-2.5,5,5,{f:W,s:"#1E4FD0",sw:1.1})).join("")
  +px
  +K.txt(44,81.5,"벡터",{size:7.5,fill:C.sub,w:700,a:"middle"})+K.txt(116,81.5,"래스터",{size:7.5,fill:C.sub,w:700,a:"middle"})};

// 같은 그림을 1배 · 2배 · 3배 크기로
TH2["내보내기 배율"]=K=>[[16,20,"1x"],[48,34,"2x"],[94,50,"3x"]].map(([x,s,t],i)=>{const y=74-s,on=i===1;
    return K.card(x,y,s,s,n2(s*.2))+photo(x+s*.14,y+s*.14,s*.72,s*.72,n2(s*.12))
    +(on?K.rect(x-1,y-1,s+2,s+2,{s:C.blue,sw:1.6,r:n2(s*.2+1)}):"")
    +(on?pill(x+s/2-11,80,22,12,t,{size:7.5}):K.txt(x+s/2,88.7,t,{size:7.5,fill:C.sub,w:700,a:"middle"}))}).join("");
}
