// B2 그림 추가 9: dt 차트 · mo 모션 · ge 제스처
// 움직이는 부분은 class="b2x9 b2a-n9…" (b2x9 = 이 파일 공통 속성). transform 속성이 있는 요소에는 클래스를 직접 달지 않고 겉 g 로 감싼다.
{
const A=(c,inner,st="")=>`<g class="b2x9 b2a-n9${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n9${name}{animation-name:b2a-n9${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n9${name}{${frames}}`);
css(`.b2x9{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const n2=K.n2, C=K.C;
const SOFT="#C9D6FF", MID="#9DB6FF";
const EIO="animation-timing-function:ease-in-out";
// 정지 모습에만 보이는 힌트 (움직일 때는 숨는다)
const S=inner=>A("so",inner);
kf("so",1,"0%,100%{opacity:0}");

// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b29p"+i,c="b29c"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const photoCard=(x,y,w,h,r,alt)=>K.rect(x,y,w,h,{f:C.sf,r,fx:"url(#b2lift)"})+photo(x,y,w,h,r,alt);
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});        // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});        // 흰 면 위 글줄
const dash=(x,y,w,h,r)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" style="fill:rgba(47,107,255,.06);stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`;
// 둥근 모서리로 잘라 내는 틀
const clip=(x,y,w,h,r,inner)=>{const c="b29k"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
// 차트 공통: 흰 면 + 가로 눈금 + 바닥선
const plot=()=>K.card(16,10,128,80,12)+[28,44,60].map(y=>K.line(28,y,132,y,{s:C.line,sw:.6})).join("");
const base=()=>K.line(28,76,132,76,{s:"#C5CBD6",sw:1.2});

/* ───────── dt · 차트 ───────── */
TH2["막대 차트"]=K=>plot()
  +[20,34,26,48,38].map((h,i)=>K.rect(33+i*20,76-h,13,h,{f:i===3?C.blue:SOFT,r:3})).join("")+base();

TH2["선 차트"]=K=>{const p=[[30,64],[50,52],[70,57],[90,38],[110,44],[130,24]];
  return plot()+base()
  +K.path("M"+p.map(q=>q.join(" ")).join("L"),{s:C.blue,sw:2.2})
  +p.map(([x,y])=>K.circ(x,y,2.8,{f:"#fff",s:C.blue,sw:1.6})).join("")};

const wedge=(cx,cy,r,a0,fr,f)=>{const p=t=>{const a=(t*360-90)*Math.PI/180;return n2(cx+r*Math.cos(a))+" "+n2(cy+r*Math.sin(a))};
  return `<path d="M${cx} ${cy}L${p(a0)}A${r} ${r} 0 ${fr>.5?1:0} 1 ${p(a0+fr)}Z" style="fill:${f};stroke:#fff;stroke-width:1.6"/>`};
TH2["파이 차트"]=K=>K.card(16,10,128,80,12)
  +wedge(54,50,29,0,.46,C.blue)+wedge(54,50,29,.46,.32,MID)+wedge(54,50,29,.78,.22,C.amber)
  +[[C.blue,38],[MID,30],[C.amber,24]].map(([c,w],i)=>{const y=36+i*14;return K.rect(94,y-3.5,7,7,{f:c,r:2})+K.bar(106,y-1.5,w,3)}).join("");

TH2["영역 차트"]=K=>{const d="28 58L48 48L68 54L88 36L108 42L132 24";
  return plot()
  +K.path("M28 76L"+d+"L132 76Z",{f:C.blue,s:"none",sw:0,o:.2})
  +K.path("M"+d,{s:C.blue,sw:2.2})+base()};

TH2["누적 막대 차트"]=K=>plot()
  +[[18,12,8],[26,16,10],[20,10,14],[30,18,10]].map((seg,i)=>{let y=76;const x=35+i*25;
    return seg.map((h,j)=>{y-=h;return K.rect(x,y+.6,15,h-1.2,{f:[C.blue,MID,C.amber][j],r:2})}).join("")}).join("")+base();

TH2["산점도"]=K=>K.card(16,10,128,80,12)
  +K.path("M30 20V76H134",{s:"#C5CBD6",sw:1.2})
  +[[38,68],[44,60],[50,65],[56,54],[62,59],[68,48],[74,53],[80,42],[86,48],[92,36],[100,41],[106,30],[114,35],[122,24],[98,60],[58,38]]
    .map(([x,y],i)=>K.circ(x,y,2.8,{f:C.blue,o:i>13?.4:.8})).join("");

TH2["레이더 차트"]=K=>{const cx=80,cy=54,R=34;
  const pt=(i,r)=>{const a=(i*72-90)*Math.PI/180;return n2(cx+R*r*Math.cos(a))+" "+n2(cy+R*r*Math.sin(a))};
  const poly=r=>"M"+[0,1,2,3,4].map(i=>pt(i,typeof r==="number"?r:r[i])).join("L")+"Z";
  const v=[.92,.62,.8,.5,.76];
  return K.card(16,6,128,88,12)
  +[1,.66,.33].map(r=>K.path(poly(r),{s:C.line,sw:.8})).join("")
  +[0,1,2,3,4].map(i=>`<path d="M${cx} ${cy}L${pt(i,1)}" style="fill:none;stroke:${C.line};stroke-width:.8"/>`).join("")
  +K.path(poly(v),{f:C.blue,s:"none",sw:0,o:.22})+K.path(poly(v),{s:C.blue,sw:1.8})
  +v.map((r,i)=>{const [x,y]=pt(i,r).split(" ");return K.circ(+x,+y,2.3,{f:C.blue})}).join("")};

TH2["KPI 카드"]=K=>K.blk(14,8,60,12,6)+K.blk(14,82,132,10,5)
  +K.card(20,26,120,50,14)
  +K.txt(32,43,"이번 달 매출",{size:7.5,fill:C.sub})
  +K.txt(32,66,"1,280만",{size:18,w:700})
  +K.rect(98,34,32,13,{f:"rgba(31,169,113,.14)",r:6.5})
  +K.path("M103 43l3-5 3 5z",{f:C.green,s:C.green,sw:.8})+K.txt(112,43.2,"12%",{size:7.5,w:700,fill:C.green});

TH2["리더보드"]=K=>K.card(20,6,120,88,14)
  +[0,1,2].map(i=>{const y=12+i*26;
    return (i?"":K.rect(26,y,108,22,{f:C.soft,r:9}))
    +K.txt(37,y+14.6,i+1,{size:10,w:700,fill:i?C.sub:C.blue,a:"middle"})
    +K.circ(54,y+11,7,{f:[C.blue,MID,SOFT][i]})
    +tbar(67,y+8.5,[32,26,29][i],5)
    +K.txt(128,y+14,["980","870","815"][i],{size:8,w:700,a:"end"})}).join("");

TH2["증감 표시"]=K=>K.blk(14,8,132,14,7)+K.blk(14,78,132,14,7)
  +K.card(14,28,62,44,14)+K.path("M23 56l6.5-11 6.5 11z",{f:C.green,s:C.green,sw:1})+K.txt(41,56.5,"12%",{size:13,w:700,fill:C.green})
  +K.card(84,28,62,44,14)+K.path("M95 45l6.5 11 6.5-11z",{f:C.red,s:C.red,sw:1})+K.txt(113,56.5,"3%",{size:13,w:700,fill:C.red});

TH2["범례"]=K=>K.blk(14,50,11,36,4)+K.blk(29,32,11,54,4)+K.blk(44,44,11,42,4)
  +K.card(64,14,82,72,14)
  +[[C.blue,"서울"],[MID,"부산"],[C.amber,"제주"]].map(([c,s],i)=>{const y=33+i*17;
    return K.rect(77,y-5.5,11,11,{f:c,r:3.5})+K.txt(95,y+3.4,s,{size:9.5,w:600})}).join("");

/* ───────── mo · 모션 ───────── */
TH2["슬라이드 인"]=K=>K.blk(16,8,128,12,6)+K.blk(16,80,128,12,6)
  +A("sli",K.card(24,26,112,48,14)+photo(32,34,32,32,8)+tbar(72,41,48)+gbar(72,51,36)+gbar(72,59,44),"transform:translateX(-36px)");
kf("sli",2.8,"0%,10%{opacity:1;transform:translateX(-140px)}42%,86%{opacity:1;transform:none}96%{opacity:0;transform:none}100%{opacity:0;transform:translateX(-140px)}");

TH2["플립"]=K=>K.blk(12,30,24,40,8)+K.blk(124,30,24,40,8)
  +A("flf",photoCard(46,14,68,72,12),"transform:scaleX(.62) skewY(-8deg)")
  +A("flb",K.card(46,14,68,72,12,C.blue)+K.rect(56,28,34,6,{f:"#fff",r:3})+K.rect(56,42,48,4,{f:"#fff",r:2,o:.6})+K.rect(56,51,40,4,{f:"#fff",r:2,o:.6})+K.rect(56,60,44,4,{f:"#fff",r:2,o:.6}),"transform:scaleX(0)");
kf("flf",3,"0%,12%{transform:none}24%,74%{transform:scaleX(0)}86%,100%{transform:none}",EIO);
kf("flb",3,"0%,24%{transform:scaleX(0)}36%,62%{transform:none}74%,100%{transform:scaleX(0)}",EIO);

TH2["펄스"]=K=>K.blk(14,10,132,14,7)+K.blk(14,76,132,14,7)
  +K.card(24,32,112,36,18)
  +A("pu1",K.circ(48,50,7,{f:C.blue}),"opacity:.3;transform:scale(1.7)")+A("pu2",K.circ(48,50,7,{f:C.blue}),"opacity:.14;transform:scale(2.4)")
  +K.circ(48,50,6.5,{f:C.blue})+K.txt(66,54.2,"방송 중",{size:12,w:700});
kf("pu1",2.6,"0%{opacity:.5;transform:none}44%,100%{opacity:0;transform:scale(2.5)}","animation-timing-function:ease-out");
kf("pu2",2.6,"0%,50%{opacity:.5;transform:none}94%,100%{opacity:0;transform:scale(2.5)}","animation-timing-function:ease-out");

TH2["바운스"]=K=>K.blk(14,8,40,12,6)
  +K.card(24,72,112,18,9)+gbar(36,79,54)
  +S(`<path d="M30 28Q41 28 45 59Q54 20 63 59Q69 42 75 59" style="fill:none;stroke:${C.blue};stroke-width:1.6;stroke-dasharray:1 4;opacity:.7"/>`)
  +A("bnc",K.circ(80,59,13,{f:C.blue})+K.icon("bell",80,59,15,"#fff",1.8));
{const dn="animation-timing-function:cubic-bezier(.5,0,1,.6)", up="animation-timing-function:cubic-bezier(0,.4,.5,1)";
kf("bnc",2.8,`0%{opacity:0;transform:translateY(-46px)}4%{opacity:1;transform:translateY(-46px);${dn}}24%{transform:none;${up}}37%{transform:translateY(-22px);${dn}}50%{transform:none;${up}}59%{transform:translateY(-9px);${dn}}68%,90%{opacity:1;transform:none}100%{opacity:0;transform:none}`);}

TH2["모핑"]=K=>K.blk(12,40,26,20,8)+K.blk(122,40,26,20,8)
  +K.card(48,18,64,64,20)
  +S([45,-45].map(a=>`<g transform="rotate(${a} 80 50)">`+K.rect(62,47.5,36,5,{f:C.blue,r:2.5,o:.28})+`</g>`).join(""))
  +A("mp1",K.rect(62,37.5,36,5,{f:C.ink,r:2.5}))+A("mp2",K.rect(62,47.5,36,5,{f:C.ink,r:2.5}))+A("mp3",K.rect(62,57.5,36,5,{f:C.ink,r:2.5}));
kf("mp1",3,"0%,18%{transform:none}46%,74%{transform:translateY(10px) rotate(45deg)}96%,100%{transform:none}",EIO);
kf("mp2",3,"0%,18%{opacity:1;transform:none}40%,78%{opacity:0;transform:scaleX(.2)}96%,100%{opacity:1;transform:none}",EIO);
kf("mp3",3,"0%,18%{transform:none}46%,74%{transform:translateY(-10px) rotate(-45deg)}96%,100%{transform:none}",EIO);

TH2["리플"]=K=>K.blk(14,10,132,14,7)+K.blk(14,76,132,14,7)
  +K.card(24,32,112,36,18)
  +clip(24,32,112,36,18,A("rp",K.circ(56,50,82,{f:"rgba(47,107,255,.2)"}),"transform:scale(.36)"))
  +K.txt(80,54.4,"확인",{size:12,w:700,a:"middle"})
  +A("rpf",K.fing(56,50));
kf("rp",2.8,"0%,14%{opacity:0;transform:scale(0)}16%{opacity:1;transform:scale(.06)}60%{opacity:1;transform:none}80%,100%{opacity:0;transform:none}","animation-timing-function:ease-out");
kf("rpf",2.8,"0%,6%{opacity:0}12%,30%{opacity:1}42%,100%{opacity:0}");

TH2["호버 리프트"]=K=>K.blk(10,28,40,46,10)+K.blk(110,28,40,46,10)
  +A("hls",K.rect(63,75,34,6,{f:"rgba(75,91,168,.2)",r:3}),"transform:translateY(3px)")
  +A("hl",K.card(56,24,48,54,12)+photo(62,30,36,24,7)+tbar(62,60,26,4)+gbar(62,68,34,3.5),"transform:translateY(-8px) scale(1.05)")
  +A("hlc",`<g transform="translate(88 54)"><path d="M0 0v15l4.2-3.6 2.8 6.4 2.6-1.1-2.8-6.3H12z" style="fill:#fff;stroke:${C.ink};stroke-width:1.3"/></g>`);
kf("hl",3,"0%,24%{transform:none}44%,78%{transform:translateY(-8px) scale(1.05)}96%,100%{transform:none}");
kf("hls",3,"0%,24%{opacity:0;transform:none}44%,78%{opacity:1;transform:translateY(3px)}96%,100%{opacity:0;transform:none}");
kf("hlc",3,"0%{opacity:0;transform:translate(40px,28px)}8%{opacity:1;transform:translate(40px,28px)}28%,76%{opacity:1;transform:none}92%{opacity:1;transform:translate(40px,28px)}100%{opacity:0;transform:translate(40px,28px)}",EIO);

TH2["마키"]=K=>K.blk(14,10,132,16,8)+K.blk(14,74,132,16,8)
  +K.card(10,36,140,28,14)
  +clip(10,36,140,28,14,A("mq",[0,1,2].map(i=>K.txt(20+i*120,54.2,"오늘만 무료 배송",{size:11,w:700})+K.icon("star",122+i*120,50,10,C.blue,1.8)).join("")));
kf("mq",3,"0%{transform:translateX(0)}100%{transform:translateX(-120px)}","animation-timing-function:linear");

TH2["스크롤 스냅"]=K=>dash(39,15,82,62,15)
  +A("sn",[0,1,2,3].map(i=>photoCard(-42+i*84,18,76,56,13,i%2===0)).join(""))
  +[0,1,2].map(i=>K.circ(72+i*8,88,2,{f:C.mute})).join("")
  +A("snf",K.fing(112,48));
kf("sn",3,"0%{opacity:0;transform:none}6%{opacity:1;transform:none}12%{opacity:1;transform:none;animation-timing-function:linear}40%,47%{opacity:1;transform:translateX(-50px)}57%,86%{opacity:1;transform:translateX(-84px)}94%,100%{opacity:0;transform:translateX(-84px)}");
kf("snf",3,"0%,7%{opacity:0;transform:none}12%{opacity:1;transform:none;animation-timing-function:linear}40%{opacity:1;transform:translateX(-50px)}47%,100%{opacity:0;transform:translateX(-50px)}");

/* ───────── ge · 제스처 ───────── */
TH2["스크롤"]=K=>K.card(30,4,100,92,14)
  +clip(30,4,100,92,14,A("scl",[0,1,2,3,4,5,6,7].map(i=>{const y=10+i*20;return K.circ(46,y+8,6,{f:i%3?SOFT:MID})+tbar(58,y+3,[36,28,40,32][i%4],4)+gbar(58,y+10,[52,44,48,38][i%4],3.5)}).join("")))
  +A("sct",K.rect(124,10,3,26,{f:C.mute,r:1.5}))
  +A("scf",K.fing(96,72));
kf("scl",2.8,"0%{transform:none}12%{transform:none;animation-timing-function:linear}52%,80%{transform:translateY(-56px)}96%,100%{transform:none}");
kf("sct",2.8,"0%{transform:none}12%{transform:none;animation-timing-function:linear}52%,80%{transform:translateY(30px)}96%,100%{transform:none}");
kf("scf",2.8,"0%,6%{opacity:0;transform:none}12%{opacity:1;transform:none;animation-timing-function:linear}52%{opacity:1;transform:translateY(-56px)}62%,100%{opacity:0;transform:translateY(-56px)}");

TH2["플릭"]=K=>K.blk(14,8,132,14,7)+K.blk(14,80,132,12,6)
  +A("flr",[0,1,2,3,4,5,6,7].map(i=>photoCard(14+i*50,30,44,42,10,i%2===1)).join(""))
  +A("flt",K.rect(84,45,40,12,{f:"rgba(47,107,255,.22)",r:6}),"transform-origin:right center")
  +A("flk",K.fing(120,51),"transform:translateX(-36px)");
kf("flr",3,"0%{opacity:0;transform:none}6%{opacity:1;transform:none}13%{opacity:1;transform:none;animation-timing-function:cubic-bezier(.05,.7,.1,1)}72%,86%{opacity:1;transform:translateX(-250px)}94%,100%{opacity:0;transform:translateX(-250px)}");
kf("flt",3,"0%,12%{opacity:0;transform:scaleX(0)}13%{opacity:1;transform:scaleX(0)}19%{opacity:1;transform:none}30%,100%{opacity:0;transform:none}");
kf("flk",3,"0%,7%{opacity:0;transform:none}11%,13%{opacity:1;transform:none}19%{opacity:1;transform:translateX(-36px)}25%,100%{opacity:0;transform:translateX(-36px)}");

TH2["팬"]=K=>K.card(18,8,124,84,14)
  +clip(18,8,124,84,14,A("pn",
    K.rect(-14,-10,204,146,{f:"#EAF0FB"})
    +K.rect(-14,-10,60,40,{f:"#D5EEDD",r:8})+K.rect(96,60,50,36,{f:"#D5EEDD",r:8})+K.rect(150,-10,40,60,{f:"#CFE0FF",r:8})+K.rect(20,96,60,40,{f:"#CFE0FF",r:8})
    +K.line(-14,46,190,34,{s:"#fff",sw:7})+K.line(62,-10,84,136,{s:"#fff",sw:7})+K.line(-14,100,190,112,{s:"#fff",sw:5})+K.line(128,-10,120,136,{s:"#fff",sw:5})
    +K.circ(104,24,6,{f:C.red})+K.circ(104,24,2.2,{f:"#fff"})))
  +A("pnf",K.fing(94,58));
kf("pn",3.2,"0%,10%{transform:none}36%,44%{transform:translate(-26px,-16px)}70%,78%{transform:translate(8px,-24px)}96%,100%{transform:none}",EIO);
kf("pnf",3.2,"0%,4%{opacity:0;transform:none}10%{opacity:1;transform:none}36%,44%{opacity:1;transform:translate(-26px,-16px)}70%,78%{opacity:1;transform:translate(8px,-24px)}96%{opacity:1;transform:none}100%{opacity:0;transform:none}",EIO);

TH2["두 손가락 회전"]=K=>K.blk(14,10,40,12,6)
  +S(dash(54,24,52,52,12))
  +A("rtp",photoCard(54,24,52,52,12),"transform:rotate(24deg)")
  +A("rtf",K.fing(56,72)+K.fing(104,28),"transform:rotate(24deg)");
kf("rtp",2.8,"0%,14%{transform:none}50%,70%{transform:rotate(70deg)}94%,100%{transform:none}",EIO);
kf("rtf",2.8,"0%,14%{transform:none}50%,70%{transform:rotate(70deg)}94%,100%{transform:none}",EIO);

TH2["흔들기"]=K=>A("sha",K.path("M38 34q-6 16 0 32",{s:C.blue,sw:2})+K.path("M28 28q-9 22 0 44",{s:C.blue,sw:2,o:.45})
    +K.path("M122 34q6 16 0 32",{s:C.blue,sw:2})+K.path("M132 28q9 22 0 44",{s:C.blue,sw:2,o:.45}))
  +A("shk",K.card(58,12,44,76,10)+K.rect(72,17,16,3,{f:C.skel,r:1.5})+photo(63,26,34,24,6)+tbar(63,57,22,4)+gbar(63,65,30,3.5)+gbar(63,72,20,3.5),"transform:rotate(-9deg)");
kf("shk",2.8,"0%,16%{transform:none}24%{transform:translateX(-12px) rotate(-10deg)}34%{transform:translateX(12px) rotate(10deg)}44%{transform:translateX(-12px) rotate(-10deg)}54%{transform:translateX(12px) rotate(10deg)}63%{transform:translateX(-7px) rotate(-6deg)}72%,100%{transform:none}",EIO);
kf("sha",2.8,"0%,16%{opacity:0}26%,60%{opacity:1}72%,100%{opacity:0}");

TH2["드래그 앤 드롭"]=K=>K.blk(14,74,50,12,6)
  +dash(78,14,68,72,14)
  +A("ddh",K.rect(78,14,68,72,{f:"rgba(47,107,255,.14)",s:C.blue,sw:1.8,r:14}))
  +A("ddi",K.icon("share",112,43,18,C.blue,1.8)+K.txt(112,67,"여기에 놓기",{size:7.5,fill:C.blue,w:600,a:"middle"}))
  +A("ddc",K.card(14,36,50,28,10)+K.icon("image",28,50,13,C.blue,1.7)+tbar(39,45,18,4)+gbar(39,53,13,3.5)+A("ddf",K.fing(46,54)),"transform:translateX(24px) scale(1.07)")
  +A("ddk",K.circ(136,37,7,{f:C.green})+K.icon("check",136,37,9,"#fff",2),"opacity:0");
kf("ddc",3,"0%,10%{opacity:1;transform:none}18%{opacity:1;transform:scale(1.07)}54%{opacity:1;transform:translateX(73px) scale(1.07)}62%,86%{opacity:1;transform:translateX(73px)}95%{opacity:0;transform:translateX(73px)}100%{opacity:0;transform:none}");
kf("ddf",3,"0%,5%{opacity:0}10%,56%{opacity:1}64%,100%{opacity:0}");
kf("ddh",3,"0%,36%{opacity:0}46%,86%{opacity:1}95%,100%{opacity:0}");
kf("ddi",3,"0%,40%{opacity:1}50%,90%{opacity:0}100%{opacity:1}");
kf("ddk",3,"0%,58%{opacity:0;transform:scale(.3)}66%,86%{opacity:1;transform:none}95%,100%{opacity:0;transform:none}");
}
