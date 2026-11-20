// B2 그림 보충 (N=33): md 미디어 플레이어 7 · mp 지도 6 · gm 게임 UI 11
// 영상 · 게임 장면은 어두운 화면으로, 지도는 밝은 지도 타일로 깔고 이름이 가리키는 것만 또렷하게.
{
const C=K.C, n2=K.n2, W="#FFFFFF", DK="#3A4050", WA="rgba(255,255,255,.3)";
const A=(c,inner,st="")=>`<g class="b2x33 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x33{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:linear}`);

Object.assign(K.ICON,{
  q33play:"M8 5l11 7-11 7z",
  q33vol:["M4 9.5h3.5L12 6v12l-4.5-3.5H4z","M15.5 9a4 4 0 0 1 0 6","M18 6.5a8 8 0 0 1 0 11"],
  q33loc:["M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z","M12 2.5V7","M12 17v4.5","M2.5 12H7","M17 12h4.5","M12 11.9v.2"],
});
const fi=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:${f};stroke-width:1.5"/></g>`};
const P=(d,style)=>`<path d="${d}" style="${style}"/>`;
const clip=(x,y,w,h,r,inner)=>{const c="b233c"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DK,r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});

// 영상 화면 (14,10 132×80)
const vid=()=>{const g="b233g"+K.id();return `<defs>${K.grad(g,[[0,"#262C48"],[1,"#514A7E"]])}</defs>`+K.rect(14,10,132,80,{f:`url(#${g})`,r:13,fx:"url(#b2lift)"})
  +clip(14,10,132,80,13,P("M14 90L50 52L80 76L108 46L146 80V90Z","fill:rgba(255,255,255,.07)")+K.circ(120,28,7,{f:"rgba(255,255,255,.14)"}))};
// 아래쪽 흐린 조작 줄 (재생 세모 + 가는 막대)
const ctl=(w=96)=>fi("q33play",26,80,8,"rgba(255,255,255,.75)")+K.rect(34,78.5,w,3,{f:WA,r:1.5})+K.rect(34,78.5,n2(w*.4),3,{f:"rgba(255,255,255,.75)",r:1.5});

// 지도 타일 (14,8 132×84)
const map=()=>K.rect(14,8,132,84,{f:"#EDF0F4",r:13,fx:"url(#b2lift)"})
  +clip(14,8,132,84,13,K.rect(22,14,30,20,{f:"#CDEBD3",r:5})+K.rect(116,62,24,22,{f:"#CDEBD3",r:5})
    +P("M14 74Q38 66 52 80T62 92H14Z","fill:#C4DBFF")
    +K.line(14,46,146,38,{s:W,sw:6})+K.line(60,8,72,92,{s:W,sw:6})
    +K.line(104,8,112,92,{s:W,sw:2.6})+K.line(14,22,146,16,{s:W,sw:2.6})+K.line(66,68,146,62,{s:W,sw:2.6})+K.line(34,34,40,74,{s:W,sw:2.6}))
  +K.rect(14.25,8.25,131.5,83.5,{s:C.hair,sw:.5,r:13});
// 핀: 끝이 (cx,cy)
const pin=(cx,cy,r,f=C.blue)=>{const hy=cy-r*1.9;return `<ellipse cx="${n2(cx)}" cy="${n2(cy)}" rx="${n2(r*.6)}" ry="${n2(r*.22)}" style="fill:rgba(20,30,70,.22)"/>`
  +P(`M${n2(cx)} ${n2(cy)}L${n2(cx-r*.8)} ${n2(hy+r*.6)}A${r} ${r} 0 1 1 ${n2(cx+r*.8)} ${n2(hy+r*.6)}Z`,`fill:${f};stroke:#fff;stroke-width:${n2(r*.13)}`)+K.circ(cx,hy,n2(r*.38),{f:W})};

// 게임 장면 (12,8 136×84)
const gsc=()=>{const g="b233g"+K.id();return `<defs>${K.grad(g,[[0,"#1D2344"],[1,"#4D3B7A"]],0,1)}</defs>`+K.rect(12,8,136,84,{f:`url(#${g})`,r:13,fx:"url(#b2lift)"})
  +clip(12,8,136,84,13,P("M12 92V70Q40 58 70 68T148 60V92Z","fill:rgba(255,255,255,.08)")
    +[[30,20],[58,14],[96,24],[132,18],[118,40]].map(([x,y])=>K.circ(x,y,.9,{f:"rgba(255,255,255,.5)"})).join(""))};
// 캐릭터 실루엣
const hero=(cx,cy,s=1,o=.2)=>K.circ(cx,cy-9*s,n2(6*s),{f:`rgba(255,255,255,${o})`})+P(`M${n2(cx-9*s)} ${n2(cy+12*s)}V${n2(cy+4*s)}a${n2(9*s)} ${n2(9*s)} 0 0 1 ${n2(18*s)} 0V${n2(cy+12*s)}Z`,`fill:rgba(255,255,255,${o})`);
// 아이템 그림 (가운데 cx,cy)
const IT={
  potion:(x,y)=>P(`M${x-2.5} ${y-9.5}h5v2.6h-5z`,"fill:#B9824F")+P(`M${x-2} ${y-7}h4v3.4a6 6 0 1 1-4 0z`,`fill:${C.red}`)+P(`M${x-2.6} ${y+.5}a3.4 3.4 0 0 1 1.6-2.6`,"fill:none;stroke:#fff;stroke-width:1.1;opacity:.8"),
  sword:(x,y)=>K.line(x-3,y+3,x+6.5,y-6.5,{s:"#8A93A6",sw:2.8})+K.line(x-6,y-.5,x+.5,y+6,{s:DK,sw:2.2})+K.line(x-4.2,y+4.2,x-6.8,y+6.8,{s:"#B9824F",sw:2.6}),
  gem:(x,y)=>P(`M${x} ${y-7}L${x+6} ${y-1.5}L${x} ${y+7}L${x-6} ${y-1.5}Z`,`fill:${C.green}`)+P(`M${x-6} ${y-1.5}H${x+6}`,"fill:none;stroke:#fff;stroke-width:.9;opacity:.7"),
  coin:(x,y)=>K.circ(x,y,6.5,{f:C.amber})+K.circ(x,y,3.6,{s:W,sw:1.1,o:.85}),
  shield:(x,y)=>P(`M${x-6} ${y-6.5}h12v6q0 6-6 8.5q-6-2.5-6-8.5z`,`fill:${C.blue}`)+P(`M${x} ${y-6.5}v14.5`,"fill:none;stroke:#fff;stroke-width:1;opacity:.6"),
  key:(x,y)=>K.circ(x-3.5,y-3.5,3.4,{s:C.amber,sw:2.2})+K.line(x-1,y-1,x+6,y+6,{s:C.amber,sw:2.2})+K.line(x+3.2,y+3.2,x+5.4,y+1,{s:C.amber,sw:2}),
};

/* ───────── 미디어 플레이어 ───────── */
// 재생 위치 막대: 지나온 만큼 파랑 + 손잡이, 양 끝에 시간
TH2["시크 바"]=K=>vid()+K.circ(80,40,12,{f:"rgba(255,255,255,.16)"})+fi("q33play",80.5,40,12,W)
  +K.txt(26,67,"1:24",{size:8,fill:W,w:700})+K.txt(134,67,"3:40",{size:8,fill:"rgba(255,255,255,.7)",a:"end"})
  +K.rect(26,73,108,6,{f:WA,r:3})+K.rect(26,73,82,6,{f:"rgba(255,255,255,.5)",r:3})+K.rect(26,73,50,6,{f:C.blue,r:3})
  +K.circ(76,76,6.5,{f:W,s:C.blue,sw:2.2});

// CC 버튼이 켜져 있고 화면에 자막이 깔린다
TH2["자막 버튼"]=K=>vid()+K.rect(40,42,80,14,{f:"rgba(8,10,20,.68)",r:3})+K.txt(80,52.3,"안녕하세요",{size:8.5,fill:W,a:"middle"})
  +ctl(54)
  +K.card(98,63,40,24,7)+K.rect(105,67.5,26,15,{s:C.blue,sw:1.8,r:3.5})+K.txt(118,78.3,"CC",{size:9,fill:C.blue,w:800,a:"middle"});

// 가로로 늘어선 속도 칩 중 하나를 고른다
TH2["배속"]=K=>vid()+K.txt(80,29,"재생 속도",{size:7.5,fill:"rgba(255,255,255,.85)",a:"middle"})
  +K.card(21,35,118,30,15)
  +["0.5x","1x","1.5x","2x"].map((s,i)=>{const x=26+i*27.5,on=i===2;return (on?K.rect(x,40,25.5,20,{f:C.blue,r:10}):"")+K.txt(x+12.75,53,s,{size:8.5,fill:on?W:C.ink,w:on?800:600,a:"middle"})}).join("")
  +ctl(100);

// 막대가 구간으로 끊겨 있고 구간마다 제목이 붙는다
TH2["챕터"]=K=>vid()
  +K.rect(24,74,26,5,{f:C.blue,r:2.5})
  +K.rect(53,72.5,35,8,{f:"rgba(255,255,255,.4)",r:4})+K.rect(53,72.5,18,8,{f:C.blue,r:4})
  +K.rect(91,74,21,5,{f:WA,r:2.5})+K.rect(115,74,21,5,{f:WA,r:2.5})
  +K.card(42,22,58,42,9)+K.rect(47,27,48,20,{f:"#C9D6FF",r:5})+P("M47 47L60 36L70 43L80 33L95 44V47Z","fill:#8FA8F5")
  +K.txt(71,58.5,"2. 재료",{size:8.5,w:700,a:"middle"});

// 스피커 아이콘 옆 소리 크기 막대
TH2["볼륨 슬라이더"]=K=>vid()+ctl(100)
  +K.card(22,32,116,32,16)+K.icon("q33vol",42,48,18,C.ink,1.8)
  +K.rect(58,45.5,68,5,{f:C.line,r:2.5})+K.rect(58,45.5,44,5,{f:C.blue,r:2.5})+K.circ(102,48,6.5,{f:W,s:C.blue,sw:2.2});

// 끝나면 고리가 줄어들고 다음 영상으로 넘어간다
TH2["자동 연속 재생"]=K=>vid()+K.txt(80,26,"다음 영상",{size:7.5,fill:"rgba(255,255,255,.85)",a:"middle"})
  +K.card(26,32,108,42,10)+K.rect(32,38,44,30,{f:"#39406A",r:6})
  +K.circ(54,53,10,{f:"rgba(10,12,24,.35)",s:"rgba(255,255,255,.3)",sw:2.6})
  +`<path class="b2x33 b2a-n33auto" pathLength="100" d="M54 43A10 10 0 1 1 53.99 43" style="fill:none;stroke:#fff;stroke-width:2.6;stroke-dasharray:100;stroke-dashoffset:35"/>`
  +fi("q33play",54.5,53,9,W)
  +tbar(83,41,42)+gbar(83,50,30)+K.txt(83,66,"취소",{size:8,fill:C.sub,w:600});
kf("n33auto",3,"0%,6%{stroke-dashoffset:0}88%,100%{stroke-dashoffset:100}");

// 톱니에서 열리는 해상도 목록
TH2["화질 선택"]=K=>vid()+ctl(84)+K.icon("settings",131,79.5,13,W,1.6)
  +K.card(60,14,76,56,10)
  +K.rect(64,18,68,16,{f:C.soft,r:6})+K.txt(71,29,"1080p",{size:8.5,fill:C.blue,w:800})+K.rect(98,22,15,9,{f:C.blue,r:2.5})+K.txt(105.5,29,"HD",{size:7,fill:W,w:800,a:"middle"})+K.icon("check",125,26,9,C.blue,2)
  +K.txt(71,46.5,"720p",{size:8.5,w:600})+K.txt(71,63,"자동",{size:8.5,w:600});

/* ───────── 지도 ───────── */
// 지도 위 한 곳을 짚는 핀
TH2["마커"]=K=>map()+pin(124,34,5,C.mute)+pin(36,58,5,C.mute)+pin(82,66,14);

// 가까운 핀을 숫자 동그라미 하나로 묶음
TH2["클러스터"]=K=>map()+pin(120,32,5)
  +K.circ(58,42,19,{f:C.blue,o:.22})+K.circ(58,42,13,{f:C.blue,s:W,sw:1.4})+K.txt(58,46.2,"12",{size:12,fill:W,w:800,a:"middle"})
  +K.circ(106,66,13,{f:C.blue,o:.22})+K.circ(106,66,9,{f:C.blue,s:W,sw:1.2})+K.txt(106,69.3,"5",{size:9.5,fill:W,w:800,a:"middle"});

// 출발점에서 도착 핀까지 길을 따라 그은 굵은 선
TH2["경로선"]=K=>map()
  +P("M70.6 82L65 43L122 39.5","fill:none;stroke:#fff;stroke-width:8")+P("M70.6 82L65 43L122 39.5",`fill:none;stroke:${C.blue};stroke-width:4.6`)
  +K.circ(70.6,82,5,{f:W,s:C.blue,sw:2.6})+pin(122,39.5,8.5,C.red);

// 지도 한쪽의 + − 단추
TH2["줌 컨트롤"]=K=>map()+K.card(98,16,36,68,10)+K.icon("plus",116,33,17,C.ink,2.2)+K.line(105,50,127,50,{s:C.line,sw:1})+K.line(109.5,67,122.5,67,{s:C.ink,sw:2.2});

// 과녁 모양 단추, 누르면 내 자리(파란 점)로 온다
TH2["현재 위치 버튼"]=K=>map()+K.circ(64,43,15,{f:C.blue,o:.2})+K.circ(64,43,7.5,{f:W})+K.circ(64,43,5.2,{f:C.blue})
  +K.card(98,48,38,38,19)+K.icon("q33loc",117,67,24,C.blue,2);

// 핀을 누르면 그 위에 뜨는 꼬리 달린 작은 창
TH2["정보 창"]=K=>map()+pin(80,90,7.5)
  +K.card(34,10,92,48,10)+P("M73 57.6L80 66L87 57.6Z","fill:#fff")
  +K.rect(40,16,32,36,{f:"#C9D6FF",r:6})+P("M40 48L50 36L58 43L66 34L72 41V46A6 6 0 0 1 66 52H46A6 6 0 0 1 40 46Z","fill:#8FA8F5")
  +tbar(79,19,38)+[0,1,2,3,4].map(i=>fi("star",82+i*7.6,32.5,6.5,i<4?C.amber:"#DADFE8")).join("")+gbar(79,40,40)+K.rect(79,47.5,22,4,{f:C.blue,r:2});

/* ───────── 게임 UI ───────── */
// 게임 화면 위에 늘 떠 있는 정보 전부 (체력 · 점수 · 지도 · 슬롯)
TH2["HUD"]=K=>gsc()+hero(80,52,1,.18)
  +fi("heart",24,20,9,C.red)+K.rect(31,16.5,34,6,{f:WA,r:3})+K.rect(31,16.5,24,6,{f:C.red,r:3})+K.rect(31,26,26,4,{f:WA,r:2})+K.rect(31,26,20,4,{f:"#6FA8FF",r:2})
  +K.txt(88,23,"1,250",{size:8.5,fill:W,w:800,a:"middle"})
  +K.rect(112,14,28,28,{f:"rgba(255,255,255,.92)",r:7})+K.line(116,32,136,24,{s:"#D3D8E3",sw:2})+K.circ(126,28,2.6,{f:C.blue})+K.circ(133,20,1.8,{f:C.red})
  +[0,1,2,3].map(i=>K.rect(44+i*19,68,16,16,{f:"rgba(255,255,255,.92)",r:4.5,s:i===0?C.blue:"none",sw:2})).join("")
  +K.circ(52,76,3.6,{f:C.red})+K.circ(71,76,3.6,{f:C.amber});

// 하트 옆 빨간 막대, 맞으면 줄어든다
TH2["체력 바"]=K=>gsc()+fi("heart",33,51,20,C.red)+K.txt(49,38,"HP",{size:9.5,fill:W,w:800})
  +K.rect(47,42,88,17,{f:W,r:8.5})+K.rect(49.5,44.5,64,12,{f:"#F8B9BB",r:6})+K.rect(49.5,44.5,52,12,{f:C.red,r:6})
  +K.txt(135,71,"72 / 100",{size:8.5,fill:W,w:700,a:"end"});

// 화면 구석의 작은 둥근 지도. 가운데 화살표가 나
TH2["미니맵"]=K=>gsc()+hero(40,62,1.1,.18)+K.rect(22,18,34,5,{f:WA,r:2.5})
  +K.circ(106,46,31.5,{f:W,fx:""})
  +clip(76,16,60,60,30,K.rect(76,16,60,60,{f:"#E4EEDF"})+P("M76 62Q96 54 112 66T136 60V76H76Z","fill:#BFD9FF")
    +K.line(80,30,134,42,{s:W,sw:4})+K.line(98,16,92,76,{s:W,sw:4}))
  +K.txt(106,26.5,"N",{size:7.5,w:800,a:"middle",fill:C.sub})
  +K.circ(124,34,3,{f:C.red})+K.circ(88,56,3,{f:C.red})+K.circ(120,58,3,{f:C.amber})
  +P("M106 38L112.5 53L106 49.4L99.5 53Z",`fill:${C.blue};stroke:#fff;stroke-width:1.2`);

// 쓴 스킬이 어둡게 덮였다가 시계 방향으로 다시 밝아진다
TH2["쿨다운"]=K=>gsc()
  +K.rect(18,30,36,36,{f:"#5B7BFF",r:8})+fi("sparkle",36,48,20,W)
  +K.rect(62,30,36,36,{f:C.amber,r:8})+`<g style="opacity:.55">${fi("star",80,48,20,W)}</g>`
  +K.rect(106,30,36,36,{f:C.green,r:8})+fi("heart",124,48.5,19,W)
  +clip(62,30,36,36,8,`<path class="b2x33 b2a-n33cd" pathLength="100" d="M80 35A13 13 0 1 0 80.01 35" style="fill:none;stroke:rgba(12,14,30,.74);stroke-width:26;stroke-linecap:butt;stroke-dasharray:100;stroke-dashoffset:24"/>`)
  +["3","2","1"].map((s,i)=>A("n33c"+i,K.txt(80,54.5,s,{size:18,fill:W,w:800,a:"middle"}),"opacity:"+(i===0?1:0))).join("")
  +["Q","W","E"].map((s,i)=>K.txt(36+i*44,79,s,{size:8,fill:"rgba(255,255,255,.8)",w:700,a:"middle"})).join("");
kf("n33cd",3,"0%{stroke-dashoffset:0}81%,100%{stroke-dashoffset:100}");
kf("n33c0",3,"0%,26.9%{opacity:1}27%,100%{opacity:0}");
kf("n33c1",3,"0%,26.9%{opacity:0}27%,53.9%{opacity:1}54%,100%{opacity:0}");
kf("n33c2",3,"0%,53.9%{opacity:0}54%,80.9%{opacity:1}81%,100%{opacity:0}");

// 가진 물건을 칸칸이 담아 둔 가방 화면
TH2["인벤토리"]=K=>{const it=["potion","sword","gem","coin","shield","key"],cnt={0:"3",3:"24"};
  return K.card(22,5,116,90,13)+[...Array(12)].map((_,i)=>{const x=30+(i%4)*26,y=12+((i/4)|0)*26;
    return K.rect(x,y,22,22,{f:i===1?C.blueSoft:"#EEF1F6",r:5.5,s:i===1?C.blue:"none",sw:1.8})+(it[i]?IT[it[i]](x+11,y+11.5):"")
      +(cnt[i]?K.txt(x+21,y+21,cnt[i],{size:7,w:800,a:"end"}):"")}).join("")};

// 화면 아래 한 줄, 숫자 키로 바로 꺼내 쓰는 칸
TH2["퀵슬롯"]=K=>gsc()+hero(80,34,1,.18)
  +["potion","sword","gem","shield",""].map((n,i)=>{const x=22+i*24,on=i===1;
    return K.txt(x+10,57,String(i+1),{size:7.5,fill:on?W:"rgba(255,255,255,.7)",w:800,a:"middle"})
      +K.rect(x,61,20,20,{f:n?W:"rgba(255,255,255,.35)",r:5.5,s:on?C.blue:"none",sw:2.6})+(n?`<g transform="translate(${x+10} ${71.5}) scale(.82)">${IT[n](0,0)}</g>`:"")}).join("");

// 위에서 아래로 가지 치며 열어 가는 능력 그림
TH2["스킬 트리"]=K=>{const on=C.blue,off="#D3D8E3";
  const node=(x,y,st,ic)=>st===2?K.circ(x,y,10,{f:on})+fi(ic,x,y,10,W)
    :st===1?K.circ(x,y,10,{f:W,s:on,sw:2})+K.icon(ic,x,y,10,on,1.8)
    :K.circ(x,y,10,{f:"#E9ECF2"})+K.icon("lock",x,y-.5,10,C.mute,1.8);
  return K.card(16,5,128,90,14)
  +K.line(80,22,50,49,{s:on,sw:2.2})+K.line(80,22,110,49,{s:off,sw:2.2})
  +K.line(50,49,32,77,{s:on,sw:2.2})+K.line(50,49,68,77,{s:off,sw:2.2})+K.line(110,49,110,77,{s:off,sw:2.2})
  +node(80,22,2,"sparkle")+node(50,49,2,"star")+node(110,49,1,"heart")+node(32,77,2,"heart")+node(68,77,0)+node(110,77,0)};

// 때리면 머리 위로 튀어 올랐다 사라지는 숫자
TH2["데미지 숫자"]=K=>gsc()
  +`<ellipse cx="56" cy="67" rx="23" ry="18" style="fill:#8D7BE8"/>`+K.circ(48,63,4,{f:W})+K.circ(64,63,4,{f:W})+K.circ(49,64,1.8,{f:C.ink})+K.circ(63,64,1.8,{f:C.ink})
  +P("M51 74q5-3.5 10 0","fill:none;stroke:#12141A;stroke-width:1.6")
  +A("n33dm0",K.txt(104,44,"-128",{size:21,fill:"#FFD23F",w:800,a:"middle"}))
  +A("n33dm1",K.txt(116,66,"-42",{size:12,fill:W,w:800,a:"middle"}),"opacity:.85");
kf("n33dm0",2.6,"0%,6%{opacity:0;transform:translateY(12px) scale(.5)}16%{opacity:1;transform:translateY(0) scale(1.18)}24%{opacity:1;transform:none}70%{opacity:1;transform:translateY(-7px)}90%,100%{opacity:0;transform:translateY(-13px)}","animation-timing-function:ease-out");
kf("n33dm1",2.6,"0%,30%{opacity:0;transform:translateY(10px) scale(.5)}40%{opacity:.85;transform:translateY(0) scale(1.15)}48%{opacity:.85;transform:none}80%{opacity:.85;transform:translateY(-6px)}96%,100%{opacity:0;transform:translateY(-10px)}","animation-timing-function:ease-out");

// 화면 한가운데 조준 표시
TH2["십자선"]=K=>gsc()+`<ellipse cx="80" cy="54" rx="15" ry="12" style="fill:rgba(255,255,255,.16)"/>`
  +[[80,24,80,40],[80,60,80,76],[54,50,70,50],[90,50,106,50]].map(([a,b,c,d])=>K.line(a,b,c,d,{s:"rgba(10,12,24,.55)",sw:5.4})+K.line(a,b,c,d,{s:W,sw:3})).join("")
  +K.circ(80,50,19,{s:W,sw:1.2,o:.55})+K.circ(80,50,2.4,{f:C.red,s:W,sw:1});

// 지금 맡은 일과 진행 정도를 적어 둔 목록
TH2["퀘스트 로그"]=K=>K.card(18,7,124,86,14)
  +K.circ(35,24,7.5,{f:C.amber})+K.txt(35,28,"!",{size:11,fill:W,w:800,a:"middle"})+K.txt(48,27.5,"퀘스트",{size:10,w:800})
  +K.line(28,37,132,37,{s:C.line,sw:.8})
  +K.rect(29,43,11,11,{f:C.blue,r:3})+K.icon("check",34.5,48.5,8,W,2)+K.txt(46,52,"열쇠 찾기",{size:8.5,fill:C.mute})+K.line(45,49,82,49,{s:C.mute,sw:.9})
  +K.rect(29.6,63.6,9.8,9.8,{s:"#B8C0CE",sw:1.3,r:3})+K.txt(46,72,"늑대 사냥",{size:8.5,w:700})+K.txt(132,72,"3/5",{size:8.5,fill:C.blue,w:800,a:"end"})
  +K.rect(46,78,86,4.5,{f:C.skel,r:2.25})+K.rect(46,78,52,4.5,{f:C.blue,r:2.25});

// 화면 아래 대사 상자. 위에 말하는 이의 이름표, 구석에 넘김 세모
TH2["대화창"]=K=>gsc()+hero(108,34,1.5,.24)
  +K.card(19,56,122,32,8)+K.rect(26,48,36,14,{f:C.blue,r:5})+K.txt(44,58.2,"촌장",{size:8.5,fill:W,w:800,a:"middle"})
  +tbar(28,68,82,4.5)+tbar(28,77,54,4.5)+P("M126 77h9l-4.5 5.4z",`fill:${C.blue}`);
}
