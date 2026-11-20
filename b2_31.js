// B2 그림 보충 (N=31): mo 모션 · 트랜지션 41.
// 멈춘 모습(애니메이션 없음)이 대표 모습이 되도록, 기본 상태는 style 로 주고 키프레임이 그 위를 덮는다.
{
const C=K.C, n2=K.n2;
const A=(c,inner,st="")=>`<g class="b2x31 b2a-n31${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n31${name}{animation-name:b2a-n31${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n31${name}{${frames}}`);
css(`.b2x31{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
// 정지 모습에만 보이는 힌트 (움직일 때는 숨는다)
const S=inner=>A("so",inner);
kf("so",1,"0%,100%{opacity:0}");
const LIN="animation-timing-function:linear", EIO="animation-timing-function:cubic-bezier(.65,0,.35,1)";

Object.assign(K.ICON,{
  q31pin:["M9 4h6l-1 6 3 3H7l3-3z","M12 13v7"],
  q31loop:["M17 2l4 4-4 4","M3 11V9a3 3 0 0 1 3-3h15","M7 22l-4-4 4-4","M21 13v2a3 3 0 0 1-3 3H3"],
});
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
// 화면 밖으로 나가는 조각은 rect 대신 path 로 (가장자리 판정에 걸리지 않게)
const rr=(x,y,w,h,r,f,o=1)=>`<path d="M${n2(x+r)} ${n2(y)}h${n2(w-2*r)}a${r} ${r} 0 0 1 ${r} ${r}v${n2(h-2*r)}a${r} ${r} 0 0 1 -${r} ${r}h-${n2(w-2*r)}a${r} ${r} 0 0 1 -${r} -${r}v-${n2(h-2*r)}a${r} ${r} 0 0 1 ${r} -${r}z" style="fill:${f}${o<1?`;opacity:${o}`:""}"/>`;
const clip=(x,y,w,h,r,inner)=>{const c="b231c"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b231p"+i,c="b231q"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const cur=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0V13.5L3.6 10.2L6 15.6L8.3 14.6L5.9 9.3H10.6Z" style="fill:#12141A;stroke:#fff;stroke-width:1.2"/></g>`;
const dashR=(x,y,w,h,r,s=C.blue,extra="")=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" style="fill:none;stroke:${s};stroke-width:1.2;stroke-dasharray:3 3"${extra}/>`;
const thumbV=(x,y,h,name,dy,dur,frames)=>{kf(name,dur,frames);return A(name,K.rect(x,y,2.5,h,{f:"#C3C9D6",r:1.25}),`transform:translateY(${dy}px)`)};
// 브라우저 창 틀 (위 줄 + 주소 칸)
const brow=()=>K.card(20,8,120,84,14)+[30,36,42].map(x=>K.circ(x,17.5,1.8,{f:"#D3D8E3"})).join("")+K.rect(52,13.5,60,8,{f:"#F1F3F8",r:4})+K.line(20,27,140,27,{s:C.line,sw:.6});

/* ───────── 속도 곡선 · 시간 ───────── */
const curve=(name,fn)=>{const ox=34,oy=80,W=92,H=50,N=40;
  const pts=[...Array(N+1)].map((_,i)=>{const x=i/N;return [ox+W*x,oy-H*fn(x)]});
  const d="M"+pts.map(p=>n2(p[0])+" "+n2(p[1])).join("L");
  kf(name,2.8,"0%{opacity:0}5%,88%{opacity:1}96%,100%{opacity:0}0%,12%{transform:none}"
    +pts.map((p,i)=>`${n2(12+60*i/N)}%{transform:translate(${n2(p[0]-ox)}px,${n2(p[1]-oy)}px)}`).join("")
    +`100%{transform:translate(${W}px,${-H}px)}`,LIN);
  return K=>K.card(18,8,124,84,14)+K.line(34,80,126,80,{s:C.line,sw:.8})+K.line(34,80,34,22,{s:C.line,sw:.8})
    +K.path(d,{s:C.blueSoft,sw:5})+K.path(d,{s:C.blue,sw:1.8})
    +K.circ(34,80,2.2,{f:C.mute})
    +A(name,K.circ(34,80,4.6,{f:C.ink,s:"#fff",sw:1.6}),`transform:translate(${W}px,${-H}px)`)};
TH2["이즈 인 아웃"]=curve("eio",x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2);
TH2["리니어"]=curve("lin",x=>x);

TH2["지속 시간"]=K=>K.card(18,12,124,76,14)
  +K.rect(32,24,96,22,{f:"#F3F5FA",r:11})
  +S([0,1,2].map(i=>K.rect(37+i*23,28,14,14,{f:C.blue,r:4,o:[.1,.18,.3][i]})).join(""))
  +A("dur",K.rect(109,28,14,14,{f:C.blue,r:4}))
  +K.line(34,58,34,70,{s:C.mute,sw:1.2})+K.line(126,58,126,70,{s:C.mute,sw:1.2})
  +K.rect(34,61,92,6,{f:C.blueSoft,r:3})
  +A("durb",K.rect(34,61,92,6,{f:C.blue,r:3}),"transform-origin:0 50%")
  +K.txt(80,82,"0.3초",{size:9,w:700,a:"middle"});
kf("dur",2.8,"0%,12%{transform:translateX(-72px)}62%,88%{transform:none;opacity:1}96%,100%{transform:none;opacity:0}",LIN);
kf("durb",2.8,"0%,12%{transform:scaleX(0)}62%,88%{transform:scaleX(1);opacity:1}96%,100%{transform:scaleX(1);opacity:0}",LIN);

TH2["딜레이"]=K=>K.card(18,10,124,80,14)
  +K.rect(34,22,60,14,{f:C.blueSoft,r:7})+A("dl1",K.rect(34,22,60,14,{f:C.blue,r:7}),"transform-origin:0 50%")
  +dashR(34,46,30,14,7)
  +K.rect(66,46,60,14,{f:C.blueSoft,r:7})+A("dl2",K.rect(66,46,60,14,{f:C.blue,r:7}),"transform-origin:0 50%")
  +K.line(34,66,34,71,{s:C.blue,sw:1.2})+K.line(64,66,64,71,{s:C.blue,sw:1.2})+K.line(34,68.5,64,68.5,{s:C.blue,sw:1.2})
  +K.txt(49,82,"0.2초",{size:8.5,w:700,a:"middle",fill:C.blue});
kf("dl1",3,"0%,8%{transform:scaleX(0);opacity:1}40%,88%{transform:scaleX(1);opacity:1}96%,100%{transform:scaleX(1);opacity:0}",LIN);
kf("dl2",3,"0%,32%{transform:scaleX(0);opacity:1}64%,88%{transform:scaleX(1);opacity:1}96%,100%{transform:scaleX(1);opacity:0}",LIN);

TH2["키프레임"]=K=>{const dia=x=>`<path d="M${x} 62l6 6-6 6-6-6z" style="fill:${C.blue};stroke:#fff;stroke-width:1.4"/>`;
  return K.card(18,10,124,80,14)
  +dashR(37,29,10,10,2.5,C.mute)
  +`<rect x="73" y="27" width="14" height="14" rx="3.5" transform="rotate(45 80 34)" style="fill:none;stroke:${C.mute};stroke-width:1.2;stroke-dasharray:3 3"/>`
  +A("kfo",K.rect(108,24,20,20,{f:C.blue,r:5}))
  +K.line(32,68,128,68,{s:C.line,sw:2})+dia(42)+dia(80)+dia(118)
  +A("kfp",K.line(118,54,118,82,{s:C.ink,sw:1.3})+`<path d="M114.5 52h7l-3.5 4.5z" style="fill:${C.ink}"/>`)};
kf("kfo",3,"0%,10%{transform:translateX(-76px) scale(.5) rotate(0deg)}45%,50%{transform:translateX(-38px) scale(.7) rotate(45deg)}85%,100%{transform:translateX(0px) scale(1) rotate(90deg)}",EIO);
kf("kfp",3,"0%,10%{transform:translateX(-76px)}45%,50%{transform:translateX(-38px)}85%,100%{transform:translateX(0px)}",EIO);

TH2["로티"]=K=>K.card(34,8,92,84,14)
  +K.rect(42,15,30,13,{f:C.ink,r:6.5})+K.txt(57,24.6,"JSON",{size:7,w:700,fill:"#fff",a:"middle"})
  +A("lts",`<ellipse cx="80" cy="80" rx="16" ry="3" style="fill:rgba(40,50,110,.16)"/>`)
  +A("ltf",K.circ(80,58,18,{f:C.blue})+K.circ(73.5,54,2.4,{f:"#fff"})+K.circ(86.5,54,2.4,{f:"#fff"})+K.path("M72.5 62.5q7.5 7 15 0",{s:"#fff",sw:2.2}),"transform-origin:50% 100%")
  +A("ltk",K.icon("sparkle",108,30,13,C.amber,2))+A("ltk2",K.icon("sparkle",50,44,8,C.amber,2));
kf("ltf",2.4,"0%,100%{transform:translateY(0) scale(1.1,.9)}12%{transform:translateY(-6px) scale(.95,1.06)}48%{transform:translateY(-20px) scale(1,1)}86%{transform:translateY(0) scale(1,1)}","animation-timing-function:ease-in-out");
kf("lts",2.4,"0%,100%{transform:scale(1.1)}48%{transform:scale(.6);opacity:.5}86%{transform:scale(1)}","animation-timing-function:ease-in-out");
kf("ltk",2.4,"0%,100%{transform:scale(.5) rotate(0deg);opacity:.4}50%{transform:scale(1.1) rotate(40deg);opacity:1}");
kf("ltk2",2.4,"0%,100%{transform:scale(1.1);opacity:1}50%{transform:scale(.5);opacity:.4}");

TH2["마이크로 인터랙션"]=K=>K.blk(22,8,116,14,7)+K.blk(22,80,76,12,6)
  +K.card(34,30,92,42,21)
  +A("mib",[0,1,2,3,4,5].map(i=>{const a=(i*60-90)*Math.PI/180;return K.line(62+Math.cos(a)*13,51+Math.sin(a)*13,62+Math.cos(a)*17,51+Math.sin(a)*17,{s:i%2?C.amber:C.red,sw:1.8})}).join(""))
  +A("mih",fillIcon("heart",62,51,22,C.red))
  +K.txt(84,56,"13",{size:15,w:800})
  +A("mif",K.fing(108,62));
kf("mih",2.6,"0%,18%{transform:scale(.72)}30%{transform:scale(1.28)}42%,100%{transform:scale(1)}");
kf("mib",2.6,"0%,20%{transform:scale(.4);opacity:0}32%{transform:scale(.9);opacity:1}58%,100%{transform:scale(1.25);opacity:0}");
kf("mif",2.6,"0%,6%{transform:scale(1.5);opacity:0}16%,24%{transform:scale(.85);opacity:1}40%,100%{transform:scale(1.4);opacity:0}");

/* ───────── 스크롤에 묶인 움직임 ───────── */
TH2["스크롤 트리거"]=K=>{const row=(i,on)=>{const y=12+i*30;return rr(34,y,84,24,8,on?C.blueSoft:"#F3F5FA")+`<circle cx="46" cy="${y+12}" r="5.5" style="fill:${on?C.blue:C.skel}"/>`+rr(57,y+7,i%2?44:52,4,2,on?"#9DB6FF":"#D3D8E3")+rr(57,y+14,i%2?30:38,3.5,1.75,on?"#C4D3FF":"#E3E7EF")};
  return K.card(26,6,108,88,14)+clip(26,6,108,88,14,
    A("stl",row(0)+row(1)+A("sti",row(2,true),"opacity:.28;transform:translateY(8px)")+A("sti2",row(3,true),"opacity:.28;transform:translateY(8px)")))
  +`<path d="M26 70H134" style="fill:none;stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`
  +thumbV(128.5,14,24,"stt",0,3,"0%,14%{transform:none}55%,82%{transform:translateY(16px)}100%{transform:none}")};
kf("stl",3,"0%,14%{transform:none}55%,82%{transform:translateY(-30px)}100%{transform:none}",EIO);
kf("sti",3,"0%,22%{opacity:.28;transform:translateY(8px)}46%,84%{opacity:1;transform:none}100%{opacity:.28;transform:translateY(8px)}");
kf("sti2",3,"0%,100%{opacity:.28;transform:translateY(8px)}");

TH2["스크롤 고정 섹션"]=K=>{const tile=(y,f)=>rr(76,y,54,34,8,f)+rr(83,y+22,26,4,2,"rgba(255,255,255,.85)");
  return K.card(16,8,128,84,14)
  +clip(72,8,62,84,0,A("pnc",tile(16,"#DCE6FF")+tile(56,"#FBE1EB")+tile(96,"#DDF3E7")+tile(136,"#FFEFD6"),"transform:translateY(-22px)"))
  +K.rect(24,16,44,68,{f:C.blueSoft,r:10})+K.icon("q31pin",46,36,17,C.blue,1.9)+K.rect(32,55,28,5,{f:C.blue,r:2.5})+K.rect(32,65,20,4,{f:"#9DB6FF",r:2})
  +thumbV(136.5,16,22,"pnt",10,3.2,"0%,10%{transform:none}78%,90%{transform:translateY(44px)}100%{transform:none}")};
kf("pnc",3.2,"0%,10%{transform:none}78%,90%{transform:translateY(-88px)}100%{transform:none}",EIO);

TH2["가로 스크롤 섹션"]=K=>{const cs=["#DCE6FF","#FBE1EB","#DDF3E7","#FFEFD6"],ds=["#6A86E8","#E68FA3","#4FB587","#E6A64A"];
  return K.card(16,10,128,80,14)
  +clip(16,10,120,80,14,A("hsr",cs.map((f,i)=>rr(26+i*70,24,62,52,10,f)+rr(34+i*70,34,22,5,2.5,ds[i])+rr(34+i*70,44,36,4,2,"rgba(255,255,255,.9)")).join(""),"transform:translateX(-52px)"))
  +thumbV(137.5,18,22,"hst",15,3.2,"0%,10%{transform:none}78%,90%{transform:translateY(42px)}100%{transform:none}")};
kf("hsr",3.2,"0%,10%{transform:none}78%,90%{transform:translateX(-178px)}100%{transform:none}",EIO);

TH2["패스 모션"]=(()=>{const P=[[34,72],[62,10],[86,104],[126,30]],N=30;
  const B=t=>[0,1].map(k=>{const u=1-t;return u*u*u*P[0][k]+3*u*u*t*P[1][k]+3*u*t*t*P[2][k]+t*t*t*P[3][k]});
  const pts=[...Array(N+1)].map((_,i)=>B(i/N)), ts=.63, s=B(ts);
  kf("pm",3,"0%,10%{transform:none}"+pts.map((p,i)=>`${n2(10+72*i/N)}%{transform:translate(${n2(p[0]-P[0][0])}px,${n2(p[1]-P[0][1])}px)}`).join("")+`90%,100%{transform:translate(${P[3][0]-P[0][0]}px,${P[3][1]-P[0][1]}px)}`,LIN);
  const done="M"+pts.filter((_,i)=>i/N<=ts).concat([s]).map(p=>n2(p[0])+" "+n2(p[1])).join("L");
  return K=>K.card(18,8,124,84,14)
   +`<path d="M34 72C62 10 86 104 126 30" style="fill:none;stroke:${C.mute};stroke-width:1.4;stroke-dasharray:3 3.5"/>`
   +S(K.path(done,{s:C.blue,sw:1.8}))
   +K.circ(34,72,3,{f:C.mute})+K.circ(126,30,4.5,{f:"#fff",s:C.mute,sw:1.4})
   +A("pm",K.circ(34,72,6.5,{f:C.blue,s:"#fff",sw:2}),`transform:translate(${n2(s[0]-34)}px,${n2(s[1]-72)}px)`)})();

TH2["스무스 스크롤"]=K=>{const sec=(y,f,d,t)=>rr(32,y,90,58,10,f)+`<text x="44" y="${y+25}" font-size="17" font-weight="800" style="fill:${d}">${t}</text>`+rr(44,y+34,44,4.5,2.25,"rgba(255,255,255,.9)")+rr(44,y+43,30,4,2,"rgba(255,255,255,.7)");
  return K.card(24,6,112,88,14)
  +clip(24,25,112,69,0,A("ssc",sec(31,"#DCE6FF","#6A86E8","1")+sec(95,"#FBE1EB","#E68FA3","2")+sec(159,"#DDF3E7","#4FB587","3"),"transform:translateY(-44px)"))
  +K.rect(34,12,18,7,{f:C.skel,r:3.5})+K.rect(56,12,18,7,{f:C.blue,r:3.5})+K.rect(78,12,18,7,{f:C.skel,r:3.5})
  +K.line(24,25,136,25,{s:C.line,sw:.6})+cur(66,15)
  +thumbV(130,30,22,"sst",14,3,"0%,14%{transform:none}64%,86%{transform:translateY(20px)}100%{transform:none}")};
kf("ssc",3,"0%,14%{transform:none}64%,86%{transform:translateY(-64px)}100%{transform:none}",EIO);
css(`.b2a-n31sst{${EIO}}`);

TH2["관성 스크롤"]=K=>K.card(30,6,100,88,14)
  +clip(30,6,100,88,14,A("isl",[...Array(9)].map((_,i)=>{const y=12+i*20;return rr(38,y,78,16,8,"#F3F5FA")+`<circle cx="47" cy="${y+8}" r="4.5" style="fill:${i===4?C.blue:C.skel}"/>`+rr(56,y+6,i%3===1?34:48,4,2,i===4?"#9DB6FF":"#D3D8E3")}).join(""),"transform:translateY(-34px)"))
  +S([0,1,2].map(i=>K.line(102,56+i*9,102,61+i*9,{s:C.blue,sw:2.2,o:[.7,.42,.2][i]})).join(""))
  +A("isf",K.fing(102,62),"transform:translateY(-18px);opacity:.4")
  +thumbV(124.5,14,20,"ist",14,3,"0%,10%{transform:none}22%{transform:translateY(8px)}80%,90%{transform:translateY(30px)}100%{transform:none}");
kf("isl",3,"0%,10%{transform:none;animation-timing-function:linear}22%{transform:translateY(-22px);animation-timing-function:cubic-bezier(.1,.7,.2,1)}80%,90%{transform:translateY(-84px)}100%{transform:none}");
kf("isf",3,"0%,4%{transform:none;opacity:0}10%{transform:none;opacity:1;animation-timing-function:linear}22%{transform:translateY(-22px);opacity:1}30%,100%{transform:translateY(-26px) scale(1.5);opacity:0}");
css(`.b2a-n31ist{animation-timing-function:cubic-bezier(.1,.7,.2,1)}`);

/* ───────── 되풀이 · 효과 ───────── */
TH2["회전"]=K=>K.card(36,8,88,84,16)
  +S(dashR(63,33,34,34,8,C.mute)+`<rect x="63" y="33" width="34" height="34" rx="8" transform="rotate(15 80 50)" style="fill:${C.blue};opacity:.16"/>`)
  +A("rot",K.rect(63,33,34,34,{f:C.blue,r:8})+K.circ(72,42,3.2,{f:"#fff"}),"transform:rotate(30deg)");
kf("rot",3.2,"0%,6%{transform:rotate(0deg)}25%,31%{transform:rotate(90deg)}50%,56%{transform:rotate(180deg)}75%,81%{transform:rotate(270deg)}100%{transform:rotate(360deg)}",EIO);

TH2["하트비트"]=K=>K.card(40,10,80,80,20)
  +S(`<g transform="translate(49 20.5) scale(2.58)"><path d="${K.ICON.heart}" style="fill:none;stroke:${C.red};stroke-width:.5;opacity:.35"/></g>`)
  +A("hb",fillIcon("heart",80,51.5,48,C.red));
kf("hb",2.4,"0%,40%,100%{transform:scale(1)}9%{transform:scale(1.26)}18%{transform:scale(1)}27%{transform:scale(1.17)}","animation-timing-function:ease-in-out");

TH2["깜빡임"]=K=>K.blk(22,10,70,12,6)+K.blk(22,80,92,10,5)
  +K.card(22,30,116,40,12)+K.rect(22,30,116,40,{s:C.blue,sw:1.6,r:12})
  +K.txt(36,56.5,"안녕",{size:18,w:700})
  +A("bli",K.rect(73,39,2.8,22,{f:C.blue,r:1.4}));
kf("bli",2.4,"0%,24.9%,50%,74.9%{opacity:1}25%,49.9%,75%,100%{opacity:0}","animation-timing-function:steps(1)");

TH2["글로우"]=K=>{const f="b231g"+K.id();
  return `<defs><filter id="${f}" x="-60%" y="-120%" width="220%" height="340%"><feGaussianBlur stdDeviation="7"/></filter></defs>`
  +K.rect(22,12,116,76,{f:"#171A22",r:16,fx:"url(#b2lift)"})
  +K.bar(34,23,34,4,"#2B303C")+K.bar(34,75,50,4,"#2B303C")
  +A("glw",`<rect x="44" y="37" width="72" height="28" rx="14" style="fill:${C.blue}" filter="url(#${f})"/>`)
  +K.rect(44,37,72,28,{f:C.blue,r:14})+K.rect(44.5,37.5,71,27,{s:"rgba(255,255,255,.45)",sw:1,r:13.5})
  +K.txt(80,54.6,"시작",{size:10,w:700,fill:"#fff",a:"middle"})};
kf("glw",2.8,"0%,100%{opacity:.35;transform:scale(.9)}50%{opacity:1;transform:scale(1.12)}","animation-timing-function:ease-in-out");

TH2["그라데이션 흐름"]=K=>{const g="b231f"+K.id();
  return `<defs><linearGradient id="${g}" gradientUnits="userSpaceOnUse" x1="20" y1="0" x2="200" y2="0" spreadMethod="repeat"><stop offset="0" stop-color="#2F6BFF"/><stop offset=".3" stop-color="#9B6BFF"/><stop offset=".55" stop-color="#FF7EB6"/><stop offset=".78" stop-color="#FFB86B"/><stop offset="1" stop-color="#2F6BFF"/></linearGradient></defs>`
  +K.card(20,14,120,72,16)
  +clip(20,14,120,72,16,A("gfl",`<path d="M20 14H500V86H20Z" style="fill:url(#${g})"/>`,"transform:translateX(-36px)"))
  +K.rect(34,50,58,8,{f:"#fff",r:4})+K.rect(34,64,38,5,{f:"#fff",r:2.5,o:.75})};
kf("gfl",3.2,"0%{transform:translateX(0)}100%{transform:translateX(-180px)}",LIN);

TH2["파티클"]=K=>{const cl=[[[38,30,3],[53,21,2],[49,41,2.4]],[[88,25,3.4],[106,35,2],[98,17,1.8]],[[60,63,2.6],[43,73,3.2],[73,77,2]],[[112,57,3],[124,74,2.2],[100,72,2.6],[127,43,1.8]]];
  return K.card(18,8,124,84,14)
  +cl.map((c,i)=>A("pa"+i,c.slice(1).map(p=>K.line(c[0][0],c[0][1],p[0],p[1],{s:C.blue,sw:.8,o:.3})).join("")+c.map((p,j)=>K.circ(p[0],p[1],p[2],{f:C.blue,o:[1,.55,.75,.4][j]})).join(""))).join("")
  +A("pa4",K.circ(71,44,2,{f:C.blue,o:.5})+K.circ(30,55,1.8,{f:C.blue,o:.35}))+A("pa5",K.circ(84,52,1.6,{f:C.blue,o:.7})+K.circ(120,24,1.5,{f:C.blue,o:.4}))};
[[5,-6],[-6,4],[6,5],[-4,-6],[7,2],[-5,6]].forEach(([x,y],i)=>kf("pa"+i,3.2,`0%,100%{transform:none}50%{transform:translate(${x}px,${y}px)}`,"animation-timing-function:ease-in-out"));

TH2["웨이브"]=K=>{const w=(y,a)=>`M-92 ${y}`+"q14 "+(-a)+" 28 0"+" t28 0".repeat(11)+"V96H-92Z";
  return K.card(24,10,112,80,14)
  +clip(24,10,112,80,14,A("wvb",`<path d="${w(50,9)}" style="fill:#BFD0FF"/>`,"transform:translateX(26px)")+A("wvf",`<path d="${w(58,8)}" style="fill:${C.blue}"/>`,"transform:translateX(-18px)"))};
kf("wvf",2.8,"0%{transform:translateX(0)}100%{transform:translateX(-56px)}",LIN);
kf("wvb",2.8,"0%{transform:translateX(0)}100%{transform:translateX(56px)}",LIN);

TH2["이퀄라이저"]=K=>K.card(30,12,100,76,14)
  +[.45,.8,.55,1,.65,.35,.75].map((h,i)=>A("eq"+i%4,K.rect(42+i*11.5,24,7,52,{f:i===3?C.blue:"#7FA0FF",r:3.5}),`transform-origin:50% 100%;transform:scaleY(${h})`)).join("");
["0%,100%{transform:scaleY(.3)}22%{transform:scaleY(1)}48%{transform:scaleY(.45)}74%{transform:scaleY(.85)}",
 "0%,100%{transform:scaleY(.8)}26%{transform:scaleY(.3)}52%{transform:scaleY(.95)}78%{transform:scaleY(.5)}",
 "0%,100%{transform:scaleY(.5)}20%{transform:scaleY(.75)}44%{transform:scaleY(.25)}70%{transform:scaleY(1)}",
 "0%,100%{transform:scaleY(1)}24%{transform:scaleY(.55)}50%{transform:scaleY(.9)}76%{transform:scaleY(.3)}"].forEach((f,i)=>kf("eq"+i,2.4,f,"animation-timing-function:ease-in-out"));

/* ───────── 마우스 반응 ───────── */
TH2["커스텀 커서"]=K=>K.card(22,10,116,80,14)+photo(30,18,100,44,10)+tbar(30,70,50)+gbar(30,79,70)
  +A("cc",K.circ(92,42,15,{f:C.blue,o:.94})+K.circ(92,42,18.5,{s:C.blue,sw:1,o:.45})+K.txt(92,45,"보기",{size:8,w:700,fill:"#fff",a:"middle"}));
kf("cc",3,"0%,12%{transform:translate(-44px,32px) scale(.26)}34%{transform:translate(-12px,8px) scale(.26)}54%,86%{transform:none}100%{transform:translate(-44px,32px) scale(.26)}");

TH2["호버 줌"]=K=>K.card(30,10,100,80,14)
  +clip(38,18,84,46,10,A("hz",photo(38,18,84,46,0),"transform:scale(1.24)"))
  +K.rect(38,18,84,46,{s:C.blue,sw:1.4,r:10})
  +tbar(38,71,44)+gbar(38,80,62)+cur(96,44);
kf("hz",2.8,"0%,14%{transform:scale(1)}50%,84%{transform:scale(1.24)}100%{transform:scale(1)}");

TH2["밑줄 그어지기"]=K=>K.blk(18,8,60,10,5)+K.blk(18,84,100,9,4.5)
  +K.card(18,26,124,48,14)
  +K.txt(44,54,"소개",{size:11,w:700,a:"middle",fill:C.sub})+K.txt(80,54,"작업",{size:11,w:700,a:"middle"})+K.txt(116,54,"문의",{size:11,w:700,a:"middle",fill:C.sub})
  +A("ul",K.rect(68,59.5,24,2.8,{f:C.blue,r:1.4}),"transform-origin:0 50%")+cur(87,63);
kf("ul",2.6,"0%,12%{transform:scaleX(0);opacity:1}46%,84%{transform:scaleX(1);opacity:1}96%,100%{transform:scaleX(1);opacity:0}");

TH2["버튼 채워지기"]=K=>{const c="b231b"+K.id(),t=f=>K.txt(80,54.5,"시작하기",{size:12,w:700,a:"middle",fill:f});
  return K.blk(28,10,70,10,5)+K.card(28,32,104,36,18)+t(C.blue)
  +clip(28,32,104,36,18,A("bf",K.rect(28,32,104,36,{f:C.blue}),"transform-origin:0 50%;transform:scaleX(.6)"))
  +`<defs><clipPath id="${c}"><rect x="28" y="32" width="104" height="36" class="b2x31 b2a-n31bf" style="transform-origin:0 50%;transform:scaleX(.6)"/></clipPath></defs><g clip-path="url(#${c})">${t("#fff")}</g>`
  +K.rect(28,32,104,36,{s:C.blue,sw:1.6,r:18})+cur(108,56)};
kf("bf",2.8,"0%,12%{transform:scaleX(0)}54%,84%{transform:scaleX(1)}100%{transform:scaleX(0)}");

/* ───────── 화면 · 배치가 바뀔 때 ───────── */
TH2["페이지 전환"]=K=>brow()
  +clip(20,8,120,84,14,clip(20,27.3,120,64.7,0,photo(28,34,50,36,8)+tbar(86,38,40)+gbar(86,48,46)+gbar(86,56,34)+gbar(28,78,90)
    +A("pgb",K.rect(20,27,120,66,{f:"#fff"})+photo(82,34,50,36,8,true)+tbar(28,38,40)+gbar(28,48,46)+gbar(28,56,34)+gbar(28,78,90),"opacity:0")
    +A("pgp",K.rect(20,27,120,66,{f:C.blue})+K.circ(80,60,7,{s:"#fff",sw:2.2,o:.9}),"transform:translateY(27px)")));
kf("pgp",3,"0%,8%{transform:translateY(67px)}40%,52%{transform:translateY(0)}84%,100%{transform:translateY(-67px)}",EIO);
kf("pgb",3,"0%,45%{opacity:0}46%,94%{opacity:1}100%{opacity:0}");

TH2["뷰 트랜지션"]=K=>brow()
  +dashR(28,34,22,18,5)+K.rect(54,34,22,18,{f:"#FBE1EB",r:5})+K.rect(28,56,22,18,{f:"#DDF3E7",r:5})+K.rect(54,56,22,18,{f:"#FFEFD6",r:5})
  +gbar(28,80,40)
  +tbar(86,74,28)+gbar(86,83,42,3.5)
  +A("vt",photo(86,34,46,34,7),"transform-origin:0 0");
kf("vt",2.8,"0%,14%{transform:translate(-58px,0px) scale(.478,.53)}52%,84%{transform:translate(0px,0px) scale(1,1)}100%{transform:translate(-58px,0px) scale(.478,.53)}");

TH2["레이아웃 애니메이션"]=K=>K.card(18,8,124,84,14)
  +clip(18,8,124,84,14,
    A("laa",K.rect(26,16,108,30,{f:C.blue,r:8}),"transform-origin:0 50%")
    +S(`<rect x="29" y="19" width="45" height="24" rx="6" style="fill:none;stroke:#fff;stroke-width:1.1;stroke-dasharray:3 3;opacity:.8"/>`)
    +A("lab",K.rect(26,52,51,30,{f:"#C9D6FF",r:8}))+A("lac",K.rect(83,52,51,30,{f:"#FBE1EB",r:8}))
    +A("lad",rr(26,88,51,30,8,"#DDF3E7")));
kf("laa",3,"0%,14%{transform:scaleX(.472)}50%,84%{transform:scaleX(1)}100%{transform:scaleX(.472)}");
kf("lab",3,"0%,14%{transform:translate(57px,-36px)}50%,84%{transform:translate(0px,0px)}100%{transform:translate(57px,-36px)}");
kf("lac",3,"0%,14%{transform:translate(-57px,0px)}50%,84%{transform:translate(0px,0px)}100%{transform:translate(-57px,0px)}");
kf("lad",3,"0%,14%{transform:translate(57px,-36px)}50%,84%{transform:translate(0px,0px)}100%{transform:translate(57px,-36px)}");

TH2["순서 바뀜 애니메이션"]=K=>{const row=(y,on)=>(on?K.card(34,y,92,22,8,"#EAF0FF"):K.rect(34,y,92,22,{f:"#F3F5FA",r:8}))+K.circ(46,y+11,5,{f:on?C.blue:C.skel})+K.rect(57,y+6,on?46:38,4,{f:on?"#9DB6FF":"#D3D8E3",r:2})+K.rect(57,y+13,on?28:24,3.5,{f:on?"#C4D3FF":"#E3E7EF",r:1.75});
  return K.card(26,6,108,88,14)+row(14)
  +A("roa",row(66),"transform:translateY(-8px)")
  +A("rob",row(40,true),"transform:translate(6px,9px)")};
kf("rob",3,"0%,12%{transform:translate(0px,26px)}32%{transform:translate(7px,12px)}52%,86%{transform:translate(0px,0px)}100%{transform:translate(0px,26px)}");
kf("roa",3,"0%,12%{transform:translateY(-26px)}52%,86%{transform:translateY(0px)}100%{transform:translateY(-26px)}");

TH2["삭제 시 접힘"]=K=>{const row=(y,red)=>rr(34,y,92,20,8,red?"#FDE8E8":"#F3F5FA")+`<circle cx="45" cy="${y+10}" r="4.5" style="fill:${red?"#F3A6A8":C.skel}"/>`+rr(55,y+8,red?40:(y%3?44:36),4,2,red?"#F3A6A8":"#D3D8E3");
  return K.card(26,6,108,88,14)+clip(26,6,108,88,14,row(14)
  +A("dcx",row(38,true)+K.icon("trash",114,48,11,C.red,1.7),"transform:translateX(-24px);opacity:.6")
  +A("dcu",row(62)+row(86)+row(110),"transform:translateY(-9px)"))};
kf("dcx",3,"0%,14%{transform:none;opacity:1}40%,86%{transform:translateX(-80px);opacity:0}87%{transform:none;opacity:0}100%{transform:none;opacity:1}");
kf("dcu",3,"0%,34%{transform:none}60%,86%{transform:translateY(-24px)}100%{transform:none}");

TH2["카드 넘김"]=K=>K.rect(54,9,52,60,{f:"#fff",r:12,o:.55})
  +K.card(46,14,68,74,14)+photo(52,20,56,40,9,true)+tbar(52,68,34)+gbar(52,78,46)
  +A("csw",K.card(46,14,68,74,14)+photo(52,20,56,40,9)+tbar(52,68,34)+gbar(52,78,46),"transform-origin:50% 130%;transform:translateX(20px) rotate(11deg)");
kf("csw",2.8,"0%,12%{transform:translateX(0px) rotate(0deg);opacity:1}52%{transform:translateX(64px) rotate(24deg);opacity:0}53%,70%{transform:translateX(0px) rotate(0deg);opacity:0}90%,100%{transform:translateX(0px) rotate(0deg);opacity:1}");

/* ───────── 입체 · 가림막 전환 ───────── */
TH2["3D 회전"]=K=>`<path d="M80 6V94" style="fill:none;stroke:${C.mute};stroke-width:1;stroke-dasharray:2.5 3"/>`
  +`<path d="M26 50A54 12 0 0 1 134 50" style="fill:none;stroke:${C.mute};stroke-width:1.2;opacity:.6"/>`
  +A("r3",K.rect(58,18,44,64,{f:C.blue,r:8,fx:"url(#b2lift)"})+K.rect(66,28,28,20,{f:"rgba(255,255,255,.3)",r:5})+K.rect(66,56,20,4.5,{f:"#fff",r:2.25})+K.rect(66,66,26,4,{f:"rgba(255,255,255,.6)",r:2}),"transform:skewY(-6deg) scaleX(.74)")
  +`<path d="M26 50A54 12 0 0 0 134 50" style="fill:none;stroke:${C.blue};stroke-width:1.6"/>`+K.circ(108,60.3,3.2,{f:C.blue,s:"#fff",sw:1.4});
kf("r3",3.2,[...Array(25)].map((_,i)=>{const a=i/24*2*Math.PI;return `${n2(i/24*100)}%{transform:skewY(${n2(-9*Math.sin(a))}deg) scaleX(${n2(Math.cos(a))})}`}).join(""),LIN);

TH2["큐브 전환"]=K=>{const face=(alt,sh)=>K.rect(32,22,96,58,{f:"#fff",r:5})+photo(38,28,84,28,5,alt)+tbar(38,62,40)+gbar(38,71,60)+(sh?K.rect(32,22,96,58,{f:"rgba(30,40,100,.13)",r:5}):"");
  return K.blk(48,86,64,7,3.5)
  +A("cua",face(false,true),"transform-origin:100% 50%;transform:translateX(-43.2px) scaleX(.55) skewY(3.6deg)")
  +A("cub",face(true),"transform-origin:0 50%;transform:translateX(52.8px) scaleX(.45) skewY(-4.4deg)")};
kf("cua",3,"0%,12%{transform:translateX(0px) scaleX(1) skewY(0deg)}60%,100%{transform:translateX(-96px) scaleX(0) skewY(8deg)}",EIO);
kf("cub",3,"0%,12%{transform:translateX(96px) scaleX(0) skewY(-8deg)}60%,100%{transform:translateX(0px) scaleX(1) skewY(0deg)}",EIO);

TH2["커튼"]=K=>{const fold=x=>[10,26,42].map(d=>K.line(x+d,10,x+d,90,{s:"#fff",sw:3,o:.14})).join("");
  return K.card(20,10,120,80,14)+photo(28,18,104,40,10)+tbar(28,66,50)+gbar(28,76,80)
  +clip(20,10,120,80,14,A("ctl",K.rect(20,10,60,80,{f:C.blue})+fold(22),"transform:translateX(-36px)")+A("ctr",K.rect(80,10,60,80,{f:C.blue})+fold(84),"transform:translateX(36px)"))};
kf("ctl",3,"0%,12%{transform:none}58%,86%{transform:translateX(-61px)}100%{transform:none}",EIO);
kf("ctr",3,"0%,12%{transform:none}58%,86%{transform:translateX(61px)}100%{transform:none}",EIO);

const TRS=["opacity:0;transform:scale(.6)","opacity:0;transform:scale(.6)","opacity:.3;transform:scale(.78)","opacity:.75;transform:scale(.92)","",""];
TH2["타일 리빌"]=K=>K.card(24,10,112,80,14)+photo(24,10,112,80,14)
  +clip(24,10,112,80,14,[0,1,2].map(j=>[0,1,2,3].map(i=>A("tr"+(i+j),K.rect(24+i*28,10+j*26.67,28,26.67,{f:"#fff",s:C.line,sw:.5}),TRS[i+j])).join("")).join(""));
[0,1,2,3,4,5].forEach(d=>{const s=8+d*9;kf("tr"+d,3,`0%,${s}%{opacity:1;transform:none}${s+18}%,88%{opacity:0;transform:scale(.6)}100%{opacity:1;transform:none}`)});

TH2["클립 패스 전환"]=K=>K.card(20,10,120,80,14)
  +clip(20,10,120,80,14,photo(20,10,120,80,0,true)+K.rect(84,66,44,7,{f:"#fff",r:3.5})+K.rect(100,77,28,4.5,{f:"#fff",r:2.25,o:.8})
   +A("cpt",`<path d="M-160 10H104L64 90H-160Z" style="fill:#fff"/>`+tbar(30,24,40)+gbar(30,35,56)+gbar(30,44,44)+gbar(30,53,50)
     +K.line(104,10,64,90,{s:C.blue,sw:1.6})+K.rect(99.5,12,5,5,{f:"#fff",s:C.blue,sw:1.3})+K.rect(63.5,83,5,5,{f:"#fff",s:C.blue,sw:1.3}),"transform-box:view-box;transform-origin:0 0"));
kf("cpt",3,"0%,12%{transform:translateX(82px)}60%,86%{transform:translateX(-112px)}100%{transform:translateX(82px)}",EIO);

TH2["플립 시계"]=K=>{const D="#1F2329";
  const face=(x,d,f=D)=>K.rect(x,28,26,44,{f,r:5})+K.txt(x+13,61,d,{size:31,w:800,fill:"#fff",a:"middle"});
  const half=(x,d,top,f)=>clip(x,top?28:50,26,22,0,face(x,d,f));
  const split=x=>K.line(x,50,x+26,50,{s:"#0B0D12",sw:1.1});
  return K.card(14,18,132,64,14)
  +[[22,"1"],[50,"2"],[84,"4"]].map(([x,d])=>face(x,d)+split(x)).join("")
  +K.circ(80,43.5,2,{f:D})+K.circ(80,56.5,2,{f:D})
  +face(112,"6")+half(112,"5",false)
  +A("fcb",half(112,"6",false),"transform:scaleY(0)")
  +A("fca",half(112,"5",true,"#3A4050"),"transform:scaleY(.55)")
  +split(112)};
kf("fca",2.8,"0%,24%{transform:scaleY(1)}44%,100%{transform:scaleY(0)}","animation-timing-function:ease-in");
kf("fcb",2.8,"0%,44%{transform:scaleY(0)}62%,100%{transform:scaleY(1)}","animation-timing-function:ease-out");

/* ───────── 글자 · 아이콘 ───────── */
TH2["글자별 등장"]=K=>K.blk(18,8,50,9,4.5)+K.blk(18,84,90,9,4.5)+K.card(16,24,128,52,14)
  +[..."안녕하세요"].map((ch,i)=>A("lc"+i,K.txt(34+i*23,57,ch,{size:19,w:800,a:"middle"}),["","","","opacity:.5;transform:translateY(5px)","opacity:.16;transform:translateY(10px)"][i])).join("");
[0,1,2,3,4].forEach(i=>{const s=8+i*10;kf("lc"+i,3,`0%,${s}%{opacity:0;transform:translateY(12px)}${s+16}%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}`)});

TH2["햄버거 → X 전환"]=K=>K.card(20,30,42,40,13)+[41.2,48.2,55.2].map(y=>K.rect(30,y,22,3.6,{f:C.mute,r:1.8})).join("")
  +K.card(74,18,64,64,18)
  +A("hx0",K.rect(90,37.6,32,4.8,{f:C.blue,r:2.4}),"transform:translateY(10px) rotate(45deg)")
  +A("hx1",K.rect(90,47.6,32,4.8,{f:C.blue,r:2.4}),"opacity:0;transform:scaleX(.2)")
  +A("hx2",K.rect(90,57.6,32,4.8,{f:C.blue,r:2.4}),"transform:translateY(-10px) rotate(-45deg)");
kf("hx0",2.8,"0%,16%{transform:translateY(0px) rotate(0deg)}50%,84%{transform:translateY(10px) rotate(45deg)}100%{transform:translateY(0px) rotate(0deg)}");
kf("hx1",2.8,"0%,16%{opacity:1;transform:scaleX(1)}40%,90%{opacity:0;transform:scaleX(.2)}100%{opacity:1;transform:scaleX(1)}");
kf("hx2",2.8,"0%,16%{transform:translateY(0px) rotate(0deg)}50%,84%{transform:translateY(-10px) rotate(-45deg)}100%{transform:translateY(0px) rotate(0deg)}");

const IM={pl:"M96 36L108 43L108 57L96 64Z",pr:"M108 43L120 50L120 50L108 57Z",ul:"M94 36L102 36L102 64L94 64Z",ur:"M110 36L118 36L118 64L110 64Z"};
TH2["아이콘 모핑"]=K=>{const p=(d,c)=>`<path d="${d}" class="b2x31 b2a-n31${c}" style="fill:#fff;stroke:#fff;stroke-width:2.4"/>`;
  return K.card(20,30,40,40,20)+`<path d="M35 41.5L48 50L35 58.5Z" style="fill:${C.mute};stroke:${C.mute};stroke-width:2"/>`
  +K.card(74,18,64,64,32,C.blue)+p(IM.ul,"iml")+p(IM.ur,"imr")};
kf("iml",2.8,`0%,16%{d:path("${IM.pl}")}50%,84%{d:path("${IM.ul}")}100%{d:path("${IM.pl}")}`);
kf("imr",2.8,`0%,16%{d:path("${IM.pr}")}50%,84%{d:path("${IM.ur}")}100%{d:path("${IM.pr}")}`);

TH2["배경 영상 루프"]=K=>{const g="b231v"+K.id(),cloud=(x,y,s)=>`<ellipse cx="${x}" cy="${y}" rx="${n2(13*s)}" ry="${n2(4.6*s)}" style="fill:#fff"/><ellipse cx="${n2(x-4*s)}" cy="${n2(y-3.4*s)}" rx="${n2(6.5*s)}" ry="${n2(4.4*s)}" style="fill:#fff"/>`;
  return `<defs>${K.grad(g,[[0,"#7FA0FF"],[1,"#E5C8F3"]],0,1)}</defs>`+K.card(16,10,128,80,14)
  +clip(16,10,128,80,14,K.rect(16,10,128,80,{f:`url(#${g})`})+K.circ(96,37,8,{f:"#FFF6DE"})
    +A("bvc",[0,1,2,3,4,5].map(i=>cloud(30+i*64,i%2?31:22,i%2?.8:1)+cloud(62+i*64,i%2?20:36,.6)).join(""),"transform:translateX(-22px);opacity:.85")
    +`<path d="M16 90L52 52L76 74L100 58L144 82V90Z" style="fill:#5B78E0"/>`+K.rect(16,10,128,80,{f:"rgba(18,20,40,.16)"}))
  +K.rect(28,42,62,8,{f:"#fff",r:4})+K.rect(28,55,42,5,{f:"#fff",r:2.5,o:.8})+K.rect(28,67,34,13,{f:"#fff",r:6.5})+K.rect(37,72,16,3.5,{f:C.blue,r:1.75})
  +K.rect(112,17,24,14,{f:"rgba(18,20,26,.55)",r:7})+A("bvi",K.icon("q31loop",124,24,9.5,"#fff",1.8))};
kf("bvc",3.2,"0%{transform:translateX(0px)}100%{transform:translateX(-128px)}",LIN);
kf("bvi",3.2,"0%,60%{transform:rotate(0deg)}100%{transform:rotate(180deg)}");
}
