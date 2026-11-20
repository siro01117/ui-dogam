
// B2 그림 보충 (N=23): in 폼 · 입력 24.
// 입력 칸 · 선택 도구가 주인공. 고른 값 · 눌린 자리만 파랑.
{
const C=K.C, n2=K.n2, W="#FFFFFF", BD="#C5CBD6", FAINT="#EEF1F8", DARK="#3A4050";
const A=(c,inner,st="")=>`<g class="b2x23 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x23{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);

const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DARK,r:h/2});            // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});       // 흰 면 위 글줄
const field=(x,y,w,h,r=6,s=C.line,sw=1,f=W)=>K.rect(x,y,w,h,{f,s,sw,r});
const raw=(d,style,extra="")=>`<path d="${d}" style="${style}"${extra?" "+extra:""}/>`;
// 꺾쇠: d = u d l r
const chev=(cx,cy,d,color=C.mute,s=3,sw=1.6)=>{const p={u:`M${cx-s} ${cy+s/2}L${cx} ${cy-s/2}L${cx+s} ${cy+s/2}`,d:`M${cx-s} ${cy-s/2}L${cx} ${cy+s/2}L${cx+s} ${cy-s/2}`,
  l:`M${cx+s/2} ${cy-s}L${cx-s/2} ${cy}L${cx+s/2} ${cy+s}`,r:`M${cx-s/2} ${cy-s}L${cx+s/2} ${cy}L${cx-s/2} ${cy+s}`}[d];return K.path(p,{s:color,sw})};
// 체크박스: st = 1 체크 · 0 빈 칸 · 2 일부
const cb=(x,y,s,st=1)=>st===0?K.rect(x+.5,y+.5,s-1,s-1,{f:W,s:BD,sw:1.1,r:n2(s*.28)})
  :K.rect(x,y,s,s,{f:C.blue,r:n2(s*.28)})+(st===2?K.line(x+s*.28,y+s/2,x+s*.72,y+s/2,{s:W,sw:n2(s*.16)})
  :K.path(`M${n2(x+s*.25)} ${n2(y+s*.52)}L${n2(x+s*.43)} ${n2(y+s*.7)}L${n2(x+s*.76)} ${n2(y+s*.32)}`,{s:W,sw:n2(s*.15)}));
// 글꼴을 고를 수 있는 글자
const T=(x,y,s,{size=9,fill=C.ink,w=500,a="start",ff=""}={})=>`<text x="${n2(x)}" y="${n2(y)}" font-size="${size}" font-weight="${w}" text-anchor="${a}"${ff?` font-family="${ff}"`:""} style="fill:${fill}">${s}</text>`;
const MONO="Consolas,'Courier New',monospace";
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b223p"+i,c="b223c"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const dots=(x,y,n,gap,r=2.5,f=C.ink)=>Array.from({length:n},(_,i)=>K.circ(x+i*gap,y,r,{f})).join("");

/* ───────── 묶음 · 흐름 ───────── */
TH2["필드셋"]=K=>K.card(12,6,136,88,14)
  +K.rect(22,20,116,64,{s:C.blue,sw:1.4,r:9})
  +K.rect(30,14,50,12,{f:W})+K.txt(34,23.5,"배송 정보",{size:9,fill:C.blue,w:700})
  +field(31,33,98,17)+gbar(38,39.5,40)
  +field(31,57,98,17)+gbar(38,63.5,58);

TH2["다단계 폼"]=K=>K.card(16,5,128,90,14)
  +K.line(46,20,80,20,{s:C.blue,sw:1.8})+K.line(80,20,114,20,{s:C.line,sw:1.8})
  +K.circ(46,20,7.5,{f:C.blue})+K.path("M42.6 20.2l2.4 2.4 4.4-5",{s:W,sw:1.6})
  +K.circ(80,20,7.5,{f:W,s:C.blue,sw:1.8})+K.txt(80,23,"2",{size:8.5,fill:C.blue,w:700,a:"middle"})
  +K.circ(114,20,7.5,{f:FAINT})+K.txt(114,23,"3",{size:8.5,fill:C.mute,w:700,a:"middle"})
  +field(28,36,104,13,5)+gbar(34,40.5,44)
  +field(28,54,104,13,5)+gbar(34,58.5,62)
  +K.rect(28,75,38,14,{f:W,s:C.line,r:7})+K.txt(47,84.8,"이전",{size:7.5,fill:C.sub,w:600,a:"middle"})
  +K.rect(88,75,44,14,{f:C.blue,r:7})+K.txt(110,84.8,"다음",{size:7.5,fill:W,w:700,a:"middle"});

TH2["조건부 필드"]=K=>K.card(16,8,128,84,14)+tbar(28,19,58)
  +K.circ(35,40,6,{f:W,s:BD,sw:1.2})+K.txt(46,43.2,"있음",{size:9,w:600})
  +K.circ(88,40,6,{f:W,s:BD,sw:1.2})+K.txt(99,43.2,"없음",{size:9,w:600})
  +A("n23cn",K.circ(88,40,6,{f:W,s:C.blue,sw:1.6})+K.circ(88,40,2.8,{f:C.blue}),"opacity:0")
  +A("n23cy",K.circ(35,40,6,{f:W,s:C.blue,sw:1.6})+K.circ(35,40,2.8,{f:C.blue}))
  +A("n23cf",K.path("M35 50v17h7",{s:BD,sw:1.2})+K.rect(44,56,88,22,{f:W,s:C.blue,sw:1.4,r:7})+K.rect(44,56,88,22,{f:C.soft,r:7})+gbar(52,65,46));
kf("n23cn",3,"0%,22%{opacity:1}30%,90%{opacity:0}100%{opacity:1}");
kf("n23cy",3,"0%,22%{opacity:0}30%,90%{opacity:1}100%{opacity:0}");
kf("n23cf",3,"0%,24%{opacity:0;transform:translateY(-8px)}42%,90%{opacity:1;transform:none}100%{opacity:0;transform:none}");

TH2["인풋 애드온"]=K=>K.card(18,16,124,28,8)
  +raw("M26 16h36v28h-36a8 8 0 0 1-8-8v-12a8 8 0 0 1 8-8z",`fill:${C.blueSoft}`)+K.line(62,16,62,44,{s:C.line})
  +K.txt(40,33,"https://",{size:8,fill:C.blue,w:700,a:"middle"})+gbar(70,28,48)
  +K.card(18,56,124,28,8)
  +raw("M112 56h22a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8h-22z",`fill:${C.blueSoft}`)+K.line(112,56,112,84,{s:C.line})
  +K.txt(127,73.5,"kg",{size:10,fill:C.blue,w:700,a:"middle"})+K.txt(30,74,"72",{size:11,w:700});

/* ───────── 틀이 있는 입력 ───────── */
TH2["숫자 입력"]=K=>K.blk(28,11,56,9,4.5)
  +K.card(28,29,104,42,10)+K.txt(42,57,"24",{size:19,w:700})
  +K.line(106,29,106,71,{s:C.line})+K.line(106,50,132,50,{s:C.line})
  +chev(119,39.5,"u",C.blue,4.5,2)+chev(119,60.5,"d",C.blue,4.5,2)
  +K.blk(28,80,78,8,4);

TH2["통화 입력"]=K=>K.blk(18,11,50,9,4.5)
  +K.card(18,28,124,44,12)+K.txt(30,57,"₩",{size:15,fill:C.blue,w:700})
  +K.txt(132,57.5,"1,250,000",{size:17,w:700,a:"end"})
  +K.blk(18,80,70,8,4);

TH2["전화번호 입력"]=K=>K.blk(10,11,50,9,4.5)
  +K.card(10,30,140,40,12)
  +K.rect(18,43.5,17,13,{f:W,s:C.line,sw:.8,r:2})+raw("M22.6 50a3.9 3.9 0 0 1 7.8 0z",`fill:${C.red}`)+raw("M22.6 50a3.9 3.9 0 0 0 7.8 0z",`fill:#3B63D9`)
  +K.txt(39,53.5,"+82",{size:9,w:700})+chev(60.5,50.5,"d",C.mute,2.6,1.4)
  +K.line(68,36,68,64,{s:C.line})
  +K.txt(75,53.5,"10-1234-5678",{size:9.5,w:600})
  +K.blk(10,80,74,8,4);

TH2["카드 번호 입력"]=K=>K.card(12,14,136,34,10)
  +K.rect(20,24.5,19,13,{f:C.blue,r:2.5})+K.rect(20,28,19,3,{f:"rgba(255,255,255,.6)"})+K.rect(22.5,33,6,2,{f:"rgba(255,255,255,.85)",r:1})
  +K.txt(45,34.5,"1234 5678",{size:9.5,w:600})
  +dots(99,31,4,5.5,1.8)+dots(124,31,4,5.5,1.8)
  +K.card(12,56,64,30,10)+K.txt(24,74.5,"MM/YY",{size:9,fill:C.mute,w:600})
  +K.card(84,56,64,30,10)+K.txt(96,74.5,"CVC",{size:9,fill:C.mute,w:600});

TH2["비밀번호 확인"]=K=>K.card(16,5,128,90,14)
  +gbar(26,13,34)+field(26,21,108,21,7)+dots(37,31.5,6,8.5)
  +K.txt(26,56,"한 번 더",{size:7.5,fill:C.sub,w:600})
  +field(26,61,108,21,7,C.green,1.4)+dots(37,71.5,6,8.5)
  +K.circ(122,71.5,6,{f:C.green})+K.path("M119 71.7l2.2 2.2 3.8-4.4",{s:W,sw:1.5});

/* ───────── 고르기 ───────── */
TH2["전체 동의 체크"]=K=>K.card(18,7,124,86,14)
  +cb(28,17,15)+K.txt(50,29,"전체 동의",{size:10.5,w:700})
  +K.line(28,41,132,41,{s:C.line})
  +[0,1,2].map(i=>{const y=53+i*14;return K.path(`M30.5 ${y}l3 3 5.5-6.2`,{s:C.blue,sw:1.7})+gbar(48,y-2,[60,46,66][i])+chev(128,y,"r",C.mute,2.6,1.3)}).join("");

TH2["옵션 셀렉터"]=K=>K.card(12,18,136,64,14)
  +K.txt(24,36,"사이즈",{size:8.5,fill:C.sub,w:600})
  +["S","M","L","XL"].map((s,i)=>{const x=22+i*30,on=i===1,off=i===3;
    return (on?K.rect(x,46,26,24,{f:W,s:C.blue,sw:1.6,r:7})+K.rect(x,46,26,24,{f:C.soft,r:7}):K.rect(x,46,26,24,{f:off?"#F3F5F9":W,s:C.line,r:7}))
     +K.txt(x+13,61.5,s,{size:9.5,fill:on?C.blue:off?"#B8BEC9":C.ink,w:700,a:"middle"})
     +(off?K.line(x+4,66,x+22,50,{s:"#C9CED8",sw:1}):"")}).join("");

TH2["색상 스와치"]=K=>K.blk(14,10,46,9,4.5)
  +K.card(14,28,132,46,14)
  +[C.ink,C.red,C.amber,C.green,W].map((f,i)=>K.circ(34+i*23,51,9,{f,s:f===W?BD:"none",sw:1})).join("")
  +K.circ(57,51,12.5,{s:C.blue,sw:1.8})+K.path("M53 51.2l2.8 2.8 5.2-6",{s:W,sw:1.8})
  +K.blk(14,82,70,8,4);

TH2["이미지 업로더"]=K=>K.card(12,12,136,76,14)
  +`<rect x="22" y="22" width="36" height="36" rx="8" style="fill:rgba(47,107,255,.06);stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`
  +K.icon("plus",40,36,13,C.blue,2)+K.txt(40,52.5,"2/5",{size:7.5,fill:C.blue,w:700,a:"middle"})
  +[62,102].map((x,i)=>photo(x,22,36,36,8,i===1)+K.circ(x+29.5,28.5,5,{f:"rgba(18,20,26,.72)"})+K.path(`M${x+27.5} 26.5l4 4M${x+31.5} 26.5l-4 4`,{s:W,sw:1.3})).join("")
  +gbar(22,68,72)+gbar(22,77,44);

TH2["이미지 크롭"]=K=>{const c="b223k"+K.id();
  return K.rect(20,8,120,84,{f:W,r:10,fx:"url(#b2lift)"})+photo(20,8,120,84,10)
  +`<defs><clipPath id="${c}"><rect x="20" y="8" width="120" height="84" rx="10"/></clipPath></defs>`
  +`<path d="M20 8h120v84h-120zM46 19h68v62h-68z" fill-rule="evenodd" clip-path="url(#${c})" style="fill:rgba(18,20,26,.55)"/>`
  +[68.67,91.33].map(x=>K.line(x,19,x,81,{s:W,sw:.6,o:.75})).join("")+[39.67,60.33].map(y=>K.line(46,y,114,y,{s:W,sw:.6,o:.75})).join("")
  +K.rect(46,19,68,62,{s:W,sw:1.1})
  +[[46,19,1,1],[114,19,-1,1],[46,81,1,-1],[114,81,-1,-1]].map(([x,y,a,b])=>K.path(`M${x} ${y+b*9}V${y}H${x+a*9}`,{s:C.blue,sw:3})).join("")};

TH2["트랜스퍼 리스트"]=K=>K.card(8,12,58,76,10)
  +K.rect(11,33,52,31,{f:C.soft,r:6})
  +[0,1,2,3].map(i=>{const y=20+i*15.5;return cb(15,y,9,i===1||i===2?1:0)+gbar(29,y+2.5,[24,28,20,26][i])}).join("")
  +K.card(94,12,58,76,10)
  +[0,1].map(i=>{const y=20+i*15.5;return cb(101,y,9,0)+gbar(115,y+2.5,[26,20][i])}).join("")
  +K.card(70,30,20,17,6,C.blue)+chev(80,38.5,"r",W,3.4,1.8)
  +K.card(70,53,20,17,6)+chev(80,61.5,"l",C.mute,3.4,1.8);

TH2["캐스케이더"]=K=>K.card(14,5,104,20,8)+K.txt(22,18.2,"서울 / 강남구",{size:8.5,w:600})+chev(108,15,"u",C.mute,2.8,1.4)
  +K.card(14,31,132,62,10)+K.line(78,36,78,88,{s:C.line})
  +K.rect(18,35,56,17,{f:C.soft,r:6})
  +["서울","경기","부산"].map((s,i)=>K.txt(25,47+i*18,s,{size:8.5,fill:i?C.ink:C.blue,w:i?500:700})+chev(68,43.8+i*18,"r",i?C.mute:C.blue,2.6,1.4)).join("")
  +["강남구","마포구","송파구"].map((s,i)=>K.txt(87,47+i*18,s,{size:8.5,fill:i?C.ink:C.blue,w:i?500:700})).join("")
  +K.path("M130 43.8l2.6 2.6 4.6-5.4",{s:C.blue,sw:1.6});

TH2["트리 셀렉트"]=K=>K.card(20,5,120,20,8)
  +K.rect(26,9.5,26,11,{f:C.blueSoft,r:5.5})+K.txt(39,17.8,"UI",{size:7.5,fill:C.blue,w:700,a:"middle"})+chev(130,15,"u",C.mute,2.8,1.4)
  +K.card(20,31,120,63,10)
  +K.path("M41.5 49v25.5h5M41.5 60h5",{s:C.line,sw:1})
  +chev(29,41.5,"d",C.sub,2.4,1.4)+cb(37,37,9,2)+K.txt(51,44.6,"디자인",{size:8.5,w:700})
  +cb(49,51.5,9,1)+K.txt(63,59.1,"UI",{size:8.5,fill:C.blue,w:700})
  +cb(49,66,9,0)+K.txt(63,73.6,"UX",{size:8.5})
  +chev(29,85,"r",C.sub,2.4,1.4)+cb(37,80.5,9,0)+K.txt(51,88.1,"개발",{size:8.5,w:700});

/* ───────── 쓰기 ───────── */
TH2["슬래시 커맨드"]=K=>K.card(14,5,132,90,14)+gbar(26,14,72)
  +K.txt(26,35,"/",{size:13,fill:C.blue,w:800})+K.line(33.5,25.5,33.5,37,{s:C.blue,sw:1.4})
  +K.card(24,42,104,48,10)
  +K.rect(28,45,96,14,{f:C.soft,r:5})
  +K.txt(37,55.2,"H",{size:9,fill:C.blue,w:800,a:"middle"})+K.txt(48,55,"제목",{size:8,fill:C.blue,w:700})
  +K.icon("list",37,66,9,C.sub,1.6)+K.txt(48,69,"할 일 목록",{size:8})
  +K.icon("image",37,80,9,C.sub,1.6)+K.txt(48,83,"이미지",{size:8});

TH2["자동 채움"]=K=>K.card(16,5,128,90,14)
  +field(26,13,108,19,6,"#EBD77A",1,"#FFF7CC")+K.txt(33,25.6,"hong@mail.com",{size:8.5,w:600})
  +field(26,37,108,19,6,"#EBD77A",1,"#FFF7CC")+dots(36,46.5,8,7,2.2)
  +K.card(34,62,100,28,10)+K.circ(48,76,7,{f:C.blueSoft})+K.icon("user",48,76,9,C.blue,1.7)
  +K.txt(60,74.5,"hong@mail.com",{size:8,w:700})+K.txt(60,84,"저장된 정보",{size:7,fill:C.sub});

TH2["마크다운 에디터"]=K=>{const b=s=>`<tspan style="fill:${C.blue}">${s}</tspan>`;
  return K.card(8,12,144,76,12)
  +raw("M20 12h60v76h-60a12 12 0 0 1-12-12v-52a12 12 0 0 1 12-12z","fill:#F4F6FA")+K.line(80,12,80,88,{s:C.line})
  +T(17,35,b("#")+" 제목",{size:9,ff:MONO,fill:C.sub,w:600})
  +T(17,53,b("**")+"굵게"+b("**"),{size:9,ff:MONO,fill:C.sub,w:600})
  +T(17,71,b("-")+" 목록",{size:9,ff:MONO,fill:C.sub,w:600})
  +K.txt(90,37,"제목",{size:14,w:800})
  +K.txt(90,54,"굵게",{size:9.5,w:800})
  +K.circ(92,67.8,1.7,{f:C.ink})+K.txt(98,71,"목록",{size:9})};

TH2["코드 에디터"]=K=>{const INK="#1F2329",row=(i,parts)=>{const y=19+i*13.5;let x=36;
    return T(27,y+5.4,i+1,{size:7,fill:"#7C8494",a:"end",ff:MONO})+parts.map(([dx,w,f])=>{x+=dx;const r=K.rect(x,y,w,5,{f,r:2.5});x+=w+4;return r}).join("")};
  return K.card(12,8,136,84,12,INK)
  +K.rect(12,43.5,136,10,{f:"rgba(255,255,255,.07)"})
  +K.line(31,14,31,86,{s:"rgba(255,255,255,.1)"})
  +row(0,[[0,16,"#C792EA"],[0,26,"#82AAFF"],[0,8,"#D6DCE8"]])
  +row(1,[[8,20,"#C792EA"],[0,14,"#D6DCE8"],[0,24,"#C3E88D"]])
  +row(2,[[8,14,"#82AAFF"],[0,30,"#FFCB6B"]])
  +K.rect(98,44.5,1.6,8,{f:"#FFFFFF"})
  +row(3,[[8,34,"#5C6677"]])
  +row(4,[[0,8,"#D6DCE8"]])};

/* ───────── 조절 · 평가 · 도움 ───────── */
TH2["다이얼"]=K=>{const cx=80,cy=52,pt=(p,r)=>{const t=(135+p*2.7)*Math.PI/180;return [n2(cx+r*Math.cos(t)),n2(cy+r*Math.sin(t))]};
  const arc="M54.54 77.46A36 36 0 1 1 105.46 77.46";
  return Array.from({length:11},(_,i)=>{const [a,b]=pt(i*10,41.5),[c,d]=pt(i*10,45);return K.line(a,b,c,d,{s:"#B9C1D4",sw:1.2})}).join("")
  +K.path(arc,{s:"#DCE1EC",sw:5})
  +`<path d="${arc}" pathLength="100" class="b2x23 b2a-n23arc" style="fill:none;stroke:${C.blue};stroke-width:5;stroke-dasharray:65 100"/>`
  +`<circle cx="${cx}" cy="${cy}" r="25" style="fill:#fff" filter="url(#b2lift)"/>`+K.circ(cx,cy,24.75,{s:C.hair,sw:.5})
  +A("n23knob",K.circ(cx,cy,25)+K.line(cx,32.5,cx,41,{s:C.blue,sw:3.2}),"transform:rotate(40.5deg)")};
kf("n23arc",3,"0%,10%{stroke-dasharray:30 100}45%,62%{stroke-dasharray:65 100}95%,100%{stroke-dasharray:30 100}");
kf("n23knob",3,"0%,10%{transform:rotate(-54deg)}45%,62%{transform:rotate(40.5deg)}95%,100%{transform:rotate(-54deg)}");

TH2["이모지 평점 입력"]=K=>{const face=(cx,cy,r,lv,on)=>{const ink=on?"#5A3A00":"#8C94A3",e=r*.34,
    m=[`M${n2(cx-r*.4)} ${n2(cy+r*.5)}Q${cx} ${n2(cy+r*.05)} ${n2(cx+r*.4)} ${n2(cy+r*.5)}`,
       `M${n2(cx-r*.4)} ${n2(cy+r*.44)}Q${cx} ${n2(cy+r*.22)} ${n2(cx+r*.4)} ${n2(cy+r*.44)}`,
       `M${n2(cx-r*.38)} ${n2(cy+r*.38)}H${n2(cx+r*.38)}`,
       `M${n2(cx-r*.42)} ${n2(cy+r*.22)}Q${cx} ${n2(cy+r*.68)} ${n2(cx+r*.42)} ${n2(cy+r*.22)}`,
       `M${n2(cx-r*.46)} ${n2(cy+r*.16)}Q${cx} ${n2(cy+r*.95)} ${n2(cx+r*.46)} ${n2(cy+r*.16)}Z`][lv];
    return K.circ(cx,cy,r,{f:on?"#FFC83D":"#E9EDF5"})+K.circ(cx-e,cy-r*.2,n2(r*.12),{f:ink})+K.circ(cx+e,cy-r*.2,n2(r*.12),{f:ink})
     +K.path(m,{s:ink,sw:n2(r*.15),f:lv===4?ink:"none"})};
  return K.blk(36,8,88,9,4.5)+K.card(12,24,136,56,16)
  +[30,54,78,104,130].map((x,i)=>face(x,i===3?46:47,i===3?11.5:8.5,i,i===3)).join("")
  +K.txt(104,71,"좋아요",{size:8,fill:C.blue,w:700,a:"middle"})};

TH2["도움말 팁"]=K=>K.card(14,42,132,48,12)
  +K.txt(24,58,"보안 코드",{size:9,w:700})
  +K.circ(74,54.8,6.5,{f:C.blueSoft,s:C.blue,sw:1.3})+K.txt(74,58,"?",{size:9,fill:C.blue,w:800,a:"middle"})
  +field(24,66,112,16,6)+gbar(31,72,30)
  +`<g filter="url(#b2lift)">`+K.rect(40,8,96,24,{f:C.toast,r:8})+raw("M68.5 31.5h11l-5.5 6.5z",`fill:${C.toast}`)+`</g>`
  +K.txt(88,23,"카드 뒷면 3자리",{size:8,fill:C.toastInk,w:600,a:"middle"});
}
