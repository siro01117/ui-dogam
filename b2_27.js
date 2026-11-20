// B2 그림 추가 27: pg · sh
// 움직이는 부분은 class="b2x27 b2a-n27…". transform 속성이 있는 요소에는 직접 달지 않고 겉 g 로 감싼다.
{
const A=(c,inner,st="")=>`<g class="b2x27 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x27{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:ease-in-out}`);
const n2=K.n2, C=K.C;
const DARK="#3A4050", GREY="#F4F6FB", SOFTBAR="#D3D8E3", LIFT="url(#b2lift)";
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DARK,r:h/2});       // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:SOFTBAR,r:h/2});    // 흰 면 위 글줄
const wtxt=(x,y,s,size=8.5)=>K.txt(x,y,s,{size,fill:"#fff",w:700,a:"middle"});

Object.assign(K.ICON,{
  q27news:["M4 5h13v14H5.5A1.5 1.5 0 0 1 4 17.5z","M17 9h3v8.5a1.5 1.5 0 0 1-3 0","M7 9h7","M7 12.5h7","M7 16h4"],
  q27up:["M12 19V5","M6.5 10.5L12 5l5.5 5.5"],
  q27pin:["M8.5 3.5h7l-1 6.5 3.5 3.5v1.5H6v-1.5L9.5 10z","M12 15v6"],
  q27flag:["M6 21V4","M6 5h11l-2 4 2 4H6"],
  q27globe:["M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z","M3 12h18","M12 3c3.2 3 3.2 15 0 18","M12 3c-3.2 3-3.2 15 0 18"],
  q27hist:["M4 12a8 8 0 1 0 2.5-5.8","M4 4.5V9h4.5","M12 8v4.5l3 2"],
  q27gift:["M4.5 10.5h15V20h-15z","M3 7h18v3.5H3z","M12 7v13","M12 7c-2-4.5-6.5-3-5 0","M12 7c2-4.5 6.5-3 5 0"],
  q27belloff:["M6 16V11a6 6 0 0 1 12 0v5l2 2H4z","M10 20a2 2 0 0 0 4 0","M4 3.5l16 17"],
  q27thumb:"M3.5 11h3.5v9H3.5zM7 11l4-7.5c1.6 0 2.6 1 2.6 2.6V10h4.9a2 2 0 0 1 2 2.3l-1 6a2 2 0 0 1-2 1.7H7z",
});
// 채운 아이콘
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b227p"+i,c="b227c"+i;
  const st=alt===2?[[0,"#C9F0DD"],[1,"#BFD8FF"]]:alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt===2?"#57B894":alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
// 얼굴 자리 (동그라미 + 사람 모양)
const face=(cx,cy,r,bg="#C9D6FF",fg="#7C95EA")=>{const c="b227f"+K.id();
  return `<defs><clipPath id="${c}"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>`+K.circ(cx,cy,r,{f:bg})
   +`<g clip-path="url(#${c})">`+K.circ(cx,cy-r*.18,n2(r*.36),{f:fg})+K.circ(cx,cy+r*.95,n2(r*.62),{f:fg})+`</g>`};
const FACES=[["#C9D6FF","#7C95EA"],["#FFD9A8","#E0A45E"],["#CFEFDD","#57B894"],["#F6D3E4","#D981AC"]];
const fc=(cx,cy,r,i)=>face(cx,cy,r,FACES[i%4][0],FACES[i%4][1]);
const dashLine=d=>`<path d="${d}" style="fill:none;stroke:${C.blue};stroke-width:1.4;stroke-dasharray:2.5 2.5"/>`;

/* ───────── pg · 페이지 섹션 ───────── */
TH2["지그재그 섹션"]=K=>K.card(12,6,136,88,12)
  +photo(20,13,54,34,7)+tbar(84,20,44)+gbar(84,30,50)+gbar(84,37,36)
  +tbar(20,60,44)+gbar(20,70,50)+gbar(20,77,36)+photo(86,53,54,34,7,true);

TH2["문제 · 해결 섹션"]=K=>K.card(10,14,66,72,12)+K.rect(10,14,66,72,{f:"rgba(229,72,77,.06)",r:12})
  +K.circ(26,30,8,{f:"rgba(229,72,77,.14)"})+K.icon("x",26,30,9,C.red,2)+K.txt(38,33.2,"문제",{size:9,w:700,fill:C.red})
  +gbar(20,46,46)+gbar(20,54,38)+gbar(20,62,44)+gbar(20,70,30)
  +K.card(84,14,66,72,12)+K.rect(84,14,66,72,{s:C.blue,sw:1.4,r:12})
  +K.circ(100,30,8,{f:C.blue})+K.icon("check",100,30,9,"#fff",2)+K.txt(112,33.2,"해결",{size:9,w:700,fill:C.blue})
  +[48,59,70].map((y,i)=>K.icon("check",97,y,7,C.blue,1.8)+gbar(104,y-2,[36,28,32][i])).join("")
  +K.card(73,43,14,14,7)+K.icon("next",80.5,50,8,C.ink,2);

TH2["가치 제안"]=K=>K.card(14,10,132,80,14)
  +K.txt(26,34,"절반의 시간으로",{size:12,w:800})+K.bar(26,41,70,3.5,SOFTBAR)
  +["설치 없이","자동 저장","무료 시작"].map((s,i)=>{const y=56+i*11;return K.circ(31,y,4.5,{f:C.blue})+K.icon("check",31,y,6,"#fff",1.8)+K.txt(40,y+2.7,s,{size:7.5,w:600})}).join("")
  +K.rect(106,50,28,32,{f:C.soft,r:9})+K.icon("sparkle",120,66,15,C.blue,1.6);

TH2["고객 사례"]=K=>K.card(12,10,136,80,14)+photo(20,18,50,64,9,2)
  +K.rect(80,20,10,10,{f:"#9AA3B4",r:3})+K.bar(93,22.5,26,5,"#9AA3B4")
  +K.txt(79,54,"+32%",{size:19,w:800,fill:C.blue})
  +K.txt(80,66,"석 달 만에 매출",{size:7.5,fill:C.sub})
  +K.txt(80,80,"사례 보기",{size:7.5,w:700,fill:C.blue})+K.icon("next",115,77.4,7,C.blue,1.8);

TH2["파트너 섹션"]=K=>{const lg=[
    (x,y)=>K.circ(x,y,6.5,{s:C.blue,sw:3}),
    (x,y)=>K.path(`M${x} ${y-7}L${x+7.5} ${y+6}H${x-7.5}Z`,{f:C.amber,s:C.amber,sw:1.5}),
    (x,y)=>K.circ(x-3.5,y,6,{f:C.green})+K.circ(x+4.5,y,6,{f:C.green,o:.5}),
  ];
  return K.card(10,10,140,80,14)+K.txt(80,26,"함께하는 파트너",{size:8.5,w:700,a:"middle"})
   +lg.map((f,i)=>{const x=18+i*42;return K.rect(x,34,40,46,{f:"#fff",s:C.line,sw:1,r:9})+f(x+20,52)+K.bar(x+9,68,22,4,"#B9C0CE")}).join("")};

TH2["언론 보도"]=K=>K.card(12,8,136,84,14)+K.icon("q27news",28,19.5,11,C.blue,1.6)+K.txt(37,22.6,"언론 보도",{size:8.5,w:700})
  +["일보","뉴스","타임"].map((s,i)=>{const y=31+i*20;return (i?K.line(22,y-3,138,y-3,{s:C.line,sw:.6}):"")
    +K.rect(22,y,30,14,{f:GREY,r:4})+K.txt(37,y+10,s,{size:7.5,w:800,fill:DARK,a:"middle"})
    +tbar(60,y+2,[66,54,60][i],4.5)+gbar(60,y+9.5,[40,46,34][i],3)}).join("");

TH2["채용 섹션"]=K=>K.card(12,8,136,84,14)+K.txt(24,24,"함께할 동료 찾아요",{size:8.5,w:700})
  +["디자이너","개발자"].map((s,i)=>{const y=32+i*28;return K.rect(20,y,120,24,{f:GREY,r:9})
    +K.txt(30,y+11,s,{size:8,w:700})+K.txt(30,y+20,"정규직 · 서울",{size:7,fill:C.sub})
    +K.rect(102,y+5,30,14,{f:C.blue,r:7})+wtxt(117,y+14.8,"지원",7.5)}).join("");

TH2["데모 요청 폼"]=K=>K.blk(6,22,18,56,8)+K.blk(136,22,18,56,8)
  +K.card(30,5,100,90,14)+K.txt(80,20,"데모 신청",{size:9,w:700,a:"middle"})
  +["회사명","업무 이메일"].map((s,i)=>{const y=27+i*18;return K.rect(40,y,80,14,{f:"#fff",s:"#CBD2E0",sw:1,r:7})+K.txt(47,y+9.8,s,{size:7,fill:C.mute})}).join("")
  +K.rect(40,66,80,18,{f:C.blue,r:9})+K.icon("calendar",61,75,10,"#fff",1.6)+K.txt(88,78,"데모 요청",{size:8,fill:"#fff",w:700,a:"middle"});

TH2["대기자 명단"]=K=>K.card(12,10,136,80,14)
  +[66,80,94].map((x,i)=>K.circ(x,28,9.5,{f:"#fff"})+fc(x,28,8,i)).join("")
  +K.txt(80,52,"1,204명 대기 중",{size:9,w:700,a:"middle"})
  +K.rect(22,62,76,20,{f:"#fff",s:"#CBD2E0",sw:1,r:10})+K.txt(32,75,"이메일",{size:8,fill:C.mute})
  +K.rect(102,62,38,20,{f:C.blue,r:10})+wtxt(121,75,"줄 서기",8);

TH2["앱 스크린샷 쇼케이스"]=K=>{const ph=(x,y,w,h,inner)=>K.rect(x,y,w,h,{f:"#1F2329",r:n2(w*.2),fx:LIFT})+K.rect(x+2,y+2,w-4,h-4,{f:"#fff",r:n2(w*.2-2)})+inner;
  const pas=["#CFE0FF","#FFE1C7","#D9F2E0","#F3D9F7"];
  return `<g style="opacity:.82">`
   +ph(20,22,34,62,[0,1,2,3].map(i=>K.circ(28.5,32+i*12,3,{f:pas[i]})+gbar(34.5,30.5+i*12,14,3)).join(""))
   +ph(106,22,34,62,tbar(112,30,16,3.5)+[12,20,28,16].map((h,i)=>K.rect(112+i*6.4,64-h,4.6,h,{f:i===2?C.blue:"#C9D6FF",r:1.5})).join("")+gbar(112,69,22,3)+gbar(112,75,14,3))
   +`</g>`
   +ph(60,8,40,84,K.rect(64.5,12.5,31,28,{f:C.blue,r:6})+K.bar(69,22,16,3.5,"#fff")+K.bar(69,29,22,3,"rgba(255,255,255,.6)")
     +tbar(66,46,20,3.5)+gbar(66,53,28,3)+K.rect(64.5,61,14.5,16,{f:pas[1],r:4})+K.rect(81,61,14.5,16,{f:pas[2],r:4})+K.rect(72,84.5,16,2,{f:"#C9CEDA",r:1}))};

TH2["연동 서비스 그리드"]=K=>{const P=[["#DCE6FF","#2F6BFF"],["#FFE8D2","#F2853B"],["#DDF3E7","#1FA971"],["#F3DDF7","#A855C8"],["#FFF1B8","#D69A00"],["#D7E9F0","#2E8FB0"],["#FFDDE1","#E5484D"]];
  const sh=[
    (x,y,c)=>K.circ(x,y,5,{s:c,sw:2.6}),
    (x,y,c)=>K.path(`M${x} ${y-5.5}L${x+6} ${y+4.5}H${x-6}Z`,{f:c,s:c,sw:1.4}),
    (x,y,c)=>K.rect(x-5,y-5,10,10,{f:c,r:3}),
    (x,y,c)=>K.path(`M${x} ${y-6}L${x+5.5} ${y}L${x} ${y+6}L${x-5.5} ${y}Z`,{f:c,s:c,sw:1.2}),
    (x,y,c)=>K.circ(x-2.5,y,4.6,{f:c})+K.circ(x+3.5,y,4.6,{f:c,o:.5}),
    (x,y,c)=>K.path(`M${x-5} ${y+5}V${y-5}L${x} ${y+1}L${x+5} ${y-5}V${y+5}`,{s:c,sw:2.4}),
    (x,y,c)=>K.path(`M${x-5.5} ${y}H${x+5.5}M${x} ${y-5.5}V${y+5.5}M${x-4} ${y-4}L${x+4} ${y+4}M${x+4} ${y-4}L${x-4} ${y+4}`,{s:c,sw:2}),
  ];
  return K.card(10,8,140,84,14)+K.icon("link",26,20.5,11,C.blue,1.7)+K.txt(35,23.6,"연동 서비스",{size:8.5,w:700})
   +[0,1,2,3,4,5,6,7].map(i=>{const x=20.5+(i%4)*31,y=32+Math.floor(i/4)*29;
     return i<7?K.rect(x,y,26,26,{f:P[i][0],r:8})+sh[i](x+13,y+13,P[i][1])
       :`<rect x="${x+.6}" y="${y+.6}" width="24.8" height="24.8" rx="8" style="fill:none;stroke:#B9C0CE;stroke-width:1.2;stroke-dasharray:3 3"/>`+K.icon("plus",x+13,y+13,10,C.mute,1.8)}).join("")};

TH2["체인지로그"]=K=>{const tag=(x,y,s,c,bg)=>K.rect(x,y,20,11,{f:bg,r:4})+K.txt(x+10,y+8.2,s,{size:7,w:700,fill:c,a:"middle"});
  return K.card(16,6,128,88,14)+K.line(30,20,30,84,{s:C.line,sw:1.2})
   +K.circ(30,18,3.5,{f:C.blue})+K.rect(38,12,26,12,{f:C.blue,r:6})+wtxt(51,20.7,"v2.1",7.5)+K.txt(70,20.6,"11월 20일",{size:7,fill:C.sub})
   +tag(38,30,"추가",C.green,"rgba(31,169,113,.14)")+gbar(63,33.5,60)
   +tag(38,44,"수정","#B87A12","rgba(242,169,59,.2)")+gbar(63,47.5,48)
   +K.circ(30,66,3.5,{f:"#C9D6FF"})+K.rect(38,60,26,12,{f:"#E7EAF2",r:6})+K.txt(51,68.7,"v2.0",{size:7.5,w:700,fill:C.sub,a:"middle"})+K.txt(70,68.6,"10월 2일",{size:7,fill:C.sub})
   +tag(38,77,"추가",C.green,"rgba(31,169,113,.14)")+gbar(63,80.5,52)};

TH2["로드맵"]=K=>{const cd=(x,y,c,w1,w2)=>K.card(x+4,y,36,24,7)+K.rect(x+8,y+5,10,3.5,{f:c,r:1.75})+gbar(x+8,y+12,w1,3)+gbar(x+8,y+17.5,w2,3);
  return ["지금","다음","나중"].map((s,i)=>{const x=10+i*48;return K.blk(x,8,44,84,10)+K.txt(x+22,22,s,{size:8,w:700,a:"middle",fill:i===0?C.blue:C.ink})}).join("")
   +cd(10,28,C.blue,28,18)+cd(10,56,C.blue,22,26)
   +cd(58,28,C.amber,26,20)+cd(58,56,C.amber,28,14)
   +`<g style="opacity:.6">`+cd(106,28,"#B9C0CE",24,18)+`</g>`};

TH2["스티키 CTA 바"]=K=>{const row=(y,alt)=>K.card(16,y,128,40,12)+photo(24,y+6,40,28,7,alt)+tbar(72,y+10,50)+gbar(72,y+20,60)+gbar(72,y+27,40);
  return A("n27scr",row(8,0)+row(54,true)+row(100,2)+row(146,0))
   +K.rect(0,74,160,26,{f:"#fff",fx:LIFT})+K.line(0,74,160,74,{s:C.line,sw:.8})
   +K.txt(14,91,"29,000원",{size:10,w:800})
   +K.rect(92,79,56,16,{f:C.blue,r:8})+wtxt(120,90,"구매하기",8.5)};
kf("n27scr",3.2,"0%,12%{transform:none}78%,90%{transform:translateY(-46px)}100%{transform:none}","transform-box:view-box;transform-origin:0 0");

TH2["커밍순 페이지"]=K=>K.card(14,8,132,84,14)+K.txt(80,30,"곧 만나요",{size:13,w:800,a:"middle"})+K.bar(56,37,48,3.5,SOFTBAR)
  +[["12","일"],["08","시간"],["45","분"]].map(([n,u],i)=>{const x=38+i*30;return K.rect(x,46,24,24,{f:C.soft,r:7})+K.txt(x+12,63,n,{size:13,w:800,fill:C.blue,a:"middle"})+K.txt(x+12,81,u,{size:7,fill:C.sub,a:"middle"})}).join("");

TH2["랜딩 페이지"]=K=>K.card(10,30,38,40,9)+K.txt(29,44,"광고",{size:7,w:700,fill:C.sub,a:"middle"})+K.bar(17,49,24,3)+K.rect(17,56,24,9,{f:C.blue,r:4.5})+K.fing(37,62)
  +dashLine("M49 50H59")
  +K.card(60,4,78,92,10)+K.circ(68,11,2.4,{f:C.ink})+K.rect(114,8,16,6,{f:C.blue,r:3})
  +K.rect(65,17,68,34,{f:C.blue,r:6})+K.txt(99,31,"30일 무료",{size:9,fill:"#fff",w:800,a:"middle"})
  +K.rect(81,36,36,10,{f:"#fff",r:5})+K.txt(99,43.5,"시작하기",{size:7,fill:C.blue,w:700,a:"middle"})
  +[0,1,2].map(i=>K.rect(65+i*23.5,55,21,17,{f:GREY,r:4})+K.circ(75.5+i*23.5,61,3,{f:"#C9D6FF"})+K.bar(69+i*23.5,66.5,13,2.5)).join("")
  +K.rect(77,77,44,12,{f:C.blue,r:6})+wtxt(99,85.5,"시작하기",7);

TH2["원페이지"]=K=>K.card(30,4,92,92,10)+K.circ(38,11,2.4,{f:C.ink})
  +[0,1,2,3].map(i=>K.rect(70+i*12,9.5,9,3,{f:i===0?C.blue:SOFTBAR,r:1.5})).join("")
  +K.rect(35,17,82,24,{f:"#E7EEFF",r:6})+tbar(42,24,34,4)+gbar(42,32,46,3)
  +K.rect(35,44,82,22,{f:"#FFF1E3",r:6})+[0,1,2].map(i=>K.circ(50+i*26,52,4,{f:"#F7C891"})+K.bar(42+i*26,59,16,2.5,"#EBCFAE")).join("")
  +K.rect(35,69,82,22,{f:"#E3F5EA",r:6})+K.rect(42,75,30,4,{f:"#57B894",r:2})+K.bar(42,82,46,3,"#BFE3CF")
  +K.rect(128,27,10,46,{f:"rgba(255,255,255,.75)",r:5})+[0,1,2].map(i=>K.circ(133,36+i*14,i===0?3:2.2,{f:i===0?C.blue:"#B9C0CE"})).join("");

TH2["쿠폰 배너"]=K=>K.blk(14,6,132,16,8)+K.blk(14,78,132,16,8)
  +`<path d="M20 28H100a4 4 0 0 0 8 0H140a8 8 0 0 1 8 8V64a8 8 0 0 1-8 8H108a4 4 0 0 0-8 0H20a8 8 0 0 1-8-8V36a8 8 0 0 1 8-8z" style="fill:${C.blue}" filter="${LIFT}"/>`
  +`<path d="M104 36V64" style="fill:none;stroke:rgba(255,255,255,.6);stroke-width:1.2;stroke-dasharray:2.5 3"/>`
  +K.txt(22,50,"10% 할인",{size:13,fill:"#fff",w:800})+K.txt(22,62,"첫 구매 쿠폰",{size:7.5,fill:"rgba(255,255,255,.85)"})
  +K.icon("download",126,45,13,"#fff",1.8)+K.txt(126,63,"받기",{size:7.5,fill:"#fff",w:700,a:"middle"});

TH2["회사 소개"]=K=>K.card(12,10,136,80,14)
  +K.txt(22,28,"회사 소개",{size:7,w:700,fill:C.blue})+K.txt(22,42,"더 쉬운 하루",{size:10,w:800})
  +gbar(22,49,56,3)+gbar(22,55,48,3)+gbar(22,61,52,3)
  +K.txt(22,80,"2019",{size:9,w:800})+K.txt(46,80,"설립",{size:7,fill:C.sub})
  +K.rect(88,18,52,64,{f:"#E7EEFF",r:9})+K.circ(128,30,5,{f:"#FFF6DE"})
  +K.rect(101,38,26,44,{f:"#6A86E8",r:2})
  +[0,1,2].map(r=>[0,1].map(c=>K.rect(106+c*9.5,43+r*9,6.5,5.5,{f:"#E7EEFF",r:1})).join("")).join("")+K.rect(110.5,72,7,10,{f:"#3F57B8",r:1});

TH2["환불 보증 배지"]=K=>{const cx=80,cy=44,G=C.green;
  const sc=Array.from({length:16},(_,i)=>{const a=i*Math.PI/8;return K.circ(cx+Math.cos(a)*26,cy+Math.sin(a)*26,5.6,{f:G})}).join("");
  return K.card(32,5,96,90,16)
   +`<path d="M66 62L59 90l9.5-5 6 7.5L80 68z" style="fill:#178A5B"/><path d="M94 62l7 28-9.5-5-6 7.5L80 68z" style="fill:#178A5B"/>`
   +sc+K.circ(cx,cy,27,{f:G})+K.circ(cx,cy,22.5,{s:"rgba(255,255,255,.6)",sw:1})
   +K.icon("check",80,29.5,8,"#fff",2.2)+K.txt(80,48,"30일",{size:14,fill:"#fff",w:800,a:"middle"})+K.txt(80,58.5,"환불 보증",{size:7.5,fill:"#fff",w:700,a:"middle"})};

/* ───────── sh · 공유 ───────── */
const post=K=>K.card(26,6,108,88,14)+fc(38,17,5,0)+tbar(47,15,30,4)+photo(34,26,92,40,8);

TH2["저장"]=K=>post(K)+K.icon("heart",42,79,12,C.mute,1.6)+K.icon("chat",59,79,12,C.mute,1.6)
  +K.circ(116,78.5,11,{f:C.soft})+fillIcon("bookmark",116,78.5,16,C.blue);

TH2["좋아요"]=K=>post(K)+K.circ(44,78.5,11,{f:"rgba(229,72,77,.12)"})+fillIcon("heart",44,79,16,C.red)+K.txt(59,82,"128",{size:9,w:700})
  +K.icon("chat",90,79,12,C.mute,1.6)+K.icon("bookmark",120,79,12,C.mute,1.6);

TH2["댓글"]=K=>K.card(16,6,128,88,14)+K.txt(28,21,"댓글 12",{size:8.5,w:700})
  +[0,1].map(i=>{const y=35+i*20;return fc(34,y,6.5,i+1)+tbar(46,y-5.5,[26,32][i],3.5)+gbar(46,y+1.5,[70,56][i],3.5)+K.icon("heart",129,y,7,C.mute,1.4)}).join("")
  +K.rect(24,70,112,17,{f:GREY,r:8.5})+K.txt(34,81.3,"댓글 달기",{size:7.5,fill:C.mute})+K.circ(126.5,78.5,6,{f:C.blue})+K.icon("q27up",126.5,78.5,7,"#fff",1.8);

TH2["답글 스레드"]=K=>K.card(16,6,128,88,14)
  +fc(32,22,7,1)+tbar(46,16,30,3.5)+gbar(46,23,78,3.5)+K.txt(46,38,"답글 2개",{size:7,w:700,fill:C.blue})
  +K.path("M32 32.5V48a6 6 0 0 0 6 6h6.5",{s:"#9DB4F5",sw:1.4})+K.path("M32 48V70a6 6 0 0 0 6 6h6.5",{s:"#9DB4F5",sw:1.4})
  +fc(52,54,6,2)+tbar(63,49,24,3.5)+gbar(63,55.5,60,3.5)
  +fc(52,76,6,3)+tbar(63,71,28,3.5)+gbar(63,77.5,46,3.5);

TH2["리액션"]=K=>{const INK="#6B4A00";
  const em=(cx,cy,r,t)=>K.circ(cx,cy,r,{f:"#FFCB45"})+K.circ(cx-r*.36,cy-r*.22,n2(r*.14),{f:INK})+K.circ(cx+r*.36,cy-r*.22,n2(r*.14),{f:INK})
    +(t===1?K.circ(cx,cy+r*.36,n2(r*.24),{f:INK}):K.path(`M${n2(cx-r*.45)} ${n2(cy+r*.2)}q${n2(r*.45)} ${n2(r*.55)} ${n2(r*.9)} 0`,{s:INK,sw:n2(r*.17)}));
  return K.rect(26,50,100,26,{f:"#fff",r:13,fx:LIFT})+gbar(38,55.5,64)+gbar(38,62.5,42)
   +K.card(22,10,116,30,15)+K.circ(60,25,11.5,{f:C.soft})
   +fillIcon("heart",40,25.5,15,C.red)+em(60,25,7.5,0)+fillIcon("q27thumb",80,24.5,15,"#F2A93B")+em(100,25,7.5,1)
   +K.circ(120,25,7.5,{f:"#EEF1F8"})+K.icon("plus",120,25,8,C.sub,1.8)
   +K.rect(34,69,30,15,{f:C.blueSoft,s:C.blue,sw:1.1,r:7.5})+em(44,76.5,4.6,0)+K.txt(55,79.4,"2",{size:8,w:700,fill:C.blue,a:"middle"})
   +K.rect(68,69,30,15,{f:"#fff",s:C.line,sw:1.1,r:7.5})+fillIcon("heart",78,76.8,9.5,C.red)+K.txt(89,79.4,"5",{size:8,w:700,fill:C.sub,a:"middle"})};

TH2["인용"]=K=>K.card(18,5,124,90,14)+fc(32,18,6,1)+tbar(43,13,30,3.5)+gbar(43,19.5,20,3)+K.txt(26,36,"이 말 진짜 맞다",{size:8,w:600})
  +K.rect(26,42,108,46,{f:"#fff",s:C.blue,sw:1.3,r:10})+fc(37,52,4.5,0)+tbar(45,50.5,24,3)
  +gbar(33,62,60,3)+gbar(33,68.5,48,3)+gbar(33,75,54,3)+photo(100,48,28,34,6);

TH2["핀 고정"]=K=>K.card(16,8,128,84,14)
  +K.rect(22,14,116,29,{f:C.soft,r:9})+K.icon("q27pin",34,28.5,14,C.blue,1.7)+K.txt(46,25.5,"고정됨",{size:7,w:700,fill:C.blue})+tbar(46,30.5,62,4.5)
  +[0,1].map(i=>{const y=48+i*20;return K.circ(34,y+9,6,{f:C.skel})+tbar(46,y+4,[44,52][i],3.5)+gbar(46,y+10.5,[64,50][i],3)}).join("");

TH2["신고"]=K=>K.blk(8,24,16,52,8)+K.blk(136,24,16,52,8)
  +K.card(30,5,100,90,14)+K.circ(46,20,8,{f:"rgba(229,72,77,.12)"})+K.icon("q27flag",46.5,20,10,C.red,1.8)+K.txt(59,23.3,"신고하기",{size:9,w:700})
  +["스팸","욕설 · 비방","거짓 정보"].map((s,i)=>{const y=38+i*12;return K.circ(44,y,4,{f:"#fff",s:i===1?C.red:"#B9C0CE",sw:1.4})+(i===1?K.circ(44,y,2,{f:C.red}):"")+K.txt(53,y+2.7,s,{size:7.5,w:i===1?700:500})}).join("")
  +K.rect(40,72,80,16,{f:C.red,r:8})+wtxt(80,83,"신고",8.5);

TH2["차단"]=K=>K.card(34,5,92,90,14)+face(80,32,17,"#E3E6EE","#B9C0CE")
  +K.circ(94,44,10,{f:"#fff"})+K.circ(94,44,7,{s:C.red,sw:2.2})+K.line(89.1,39.1,98.9,48.9,{s:C.red,sw:2.2})
  +tbar(60,58,40,4.5)+gbar(66,66,28,3)
  +K.rect(50,74,60,15,{f:"#fff",s:C.red,sw:1.3,r:7.5})+K.txt(80,84.3,"차단됨",{size:8,w:700,fill:C.red,a:"middle"});

TH2["뮤트"]=K=>K.card(14,10,132,80,14)
  +fc(32,31,9,1)+tbar(48,25,40,4.5)+gbar(48,34,56,3.5)+K.circ(126,31,7,{f:C.red})+K.txt(126,33.9,"3",{size:8,fill:"#fff",w:700,a:"middle"})
  +K.line(22,50,138,50,{s:C.line,sw:.7})
  +face(32,69,9,"#E3E6EE","#B9C0CE")+K.rect(48,63,40,4.5,{f:"#9AA1AE",r:2.25})+gbar(48,72,56,3.5)
  +K.circ(126,69,11,{f:C.soft})+K.icon("q27belloff",126,69,13,C.blue,1.7);

TH2["공개 범위"]=K=>K.card(26,8,108,84,14)+K.txt(38,23,"공개 범위",{size:8.5,w:700})
  +[["q27globe","전체 공개"],["user","친구만"],["lock","나만 보기"]].map(([ic,s],i)=>{const y=30+i*19,on=i===1;
    return (on?K.rect(32,y,96,17,{f:C.soft,r:8}):"")+K.icon(ic,44,y+8.5,11,on?C.blue:C.ink,1.6)
     +K.txt(54,y+11.4,s,{size:8,w:on?700:500,fill:on?C.blue:C.ink})+(on?K.icon("check",118,y+8.5,9,C.blue,2):"")}).join("");

TH2["태그하기"]=K=>{const c="b227t"+K.id();
  return K.rect(22,6,116,88,{f:"#fff",r:12,fx:LIFT})
   +`<defs><clipPath id="${c}"><rect x="22" y="6" width="116" height="88" rx="12"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(22,6,116,88,{f:"#DCE6FF"})+K.circ(112,44,10,{f:"#A9B9F0"})+K.circ(112,84,22,{f:"#A9B9F0"})
   +K.circ(62,36,13,{f:"#6A86E8"})+K.circ(62,86,29,{f:"#6A86E8"})+`</g>`
   +`<path d="M58 57l4-5.5 4 5.5z" style="fill:${C.toast}"/>`+K.rect(40,56.5,44,18,{f:C.toast,r:6})
   +K.icon("user",51,65.5,9,"#fff",1.6)+K.txt(59,68.6,"지은",{size:8.5,fill:"#fff",w:700})};

TH2["스토리"]=K=>{const g="b227s"+K.id();
  return `<defs>${K.grad(g,[[0,"#2F6BFF"],[1,"#FF6FA8"]])}</defs>`+K.card(8,10,144,54,14)
   +[32,64,96,128].map((x,i)=>(i===0?"":K.circ(x,32,12.5,{s:i===3?"#CBD2E0":`url(#${g})`,sw:2}))+fc(x,32,i===0?11:9.5,i)
     +(i===0?K.circ(40,40,5.5,{f:"#fff"})+K.circ(40,40,4.3,{f:C.blue})+K.icon("plus",40,40,5.5,"#fff",1.6):"")
     +K.bar(x-9,50.5,18,3.5,i===0?DARK:SOFTBAR)).join("")
   +K.blk(16,70,128,26,10)};

TH2["라이브"]=K=>{const c="b227l"+K.id();
  return K.rect(22,6,116,88,{f:"#2A2F3A",r:12,fx:LIFT})
   +`<defs><clipPath id="${c}"><rect x="22" y="6" width="116" height="88" rx="12"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.circ(80,46,15,{f:"#4A5263"})+K.circ(80,100,34,{f:"#4A5263"})+`</g>`
   +K.rect(30,14,36,14,{f:C.red,r:7})+A("n27blink",K.circ(38,21,2.2,{f:"#fff"}))+K.txt(53,23.8,"LIVE",{size:7.5,fill:"#fff",w:800,a:"middle"})
   +K.rect(70,14,40,14,{f:"rgba(0,0,0,.45)",r:7})+K.icon("eye",80,21,8,"#fff",1.5)+K.txt(97,23.8,"1.2천",{size:7.5,fill:"#fff",w:700,a:"middle"})
   +K.rect(30,66,44,9,{f:"rgba(255,255,255,.24)",r:4.5})+K.rect(30,78,58,9,{f:"rgba(255,255,255,.24)",r:4.5})
   +A("n27fl1",fillIcon("heart",124,76,11,C.red))+A("n27fl2",fillIcon("heart",117,60,8,"#FF8FA3"))};
kf("n27blink",2.4,"0%,100%{opacity:1}50%{opacity:.2}");
kf("n27fl1",3,"0%{opacity:0;transform:translateY(10px)}30%,60%{opacity:1;transform:none}100%{opacity:0;transform:translateY(-16px)}");
kf("n27fl2",3,"0%,20%{opacity:0;transform:translateY(10px)}50%,70%{opacity:1;transform:none}100%{opacity:0;transform:translateY(-12px)}");

TH2["조회수"]=K=>K.card(20,6,120,88,14)+photo(28,13,104,46,9)
  +K.circ(80,36,10,{f:"rgba(255,255,255,.92)"})+`<path d="M77.5 31.5l7.5 4.5-7.5 4.5z" style="fill:${C.ink};stroke:${C.ink};stroke-width:1.2"/>`
  +tbar(28,66,70,4.5)+K.icon("eye",35,82,12,C.blue,1.7)+K.txt(45,85.3,"조회수 1.2만회",{size:9,w:700,fill:C.blue});

TH2["공동 편집 커서"]=K=>{const cur=(x,y,col,s)=>`<path d="M${x} ${y}v13l3.6-3.4h5.4z" style="fill:${col};stroke:#fff;stroke-width:.9"/>`+K.rect(x+7,y+11,24,12,{f:col,r:6})+K.txt(x+19,y+19.7,s,{size:7,fill:"#fff",w:700,a:"middle"});
  return K.card(14,8,132,84,14)+tbar(26,20,50,5)+gbar(26,32,108)+K.rect(60,39,42,8,{f:"rgba(47,107,255,.2)",r:2})+gbar(26,41,96)+gbar(26,50,104)+gbar(26,59,70)+gbar(26,68,90)
   +A("n27c1",cur(102,44,C.blue,"지은"))+A("n27c2",cur(50,62,"#E5559A","민수"))};
kf("n27c1",3,"0%,100%{transform:none}50%{transform:translate(-16px,7px)}");
kf("n27c2",3,"0%,100%{transform:none}45%{transform:translate(20px,-9px)}");

TH2["코멘트 핀"]=K=>K.card(12,8,136,84,12)
  +K.rect(22,18,62,36,{f:GREY,r:6})+K.rect(22,60,62,10,{f:GREY,r:5})+K.rect(22,75,36,10,{f:C.skel,r:5})+K.rect(92,70,46,15,{f:GREY,r:6})
  +`<path d="M56 48V36a12 12 0 1 1 12 12z" style="fill:${C.blue};stroke:#fff;stroke-width:1.6" filter="${LIFT}"/>`+K.txt(68,39.8,"1",{size:10.5,fill:"#fff",w:800,a:"middle"})
  +K.card(86,20,56,42,10)+fc(97,31,5,1)+tbar(105,27,24,3)+gbar(105,33,14,2.5)+gbar(93,43,42,3)+gbar(93,49.5,30,3)
  +`<path d="M106 86V78.5a7.5 7.5 0 1 1 7.5 7.5z" style="fill:#fff;stroke:${C.blue};stroke-width:1.4"/>`+K.txt(113.5,81.2,"2",{size:7.5,fill:C.blue,w:800,a:"middle"});

TH2["버전 기록"]=K=>K.card(18,5,124,90,14)+K.icon("q27hist",31,18.5,11,C.ink,1.6)+K.txt(40,21.8,"버전 기록",{size:8.5,w:700})
  +K.line(31,38,31,80,{s:C.line,sw:1.2})
  +["오늘 14:20","어제 18:05","11월 12일"].map((s,i)=>{const y=29+i*20,on=i===1;
    return (on?K.rect(40,y,96,19,{f:C.soft,r:8}):"")+K.circ(31,y+9.5,3.2,{f:on?C.blue:"#fff",s:on?C.blue:"#B9C0CE",sw:1.4})
     +K.txt(46,y+9,s,{size:7.5,w:700,fill:on?C.blue:C.ink})+K.bar(46,y+12.5,[30,24,28][i],2.5,on?"#B9CBFA":SOFTBAR)
     +(on?K.rect(106,y+3.5,26,12,{f:C.blue,r:6})+wtxt(119,y+12.2,"복원",7.5):i===0?K.txt(132,y+11.5,"현재",{size:7,fill:C.sub,a:"end"}):"")}).join("");

TH2["딥링크"]=K=>K.card(8,36,68,28,14)+K.icon("link",22,50,12,C.blue,1.8)+K.txt(32,53,"상품 링크",{size:8,w:700,fill:C.blue})+K.line(32,56,66,56,{s:C.blue,sw:.8})
  +dashLine("M78 50H96")
  +K.rect(98,6,50,88,{f:"#1F2329",r:10,fx:LIFT})+K.rect(101,9,44,82,{f:"#fff",r:7.5})
  +K.icon("back",108,17.5,7,C.ink,1.8)+tbar(114,15.5,18,3.5)+photo(105,25,36,30,5,true)+tbar(105,60,26,4)+gbar(105,68,34,3)+K.rect(105,77,36,9,{f:C.blue,r:4.5})
  +K.circ(98,50,3.6,{f:"#fff"})+K.circ(98,50,2.4,{f:C.blue});

TH2["추천인 코드"]=K=>K.card(16,8,128,84,14)+K.rect(69,14,22,22,{f:C.soft,r:8})+K.icon("q27gift",80,25,13,C.blue,1.7)
  +K.txt(80,49,"친구도 나도 5천 원",{size:8.5,w:700,a:"middle"})
  +`<rect x="26" y="58" width="76" height="24" rx="8" style="fill:rgba(47,107,255,.06);stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`
  +`<text x="64" y="74.2" font-size="11" font-weight="800" text-anchor="middle" letter-spacing="1.5" style="fill:${C.ink}">AB12CD</text>`
  +K.rect(106,58,28,24,{f:C.blue,r:8})+K.icon("copy",120,70,11,"#fff",1.7);

TH2["PDF 내보내기"]=K=>`<path d="M52 8h38l18 18v60a6 6 0 0 1-6 6H52a6 6 0 0 1-6-6V14a6 6 0 0 1 6-6z" style="fill:#fff" filter="${LIFT}"/>`
  +`<path d="M90 8v12a6 6 0 0 0 6 6h12z" style="fill:#E1E5EE"/>`
  +gbar(56,34,40)+gbar(56,42,32)+gbar(56,50,36)
  +K.rect(36,60,42,21,{f:C.red,r:5,fx:LIFT})+K.txt(57,75,"PDF",{size:11.5,fill:"#fff",w:800,a:"middle"})
  +K.circ(112,76,13,{f:C.blue})+K.icon("download",112,76,14,"#fff",2);

TH2["인쇄"]=K=>K.rect(56,10,48,30,{f:"#fff",r:3,fx:LIFT})+gbar(64,18,32,3)+gbar(64,25,24,3)
  +K.rect(32,32,96,40,{f:"#4A5263",r:10,fx:LIFT})+K.circ(116,43,2.6,{f:C.green})+K.rect(100,41,9,4,{f:"#6B7385",r:2})
  +K.rect(48,56,64,5,{f:"#1F2329",r:2.5})
  +K.rect(53,58.5,54,35,{f:"#fff",r:3,fx:LIFT})+gbar(61,66,38,3)+gbar(61,73,30,3)+K.rect(61,79.5,20,9,{f:"#C9D6FF",r:2});
}
