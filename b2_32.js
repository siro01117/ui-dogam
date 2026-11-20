// B2 그림: ge(마우스 · 키보드 · 기기 제스처) · dv(시스템 UI)  (배정 32)
// 움직이는 부분은 class="b2x32 b2a-n32…". 멈춘 모습(기본 상태)이 다 나타난 대표 모습이다.
{
const A=(c,inner,st="")=>`<g class="b2x32 b2a-n32${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n32${name}{animation-name:b2a-n32${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n32${name}{${frames}}`);
css(`.b2x32{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const n2=K.n2, C=K.C, DK="#3A4050";

Object.assign(K.ICON,{
  q32wifi:["M4 10a12 12 0 0 1 16 0","M7.5 13.8a7 7 0 0 1 9 0","M12 17.8v.01"],
  q32moon:"M19 14.5A8 8 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z",
});
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DK,r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r)=>{const i=K.id(),g="b232p"+i,c="b232c"+i;
  return `<defs>${K.grad(g,[[0,"#AFC6FF"],[1,"#E5C8F3"]],0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:#6A86E8"/></g>`};
// 마우스 화살표 (끝이 x,y)
const cur=(x,y)=>`<path d="M${x} ${y}v13l3.4-3 2.4 5.4 2.6-1.1-2.4-5.3h4.6z" style="fill:${C.ink};stroke:#fff;stroke-width:1.2"/>`;
// 마우스 몸통 52×68. hl: "L" 왼쪽 버튼, "W" 휠
const mouse=(cx,t,hl,cls)=>{const L=`M${cx} ${t}a26 26 0 0 0-26 26v6h26z`;
  return K.card(cx-26,t,52,68,26)
   +(hl==="L"?K.path(L,{f:C.blue,s:"none",sw:0,o:.25})+A(cls,K.path(L,{f:C.blue,s:"none",sw:0})):"")
   +K.line(cx,t,cx,t+32,{s:"#C5CBD6",sw:1.2})+K.line(cx-26,t+32,cx+26,t+32,{s:"#C5CBD6",sw:1.2})
   +(hl==="W"?K.rect(cx-3.5,t+6,7,17,{f:C.blue,r:3.5}):K.rect(cx-2.5,t+8,5,12,{f:"#fff",s:"#9AA1AE",sw:1.2,r:2.5}))};
const ticks=K.path("M24 14l-4-5M18 21l-6-3M16 30h-6",{s:C.blue,sw:1.8});
// 키 하나 (on = 눌린 파란 키)
const key=(x,y,w,h,label,{size=8,on=false,cls=""}={})=>K.rect(x,y+3,w,h,{f:on?C.blue:"#B4BCCC",r:7})+(on?K.rect(x,y+3,w,h,{f:"rgba(0,0,0,.28)",r:7}):"")
  +(s=>cls?A(cls,s):s)(K.rect(x,y,w,h,{f:on?C.blue:"#fff",s:on?"none":"#C5CBD6",sw:1,r:7})+K.txt(x+w/2,y+h/2+size*.36,label,{size,w:700,fill:on?"#fff":C.ink,a:"middle"}));

/* ───────── 제스처: 마우스 · 키보드 ───────── */
TH2["클릭"]=K=>mouse(48,16,"L","clb")+ticks
  +K.blk(92,12,56,18,9)+K.blk(92,70,56,18,9)
  +A("clp",K.rect(92,38,56,24,{f:C.blue,r:12})+K.txt(120,53.4,"확인",{size:9,w:700,fill:"#fff",a:"middle"}))+cur(134,55);
kf("clb",2.6,"0%,22%{opacity:0}30%,52%{opacity:1}66%,100%{opacity:0}");
kf("clp",2.6,"0%,24%{transform:none}32%,50%{transform:scale(.93)}62%,100%{transform:none}");

TH2["더블 클릭"]=K=>mouse(48,16,"L","dcb")+ticks+K.txt(48,73,"×2",{size:14,w:700,fill:C.blue,a:"middle"})
  +A("dcs",K.rect(96,18,48,62,{f:C.blueSoft,s:C.blue,sw:1.4,r:10}))
  +K.path("M110 27h13l8 8v24h-21z",{f:"#fff",s:DK,sw:1.4})+K.path("M123 27v8h8",{s:DK,sw:1.4})+gbar(114,42,12,3)+gbar(114,49,12,3)
  +tbar(107,68,26,4)+cur(128,54);
kf("dcb",2.8,"0%,14%{opacity:0}18%,26%{opacity:1}31%,35%{opacity:0}40%,54%{opacity:1}66%,100%{opacity:0}");
kf("dcs",2.8,"0%,38%{opacity:.35}46%,88%{opacity:1}100%{opacity:.35}");

TH2["휠 스크롤"]=K=>{const c="b232w"+K.id();
  return mouse(48,16,"W")+A("whw",K.line(48,27,48,31,{s:"#fff",sw:1.8}))
  +K.path("M82 36v28M78 40l4-4 4 4M78 60l4 4 4-4",{s:C.blue,sw:1.8})
  +K.card(94,10,50,80,10)+`<defs><clipPath id="${c}"><rect x="94" y="10" width="50" height="80" rx="10"/></clipPath></defs><g clip-path="url(#${c})">`
  +A("whc",K.rect(100,16,32,22,{f:"#C9D6FF",r:5})+tbar(100,44,22,4)+gbar(100,52,30,3.5)+gbar(100,59,24,3.5)+K.rect(100,68,32,22,{f:"#E9C9F0",r:5})+tbar(100,96,22,4)+gbar(100,104,30,3.5)+gbar(100,111,24,3.5))
  +A("wht",K.rect(137.5,15,2.6,26,{f:"#B4BCCC",r:1.3}))+`</g>`};
kf("whc",3,"0%,12%{transform:none}50%,62%{transform:translateY(-26px)}100%{transform:none}","animation-timing-function:ease-in-out");
kf("wht",3,"0%,12%{transform:none}50%,62%{transform:translateY(20px)}100%{transform:none}","animation-timing-function:ease-in-out");
kf("whw",3,"0%,12%{transform:translateY(-3px)}50%,62%{transform:translateY(4px)}100%{transform:translateY(-3px)}","animation-timing-function:ease-in-out");

TH2["드래그 선택"]=K=>{const xs=[16,62,108],ys=[14,52];let s="",ring="";
  ys.forEach(y=>xs.forEach((x,i)=>{if(i<2){s+=K.card(x,y,36,28,8)+K.rect(x+5,y+5,26,12,{f:"#C9D6FF",r:4})+gbar(x+5,y+21,18,3);ring+=K.rect(x,y,36,28,{s:C.blue,sw:1.8,r:8})}else s+=K.blk(x,y,36,28,8)}));
  return s+A("dss",ring)+A("dsm",K.rect(10,8,94,78,{f:"rgba(47,107,255,.12)",s:C.blue,sw:1.2,r:2}),"transform-origin:0 0")+A("dsc",cur(104,86))};
kf("dsm",3,"0%,10%{transform:scale(.04);opacity:0}14%{opacity:1}56%,88%{transform:none;opacity:1}98%,100%{transform:none;opacity:0}");
kf("dsc",3,"0%,10%{transform:translate(-90px,-75px)}56%,100%{transform:none}");
kf("dss",3,"0%,34%{opacity:0}56%,88%{opacity:1}98%,100%{opacity:0}");

TH2["시프트 클릭 범위 선택"]=K=>{let s=K.card(46,6,100,88,12);
  for(let i=0;i<5;i++){const y=11+i*15.6,w=[44,56,38,50,46][i],on=i>=1&&i<=3;
    const off=K.circ(59,y+6.8,4,{f:"#fff",s:"#C5CBD6",sw:1.2})+gbar(68,y+4.8,w,4);
    const sel=K.rect(50,y,92,13.6,{f:C.blueSoft,r:5})+K.circ(59,y+6.8,4.6,{f:C.blue})+K.path(`M${57} ${n2(y+6.9)}l1.5 1.6 2.8-3.2`,{s:"#fff",sw:1.3})+tbar(68,y+4.8,w,4);
    s+=off+(on?(i>1?A("shr"+i,sel):sel):"")}
  return s+key(8,36,32,24,"Shift",{size:8,on:true,cls:"shk"})+A("shc",cur(126,62))};
kf("shk",3,"0%,16%{transform:none}24%,88%{transform:translateY(3px)}98%,100%{transform:none}");
kf("shc",3,"0%,26%{transform:translateY(-31px)}40%,100%{transform:none}");
kf("shr2",3,"0%,42%{opacity:0}50%,88%{opacity:1}98%,100%{opacity:0}");
kf("shr3",3,"0%,42%{opacity:0}50%,88%{opacity:1}98%,100%{opacity:0}");

TH2["탭 키 이동"]=K=>K.card(12,8,92,84,14)+[0,1,2].map(i=>K.rect(20,17+i*24,76,18,{f:"#fff",s:"#D3D8E3",sw:1.2,r:6})+gbar(27,24+i*24,[30,42,24][i],4)).join("")
  +A("tbf",K.rect(18.5,39.5,79,21,{f:"rgba(47,107,255,.07)",s:C.blue,sw:2,r:7.5}))
  +key(114,36,36,26,"Tab",{size:9.5,on:true,cls:"tbk"});
kf("tbf",3.2,"0%,22%{transform:translateY(-24px)}33%,55%{transform:none}66%,90%{transform:translateY(24px)}100%{transform:translateY(-24px)}");
kf("tbk",3.2,"0%,20%{transform:none}26%{transform:translateY(3px)}33%,53%{transform:none}59%{transform:translateY(3px)}66%,100%{transform:none}");

TH2["엔터 제출"]=K=>A("enb",K.rect(84,8,62,20,{f:C.blue,r:10})+K.bar(95,16,40,4,"rgba(255,255,255,.9)"))
  +K.card(14,36,132,22,11)+A("ent",tbar(30,45,40,4),"opacity:0")+K.line(25,42,25,52,{s:C.blue,sw:1.6})
  +K.blk(14,68,34,22,7)+K.blk(54,68,34,22,7)
  +key(94,65,52,24,"Enter",{size:9.5,on:true,cls:"enk"});
kf("ent",3,"0%,8%{opacity:0}14%,40%{opacity:1}46%,100%{opacity:0}");
kf("enk",3,"0%,34%{transform:none}40%,46%{transform:translateY(3px)}54%,100%{transform:none}");
kf("enb",3,"0%,42%{opacity:0;transform:translateY(16px)}54%,90%{opacity:1;transform:none}100%{opacity:0;transform:none}");

TH2["Esc 닫기"]=K=>K.blk(6,6,148,88,12)+K.rect(6,6,148,88,{f:C.dim,r:12})
  +A("esm",K.card(54,18,92,64,12)+K.icon("x",134,30,9,C.sub,1.8)+tbar(64,28,40)+gbar(64,42,70)+gbar(64,51,52)+K.rect(100,62,36,13,{f:C.blue,r:6.5}))
  +key(13,36,32,24,"Esc",{size:9.5,on:true,cls:"esk"});
kf("esk",3,"0%,24%{transform:none}30%,38%{transform:translateY(3px)}46%,100%{transform:none}");
kf("esm",3,"0%,32%{opacity:1;transform:none}44%,74%{opacity:0;transform:scale(.92)}86%,100%{opacity:1;transform:none}");

TH2["바깥 눌러 닫기"]=K=>K.blk(6,6,148,88,12)+K.rect(6,6,148,88,{f:C.dim,r:12})
  +A("ocm",K.card(56,14,88,58,12)+tbar(66,25,40)+gbar(66,38,66)+gbar(66,47,48)+K.rect(98,55,36,11,{f:C.blue,r:5.5}))
  +A("ocr",K.circ(30,76,11,{s:C.blue,sw:1.8}))+K.fing(30,76);
kf("ocr",3,"0%,16%{opacity:0;transform:scale(.5)}22%{opacity:1;transform:scale(.6)}40%{opacity:0;transform:scale(1.5)}41%,84%{opacity:0;transform:none}92%,100%{opacity:1;transform:none}");
kf("ocm",3,"0%,28%{opacity:1;transform:none}40%,74%{opacity:0;transform:scale(.92)}86%,100%{opacity:1;transform:none}");

/* ───────── 제스처: 터치 · 기기 ───────── */
TH2["더블 탭 줌"]=K=>{const c="b232z"+K.id();
  return K.rect(40,8,80,84,{f:"#fff",r:14,fx:"url(#b2lift)"})+`<defs><clipPath id="${c}"><rect x="40" y="8" width="80" height="84" rx="14"/></clipPath></defs><g clip-path="url(#${c})">`+A("dtz",photo(40,8,80,84,0),"transform:scale(1.7)")+`</g>`
  +A("dt2",K.circ(80,54,17,{s:"#fff",sw:1.4}),"opacity:.6")+A("dt1",K.circ(80,54,11.5,{s:"#fff",sw:1.8}))+K.fing(80,54)
  +A("dtb",K.rect(96,14,18,12,{f:C.toast,r:6})+K.txt(105,22.8,"2×",{size:7.5,w:700,fill:"#fff",a:"middle"}))};
kf("dtz",3,"0%,34%{transform:none}50%,86%{transform:scale(1.7)}98%,100%{transform:none}");
kf("dt1",3,"0%,10%{opacity:0;transform:scale(.5)}14%{opacity:1}24%{opacity:0;transform:scale(1.3)}25%,48%{opacity:0;transform:none}56%,86%{opacity:1;transform:none}98%,100%{opacity:0}");
kf("dt2",3,"0%,22%{opacity:0;transform:scale(.4)}26%{opacity:.9}36%{opacity:0;transform:scale(1.1)}37%,48%{opacity:0;transform:none}56%,86%{opacity:.6;transform:none}98%,100%{opacity:0}");
kf("dtb",3,"0%,38%{opacity:0}50%,86%{opacity:1}98%,100%{opacity:0}");

TH2["길게 눌러 드래그"]=K=>K.blk(20,8,112,24,12)+K.blk(20,68,112,24,12)
  +`<rect x="20" y="38" width="112" height="24" rx="12" style="fill:rgba(47,107,255,.06);stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`
  +A("ldc",K.card(20,38,112,24,12)+K.circ(34,50,6,{f:"#C9D6FF"})+tbar(46,45,44,4)+gbar(46,52,58,3.5),"transform:translate(12px,9px) rotate(-3deg)")
  +A("ldf",`<circle cx="112" cy="50" r="11" pathLength="100" class="b2x32 b2a-n32ldr" style="fill:none;stroke:${C.blue};stroke-width:2.2;stroke-dasharray:100"/>`+K.fing(112,50),"transform:translate(12px,9px)");
kf("ldr",3.2,"0%,6%{stroke-dashoffset:100}30%,100%{stroke-dashoffset:0}","animation-timing-function:linear");
kf("ldc",3.2,"0%,30%{transform:none}37%{transform:scale(1.04)}62%,88%{transform:translate(12px,9px) rotate(-3deg)}98%,100%{transform:none}");
kf("ldf",3.2,"0%,37%{transform:none}62%,88%{transform:translate(12px,9px)}98%,100%{transform:none}");

TH2["강하게 누르기"]=K=>K.card(18,18,64,64,18)+K.rect(26,26,48,48,{f:C.blueSoft,r:13})
  +A("fp3",K.circ(50,50,25,{s:C.blue,sw:1.2}),"opacity:.3")+A("fp2",K.circ(50,50,18,{s:C.blue,sw:2.2}),"opacity:.55")+A("fp1",K.circ(50,50,11,{s:C.blue,sw:3.4}),"opacity:.9")+K.circ(50,50,6,{f:C.blue})
  +K.card(102,10,36,80,12)+K.rect(115,18,10,50,{f:C.skel,r:5})+A("fpg",K.rect(115,26,10,42,{f:C.blue,r:5}),"transform-origin:50% 100%")
  +K.txt(120,82,"세게",{size:8,w:700,a:"middle"});
kf("fp1",2.8,"0%,10%{opacity:0;transform:scale(.6)}26%,84%{opacity:.9;transform:none}96%,100%{opacity:0}");
kf("fp2",2.8,"0%,24%{opacity:0;transform:scale(.6)}42%,84%{opacity:.55;transform:none}96%,100%{opacity:0}");
kf("fp3",2.8,"0%,38%{opacity:0;transform:scale(.6)}58%,84%{opacity:.3;transform:none}96%,100%{opacity:0}");
kf("fpg",2.8,"0%,10%{transform:scaleY(.2)}58%,84%{transform:none}96%,100%{transform:scaleY(.2)}","animation-timing-function:ease-in-out");

TH2["세 손가락 스와이프"]=K=>{const P=[[58,36],[80,30],[102,36]];
  return K.card(14,10,132,80,14)
  +P.map(([x,y])=>A("t3t",K.rect(x-3,y+8,6,34,{f:C.blue,r:3}),"transform-origin:50% 100%;opacity:.18")).join("")
  +A("t3f",P.map(([x,y])=>K.fing(x,y)).join(""))};
kf("t3f",2.8,"0%,12%{transform:translateY(34px);opacity:1}54%,84%{transform:none;opacity:1}96%,100%{transform:none;opacity:0}");
kf("t3t",2.8,"0%,12%{transform:scaleY(0);opacity:.18}54%,84%{transform:none;opacity:.18}96%,100%{transform:none;opacity:0}");

TH2["스와이프 액션"]=K=>{const c1="b232s"+K.id(),c2="b232s"+K.id();
  const row=(y,w1,w2)=>K.card(14,y,132,24,12)+K.circ(28,y+12,6,{f:"#C9D6FF"})+tbar(40,y+7,w1,4)+gbar(40,y+14,w2,3.5);
  return `<defs><clipPath id="${c1}"><rect x="14" y="8" width="132" height="24" rx="12"/></clipPath><clipPath id="${c2}"><rect x="14" y="68" width="132" height="24" rx="12"/></clipPath></defs>`
  +`<g clip-path="url(#${c1})">`+K.rect(14.7,8.7,130.6,22.6,{f:C.blue,r:11.3})+K.icon("check",36,20,11,"#fff",2)+A("sa1",row(8,50,70)+K.fing(74,20),"transform:translateX(44px)")+`</g>`
  +K.blk(14,38,132,24,12)
  +`<g clip-path="url(#${c2})">`+K.rect(14.7,68.7,130.6,22.6,{f:C.red,r:11.3})+K.rect(14.7,68.7,103.3,22.6,{f:C.amber,r:11.3})+K.rect(100,68.7,18,22.6,{f:C.amber})+K.icon("bookmark",104,80,11,"#fff",2)+K.icon("trash",132,80,11,"#fff",2)+A("sa2",row(68,46,64)+K.fing(130,80),"transform:translateX(-56px)")+`</g>`};
kf("sa1",3.2,"0%,8%{transform:none}30%,84%{transform:translateX(44px)}96%,100%{transform:none}");
kf("sa2",3.2,"0%,36%{transform:none}58%,84%{transform:translateX(-56px)}96%,100%{transform:none}");

TH2["상태바 눌러 맨 위로"]=K=>{const c="b232t"+K.id();
  return K.card(28,6,104,88,14)+K.txt(38,20,"9:41",{size:8,w:700})+batt(108,13.5)+K.line(28,27,132,27,{s:"#E2E6EC",sw:1})
  +`<defs><clipPath id="${c}"><path d="M28 27.5h104v52.5a14 14 0 0 1-14 14H42a14 14 0 0 1-14-14z"/></clipPath></defs><g clip-path="url(#${c})">`
  +A("stc",K.rect(36,33,84,24,{f:"#C9D6FF",r:7})+K.path("M72 44l6-6 6 6M72 52l6-6 6 6",{s:"#fff",sw:2})
    +[0,1,2,3,4].map(i=>K.circ(42,68+i*14,4.5,{f:C.skel})+gbar(52,66+i*14,[52,40,58,44,50][i],4)).join(""))
  +A("stt",K.rect(126,32,2.6,18,{f:"#B4BCCC",r:1.3}))+`</g>`
  +A("str",K.circ(80,16,10,{s:C.blue,sw:1.8}))+K.fing(80,16)};
kf("stc",3,"0%,24%{transform:translateY(-38px)}52%,100%{transform:none}");
kf("stt",3,"0%,24%{transform:translateY(34px)}52%,100%{transform:none}");
kf("str",3,"0%,12%{opacity:0;transform:scale(.5)}18%{opacity:1;transform:scale(.6)}34%{opacity:0;transform:scale(1.5)}35%,84%{opacity:0;transform:none}92%,100%{opacity:1;transform:none}");

TH2["홈 제스처"]=K=>{const c="b232h"+K.id();
  return K.card(34,4,92,92,16)+[0,1,2,3].map(i=>[0,1,2].map(j=>K.rect(43+i*20,12+j*20,14,14,{f:C.skel,r:4})).join("")).join("")
  +`<defs><clipPath id="${c}"><rect x="34" y="4" width="92" height="92" rx="16"/></clipPath></defs><g clip-path="url(#${c})">`
  +A("hgw",K.card(54,14,52,50,10)+photo(59,19,42,20,5)+tbar(59,45,26,4)+gbar(59,53,38,3.5))+`</g>`
  +A("hgt",K.rect(77,78,6,13,{f:C.blue,r:3}),"transform-origin:50% 100%;opacity:.18")+A("hgf",K.fing(80,75))
  +K.rect(64,90,32,3,{f:DK,r:1.5})};
kf("hgw",3,"0%,14%{transform:translateY(10px) scale(1.8);opacity:1}58%,84%{transform:none;opacity:1}96%,100%{transform:none;opacity:0}");
kf("hgf",3,"0%,14%{transform:translateY(15px);opacity:1}58%,84%{transform:none;opacity:1}96%,100%{transform:none;opacity:0}");
kf("hgt",3,"0%,14%{transform:scaleY(0);opacity:.18}58%,84%{transform:none;opacity:.18}96%,100%{opacity:0}");

TH2["기울이기"]=K=>K.path("M33 28q-9 15-4 32",{s:C.blue,sw:1.8,o:.7})+K.path("M127 72q9-15 4-32",{s:C.blue,sw:1.8,o:.7})
  +A("tlt",K.card(56,10,48,80,11)+K.rect(60,15,40,70,{f:C.blueSoft,r:7})+A("tlb",K.circ(69,76,6,{f:C.blue})),"transform:rotate(-14deg)");
kf("tlt",3.2,"0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}","animation-timing-function:ease-in-out");
kf("tlb",3.2,"0%,22%{transform:none}58%,72%{transform:translateX(22px)}100%{transform:none}","animation-timing-function:ease-in-out");

TH2["음성 명령"]=K=>A("vch",K.circ(40,50,27,{f:C.blue}),"opacity:.16")+K.circ(40,50,19,{f:C.blue})+K.icon("mic",40,50,20,"#fff",1.8)
  +A("vcb",K.card(76,16,70,26,13)+K.txt(111,32.6,"불 켜 줘",{size:10,w:700,a:"middle"}))
  +A("vcr",K.rect(84,56,54,24,{f:C.blueSoft,r:12})+K.circ(98,68,6.5,{f:C.green})+K.path("M95 68.2l2.2 2.3 3.8-4.4",{s:"#fff",sw:1.5})+K.bar(109,66,22,4,C.blue));
kf("vch",3,"0%,100%{transform:scale(.78);opacity:.16}14%,42%{transform:scale(1.06);opacity:.22}28%{transform:scale(.9);opacity:.16}56%{transform:none;opacity:.16}","animation-timing-function:ease-in-out");
kf("vcb",3,"0%,14%{opacity:0;transform:translateY(5px)}28%,88%{opacity:1;transform:none}98%,100%{opacity:0}");
kf("vcr",3,"0%,52%{opacity:0;transform:scale(.85)}64%,88%{opacity:1;transform:none}98%,100%{opacity:0}");

TH2["스타일러스"]=K=>K.card(14,10,132,80,14)
  +`<path d="M30 66c10-26 20-26 26-8s14 14 22-6 16-18 22-4" pathLength="100" class="b2x32 b2a-n32sts" style="fill:none;stroke:${C.blue};stroke-width:3;stroke-dasharray:100"/>`
  +A("stp",`<g transform="translate(100 48) rotate(-48)">`+K.path("M0 0L10-3.6V3.6Z",{f:C.ink,s:C.ink,sw:1})+K.path("M10-3.6h40v7.2h-40z",{f:"#fff",s:DK,sw:1.2})+K.path("M15-3.6h5v7.2h-5z",{f:C.blue,s:"none",sw:0})+K.path("M50-3.6h3a1.6 1.6 0 0 1 1.6 1.6v4a1.6 1.6 0 0 1-1.6 1.6h-3z",{f:DK,s:DK,sw:1.2})+`</g>`);
kf("sts",3.2,"0%,10%{stroke-dashoffset:100}64%,100%{stroke-dashoffset:0}","animation-timing-function:linear");
kf("stp",3.2,"0%,10%{transform:translate(-70px,18px)}19%{transform:translate(-57px,-1px)}28%{transform:translate(-44px,10px)}37%{transform:translate(-33px,15px)}46%{transform:translate(-22px,4px)}55%{transform:translate(-11px,-9px)}64%,100%{transform:none}","animation-timing-function:linear");

TH2["트랙패드 제스처"]=K=>K.blk(14,6,132,24,8)+[0,1,2,3,4,5,6,7].map(i=>K.rect(19+i*15.6,11,12.6,14,{f:"rgba(255,255,255,.75)",r:3})).join("")
  +K.card(30,36,100,56,10)
  +[[70,54],[90,50]].map(([x,y])=>A("tpt",K.rect(x-3,y+7,6,26,{f:C.blue,r:3}),"transform-origin:50% 100%;opacity:.18")).join("")
  +A("tpf",K.fing(70,54)+K.fing(90,50));
kf("tpf",2.8,"0%,12%{transform:translateY(26px)}52%,70%{transform:none}100%{transform:translateY(26px)}","animation-timing-function:ease-in-out");
kf("tpt",2.8,"0%,12%{transform:scaleY(0)}52%,70%{transform:none}100%{transform:scaleY(0)}","animation-timing-function:ease-in-out");

/* ───────── 시스템 UI ───────── */
function batt(x,y){return K.rect(x,y,13,7,{s:DK,sw:1,r:2.2})+K.rect(x+1.5,y+1.5,8,4,{f:DK,r:1})+K.rect(x+13.8,y+2.3,1.2,2.4,{f:DK,r:.6})}
const wifi=(x,y)=>K.path(`M${x} ${n2(y+2.6)}a7.5 7.5 0 0 1 10 0M${n2(x+2.3)} ${n2(y+5.2)}a4 4 0 0 1 5.4 0`,{s:DK,sw:1.4})+K.circ(x+5,y+7.6,1,{f:DK});
const sig=(x,y)=>[0,1,2,3].map(i=>K.rect(x+i*3.4,y-i*1.8,2.4,2.6+i*1.8,{f:DK,r:.8})).join("");

TH2["상태 바"]=K=>K.card(20,10,120,80,18)+K.rect(26,15,108,20,{f:C.soft,r:10})
  +K.txt(35,29,"9:41",{size:10.5,w:700})+sig(85,26.4)+wifi(101,20.4)+batt(116,21.5)
  +K.rect(30,44,100,24,{f:C.skel,r:8})+gbar(30,74,60)+gbar(30,82,40);

TH2["노치"]=K=>K.card(20,10,120,80,18)
  +K.path("M50 10h60v5a10 10 0 0 1-10 10H60a10 10 0 0 1-10-10z",{f:C.ink,s:"none",sw:0})+K.rect(71,15.5,16,2.6,{f:"#3A4050",r:1.3})+K.circ(94,16.8,2,{f:"#2B3760"})
  +K.txt(27,26,"9:41",{size:8,w:700})+batt(119,19)
  +K.rect(30,40,100,26,{f:C.skel,r:8})+gbar(30,73,60)+gbar(30,81,40);

TH2["다이내믹 아일랜드"]=K=>{const g="b232d"+K.id();
  return K.card(20,10,120,80,18)+K.txt(25.5,30,"9:41",{size:7.5,w:700})+batt(120.5,23.5)
  +A("dil",K.circ(55,27,11,{f:C.ink}))+A("dir",K.circ(105,27,11,{f:C.ink}))+A("dim",K.rect(54.5,16,51,22,{f:C.ink}))
  +A("dic",`<defs>${K.grad(g,[[0,"#F29CB1"],[1,"#8FA8FF"]])}</defs>`+K.rect(48.5,20,14,14,{f:`url(#${g})`,r:4.5})+K.bar(68,25.2,20,3.6,"rgba(255,255,255,.85)")
    +[5,11,8,4].map((h,i)=>K.rect(97+i*3.6,27-h/2,2.2,h,{f:C.blue,r:1.1})).join(""))
  +K.rect(30,46,100,22,{f:C.skel,r:8})+gbar(30,74,60)+gbar(30,82,40)};
kf("dil",3.2,"0%,14%{transform:translateX(18px)}40%,80%{transform:none}94%,100%{transform:translateX(18px)}");
kf("dir",3.2,"0%,14%{transform:translateX(-18px)}40%,80%{transform:none}94%,100%{transform:translateX(-18px)}");
kf("dim",3.2,"0%,14%{transform:scaleX(.29)}40%,80%{transform:none}94%,100%{transform:scaleX(.29)}");
kf("dic",3.2,"0%,28%{opacity:0}40%,76%{opacity:1}82%,100%{opacity:0}");

TH2["컨트롤 센터"]=K=>{const t="#EEF1F6";
  const tog=(x,y,n,on)=>K.circ(x,y,10,{f:on?C.blue:"#D8DDE7"})+K.icon(n,x,y,11,on?"#fff":DK,1.7);
  const sl=(x,lv,ic)=>K.rect(x,14,22,56,{f:"#DDE2EB",r:9})+K.path(`M${x} ${70-lv}h22v${lv-9}a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9z`,{f:C.blue,s:"none",sw:0})+ic;
  return K.card(16,8,128,84,16)+K.rect(22,14,58,56,{f:t,r:12})+tog(38,29,"q32wifi",true)+tog(64,29,"bell",true)+tog(38,55,"q32moon",false)+tog(64,55,"lock",false)
  +sl(86,36,K.circ(97,61,3,{f:"#fff"}))+sl(114,24,K.path("M122.5 59.5h2.5l3.2-2.6v8.2l-3.2-2.6h-2.5z",{f:"#fff",s:"#fff",sw:.8}))
  +K.rect(22,74,114,12,{f:t,r:6})+K.circ(30,80,2.6,{f:DK})+gbar(37,78,40,4)};

TH2["앱 서랍"]=K=>{const col=["#5B8DEF","#F29CB1","#F2A93B","#1FA971","#9B8AF4","#3A4050","#FF8A65","#4FC3C8"];
  return K.card(22,8,116,86,16)+K.rect(70,13,20,3,{f:"#C5CBD6",r:1.5})+K.rect(32,21,96,14,{f:"#EEF1F6",r:7})+K.icon("search",41,28,8,C.sub,1.6)+gbar(49,26,26,4)
  +col.map((c,i)=>{const x=33+(i%4)*26,y=41+Math.floor(i/4)*26;return K.rect(x,y,16,16,{f:c,r:5})+gbar(x+1,y+19,14,2.6)}).join("")};

TH2["위젯"]=K=>K.card(16,14,72,72,18)+K.circ(37,35,9,{f:C.amber})+gbar(58,30,18,3.5)+gbar(58,38,12,3.5)
  +K.txt(26,72,"23°",{size:20,w:700})
  +[100,126].map(x=>[14,40,66].map(y=>K.blk(x,y,20,20,6)).join("")).join("");

TH2["키보드 액세서리 바"]=K=>{const kr=(x,y,w,f="#fff")=>K.rect(x,y,w,11,{f,r:3});
  return K.rect(24,6,112,20,{f:"#fff",s:C.blue,sw:1.6,r:10})+K.line(35,11,35,21,{s:C.blue,sw:1.6})
  +K.rect(0,52,160,48,{f:"#D3D8E1"})+K.rect(0,33,160,19,{f:"#fff"})+K.line(0,33,160,33,{s:"#D3D8E3",sw:1})
  +K.path("M11 45l5-5 5 5",{s:C.blue,sw:1.9})+K.path("M30 40.5l5 5 5-5",{s:C.blue,sw:1.9})+K.txt(150,46,"완료",{size:9.5,w:700,fill:C.blue,a:"end"})
  +[...Array(10)].map((_,i)=>kr(4+i*15.4,57,13.4)).join("")+[...Array(9)].map((_,i)=>kr(11.7+i*15.4,72,13.4)).join("")
  +kr(4,87,19,"#B4BCCC")+[...Array(7)].map((_,i)=>kr(27.1+i*15.4,87,13.4)).join("")+kr(137,87,19,"#B4BCCC")};

TH2["시스템 내비게이션 바"]=K=>K.blk(22,8,116,22,11)+K.blk(22,36,116,22,11)
  +K.rect(0,66,160,34,{f:"#fff"})+K.line(0,66,160,66,{s:"#D3D8E3",sw:1})
  +K.path("M45 75l-11 8 11 8z",{s:DK,sw:2})+K.circ(80,83,7.5,{s:DK,sw:2})+K.rect(113,76,14,14,{s:DK,sw:2,r:3});

TH2["라이브 액티비티"]=K=>K.card(20,6,120,88,16)+K.icon("lock",80,15,8,C.sub,1.6)+K.txt(80,39,"9:41",{size:17,w:700,a:"middle"})
  +K.rect(28,48,104,40,{f:C.toast,r:13})+K.circ(43,62,7.5,{f:C.blue})+K.icon("cart",43,62,9,"#fff",1.6)
  +K.txt(56,65,"배달 중",{size:8,w:600,fill:"#C8CDD6"})+K.txt(124,66,"12분",{size:11,w:700,fill:"#fff",a:"end"})
  +K.rect(36,77,88,3.6,{f:"#4A505C",r:1.8})+A("lvf",K.rect(36,77,53,3.6,{f:C.blue,r:1.8}),"transform-origin:0 50%")+A("lvk",K.circ(89,78.8,4,{f:"#fff"}));
kf("lvf",3.2,"0%,10%{transform:scaleX(.3)}72%,100%{transform:none}","animation-timing-function:ease-in-out");
kf("lvk",3.2,"0%,10%{transform:translateX(-37px)}72%,100%{transform:none}","animation-timing-function:ease-in-out");

TH2["잠금화면 알림"]=K=>{const noti=(y,c,w1,w2,t)=>K.card(18,y,124,26,12)+K.rect(26,y+6,14,14,{f:c,r:4.5})+tbar(47,y+7,w1,4)+gbar(47,y+15,w2,3.5)+K.txt(134,y+11.5,t,{size:7,fill:C.mute,a:"end"});
  return K.icon("lock",80,7,8,C.ink,1.6)+K.txt(80,29,"9:41",{size:15,w:700,a:"middle"})
  +K.rect(28,86,104,9,{f:"#fff",r:4.5,o:.6})+noti(36,C.blue,40,60,"지금")+noti(65,C.amber,34,52,"5분 전")};
}
