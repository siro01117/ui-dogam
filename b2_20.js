// B2 그림 보충 (N=20): ta 글자 생김새 16 · tf 글꼴 종류 15.
// 글자는 시스템 글꼴에 기대지 않고 rect / path 로 직접 그린다(글꼴이 달라도 같은 모양). 가리키는 부분만 파랑.
{
const C=K.C, W="#FFFFFF", n2=K.n2, INK="#12141A", BL=C.blue, GH="#B4BBC8";
const SANS="Arial,Helvetica,sans-serif";
const P=(d,f,o=1)=>`<path d="${d}" style="fill:${f}${o<1?`;opacity:${o}`:""}"/>`;                 // 채운 면
const PE=(d,f)=>`<path d="${d}" fill-rule="evenodd" style="fill:${f}"/>`;                          // 구멍 뚫린 면
const S=(d,c,sw,x="")=>`<path d="${d}" style="fill:none;stroke:${c};stroke-width:${sw};stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:8${x}"/>`; // 끝이 반듯한 획
const R=(x,y,w,h,f,o=1)=>K.rect(x,y,w,h,{f,o});
const DOT=d=>S(d,GH,.9,";stroke-dasharray:1.8 1.6");                                               // 있었을 자리(옅은 점선)
const T=(x,y,s,{size=9,fill=INK,w=700,a="start",ff="",fs="",st="",sw=0,o=1}={})=>
  `<text x="${n2(x)}" y="${n2(y)}" font-size="${size}" font-weight="${w}" text-anchor="${a}"${ff?` font-family="${ff}"`:""}${fs?` font-style="${fs}"`:""} style="fill:${fill}${sw?`;stroke:${st||fill};stroke-width:${sw}`:""}${o<1?`;opacity:${o}`:""}">${s}</text>`;
const ell=(cx,cy,rx,ry,rot=0)=>{const a=rot*Math.PI/180,dx=rx*Math.cos(a),dy=rx*Math.sin(a);
  return `M${n2(cx+dx)} ${n2(cy+dy)}A${rx} ${ry} ${rot} 1 0 ${n2(cx-dx)} ${n2(cy-dy)}A${rx} ${ry} ${rot} 1 0 ${n2(cx+dx)} ${n2(cy+dy)}Z`};
const pt=(cx,cy,r,deg)=>{const a=deg*Math.PI/180;return `${n2(cx+r*Math.cos(a))} ${n2(cy+r*Math.sin(a))}`};
// 획 끝 돌기: 아래(foot) · 위(head). bh=0 이면 네모, bh>0 이면 줄기로 둥글게 이어진다. d 는 비스듬한 줄기용 밀림
const foot=(a,b,B,l,t,bh=0,d=0)=>`M${n2(a-l)} ${B}V${n2(B-t)}Q${a} ${n2(B-t)} ${n2(a+d)} ${n2(B-t-bh)}H${n2(b+d)}Q${b} ${n2(B-t)} ${n2(b+l)} ${n2(B-t)}V${B}Z`;
const head=(a,b,Tp,l,t,bh=0)=>`M${n2(a-l)} ${Tp}V${n2(Tp+t)}Q${a} ${n2(Tp+t)} ${a} ${n2(Tp+t+bh)}H${b}Q${b} ${n2(Tp+t)} ${n2(b+l)} ${n2(Tp+t)}V${Tp}Z`;

/* ───────── 소문자 견본 (획 굵기 7, 기준선 68 · 소문자 높이 42 · 대문자 높이 20 · 아래 끝 86) ───────── */
const AS=20, XH=42, BS=68, DS=86, CY=55, BR=9.5;
const vs=(xc,y1,y2,c)=>R(xc-3.5,y1,7,y2-y1,c);
const bowl=(cx,c)=>S(ell(cx,CY,BR,BR),c,7);
const gH=(x,c=INK,bar=c)=>R(x+3.5,40.5,17,7,bar)+vs(x+3.5,AS,BS,c)+vs(x+20.5,AS,BS,c);                       // 폭 24
const gx=(x,c=INK)=>P(`M${x} ${XH}h8.5L${x+22} ${BS}h-8.5Z`,c)+P(`M${x+22} ${XH}h-8.5L${x} ${BS}h8.5Z`,c);   // 폭 22
const gT=(x,c=INK,stem=c)=>R(x,AS,30,7,c)+vs(x+15,AS,BS,stem);                                               // 폭 30
const gb=(x,{c=INK,stem=c,bw=c}={})=>bowl(x+13,bw)+vs(x+3.5,AS,BS,stem);                                     // 폭 26
const gd=(x,{c=INK,stem=c,bw=c}={})=>bowl(x+13,bw)+vs(x+22.5,AS,BS,stem);
const gp=(x,{c=INK,stem=c,bw=c}={})=>bowl(x+13,bw)+vs(x+3.5,XH,DS,stem);
const go=(x,c=INK)=>bowl(x+13,c);
const gg=(x,c=INK,tail=c)=>bowl(x+13,c)+vs(x+22.5,XH,BS,c)+S(`M${x+22.5} ${BS}V${DS-10.5}a7 7 0 0 1 -7 7H${x+5}`,tail,7);
const gh=(x,c=INK)=>S(`M${x+3.5} ${CY}a9.5 9.5 0 0 1 19 0V${BS}`,c,7)+vs(x+3.5,AS,BS,c);
const gA=(x,c=INK,bar=c)=>R(x+11,52,14,6,bar)+P(`M${x+14} ${AS}h8L${x+8} ${BS}h-8Z`,c)+P(`M${x+14} ${AS}h8L${x+36} ${BS}h-8Z`,c); // 폭 36
const ge=(x,c=INK,bar=c)=>R(x+3.5,49,22.5,6,bar)+S(`M${x+22.5} ${CY}A9.5 9.5 0 1 0 ${pt(x+13,CY,BR,50)}`,c,7);
const page=(m)=>K.card(10,8,140,84,14)+m;
const guide=y=>K.line(18,y,142,y,{s:C.line,sw:.8});

/* ───────── ta · 글자 생김새 ───────── */
// 글자들이 올라앉는 바닥 선 하나
TH2["베이스라인"]=K=>page(gH(36)+gx(68)+gp(98)+R(16,68,128,2.2,BL));

// 소문자 x 의 키만큼의 띠
TH2["엑스 하이트"]=K=>page(R(16,XH,128,BS-XH,BL,.2)+R(16,XH-.8,128,1.6,BL)+R(16,BS-.8,128,1.6,BL)+gH(36)+gx(68)+gp(98));

// 대문자 H 의 키만큼의 띠
TH2["캡 하이트"]=K=>page(R(16,AS,128,BS-AS,BL,.2)+R(16,AS-.8,128,1.6,BL)+R(16,BS-.8,128,1.6,BL)+gH(36)+gx(68)+gp(98));

// 소문자 키 위로 솟은 부분만 파랑
TH2["어센더"]=K=>page(guide(XH)+guide(BS)+gx(34)+gh(64)+gd(98)+R(64,AS,7,XH-AS,BL)+R(117,AS,7,XH-AS,BL));

// 바닥 선 아래로 내려간 꼬리만 파랑
TH2["디센더"]=K=>page(guide(XH)+guide(BS)+gx(34)+gp(64)+gg(98,INK,BL)+R(64,BS,7,DS-BS,BL));

// 곧은 세로 기둥만 파랑
TH2["스템"]=K=>page(gT(31,INK,BL)+gb(69,{stem:BL})+gd(103,{stem:BL}));

// 빈 곳을 감싸는 둥근 획만 파랑
TH2["볼"]=K=>page(gb(34,{bw:BL})+gd(68,{bw:BL})+gp(102,{bw:BL}));

// 획에 둘러싸인 속 빈 공간을 파랑으로 채움
TH2["카운터"]=K=>page(P(`M46 33.7L51.4 52H40.6Z`,BL)+gA(28)+K.circ(85,CY,6,{f:BL})+go(72)+K.circ(119,CY,6,{f:BL})+gd(106));

// 돌기 없이 끝나는 획 끝(공 모양)만 파랑
TH2["터미널"]=K=>{const f=36,r=70,c=111;
  return page(R(f,XH,19,6,INK)+S(`M${f+8.5} ${BS}V33a9.5 9.5 0 0 1 9.5 -9.5h1.5`,INK,7)+K.circ(f+20.5,25.6,5.4,{f:BL})
  +S(`M${r+3.5} 56.5a11 11 0 0 1 11 -11`,INK,7)+vs(r+3.5,XH,BS,INK)+K.circ(r+15.5,47.2,5.4,{f:BL})
  +S(`M${pt(c,CY,BR,-48)}A9.5 9.5 0 1 0 ${pt(c,CY,BR,48)}`,INK,7)+K.circ(c+6.6,48.4,5.4,{f:BL}))};

// 가운데를 가로지르는 가로 획만 파랑
TH2["크로스바"]=K=>page(gA(28,INK,BL)+gH(72,INK,BL)+ge(106,INK,BL));

// 굵은 획과 가는 획의 차이: 왼쪽은 고르고, 오른쪽은 차이가 크다
TH2["획 대비"]=K=>K.card(12,12,64,76,12)+PE(ell(44,44,18,23)+ell(44,44,12,17),C.mute)
  +R(26,42.5,6,3,BL)+R(42.5,21,3,6,BL)+K.txt(44,81,"낮음",{size:7.5,fill:C.sub,w:700,a:"middle"})
  +K.card(84,12,64,76,12)+PE(ell(116,44,18,23)+ell(116,44,8.5,21.2),INK)
  +R(98,42.5,9.5,3,BL)+R(114.5,21,3,1.8,BL)+K.txt(116,81,"높음",{size:7.5,fill:BL,w:700,a:"middle"});

// 한글 명조의 획 머리에 붙은 돌기(크게 확대)
TH2["부리"]=K=>{const bu=(a,b,t,k)=>P(`M${a} ${t+13*k}Q${a-.5} ${n2(t+8.5*k)} ${n2(a-7*k)} ${n2(t+7*k)}L${n2(b-1.5)} ${n2(t-3*k)}Q${b} ${n2(t-2.4*k)} ${b} ${n2(t+1)}V${t+13*k}Z`,BL);
  return K.card(14,8,132,84,14)
  +R(38,26,10,44,INK)+R(38,66.2,48,3.8,INK)+P("M76 66.2L84.6 62L86 66.2Z",INK)+bu(38,48,26,1)
  +R(106,18,11.5,66,INK)+bu(106,117.5,18,1.1)};

// 모서리를 비스듬히 깎은 글자: 깎인 자리만 파랑, 원래 뾰족했을 모서리는 점선
TH2["챔퍼"]=K=>{const w=34,h=48,c=10,y=26,sw=9,q=sw/2;
  const cut=(x)=>[[x+c,y,x,y+c],[x+w-c,y,x+w,y+c],[x,y+h-c,x+c,y+h],[x+w,y+h-c,x+w-c,y+h]];
  const gho=(x)=>DOT(`M${x-q} ${y+c}V${y-q}H${x+c}`)+DOT(`M${x+w-c} ${y-q}H${x+w+q}V${y+c}`)+DOT(`M${x-q} ${y+h-c}V${y+h+q}H${x+c}`)+DOT(`M${x+w-c} ${y+h+q}H${x+w+q}V${y+h-c}`);
  const seg=x=>cut(x).map(([a,b,d,e])=>S(`M${a} ${b}L${d} ${e}`,BL,sw)).join("");
  const xc=28,xo=96;
  return K.card(10,8,140,84,14)+gho(xc)+gho(xo)
  +S(`M${xc+w} ${y+c+6}V${y+c}L${xc+w-c} ${y}H${xc+c}L${xc} ${y+c}V${y+h-c}L${xc+c} ${y+h}H${xc+w-c}L${xc+w} ${y+h-c}V${y+h-c-6}`,INK,sw)
  +S(`M${xo+c} ${y}H${xo+w-c}L${xo+w} ${y+c}V${y+h-c}L${xo+w-c} ${y+h}H${xo+c}L${xo} ${y+h-c}V${y+c}Z`,INK,sw)
  +seg(xc)+seg(xo)};

// 글꼴 속 글자 그림 한 칸 한 칸. 그중 하나를 골라 든 모습
TH2["글리프"]=K=>K.card(14,8,132,84,14)
  +["A","a","&amp;","가","9","?","g","@"].map((s,i)=>{const x=22+(i%4)*30,y=16+(i>>2)*35,on=i===2;
    return K.rect(x,y,26,31,{f:on?C.soft:"#F5F6F9",s:on?BL:"none",sw:1.6,r:6})
    +(on?K.line(x+3,y+22,x+23,y+22,{s:BL,sw:.7,o:.5}):"")
    +T(x+13,y+22,s,{size:16,fill:on?BL:INK,w:700,a:"middle",ff:SANS})}).join("");

// 왼쪽은 글자 디자인(타입페이스), 오른쪽은 그걸 담은 굵기별 파일(폰트)
TH2["타입페이스와 폰트"]=K=>{
  const file=(x,w,sw)=>P(`M${x} 30a3 3 0 0 1 3 -3h9l6 6v20a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3Z`,W)
    +`<path d="M${x} 30a3 3 0 0 1 3 -3h9l6 6v20a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3ZM${x+12} 27v6h6" style="fill:none;stroke:${BL};stroke-width:1.3"/>`
    +T(x+9,49,"Aa",{size:8,w,sw,a:"middle",ff:SANS});
  return K.card(8,14,66,72,12)+T(41,60,"Aa",{size:32,w:700,a:"middle",ff:SANS})+K.txt(41,78,"타입페이스",{size:7.5,fill:C.sub,w:700,a:"middle"})
  +K.blk(82,14,70,72,12)+file(88,400,0)+file(108,700,0)+file(128,900,.5)+K.txt(117,78,"폰트",{size:7.5,fill:BL,w:700,a:"middle"})};

// 한 디자인에서 굵기 · 기울기만 다른 글꼴을 한 묶음으로
TH2["폰트 패밀리"]=K=>K.card(18,8,124,84,14)
  +K.rect(26,16,3,68,{f:BL,r:1.5})
  +[["얇게",300,0,"",C.sub],["보통",400,0,"",INK],["굵게",800,.6,"",INK],["기울임",400,0,"italic",INK]].map(([l,w,sw,fs,fill],i)=>{const y=31+i*17;
    return T(38,y,"Aa가",{size:15,w,sw,fs,fill,ff:SANS})+K.txt(132,y-1,l,{size:7.5,fill:C.mute,w:700,a:"end"})
    +(i<3?K.line(38,y+5.5,132,y+5.5,{s:C.line,sw:.6}):"")}).join("");

/* ───────── 한글 견본 "나무": 칸 40×44 단위, v=[x,y1,y2,머리 자유] · h=[x1,x2,y,끝 자유] ───────── */
const NA={v:[[8,6,31,1],[31,2,42,1]],h:[[8,24,31,1],[31,39,21,0]],ends:[[8,6],[8,31],[24,31],[31,2],[31,42],[39,21]]};
const MU={v:[[9,4,20,1],[31,4,20,0],[20,29,42,0]],h:[[9,31,4,0],[9,31,20,0],[2,38,29,1]],ends:[[9,4],[31,4],[9,20],[31,20],[2,29],[38,29],[20,42]]};
const SC=1.3, OY=21.4, OXN=24, OXM=84;
// 네모 획으로 그린 한글. vw 세로 획 굵기, hw 가로 획 굵기. buri: "fill" 파랑 돌기 · "ghost" 점선 자리
const han=(g,ox,{vw,hw,buri="",c=INK})=>{let pre="",ink="",post="";
  const bu=(X,t)=>{const a=n2(X-vw/2),b=n2(X+vw/2);return `M${a} ${n2(t+7)}Q${n2(a-.4)} ${n2(t+4.8)} ${n2(a-4.2)} ${n2(t+3.8)}L${n2(b-1)} ${n2(t-1.8)}Q${b} ${n2(t-1.4)} ${b} ${n2(t+.6)}V${n2(t+7)}Z`};
  for(const [x,y1,y2,fr] of g.v){const X=ox+SC*x,t=OY+SC*y1-hw/2;ink+=R(X-vw/2,t,vw,SC*(y2-y1)+hw,c);
    if(fr&&buri==="fill")post+=P(bu(X,t),BL);if(fr&&buri==="ghost")pre+=DOT(bu(X,t))}
  for(const [x1,x2,y,fr] of g.h){const Y=OY+SC*y,xe=n2(ox+SC*x2+vw/2),yt=n2(Y-hw/2);ink+=R(ox+SC*x1-vw/2,yt,SC*(x2-x1)+vw,hw,c);
    if(fr&&buri==="fill")ink+=P(`M${n2(xe-6.5)} ${yt}L${n2(xe-1.3)} ${n2(yt-2.8)}L${xe} ${yt}Z`,c)}
  return pre+ink+post};

/* ───────── tf · 글꼴 종류 ───────── */
// 가로는 가늘고 세로는 굵다. 획 머리에 부리(파랑)
TH2["명조"]=K=>K.card(12,10,136,80,14)+han(NA,OXN,{vw:7,hw:2.4,buri:"fill"})+han(MU,OXM,{vw:7,hw:2.4,buri:"fill"});

// 같은 글자, 획 굵기가 고르고 부리가 없다(있었을 자리는 점선)
TH2["고딕"]=K=>K.card(12,10,136,80,14)+han(NA,OXN,{vw:6.6,hw:6.6,buri:"ghost"})+han(MU,OXM,{vw:6.6,hw:6.6,buri:"ghost"});

// 펜으로 쓴 손글씨 그대로: 삐뚤고 굵기 고르지 않은 획 + 펜
TH2["손글씨체"]=K=>{const h=(d,sw=3.6)=>K.path(d,{s:INK,sw});
  return K.card(12,10,136,80,14)
  +h("M34 29C32.500 39 34 49 34.500 59C43 60.500 51 57.500 59 56")+h("M66 23C68 40 65 58 67.500 77",4)+h("M67 49C71 47.500 75 49 80 46.500",3.2)
  +h("M97 28C95.500 35 97.500 42 97 49",3.4)+h("M96 27.500C106 25.500 116 25 124.500 26C126 33 124 41 124.500 48",3.8)+h("M97 48.500C106 47 116 48.500 125 47",3.2)
  +h("M88 60.500C102 58 120 59.500 137 57",4)+h("M112 60C113.500 66 111 74 112.500 80",3.6)
  +K.icon("edit",120,73.500,21,BL,1.8)};

// 돌기가 획만큼 두껍고 네모나다(파랑)
TH2["슬랩 세리프"]=K=>{const cx=50,t=24,b=76,sl=(a,z)=>R(a-5,z,18.5,7,BL);
  return K.card(12,10,136,80,14)
  +P(`M${cx-4.25} ${t}h8.5L${cx-13.5} ${b}h-8.5Z`,INK)+P(`M${cx-4.25} ${t}h8.5L${cx+22} ${b}h-8.5Z`,INK)+R(cx-9,55,18,6.5,INK)
  +R(cx-27,b-7,18.5,7,BL)+R(cx+8.5,b-7,18.5,7,BL)+R(cx-10,t,20,7,BL)
  +R(95,t,8.5,52,INK)+R(124,t,8.5,52,INK)+R(95,46.500,37.5,7,INK)
  +sl(95,t)+sl(124,t)+sl(95,b-7)+sl(124,b-7)};

// 흘려 쓴 필기체: 글자와 글자를 잇는 획(파랑)
TH2["스크립트"]=K=>{const B=68,w=21,hs=[21,45,45,21];let d=`M22 ${B-1}C27 ${B-1} 31 ${B-2.5} 35 ${B-6}`,j="",x=35;
  hs.forEach((h,i)=>{
    d+=`C${x+8} ${B-11} ${x+14} ${n2(B-h*.72)} ${x+11.5} ${B-h}C${x+10} ${B-h-4.5} ${x+3.5} ${B-h-1.5} ${x+3.5} ${n2(B-h*.5)}C${x+3.5} ${n2(B-h*.15)} ${x+5} ${B} ${x+10} ${B}`;
    const jn=i<3?`C${x+14} ${B} ${x+17.5} ${B-3} ${x+w} ${B-6}`:`C${x+16} ${B} ${x+21} ${B-5} ${x+27} ${B-11}`;
    j+=`M${x+10} ${B}`+jn;d+=jn;x+=w});
  return K.card(12,10,136,80,14)+K.path(d,{s:INK,sw:3.6})+K.path(j,{s:BL,sw:3.6})};

// 제목용: 크고 꾸밈 많은 글자는 위에만, 본문은 딴 글꼴(막대)
TH2["디스플레이 서체"]=K=>{const y=17,h=40,
  L=(f,dx=0)=>R(37+dx,y+dx,12,h,f)+R(65+dx,y+dx,12,h,f)+R(37+dx,y+14+dx,40,12,f)+R(87+dx,y+dx,12,h,f)+R(111+dx,y+dx,12,h-14,f)+R(111+dx,y+h-10+dx,12,10,f);
  const inl=[37,65,87].map(x=>R(x+4.75,y+4,2.5,h-8,W)).join("")+R(115.75,y+4,2.5,h-22,W);
  return K.card(14,6,132,88,14)+L(BL,3.5)+L(INK)+inl+K.rect(37,71,86,3.5,{f:"#D3D8E3",r:1.75})+K.rect(37,79,58,3.5,{f:"#D3D8E3",r:1.75})};

// 세리프 글자 H O: 돌기 모양(파랑)과 가는 곳을 잇는 축(파란 선)
const HO=(K,{sw,bar,l,t,bh,irx,iry,rot})=>{const tp=24,b=76,cx=110,cy=50,a=rot*Math.PI/180,dx=-34*Math.sin(a),dy=34*Math.cos(a);
  const st=x=>R(x,tp,sw,52,INK)+P(foot(x,x+sw,b,l,t,bh),BL)+P(head(x,x+sw,tp,l,t,bh),BL);
  return K.card(12,10,136,80,14)+R(34,50-bar/2,34+sw-8,bar,INK)+st(34)+st(60)
  +PE(ell(cx,cy,22,27)+ell(cx,cy,irx,iry,rot),INK)
  +K.line(cx-dx,cy-dy,cx+dx,cy+dy,{s:BL,sw:1.4})};
// 획 대비가 순하고 축이 기울었다. 돌기는 줄기로 둥글게 이어진다
TH2["올드 스타일"]=K=>HO(K,{sw:8,bar:3.4,l:5.5,t:2.8,bh:6,irx:14,iry:23.6,rot:-15});

// 굵고 가는 차이가 아주 크고 축이 곧다. 돌기는 실처럼 가는 직선
TH2["모던 세리프"]=K=>HO(K,{sw:10,bar:1.5,l:6.5,t:1.6,bh:0,irx:12,iry:25.6,rot:0});

// 세모 · 원 · 직선으로 지은 글자: 밑그림 도형(파란 선)
TH2["지오메트릭 산스"]=K=>{const cx=50,t=24,b=76,ox=108,nd=(x,y)=>K.circ(x,y,1.9,{f:W,s:BL,sw:1.1});
  return K.card(12,10,136,80,14)
  +P(`M${cx} ${t}L${cx+24} ${b}h-8.5L${cx} 42.4L${cx-15.5} ${b}h-8.5Z`,INK)+R(cx-10.5,58,21,6.5,INK)
  +K.circ(ox,50,22.25,{s:INK,sw:7.5})
  +`<path d="M${cx} ${t}L${cx+24} ${b}H${cx-24}Z" style="fill:none;stroke:${BL};stroke-width:1.1"/>`+nd(cx,t)+nd(cx+24,b)+nd(cx-24,b)
  +K.rect(ox-26,24,52,52,{s:BL,sw:.9,o:.55})+K.circ(ox,50,26,{s:BL,sw:1.1})+K.line(ox-26,50,ox+26,50,{s:BL,sw:.7,o:.55})+K.line(ox,24,ox,76,{s:BL,sw:.7,o:.55})+nd(ox,50)};

// 손글씨 뼈대: 획 끝이 비스듬히 잘리고 트임(파랑)이 넓게 열렸다
TH2["휴머니스트 산스"]=K=>{const cy=50,e=50,c=110,r=18,ro=22.5,ri=13.5;
  const wedge=(cx,a1,a2)=>P(`M${pt(cx,cy,ri,a1)}L${pt(cx,cy,ro,a1)}A${ro} ${ro} 0 0 1 ${pt(cx,cy,ro,a2)}L${pt(cx,cy,ri,a2)}A${ri} ${ri} 0 0 0 ${pt(cx,cy,ri,a1)}Z`,BL,.32);
  return K.card(12,10,136,80,14)
  +wedge(e,0,54)+R(e-r,cy-7,r+ro,7,INK)+S(`M${e+r} ${cy}A${r} ${r} 0 1 0 ${pt(e,cy,r,54)}`,INK,9)
  +wedge(c,-52,52)+S(`M${pt(c,cy,r,-52)}A${r} ${r} 0 1 0 ${pt(c,cy,r,52)}`,INK,9)};

// 초기 산세리프: 획 끝이 수평으로 잘리고 트임(파랑)이 좁게 오므라졌다
TH2["그로테스크"]=K=>{const cy=50,e=50,c=110,r=18,i=K.id(),ce="b220e"+i,cc="b220c"+i;
  return `<defs><clipPath id="${ce}"><path d="M0 0H160V${cy+4.5}H${e}V${cy+11}H160V100H0Z"/></clipPath><clipPath id="${cc}"><path d="M0 0H160V${cy-4.5}H${c}V${cy+4.5}H160V100H0Z"/></clipPath></defs>`
  +K.card(12,10,136,80,14)
  +R(e+12.5,cy+4.5,10.5,6.5,BL,.32)+`<g clip-path="url(#${ce})">`+K.circ(e,cy,r,{s:INK,sw:9})+`</g>`+R(e-r,cy-4.5,r+22,9,INK)
  +R(c+12.5,cy-4.5,10.5,9,BL,.32)+`<g clip-path="url(#${cc})">`+K.circ(c,cy,r,{s:INK,sw:9})+`</g>`};

// 획 끝과 모서리가 둥근 고딕: 둥근 끝(파랑)
TH2["라운드 고딕"]=K=>{const sw=7.4,g=(o,ox)=>{const X=x=>ox+SC*x,Y=y=>OY+SC*y;
    return o.v.map(([x,y1,y2])=>K.line(X(x),Y(y1),X(x),Y(y2),{s:INK,sw})).join("")+o.h.map(([x1,x2,y])=>K.line(X(x1),Y(y),X(x2),Y(y),{s:INK,sw})).join("")
    +o.ends.map(([x,y])=>K.circ(X(x),Y(y),sw/2,{f:BL})).join("")};
  return K.card(12,10,136,80,14)+g(NA,OXN)+g(MU,OXM)};

// 네모 틀(파란 점선)에 맞추지 않는다: 받침이 없으면 짧고, 있으면 아래로 길어진다
TH2["탈네모꼴"]=K=>{const s=1.25,oy=18,sw=6.2,
  na=[[8,6,8,24],[8,24,24,24],[31,2,31,30],[31,15,37.5,15]],mm=[[12,34,12,46],[12,34,31,34],[31,34,31,46],[12,46,31,46]],
  g=(ox,L)=>L.map(([x1,y1,x2,y2])=>R(ox+s*x1-sw/2,oy+s*y1-sw/2,s*(x2-x1)+sw,s*(y2-y1)+sw,INK)).join(""),
  fr=ox=>K.rect(ox,oy,50,50,{f:C.soft,r:3})+`<rect x="${ox}" y="${oy}" width="50" height="50" rx="3" style="fill:none;stroke:${BL};stroke-width:1.2;stroke-dasharray:3 2.4"/>`;
  return K.card(12,6,136,88,14)+fr(24)+fr(86)+g(24,na)+g(86,na.concat(mm))};

// 고른 굵기 H O. 폭을 견줄 막대를 밑에 둔다
const wide=(x,y,h,hw,ow,gap,sw,c)=>R(x,y,sw,h,c)+R(x+hw-sw,y,sw,h,c)+R(x,y+h/2-sw*.45,hw,sw*.9,c)
  +`<ellipse cx="${n2(x+hw+gap+ow/2)}" cy="${n2(y+h/2)}" rx="${n2(ow/2-sw/2)}" ry="${n2(h/2-sw/2)}" style="fill:none;stroke:${c};stroke-width:${sw}"/>`;
// 같은 글자, 같은 키인데 좌우로 좁다
TH2["컨덴스드"]=K=>K.card(10,12,78,76,12)+wide(18,26,40,26,30,6,6,C.mute)+K.rect(18,73,62,3,{f:GH,r:1.5})
  +K.card(96,12,54,76,12)+wide(105,26,40,15,16,5,5.4,INK)+K.rect(105,73,36,3,{f:BL,r:1.5});

// 같은 글자, 같은 키인데 좌우로 넓다
TH2["익스텐디드"]=K=>K.card(8,14,58,72,12)+wide(13.5,34,30,19.5,22.5,5,5.4,C.mute)+K.rect(13.5,71,47,3,{f:GH,r:1.5})
  +K.card(72,14,80,72,12)+wide(76.5,34,30,30,36,5,5.8,INK)+K.rect(76.5,71,71,3,{f:BL,r:1.5});
}
