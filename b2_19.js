// B2 그림 보충 (N=19): rs 17. 산출물 · 방법이 실제로 어떻게 생겼는지 작은 장면으로 그린다.
{
const C=K.C, W="#FFFFFF", n2=K.n2, LN="#8A92A0", INK2="#3A4050";
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:INK2,r:h/2});               // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});          // 흰 면 위 글줄
const pill=(x,y,w,h,s,{f=C.blue,ink=W,size=8}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
const p=(d,style)=>`<path d="${d}" style="${style}"/>`;
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r)=>{const i=K.id(),g="b219p"+i,c="b219c"+i;
  return `<defs>${K.grad(g,[[0,"#AFC6FF"],[1,"#E5C8F3"]],0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:#6A86E8"/></g>`};
// 포스트잇 한 장
const NOTE={y:"#FFE38A",p:"#FFC2D4",b:"#BFD4FF",g:"#BFE8D2"};
const note=(x,y,w,h,f,rot=0)=>{const s=K.rect(x,y,w,h,{f,r:2})+K.rect(x+3,y+h/2-1,w-6,2,{f:"rgba(0,0,0,.18)",r:1});
  return rot?`<g transform="rotate(${rot} ${n2(x+w/2)} ${n2(y+h/2)})">${s}</g>`:s};
Object.assign(K.ICON,{q19down:"M5 9l7 7 7-7"});

// 진행 줄 + 1~5 척도 + 체크 문항
TH2["설문"]=K=>K.card(22,8,116,84,12)
  +K.rect(32,16,96,3,{f:C.skel,r:1.5})+K.rect(32,16,38,3,{f:C.blue,r:1.5})
  +K.txt(32,32,"만족하나요?",{size:8.5,fill:C.ink,w:700})
  +[0,1,2,3,4].map(i=>{const x=40+i*20,on=i===3;
    return K.circ(x,46,7,on?{f:C.blue}:{f:W,s:C.mute,sw:1.2})+K.txt(x,48.6,String(i+1),{size:7.5,fill:on?W:C.sub,w:700,a:"middle"})}).join("")
  +tbar(32,62,40,4.5)
  +K.rect(32,72,9,9,{f:C.blue,r:2.5})+K.icon("check",36.5,76.5,7,W,2.2)+gbar(46,74.5,32)
  +K.rect(88.5,72.5,8,8,{f:W,s:C.mute,sw:1.2,r:2.5})+gbar(102,74.5,24);

// 날마다 쌓이는 기록, 오늘 칸은 쓰는 중
TH2["다이어리 스터디"]=K=>K.card(18,8,124,84,14)
  +K.line(32,23,32,77,{s:C.line,sw:1.2})
  +[23,50,77].map((y,i)=>{const now=i===2;
    return K.circ(32,y,3.5,{f:now?W:C.blue,s:C.blue,sw:1.5})
    +K.txt(39,y+2.8,(i+1)+"일",{size:7.5,fill:now?C.blue:C.sub,w:700})
    +(now?K.rect(58,y-9.5,74,19,{f:C.soft,s:C.blue,sw:1.1,r:6})+tbar(64,y-2,30,4)+K.icon("edit",121,y,10,C.blue,1.6)
         :K.rect(58,y-9.5,74,19,{f:"#F3F5FA",r:6})+gbar(64,y-5,i?36:44,3.5)+gbar(64,y+1.5,28,3.5)+K.rect(112,y-6.5,14,13,{f:i?"#FBD3DF":"#C9D6FF",r:3}))}).join("");

// 화면 위 커서가 지나간 길 + 아래 재생 막대
TH2["세션 녹화"]=K=>K.card(18,8,124,84,12)
  +K.rect(26,15,108,52,{f:"#F3F5FA",r:7})
  +K.rect(33,22,40,18,{f:C.skel,r:4})+gbar(33,46,34)+gbar(33,54,24)
  +K.rect(92,47,34,12,{f:C.blue,r:6,o:.22})
  +K.rect(100,20,28,12,{f:W,r:6})+K.circ(107,26,2.6,{f:C.red})+K.txt(111.5,28.6,"녹화",{size:7,fill:C.red,w:700})
  +p("M46 60C58 30 82 64 106 54",`fill:none;stroke:${C.blue};stroke-width:1.3;stroke-dasharray:2.5 3`)
  +K.circ(108,53,7,{f:C.blue,o:.2})
  +p("M107 51v11l3-2.6 2.2 4.6 2.2-1-2.2-4.600h4.200z",`fill:${C.ink};stroke:#fff;stroke-width:.9`)
  +K.circ(34,79.5,6,{f:C.blue})+p("M32.2 76.300l5 3.200-5 3.200z","fill:#fff;stroke:#fff;stroke-width:1")
  +K.rect(46,78,84,3,{f:C.skel,r:1.5})+K.rect(46,78,50,3,{f:C.blue,r:1.5})
  +[62,84,116].map(x=>K.rect(x,75.5,1.6,8,{f:C.red,r:.8})).join("")
  +K.circ(96,79.5,3.5,{f:W,s:C.blue,sw:1.5});

// 가운데 사람, 둘레 4분면에 포스트잇
TH2["공감 지도"]=K=>K.card(18,8,124,84,14)
  +K.line(80,8,80,92,{s:C.line,sw:1})+K.line(18,50,142,50,{s:C.line,sw:1})
  +K.txt(27,21,"말",{size:8,fill:C.sub,w:700})+K.txt(133,21,"생각",{size:8,fill:C.sub,w:700,a:"end"})
  +K.txt(27,87,"행동",{size:8,fill:C.sub,w:700})+K.txt(133,87,"느낌",{size:8,fill:C.sub,w:700,a:"end"})
  +note(44,14,20,13,NOTE.y)+note(28,30,20,13,NOTE.y)+note(52,31,14,11,NOTE.y)
  +note(88,14,20,13,NOTE.p)+note(112,29,20,13,NOTE.p)+note(94,31,13,11,NOTE.p)
  +note(28,58,20,13,NOTE.b)+note(52,60,15,12,NOTE.b)+note(52,76,20,11,NOTE.b)
  +note(112,57,20,13,NOTE.g)+note(94,62,14,12,NOTE.g)+note(88,78,18,10,NOTE.g)
  +K.circ(80,50,12.5,{f:W,s:C.line,sw:1})+K.circ(80,50,9.5,{f:"#C9D6FF"})+K.icon("user",80,50,12,C.blue,1.8);

// ~할 때 / ~하고 싶다 / 그래서 : 할 일 문장 틀
TH2["JTBD"]=K=>K.card(16,10,128,80,14)
  +K.rect(22,38.5,116,23,{f:C.blue,r:9,o:.1})
  +["할 때","하고 싶다","그래서"].map((s,i)=>{const y=21+i*23,on=i===1;
    return pill(28,y,44,13,s,{f:on?C.blue:C.soft,ink:on?W:C.blue,size:7.5})
    +(on?tbar(80,y+4.25,50,4.5):gbar(80,y+4.5,i?46:38))}).join("");

// 우리 · A · B 를 나란히 놓은 비교표
TH2["경쟁사 분석"]=K=>K.card(16,10,128,80,14)
  +K.rect(66,15,24,70,{f:C.blue,r:8,o:.1})
  +K.txt(78,29,"우리",{size:8,fill:C.blue,w:700,a:"middle"})+K.txt(104,29,"A",{size:8,fill:C.sub,w:700,a:"middle"})+K.txt(128,29,"B",{size:8,fill:C.sub,w:700,a:"middle"})
  +K.line(24,36,136,36,{s:C.line,sw:.8})
  +[[1,1,0],[1,0,1],[0,1,1]].map((row,r)=>{const y=47+r*14;
    return gbar(24,y-2,[32,24,36][r])+(r?K.line(24,y-7,136,y-7,{s:C.hair,sw:.6}):"")
    +row.map((v,c)=>{const cx=[78,104,128][c];
      return v?K.icon("check",cx,y,9,c?C.green:C.blue,2.2):K.line(cx-3,y,cx+3,y,{s:C.mute,sw:1.8})}).join("")}).join("");

// 홈 아래로 가지가 갈라지는 화면 구조
TH2["사이트맵"]=K=>{const o=6, kid=(x,y)=>K.card(x,y,16,12,4)+gbar(x+4,y+4.5,8,3);
  return K.path(`M80 ${26+o}V${33+o}M32 ${40+o}V${33+o}H128V${40+o}M80 ${33+o}V${40+o}`,{s:LN,sw:1.2})
  +[14,62,110].map(x=>K.path(`M${x+18} ${56+o}V${62+o}M${x+8} ${68+o}V${62+o}H${x+28}V${68+o}`,{s:LN,sw:1.2})).join("")
  +K.card(62,8+o,36,18,6,C.blue)+K.txt(80,20.6+o,"홈",{size:8.5,fill:W,w:700,a:"middle"})
  +[14,62,110].map(x=>K.card(x,40+o,36,16,5)+tbar(x+8,46+o,20,4)+kid(x,68+o)+kid(x+20,68+o)).join("")};

// 세 컷 만화: 곤란한 사람 → 폰에서 누른다 → 받아서 좋다
TH2["스토리보드"]=K=>{const S=`fill:none;stroke:${INK2};stroke-width:1.4`;
  const man=(cx,arms,smile)=>K.circ(cx,31,5,{f:W,s:INK2,sw:1.4})
    +p(`M${cx} 36V48M${cx} 48l-4 7M${cx} 48l4 7${arms}`,S)
    +(smile?p(`M${cx-2} 32q2 2 4 0`,`fill:none;stroke:${INK2};stroke-width:1`):"");
  return [10,59,108].map((x,i)=>K.card(x,12,42,76,8)
    +K.rect(x+4,16,34,44,{f:"#F3F5FA",s:LN,sw:1,r:3})
    +gbar(x+5,67,30,3.5)+gbar(x+5,75,[22,26,18][i],3.5)
    +[
      ()=>man(x+15,`M${x+15} 40l7 3`,0)+K.rect(x+21,39,5,8,{f:C.blue,r:1.2})+K.txt(x+28,31,"?",{size:10,fill:C.red,w:700,a:"middle"}),
      ()=>K.rect(x+12,21,18,34,{f:W,s:INK2,sw:1.3,r:3.5})+K.rect(x+15,25,12,9,{f:C.skel,r:2})+gbar(x+15,38,10,2.5)
          +K.rect(x+15,45,12,6,{f:C.blue,r:3})+K.circ(x+25,50,4.5,{f:C.blue,o:.22})+K.circ(x+25,50,2.4,{f:C.blue}),
      ()=>man(x+14,`M${x+14} 40l-6-5M${x+14} 40l7 2`,1)+K.rect(x+21,36,11,11,{f:C.amber,r:1.5})+p(`M${x+21} 41.500h11M${x+26.5} 36v11`,"fill:none;stroke:#fff;stroke-width:1")
    ][i]()).join("")};

// 완성된 시안을 노트북 · 폰 틀에 얹은 모습
TH2["목업"]=K=>K.rect(18,18,94,58,{f:"#1F2329",r:6,fx:"url(#b2lift)"})
  +K.rect(22,22,86,50,{f:W,r:3})
  +photo(26,26,36,42,3)+tbar(68,31,28,4.5)+gbar(68,41,22,3.5)+gbar(68,48,16,3.5)+K.rect(68,57,22,9,{f:C.blue,r:4.5})
  +K.rect(8,76,114,5,{f:"#C3C8D2",r:2.5})
  +K.rect(98,12,46,82,{f:"#1F2329",r:11,fx:"url(#b2lift)"})
  +K.rect(101,15,40,76,{f:W,r:8.5})+K.rect(114,17.5,14,3.5,{f:"#1F2329",r:1.75})
  +photo(105,26,32,28,5)+tbar(105,60,22,4)+gbar(105,68,30,3.5)+K.rect(105,77,32,10,{f:C.blue,r:5});

// 같은 화면을 거칠게(회색 상자 · 낙서 선) / 완성에 가깝게(사진 · 색 · 실제 글자)
TH2["로우파이"]=K=>{const S=`fill:#E4E6EB;stroke:${LN};stroke-width:1.2`, Z=`fill:none;stroke:${LN};stroke-width:1.4`;
  return K.blk(8,20,24,60,8)+K.blk(128,20,24,60,8)
  +K.card(40,5,80,90,12)
  +K.icon("menu",53,15,8,LN,1.6)+p("M67 15.400q6-1.400 13-.4t13-.2",`fill:none;stroke:${LN};stroke-width:2.6`)+K.circ(107,15,3.5,{s:LN,sw:1.2})
  +p("M48.5 24.600Q80 23.200 111.600 24.800Q112.500 39 111.800 54Q80 55.200 48.300 53.700Q47.400 39 48.500 24.600Z",S)
  +p("M49.5 25.500L111 53M111 25.500L49.500 53",`fill:none;stroke:${LN};stroke-width:1`)
  +p("M48 62q3-3.500 6 0t6 0t6 0t6 0t6 0t6 0t6 0",Z)+p("M48 70q3-3.500 6 0t6 0t6 0t6 0",Z)
  +p("M48.6 77.400Q80 76.200 111.500 77.200Q112.400 83 111.600 89Q80 90 48.400 89.200Q47.600 83 48.600 77.400Z",`fill:#C9CDD5;stroke:${LN};stroke-width:1.2`)
  +p("M68 84q3-3 6 0t6 0t6 0t6 0","fill:none;stroke:#fff;stroke-width:1.4")};

TH2["하이파이"]=K=>K.blk(8,20,24,60,8)+K.blk(128,20,24,60,8)
  +K.card(40,5,80,90,12)
  +K.icon("menu",53,15,8,C.ink,1.6)+K.txt(80,18,"쇼핑",{size:8,fill:C.ink,w:700,a:"middle"})+K.icon("cart",107,15,9,C.blue,1.7)
  +photo(48,24,64,30,7)
  +K.txt(48,64,"여름 샌들",{size:8.5,fill:C.ink,w:700})+K.txt(48,73,"39,000원",{size:7.5,fill:C.blue,w:700})
  +`<g transform="translate(101.5 61) scale(.42)"><path d="${K.ICON.heart}" style="fill:${C.red};stroke:${C.red};stroke-width:1.6"/></g>`
  +K.rect(48,77,64,12,{f:C.blue,r:6})+K.txt(80,85.7,"구매하기",{size:7.5,fill:W,w:700,a:"middle"});

// 원칙 목록을 하나씩 점검하고 심각도 점을 매긴 표
TH2["휴리스틱 평가"]=K=>K.card(18,8,124,84,14)
  +K.txt(28,23,"10원칙",{size:8.5,fill:C.ink,w:700})+K.txt(132,23,"심각도",{size:7,fill:C.mute,w:700,a:"end"})
  +K.line(26,29,134,29,{s:C.line,sw:.8})
  +[0,3,1,4].map((sev,i)=>{const y=40+i*14, col=sev>=3?C.red:C.amber;
    return K.circ(33,y,5.5,{f:C.skel})+K.txt(33,y+2.6,String(i+1),{size:7,fill:C.sub,w:700,a:"middle"})
    +gbar(44,y-2,[44,36,48,30][i])
    +(sev?[0,1,2,3].map(j=>K.circ(105+j*8,y,2.7,{f:j<sev?col:C.skel})).join(""):K.icon("check",117,y,9,C.green,2.2))}).join("");

// 가입 달마다 한 줄, 주가 지날수록 옅어지는 계단 모양 표
TH2["코호트 분석"]=K=>{let g="";
  for(let c=0;c<5;c++)g+=K.txt(53+c*18,20,c+"주",{size:7,fill:C.mute,w:700,a:"middle"});
  for(let r=0;r<5;r++){const y=24+r*13;
    g+=K.txt(24,y+8,(r+1)+"월",{size:7,fill:C.sub,w:700});
    for(let c=0;c<5-r;c++)g+=K.rect(45+c*18,y,16,11,{f:C.blue,r:3,o:n2(c?[.68,.5,.36,.24][c-1]-r*.03:1)})}
  return K.card(16,8,128,84,14)+g};

// 처음에 뚝 떨어지다 평평해지는 선
TH2["리텐션 곡선"]=K=>{const f=x=>n2(74-52*(.22+.78*Math.exp(-(x-34)/11)));
  let d="M34 "+f(34);for(let x=37.5;x<=132;x+=3.5)d+="L"+x+" "+f(x);
  return K.card(16,10,128,80,14)
  +K.line(34,18,34,74,{s:C.line,sw:1})+K.line(34,74,134,74,{s:C.line,sw:1})
  +K.txt(31,24.5,"100",{size:7,fill:C.mute,w:700,a:"end"})
  +p("M34 62.560H132",`fill:none;stroke:${C.mute};stroke-width:.8;stroke-dasharray:2 3`)
  +p(d+"L132 74L34 74Z",`fill:${C.blue};stroke:none;opacity:.1`)
  +K.path(d,{s:C.blue,sw:2})
  +[[41,"1일"],[69,"7일"],[125,"30일"]].map(([x,l])=>K.circ(x,f(x),3.2,{f:W,s:C.blue,sw:1.6})+K.txt(x,84,l,{size:7,fill:C.sub,w:700,a:"middle"})).join("")};

// 화면 한 장 + 5초 타이머 + 뭐가 기억나는지 묻는 칸
TH2["5초 테스트"]=K=>K.card(14,10,74,80,12)
  +photo(22,18,58,30,7)+tbar(22,55,36)+gbar(22,64,50)+K.rect(22,74,30,10,{f:C.blue,r:5})
  +K.card(96,8,50,50,25)
  +K.circ(121,33,18,{s:C.skel,sw:4})+K.path("M121 15A18 18 0 1 1 103 33",{s:C.blue,sw:4})
  +K.txt(121,37.5,"5초",{size:12,fill:C.ink,w:700,a:"middle"})
  +K.card(96,66,50,24,10)+K.txt(107,82.5,"?",{size:12,fill:C.blue,w:700,a:"middle"})+gbar(116,73.5,22)+gbar(116,80.5,14);

// 포스트잇이 비슷한 것끼리 세 묶음, 묶음마다 이름표
TH2["어피니티 다이어그램"]=K=>K.card(12,8,136,84,14)
  +[[22,NOTE.y,5],[64,NOTE.p,3],[106,NOTE.b,4]].map(([gx,f,n],g)=>tbar(gx,15,[26,20,30][g],5)
    +[[0,27,-4],[17,28,3],[1,44,2],[17,45,-3],[8,62,5]].slice(0,n).map(([dx,dy,rot])=>note(gx+dx,dy,14,13,f,rot)).join("")).join("");

// 글자뿐인 메뉴 가지를 따라 내려가 과제의 항목을 찾는다
TH2["트리 테스트"]=K=>K.card(20,6,120,88,12)
  +pill(28,12,104,15,"환불 찾기",{f:C.soft,ink:C.blue,size:8})
  +K.icon("next",34,37.2,8,C.mute,2)+K.txt(42,40,"쇼핑",{size:8,fill:C.sub})
  +K.icon("q19down",34,50.2,8,C.blue,2)+K.txt(42,53,"내 정보",{size:8,fill:C.ink,w:700})
  +K.line(45,58,45,86,{s:C.line,sw:1})
  +K.txt(54,66,"주문 내역",{size:8,fill:C.sub})
  +K.rect(50,72,82,16,{f:C.blue,r:8,o:.12})+K.txt(56,82.8,"환불",{size:8,fill:C.blue,w:700})
  +K.fing(116,80);
}
