// B2 그림: ov · in
(()=>{
const C=K.C;
const DIMC="rgba(30,36,70,.30)";          // 창 뒤를 덮는 막
const KEY="#F0F2F7";                     // 눌리지 않은 회색 면
const OFF="#D5DAE3";                     // 꺼진 스위치·빈 칸 선
const tri=(d,f=C.sf)=>`<path d="${d}" style="fill:${f}"/>`;           // 말풍선 꼬리
const tsp=(s,f,w)=>`<tspan style="fill:${f}"${w?` font-weight="${w}"`:""}>${s}</tspan>`;
const ring=(cx,cy,r,col)=>K.circ(cx,cy,r,{f:C.sf,s:col,sw:1.3});
const knob=(cx,cy,r,cls="")=>`<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:#fff" filter="url(#b2lift)"${cls?` class="${cls}"`:""}/>`;
// 블러·딤 짝: 같은 장면을 한쪽은 어둡게, 한쪽은 흐리게
const scene=()=>K.rect(14,12,62,42,{f:"#BFD3FF",r:10})+K.circ(118,32,20,{f:"#FFC6DC"})+K.rect(14,62,132,26,{f:"#CFE0FF",r:10})+K.circ(40,75,7,{f:"#FFE2A8"});

/* ───────── ov · 알림 · 창 ───────── */
TH2["팝업"]=K=>K.blk(14,10,132,16,8)+K.blk(14,74,132,16,8)
  +K.card(42,14,76,78,14)+K.rect(47,19,66,32,{f:C.blueSoft,r:10})+K.icon("sparkle",80,35,17,C.blue,1.6)+K.icon("x",106,26,7,C.sub,1.8)
  +K.txt(80,63,"쿠폰이 도착했어요",{size:7,w:700,a:"middle"})
  +K.rect(51,71,58,14,{f:C.blue,r:7})+K.txt(80,80.5,"받기",{size:7.5,fill:"#fff",w:700,a:"middle"});

TH2["모달"]=K=>K.blk(14,10,132,18,9)+K.blk(14,34,62,56,10)+K.blk(84,34,62,56,10)+K.rect(0,0,160,100,{f:DIMC})
  +K.card(38,18,84,64,14)+K.txt(48,34,"약관 동의",{size:8.5,w:700})+K.icon("x",112,31,8,C.sub,1.8)
  +K.bar(48,42,64)+K.bar(48,50,48)+K.rect(48,61,64,14,{f:C.blue,r:7})+K.txt(80,70.6,"동의하기",{size:7.5,fill:"#fff",w:700,a:"middle"})
  +K.fing(20,86)+K.circ(29,77,4.6,{f:"#fff",s:C.red,sw:1.3})+K.line(25.9,73.9,32.1,80.1,{s:C.red,sw:1.3});

TH2["토스트"]=K=>K.blk(16,14,128,22,11)+K.blk(16,42,128,22,11)
  +`<g class="b2a-toast">`+K.card(40,70,80,20,10,C.toast)+K.icon("check",56,80,10,C.toastInk,2)+K.txt(64,83,"저장했어요",{size:8,fill:C.toastInk,w:700})+`</g>`;

TH2["스낵바"]=K=>K.blk(16,12,128,22,11)+K.blk(16,40,128,20,10)
  +K.card(10,66,140,24,9,C.toast)+K.txt(21,81,"삭제했어요",{size:8,fill:C.toastInk})
  +K.rect(96,70,48,16,{f:C.blue,r:8})+K.txt(120,80.6,"실행 취소",{size:7.2,fill:"#fff",w:700,a:"middle"});

TH2["툴팁"]=K=>K.blk(16,10,128,16,8)+K.blk(16,82,128,10,5)
  +K.card(50,26,60,20,10,C.toast)+tri("M75 45.5L80 51l5-5.5z",C.toast)+K.txt(80,39.2,"찜하기",{size:8,fill:"#fff",w:700,a:"middle"})
  +K.card(66,56,28,24,12)+K.icon("heart",80,68,13,C.ink,1.7)+K.fing(95,81);

TH2["팝오버"]=K=>K.blk(16,10,94,20,10)+K.blk(16,36,30,54,10)
  +K.card(118,10,26,20,10)+K.icon("more",131,20,13,C.ink,2)
  +K.card(54,36,90,56,12)+tri("M123 36.4L130 30l7 6.4z")
  +K.icon("edit",67,49,10,C.ink,1.7)+K.txt(78,52,"수정",{size:8})+K.line(62,57,136,57,{s:C.line,sw:.6})
  +K.icon("share",67,65,10,C.ink,1.7)+K.txt(78,68,"공유",{size:8})+K.line(62,73,136,73,{s:C.line,sw:.6})
  +K.icon("trash",67,81,10,C.red,1.7)+K.txt(78,84,"삭제",{size:8,fill:C.red});

TH2["바텀시트"]=K=>K.blk(16,10,128,24,12)+`<g class="b2a-sdim">`+K.rect(0,0,160,100,{f:"rgba(30,36,70,.18)"})+`</g>`
  +`<g class="b2a-sheet">`+K.card(8,42,144,62,16)+K.rect(70,47,20,3,{f:C.mute,r:1.5,o:.6})
  +K.txt(22,65,"추천순",{size:8,fill:C.blue,w:700})+K.icon("check",138,62,10,C.blue,2.2)+K.line(22,73,138,73,{s:C.hair,sw:.6})+K.txt(22,85,"최신순",{size:8})+`</g>`;

TH2["드로어"]=K=>K.blk(16,10,128,20,10)+K.blk(16,36,128,54,12)+`<g class="b2a-ddim">`+K.rect(0,0,160,100,{f:"rgba(30,36,70,.18)"})+`</g>`
  +`<g class="b2a-drawer">`+K.card(-16,0,98,100,14)
  +K.circ(16,18,7,{f:C.blueSoft})+K.icon("user",16,18,9,C.blue,1.6)+K.txt(28,21,"홍길동",{size:8,w:700})
  +K.rect(6,34,68,17,{f:C.blueSoft,r:8.5})+K.icon("home",17,42.5,10,C.blue,1.8)+K.txt(28,45.5,"홈",{size:8,fill:C.blue,w:700})
  +K.icon("bookmark",17,62,10,C.ink,1.7)+K.txt(28,65,"저장",{size:8})
  +K.icon("settings",17,80,10,C.ink,1.6)+K.txt(28,83,"설정",{size:8})+`</g>`;

TH2["배너"]=K=>K.card(10,12,140,26,10)+K.rect(10,12,140,26,{f:C.blueSoft,r:10})
  +K.icon("bell",23,25,11,C.blue,1.7)+K.txt(33,28,"새 기능이 나왔어요",{size:8,fill:C.blue,w:700})+K.icon("x",138,25,8,C.sub,1.8)
  +K.blk(10,46,140,20,10)+K.blk(10,72,140,20,10);

TH2["푸시 알림"]=K=>K.icon("lock",80,10,8,C.ink,1.6)+K.txt(80,36,"9:41",{size:22,w:300,a:"middle"})
  +K.blk(22,82,116,12,6)
  +K.card(12,46,136,36,12)+K.rect(20,55,18,18,{f:C.blue,r:5})+K.icon("chat",29,64,10,"#fff",1.7)
  +K.txt(44,62,"새 메시지가 왔어요",{size:7.5,w:700})+K.txt(140,62,"지금",{size:7,fill:C.mute,a:"end"})+K.bar(44,68,64);

TH2["배지"]=K=>K.blk(30,86,100,8,4)
  +K.card(52,20,56,56,16)+K.icon("bell",80,48,26,C.ink,1.6)
  +K.circ(105,23,12,{f:"#fff"})+K.circ(105,23,10,{f:C.red})+K.txt(105,26.6,"3",{size:10,fill:"#fff",w:700,a:"middle"});

TH2["닷"]=K=>K.blk(30,86,100,8,4)
  +K.card(52,20,56,56,16)+K.icon("chat",80,48,24,C.ink,1.6)
  +K.circ(102,27,6.5,{f:"#fff"})+K.circ(102,27,4.6,{f:C.red});

TH2["코치마크"]=K=>K.blk(14,10,132,18,9)+K.blk(14,34,132,28,10)+K.blk(14,68,90,22,10)
  +`<path d="M0 0H160V100H0z M115 78a15 15 0 1 0 30 0a15 15 0 1 0-30 0z" style="fill:rgba(18,22,44,.52);fill-rule:evenodd"/>`
  +K.circ(130,78,10,{f:C.blue})+K.icon("plus",130,78,10,"#fff",2)+K.circ(130,78,15,{s:"#fff",sw:1.2})
  +K.card(18,58,92,24,12)+tri("M109.6 64.5L116 70l-6.4 5.5z")+K.txt(64,73.2,"여기서 추가해요",{size:8,w:700,a:"middle"});

TH2["딤"]=K=>scene()+K.rect(0,0,160,100,{f:"rgba(18,22,44,.50)"})
  +K.card(48,30,64,40,12)+K.bar(58,42,44,4.5,C.ink)+K.bar(58,52,34)+K.bar(58,59,40);

TH2["블러"]=K=>{const i=K.id();return `<filter id="b2bl${i}" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4.5"/></filter>`
  +`<g filter="url(#b2bl${i})">`+scene()+`</g>`+K.rect(0,0,160,100,{f:"rgba(255,255,255,.22)"})
  +K.card(48,30,64,40,12)+K.bar(58,42,44,4.5,C.ink)+K.bar(58,52,34)+K.bar(58,59,40)};

TH2["알럿"]=K=>K.blk(14,10,132,20,10)+K.blk(14,36,132,54,12)+K.rect(0,0,160,100,{f:DIMC})
  +K.card(36,16,88,70,14)+K.icon("alert",80,31,14,C.red,1.9)
  +K.txt(80,52,"연결이 끊겼어요",{size:8,w:700,a:"middle"})
  +K.rect(46,62,68,15,{f:C.blue,r:7.5})+K.txt(80,72.2,"확인",{size:7.5,fill:"#fff",w:700,a:"middle"});

TH2["컨펌"]=K=>K.blk(14,10,132,20,10)+K.blk(14,36,132,54,12)+K.rect(0,0,160,100,{f:DIMC})
  +K.card(34,18,92,66,14)+K.txt(80,38,"삭제할까요?",{size:9,w:700,a:"middle"})+K.bar(56,45,48)
  +K.rect(43,60,35,15,{f:KEY,r:7.5})+K.txt(60.5,70.2,"취소",{size:7.5,w:700,a:"middle"})
  +K.rect(82,60,35,15,{f:C.red,r:7.5})+K.txt(99.5,70.2,"삭제",{size:7.5,fill:"#fff",w:700,a:"middle"});

TH2["시스템 모달"]=K=>K.blk(14,10,132,20,10)+K.blk(14,36,132,54,12)+K.rect(0,0,160,100,{f:DIMC})
  +K.card(32,12,96,78,12,"#F4F5F8")+K.icon("bell",80,23,10,C.ink,1.6)
  +K.txt(80,40,"알림을 허용할까요?",{size:7.5,w:700,a:"middle"})+K.bar(50,46,60,3.5,"#DADEE6")
  +K.line(32,56,128,56,{s:"#D6D9E0",sw:.7})+K.txt(80,67,"허용 안 함",{size:7.5,fill:C.blue,a:"middle"})
  +K.line(32,73,128,73,{s:"#D6D9E0",sw:.7})+K.txt(80,84,"허용",{size:7.5,fill:C.blue,w:700,a:"middle"});

/* ───────── in · 입력 · 선택 ───────── */
const field=(x,y,w,h,{s="",sw=1.3}={})=>K.card(x,y,w,h,h/2>12?12:h/2)+(s?K.rect(x,y,w,h,{s,sw,r:h/2>12?12:h/2}):"");
const caret=(x,y1,y2)=>K.line(x,y1,x,y2,{s:C.blue,sw:1.3});

TH2["안내 문구"]=K=>K.txt(18,20,"아이디",{size:7,fill:C.sub})+field(16,25,128,24)+K.txt(28,40.5,"user01",{size:8.5})
  +K.txt(18,62,"영문, 숫자 4~12자",{size:8,fill:C.sub})+K.blk(16,74,128,16,8);

TH2["오류 문구"]=K=>K.blk(20,10,120,16,8)+K.blk(20,30,120,16,8)
  +K.card(20,52,120,18,9,C.blue)+K.txt(80,64,"로그인",{size:8,fill:"#fff",w:700,a:"middle"})
  +K.icon("alert",38,82,9,C.red,2)+K.txt(45,85,"비밀번호가 틀렸어요",{size:8,fill:C.red,w:700});

TH2["인라인 에러"]=K=>K.card(20,24,120,24,10)+K.rect(20,24,120,24,{s:C.red,sw:1.3,r:10})+K.txt(30,39.5,"abc@naver",{size:8.5})
  +K.icon("alert",25,60,8,C.red,2)+K.txt(32,62.8,"이메일 형식이 아니에요",{size:7.5,fill:C.red})
  +K.rect(20,74,120,16,{f:C.blk,r:8});

TH2["텍스트 필드"]=K=>K.blk(16,14,56,12,6)
  +field(16,36,128,26,{s:C.blue})+K.txt(28,52.5,"홍길동",{size:9})+caret(55.5,43,55)
  +K.blk(16,72,128,16,8);

TH2["텍스트 영역"]=K=>field(16,10,128,80,{s:C.blue})
  +K.txt(27,27,"배송이 정말 빨라요.",{size:8})+K.txt(27,40,"포장도 꼼꼼하고",{size:8})+K.txt(27,53,"색감이 사진이랑 같아요",{size:8})+caret(113.5,45.5,55.5)
  +K.line(131,84,138,77,{s:C.mute,sw:1.1})+K.line(135,84,138,81,{s:C.mute,sw:1.1});

TH2["플레이스홀더"]=K=>K.blk(16,14,56,12,6)
  +field(16,36,128,26)+caret(28,43,55)+K.txt(31,52.5,"이메일을 입력하세요",{size:8.5,fill:C.mute,w:400})
  +K.blk(16,72,128,16,8);

TH2["라벨"]=K=>K.txt(18,30,"이메일",{size:10,w:700})
  +field(16,36,128,26)+K.txt(28,52.5,"me@mail.com",{size:8.5,fill:C.sub})
  +K.blk(16,72,128,16,8);

TH2["플로팅 라벨"]=K=>K.blk(16,12,128,12,6)
  +field(16,32,128,34,{s:C.blue})+K.txt(28,44,"이메일",{size:7,fill:C.blue,w:700})+K.txt(28,58,"me@mail.com",{size:8.5})+caret(89,50,61)
  +K.blk(16,76,128,14,7);

TH2["자동완성"]=K=>field(16,8,128,22)+K.icon("search",28,19,9,C.sub,1.8)
  +K.txt(37,22.5,"부산"+tsp("대학교",C.mute),{size:8.5})
  +K.card(16,36,128,56,12)
  +K.txt(28,52,tsp("부산",C.blue,700)+"대학교",{size:8})+K.txt(28,68,tsp("부산",C.blue,700)+"역",{size:8})+K.txt(28,84,tsp("부산",C.blue,700)+" 맛집",{size:8});

TH2["인증번호 입력"]=K=>K.blk(16,10,72,12,6)
  +["4","8","1","","",""].map((d,i)=>{const x=16+i*22;return K.card(x,34,18,28,8)+(i===3?K.rect(x,34,18,28,{s:C.blue,sw:1.4,r:8})+caret(x+9,42,54):"")+(d?K.txt(x+9,53.5,d,{size:13,w:700,a:"middle"}):"")}).join("")
  +K.blk(16,74,128,12,6);

TH2["비밀번호 보기"]=K=>K.blk(16,12,56,12,6)
  +field(16,36,128,26)+K.txt(28,53.5,"••••••••",{size:10})
  +K.circ(128,49,10,{f:C.blueSoft})+K.icon("eye",128,49,13,C.blue,1.7)+K.fing(141,64)
  +K.blk(16,74,128,14,7);

TH2["지우기 버튼"]=K=>K.blk(16,12,56,12,6)
  +field(16,36,128,26)+K.txt(28,52.5,"무선 이어폰",{size:8.5})
  +K.circ(128,49,7,{f:"#B8BEC9"})+K.icon("x",128,49,7,"#fff",2)+K.fing(139,62)
  +K.blk(16,74,128,14,7);

TH2["글자 수 표시"]=K=>field(16,10,128,62)
  +K.txt(27,27,"오늘 산책하다가",{size:8})+K.txt(27,40,"예쁜 카페를 찾았어요",{size:8})+caret(105.5,32.5,42.5)
  +K.txt(144,88,tsp("38",C.blue)+" / 100",{size:9,w:700,a:"end",fill:C.sub});

TH2["숫자 키패드"]=K=>field(16,4,128,20)+K.txt(26,17.5,"010-1234",{size:8.5})+caret(65.5,9.5,19)
  +K.rect(0,29,160,71,{f:"#E3E7EF"})
  +["1","2","3","4","5","6","7","8","9","","0","del"].map((d,i)=>{const c=i%3,r=(i/3)|0,x=7+c*50,y=33+r*16.5;
    if(!d)return "";return K.rect(x,y,46,13.5,{f:d==="del"?"none":"#fff",r:5})+(d==="del"?K.icon("back",x+23,y+6.75,8,C.ink,1.8):K.txt(x+23,y+9.9,d,{size:8.5,a:"middle"}))}).join("");

TH2["필수 표시"]=K=>K.txt(18,28,"이름",{size:9,w:700})+K.txt(38,31,"*",{size:14,fill:C.red,w:700})
  +field(16,34,128,22)
  +K.txt(18,72,"별명 (선택)",{size:8,fill:C.sub})+K.blk(16,77,128,16,8);

TH2["강도 표시기"]=K=>field(16,14,128,26)+K.txt(28,31.5,"••••••••",{size:10})
  +[0,1,2,3].map(i=>K.rect(16+i*33,50,29,6,{f:i<3?C.green:C.skel,r:3})).join("")
  +K.txt(18,72,"안전해요",{size:8.5,fill:C.green,w:700})+K.blk(16,80,128,12,6);

TH2["데이트 피커"]=K=>{let o=K.card(22,4,116,92,14)+K.txt(32,18.5,"11월",{size:9,w:700})+K.icon("back",114,15.5,8,C.sub,1.8)+K.icon("next",126,15.5,8,C.sub,1.8);
  for(let n=1;n<=30;n++){const p=n+1,c=p%7,r=(p/7)|0,cx=34+c*15.3,cy=30.5+r*13;
    o+=n===18?K.circ(cx,cy,6.2,{f:C.blue})+K.txt(cx,cy+2.3,n,{size:7,fill:"#fff",w:700,a:"middle"}):K.txt(cx,cy+2.3,n,{size:7,fill:C.sub,a:"middle"})}
  return o};

TH2["휠 피커"]=K=>K.card(20,8,120,84,14)+K.rect(28,40,104,20,{f:KEY,r:9})
  +[["8월","15일",21,7,C.mute,.6],["9월","16일",34,7.5,C.sub,1],["10월","17일",53.5,10,C.ink,1],["11월","18일",70,7.5,C.sub,1],["12월","19일",83,7,C.mute,.6]]
   .map(([m,d,y,s,f])=>K.txt(62,y,m,{size:s,fill:f,w:s>9?700:400,a:"middle"})+K.txt(100,y,d,{size:s,fill:f,w:s>9?700:400,a:"middle"})).join("");

TH2["빠른 선택 칩"]=K=>K.blk(12,14,88,12,6)
  +K.card(12,38,40,22,11,C.blue)+K.txt(32,51.8,"오늘",{size:8,fill:"#fff",w:700,a:"middle"})
  +K.card(57,38,40,22,11)+K.txt(77,51.8,"내일",{size:8,a:"middle"})
  +K.card(102,38,48,22,11)+K.txt(126,51.6,"이번 주말",{size:7.5,a:"middle"})
  +K.blk(12,72,136,16,8);

TH2["기간 선택"]=K=>{const cx=c=>29+c*17,ry=[44,60,76];let o=K.card(14,12,132,78,14)+K.txt(24,28,"12월",{size:8.5,w:700});
  o+=K.rect(cx(2),ry[0]-6,cx(6)-cx(2)+12,12,{f:C.blueSoft})+K.rect(cx(0)-12,ry[1]-6,cx(2)-cx(0)+12,12,{f:C.blueSoft});
  for(let n=7;n<=27;n++){const i=n-7,c=i%7,r=(i/7)|0,x=cx(c),y=ry[r],end=n===9||n===16,mid=n>9&&n<16;
    o+=(end?K.circ(x,y,6.5,{f:C.blue}):"")+K.txt(x,y+2.2,n,{size:7,fill:end?"#fff":mid?C.blue:C.sub,w:end||mid?700:400,a:"middle"})}
  return o};

TH2["드롭다운"]=K=>K.blk(90,10,54,20,10)
  +K.card(16,10,66,20,10)+K.txt(27,23.5,"옵션",{size:8,w:700})+K.path("M64 22l4-4 4 4",{s:C.ink,sw:1.5})
  +K.card(16,34,96,58,12)+K.rect(20,38,88,16,{f:C.blueSoft,r:8})
  +K.txt(28,49,"공유하기",{size:8,fill:C.blue,w:700})+K.txt(28,67,"복사하기",{size:8})+K.txt(28,84,"신고하기",{size:8});

TH2["셀렉트"]=K=>K.txt(18,28,"지역",{size:7.5,fill:C.sub})
  +field(16,34,128,26)+K.txt(28,50.8,"서울특별시",{size:9,w:700})+K.path("M124 45l4 4 4-4",{s:C.ink,sw:1.6})
  +K.blk(16,70,128,16,8);

TH2["피커"]=K=>K.blk(16,8,128,20,10)+K.rect(0,0,160,100,{f:"rgba(30,36,70,.18)"})
  +K.card(4,34,152,72,16)+K.rect(70,38.5,20,3,{f:C.mute,r:1.5,o:.6})+K.txt(144,50,"완료",{size:8,fill:C.blue,w:700,a:"end"})
  +K.txt(80,55,"오전 9시",{size:7.5,fill:C.mute,a:"middle"})
  +K.rect(16,61,128,17,{f:KEY,r:8.5})+K.txt(80,73,"오전 10시",{size:9.5,w:700,a:"middle"})
  +K.txt(80,90,"오전 11시",{size:7.5,fill:C.mute,a:"middle"});

TH2["스테퍼"]=K=>K.blk(16,12,128,14,7)
  +K.card(34,36,92,32,16)+K.circ(52,52,11,{f:KEY})+K.line(47,52,57,52,{s:C.ink,sw:1.8})
  +K.txt(80,57,"2",{size:14,w:700,a:"middle"})
  +K.circ(108,52,11,{f:C.blue})+K.icon("plus",108,52,11,"#fff",2)
  +K.blk(16,78,128,12,6);

TH2["토글"]=K=>K.blk(16,10,128,14,7)+K.blk(16,78,128,14,7)
  +K.card(16,32,128,38,19)+K.txt(32,55,"알림",{size:9,w:700})
  +K.rect(98,40,36,22,{f:C.blue,r:11,cls:"b2a-tgt"})+knob(123,51,8.5,"b2a-tgk");

TH2["체크박스"]=K=>K.card(24,12,112,76,14)
  +[0,1,2].map(i=>{const y=30+i*20;return (i<2?K.rect(36,y-7,14,14,{f:C.blue,r:4})+K.icon("check",43,y,11,"#fff",2.2):K.rect(36,y-7,14,14,{f:C.sf,s:OFF,sw:1.4,r:4}))+K.bar(58,y-2.5,[56,44,50][i],5)}).join("");

TH2["라디오 버튼"]=K=>K.card(24,12,112,76,14)
  +[0,1,2].map(i=>{const y=30+i*20;return (i===1?ring(43,y,7,C.blue)+K.circ(43,y,3.6,{f:C.blue}):ring(43,y,7,OFF))+K.bar(58,y-2.5,[56,44,50][i],5)}).join("");

TH2["슬라이더"]=K=>K.blk(16,80,128,10,5)
  +K.card(76,20,32,20,10,C.blue)+tri("M88 39.5L92 44l4-4.5z",C.blue)+K.txt(92,33.5,"60",{size:9,fill:"#fff",w:700,a:"middle"})
  +K.rect(20,55,120,6,{f:"#fff",r:3})+K.rect(20,55,72,6,{f:C.blue,r:3})+knob(92,58,9);

TH2["세그먼트 컨트롤"]=K=>K.blk(16,12,80,14,7)
  +K.rect(16,36,128,28,{f:"#E3E7EF",r:14})+K.card(59.5,39,41,22,11)
  +K.txt(37.3,53.3,"일",{size:9,fill:C.sub,a:"middle"})+K.txt(80,53.3,"주",{size:9,w:700,a:"middle"})+K.txt(122.7,53.3,"월",{size:9,fill:C.sub,a:"middle"})
  +K.blk(16,74,128,16,8);

/* ───────── 움직임 ───────── */
B2CSS+=`
.b2a-toast,.b2a-sdim,.b2a-sheet,.b2a-ddim,.b2a-drawer,.b2a-tgk,.b2a-tgt{animation-duration:2.8s;animation-iteration-count:infinite;animation-timing-function:ease-out}
.b2a-toast{animation-name:b2a-toast}
@keyframes b2a-toast{0%,8%{opacity:0;transform:translateY(12px)}28%,76%{opacity:1;transform:none}92%,100%{opacity:0;transform:none}}
.b2a-sdim,.b2a-ddim{animation-name:b2a-fade}
@keyframes b2a-fade{0%,8%{opacity:0}36%,80%{opacity:1}96%,100%{opacity:0}}
.b2a-sheet{animation-name:b2a-sheet}
@keyframes b2a-sheet{0%,8%{transform:translateY(64px)}36%,80%{transform:none}96%,100%{transform:translateY(64px)}}
.b2a-drawer{animation-name:b2a-drawer}
@keyframes b2a-drawer{0%,8%{transform:translateX(-90px)}36%,80%{transform:none}96%,100%{transform:translateX(-90px)}}
.b2a-tgk{animation-name:b2a-tgk}
@keyframes b2a-tgk{0%,25%{transform:translateX(-14px)}40%,85%{transform:none}100%{transform:translateX(-14px)}}
.b2a-tgt{animation-name:b2a-tgt}
@keyframes b2a-tgt{0%,25%{fill:${OFF}}40%,85%{fill:var(--acc)}100%{fill:${OFF}}}
@media (prefers-reduced-motion:reduce){.b2a-toast,.b2a-sdim,.b2a-sheet,.b2a-ddim,.b2a-drawer,.b2a-tgk,.b2a-tgt{animation:none}}
`;
})();
