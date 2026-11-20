// B2 그림 추가분 24: ov · sr (호버 카드 ~ AI 요약 답변)
// 움직이는 부분은 class="b2x24 b2a-n24…". transform 속성이 있는 요소에는 클래스를 직접 달지 않고 겉 g 로 감싼다.
{
const C=K.C, n2=K.n2;
const A=(c,inner)=>`<g class="b2x24 b2a-${c}">${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x24{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);

const DARK="#3A4050";                    // 진한 제목 줄
const KEY="#F0F2F7";                     // 눌리지 않은 회색 면
const OFF="#D5DAE3";                     // 빈 칸 선
const DIM="rgba(30,36,70,.30)";          // 창 뒤를 덮는 막
const PAS=["#CFE0FF","#FFE1C7","#D9F2E0","#F3D9F7","#FFF1B8"];
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DARK,r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const btxt=(x,y,s,size=8)=>K.txt(x,y,s,{size,fill:"#fff",w:700,a:"middle"});
const tsp=(s,fill,w)=>`<tspan style="fill:${fill}"${w?` font-weight="${w}"`:""}>${s}</tspan>`;
const dim=()=>K.rect(0,0,160,100,{f:DIM});
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
// 마우스 화살표 (x,y = 뾰족한 끝)
const cur=(x,y)=>`<path transform="translate(${x} ${y})" d="M0 0v12.5l3.3-2.9 2.3 5 2.2-1-2.3-4.9H10z" style="fill:${C.ink};stroke:#fff;stroke-width:1"/>`;
const chip=(x,y,w,h,l,on,size=7.5)=>(on?K.rect(x,y,w,h,{f:C.blue,r:h/2}):K.rect(x,y,w,h,{f:"#fff",s:OFF,sw:1,r:h/2}))+K.txt(x+w/2,y+h/2+size*.36,l,{size,fill:on?"#fff":C.ink,w:on?700:500,a:"middle"});

Object.assign(K.ICON,{
  q24down:"M6 9l6 6 6-6",
  q24mega:["M4 10v4h3l8 4V6l-8 4z","M18.5 9.5a4 4 0 0 1 0 5","M7.5 14.5l1.2 5h2.3"],
  q24clock:["M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z","M12 8v4.5l3 2"],
  q24cam:["M4 8h3.5l1.5-2h6l1.5 2H20v11H4z","M12 10.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"],
  q24file:["M7 4h7l4 4v12H7z","M14 4v4h4"],
});

/* ───────── ov · 오버레이 ───────── */
TH2["호버 카드"]=K=>gbar(16,13,30,5)+K.txt(52,19.5,"@민아",{size:9,fill:C.blue,w:700})+K.line(52,22,76,22,{s:C.blue,sw:1})+gbar(84,13,54,5)
  +K.card(28,38,104,54,12)+K.circ(46,56,9,{f:"#C9D6FF"})+K.circ(46,53.5,3.2,{f:"#fff"})+K.path("M40.2 62.6a6.4 6.4 0 0 1 11.6 0",{s:"#fff",sw:2.2})
  +tbar(60,50,32)+gbar(60,59,22)
  +K.rect(98,48,28,14,{f:C.blue,r:7})+btxt(112,57.6,"팔로우",7)
  +gbar(38,74,84)+gbar(38,82,56)
  +cur(66,21);

TH2["플로팅 툴바"]=K=>K.card(14,8,132,84,14)+gbar(24,17,90)
  +K.rect(38,53,62,16,{f:"rgba(47,107,255,.2)",r:2})+K.txt(42,64.4,"선택한 글자",{size:9,w:600})
  +K.line(38,51,38,71,{s:C.blue,sw:1.4})+K.circ(38,50,2,{f:C.blue})+K.line(100,51,100,71,{s:C.blue,sw:1.4})+K.circ(100,72,2,{f:C.blue})
  +gbar(24,59,10)+gbar(106,59,30)+gbar(24,78,104)+gbar(24,85,70)
  +K.card(30,25,80,20,8,C.toast)+`<path d="M64 44.6l5 5.4 5-5.4z" style="fill:${C.toast}"/>`
  +K.txt(42,38.6,"B",{size:10,fill:"#fff",w:800,a:"middle"})
  +`<text x="58" y="38.6" font-size="10" font-weight="600" font-style="italic" font-family="Georgia,serif" text-anchor="middle" style="fill:#fff">I</text>`
  +K.txt(74,38,"U",{size:9.5,fill:"#fff",w:600,a:"middle"})+K.line(70.5,40.4,77.5,40.4,{s:"#fff",sw:1})
  +K.line(84,29,84,41,{s:"rgba(255,255,255,.28)",sw:.8})
  +K.icon("link",96,35,11,"#fff",1.7);

TH2["퀵 뷰"]=K=>[0,1,2].map(i=>K.blk(10+i*50,8,40,38,9)+K.blk(10+i*50,54,40,38,9)).join("")+dim()
  +K.card(22,16,116,68,12)
  +K.rect(30,24,44,52,{f:PAS[1],r:8})+K.circ(52,46,11,{f:"#FFC48F"})+K.rect(40,60,24,5,{f:"#FFD2A8",r:2.5})
  +tbar(82,28,36)+gbar(82,38,26)+K.txt(82,56,"12,000원",{size:9,w:800})
  +K.rect(82,62,48,14,{f:C.blue,r:7})+btxt(106,71.6,"담기",7.5)
  +K.icon("x",129,24,7,C.sub,1.8);

TH2["논모달 다이얼로그"]=K=>K.blk(14,10,132,16,8)+K.blk(14,32,50,58,10)+K.rect(14,32,50,58,{s:C.blue,sw:1.4,r:10})
  +K.bar(22,42,34,4,"#fff")+K.bar(22,51,26,4,"#fff")+K.fing(42,72)
  +K.card(72,30,76,60,12)+K.txt(81,45,"찾기",{size:8.5,w:700})+K.icon("x",138,42,7,C.sub,1.8)
  +K.rect(80,52,60,14,{f:"#fff",s:C.blue,sw:1.2,r:5})+K.txt(85,62,"버튼",{size:7.5})+K.line(101.5,55.5,101.5,62.5,{s:C.blue,sw:1.2})
  +K.rect(80,72,28,12,{f:KEY,r:6})+K.txt(94,80.6,"이전",{size:7,a:"middle"})
  +K.rect(112,72,28,12,{f:C.blue,r:6})+btxt(126,80.6,"다음",7);

TH2["전체 화면 검색"]=K=>K.blk(14,10,60,20,8)+K.blk(14,70,132,20,8)
  +K.rect(0,0,160,100,{f:"rgba(255,255,255,.92)"})
  +K.icon("x",144,15,10,C.ink,1.9)
  +K.icon("search",28,42,17,C.ink,1.9)+K.txt(43,47,"검색어",{size:14,w:700})+K.line(87,34,87,50,{s:C.blue,sw:1.6})
  +K.line(18,56,142,56,{s:C.blue,sw:1.8})
  +K.icon("q24clock",25,70,9,C.mute,1.6)+gbar(35,68,50)
  +K.icon("q24clock",25,84,9,C.mute,1.6)+gbar(35,82,34);

TH2["스포트라이트"]=K=>K.blk(14,10,132,16,8)+K.blk(14,32,60,58,10)+K.blk(84,32,62,14,7)
  +K.card(88,54,48,24,12,C.blue)+btxt(112,69.4,"시작",9.5)
  +K.rect(0,0,160,100)
  +`<path fill-rule="evenodd" d="M0 0H160V100H0ZM85 66a27 27 0 1 0 54 0a27 27 0 1 0-54 0Z" style="fill:rgba(18,22,44,.6)"/>`
  +K.circ(112,66,27,{s:"rgba(255,255,255,.75)",sw:1.2});

TH2["핫스팟"]=K=>K.blk(18,8,124,14,7)+K.blk(18,82,80,10,5)
  +K.card(18,30,124,44,14)
  +K.rect(30,40,24,24,{f:KEY,r:8})+K.icon("edit",42,52,12,C.sub,1.7)
  +K.rect(68,40,24,24,{f:KEY,r:8})+K.icon("image",80,52,12,C.sub,1.7)
  +K.rect(106,40,24,24,{f:KEY,r:8})+K.icon("sparkle",118,52,12,C.sub,1.7)
  +A("n24hs",K.circ(130,40,11,{f:C.blue,o:.28}))
  +K.circ(130,40,5,{f:C.blue,s:"#fff",sw:1.5});
kf("n24hs",2.4,"0%{transform:scale(.45);opacity:.6}75%,100%{transform:scale(1.5);opacity:0}","animation-timing-function:ease-out;");

TH2["온보딩 체크리스트"]=K=>{
  const row=(y,done,w)=>(done?K.circ(42,y,5.5,{f:C.blue})+K.icon("check",42,y,8,"#fff",2.2)+gbar(54,y-2,w)+K.line(52,y,56+w,y,{s:C.mute,sw:.8})
    :K.circ(42,y,5,{f:"#fff",s:OFF,sw:1.3})+tbar(54,y-2.5,w));
  return K.card(26,5,108,90,14)+K.txt(36,21,"시작하기",{size:9,w:800})+K.txt(124,21,"2/4",{size:7.5,fill:C.blue,w:700,a:"end"})
  +K.rect(36,27,88,4,{f:KEY,r:2})+K.rect(36,27,44,4,{f:C.blue,r:2})
  +row(43,1,44)+row(56,1,56)+row(69,0,50)+row(82,0,38)};

TH2["공지 모달"]=K=>K.blk(14,10,132,18,9)+K.blk(14,34,132,56,10)+dim()
  +K.card(34,8,92,84,14)
  +K.circ(80,25,10,{f:C.blueSoft})+K.icon("q24mega",80,25,12,C.blue,1.7)
  +K.txt(80,47,"서비스 점검 안내",{size:8.5,w:700,a:"middle"})+gbar(48,53,64)+gbar(56,61,48)
  +K.line(34,72,126,72,{s:C.line,sw:.7})+K.line(92,72,92,92,{s:C.line,sw:.7})
  +K.txt(63,84.6,"오늘 그만 보기",{size:7,fill:C.sub,a:"middle"})
  +K.txt(109,85,"닫기",{size:8,fill:C.blue,w:700,a:"middle"});

TH2["프로모션 팝업"]=K=>{const g="b224"+K.id();
  return K.blk(14,10,132,18,9)+K.blk(14,34,132,56,10)+dim()
  +`<defs>${K.grad(g,[[0,"#FF8FA8"],[1,"#FFB36B"]])}</defs>`
  +K.card(40,10,80,80,14)
  +`<path d="M40 50V24a14 14 0 0 1 14-14h52a14 14 0 0 1 14 14v26Z" style="fill:url(#${g})"/>`
  +K.txt(80,39,"30%",{size:21,fill:"#fff",w:800,a:"middle"})
  +K.icon("x",110,20,7,"#fff",1.9)
  +K.txt(80,63,"첫 구매 할인",{size:8,w:700,a:"middle"})
  +K.rect(50,69,60,14,{f:C.blue,r:7})+btxt(80,78.7,"쿠폰 받기",7.5)};

TH2["이탈 방지 팝업"]=K=>K.card(10,6,140,88,10)
  +K.rect(10,6,140,16,{f:KEY,r:10})+K.rect(10,14,140,8,{f:KEY})
  +K.rect(18,10,40,12,{f:"#fff",r:4})+gbar(24,14.5,22,3)
  +K.icon("x",141,14,7,C.ink,1.7)
  +gbar(20,30,60)+gbar(20,40,100)+gbar(20,50,80)
  +`<path d="M10 22H150V84a10 10 0 0 1-10 10H20a10 10 0 0 1-10-10Z" style="fill:rgba(30,36,70,.22)"/>`
  +K.card(34,30,92,60,12)
  +K.txt(80,48,"잠깐만요!",{size:11,w:800,a:"middle"})+gbar(54,54,52)
  +K.rect(46,62,68,14,{f:C.blue,r:7})+btxt(80,71.7,"쿠폰 받기",7.5)
  +K.txt(80,85,"그냥 나가기",{size:7,fill:C.mute,a:"middle"})
  +`<path d="M137 62Q143 42 129 25" style="fill:none;stroke:${C.blue};stroke-width:1.3;stroke-dasharray:2.5 2.5"/>`
  +cur(122,9);

TH2["인터스티셜"]=K=>{const g="b224"+K.id();
  return `<defs>${K.grad(g,[[0,"#5B7CFF"],[1,"#B58BFF"]])}</defs>`
  +K.rect(0,0,160,100,{f:`url(#${g})`})
  +K.rect(10,8,24,13,{f:"rgba(255,255,255,.26)",r:6.5})+K.txt(22,17.5,"광고",{size:7,fill:"#fff",w:700,a:"middle"})
  +K.rect(102,8,48,13,{f:"rgba(10,14,40,.3)",r:6.5})+K.txt(126,17.5,"건너뛰기 5",{size:7,fill:"#fff",w:600,a:"middle"})
  +K.card(60,27,40,34,10)+K.icon("sparkle",80,44,20,"#7C6BFF",1.8)
  +K.rect(50,67,60,5,{f:"rgba(255,255,255,.85)",r:2.5})
  +K.rect(46,78,68,15,{f:"#fff",r:7.5})+K.txt(80,88.4,"지금 설치",{size:8,fill:"#4A63E8",w:800,a:"middle"})};

TH2["인앱 메시지"]=K=>K.blk(14,50,132,20,10)+K.blk(14,76,132,16,8)
  +K.card(12,8,136,36,12)
  +K.circ(30,26,9,{f:C.blue})+K.icon("sparkle",30,26,11,"#fff",1.6)
  +K.txt(45,23,"새 기능이 생겼어요",{size:8,w:700})+gbar(45,29,46)
  +K.icon("x",139,16,6,C.mute,1.7)
  +K.txt(140,37,"보기",{size:7.5,fill:C.blue,w:700,a:"end"});

TH2["실행 취소 스낵바"]=K=>K.blk(16,8,128,20,10)
  +`<rect x="16" y="34" width="128" height="20" rx="10" style="fill:none;stroke:${C.mute};stroke-width:1" stroke-dasharray="3 3"/>`
  +K.icon("trash",80,44,10,C.mute,1.5)
  +K.card(10,65,140,27,9,C.toast)+K.txt(21,80.6,"1개 삭제",{size:8,fill:C.toastInk})
  +K.rect(84,70.5,60,16,{f:C.blue,r:8})+K.icon("undo",95,78.5,9,"#fff",1.9)+K.txt(102,81.1,"실행 취소",{size:7.2,fill:"#fff",w:700})
  +K.rect(16,89,62,1.6,{f:"rgba(255,255,255,.5)",r:.8});

/* ───────── sr · 검색 · 필터 ───────── */
TH2["저장한 검색"]=K=>K.card(14,8,132,24,12)+K.icon("search",28,20,11,C.sub,1.7)+K.txt(38,23.2,"강남 원룸",{size:9})
  +fillIcon("bookmark",132,20,13,C.blue)
  +K.card(14,38,132,54,12)+K.txt(24,51,"저장한 검색",{size:7,fill:C.mute,w:600})
  +fillIcon("bookmark",29,63,10,C.blue)+K.txt(38,66,"강남 원룸",{size:8.5,w:600})
  +K.rect(112,57.5,24,11,{f:C.blue,r:5.5})+K.txt(124,65.6,"새 3",{size:7,fill:"#fff",w:700,a:"middle"})
  +K.line(22,73,138,73,{s:C.line,sw:.6})
  +fillIcon("bookmark",29,81,10,C.blue)+K.txt(38,84,"역삼 투룸",{size:8.5,w:600});

TH2["고급 검색"]=K=>{const fld=(x,y,w)=>K.rect(x,y,w,15,{f:"#fff",s:OFF,sw:1,r:5});
  return K.card(18,5,124,90,14)
  +K.txt(28,23.6,"제목",{size:7.5,fill:C.sub})+fld(58,13,74)+K.txt(64,23.4,"디자인",{size:7.5})
  +K.txt(28,43.6,"작성자",{size:7.5,fill:C.sub})+fld(58,33,74)+gbar(64,38.5,28)
  +K.txt(28,63.6,"기간",{size:7.5,fill:C.sub})+fld(58,53,31)+gbar(63,58.5,18)+K.txt(95,63.4,"~",{size:7.5,fill:C.sub,a:"middle"})+fld(101,53,31)+gbar(106,58.5,18)
  +K.rect(58,74,74,14,{f:C.blue,r:7})+btxt(95,83.7,"검색",7.5)};

TH2["검색 연산자"]=K=>{const key=(x,l)=>K.card(x,60,28,22,8)+K.txt(x+14,75.4,l,{size:10.5,fill:C.blue,w:800,a:"middle"});
  return K.card(10,14,140,34,14)+K.icon("search",26,31,12,C.sub,1.8)
  +K.txt(38,34.6,tsp("&quot;",C.blue,800)+"디자인 시스템"+tsp("&quot;",C.blue,800)+" "+tsp("-",C.blue,800)+"광고",{size:10,w:600})
  +key(15,"&quot; &quot;")+key(49,"-")+key(83,"OR")+key(117,"site:")};

TH2["정렬 칩"]=K=>K.card(16,8,74,22,11)+K.rect(16.6,8.6,72.8,20.8,{s:C.blue,sw:1.3,r:10.4})
  +K.icon("sort",29,19,10,C.blue,1.8)+K.txt(38,22.3,"추천순",{size:9,fill:C.blue,w:700})+K.icon("q24down",79,19.5,9,C.blue,2)
  +K.blk(96,8,48,22,11)
  +K.card(16,36,92,58,12)
  +K.txt(28,52,"추천순",{size:8.5,fill:C.blue,w:700})+K.icon("check",97,49,9,C.blue,2.1)
  +K.line(24,58,100,58,{s:C.line,sw:.6})+K.txt(28,70,"최신순",{size:8.5})
  +K.line(24,76,100,76,{s:C.line,sw:.6})+K.txt(28,88,"낮은 가격순",{size:8.5});

TH2["필터 바텀시트"]=K=>K.blk(14,5,132,13,6.5)+dim()
  +K.card(0,23,160,90,16)+K.rect(70,28,20,3,{f:OFF,r:1.5})
  +K.txt(14,45,"필터",{size:9.5,w:800})+K.txt(146,44.6,"초기화",{size:7,fill:C.mute,a:"end"})
  +chip(14,52,26,16,"전체",1)+chip(45,52,26,16,"신상")+chip(76,52,26,16,"할인")+chip(107,52,39,16,"무료배송")
  +K.rect(14,76,132,17,{f:C.blue,r:8.5})+btxt(80,87.2,"32개 보기",8);

TH2["카테고리 칩"]=K=>{const cc=(x,l,col)=>K.card(x,12,42,24,12)+K.circ(x+12,24,5,{f:col})+K.txt(x+20,27.1,l,{size:8.5,w:600});
  return K.card(12,12,32,24,12,C.ink)+btxt(28,27.1,"전체",8.5)
  +cc(50,"한식","#F2A93B")+cc(98,"카페","#B98A5E")+cc(146,"치킨","#E5484D")
  +K.blk(12,46,64,46,12)+K.blk(84,46,64,46,12)};

TH2["날짜 필터"]=K=>K.card(12,8,136,84,14)
  +K.icon("calendar",25,21,11,C.ink,1.7)+K.txt(34,24.2,"기간",{size:9,w:800})
  +[["1주",0],["1개월",1],["3개월",0],["직접",0]].map(([l,on],i)=>{const x=20+i*31;return K.rect(x,32,28,17,on?{f:C.blue,r:8.5}:{f:KEY,r:8.5})+K.txt(x+14,43.2,l,{size:7.5,fill:on?"#fff":C.ink,w:on?700:500,a:"middle"})}).join("")
  +K.rect(20,58,52,22,{f:"#fff",s:OFF,sw:1,r:7})+K.txt(46,72,"10.20",{size:8.5,w:600,a:"middle"})
  +K.txt(80,72,"~",{size:8.5,fill:C.sub,a:"middle"})
  +K.rect(88,58,52,22,{f:"#fff",s:C.blue,sw:1.3,r:7})+K.txt(114,72,"11.20",{size:8.5,w:600,a:"middle"});

TH2["토글 필터"]=K=>K.card(14,8,132,26,13)+K.txt(26,24.6,"품절 제외",{size:9.5,w:700})
  +K.rect(108,12,30,18,{f:C.blue,r:9})+`<circle cx="129" cy="21" r="7" style="fill:#fff"/>`
  +K.card(14,39,132,26,13)+K.txt(26,55.6,"무료배송만",{size:9.5,w:700})
  +K.rect(108,43,30,18,{f:OFF,r:9})+`<circle cx="117" cy="52" r="7" style="fill:#fff"/>`
  +K.blk(14,72,62,22,10)+K.blk(84,72,62,22,10);

TH2["이 지역 재검색"]=K=>{const c="b224"+K.id();
  const pin=(x,y)=>`<path d="M${x} ${y}c-4-5-6-7.6-6-10.4a6 6 0 0 1 12 0c0 2.8-2 5.4-6 10.4z" style="fill:${C.blue};stroke:#fff;stroke-width:1"/>`+K.circ(x,y-10.2,2,{f:"#fff"});
  return K.card(10,6,140,88,14,"#E9F0EA")
  +`<defs><clipPath id="${c}"><rect x="10" y="6" width="140" height="88" rx="14"/></clipPath></defs><g clip-path="url(#${c})">`
  +K.rect(18,64,34,24,{f:"#CDE7D1",r:7})+`<path d="M150 62c-16 2-22 14-24 32h24z" style="fill:#CFE0FF"/>`
  +K.line(4,46,156,62,{s:"#fff",sw:6})+K.line(64,0,84,100,{s:"#fff",sw:5})+K.line(116,0,104,100,{s:"#fff",sw:3})+K.line(4,80,70,74,{s:"#fff",sw:3})
  +`</g>`
  +pin(40,60)+pin(98,82)+pin(128,58)
  +K.card(34,13,92,21,10.5)+K.icon("refresh",47,23.5,10,C.blue,1.9)+K.txt(56,26.4,"이 지역 재검색",{size:8,fill:C.blue,w:700})};

TH2["검색 결과 그룹"]=K=>K.card(18,3,124,94,14)
  +K.txt(28,16.5,"사람",{size:7.5,fill:C.blue,w:800})+K.txt(132,16.5,"2",{size:7.5,fill:C.mute,a:"end"})
  +K.circ(34,27,5.5,{f:"#C9D6FF"})+tbar(46,24.8,40,4.5)
  +K.circ(34,41,5.5,{f:"#FFD9C2"})+tbar(46,38.8,52,4.5)
  +K.line(26,50.5,134,50.5,{s:C.line,sw:.7})
  +K.txt(28,63,"파일",{size:7.5,fill:C.blue,w:800})+K.txt(132,63,"2",{size:7.5,fill:C.mute,a:"end"})
  +K.icon("q24file",34,73.5,11,C.sub,1.6)+tbar(46,71.3,58,4.5)
  +K.icon("q24file",34,87,11,C.sub,1.6)+tbar(46,84.8,36,4.5);

TH2["스니펫"]=K=>K.card(14,10,132,80,14)
  +K.circ(27,24,4.5,{f:"#C9D6FF"})+gbar(36,22.2,42,3.6)
  +K.bar(22,33,86,6,"#B7C6F2")
  +K.rect(18,45,124,36,{f:C.soft,r:7})
  +K.txt(24,59,"… 줄 간격은 "+tsp("글자 크기",C.ink,800)+"의",{size:8.2,fill:C.sub})
  +K.txt(24,72.5,"1.5배쯤이 읽기 편하고 …",{size:8.2,fill:C.sub});

TH2["검색 기록 삭제"]=K=>{const row=(y,l)=>K.icon("q24clock",30,y,9,C.mute,1.6)+K.txt(40,y+3,l,{size:8.5,fill:C.sub})+K.circ(128,y,6,{f:C.blueSoft})+K.icon("x",128,y,6.5,C.blue,2);
  return K.card(18,5,124,90,14)
  +K.txt(28,22,"최근 검색어",{size:7.5,fill:C.mute,w:600})+K.txt(134,22,"전체 삭제",{size:8,fill:C.blue,w:700,a:"end"})
  +K.line(26,29,134,29,{s:C.line,sw:.6})
  +row(42,"운동화")+row(60,"여름 이불")+row(78,"책상 조명")};

TH2["이미지 검색"]=K=>{const obj=(x,y,w,h,bg,col)=>K.rect(x,y,w,h,{f:bg,r:7})+K.circ(x+w/2,y+h*.42,n2(Math.min(w,h)*.22),{f:col})+K.rect(n2(x+w/2-Math.min(w,h)*.3),n2(y+h*.68),n2(Math.min(w,h)*.6),n2(h*.1),{f:col,r:1.5,o:.7});
  const br=(x,y,a,b)=>K.path(`M${x} ${y+b*7}V${y}H${x+a*7}`,{s:C.blue,sw:1.8});
  return K.card(14,8,132,22,11)+K.icon("search",27,19,10,C.sub,1.7)+gbar(36,17,40)
  +K.circ(132,19,8,{f:C.blueSoft})+K.icon("q24cam",132,19,11,C.blue,1.8)
  +K.card(14,38,56,54,10)+obj(19,43,46,44,PAS[1],"#F2994A")
  +br(22,46,1,1)+br(62,46,-1,1)+br(22,84,1,-1)+br(62,84,-1,-1)
  +obj(78,38,30,25,PAS[0],"#F2994A")+obj(114,38,30,25,PAS[3],"#F2B25E")
  +obj(78,67,30,25,PAS[2],"#E98A3C")+obj(114,67,30,25,PAS[4],"#F2994A")};

TH2["스폰서 결과"]=K=>K.card(14,8,132,44,12)
  +K.rect(22,15,24,13,{f:C.blueSoft,r:4})+K.txt(34,24.6,"광고",{size:7.5,fill:C.blue,w:800,a:"middle"})
  +tbar(51,19,56)+gbar(22,35,84)+gbar(22,43,58)
  +K.rect(116,15,22,30,{f:PAS[1],r:6})
  +K.blk(14,58,132,16,8)+K.blk(14,80,132,14,7);

TH2["대안 제안"]=K=>K.card(18,5,124,90,14)
  +K.icon("search",46,20,11,C.mute,1.7)+K.txt(55,23.2,"결과가 없어요",{size:8.5,fill:C.sub})
  +K.line(26,32,134,32,{s:C.line,sw:.6})
  +K.txt(28,46,"이건 어때요?",{size:7.5,fill:C.mute,w:600})
  +K.rect(26,52,108,16,{f:C.soft,r:8})+K.icon("search",36,60,8.5,C.blue,1.8)+K.txt(44,63.2,"런닝화",{size:9,fill:C.blue,w:700})+K.icon("next",126,60,7,C.blue,2)
  +K.rect(26,72,108,16,{f:C.soft,r:8})+K.icon("search",36,80,8.5,C.blue,1.8)+K.txt(44,83.2,"스니커즈",{size:9,fill:C.blue,w:700})+K.icon("next",126,80,7,C.blue,2);

TH2["AI 요약 답변"]=K=>{const g="b224"+K.id();
  const src=(x,col)=>K.rect(x,53,30,11,{f:KEY,r:5.5})+K.circ(x+6.5,58.5,3,{f:col})+gbar(x+12,57,13,3);
  return `<defs>${K.grad(g,[[0,"#5B8CFF"],[1,"#F29BD0"]],1,0)}</defs>`
  +K.card(14,6,132,64,14)+K.rect(14.7,6.7,130.6,62.6,{s:`url(#${g})`,sw:1.5,r:13.4})
  +fillIcon("sparkle",28,19,13,C.blue)+K.txt(37,22.2,"AI 요약",{size:8.5,fill:C.blue,w:800})
  +tbar(24,30,110,4)+tbar(24,37.5,100,4)+tbar(24,45,64,4)
  +src(24,"#F2A93B")+src(58,"#1FA971")+src(92,"#8B7BFF")
  +K.blk(14,76,132,10,5)+K.blk(14,90,96,6,3)};
}
