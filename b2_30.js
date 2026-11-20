// B2 그림 보충 (N=30): fb 상태 · 피드백 28
// 움직이는 부분은 class="b2x30 b2a-n30…". 멈춘 모습(애니메이션 없음)이 대표 모습.
{
const C=K.C, n2=K.n2;
const A=(c,inner,st="")=>`<g class="b2x30 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x30{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.4,0,.3,1)}`);

Object.assign(K.ICON,{
  q30warn:["M12 4l9 16H3z","M12 10v4.5","M12 17.3v.01"],
  q30dn:"M6 9l6 6 6-6",
  q30up:"M6 15l6-6 6 6",
  q30sync:["M20 11a8 8 0 0 0-14.3-4.3L4 8.5","M4 4v4.5h4.5","M4 13a8 8 0 0 0 14.3 4.3L20 15.5","M20 20v-4.5h-4.5"],
  q30clock:["M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z","M12 8v4.2l2.8 1.8"],
});
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b230p"+i,c="b230q"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
// 도는 고리 (옅은 원 + 4분의 1 호)
const spin=(cx,cy,r,col,sw)=>A("n30spin",K.circ(cx,cy,r,{s:col,sw,o:.22})+K.path(`M${cx} ${cy-r}A${r} ${r} 0 0 1 ${cx+r} ${cy}`,{s:col,sw}));
kf("n30spin",2.4,"0%{transform:none}100%{transform:rotate(720deg)}","animation-timing-function:linear");

/* ───────── 로딩 ───────── */
// 끝이 없는 막대: 파란 조각이 좌우로 흐른다
TH2["불확정 진행 바"]=K=>{const c="b230c"+K.id();
  return K.card(20,22,120,56,14)+tbar(34,35,52)+gbar(34,45,34)
   +K.rect(34,58,92,9,{f:"#E3E8F3",r:4.5})
   +`<defs><clipPath id="${c}"><rect x="34" y="58" width="92" height="9" rx="4.5"/></clipPath></defs><g clip-path="url(#${c})">`
   +A("n30ind",K.rect(60,58,40,9,{f:C.blue,r:4.5}))+`</g>`};
kf("n30ind",2.4,"0%{transform:translateX(-68px)}100%{transform:translateX(68px)}","animation-timing-function:cubic-bezier(.45,0,.55,1)");

// 영상이 멈추고 가운데서 고리가 돈다. 아래 막대는 받은 만큼만 밝다
TH2["버퍼링"]=K=>K.card(22,10,116,80,14,"#1F2329")
  +spin(80,42,12,"#FFFFFF",2.8)
  +K.rect(34,74,92,4,{f:"rgba(255,255,255,.2)",r:2})+K.rect(34,74,54,4,{f:"rgba(255,255,255,.5)",r:2})
  +K.rect(34,74,36,4,{f:C.blue,r:2})+K.circ(70,76,4.2,{f:"#FFFFFF"});

// 문구가 차례로 올라가며 바뀐다
TH2["단계별 로딩 문구"]=K=>{const i=K.id(),c="b230c"+i,g="b230g"+i;
  return K.card(18,18,124,64,14)+spin(38,50,8,C.blue,2.4)
   +`<defs><clipPath id="${c}"><rect x="52" y="23" width="88" height="54"/></clipPath>`
   +`<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".36" stop-color="#fff" stop-opacity="0"/><stop offset=".64" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>`
   +`<g clip-path="url(#${c})">`+A("n30msg",["주문 확인 중…","결제 처리 중…","거의 다 됐어요"].map((s,j)=>K.txt(56,35+j*18,s,{size:9,w:700})).join(""))+`</g>`
   +K.rect(52,23,88,54,{f:`url(#${g})`})};
kf("n30msg",3.2,"0%{opacity:0;transform:translateY(18px)}5%,24%{opacity:1;transform:translateY(18px)}34%,58%{opacity:1;transform:none}68%,92%{opacity:1;transform:translateY(-18px)}100%{opacity:0;transform:translateY(-18px)}");

// 하트는 벌써 찼는데 옆에서 아직 보내는 중
TH2["낙관적 업데이트"]=K=>K.card(20,12,120,76,14)
  +K.circ(36,28,7,{f:"#C9D6FF"})+tbar(49,23,42)+gbar(49,32,28)
  +gbar(30,44,100)+gbar(30,52,72)
  +fillIcon("heart",42,72,22,C.red)+K.txt(57,76,"13",{size:11,w:700})
  +spin(82,72,5,"#8A93A6",1.8);

// 위 줄은 다 떴고, 화면 아래 줄은 보일 때가 돼서야 뜬다
TH2["지연 로딩"]=K=>K.card(22,6,116,88,14)
  +[30,64,98].map((x,i)=>photo(x,14,32,34,7,i===1)).join("")
  +[30,64,98].map((x,i)=>K.rect(x,52,32,34,{f:"#E7EAF2",r:7})+K.icon("image",x+16,69,13,"#A9B1C1",1.4)
    +A("n30lz"+i,photo(x,52,32,34,7,i!==1),"opacity:0")).join("");
[0,1,2].forEach(i=>{const s=14+i*12;kf("n30lz"+i,3,`0%,${s}%{opacity:0}${s+18}%,88%{opacity:1}100%{opacity:0}`)});

// 빈 화면 한가운데서만 돈다
TH2["풀 페이지 로더"]=K=>K.card(20,8,120,84,12)
  +[30,36.5,43].map(x=>K.circ(x,15.5,1.9,{f:"#D3D8E3"})).join("")+K.line(20.5,23,139.5,23,{s:C.line,sw:.8})
  +spin(80,53,13,C.blue,3.2)+gbar(66,77,28);

// 화면은 그대로, 바뀌는 줄 옆에서만 작게 돈다
TH2["인라인 로딩"]=K=>K.card(18,12,124,76,14)
  +tbar(30,25.5,38)+gbar(106,26,24)
  +K.line(30,38,130,38,{s:C.line,sw:.8})
  +tbar(30,47.5,44)+spin(95,50,5,C.blue,2)+K.txt(104,53,"저장 중",{size:8,fill:C.blue,w:700})
  +K.line(30,62,130,62,{s:C.line,sw:.8})
  +tbar(30,71.5,30)+gbar(112,72,18);

/* ───────── 되돌리기 · 알림 상태 ───────── */
// 지운 자리는 점선으로 남고, 아래 띠에서 되돌린다
TH2["실행 취소"]=K=>K.blk(22,8,116,20,10)
  +`<rect x="22" y="34" width="116" height="20" rx="10" style="fill:rgba(255,255,255,.3);stroke:#A9B1C1;stroke-width:1;stroke-dasharray:3 3"/>`
  +K.card(16,64,128,28,14,C.toast)+K.txt(29,81,"삭제됨",{size:8,fill:"#FFFFFF"})
  +K.rect(76,69,62,18,{f:C.blue,r:9})+K.icon("undo",88,78,10,"#FFFFFF",1.7)+K.txt(97,81,"실행 취소",{size:8,fill:"#FFFFFF",w:700});

// 폼 맨 위에 틀린 곳을 모아 둔 빨간 상자
TH2["오류 요약"]=K=>K.card(20,6,120,88,14)
  +K.rect(28,13,104,36,{f:"#FDECEC",s:C.red,sw:1,r:8})+K.icon("alert",38,23.5,11,C.red,1.7)
  +K.txt(47,26.5,"오류 2개",{size:8,fill:"#C13539",w:700})
  +K.circ(38,35.5,1.3,{f:C.red})+K.rect(43,33.5,56,4,{f:"#EE9C9F",r:2})
  +K.circ(38,42.5,1.3,{f:C.red})+K.rect(43,40.5,40,4,{f:"#EE9C9F",r:2})
  +K.rect(28,55,104,13,{f:"#FFFFFF",s:C.red,sw:1.2,r:6})+gbar(35,59.5,40)
  +K.rect(28,73,104,13,{f:"#FFFFFF",s:C.line,sw:1,r:6})+gbar(35,77.5,54);

// 막지는 않고 노랑으로 조심하라고만
TH2["경고 상태"]=K=>K.card(20,18,120,64,14)
  +gbar(32,28,30)
  +K.rect(32,37,96,21,{f:"#FFFBF2",s:C.amber,sw:1.6,r:9})
  +[0,1,2,3,4].map(i=>K.circ(43+i*8,47.5,2.2,{f:C.ink})).join("")
  +K.icon("q30warn",115,47.5,13,"#D98A12",1.8)
  +K.txt(33,71,"비밀번호가 약해요",{size:7.5,fill:"#A9690B",w:600});

// 파랑 + i : 알아만 두라는 안내
TH2["정보 상태"]=K=>K.blk(24,8,112,14,7)
  +K.card(20,29,120,46,12,C.blueSoft)+K.rect(20.6,29.6,118.8,44.8,{s:C.blue,sw:1.2,r:12})
  +K.circ(40,52,10,{f:C.blue})+K.path("M40 51v6.5M40 46.6v.01",{s:"#FFFFFF",sw:2.4})
  +K.rect(58,43,52,5,{f:C.blue,r:2.5})+K.rect(58,53,68,4,{f:C.blue,r:2,o:.35})+K.rect(58,61,44,4,{f:C.blue,r:2,o:.35})
  +K.blk(24,82,80,9,4.5);

// 가 본 링크만 보라색
TH2["방문한 링크"]=K=>{const L=(y,s,col)=>`<text x="36" y="${y}" font-size="10.5" font-weight="600" text-decoration="underline" style="fill:${col}">${s}</text>`;
  return K.card(20,12,120,76,14)+L(36,"처음 보는 글",C.blue)+L(56,"이미 가 본 글","#7A3FC4")+L(76,"아직 안 본 글",C.blue)};

// 잡힌 줄은 떠서 기울고, 원래 자리는 빈칸
TH2["드래그 중"]=K=>K.card(24,8,104,22,10)+K.circ(38,19,5,{f:"#C9D6FF"})+tbar(49,16.5,44)
  +`<rect x="24" y="37" width="104" height="22" rx="10" style="fill:rgba(47,107,255,.07);stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`
  +K.card(24,66,104,22,10)+K.circ(38,77,5,{f:"#C9D6FF"})+tbar(49,74.5,36)
  +A("n30drag",`<g transform="rotate(-3 92 54)">`+K.card(40,42,104,24,11)+K.circ(54,54,5.5,{f:C.blue})+tbar(66,51.5,48)+`</g>`+K.fing(130,60));
kf("n30drag",2.8,"0%,100%{transform:none}50%{transform:translate(-7px,-9px)}");

// 위는 접힌 줄, 아래는 펼친 줄. 꺾쇠 방향이 다르다
TH2["펼침 · 접힘 상태"]=K=>K.card(22,8,116,22,10)+tbar(34,16.5,50)+K.icon("q30dn",125,19,12,"#8A93A6",1.9)
  +K.card(22,36,116,56,12)+tbar(34,45,58)+K.icon("q30up",125,47.5,12,C.blue,1.9)
  +K.line(34,58,126,58,{s:C.line,sw:.8})+gbar(34,65,84)+gbar(34,73,70)+gbar(34,81,52);

/* ───────── 딱지 · 표시 ───────── */
TH2["NEW 배지"]=K=>K.card(22,20,112,66,14)+photo(30,28,44,50,9)+tbar(82,36,40)+gbar(82,46,30)+K.rect(82,68,26,6,{f:"#3A4050",r:3})
  +K.rect(96,9,48,21,{f:C.blue,s:"#FFFFFF",sw:2,r:10.5})+K.txt(120,23.3,"NEW",{size:10,fill:"#FFFFFF",w:800,a:"middle"});

// 안 본 줄은 파란 점 + 진한 글씨, 본 줄은 흐리다
TH2["안 읽음 표시"]=K=>K.card(20,8,120,84,14)
  +[24,50,76].map((y,i)=>{const un=i<2;return (un?K.circ(31,y,3,{f:C.blue}):"")+K.circ(45,y,7,{f:un?"#C9D6FF":"#E7EAF2"})
    +(un?tbar(58,y-6,[48,40][i],5)+K.rect(58,y+3,[64,56][i],4,{f:"#8A93A6",r:2}):gbar(58,y-6,44,5)+K.rect(58,y+3,60,4,{f:"#E7EAF2",r:2}))
    +(i<2?K.line(28,y+13,132,y+13,{s:C.line,sw:.8}):"")}).join("");

// 말풍선 안에서 점 세 개가 차례로 튄다
TH2["입력 중 표시"]=K=>K.rect(72,12,68,22,{f:C.blue,r:11})+K.rect(83,21,46,4,{f:"rgba(255,255,255,.85)",r:2})
  +K.circ(30,68,9,{f:"#C9D6FF"})+K.card(44,50,64,34,17)
  +[0,1,2].map(i=>A("n30ty"+i,K.circ(62+i*14,67,4,{f:"#8A93A6"}))).join("");
[0,1,2].forEach(i=>{const a=i*8;kf("n30ty"+i,2.4,`0%,${a||.1}%{transform:none}${a+10}%{transform:translateY(-6px)}${a+20}%,${a+50}%{transform:none}${a+60}%{transform:translateY(-6px)}${a+70}%,100%{transform:none}`)});

// 빨간 점이 깜빡이고 시간이 흐른다
TH2["녹음 중 표시"]=K=>K.blk(30,8,100,12,6)+K.card(16,28,128,44,22)
  +A("n30rec",K.circ(37,50,7,{f:C.red}))+K.txt(51,54.6,"0:12",{size:13,w:700})
  +[8,16,10,22,14,24,12,18,8].map((h,i)=>A(i%2?"n30wa":"n30wb",K.rect(90+i*5,50-h/2,3,h,{f:"#8A93A6",r:1.5}))).join("")
  +K.blk(30,80,70,10,5);
kf("n30rec",2.4,"0%,40%,50%,90%,100%{opacity:1}45%,95%{opacity:.2}","animation-timing-function:linear");
kf("n30wa",2.4,"0%,50%,100%{transform:none}25%,75%{transform:scaleY(.45)}");
kf("n30wb",2.4,"0%,50%,100%{transform:none}25%,75%{transform:scaleY(1.3)}");

// 영상 귀퉁이의 빨간 LIVE 딱지
TH2["라이브 표시"]=K=>K.rect(20,10,120,80,{f:C.sf,r:14,fx:"url(#b2lift)"})+photo(20,10,120,80,14)
  +K.rect(28,18,50,20,{f:C.red,r:6})+A("n30live",K.circ(38,28,3.2,{f:"#FFFFFF"}))+K.txt(46,31.6,"LIVE",{size:10,fill:"#FFFFFF",w:800})
  +K.rect(92,18,40,20,{f:"rgba(18,20,26,.6)",r:6})+K.icon("eye",103,28,11,"#FFFFFF",1.5)+K.txt(111,31,"128",{size:8,fill:"#FFFFFF",w:700});
kf("n30live",2.4,"0%,50%,100%{opacity:1}25%,75%{opacity:.25}","animation-timing-function:linear");

// 화살표 두 개가 빙글 돈다
TH2["동기화 중"]=K=>K.card(24,10,112,80,14)+K.circ(80,42,20,{f:C.blueSoft})
  +A("n30sync",K.icon("q30sync",80,42,25,C.blue,2.1))+K.txt(80,79,"동기화 중",{size:9,w:700,a:"middle"});
kf("n30sync",2.4,"0%{transform:none}100%{transform:rotate(-360deg)}","animation-timing-function:linear");

TH2["연결 끊김"]=K=>K.card(24,8,112,84,14)+K.circ(80,36,19,{f:"#F1F3F7"})+K.icon("wifiOff",80,36,24,"#6B7280",1.9)
  +K.txt(80,70,"연결 끊김",{size:9,w:700,a:"middle"})+K.txt(80,82,"다시 연결 중…",{size:7.5,fill:C.sub,a:"middle"});

TH2["타임아웃"]=K=>K.card(24,8,112,84,14)+K.circ(80,33,16,{f:"#FDECEC",s:C.red,sw:2.4})+K.path("M80 23.5v10l6.5 4",{s:C.red,sw:2.4})
  +K.txt(80,64,"시간 초과",{size:9,w:700,a:"middle"})
  +K.rect(54,71,52,14,{f:"#FFFFFF",s:C.line,sw:1,r:7})+K.txt(80,80.8,"다시 시도",{size:7.5,fill:C.sub,w:600,a:"middle"});

// 첫 칸만 열려 있고 나머지는 자물쇠
TH2["잠김 상태"]=K=>K.rect(12,22,42,56,{f:C.sf,r:10,fx:"url(#b2lift)"})+photo(12,22,42,56,10)
  +[59,106].map(x=>K.card(x,22,42,56,10,"#E4E8F0")+K.icon("lock",x+21,48,20,"#7C8598",1.8)).join("");

// 사진이 흐려지고 버튼이 막힌 상품
TH2["품절"]=K=>K.card(36,6,88,88,14)+photo(44,14,72,44,9)+K.rect(44,14,72,44,{f:"rgba(255,255,255,.62)",r:9})
  +K.rect(58,25,44,22,{f:"rgba(18,20,26,.8)",r:11})+K.txt(80,39.8,"품절",{size:10.5,fill:"#FFFFFF",w:700,a:"middle"})
  +gbar(44,65,44)+K.rect(44,75,72,13,{f:"#E7EAF2",r:6.5})+K.rect(66,79.5,28,4,{f:"#BCC3D0",r:2});

// 회색이 된 쿠폰 위에 찍힌 도장
TH2["만료"]=K=>K.card(20,22,120,56,10,"#F1F3F7")
  +K.txt(31,53,"10%",{size:14,fill:"#B4BAC6",w:800})+K.rect(31,61,30,4,{f:"#D3D8E3",r:2})
  +`<line x1="68" y1="29" x2="68" y2="71" style="stroke:#C3C9D6;stroke-width:1.2;stroke-dasharray:3 3"/>`
  +`<g transform="rotate(-12 101 50)">`+K.rect(73,37,56,26,{f:"rgba(255,255,255,.82)",s:C.red,sw:1.8,r:5})+K.txt(101,54,"기간 만료",{size:10,fill:C.red,w:800,a:"middle"})+`</g>`;

// 요청은 갔고 아직 답을 기다리는 노란 딱지
TH2["대기 중"]=K=>K.card(24,14,112,72,14)+K.circ(41,32,8,{f:"#C9D6FF"})+tbar(55,26,46)+gbar(55,35.5,32)
  +K.line(34,48,126,48,{s:C.line,sw:.8})
  +K.rect(34,56,72,22,{f:"#FFF1D2",r:11})+K.icon("q30clock",48,67,14,"#A9690B",1.8)+K.txt(59,70.4,"대기 중",{size:9.5,fill:"#A9690B",w:700});

// 줄마다 지금 상태를 색 알약으로
TH2["상태 배지"]=K=>K.card(16,8,128,84,14)
  +[["완료","#E0F5EC",C.green,"#157A52"],["진행 중",C.blueSoft,C.blue,C.blue],["실패","#FDECEC",C.red,"#C13539"]].map(([s,bg,dot,ink],i)=>{const y=24+i*26;
    return tbar(28,y-2.5,[40,32,44][i])+K.rect(84,y-9.5,50,19,{f:bg,r:9.5})+K.circ(94,y,2.6,{f:dot})+K.txt(100,y+3,s,{size:8.5,fill:ink,w:700})
     +(i<2?K.line(28,y+13,132,y+13,{s:C.line,sw:.8}):"")}).join("");

// 끝낸 것은 체크, 위에는 몇 개 했는지
TH2["완료 체크리스트"]=K=>K.card(22,6,116,88,14)
  +K.txt(34,22.6,"2 / 3",{size:9,fill:C.blue,w:800})+K.rect(62,16,64,6,{f:"#E3E8F3",r:3})+K.rect(62,16,43,6,{f:C.blue,r:3})
  +[40,58,76].map((y,i)=>i<2?K.circ(41,y,7,{f:C.blue})+K.icon("check",41,y,9,"#FFFFFF",1.9)+K.rect(55,y-2.5,[52,44][i],5,{f:"#B4BAC6",r:2.5})
     :K.circ(41,y,6.4,{f:"#FFFFFF",s:"#C3C9D6",sw:1.5})+tbar(55,y-2.5,58)).join("");
}
