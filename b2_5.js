// B2 그림: st · ty · ps
// st·ty 의 질감·글자 견본(SAMPLE)은 그대로 CSS 견본으로 두고 바탕만 B2 그라데이션으로 맞춘다.
// SVG 로 그리는 것: 디자인 토큰 + ps 12개.
(()=>{
const C=K.C, W="#FFFFFF";
const btn=(x,y,w,h,s,{f=C.blue,ink=W,size=8}={})=>K.rect(x,y,w,h,{f,r:h/2})+K.txt(x+w/2,y+h/2+size*.36,s,{size,fill:ink,w:700,a:"middle"});

// ── st ──
TH2["디자인 토큰"]=K=>K.card(14,16,84,68,12)
  +K.rect(19,60,74,18,{f:C.soft,r:9})
  +[["배경색",W],["글자색",C.ink],["포인트색",C.blue]].map(([n,c],i)=>{const y=31+i*19;
    return K.rect(25,y-6,12,12,{f:c,s:C.line,sw:.6,r:4})+K.txt(43,y+2.8,n,{size:7.5,fill:C.ink,w:i===2?700:500})}).join("")
  +K.path("M86 69C98 69 96 50 106 50",{s:C.blue,sw:1.2})
  +K.card(106,40,42,20,10,C.blue)+K.txt(127,53,"버튼",{size:7.5,fill:W,w:700,a:"middle"});

// ── ps ──
TH2["앵커링 효과"]=K=>K.card(14,16,132,68,14)
  +K.rect(22,24,46,52,{f:C.skel,r:9})+K.icon("image",45,50,16,C.mute,1.4)
  +K.txt(78,38,"49,000원",{size:8,fill:C.mute})+K.line(77,35.3,111,35.3,{s:C.mute,sw:1})
  +K.txt(78,57,"19,900원",{size:13,fill:C.ink,w:700})
  +K.rect(78,64,28,11,{f:"rgba(229,72,77,.12)",r:5.5})+K.txt(92,72,"−59%",{size:7,fill:C.red,w:700,a:"middle"});

TH2["타협 효과"]=K=>{
  const side=(x,l,p)=>K.card(x,32,36,44,10)+K.txt(x+18,52,l,{size:11,fill:C.mute,w:700,a:"middle"})+K.txt(x+18,66,p,{size:7,fill:C.mute,a:"middle"});
  return side(16,"S","9,900")+side(108,"L","49,900")
    +K.card(60,22,40,60,12)+K.rect(60,22,40,60,{s:C.blue,sw:1.4,r:12})
    +K.txt(80,48,"M",{size:14,fill:C.ink,w:700,a:"middle"})+K.txt(80,64,"19,900",{size:7,fill:C.ink,w:700,a:"middle"})
    +K.circ(80,22,6.5,{f:C.blue})+K.icon("check",80,22,8,W,2.4)};

TH2["손실 회피"]=K=>K.blk(16,12,128,16,8)
  +K.card(16,34,128,54,14)
  +K.icon("alert",31,52,12,C.red,1.8)+K.txt(42,56,"−3,000P",{size:12,fill:C.red,w:700})+K.txt(98,55.5,"오늘 소멸",{size:7,fill:C.sub})
  +btn(28,66,104,14,"지금 쓰기",{size:7.5});

TH2["기본값 효과"]=K=>{
  const box=(y)=>K.rect(28,y-6,12,12,{f:C.blue,r:3.5})+K.icon("check",34,y,9,W,2.4);
  return K.card(18,14,124,72,14)
    +box(30)+K.txt(46,32.8,"필수 약관 동의",{size:7.5,fill:C.sub})
    +K.rect(23,40,114,18,{f:C.soft,r:9})+box(49)+K.txt(46,51.8,"마케팅 수신 동의",{size:7.5,fill:C.ink,w:700})
    +btn(28,66,104,13,"가입하기",{size:7})};

TH2["가변 보상"]=K=>K.card(24,32,112,60,14)
  +K.rect(32,40,18,18,{f:C.blue,r:6})+K.txt(41,53,"?",{size:11,fill:W,w:700,a:"middle"})
  +K.bar(56,44,52,4.5,C.ink)+K.bar(56,52,32)+K.icon("sparkle",124,49,10,C.blue,1.6)
  +K.line(32,66,128,66,{s:C.hair,sw:.6})
  +K.rect(32,72,18,14,{f:C.skel,r:5})+K.bar(56,75,44)+K.bar(56,82,28)
  +K.card(70,6,20,20,10)+K.icon("refresh",80,16,11,C.blue,1.8);

TH2["다크패턴"]=K=>K.blk(16,12,128,14,7)
  +K.card(18,32,124,56,14)
  +btn(28,42,104,20,"계속 구독하기",{size:8.5})
  +K.txt(80,77,"해지",{size:5,fill:"#B9BFCA",a:"middle"});

TH2["숨은 해지"]=K=>K.card(18,10,124,80,14)
  +[24,40,56].map((y,i)=>K.bar(30,y-2,[50,40,58][i],4.5)+K.icon("next",132,y,7,C.mute,1.6)+(i<2?K.line(30,y+8,134,y+8,{s:C.hair,sw:.6}):"")).join("")
  +K.circ(114,74,11,{f:"rgba(255,255,255,.75)",s:C.ink,sw:1.6})+K.txt(114,77,"해지",{size:8,fill:C.ink,w:700,a:"middle"})
  +K.line(122,82,131,91,{s:C.ink,sw:2.4});

TH2["가짜 마감 시계"]=K=>K.card(22,16,116,68,14)
  +K.txt(80,35,"마감까지",{size:7.5,fill:C.sub,a:"middle"})
  +K.txt(80,57,"00:09:59",{size:16,fill:C.red,w:700,a:"middle"})
  +K.rect(66,64,28,12,{f:"rgba(229,72,77,.10)",r:6})+K.icon("refresh",80,70,8,C.red,2);

TH2["죄책감 버튼"]=K=>K.card(18,14,124,72,14)
  +btn(28,28,104,20,"쿠폰 받기",{size:8.5})
  +K.txt(80,67,"아니요, 손해 볼래요",{size:7.5,fill:C.sub,a:"middle"})+K.line(46,70,114,70,{s:C.mute,sw:.6});

TH2["사용자 인터뷰"]=K=>K.card(116,10,32,13,6.5)+K.circ(125,16.5,2.6,{f:C.red})+K.txt(130,19,"REC",{size:7,fill:C.ink,w:700})
  +K.card(14,28,84,22,11,C.blue)+K.txt(56,42.5,"왜 그랬어요?",{size:8,fill:W,w:700,a:"middle"})
  +K.card(56,58,90,30,12)+K.bar(66,66,64,4.5,C.ink)+K.bar(66,75,44);

TH2["퍼널 분석"]=K=>K.card(14,10,132,80,14)
  +[[100,1],[62,1],[18,0],[9,1]].map(([v,ok],i)=>{const w=Math.max(8,v*.9),y=20+i*16;
    return K.rect(72-w/2,y,w,11,{f:ok?C.blue:C.red,r:4,o:ok?[1,.75,0,.4][i]:1})+K.txt(138,y+8.2,String(v),{size:7.5,fill:ok?C.sub:C.red,w:ok?500:700,a:"end"})}).join("");

TH2["A/B 테스트"]=K=>{
  const scr=(x,l,b)=>K.card(x,14,56,66,10)
    +K.rect(x+7,24,42,22,{f:C.skel,r:6})+K.bar(x+7,51,34)+K.bar(x+7,58,24)
    +K.rect(x+7,64,42,10,{f:b?C.blue:"#C9CED6",r:5})
    +K.circ(x+28,14,7,{f:b?C.blue:C.ink})+K.txt(x+28,17.2,l,{size:8.5,fill:W,w:700,a:"middle"});
  return scr(18,"A",0)+scr(86,"B",1)
    +K.card(30,77,32,13,6.5)+K.txt(46,86,"3.1%",{size:7,fill:C.sub,a:"middle"})
    +K.card(98,77,32,13,6.5,C.green)+K.txt(114,86,"4.8%",{size:7,fill:W,w:700,a:"middle"})};
})();

// st·ty 견본(SAMPLE): 바탕만 B2 그라데이션으로. 견본이 바탕을 덮는 것(.smbg)은 그대로 덮는다.
// 바탕이 늘 밝으므로 견본 안 글자색(var(--fg))은 어두운 화면에서도 진한 색으로 고정
B2CSS+=`.th.thc{background:linear-gradient(135deg,#E6EEFF,#F1EEFF 55%,#FBF4FA);--fg:#12141A;color:#12141A}`;
