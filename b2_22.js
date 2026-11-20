// B2 그림 추가분 22: ct 버튼 10 · nv 내비게이션 18
// 움직이는 부분은 class="b2x22 b2a-n22…". 멈춘 모습(기본 상태)이 다 펼쳐진 완성 모습.
{
const C=K.C, n2=K.n2;
const A=(c,inner,st="")=>`<g class="b2x22 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x22{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});        // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});        // 흰 면 위 글줄
const wbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#fff",r:h/2,o:.8});      // 흐린 블록 위 글줄
const btxt=(x,y,s,size=9,fill="#fff")=>K.txt(x,y,s,{size,fill,w:700,a:"middle"});
const clip=(cid,x,y,w,h,r)=>`<defs><clipPath id="${cid}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs>`;
const PAS=["#CFE0FF","#FFE1C7","#D9F2E0"];
Object.assign(K.ICON,{
  q22down:"M6 9l6 6 6-6",
  q22globe:["M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z","M3 12h18","M12 3c2.8 2.5 4 5.5 4 9s-1.2 6.5-4 9c-2.8-2.5-4-5.5-4-9s1.2-6.5 4-9z"],
  q22dots:["M5.5 12v.01","M12 12v.01","M18.5 12v.01"],
  q22updown:["M8 10l4-4 4 4","M8 14l4 4 4-4"],
  q22logout:["M10 4H5v16h5","M14 8l4 4-4 4","M18 12H9"],
  q22alignL:["M4 6h16","M4 12h10","M4 18h14"],
  q22alignC:["M4 6h16","M7 12h10","M5 18h14"],
  q22go:["M5 12h14","M13 6l6 6-6 6"],
});

/* ───────── ct · 버튼 ───────── */
// 속은 흰 면, 테두리와 글자만 포인트색
TH2["아웃라인 버튼"]=K=>K.blk(16,10,128,14,7)
  +K.card(26,36,108,34,10)+K.rect(26.9,36.9,106.2,32.2,{s:C.blue,sw:1.8,r:9.2})+btxt(80,57,"자세히 보기",11,C.blue)
  +K.blk(44,80,72,8,4);

// 양 끝이 반원. 위의 각진 블록과 견줘 보인다
TH2["알약 버튼"]=K=>K.blk(44,10,72,16,3)
  +K.card(22,38,116,36,18,C.blue)+btxt(80,60.5,"시작하기",12)
  +K.blk(52,84,56,8,4);

// 면의 안쪽 폭을 끝에서 끝까지 채운 버튼
TH2["블록 버튼"]=K=>K.card(22,6,116,88,14)+tbar(32,18,50,6)+gbar(32,31,96)+gbar(32,40,70)
  +K.line(32,54,128,54,{s:C.blue,sw:1.2})+K.path("M35 51.5L32 54L35 56.5M125 51.5L128 54L125 56.5",{s:C.blue,sw:1.2})
  +K.rect(32,61,96,24,{f:C.blue,r:8})+btxt(80,76.6,"다음",10);

// 버튼 안에서 동그라미가 돈다
TH2["로딩 버튼"]=K=>K.blk(20,12,120,14,7)
  +K.card(26,36,108,34,17,C.blue)
  +A("n22spin",K.circ(58,53,6.5,{s:"#fff",sw:2.2,o:.35})+K.path("M58 46.5a6.5 6.5 0 0 1 6.5 6.5",{s:"#fff",sw:2.2}))
  +K.txt(72,57,"저장 중",{size:11,fill:"#fff",w:700})
  +K.blk(44,80,72,8,4);
kf("n22spin",2.4,"0%{transform:rotate(0deg)}100%{transform:rotate(720deg)}","animation-timing-function:linear");

// 버튼 하나(가름선 없음) 아래로 메뉴가 열린다
TH2["메뉴 버튼"]=K=>K.blk(108,8,36,28,10)
  +K.card(16,8,84,28,10,C.blue)+K.txt(30,26,"만들기",{size:10,fill:"#fff",w:700})+K.icon("q22down",84,22,11,"#fff",2.2)
  +K.card(16,40,112,54,10)+K.rect(19,43,106,16,{f:C.soft,r:6})
  +[["edit","문서"],["copy","폴더"],["image","사진"]].map(([ic,s],i)=>{const y=51+i*16.5;
    return K.icon(ic,31,y,10,i?C.ink:C.blue,1.7)+K.txt(43,y+3,s,{size:8.5,fill:i?C.ink:C.blue,w:i?500:700})}).join("");

// FAB 위로 작은 버튼이 줄지어 펼쳐진다
TH2["스피드 다이얼"]=K=>K.blk(12,10,56,24,10)+K.blk(12,40,56,24,10)+K.blk(12,70,56,24,10)
  +[["edit","글쓰기"],["image","사진"],["link","링크"]].map(([ic,s],i)=>{const y=54-i*21;
    return A("n22sd"+i,K.card(76,y-6.5,34,13,6.5)+K.txt(93,y+2.8,s,{size:7.5,a:"middle"})
      +K.card(117,y-9,18,18,9)+K.icon(ic,126,y,10,C.blue,1.8))}).join("")
  +K.card(111,65,30,30,15,C.blue)+K.icon("x",126,80,13,"#fff",2.4);
[0,1,2].forEach(i=>{const s=10+i*9;kf("n22sd"+i,2.8,`0%,${s}%{opacity:0;transform:translateY(14px) scale(.6)}${s+18}%,84%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}`)});

// 안내 화면 오른쪽 위, 넘기는 버튼
TH2["건너뛰기 버튼"]=K=>K.card(20,6,120,88,14)
  +K.rect(84,12,48,17,{f:C.soft,r:8.5})+btxt(108,23.6,"건너뛰기",8.5,C.blue)
  +K.rect(50,35,60,28,{f:C.skel,r:10})+K.circ(80,49,7,{f:"#fff"})
  +tbar(56,69,48,5)
  +K.rect(69,81,10,4,{f:C.blue,r:2})+K.circ(84,83,2,{f:"#D3D8E3"})+K.circ(91,83,2,{f:"#D3D8E3"});

// 채널 줄 오른쪽의 구독 버튼(종 아이콘)
TH2["구독 버튼"]=K=>K.blk(12,8,136,12,6)
  +K.card(10,26,140,48,14)+K.circ(32,50,12,{f:"#C9D6FF"})+K.icon("user",32,50,13,"#fff",1.8)
  +tbar(50,43,32,5)+gbar(50,53,24)
  +K.rect(90,38,52,24,{f:C.ink,r:12})+K.icon("bell",103,50,10,"#fff",1.7)+btxt(122,53.6,"구독",10)
  +K.blk(12,80,90,12,6);

// 저장해 둔 수단으로 바로 결제 (로고 대신 카드 모양)
TH2["간편결제 버튼"]=K=>K.blk(16,8,128,14,7)
  +K.card(20,30,120,30,15,C.ink)
  +K.rect(52,38,18,13,{f:"#fff",r:3})+K.rect(52,41.5,18,3,{f:C.ink})+K.rect(55,46.5,6,2,{f:C.mute,r:1})
  +K.txt(76,49.6,"Pay",{size:13,fill:"#fff",w:700})
  +K.card(20,66,120,26,13,"#FFD84D")+btxt(80,82.4,"간편결제",9.5,C.ink);

// 구역 제목 옆의 작은 링크
TH2["전체 보기 링크"]=K=>K.card(10,12,140,76,14)+tbar(20,23,36,6)
  +K.txt(131,29.4,"전체 보기",{size:8.5,fill:C.blue,w:700,a:"end"})+K.icon("next",137,26.4,8,C.blue,2)
  +PAS.map((f,i)=>K.rect(20+i*41.5,40,37,30,{f,r:8})+gbar(20+i*41.5,76,24,3.5)).join("");

/* ───────── nv · 내비게이션 ───────── */
// 앞 화면이 뒤에 비치고, 왼쪽 위 화살표로 돌아간다
TH2["뒤로가기"]=K=>K.blk(6,16,56,68,12)
  +K.card(30,8,122,84,14)+K.circ(49,27,11,{f:C.soft})+K.icon("back",48,27,14,C.blue,2.4)
  +tbar(68,24.5,44,5)+K.line(30,44,152,44,{s:C.line,sw:.6})
  +gbar(42,56,96)+gbar(42,66,74)+gbar(42,76,86);

// 작업 도구를 한 줄로 모은 띠
TH2["툴바"]=K=>K.blk(16,46,128,48,12)+wbar(28,58,92)+wbar(28,68,104)+wbar(28,78,66)
  +K.card(10,10,140,28,10)
  +K.rect(15,15,18,18,{f:C.soft,r:5})+K.txt(24,28,"B",{size:11,fill:C.blue,w:700,a:"middle"})
  +`<text x="42" y="28" font-size="11" font-weight="500" font-style="italic" font-family="Georgia,serif" text-anchor="middle" style="fill:${C.ink}">I</text>`
  +K.txt(60,27,"U",{size:10.5,a:"middle"})+K.line(56,30.5,64,30.5,{s:C.ink,sw:1.1})
  +K.line(72,16,72,32,{s:C.line,sw:.8})
  +K.icon("q22alignL",84,24,11,C.ink,1.7)+K.icon("q22alignC",101,24,11,C.ink,1.7)
  +K.line(112,16,112,32,{s:C.line,sw:.8})
  +K.icon("link",124,24,11,C.ink,1.7)+K.icon("image",140,24,11,C.ink,1.7);

// 항목을 고르면 뜨는 띠: 몇 개 골랐는지 + 할 수 있는 동작
TH2["액션 바"]=K=>[0,1,2].map(i=>{const y=8+i*19;return K.blk(16,y,128,15,7)
    +(i<2?K.rect(22,y+2.5,10,10,{f:C.blue,r:3})+K.path(`M24.4 ${y+7.7}l2 2 3.4-4`,{s:"#fff",sw:1.5})
         :K.rect(22.6,y+3.1,8.8,8.8,{f:"#fff",s:C.mute,sw:1.2,r:2.6}))
    +wbar(38,y+5.5,i===1?46:62)}).join("")
  +K.card(12,68,136,26,13,C.toast)+K.txt(26,84.2,"2개 선택",{size:8.5,fill:"#fff",w:700})
  +K.icon("share",98,81,11,"#fff",1.7)+K.icon("trash",116,81,11,"#fff",1.7)+K.icon("more",134,81,11,"#fff",2.2);

// 화면 아래 선반에 앱 아이콘이 나란히, 하나는 커져 있다
TH2["독"]=K=>K.blk(24,6,112,48,10)+K.circ(32,13,1.8,{f:"#fff"})+K.circ(38,13,1.8,{f:"#fff"})+K.circ(44,13,1.8,{f:"#fff"})
  +K.card(16,68,128,27,11,"rgba(255,255,255,.82)")
  +[[C.blue,"home"],[C.amber,"chat"],[C.green,"image"],[C.red,"heart"],["#8B6BF2","settings"]].map(([f,ic],i)=>{const big=i===2,s=big?26:18,cx=31+i*24.5-(i<2?2:i>2?-2:0),y=big?60:72.5;
    return K.rect(cx-s/2,y,s,s,{f,r:big?7.5:5.5,fx:big?"url(#b2lift)":""})+K.icon(ic,cx,y+s/2,big?15:10.5,"#fff",1.8)
      +(i===0||big?K.circ(cx,92.6,1.1,{f:C.ink}):"")}).join("");

// 화면 맨 위에 붙은 글자 메뉴 줄 (가장자리까지)
TH2["메뉴 바"]=K=>K.blk(10,28,140,64,12)
  +K.rect(0,0,160,19,{f:C.sf,fx:"url(#b2lift)"})+K.circ(12,9.5,3.2,{f:C.ink})
  +K.txt(24,12.6,"파일",{size:8,w:700})
  +K.rect(45,3,24,13,{f:C.blue,r:4})+btxt(57,12.6,"편집",8)
  +K.txt(76,12.6,"보기",{size:8,w:700})+K.txt(100,12.6,"도움말",{size:8,w:700})
  +K.card(45,21,84,56,8)
  +[["실행 취소",16],["복사",12],["붙여넣기",12]].map(([s,w],i)=>{const y=34+i*17.5;
    return K.txt(54,y,s,{size:8})+gbar(121-w,y-4.2,w,3.5)+(i===0?K.line(45,y+7,129,y+7,{s:C.line,sw:.6}):"")}).join("");

// 메뉴 항목 옆으로 한 겹 더 열린 메뉴
TH2["서브메뉴"]=K=>K.card(8,12,72,76,10)
  +K.rect(11,32.5,66,17,{f:C.soft,r:6})
  +["열기","공유","이동","삭제"].map((s,i)=>K.txt(18,27+i*17.5,s,{size:8.5,fill:i===1?C.blue:i===3?C.red:C.ink,w:i===1?700:500})).join("")
  +K.icon("next",70,41,8,C.blue,2)
  +K.card(83,29,69,58,10)
  +["링크 복사","메일","메시지"].map((s,i)=>K.txt(93,44.5+i*17.5,s,{size:8.5})).join("");

// 같은 자리에서 안쪽 단계로 바뀐다. 머리에 돌아가는 화살표
TH2["드릴다운 메뉴"]=K=>{const c="b222"+K.id();
  const row=(s,y,on)=>(on?K.rect(32,y-11,96,17,{f:C.soft,r:6}):"")+K.txt(40,y,s,{size:8.5,fill:on?C.blue:C.ink,w:on?700:500})+K.icon("next",120,y-3,8,on?C.blue:C.mute,2);
  const l1=K.txt(40,23.4,"메뉴",{size:9,w:700})+row("홈",46)+row("설정",64,true)+row("도움말",82);
  const l2=K.icon("back",41,20.4,10,C.blue,2.3)+K.txt(50,23.4,"설정",{size:9,w:700})+row("알림",46)+row("화면",64)+row("계정",82);
  return K.card(28,6,104,88,14)+clip(c,28,6,104,88,14)+K.line(28,31,132,31,{s:C.line,sw:.6})
    +`<g clip-path="url(#${c})">`+A("n22dl1",l1,"transform:translateX(-106px)")+A("n22dl2",l2)+`</g>`};
kf("n22dl1",3,"0%,16%{transform:none}42%,84%{transform:translateX(-106px)}96%,100%{transform:none}");
kf("n22dl2",3,"0%,16%{transform:translateX(106px)}42%,84%{transform:none}96%,100%{transform:translateX(106px)}");

// 탭이 옆에 세로로 쌓이고 오른쪽에 내용
TH2["수직 탭"]=K=>K.card(10,10,140,80,14)+K.line(58,10,58,90,{s:C.line,sw:.8})
  +K.rect(14,34.5,44,17,{f:C.soft,r:6})+K.rect(56.5,35.5,3,15,{f:C.blue,r:1.5})
  +["일반","알림","보안","결제"].map((s,i)=>K.txt(22,28.5+i*17.5,s,{size:8.5,fill:i===1?C.blue:C.sub,w:i===1?700:500})).join("")
  +tbar(70,24,40,6)+gbar(70,38,66)+gbar(70,47,50)
  +gbar(70,63.5,36)+K.rect(122,60,17,10,{f:C.blue,r:5})+K.circ(134,65,3.4,{f:"#fff"})
  +gbar(70,78.5,44)+K.rect(122,75,17,10,{f:"#D3D8E3",r:5})+K.circ(127,80,3.4,{f:"#fff"});

// 화면 밖에 있던 메뉴가 들어오며 본문을 옆으로 민다 (본문이 오른쪽에서 잘림)
TH2["오프캔버스"]=K=>{const c="b222"+K.id();
  const menu=K.rect(20,10,58,80,{f:"#2A2F3A"})+K.txt(31,29,"홈",{size:8.5,fill:"#fff",w:700})
    +K.txt(31,46,"소개",{size:8.5,fill:"#B9C0CE"})+K.txt(31,63,"문의",{size:8.5,fill:"#B9C0CE"})+K.rect(31,74,26,4,{f:"#4A5162",r:2});
  const page=K.rect(78,10,120,80,{f:"#fff"})+K.icon("menu",90,23,11,C.blue,2)+tbar(102,20.5,30,5)
    +K.rect(86,36,104,26,{f:C.skel,r:7})+gbar(86,70,48)+gbar(86,79,40);
  return K.card(20,10,120,80,14)+clip(c,20,10,120,80,14)
    +`<g clip-path="url(#${c})">`+A("n22ocm",menu)+A("n22ocp",page)+`</g>`};
kf("n22ocm",3,"0%,14%{transform:translateX(-58px)}44%,84%{transform:none}96%,100%{transform:translateX(-58px)}");
kf("n22ocp",3,"0%,14%{transform:translateX(-58px)}44%,84%{transform:none}96%,100%{transform:translateX(-58px)}");

// 맨 위의 작은 보조 줄. 아래 큰 메뉴는 흐리게
TH2["유틸리티 내비"]=K=>K.card(8,10,144,22,8)
  +K.txt(144,24.6,"고객센터",{size:7.5,a:"end"})+K.line(109.5,17,109.5,25,{s:C.line,sw:.8})
  +K.txt(105,24.6,"회원가입",{size:7.5,a:"end"})+K.line(70.5,17,70.5,25,{s:C.line,sw:.8})
  +K.txt(66,24.6,"로그인",{size:7.5,fill:C.blue,w:700,a:"end"})
  +K.blk(8,38,144,22,8)+K.rect(16,44,10,10,{f:"#fff",r:3,o:.9})+wbar(36,47,20)+wbar(64,47,20)+wbar(92,47,20)
  +K.blk(8,66,144,28,10);

// 키보드로 처음 닿으면 나타나는 링크. 초점 테두리가 둘러져 있다
TH2["스킵 링크"]=K=>K.blk(8,12,144,24,8)+wbar(100,22,16)+wbar(122,22,16)
  +K.blk(8,44,144,48,10)+wbar(20,56,70)+wbar(20,66,84)+wbar(20,76,52)
  +K.card(14,8,78,24,6)+K.rect(11.5,5.5,83,29,{s:C.blue,sw:2,r:8.5})
  +btxt(53,23.6,"본문 바로가기",9,C.blue)+K.line(25,26.6,81,26.6,{s:C.blue,sw:1})
  +K.card(112,62,30,20,5)+K.txt(127,75.4,"Tab",{size:8,fill:C.sub,w:700,a:"middle"});

// 오른쪽 위 내 사진 아래로 뜨는 메뉴
TH2["프로필 메뉴"]=K=>K.blk(8,6,144,24,12)+wbar(20,16,34)
  +K.circ(136,18,8,{f:"#C9D6FF"})+K.icon("user",136,18,10,"#fff",1.8)+K.circ(136,18,10.2,{s:C.blue,sw:1.6})
  +K.card(64,34,88,62,10)
  +K.circ(77,45,6,{f:"#C9D6FF"})+tbar(88,40.5,30,4.5)+gbar(88,48,44,3.5)+K.line(64,56,152,56,{s:C.line,sw:.6})
  +[["user","내 정보",C.ink],["settings","설정",C.ink],["q22logout","로그아웃",C.red]].map(([ic,s,col],i)=>{const y=65+i*12;
    return K.icon(ic,77,y,9,col,1.6)+K.txt(88,y+2.9,s,{size:8,fill:col})}).join("");

// 지구본 버튼과 언어 목록
TH2["언어 전환기"]=K=>K.card(30,6,100,26,13)+K.icon("q22globe",46,19,12,C.blue,1.6)
  +K.txt(58,22.4,"한국어",{size:9.5,w:700})+K.icon("q22down",116,19,10,C.ink,2)
  +K.card(30,36,100,58,10)+K.rect(33,39,94,17,{f:C.soft,r:6})
  +["한국어","English","日本語"].map((s,i)=>K.txt(44,51+i*18,s,{size:9,fill:i?C.ink:C.blue,w:i?500:700})).join("")
  +K.icon("check",117,47.5,10,C.blue,2.2);

// 사이드바 맨 위에서 팀 공간을 바꾼다
TH2["워크스페이스 전환기"]=K=>{const sq=(x,y,s,f,ch)=>K.rect(x,y,s,s,{f,r:s*.28})+K.txt(x+s/2,y+s/2+2.9,ch,{size:8,fill:"#fff",w:700,a:"middle"});
  return K.blk(8,6,72,88,12)+wbar(18,48,30)+wbar(18,60,24)+wbar(18,72,34)
  +K.card(12,10,64,24,8)+sq(17,15,14,C.blue,"A")+tbar(36,19.5,22,5)+K.icon("q22updown",67,22,10,C.sub,1.8)
  +K.card(50,38,102,56,10)+K.rect(53,41,96,17,{f:C.soft,r:6})
  +sq(59,43.5,12,C.blue,"A")+K.txt(77,52.6,"디자인팀",{size:8.5,fill:C.blue,w:700})+K.icon("check",140,49.5,9,C.blue,2.2)
  +sq(59,60.5,12,C.amber,"B")+K.txt(77,69.6,"마케팅팀",{size:8.5})
  +`<rect x="59.6" y="78.1" width="10.8" height="10.8" rx="3.2" style="fill:none;stroke:${C.mute};stroke-width:1.1" stroke-dasharray="2.2 2"/>`
  +K.icon("plus",65,83.5,7,C.sub,1.8)+K.txt(77,86.6,"새 공간",{size:8.5,fill:C.sub})};

// 목록 옆 세로 글자 줄. 누른 글자가 크게 뜬다
TH2["색인 바"]=K=>K.card(14,4,132,92,14)
  +K.txt(26,19,"ㄷ",{size:8,fill:C.blue,w:700})
  +[32,49].map((y,i)=>K.circ(32,y,6,{f:C.skel})+gbar(44,y-2,i?36:46)).join("")
  +K.txt(26,69,"ㄹ",{size:8,fill:C.sub,w:700})+K.circ(32,82,6,{f:C.skel})+gbar(44,80,40)
  +K.rect(127,8,13,84,{f:"#F1F3F8",r:6.5})
  +K.circ(133.5,38.5,5.6,{f:C.blue})
  +["ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅅ"].map((s,i)=>K.txt(133.5,19+i*11,s,{size:7,fill:i===2?"#fff":C.sub,w:700,a:"middle"})).join("")
  +K.card(96,26,25,25,12.5,C.blue)+K.txt(108.5,43.6,"ㄷ",{size:14,fill:"#fff",w:700,a:"middle"});

// 글 끝의 앞뒤 글 링크 한 쌍
TH2["이전 · 다음 글"]=K=>K.blk(12,8,136,40,12)+wbar(24,18,82)+wbar(24,27,104)+wbar(24,36,60)
  +K.card(12,56,65,36,10)+K.icon("back",22,67.5,8,C.blue,2)+K.txt(29,70.4,"이전 글",{size:8,fill:C.blue,w:700})+tbar(20,79,42,4.5)
  +K.card(83,56,65,36,10)+K.txt(131,70.4,"다음 글",{size:8,fill:C.blue,w:700,a:"end"})+K.icon("next",138,67.5,8,C.blue,2)+tbar(98,79,42,4.5);

// 고르는 순간 그 자리로 넘어가는 선택 상자
TH2["점프 메뉴"]=K=>K.card(20,6,120,26,8)+K.rect(20.6,6.6,118.8,24.8,{s:C.blue,sw:1.2,r:7.5})
  +K.txt(32,22.6,"바로 가기",{size:9,fill:C.sub})+K.icon("q22down",126,19,10,C.ink,2)
  +K.card(20,36,120,58,8)+K.rect(23,57,114,17,{f:C.blue,r:5})
  +["1장 시작","2장 설치","3장 사용"].map((s,i)=>K.txt(32,51+i*18,s,{size:8.5,fill:i===1?"#fff":C.ink,w:i===1?700:500})).join("")
  +K.icon("q22go",127,65.5,10,"#fff",2);

// 탭 바 마지막 칸(점 세 개)과 거기 모아 둔 메뉴
TH2["더보기 탭"]=K=>K.card(14,8,132,54,12)
  +[["settings","설정"],["bell","알림"],["chat","문의"]].map(([ic,s],i)=>{const y=17+i*18;
    return K.icon(ic,28,y,10,C.ink,1.6)+K.txt(40,y+3,s,{size:8.5})+K.icon("next",136,y,7,C.mute,2)+(i<2?K.line(14,y+9,146,y+9,{s:C.line,sw:.6}):"")}).join("")
  +K.rect(0,70,160,30,{f:C.sf,fx:"url(#b2lift)"})+K.line(0,70,160,70,{s:C.hair,sw:.6})
  +K.rect(128,72.5,28,25,{f:C.soft,r:8})
  +[["home","홈"],["search","검색"],["bookmark","저장"],["user","내 정보"],["q22dots","더보기"]].map(([ic,lb],i)=>{const on=i===4,x=18+i*31;
    return K.icon(ic,x,80.5,11,on?C.blue:C.mute,on?2.6:1.8)+K.txt(x,94.5,lb,{size:7,fill:on?C.blue:C.mute,w:on?700:500,a:"middle"})}).join("");
}
