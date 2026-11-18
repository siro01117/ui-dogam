// B2 그림 보충 (N=21): tp 글자 용어 32 (조판 17 · 글자 표현 7 · 글꼴 기술 · 단위 8).
// 큰 글줄(막대) · 글자 견본이 주인공. 가리키는 부분만 파랑.
{
const C=K.C, W="#FFFFFF", n2=K.n2, INK="#12141A", LN="#BFC6D3";
const SERIF="Georgia,'Times New Roman',serif", SANS="Arial,Helvetica,sans-serif";
const A=(c,inner,st="")=>`<g class="b2x21 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x21{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:linear}`);
// 깜빡임("점등"): 파란 표시가 3.2초마다 켜졌다 꺼진다. 멈춘 모습(기본)은 켜진 상태.
//  lit  = 글자 · 글줄의 일부인 파랑: fill(선이면 stroke)이 파랑 ↔ --off 색
//  M    = 글자가 아닌 표시(기준선 · 띠 · 치수 · 윤곽): 겉 g 의 opacity 1 ↔ --o (선 .25, 면 0)
css(`.b2a-n21lit,.b2a-n21lits,.b2a-n21mark{animation-duration:3.2s}
.b2a-n21lit{animation-name:b2a-n21lit}.b2a-n21lits{animation-name:b2a-n21lits}.b2a-n21mark{animation-name:b2a-n21mark}
@keyframes b2a-n21lit{0%,42%,100%{fill:var(--on,var(--acc))}50%,92%{fill:var(--off,#12141A)}}
@keyframes b2a-n21lits{0%,42%,100%{stroke:var(--acc)}50%,92%{stroke:var(--off,#12141A)}}
@keyframes b2a-n21mark{0%,42%,100%{opacity:1}50%,92%{opacity:var(--o,.25)}}`);
const lit=(el,off=INK,stroke=false,on="")=>el.replace(/^<(\w+)/,`<$1 class="b2x21 b2a-n21lit${stroke?"s":""}"`).replace('style="',`style="--off:${off};${on?`--on:${on};`:""}`);
const M=(inner,o=.25)=>A("n21mark",inner,o===.25?"":`--o:${o}`);
const ts=(s,attr="",off=INK)=>`<tspan class="b2x21 b2a-n21lit"${attr?" "+attr:""} style="--off:${off};fill:${C.blue}">${s}</tspan>`;
const p=(d,style)=>`<path d="${d}" style="${style}"/>`;
// 글꼴 · 굵기 보강(stroke)을 줄 수 있는 글자
const T=(x,y,s,{size=9,fill=INK,w=700,a="start",ff="",sw=0,o=1}={})=>
  `<text x="${n2(x)}" y="${n2(y)}" font-size="${size}" font-weight="${w}" text-anchor="${a}"${ff?` font-family="${ff}"`:""} style="fill:${fill}${sw?`;stroke:${fill};stroke-width:${sw}`:""}${o<1?`;opacity:${o}`:""}">${s}</text>`;
const ln=(x,y,w,f=LN,h=5)=>K.rect(x,y,w,h,{f,r:h/2});            // 글줄 하나
const vl=(x,y1,y2,sw=1.6)=>K.line(x,y1,x,y2,{s:C.blue,sw});       // 기준선(세로)
const hl=(x1,x2,y,sw=1,o=1)=>K.line(x1,y,x2,y,{s:C.blue,sw,o});   // 기준선(가로)

/* ───────── 조판 ───────── */
// 왼쪽 끝만 반듯, 오른쪽은 들쭉날쭉
TH2["왼쪽 정렬"]=K=>K.card(18,10,124,80,14)+M(vl(31,19,81))
  +[84,60,92,48,74].map((w,i)=>ln(35,22+i*11.5,w,LN,6)).join("");

// 가운데 선을 기준으로 양쪽이 똑같이 남는다
TH2["가운데 정렬"]=K=>K.card(18,10,124,80,14)+M(vl(80,17,83))
  +[84,56,96,44,70].map((w,i)=>ln(80-w/2,22+i*11.5,w,LN,6)).join("");

// 낱말 사이를 벌려 좌우 끝이 모두 반듯
TH2["양끝 맞춤"]=K=>K.card(18,10,124,80,14)+M(vl(29,19,81)+vl(131,19,81))
  +[[22,30,18],[30,14,26,12],[18,24,28],[26,20,14,16],[28,16]].map((ws,i)=>{const y=22+i*11.5,sum=ws.reduce((a,b)=>a+b,0);
    const g=i===4?5:(96-sum)/(ws.length-1);let x=32;
    return ws.map(w=>{const r=ln(x,y,w,LN,6);x+=w+g;return r}).join("")}).join("");

// 문단 첫 줄만 안으로 밀려 들어가 시작
TH2["들여쓰기"]=K=>K.card(18,10,124,80,14)
  +[0,1,2,3,4,5].map(i=>{const y=19+i*11,first=i%3===0,x=first?46:32,w=i%3===2?(i===2?58:40):128-x;
    return (first?M(K.rect(32,y-.5,11,7,{f:C.blue,r:1.5,o:.85}),0):"")+ln(x,y,w,LN,6)}).join("");

// 문단 덩어리 사이의 빈 띠
TH2["문단 간격"]=K=>K.card(18,10,124,80,14)
  +[[18,96],[27,96],[36,58]].map(([y,w])=>ln(32,y,w)).join("")
  +M(K.rect(32,44,96,13,{f:C.blue,o:.22,r:2}),0)+M(hl(32,128,44,.9,.7)+hl(32,128,57,.9,.7))
  +[[60,96],[69,96],[78,70]].map(([y,w])=>ln(32,y,w)).join("");

// 한 줄의 가로 길이(글자 수)
TH2["행 길이"]=K=>K.card(18,10,124,80,14)
  +M(K.txt(80,24.5,"60자",{size:8,fill:C.blue,w:700,a:"middle"})
  +hl(30,130,31,1.4)+vl(30,27,35,1.4)+vl(130,27,35,1.4))
  +[100,100,100,54].map((w,i)=>ln(30,42+i*11,w,LN,6)).join("");

// 맞추지 않은 쪽 끝이 그리는 들쭉날쭉한 선
TH2["래그"]=K=>{const ws=[86,62,92,50,78,58];
  return K.card(18,10,124,80,14)
  +ws.map((w,i)=>ln(30,17+i*11.6,w,LN,6)).join("")
  +M(p("M"+ws.map((w,i)=>`${30+w+4} ${n2(20+i*11.6)}`).join("L"),`fill:none;stroke:${C.blue};stroke-width:1.8`))};

// 쪽 맨 아래 · 맨 위에 혼자 떨어진 한 줄
TH2["고아와 과부"]=K=>K.card(14,10,62,80,8)
  +[0,1,2,3,4,5].map(i=>ln(22,18+i*9,i===5?28:46)).join("")+lit(ln(22,77,46,C.blue),LN)
  +K.card(84,10,62,80,8)
  +lit(ln(92,18,22,C.blue),LN)+[0,1,2,3,4,5].map(i=>ln(92,32+i*9,i===5?30:46)).join("");

// 문단 첫 글자만 여러 줄 높이로 크게
TH2["드롭캡"]=K=>K.card(18,10,124,80,14)
  +lit(K.txt(29,51.4,"가",{size:36,fill:C.blue,w:800}))
  +[0,1,2,3].map(i=>ln(71,21+i*9.6,57)).join("")
  +ln(30,62,98)+ln(30,71.6,98)+ln(30,81.2,60);

// 전부 대문자: 글자 높이가 한 줄로 똑같다
TH2["올 캡스"]=K=>K.card(16,12,128,76,14)
  +T(80,35,"Title",{size:15,fill:C.mute,ff:SANS,a:"middle"})
  +M(hl(30,130,53.4,.9,.7)+hl(30,130,72,.9,.7))
  +T(80,72,"TITLE",{size:26,w:800,ff:SANS,a:"middle"});

// 첫 글자만 큰 대문자, 나머지는 소문자 높이의 작은 대문자
TH2["스몰 캡스"]=K=>K.card(16,16,128,68,14)
  +K.line(28,64,132,64,{s:C.line,sw:.9})+M(`<line x1="28" y1="47.5" x2="132" y2="47.5" style="stroke:${C.blue};stroke-width:.9;stroke-dasharray:3 2.500;opacity:.7"/>`)
  +`<text x="80" y="64" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="32" style="fill:${INK}">S${ts("MALL",'font-size="23"')}</text>`;

// 칸 끝을 넘는 낱말이 다음 줄 맨 앞으로 내려온다
TH2["줄바꿈"]=K=>K.blk(122,14,30,72,8)+K.card(26,12,92,76,12)+M(vl(118,20,80))
  +ln(36,26,26,LN,7)+ln(66,26,20,LN,7)
  +M(`<rect x="90" y="26" width="34" height="7" rx="3.5" style="fill:rgba(47,107,255,.08);stroke:${C.blue};stroke-width:1;stroke-dasharray:2.500 2"/>`)
  +lit(ln(36,44,34,C.blue,7),LN)+ln(74,44,22,LN,7)
  +ln(36,62,28,LN,7)+ln(68,62,20,LN,7);

// 줄 끝에서 낱말을 쪼개고 붙임표를 단다
TH2["하이픈 넣기"]=K=>K.card(18,12,124,76,14)
  +ln(30,25,100,LN,6)
  +ln(30,42,40,LN,6)
  +`<text x="130" y="49.5" text-anchor="end" font-family="${SANS}" font-weight="700" font-size="15" style="fill:${INK}">typog${ts("-",'font-weight="900"')}</text>`
  +T(30,70.5,"raphy",{size:15,ff:SANS})
  +ln(76,63,32,LN,6)+ln(112,63,18,LN,6);

// 글을 세로 기둥 여러 개로 나눠 흘린다
TH2["단"]=K=>K.card(18,8,124,84,12)
  +ln(28,15,66,"#3A4050",6)
  +[28,84].map((x,c)=>M(K.rect(x,27,48,58,{f:C.soft,s:C.blue,sw:.9,r:5}))
    +[0,1,2,3,4,5].map(i=>ln(x+5,33.5+i*8.4,c===1&&i===5?22:38,LN,4.5)).join("")).join("");

// 본문 사이에 한 문장만 크게 뽑아 놓는다
TH2["풀 쿼트"]=K=>K.card(18,8,124,84,14)
  +ln(30,16,100,LN,4.5)+ln(30,24.5,84,LN,4.5)
  +lit(hl(30,130,35,1.5),INK,true)+lit(hl(30,130,63,1.5),INK,true)
  +`<text x="80" y="54" text-anchor="middle" font-weight="800" font-size="14" style="fill:${INK}">${ts("“")}크게 한 줄${ts("”")}</text>`
  +ln(30,71,100,LN,4.5)+ln(30,79.5,62,LN,4.5);

// 본문의 작은 번호 ↔ 쪽 아래 설명
TH2["각주"]=K=>K.card(18,8,124,84,14)
  +ln(30,18,100)+ln(30,29,60)+lit(K.txt(92.5,31,"1",{size:9,fill:C.blue,w:800}))+ln(30,40,84)
  +K.line(30,60,64,60,{s:"#AEB5C4",sw:1})
  +lit(K.txt(30,75.5,"1",{size:9,fill:C.blue,w:800}))+ln(38,69,78,LN,4)+ln(38,77,46,LN,4);

// 줄마다 앞에 찍는 점
TH2["글머리 기호"]=K=>K.card(18,12,124,76,14)
  +[72,52,64].map((w,i)=>lit(K.circ(36,30+i*20,4.2,{f:C.blue}))+ln(48,26.5+i*20,w,LN,7)).join("");

/* ───────── 글자 표현 ───────── */
// 글자 아래에 그은 선 (글자는 검정 그대로)
TH2["밑줄"]=K=>K.card(20,16,120,68,14)
  +K.txt(80,61,"글자",{size:32,w:800,a:"middle"})+lit(hl(46,114,70,2.8),INK,true);

// 글자 가운데를 가로지르는 선
TH2["취소선"]=K=>K.card(20,16,120,68,14)
  +K.txt(80,61,"글자",{size:32,fill:C.sub,w:800,a:"middle"})+lit(hl(42,118,49.5,2.8),C.sub,true);

// 글줄 위로 올려 붙인 작은 글자 / 아래로 내려 붙인 작은 글자
TH2["위첨자와 아래첨자"]=K=>K.card(12,18,64,64,12)+K.card(84,18,64,64,12)
  +K.line(22,62,66,62,{s:C.line,sw:.8})+K.line(94,62,138,62,{s:C.line,sw:.8})
  +`<text x="44" y="62" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="30" style="fill:${INK}">x${ts("2",'dy="-13" font-size="16"')}</text>`
  +`<text x="116" y="62" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="26" style="fill:${INK}">H${ts("2",'dy="6" font-size="15"')}<tspan dy="-6">O</tspan></text>`;

// 숫자마다 너비가 달라 자리가 어긋나는 열 vs 칸 너비가 같아 딱 맞는 열
TH2["고정폭 숫자"]=K=>{const R=["1111","2048","7170"];
  return K.card(12,12,62,76,12)
  +R.map((s,r)=>{let x=22;return [...s].map(d=>{const a=d==="1"?6.4:9.4,t=T(x+a/2,37+r*18,d,{size:15,fill:C.sub,ff:SANS,a:"middle"});x+=a;return t}).join("")}).join("")
  +K.card(86,12,62,76,12)
  +M([0,1,2,3].map(c=>K.rect(96.5+c*10.5,21,9.5,58,{f:C.blue,o:.13,r:2})).join(""),0)
  +R.map((s,r)=>[...s].map((d,c)=>T(101.25+c*10.5,37+r*18,d,{size:15,ff:SANS,a:"middle"})).join("")).join("")};

// 위는 키가 같은 숫자, 아래는 소문자처럼 오르내리는 숫자
TH2["올드스타일 숫자"]=K=>{const D="123456";
  return K.card(16,10,128,80,14)
  +[...D].map((d,i)=>T(37.5+i*17,32,d,{size:15,fill:C.mute,ff:SANS,a:"middle"})).join("")
  +K.line(28,41,132,41,{s:C.line,sw:.6})
  +M(hl(28,132,59.2,.9,.65)+hl(28,132,72,.9,.65))
  +[...D].map((d,i)=>{const lo=i<2,dn=i>=2&&i<5;
    // 작은 숫자(1 · 2)는 획을 보강해 큰 숫자와 굵기를 맞추고, 내려가는 숫자(3 · 4 · 5)는 윗선에 머리를 붙인다
    return T(37.5+i*17,lo?71.55:dn?76.4:72,d,{size:lo?16.6:24,ff:SANS,a:"middle",sw:lo?.9:0})}).join("")};

// 같은 글자 a 의 두 가지 모양
TH2["대체 글리프"]=K=>{const s=c=>`fill:none;stroke:${c};stroke-width:5.5;stroke-linecap:butt`;
  return K.card(12,16,62,68,12)
  +p("M33.500 42.500c2-6 20-7.500 20 3V67",s(C.sub))+p("M53.500 52c-10-1.800-21 0-21 7.500s13 5.500 21 .500",s(C.sub))
  +K.card(86,16,62,68,12)
  +lit(`<ellipse cx="117" cy="51.100" rx="11.500" ry="13.350" style="${s(C.blue)}"/>`,C.sub,true)+lit(p("M128.500 35V67",s(C.blue)),C.sub,true)};

// 같은 글자: 작게 쓸 것은 획을 튼튼하게, 크게 쓸 것은 가늘고 섬세하게
TH2["옵티컬 사이즈"]=K=>K.card(12,12,62,76,12)+K.card(86,12,62,76,12)
  +T(43,62,"a",{size:46,w:400,ff:SERIF,a:"middle",sw:1.5})
  +T(117,62,"a",{size:46,w:400,ff:SERIF,a:"middle"})
  +K.txt(43,79,"본문용",{size:7.5,fill:C.sub,w:700,a:"middle"})+K.txt(117,79,"제목용",{size:7.5,fill:C.blue,w:700,a:"middle"});

/* ───────── 글꼴 기술 · 단위 ───────── */
const win=()=>K.card(20,10,120,80,12)+[30,36.5,43].map(x=>K.circ(x,19,1.9,{f:LN})).join("")+K.line(20.5,27,139.5,27,{s:C.line,sw:.8});

// 서버(구름)에서 내려받아 쓰는 글꼴
TH2["웹폰트"]=K=>win()
  +T(54,70,"Aa",{size:34,w:400,ff:SERIF,a:"middle"})
  +p("M99 64a7 7 0 0 1 1-13.900a9 9 0 0 1 17.500-1.500a7.500 7.500 0 0 1 1.500 15.400z",`fill:${C.soft};stroke:${C.blue};stroke-width:1.5`)
  +p("M109 49.500v9.500M105.300 55.500l3.700 3.700 3.700-3.700",`fill:none;stroke:${C.blue};stroke-width:1.6`);

// 1순위 글꼴이 없으면 다음 순서 글꼴이 대신 나온다
TH2["폴백 폰트"]=K=>
  `<rect x="14" y="18" width="60" height="52" rx="12" style="fill:rgba(255,255,255,.4);stroke:#AEB5C4;stroke-width:1.2;stroke-dasharray:4 3"/>`
  +T(44,55,"Aa",{size:26,w:400,fill:"#C4C9D3",ff:SERIF,a:"middle"})
  +K.circ(70,22,7,{f:"#AEB5C4"})+K.icon("x",70,22,8,W,2)
  +K.card(86,18,60,52,12)+K.rect(86,18,60,52,{s:C.blue,sw:1.5,r:12})
  +T(116,55,"Aa",{size:26,ff:SANS,a:"middle"})
  +K.circ(142,22,7,{f:C.blue})+K.icon("check",142,22,8.5,W,2.2)
  +K.txt(44,84,"1순위",{size:7.5,fill:C.mute,w:700,a:"middle"})+K.txt(116,84,"2순위",{size:7.5,fill:C.blue,w:700,a:"middle"});

// 글꼴의 많은 글자 중 쓰는 글자만 골라 남긴다
TH2["서브셋"]=K=>{const G="가나다라마바사아자차카타파하거너더러머버서어저처", on=[0,3,8,13,16,21];
  return K.card(16,8,128,84,14)
  +[...G].map((g,i)=>{const x=24+(i%6)*19,y=13+Math.floor(i/6)*19,s=on.includes(i);
    const r=K.rect(x,y,17,17,{f:s?C.blue:"#F1F3F8",r:4}),t=K.txt(x+8.5,y+12,g,{size:9,fill:s?W:"#C4C9D3",w:700,a:"middle"});
    return s?lit(r,"#F1F3F8")+lit(t,"#C4C9D3",false,W):r+t}).join("")};

// 기본 글꼴로 먼저 보였다가 웹폰트가 도착하면 바뀐다
TH2["FOUT"]=K=>win()
  +A("n21bar",K.rect(21,27.5,118,2.4,{f:C.blue}),"opacity:0")
  +A("n21fa",T(80,63,"Hello",{size:27,w:700,fill:C.sub,ff:SANS,a:"middle"}),"opacity:.2")
  +A("n21fb",T(80,63,"Hello",{size:27,w:400,ff:SERIF,a:"middle"}))
  +ln(52,73,56,LN,4.5);
kf("n21bar",3,"0%{transform:scaleX(.04);opacity:1}44%{transform:scaleX(1);opacity:1}52%,100%{transform:scaleX(1);opacity:0}","transform-origin:left center;");
kf("n21fa",3,"0%,46%{opacity:1}48%,100%{opacity:0}");
kf("n21fb",3,"0%,46%{opacity:0}48%,100%{opacity:1}");

// 확대한 글자 A: 계단 픽셀 vs 가장자리를 중간 밝기로 채운 픽셀
TH2["안티앨리어싱"]=K=>{
  const seg=[[5.5,1.2,1.7,10],[5.5,1.2,9.3,10],[3.4,7.5,7.6,7.5]], hw=.72, N=11, S=5;
  const inside=(x,y)=>seg.some(([a,b,c,d])=>{const dx=c-a,dy=d-b;let t=((x-a)*dx+(y-b)*dy)/(dx*dx+dy*dy);t=Math.max(0,Math.min(1,t));
    return Math.hypot(x-a-t*dx,y-b-t*dy)<hw});
  const cov=(i,j)=>{let n=0;for(let u=0;u<4;u++)for(let v=0;v<4;v++)if(inside(i+(u+.5)/4,j+(v+.5)/4))n++;return n/16};
  const grid=(x0,y0,aa)=>{let h=K.rect(x0-1.5,y0-1.5,N*S+3,N*S+3,{f:"#F4F6FA",r:3});
    for(let j=0;j<N;j++)for(let i=0;i<N;i++){const c=cov(i,j),o=aa?c:(c>=.5?1:0);
      if(o>.05)h+=K.rect(x0+i*S+.2,y0+j*S+.2,S-.4,S-.4,{f:INK,o:n2(o)})}
    return h};
  return K.card(10,14,66,72,12)+grid(15.5,22.5,false)+K.card(84,14,66,72,12)+grid(89.5,22.5,true)};

// 파란 윤곽이 픽셀 칸에 걸치면 흐릿, 칸에 맞추면 또렷
TH2["힌팅"]=K=>{const N=10,S=5.5;
  const grid=(x0,y0,a,b,t)=>{let h=K.rect(x0-1.5,y0-1.5,N*S+3,N*S+3,{f:"#F4F6FA",r:3});
    const cv=(lo,i)=>Math.max(0,Math.min(lo+1,i+1)-Math.max(lo,i));
    for(let j=0;j<N;j++)for(let i=0;i<N;i++){
      const inY=j>=1&&j<9?1:0, stem=Math.max(cv(a,i),cv(b,i))*inY, bar=(i+1>a+1&&i<b?Math.min(1,Math.min(i+1,b)-Math.max(i,a+1)):0)*cv(t,j);
      const o=Math.max(stem,bar);
      h+=K.rect(x0+i*S+.25,y0+j*S+.25,S-.5,S-.5,o>.05?{f:INK,o:n2(o)}:{f:W})}
    const X=v=>n2(x0+v*S),Y=v=>n2(y0+v*S);
    return h+M(p(`M${X(a)} ${Y(1)}H${X(a+1)}V${Y(t)}H${X(b)}V${Y(1)}H${X(b+1)}V${Y(9)}H${X(b)}V${Y(t+1)}H${X(a+1)}V${Y(9)}H${X(a)}Z`,`fill:none;stroke:${C.blue};stroke-width:1`))};
  return K.card(10,14,66,72,12)+grid(15.5,22.5,2.5,6.5,4.5)+K.card(84,14,66,72,12)+grid(89.5,22.5,2,7,5)};

// 같은 크기 글자: 자 눈금 12칸(pt) vs 화면 점 16칸(px)
TH2["pt와 px"]=K=>{let g="";
  for(let i=0;i<=16;i++){const v=n2(i*2.75);g+=K.line(95+v,18,95+v,62,{s:"#D5DAE4",sw:.5})+K.line(95,18+v,139,18+v,{s:"#D5DAE4",sw:.5})}
  let r=vl(19.5,18,62,1.3);for(let i=0;i<=12;i++){const y=n2(18+i*44/12);r+=K.line(19.5,y,i%6===0?25.5:23,y,{s:C.blue,sw:1})}
  return K.card(12,10,62,80,12)+M(r)+K.txt(49.5,56.5,"가",{size:40,w:700,a:"middle"})
  +M(K.txt(43,80,"12pt",{size:8.5,fill:C.blue,w:800,a:"middle"}))
  +K.card(86,10,62,80,12)+g+M(K.rect(95,18,2.75,2.75,{f:C.blue}),0)+K.txt(117,56.5,"가",{size:40,w:700,a:"middle"})
  +M(K.txt(117,80,"16px",{size:8.5,fill:C.blue,w:800,a:"middle"}))};

// 부모 글자가 커지면 같이 커지는 상자(em) vs 늘 같은 상자(rem)
TH2["em과 rem"]=K=>K.card(14,8,132,84,14)
  +K.txt(86,22,"em",{size:9,fill:C.blue,w:800,a:"middle"})+K.txt(122,22,"rem",{size:9,fill:C.sub,w:800,a:"middle"})
  +K.txt(40,42.5,"가",{size:12,w:700,a:"middle"})
  +K.rect(80,32,12,12,{f:C.blue,r:2})+K.rect(116,32,12,12,{f:"#AEB5C4",r:2})
  +K.line(26,50,134,50,{s:C.line,sw:.6})
  +K.txt(40,79,"가",{size:26,w:700,a:"middle"})
  +K.rect(73,56,26,26,{f:C.blue,r:3})+K.rect(116,63,12,12,{f:"#AEB5C4",r:2});
}
