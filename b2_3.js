// B2 그림: pg · sc · sr · fb · dt
(()=>{
const C=K.C;
const n2=K.n2;
const KEY="#F2F4F8";                       // 회색 입력칸·빈 칸 면
// 아이콘 추가 (s3 접두어)
K.ICON.s3clock=["M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17z","M12 7.5V12l3 2"];
K.ICON.s3inbox=["M4 13l2.5-8h11L20 13v6H4z","M4 13h4.5l1 2.5h5l1-2.5H20"];
K.ICON.s3chevD="M6 9l6 6 6-6";
K.ICON.s3chevU="M6 15l6-6 6 6";
K.ICON.s3pin=["M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z","M12 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"];

// 꽉 찬 별 (cx,cy 중심, r 바깥 반지름)
const star=(cx,cy,r,f)=>{let d="";for(let k=0;k<10;k++){const a=(-90+k*36)*Math.PI/180,rr=k%2?r*.47:r;d+=(k?"L":"M")+n2(cx+rr*Math.cos(a))+" "+n2(cy+rr*Math.sin(a))}return `<path d="${d}z" style="fill:${f};stroke:${f};stroke-width:${n2(r*.18)};stroke-linejoin:round"/>`};
// 글자 폭 어림 (한글 1em, 숫자·영문 .58em, 빈칸 .3em)
const tw=(s,size)=>[...s].reduce((a,ch)=>a+(ch===" "?.3:/[가-힣]/.test(ch)?1:.6),0)*size;
// 칩: on 이면 파랑. 폭을 함께 돌려준다
const chipW=(s,size,chk)=>tw(s,size)+14+(chk?9:0);
const chip=(x,y,s,{on=false,size=7,h=15,chk=false,line=false}={})=>{const w=chipW(s,size,chk);
  const f=on?C.blueSoft:(line?C.sf:C.sf),st=on?C.blue:(line?C.blue:C.line);
  const ic=chk&&on?K.icon("check",x+10,y+h/2,7,C.blue,2):"";
  return K.rect(x,y,w,h,{f,s:st,sw:on?1.2:.9,r:h/2})+ic+K.txt(x+(chk&&on?16:7),y+h/2+size*.36,s,{size,fill:on||line?C.blue:C.ink,w:on?700:500})};
// 칩 여러 개를 가운데 맞춰 한 줄로
const chipRow=(cx,y,items,gap=5)=>{const ws=items.map(([s,o])=>chipW(s,o.size||7,o.chk));const tot=ws.reduce((a,b)=>a+b,0)+gap*(items.length-1);let x=cx-tot/2;return items.map(([s,o],i)=>{const r=chip(x,y,s,o);x+=ws[i]+gap;return r}).join("")};
// 휴대폰 화면 한 장
const phone=(x,y,w,h,f)=>K.card(x,y,w,h,12,f);
// 파란 버튼 (가운데 글자)
const btn=(x,y,w,h,s,{f=C.blue,ink="#fff",size=7}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
// 마우스 화살표 (흰 면 + 검은 선)
const cursor=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0l11 7.2-4.9 1 2.8 5.6-2.2 1.1-2.8-5.6-3.9 3.1z" style="fill:#fff;stroke:${C.ink};stroke-width:1;stroke-linejoin:round"/></g>`;
// 도넛 조각 (pathLength 100 기준)
const seg=(cx,cy,r,sw,from,len,col,o=1)=>`<circle cx="${cx}" cy="${cy}" r="${r}" pathLength="100" stroke-dasharray="${len} ${100-len}" stroke-dashoffset="${-from}" transform="rotate(-90 ${cx} ${cy})" style="fill:none;stroke:${col};stroke-width:${sw}${o<1?`;opacity:${o}`:""}"/>`;

/* ───────── pg · 페이지 섹션 ───────── */
TH2["히어로"]=K=>K.card(12,6,136,88,12)
  +K.circ(21,14,2.6,{f:C.ink})+K.bar(110,12.5,12,3)+K.bar(126,12.5,14,3)
  +K.rect(17,21,126,48,{f:C.blue,r:8})+K.rect(104,30,32,30,{f:"rgba(255,255,255,.22)",r:7})
  +K.txt(26,40,"한 번에 끝내요",{size:10,fill:"#fff",w:700})+K.bar(26,46,52,3,"rgba(255,255,255,.55)")
  +K.rect(26,53,38,11,{f:"#fff",r:5.5})+K.txt(45,61,"시작하기",{size:7,fill:C.blue,w:700,a:"middle"})
  +[0,1,2].map(i=>K.rect(17+i*43,75,40,13,{f:C.skel,r:5})).join("");

TH2["피처 그리드"]=K=>K.card(10,8,140,84,12)+K.bar(58,16,44,4,C.skel)
  +[["sparkle","빠르게"],["lock","안전하게"],["refresh","자동으로"]].map(([ic,s],i)=>{const cx=36+i*44;
    return K.rect(cx-19,26,38,58,{f:"#F7F8FC",r:8})+K.rect(cx-9,32,18,18,{f:C.blueSoft,r:6})+K.icon(ic,cx,41,11,C.blue,1.7)
      +K.txt(cx,61,s,{size:7,w:700,a:"middle"})+K.bar(cx-13,67,26,3)+K.bar(cx-9,73,18,3)}).join("");

TH2["후기 섹션"]=K=>K.blk(4,20,20,60,10)+K.blk(136,20,20,60,10)
  +K.card(30,10,100,80,14)
  +K.txt(40,38,"“",{size:24,fill:C.blue,w:700})+K.txt(40,47,"정말 편해졌어요",{size:8,w:700})
  +K.bar(40,53,76,3)+K.bar(40,59,56,3)
  +K.circ(47,76,6.5,{f:"#FFD9A8"})+K.txt(57,74.5,"김지은",{size:7,w:700})
  +[0,1,2,3,4].map(i=>star(59+i*6,80.5,2.5,C.amber)).join("");

TH2["가격표"]=K=>K.card(8,24,44,64,9)+K.card(108,24,44,64,9)
  +K.card(56,12,48,82,10)+K.rect(56,12,48,82,{s:C.blue,sw:1.4,r:10})
  +K.rect(68,7,24,10,{f:C.blue,r:5})+K.txt(80,14.5,"추천",{size:7,fill:"#fff",w:700,a:"middle"})
  +K.txt(30,42,"무료",{size:8,w:700,a:"middle"})+K.bar(17,49,26,2.6)+K.bar(17,55,20,2.6)+K.rect(15,75,30,8,{f:C.skel,r:4})
  +K.txt(80,36,"9,900원",{size:9,w:700,fill:C.blue,a:"middle"})+K.bar(65,44,30,2.6)+K.bar(65,50,24,2.6)+K.bar(65,56,28,2.6)+K.rect(63,78,34,11,{f:C.blue,r:5.5})
  +K.txt(130,42,"19,900원",{size:7,w:700,a:"middle"})+K.bar(118,49,24,2.6)+K.bar(118,55,18,2.6)+K.rect(115,75,30,8,{f:C.skel,r:4});

TH2["FAQ"]=K=>K.card(16,6,128,88,12)+K.txt(26,21,"자주 묻는 질문",{size:7.5,w:700})
  +K.txt(26,36,"Q",{size:7,fill:C.blue,w:700})+K.txt(34,36,"환불되나요?",{size:7,w:700})+K.icon("s3chevU",132,33.5,9,C.ink,1.8)
  +K.bar(34,42,90,3)+K.bar(34,48,64,3)+K.line(26,56,134,56,{s:C.line,sw:.7})
  +K.txt(26,68,"Q",{size:7,fill:C.blue,w:700})+K.txt(34,68,"배송은 얼마나 걸려요?",{size:7})+K.icon("s3chevD",132,65.5,9,C.sub,1.8)
  +K.line(26,75,134,75,{s:C.line,sw:.7})
  +K.txt(26,87,"Q",{size:7,fill:C.blue,w:700})+K.txt(34,87,"교환할 수 있나요?",{size:7})+K.icon("s3chevD",132,84.5,9,C.sub,1.8);

TH2["통계 밴드"]=K=>K.blk(12,8,136,14,7)+K.blk(12,80,136,12,6)
  +K.card(4,28,152,44,10)
  +[["98%","만족도",30],["12만","사용자",80],["4.9","평점",130]].map(([v,l,x])=>K.txt(x,53,v,{size:15,w:700,fill:C.blue,a:"middle"})+K.txt(x,64.5,l,{size:7,fill:C.sub,a:"middle"})).join("")
  +K.line(55,38,55,62,{s:C.line,sw:.8})+K.line(105,38,105,62,{s:C.line,sw:.8});

TH2["푸터"]=K=>K.blk(12,8,136,28,10)
  +K.card(6,42,148,52,10,"#1F2329")
  +[0,1,2].map(i=>{const x=18+i*36;return K.bar(x,52,18,3,"rgba(255,255,255,.75)")+[0,1,2].map(j=>K.bar(x,60+j*6,24-j*4,2.4,"rgba(255,255,255,.28)")).join("")}).join("")
  +[0,1,2].map(i=>K.circ(124+i*9,54,3.2,{f:"rgba(255,255,255,.28)"})).join("")
  +K.line(18,80,142,80,{s:"rgba(255,255,255,.14)",sw:.7})+K.txt(18,88.5,"© 2026 회사 이름",{size:7,fill:"rgba(255,255,255,.55)"});

/* ───────── sc · 화면 유형 ───────── */
TH2["스플래시"]=K=>phone(50,5,60,90,C.blue)
  +K.rect(67,35,26,26,{f:"#fff",r:8})+K.circ(80,48,6,{f:C.blue})+K.circ(80,48,2.4,{f:"#fff"})
  +K.bar(72,84,16,2.4,"rgba(255,255,255,.5)");

TH2["온보딩"]=K=>K.blk(10,14,28,72,10)+K.blk(122,14,28,72,10)
  +phone(44,5,72,90)+K.txt(108,15.5,"건너뛰기",{size:7,fill:C.mute,a:"end"})
  +K.rect(54,19,52,32,{f:C.blueSoft,r:9})+K.icon("sparkle",80,35,17,C.blue,1.6)
  +K.txt(80,61,"쉽게 기록해요",{size:7,w:700,a:"middle"})+K.bar(63,65.5,34,2.5)
  +K.rect(71,71,8,3,{f:C.blue,r:1.5})+K.circ(83,72.5,1.5,{f:C.line})+K.circ(88,72.5,1.5,{f:C.line})
  +btn(52,78,56,11,"다음");

TH2["권한 요청"]=K=>K.blk(14,8,132,16,8)+K.blk(14,30,62,62,10)+K.blk(84,30,62,62,10)+K.rect(0,0,160,100,{f:"rgba(30,36,70,.30)"})
  +K.card(30,20,100,66,13)+K.circ(80,33,7.5,{f:C.blueSoft})+K.icon("s3pin",80,33,9.5,C.blue,1.7)
  +K.txt(80,52,"위치를 허용할까요?",{size:7,w:700,a:"middle"})+K.bar(60,56.5,40,2.4)
  +K.line(30,65,130,65,{s:C.line,sw:.7})+K.line(80,65,80,86,{s:C.line,sw:.7})
  +K.txt(55,78,"허용 안 함",{size:7,fill:C.sub,a:"middle"})+K.txt(105,78,"허용",{size:7,fill:C.blue,w:700,a:"middle"});

TH2["미리 안내"]=K=>phone(42,5,76,90)
  +K.circ(80,29,14,{f:C.blueSoft})+K.icon("image",80,29,14,C.blue,1.7)
  +K.txt(80,54,"사진이 필요해요",{size:7,w:700,a:"middle"})+K.bar(57,59,46,2.5)+K.bar(64,64,32,2.5)
  +btn(50,71,60,12,"계속하기")+K.txt(80,92,"나중에",{size:7,fill:C.mute,a:"middle"});

TH2["일부만 허용"]=K=>{const cols=["#FFD9A8","#CDE3FF","#D7F0DD","#F6D0E0","#E3DAFF","#FFE9B3","#CFEFEA","#FADCCB"],sel=[0,3,5];
  return K.card(14,6,132,88,12)+K.txt(22,18.5,"3장만 허용",{size:7,w:700})+K.txt(138,18.5,"완료",{size:7,fill:C.blue,w:700,a:"end"})
  +cols.map((c,i)=>{const x=22+(i%4)*29,y=26+Math.floor(i/4)*31,on=sel.includes(i);
    return K.rect(x,y,26,26,{f:c,r:4})+(on?K.rect(x,y,26,26,{s:C.blue,sw:1.6,r:4})+K.circ(x+20.5,y+5.5,4.2,{f:C.blue})+K.icon("check",x+20.5,y+5.5,6,"#fff",2.2):K.circ(x+20.5,y+5.5,3.6,{f:"rgba(255,255,255,.4)",s:"#fff",sw:1}))}).join("")};

TH2["설정으로 보내기"]=K=>K.card(8,16,80,68,12)
  +K.circ(48,32,8.5,{f:C.blueSoft})+K.icon("lock",48,32,10,C.blue,1.7)
  +K.txt(48,52,"권한이 꺼져 있어요",{size:7,w:700,a:"middle"})
  +btn(18,60,60,14,"설정 열기")
  +K.path("M91 50h11M98 46l4 4-4 4",{s:C.blue,sw:1.7})
  +K.card(106,22,46,56,10)+K.rect(121,26,16,16,{f:"#8E95A3",r:4.5})+K.icon("settings",129,34,11,"#fff",1.6)
  +K.txt(113,57,"사진",{size:7})+K.rect(129,50,16,9,{f:C.blue,r:4.5})+K.circ(140.5,54.5,3.2,{f:"#fff"})
  +K.bar(113,66,30,2.5);

TH2["빈 상태"]=K=>phone(42,5,76,90)
  +K.circ(80,32,15,{f:KEY})+K.icon("s3inbox",80,32,15,C.mute,1.6)
  +K.txt(80,58,"아직 없어요",{size:7,w:700,a:"middle"})+K.bar(63,63,34,2.5)
  +btn(55,72,50,12,"추가하기");

TH2["첫 사용 빈 화면"]=K=>phone(42,5,76,90)
  +K.circ(80,28,14,{f:C.blueSoft})+K.icon("edit",80,28,13,C.blue,1.7)
  +K.txt(80,53,"첫 메모를 써 보세요",{size:7,w:700,a:"middle"})+K.bar(63,58,34,2.5)
  +K.path("M80 64c0 10 6 14 14 15",{s:C.blue,sw:1,o:.5})
  +K.circ(103,80,9,{f:C.blue})+K.icon("plus",103,80,10,"#fff",2.2);

TH2["검색 결과 없음"]=K=>K.card(14,6,132,88,12)
  +K.rect(22,13,116,16,{f:KEY,r:8})+K.icon("search",31,21,8,C.sub,1.8)+K.txt(38,23.5,"뒷굽 높은 슬리퍼",{size:7})+K.circ(130,21,4,{f:C.mute})+K.icon("x",130,21,4.5,"#fff",1.6)
  +K.circ(80,50,12,{f:C.blueSoft})+K.icon("search",80,50,13,C.blue,1.8)
  +K.txt(80,74,"검색 결과가 없어요",{size:7.5,w:700,a:"middle"})+K.bar(62,80,36,2.5);

TH2["삭제 직후 빈 화면"]=K=>K.card(14,6,132,88,12)+K.txt(22,19,"장바구니",{size:7,w:700})
  +K.circ(80,38,12,{f:C.blueSoft})+K.icon("cart",80,38,13,C.blue,1.6)
  +K.txt(80,61,"장바구니가 비었어요",{size:7,w:700,a:"middle"})
  +K.card(22,70,116,17,8.5,C.toast)+K.txt(31,81,"모두 삭제했어요",{size:7,fill:"#fff"})+K.txt(130,81,"되돌리기",{size:7,fill:"#8FB0FF",w:700,a:"end"});

TH2["오프라인 배너"]=K=>K.card(14,6,132,88,12)
  +K.path("M14 18a12 12 0 0 1 12-12h108a12 12 0 0 1 12 12v8H14z",{f:C.toast,s:"none",sw:0})
  +K.icon("wifiOff",28,16,9,"#fff",1.8)+K.txt(36,18.5,"인터넷 연결이 끊겼어요",{size:7,fill:"#fff",w:700})
  +K.rect(24,34,112,22,{f:C.skel,r:6})+K.bar(24,62,90,3.5)+K.bar(24,70,64,3.5)+K.rect(24,78,112,9,{f:C.skel,r:4.5});

TH2["완료 화면"]=K=>phone(44,5,72,90)
  +[[58,18,C.amber,20],[100,16,C.red,-25],[56,40,C.green,35],[104,40,"#B57BFF",10],[64,12,C.blue,-10]].map(([x,y,c,r])=>`<rect x="${x}" y="${y}" width="4" height="2.4" rx="1" transform="rotate(${r} ${x+2} ${y+1.2})" style="fill:${c}"/>`).join("")
  +K.circ(80,30,14,{f:C.blue})+K.icon("check",80,30,15,"#fff",2.6)
  +K.txt(80,57,"결제 완료!",{size:8,w:700,a:"middle"})+K.bar(64,62,32,2.5)
  +btn(52,74,56,12,"확인");

/* ───────── sr · 검색 · 정렬 ───────── */
TH2["최근 검색어"]=K=>K.card(18,6,124,88,12)
  +K.rect(26,13,108,16,{f:"#fff",s:C.blue,sw:1.2,r:8})+K.line(33,17,33,25,{s:C.blue,sw:1})
  +K.txt(26,42,"최근 검색",{size:7,fill:C.sub,w:700})+K.txt(134,42,"전체 삭제",{size:7,fill:C.mute,a:"end"})
  +["운동화","겨울 패딩","캠핑 의자"].map((s,i)=>{const y=54+i*13;return K.icon("s3clock",31,y,8,C.mute,1.6)+K.txt(39,y+2.4,s,{size:7})+K.icon("x",130,y,6,C.mute,1.6)}).join("");

TH2["인기 검색어"]=K=>K.card(18,6,124,88,12)
  +K.txt(26,20,"인기 검색어",{size:7,w:700})+K.txt(134,20,"14:00 기준",{size:7,fill:C.mute,a:"end"})
  +[["패딩","up"],["운동화","up"],["목도리","new"],["캠핑 의자",""]].map(([s,t],i)=>{const y=36+i*15;
    return K.txt(28,y,String(i+1),{size:8.5,fill:i<3?C.blue:C.ink,w:700,a:"middle"})+K.txt(38,y,s,{size:7})
      +(t==="up"?`<path d="M127 ${y-1.5}l3.2-4.5 3.2 4.5z" style="fill:${C.red}"/>`:t==="new"?K.txt(134,y-.5,"NEW",{size:7,fill:C.red,w:700,a:"end"}):K.line(127,y-3.2,133,y-3.2,{s:C.mute,sw:1.2}))}).join("");

TH2["추천 검색어"]=K=>K.card(16,10,128,80,12)
  +K.rect(24,18,112,16,{f:KEY,r:8})+K.icon("search",33,26,8,C.mute,1.8)+K.line(40,22,40,30,{s:C.blue,sw:1})+K.txt(43,28.5,"검색어를 입력하세요",{size:7,fill:C.mute})
  +K.txt(24,48,"이런 건 어때요",{size:7,fill:C.sub,w:700})
  +chipRow(80,54,[["겨울 코트",{on:true}],["목도리",{on:true}],["핫팩",{on:true}]])
  +chipRow(80,72,[["수면 양말",{on:true}],["전기담요",{on:true}]]);

TH2["검색어 강조"]=K=>K.card(18,6,124,88,12)
  +K.rect(26,13,108,16,{f:KEY,r:8})+K.icon("search",35,21,8,C.sub,1.8)+K.txt(42,23.5,"부산",{size:7,w:500})
  +["역 맛집","대학교","시청 근처"].map((s,i)=>{const y=46+i*16;return K.icon("search",31,y-2.6,7,C.mute,1.6)
    +K.rect(37,y-8.5,19,12,{f:C.blueSoft,r:2.5})+K.txt(38.5,y,"부산",{size:8,fill:C.blue,w:700})+K.txt(58,y,s,{size:8,fill:C.sub,w:400})}).join("");

TH2["연관 검색어 칩"]=K=>K.card(12,8,136,84,12)
  +K.circ(80,24,9,{f:KEY})+K.icon("search",80,24,10,C.mute,1.8)
  +K.txt(80,46,"결과가 없어요",{size:7.5,w:700,a:"middle"})+K.txt(80,56,"이 검색어는 어때요?",{size:7,fill:C.sub,a:"middle"})
  +chipRow(80,64,[["슬리퍼",{line:true,size:7}],["실내화",{line:true,size:7}],["샌들",{line:true,size:7}]]);

TH2["필터"]=K=>K.card(18,6,124,88,12)
  +K.icon("filter",29,19,10,C.blue,1.7)+K.txt(37,21.8,"필터",{size:7.5,w:700})+K.txt(134,21.8,"초기화",{size:7,fill:C.mute,a:"end"})
  +[["무료배송",1],["별점 4점 이상",1],["새 상품",0]].map(([s,on],i)=>{const y=36+i*13;
    return (on?K.rect(27,y-5,10,10,{f:C.blue,r:3})+K.icon("check",32,y,7,"#fff",2.2):K.rect(27,y-5,10,10,{f:"#fff",s:C.line,sw:1.1,r:3}))+K.txt(43,y+2.5,s,{size:7,w:on?700:400,fill:on?C.ink:C.sub})}).join("")
  +btn(26,74,108,14,"상품 24개 보기");

TH2["정렬"]=K=>K.card(24,8,58,17,8.5)+K.icon("sort",34,16.5,9,C.blue,1.7)+K.txt(41,19.3,"추천순",{size:7,w:700})+K.icon("s3chevU",74,16.5,7,C.sub,1.8)
  +K.blk(88,8,48,17,8.5)
  +K.card(24,30,112,62,11)
  +["추천순","최신순","가격 낮은순","리뷰 많은순"].map((s,i)=>{const y=44+i*13.5;return K.txt(34,y,s,{size:7,fill:i?C.ink:C.blue,w:i?400:700})+(i?"":K.icon("check",124,y-2.5,9,C.blue,2.2))}).join("");

/* ───────── fb · 상태 · 피드백 ───────── */
const SKEL=f=>K.circ(34,28,8,{f})+K.rect(48,22,60,5,{f,r:2.5})+K.rect(48,31,36,5,{f,r:2.5})+K.rect(26,44,108,28,{f,r:8})+K.rect(26,78,80,5,{f,r:2.5});
TH2["스켈레톤"]=K=>K.card(18,10,124,80,14)+`<g class="b2a-skel3">${SKEL(C.skel)}</g>`;

TH2["시머"]=K=>{const cp="b3cp"+K.id(),gb="b3gb"+K.id();
  return `<defs><clipPath id="${cp}">${SKEL("#000")}</clipPath><linearGradient id="${gb}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>`
  +K.card(18,10,124,80,14)+SKEL(C.skel)
  +`<g clip-path="url(#${cp})"><rect x="77" y="0" width="44" height="100" transform="skewX(-18)" class="b2a-shim3" style="fill:url(#${gb})"/></g>`};

TH2["스피너"]=K=>K.blk(16,10,128,12,6)
  +K.card(52,30,56,56,16)
  +`<g class="b2a-spin3">`+K.circ(80,58,15,{s:C.skel,sw:4.5})+K.path("M80 43a15 15 0 0 1 15 15",{s:C.blue,sw:4.5})+`</g>`;

TH2["당겨서 새로고침"]=K=>K.card(32,4,96,92,12)
  +`<g class="b2a-ptr3icon"><g class="b2a-ptr3spin">`+K.circ(80,18,8.5,{f:"#fff",s:C.line,sw:.8})+K.icon("refresh",80,18,11,C.blue,2)+`</g></g>`
  +`<g class="b2a-ptr3list">`+[0,1,2].map(i=>{const y=34+i*18;return K.rect(40,y,80,14,{f:"#F7F8FC",r:5})+K.circ(48,y+7,4,{f:C.skel})+K.bar(56,y+3.5,46,3)+K.bar(56,y+8.5,28,2.5)}).join("")
  +K.fing(112,48)+K.path("M112 60v10M108.5 66.5l3.5 3.5 3.5-3.5",{s:C.blue,sw:1.4})+`</g>`;

// 상태 버튼: 같은 자리 같은 크기의 버튼 하나
const BX=32,BY=38,BW=96,BH=28;
const stage=()=>K.blk(28,12,104,16,8);
const label=(s,ink="#fff",x=80)=>K.txt(x,BY+BH/2+3.3,s,{size:9,fill:ink,w:700,a:"middle"});
TH2["기본 상태"]=K=>stage()+K.card(BX,BY,BW,BH,14,C.blue)+label("저장하기");

TH2["호버"]=K=>stage()+K.card(BX,BY,BW,BH,14,C.blue)+K.rect(BX,BY,BW,BH,{f:"rgba(0,0,40,.18)",r:14})+label("저장하기")
  +cursor(104,54,1.25);

TH2["눌림"]=K=>stage()+K.rect(BX+5,BY+3,BW-10,BH-6,{f:C.blue,r:11})+K.rect(BX+5,BY+3,BW-10,BH-6,{f:"rgba(0,0,40,.30)",r:11})
  +K.txt(80,BY+BH/2+3,"저장하기",{size:8.3,fill:"#fff",w:700,a:"middle"})
  +K.circ(112,58,11,{f:"rgba(255,255,255,.22)"})+K.fing(112,58);

TH2["포커스"]=K=>stage()+K.rect(BX-4,BY-4,BW+8,BH+8,{s:C.blue,sw:2.2,r:18,o:.55})
  +K.card(BX,BY,BW,BH,14,C.blue)+label("저장하기")
  +K.card(66,78,28,14,4)+K.txt(80,87.6,"Tab",{size:7,w:700,a:"middle"});

TH2["비활성"]=K=>stage()+K.rect(BX,BY,BW,BH,{f:"#E4E7EE",r:14})+label("저장하기","#A9B0BD");

TH2["로딩 상태"]=K=>stage()+K.card(BX,BY,BW,BH,14,C.blue)
  +`<g class="b2a-spin3">`+K.circ(60,52,5.5,{s:"rgba(255,255,255,.35)",sw:2})+K.path("M60 46.5a5.5 5.5 0 0 1 5.5 5.5",{s:"#fff",sw:2})+`</g>`
  +label("저장 중",undefined,86);

TH2["성공 상태"]=K=>stage()+K.card(BX,BY,BW,BH,14,C.green)+K.icon("check",62,52,12,"#fff",2.4)+label("저장됨",undefined,86);

TH2["오류 상태"]=K=>stage()+K.card(BX,BY,BW,BH,14,C.red)+K.icon("alert",58,52,12,"#fff",1.9)+label("다시 시도",undefined,86)
  +K.txt(80,80,"저장하지 못했어요",{size:7,fill:C.red,w:500,a:"middle"});

TH2["선택됨"]=K=>stage()+K.card(BX,BY,BW,BH,14)+K.rect(BX,BY,BW,BH,{f:C.blueSoft,s:C.blue,sw:1.6,r:14})
  +K.circ(58,52,6,{f:C.blue})+K.icon("check",58,52,8,"#fff",2.4)+label("선택됨",C.blue,86)
  +K.rect(BX,74,BW,14,{f:C.sf,s:C.line,sw:.8,r:7,o:.8});

TH2["체크 그리기"]=K=>K.blk(16,10,128,12,6)
  +K.card(52,28,56,58,16)
  +K.circ(80,57,18,{f:C.blue,cls:"b2a-chk3c"})
  +`<path d="M71 57.5l6.5 6.5 12-13" class="b2a-chk3" pathLength="1" stroke-dasharray="1" style="fill:none;stroke:#fff;stroke-width:3.4"/>`;

TH2["할 일 줄긋기"]=K=>K.card(18,10,124,80,12)
  +[["우유 사기",1],["운동 30분",0],["책 읽기",0]].map(([s,on],i)=>{const y=31+i*21;
    return (on?K.rect(28,y-6,12,12,{f:C.blue,r:3.5})+K.icon("check",34,y,8,"#fff",2.4):K.rect(28,y-6,12,12,{f:"#fff",s:C.line,sw:1.2,r:3.5}))
      +K.txt(48,y+3,s,{size:8,fill:on?C.mute:C.ink,w:on?400:500})+(on?K.line(46,y,48+tw(s,8)+2,y,{s:C.ink,sw:1.3}):"")
      +(i<2?K.line(28,y+10.5,132,y+10.5,{s:C.line,sw:.6}):"")}).join("");

TH2["컨페티"]=K=>{const P=[[14,14,C.blue,20],[30,30,C.amber,-30],[22,70,C.red,40],[40,88,C.green,-15],[52,12,"#B57BFF",60],[70,22,C.red,-40],[96,10,C.green,25],[112,24,C.blue,-55],[128,12,C.amber,15],[144,30,"#B57BFF",-20],[136,70,C.blue,35],[120,86,C.amber,-25],[146,88,C.red,50],[88,90,"#B57BFF",-35],[60,82,C.blue,10],[8,46,C.green,70],[152,52,C.green,-60]];
  return P.map(([x,y,c,r],i)=>i%3===2?K.circ(x,y,2.2,{f:c}):`<rect x="${x-3.5}" y="${y-1.6}" width="7" height="3.2" rx="1" transform="rotate(${r} ${x} ${y})" style="fill:${c}"/>`).join("")
  +K.card(36,34,88,34,14)+K.txt(80,55,"축하해요!",{size:10,w:700,a:"middle"})};

TH2["배지 획득"]=K=>K.card(32,6,96,88,14)
  +`<path d="M71 42l-6 22 8-3.5 4.5 7 4-21z" style="fill:${C.blue}"/><path d="M89 42l6 22-8-3.5-4.5 7-4-21z" style="fill:${C.blue};opacity:.7"/>`
  +K.circ(80,34,16,{f:"#F5B83D"})+K.circ(80,34,12.5,{s:"rgba(255,255,255,.7)",sw:1})+star(80,34.5,7.5,"#fff")
  +K.txt(80,80,"7일 연속 달성",{size:7.5,w:700,a:"middle"})+K.bar(64,85,32,2.5);

TH2["햅틱"]=K=>K.card(60,8,40,84,9)
  +K.bar(67,18,26,3)+K.bar(67,25,18,3)+K.rect(66,64,28,12,{f:C.blue,r:6})+K.fing(80,70)
  +K.path("M53 38q-4 12 0 24",{s:C.blue,sw:1.7})+K.path("M45 32q-6.5 18 0 36",{s:C.blue,sw:1.7,o:.45})
  +K.path("M107 38q4 12 0 24",{s:C.blue,sw:1.7})+K.path("M115 32q6.5 18 0 36",{s:C.blue,sw:1.7,o:.45});

/* ───────── dt · 숫자 · 평가 ───────── */
TH2["도넛 차트"]=K=>K.card(16,10,128,80,12)
  +seg(52,50,21,9,0,100,C.skel)+seg(52,50,21,9,0,55,C.blue)+seg(52,50,21,9,57,23,C.blue,.4)+seg(52,50,21,9,82,16,C.amber)
  +K.txt(52,53.5,"55%",{size:9,w:700,a:"middle"})
  +[[C.blue,1,40],[C.blue,.4,32],[C.amber,1,26]].map(([c,o,w],i)=>{const y=36+i*14;return K.rect(90,y-3.5,7,7,{f:c,r:2,o})+K.bar(102,y-1.5,w,3)}).join("");

TH2["스파크라인"]=K=>K.blk(14,8,132,20,10)+K.blk(14,72,132,20,10)
  +K.card(10,32,140,36,11)
  +K.txt(20,46,"코스피",{size:7,fill:C.sub,w:500})+K.txt(20,59,"2,614",{size:9.5,w:700})
  +K.path("M74 58l5-3 5 2.5 5-6 5 1.5 5-8 5 3 5-7",{s:C.red,sw:1.5})+K.circ(114,41,1.8,{f:C.red})
  +K.txt(142,53.5,"+1.2%",{size:7.5,fill:C.red,w:700,a:"end"});

TH2["게이지"]=K=>K.card(24,8,112,84,14)
  +K.path("M46 72A34 34 0 0 1 114 72",{s:C.skel,sw:9})+K.path("M46 72A34 34 0 0 1 101.68 45.8",{s:C.blue,sw:9})
  +K.line(80,72,96.6,52,{s:C.ink,sw:2.4})+K.circ(80,72,4.5,{f:C.ink})
  +K.txt(46,86.5,"0",{size:7,fill:C.mute,a:"middle"})+K.txt(114,86.5,"100",{size:7,fill:C.mute,a:"middle"})+K.txt(80,87,"72",{size:8,w:700,a:"middle"});

TH2["히트맵"]=K=>{let o=K.card(14,16,132,68,12);let s=7;const op=[0,.25,.5,.75,1];
  for(let c=0;c<12;c++)for(let r=0;r<5;r++){s=(s*37+11)%101;let lv=s%5;if(c>8&&lv<2)lv+=2;const x=21+c*10,y=26+r*10;
    o+=lv?K.rect(x,y,8,8,{f:C.blue,r:2,o:op[lv]}):K.rect(x,y,8,8,{f:C.skel,r:2})}
  return o};

TH2["별점"]=K=>K.card(14,26,132,48,14)
  +[0,1,2,3,4].map(i=>star(36+i*22,50,10,i<4?C.amber:C.skel)).join("")
  +K.fing(107,62);

TH2["NPS 점수"]=K=>K.card(8,20,144,60,12)+K.txt(16,33,"친구에게 추천할까요?",{size:7,w:700})
  +[...Array(11)].map((_,i)=>{const x=14+i*12.2,on=i===9;return K.rect(x,40,11,17,{f:on?C.blue:KEY,r:3})+K.txt(x+5.5,51,String(i),{size:7,fill:on?"#fff":C.ink,w:on?700:500,a:"middle"})}).join("")
  +K.txt(14,69,"전혀",{size:7,fill:C.mute})+K.txt(146,69,"꼭 추천",{size:7,fill:C.mute,a:"end"});

TH2["평점 슬라이더"]=K=>K.card(14,22,132,56,12)
  +K.bar(28,58,104,5,C.skel)+K.bar(28,58,83,5,C.blue)
  +K.rect(99,31,24,14,{f:C.blue,r:7})+`<path d="M108 44.5l3 3.5 3-3.5z" style="fill:${C.blue}"/>`+K.txt(111,41,"8점",{size:7,fill:"#fff",w:700,a:"middle"})
  +`<circle cx="111" cy="60.5" r="7" style="fill:#fff;stroke:${C.line};stroke-width:.8" filter="url(#b2lift)"/>`+K.circ(111,60.5,2.5,{f:C.blue})
  +K.txt(28,73,"별로",{size:7,fill:C.mute})+K.txt(132,73,"최고",{size:7,fill:C.mute,a:"end"});

TH2["평가 태그"]=K=>K.card(8,14,144,72,12)
  +chipRow(80,26,[["빠른 배송",{on:true,chk:true,size:7}],["친절해요",{on:true,chk:true,size:7}]],6)
  +chipRow(80,46,[["포장이 꼼꼼해요",{size:7}],["가성비",{size:7}]],6)
  +chipRow(80,66,[["또 살래요",{size:7}]],6);

TH2["취소선 가격"]=K=>K.card(14,14,132,72,12)
  +K.rect(22,22,44,56,{f:"#E9D5B9",r:8})+K.rect(33,36,22,26,{f:"rgba(255,255,255,.35)",r:6})
  +K.txt(74,33,"울 니트",{size:7,fill:C.sub})
  +K.txt(74,49,"39,000원",{size:7.5,fill:C.mute})+K.line(73,46.3,74+tw("39,000원",7.5)+1,46.3,{s:C.mute,sw:1.1})
  +K.txt(74,67,"20%",{size:10,fill:C.red,w:700})+K.txt(96,67,"31,200원",{size:10,w:700});

B2CSS+=`
/* 음수 지연: 멈춰 둔 칸에서도 다 그려진 장면이 보이게 */
.b2a-skel3{animation:b2a-skel3 2.2s ease-in-out infinite}
@keyframes b2a-skel3{0%,100%{opacity:1}50%{opacity:.45}}
.b2a-shim3{animation:b2a-shim3 2.2s linear infinite}
@keyframes b2a-shim3{0%,100%{transform:translateX(0) skewX(-18deg)}46%{transform:translateX(100px) skewX(-18deg)}46.01%{transform:translateX(-110px) skewX(-18deg)}}
.b2a-spin3{transform-box:fill-box;transform-origin:center;animation:b2a-spin3 1s linear infinite}
@keyframes b2a-spin3{to{transform:rotate(360deg)}}
.b2a-ptr3list{animation:b2a-ptr3list 2.8s ease-out infinite -1.4s}
@keyframes b2a-ptr3list{0%,10%{transform:translateY(-16px)}36%,72%{transform:none}90%,100%{transform:translateY(-16px)}}
.b2a-ptr3icon{animation:b2a-ptr3icon 2.8s ease-out infinite -1.4s}
@keyframes b2a-ptr3icon{0%,14%{opacity:0;transform:translateY(-10px)}36%,72%{opacity:1;transform:none}86%,100%{opacity:0;transform:translateY(-10px)}}
.b2a-ptr3spin{transform-box:fill-box;transform-origin:center;animation:b2a-ptr3spin 2.8s linear infinite -1.4s}
@keyframes b2a-ptr3spin{0%,14%{transform:rotate(-120deg)}36%{transform:none}72%,100%{transform:rotate(360deg)}}
.b2a-chk3c{transform-box:fill-box;transform-origin:center;animation:b2a-chk3c 2.6s ease-out infinite -1.6s}
@keyframes b2a-chk3c{0%,8%{opacity:0;transform:scale(.6)}24%{opacity:1;transform:scale(1.06)}32%,84%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
.b2a-chk3{animation:b2a-chk3 2.6s ease-out infinite -1.6s}
@keyframes b2a-chk3{0%,26%{stroke-dashoffset:1;opacity:1}50%,84%{stroke-dashoffset:0;opacity:1}96%,100%{stroke-dashoffset:0;opacity:0}}
`;
})();
