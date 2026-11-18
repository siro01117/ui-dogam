// B2 그림 추가 15: sh(공유) 4 · ai(AI 채팅 화면) 12 · fb(상태 · 피드백) 7
// 움직이는 것은 음성 모드 · 에이전트 진행 단계 · 블러 업 로딩 셋뿐. 클래스는 b2x15 b2a-n15…
{
const A=(c,inner,st="")=>`<g class="b2x15 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x15{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
css(`@media (prefers-reduced-motion:reduce){.b2x15{animation:none}}`);
const n2=K.n2, C=K.C, KEY="#F2F4F8", W="#FFFFFF";

Object.assign(K.ICON,{
  q15down:"M5 9l7 7 7-7",
  q15up:["M12 19V5","M6.5 10.5L12 5l5.5 5.5"],
  q15clock:["M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17z","M12 7.5V12l3 2"],
  q15cloud:["M7 18.5a4.2 4.2 0 0 1-.6-8.36A6 6 0 0 1 18 9.6a4.5 4.5 0 0 1-.6 8.9z","M9.3 13.6l2 2 3.6-4"],
  q15doc:["M6 3h9l4 4v14H6z","M15 3v4h4","M9 12h7","M9 16h5"],
});
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const ai=(cx,cy)=>K.icon("sparkle",cx,cy,11,C.blue,1.8);
const ub=(x,y,w)=>K.card(x,y,w,20,10,C.blue)+K.rect(x+10,y+8,w-20,4,{f:"rgba(255,255,255,.75)",r:2});
const btn=(x,y,w,h,s,{f=C.blue,ink=W,size=7.5}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});
const obtn=(x,y,w,h,s,size=7.5)=>K.rect(x,y,w,h,{f:W,s:C.blue,sw:1.1,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:C.blue,w:700,a:"middle"});
const dots=(x,y,n,r=2,gap=7)=>Array.from({length:n},(_,i)=>K.circ(x+i*gap,y,r,{f:C.ink})).join("");
// 사진 느낌 장면 (하늘 그라데이션 + 해 + 언덕)
const scene=(x,y,w,h,g,hill)=>K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.3,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
  +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${hill}"/>`;
const photo=(x,y,w,h,r,[a,b,hill]=["#AFC6FF","#E5C8F3","#6A86E8"])=>{const i=K.id(),g="b215p"+i,c="b215c"+i;
  return `<defs>${K.grad(g,[[0,a],[1,b]],0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`+scene(x,y,w,h,g,hill)+`</g>`};
const face=(cx,cy,r,f,ink)=>K.circ(cx,cy,r,{f,s:W,sw:2})+K.icon("user",cx,cy,n2(r*1.1),ink,1.6);

/* ───────── sh · 공유 ───────── */
// 초대 링크는 주소 줄, 초대 코드는 글자 칸 여섯 개
TH2["초대 코드"]=K=>K.card(16,8,128,84,14)
  +K.txt(80,25,"초대 코드",{size:8.5,fill:C.sub,w:700,a:"middle"})
  +[..."K7X2Q9"].map((ch,i)=>{const x=24+i*19.4;
    return K.rect(x,32,15,24,{f:KEY,s:i===5?C.blue:"none",sw:1.3,r:5})+K.txt(x+7.5,48.5,ch,{size:12,w:800,a:"middle"})}).join("")
  +btn(40,66,80,18,"참여하기",{size:8.5});

TH2["스토리 공유"]=K=>{const g="b215s"+K.id();
  return K.blk(10,28,30,44,8)+K.blk(120,28,30,44,8)
  +`<defs>${K.grad(g,[[0,"#7C9BFF"],[1,"#E7A6D8"]],.4,1)}</defs>`+K.card(48,4,64,92,12,`url(#${g})`)
  +K.rect(54,9,25,2.2,{f:W,r:1.1,o:.95})+K.rect(81,9,25,2.2,{f:W,r:1.1,o:.45})
  +`<g transform="rotate(-6 80 44)">`+K.card(60,22,40,44,8)+photo(64,26,32,22,5)+tbar(64,52,22,3.5)+gbar(64,58.5,30,3)+`</g>`
  +K.rect(55,76,50,15,{f:W,r:7.5})+K.circ(63,83.5,4.5,{f:"#F6B9CB"})+K.txt(69.5,86.2,"내 스토리",{size:7.5,w:700})};

// 링크 미리보기 카드는 저절로 따라 나오는 것, 공유용 카드는 자랑하라고 만들어 준 그림 한 장 + 저장 · 공유
TH2["공유용 카드"]=K=>{const g="b215k"+K.id();
  return `<defs>${K.grad(g,[[0,"#5B7CFF"],[1,"#B07BEA"]],1,1)}</defs>`+K.card(38,4,84,66,13,`url(#${g})`)
  +K.circ(108,16,15,{f:W,o:.12})+K.circ(48,62,11,{f:W,o:.1})
  +K.txt(48,20,"올해의 기록",{size:7.5,fill:"rgba(255,255,255,.85)",w:700})
  +K.txt(48,45,"128일",{size:21,fill:W,w:800})
  +K.rect(48,54,40,3.5,{f:W,r:1.75,o:.55})+K.icon("star",108,56,10,W,1.8)
  +K.card(40,76,38,19,9.5)+K.icon("download",52,85.5,10,C.ink,1.9)+K.txt(59,88.2,"저장",{size:7.5,w:700})
  +K.card(82,76,38,19,9.5,C.blue)+K.icon("share",94,85.5,10,W,1.9)+K.txt(101,88.2,"공유",{size:7.5,w:700,fill:W})};

TH2["협업자 아바타 스택"]=K=>K.blk(14,6,96,12,6)+K.blk(14,82,132,12,6)
  +K.card(8,26,144,48,16)+tbar(20,43,32)+gbar(20,53,22)
  +K.rect(113.5,36.5,27,27,{f:KEY,s:W,sw:2,r:13.5})+K.txt(127,53,"+3",{size:8.5,w:700,fill:C.sub,a:"middle"})
  +face(110,50,12.5,"#BFE6D2","#2E8C68")+face(93,50,12.5,"#F6B9CB","#C2577A")+face(76,50,12.5,"#C9D6FF","#4B6FE0")
  +K.circ(85,59.5,4.2,{f:W})+K.circ(85,59.5,2.8,{f:C.green});

/* ───────── ai · AI 채팅 화면 ───────── */
// 생각 중 표시는 답이 나오기 전 점, 추론 펼치기는 접었다 펴는 생각 과정
TH2["추론 펼치기"]=K=>K.card(12,6,136,88,14)
  +K.rect(18,11,124,19,{f:C.blueSoft,r:9.5})+ai(29,20.5)+K.txt(38,23.6,"생각 과정",{size:8.5,w:700,fill:C.blue})+K.txt(79,23.4,"8초",{size:7.5,fill:C.sub})
  +K.icon("q15down",132,20.5,8,C.blue,2)
  +K.line(26,36,26,62,{s:"#C9D6FF",sw:2})
  +[96,82,90,58].map((w,i)=>K.rect(34,36+i*7.6,w,3.4,{f:"#DDE2EC",r:1.7})).join("")
  +K.line(20,68,140,68,{s:C.line,sw:.6})
  +tbar(22,74,70,4.5)+gbar(22,83,104);

// 출처 표시는 답 아래 묶음, 인용 번호는 문장 속 작은 번호와 눌렀을 때 뜨는 카드
TH2["인용 번호"]=K=>{const chip=(cx,cy,n,on)=>K.circ(cx,cy,6.2,{f:on?C.blue:C.blueSoft})+K.txt(cx,cy+2.9,n,{size:8,w:800,fill:on?W:C.blue,a:"middle"});
  return K.card(12,5,136,47,13)
  +gbar(22,14,108,5)+gbar(22,26,58,5)+chip(88,28.5,"1",false)+gbar(98,26,34,5)
  +gbar(22,38,42,5)+chip(72,40.5,"2",true)
  +`<path d="M67 60l5-6.5 5 6.5z" style="fill:#fff"/>`
  +K.card(34,59,112,35,11)+K.circ(48,76.5,7,{f:"#C9D6FF"})+K.icon("link",48,76.5,8,"#4B6FE0",1.8)
  +tbar(61,69,58,4.5)+K.txt(61,85.5,"dogam.kr",{size:7.5,fill:C.sub})+K.icon("next",136,76.5,7,C.mute,1.9)};

// 추천 질문 칩은 눌러서 바로 보내는 칩, 템플릿은 빈칸이 뚫린 틀
TH2["프롬프트 템플릿"]=K=>{const slot=(x,y,w,s)=>`<rect x="${x}" y="${y}" width="${w}" height="15" rx="5" style="fill:${C.blueSoft};stroke:${C.blue};stroke-width:1;stroke-dasharray:3 2.2"/>`+K.txt(x+w/2,y+10.3,s,{size:7.5,fill:C.blue,w:700,a:"middle"});
  return K.card(12,8,136,84,14)
  +K.icon("q15doc",26,21,11,C.sub,1.7)+K.txt(35,24,"메일 쓰기",{size:8.5,w:700})
  +K.line(20,31,140,31,{s:C.line,sw:.6})
  +slot(22,37,44,"받는 사람")+gbar(70,42.5,62,4.5)
  +gbar(22,60,26,4.5)+slot(52,54.5,28,"주제")+gbar(84,60,36,4.5)
  +btn(104,72,34,15,"사용")};

TH2["톤 · 길이 조절"]=K=>{const seg=(y,label,opts,sel)=>K.txt(24,y+10.3,label,{size:7.5,fill:C.sub,w:700})+K.rect(46,y,92,15,{f:KEY,r:7.5})
    +opts.map((s,i)=>{const x=46+i*30.67,on=i===sel;
      return (on?K.rect(x+1.5,y+1.5,27.67,12,{f:C.blue,r:6}):"")+K.txt(x+15.3,y+10.3,s,{size:7.5,w:on?700:500,fill:on?W:C.ink,a:"middle"})}).join("");
  return K.card(14,5,132,32,12)+ai(24,16)+gbar(34,13,96)+gbar(34,21,100)+gbar(34,29,56)
  +K.card(14,44,132,50,14)+seg(51,"길이",["짧게","보통","길게"],0)+seg(72,"말투",["친근","정중","간결"],1)};

TH2["이미지 결과 그리드"]=K=>{const P=[["#AFC6FF","#E5C8F3","#6A86E8"],["#FFD9B0","#F6B9CB","#D9788F"],["#BFE6D2","#C9D6FF","#4FA98A"],["#D9C8FF","#FFE3C4","#8E79D6"]];
  return ub(86,3,60)+ai(24,38)
  +K.card(36,27,88,69,12)
  +P.map((p,i)=>photo(40+(i%2)*41,31+(i>>1)*31.5,39,29.5,7,p)).join("")
  +K.rect(81,31,39,29.5,{s:C.blue,sw:2.4,r:7})
  +K.circ(112,39,6,{f:C.blue,s:W,sw:1.4})+K.icon("check",112,39,7.5,W,2.2)};

// 수정 후 다시 보내기는 고치는 순간, 대화 분기는 그 뒤 생긴 갈래와 2/3 넘김
TH2["대화 분기"]=K=>K.card(10,12,50,76,12)
  +K.path("M35 30V40M35 40C35 48 22 46 22 54M35 40C35 48 48 46 48 54",{s:"#C3C9D6",sw:1.5})
  +K.path("M35 30V54M35 58V74",{s:C.blue,sw:1.8})
  +K.circ(35,27,4.2,{f:"#3A4050"})+K.circ(22,57,4.2,{f:"#D3D8E3"})+K.circ(48,57,4.2,{f:"#D3D8E3"})
  +K.circ(35,57,5,{f:C.blue})+K.circ(35,76,4,{f:C.blueSoft,s:C.blue,sw:1.4})
  +ub(70,12,78)
  +K.card(88,38,60,22,11)+K.icon("back",100,49,8,C.ink,2)+K.txt(118,52.2,"2 / 3",{size:9,w:700,a:"middle"})+K.icon("next",136,49,8,C.ink,2)
  +K.card(70,66,78,22,10)+ai(81,77)+gbar(90,75,48);

TH2["메모리 표시"]=K=>K.card(14,8,132,40,12)+ai(24,20)+gbar(34,18,96)+gbar(34,27,100)+gbar(34,36,64)
  +K.card(20,56,104,28,14)+K.circ(36,70,9,{f:C.blueSoft})+K.icon("bookmark",36,70,11,C.blue,1.9)
  +K.txt(50,73.3,"기억했어요",{size:9.5,w:700})+K.icon("next",113,70,8,C.mute,2);

// 페이월은 결제를 권하는 화면, 한도 안내는 입력창 위에 뜨는 띠
TH2["한도 안내"]=K=>K.card(12,10,136,48,13)
  +K.circ(29,30,10,{f:"#FFF1D6"})+K.icon("q15clock",29,30,12,C.amber,1.9)
  +K.txt(45,27,"한도를 다 썼어요",{size:8.5,w:700})+K.txt(45,38.5,"3시간 뒤 풀려요",{size:7.5,fill:C.sub})
  +K.rect(22,47,116,4.5,{f:C.amber,r:2.25})
  +K.blk(12,66,136,26,13)+K.rect(26,77,44,4,{f:"#fff",r:2,o:.9})
  +K.circ(134,79,8.5,{f:"#C9CEDA"})+K.icon("q15up",134,79,9.5,W,2.2);

// 음성 입력은 입력창 안 물결, 음성 모드는 화면을 다 차지한 공
TH2["음성 모드"]=K=>{const g="b215o"+K.id();
  return K.blk(10,28,28,44,8)+K.blk(122,28,28,44,8)
  +K.card(46,4,68,92,14,"#171A21")
  +`<defs><radialGradient id="${g}" cx=".38" cy=".34" r=".8"><stop offset="0" stop-color="#C9D8FF"/><stop offset=".55" stop-color="#6F8DFF"/><stop offset="1" stop-color="#D99BEA"/></radialGradient></defs>`
  +A("n15halo",K.circ(80,39,16,{s:"#9DB8FF",sw:1.5}))+A("n15halo",K.circ(80,39,16,{s:"#9DB8FF",sw:1.5}),"animation-delay:1.4s")
  +A("n15orb",K.circ(80,39,16,{f:`url(#${g})`}))
  +K.txt(80,68,"듣는 중",{size:7.5,fill:"#C3C8D2",a:"middle"})
  +K.circ(67,82,8,{f:"#2D323D"})+K.icon("mic",67,82,9.5,W,1.8)
  +K.circ(93,82,8,{f:C.red})+K.icon("x",93,82,8,W,2.2)};
kf("n15orb",2.8,"0%,100%{transform:scale(1)}18%{transform:scale(1.15)}38%{transform:scale(.95)}58%{transform:scale(1.1)}78%{transform:scale(.98)}","animation-timing-function:ease-in-out;");
kf("n15halo",2.8,"0%{transform:scale(1);opacity:.7}70%,100%{transform:scale(1.65);opacity:0}","animation-timing-function:ease-out;opacity:0;");

// 도구 사용 표시는 지금 하는 일 한 줄, 진행 단계는 처음부터 끝까지 이어진 목록
TH2["에이전트 진행 단계"]=K=>{const Y=[19,39,59,79],L=["자료 찾기","초안 쓰기","검토하기","보내기"];
  return K.card(14,5,132,90,14)
  +K.line(31,19,31,59,{s:C.green,sw:1.6,o:.45})+K.line(31,59,31,79,{s:"#D3D8E3",sw:1.6})
  +Y.map((y,i)=>(i<2?K.circ(31,y,6.5,{f:C.green})+K.icon("check",31,y,8,W,2.3)
      :i===2?K.circ(31,y,7.5,{f:W})+K.circ(31,y,6,{s:C.blueSoft,sw:2.2})+`<circle cx="31" cy="${y}" r="6" class="b2x15 b2a-n15spin" style="fill:none;stroke:${C.blue};stroke-width:2.2;stroke-dasharray:14 23.7"/>`
      :K.circ(31,y,6,{f:W,s:"#C3C9D6",sw:1.4}))
    +(i===2?K.rect(43,y-8,70,16,{f:C.blueSoft,r:8}):"")
    +K.txt(49,y+3.1,L[i],{size:8.5,w:i===2?700:500,fill:i===2?C.blue:i<2?C.ink:C.mute})).join("")
  +K.txt(136,22,"2/4",{size:7.5,fill:C.sub,w:700,a:"end"})};
kf("n15spin",2.4,"0%{transform:rotate(0deg)}100%{transform:rotate(720deg)}","animation-timing-function:linear;");

// 컨펌은 사람이 누른 일을 되묻는 창, 승인 요청은 AI가 하려는 일을 보여 주고 허락받는 카드
TH2["승인 요청"]=K=>K.card(12,7,136,86,14)
  +ai(25,21)+K.txt(34,24.2,"이 파일을 지울까요?",{size:8.5,w:700})
  +K.rect(22,33,116,24,{f:KEY,r:8})+K.icon("trash",34,45,11,C.red,1.8)+K.txt(44,48,"report.txt",{size:8.5})
  +btn(22,67,28,17,"거절",{f:KEY,ink:C.ink})+obtn(54,67,44,17,"항상 허용")+btn(102,67,36,17,"허용");

// 코드 블록은 어두운 상자 하나, 변경 비교는 빨강(지움) · 초록(넣음) 줄
TH2["변경 비교"]=K=>{const row=(y,t)=>{const bg=t<0?"#FDE7E8":t>0?"#DFF4E8":"none",ink=t<0?C.red:C.green;
    return (t?K.rect(14,y,132,13,{f:bg})+K.rect(14,y,3,13,{f:ink})+K.txt(26,y+9.8,t<0?"−":"+",{size:10,w:800,fill:ink,a:"middle"}):"")};
  return K.card(14,7,132,86,12)
  +K.txt(24,21.5,"app.js",{size:8,w:700})+K.txt(121,21.5,"+2",{size:8,w:800,fill:C.green,a:"end"})+K.txt(136,21.5,"−1",{size:8,w:800,fill:C.red,a:"end"})
  +K.line(14,27.5,146,27.5,{s:C.line,sw:.6})
  +gbar(34,33,58,4.5)
  +row(41,-1)+K.rect(34,45.25,70,4.5,{f:"#EFA3A6",r:2.25})  +row(54,1)+K.rect(34,58.25,82,4.5,{f:"#7CCDA5",r:2.25})
  +row(67,1)+K.rect(42,71.25,48,4.5,{f:"#7CCDA5",r:2.25})
  +gbar(34,84,40,4.5)};

/* ───────── fb · 상태 · 피드백 ───────── */
TH2["자동 저장 표시"]=K=>K.blk(14,8,84,14,7)+K.blk(14,78,132,14,7)
  +K.card(22,30,116,40,20)
  +K.circ(44,50,12,{f:C.blueSoft})+K.icon("q15cloud",44,50,17,C.blue,1.7)
  +K.txt(63,48.5,"자동 저장됨",{size:9.5,w:700})+K.txt(63,60,"방금 전",{size:7.5,fill:C.mute});

TH2["재시도 버튼"]=K=>K.card(22,6,116,88,16)
  +K.circ(80,27,12,{f:"rgba(229,72,77,.12)"})+K.icon("alert",80,27,15,C.red,1.8)
  +K.txt(80,53,"불러오지 못했어요",{size:8.5,fill:C.sub,a:"middle"})
  +K.rect(44,62,72,22,{f:C.blue,r:11})+K.icon("refresh",60,73,11,W,2)+K.txt(69,76.3,"다시 시도",{size:9,w:700,fill:W});

// 햄버거 메뉴는 줄 세 개(메뉴 열기), 드래그 핸들은 점 여섯 개(잡고 끌기)
TH2["드래그 핸들"]=K=>{const grip=(x,y,f,r)=>[0,1].map(c=>[0,1,2].map(q=>K.circ(x+c*6.5,y+q*6.5,r,{f})).join("")).join("");
  return K.blk(20,6,120,22,10)+grip(31,12.5,"rgba(255,255,255,.9)",1.5)
  +K.blk(20,72,120,22,10)+grip(31,78.5,"rgba(255,255,255,.9)",1.5)
  +K.card(8,33,144,34,14)
  +K.rect(15,39,24,22,{f:C.blueSoft,r:8})+grip(23.75,43.5,C.blue,2.2)
  +K.circ(55,50,8.5,{f:"#C9D6FF"})+tbar(70,44,46)+gbar(70,53.5,30)};

// 멀티 셀렉트는 입력 칸, 다중 선택 모드는 목록 전체가 고르는 상태로 바뀐 것
TH2["다중 선택 모드"]=K=>K.card(20,4,120,92,14)
  +K.rect(26,9,108,20,{f:C.blue,r:10})+K.icon("x",38,19,8,W,2.2)+K.txt(48,22.2,"2개 선택",{size:9,w:700,fill:W})+K.icon("trash",122,19,10,W,1.8)
  +[1,1,0].map((on,i)=>{const y=35+i*20;
    return (on?K.rect(26,y,108,17,{f:C.blueSoft,r:8.5}):"")
      +(on?K.circ(37,y+8.5,5.5,{f:C.blue})+K.icon("check",37,y+8.5,7,W,2.3):K.circ(37,y+8.5,5,{f:W,s:"#C3C9D6",sw:1.3}))
      +K.rect(48,y+3.5,10,10,{f:on?"#C9D6FF":C.skel,r:3})+gbar(63,y+6.5,[50,38,56][i])}).join("");

// 스켈레톤은 회색 뼈대, 블러 업은 흐린 사진이 선명해지는 것
TH2["블러 업 로딩"]=K=>{const i=K.id(),g="b215bg"+i,c="b215bc"+i,f="b215bf"+i,X=38,Y=10,Wd=84,H=80;
  return K.blk(8,30,22,40,8)+K.blk(130,30,22,40,8)
  +K.card(32,4,96,92,15)
  +`<defs>${K.grad(g,[[0,"#AFC6FF"],[1,"#E5C8F3"]],0,1)}<clipPath id="${c}"><rect x="${X}" y="${Y}" width="${Wd}" height="${H}" rx="10"/></clipPath>`
  +`<filter id="${f}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="6"/></filter></defs>`
  +`<g clip-path="url(#${c})">`+scene(X,Y,Wd,H,g,"#6A86E8")+`</g>`
  +A("n15blur",`<g clip-path="url(#${c})">`+K.rect(X,Y,Wd,H,{f:"#B7BFF2"})+`<g filter="url(#${f})">`+scene(X,Y,Wd,H,g,"#6A86E8")+`</g></g>`)};
kf("n15blur",3,"0%,22%{opacity:1}55%,88%{opacity:0}100%{opacity:1}","animation-timing-function:ease-in-out;");

// 비활성은 흐려져서 못 쓰는 것, 읽기 전용은 글자는 또렷한데 자물쇠가 걸린 것
TH2["읽기 전용"]=K=>K.card(14,9,132,82,14)
  +K.txt(24,26,"이메일",{size:8,fill:C.sub,w:700})
  +K.rect(24,32,112,26,{f:KEY,r:9})+K.txt(34,48.3,"kim@dogam.kr",{size:9,w:500})+K.icon("lock",124,45,11,C.sub,1.8)
  +K.rect(24,67,58,16,{f:"#E7EAF2",r:8})+K.icon("eye",34,75,9,C.sub,1.8)+K.txt(42,77.8,"읽기 전용",{size:7.5,fill:C.sub,w:700});

// 인라인 에러는 틀린 뒤 빨간 글씨, 실시간 체크는 치는 동안 조건이 하나씩 초록으로
TH2["실시간 유효성 체크"]=K=>K.card(14,5,132,90,14)
  +K.rect(24,13,112,24,{f:W,s:C.blue,sw:1.4,r:9})+K.icon("lock",35,25,10,C.sub,1.7)+dots(47,25,6)+K.rect(88.5,19,2,12,{f:C.blue,r:1})
  +[["8자 이상",1],["숫자 포함",1],["특수문자",0]].map(([s,ok],i)=>{const y=50+i*15;
    return (ok?K.circ(31,y,5.5,{f:C.green})+K.icon("check",31,y,7,W,2.3):K.circ(31,y,5,{f:W,s:"#C3C9D6",sw:1.3}))
      +K.txt(42,y+3.1,s,{size:8.5,w:ok?700:500,fill:ok?C.green:C.mute})}).join("");
}
