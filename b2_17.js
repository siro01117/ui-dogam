// B2 그림 보충 (N=17): st 17 · tp 10.
// 스타일 항목은 같은 작은 카드(그림 + 제목 + 버튼)를 그 스타일로 그린다. 글자 용어는 큰 글자 견본으로.
{
const C=K.C, W="#FFFFFF", n2=K.n2, INK="#12141A";
const SERIF="Georgia,'Times New Roman',serif", SANS="Arial,Helvetica,sans-serif";
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const p=(d,style)=>`<path d="${d}" style="${style}"/>`;
// 글꼴 · 기울기 · 굵기 보강(stroke)을 줄 수 있는 글자
const T=(x,y,s,{size=9,fill=INK,w=700,a="start",ff="",fs="",st="",sw=0,o=1}={})=>
  `<text x="${n2(x)}" y="${n2(y)}" font-size="${size}" font-weight="${w}" text-anchor="${a}"${ff?` font-family="${ff}"`:""}${fs?` font-style="${fs}"`:""} style="fill:${fill}${sw?`;stroke:${st||fill};stroke-width:${sw}`:""}${o<1?`;opacity:${o}`:""}">${s}</text>`;
const clipR=(id,x,y,w,h,r)=>`<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath>`;
const MT1="M36 56V50L58 31L84 56Z", MT2="M68 56L96 33L124 51V56Z";
// 공통 카드: 그림(하늘 · 해 · 산) + 제목 + 버튼. 색만 바꿔 끼운다
const scene=o=>{const c="b217c"+K.id();
  return `<defs>${clipR(c,36,16,88,40,o.pr??8)}</defs>`
  +K.rect(28,8,104,84,{f:o.bg,r:o.r??12,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})">`+K.rect(36,16,88,40,{f:o.sky})+K.circ(104,29,7,{f:o.sun})+p(MT2,`fill:${o.mt2}`)+p(MT1,`fill:${o.mt}`)+`</g>`
  +T(36,71,"여름 여행",{size:9.5,fill:o.ink})+K.rect(36,77,34,3.5,{f:o.sub,r:1.75})
  +K.rect(96,64,28,15,{f:o.btn,r:o.br??7.5})+T(110,74.4,"보기",{size:7.5,fill:o.btnInk,a:"middle"})};

/* ───────── st · 디자인 스타일 ───────── */
// 거의 다 비우고 점 하나, 가는 글자, 밑줄뿐
TH2["미니멀리즘"]=K=>K.card(28,8,104,84,4)
  +K.circ(42,24,3.2,{f:INK})
  +T(38,68,"여름 여행",{size:10,w:300,fill:INK})
  +T(38,81,"보기",{size:7,w:400,fill:INK})+K.line(38,83.5,52,83.5,{s:INK,sw:.6});

// 색 · 무늬 · 스티커를 빈틈없이 겹쳐 채운다
TH2["맥시멀리즘"]=K=>{const i=K.id(),c="b217c"+i,c2="b217d"+i;let g="",d="",ck="";
  for(let x=-60;x<110;x+=10)g+=p(`M${28+x} 92l84-84`,"fill:none;stroke:#FFD23F;stroke-width:4");
  for(let y=20;y<56;y+=7)for(let x=40;x<124;x+=7)d+=K.circ(x+(y%2?3:0),y,1.1,{f:"#FF4FA3"});
  for(let x=0;x<13;x++)ck+=K.rect(28+x*8,84,8,4,{f:x%2?"#111":W})+K.rect(28+x*8,88,8,4,{f:x%2?W:"#111"});
  const star=(cx,cy,s,f,r)=>`<g transform="translate(${cx} ${cy}) rotate(${r}) scale(${s}) translate(-12 -12)">`+p(K.ICON.star,`fill:${f};stroke:#111;stroke-width:1.4`)+`</g>`;
  return `<defs>${clipR(c,28,8,104,84,12)}${clipR(c2,36,16,88,40,6)}</defs>`
  +K.rect(28,8,104,84,{f:"#6C3BFF",r:12,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})">${g}${ck}</g>`
  +`<g clip-path="url(#${c2})">`+K.rect(36,16,88,40,{f:"#38E1C6"})+d
  +K.circ(104,29,9,{f:"#FF6B2C",s:"#111",sw:1.2})+p(MT2,"fill:#FF4FA3;stroke:#111;stroke-width:1.2")+p(MT1,"fill:#2B6BFF;stroke:#111;stroke-width:1.2")+`</g>`
  +K.rect(36,16,88,40,{s:"#111",sw:1.4,r:6})
  +`<g transform="rotate(-4 62 68)">`+K.rect(33,60,58,14,{f:"#FFD23F",s:"#111",sw:1.2,r:3})+T(62,70.6,"여름 여행",{size:9.5,fill:"#111",w:900,a:"middle"})+`</g>`
  +K.rect(97,66,30,15,{f:"#FF4FA3",s:"#111",sw:1.2,r:7.5})+T(112,76.4,"보기",{size:7.5,fill:W,w:900,a:"middle"})
  +star(126,15,.62,"#FFD23F",12)+star(34,54,.5,"#38E1C6",-14)+K.circ(88,80,4,{f:"#38E1C6",s:"#111",sw:1})};

// 80년대: 파스텔 면 위에 지그재그 · 세모 · 점, 검은 선과 어긋난 그림자
TH2["멤피스"]=K=>{const c="b217c"+K.id();let d="";
  for(let y=0;y<3;y++)for(let x=0;x<4;x++)d+=K.circ(100+x*6,62+y*6,1.2,{f:"#111"});
  return `<defs>${clipR(c,36,16,88,40,0)}</defs>`
  +K.rect(28,8,104,84,{f:"#FFF3DC",r:6,fx:"url(#b2lift)"})
  +K.rect(39,19,88,40,{f:"#111"})
  +`<g clip-path="url(#${c})">`+K.rect(36,16,88,40,{f:"#FFB3C7"})+K.circ(104,29,8,{f:"#FFD23F",s:"#111",sw:1.4})
  +p(MT2,"fill:#3DCFC0;stroke:#111;stroke-width:1.4")+p(MT1,"fill:#5B7CFF;stroke:#111;stroke-width:1.4")+`</g>`
  +K.rect(36,16,88,40,{s:"#111",sw:1.4})
  +p("M40 24l4-5 4 5 4-5 4 5 4-5","fill:none;stroke:#111;stroke-width:1.6")
  +K.rect(36,65,44,6,{f:"#111"})+K.rect(36,76,28,4,{f:"#3DCFC0"})+d
  +p("M118 86l8-13 8 13z","fill:#FFD23F;stroke:#111;stroke-width:1.4")
  +K.circ(30,62,5,{f:"#FF6FA0",s:"#111",sw:1.4})};

// 어두운 밤 + 네온 분홍 · 청록, 깎인 모서리, 빛 번짐
TH2["사이버펑크"]=K=>{const i=K.id(),c="b217c"+i,f="b217f"+i;let g="";
  for(let x=44;x<124;x+=11)g+=K.line(x,16,x,56,{s:"#FF2BD6",sw:.4,o:.35});
  for(let y=24;y<56;y+=8)g+=K.line(36,y,124,y,{s:"#FF2BD6",sw:.4,o:.35});
  const frame="M28 8H122L132 18V92H38L28 82Z", btn="M94 64H124V75L120 79H94Z";
  const neon=`<path d="${frame}" style="fill:none;stroke:#00F0FF;stroke-width:1.2"/>`+p("M36 56L58 31L78 50L96 33L124 51","fill:none;stroke:#00F0FF;stroke-width:1.3")
    +K.circ(104,27,6,{s:"#FF2BD6",sw:1.3})+`<path d="${btn}" style="fill:none;stroke:#FF2BD6;stroke-width:1.2"/>`;
  return `<defs><clipPath id="${c}"><rect x="36" y="16" width="88" height="40"/></clipPath><filter id="${f}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.2"/></filter></defs>`
  +`<path d="${frame}" style="fill:#0B0620" filter="url(#b2lift)"/>`
  +K.rect(36,16,88,40,{f:"#140B34"})+`<g clip-path="url(#${c})">${g}</g>`
  +`<g filter="url(#${f})" style="opacity:.9">${neon}</g>`+neon
  +T(36,72,"여름 여행",{size:9.5,fill:"#FCEE0A",w:800})+K.rect(36,77,22,2.5,{f:"#00F0FF"})+K.rect(60,77,6,2.5,{f:"#FF2BD6"})
  +T(109,74.6,"보기",{size:7.5,fill:"#FF2BD6",w:800,a:"middle"})};

// 분홍 · 보라 노을, 줄무늬 해, 원근 격자 바닥
TH2["베이퍼웨이브"]=K=>{const i=K.id(),c="b217c"+i,s="b217s"+i,g="b217g"+i,u="b217u"+i,b="b217b"+i;let fl="",cut="";
  for(let k=-6;k<=6;k++)fl+=K.line(80+k*5,40,80+k*17,58,{s:"#3DF5E6",sw:.6});
  [42,44.5,48,53].forEach(y=>fl+=K.line(36,y,124,y,{s:"#3DF5E6",sw:.6}));
  [28,31.5,35].forEach((y,j)=>cut+=K.rect(60,y,40,1.2+j*.5,{f:"#FF6AD5"}));
  return `<defs>${clipR(c,36,16,88,40,8)}${K.grad(s,[[0,"#5B2A9E"],[.6,"#FF6AD5"],[1,"#FFB36B"]],0,1)}${K.grad(g,[[0,"#FFF275"],[1,"#FF5FA2"]],0,1)}${K.grad(u,[[0,"#F9D2FF"],[1,"#C9F4FF"]],1,1)}${K.grad(b,[[0,"#FF6AD5"],[1,"#3DD9F5"]],1,0)}<clipPath id="${c}s"><rect x="36" y="16" width="88" height="24"/></clipPath></defs>`
  +K.rect(28,8,104,84,{f:`url(#${u})`,r:12,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})">`+K.rect(36,16,88,24,{f:`url(#${s})`})
  +`<g clip-path="url(#${c}s)">`+K.circ(80,36,13,{f:`url(#${g})`})+cut+`</g>`
  +K.rect(36,40,88,16,{f:"#2A1458"})+fl+`</g>`
  +T(37,72,"여름 여행",{size:9.5,fill:"#FF4FC3",w:800})+T(36,71,"여름 여행",{size:9.5,fill:"#1BB8C9",w:800})
  +K.rect(36,77,34,3.5,{f:"#B48CF2",r:1.75})
  +K.rect(96,64,28,15,{f:`url(#${b})`,r:7.5})+T(110,74.4,"보기",{size:7.5,fill:W,a:"middle"})};

// 같은 카드를 비스듬히 위에서 본 입체로 (모든 선이 30° 축)
TH2["아이소메트릭"]=K=>{const s=1.25,cx=71.3,cy=21;
  const P=(x,y,z)=>n2(cx+(x-y)*.866*s)+" "+n2(cy+(x+y)*.5*s-z*s);
  const poly=(pts,f,sh)=>`<path d="M${pts.join("L")}Z" style="fill:${f}"/>`+(sh?`<path d="M${pts.join("L")}Z" style="fill:#0B1640;opacity:${sh}"/>`:"");
  const box=(x,y,z,w,d,h,f,top)=>poly([P(x,y+d,z),P(x+w,y+d,z),P(x+w,y+d,z+h),P(x,y+d,z+h)],f,.16)
    +poly([P(x+w,y,z),P(x+w,y+d,z),P(x+w,y+d,z+h),P(x+w,y,z+h)],f,.34)
    +poly([P(x,y,z+h),P(x+w,y,z+h),P(x+w,y+d,z+h),P(x,y+d,z+h)],top||f,0);
  return `<g filter="url(#b2lift)">`+box(0,0,0,60,44,4,"#DCE3F7",W)+`</g>`
  +box(4,4,4,28,36,5,C.blue)+box(9,9,9,8,8,6,"#FFC94D")
  +box(36,6,4,5,32,2,"#3A4050")+box(44,14,4,3.5,24,1.5,"#C3CADB")+box(51,20,4,6.5,18,3.5,C.blue)};

// 그림이 납작한 도형이 아니라 빛 · 그림자가 있는 통통한 입체
TH2["3D 일러스트"]=K=>{const i=K.id(),a="b217a"+i,b="b217b"+i,d="b217d"+i,e="b217e"+i,c="b217c"+i;
  const rg=(id,c0,c1,c2)=>`<radialGradient id="${id}" cx=".34" cy=".28" r=".8"><stop offset="0" stop-color="${c0}"/><stop offset=".55" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient>`;
  return `<defs>${rg(a,"#FFF3B8","#FFB83D","#E07A1F")}${rg(b,"#C9D8FF","#5B7CFF","#2A3FB8")}${rg(d,"#FFD3E2","#FF7FA8","#C7446F")}${K.grad(e,[[0,"#8FE8C8"],[.5,"#3CCB9A"],[1,"#178A66"]],1,0)}${clipR(c,36,16,88,40,8)}</defs>`
  +K.card(28,8,104,84,12)
  +`<g clip-path="url(#${c})">`+K.rect(36,16,88,40,{f:"#EEF1FF"})
  +`<ellipse cx="62" cy="52" rx="15" ry="3" style="fill:#2A3FB8;opacity:.18"/><ellipse cx="89" cy="52.500" rx="10" ry="2.4" style="fill:#178A66;opacity:.2"/><ellipse cx="110" cy="52" rx="8" ry="2" style="fill:#C7446F;opacity:.2"/>`
  +K.circ(60,37,14,{f:`url(#${b})`})+`<ellipse cx="55" cy="30" rx="4.5" ry="2.6" transform="rotate(-28 55 30)" style="fill:#fff;opacity:.55"/>`
  +p("M80 52L89 27L98 52A9 2.4 0 0 1 80 52Z",`fill:url(#${e})`)
  +K.circ(110,44,8,{f:`url(#${d})`})+`<ellipse cx="107" cy="40" rx="2.6" ry="1.5" transform="rotate(-28 107 40)" style="fill:#fff;opacity:.6"/>`
  +K.circ(112,24,5,{f:`url(#${a})`})+`</g>`
  +T(36,71,"여름 여행",{size:9.5})+gbar(36,77,34,3.5)
  +K.rect(96,64,28,15,{f:C.blue,r:7.5})+T(110,74.4,"보기",{size:7.5,fill:W,a:"middle"})};

// 그라데이션 면 전체에 모래알 같은 입자
TH2["그레인 텍스처"]=K=>{const i=K.id(),c="b217c"+i,f="b217f"+i,g="b217g"+i;
  return `<defs>${clipR(c,28,8,104,84,12)}${K.grad(g,[[0,"#FF9A5A"],[.5,"#F0628E"],[1,"#6A4BD8"]],.7,1)}<filter id="${f}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.15" numOctaves="2" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.5 -.62"/><feComposite in2="SourceGraphic" operator="in"/></filter></defs>`
  +K.rect(28,8,104,84,{f:`url(#${g})`,r:12,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})">`+K.circ(104,30,10,{f:"#FFE3A8",o:.9})+p("M28 62L60 34L92 62Z","fill:#3B2A8C;opacity:.45")+p("M64 62L100 38L132 58V62Z","fill:#3B2A8C;opacity:.28")
  +K.rect(28,8,104,84,{f:"#1A1030",fx:`url(#${f})`})
  +`<g style="mix-blend-mode:overlay">`+K.rect(28,8,104,84,{f:W,fx:`url(#${f})`,o:.45})+`</g></g>`
  +T(38,76,"여름 여행",{size:9.5,fill:W})+K.rect(38,81,30,3,{f:W,r:1.5,o:.6})
  +K.rect(98,68,26,14,{f:W,r:7})+T(111,77.8,"보기",{size:7.5,fill:"#6A4BD8",a:"middle"})};

// 한 가지 색의 밝고 어두운 단계만으로
TH2["모노크롬"]=K=>{const c="b217c"+K.id(), L=o=>K.rect(36,16,88,40,{f:C.blue,o});
  return `<defs>${clipR(c,36,16,88,40,8)}</defs>`
  +K.card(28,8,104,84,12)
  +`<g clip-path="url(#${c})">`+L(.14)+K.circ(104,29,7,{f:C.blue,o:.3})+`<path d="${MT2}" style="fill:${C.blue};opacity:.45"/><path d="${MT1}" style="fill:${C.blue};opacity:.85"/></g>`
  +T(36,71,"여름 여행",{size:9.5,fill:C.blue})+K.rect(36,77,34,3.5,{f:C.blue,r:1.75,o:.3})
  +K.rect(96,64,28,15,{f:C.blue,r:7.5})+T(110,74.4,"보기",{size:7.5,fill:W,a:"middle"})};

// 흰색을 섞은 듯 연하고 보드라운 색들
TH2["파스텔"]=K=>scene({bg:"#FFF8F3",sky:"#CDE7FF",sun:"#FFE9A8",mt2:"#D9C8F5",mt:"#BFEBD6",ink:"#7C6FA8",sub:"#F3D3E0",btn:"#FFC9D9",btnInk:"#A0527A",r:14});

// 사진 전체를 남색과 분홍 두 색으로만
TH2["듀오톤 사진"]=K=>{const i=K.id(),c="b217c"+i,f="b217f"+i,g="b217g"+i;
  return `<defs>${clipR(c,20,10,120,80,14)}${K.grad(g,[[0,"#9A9A9A"],[1,"#F2F2F2"]],0,1)}<filter id="${f}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="table" tableValues=".13 1"/><feFuncG type="table" tableValues=".06 .5"/><feFuncB type="table" tableValues=".5 .68"/></feComponentTransfer></filter></defs>`
  +K.rect(20,10,120,80,{f:"#21107F",r:14,fx:"url(#b2lift)"})
  +`<g clip-path="url(#${c})"><g filter="url(#${f})">`+K.rect(20,10,120,80,{f:`url(#${g})`})
  +K.circ(104,36,13,{f:W})
  +p("M20 74L52 40L74 62L98 44L140 72V90H20Z","fill:#8A8A8A")
  +p("M20 90V70L44 52L70 76L92 64L140 84V90Z","fill:#4A4A4A")
  +p("M20 90V82C50 74 90 92 140 80V90Z","fill:#0E0E0E")
  +K.circ(58,60,4.5,{f:"#0E0E0E"})+p("M51 86c0-12 3-19 7-19s7 7 7 19z","fill:#0E0E0E")
  +`</g></g>`
  +K.rect(27,17,37,20,{f:W,r:10,fx:"url(#b2lift)"})+K.circ(39,27,7,{f:"#21107F"})+K.circ(52,27,7,{f:"#FF80AD",s:W,sw:1.4})};

// 자 없이 손으로 그은 듯 삐뚤빼뚤한 선
TH2["핸드드로운"]=K=>{const f="b217f"+K.id(), s="fill:none;stroke:#2B2F3A;stroke-width:1.5";let h="";
  for(let x=40;x<70;x+=5)h+=`<path d="M${x} 55l${n2(Math.min(10,(84-x)*.5))} ${n2(-Math.min(12,(84-x)*.6))}" style="fill:none;stroke:#2B2F3A;stroke-width:.8"/>`;
  return `<defs><filter id="${f}" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".07" numOctaves="2" seed="5" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="3.4" xChannelSelector="R" yChannelSelector="G"/></filter></defs>`
  +K.card(26,6,108,88,10,"#FFFDF6")
  +`<g filter="url(#${f})">`
  +`<rect x="32" y="12" width="96" height="76" rx="5" style="${s}"/><rect x="38" y="18" width="84" height="38" rx="3" style="${s}"/>`
  +K.circ(104,30,6.5,{f:"#FFD86B",s:"#2B2F3A",sw:1.5})
  +[[104,19,104,16],[113,22,115.5,19.500],[115.5,30,119,30],[95,22,92.5,19.500],[92.5,30,89,30]].map(([a,b,c,d])=>K.line(a,b,c,d,{s:"#2B2F3A",sw:1.2})).join("")
  +p("M38 56L58 33L74 50L92 36L122 56",s)+h
  +p("M40 77q4-3 8 0t8 0 8 0 8 0",`fill:none;stroke:#2B2F3A;stroke-width:1.2`)
  +`<rect x="94" y="64" width="28" height="16" rx="6" style="fill:rgba(47,107,255,.14);stroke:#2B2F3A;stroke-width:1.5"/>`
  +`</g>`
  +T(40,71,"여름 여행",{size:9.5,fill:"#2B2F3A"})+T(108,75,"보기",{size:7.5,fill:"#2B2F3A",a:"middle"})};

/* ───────── st · 디자인 시스템 ───────── */
// 정해 둔 간격 값 계단: 4 · 8 · 16 · 24 · 32
TH2["스페이싱 스케일"]=K=>K.card(18,8,124,84,14)
  +[4,8,16,24,32].map((v,i)=>{const y=17+i*14.5,w=v*2.6;
    return K.txt(40,y+7.6,String(v),{size:8,fill:i===4?C.blue:C.sub,w:700,a:"end"})
    +K.rect(47,y,w,10,{f:C.blue,o:.16,r:1})+K.line(47,y,47,y+10,{s:C.blue,sw:1.3})+K.line(47+w,y,47+w,y+10,{s:C.blue,sw:1.3})+K.line(47,y+5,47+w,y+5,{s:C.blue,sw:.8})}).join("");

// 색에 뜻을 붙인다: 초록 성공 · 노랑 경고 · 빨강 오류 · 파랑 정보
TH2["시맨틱 컬러"]=K=>K.card(16,10,128,80,14)
  +[[C.green,"rgba(31,169,113,.13)","성공","check"],[C.amber,"rgba(242,169,59,.16)","경고","!"],[C.red,"rgba(229,72,77,.12)","오류","x"],[C.blue,C.soft,"정보","i"]].map(([c,bg,l,ic],i)=>{
    const x=24+(i%2)*58,y=18+(i>>1)*34;
    return K.rect(x,y,54,30,{f:bg,r:9})+K.circ(x+15,y+15,8,{f:c})
    +(ic.length>1?K.icon(ic,x+15,y+15,9,W,2.2):K.txt(x+15,y+19,ic,{size:11,fill:W,w:800,a:"middle"}))
    +K.txt(x+28,y+18.4,l,{size:9,fill:C.ink,w:700})}).join("");

// 같은 글자, 바탕과 밝기 차이가 작으면 안 보이고 크면 또렷하다
TH2["대비"]=K=>[["#C4C9D3","1.6:1",C.mute,14],[INK,"17:1",C.blue,84]].map(([ink,r,rc,x])=>
    K.card(x,16,62,68,12)+K.txt(x+31,56,"가",{size:34,fill:ink,w:800,a:"middle"})
    +K.txt(x+31,76,r,{size:8,fill:rc,w:700,a:"middle"})).join("");

// 한 부품의 여러 모양을 점선 틀 하나에 모아 둔다
TH2["컴포넌트 변형"]=K=>{
  const b=(x,y,f,s,ink,o=1)=>`<g${o<1?` style="opacity:${o}"`:""}>`+K.rect(x,y,48,22,{f,s,sw:1.4,r:11})+K.txt(x+24,y+14.4,"버튼",{size:9,fill:ink,w:700,a:"middle"})+`</g>`;
  return K.card(14,8,132,84,12)
  +`<rect x="22" y="15" width="116" height="70" rx="9" style="fill:none;stroke:${C.blue};stroke-width:1.2;stroke-dasharray:4 3"/>`
  +b(29,23,C.blue,"none",W)+b(83,23,W,C.blue,C.blue)
  +b(29,55,C.soft,"none",C.blue)+b(83,55,"#E7EAF2","none","#A9AFBB")};

// 작은 것에서 큰 것으로: 원자 → 분자 → 유기체
TH2["아토믹 디자인"]=K=>
  K.card(10,34,24,16,8,C.blue)+K.rect(16,40.25,12,3.5,{f:W,r:1.75})
  +K.card(42,30,48,24,8)+K.rect(46,34,24,16,{f:C.skel,r:5})+K.rect(73,34,13,16,{f:C.blue,r:5})+K.rect(76,40.25,7,3.5,{f:W,r:1.75})
  +K.card(98,10,54,66,9)+K.circ(108,20,4,{f:C.skel})+gbar(115,18,22)
  +K.rect(104,29,42,18,{f:C.skel,r:5})
  +K.rect(104,52,26,16,{f:C.skel,r:5})+K.rect(133,52,13,16,{f:C.blue,r:5})+K.rect(136,58.25,7,3.5,{f:W,r:1.75})
  +K.line(36.5,42,39.5,42,{s:C.mute,sw:1.2})+K.line(92.5,42,95.5,42,{s:C.mute,sw:1.2})
  +[[22,"원자"],[66,"분자"],[125,"유기체"]].map(([x,l],i)=>K.txt(x,90,l,{size:7.5,fill:i===2?C.blue:C.sub,w:700,a:"middle"})).join("");

/* ───────── tp · 글자 용어 ───────── */
// 글자 A H 를 직접 그린다(글꼴이 달라도 같은 모양). 획 끝 돌기(발)만 파랑. 굵은 획과 가는 획의 차이도 있다
TH2["세리프"]=K=>{const cx=50,t=24,b=76,B=C.blue;
  const foot=(x1,x2,d=0)=>p(`M${n2(x1-6)} ${b}V${b-2.6}Q${x1} ${b-2.6} ${n2(x1+d)} ${b-8.2}H${n2(x2+d)}Q${x2} ${b-2.6} ${n2(x2+6)} ${b-2.6}V${b}Z`,`fill:${B}`);
  const head=(x1,x2)=>p(`M${n2(x1-6)} ${t}V${t+2.6}Q${x1} ${t+2.6} ${x1} ${t+8.2}H${x2}Q${x2} ${t+2.6} ${n2(x2+6)} ${t+2.6}V${t}Z`,`fill:${B}`);
  return K.card(12,10,136,80,14)
  +p(`M${cx-5} ${t}h3.4L${cx-18.6} ${b}h-3.4Z`,`fill:${INK}`)+p(`M${cx-5} ${t}h10L${cx+22} ${b}h-10Z`,`fill:${INK}`)+K.rect(cx-14,57,21,2.8,{f:INK})
  +foot(cx-22,cx-18.6,2.6)+foot(cx+12,cx+22,-2.6)
  +K.rect(95,t,9.5,52,{f:INK})+K.rect(123.5,t,9.5,52,{f:INK})+K.rect(100,48.6,28,2.8,{f:INK})
  +head(95,104.5)+head(123.5,133)+foot(95,104.5)+foot(123.5,133)};

// 같은 글자 A H, 돌기 없이 획 끝이 뚝 끊긴다. 돌기가 있었을 자리는 옅은 점선. 획 굵기는 고르다
TH2["산세리프"]=K=>{const cx=50,t=24,b=76,G="fill:none;stroke:#B4BBC8;stroke-width:.9;stroke-dasharray:1.8 1.6";
  const foot=(x1,x2,d=0)=>p(`M${n2(x1-6)} ${b}V${b-2.6}Q${x1} ${b-2.6} ${n2(x1+d)} ${b-8.2}H${n2(x2+d)}Q${x2} ${b-2.6} ${n2(x2+6)} ${b-2.6}V${b}Z`,G);
  const head=(x1,x2)=>p(`M${n2(x1-6)} ${t}V${t+2.6}Q${x1} ${t+2.6} ${x1} ${t+8.2}H${x2}Q${x2} ${t+2.6} ${n2(x2+6)} ${t+2.6}V${t}Z`,G);
  return K.card(12,10,136,80,14)
  +foot(cx-22,cx-13.5,2.6)+foot(cx+13.5,cx+22,-2.6)+head(95,103.5)+head(124.5,133)+foot(95,103.5)+foot(124.5,133)
  +p(`M${cx-4.25} ${t}h8.5L${cx-13.5} ${b}h-8.5Z`,`fill:${INK}`)+p(`M${cx-4.25} ${t}h8.5L${cx+22} ${b}h-8.5Z`,`fill:${INK}`)+K.rect(cx-9,55,18,6.5,{f:INK})
  +K.rect(95,t,8.5,52,{f:INK})+K.rect(124.5,t,8.5,52,{f:INK})+K.rect(95,46.5,38,7,{f:INK})};

// 같은 글자, 글자 사이만 좁게 / 넓게
TH2["자간"]=K=>K.card(16,10,128,80,14)
  +["가","나","다","라"].map((s,i)=>K.txt(37+i*13,40,s,{size:15,fill:C.sub,w:700,a:"middle"})).join("")
  +K.line(26,50,134,50,{s:C.line,sw:.6})
  +["가","나","다","라"].map((s,i)=>{const x=39+i*27;
    return K.txt(x,75,s,{size:15,w:700,a:"middle"})+(i<3?K.rect(x+8.5,60,10,18,{f:C.blue,o:.2,r:1.5}):"")}).join("");

// 같은 글, 줄 사이만 좁게 / 넓게
TH2["행간"]=K=>{const L=["줄과 줄","사이의","간격"];
  return K.card(12,14,62,72,12)+L.map((s,i)=>K.txt(22,42+i*9.5,s,{size:9.5,fill:C.sub,w:700})).join("")
  +K.card(82,14,66,72,12)+L.map((s,i)=>K.txt(92,32.5+i*20,s,{size:9.5,w:700})+(i<2?K.rect(92,35.5+i*20,46,8.5,{f:C.blue,o:.2,r:1.5}):"")).join("")};

// A 와 V 처럼 특정 두 글자 사이만 따로 당겨 붙인다
TH2["커닝"]=K=>{
  const pair=(cx,k,ink)=>{const xe=cx-1+k/2, vs=xe+1-k;
    return T(xe,62,"A",{size:32,fill:ink,a:"end",ff:SANS})+T(vs,62,"V",{size:32,fill:ink,ff:SANS})
    +`<path d="M${n2(xe-8.5)} 41H${n2(vs+.7)}L${n2(vs+8.5)} 60H${n2(xe-.7)}Z" style="fill:${C.blue};opacity:${k>0?.9:.22}"/>`};
  return K.card(10,18,66,64,12)+pair(43,-3,C.sub)+K.card(84,18,66,64,12)+pair(117,5.5,INK)};

// 같은 글자, 획 두께만 단계로
TH2["굵기"]=K=>K.card(14,14,132,72,14)
  +[[400,0],[500,.7],[700,.6],[900,1.5]].map(([w,sw],i)=>{const x=36+i*29.5;
    return T(x,56,"가",{size:23,w,sw,a:"middle"})+K.txt(x,75,String(w),{size:7,fill:i===3?C.blue:C.mute,w:700,a:"middle"})}).join("");

// 오른쪽으로 비스듬히 누운 글자
TH2["이탤릭"]=K=>K.card(14,14,132,72,14)
  +K.line(47,24,47,76,{s:C.line,sw:1})+T(47,64,"Aa",{size:34,w:400,fill:C.mute,ff:SERIF,a:"middle"})
  +K.line(104,76,119,24,{s:C.blue,sw:1.2,o:.5})+T(111,64,"Aa",{size:34,w:400,ff:SERIF,fs:"italic",a:"middle"});

// 따로 쓰면 부딪히는 f 와 i 를 한 덩어리로 이은 글자
TH2["리가처"]=K=>{const s=c=>`fill:none;stroke:${c};stroke-width:5.5;stroke-linecap:butt`;
  return K.card(12,16,62,68,12)
  +p("M43 29.500c-8-3-13 0-13 8V70",s(C.sub))+p("M23 44h15",s(C.sub))+p("M54 44V70",s(C.sub))+K.circ(54,33.5,3.4,{f:C.sub})
  +K.card(86,16,62,68,12)
  +p("M106 70V38c0-9 5-13 11-13c4 0 7 1.500 9 4.500",s(INK))+K.circ(127,31.5,4,{f:INK})+p("M127 41.250V70",s(INK))
  +p("M98 44h8",s(INK))+p("M106 44h23.750",s(C.blue))};

// 글꼴 파일 하나에서 굵기 · 너비를 막대로 자유롭게 조절
TH2["가변 폰트"]=K=>{
  const sl=(y,l,v)=>K.txt(82,y,l,{size:7.5,fill:C.sub,w:700})+K.rect(82,y+6,50,4,{f:C.skel,r:2})+K.rect(82,y+6,v,4,{f:C.blue,r:2})
    +K.circ(82+v,y+8,5.5,{f:W,s:C.blue,sw:1.6});
  return K.card(14,12,132,76,14)
  +K.rect(22,20,50,60,{f:C.soft,r:10})+T(47,65,"가",{size:40,w:900,sw:1.4,a:"middle"})
  +sl(32,"굵기",38)+sl(60,"너비",18)};

// 크기 · 굵기 · 색으로 읽는 순서를 만든다: 제목 → 소제목 → 본문
TH2["글자 위계"]=K=>K.card(18,8,124,84,14)
  +K.txt(30,34,"여름 여행",{size:18,fill:INK,w:800})
  +K.txt(30,50,"3박 4일 제주",{size:10.5,fill:"#4A5160",w:700})
  +K.txt(30,64,"바다가 보이는 숙소에서",{size:7.5,fill:C.sub})
  +K.txt(30,74,"느긋하게 쉬다 오는 길",{size:7.5,fill:C.sub})
  +K.txt(30,85,"6월 출발",{size:7,fill:C.mute});
}
