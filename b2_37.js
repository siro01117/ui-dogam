// B2 그림 보충 (N=37): ta 한글 글자 생김새 9 · tp 글자 용어 31.
// 한글은 네모 획(rect / path)으로 직접 그린다. 가리키는 부분만 파랑, 파란 표시는 3.2초 박자로 켜졌다 꺼진다(멈춘 모습은 켜진 상태).
{
const C=K.C, W="#FFFFFF", n2=K.n2, INK="#12141A", BL=C.blue, LN="#BFC6D3", DK="#3A4050";
const SERIF="Georgia,'Times New Roman',serif", SANS="Arial,Helvetica,sans-serif";
// 깜빡임: lit · lis = 글자의 일부(파랑 ↔ 글자색, fill · stroke), mk · mq = 글자가 아닌 표시(투명도 1 ↔ 0 · 1 ↔ .25)
B2CSS+=`.b2x37{animation-duration:3.2s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}
.b2a-n37lit{animation-name:b2a-n37lit}.b2a-n37lis{animation-name:b2a-n37lis}.b2a-n37mk{animation-name:b2a-n37mk}.b2a-n37mq{animation-name:b2a-n37mq}
@keyframes b2a-n37lit{0%,42%,100%{fill:var(--acc)}50%,92%{fill:var(--off,#12141A)}}
@keyframes b2a-n37lis{0%,42%,100%{stroke:var(--acc)}50%,92%{stroke:var(--off,#12141A)}}
@keyframes b2a-n37mk{0%,42%,100%{opacity:1}50%,92%{opacity:0}}
@keyframes b2a-n37mq{0%,42%,100%{opacity:1}50%,92%{opacity:.25}}
.b2a-n37fbar,.b2a-n37ftx{animation-duration:3s;animation-timing-function:linear;animation-fill-mode:both}
.b2a-n37fbar{animation-name:b2a-n37fbar;transform-box:fill-box;transform-origin:left center}.b2a-n37ftx{animation-name:b2a-n37ftx}
@keyframes b2a-n37fbar{0%{transform:scaleX(.04);opacity:1}44%{transform:scaleX(1);opacity:1}52%,100%{transform:scaleX(1);opacity:0}}
@keyframes b2a-n37ftx{0%,46%{opacity:0}48%,100%{opacity:1}}
`;
const LIT="b2x37 b2a-n37lit", LIS="b2x37 b2a-n37lis";
const MK=m=>`<g class="b2x37 b2a-n37mk">${m}</g>`, MQ=m=>`<g class="b2x37 b2a-n37mq">${m}</g>`;
const offv=off=>off&&off!==INK?`--off:${off};`:"";
// 색이 파랑(BL)이면 "글자의 일부"로 보고 깜빡임 클래스를 붙인다. 글자가 아닌 표시는 K.* 로 그려 MK / MQ 로 감싼다
const R=(x,y,w,h,f,{r=0,off=""}={})=>`<rect x="${n2(x)}" y="${n2(y)}" width="${n2(w)}" height="${n2(h)}" rx="${r}" style="${f===BL?offv(off):""}fill:${f}"${f===BL?` class="${LIT}"`:""}/>`;
const S=(d,c,sw,{off="",x=""}={})=>`<path d="${d}" style="${c===BL?offv(off):""}fill:none;stroke:${c};stroke-width:${sw};stroke-linecap:butt;stroke-linejoin:miter${x}"${c===BL?` class="${LIT.replace("lit","lis")}"`:""}/>`;
const T=(x,y,s,{size=9,fill=INK,w=700,a="start",ff="",fs="",st="",sw=0,o=1,ls=0,off="",lit=false}={})=>
  `<text x="${n2(x)}" y="${n2(y)}" font-size="${size}" font-weight="${w}" text-anchor="${a}"${ff?` font-family="${ff}"`:""}${fs?` font-style="${fs}"`:""}${ls?` letter-spacing="${ls}"`:""}${lit?` class="${LIT}"`:""} style="${lit?offv(off):""}fill:${fill}${sw?`;stroke:${st||fill};stroke-width:${sw}`:""}${o<1?`;opacity:${o}`:""}">${s}</text>`;
const ts=(s,attr="",off=INK)=>`<tspan class="${LIT}"${attr?" "+attr:""} style="${offv(off)}fill:${BL}">${s}</tspan>`;   // 글줄 속 파란 글자
const ln=(x,y,w,f=LN,h=5,off="")=>R(x,y,w,h,f,{r:h/2,off});                 // 글줄 하나
const vl=(x,y1,y2,sw=1.6)=>K.line(x,y1,x,y2,{s:BL,sw});                     // 기준선(세로)
const hl=(x1,x2,y,sw=1,o=1)=>K.line(x1,y,x2,y,{s:BL,sw,o});                 // 기준선(가로)
const lab=(x,y,s,fill=C.sub)=>K.txt(x,y,s,{size:7.5,fill,w:700,a:"middle"});
const two=()=>K.card(12,14,62,72,12)+K.card(86,14,62,72,12);                // 나란한 흰 면 둘

/* ───────── 한글 견본: 칸 40×44 단위. 획 = [꼴, 이름표, 숫자…]
   v 세로[x,y1,y2] · h 가로[x1,x2,y] · o 동그라미[cx,cy,r] · q 비스듬한 획[x0,y0,cx,cy,x1,y1] ───────── */
const HW=6.6, SC=1.3, OY=21.4, OX1=19.5, OX2=80.5, HU=HW/2/SC;
const NA=[["v","n",8,6,31],["h","n",8,23,31],["v","gi",31,2,42],["h","gy",31,39,21]];
const MU=[["v","m",9,4,20],["v","m",31,4,20],["h","m",9,31,4],["h","m",9,31,20],["v","s",20,29,42],["h","bo",2,38,29]];
const GO=[["h","g",9,31,5],["v","g",31,5,20],["v","s",20,28,38],["h","bo",2,38,38]];
const DO=[["h","d1",9,31,5],["v","d2",9,5,20],["h","d3",9,31,20],["v","s",20,29,38],["h","bo",2,38,38]];
const MI=[["v","m",6,9,33],["v","m",23,9,33],["h","m",6,23,9],["h","m",6,23,33],["v","gi",34,2,42]];
const MA=[["v","m",5,9,33],["v","m",21,9,33],["h","m",5,21,9],["h","m",5,21,33],["v","gi",31,2,42],["h","gy",31,39,21]];
const AH=[["o","o",13,21,10],["v","gi",31,2,42],["h","gy",31,39,21]];
const SA=[["q","nr",13.4,17,16.5,27,25,34.5],["q","pp",14.5,6,13.5,22,3,34.5],["v","gi",31,2,42],["h","gy",31,39,21]];
const JI=[["q","nr",13.4,19,16.5,28,25,35.5],["q","pp",14.4,11.5,13.5,24,3,35.5],["h","j",4,25,9],["v","gi",34,2,42]];
const CH=[["q","c",19.2,21,23,32,36,41.5],["q","c",20.5,11.5,18.5,27,4,41.5],["h","c",5,35,11.5],["v","kk",20,2,6.42]];
const HH=[["o","c",20,30.4,10.4],["h","c",4,36,11.5],["v","kk",20,2,6.42]];
const GAM=[["h","cho",6,21,5],["v","cho",21,5,19],["v","jung",32,2,22],["h","jung",32,39,12],["h","jong",9,32,30],["h","jong",9,32,41],["v","jong",9,30,41],["v","jong",32,30,41]];
// on 에 든 이름표의 획만 파랑(맨 위에 그린다)
const han=(g,ox,on=[],{sc=SC,oy=OY,w=HW,c=INK}={})=>{const X=v=>n2(ox+sc*v),Y=v=>n2(oy+sc*v);let ink="",blue="";
  for(const [t,tag,a,b,d,e,f,h] of g){const col=on.includes(tag)||on==="all"?BL:c;let m;
    if(t==="v")m=R(X(a)-w/2,Y(b)-w/2,w,sc*(d-b)+w,col);
    else if(t==="h")m=R(X(a)-w/2,Y(d)-w/2,sc*(b-a)+w,w,col);
    else if(t==="o")m=K.circ(X(a),Y(b),n2(sc*d),{s:col,sw:w,cls:col===BL?LIS:""});
    else m=S(`M${X(a)} ${Y(b)}Q${X(d)} ${Y(e)} ${X(f)} ${Y(h)}`,col,w);
    if(col===BL)blue+=m;else ink+=m}
  return ink+blue};
const ux=(ox,v,sc=SC)=>n2(ox+sc*v), uy=(v,sc=SC,oy=OY)=>n2(oy+sc*v);
const pageH=m=>K.card(12,10,136,80,14)+m;

/* ───────── ta · 한글 글자 생김새 ───────── */
// 한 글자 "감"을 첫소리 · 가운뎃소리 · 받침 세 칸으로
TH2["초성 · 중성 · 종성"]=K=>{const sc=1.45,ox=51,oy=18.4,X=v=>ux(ox,v,sc),Y=v=>uy(v,sc,oy);
  const zone=(x1,y1,x2,y2)=>K.rect(X(x1),Y(y1),sc*(x2-x1),sc*(y2-y1),{f:BL,o:.16,r:5});
  const lb=(x,y,s,a)=>K.txt(x,y,s,{size:8,fill:BL,w:800,a});
  return K.card(14,8,132,84,14)
  +MK(zone(1.6,-.6,25.4,25)+zone(27.4,-.6,43.4,25)+zone(4.6,26.6,36.4,45))
  +han(GAM,ox,[],{sc,oy})
  +MQ(lb(X(1.6)-4,Y(14),"초성","end")+lb(X(43.4)+4,Y(14),"중성","start")+lb(X(4.6)-4,Y(37.5),"종성","end"))};

// 글자를 이루는 획 하나하나(획과 획이 만나는 자리에 금)
TH2["줄기"]=K=>{const cut=(ox,x1,y1,x2,y2)=>K.line(ux(ox,x1),uy(y1),ux(ox,x2),uy(y2),{s:W,sw:1.1});
  return pageH(han(DO,OX1,"all")+han(NA,OX2,"all")
  +MK(cut(OX1,9-HU,5+HU,9+HU,5+HU)+cut(OX1,9-HU,20-HU,9+HU,20-HU)+cut(OX1,20-HU,38-HU,20+HU,38-HU)
    +cut(OX2,8-HU,31-HU,8+HU,31-HU)+cut(OX2,31+HU,21-HU,31+HU,21+HU)))};

// ㅗ · ㅜ 의 긴 가로 줄기만 파랑
TH2["보"]=K=>pageH(han(GO,OX1,["bo"])+han(MU,OX2,["bo"]));

// ㅏ · ㅣ 의 긴 세로 줄기만 파랑
TH2["기둥"]=K=>pageH(han(NA,OX1,["gi"])+han(MI,OX2,["gi"]));

// ㅅ · ㅈ 에서 왼쪽 아래로 비스듬히 내려 긋는 획만 파랑
TH2["삐침"]=K=>pageH(han(SA,OX1,["pp"])+han(JI,OX2,["pp"]));

// ㅊ · ㅎ 맨 위에 올라앉은 짧은 획만 파랑
TH2["꼭지"]=K=>pageH(han(CH,OX1,["kk"])+han(HH,OX2,["kk"]));

// ㅁ · ㅇ 처럼 획에 둘러싸인 한글 속 빈 곳을 파랑으로 채움
TH2["속공간"]=K=>pageH(MK(K.rect(ux(OX1,5),uy(9),SC*16,SC*24,{f:BL}))+han(MA,OX1)
  +MK(K.circ(ux(OX2,13),uy(21),SC*10,{f:BL}))+han(AH,OX2));

// 글자 하나가 들어앉는 네모 칸
TH2["글자틀"]=K=>{const box=ox=>{const x=ux(ox,-2.5),y=uy(-1.5),s=SC*47;
    return K.rect(x,y,SC*45,s,{f:C.soft,s:BL,sw:1.2,r:2})
    +`<path d="M${n2(x+SC*22.5)} ${y}v${n2(s)}M${x} ${n2(y+s/2)}h${n2(SC*45)}" style="fill:none;stroke:${BL};stroke-width:.7;stroke-dasharray:2.5 2.5;opacity:.6"/>`};
  return pageH(MQ(box(OX1)+box(OX2))+han(NA,OX1)+han(MU,OX2))};

// 글자마다 눈에 보이는 무게의 한가운데(점). 한 줄로 가지런해야 글줄이 고르다
TH2["무게중심"]=K=>{const dot=(x,y)=>K.circ(x,y,5.4,{f:W})+K.circ(x,y,3.6,{f:BL});
  return pageH(han(NA,OX1)+han(MU,OX2)
  +MQ(`<line x1="18" y1="${uy(20)}" x2="142" y2="${uy(20)}" style="stroke:${BL};stroke-width:1.1;stroke-dasharray:3 2.5"/>`)
  +MK(dot(ux(OX1,21),uy(20))+dot(ux(OX2,20),uy(20))))};

/* ───────── tp · 조판 ───────── */
// 같은 글, 낱말 사이만 좁게 / 넓게
TH2["어간"]=K=>K.card(16,10,128,80,14)
  +[["봄",51],["여름",73.5],["가을",102.5]].map(([s,x])=>K.txt(x,40,s,{size:13,fill:C.sub,w:700,a:"middle"})).join("")
  +K.line(26,50,134,50,{s:C.line,sw:.6})
  +[["봄",42],["여름",73.5],["가을",111.5]].map(([s,x])=>K.txt(x,75,s,{size:13,w:700,a:"middle"})).join("")
  +MK(K.rect(49.5,60,10,18,{f:BL,o:.2,r:1.5})+K.rect(87.5,60,10,18,{f:BL,o:.2,r:1.5}));

// 같은 간격의 가로줄에 제목 · 본문이 모두 올라앉는다
TH2["세로 리듬"]=K=>{const on=(y,x,w,h,f=LN)=>ln(x,y-h,w,f,h);
  return K.card(18,8,124,84,14)
  +MQ([0,1,2,3,4,5,6,7].map(i=>hl(26,134,22+i*9,.8,.75)).join(""))
  +on(31,30,62,8,DK)+on(49,30,100,5)+on(58,30,78,5)+on(76,30,44,6.5,DK)+on(85,30,92,5)};

// 오른쪽 끝만 반듯, 왼쪽은 들쭉날쭉
TH2["오른쪽 정렬"]=K=>K.card(18,10,124,80,14)+MQ(vl(129,19,81))
  +[84,60,92,48,74].map((w,i)=>ln(125-w,22+i*11.5,w,LN,6)).join("");

// 첫 줄만 밖으로 나오고 둘째 줄부터 안으로 밀린다
TH2["내어쓰기"]=K=>K.card(18,10,124,80,14)
  +[0,1,2,3,4,5].map(i=>{const y=19+i*11,first=i%3===0,x=first?32:46,w=i%3===2?(i===2?52:36):128-x;
    return (first?"":MK(K.rect(32,y-.5,11,7,{f:BL,r:1.5,o:.85})))+ln(x,y,w,LN,6)}).join("");

// 줄마다 앞에 차례를 나타내는 숫자
TH2["번호 목록"]=K=>K.card(18,12,124,76,14)
  +[72,52,64].map((w,i)=>T(36,34+i*20,`${i+1}.`,{size:11,fill:BL,w:800,a:"middle",lit:true})+ln(48,26.5+i*20,w,LN,7)).join("");

// 왼쪽은 낱말 중간에서 끊기고, 오른쪽은 낱말을 통째로 다음 줄로
TH2["단어 단위 줄바꿈"]=K=>two()+MQ(vl(68.5,24,64,1.2)+vl(142.5,24,64,1.2))
  +`<text x="19" y="41" font-size="8.5" font-weight="700" style="fill:${C.sub}">산에 꽃이 ${ts("피","",C.sub)}</text>`
  +`<text x="19" y="57" font-size="8.5" font-weight="700" style="fill:${C.sub}">${ts("었다","",C.sub)}</text>`
  +T(93,41,"산에 꽃이",{size:8.5})+`<text x="93" y="57" font-size="8.5" font-weight="700" style="fill:${INK}">${ts("피었다")}</text>`
  +lab(43,78,"글자 단위")+lab(117,78,"단어 단위",BL);

// 왼쪽은 마지막 줄에 한 낱말만 남고, 오른쪽은 두 줄 길이가 비슷하다
TH2["텍스트 균형"]=K=>two()
  +ln(20,30,46,"#8A92A3",8)+ln(37,43,12,"#8A92A3",8)
  +ln(101,30,32,BL,8,DK)+ln(103,43,28,BL,8,DK)
  +[43,117].map(cx=>ln(cx-19,62,38,LN,4)+ln(cx-13,70,26,LN,4)).join("");

// 여는 따옴표가 글줄 왼쪽 선 밖으로 나가 걸린다
TH2["행잉 구두점"]=K=>K.card(18,12,124,76,14)+MQ(vl(48,22,78,1.4))
  +`<text x="45" y="46" text-anchor="end" font-family="${SERIF}" font-size="22" font-weight="700" class="${LIT}" style="fill:${BL}">“</text>`
  +T(50,45,"따옴표가",{size:14})+T(50,66,"밖에 걸린다”",{size:14});

// 굽은 따옴표는 여는 쪽 · 닫는 쪽 모양이 다르고, 곧은 따옴표는 똑같은 세로 금
TH2["굽은 · 곧은 따옴표"]=K=>{const q=(cx,l,r,ff,lit,qs=34)=>`<text x="${cx}" y="60" text-anchor="middle" font-size="24" font-weight="700" style="fill:${lit?INK:C.sub}">`
    +(lit?ts(l,`font-family="${ff}" font-size="${qs}"`):`<tspan font-family="${ff}" font-size="${qs}">${l}</tspan>`)+`<tspan dy="-2">가</tspan>`
    +(lit?ts(r,`font-family="${ff}" font-size="${qs}" dy="2"`):`<tspan font-family="${ff}" font-size="${qs}" dy="2">${r}</tspan>`)+`</text>`;
  return two()+q(43,"“","”",SERIF,true)+q(117,"&quot;","&quot;",SANS,false,28)+lab(43,78,"굽은",BL)+lab(117,78,"곧은")};

// 붙임표보다 긴 줄 둘: 엔 대시는 절반 칸, 엠 대시는 한 칸
TH2["엔 대시 · 엠 대시"]=K=>{const x0=82,em=40,row=(y,l,w,f)=>K.txt(28,y+3,l,{size:8,fill:C.sub,w:700})+R(x0,y-1.7,w,3.4,f,{r:.6});
  return K.card(16,10,128,80,14)
  +MQ(`<path d="M${x0} 20V80M${x0+em/2} 40V80M${x0+em} 60V80" style="fill:none;stroke:${BL};stroke-width:.8;stroke-dasharray:2.5 2.5;opacity:.7"/>`)
  +row(30,"하이픈",9,"#8A92A3")+row(50,"엔 대시",em/2,BL)+row(70,"엠 대시",em,BL)};

// 글자 뒤에 형광펜으로 칠한 띠
TH2["형광펜 강조"]=K=>K.card(18,14,124,72,14)
  +ln(30,26,100,LN,5.5)
  +`<path d="M52 43.5L113 42.5L114 60L51 61Z" style="fill:#FFE04A"/>`
  +T(30,57,"꼭 기억할 말",{size:14,w:800})
  +ln(30,70,68,LN,5.5);

// 글 속에서 누를 수 있는 낱말: 파란 글자 + 밑줄
TH2["링크 스타일"]=K=>K.card(18,14,124,72,14)
  +ln(30,26,100,LN,6)
  +ln(30,44,28,LN,6)+T(63,51,"자세히 보기",{size:11,fill:BL,w:700})+K.line(63,54.5,117,54.5,{s:BL,sw:1.2})
  +ln(30,64,58,LN,6)+K.icon("hand",109,66,16,INK,1.5);

// 그림 바로 아래에 붙는 작은 설명 글
TH2["캡션"]=K=>K.card(24,8,112,84,12)
  +K.rect(32,16,96,48,{f:"#DDE3F0",r:7})+K.icon("image",80,40,24,"#9AA1AE",1.5)
  +T(80,78,"그림 1. 여름 바다",{size:8.5,fill:"#4A5160",w:700,a:"middle"});

// 큰 제목 바로 위에 얹는 작은 글자
TH2["아이브로"]=K=>K.card(18,12,124,76,14)
  +T(30,32,"NEW · 여행",{size:8,fill:BL,w:800,ls:.6,lit:true,off:C.sub})
  +T(30,53,"여름 휴가",{size:19,w:800})
  +ln(30,63,96,LN,5)+ln(30,73,62,LN,5);

// 제목 다음, 본문보다 크게 쓴 첫 문단
TH2["리드 문단"]=K=>K.card(18,8,124,84,14)
  +ln(30,16,66,DK,8)
  +[100,100,62].map((w,i)=>ln(30,32+i*11,w,BL,7,"#8A92A3")).join("")
  +[100,100,46].map((w,i)=>ln(30,69+i*7.5,w,LN,4)).join("");

// 제목을 큰 것부터 여섯 단계로
TH2["제목 단계"]=K=>K.card(18,6,124,88,14)
  +[[17,27],[14,43],[11.5,56.5],[9.5,68],[8,78],[7,87]].map(([size,y],i)=>
    MQ(K.txt(30,y,"H"+(i+1),{size:7,fill:BL,w:800}))+T(48,y,"제목 글자",{size,w:i<3?800:700,fill:i<4?INK:"#4A5160"})).join("");

// 화면이 넓어지면 글자도 따라 커진다
TH2["유동 글자 크기"]=K=>{const mark=(x1,x2)=>hl(x1,x2,89,1.2)+vl(x1,86,92,1.2)+vl(x2,86,92,1.2);
  return K.card(20,26,36,56,8)+K.card(66,12,76,70,10)
  +T(38,50,"제목",{size:12,w:800,a:"middle"})+ln(27,58,22,LN,3.5)+ln(27,65,15,LN,3.5)
  +T(104,48,"제목",{size:27,w:800,a:"middle"})+ln(77,59,54,LN,4.5)+ln(77,68,36,LN,4.5)
  +MQ(mark(20,56)+mark(66,142))};

// 이 선보다 작은 글자는 읽기 어렵다
TH2["최소 글자 크기"]=K=>K.card(16,14,128,72,14)
  +K.line(26,66,134,66,{s:C.line,sw:.8})
  +[[7,31],[9,44],[12,69],[16,90],[22,117]].map(([size,x],i)=>K.txt(x,62,"가",{size,fill:i<2?"#C4C9D3":INK,w:700,a:"middle"})).join("")
  +MQ(`<line x1="55" y1="24" x2="55" y2="78" style="stroke:${BL};stroke-width:1.1;stroke-dasharray:3 2.5"/>`
    +K.txt(59,31,"12px",{size:8,fill:BL,w:800}));

// 가독성은 글 덩어리가 술술 읽히는가, 판독성은 글자 하나하나가 구별되는가
TH2["가독성 · 판독성"]=K=>two()
  +[46,46,46,46,28].map((w,i)=>ln(20,25+i*9.2,w,i===0?DK:LN,i===0?5.5:4.5)).join("")
  +T(117,61,"Il1",{size:30,w:400,ff:SERIF,a:"middle",ls:2})
  +lab(43,79,"가독성")+lab(117,79,"판독성",BL);

// 한글 사이에 로마자가 섞인 글줄(로마자만 파랑)
TH2["한영 섞어쓰기"]=K=>K.card(16,18,128,64,14)
  +MQ(hl(26,134,63.5,.9,.7))
  +`<text x="80" y="60" text-anchor="middle" font-size="19" font-weight="700" style="fill:${INK}">한글과 ${ts("Abc",`font-family="${SANS}"`)}</text>`;

// 빗금으로 이어 쓴 숫자 vs 작게 위아래로 짠 분수 글자
TH2["분수"]=K=>K.card(12,16,62,68,12)+K.card(86,16,62,68,12)
  +T(43,61,"1/2",{size:24,fill:C.sub,ff:SANS,a:"middle"})
  +T(107,50,"1",{size:17,fill:BL,ff:SANS,a:"middle",lit:true})+T(127,66,"2",{size:17,fill:BL,ff:SANS,a:"middle",lit:true})
  +S("M124 35.5L110 66.5",BL,2.2);

// 글자가 위에서 아래로, 줄은 오른쪽에서 왼쪽으로
TH2["세로쓰기"]=K=>K.card(42,8,84,84,12)+MQ(hl(52,118,14.5,1.4))
  +["세","로","쓰","기"].map((s,i)=>K.txt(109,31+i*17,s,{size:14,w:800,a:"middle"})).join("")
  +R(87,19,6,64,LN,{r:3})+R(70,19,6,64,LN,{r:3})+R(53,19,6,38,LN,{r:3});

// 오른쪽에서 시작해 왼쪽으로 읽는 화면: 줄도 아이콘도 좌우가 뒤집힌다
TH2["RTL"]=K=>K.card(18,10,124,80,14)+MQ(vl(131,18,82))
  +T(126,35,"مرحبا",{size:15,a:"end",ff:"'Segoe UI',Tahoma,Arial,sans-serif"})
  +[50,70].map((y,i)=>K.circ(118,y,7,{f:"#DDE3F0"})+ln(106-(i?46:60),y-5.5,i?46:60,LN,5)+ln(106-(i?28:34),y+2.5,i?28:34,"#DADFE8",4)
    +K.icon("back",33,y,11,C.mute,1.8)).join("")
  +K.line(28,60,126,60,{s:C.line,sw:.6});

// 글자 뒤로 살짝 어긋나게 깔린 그림자(파랑)
TH2["텍스트 그림자"]=K=>{const f="b237"+K.id();
  return `<defs><filter id="${f}" x="-20%" y="-30%" width="140%" height="160%"><feGaussianBlur stdDeviation="1.3"/></filter></defs>`
  +K.card(20,16,120,68,14)
  +MK(`<g filter="url(#${f})">`+K.txt(84,65.5,"글자",{size:32,fill:BL,w:800,a:"middle"})+`</g>`)
  +K.txt(80,61,"글자",{size:32,w:800,a:"middle"})};

// 웹폰트가 올 때까지 글자 자리가 비어 있다가 한꺼번에 나타난다
TH2["FOIT"]=K=>K.card(20,10,120,80,12)+[30,36.5,43].map(x=>K.circ(x,19,1.9,{f:LN})).join("")+K.line(20.5,27,139.5,27,{s:C.line,sw:.8})
  +`<g class="b2x37 b2a-n37fbar" style="opacity:0">`+K.rect(21,27.5,118,2.4,{f:BL})+`</g>`
  +`<rect x="42" y="40" width="76" height="31" rx="6" style="fill:none;stroke:#C4C9D3;stroke-width:1;stroke-dasharray:3 2.5"/>`
  +`<g class="b2x37 b2a-n37ftx">`+T(80,64,"Hello",{size:27,w:400,ff:SERIF,a:"middle"})+`</g>`
  +ln(52,78,56,LN,4.5);

// 가변 폰트가 움직이는 방향 둘: 가로로 굵기, 세로로 너비
TH2["가변 축"]=K=>K.card(14,8,132,84,14)
  +MQ(`<path d="M42 16V76H140" style="fill:none;stroke:${BL};stroke-width:1.4"/>`
    +K.txt(38,22,"너비",{size:7.5,fill:BL,w:800,a:"end"})+K.txt(140,86.5,"굵기",{size:7.5,fill:BL,w:800,a:"end"}))
  +[[1.16,40],[.74,68]].map(([sx,y])=>[[300,0],[600,.5],[900,1.5]].map(([w,sw],i)=>
    `<g transform="translate(${66+i*31} ${y}) scale(${sx} 1)">`+T(0,0,"가",{size:20,w,sw,a:"middle"})+`</g>`).join("")).join("");

// 이탤릭은 흘림 모양으로 따로 그린 글자, 오블리크는 바른 글자를 기울이기만 한 것
TH2["이탤릭과 오블리크"]=K=>K.card(12,12,62,76,12)+K.card(86,12,62,76,12)
  +T(43,61,"a",{size:46,w:400,ff:SERIF,fs:"italic",a:"middle"})
  +`<g transform="translate(117.5 61) skewX(-12)">`+T(0,0,"a",{size:46,w:400,ff:SERIF,a:"middle"})+`</g>`
  +lab(43,79,"이탤릭",BL)+lab(117,79,"오블리크");

// 진짜 굵은 글자 vs 보통 글자에 테두리를 덧칠해 억지로 굵힌 것(덧칠이 파랑)
TH2["가짜 볼드"]=K=>K.card(12,12,62,76,12)+K.card(86,12,62,76,12)
  +T(43,60,"가",{size:36,w:800,a:"middle"})
  +`<text x="117" y="60" font-size="36" font-weight="400" text-anchor="middle" class="${LIS}" style="fill:${INK};stroke:${BL};stroke-width:1.7;paint-order:stroke">가</text>`
  +lab(43,79,"진짜")+lab(117,79,"가짜",BL);

// 글꼴에 딸린 사용 허락서: 어디에 써도 되는지
TH2["폰트 라이선스"]=K=>{const row=(y,l,ok)=>K.txt(88,y+3,l,{size:8.5,w:700,fill:ok?INK:C.mute})
    +K.circ(128,y,6,{f:ok?BL:"#C4C9D3"})+K.icon(ok?"check":"x",128,y,ok?8:7,W,2);
  return K.card(14,12,132,76,14)
  +`<path d="M26 26a3 3 0 0 1 3 -3h20l10 10v40a3 3 0 0 1 -3 3h-27a3 3 0 0 1 -3 -3ZM49 23v10h10" style="fill:${W};stroke:#AEB5C4;stroke-width:1.3"/>`
  +T(42.5,55,"Aa",{size:15,w:400,ff:SERIF,a:"middle"})+ln(33,62,19,LN,3)
  +K.circ(60,71,8.5,{f:BL,s:W,sw:1.6})+K.icon("check",60,71,10,W,2.2)
  +row(31,"인쇄",true)+K.line(88,40.5,134,40.5,{s:C.line,sw:.6})+row(50,"웹",true)+K.line(88,59.5,134,59.5,{s:C.line,sw:.6})+row(69,"앱",false)};

// 글꼴 파일 형식 셋
TH2["OTF · TTF · WOFF2"]=K=>{const file=(x,l,on)=>
    `<path d="M${x} 24a3 3 0 0 1 3 -3h17l10 10v34a3 3 0 0 1 -3 3h-24a3 3 0 0 1 -3 -3Z" style="fill:${W}" filter="url(#b2lift)"/>`
    +`<path d="M${x} 24a3 3 0 0 1 3 -3h17l10 10v34a3 3 0 0 1 -3 3h-24a3 3 0 0 1 -3 -3ZM${x+20} 21v10h10" style="fill:none;stroke:${on?BL:"#AEB5C4"};stroke-width:1.3"/>`
    +T(x+15,56,"Aa",{size:13,w:700,ff:SANS,a:"middle"})
    +K.txt(x+15,82,l,{size:8,fill:on?BL:C.sub,w:800,a:"middle"});
  return K.blk(12,10,136,80,14)+file(24,"OTF",false)+file(65,"TTF",false)+file(106,"WOFF2",true)};

// 글꼴에 숨은 기능을 하나씩 켜고 끈다
TH2["오픈타입 기능"]=K=>{const row=(y,s,code,on,ff=SERIF)=>T(40,y+5,s,{size:15,w:400,ff,a:"middle",fill:on?INK:C.mute})
    +K.txt(60,y+3,code,{size:8,fill:C.sub,w:700})
    +K.rect(106,y-6,22,12,{f:on?BL:"#D3D8E3",r:6})+K.circ(on?122:112,y,4.4,{f:W});
  return K.card(18,8,124,84,14)
  +row(24,"fi","liga",true)+K.line(28,37,132,37,{s:C.line,sw:.6})
  +row(50,"½","frac",true)+K.line(28,63,132,63,{s:C.line,sw:.6})
  +row(76,"0","zero",false,SANS)};
}
