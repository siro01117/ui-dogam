// B2 그림 추가 28: sc(화면 유형) 44개
// 움직이는 부분은 class="b2x28 b2a-n28…". transform 속성이 있는 요소에는 클래스를 직접 달지 않고 겉 g 로 감싼다.
{
const A=(c,inner,st="")=>`<g class="b2x28 b2a-n28${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n28${name}{animation-name:b2a-n28${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n28${name}{${frames}}`);
css(`.b2x28{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
css(`@media (prefers-reduced-motion:reduce){.b2x28{animation:none}}`);
const n2=K.n2, C=K.C;
const KEY="#F2F4F8", MID="#9DB6FF", DARK="#1F2329", OUT="#C3C9D6";
const PAS=["#CFE0FF","#FFE1C7","#D9F2E0","#F3D9F0"];

Object.assign(K.ICON,{
  q28mail:["M4 6h16v12H4z","M4 7l8 6 8-6"],
  q28shield:["M12 3l7 3v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6z","M9 12l2.2 2.2L15 10.2"],
  q28finger:["M4.5 14.5V12a7.5 7.5 0 0 1 15 0v2.5","M7.6 18.5c-.4-1.2-.6-2.5-.6-4V12a5 5 0 0 1 10 0v3c0 1.2.2 2.4.6 3.5","M10 20.5c-.6-1.7-.9-3.5-.9-5.5v-3a2.9 2.9 0 0 1 5.8 0v3c0 1.9.3 3.7 1 5.3","M12 11.8V15c0 2 .3 3.8 1 5.6"],
  q28bksp:["M9 6h11v12H9l-5-6z","M12 10l4 4","M16 10l-4 4"],
  q28box:["M4 8l8-4 8 4v8l-8 4-8-4z","M4 8l8 4 8-4","M12 12v8"],
  q28truck:["M3 7h11v9H3z","M14 10h4l3 3v3h-7z","M7.5 16.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8z","M17.5 16.2a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8z"],
  q28down:"M6 9l6 6 6-6",
  q28hash:["M9 4L7 20","M17 4l-2 16","M5 9h15","M4 15h15"],
  q28call:"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  q28spk:["M5 10v4h3l5 4V6l-5 4z","M16 9.5a3.5 3.5 0 0 1 0 5","M18.5 7a7 7 0 0 1 0 10"],
  q28flash:"M13 3L5 13.5h6L10 21l8-10.5h-6z",
  q28crop:["M7 3v14h14","M3 7h14v14"],
  q28sun:["M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z","M12 3v2","M12 19v2","M3 12h2","M19 12h2","M5.6 5.6L7 7","M17 17l1.4 1.4","M5.6 18.4L7 17","M17 7l1.4-1.4"],
  q28filt:["M9 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z","M15 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z","M12 10.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z"],
  q28mega:["M4 10v4h3l7 4V6l-7 4z","M17 9.5a3.5 3.5 0 0 1 0 5"],
  q28gift:["M4 10h16v10H4z","M3 7h18v3H3z","M12 7v13","M12 7c-1.5-4-6-3-4 0","M12 7c1.5-4 6-3 4 0"],
  q28cam:["M4 8h3.5l1.5-2h6l1.5 2H20v11H4z","M12 10.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"],
  q28prev:"M19 5v14L9 12zM5 5h2.5v14H5z",
  q28next:"M5 5v14l10-7zM16.5 5H19v14h-2.5z",
  q28turn:["M7 20V11a3 3 0 0 1 3-3h9","M15 4l4 4-4 4"],
});
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=3.5)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const T=K.txt;
// 휴대폰 화면 한 장 (x 42~118, y 5~95)
const phone=f=>K.card(42,5,76,90,12,f);
const back=(y=15,c=C.ink)=>K.icon("back",51.5,y,7,c,1.9);
const head=s=>back()+T(80,17.6,s,{size:8,w:700,a:"middle"});
const btn=(x,y,w,h,s,{f=C.blue,ink="#fff",size=7}={})=>K.rect(x,y,w,h,{f,r:h/2})+T(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
const obtn=(x,y,w,h,s,size=7)=>K.rect(x,y,w,h,{f:"#fff",s:C.blue,sw:1.1,r:h/2})+T(x+w/2,y+h/2+size*.36,s,{size,fill:C.blue,w:700,a:"middle"});
const field=(x,y,w,h,on)=>K.rect(x,y,w,h,{f:on?"#fff":"#F7F8FC",s:on?C.blue:C.line,sw:on?1.2:.9,r:4});
const sep=(y,x1=50,x2=110)=>K.line(x1,y,x2,y,{s:"#EDF0F5",sw:.8});
const full=y=>K.line(42,y,118,y,{s:"#EDF0F5",sw:.8});
const clip=(x,y,w,h,r,inner)=>{const c="b228k"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const dashL=(x1,y1,x2,y2,s=OUT)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${s};stroke-width:.9" stroke-dasharray="2.2 2"/>`;
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b228p"+i,c="b228c"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const toggle=(x,y,on)=>K.rect(x,y-4,14,8,{f:on?C.blue:"#D5DAE3",r:4})+K.circ(on?x+10:x+4,y,3,{f:"#fff"});
const ava=(cx,cy,r,f,ink)=>K.circ(cx,cy,r,{f})+K.icon("user",cx,cy,r*1.2,ink,1.6);

/* ───────── 인증 · 잠금 ───────── */
TH2["이메일 인증"]=K=>phone()+back(14)
  +K.circ(80,32,13,{f:C.blueSoft})+K.icon("q28mail",80,32,15,C.blue,1.8)
  +K.circ(91,22,5.5,{f:C.green,s:"#fff",sw:1.2})+K.icon("check",91,22,6.5,"#fff",2.2)
  +T(80,56,"메일을 보냈어요",{size:8,w:700,a:"middle"})
  +gbar(60,60.5,40,3)+gbar(66,66,28,3)
  +btn(50,70.5,60,11,"메일 앱 열기")
  +T(80,91,"다시 보내기",{size:7,fill:C.blue,w:700,a:"middle"});

TH2["2단계 인증"]=K=>phone()+back()
  +K.line(75,15,85,15,{s:C.blue,sw:1.4})
  +K.circ(70,15,4.6,{f:C.blue})+K.icon("check",70,15,5.5,"#fff",2.2)
  +K.circ(90,15,4.6,{f:"#fff",s:C.blue,sw:1.4})+T(90,17.6,"2",{size:7,fill:C.blue,w:800,a:"middle"})
  +K.circ(80,33,8.5,{f:C.blueSoft})+K.icon("q28shield",80,33,11,C.blue,1.7)
  +T(80,51.5,"인증 번호 6자리",{size:7.5,w:700,a:"middle"})
  +[0,1,2,3,4,5].map(i=>{const x=50+i*10.32;
    return K.rect(x,56,8.4,11,{f:i<4?"#F7F8FC":"#fff",s:i===4?C.blue:C.line,sw:i===4?1.3:.9,r:2.5})
      +(i<4?T(x+4.2,64.2,"3907"[i],{size:7.5,w:700,a:"middle"}):"")
      +(i===4?K.line(x+4.2,58.8,x+4.2,64.2,{s:C.blue,sw:1.1}):"")}).join("")
  +T(80,76.5,"02:41",{size:7,fill:C.red,a:"middle"})
  +btn(50,80,60,11,"확인");

TH2["생체 인증"]=K=>phone()
  +T(80,20,"잠금 해제",{size:8,w:700,a:"middle"})
  +K.circ(80,47,17,{f:C.blueSoft})
  +K.path("M63 47a17 17 0 0 1 17-17",{s:C.blue,sw:1.6})+K.path("M97 47a17 17 0 0 1-17 17",{s:C.blue,sw:1.6})
  +K.icon("q28finger",80,47,22,C.blue,1.7)
  +T(80,76,"지문을 대 주세요",{size:7,fill:C.sub,a:"middle"})
  +T(80,89,"비밀번호 쓰기",{size:7,fill:C.blue,w:700,a:"middle"});

TH2["앱 잠금"]=K=>phone()
  +K.icon("lock",80,14.5,9,C.blue,1.8)
  +T(80,27.5,"암호 입력",{size:7,fill:C.sub,a:"middle"})
  +[0,1,2,3].map(i=>K.circ(68+i*8,34,2.4,i<2?{f:C.blue}:{f:"#fff",s:OUT,sw:1})).join("")
  +[0,1,2,3,4,5,6,7,8,9,10,11].map(i=>{const x=62+(i%3)*18,y=45.5+Math.floor(i/3)*12;
    if(i===9)return "";
    if(i===11)return K.icon("q28bksp",x,y,8,C.sub,1.6);
    return K.circ(x,y,5.3,{f:KEY})+T(x,y+2.7,i===10?"0":String(i+1),{size:7.5,w:700,a:"middle"})}).join("");

/* ───────── 주문 · 결제 ───────── */
TH2["주문 완료"]=K=>phone()
  +K.circ(80,22,9.5,{f:C.blue})+K.icon("check",80,22,11,"#fff",2.4)
  +T(80,43.5,"주문 완료",{size:8.5,w:700,a:"middle"})
  +K.rect(50,49,60,24,{f:KEY,r:6})+K.rect(54,53,16,16,{f:"#CFE0FF",r:4})+K.icon("q28box",62,61,9,C.blue,1.5)
  +T(74,59.5,"내일 도착",{size:7,fill:C.blue,w:700})+gbar(74,63.5,28,3)
  +btn(50,78,60,12,"주문 내역 보기");

TH2["주문 내역"]=K=>phone()+head("주문 내역")
  +[0,1].map(i=>{const y=24+i*34;
    return T(50,y+5.5,["11.18","11.02"][i],{size:7,fill:C.sub,w:700})
      +K.rect(50,y+8.5,60,22,{f:"#fff",s:C.line,sw:.9,r:5})
      +K.rect(53.5,y+12,15,15,{f:PAS[i],r:4})+tbar(72,y+13,[26,20][i],3.5)
      +K.rect(72,y+19,i?20:30,8.6,{f:i?KEY:C.blueSoft,r:4.3})
      +T(72+(i?10:15),y+25.8,i?"완료":"배송 중",{size:7,fill:i?C.sub:C.blue,w:700,a:"middle"})
      +K.icon("next",105,y+19.5,6.5,C.mute,1.8)}).join("");

TH2["배송 조회"]=K=>phone()+head("배송 조회")
  +T(50,32,"내일 도착",{size:8.5,fill:C.blue,w:800})+K.icon("q28truck",103,28.5,11,C.blue,1.6)
  +K.line(55,42,105,42,{s:"#E1E5EC",sw:2})+K.line(55,42,88.3,42,{s:C.blue,sw:2})
  +K.circ(55,42,2.6,{f:C.blue})+K.circ(71.7,42,2.6,{f:C.blue})
  +K.circ(88.3,42,4,{f:C.blue})+K.circ(88.3,42,1.6,{f:"#fff"})
  +K.circ(105,42,2.6,{f:"#fff",s:"#C3C9D6",sw:1.2})
  +["접수","이동","배송","도착"].map((s,i)=>T(55+i*16.67,53.5,s,{size:7,fill:i===2?C.blue:C.mute,w:i===2?700:500,a:"middle"})).join("")
  +sep(59)
  +K.line(53,67,53,87,{s:C.line,sw:1})
  +[0,1,2].map(i=>{const y=67+i*10;return K.circ(53,y,2,{f:i?"#C3C9D6":C.blue})+(i?gbar(59,y-1.75,[0,32,38][i]):tbar(59,y-1.75,40,3.5))}).join("");

TH2["결제 수단 관리"]=K=>phone()+head("결제 수단")
  +K.rect(50,24,60,33,{f:C.blue,r:6})+K.rect(56,31,9,7,{f:"#FFD98A",r:1.5})
  +T(56,51,"•••• 1234",{size:7.5,fill:"#fff",w:700})
  +K.rect(89,28,16,8.6,{f:"rgba(255,255,255,.26)",r:4.3})+T(97,34.7,"기본",{size:7,fill:"#fff",w:700,a:"middle"})
  +K.rect(50,62,13,9,{f:"#2A2F3A",r:2})+K.rect(50,64.3,13,1.8,{f:"#6B7280"})
  +T(67,69,"•••• 5678",{size:7})+K.icon("more",107,66.5,7,C.mute,2)
  +sep(75.5)
  +`<rect x="50" y="79.5" width="60" height="12" rx="6" style="fill:#fff;stroke:${OUT};stroke-width:1" stroke-dasharray="2.6 2.2"/>`
  +K.icon("plus",63,85.5,6,C.sub,1.8)+T(69,88,"카드 추가",{size:7,fill:C.sub,w:700});

TH2["구독 관리"]=K=>phone()+head("구독 관리")
  +K.rect(50,24,60,30,{f:C.blueSoft,r:6})
  +T(55,36,"프리미엄",{size:8,w:800})+T(55,47.5,"월 9,900원",{size:7,fill:C.sub})
  +K.circ(101,33,5,{f:C.blue})+K.icon("check",101,33,6,"#fff",2.2)
  +T(50,64.5,"다음 결제",{size:7,fill:C.sub})+T(110,64.5,"12.20",{size:7,w:700,a:"end"})
  +sep(69)
  +obtn(50,71.5,60,10.5,"요금제 변경")
  +T(80,91.5,"해지하기",{size:7,fill:C.mute,a:"middle"})+K.line(66.5,93,93.5,93,{s:C.mute,sw:.6});

TH2["쿠폰함"]=K=>phone()+head("쿠폰함")
  +[["3,000원",C.blueSoft,C.blue,"사용"],["10%","#FFF1DC","#C77B1A","사용"],["무료배송",KEY,C.mute,"만료"]].map(([s,f,ac,b],i)=>{const y=24+i*23;
    return K.rect(50,y,60,20,{f,r:5})+K.circ(90.5,y,2.6,{f:"#fff"})+K.circ(90.5,y+20,2.6,{f:"#fff"})
      +dashL(90.5,y+4.5,90.5,y+15.5,i===2?OUT:ac)
      +T(55,y+10,s,{size:8,fill:ac,w:800})+K.rect(55,y+13.5,i===1?20:26,2.8,{f:ac,r:1.4,o:.3})
      +T(100.5,y+12.5,b,{size:7,fill:ac,w:700,a:"middle"})}).join("");

TH2["위시리스트"]=K=>phone()+head("위시리스트")
  +[0,1,2,3].map(i=>{const x=50+(i%2)*31.5,y=24+Math.floor(i/2)*35;
    return K.rect(x,y,28.5,21,{f:PAS[i],r:5})
      +K.circ(x+22.5,y+6,4.6,{f:"#fff"})+fillIcon("heart",x+22.5,y+6.2,6.6,C.red)
      +tbar(x,y+24,[20,16,18,22][i],3.5)+gbar(x,y+29.5,[13,15,11,14][i],3)}).join("");

TH2["상품 목록"]=K=>phone()+back()+T(80,17.6,"운동화",{size:8,w:700,a:"middle"})+K.icon("search",106.5,15,7,C.ink,1.7)
  +K.rect(50,23.5,29,9.6,{f:"#fff",s:C.blue,sw:1,r:4.8})+K.icon("filter",57,28.3,6,C.blue,1.6)+T(62,30.8,"필터",{size:7,fill:C.blue,w:700})
  +T(102,30.8,"인기순",{size:7,fill:C.sub,a:"end"})+K.icon("q28down",106.5,28.3,6,C.sub,1.8)
  +[0,1,2,3].map(i=>{const x=50+(i%2)*31.5,y=37+Math.floor(i/2)*28;
    return K.rect(x,y,28.5,17,{f:PAS[i],r:5})+K.icon("heart",x+23.5,y+4.5,5.5,"#fff",1.6)
      +gbar(x,y+19.5,[20,16,18,22][i],3)+tbar(x,y+24.5,[13,15,12,14][i],3.2)}).join("");

TH2["상품 상세"]=K=>phone()
  +clip(42,5,76,90,12,K.rect(42,5,76,42,{f:"#DCE6FF"})
    +K.path("M72 22v-3a8 8 0 0 1 16 0v3",{s:"#6A86E8",sw:2})+K.rect(66,21,28,20,{f:MID,r:4}))
  +K.rect(42.25,5.25,75.5,89.5,{s:C.hair,sw:.5,r:12})
  +K.circ(52,14,5,{f:"rgba(255,255,255,.9)"})+K.icon("back",51.5,14,6,C.ink,1.9)
  +K.circ(108,14,5,{f:"rgba(255,255,255,.9)"})+K.icon("share",108,13.8,6,C.ink,1.7)
  +K.circ(76,43,1.2,{f:C.blue})+K.circ(80,43,1.2,{f:"#fff"})+K.circ(84,43,1.2,{f:"#fff"})
  +tbar(50,52,34,4.2)
  +T(50,66.5,"32,000원",{size:8.5,w:800})
  +fillIcon("star",53,72.5,6.5,C.amber)+gbar(58.5,71,16,3)
  +full(79.5)
  +K.rect(50,82.5,11,10,{f:"#fff",s:C.line,sw:.9,r:5})+K.icon("heart",55.5,87.6,6.5,C.sub,1.7)
  +btn(64,82.5,46,10,"구매하기");

TH2["카테고리 화면"]=K=>phone()
  +clip(42,5,76,90,12,K.rect(42,22,23,73,{f:KEY})+K.rect(42,35,23,13,{f:"#fff"})+K.rect(42,35,2.2,13,{f:C.blue}))
  +T(50,17.6,"카테고리",{size:8,w:700})+K.icon("search",106.5,15,7,C.ink,1.7)
  +full(22)
  +["의류","신발","가방","뷰티","리빙"].map((s,i)=>T(54,31+i*13,s,{size:7,fill:i===1?C.blue:C.sub,w:i===1?700:500,a:"middle"})).join("")
  +T(71,31.5,"신발",{size:7,w:700})
  +[0,1,2,3,4,5,6,7,8].map(i=>{const x=76.5+(i%3)*14.2,y=42.5+Math.floor(i/3)*18;
    return K.circ(x,y,5.3,{f:[...PAS,"#FFF1B8","#D7E3EA"][i%6]})+gbar(x-5,y+7.8,10,2.6)}).join("");

TH2["탐색 화면"]=K=>phone()
  +K.rect(50,10,60,11,{f:KEY,r:5.5})+K.icon("search",57,15.5,6.5,C.mute,1.8)+gbar(63,13.8,22,3.5)
  +photo(50,25,39.6,36,4)
  +K.circ(69.8,43,6,{f:"rgba(255,255,255,.85)"})+K.path("M67.8 39.8l5.4 3.2-5.4 3.2z",{f:C.ink,s:C.ink,sw:.6})
  +K.rect(91.6,25,18.4,17,{f:"#FFE1C7",r:4})+K.rect(91.6,44,18.4,17,{f:"#D9F2E0",r:4})
  +K.rect(50,63,18.4,15.5,{f:"#F3D9F0",r:4})+K.rect(70.8,63,18.4,15.5,{f:"#FFF1B8",r:4})+photo(91.6,63,18.4,15.5,4,true)
  +full(81.5)
  +K.icon("home",56,88.5,8,C.mute,1.7)+K.icon("search",72,88.5,8.5,C.blue,2.3)+K.icon("heart",88,88.5,8,C.mute,1.7)+K.icon("user",104,88.5,8,C.mute,1.7);

/* ───────── 글 · 소통 ───────── */
TH2["글쓰기 화면"]=K=>phone()
  +K.icon("x",52.5,15,6.5,C.ink,1.8)+T(74,17.6,"글쓰기",{size:8,w:700,a:"middle"})+btn(91,10,19,10,"등록")
  +full(23.5)
  +T(50,34,"제목",{size:8,fill:C.mute,w:700})
  +sep(39)
  +tbar(50,45,52,3.5)+tbar(50,52,38,3.5)+K.line(90.5,50.5,90.5,57,{s:C.blue,sw:1.2})
  +K.rect(50,61,17,14,{f:"#CFE0FF",r:3.5})+K.circ(66.5,61.5,3.2,{f:"#2A2F3A"})+K.icon("x",66.5,61.5,3.4,"#fff",1.6)
  +full(80)
  +K.icon("image",54.5,87.5,8,C.sub,1.6)+K.icon("link",68,87.5,8,C.sub,1.6)+K.icon("q28hash",81.5,87.5,8,C.sub,1.6);

TH2["댓글 화면"]=K=>phone()+head("댓글 12")
  +full(23.5)
  +K.circ(55,32,4.5,{f:"#CFE0FF"})+tbar(63,28.5,18,3.2)+gbar(63,34,38,3)+K.icon("heart",106.5,31.5,5.5,C.mute,1.6)
  +T(63,45,"답글",{size:7,fill:C.sub,w:700})
  +K.path("M55 39v11q0 4 4 4h2.5",{s:C.line,sw:1})
  +K.circ(67,54,3.8,{f:"#FFE1C7"})+tbar(74,50.8,14,3)+gbar(74,56,30,3)
  +K.circ(55,68,4.5,{f:"#D9F2E0"})+tbar(63,64.5,22,3.2)+gbar(63,70,32,3)+fillIcon("heart",106.5,67.5,5.8,C.red)
  +full(78)
  +K.circ(55,86.3,4,{f:C.blueSoft})+K.rect(62,81.8,33,9,{f:KEY,r:4.5})+gbar(66,84.6,16,3)
  +T(110,88.8,"게시",{size:7,fill:C.blue,w:700,a:"end"});

TH2["팔로워 목록"]=K=>phone()+back(14)+tbar(60,12,24,4)
  +T(65,29,"팔로워",{size:7.5,w:700,a:"middle"})+T(95,29,"팔로잉",{size:7.5,fill:C.mute,a:"middle"})
  +full(33)+K.line(52,33,78,33,{s:C.ink,sw:1.4})
  +[0,1,2,3].map(i=>{const y=42.5+i*13.3,f=i%2===0;
    return K.circ(55.5,y,4.8,{f:PAS[i]})+tbar(63,y-3.3,[16,13,17,12][i],3.2)+gbar(63,y+1.2,[12,16,10,14][i],2.8)
      +K.rect(84,y-4.5,26,9,{f:f?C.blue:KEY,r:4.5})+T(97,y+2.5,f?"팔로우":"팔로잉",{size:7,fill:f?"#fff":C.ink,w:700,a:"middle"})}).join("");

TH2["메시지함"]=K=>phone()
  +T(50,19,"메시지",{size:8.5,w:800})+K.icon("edit",106,15.5,7.5,C.ink,1.7)
  +[0,1,2,3].map(i=>{const y=32.5+i*15.3,n=i<2;
    return K.circ(56,y,5.5,{f:PAS[i]})+(i%2===0?K.circ(60.2,y+4,1.9,{f:C.green,s:"#fff",sw:.8}):"")
      +(n?tbar(65,y-4,[20,16][i],3.5):K.rect(65,y-4,[0,0,22,18][i],3.5,{f:"#9AA1AE",r:1.75}))
      +gbar(65,y+1.5,[30,26,32,24][i],3)
      +(n?K.circ(105.5,y,4.2,{f:C.blue})+T(105.5,y+2.5,["2","5"][i],{size:7,fill:"#fff",w:700,a:"middle"}):gbar(101,y-3.5,9,2.6))
      +(i<3?sep(y+7.65,65,110):"")}).join("");

TH2["통화 화면"]=K=>phone(DARK)
  +K.circ(80,30,12.5,{f:"#3A4050"})+K.icon("user",80,30,13,"#C9D6FF",1.6)
  +T(80,54,"김하늘",{size:8.5,fill:"#fff",w:700,a:"middle"})
  +T(80,63.5,"02:41",{size:7,fill:"#9AA1AE",a:"middle"})
  +K.circ(58,81,6.5,{f:"rgba(255,255,255,.14)"})+K.icon("mic",58,81,7.5,"#fff",1.6)
  +K.circ(102,81,6.5,{f:"rgba(255,255,255,.14)"})+K.icon("q28spk",102,81,7.5,"#fff",1.6)
  +K.circ(80,81,8.5,{f:C.red})+`<g transform="rotate(135 80 81)">`+fillIcon("q28call",80,81,9.5,"#fff")+`</g>`;

/* ───────── 카메라 · 사진 ───────── */
TH2["카메라 화면"]=K=>phone(DARK)
  +K.icon("q28flash",52.5,12.5,7,"#fff",1.5)+K.icon("settings",107.5,12.5,7,"#fff",1.4)
  +photo(42,19,76,49,0)
  +[67.3,92.7].map(x=>K.line(x,19,x,68,{s:"#fff",sw:.5,o:.45})).join("")+[35.3,51.7].map(y=>K.line(42,y,118,y,{s:"#fff",sw:.5,o:.45})).join("")
  +K.rect(61,40,13,13,{s:C.amber,sw:1,r:1.5})
  +T(62,75.5,"영상",{size:7,fill:"#9AA1AE",a:"middle"})+T(80,75.5,"사진",{size:7,fill:C.amber,w:700,a:"middle"})+T(98,75.5,"인물",{size:7,fill:"#9AA1AE",a:"middle"})
  +K.circ(80,85.5,6.2,{s:"#fff",sw:1.3})+K.circ(80,85.5,4.6,{f:"#fff"})
  +K.rect(51,81,9,9,{f:"#CFE0FF",r:2.5})+K.icon("refresh",104.5,85.5,8,"#fff",1.6);

TH2["사진 편집"]=K=>phone(DARK)
  +T(50,17.5,"취소",{size:7,fill:"#C8CDD6"})+T(110,17.5,"완료",{size:7,fill:C.amber,w:700,a:"end"})
  +photo(50,23,60,38,2)
  +K.rect(50,23,60,38,{f:"rgba(20,22,28,.45)",r:2})+photo(56,27,48,30,0)
  +K.rect(56,27,48,30,{s:"#fff",sw:.8})
  +[72,88].map(x=>K.line(x,27,x,57,{s:"#fff",sw:.4,o:.6})).join("")+[37,47].map(y=>K.line(56,y,104,y,{s:"#fff",sw:.4,o:.6})).join("")
  +K.path("M56 32V27h5M99 27h5v5M104 52v5h-5M61 57h-5v-5",{s:"#fff",sw:2.2})
  +[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i=>K.line(52+i*4,i%7===0?66:67.2,52+i*4,i%7===0?72:70.8,{s:"#6B7280",sw:.8})).join("")
  +K.line(92,64.5,92,73.5,{s:C.blue,sw:1.8})
  +K.circ(60,85,6.5,{f:"rgba(255,255,255,.14)"})+K.icon("q28crop",60,85,7.5,"#fff",1.7)
  +K.icon("q28sun",80,85,8,"#9AA1AE",1.5)+K.icon("q28filt",100,85,8,"#9AA1AE",1.5);

{
const fnd=(x,y)=>K.rect(x,y,10,10,{f:DARK,r:1.6})+K.rect(x+1.9,y+1.9,6.2,6.2,{f:"#fff",r:.8})+K.rect(x+3.4,y+3.4,3.2,3.2,{f:DARK,r:.5});
const mods=[[4,0],[5,1],[4,2],[6,0],[0,4],[1,5],[2,4],[4,4],[5,5],[6,4],[4,6],[8,4],[9,5],[7,6],[9,7],[5,8],[4,9],[6,9],[8,8],[9,9],[7,3],[3,6],[8,6],[6,7]];
TH2["QR 스캔 화면"]=K=>phone("#2A2F3A")
  +K.icon("x",52.5,14,6.5,"#fff",1.8)+K.icon("q28flash",107.5,14,7,"#fff",1.5)
  +K.rect(59,27,42,42,{f:"#fff",r:4})
  +fnd(63,31)+fnd(87,31)+fnd(63,55)
  +mods.map(([c,r])=>K.rect(63+c*3.4,31+r*3.4,3.4,3.4,{f:DARK})).join("")
  +K.path("M54 33V26q0-4 4-4h7M95 22h7q4 0 4 4v7M106 63v7q0 4-4 4h-7M65 74h-7q-4 0-4-4v-7",{s:C.blue,sw:2.4})
  +A("scan",K.rect(56,44,48,7,{f:C.blue,r:1,o:.16})+K.rect(56,47,48,2,{f:C.blue,r:1}))
  +T(80,88,"QR을 비춰 주세요",{size:7,fill:"#fff",a:"middle"});
kf("scan",2.8,"0%,100%{transform:none}25%{transform:translateY(-17px)}75%{transform:translateY(17px)}","animation-timing-function:ease-in-out");
}

/* ───────── 예약 · 영수증 ───────── */
TH2["예약 화면"]=K=>phone()+head("예약")
  +T(50,30,"11월",{size:7,fill:C.sub,w:700})
  +[0,1,2,3,4].map(i=>{const x=50+i*12.4,s=i===2;
    return K.rect(x,33,10.4,18.5,{f:s?C.blue:KEY,r:5})
      +T(x+5.2,40.5,"월화수목금"[i],{size:7,fill:s?"#fff":C.sub,a:"middle"})
      +T(x+5.2,48.8,String(18+i),{size:7,fill:s?"#fff":C.ink,w:700,a:"middle"})}).join("")
  +["5:00","5:30","6:00","6:30","7:00","7:30"].map((s,i)=>{const x=50+(i%3)*20.7,y=56+Math.floor(i/3)*11,sel=i===2,off=i===1;
    return K.rect(x,y,18.6,9,{f:sel?C.blueSoft:off?KEY:"#fff",s:sel?C.blue:off?"none":C.line,sw:sel?1.2:.9,r:4.5})
      +T(x+9.3,y+7,s,{size:7,fill:sel?C.blue:off?OUT:C.ink,w:sel?700:500,a:"middle"})}).join("")
  +btn(50,80.5,60,11.5,"예약하기");

TH2["좌석 선택"]=K=>phone()+head("좌석 선택")
  +K.path("M54 30Q80 23 106 30",{s:MID,sw:2.2})
  +[0,1,2,3,4].map(r=>[0,1,2,3,4,5].map(c=>{const x=52+c*9.2+(c>2?2.6:0),y=36+r*8.4;
    const sold=[1,4,8,9,14,16,24,25,29].includes(r*6+c),sel=r===3&&(c===3||c===4);
    return K.rect(x,y,7.4,6.4,sel?{f:C.blue,r:2}:sold?{f:"#D3D8E3",r:2}:{f:"#fff",s:OUT,sw:.9,r:2})}).join("")).join("")
  +T(50,89.5,"2석",{size:8,w:800})+btn(68,81,42,11,"선택 완료");

TH2["영수증"]=K=>phone(KEY)
  +`<path d="M48 12H112V84${"l-2 3l-2-3".repeat(16)}Z" style="fill:#fff;stroke:${C.line};stroke-width:.8" filter="url(#b2lift)"/>`
  +T(80,23.5,"영수증",{size:8,w:700,a:"middle"})
  +dashL(53,28.5,107,28.5)
  +["12,000","4,500","7,000"].map((s,i)=>gbar(53,34.5+i*9,[24,18,22][i],3)+T(107,38+i*9,s,{size:7,a:"end"})).join("")
  +dashL(53,61,107,61)
  +T(53,71,"합계",{size:7.5,w:700})+T(107,71,"23,500원",{size:8,fill:C.blue,w:800,a:"end"})
  +[0,2.2,3.6,6.4,8,10.6,13,14.4,17,19.6,21,23.8,26,27.4,30,32.6,34].map((d,i)=>K.rect(63+d,75,i%3===0?1.5:.8,6,{f:"#3A4050"})).join("");

/* ───────── 안내 · 혜택 ───────── */
TH2["고객센터"]=K=>phone()+head("고객센터")
  +K.rect(50,24,60,11,{f:KEY,r:5.5})+K.icon("search",57,29.5,6.5,C.mute,1.8)+gbar(63,27.8,26,3.5)
  +[0,1,2].map(i=>{const y=44.5+i*11.5;
    return T(50,y+2.8,"Q",{size:8,fill:C.blue,w:800})+(i?gbar(59,y-1.7,[0,30,34][i]):tbar(59,y-1.7,38,3.5))
      +K.icon("q28down",106.5,y,6,C.mute,1.8)+sep(y+5.75)}).join("")
  +K.rect(50,79,60,12,{f:C.blue,r:6})+K.icon("chat",64,85.2,7,"#fff",1.6)+T(85,87.7,"1:1 문의",{size:7.5,fill:"#fff",w:700,a:"middle"});

TH2["공지사항"]=K=>phone()+head("공지사항")
  +[0,1,2,3].map(i=>{const y=23+i*17.6;
    return (i===0?K.rect(50,y,17,8.8,{f:C.blue,r:4.4})+T(58.5,y+6.8,"공지",{size:7,fill:"#fff",w:700,a:"middle"})+tbar(70,y+2.6,34,3.6)
        :K.rect(50,y+2.6,[0,40,34,44][i],3.6,{f:i===1?"#3A4050":"#9AA1AE",r:1.8})+(i===1?T(93,y+6.9,"N",{size:7,fill:C.red,w:800}):""))
      +T(50,y+15.6,["11.20","11.14","11.02","10.27"][i],{size:7,fill:C.mute})
      +(i<3?sep(y+18.2):"")}).join("");

TH2["이벤트 화면"]=K=>{const g1="b228g"+K.id(),g2="b228g"+K.id();
  return phone()+head("이벤트")
  +`<defs>${K.grad(g1,[[0,"#4C7DFF"],[1,"#9B7BFF"]],1,1)}${K.grad(g2,[[0,"#FFB36B"],[1,"#F27FA5"]],1,1)}</defs>`
  +K.rect(50,23.5,27,9,{f:"#2A2F3A",r:4.5})+T(63.5,30.1,"진행 중",{size:7,fill:"#fff",w:700,a:"middle"})+T(88,30.1,"종료",{size:7,fill:C.mute,a:"middle"})
  +K.rect(50,36,60,25.5,{f:`url(#${g1})`,r:6})+T(55,47,"50% 할인",{size:8,fill:"#fff",w:800})
  +K.rect(55,50.5,18,8.4,{f:"rgba(255,255,255,.28)",r:4.2})+T(64,57,"D-3",{size:7,fill:"#fff",w:700,a:"middle"})
  +K.icon("q28gift",100.5,51,12,"#fff",1.5)
  +K.rect(50,64.5,60,25.5,{f:`url(#${g2})`,r:6})+T(55,75.5,"친구 초대",{size:8,fill:"#fff",w:800})
  +K.rect(55,79,21,8.4,{f:"rgba(255,255,255,.28)",r:4.2})+T(65.5,85.5,"D-12",{size:7,fill:"#fff",w:700,a:"middle"})
  +fillIcon("star",100.5,79.5,12,"#fff")};

TH2["포인트 · 리워드"]=K=>phone()+head("포인트")
  +K.rect(50,24,60,27,{f:C.blue,r:6})
  +T(55,34,"내 포인트",{size:7,fill:"#fff"})+T(55,46.5,"1,200",{size:11,fill:"#fff",w:800})
  +K.circ(99.5,37.5,6.8,{f:"#FFD98A"})+T(99.5,40.5,"P",{size:8.5,fill:"#A66A00",w:800,a:"middle"})
  +[0,1,2].map(i=>{const y=61+i*12;
    return T(50,y+2.5,["적립","사용","적립"][i],{size:7,fill:C.sub})+gbar(67,y-1.5,[18,22,14][i],3)
      +T(110,y+2.6,["+500","−300","+120"][i],{size:7.5,fill:i===1?C.ink:C.blue,w:700,a:"end"})+(i<2?sep(y+6):"")}).join("");

TH2["출석 체크"]=K=>phone()+head("출석 체크")
  +T(80,31,"5일째 출석 중",{size:7.5,fill:C.blue,w:700,a:"middle"})
  +[0,1,2,3,4,5,6,7,8,9].map(i=>{const x=55+(i%5)*12.5,y=42+Math.floor(i/5)*13;
    if(i<5)return K.circ(x,y,4.8,{f:C.blue})+K.icon("check",x,y,6,"#fff",2.2);
    if(i===5)return `<circle cx="${x}" cy="${y}" r="4.8" style="fill:${C.blueSoft};stroke:${C.blue};stroke-width:1.2" stroke-dasharray="2.2 1.8"/>`+T(x,y+2.5,"6",{size:7,fill:C.blue,w:800,a:"middle"});
    if(i===9)return K.circ(x,y,4.8,{f:"#FFF1DC"})+K.icon("q28gift",x,y,6.5,"#C77B1A",1.5);
    return K.circ(x,y,4.8,{f:KEY})+T(x,y+2.5,String(i+1),{size:7,fill:C.mute,a:"middle"})}).join("")
  +btn(50,67,60,12,"출석하기")
  +T(80,89.5,"10일 채우면 선물",{size:7,fill:C.sub,a:"middle"});

TH2["새 기능 안내"]=K=>phone()
  +fillIcon("sparkle",80,17,15,C.blue)+fillIcon("sparkle",91,11.5,6,MID)
  +T(80,35,"새로워졌어요",{size:8.5,w:800,a:"middle"})
  +[["search",C.blue],["bell","#C77B1A"],["image",C.green]].map(([ic,c],i)=>{const y=47+i*12;
    return K.rect(50,y-5,10,10,{f:["#DCE6FF","#FFE9D1","#DDF3E7"][i],r:3})+K.icon(ic,55,y,6.5,c,1.6)
      +tbar(64,y-3.6,[30,24,34][i],3.5)+gbar(64,y+1.4,[40,36,28][i],3)}).join("")
  +btn(50,80.5,60,11,"확인");

/* ───────── 상태 ───────── */
TH2["로딩 화면"]=K=>phone()
  +K.circ(80,44,11,{s:"#E7EAF2",sw:3})
  +A("spin",`<circle cx="80" cy="44" r="11" style="fill:none;stroke:none"/>`+K.path("M80 33a11 11 0 0 1 11 11",{s:C.blue,sw:3}))
  +T(80,70,"불러오는 중",{size:7.5,fill:C.sub,a:"middle"});
kf("spin",2.4,"0%{transform:rotate(0deg)}100%{transform:rotate(720deg)}","animation-timing-function:linear");

TH2["오프라인 화면"]=K=>phone()
  +K.circ(80,31,14,{f:KEY})+K.icon("wifiOff",80,31,17,C.sub,1.7)
  +T(80,57.5,"연결이 끊겼어요",{size:8,w:700,a:"middle"})
  +gbar(62,62.5,36,3)+gbar(68,68,24,3)
  +obtn(56,76.5,48,12,"다시 시도");

TH2["접근 거부"]=K=>phone()
  +K.circ(80,26,12.5,{f:"#FDE8E8"})+K.icon("lock",80,25.5,14,C.red,1.8)
  +T(80,52.5,"403",{size:13,w:800,a:"middle"})
  +T(80,64.5,"볼 권한이 없어요",{size:7.5,w:700,a:"middle"})
  +gbar(64,69,32,3)
  +btn(54,77.5,52,12,"돌아가기");

/* ───────── 계정 · 설정 ───────── */
TH2["계정 전환"]=K=>phone()+head("계정 전환")
  +K.rect(46,24,68,18,{f:C.blueSoft,r:6})
  +ava(56,33,5.5,MID,"#fff")+tbar(65,29,22,3.5)+gbar(65,34.5,30,3)
  +K.circ(106,33,4.2,{f:C.blue})+K.icon("check",106,33,5,"#fff",2.2)
  +ava(56,51.5,5.5,"#FFE1C7","#C77B1A")+tbar(65,47.5,18,3.5)+gbar(65,53,34,3)
  +ava(56,66.5,5.5,"#D9F2E0",C.green)+tbar(65,62.5,24,3.5)+gbar(65,68,26,3)
  +sep(76)
  +`<circle cx="56" cy="85" r="5.3" style="fill:#fff;stroke:${OUT};stroke-width:1" stroke-dasharray="2.2 1.8"/>`+K.icon("plus",56,85,5.5,C.sub,1.8)
  +T(65,87.5,"계정 추가",{size:7,fill:C.sub,w:700});

TH2["알림 설정"]=K=>phone()+head("알림 설정")
  +["전체 알림","댓글","좋아요","혜택 · 광고"].map((s,i)=>{const y=32+i*15;
    return (i?"":K.icon("bell",54,y,7.5,C.blue,1.6))+T(i?50:61,y+2.5,s,{size:7,w:i?500:700})
      +toggle(96,y,i<3)+(i<3?sep(y+7.5):"")}).join("");

TH2["차단 목록"]=K=>phone()+head("차단 목록")
  +[0,1,2,3].map(i=>{const y=33+i*15.3;
    return ava(56,y,5.5,"#E1E5EC","#9AA1AE")+K.circ(60.5,y+4,3,{f:C.red,s:"#fff",sw:.8})+K.line(59,y+4,62,y+4,{s:"#fff",sw:1.2})
      +K.rect(67,y-3.5,[18,22,15,20][i],3.5,{f:"#9AA1AE",r:1.75})+gbar(67,y+1.5,[12,10,14,11][i],3)
      +K.rect(90,y-4.5,20,9,{f:"#fff",s:OUT,sw:1,r:4.5})+T(100,y+2.5,"해제",{size:7,w:700,a:"middle"})
      +(i<3?sep(y+7.65):"")}).join("");

TH2["신고 화면"]=K=>phone()
  +K.icon("x",52.5,15,6.5,C.ink,1.8)+T(80,17.6,"신고",{size:8,w:700,a:"middle"})
  +T(50,31,"신고 이유",{size:7,fill:C.sub,w:700})
  +["스팸 · 광고","욕설 · 비방","거짓 정보","기타"].map((s,i)=>{const y=40+i*10.5,sel=i===1;
    return K.circ(54,y,3.5,{f:"#fff",s:sel?C.blue:OUT,sw:1.2})+(sel?K.circ(54,y,1.8,{f:C.blue}):"")
      +T(61,y+2.5,s,{size:7,w:sel?700:500})}).join("")
  +btn(50,80.5,60,11.5,"신고하기",{f:C.red});

TH2["관심사 선택"]=K=>phone()
  +T(80,19.5,"관심사를 골라요",{size:8,w:800,a:"middle"})
  +T(80,29,"3개 이상",{size:7,fill:C.sub,a:"middle"})
  +["음악","여행","요리","운동","게임","영화","사진","독서","패션"].map((s,i)=>{const x=50+(i%3)*20.7,y=35+Math.floor(i/3)*12.5,sel=[0,4,5].includes(i);
    return K.rect(x,y,18.6,10,{f:sel?C.blue:"#fff",s:sel?C.blue:C.line,sw:.9,r:5})
      +T(x+9.3,y+7.5,s,{size:7,fill:sel?"#fff":C.ink,w:sel?700:500,a:"middle"})}).join("")
  +btn(50,79.5,60,12,"다음");

TH2["프로필 편집"]=K=>phone()
  +K.icon("x",52.5,15,6.5,C.ink,1.8)+T(110,17.6,"저장",{size:7.5,fill:C.blue,w:700,a:"end"})
  +K.circ(80,31,10.5,{f:C.blueSoft})+K.icon("user",80,31,12,C.blue,1.6)
  +K.circ(89,38.5,5.6,{f:C.blue,s:"#fff",sw:1.2})+K.icon("q28cam",89,38.3,7,"#fff",1.3)
  +T(50,54,"이름",{size:7,fill:C.sub})
  +field(50,56.5,60,10.5,true)+T(54,64.3,"김하늘",{size:7})+K.line(76.5,59,76.5,64.5,{s:C.blue,sw:1.1})
  +T(50,76.5,"소개",{size:7,fill:C.sub})
  +field(50,79,60,12)+gbar(54,83.4,34,3.2);

/* ───────── 미디어 · 지도 · 운영 ───────── */
TH2["플레이어 화면"]=K=>{const g="b228g"+K.id();
  return phone()
  +K.icon("q28down",52.5,13,7,C.ink,1.9)+K.icon("more",107,13,7,C.ink,2)
  +`<defs>${K.grad(g,[[0,"#7C9BFF"],[1,"#E9A8D8"]],1,1)}</defs>`
  +K.rect(60,18,40,37,{f:`url(#${g})`,r:7})+K.circ(80,36.5,10,{f:"rgba(255,255,255,.35)"})+K.circ(80,36.5,3,{f:"#fff"})
  +tbar(50,59.5,30,4)+gbar(50,66,20,3)+fillIcon("heart",106,63,8,C.red)
  +K.rect(50,72.5,60,2.4,{f:"#E1E5EC",r:1.2})+K.rect(50,72.5,24,2.4,{f:C.blue,r:1.2})+K.circ(74,73.7,2.7,{f:C.blue})
  +fillIcon("q28prev",62,85.5,9,C.ink)+fillIcon("q28next",98,85.5,9,C.ink)
  +K.circ(80,85.5,7.2,{f:C.blue})+K.rect(77,82.3,2.2,6.4,{f:"#fff",r:.6})+K.rect(80.8,82.3,2.2,6.4,{f:"#fff",r:.6})};

TH2["길안내 화면"]=K=>K.rect(42,5,76,90,{f:"#E9F1E6",r:12,fx:"url(#b2lift)"})
  +clip(42,5,76,90,12,
    K.rect(42,5,26,32,{f:"#DCEBD6"})+K.rect(86,54,32,41,{f:"#DCEBD6"})
    +K.path("M42 44H118",{s:"#fff",sw:7})+K.path("M76 5V95",{s:"#fff",sw:7})+K.path("M42 66L118 62",{s:"#fff",sw:3.5})
    +K.path("M76 95V50q0-6 6-6h36",{s:C.blue,sw:4.5}))
  +K.rect(42.25,5.25,75.5,89.5,{s:C.hair,sw:.5,r:12})
  +K.rect(46,9,68,22,{f:DARK,r:7})+K.icon("q28turn",57.5,20,13,"#fff",2.2)
  +T(69,21,"300m",{size:10,fill:"#fff",w:800})+K.rect(69,24.5,26,2.8,{f:"#fff",r:1.4,o:.5})
  +K.circ(76,65,7.5,{f:C.blue,o:.2})+K.path("M76 59l4.8 10.5-4.8-2.5-4.8 2.5z",{f:C.blue,s:"#fff",sw:1})
  +K.card(46,76,68,16,7)+T(50.5,87.2,"12분",{size:8.5,fill:C.green,w:800})+T(70,87.2,"3.2km",{size:7,fill:C.sub})
  +K.rect(93,79.5,18,9,{f:C.red,r:4.5})+T(102,86.5,"종료",{size:7,fill:"#fff",w:700,a:"middle"});

TH2["관리자 화면"]=K=>K.card(12,10,136,80,10)
  +clip(12,10,136,80,10,K.rect(12,10,26,80,{f:DARK}))
  +K.rect(17.5,16.5,11,4,{f:C.blue,r:2})
  +K.rect(15,37.5,20,12,{f:"rgba(255,255,255,.14)",r:4})
  +["grid","user","cart","settings"].map((ic,i)=>K.icon(ic,25,31+i*12.5,7.5,i===1?"#fff":"#8E96A6",1.6)).join("")
  +T(44,24,"회원 관리",{size:8,w:700})+btn(119,15.5,23,10,"추가")
  +K.rect(44,30,98,9,{f:KEY,r:3})+K.rect(47.5,32,5,5,{f:"#fff",s:OUT,sw:.9,r:1.5})
  +gbar(56,33,16,3)+gbar(90,33,12,3)+gbar(117,33,14,3)
  +K.rect(44,50.5,98,11,{f:C.blueSoft,r:3})
  +[0,1,2,3].map(i=>{const y=45+i*11,on=i!==2;
    return (i===1?K.rect(47.5,y-2.5,5,5,{f:C.blue,r:1.5})+K.icon("check",50,y,4,"#fff",2):K.rect(47.5,y-2.5,5,5,{f:"#fff",s:OUT,sw:.9,r:1.5}))
      +K.circ(59,y,3,{f:PAS[i]})+tbar(65,y-1.6,[16,20,14,18][i],3.2)
      +K.rect(88,y-4.2,18,8.4,{f:on?"#DDF3E7":"#FFEFD6",r:4.2})+T(97,y+2.5,on?"정상":"정지",{size:7,fill:on?C.green:"#B7791F",w:700,a:"middle"})
      +K.icon("edit",121,y,6.5,C.sub,1.5)+K.icon("trash",134,y,6.5,C.sub,1.5)
      +(i<3&&i!==0&&i!==1?K.line(44,y+5.5,142,y+5.5,{s:"#EDF0F5",sw:.8}):"")}).join("");
}
