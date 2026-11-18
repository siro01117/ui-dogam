// B2 그림: mo · ge · ic · sh · ai
// 움직이는 부분은 class="b2x4 b2a-…" (b2x4 = 이 파일 공통 속성). transform 속성이 있는 요소(K.icon 의 g)에는 클래스를 직접 달지 않고 겉 g 로 감싼다.
{
const A=(c,inner,st="")=>`<g class="b2x4 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x4{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const n2=K.n2, C=K.C;
// 정지 모습에만 보이는 힌트 (움직일 때는 숨는다)
const S=inner=>A("so",inner);
kf("so",1,"0%,100%{opacity:0}");

// 아이콘 보충 (q4 접두어)
Object.assign(K.ICON,{
  q4zoom:["M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z","M15.5 15.5L20 20","M10.5 7.8v5.4","M7.8 10.5h5.4"],
  q4compose:["M11 4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V13","M17.5 3.5l3 3L12 15l-4 1 1-4z"],
  q4floppy:["M5.5 4H16l4 4v10.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13A1.5 1.5 0 0 1 5.5 4z","M8 4v5h7V4","M7.5 20v-6h9v6"],
  q4export:["M13.5 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h10a1.5 1.5 0 0 0 1.5-1.5V18","M13.5 3L18 7.5V10","M9.5 14h11.5","M18 11l3 3-3 3"],
  q4fwd:["M14 6l6 6-6 6","M20 12H10a6 6 0 0 0-6 6v1"],
  q4repost:["M4 11V9a3 3 0 0 1 3-3h12","M16 3l3 3-3 3","M20 13v2a3 3 0 0 1-3 3H5","M8 21l-3-3 3-3"],
  q4up:["M12 19V5","M6.5 10.5L12 5l5.5 5.5"],
});
// 채운 아이콘(하트 등)
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b24p"+i,c="b24c"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const photoCard=(x,y,w,h,r,alt)=>K.rect(x,y,w,h,{f:C.sf,r,fx:"url(#b2lift)"})+photo(x,y,w,h,r,alt);
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});        // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});        // 흰 면 위 글줄
const dash=(x,y,w,h,r)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" style="fill:rgba(47,107,255,.06);stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`;

/* ───────── 모션 · 전환 ───────── */
TH2["페이드 업"]=K=>K.blk(16,10,128,22,11)
  +S(K.rect(28,53,104,46,{f:"#fff",r:14,o:.4})+K.rect(28,47.5,104,46,{f:"#fff",r:14,o:.65}))
  +A("fu",K.card(28,42,104,46,14)+photo(36,50,30,30,8)+tbar(74,56,48)+gbar(74,66,36)+gbar(74,74,44));
kf("fu",2.6,"0%,10%{opacity:0;transform:translateY(20px)}46%,84%{opacity:1;transform:none}97%,100%{opacity:0;transform:none}");

TH2["패럴랙스"]=K=>A("plb",photoCard(10,4,140,64,14))
  +A("plf",K.card(30,54,100,40,14)+tbar(42,66,56)+gbar(42,76,76)+gbar(42,84,50));
kf("plb",3,"0%,12%{transform:none}52%,66%{transform:translateY(-5px)}96%,100%{transform:none}");
kf("plf",3,"0%,12%{transform:none}52%,66%{transform:translateY(-24px)}96%,100%{transform:none}");

TH2["스케일 인"]=K=>K.blk(16,8,128,14,7)
  +S([[37,27,-1,-1],[123,27,1,-1],[37,95,-1,1],[123,95,1,1]].map(([x,y,a,b])=>K.line(x,y,x+a*3.5,y+b*3.5,{s:C.blue,sw:1.8,o:.75})).join(""))
  +A("sci",K.card(40,30,80,62,14)+photo(46,36,68,32,9)+tbar(46,75,40)+gbar(46,84,56));
kf("sci",2.6,"0%,10%{opacity:0;transform:scale(.35)}46%,84%{opacity:1;transform:none}97%,100%{opacity:0;transform:none}");

TH2["텍스트 리빌"]=K=>K.card(20,12,120,76,14)
  +["천천히","한 줄씩","진해져요"].map((s,i)=>A("trv"+i,K.txt(34,36+i*20,s,{size:13,w:700}),"opacity:"+[1,.45,.14][i])).join("");
[0,1,2].forEach(i=>{const s=10+i*16;kf("trv"+i,3,`0%,${s}%{opacity:.1}${s+16}%,84%{opacity:1}96%,100%{opacity:.1}`)});

TH2["스태거"]=K=>[0,1,2].map(i=>{const y=10+i*28;return A("stg"+i,K.card(22,y,116,24,12)+K.circ(36,y+12,6,{f:i===0?C.blue:"#C9D6FF"})+tbar(48,y+7,i===2?40:54,4)+gbar(48,y+14,i===1?66:46,3.5),`opacity:${[1,.55,.22][i]};transform:translateY(${i*4}px)`)}).join("");
[0,1,2].forEach(i=>{const s=10+i*12;kf("stg"+i,2.8,`0%,${s}%{opacity:0;transform:translateY(12px)}${s+22}%,82%{opacity:1;transform:none}95%,100%{opacity:0;transform:none}`)});

TH2["푸시 전환"]=K=>A("pso",K.card(20,10,120,80,14)+tbar(32,22,46)+[0,1,2].map(i=>K.circ(38,42+i*16,5,{f:C.skel})+gbar(48,40+i*16,70)).join(""),"opacity:.45;transform:translateX(-22px)")
  +A("psn",K.card(20,10,120,80,14)+K.icon("back",32,22,10,C.ink,2)+photo(30,32,100,34,9,true)+tbar(30,73,52)+gbar(30,82,74),"transform:translateX(60px)");
kf("pso",2.8,"0%,12%{opacity:1;transform:none}50%,84%{opacity:.35;transform:translateX(-36px)}96%,100%{opacity:1;transform:none}");
kf("psn",2.8,"0%,12%{opacity:1;transform:translateX(142px)}50%,84%{opacity:1;transform:none}94%{opacity:0;transform:none}100%{opacity:0;transform:translateX(142px)}");

TH2["모달 등장"]=K=>K.blk(20,8,120,84,14)+gbar(32,22,50)+gbar(32,32,80)
  +A("mdd",K.rect(0,0,160,100,{f:C.dim}))
  +A("mdm",K.card(12,18,136,92,16)+K.icon("x",28,32,11,C.ink,2)+tbar(58,30,44)+photo(24,44,112,30,9)+gbar(24,81,96)+gbar(24,90,60));
kf("mdd",2.8,"0%,10%{opacity:0}46%,84%{opacity:1}97%,100%{opacity:0}");
kf("mdm",2.8,"0%,10%{opacity:1;transform:translateY(86px)}48%,84%{opacity:1;transform:none}96%{opacity:0;transform:none}100%{opacity:0;transform:translateY(86px)}");

TH2["탭 전환"]=K=>{const c="b24t"+K.id();
  const p1=[["#DCE6FF",0,0],["#FBE1EB",1,0],["#DDF3E7",0,1],["#FFEFD6",1,1]].map(([f,a,b])=>K.rect(144+a*50,14+b*28,46,24,{f,r:7})).join("");
  return K.card(24,6,112,88,14)
  +`<defs><clipPath id="${c}"><rect x="24" y="6" width="112" height="66" rx="14"/></clipPath></defs><g clip-path="url(#${c})">`
  +A("tbs",photo(32,14,96,30,8)+tbar(32,51,60)+gbar(32,60,82)+p1,"transform:translateX(-56px)")+`</g>`
  +K.line(24,72,136,72,{s:C.line,sw:.6})
  +A("tbp",K.rect(40,75,24,16,{f:C.blueSoft,r:8}),"transform:translateX(28px)")
  +K.icon("home",52,83,11,C.mute,1.8)+K.icon("grid",80,83,11,C.mute,1.8)+K.icon("user",108,83,11,C.mute,1.8)
  +A("tbi0",K.icon("home",52,83,11,C.blue,1.8),"opacity:0")+A("tbi1",K.icon("grid",80,83,11,C.blue,1.8))};
kf("tbs",3.2,"0%,14%{transform:none}40%,66%{transform:translateX(-112px)}92%,100%{transform:none}");
kf("tbp",3.2,"0%,14%{transform:none}40%,66%{transform:translateX(28px)}92%,100%{transform:none}");
kf("tbi0",3.2,"0%,14%{opacity:1}30%,74%{opacity:0}90%,100%{opacity:1}");
kf("tbi1",3.2,"0%,24%{opacity:0}40%,66%{opacity:1}82%,100%{opacity:0}");

TH2["카드 확장"]=K=>K.blk(20,10,56,38,12)+K.blk(84,10,56,38,12)+K.blk(84,54,56,38,12)
  +A("cx",K.card(12,6,136,88,14)+photo(20,14,120,46,10)+tbar(20,68,64)+gbar(20,78,96),"transform-origin:0 0;transform:translate(4px,24px) scale(.7,.72)");
kf("cx",2.8,"0%,14%{transform:translate(8px,48px) scale(.4118,.4318)}50%,82%{transform:none}96%,100%{transform:translate(8px,48px) scale(.4118,.4318)}");

TH2["공유 요소 전환"]=K=>K.card(8,10,66,80,12)+[0,1,2].map(i=>K.rect(14,18+i*22,22,15,{f:C.skel,r:4})+gbar(40,21+i*22,28)+gbar(40,28+i*22,18,3)).join("")
  +K.card(86,10,66,80,12)+K.rect(92,16,54,32,{f:C.skel,r:8})+tbar(92,56,36)+gbar(92,66,50)+gbar(92,74,40)
  +A("shx",photo(92,16,54,32,8),"transform-origin:0 0;transform:translate(-39px,1px) scale(.7,.73)");
kf("shx",2.8,"0%,14%{transform:translate(-78px,2px) scale(.4074,.4688)}50%,82%{transform:none}96%,100%{transform:translate(-78px,2px) scale(.4074,.4688)}");

// 이즈 · 스프링: 그래프 곡선과 그 곡선을 그대로 따라가는 점
const curve=(name,fn,target)=>{const ox=34,oy=80,W=92,H=50,N=40;
  const pts=[...Array(N+1)].map((_,i)=>{const x=i/N;return [ox+W*x,oy-H*fn(x)]});
  const d="M"+pts.map(p=>n2(p[0])+" "+n2(p[1])).join("L");
  kf(name,2.8,"0%{opacity:0}5%,88%{opacity:1}96%,100%{opacity:0}"+"0%,12%{transform:none}"
    +pts.map((p,i)=>`${n2(12+60*i/N)}%{transform:translate(${n2(p[0]-ox)}px,${n2(p[1]-oy)}px)}`).join("")
    +`100%{transform:translate(${W}px,${n2(pts[N][1]-oy)}px)}`,"animation-timing-function:linear");
  return K=>K.card(18,8,124,84,14)+K.line(34,80,126,80,{s:C.line,sw:.8})+K.line(34,80,34,22,{s:C.line,sw:.8})
    +(target?`<path d="M34 30H126" style="fill:none;stroke:${C.mute};stroke-width:.8;stroke-dasharray:2.5 2.5"/>`:"")
    +K.path(d,{s:C.blueSoft,sw:5})+K.path(d,{s:C.blue,sw:1.8})
    +A(name,K.circ(34,80,4.6,{f:C.ink,s:"#fff",sw:1.6}))};
TH2["이즈 아웃"]=curve("eo",x=>1-Math.pow(1-x,3));
TH2["이즈 인"]=curve("ei",x=>x*x*x);
TH2["스프링"]=curve("spr",x=>1-Math.exp(-6*x)*Math.cos(10*x),true);

TH2["러버밴드"]=K=>{const c="b24r"+K.id();
  return K.card(28,6,104,88,14)+`<defs><clipPath id="${c}"><rect x="28" y="6" width="104" height="88" rx="14"/></clipPath></defs><g clip-path="url(#${c})">`
  +A("rbl",[0,1,2,3].map(i=>{const y=12+i*20;return K.rect(36,y,88,16,{f:i===3?C.blueSoft:"#F3F5FA",r:8})+K.circ(45,y+8,4.5,{f:i===3?C.blue:C.skel})+gbar(54,y+6,i===3?40:56,4)}).join(""),"transform:translateY(-18px)")+`</g>`
  +A("rbf",K.fing(80,70),"transform:translateY(-20px)")};
kf("rbl",2.6,"0%,14%{transform:none}44%,52%{transform:translateY(-18px);animation-timing-function:cubic-bezier(.3,1.6,.5,1)}74%,100%{transform:none}");
kf("rbf",2.6,"0%,8%{opacity:0;transform:none}14%{opacity:1;transform:none}44%,50%{opacity:1;transform:translateY(-20px)}60%,100%{opacity:0;transform:translateY(-20px)}");

const TY="안녕하세요", TYS=[12,22,32,42,52], TYX=41, TYW=15.6;
TH2["타이핑 효과"]=K=>K.blk(24,12,112,12,6)+K.card(20,32,120,38,12)
  +[...TY].map((ch,i)=>A("ty"+i,K.txt(TYX+i*TYW,57,ch,{size:15,w:700}),i>2?"opacity:0":"")).join("")
  +A("tyc",A("tyb",K.rect(TYX-1.5,43,2.4,18,{f:C.blue,r:1.2})),`transform:translateX(${n2(3*TYW+3)}px)`);
TYS.forEach((s,i)=>kf("ty"+i,3,`0%,${s}%{opacity:0}${s+.1}%,86%{opacity:1}96%,100%{opacity:0}`));
kf("tyc",3,"0%{transform:none}"+TYS.map((s,i)=>`${s}%{transform:translateX(${n2(i*TYW)}px)}${s+.1}%{transform:translateX(${n2((i+1)*TYW)}px)}`).join("")+`96%{transform:translateX(${n2(5*TYW)}px)}100%{transform:none}`,"animation-timing-function:linear");
kf("tyb",.9,"0%,49%{opacity:1}50%,100%{opacity:0}","animation-timing-function:linear");

const CU={v:["0","96","312","584","841","1,052","1,197","1,284"],t:[0,16,21,27,34,42,51,62]};
TH2["카운트 업"]=K=>K.blk(36,12,88,12,6)+K.card(26,30,108,50,14)
  +CU.v.map((v,i)=>A("cu"+i,K.txt(80,64,v,{size:24,w:700,a:"middle"}),i<CU.v.length-1?"opacity:0":"")).join("");
CU.v.forEach((_,i)=>{const t=CU.t,last=i===t.length-1;
  kf("cu"+i,3,last?`0%,${t[i]}%{opacity:0}${t[i]+.1}%,86%{opacity:1}96%,100%{opacity:0}`
    :i===0?`0%,${t[1]}%{opacity:1}${t[1]+.1}%,100%{opacity:0}`
    :`0%,${t[i]}%{opacity:0}${t[i]+.1}%,${t[i+1]}%{opacity:1}${t[i+1]+.1}%,100%{opacity:0}`,"animation-timing-function:linear")});

const SC={ch:"안녕하세요",sym:[["#","@"],["%","&"],["*","$"],["@","#"],["&","%"]],r:[28,38,48,58,68]};
TH2["스크램블"]=K=>K.blk(24,12,112,12,6)+K.card(20,32,120,38,12)
  +[...SC.ch].map((ch,i)=>{const x=44+i*18;
    return A("scr"+i,A("flka",K.txt(x,57,SC.sym[i][0],{size:15,w:700,a:"middle",fill:C.blue}))+A("flkb",K.txt(x,57,SC.sym[i][1],{size:15,w:700,a:"middle",fill:C.blue}),"opacity:0"),i<2?"opacity:0":"")
      +A("fin"+i,K.txt(x,57,ch,{size:15,w:700,a:"middle"}),i<2?"":"opacity:0")}).join("");
SC.r.forEach((r,i)=>{kf("scr"+i,3,`0%,${r}%{opacity:1}${r+.1}%,88%{opacity:0}96%,100%{opacity:1}`,"animation-timing-function:linear");
  kf("fin"+i,3,`0%,${r}%{opacity:0}${r+.1}%,88%{opacity:1}96%,100%{opacity:0}`,"animation-timing-function:linear")});
kf("flka",.24,"0%,49%{opacity:1}50%,100%{opacity:0}","animation-timing-function:linear");
kf("flkb",.24,"0%,49%{opacity:0}50%,100%{opacity:1}","animation-timing-function:linear");

TH2["블러 인"]=K=>{const c="b24b"+K.id(), body=()=>K.card(36,28,88,64,14)+photo(42,34,76,32,9,true)+tbar(42,73,44)+gbar(42,82,60);
  return K.blk(16,8,128,14,7)
  +A("bli",body())
  +S(`<defs><clipPath id="${c}"><rect x="24" y="20" width="56" height="80"/></clipPath></defs><g clip-path="url(#${c})">`+K.rect(36,28,88,64,{f:"#fff",r:14})+`<g style="filter:blur(3px)">${body()}</g></g>`)};
kf("bli",2.6,"0%,10%{filter:blur(5px);opacity:.4}50%,84%{filter:blur(0px);opacity:1}97%,100%{filter:blur(5px);opacity:.4}");

/* ───────── 제스처 ───────── */
TH2["ge:탭"]=K=>K.blk(16,10,128,16,8)
  +A("tpb",K.card(44,38,72,28,14)+K.txt(80,55.5,"확인",{size:9.5,w:700,fill:C.blue,a:"middle"})
    +A("tpr",K.circ(100,52,12,{f:"rgba(47,107,255,.22)"})))
  +A("tpf",K.fing(100,52));
kf("tpf",2.4,"0%,12%{opacity:0;transform:translate(10px,16px)}30%{opacity:1;transform:none}36%{transform:scale(.8)}44%,62%{opacity:1;transform:none}80%,100%{opacity:0;transform:translate(10px,16px)}");
kf("tpb",2.4,"0%,32%{transform:none}38%{transform:scale(.95)}48%,100%{transform:none}");
kf("tpr",2.4,"0%,34%{opacity:0;transform:scale(.2)}38%{opacity:1;transform:scale(.4)}70%,100%{opacity:0;transform:scale(1.3)}");

TH2["더블 탭"]=K=>photoCard(44,8,72,84,14)
  +A("dth",fillIcon("heart",80,48,34,C.red))
  +A("dt0",K.circ(96,66,12,{s:"#fff",sw:2}))+A("dt1",K.circ(96,66,12,{s:"#fff",sw:2}),"opacity:.6;transform:scale(1.45)")
  +A("dtf",K.fing(96,66));
kf("dtf",2.8,"0%,10%{opacity:0;transform:translate(8px,10px)}24%{opacity:1;transform:none}28%{transform:scale(.8)}32%{transform:none}36%{transform:scale(.8)}42%,60%{opacity:1;transform:none}76%,100%{opacity:0;transform:translate(8px,10px)}");
kf("dt0",2.8,"0%,26%{opacity:0;transform:scale(.4)}28%{opacity:1;transform:scale(.5)}52%,100%{opacity:0;transform:scale(1.5)}");
kf("dt1",2.8,"0%,34%{opacity:0;transform:scale(.4)}36%{opacity:1;transform:scale(.5)}60%,100%{opacity:0;transform:scale(1.7)}");
kf("dth",2.8,"0%,36%{opacity:0;transform:scale(0)}46%{opacity:1;transform:scale(1.25)}54%,80%{opacity:1;transform:none}92%,100%{opacity:0;transform:scale(.9)}");

TH2["길게 누르기"]=K=>A("lpb",K.card(14,12,100,28,14)+gbar(26,20,64)+gbar(26,28,44))
  +A("lpm",K.card(36,46,92,48,12)+[["copy",C.ink],["share",C.ink],["trash",C.red]].map(([n,c],i)=>K.icon(n,48,56+i*14,9,c,1.8)+K.rect(58,54+i*14,i===2?30:46,4,{f:i===2?"rgba(229,72,77,.35)":"#D3D8E3",r:2})).join(""),"transform-origin:0 0")
  +K.fing(66,26)
  +`<path d="M66 15a11 11 0 1 1-0.01 0" pathLength="100" class="b2x4 b2a-lpr" style="fill:none;stroke:${C.blue};stroke-width:2.6;stroke-dasharray:100"/>`;
kf("lpr",2.8,"0%,10%{stroke-dashoffset:100;opacity:1}50%{stroke-dashoffset:0;opacity:1}58%,100%{stroke-dashoffset:0;opacity:0}","animation-timing-function:linear");
kf("lpm",2.8,"0%,50%{opacity:0;transform:scale(.85)}60%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}");
kf("lpb",2.8,"0%,48%{transform:none}56%,86%{transform:scale(1.04)}96%,100%{transform:none}");

TH2["스와이프"]=K=>A("swl",photoCard(30,10,100,64,14)+photoCard(140,10,100,64,14,true))
  +[0,1,2].map(i=>K.circ(72+i*8,85,2,{f:C.mute})).join("")+A("swd",K.rect(69,83,6,4,{f:C.blue,r:2}))
  +A("swt",K.rect(54,38,64,12,{f:"rgba(47,107,255,.22)",r:6}),"transform-origin:right center")
  +A("swf",K.fing(118,44),"transform:translateX(-70px)");
kf("swl",2.8,"0%{opacity:0;transform:none}6%,18%{opacity:1;transform:none}44%,84%{opacity:1;transform:translateX(-110px)}92%,100%{opacity:0;transform:translateX(-110px)}");
kf("swd",2.8,"0%,18%{transform:none}44%,84%{transform:translateX(8px)}92%,100%{transform:translateX(8px);opacity:0}");
kf("swt",2.8,"0%,16%{opacity:0;transform:scaleX(0)}20%{opacity:1;transform:scaleX(0)}40%{opacity:1;transform:none}54%,100%{opacity:0;transform:none}");
kf("swf",2.8,"0%,10%{opacity:0;transform:none}18%{opacity:1;transform:none}40%{opacity:1;transform:translateX(-70px)}52%,100%{opacity:0;transform:translateX(-70px)}");

TH2["드래그"]=K=>dash(14,30,54,40,12)+K.blk(14,78,132,12,6)
  +A("dgc",photoCard(92,30,54,40,12)+A("dgf",K.fing(119,50)));
kf("dgc",2.8,"0%,12%{opacity:1;transform:none}20%{transform:scale(1.07)}58%{transform:translateX(-78px) scale(1.07)}66%,84%{opacity:1;transform:translateX(-78px)}94%{opacity:0;transform:translateX(-78px)}100%{opacity:0;transform:none}");
kf("dgf",2.8,"0%,6%{opacity:0}12%,62%{opacity:1}70%,100%{opacity:0}");

TH2["핀치"]=K=>K.blk(14,10,40,12,6)
  +A("pci",photoCard(62,32,36,36,9),"transform:scale(1.5)")
  +S(`<rect x="62" y="32" width="36" height="36" rx="9" style="fill:none;stroke:#fff;stroke-width:1.4;stroke-dasharray:3 3"/>`+K.line(68,62,59,71,{s:"rgba(47,107,255,.3)",sw:8})+K.line(92,38,101,29,{s:"rgba(47,107,255,.3)",sw:8}))
  +A("pf1",K.fing(68,62),"transform:translate(-9px,9px)")+A("pf2",K.fing(92,38),"transform:translate(9px,-9px)");
kf("pci",2.8,"0%,14%{transform:none}50%,70%{transform:scale(1.85)}94%,100%{transform:none}");
kf("pf1",2.8,"0%,14%{transform:none}50%,70%{transform:translate(-16px,16px)}94%,100%{transform:none}");
kf("pf2",2.8,"0%,14%{transform:none}50%,70%{transform:translate(16px,-16px)}94%,100%{transform:none}");

TH2["밀어서 삭제"]=K=>K.blk(14,10,132,22,11)+K.blk(14,68,132,22,11)
  +K.rect(92,39,54,24,{f:C.red,r:12})+K.txt(124,53.8,"삭제",{size:8.5,w:700,fill:"#fff",a:"middle"})
  +A("sdr",K.card(14,39,132,24,12)+K.circ(28,51,6,{f:"#C9D6FF"})+tbar(40,46,50,4)+gbar(40,53,70,3.5),"transform:translateX(-50px)")
  +A("sdf",K.fing(120,51),"transform:translateX(-50px)");
kf("sdr",2.8,"0%,14%{transform:none}48%,78%{transform:translateX(-50px)}96%,100%{transform:none}");
kf("sdf",2.8,"0%,8%{opacity:0;transform:none}14%{opacity:1;transform:none}48%{opacity:1;transform:translateX(-50px)}58%,100%{opacity:0;transform:translateX(-50px)}");

TH2["엣지 스와이프"]=K=>K.blk(12,8,136,84,14)+gbar(24,22,50)+gbar(24,34,80)+gbar(24,44,64)
  +A("egp",K.card(12,8,136,84,14)+K.icon("back",26,22,10,C.ink,2)+tbar(36,20,40)+photo(22,34,116,30,9)+gbar(22,72,90)+gbar(22,81,60),"transform:translateX(46px)")
  +K.rect(12,22,3,56,{f:C.blue,r:1.5,o:.7})
  +S(K.rect(15,44,49,12,{f:"rgba(47,107,255,.22)",r:6}))
  +A("egf",K.fing(18,50),"transform:translateX(46px)");
kf("egp",2.8,"0%,14%{transform:none}52%,80%{transform:translateX(84px)}96%,100%{transform:none}");
kf("egf",2.8,"0%,8%{opacity:0;transform:none}14%{opacity:1;transform:none}52%{opacity:1;transform:translateX(84px)}62%,100%{opacity:0;transform:translateX(84px)}");

/* ───────── 아이콘: 흰 면 위 큰 선 아이콘 하나 ───────── */
const big=(n,color=C.ink)=>K=>K.card(46,16,68,68,20)+K.icon(n,80,50,40,color,2.2);
TH2["하트 아이콘"]=big("heart",C.red);
TH2["북마크 아이콘"]=big("bookmark");
TH2["닫기 아이콘"]=big("x");
TH2["뒤로 아이콘"]=big("back");
TH2["새로고침 아이콘"]=big("refresh");
TH2["되돌리기 아이콘"]=big("undo");
TH2["검색 아이콘"]=big("search");
TH2["확대 아이콘"]=big("q4zoom");
TH2["수정 아이콘"]=big("edit");
TH2["새 글 아이콘"]=big("q4compose");
TH2["저장 아이콘"]=big("q4floppy");

/* ───────── 공유 ───────── */
TH2["공유"]=big("share",C.blue);
TH2["내보내기"]=big("q4export",C.blue);

TH2["공유 시트"]=K=>K.blk(16,8,128,14,7)+K.rect(0,0,160,100,{f:C.dim})
  +K.card(6,34,148,72,16)+K.rect(70,39,20,3,{f:C.mute,r:1.5,o:.6})
  +[["chat","#1FA971"],["send",C.blue],["link","#8A92A3"],["more","#C3C8D2"]].map(([n,f],i)=>{const cx=35+i*30;return K.circ(cx,59,10,{f})+K.icon(n,cx,59,11,"#fff",2)+K.bar(cx-8,74,16,3.5,"#DDE1EA")}).join("")
  +K.line(18,84,142,84,{s:C.line,sw:.6})+K.icon("copy",24,92,8,C.ink,1.8)+gbar(32,90,40);

TH2["전달"]=K=>K.blk(56,10,88,16,8)
  +K.card(14,34,86,30,15)+gbar(26,43,60)+gbar(26,51,40)
  +K.circ(124,49,14,{f:C.blueSoft})+K.icon("q4fwd",124,49,16,C.blue,2.2)
  +K.blk(14,72,60,16,8);

TH2["링크 복사"]=K=>K.blk(36,12,88,14,7)
  +K.card(12,36,136,30,15)+K.icon("link",27,51,11,C.mute,1.8)+K.txt(37,54,"dogam.kr/ui",{size:8,fill:C.sub})
  +K.rect(102,41,40,20,{f:C.blue,r:10})+K.txt(122,54,"복사",{size:8,w:700,fill:"#fff",a:"middle"})
  +K.blk(36,74,88,14,7);

TH2["리포스트"]=K=>K.card(18,10,124,80,14)+K.circ(32,24,6,{f:"#C9D6FF"})+tbar(42,20,36,4)+gbar(42,27,22,3.5)
  +gbar(26,38,104)+gbar(26,46,80)+K.line(26,60,134,60,{s:C.line,sw:.6})
  +K.icon("chat",36,74,10,C.mute,1.8)
  +K.rect(56,65,46,18,{f:"rgba(31,169,113,.12)",r:9})+K.icon("q4repost",70,74,12,C.green,2)+K.txt(80,77.2,"12",{size:8.5,w:700,fill:C.green})
  +K.icon("heart",124,74,10,C.mute,1.8);

TH2["QR 공유"]=K=>{let s=7;const rnd=()=>(s=(s*16807)%2147483647)/2147483647;
  const x0=52,y0=22,m=4,out=[];
  const fnd=(gx,gy)=>{const x=x0+gx*m,y=y0+gy*m;return K.rect(x+1.25,y+1.25,17.5,17.5,{s:C.ink,sw:2.5,r:4.5})+K.rect(x+6,y+6,8,8,{f:C.ink,r:2})};
  for(let gy=0;gy<14;gy++)for(let gx=0;gx<14;gx++){const inF=(gx<6&&gy<6)||(gx>7&&gy<6)||(gx<6&&gy>7);if(inF)continue;if(rnd()<.48)out.push(K.rect(x0+gx*m+.4,y0+gy*m+.4,3.2,3.2,{f:C.ink,r:1}))}
  return K.card(44,14,72,72,16)+fnd(0,0)+fnd(9,0)+fnd(0,9)+out.join("")};

TH2["근처 공유"]=K=>{const ph=(x,on)=>K.card(x,22,32,56,8)+K.rect(x+3,25,26,50,{f:on?"#E7EEFF":"#F3F5FA",r:6})+K.circ(x+16,44,6,{f:on?C.blue:"#C9D6FF"})+K.bar(x+9,55,14,3);
  return ph(20,true)+ph(108,false)
  +[0,1,2].map(i=>A("nb"+i,K.path(`M${62+i*10} 38q6 12 0 24`,{s:C.blue,sw:2.2}))).join("")};
[0,1,2].forEach(i=>{const s=8+i*12;kf("nb"+i,2.4,`0%,${s}%{opacity:.15}${s+14}%,70%{opacity:1}90%,100%{opacity:.15}`)});

/* ───────── AI 채팅 화면 ───────── */
const ub=(x,y,w)=>K.card(x,y,w,20,10,C.blue)+K.rect(x+10,y+8,w-20,4,{f:"rgba(255,255,255,.75)",r:2});
const ai=(cx,cy)=>K.icon("sparkle",cx,cy,11,C.blue,1.8);
TH2["생각 중 표시"]=K=>ub(76,12,68)+ai(20,56)
  +K.card(30,44,50,24,12)+[0,1,2].map(i=>A("thk",K.circ(43+i*12,56,3,{f:"#8A92A3"}),`animation-delay:${(i*.16).toFixed(2)}s`)).join("");
kf("thk",1.2,"0%,60%,100%{opacity:.35;transform:none}30%{opacity:1;transform:translateY(-3px)}","animation-timing-function:ease-in-out");

const ST=(()=>{const w=[104,98,104,54],tot=w.reduce((a,b)=>a+b),o=[];let s=10;w.forEach(wi=>{const e=s+wi/tot*60;o.push({w:wi,s:n2(s),e:n2(e)});s=e+.2});return o})();
TH2["스트리밍 답변"]=K=>ub(76,8,68)+ai(18,42)
  +K.card(28,34,122,58,12)
  +ST.map((l,i)=>A("st"+i,K.rect(36,44+i*11,l.w,4,{f:"#C3CAD8",r:2}),"transform-origin:left center"+(i<2?"":`;transform:scaleX(${i===2?.5:0})`))).join("")
  +A("stc",K.rect(36,41,3,10,{f:C.blue,r:1.5}),`transform:translate(${ST[2].w/2+1}px,22px)`);
ST.forEach((l,i)=>kf("st"+i,3.2,`0%,${l.s}%{opacity:1;transform:scaleX(0)}${l.e}%,86%{opacity:1;transform:none}96%{opacity:0;transform:none}100%{opacity:0;transform:scaleX(0)}`,"animation-timing-function:linear"));
kf("stc",3.2,"0%{opacity:1;transform:none}"+ST.map((l,i)=>`${l.s}%{transform:translate(0px,${i*11}px)}${l.e}%{transform:translate(${l.w+1}px,${i*11}px)}`).join("")+`86%{opacity:1;transform:translate(${ST[3].w+1}px,33px)}96%{opacity:0}100%{opacity:0;transform:none}`,"animation-timing-function:linear");

TH2["추천 질문 칩"]=K=>K.blk(36,10,88,12,6)
  +[["요약해 줘",14,30],["번역해 줘",82,30],["글 다듬기",14,56],["아이디어",82,56]].map(([s,x,y])=>K.card(x,y,64,20,10)+K.txt(x+32,y+13.2,s,{size:8,w:500,a:"middle"})).join("")
  +K.blk(12,84,136,12,6);

TH2["입력창"]=K=>K.blk(56,10,88,16,8)+K.blk(16,32,96,14,7)
  +K.card(10,58,140,30,15)+K.icon("plus",25,73,11,C.mute,1.8)+K.txt(36,76,"메시지 입력",{size:8,fill:C.mute})
  +K.circ(134,73,10,{f:C.blue})+K.icon("q4up",134,73,11,"#fff",2.2);

TH2["중지 버튼"]=K=>K.blk(56,8,88,14,7)+ai(18,32)+gbar(28,28,110)+gbar(28,37,88)+K.rect(118,34,2.6,9,{f:C.blue,r:1.3})
  +K.card(10,58,140,30,15)+K.txt(22,76,"메시지 입력",{size:8,fill:C.mute})
  +K.circ(134,73,11,{f:C.ink})+K.rect(130,69,8,8,{f:"#fff",r:1.6});

TH2["다시 생성"]=K=>K.card(14,8,132,44,12)+ai(24,20)+gbar(34,18,96)+gbar(34,27,100)+gbar(34,36,64)
  +K.icon("copy",24,70,10,C.mute,1.8)
  +K.card(38,59,78,22,11)+K.icon("refresh",52,70,10,C.blue,2)+K.txt(60,73,"다시 생성",{size:8,w:700})
  +K.blk(14,88,80,8,4);

TH2["출처 표시"]=K=>{const cite=(x,y,n)=>K.rect(x,y-6,10,10,{f:C.blueSoft,r:3})+K.txt(x+5,y+1.5,n,{size:7,w:700,fill:C.blue,a:"middle"});
  return K.card(12,8,136,54,12)+gbar(22,20,96)+cite(122,22,"1")+gbar(22,32,112)+gbar(22,44,58)+cite(84,46,"2")
  +[["news.kr",12,"#F2A93B"],["wiki.org",82,"#8A92A3"]].map(([s,x,f])=>K.card(x,68,66,22,11)+K.circ(x+12,79,4.5,{f})+K.txt(x+21,82,s,{size:7.5,fill:C.sub})).join("")};

css(`@media (prefers-reduced-motion:reduce){[class^="b2a-"],[class*=" b2a-"]{animation:none!important}}`);
}
