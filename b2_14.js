// B2 그림 추가 14: sc(화면 유형) · sr(검색) · dt(숫자 · 평가)
// 움직이는 부분은 class="b2x14 b2a-n14…". transform 속성이 있는 요소에는 클래스를 직접 달지 않고 겉 g 로 감싼다.
{
const A=(c,inner,st="")=>`<g class="b2x14 b2a-n14${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n14${name}{animation-name:b2a-n14${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n14${name}{${frames}}`);
css(`.b2x14{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
css(`@media (prefers-reduced-motion:reduce){.b2x14{animation:none}}`);
const n2=K.n2, C=K.C;
const KEY="#F2F4F8", SOFT="#C9D6FF", MID="#9DB6FF";

Object.assign(K.ICON,{
  q14mail:["M4 6h16v12H4z","M4 7l8 6 8-6"],
  q14clock:["M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17z","M12 7.5V12l3 2"],
  q14pin:"M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z",
  q14flame:"M12 2.5c.8 3.6 5.5 5.6 5.5 10.6a5.5 5.5 0 0 1-11 0c0-2.1 1-3.6 2.2-4.6.2 1.7.9 2.6 1.8 2.9-.6-3.3-.2-6.4 1.5-8.9z",
  q14box:["M4 8l8-4 8 4v8l-8 4-8-4z","M4 8l8 4 8-4","M12 12v8"],
  q14ticket:["M4 7h16v3.5a1.5 1.5 0 0 0 0 3V17H4v-3.5a1.5 1.5 0 0 0 0-3z","M14 7v10"],
  q14phone:["M8 3h8v18H8z","M11 18h2"],
  q14server:["M4 5h16v6H4z","M4 13h16v6H4z","M7.5 8v.01","M7.5 16v.01"],
  q14minus:"M6 12h12",
  q14up:["M12 19V5","M6.5 10.5L12 5l5.5 5.5"],
});
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=3.5)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
// 휴대폰 화면 한 장 (x 42~118, y 5~95)
const phone=f=>K.card(42,5,76,90,12,f);
const btn=(x,y,w,h,s,{f=C.blue,ink="#fff",size=7}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
const obtn=(x,y,w,h,s,size=7)=>K.rect(x,y,w,h,{f:"#fff",s:C.blue,sw:1.1,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:C.blue,w:700,a:"middle"});
const field=(x,y,w,h)=>K.rect(x,y,w,h,{f:"#F7F8FC",s:C.line,sw:.9,r:4});
const sep=y=>K.line(50,y,110,y,{s:"#EDF0F5",sw:.8});
const tw=(s,size)=>[...s].reduce((a,ch)=>a+(ch===" "?.3:/[가-힣]/.test(ch)?1:.6),0)*size;
const clip=(x,y,w,h,r,inner)=>{const c="b214k"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const star=(cx,cy,size,f)=>fillIcon("star",cx,cy,size,f);
const knob=(cx,cy,r)=>K.circ(cx,cy,r,{f:"#fff",s:C.blue,sw:1.8});
const chk=(x,y,on,s=8)=>on?K.rect(x,y,s,s,{f:C.blue,r:2.5})+K.icon("check",x+s/2,y+s/2,s*.75,"#fff",2):K.rect(x,y,s,s,{f:"#fff",s:"#C3C9D6",sw:1,r:2.5});

/* ───────── sc · 화면 유형 ───────── */
TH2["홈 화면"]=K=>phone()
  +K.rect(50,11,14,7,{f:C.blue,r:3.5})+K.icon("bell",106,14.5,7.5,C.sub,1.6)
  +K.rect(50,22,60,22,{f:C.blueSoft,r:6})+tbar(56,28,26,4)+gbar(56,35,18,3)+K.circ(98,33,6.5,{f:C.blue,o:.35})
  +K.circ(76,41,1.1,{f:C.blue})+K.circ(80,41,1.1,{f:"#fff"})+K.circ(84,41,1.1,{f:"#fff"})
  +[["#CFE0FF"],["#FFE1C7"],["#D9F2E0"],["#F3D9F0"]].map(([f],i)=>K.circ(57+i*15.3,54,5.5,{f})+gbar(52+i*15.3,62,10,2.5)).join("")
  +K.rect(50,68,29,10,{f:KEY,r:4})+K.rect(81,68,29,10,{f:KEY,r:4})
  +K.line(42,81.5,118,81.5,{s:"#EDF0F5",sw:.8})
  +fillIcon("home",56,88.5,8.5,C.blue)+K.icon("search",72,88.5,8,C.mute,1.7)+K.icon("heart",88,88.5,8,C.mute,1.7)+K.icon("user",104,88.5,8,C.mute,1.7);

TH2["검색 화면"]=K=>phone()
  +K.icon("back",51.5,16,7,C.ink,1.9)
  +K.rect(58,10,52,12,{f:"#fff",s:C.blue,sw:1.2,r:6})+K.icon("search",65,16,7,C.blue,1.8)+K.line(71,12.8,71,19.2,{s:C.blue,sw:1})
  +K.txt(50,34,"추천",{size:7,fill:C.sub,w:700})
  +[[50,22],[75,16],[94,16]].map(([x,w])=>K.rect(x,38,w,9,{f:KEY,r:4.5})+gbar(x+4,41,w-8,3)).join("")
  +K.txt(50,60,"분류",{size:7,fill:C.sub,w:700})
  +[0,1,2,3,4,5].map(i=>{const x=50+(i%3)*21,y=64+Math.floor(i/3)*14;
    return K.rect(x,y,18,11.5,{f:i===0?C.blueSoft:KEY,r:4})+K.circ(x+9,y+5.75,2.6,{f:i===0?C.blue:"#C3C9D6"})}).join("");

TH2["알림함"]=K=>phone()
  +K.icon("back",51.5,15,7,C.ink,1.9)+K.txt(80,17.6,"알림",{size:8,w:700,a:"middle"})
  +K.txt(50,29,"오늘",{size:7,fill:C.blue,w:700})
  +[0,1].map(i=>{const y=39+i*14;return K.circ(55.5,y,5,{f:["#CFE0FF","#FFE1C7"][i]})+tbar(64,y-3.5,[30,36][i],3.5)+gbar(64,y+1.5,[40,28][i],3)+K.circ(108,y,1.8,{f:C.red})}).join("")
  +sep(61.5)
  +K.txt(50,71,"어제",{size:7,fill:C.mute,w:700})
  +K.circ(55.5,81,5,{f:KEY})+gbar(64,77.5,32,3.5)+gbar(64,82.5,24,3);

TH2["장바구니 화면"]=K=>phone()
  +K.txt(50,18.5,"장바구니",{size:8,w:700})+K.rect(87,11.5,9,9,{f:C.blue,r:4.5})+K.txt(91.5,18.5,"2",{size:7,fill:"#fff",w:700,a:"middle"})
  +[0,1].map(i=>{const y=25+i*20;
    return chk(50,y+4,true,7)+K.rect(60,y,15,15,{f:["#CFE0FF","#FFE1C7"][i],r:4})+tbar(79,y+1.5,[24,18][i],3.5)
      +K.rect(79,y+8,24,7.5,{f:"#fff",s:C.line,sw:.9,r:3.75})+K.icon("q14minus",83.5,y+11.75,5,C.sub,2)+K.txt(91,y+14.3,i?"2":"1",{size:7,w:700,a:"middle"})+K.icon("plus",98.5,y+11.75,5,C.blue,2)
      +(i?"":sep(y+17.5))}).join("")
  +sep(65)
  +K.txt(50,74.5,"합계",{size:7,fill:C.sub})+K.txt(110,74.5,"48,000원",{size:7.5,w:700,a:"end"})
  +btn(50,79,60,12,"주문하기");

TH2["채팅방"]=K=>phone()
  +K.icon("back",51.5,15,7,C.ink,1.9)+K.circ(62,15,4.5,{f:"#CFE0FF"})+tbar(70,13,22,4)
  +K.line(42,23,118,23,{s:"#EDF0F5",sw:.8})
  +K.rect(50,28,38,11,{f:KEY,r:5.5})+gbar(55,32,26,3)
  +K.rect(66,42,44,11,{f:C.blue,r:5.5})+K.rect(71,46,32,3,{f:"#fff",r:1.5,o:.85})
  +K.rect(50,56,30,11,{f:KEY,r:5.5})+gbar(55,60,18,3)
  +K.rect(78,70,32,11,{f:C.blue,r:5.5})+K.rect(83,74,20,3,{f:"#fff",r:1.5,o:.85})
  +K.icon("plus",53.5,88,6.5,C.sub,1.8)+K.rect(59,83.5,39,9,{f:KEY,r:4.5})+K.circ(105.5,88,4.8,{f:C.blue})+K.icon("q14up",105.5,88,5.5,"#fff",2);

TH2["지도 화면"]=K=>K.rect(42,5,76,90,{f:"#E9F1E6",r:12,fx:"url(#b2lift)"})
  +clip(42,5,76,90,12,
    K.rect(42,5,30,34,{f:"#DCEBD6"})+K.rect(88,52,30,43,{f:"#DCEBD6"})
    +K.path("M94 5C90 22 104 30 118 34V5Z",{f:"#CFE0FF",s:"none",sw:0})
    +K.path("M42 46L118 36",{s:"#fff",sw:5})+K.path("M74 5L82 95",{s:"#fff",sw:5})+K.path("M42 70L80 62L118 74",{s:"#fff",sw:3}))
  +K.rect(42.25,5.25,75.5,89.5,{s:C.hair,sw:.5,r:12})
  +K.card(48,10,64,12,6)+K.icon("search",55,16,7,C.mute,1.8)+gbar(61,14.3,24,3.5)
  +K.circ(77,57,3.5,{f:"rgba(40,50,110,.18)"})+fillIcon("q14pin",77,45,24,C.blue)+K.circ(77,43,3.3,{f:"#fff"})
  +K.circ(108,62,5.5,{f:"#fff",s:C.hair,sw:.6})+K.circ(108,62,2.2,{s:C.blue,sw:1.4})
  +K.card(47,72,66,19,7)+K.rect(51,76,11,11,{f:C.blueSoft,r:3.5})+tbar(66,77.5,26,4)+gbar(66,84,36,3);

TH2["마이페이지"]=K=>phone()
  +K.circ(57,18,7,{f:C.blueSoft})+K.icon("user",57,18,8,C.blue,1.6)
  +K.txt(68,20.6,"김하늘 님",{size:7.5,w:700})+K.icon("next",107,18,7,C.mute,1.8)
  +K.rect(50,29,60,21,{f:C.blueSoft,r:6})+K.line(80,33,80,46,{s:"#fff",sw:1})
  +K.txt(65,38,"쿠폰",{size:7,fill:C.sub,a:"middle"})+K.txt(65,46.5,"3",{size:8,fill:C.blue,w:800,a:"middle"})
  +K.txt(95,38,"포인트",{size:7,fill:C.sub,a:"middle"})+K.txt(95,46.5,"1,200",{size:8,fill:C.blue,w:800,a:"middle"})
  +[["q14box","주문 내역"],["heart","찜"],["chat","문의"]].map(([ic,s],i)=>{const y=60+i*12.5;
    return K.icon(ic,54,y,7.5,C.sub,1.6)+K.txt(61,y+2.5,s,{size:7})+K.icon("next",107,y,6.5,C.mute,1.8)+(i<2?sep(y+6.25):"")}).join("");

TH2["리뷰 작성"]=K=>phone()
  +K.txt(50,18.5,"리뷰 쓰기",{size:8,w:700})+K.icon("x",106.5,15.5,6.5,C.sub,1.8)
  +[0,1,2,3,4].map(i=>star(57+i*11.5,31,11,i<4?C.amber:"#E1E5EC")).join("")
  +field(50,41,60,24)+gbar(54,45.5,44,3)+gbar(54,51.5,36,3)+K.txt(107,62.5,"24/500",{size:7,fill:C.mute,a:"end"})
  +`<rect x="50" y="68" width="10.5" height="9" rx="3" style="fill:#fff;stroke:#C3C9D6;stroke-width:1;stroke-dasharray:2.4 2"/>`+K.icon("plus",55.25,72.5,5.5,C.sub,1.8)
  +K.rect(63,68,10.5,9,{f:"#CFE0FF",r:3})
  +btn(50,80.5,60,11,"등록");

TH2["비밀번호 찾기"]=K=>phone()
  +K.icon("back",51.5,14,7,C.ink,1.9)
  +K.circ(80,26,10.5,{f:C.blueSoft})+K.icon("lock",80,25.5,11,C.blue,1.8)
  +K.circ(89,18,5,{f:C.amber})+K.txt(89,20.7,"?",{size:7.5,fill:"#fff",w:800,a:"middle"})
  +K.txt(80,47,"비밀번호 찾기",{size:7.5,w:700,a:"middle"})
  +field(50,53,60,12)+K.icon("q14mail",57,59,7,C.mute,1.5)+gbar(64,57.3,32)
  +btn(50,70,60,13,"메일 보내기");

TH2["본인 인증"]=K=>phone()
  +K.txt(50,18.5,"본인 인증",{size:8,w:700})
  +field(50,24,41,11.5)+K.icon("q14phone",56,29.75,7,C.mute,1.5)+gbar(62,28,24)
  +K.rect(93.5,24,16.5,11.5,{f:C.blueSoft,r:4})+K.txt(101.75,32.3,"전송",{size:7,fill:C.blue,w:700,a:"middle"})
  +["4","8","2","",""].map((d,i)=>{const x=50+i*12.3,on=i===3;
    return K.rect(x,43,10.8,14,{f:on?"#fff":"#F7F8FC",s:on?C.blue:C.line,sw:on?1.3:.9,r:3.5})
      +(d?K.txt(x+5.4,53.2,d,{size:9,w:700,a:"middle"}):on?K.line(x+5.4,46.5,x+5.4,53.5,{s:C.blue,sw:1.1}):"")}).join("")
  +K.txt(110,66.5,"02:47",{size:7,fill:C.red,w:700,a:"end"})+K.txt(50,66.5,"남은 시간",{size:7,fill:C.sub})
  +btn(50,78,60,12,"인증하기");

TH2["탈퇴 화면"]=K=>phone()
  +K.txt(50,18.5,"회원 탈퇴",{size:8,w:700})
  +K.rect(50,24,60,31,{f:"rgba(229,72,77,.08)",r:6})
  +[0,1,2].map(i=>{const y=30.5+i*9;return K.icon("x",56,y,5,C.red,2)+K.rect(62,y-1.75,[36,28,40][i],3.5,{f:"#E9B8BA",r:1.75})}).join("")
  +chk(50,58,true)+K.txt(62,64.5,"모두 지워져요",{size:7,w:500})
  +btn(50,69.5,60,11,"탈퇴하기",{f:C.red})
  +K.txt(80,90.5,"계속 쓸래요",{size:7,fill:C.sub,a:"middle"});

TH2["500 오류 화면"]=K=>phone()
  +K.circ(80,23,9.5,{f:"rgba(229,72,77,.10)"})+K.icon("q14server",80,23,11,C.red,1.6)
  +K.txt(80,52,"500",{size:20,fill:C.ink,w:800,a:"middle"})
  +K.txt(80,63,"서버 오류예요",{size:7,w:700,a:"middle"})+gbar(64,67.5,32,2.5)
  +K.rect(52,76,56,13,{f:C.blue,r:6.5})+K.icon("refresh",64,82.5,7.5,"#fff",2)+K.txt(70,85,"다시 시도",{size:7,fill:"#fff",w:700});

TH2["세션 만료"]=K=>phone()
  +tbar(50,13,30,4)+gbar(50,21,56,3)+gbar(50,27,40,3)
  +K.rect(42,5,76,90,{f:"rgba(40,50,110,.16)",r:12})
  +K.card(48,25,64,65,10)
  +K.circ(80,40,10,{f:"#FFF1D6"})+K.icon("q14clock",80,40,12,C.amber,1.8)
  +K.txt(80,61,"시간이 지났어요",{size:7,w:700,a:"middle"})
  +K.txt(80,70,"자동 로그아웃",{size:7,fill:C.sub,a:"middle"})
  +btn(53,75,54,11.5,"다시 로그인");

TH2["대기열 화면"]=K=>phone()
  +K.txt(80,20,"접속 대기 중",{size:7.5,w:700,a:"middle"})
  +K.txt(80,33,"내 앞",{size:7,fill:C.sub,a:"middle"})
  +K.txt(80,50,"1,280명",{size:14,fill:C.blue,w:800,a:"middle"})
  +K.rect(50,58,60,6,{f:C.skel,r:3})+A("q",K.rect(50,58,60,6,{f:C.blue,r:3}))
  +[0,1,2,3,4].map(i=>K.circ(56+i*10,74,3.2,{f:i===4?C.blue:"#D3D8E3"})+K.rect(52.6+i*10,78.5,6.8,5,{f:i===4?C.blue:"#D3D8E3",r:2.5})).join("")
  +K.txt(110,91,"약 3분",{size:7,fill:C.sub,a:"end"});
kf("q",3,"0%,6%{transform:scaleX(.18)}80%,94%{transform:scaleX(.72)}100%{transform:scaleX(.18)}","transform-origin:0 50%;transform:scaleX(.6);animation-timing-function:ease-in-out;");

/* ───────── sr · 검색 ───────── */
TH2["오타 교정"]=K=>K.card(14,8,132,24,12)
  +K.icon("search",28,20,11,C.mute,1.8)+K.txt(39,23.4,"운둥화",{size:10,w:500})
  +K.path("M39 27q2.5-2.4 5 0t5 0 5 0 5 0 5 0",{s:C.red,sw:1})
  +K.icon("x",134,20,7,C.mute,1.8)
  +K.card(14,39,132,30,12)
  +K.txt(26,58.4,`혹시 <tspan style="fill:${C.blue};font-weight:800;text-decoration:underline">운동화</tspan>?`,{size:12.5,w:600})
  +K.icon("next",134,54,8,C.blue,2)
  +K.blk(14,76,62,18,8)+K.blk(84,76,62,18,8);

TH2["최근 본 항목"]=K=>K.blk(14,4,132,9,4.5)
  +K.card(10,18,140,76,12)
  +K.icon("q14clock",23,31,9,C.blue,1.7)+K.txt(30,34,"최근 본 상품",{size:8,w:700})
  +clip(10,18,140,76,12,[["#CFE0FF","#6A86E8"],["#FFE1C7","#F2A93B"],["#D9F2E0","#1FA971"],["#F3D9F0","#C77FBD"]].map(([f,m],i)=>{const x=18+i*40;
    return K.rect(x,42,34,30,{f,r:7})+K.circ(x+17,54,6,{f:m,o:.75})+K.rect(x+8,62,18,4,{f:m,r:2,o:.5})
      +tbar(x,77,[26,20,24,22][i],3.5)+gbar(x,83.5,[16,22,14,18][i],3)}).join(""));

TH2["필터 초기화"]=K=>[[14,46],[64,38],[106,40]].map(([x,w])=>K.rect(x,12,w,18,{f:C.blue,r:9,o:.28})+K.rect(x+8,19,w-22,4,{f:"#fff",r:2,o:.9})+K.icon("x",x+w-9,21,5.5,"#fff",1.8)).join("")
  +K.card(30,40,100,32,16)
  +K.icon("refresh",52,56,15,C.blue,2.1)
  +K.txt(66,60.5,"초기화",{size:13,fill:C.blue,w:700})
  +K.blk(14,80,62,14,7)+K.blk(84,80,62,14,7);

TH2["적용된 필터 요약"]=K=>{let x=18;const S=7.5,H=17,Y=47;
  return K.blk(14,6,132,12,6)
  +K.card(10,24,140,48,12)
  +K.txt(18,39,"적용 필터",{size:7.5,w:700})+K.circ(57,36.3,5,{f:C.blue})+K.txt(57,39,"3",{size:7,fill:"#fff",w:700,a:"middle"})
  +K.txt(142,39,"전체 해제",{size:7,fill:C.sub,a:"end"})
  +["흰색","운동화","할인"].map(s=>{const w=tw(s,S)+21;
    const r=K.rect(x,Y,w,H,{f:C.blueSoft,s:C.blue,sw:1,r:H/2})+K.txt(x+7,Y+H/2+S*.36,s,{size:S,fill:C.blue,w:700})+K.icon("x",x+w-8.5,Y+H/2,6,C.blue,1.9);
    x+=w+5;return r}).join("")
  +K.blk(14,78,62,16,7)+K.blk(84,78,62,16,7)};

TH2["가격 범위 필터"]=K=>K.card(14,5,132,90,12)
  +K.txt(24,19,"가격",{size:8,w:700})
  +[5,9,15,21,17,12,8,5,3].map((h,i)=>K.rect(27+i*12.2,47-h,9,h,{f:i>=2&&i<=5?C.blue:SOFT,r:2,o:i>=2&&i<=5?.85:1})).join("")
  +K.rect(24,48.5,112,4,{f:C.skel,r:2})+K.rect(51,48.5,49,4,{f:C.blue,r:2})+knob(51,50.5,5.5)+knob(100,50.5,5.5)
  +K.rect(24,63,48,19,{f:"#fff",s:C.line,sw:1,r:6})+K.txt(30,72,"최소",{size:7,fill:C.mute})+K.txt(67,78,"2만원",{size:8,w:700,a:"end"})
  +K.rect(88,63,48,19,{f:"#fff",s:C.blue,sw:1.2,r:6})+K.txt(94,72,"최대",{size:7,fill:C.mute})+K.txt(131,78,"8만원",{size:8,w:700,a:"end"})
  +K.txt(80,75.5,"~",{size:9,fill:C.sub,a:"middle"});

TH2["보기 전환"]=K=>K.card(38,8,84,34,13)
  +K.rect(43,13,74,24,{f:KEY,r:9})
  +K.icon("list",61.5,25,14,C.sub,1.8)
  +K.rect(81,15,34,20,{f:C.blue,r:7})+K.icon("grid",98,25,13,"#fff",1.8)
  +[0,1,2,3,4,5].map(i=>K.blk(20+(i%3)*42,50+Math.floor(i/3)*24,36,20,7)).join("");

/* ───────── dt · 숫자 · 평가 ───────── */
TH2["카운트다운"]=K=>K.blk(40,6,80,10,5)
  +[["02","시간"],["14","분"],["","초"]].map(([d,u],i)=>{const x=14+i*46;
    return K.card(x,24,40,42,10,C.toast)+K.line(x,45,x+40,45,{s:"rgba(255,255,255,.14)",sw:.8})
      +(d?K.txt(x+20,53,d,{size:22,fill:"#fff",w:700,a:"middle"})
         :A("ca",K.txt(x+20,53,"36",{size:22,fill:"#fff",w:700,a:"middle"}))+A("cb",K.txt(x+20,53,"35",{size:22,fill:"#fff",w:700,a:"middle"})))
      +K.txt(x+20,80,u,{size:8,fill:C.sub,w:500,a:"middle"})
      +(i<2?K.circ(x+43,40,1.7,{f:C.ink})+K.circ(x+43,50,1.7,{f:C.ink}):"")}).join("");
kf("ca",2.4,"0%,46%{opacity:1;transform:none}50%,96%{opacity:0;transform:translateY(-3px)}100%{opacity:1;transform:none}");
kf("cb",2.4,"0%,46%{opacity:0;transform:translateY(3px)}50%,96%{opacity:1;transform:none}100%{opacity:0;transform:translateY(3px)}","opacity:0;");

TH2["스트릭"]=K=>K.card(16,8,128,84,14)
  +K.circ(46,35,17,{f:"#FFF1D6"})+fillIcon("q14flame",46,34,28,C.amber)+fillIcon("q14flame",46,39,13,"#FFE9B8")
  +K.txt(70,34,"7일",{size:17,w:800})+K.txt(70,47,"연속 달성",{size:8,fill:C.sub})
  +K.line(26,60,134,60,{s:C.line,sw:.8})
  +[1,1,1,1,1,2,0].map((v,i)=>{const x=32+i*16;
    return v===1?K.circ(x,75,6,{f:C.amber})+K.icon("check",x,75,7,"#fff",2.2)
      :v===2?K.circ(x,75,6,{f:"#fff",s:C.amber,sw:1.6})+K.circ(x,75,2,{f:C.amber})
      :K.circ(x,75,6,{f:KEY})}).join("");

TH2["레벨 바"]=K=>K.blk(14,6,70,12,6)+K.blk(14,82,132,12,6)
  +K.card(12,25,136,50,14)
  +K.circ(33,50,13,{f:C.blue})+K.txt(33,47,"Lv",{size:7,fill:"#fff",w:700,a:"middle"})+K.txt(33,57.5,"7",{size:11,fill:"#fff",w:800,a:"middle"})
  +K.txt(53,43,"720",{size:10,w:800})+K.txt(73,43,"/ 1000 XP",{size:7,fill:C.sub})
  +K.rect(53,50,70,8,{f:C.skel,r:4})+K.rect(53,50,50,8,{f:C.blue,r:4})+K.rect(57,52,30,2,{f:"#fff",r:1,o:.45})
  +K.circ(131,54,8,{f:"#fff",s:C.skel,sw:1.6})+K.txt(131,56.8,"8",{size:8,fill:C.mute,w:800,a:"middle"})
  +K.txt(53,68,"다음 레벨까지 280",{size:7,fill:C.sub});

TH2["리뷰 분포 막대"]=K=>K.card(10,8,140,84,14)
  +K.txt(37,50,"4.6",{size:20,w:800,a:"middle"})
  +[0,1,2,3,4].map(i=>star(21+i*8,61,8,i<4?C.amber:"#E1E5EC")).join("")
  +K.line(63,20,63,80,{s:C.line,sw:.8})
  +[.78,.4,.14,.05,.08].map((v,i)=>{const y=24+i*13;
    return K.txt(74,y+2.7,5-i,{size:7.5,fill:C.sub,w:700,a:"middle"})
      +K.rect(81,y-3,58,6,{f:C.skel,r:3})+K.rect(81,y-3,n2(58*v),6,{f:C.amber,r:3})}).join("");

TH2["랭킹 배지"]=K=>{const medal=(cx,cy,r,f,rim,s,size)=>
    K.path(`M${cx-r*.55} ${cy-r*1.75}h${n2(r*.5)}l${n2(r*.35)} ${n2(r*.95)}h${n2(-r*.5)}z`,{f:C.blue,s:"none",sw:0})
    +K.path(`M${cx+r*.55} ${cy-r*1.75}h${n2(-r*.5)}l${n2(-r*.35)} ${n2(r*.95)}h${n2(r*.5)}z`,{f:C.red,s:"none",sw:0,o:.85})
    +K.circ(cx,cy,r,{f})+K.circ(cx,cy,n2(r*.76),{s:rim,sw:n2(r*.09)})
    +K.txt(cx,cy+size*.36,s,{size,fill:"#fff",w:800,a:"middle"});
  return K.card(14,8,132,84,16)
  +medal(38,62,13,"#AEB7C6","#D5DAE3","2",13)
  +medal(122,62,13,"#C98A5B","#E2B692","3",13)
  +medal(80,56,22,C.amber,"#FBD68E","1",23)};

TH2["트리맵"]=K=>K.card(14,8,132,84,12)
  +K.rect(22,16,54,68,{f:C.blue,r:4})+K.rect(28,22,22,4,{f:"#fff",r:2,o:.85})+K.rect(28,29,14,3,{f:"#fff",r:1.5,o:.55})
  +K.rect(78,16,60,38,{f:MID,r:4})+K.rect(84,22,18,4,{f:"#fff",r:2,o:.85})
  +K.rect(78,56,34,28,{f:SOFT,r:4})+K.rect(84,62,14,3.5,{f:"#fff",r:1.75,o:.9})
  +K.rect(114,56,24,16,{f:C.amber,r:4})
  +K.rect(114,74,11,10,{f:"#E3E9FA",r:3})+K.rect(127,74,11,10,{f:"#F3D9F0",r:3});

TH2["캔들 차트"]=K=>K.card(16,10,128,80,12)+[28,44,60].map(y=>K.line(28,y,132,y,{s:C.line,sw:.6})).join("")
  // [중심x, 고가y, 저가y, 몸통 위y, 몸통 아래y, 오름?] 오르면 빨강 · 내리면 파랑
  +[[36,50,74,56,70,1],[50,40,64,44,58,1],[64,42,62,46,57,0],[78,48,72,52,66,0],[92,36,66,42,62,1],[106,24,50,28,44,1],[120,22,42,27,36,0]]
    .map(([x,hi,lo,a,b,up])=>{const c=up?C.red:C.blue;return K.line(x,hi,x,lo,{s:c,sw:1.3})+K.rect(x-4,a,8,b-a,{f:c,r:1.5})}).join("")
  +K.line(28,78,132,78,{s:"#C5CBD6",sw:1.2});

TH2["간트 차트"]=K=>K.card(10,8,140,84,12)
  +[0,1,2,3].map(i=>K.txt(63.5+i*21,21,["1주","2주","3주","4주"][i],{size:7,fill:C.sub,a:"middle"})).join("")
  +K.line(18,25.5,142,25.5,{s:C.line,sw:.8})
  +[53,74,95,116,137].map(x=>K.line(x,14,x,84,{s:"#EDF0F5",sw:.8})).join("")
  +[[55,34,C.blue],[70,40,MID],[91,30,C.amber],[112,24,C.green]].map(([x,w,f],i)=>{const y=30+i*14;
    return gbar(18,y+2.75,[26,20,24,18][i],3.5)+K.rect(x,y,w,9,{f,r:4.5})+(i===0?K.rect(x,y,20,9,{f:"#12141A",r:4.5,o:.18}):"")}).join("")
  +K.line(84.5,26,84.5,84,{s:C.red,sw:1})+K.circ(84.5,26,2,{f:C.red});
}
