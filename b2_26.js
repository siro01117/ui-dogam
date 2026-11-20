// B2 그림: ly 3차 (스티키 · 표 · 카드 · 격자 · 반응형 · 채팅)
// 움직이는 부분은 class="b2x26 b2a-n26…". 멈춘 기본 모습이 완성된 모습이다.
{
const A=(c,inner,st="")=>`<g class="b2x26 b2a-n26${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n26${name}{animation-name:b2a-n26${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n26${name}{${frames}}`);
css(`.b2x26{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.4,0,.2,1)}`);
const n2=K.n2, C=K.C;
Object.assign(K.ICON,{q26up:["M12 19V6","M6.5 11.5L12 6l5.5 5.5"]});
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b226p"+i,c="b226c"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const lift=(x,y,w,h,r,f)=>K.rect(x,y,w,h,{f:f||C.sf,r,fx:"url(#b2lift)"});
const hair=(x,y,w,h,r)=>K.rect(x+.25,y+.25,w-.5,h-.5,{s:C.hair,sw:.5,r});
const photoCard=(x,y,w,h,r,alt)=>lift(x,y,w,h,r)+photo(x,y,w,h,r,alt);
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const clip=(x,y,w,h,r,inner)=>{const c="b226k"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
// 같은 조각을 옮겨 찍기 (좌표가 그림 밖 숫자가 되지 않게)
const mv=(dx,dy,inner)=>`<g transform="translate(${dx} ${dy})">${inner}</g>`;
const dashR=(x,y,w,h,r,f="rgba(47,107,255,.06)",s=C.blue,o=1)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" style="fill:${f};stroke:${s};stroke-width:1;stroke-dasharray:3 3;opacity:${o}"/>`;
const chev=(cx,cy,down,s)=>K.path(down?`M${cx-3} ${cy-1.5}l3 3 3-3`:`M${cx-1.5} ${cy-3}l3 3-3 3`,{s,sw:1.6});
const B1="#9DB8FF", B2="#C9D6FF";
const scroll="0%,12%{transform:none}50%,64%{transform:VAL}96%,100%{transform:none}";
const kfs=(name,val)=>kf(name,3,scroll.replace("VAL",val));

/* ───────── 붙어 있는 것 ───────── */
TH2["스티키 사이드바"]=K=>{const b=K.blk(14,10,84,28,9);
  return clip(14,8,84,84,9,A("ssb",b+mv(0,34,K.blk(14,10,84,20,9))+mv(0,60,b)+mv(0,94,K.blk(14,10,84,22,9))+mv(0,122,b)))
   +K.card(106,14,40,58,10)+tbar(114,23,20,4)+gbar(114,34,26,3.5)+K.bar(114,43,22,3.5,C.blue)+gbar(114,52,26,3.5)+gbar(114,61,16,3.5)
   +K.rect(109,40.5,2.2,8.5,{f:C.blue,r:1.1})};
kfs("ssb","translateY(-42px)");

TH2["스티키 푸터"]=K=>lift(34,6,92,88,12)
  +clip(34,6,92,88,12,A("sft",photo(42,14,76,26,7)+tbar(42,47,40,5)+gbar(42,58,76)+gbar(42,66,60)+mv(0,38,gbar(42,38,76)+gbar(42,46,50)+gbar(42,54,70)+gbar(42,62,44)))
   +K.rect(34,70,92,24,{f:"#fff"})+K.line(34,70,126,70,{s:C.line})
   +tbar(42,79.5,24,5)+K.rect(88,75.5,30,13,{f:C.blue,r:6.5})+K.txt(103,84.6,"결제",{size:7,fill:"#fff",w:700,a:"middle"}))
  +hair(34,6,92,88,12);
kfs("sft","translateY(-26px)");

/* ───────── 표 ───────── */
TH2["데이터 그리드"]=K=>{const X=14,Y=12,W=132,rows=[28,43,58,73];
  const cb=(x,y,on)=>on?K.rect(x,y,8,8,{f:C.blue,r:2})+K.path(`M${x+2} ${y+4.2}l1.6 1.6 2.6-3.2`,{s:"#fff",sw:1.2}):K.rect(x,y,8,8,{f:"#fff",s:"#B9C2D6",sw:1,r:2});
  return lift(X,Y,W,76,10)+clip(X,Y,W,76,10,
     K.rect(X,Y,W,16,{f:"#F1F4FA"})+K.rect(X,43,W,15,{f:C.soft})
     +rows.map(y=>K.line(X,y,X+W,y)).join("")+[34,74,110].map(x=>K.line(x,Y,x,88,{s:"#EDF0F5"})).join(""))
   +cb(20,16,false)+tbar(40,18,18,4)+K.icon("sort",66,20,8,C.blue,1.6)+tbar(80,18,18,4)+tbar(116,18,20,4)
   +rows.map((y,i)=>cb(20,y+3.5,i===1)+gbar(40,y+5.5,[24,28,20,26][i])+(i===2?"":gbar(80,y+5.5,[20,16,0,22][i]))+gbar(116,y+5.5,[18,22,14,20][i])).join("")
   +K.rect(75.5,59.5,33,12,{f:"#fff",s:C.blue,sw:1.4,r:2.5})+gbar(80,63.5,14)+K.line(96.5,62.5,96.5,68.5,{s:C.blue,sw:1.1})
   +hair(X,Y,W,76,10)};

TH2["고정 열"]=K=>{const X=14,Y=14,W=132,H=72;
  const col=tbar(60,20,18,4)+[0,1,2,3].map(i=>gbar(60,35+i*14,[20,14,22,16][i])).join("");
  return lift(X,Y,W,H,10)+clip(X,Y,W,H,10,
     K.rect(X,Y,W,16,{f:"#F1F4FA"})+[0,1,2,3].map(i=>K.line(X,30+i*14,X+W,30+i*14)).join("")
     +A("fxc",[0,1,2,3,4].map(i=>mv(i*32,0,col)).join(""))
     +K.rect(X,Y,40,H,{f:"#EEF3FF"})+K.rect(X,Y,40,16,{f:"#DCE6FF"})+[0,1,2,3].map(i=>K.line(X,30+i*14,54,30+i*14,{s:"#D5DFFA"})).join("")
     +K.bar(22,20,20,4,C.blue)+[0,1,2,3].map(i=>K.circ(24,37+i*14,3,{f:B2})+tbar(30,35+i*14,[16,18,14,17][i],4)).join("")
     +K.line(54,Y,54,Y+H,{s:C.blue,sw:1.4}))
   +hair(X,Y,W,H,10)};
kfs("fxc","translateX(-52px)");

TH2["헤더 고정 테이블"]=K=>{const X=18,Y=10,W=124,H=80;
  const row=K.line(X,42,X+W,42)+gbar(28,33,26)+gbar(68,33,20)+gbar(108,33,22);
  return lift(X,Y,W,H,10)+clip(X,Y,W,H,10,
     A("hft",[0,1,2,3,4,5,6].map(i=>mv(0,i*14,row)).join(""))
     +K.rect(X,Y,W,18,{f:"#DCE6FF"})+K.line(X,28,X+W,28,{s:C.blue,sw:1.4})
     +K.bar(28,17,22,4.5,C.blue)+K.bar(68,17,18,4.5,C.blue)+K.bar(108,17,20,4.5,C.blue))
   +hair(X,Y,W,H,10)};
kfs("hft","translateY(-28px)");

TH2["확장 행"]=K=>K.card(16,8,128,84,10)
  +chev(27,17,false,C.mute)+tbar(36,15,38,4)+gbar(104,15,28)+K.line(16,26,144,26)
  +chev(27,35,true,C.blue)+tbar(36,33,44,4)+gbar(104,33,28)
  +K.rect(16,44,128,30,{f:"#EEF3FF"})+K.rect(16,44,2.4,30,{f:C.blue})
  +photo(36,49,24,20,5)+gbar(66,51,62)+gbar(66,58.5,46)+gbar(66,66,54)
  +chev(27,83,false,C.mute)+tbar(36,81,32,4)+gbar(104,81,28);

TH2["스티키 섹션 헤더"]=K=>{const X=30,Y=6,W=100,H=88;
  const it=K.circ(44,31,4.5,{f:"#DDE3F0"})+gbar(55,29,48)+K.line(40,38,130,38,{s:"#EEF1F6"});
  const hd=K.rect(X,24,W,14,{f:"#F1F4FA"})+K.txt(40,34,"ㄴ",{size:8,w:700,fill:C.sub});
  return lift(X,Y,W,H,12)+clip(X,Y,W,H,12,
     A("ssh",it+mv(0,14,it)+mv(0,28,it)+mv(0,42,hd)+[4,5,6,7,8].map(i=>mv(0,i*14,it)).join(""))
     +K.rect(X,Y,W,18,{f:"#DCE6FF"})+K.txt(40,18.5,"ㄱ",{size:8.5,w:700,fill:C.blue})+K.line(X,24,X+W,24,{s:B2}))
   +hair(X,Y,W,H,12)};
kfs("ssh","translateY(-28px)");

/* ───────── 카드 ───────── */
TH2["미디어 오브젝트"]=K=>K.blk(16,4,128,12,6)+K.card(16,22,128,56,12)+photo(26,32,36,36,8)
  +tbar(72,35,44,5)+gbar(72,46,62)+gbar(72,54,62)+gbar(72,62,36)+K.blk(16,84,128,12,6);

TH2["가로 카드"]=K=>lift(14,22,132,56,12)+clip(14,22,132,56,12,photo(14,22,56,56,0))+hair(14,22,132,56,12)
  +tbar(80,34,48,5)+gbar(80,45,56)+gbar(80,53,40)+K.rect(80,63,26,7,{f:C.blue,r:3.5});

TH2["프로필 카드"]=K=>K.blk(8,18,26,64,10)+K.blk(126,18,26,64,10)+K.card(42,5,76,90,14)
  +K.circ(80,28,14,{f:"#DCE6FF"})+K.icon("user",80,28,16,C.blue,1.6)
  +tbar(62,49,36,5)+gbar(56,59,48,3.5)
  +K.rect(56,72,48,14,{f:C.blue,r:7})+K.txt(80,81.7,"팔로우",{size:7.5,fill:"#fff",w:700,a:"middle"});

TH2["상품 카드"]=K=>K.blk(6,14,32,72,10)+K.blk(122,14,32,72,10)
  +lift(46,4,68,92,12)+clip(46,4,68,92,12,photo(46,4,68,50,0,true))+hair(46,4,68,92,12)
  +K.circ(104,14,6.5,{f:"#fff"})+K.icon("heart",104,14.3,8.5,C.red,1.5)
  +gbar(54,60,44,3.5)+K.txt(54,77,"12,900원",{size:10,w:700})
  +`<g transform="translate(53 82) scale(.33)"><path d="${K.ICON.star}" style="fill:${C.amber};stroke:none"/></g>`+gbar(63,84.2,18,3.5);

TH2["오버레이 카드"]=K=>{const g="b226g"+K.id();
  return lift(22,8,116,84,14)+clip(22,8,116,84,14,photo(22,8,116,84,0)
     +`<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0F1428" stop-opacity="0"/><stop offset="1" stop-color="#0F1428" stop-opacity=".8"/></linearGradient></defs>`
     +K.rect(22,40,116,52,{f:`url(#${g})`}))
   +K.txt(32,74,"제주 여행",{size:11,fill:"#fff",w:700})+K.bar(32,80,54,3.5,"rgba(255,255,255,.8)")};

/* ───────── 배치 · 격자 ───────── */
TH2["겹침 레이아웃"]=K=>photoCard(14,10,92,60,12)+K.card(70,44,76,46,12)
  +tbar(80,54,40,5)+gbar(80,64,56)+gbar(80,72,44)+K.rect(80,79.5,26,6,{f:C.blue,r:3});

TH2["브로큰 그리드"]=K=>[0,1,2,3].map(i=>K.rect(17+i*33,6,27,88,{f:"rgba(47,107,255,.08)",r:3})).join("")
  +photoCard(30,12,66,44,8)
  +lift(84,40,58,36,8,C.blue)+K.bar(92,50,30,5,"#fff")+K.bar(92,60,40,3.5,"rgba(255,255,255,.7)")
  +K.card(24,62,48,26,8)+tbar(31,70,26,4)+gbar(31,78,34,3.5);

TH2["비대칭 레이아웃"]=K=>photoCard(12,8,88,84,12)+K.card(108,50,40,42,10)
  +tbar(114,59,22,4.5)+gbar(114,68,28,3.5)+gbar(114,75,20,3.5)+K.rect(114,82,16,5,{f:C.blue,r:2.5});

TH2["모듈러 그리드"]=K=>{let m="";for(let j=0;j<3;j++)for(let i=0;i<4;i++)m+=dashR(22+i*30,16+j*24,26,20,2.5,"rgba(47,107,255,.07)",C.blue,.8);
  return K.card(14,8,132,84,10)+m+photo(22,16,56,44,2.5)
   +K.rect(82,16,56,20,{f:"#fff",r:2.5})+tbar(86,21,36,4.5)+gbar(86,29,46,3.5)
   +K.rect(82,40,26,20,{f:B2,r:2.5})+K.rect(22,64,26,20,{f:C.blue,r:2.5})
   +K.rect(52,64,56,20,{f:"#fff",r:2.5})+gbar(56,69.5,46,3.5)+gbar(56,76.5,34,3.5)};

TH2["컬럼"]=K=>lift(14,10,132,80,10)+clip(14,10,132,80,10,[0,1,2,3].map(i=>K.rect(22+i*30,10,26,80,{f:"rgba(47,107,255,.2)"})).join(""))+hair(14,10,132,80,10)
  +[0,1,2,3].map(i=>`<line x1="${22+i*30}" y1="10" x2="${22+i*30}" y2="90" style="stroke:${C.blue};stroke-width:.7;opacity:.55"/><line x1="${48+i*30}" y1="10" x2="${48+i*30}" y2="90" style="stroke:${C.blue};stroke-width:.7;opacity:.55"/>`).join("")
  +lift(22,20,56,22,4)+tbar(27,26,30,4.5)+gbar(27,34.5,42,3.5)
  +lift(82,20,26,22,4)+gbar(86,29,16,3.5)+lift(112,20,26,22,4)+gbar(116,29,14,3.5)
  +lift(22,48,86,18,4)+gbar(27,55,60,3.5);

TH2["유동 그리드"]=K=>A("flg",K.card(14,18,132,64,10)+[0,1,2].map(i=>K.rect(22+i*40,26,36,48,{f:[C.blue,B1,B2][i],r:5})).join(""),"transform-origin:0 50%")
  +A("flh",K.rect(149,38,3,24,{f:C.blue,r:1.5}));
kf("flg",3,scroll.replace("VAL","scaleX(.62)"));
kfs("flh","translateX(-50.2px)");

TH2["반응형"]=K=>K.card(8,14,96,64,8)+[0,1,2].map(i=>K.circ(15+i*5,20.5,1.5,{f:"#D3D8E3"})).join("")+K.line(8,27,104,27)
  +[0,1,2].map(i=>K.rect(14+i*29,33,26,38,{f:[C.blue,B1,B2][i],r:4})).join("")
  +K.card(114,8,38,84,9)+[0,1,2].map(i=>K.rect(119,15+i*25,28,21,{f:[C.blue,B1,B2][i],r:4})).join("");

TH2["적응형"]=K=>K.card(10,24,26,50,6)+K.rect(14,29,18,14,{f:C.blue,r:3})+gbar(14,47,18,3)+gbar(14,53,12,3)+K.rect(14,62,18,7,{f:C.skel,r:2})
  +K.card(44,16,44,58,7)+K.rect(49,21,34,8,{f:C.skel,r:2})+K.rect(49,33,15,36,{f:C.blue,r:3})+K.rect(68,33,15,16,{f:B2,r:3})+K.rect(68,53,15,16,{f:B2,r:3})
  +K.card(96,8,56,66,8)+K.rect(101,13,12,56,{f:C.skel,r:3})+K.rect(117,13,30,22,{f:C.blue,r:3})+[0,1,2].map(i=>K.rect(117+i*11,39,8,30,{f:B2,r:2.5})).join("")
  +K.txt(23,87,"360",{size:7.5,fill:C.sub,w:600,a:"middle"})+K.txt(66,87,"768",{size:7.5,fill:C.sub,w:600,a:"middle"})+K.txt(124,87,"1280",{size:7.5,fill:C.sub,w:600,a:"middle"});

TH2["모바일 퍼스트"]=K=>{const num=(x,y,s,f)=>K.circ(x,y,6.5,{f})+K.txt(x,y+2.7,s,{size:7.5,fill:"#fff",w:700,a:"middle"});
  return dashR(86,10,62,58,8,"rgba(255,255,255,.4)","#9AA9D6")+dashR(50,18,50,62,8,"rgba(255,255,255,.55)","#9AA9D6")
   +K.card(14,24,42,70,9)+K.rect(20,31,30,18,{f:C.blue,r:4})+tbar(20,54,22,4)+gbar(20,62,30,3.5)+gbar(20,69,24,3.5)+K.rect(20,78,30,9,{f:C.blue,r:4.5})
   +num(54,26,"1",C.blue)+num(98,20,"2","#A9B3C9")+num(144,14,"3","#A9B3C9")};

TH2["콘텐츠 폭"]=K=>{const d=x=>`<line x1="${x}" y1="18" x2="${x}" y2="86" style="stroke:${C.blue};stroke-width:1;stroke-dasharray:2.5 2.5;opacity:.75"/>`;
  return K.card(10,12,140,78,10)+tbar(48,32,40,5)+[0,1,2,3,4].map(i=>gbar(48,44+i*8,[64,64,64,64,38][i])).join("")
   +d(44)+d(116)+K.line(44,22,116,22,{s:C.blue,sw:1.6})+K.line(44,18.5,44,25.5,{s:C.blue,sw:1.6})+K.line(116,18.5,116,25.5,{s:C.blue,sw:1.6})};

TH2["레이어"]=K=>{const pl=(cy,f)=>`<path d="M36 ${cy}L80 ${cy-17}L124 ${cy}L80 ${cy+17}Z" style="fill:${f};stroke:${C.hair};stroke-width:.6" filter="url(#b2lift)"/>`;
  return pl(68,B2)+pl(50,"#fff")+pl(32,C.blue)};

TH2["오버플로"]=K=>dashR(34,56,92,38,10)
  +[0,1,2].map(i=>K.rect(44,70+i*8,[66,54,40][i],4,{f:C.blue,r:2,o:.45})).join("")
  +K.card(34,8,92,56,10)+tbar(44,18,40,5)+[0,1,2,3].map(i=>gbar(44,29+i*8,[66,58,66,50][i])).join("")
  +K.rect(119,14,2.6,44,{f:C.skel,r:1.3})+K.rect(119,14,2.6,18,{f:C.blue,r:1.3});

TH2["더 보기 접기"]=K=>K.blk(18,4,124,10,5)+K.card(18,20,124,60,12)+tbar(30,31,52,5)+gbar(30,43,100)+gbar(30,52,100)+gbar(30,61,50)
  +K.txt(84,66.3,"…",{size:9,fill:C.sub,w:700})+K.txt(96,66.3,"더 보기",{size:8.5,fill:C.blue,w:700})+K.blk(18,86,124,10,5);

/* ───────── 피드 · 스토리 ───────── */
TH2["콘텐츠 레일"]=K=>{const c=alt=>K.card(14,30,48,60,10)+photo(19,35,38,30,6,alt)+tbar(19,71,26,4.5)+gbar(19,80,34,3.5);
  return tbar(14,13,46,6)+K.txt(146,19.5,"전체",{size:7.5,fill:C.sub,a:"end"})+A("rail",[0,1,2,3,4].map(i=>mv(i*54,0,c(i%2))).join(""))};
kfs("rail","translateX(-54px)");

TH2["스토리 뷰어"]=K=>K.blk(16,14,28,72,9)+K.blk(116,14,28,72,9)
  +lift(50,4,60,92,11)+clip(50,4,60,92,11,photo(50,4,60,92,0,true)+K.rect(50,4,60,92,{f:"rgba(20,24,44,.16)"}))
  +[0,1,2].map(i=>K.rect(55+i*17.33,9,15.33,2.2,{f:"#fff",r:1.1,o:i?.45:1})).join("")
  +A("stp",K.rect(72.33,9,15.33,2.2,{f:"#fff",r:1.1}),"transform-origin:0 50%;transform:scaleX(.55)")
  +K.circ(60.5,19.5,4,{f:"#DCE6FF",s:"#fff",sw:1})+K.bar(67.5,18,20,3,"#fff")+K.icon("x",102,19.5,7,"#fff",1.5)
  +K.rect(55,80.5,38,10,{f:"rgba(255,255,255,.14)",s:"#fff",sw:1,r:5})+K.icon("heart",101.5,85.5,9,"#fff",1.5);
kf("stp",3,"0%{transform:scaleX(0)}100%{transform:scaleX(1)}","animation-timing-function:linear");

TH2["세로 풀스크린 피드"]=K=>{const scr=alt=>photo(50,4,60,92,0,alt)+K.rect(50,4,60,92,{f:"rgba(20,24,44,.14)"})
    +K.icon("heart",101,50,9,"#fff",1.5)+K.icon("chat",101,63,9,"#fff",1.5)+K.icon("share",101,76,9,"#fff",1.5)
    +K.circ(58.5,78,3.5,{f:"#fff"})+K.bar(64.5,76.5,22,3,"#fff")+K.bar(55,85.5,34,3,"rgba(255,255,255,.75)");
  return K.blk(16,14,28,72,9)+K.blk(116,14,28,72,9)+lift(50,4,60,92,11)
   +clip(50,4,60,92,11,A("vfd",scr(false)+mv(0,92,scr(true))+mv(0,184,scr(false))))};
kf("vfd",3.2,"0%,28%{transform:none}44%,78%{transform:translateY(-92px)}94%,100%{transform:translateY(-184px)}");

/* ───────── 채팅 ───────── */
TH2["채팅 입력 바"]=K=>K.blk(14,6,72,18,9)+K.blk(74,30,72,18,9)+K.card(10,60,140,30,15)
  +K.icon("plus",26,75,12,C.sub,1.7)+K.rect(38,66.5,80,17,{f:"#F1F3F8",r:8.5})+K.txt(47,77.8,"메시지",{size:7.5,fill:C.mute})
  +K.circ(134,75,9,{f:C.blue})+K.icon("q26up",134,75,11,"#fff",1.9);

TH2["날짜 구분선"]=K=>K.blk(14,8,76,22,11)+K.line(14,50,48,50,{s:"#B4BDD3"})+K.line(112,50,146,50,{s:"#B4BDD3"})
  +K.card(53,41,54,18,9)+K.txt(80,52.7,"11월 20일",{size:7.5,fill:C.sub,w:600,a:"middle"})+K.blk(70,70,76,22,11);

TH2["시스템 메시지"]=K=>K.blk(14,8,70,20,10)+K.rect(26,39,108,22,{f:"rgba(60,70,110,.16)",r:11})
  +K.txt(80,52.7,"민지 님이 들어왔어요",{size:7.5,fill:"#4F586B",w:600,a:"middle"})+K.blk(76,72,70,20,10);

TH2["이미지 모자이크"]=K=>lift(24,10,112,80,11)
  +clip(24,10,112,80,11,K.rect(24,10,112,80,{f:"#fff"})+photo(24,10,66,80,0)+photo(92,10,44,39,0,true)+photo(92,51,44,39,0)+K.rect(92,51,44,39,{f:"rgba(15,20,40,.5)"}))
  +K.txt(114,75,"+3",{size:13,fill:"#fff",w:700,a:"middle"});
}
