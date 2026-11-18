// B2 그림 추가 8: sc(화면 유형) · sr(검색) · fb(피드백)
// 움직이는 부분은 class="b2x8 b2a-n8…". transform 속성이 있는 요소에는 클래스를 직접 달지 않고 겉 g 로 감싼다.
{
const A=(c,inner,st="")=>`<g class="b2x8 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x8{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
css(`@media (prefers-reduced-motion:reduce){.b2x8{animation:none}}`);
const n2=K.n2, C=K.C;
const KEY="#F2F4F8";

Object.assign(K.ICON,{
  q8mail:["M4 6h16v12H4z","M4 7l8 6 8-6"],
  q8wrench:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  q8clock:["M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17z","M12 7.5V12l3 2"],
  q8dcheck:["M2 12.5l4.5 4.5L15 8","M10.5 15.5L12 17l9.5-9"],
});
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=3.5)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
// 휴대폰 화면 한 장 (x 42~118, y 5~95)
const phone=f=>K.card(42,5,76,90,12,f);
const btn=(x,y,w,h,s,{f=C.blue,ink="#fff",size=7}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
const obtn=(x,y,w,h,s,size=7)=>K.rect(x,y,w,h,{f:"#fff",s:C.blue,sw:1.1,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:C.blue,w:700,a:"middle"});
const field=(x,y,w,h)=>K.rect(x,y,w,h,{f:"#F7F8FC",s:C.line,sw:.9,r:4});
const dots=(x,y,n,r=1.5,gap=5)=>Array.from({length:n},(_,i)=>K.circ(x+i*gap,y,r,{f:C.ink})).join("");
const toggle=(x,y,on)=>K.rect(x,y-4,14,8,{f:on?C.blue:"#D3D8E3",r:4})+K.circ(on?x+10:x+4,y,3,{f:"#fff"});
const radio=(cx,cy,on)=>K.circ(cx,cy,3.6,{f:"#fff",s:on?C.blue:"#C3C9D6",sw:1.2})+(on?K.circ(cx,cy,1.8,{f:C.blue}):"");
const tw=(s,size)=>[...s].reduce((a,ch)=>a+(ch===" "?.3:/[가-힣]/.test(ch)?1:.6),0)*size;

/* ───────── sc · 화면 유형 ───────── */
TH2["로그인 화면"]=K=>phone()
  +K.rect(72,11,16,16,{f:C.blue,r:5})+K.circ(80,19,3.2,{f:"#fff"})
  +field(50,33,60,12)+K.icon("user",57,39,7,C.mute,1.5)+gbar(64,37.3,28)
  +field(50,48,60,12)+K.icon("lock",57,54,7,C.mute,1.5)+dots(66,54,5)
  +btn(50,65,60,13,"로그인",{size:7.5})
  +gbar(66,84.5,28,2.5);

TH2["회원가입 화면"]=K=>phone()
  +K.txt(50,19,"회원가입",{size:8,w:700})
  +field(50,25,60,10.5)+K.icon("user",56.5,30.3,6.5,C.mute,1.5)+gbar(63,28.5,22)
  +field(50,38,60,10.5)+K.icon("q8mail",56.5,43.3,6.5,C.mute,1.5)+gbar(63,41.5,34)
  +field(50,51,60,10.5)+K.icon("lock",56.5,56.3,6.5,C.mute,1.5)+dots(64.5,56.3,5,1.4,4.6)
  +K.rect(50,65.5,8,8,{f:C.blue,r:2.5})+K.icon("check",54,69.5,6,"#fff",2)+gbar(62,67.8,34)
  +btn(50,78,60,12,"가입하기");

TH2["404 화면"]=K=>phone()
  +K.txt(80,42,"404",{size:25,fill:C.blue,w:800,a:"middle"})
  +K.txt(80,56,"길을 잃었어요",{size:7,w:700,a:"middle"})+gbar(64,61,32,2.5)
  +obtn(54,73,52,12,"홈으로");

TH2["점검 화면"]=K=>phone()
  +K.circ(80,31,15,{f:"#FFF1D6"})+K.icon("q8wrench",80,31,16,C.amber,1.8)
  +K.txt(80,58,"점검 중이에요",{size:7.5,w:700,a:"middle"})
  +K.rect(58,66,44,13,{f:KEY,r:6.5})+K.icon("q8clock",66,72.5,7.5,C.sub,1.6)+K.txt(72,75,"02~04시",{size:7,fill:C.sub});

TH2["강제 업데이트"]=K=>phone()
  +tbar(50,13,30,4)+gbar(50,21,56,3)
  +K.rect(42,5,76,90,{f:"rgba(40,50,110,.16)",r:12})
  +K.card(48,28,64,60,10)
  +K.circ(80,43,9.5,{f:C.blueSoft})+K.icon("download",80,43,11,C.blue,1.9)
  +K.txt(80,63,"업데이트 필요",{size:7,w:700,a:"middle"})
  +btn(54,70,52,12,"업데이트");

TH2["페이월"]=K=>phone()
  +tbar(50,13,36,4)+gbar(50,21,58,3)+K.rect(50,27,46,3,{f:"#D3D8E3",r:1.5,o:.55})+K.rect(50,33,54,3,{f:"#D3D8E3",r:1.5,o:.25})
  +K.circ(80,47,8,{f:"#FFF1D6"})+K.icon("lock",80,47,9.5,C.amber,1.8)
  +K.rect(50,59,60,14,{f:C.blueSoft,s:C.blue,sw:1.2,r:5})+K.txt(80,68.6,"월 4,900원",{size:7.5,fill:C.blue,w:700,a:"middle"})
  +btn(50,77,60,13,"구독하기",{size:7.5});

TH2["설정 화면"]=K=>phone()
  +K.txt(50,20,"설정",{size:9,w:700})
  +["bell","eye","lock","user"].map((ic,i)=>{const y=33+i*15;
    return K.rect(50,y-5.5,11,11,{f:i<2?C.blueSoft:KEY,r:3.5})+K.icon(ic,55.5,y,7.5,i<2?C.blue:C.sub,1.6)
      +gbar(66,y-1.75,[24,18,26,20][i])
      +(i<2?toggle(96,y,i===0):K.icon("next",106,y,7,C.mute,1.8))
      +(i<3?K.line(50,y+7.5,110,y+7.5,{s:"#EDF0F5",sw:.8}):"")}).join("");

TH2["프로필 화면"]=K=>phone()
  +K.circ(80,26,13,{f:C.blueSoft})+K.icon("user",80,26,14,C.blue,1.8)
  +K.txt(80,50,"김하늘",{size:8.5,w:700,a:"middle"})
  +[["12",58],["340",80],["28",102]].map(([s,x])=>K.txt(x,64,s,{size:8,w:700,a:"middle"})+gbar(x-6,67,12,2.5)).join("")
  +K.line(69,58,69,69,{s:C.line,sw:.8})+K.line(91,58,91,69,{s:C.line,sw:.8})
  +obtn(52,77,56,12,"프로필 편집");

TH2["결제 화면"]=K=>phone()
  +K.txt(50,19,"결제",{size:9,w:700})
  +K.rect(50,25,60,15,{f:C.blueSoft,s:C.blue,sw:1.2,r:5})+radio(58,32.5,true)
  +K.rect(66,28.5,12,8,{f:C.blue,r:2})+K.rect(66,30.6,12,1.8,{f:"#fff",o:.8})+K.txt(82,35,"카드",{size:7,w:700})
  +K.rect(50,43,60,15,{f:"#fff",s:C.line,sw:.9,r:5})+radio(58,50.5,false)+gbar(66,48.75,28)
  +K.line(50,63.5,110,63.5,{s:C.line,sw:.8})
  +K.txt(50,73,"합계",{size:7,fill:C.sub})+K.txt(110,73,"32,000원",{size:8,w:700,a:"end"})
  +btn(50,79,60,12,"결제하기");

TH2["약관 동의"]=K=>phone()
  +K.rect(50,12,60,17,{f:C.blueSoft,r:5})+K.circ(59,20.5,5,{f:C.blue})+K.icon("check",59,20.5,7,"#fff",2.2)
  +K.txt(68,23.2,"전체 동의",{size:7.5,w:700})
  +[1,1,0].map((req,i)=>{const y=39+i*12.5;
    return K.icon("check",55,y,8,C.blue,2.2)
      +K.txt(62,y+2.5,req?"필수":"선택",{size:7,fill:req?C.blue:C.mute,w:700})
      +gbar(79,y-1.75,[20,16,22][i])+K.icon("next",107,y,6.5,C.mute,1.8)}).join("")
  +btn(50,78,60,12,"다음");

TH2["상세 화면"]=K=>{const i=K.id(),g="b28g"+i,c="b28c"+i;
  return phone()
  +`<defs>${K.grad(g,[[0,"#AFC6FF"],[1,"#E5C8F3"]],0,1)}<clipPath id="${c}"><rect x="42" y="5" width="76" height="90" rx="12"/></clipPath></defs>`
  +`<g clip-path="url(#${c})">`+K.rect(42,5,76,42,{f:`url(#${g})`})+K.circ(100,19,5.5,{f:"#FFF6DE"})
  +`<path d="M42 47L64 26L80 39L94 29L118 44V47Z" style="fill:#6A86E8"/></g>`
  +K.circ(52,15,5.5,{f:"rgba(255,255,255,.9)"})+K.icon("back",51.5,15,6.5,C.ink,1.9)
  +K.rect(73,41,6,2.4,{f:"#fff",r:1.2})+K.circ(83,42.2,1.2,{f:"rgba(255,255,255,.6)"})+K.circ(87,42.2,1.2,{f:"rgba(255,255,255,.6)"})
  +tbar(50,53,40,4.5)+K.txt(50,69,"32,000원",{size:9,w:700})+gbar(50,72.5,52,3)
  +K.line(42,79,118,79,{s:"#EDF0F5",sw:.8})
  +K.rect(50,82,11,10,{f:"#fff",s:C.line,sw:.9,r:4})+K.icon("heart",55.5,87,6.5,C.sub,1.6)
  +btn(64,82,46,10,"구매하기")};

/* ───────── sr · 검색 ───────── */
TH2["필터 칩"]=K=>{let x=11;const H=20,Y=36,S=8;
  return K.blk(16,8,128,16,8)
  +[["무료배송",1],["새 상품",0],["할인",0]].map(([s,on])=>{const w=tw(s,S)+14+(on?10:0);
    const r=K.card(x,Y,w,H,H/2,on?C.blue:undefined)+(on?K.icon("check",x+11,Y+H/2,8,"#fff",2.2):"")
      +K.txt(x+(on?17:7),Y+H/2+S*.36,s,{size:S,fill:on?"#fff":C.ink,w:on?700:500});
    x+=w+6;return r}).join("")
  +K.blk(16,68,60,26,8)+K.blk(84,68,60,26,8)};

TH2["패싯 필터"]=K=>K.card(10,6,88,88,12)
  +K.txt(20,21,"종류",{size:7.5,w:700})
  +[["운동화","24",1],["샌들","12",0]].map(([s,n,on],i)=>{const y=32+i*12.5;
    return (on?K.rect(20,y-4.5,9,9,{f:C.blue,r:2.8})+K.icon("check",24.5,y,6.5,"#fff",2.2):K.rect(20,y-4.5,9,9,{f:"#fff",s:"#C3C9D6",sw:1,r:2.8}))
      +K.txt(34,y+2.5,s,{size:7,w:on?700:500})+K.txt(88,y+2.5,n,{size:7,fill:C.mute,a:"end"})}).join("")
  +K.line(20,54.5,88,54.5,{s:C.line,sw:.8})
  +K.txt(20,67,"색상",{size:7.5,w:700})
  +[["#12141A",0],[C.red,1],[C.amber,0],[C.green,0]].map(([f,on],i)=>{const x=26+i*16;
    return (on?K.circ(x,80,7.2,{s:C.blue,sw:1.3}):"")+K.circ(x,80,5,{f})}).join("")
  +K.blk(106,6,44,41,8)+K.blk(106,53,44,41,8);

TH2["음성 검색"]=K=>K.card(18,8,124,22,11)
  +K.icon("search",31,19,10,C.mute,1.8)+K.txt(40,21.8,"듣고 있어요",{size:8,fill:C.sub})+K.icon("mic",129,19,11,C.blue,1.8)
  +A("n8ring",K.circ(80,66,16,{f:C.blue}))+A("n8ring",K.circ(80,66,16,{f:C.blue}),"animation-delay:1.3s")
  +[[22,8],[29,16],[36,24],[43,12],[117,12],[124,24],[131,16],[138,8]].map(([x,h],i)=>
    A("n8wave",K.rect(x-1.75,66-h/2,3.5,h,{f:C.blue,r:1.75,o:.75}),`animation-delay:${n2((i%4)*.18)}s`)).join("")
  +K.card(64,50,32,32,16,C.blue)+K.icon("mic",80,66,17,"#fff",1.9);
kf("n8ring",2.6,"0%{transform:scale(1);opacity:.3}75%,100%{transform:scale(1.9);opacity:0}","animation-timing-function:ease-out;opacity:.18;");
kf("n8wave",2.6,"0%,100%{transform:scaleY(.45)}25%{transform:scaleY(1)}50%{transform:scaleY(.6)}75%{transform:scaleY(.95)}","animation-duration:1.3s;animation-timing-function:ease-in-out;");

TH2["결과 수 표시"]=K=>K.blk(16,8,128,16,8)
  +K.card(14,32,132,30,12)
  +K.txt(26,52,`총 <tspan style="fill:${C.blue};font-weight:800">128</tspan>개`,{size:13,w:700})
  +gbar(104,45,22,4)+K.icon("next",133,47,7,C.mute,1.8)
  +K.blk(16,69,128,11,5.5)+K.blk(16,84,128,11,5.5);

TH2["검색 범위 탭"]=K=>K.card(14,8,132,84,12)
  +K.rect(22,16,116,16,{f:KEY,r:8})+K.icon("search",32,24,9,C.mute,1.8)+K.txt(40,26.8,"운동화",{size:7.5})
  +["전체","상품","리뷰","사람"].map((s,i)=>K.txt(36+i*29.3,48,s,{size:8,fill:i===1?C.blue:C.sub,w:i===1?700:500,a:"middle"})).join("")
  +K.line(22,54,138,54,{s:C.line,sw:.8})+K.rect(52.3,52.6,26,2.8,{f:C.blue,r:1.4})
  +[0,1].map(i=>{const y=66+i*14;return K.rect(24,y-5,10,10,{f:C.skel,r:3})+gbar(40,y-4,[58,44][i])+gbar(40,y+1.5,[34,50][i],3)}).join("");

/* ───────── fb · 상태 · 피드백 ───────── */
TH2["원형 진행 표시"]=K=>K.blk(8,30,26,40,8)+K.blk(126,30,26,40,8)
  +K.card(42,10,76,80,18)
  +K.circ(80,50,24,{s:C.skel,sw:7})
  +`<g transform="rotate(-90 80 50)"><circle cx="80" cy="50" r="24" pathLength="100" class="b2x8 b2a-n8arc" style="fill:none;stroke:${C.blue};stroke-width:7;stroke-dasharray:100 100;stroke-dashoffset:28"/></g>`
  +K.txt(80,54.4,"72%",{size:12,w:800,a:"middle"});
kf("n8arc",3,"0%,8%{stroke-dashoffset:99}62%,90%{stroke-dashoffset:28}100%{stroke-dashoffset:99}");

TH2["업로드 진행"]=K=>K.card(14,16,132,68,14)
  +K.rect(24,25,26,26,{f:C.blueSoft,r:7})+K.icon("image",37,38,14,C.blue,1.6)
  +K.txt(57,36,"사진.jpg",{size:8,w:700})+K.txt(57,47,"올리는 중",{size:7,fill:C.sub})
  +K.circ(129,38,7,{f:KEY})+K.icon("x",129,38,7,C.sub,2)
  +K.rect(24,61,90,7,{f:C.skel,r:3.5})+A("n8up",K.rect(24,61,90,7,{f:C.blue,r:3.5}))
  +K.txt(136,67.2,"64%",{size:8,fill:C.blue,w:700,a:"end"});
kf("n8up",2.8,"0%,8%{transform:scaleX(.08)}62%,90%{transform:scaleX(.64)}100%{transform:scaleX(.08)}","transform-origin:0 50%;transform:scaleX(.64);");

TH2["읽음 표시"]=K=>K.blk(14,8,74,22,11)
  +K.card(60,38,86,28,14,C.blue)+K.txt(103,55.6,"잘 도착했어?",{size:9,fill:"#fff",w:700,a:"middle"})
  +K.card(96,73,50,17,8.5)+K.icon("q8dcheck",109,81.5,11,C.blue,2)+K.txt(119,84.8,"읽음",{size:9,fill:C.blue,w:700});

TH2["접속 상태 점"]=K=>K.blk(22,6,116,10,5)+K.blk(22,84,116,10,5)
  +K.card(22,22,116,56,16)
  +K.circ(54,50,18,{f:C.blueSoft})+K.icon("user",54,50,19,C.blue,1.8)
  +K.circ(67,63,7.5,{f:"#fff"})+K.circ(67,63,5.5,{f:C.green})
  +tbar(86,40,36)+K.txt(86,61,"접속 중",{size:8,fill:C.green,w:700});

TH2["흔들림 오류"]=K=>K.blk(24,10,112,14,7)
  +K.rect(13,34,120,28,{s:C.red,sw:1,r:10,o:.22})+K.rect(27,34,120,28,{s:C.red,sw:1,r:10,o:.22})
  +A("n8shake",K.card(20,34,120,28,10)+K.rect(20,34,120,28,{s:C.red,sw:1.6,r:10})
    +K.icon("lock",35,48,11,C.red,1.7)+dots(50,48,5,2.6,9))
  +K.txt(24,77,"비밀번호가 달라요",{size:8,fill:C.red,w:500});
kf("n8shake",2.6,"0%,22%{transform:none}27%{transform:translateX(-7px)}32%{transform:translateX(6px)}37%{transform:translateX(-5px)}42%{transform:translateX(4px)}47%{transform:translateX(-2px)}52%,100%{transform:none}","animation-timing-function:ease-in-out;");

TH2["좋아요 애니메이션"]=K=>K.card(40,12,80,76,16)
  +A("n8lring",K.circ(80,50,20,{s:C.red,sw:1.6,o:.45}))
  +A("n8burst",[0,1,2,3,4,5,6,7].map(k=>{const a=(k*45+22.5)*Math.PI/180,c=Math.cos(a),s=Math.sin(a);
    return K.line(80+c*25,50+s*25,80+c*31,50+s*31,{s:k%2?C.amber:C.red,sw:2.4})}).join(""))
  +A("n8pop",fillIcon("heart",80,50.5,34,C.red));
kf("n8pop",2.6,"0%,12%{transform:scale(.6);opacity:.3}26%{transform:scale(1.25);opacity:1}35%{transform:scale(.93);opacity:1}44%,86%{transform:scale(1);opacity:1}96%,100%{transform:scale(.6);opacity:.3}");
kf("n8burst",2.6,"0%,20%{transform:scale(.45);opacity:0}30%{opacity:1}48%{transform:scale(1);opacity:1}64%,100%{transform:scale(1.12);opacity:0}");
kf("n8lring",2.6,"0%,18%{transform:scale(.4);opacity:0}28%{opacity:1}50%,100%{transform:scale(1.15);opacity:0}");

TH2["드롭 영역 강조"]=K=>K.blk(14,6,132,10,5)
  +`<rect x="14" y="24" width="132" height="70" rx="14" style="fill:rgba(255,255,255,.55);stroke:#C3C9D6;stroke-width:1.2;stroke-dasharray:4 3"/>`
  +A("n8zone",`<rect x="14" y="24" width="132" height="70" rx="14" style="fill:#E3ECFF;stroke:${C.blue};stroke-width:1.8;stroke-dasharray:4 3"/>`
    +K.txt(80,86,"여기에 놓기",{size:8.5,fill:C.blue,w:700,a:"middle"}))
  +A("n8file",K.card(56,32,48,38,9)+K.rect(63,39,16,16,{f:C.blueSoft,r:4})+K.icon("image",71,47,10,C.blue,1.6)
    +tbar(84,41,14,3.5)+gbar(84,49,11,3)+gbar(63,61,34,3)+K.fing(99,66));
kf("n8zone",3,"0%,24%{opacity:0}46%,88%{opacity:1}100%{opacity:0}");
kf("n8file",3,"0%,10%{transform:translate(-38px,-22px)}46%,88%{transform:none}100%{transform:translate(-38px,-22px)}");
}
