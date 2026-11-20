// B2 그림 보충 (N=39): ps 9 (다크패턴 갈래) + rs 23 (과정 · 지표 · 조사 방법). 개념이 화면에서 드러나는 한 장면으로 그린다.
{
const C=K.C, W="#FFFFFF", n2=K.n2, INK2="#3A4050";
const A=(c,inner)=>`<g class="b2x39 b2a-${c}">${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
css(`.b2x39{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:INK2,r:h/2});               // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});          // 흰 면 위 글줄
const pill=(x,y,w,h,s,{f=C.blue,ink=W,size=8}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
const p=(d,style)=>`<path d="${d}" style="${style}"/>`;
const RS="rgba(229,72,77,.10)";                                        // 옅은 빨강 면
const cur=(x,y)=>p(`M${x} ${y}v11l2.8-2.6 2.2 4.8 2-.9-2.2-4.7h3.9z`,`fill:${C.ink};stroke:#fff;stroke-width:1`); // 마우스 화살표
const box=(x,y,s,on)=>on?K.rect(x,y,s,s,{f:C.blue,r:s*.28})+K.icon("check",x+s/2,y+s/2,s*.75,W,2.4):K.rect(x+.6,y+.6,s-1.2,s-1.2,{f:W,s:C.mute,sw:1.2,r:s*.28});

/* ───────── ps: 다크패턴 갈래 ───────── */
// 고르지 않은 물건이 장바구니에 한 줄 더 들어와 있다
TH2["몰래 담기"]=K=>K.card(18,10,124,80,14)
  +K.icon("cart",33,22,11,C.ink,1.7)+K.txt(42,25,"장바구니",{size:8,fill:C.ink,w:700})
  +K.rect(28,32,15,15,{f:C.skel,r:4.5})+tbar(49,35,38,4.5)+gbar(49,42.5,24,3.5)+K.txt(132,42.5,"19,900",{size:7.5,fill:C.ink,w:700,a:"end"})
  +`<rect x="23" y="51" width="114" height="21" rx="8" style="fill:${RS};stroke:${C.red};stroke-width:1.1;stroke-dasharray:3 2.5"/>`
  +K.rect(28,54,15,15,{f:"rgba(229,72,77,.22)",r:4.5})+K.icon("plus",35.5,61.5,9,C.red,2)
  +K.txt(49,64.3,"안심 보험",{size:7.5,fill:C.red,w:700})+K.txt(132,64.3,"+2,900",{size:7.5,fill:C.red,w:700,a:"end"})
  +K.txt(28,84,"합계",{size:7,fill:C.sub})+K.txt(132,84.5,"22,800",{size:8.5,fill:C.ink,w:700,a:"end"});

// 마지막 결제 단계에서야 붙는 수수료 · 배송비
TH2["숨은 비용"]=K=>K.card(22,8,116,84,12)
  +K.txt(32,26,"상품",{size:8,fill:C.sub})+K.txt(128,26,"19,900",{size:8,fill:C.ink,w:700,a:"end"})
  +K.rect(27,32,106,31,{f:RS,r:8})
  +K.txt(32,44.5,"수수료",{size:8,fill:C.red,w:700})+K.txt(128,44.5,"+3,000",{size:8,fill:C.red,w:700,a:"end"})
  +K.txt(32,58,"배송비",{size:8,fill:C.red,w:700})+K.txt(128,58,"+3,500",{size:8,fill:C.red,w:700,a:"end"})
  +K.line(32,68.5,128,68.5,{s:C.mute,sw:.8})
  +K.txt(32,83,"결제",{size:8,fill:C.sub})+K.txt(128,84,"26,400",{size:12,fill:C.ink,w:700,a:"end"});

// 닫기(X)를 눌렀는데 설치가 시작된다
TH2["미끼와 바꿔치기"]=K=>K.card(20,14,120,72,14)
  +tbar(32,27,50,5)+gbar(32,37,38)
  +K.circ(121,30,9,{f:C.skel})+K.icon("x",121,30,10,C.ink,2)+K.fing(130,39)
  +K.txt(32,62,"설치 중…",{size:9,fill:C.blue,w:700})+K.txt(128,62,"64%",{size:8,fill:C.blue,w:700,a:"end"})
  +K.rect(32,68,96,7,{f:C.skel,r:3.5})+K.rect(32,68,62,7,{f:C.blue,r:3.5});

// 진짜 버튼처럼 생긴 큰 광고, 진짜 링크는 작은 글자
TH2["위장 광고"]=K=>K.card(16,8,128,84,14)
  +tbar(28,19,46,5)+gbar(28,28,30)
  +K.rect(28,40,104,22,{f:C.green,r:11})+K.icon("download",58,51,11,W,1.9)+K.txt(88,54.2,"다운로드",{size:9,fill:W,w:700,a:"middle"})
  +K.rect(108,34,26,11,{f:W,s:C.line,sw:.8,r:5.5})+K.txt(121,42.2,"광고",{size:7,fill:C.sub,w:700,a:"middle"})
  +K.txt(80,79,"파일 받기",{size:7.5,fill:C.blue,a:"middle"})+K.line(64.5,81.5,95.5,81.5,{s:C.blue,sw:.7});

// 무료 체험이 끝나는 날 알림 없이 자동 결제
TH2["강제 연속 결제"]=K=>K.card(16,12,128,76,14)
  +pill(26,21,46,15,"7일 무료",{f:C.soft,ink:C.blue,size:7.5})
  +K.line(32,52,118,52,{s:"#C9D6FF",sw:2})
  +[0,1,2,3,4,5].map(i=>K.circ(32+i*14.5,52,3,{f:C.blue})).join("")
  +K.circ(124,52,9,{f:C.red})+K.icon("refresh",124,52,10,W,2)
  +K.txt(133,76,"자동 결제 9,900",{size:8.5,fill:C.red,w:700,a:"end"});

// 이중 부정이라 체크해야 할지 말아야 할지 헷갈리는 문장
TH2["트릭 질문"]=K=>K.card(14,24,132,54,14)
  +box(26,36,13,false)
  +K.txt(46,45,"소식을 받지 않으려면",{size:8,fill:C.ink,w:700})
  +K.txt(46,60,"체크하지 마세요",{size:8,fill:C.ink,w:700})
  +K.circ(134,26,9,{f:C.red})+K.txt(134,30,"?",{size:11,fill:W,w:700,a:"middle"});

// 거절 단추가 없어 닫아도 또 뜨는 창 (안 함 대신 나중에)
css(`.b2a-n39nag{animation-name:b2a-n39nag;animation-duration:2.8s}@keyframes b2a-n39nag{0%,8%{opacity:0;transform:scale(.86)}24%,40%{opacity:1;transform:none}48%,56%{opacity:0;transform:scale(.86)}72%,90%{opacity:1;transform:none}100%{opacity:0;transform:scale(.86)}}`);
TH2["반복 요청"]=K=>K.rect(34,32,104,58,{f:W,r:14,o:.4})+K.rect(29,27,104,58,{f:W,r:14,o:.65})
  +A("n39nag",K.card(24,22,104,58,14)
    +K.circ(42,38,8,{f:C.soft})+K.icon("bell",42,38,10,C.blue,1.7)
    +K.txt(55,41,"알림 켤까요?",{size:8.5,fill:C.ink,w:700})
    +pill(32,56,50,16,"켜기",{size:8})+K.txt(102,67,"나중에",{size:8,fill:C.sub,w:700,a:"middle"}))
  +pill(110,12,32,15,"3번째",{f:C.red,size:7.5});

// 손대기 전부터 체크가 들어가 있는 선택 항목
TH2["미리 체크된 박스"]=K=>K.card(18,14,124,72,14)
  +pill(90,21,44,13,"기본 선택",{f:C.soft,ink:C.blue,size:7})
  +box(28,42,14,true)+K.txt(48,52,"광고 문자 받기",{size:8.5,fill:C.ink,w:700})
  +box(28,62,14,true)+K.txt(48,72,"제휴사에 정보 제공",{size:8.5,fill:C.ink,w:700});

// 눈은 번쩍이는 큰 문구로, 정작 중요한 결제 조건은 흐린 작은 글자
TH2["시선 돌리기"]=K=>K.card(18,10,124,80,14)
  +K.rect(28,20,104,38,{f:C.blue,r:12})
  +K.icon("sparkle",44,32,11,W,1.6)+K.icon("sparkle",119,47,8,W,1.5)
  +K.txt(82,44,"무료 선물!",{size:12,fill:W,w:700,a:"middle"})
  +[[22,14,-4,-4],[138,14,4,-4],[22,64,-4,4],[138,64,4,4]].map(([x,y,a,b])=>K.line(x,y,x+a,y+b,{s:C.blue,sw:1.8,o:.7})).join("")
  +K.txt(80,77,"매달 9,900원 자동 결제",{size:7,fill:"#BDC3CE",a:"middle"});

/* ───────── rs: 과정 · 틀 ───────── */
// 내용을 묶고 이름 붙여 정리한 구조 (묶음 + 라벨)
TH2["정보 구조"]=K=>K.card(12,10,136,80,14)
  +["홈","상품","내 정보"].map((s,i)=>{const x=19+i*42,n=[2,3,2][i];
    return K.rect(x,17,38,66,{f:C.soft,r:9})
      +pill(x+4,22,30,13,s,{f:i===1?C.blue:W,ink:i===1?W:C.blue,size:7})
      +Array.from({length:n},(_,j)=>K.rect(x+4,41+j*13,30,9,{f:W,r:4.5})+gbar(x+8,43.75+j*13,[18,14,20][(i+j)%3],3.5)).join("")}).join("");

// 종이에 손으로 빠르게 그린 화면
TH2["스케치"]=K=>{const st=`fill:none;stroke:${INK2};stroke-width:1.3`;
  return `<g transform="rotate(-2 72 50)">`+K.card(26,8,92,84,5)
    +p("M38 19C54 18 74 20 104 19C105 28 103 38 104 45C84 46 58 44 38 45C37 37 39 27 38 19Z",st)
    +p("M38 19L104 45M104 19L38 45",`fill:none;stroke:${INK2};stroke-width:.9`)
    +p("M38 55c4-3 6 3 10 0s6 3 10 0 6 3 10 0 6 3 10 0 6 3 10 0 6 3 10 0",st)
    +p("M38 63c4-3 6 3 10 0s6 3 10 0 6 3 10 0 6 3 10 0",st)
    +p("M41 72c10-1 24-1 34 0 3 4 3 8 0 11-10 1-24 1-34 0-3-4-3-8 0-11z",st)+`</g>`
    +`<g transform="translate(100 84) rotate(-145)">`
    +p("M0 0L-3.5 8.500H3.5Z","fill:#F2D2A0;stroke:none")+p("M0 0L-1.3 3.200H1.3Z",`fill:${C.ink};stroke:none`)
    +p("M-3.5 8.500H3.5V38H-3.5Z",`fill:${C.amber};stroke:none`)+p("M-3.5 38H3.5V41H-3.5Z","fill:#C9CED6;stroke:none")
    +p("M-3.5 41H3.5V45a1.500 1.500 0 0 1-1.5 1.500H-2a1.500 1.500 0 0 1-1.5-1.500Z","fill:#F6A9BC;stroke:none")+`</g>`};

// 월~금 닷새에 이해 · 스케치 · 결정 · 제작 · 검증
TH2["디자인 스프린트"]=K=>K.card(10,14,140,72,14)
  +K.rect(16,20,128,16,{f:C.soft,r:8})
  +["월","화","수","목","금"].map((d,i)=>{const cx=28.8+i*25.6;
    return K.txt(cx,31,d,{size:8,fill:C.blue,w:700,a:"middle"})
      +(i?K.line(16+i*25.6,42,16+i*25.6,80,{s:C.line,sw:.7}):"")
      +K.icon(["search","edit","check","grid","user"][i],cx,54,13,i===4?C.blue:INK2,1.7)
      +K.txt(cx,75,["이해","스케치","결정","제작","검증"][i],{size:7,fill:C.sub,w:700,a:"middle"})}).join("");

// 넓혔다 좁히기를 두 번 (발견 · 정의 · 개발 · 전달)
TH2["더블 다이아몬드"]=K=>K.card(10,8,140,84,14)
  +p("M22 42L51 19L80 42L51 65Z",`fill:rgba(47,107,255,.10);stroke:${C.blue};stroke-width:1.5`)
  +p("M80 42L109 19L138 42L109 65Z",`fill:rgba(47,107,255,.24);stroke:${C.blue};stroke-width:1.5`)
  +p("M51 19V65M109 19V65",`fill:none;stroke:${C.blue};stroke-width:.8;stroke-dasharray:2 2.5;opacity:.6`)
  +[22,80,138].map(x=>K.circ(x,42,3.2,{f:C.blue})).join("")
  +["발견","정의","개발","전달"].map((s,i)=>K.txt(36.5+i*29,81,s,{size:7.5,fill:i%2?C.ink:C.sub,w:700,a:"middle"})).join("");

// 공감 · 정의 · 발상 · 시제품 · 시험, 그리고 다시 처음으로
TH2["디자인 씽킹"]=K=>{const hex=(cx,cy,r,f)=>p(`M${cx} ${cy-r}L${n2(cx+.866*r)} ${cy-r/2}V${cy+r/2}L${cx} ${cy+r}L${n2(cx-.866*r)} ${cy+r/2}V${cy-r/2}Z`,`fill:${f};stroke:none`);
  return K.card(8,12,144,76,14)
    +p("M134 37C134 20 26 20 26 37",`fill:none;stroke:${C.mute};stroke-width:1.1;stroke-dasharray:2.5 2.5`)+p("M22.5 33.500l3.5 4 3.5-4",`fill:none;stroke:${C.mute};stroke-width:1.2`)
    +[0,1,2,3,4].map(i=>{const cx=26+i*27;
      return (i?K.line(cx-16,52,cx-11,52,{s:C.mute,sw:1.2}):"")
        +hex(cx,52,11.5,["#F6A9BC","#B79CF0","#F2A93B","#4FC3A1","var(--acc)"][i])
        +K.icon(["heart","search","sparkle","grid","check"][i],cx,52,11,W,1.8)
        +K.txt(cx,76,["공감","정의","발상","제작","시험"][i],{size:7,fill:C.sub,w:700,a:"middle"})}).join("")};

// "어떻게 하면 ~할 수 있을까?" 로 문제를 질문으로 바꿔 적은 쪽지
TH2["HMW"]=K=>`<g transform="rotate(7 98 52)">`+K.rect(62,20,70,64,{f:"#FFC2D4",r:3})+`</g>`
  +`<g transform="rotate(-3 76 50)">`+K.rect(36,14,80,72,{f:"#FFE38A",r:3,fx:"url(#b2lift)"})
  +K.txt(46,34,"어떻게 하면",{size:10,fill:C.ink,w:700})
  +K.rect(46,43,58,5,{f:"rgba(0,0,0,.2)",r:2.5})+K.rect(46,54,40,5,{f:"rgba(0,0,0,.2)",r:2.5})
  +K.txt(106,77,"할까?",{size:10,fill:C.ink,w:700,a:"end"})+`</g>`;

// 만약 이렇게 바꾸면 → 그러면 이 숫자가 오른다 (아직 확인 전)
TH2["가설"]=K=>K.card(16,10,128,80,14)
  +pill(24,22,34,14,"만약",{f:C.soft,ink:C.blue,size:7.5})
  +K.rect(66,19,62,20,{f:C.blue,r:10})+K.rect(83,26.5,28,5,{f:W,r:2.5})
  +K.line(41,40,41,54,{s:"#C9D6FF",sw:1.6})
  +pill(24,58,40,14,"그러면",{f:C.soft,ink:C.blue,size:7.5})
  +K.txt(72,69.500,"클릭 +10%",{size:10,fill:C.ink,w:700})
  +`<circle cx="131" cy="77" r="8" style="fill:#fff;stroke:${C.mute};stroke-width:1.2;stroke-dasharray:2.5 2.5"/>`+K.txt(131,80.500,"?",{size:9,fill:C.sub,w:700,a:"middle"});

/* ───────── rs: 지표 ───────── */
// 다른 숫자들이 모두 향하는 단 하나의 지표
TH2["북극성 지표"]=K=>{const s=24/24;
  return K.card(18,8,124,84,14)
    +[44,80,116].map(x=>K.line(x,68,80,53,{s:"#C9D6FF",sw:1.3})).join("")
    +`<g transform="translate(68 12)"><path d="${K.ICON.star}" style="fill:${C.blue};stroke:${C.blue};stroke-width:1.4"/></g>`
    +K.rect(44,41,72,14,{f:W,r:7})+K.txt(80,51,"주간 주문 수",{size:8.5,fill:C.ink,w:700,a:"middle"})
    +[28,64,100].map((x,i)=>K.rect(x,68,32,14,{f:C.skel,r:7})+K.rect(x+7,73,[18,14,16][i],4,{f:"#B9C0CE",r:2})).join("")};

// 유입 → 활성 → 유지 → 추천 → 수익, 아래로 갈수록 좁아지는 깔때기
TH2["AARRR"]=K=>K.card(16,6,128,88,14)
  +["A","A","R","R","R"].map((l,i)=>{const w=88-i*14,y=13+i*15.5,nw=w-14;
    return p(`M${62-w/2} ${y}H${62+w/2}L${62+nw/2} ${y+13}H${62-nw/2}Z`,`fill:${C.blue};stroke:${C.blue};stroke-width:1;opacity:${[1,.86,.72,.6,.5][i]}`)
      +K.txt(62,y+9.600,l,{size:9,fill:W,w:700,a:"middle"})
      +K.txt(136,y+9.300,["유입","활성","유지","추천","수익"][i],{size:7.5,fill:C.sub,w:700,a:"end"})}).join("");

// 만족 · 참여 · 채택 · 유지 · 과업 성공 다섯 칸
TH2["HEART"]=K=>[..."HEART"].map((l,i)=>{const x=14+i*27;
  return K.card(x,20,24,60,9,i===0?C.blue:W)
    +K.txt(x+12,48,l,{size:15,fill:i===0?W:C.blue,w:700,a:"middle"})
    +K.txt(x+12,67,["만족","참여","채택","유지","성공"][i],{size:7,fill:i===0?W:C.sub,w:700,a:"middle"})}).join("");

// 들어온 스무 명 가운데 끝까지 산 한 명
TH2["전환율"]=K=>K.card(16,10,128,80,14)
  +Array.from({length:20},(_,i)=>{const x=30.5+(i%10)*11,y=26+Math.floor(i/10)*12;
    return i===19?K.circ(x,y,4.5,{f:C.blue})+K.icon("check",x,y,6.5,W,2.2):K.circ(x,y,4,{f:"#D3D8E3"})}).join("")
  +K.txt(27,79,"5%",{size:22,fill:C.blue,w:700})+K.icon("cart",98,71.500,11,C.sub,1.7)+K.txt(133,75,"구매",{size:8.5,fill:C.sub,w:700,a:"end"});

// 첫 화면만 보고 바로 나가는 비율
TH2["이탈률"]=K=>K.card(14,14,66,72,12)
  +K.rect(22,22,50,20,{f:C.skel,r:6})+tbar(22,49,34,4.5)+gbar(22,58,46)+gbar(22,66,38)+gbar(22,74,26)
  +p("M70 34H112",`fill:none;stroke:${C.red};stroke-width:2.2`)+p("M105.500 27.500L112 34L105.500 40.500",`fill:none;stroke:${C.red};stroke-width:2.2`)
  +p("M118 22V46",`fill:none;stroke:${C.red};stroke-width:2.2`)
  +K.txt(116,68,"62%",{size:17,fill:C.red,w:700,a:"middle"})
  +K.txt(116,81,"바로 나감",{size:7.5,fill:C.sub,w:700,a:"middle"});

// 본 사람 1,000 가운데 누른 사람 32
TH2["클릭률"]=K=>K.card(16,10,128,80,14)
  +K.rect(24,18,112,32,{f:C.soft,r:10})+tbar(32,26,40,5)+gbar(32,36,28)
  +K.rect(92,26,36,16,{f:C.blue,r:8})+K.rect(101,32,18,4,{f:W,r:2})+cur(118,36)
  +K.icon("eye",31,65,11,C.sub,1.6)+K.txt(39,68,"1,000",{size:8,fill:C.sub,w:700})
  +cur(27.5,74)+K.txt(39,83,"32",{size:8,fill:C.ink,w:700})
  +K.txt(134,80,"3.2%",{size:18,fill:C.blue,w:700,a:"end"});

// 한 달에 한 번이라도 온 사람(큰 원) 안에 오늘 온 사람(작은 원)
TH2["DAU · MAU"]=K=>K.card(16,8,128,84,14)
  +K.circ(60,50,34,{f:"rgba(47,107,255,.14)",s:C.blue,sw:1.2})
  +K.txt(60,31,"MAU",{size:9,fill:C.blue,w:700,a:"middle"})
  +K.circ(60,59,17,{f:C.blue})+K.txt(60,62.300,"DAU",{size:9,fill:W,w:700,a:"middle"})
  +K.circ(108,42,4,{f:C.blue})+K.txt(116,45,"하루",{size:8,fill:C.ink,w:700})
  +K.circ(108,60,4,{f:"rgba(47,107,255,.14)",s:C.blue,sw:1.2})+K.txt(116,63,"한 달",{size:8,fill:C.ink,w:700});

// 방금 경험이 만족스러웠는지 표정 다섯 개로 묻기
TH2["CSAT"]=K=>K.card(14,18,132,64,14)
  +K.txt(80,36,"만족하셨나요?",{size:8.5,fill:C.ink,w:700,a:"middle"})
  +[-4.5,-2.2,0,2.4,4.6].map((c,i)=>{const x=32+i*24,y=59,on=i===3,ink=on?W:C.sub;
    return K.circ(x,y,9.5,on?{f:C.blue}:{f:W,s:C.mute,sw:1.2})
      +K.circ(x-3.3,y-2.4,1.1,{f:ink})+K.circ(x+3.3,y-2.4,1.1,{f:ink})
      +p(`M${x-4} ${n2(y+3.6-c*.25)}Q${x} ${n2(y+3.6+c)} ${x+4} ${n2(y+3.6-c*.25)}`,`fill:none;stroke:${ink};stroke-width:1.3`)}).join("");

// 열 문항 답을 0~100 점 하나로 바꾼 사용성 점수
TH2["SUS"]=K=>K.card(18,10,124,80,14)
  +p("M44 66A36 36 0 0 1 116 66",`fill:none;stroke:${C.skel};stroke-width:8`)
  +p("M44 66A36 36 0 0 1 102.920 38.240",`fill:none;stroke:${C.blue};stroke-width:8`)
  +K.txt(80,64,"72",{size:19,fill:C.ink,w:700,a:"middle"})
  +K.txt(44,80,"0",{size:7,fill:C.mute,w:700,a:"middle"})+K.txt(116,80,"100",{size:7,fill:C.mute,w:700,a:"middle"})
  +pill(62,71,36,13,"10문항",{f:C.soft,ink:C.blue,size:7});

// 다섯 명 가운데 과제를 끝까지 해낸 네 명
TH2["과업 성공률"]=K=>K.card(16,12,128,76,14)
  +[0,1,2,3,4].map(i=>{const x=32+i*24,ok=i!==2;
    return K.circ(x,35,9.5,{f:ok?"rgba(31,169,113,.14)":RS})+K.icon(ok?"check":"x",x,35,ok?10:8.5,ok?C.green:C.red,2.1)}).join("")
  +K.line(26,54,134,54,{s:C.line,sw:.8})
  +K.txt(27,74,"5명 중 4명",{size:8,fill:C.sub,w:700})+K.txt(134,77,"80%",{size:18,fill:C.ink,w:700,a:"end"});

/* ───────── rs: 조사 방법 ───────── */
// 화면 위, 많이 눌린 자리일수록 붉게 번진 얼룩
TH2["클릭 히트맵"]=K=>{const g="b239h"+K.id();
  const hot=(cx,cy,r,o=1)=>`<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:url(#${g});opacity:${o}"/>`;
  return `<defs><radialGradient id="${g}"><stop offset="0" stop-color="#E5484D" stop-opacity=".95"/><stop offset=".35" stop-color="#F2A93B" stop-opacity=".8"/><stop offset=".7" stop-color="#7BD88F" stop-opacity=".4"/><stop offset="1" stop-color="#7BD88F" stop-opacity="0"/></radialGradient></defs>`
    +K.card(26,8,108,84,12)
    +K.circ(38,19,4,{f:C.skel})+gbar(96,17,12,3.5)+gbar(112,17,12,3.5)
    +K.rect(34,28,92,24,{f:C.skel,r:7})+tbar(34,58,44,4.5)+gbar(34,66,60,3.5)
    +K.rect(34,74,40,11,{f:"#C9CED6",r:5.5})
    +hot(54,79,14)+hot(118,19,11,.85)+hot(96,42,12,.6)};

// 눈이 머문 자리(원)와 옮겨 간 길(선)
TH2["아이트래킹"]=K=>{const P=[[38,26,7.5],[92,30,6],[60,54,10],[112,72,6.5]];
  return K.card(16,10,128,80,14)
    +tbar(26,20,36,5)+gbar(26,30,84)+K.rect(26,40,54,28,{f:C.skel,r:7})+gbar(88,44,40)+gbar(88,53,30)+K.rect(88,66,40,12,{f:"#C9CED6",r:6})+gbar(26,76,40)
    +p("M"+P.map(q=>q[0]+" "+q[1]).join("L"),`fill:none;stroke:${C.blue};stroke-width:1.3`)
    +P.map(([x,y,r],i)=>K.circ(x,y,r,{f:"rgba(47,107,255,.78)",s:W,sw:.8})+K.txt(x,y+2.600,String(i+1),{size:7,fill:W,w:700,a:"middle"})).join("")
    +K.card(124,4,24,24,12)+K.icon("eye",136,16,14,C.blue,1.7)};

// 카페 · 복도에서 지나가는 사람에게 잠깐 써 봐 달라고 부탁하기
TH2["게릴라 테스트"]=K=>K.card(22,14,44,74,10)
  +K.rect(28,22,32,22,{f:C.skel,r:5})+tbar(28,50,22,4)+gbar(28,58,30,3.5)+K.rect(28,70,32,10,{f:C.blue,r:5})
  +K.card(74,12,68,26,13,C.blue)+p("M80 34L72 44L90 37Z",`fill:${C.blue};stroke:none`)
  +K.txt(108,29,"5분만요!",{size:9.5,fill:W,w:700,a:"middle"})
  +p("M104 50c-3-3 3-5 0-8M114 50c-3-3 3-5 0-8",`fill:none;stroke:${C.mute};stroke-width:1.3`)
  +p("M97 59H121L118 86H100Z",`fill:#fff;stroke:${INK2};stroke-width:1.3`)
  +p("M98.200 67H119.800L118.800 76H99.200Z","fill:#E9C9A0;stroke:none")
  +K.rect(94.5,54,29,5.5,{f:INK2,r:2.2});

// 사용자는 AI 인 줄 알지만 막 뒤에서 사람이 답하고 있다
TH2["오즈의 마법사 테스트"]=K=>K.card(10,16,70,68,12)
  +K.rect(40,24,32,13,{f:C.skel,r:6.5})+gbar(46,28.750,20,3.5)
  +K.circ(23,50,6,{f:C.soft})+K.icon("sparkle",23,50,8,C.blue,1.5)
  +K.rect(32,43,40,14,{f:C.blue,r:7})+K.rect(38,48.250,26,3.5,{f:W,r:1.75})
  +K.rect(18,66,54,11,{f:W,s:C.line,sw:.8,r:5.5})
  +p("M72 50H118V60",`fill:none;stroke:${C.blue};stroke-width:1.2;stroke-dasharray:2.5 2.5`)
  +p("M86 8C91 20 89 30 92 42C95 56 90 70 94 92H104C100 72 105 58 102 44C99 30 102 20 98 8Z","fill:#B79CF0;stroke:none")
  +p("M94 8C98 24 96 36 98 50C100 66 97 78 100 92",`fill:none;stroke:#8E6FE0;stroke-width:1`)
  +K.circ(126,36,12,{f:"#C9D6FF"})+K.icon("user",126,36,14,C.blue,1.8)
  +K.rect(108,60,36,18,{f:INK2,r:5})
  +[0,1,2,3].map(i=>K.rect(112.5+i*7.5,64,5,4,{f:"#8A92A0",r:1.2})).join("")+K.rect(116,71,20,4,{f:"#8A92A0",r:1.2});

// 사용자가 평소 쓰는 자리로 찾아가 옆에서 지켜보며 묻기
TH2["맥락 조사"]=K=>K.card(16,20,70,46,8)
  +K.rect(22,26,58,34,{f:C.soft,r:4})+tbar(28,32,26,4)+gbar(28,40,40,3.5)+gbar(28,47,30,3.5)
  +`<g transform="rotate(8 80 24)">`+K.rect(73,17,14,14,{f:"#FFE38A",r:1.5})+K.rect(76,23,8,2,{f:"rgba(0,0,0,.2)",r:1})+`</g>`
  +p("M46 66V76M34 77H58",`fill:none;stroke:${INK2};stroke-width:2.4`)
  +K.line(12,84,96,84,{s:"#B9C0CE",sw:2})
  +p("M70 84V75H80V84",`fill:#fff;stroke:${INK2};stroke-width:1.3`)+p("M80 77.500h3v4h-3",`fill:none;stroke:${INK2};stroke-width:1.2`)
  +K.card(106,26,40,58,8)+K.rect(118,22,16,8,{f:INK2,r:3})
  +K.circ(126,44,8,{f:C.soft})+K.icon("eye",126,44,11,C.blue,1.6)
  +[0,1,2].map(i=>K.circ(114,60+i*8,1.6,{f:C.blue})+gbar(119,58.250+i*8,[20,14,18][i],3.5)).join("")
  +pill(100,6,46,13,"현장 관찰",{f:C.blue,size:7});

// 여럿을 한 탁자에 모아 진행자가 이끄는 토론
TH2["포커스 그룹"]=K=>`<ellipse cx="80" cy="50" rx="40" ry="19" style="fill:#fff" filter="url(#b2lift)"/>`
  +[[46,22,"#C9D6FF"],[80,16,"#F6B9CB"],[114,22,"#BFE8D2"],[40,74,"#FFD9A0"],[120,74,"#D9C8F5"]].map(([x,y,f])=>K.circ(x,y,8.5,{f})).join("")
  +K.circ(80,83,9.5,{f:C.blue})+K.icon("mic",80,83,11,W,1.7)
  +K.icon("chat",62,47,13,C.mute,1.5)+K.icon("chat",82,53,13,C.blue,1.6)+K.icon("chat",101,46,13,C.mute,1.5);
}
