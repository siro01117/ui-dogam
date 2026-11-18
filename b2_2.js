// B2 그림: ct · nv · ly
(()=>{
const C=K.C;
const DARK="#2A2F3A";                          // 제목 글줄 막대
const GREY="#EEF1F8";                          // 흐린 면(사진·본문 자리)
const PAS=["#CFE0FF","#FFE1C7","#D9F2E0","#F3D9F7","#FFF1B8","#D7E3EA"];  // 사진 대신 쓰는 옅은 색
K.ICON.k2down="M6 9l6 6 6-6";
K.ICON.k2up="M6 15l6-6 6 6";
// 측정 표시(포인트색): 가로·세로 치수선
const dimH=(x1,x2,y)=>K.line(x1,y,x2,y,{s:C.blue,sw:1.2})+K.path(`M${x1+3} ${y-2.5}L${x1} ${y}L${x1+3} ${y+2.5}M${x2-3} ${y-2.5}L${x2} ${y}L${x2-3} ${y+2.5}`,{s:C.blue,sw:1.2});
const dimV=(x,y1,y2)=>K.line(x,y1,x,y2,{s:C.blue,sw:1.2})+K.path(`M${x-2.5} ${y1+3}L${x} ${y1}L${x+2.5} ${y1+3}M${x-2.5} ${y2-3}L${x} ${y2}L${x+2.5} ${y2-3}`,{s:C.blue,sw:1.2});
const dashR=(x,y,w,h,r=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" style="fill:none;stroke:${C.blue};stroke-width:1.2" stroke-dasharray="3 2"/>`;
const dashL=(x1,y1,x2,y2,o=1)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${C.blue};stroke-width:1.2${o<1?`;opacity:${o}`:""}" stroke-dasharray="3 2"/>`;
const defs=s=>`<defs>${s}</defs>`;
const clip=(cid,x,y,w,h,r)=>`<clipPath id="${cid}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath>`;
const lift=s=>`<g filter="url(#b2lift)">${s}</g>`;
const btxt=(x,y,s,size=8.5)=>K.txt(x,y,s,{size,fill:"#fff",w:700,a:"middle"});
// 메뉴 아이콘 짝: 같은 흰 면에 아이콘만 크게
const menuCard=inner=>K.blk(16,12,128,76,16)+K.card(54,24,52,52,16)+inner;

/* ───────── ct · 버튼 ───────── */
TH2["버튼"]=K=>K.blk(20,14,120,14,7)
  +K.card(30,40,100,30,15,C.blue)+btxt(80,59,"확인",11)
  +K.blk(44,80,72,8,4);

TH2["링크"]=K=>K.card(16,20,128,60,14)+K.bar(28,33,92,5)+K.bar(28,44,70,5)
  +K.txt(28,67,"자세히 보기",{size:10,fill:C.blue,w:700})+K.line(28,70.5,82,70.5,{s:C.blue,sw:1.2})+K.icon("next",89,63.5,9,C.blue,2);

TH2["FAB"]=K=>K.blk(16,12,128,18,9)+K.blk(16,36,128,18,9)+K.blk(16,60,80,18,9)
  +K.card(104,52,36,36,18,C.blue)+K.icon("plus",122,70,16,"#fff",2.4);

TH2["하단 고정 버튼"]=K=>K.blk(16,10,128,18,9)+K.blk(16,34,128,18,9)
  +K.card(0,62,160,44,14)+K.rect(14,72,132,20,{f:C.blue,r:10})+btxt(80,85.5,"구매하기",9);

TH2["아이콘 버튼"]=K=>K.blk(16,14,128,16,8)
  +K.card(28,44,32,32,16)+K.icon("heart",44,60,15,C.blue,2)
  +K.card(64,44,32,32,16)+K.icon("share",80,60,15,C.ink,1.8)
  +K.card(100,44,32,32,16)+K.icon("bookmark",116,60,15,C.ink,1.8);

TH2["CTA"]=K=>K.card(14,8,132,84,16)+K.bar(28,22,80,7,"#D5DAE5")+K.bar(28,34,56,5)
  +K.rect(28,48,104,22,{f:C.blue,r:11})+btxt(80,62.5,"지금 시작하기",9)
  +K.txt(80,83,"나중에",{size:7,fill:C.mute,a:"middle"});

TH2["칩"]=K=>{const chip=(x,y,w,l,on)=>on?K.card(x,y,w,20,10,C.blue)+btxt(x+w/2,y+13.5,l,8.5):K.card(x,y,w,20,10)+K.txt(x+w/2,y+13.5,l,{size:8.5,a:"middle"});
  return chip(20,24,36,"전체",1)+chip(62,24,36,"신상")+chip(104,24,36,"할인")+chip(25,54,52,"무료배송")+chip(83,54,52,"오늘출발")};

TH2["더보기"]=K=>K.card(20,8,120,84,14)
  +[0,1,2].map(i=>{const y=17+i*17;return K.rect(30,y,12,12,{f:PAS[i],r:3})+K.bar(48,y+2,60,4,"#D5DAE5")+K.bar(48,y+8,36,3.5)}).join("")
  +K.line(28,70,132,70,{s:C.line,sw:.6})+K.txt(76,84,"더보기",{size:8.5,w:700,a:"middle"})+K.icon("k2down",96,81,9,C.ink,2);

TH2["아코디언"]=K=>K.card(16,8,128,84,14)
  +K.txt(28,25,"배송은 언제?",{size:8,w:700})+K.icon("k2up",130,22,10,C.blue,2)
  +K.rect(24,32,112,24,{f:GREY,r:6})+K.bar(30,38,90,4,"#D5DAE5")+K.bar(30,46,60,4,"#D5DAE5")
  +K.line(24,64,136,64,{s:C.line,sw:.6})
  +K.txt(28,80,"환불은?",{size:8,w:700})+K.icon("k2down",130,77,10,C.ink,2);

/* ───────── nv · 내비게이션 ───────── */
TH2["상단 바"]=K=>K.card(8,8,144,28,12)+K.icon("back",22,22,12,C.ink,2)+K.txt(80,25.5,"주문 내역",{size:9,w:700,a:"middle"})+K.icon("search",138,22,11,C.ink,1.8)
  +K.blk(8,44,144,22,11)+K.blk(8,72,144,22,11);

TH2["탭 바"]=K=>K.blk(16,10,128,24,12)+K.blk(16,40,128,20,10)
  +K.rect(0,68,160,32,{f:C.sf,fx:"url(#b2lift)"})+K.line(0,68,160,68,{s:C.hair,sw:.6})
  +[["home","홈"],["search","검색"],["bookmark","저장"],["user","내 정보"]].map(([ic,lb],i)=>K.icon(ic,20+i*40,79,11,i?C.mute:C.blue,1.8)+K.txt(20+i*40,94,lb,{size:7,fill:i?C.mute:C.blue,w:i?500:700,a:"middle"})).join("");

TH2["탭"]=K=>K.card(10,10,140,80,14)
  +K.txt(35,30,"정보",{size:8.5,fill:C.blue,w:700,a:"middle"})+K.txt(80,30,"리뷰",{size:8.5,fill:C.mute,a:"middle"})+K.txt(125,30,"문의",{size:8.5,fill:C.mute,a:"middle"})
  +K.line(10,38,150,38,{s:C.line,sw:.8})+K.rect(18,36.5,34,3,{f:C.blue,r:1.5})
  +K.bar(22,50,110,5)+K.bar(22,60,90,5)+K.bar(22,70,100,5);

TH2["햄버거 메뉴"]=K=>menuCard([40,50,60].map(y=>K.line(67,y,93,y,{s:C.ink,sw:3.2})).join(""));
TH2["케밥 메뉴"]=K=>menuCard([40,50,60].map(y=>K.circ(80,y,3.4,{f:C.ink})).join(""));
TH2["미트볼 메뉴"]=K=>menuCard([70,80,90].map(x=>K.circ(x,50,3.4,{f:C.ink})).join(""));
TH2["와플 메뉴"]=K=>menuCard([40,50,60].map(y=>[70,80,90].map(x=>K.circ(x,y,2.8,{f:C.ink})).join("")).join(""));
TH2["벤토 메뉴"]=K=>menuCard([40,50,60].map(y=>[70,80,90].map(x=>K.rect(x-3.5,y-3.5,7,7,{f:C.ink,r:1.6})).join("")).join(""));

TH2["브레드크럼"]=K=>K.blk(16,14,128,14,7)
  +K.card(22,37,116,26,13)+K.txt(34,54,"홈",{size:9,fill:C.mute})+K.icon("next",50,50.5,8,C.mute,2)
  +K.txt(58,54,"의류",{size:9,fill:C.mute})+K.icon("next",84,50.5,8,C.mute,2)+K.txt(92,54,"코트",{size:9,w:700})
  +K.blk(16,72,128,14,7);

TH2["페이지네이션"]=K=>K.blk(16,12,128,16,8)
  +K.card(14,38,132,28,14)+K.icon("back",28,52,9,C.mute,2)
  +[1,2,3,4,5].map((n,i)=>{const x=48+i*16;return n===2?K.circ(x,52,8,{f:C.blue})+btxt(x,55,n,8.5):K.txt(x,55,n,{size:8.5,a:"middle"})}).join("")
  +K.icon("next",132,52,9,C.ink,2)
  +K.blk(16,76,128,12,6);

TH2["무한 스크롤"]=K=>{const c="k2c"+K.id();
  return defs(clip(c,24,4,112,92,14))+K.card(24,4,112,92,14)
  +`<g clip-path="url(#${c})"><g class="b2a-k2inf">`+[0,1,2,3,4].map(i=>{const y=12+i*22;return K.rect(32,y,16,16,{f:PAS[i%3],r:4})+K.bar(54,y+3,60,4,"#D5DAE5")+K.bar(54,y+10,40,3.5)}).join("")+`</g>`
  +K.rect(24,76,112,20,{f:C.sf})+K.circ(80,86,5,{s:C.line,sw:1.8})+`<path d="M80 81a5 5 0 0 1 5 5" class="b2a-k2spin" style="fill:none;stroke:${C.blue};stroke-width:1.8"/></g>`};

TH2["진행 바"]=K=>K.blk(16,12,128,10,5)
  +K.card(16,30,128,40,14)+K.txt(28,46,"업로드 중",{size:8,w:700})
  +K.rect(28,54,104,7,{f:C.skel,r:3.5})+K.rect(28,54,64,7,{f:C.blue,r:3.5,cls:"b2a-k2prog"})
  +K.blk(16,78,128,10,5);

TH2["단계 표시"]=K=>K.card(14,30,132,40,14)
  +K.line(48,50,70,50,{s:C.blue,sw:2})+K.line(90,50,112,50,{s:C.line,sw:2})
  +K.circ(38,50,10,{f:C.blue})+K.icon("check",38,50,11,"#fff",2.4)
  +K.circ(80,50,10,{f:C.sf,s:C.blue,sw:2})+K.txt(80,53.5,"2",{size:9.5,fill:C.blue,w:700,a:"middle"})
  +K.circ(122,50,10,{f:C.sf,s:C.line,sw:1.5})+K.txt(122,53.5,"3",{size:9.5,fill:C.mute,w:700,a:"middle"});

TH2["스크롤 진행 바"]=K=>{const c="k2c"+K.id();
  return defs(clip(c,20,8,120,86,8))+K.card(20,8,120,86,8)
  +`<g clip-path="url(#${c})"><g class="b2a-k2scrc"><g transform="translate(0 -22)">`+K.bar(32,22,64,7,DARK)
  +[0,1,2,3,4,5,6,7,8,9,10].map(i=>K.bar(32,38+i*9,i%4===3?60:96,4)).join("")+`</g></g>`
  +K.rect(20,8,120,7,{f:C.sf})+K.rect(20,8,120,5,{f:"#D5DAE5"})+K.rect(14,8,66,5,{f:C.blue,r:2.5,cls:"b2a-k2scrb"})+`</g>`};

TH2["스토리 바"]=K=>{const g="k2g"+K.id(),w=12.75;
  return defs(K.grad(g,[[0,"#FFB38A"],[1,"#C86DD7"]]))+K.blk(14,20,24,60,10)+K.blk(122,20,24,60,10)
  +K.card(46,6,68,88,12,`url(#${g})`)
  +[0,1,2,3].map(i=>{const x=50+i*(w+3);return K.rect(x,11,w,3,{f:"rgba(255,255,255,.4)",r:1.5})+(i<2?K.rect(x,11,w,3,{f:"#fff",r:1.5}):i===2?K.rect(x,11,6,3,{f:"#fff",r:1.5}):"")}).join("")
  +K.circ(56,24,4,{f:"rgba(255,255,255,.9)"})+K.bar(63,22.5,22,3,"rgba(255,255,255,.75)")};

TH2["홈 인디케이터"]=K=>K.card(28,-24,104,116,24)
  +K.rect(38,6,84,24,{f:GREY,r:8})+K.rect(38,36,84,24,{f:GREY,r:8})
  +K.rect(50,76,60,15,{f:C.blueSoft,r:7.5})+K.rect(54,81.25,52,4.5,{f:C.ink,r:2.25});

TH2["GNB"]=K=>K.card(8,8,144,84,12)
  +[16,21,26].map(x=>K.circ(x,15,1.6,{f:C.line})).join("")+K.line(8,22,152,22,{s:C.line,sw:.6})
  +K.rect(16,27,9,9,{f:C.blue,r:2.5})+K.bar(28,29.5,16,4,DARK)
  +K.txt(62,34.5,"제품",{size:7})+K.txt(82,34.5,"요금",{size:7})+K.txt(102,34.5,"소개",{size:7})
  +K.rect(122,26,24,11,{f:C.blue,r:5.5})+btxt(134,34,"시작",7)
  +K.line(8,42,152,42,{s:C.line,sw:.6})
  +K.rect(16,50,128,34,{f:GREY,r:8});

/* ───────── ly · 배치 · 목록 ───────── */
TH2["리스트"]=K=>K.card(18,8,124,84,14)
  +[0,1,2].map(i=>{const t=8+i*28;return K.rect(28,t+6,16,16,{f:PAS[i],r:4})+K.bar(52,t+9,64,4.5,"#D5DAE5")+K.bar(52,t+17,40,3.5)+K.icon("next",128,t+14,8,C.mute,1.8)+(i<2?K.line(28,t+28,132,t+28,{s:C.line,sw:.6}):"")}).join("");

TH2["그리드"]=K=>[0,1].map(r=>[0,1,2].map(c=>K.card(20+c*42,9+r*42,36,36,8,PAS[r*3+c])).join("")).join("");

TH2["카드"]=K=>{const g="k2g"+K.id();
  return defs(K.grad(g,[[0,"#BFD3FF"],[1,"#F3C9E4"]]))+K.card(44,6,72,88,14)
  +K.path("M44 54V20a14 14 0 0 1 14-14h44a14 14 0 0 1 14 14V54z",{f:`url(#${g})`,s:"none"})
  +K.txt(52,67,"제주 여행",{size:8,w:700})+K.bar(52,74,44,4)+K.bar(52,81,28,4)};

TH2["캐러셀"]=K=>{const a="k2g"+K.id(),b="k2g"+K.id();
  const A=x=>K.card(x,18,112,52,14,`url(#${a})`)+K.txt(x+12,41,"겨울 세일",{size:11,fill:"#fff",w:700})+K.txt(x+12,54,"최대 50%",{size:7.5,fill:"rgba(255,255,255,.8)",w:400});
  const B=x=>K.card(x,18,112,52,14,"#E9D5B9")+K.txt(x+12,41,"신상 입고",{size:11,fill:"#5A4632",w:700});
  const Cc=x=>K.card(x,18,112,52,14,`url(#${b})`)+K.txt(x+12,41,"무료배송",{size:11,fill:"#fff",w:700});
  return defs(K.grad(a,[[0,"#2B3445"],[1,"#46567F"]])+K.grad(b,[[0,"#7D9BFF"],[1,"#3D5BE0"]]))
  +`<g class="b2a-k2car">`+A(16)+B(136)+Cc(256)+A(376)+B(496)+`</g>`
  +[72,80,88].map(x=>K.circ(x,81.7,1.7,{f:C.mute})).join("")+K.rect(67.5,80,9,3.4,{f:C.ink,r:1.7,cls:"b2a-k2dot"})};

TH2["가로 스크롤"]=K=>K.blk(14,8,60,10,5)
  +[14,60,106,152].map((x,i)=>K.card(x,24,40,54,10)+K.rect(x+4,28,32,28,{f:PAS[i],r:6})+K.bar(x+5,62,26,4,"#D5DAE5")+K.bar(x+5,69,18,3.5)).join("")
  +K.line(70,90,104,90,{s:C.blue,sw:1.6})+K.path("M75 86L70 90L75 94",{s:C.blue,sw:1.6})+K.fing(110,90);

TH2["메이슨리"]=K=>{const H=[[30,44,30],[46,26,40],[22,40,40]];let o="";
  H.forEach((col,c)=>{let y=6;col.forEach((h,i)=>{o+=K.card(22+c*40,y,36,h,7,PAS[(c*2+i)%6]);y+=h+4})});return o};

TH2["벤토 그리드"]=K=>{const T=(x,y,w,h,f)=>K.card(x,y,w,h,10,f)+K.bar(x+7,y+h-11,Math.min(w*.4,30),3.5,"rgba(18,20,26,.14)");
  return T(16,8,62,84,"#DCE6FF")+T(84,8,60,38,"#FFE7D1")+T(84,52,27,40,C.sf)+T(117,52,27,40,"#E3F5EA")};

TH2["스플릿"]=K=>{const g="k2g"+K.id();
  return defs(K.grad(g,[[0,"#BFD3FF"],[1,"#F3C9E4"]]))+K.card(10,10,140,80,14)
  +K.path("M10 24a14 14 0 0 1 14-14H80V90H24a14 14 0 0 1-14-14z",{f:`url(#${g})`,s:"none"})
  +K.bar(90,30,44,6,"#D5DAE5")+K.bar(90,42,36,4)+K.bar(90,50,44,4)+K.rect(90,62,38,13,{f:C.blue,r:6.5})};

TH2["카드 그리드"]=K=>[0,1].map(r=>[0,1,2].map(c=>{const x=17+c*44,y=8+r*44;return K.card(x,y,38,40,8)+K.rect(x+3,y+3,32,22,{f:PAS[r*3+c],r:5})+K.bar(x+4,y+30,24,3.5,"#D5DAE5")}).join("")).join("");

TH2["사이드바 레이아웃"]=K=>K.card(10,10,140,80,12)
  +K.path("M10 22a12 12 0 0 1 12-12H48V90H22a12 12 0 0 1-12-12z",{f:C.blueSoft,s:"none"})
  +K.rect(15,20,28,10,{f:C.blue,r:5})+[38,50,62].map(y=>K.bar(18,y,22,3.5,"#C9D3EE")).join("")
  +K.bar(58,20,50,6,"#D5DAE5")+K.rect(58,32,84,26,{f:GREY,r:6})+K.rect(58,63,40,20,{f:GREY,r:6})+K.rect(102,63,40,20,{f:GREY,r:6});

TH2["매거진"]=K=>{const g="k2g"+K.id();
  return defs(K.grad(g,[[0,"#FFC9A8"],[1,"#C9A8F5"]]))+K.card(10,8,140,84,12)
  +K.rect(18,16,64,44,{f:`url(#${g})`,r:6})
  +K.bar(90,18,52,6,DARK)+K.bar(90,28,38,6,DARK)+[42,48,54].map(y=>K.bar(90,y,50,3)).join("")
  +[18,64,110].map(x=>[68,74,80].map((y,i)=>K.bar(x,y,i===2?24:32,3)).join("")).join("")};

TH2["대시보드"]=K=>K.card(10,8,140,84,12)
  +[[18,"1.2만",C.ink],[61,"84%",C.ink],[104,"+12%",C.green]].map(([x,v,col])=>K.rect(x,16,38,26,{f:"#F4F6FB",r:7})+K.bar(x+5,21,16,3)+K.txt(x+5,36.5,v,{size:10,fill:col,w:700})).join("")
  +K.path("M20 80L40 70L58 74L78 60L98 64L118 52L140 56V86H20z",{f:C.blueSoft,s:"none"})
  +K.path("M20 80L40 70L58 74L78 60L98 64L118 52L140 56",{s:C.blue,sw:2});

TH2["Z 패턴"]=K=>K.card(10,8,140,84,12)
  +K.rect(20,16,22,9,{f:C.skel,r:3})+K.rect(110,16,30,10,{f:C.skel,r:5})+K.rect(20,60,40,24,{f:C.skel,r:5})+K.rect(104,68,36,12,{f:C.skel,r:6})
  +K.circ(26,32,2.6,{f:C.blue})+K.path("M26 32H132L30 66H134",{s:C.blue,sw:2.4})+K.path("M129 61L134 66L129 71",{s:C.blue,sw:2.4});

TH2["풀블리드"]=K=>{const g="k2g"+K.id();
  return defs(K.grad(g,[[0,"#9CC0FF"],[1,"#E7B8E8"]],1,0))+K.blk(16,8,90,10,5)
  +K.rect(0,24,160,46,{f:`url(#${g})`,fx:"url(#b2lift)"})+K.path("M0 70L40 46L66 60L98 38L160 66V70z",{f:"rgba(255,255,255,.35)",s:"none"})
  +K.path("M14 47H4M8 43L4 47L8 51",{s:"#fff",sw:2})+K.path("M146 47H156M152 43L156 47L152 51",{s:"#fff",sw:2})
  +K.blk(16,78,128,8,4)+K.blk(16,90,90,8,4)};

TH2["스티키 헤더"]=K=>{const c="k2c"+K.id();
  return defs(clip(c,26,4,108,92,16))+K.card(26,4,108,92,16)
  +`<g clip-path="url(#${c})">`+[18,40,62,84].map(y=>K.rect(34,y,92,18,{f:GREY,r:6})).join("")
  +K.rect(26,4,108,24,{f:C.sf,fx:"url(#b2lift)"})+K.txt(80,20,"목록",{size:8.5,w:700,a:"middle"})+K.rect(26,27,108,1.6,{f:C.blue})+`</g>`
  +K.line(146,80,146,42,{s:C.blue,sw:1.6})+K.path("M142 47L146 42L150 47",{s:C.blue,sw:1.6})};

TH2["아바타"]=K=>{const g="k2g"+K.id(),c="k2c"+K.id();
  return defs(K.grad(g,[[0,"#BFD3FF"],[1,"#F3C9E4"]])+`<clipPath id="${c}"><circle cx="64" cy="50" r="26"/></clipPath>`)
  +lift(K.circ(64,50,26,{f:`url(#${g})`}))
  +`<g clip-path="url(#${c})">`+K.circ(64,43,9,{f:"rgba(255,255,255,.92)"})+K.path("M44 80a20 18 0 0 1 40 0z",{f:"rgba(255,255,255,.92)",s:"none"})+`</g>`
  +K.circ(83,70,5,{f:C.green,s:"#fff",sw:2})
  +K.blk(100,40,44,10,5)+K.blk(100,56,30,8,4)};

TH2["썸네일"]=K=>{const g="k2g"+K.id();
  return defs(K.grad(g,[[0,"#46567F"],[1,"#9C7FD8"]]))+K.card(14,22,84,52,10,`url(#${g})`)
  +K.circ(56,48,9,{f:"rgba(255,255,255,.92)"})+K.path("M53.5 43.5L61 48L53.5 52.5z",{f:C.ink,s:"none"})
  +K.rect(72,61,22,10,{f:"rgba(18,20,26,.65)",r:3})+K.txt(83,68.6,"3:24",{size:7,fill:"#fff",w:700,a:"middle"})
  +K.bar(106,28,40,5,"#D5DAE5")+K.bar(106,38,30,4)+K.bar(106,46,22,4)};

TH2["싱글 컬럼"]=K=>dashL(44,4,44,96,.6)+dashL(116,4,116,96,.6)
  +K.card(50,6,60,26,8,PAS[0])+K.bar(50,38,60,4,"#D5DAE5")+K.bar(50,45,44,4)
  +K.card(50,54,60,26,8,PAS[1])+K.bar(50,86,52,4,"#D5DAE5");

TH2["홀리 그레일"]=K=>K.card(14,8,132,14,6)+K.rect(20,12,6,6,{f:C.blue,r:1.5})+K.bar(30,13,24,4,"#D5DAE5")
  +K.card(14,26,26,52,6,"#EEF2FF")+[34,42,50].map(y=>K.bar(19,y,16,3,"#C9D3EE")).join("")
  +K.card(44,26,72,52,6)+K.bar(50,33,40,5,"#D5DAE5")+K.rect(50,42,60,22,{f:GREY,r:4})+K.bar(50,69,48,3)
  +K.card(120,26,26,52,6,"#EEF2FF")+K.rect(125,32,16,16,{f:"#DCE3F7",r:3})
  +K.card(14,82,132,12,6)+K.bar(20,86.5,40,3);

TH2["F 패턴"]=K=>K.card(14,8,132,84,12)
  +[18,26,34,42,50,58,66,74,82].map((y,i)=>K.bar(24,y,[110,96,104,80,70,88,60,74,50][i],3.5,"#D5DAE5")).join("")
  +`<path d="M26 85V19H136M26 37H100" style="fill:none;stroke:${C.blue};stroke-width:9;opacity:.28"/>`
  +K.path("M26 85V19H136M26 37H100",{s:C.blue,sw:1.4});

TH2["12 컬럼 그리드"]=K=>{const cw=8.375,gw=2.5,X=i=>16+i*(cw+gw),W=n=>n*cw+(n-1)*gw;
  return K.card(10,10,140,80,12)
  +[...Array(12)].map((_,i)=>K.rect(X(i),16,cw,68,{f:C.blueSoft,r:1.5})).join("")
  +[[0,8,28],[8,4,28],[0,4,58],[4,4,58],[8,4,58]].map(([c,n,y])=>K.rect(X(c),y,W(n),20,{f:"rgba(255,255,255,.72)",s:C.blue,sw:1,r:4})).join("")};

TH2["컨테이너"]=K=>K.card(6,8,148,84,10)
  +K.rect(6,8,148,12,{f:GREY,r:0})+[13,18,23].map(x=>K.circ(x,14,1.5,{f:"#C9CED6"})).join("")
  +dimH(40,120,27)
  +dashR(40,33,80,52,6)+K.rect(46,39,68,20,{f:GREY,r:5})+K.bar(46,64,52,4,"#D5DAE5")+K.bar(46,72,40,4)
  +K.circ(28,58,2.4,{f:C.line})+K.circ(132,58,2.4,{f:C.line});

TH2["거터"]=K=>[14,62,110].map(x=>K.card(x,12,36,76,9)+K.rect(x+4,16,28,24,{f:GREY,r:5})+K.bar(x+5,46,22,4,"#D5DAE5")+K.bar(x+5,54,16,3.5)).join("")
  +K.rect(50,12,12,76,{f:C.blueSoft})+K.rect(98,12,12,76,{f:C.blueSoft})
  +dimH(50,62,68)+dimH(98,110,68);

TH2["마진"]=K=>{const box=y=>K.card(30,y,100,28,9)+K.rect(30,y,100,28,{s:"#B8C0CE",sw:1.2,r:9})+K.rect(38,y+7,14,14,{f:PAS[y>50?1:0],r:4})+K.bar(58,y+9,56,4,"#D5DAE5")+K.bar(58,y+16,36,3.5);
  return K.rect(30,38,100,24,{f:C.blueSoft})+box(10)+box(62)+dimV(80,38.5,61.5)};

TH2["패딩"]=K=>K.card(24,14,112,72,14)+K.rect(24,14,112,72,{f:C.blueSoft,r:14})+K.rect(24,14,112,72,{s:"#B8C0CE",sw:1.2,r:14})
  +K.rect(52,36,56,28,{f:C.sf,r:5})+dashR(52,36,56,28,5)+K.txt(80,54,"내용",{size:10,w:700,a:"middle"})
  +dimV(80,14.5,35.5)+dimH(24.5,51.5,50)+dimH(108.5,135.5,50)+dimV(80,64.5,85.5);

TH2["여백"]=K=>{const p="k2p"+K.id();
  return defs(`<pattern id="${p}" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M0 5L5 0" style="stroke:${C.blue};stroke-width:.7;opacity:.4"/></pattern>`)
  +K.card(14,8,132,84,12)+K.rect(20,14,120,72,{f:`url(#${p})`,r:6})
  +K.rect(24,18,64,26,{f:C.sf,r:3})+K.bar(27,22,56,7,DARK)+K.bar(27,34,40,4)
  +K.rect(96,18,40,40,{f:C.sf,r:3})+K.rect(99,21,34,34,{f:PAS[0],r:7})
  +K.rect(24,66,42,16,{f:C.sf,r:3})+K.rect(27,69,36,10,{f:C.blue,r:5})};

TH2["어버브 더 폴드"]=K=>{const g="k2g"+K.id();
  return defs(K.grad(g,[[0,"#BFD3FF"],[1,"#F3C9E4"]]))+K.card(40,6,80,120,14)
  +K.rect(48,14,64,26,{f:`url(#${g})`,r:8})+K.bar(48,46,48,5,DARK)+K.bar(48,54,36,4)+K.rect(48,59,30,7,{f:C.blue,r:3.5})
  +`<g style="opacity:.4">`+K.rect(48,76,64,22,{f:GREY,r:6})+`</g>`
  +dashL(30,70,130,70)+dimV(32,6.5,69.5)};

TH2["시각적 위계"]=K=>K.card(16,8,128,84,12)
  +K.txt(28,32,"오늘의 할인",{size:14,w:700})+K.txt(28,48,"인기 상품 모음",{size:8,fill:C.sub})
  +K.bar(28,60,88,3.5)+K.bar(28,67,70,3.5)+K.bar(28,74,80,3.5)
  +K.circ(132,27,6.5,{f:C.blue})+btxt(132,29.9,"1",8)
  +K.circ(132,45,5.5,{f:C.blue,o:.65})+btxt(132,47.7,"2",7.5)
  +K.circ(132,67,5,{f:C.blue,o:.4})+btxt(132,69.5,"3",7);

TH2["브레이크포인트"]=K=>K.card(22,24,28,52,6)+[30,43,56].map(y=>K.rect(26,y,20,10,{f:C.skel,r:2.5})).join("")
  +K.card(74,16,72,60,8)+K.rect(80,22,60,8,{f:C.skel,r:2.5})+[80,100.5,121].map(x=>K.rect(x,36,19,34,{f:C.skel,r:3})).join("")
  +K.line(14,86,146,86,{s:C.mute,sw:1})+[14,38,86,110,146].map(x=>K.line(x,83.5,x,86,{s:C.mute,sw:1})).join("")
  +dashL(62,8,62,86)+K.circ(62,86,2.6,{f:C.blue})+K.txt(62,97,"768",{size:7,fill:C.blue,w:700,a:"middle"});

/* ───────── 움직임 ───────── */
const E="cubic-bezier(.2,.7,.3,1)";
B2CSS+=`
.b2a-k2inf{animation:b2a-k2inf 2.4s ${E} infinite}
@keyframes b2a-k2inf{0%,30%{transform:none}70%,100%{transform:translateY(-22px)}}
.b2a-k2spin{transform-box:view-box;transform-origin:80px 86px;animation:b2a-k2spin .9s linear infinite}
@keyframes b2a-k2spin{to{transform:rotate(360deg)}}
.b2a-k2prog{transform-box:fill-box;transform-origin:0 50%;animation:b2a-k2prog 2.6s ${E} infinite}
@keyframes b2a-k2prog{0%,12%{transform:none;opacity:1}55%,75%{transform:scaleX(1.625);opacity:1}84%{transform:scaleX(1.625);opacity:0}85%{transform:scaleX(.1);opacity:0}90%{transform:scaleX(.1);opacity:1}100%{transform:none;opacity:1}}
.b2a-k2scrc{animation:b2a-k2scrc 2.8s ${E} infinite}
@keyframes b2a-k2scrc{0%,12%{transform:none}45%,58%{transform:translateY(-22px)}80%,90%{transform:translateY(22px)}100%{transform:none}}
.b2a-k2scrb{transform-box:fill-box;transform-origin:0 50%;animation:b2a-k2scrb 2.8s ${E} infinite}
@keyframes b2a-k2scrb{0%,12%{transform:none}45%,58%{transform:scaleX(2)}80%,90%{transform:scaleX(.1)}100%{transform:none}}
.b2a-k2car{animation:b2a-k2car 3.6s ${E} infinite}
@keyframes b2a-k2car{0%,22%{transform:none}30%,52%{transform:translateX(-120px)}60%,82%{transform:translateX(-240px)}90%,100%{transform:translateX(-360px)}}
.b2a-k2dot{animation:b2a-k2dot 3.6s ${E} infinite}
@keyframes b2a-k2dot{0%,22%{transform:none}30%,52%{transform:translateX(8px)}60%,82%{transform:translateX(16px)}90%,100%{transform:none}}
@media (prefers-reduced-motion:reduce){.b2a-k2inf,.b2a-k2spin,.b2a-k2prog,.b2a-k2scrc,.b2a-k2scrb,.b2a-k2car,.b2a-k2dot{animation:none}}
`;
})();
