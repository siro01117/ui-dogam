// B2 그림 추가분 6: ov · in · ct (액션 시트 ~ 맨 위로 버튼)
{
const C=K.C, n2=K.n2;
const DARK="#3A4050";                    // 진한 제목 줄
const KEY="#F0F2F7";                     // 눌리지 않은 회색 면
const OFF="#D5DAE3";                     // 빈 칸 선
const DIM="rgba(30,36,70,.18)";
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DARK,r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const btxt=(x,y,s,size=8.5)=>K.txt(x,y,s,{size,fill:"#fff",w:700,a:"middle"});
const knob=(cx,cy,r)=>`<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:#fff" filter="url(#b2lift)"/>`;
const caret=(x,y1,y2)=>K.line(x,y1,x,y2,{s:C.blue,sw:1.3});
const ring=(x,y,w,h,r)=>K.rect(x,y,w,h,{s:C.blue,sw:1.4,r});
const tri=(d,f)=>`<path d="${d}" style="fill:${f}"/>`;
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r)=>{const i=K.id(),g="b26p"+i,c="b26c"+i;
  return `<defs>${K.grad(g,[[0,"#AFC6FF"],[1,"#E5C8F3"]],0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.3,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:#6A86E8"/></g>`};
// 체크박스
const cbox=(x,y,on)=>on?K.rect(x,y,12,12,{f:C.blue,r:3.5})+K.icon("check",x+6,y+6,9.5,"#fff",2.2):K.rect(x,y,12,12,{f:C.sf,s:OFF,sw:1.3,r:3.5});

Object.assign(K.ICON,{
  q6down:"M6 9l6 6 6-6",
  q6upload:["M12 16V5","M7.5 9.5L12 5l4.5 4.5","M5 19h14"],
  q6top:["M6 5h12","M12 20V9.5","M7 14l5-4.5 5 4.5"],
  q6clock:["M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z","M12 7.5V12l3 2"],
});

/* ───────── ov · 알림 · 창 ───────── */
// 손잡이 없이 가운데 정렬 글자 + 따로 떨어진 취소 (바텀시트와 구별)
TH2["액션 시트"]=K=>K.blk(16,6,128,16,8)+K.rect(0,0,160,100,{f:DIM})
  +K.card(14,24,132,46,12)+K.txt(80,39.5,"사진 찍기",{size:9,fill:C.blue,a:"middle"})
  +K.line(14,47,146,47,{s:C.line,sw:.6})+K.txt(80,62.5,"삭제",{size:9,fill:C.red,a:"middle"})
  +K.card(14,74,132,22,11)+K.txt(80,88.5,"취소",{size:9,fill:C.blue,w:700,a:"middle"});

// 누른 자리(손가락 점)에 붙어 뜨는 메뉴 (드롭다운은 여는 버튼이 있음)
TH2["컨텍스트 메뉴"]=K=>K.blk(10,10,66,38,12)+K.blk(10,54,40,36,12)+K.fing(46,26)
  +K.card(54,32,94,62,12)
  +[["복사","copy",C.ink],["공유","share",C.ink],["삭제","trash",C.red]].map(([s,ic,col],i)=>{const y=32+i*20.6;
    return K.txt(66,y+13.8,s,{size:8.5,fill:col})+K.icon(ic,134,y+10.5,10,col,1.7)+(i<2?K.line(54,y+20.6,148,y+20.6,{s:C.line,sw:.6}):"")}).join("");

// 어두운 막 위에 사진만 크게
TH2["라이트박스"]=K=>K.blk(10,10,44,36,8)+K.blk(58,10,44,36,8)+K.blk(106,10,44,36,8)+K.blk(10,52,44,36,8)+K.blk(106,52,44,36,8)
  +K.rect(0,0,160,100,{f:"rgba(18,20,30,.74)"})
  +K.rect(30,14,100,64,{f:C.sf,r:8,fx:"url(#b2lift)"})+photo(30,14,100,64,8)
  +K.icon("x",146,13,11,"#fff",2)+K.icon("back",15,46,11,"#fff",2)+K.icon("next",145,46,11,"#fff",2)
  +K.txt(80,92,"2 / 5",{size:7.5,fill:"#fff",a:"middle"});

// 화면을 꽉 채우는 창: 닫기 · 제목 · 완료
TH2["풀스크린 모달"]=K=>K.card(5,5,150,104,12)
  +K.icon("x",20,20,11,C.ink,2)+K.txt(80,23.2,"새 글",{size:9.5,w:700,a:"middle"})+K.txt(144,23.2,"완료",{size:9,fill:C.blue,w:700,a:"end"})
  +K.line(5,33,155,33,{s:C.line,sw:.6})
  +tbar(18,44,60,6)+gbar(18,58,122)+gbar(18,67,104)+gbar(18,76,116)+gbar(18,85,70);

TH2["쿠키 배너"]=K=>K.blk(16,8,128,14,7)+K.blk(16,28,90,12,6)
  +K.card(8,48,144,46,14)
  +K.circ(26,64,9,{f:"#E3B878"})+K.circ(23,61,1.6,{f:"#8A5A2B"})+K.circ(29.5,62.5,1.3,{f:"#8A5A2B"})+K.circ(25,68,1.5,{f:"#8A5A2B"})+K.circ(30.5,68,1.1,{f:"#8A5A2B"})
  +K.txt(41,62,"쿠키 사용",{size:8.5,w:700})+gbar(41,67,76,3.5)
  +K.rect(62,75,38,14,{f:C.sf,s:OFF,sw:1.1,r:7})+K.txt(81,84.8,"거부",{size:7.5,fill:C.sub,a:"middle"})
  +K.rect(106,75,38,14,{f:C.blue,r:7})+btxt(125,84.8,"동의",7.5);

// 종 아래로 그동안 온 알림이 모여 있음
TH2["알림 센터"]=K=>K.card(20,5,120,91,14)
  +K.txt(32,22,"알림",{size:10,w:700})+K.icon("bell",124,18,12,C.blue,1.8)+K.circ(128.5,13.5,2.8,{f:C.red})
  +[0,1,2].map(i=>{const y=30+i*21;
    return K.line(20,y,140,y,{s:C.line,sw:.6})+(i<2?K.circ(29,y+10.5,2.2,{f:C.blue}):"")
     +K.circ(42,y+10.5,6.5,{f:["#CFE0FF","#FFE1C7","#D9F2E0"][i]})+tbar(54,y+5,[50,62,44][i],4)+gbar(54,y+12.5,[70,48,60][i],3.5)}).join("");

/* ───────── in · 입력 · 선택 ───────── */
TH2["검색창"]=K=>K.blk(16,10,72,12,6)+K.blk(16,78,128,12,6)
  +K.card(12,33,136,34,17)+K.icon("search",32,50,14,C.ink,2)+K.txt(46,54,"검색",{size:10.5,fill:C.mute});

// 칸 안에 칩이 쌓이고 뒤에 커서
TH2["태그 입력"]=K=>K.blk(16,10,48,10,5)+K.blk(16,82,96,8,4)
  +K.card(10,28,140,44,14)+ring(10,28,140,44,14)
  +[["여행",18],["맛집",68]].map(([s,x])=>K.rect(x,39,46,22,{f:C.blueSoft,r:11})+K.txt(x+10,53.3,s,{size:9,fill:C.blue,w:700})+K.icon("x",x+36,50,7,C.blue,1.8)).join("")
  +caret(121,41,59);

// 직접 치는 칸 + 펼침 화살표 + 걸러진 목록
TH2["콤보박스"]=K=>K.card(16,6,128,24,12)+ring(16,6,128,24,12)
  +K.txt(28,21.8,"서",{size:9,w:700})+caret(38.5,12,24)+K.line(120,11,120,25,{s:C.line,sw:.8})+K.icon("q6down",132,18,10,C.ink,1.9)
  +K.card(16,34,128,60,12)+K.rect(20,38,120,17,{f:C.blueSoft,r:8})
  +K.txt(28,50,"서울",{size:8.5,fill:C.blue,w:700})+K.icon("check",130,46.5,9,C.blue,2.2)
  +K.txt(28,68.5,"서산",{size:8.5})+K.txt(28,86,"서귀포",{size:8.5});

TH2["드롭존"]=K=>K.card(12,8,136,84,14)
  +`<rect x="20" y="16" width="120" height="68" rx="10" style="fill:${C.soft};stroke:${C.blue};stroke-width:1.4" stroke-dasharray="4 3.5"/>`
  +K.icon("q6upload",80,42,24,C.blue,2)+K.txt(80,72,"파일 놓기",{size:9.5,w:700,a:"middle"});

TH2["컬러 피커"]=K=>{const i=K.id(),a="b26h"+i,b="b26v"+i,r="b26r"+i,c="b26k"+i;
  return `<defs><linearGradient id="${a}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#2457FF"/></linearGradient>`
   +`<linearGradient id="${b}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".92"/></linearGradient>`
   +K.grad(r,[[0,"#FF4D4D"],[.17,"#FFD23F"],[.34,"#4CD964"],[.5,"#3CD3E6"],[.67,"#2F6BFF"],[.84,"#B455F0"],[1,"#FF4D7A"]],1,0)
   +`<clipPath id="${c}"><rect x="30" y="13" width="100" height="46" rx="8"/></clipPath></defs>`
   +K.card(22,5,116,90,14)
   +`<g clip-path="url(#${c})">`+K.rect(30,13,100,46,{f:`url(#${a})`})+K.rect(30,13,100,46,{f:`url(#${b})`})+`</g>`
   +K.circ(104,25,5.5,{f:"#3F6FF5",s:"#fff",sw:2})
   +K.rect(30,66,72,8,{f:`url(#${r})`,r:4})+knob(78,70,6)
   +K.rect(110,64,20,24,{f:"#3F6FF5",r:6})
   +K.txt(30,87,"#3F6FF5",{size:7.5,fill:C.sub})};

// 손잡이 두 개, 그 사이만 채움 (슬라이더는 하나)
TH2["범위 슬라이더"]=K=>K.blk(16,82,128,10,5)
  +[[46,"2만"],[112,"8만"]].map(([x,s])=>K.card(x-17,18,34,20,10,C.blue)+tri(`M${x-4} 37.5L${x} 42l4-4.5z`,C.blue)+btxt(x,31.6,s,9)).join("")
  +K.rect(16,55,128,6,{f:"#fff",r:3})+K.rect(46,55,66,6,{f:C.blue,r:3})+knob(46,58,9)+knob(112,58,9);

// 시계 판과 바늘
TH2["타임 피커"]=K=>{const cx=80,cy=60,R=23;
  let o=K.card(32,3,96,94,14)+K.txt(80,19.5,`<tspan style="fill:${C.blue}">9</tspan>:30`,{size:12,w:700,a:"middle"})+K.circ(cx,cy,32,{f:KEY});
  for(let h=1;h<=12;h++){const t=h*Math.PI/6,x=cx+R*Math.sin(t),y=cy-R*Math.cos(t);
    if(h===9)continue;
    o+=h%3===0?K.txt(x,y+2.7,h,{size:7.5,fill:C.sub,a:"middle"}):K.circ(x,y,1,{f:C.mute})}
  return o+K.line(cx,cy,cx-R+7,cy,{s:C.blue,sw:1.6})+K.circ(cx,cy,2.2,{f:C.blue})+K.circ(cx-R,cy,7.5,{f:C.blue})+btxt(cx-R,cy+2.8,"9",8)};

// 고른 것이 칸에 여러 개 + 체크박스 목록
TH2["멀티 셀렉트"]=K=>K.card(16,5,128,26,12)
  +[["빨강",22],["파랑",60]].map(([s,x])=>K.rect(x,10,34,16,{f:C.blueSoft,r:8})+K.txt(x+17,20.8,s,{size:7.5,fill:C.blue,w:700,a:"middle"})).join("")
  +K.icon("q6down",132,18,10,C.ink,1.9)
  +K.card(16,35,128,60,12)
  +[["빨강",1],["파랑",1],["초록",0]].map(([s,on],i)=>{const y=40+i*18;return cbox(27,y+2,on)+K.txt(46,y+11.2,s,{size:8.5,w:on?700:500})}).join("");

// 목록의 한 줄만 그 자리에서 입력 칸으로 바뀜
TH2["인라인 편집"]=K=>K.card(12,10,136,80,14)
  +K.txt(24,31,"제목",{size:7.5,fill:C.sub})+K.txt(48,31.3,"여행 계획",{size:9,w:700})+K.icon("edit",134,28,10,C.mute,1.7)
  +K.line(12,43,148,43,{s:C.line,sw:.6})
  +K.txt(24,65.5,"메모",{size:7.5,fill:C.sub})
  +K.rect(44,53,60,22,{f:C.sf,s:C.blue,sw:1.4,r:7})+K.txt(51,67.3,"장보기",{size:9,w:700})+caret(81,58,70)
  +K.circ(117,64,7.5,{f:C.blue})+K.icon("check",117,64,9,"#fff",2.2)
  +K.circ(135,64,7.5,{f:KEY})+K.icon("x",135,64,8,C.sub,1.9);

// 위에 꾸밈 도구 줄, 아래에 꾸민 글
TH2["리치 텍스트 에디터"]=K=>K.card(12,7,136,86,14)
  +K.rect(21,13,16,16,{f:C.blueSoft,r:5})+K.txt(29,25,"B",{size:10,fill:C.blue,w:800,a:"middle"})
  +`<text x="48" y="25" font-size="10" font-weight="600" font-style="italic" text-anchor="middle" style="fill:${C.ink}">I</text>`
  +K.txt(65,24.5,"U",{size:9.5,w:600,a:"middle"})+K.line(61,27.5,69,27.5,{s:C.ink,sw:1.1})
  +K.line(78,14,78,28,{s:C.line,sw:.8})
  +K.icon("list",91,21,11,C.ink,1.7)+K.icon("link",109,21,11,C.ink,1.7)+K.icon("image",127,21,11,C.ink,1.7)
  +K.line(12,35,148,35,{s:C.line,sw:.6})
  +K.txt(24,52,"굵은 글자",{size:10.5,w:800})+gbar(24,60,112)+gbar(24,69,84)
  +K.circ(26,81,1.6,{f:C.ink})+gbar(33,79,70);

/* ───────── ct · 버튼 ───────── */
// 색을 꽉 채운 주 버튼, 옆의 보조 버튼은 흐리게
TH2["프라이머리 버튼"]=K=>K.blk(16,12,104,12,6)+K.blk(16,78,72,8,4)
  +K.blk(14,35,40,32,16)
  +K.card(60,35,86,32,16,C.blue)+btxt(103,55,"저장",11);

// 옅은 면의 보조 버튼, 옆의 주 버튼은 흐리게
TH2["세컨더리 버튼"]=K=>K.blk(16,12,104,12,6)+K.blk(16,78,72,8,4)
  +K.card(14,35,80,32,16)+K.rect(14,35,80,32,{f:C.blueSoft,r:16})+K.txt(54,55,"취소",{size:11,fill:C.blue,w:700,a:"middle"})
  +K.rect(100,35,46,32,{f:C.blue,r:16,o:.28});

// 속이 비쳐 보이고 테두리만
TH2["고스트 버튼"]=K=>K.blk(10,14,140,72,18)
  +K.rect(28,34,104,32,{s:C.blue,sw:1.7,r:16})+K.txt(80,54,"더 보기",{size:11,fill:C.blue,w:700,a:"middle"});

// 면도 테두리도 밑줄도 없이 글자만
TH2["텍스트 버튼"]=K=>K.card(14,14,132,72,14)+tbar(28,28,64,6)+gbar(28,41,100)+gbar(28,50,76)
  +K.txt(132,74,"건너뛰기",{size:12,fill:C.blue,w:700,a:"end"});

TH2["위험 버튼"]=K=>K.blk(20,12,120,14,7)+K.blk(44,80,72,8,4)
  +K.card(28,34,104,32,16,C.red)+K.icon("trash",67,50,13,"#fff",1.9)+K.txt(78,54,"삭제",{size:11,fill:"#fff",w:700});

// 한 버튼이 둘로 나뉨: 실행 + 펼침 화살표
TH2["스플릿 버튼"]=K=>K.blk(16,10,88,12,6)
  +K.card(20,30,120,32,16,C.blue)+btxt(64,50,"저장",11)
  +K.line(108,36,108,56,{s:"#fff",sw:1,o:.5})+K.icon("q6down",123,46,12,"#fff",2.2)
  +K.card(64,67,76,26,10)+K.txt(74,83.4,"다른 이름으로",{size:8})
  ;

// 버튼 여럿이 한 덩어리 (골라진 칸 없음)
TH2["버튼 그룹"]=K=>K.blk(16,12,80,12,6)+K.blk(16,80,112,8,4)
  +K.card(14,34,132,32,10)+K.line(58,34,58,66,{s:OFF,sw:.9})+K.line(102,34,102,66,{s:OFF,sw:.9})
  +K.txt(36,53.5,"복사",{size:9.5,w:700,a:"middle"})+K.txt(80,53.5,"이동",{size:9.5,w:700,a:"middle"})+K.txt(124,53.5,"삭제",{size:9.5,w:700,a:"middle"});

// 같은 버튼의 꺼짐 · 켜짐
TH2["토글 버튼"]=K=>K.blk(16,12,96,12,6)+K.blk(16,80,72,8,4)
  +K.card(12,34,64,32,16)+K.icon("heart",35,50,13,C.sub,1.8)+K.txt(46,54,"찜",{size:10.5,fill:C.sub,w:700})
  +K.card(84,34,64,32,16)+K.rect(84,34,64,32,{f:C.blueSoft,s:C.blue,sw:1.5,r:16})
  +fillIcon("heart",107,50,13,C.blue)+K.txt(118,54,"찜",{size:10.5,fill:C.blue,w:700});

// 서비스 표시(중립 도형) + 로그인
TH2["소셜 로그인 버튼"]=K=>
   K.card(20,9,120,24,12,C.ink)+K.circ(61,21,5.5,{f:"#fff"})+btxt(87,24.2,"로 로그인",8.5)
  +K.card(20,38,120,24,12)+K.rect(55.5,44.5,11,11,{f:C.red,r:3})+K.txt(87,53.2,"로 로그인",{size:8.5,w:700,a:"middle"})
  +K.card(20,67,120,24,12,"#FFE27A")+tri("M61 73.5l6 10.5h-12z",C.ink)+K.txt(87,82.2,"로 로그인",{size:8.5,w:700,a:"middle"});

// 내려온 화면 구석의 위쪽 화살표 (FAB 는 주요 동작 +)
TH2["맨 위로 버튼"]=K=>K.blk(16,-8,128,20,10)+K.blk(16,18,128,20,10)+K.blk(16,44,80,20,10)+K.blk(16,70,80,20,10)
  +K.card(104,50,40,40,20)+K.icon("q6top",124,70,20,C.blue,2.2);
}
