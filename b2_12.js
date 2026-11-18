// B2 그림 추가분 12: ct · in · nv · ov (로딩 버튼 ~ PIP)
// 움직이는 부분은 class="b2x12 b2a-n12…". transform 속성이 있는 요소에는 클래스를 직접 달지 않고 겉 g 로 감싼다.
{
const C=K.C, n2=K.n2;
const A=(c,inner)=>`<g class="b2x12 b2a-${c}">${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x12{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);

const DARK="#3A4050";                    // 진한 제목 줄
const KEY="#F0F2F7";                     // 눌리지 않은 회색 면
const OFF="#D5DAE3";                     // 빈 칸 선
const DIM="rgba(30,36,70,.18)";
const DIMD="rgba(18,22,44,.48)";
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:DARK,r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const btxt=(x,y,s,size=8.5)=>K.txt(x,y,s,{size,fill:"#fff",w:700,a:"middle"});
const knob=(cx,cy,r)=>`<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:#fff" filter="url(#b2lift)"/>`;
const caret=(x,y1,y2)=>K.line(x,y1,x,y2,{s:C.blue,sw:1.3});
const ring=(x,y,w,h,r)=>K.rect(x,y,w,h,{s:C.blue,sw:1.4,r});
const tri=(d,f)=>`<path d="${d}" style="fill:${f}"/>`;
const tsp=(s,fill,w)=>`<tspan style="fill:${fill}"${w?` font-weight="${w}"`:""}>${s}</tspan>`;
const fillIcon=(n,cx,cy,size,f)=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})"><path d="${[].concat(K.ICON[n])[0]}" style="fill:${f};stroke:none"/></g>`};
// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r)=>{const i=K.id(),g="b212p"+i,c="b212c"+i;
  return `<defs>${K.grad(g,[[0,"#AFC6FF"],[1,"#E5C8F3"]],0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.3,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:#6A86E8"/></g>`};
// 체크박스
const cbox=(x,y,on)=>on?K.rect(x,y,12,12,{f:C.blue,r:3.5})+K.icon("check",x+6,y+6,9.5,"#fff",2.2):K.rect(x,y,12,12,{f:C.sf,s:OFF,sw:1.3,r:3.5});
// 도는 동그라미 (바탕 고리 + 4분의 1 호)
const spin=(cx,cy,r,sw,track,col)=>A("n12spin",K.circ(cx,cy,r,{s:track,sw})+K.path(`M${cx} ${cy-r}a${r} ${r} 0 0 1 ${r} ${r}`,{s:col,sw}));
kf("n12spin",2.4,"0%{transform:rotate(0deg)}100%{transform:rotate(720deg)}","animation-timing-function:linear;");
// 뒤에 깔리는 화면
const scene=()=>K.blk(14,8,132,18,9)+K.blk(14,32,62,60,10)+K.blk(84,32,62,60,10);

Object.assign(K.ICON,{
  q12down:"M6 9l6 6 6-6",
  q12pause:["M9 6v12","M15 6v12"],
  q12skip:["M6 6l9 6-9 6z","M18 6v12"],
  q12shield:["M12 3l7 3v5.5c0 4.5-3 7.8-7 9.5-4-1.7-7-5-7-9.5V6z","M9 12l2.2 2.2L15 10.5"],
  q12expand:["M14 4h6v6","M20 4l-7 7","M10 20H4v-6","M4 20l7-7"],
  q12smile:["M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z","M8.5 14c1 1.5 2.2 2 3.5 2s2.5-.5 3.5-2","M9 10v.01","M15 10v.01"],
});

/* ───────── ct · 버튼 ───────── */
// 버튼 안에서 동그라미가 돎 (스피너는 버튼 밖 혼자)
TH2["로딩 버튼"]=K=>K.blk(20,12,120,14,7)+K.blk(44,80,72,8,4)
  +K.card(24,34,112,32,16,C.blue)+spin(58,50,7,2.4,"rgba(255,255,255,.35)","#fff")
  +K.txt(72,54,"저장 중",{size:11,fill:"#fff",w:700});

// 사람 옆에 붙는 버튼: 팔로우 → 팔로잉
TH2["팔로우 버튼"]=K=>K.card(10,10,140,80,14)
  +K.circ(29,31,10,{f:"#CFE0FF"})+K.icon("user",29,31,11,C.blue,1.7)+tbar(46,25,32,5)+gbar(46,34,22,3.5)
  +K.rect(90,20,50,22,{f:C.blue,r:11})+btxt(115,34.2,"팔로우",9)
  +K.line(10,50,150,50,{s:C.line,sw:.6})
  +K.circ(29,69,10,{f:"#FFE1C7"})+K.icon("user",29,69,11,"#D9822B",1.7)+tbar(46,63,26,5)+gbar(46,72,30,3.5)
  +K.rect(90,58,50,22,{f:C.sf,s:OFF,sw:1.2,r:11})+K.txt(115,72.2,"팔로잉",{size:9,fill:C.sub,w:700,a:"middle"});

// 아이콘 + 글자가 한 버튼 안에 (아이콘 버튼은 글자 없음)
TH2["아이콘 텍스트 버튼"]=K=>
   K.card(22,16,116,30,15,C.blue)+K.icon("download",57,31,13,"#fff",2)+K.txt(69,35,"내려받기",{size:10.5,fill:"#fff",w:700})
  +K.card(22,54,116,30,15)+K.icon("share",67,68.5,13,C.ink,1.8)+K.txt(79,73,"공유",{size:10.5,w:700});

/* ───────── in · 입력 · 선택 ───────── */
// 자물쇠 + 점으로 가려진 글자 (비밀번호 보기는 눈 버튼이 주인공)
TH2["비밀번호 필드"]=K=>K.txt(16,26,"비밀번호",{size:8,fill:C.sub,w:700})
  +K.card(12,33,136,34,12)+ring(12,33,136,34,12)+K.icon("lock",30,49.5,14,C.sub,1.7)
  +[0,1,2,3,4,5].map(i=>K.circ(48+i*11,50,3.2,{f:C.ink})).join("")+caret(112,41,59)
  +K.blk(12,78,90,8,4);

// 맨 위 칸은 체크 대신 가로줄, 아래는 일부만 체크
TH2["부분 선택 체크박스"]=K=>K.card(24,6,112,88,14)
  +K.rect(36,15,14,14,{f:C.blue,r:4})+K.line(39.6,22,46.4,22,{s:"#fff",sw:2.2})+K.txt(58,25.5,"전체 선택",{size:9.5,w:700})
  +K.line(24,37,136,37,{s:C.line,sw:.6})
  +[["사과",1],["포도",0],["귤",1]].map(([s,on],i)=>{const y=43+i*17;return cbox(48,y,on)+K.txt(68,y+9.4,s,{size:8.5})}).join("");

// 얼굴 · 하트 · 별이 바둑판으로, 아래엔 종류 줄
TH2["이모지 피커"]=K=>{const BR="#5A3A0A";
  const face=(cx,cy,k)=>{let o=K.circ(cx,cy,8,{f:"#FFCB45"});
    const eyes=K.circ(cx-2.9,cy-1.8,1.15,{f:BR})+K.circ(cx+2.9,cy-1.8,1.15,{f:BR});
    const smile=K.path(`M${cx-3.4} ${cy+1.8}q3.4 3.6 6.8 0`,{s:BR,sw:1.2});
    if(k===0)o+=eyes+smile;
    if(k===1)o+=eyes+`<path d="M${cx-4} ${cy+1.2}h8a4 4 0 0 1-8 0z" style="fill:${BR}"/>`;
    if(k===2)o+=K.circ(cx-2.9,cy-1.8,1.15,{f:BR})+K.line(cx+1.6,cy-1.8,cx+4.2,cy-1.8,{s:BR,sw:1.2})+smile;
    if(k===3)o+=K.circ(cx-3,cy-1.6,2,{f:C.red})+K.circ(cx+3,cy-1.6,2,{f:C.red})+smile;
    if(k===4)o+=K.rect(cx-6.4,cy-3.6,12.8,3.8,{f:"#2A2D36",r:1.6})+smile;
    if(k===5)o+=eyes+K.path(`M${cx-3} ${cy+4.4}q3-3.2 6 0`,{s:BR,sw:1.2});
    if(k===6)o+=eyes+K.circ(cx,cy+3,1.9,{f:BR});
    return o};
  const X=i=>36+i*22;
  return K.card(20,4,120,92,14)
   +K.rect(28,10,104,14,{f:KEY,r:7})+K.icon("search",37,17,8,C.mute,1.8)
   +K.rect(X(1)-10.5,27.5,21,21,{f:C.blueSoft,r:7})
   +[0,1,2,3,4].map(i=>face(X(i),38,i)).join("")
   +face(X(0),60,5)+face(X(1),60,6)+fillIcon("heart",X(2),60,18,C.red)+fillIcon("star",X(3),60,18,C.amber)+fillIcon("sparkle",X(4),60,18,"#9B6BFF")
   +K.line(20,73,140,73,{s:C.line,sw:.6})
   +K.icon("q12smile",X(0),83,10,C.blue,1.8)+K.icon("heart",X(1),83,10,C.mute,1.7)+K.icon("star",X(2),83,10,C.mute,1.7)+K.icon("home",X(3),83,10,C.mute,1.7)+K.icon("bell",X(4),83,10,C.mute,1.7)
   +K.rect(X(0)-7,90.5,14,2.4,{f:C.blue,r:1.2})};

// @ 를 치면 사람 목록이 뜸 (자동완성은 검색어, 여긴 사람)
TH2["멘션"]=K=>K.card(16,5,128,58,12)+K.rect(20,9,120,23,{f:C.blueSoft,r:8})
  +K.circ(34,20.5,7.5,{f:"#CFE0FF"})+K.icon("user",34,20.5,8.5,C.blue,1.6)+K.txt(48,23.7,"민지",{size:9,fill:C.blue,w:700})+K.txt(74,23.5,"@minji",{size:7.5,fill:C.sub})
  +K.circ(34,46.5,7.5,{f:"#FFE1C7"})+K.icon("user",34,46.5,8.5,"#D9822B",1.6)+K.txt(48,49.7,"민수",{size:9,w:700})+K.txt(74,49.5,"@minsu",{size:7.5,fill:C.sub})
  +K.card(12,68,136,26,13)+ring(12,68,136,26,13)
  +K.txt(46,85,"@민",{size:10.5,fill:C.blue,w:700,a:"end"})+caret(48.5,74.5,87.5);

// 글 속에 # 붙인 낱말이 파랗게 (태그 입력은 칩으로 쌓임)
TH2["해시태그 입력"]=K=>K.card(12,8,136,40,12)+ring(12,8,136,40,12)
  +K.txt(94,32,"오늘 "+tsp("#여행 #맛",C.blue,700),{size:10,a:"end"})+caret(96.5,21.5,37.5)
  +K.card(12,54,136,40,12)+K.rect(16,58,128,15,{f:C.blueSoft,r:7})
  +K.txt(24,68.8,"#맛집",{size:8.5,fill:C.blue,w:700})+K.txt(136,68.6,"1.2만",{size:7.5,fill:C.sub,a:"end"})
  +K.txt(24,86,"#맛스타그램",{size:8.5})+K.txt(136,85.8,"8천",{size:7.5,fill:C.sub,a:"end"});

// 결과마다 우편번호 + 도로명 주소
TH2["주소 검색"]=K=>K.card(12,5,136,24,12)+ring(12,5,136,24,12)
  +K.icon("search",27,17,10,C.ink,1.9)+K.txt(38,20.6,"판교역로",{size:9,w:700})+caret(78,11,23)
  +K.card(12,33,136,62,12)+K.line(12,64,148,64,{s:C.line,sw:.6})
  +[["13529","판교역로 166"],["13494","판교역로 235"]].map(([z,a],i)=>{const y=33+i*31;
    return K.rect(22,y+6,30,11,{f:C.blueSoft,r:5.5})+K.txt(37,y+14.3,z,{size:7.5,fill:C.blue,w:700,a:"middle"})
     +K.txt(58,y+14.7,a,{size:8.5,w:700})+K.txt(22,y+26,"지번",{size:7,fill:C.mute})+gbar(39,y+21,[72,60][i],3.5)}).join("");

// 점선 위에 손으로 그린 서명
TH2["서명 패드"]=K=>K.card(14,8,132,84,14)+K.rect(22,16,116,52,{f:"#F7F8FC",r:8})
  +`<line x1="32" y1="57" x2="128" y2="57" style="stroke:#C5CBD8;stroke-width:1" stroke-dasharray="3 3"/>`
  +K.icon("x",36,51,6,C.mute,1.6)
  +K.path("M46 52c4-14 9-25 12-23 4 3-8 26-3 26 5 0 8-16 12-16 3 0 0 12 4 12 5 0 6-12 10-12 3 0 1 10 5 10 6 0 10-8 16-12 4-2 9-3 14-1",{s:C.ink,sw:1.9})
  +K.txt(24,83.4,"지우기",{size:8,fill:C.sub,w:700})
  +K.rect(100,73,38,14,{f:C.blue,r:7})+btxt(119,82.8,"완료",8);

// 정해진 틀: 줄표는 미리 있고 빈 자리는 밑줄
TH2["마스크 입력"]=K=>K.txt(14,25,"전화번호",{size:8,fill:C.sub,w:700})
  +K.card(10,32,140,36,12)+ring(10,32,140,36,12)
  +"010-1234-5678".split("").map((ch,i)=>{const x=26+i*9;
    if(i<6)return K.txt(x,54.4,ch,{size:12,w:700,a:"middle"});
    return ch==="-"?K.txt(x,54.4,"-",{size:12,fill:C.mute,w:700,a:"middle"}):K.line(x-3,57.5,x+3,57.5,{s:"#C5CBD8",sw:1.6})}).join("")
  +caret(76.3,41,59)
  +K.blk(10,78,84,8,4);

// 손잡이를 끝까지 밀면 색이 따라 참
TH2["밀어서 확인"]=K=>{const c="b212s"+K.id();
  return K.blk(20,12,120,12,6)+K.blk(44,78,72,8,4)
   +`<defs><clipPath id="${c}"><rect x="14" y="34" width="132" height="32" rx="16"/></clipPath></defs>`
   +K.card(14,34,132,32,16)+K.txt(92,53.6,"밀어서 결제",{size:9.5,fill:C.sub,w:700,a:"middle"})
   +`<g clip-path="url(#${c})">`
   +A("n12slide",K.rect(-110,34,140,32,{f:C.blue})+K.circ(30,50,16,{f:C.blue})+K.circ(30,50,12.5,{f:"#fff"})+K.icon("next",30.5,50,13,C.blue,2.4))
   +`</g>`};
kf("n12slide",3,"0%,14%{transform:translateX(0px)}58%,84%{transform:translateX(100px)}96%,100%{transform:translateX(0px)}");

// 빈 체크 칸 + 사람 확인 문구 (서비스 표시는 중립 방패)
TH2["캡차"]=K=>K.blk(16,8,96,10,5)+K.blk(16,84,60,8,4)
  +K.card(10,24,140,52,10)
  +K.rect(21,38,24,24,{f:C.sf,s:"#B9C0CE",sw:1.6,r:5})
  +K.txt(52,53.2,"로봇이 아닙니다",{size:9,w:700})
  +K.icon("q12shield",136,50,16,C.mute,1.6);

/* ───────── nv · 내비게이션 ───────── */
// 탭 줄이 화면 밖으로 이어지고 옆으로 밀림 (탭은 한 화면에 다 들어옴)
TH2["스크롤 탭"]=K=>{const g="b212f"+K.id();
  return K.blk(12,6,80,12,6)+K.blk(12,68,64,40,10)+K.blk(84,68,64,40,10)
   +`<defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient></defs>`
   +K.card(-6,26,172,34,0)
   +A("n12tabs",["전체","인기","신상","할인","특가","브랜드","기획전"].map((s,i)=>K.txt(22+i*38,46.6,s,{size:9.5,fill:i===1?C.blue:C.sub,w:i===1?700:500,a:"middle"})).join("")
     +K.rect(48,56.5,24,3,{f:C.blue,r:1.5}))
   +K.rect(132,27,28,32,{f:`url(#${g})`})};
kf("n12tabs",3,"0%,14%{transform:translateX(0px)}50%,62%{transform:translateX(-58px)}92%,100%{transform:translateX(0px)}");

// 바닥 · 양옆에서 떨어져 떠 있는 어두운 알약, 위 · 옆 · 아래로 내용이 보이고 뒤로 지나감 (탭 바는 바닥의 흰 줄)
TH2["플로팅 탭 바"]=K=>A("n12fl",[-58,-6,46,98,150].map(y=>K.blk(12,y,64,46,12)+K.blk(84,y,64,46,12)).join(""))
  +K.card(30,56,100,28,14,C.toast)
  +K.rect(35,60,30,20,{f:C.blue,r:10})+K.icon("home",50,70,12,"#fff",1.9)
  +K.icon("search",78,70,12,"#B8BECA",1.8)+K.icon("bookmark",98,70,12,"#B8BECA",1.8)+K.icon("user",118,70,12,"#B8BECA",1.8);
kf("n12fl",3,"0%,8%{transform:translateY(0px)}92%,100%{transform:translateY(-52px)}","animation-timing-function:linear;");

// 메뉴 줄의 이름을 누르면 아래로 하위 메뉴 (드롭다운은 값 고르기)
TH2["드롭다운 메뉴"]=K=>K.card(-4,-6,168,32,0)
  +K.circ(14,13,5,{f:C.ink})+K.txt(30,16.3,"제품",{size:8.5,fill:C.blue,w:700})+K.icon("q12down",55,13,8,C.blue,2)
  +K.txt(72,16.3,"가격",{size:8.5,fill:C.sub})+K.txt(100,16.3,"소개",{size:8.5,fill:C.sub})
  +K.card(24,31,100,64,10)+K.rect(28,35,92,18,{f:C.blueSoft,r:7})
  +[["grid","기능",C.blue],["sparkle","새 소식",C.ink],["chat","문의",C.ink]].map(([ic,s,col],i)=>{const y=35+i*19.5;
    return K.icon(ic,40,y+9,10,col,1.7)+K.txt(53,y+12.1,s,{size:8.5,fill:col,w:i?500:700})}).join("");

// 동그란 아이콘 + 이름이 바둑판으로
TH2["퀵 메뉴 그리드"]=K=>K.card(8,6,144,88,14)
  +[["cart","장보기","#E3ECFF","#2F6BFF"],["heart","찜","#FFE3EA","#E5484D"],["star","혜택","#FFF0D2","#D98A12"],["calendar","예약","#DDF5E8","#1FA971"],
    ["bell","알림","#ECE4FF","#7B55E0"],["chat","문의","#DAF3F5","#1A98A6"],["bookmark","저장","#FFE8D8","#E0702A"],["grid","전체",KEY,C.sub]]
   .map(([ic,s,bg,fg],i)=>{const cx=n2(30+(i%4)*33.3),cy=26+Math.floor(i/4)*40;
    return K.rect(cx-11.5,cy-11.5,23,23,{f:bg,r:8.5})+K.icon(ic,cx,cy,13,fg,1.8)+K.txt(cx,cy+22,s,{size:7.5,a:"middle"})}).join("");

// 위쪽 링크를 누르면 같은 페이지의 그 제목 자리로 (제목 옆 고리 표시)
TH2["앵커 링크"]=K=>K.card(12,6,136,88,14)
  +[["소개",26],["가격",58],["후기",90]].map(([s,x],i)=>K.txt(x,24,s,{size:8.5,fill:C.blue,w:i===1?700:500})+K.line(x,27.2,x+17,27.2,{s:C.blue,sw:i===1?1.3:.8})).join("")
  +K.line(12,35,148,35,{s:C.line,sw:.6})
  +gbar(24,43,88,3.5)
  +K.icon("link",31,61,13,C.blue,1.9)+K.txt(43,66,"가격",{size:13,w:800})
  +gbar(24,75,112)+gbar(24,83.5,82);

// 내용이 올라가도 메뉴 줄은 맨 위에 걸려 멈춤 (스티키 헤더는 제목 줄)
// 기본(정지) 모습 = 이미 맨 위에 걸린 상태: 내용 블록이 메뉴 줄 밑으로 반쯤 들어가 있다. 움직일 땐 처음 자리로 돌아갔다가 다시 올라와 걸린다.
TH2["스티키 내비"]=K=>
   A("n12sc",K.blk(12,-42,136,22,10)+[12,36,60,84,108].map(y=>K.blk(12,y,136,20,10)).join(""))
  +A("n12sn",K.card(-4,-4,168,28,0)
    +K.txt(34,15.4,"상품",{size:8.5,fill:C.sub,a:"middle"})+K.txt(80,15.4,"리뷰",{size:8.5,fill:C.blue,w:700,a:"middle"})+K.txt(126,15.4,"문의",{size:8.5,fill:C.sub,a:"middle"})
    +K.rect(66,21,28,3,{f:C.blue,r:1.5}));
kf("n12sc",3.4,"0%,10%{transform:translateY(0px)}18%,30%{transform:translateY(46px)}72%,100%{transform:translateY(0px)}","animation-timing-function:linear;");
kf("n12sn",3.4,"0%,12.8%{transform:translateY(0px)}18%,30%{transform:translateY(30px)}57.4%,100%{transform:translateY(0px)}","animation-timing-function:linear;");

// 맨 아래 어두운 면에 묶음별 링크 줄 (푸터는 저작권 · 로고까지 전부)
TH2["푸터 내비"]=K=>K.blk(12,6,136,22,10)
  +K.card(0,36,160,70,0,"#1F2329")
  +[["회사",["소개","채용"],16],["지원",["문의","도움말"],64],["약관",["이용약관","개인정보"],110]].map(([t,ls,x])=>
     K.txt(x,53,t,{size:8.5,fill:"#fff",w:700})+ls.map((s,j)=>K.txt(x,67+j*13,s,{size:7.5,fill:"rgba(255,255,255,.7)"})).join("")).join("");

/* ───────── ov · 알림 · 창 ───────── */
// 제목 · 닫기 · 입력 · 버튼을 갖춘 작은 창
TH2["다이얼로그"]=K=>scene()+K.rect(0,0,160,100,{f:DIM})
  +K.card(24,12,112,76,14)+K.txt(36,30,"이름 바꾸기",{size:9.5,w:700})+K.icon("x",124,26.5,9,C.sub,1.8)
  +K.rect(36,38,88,18,{f:C.sf,s:C.blue,sw:1.3,r:7})+K.txt(43,50.2,"새 폴더",{size:8.5})+caret(75,42,52)
  +K.txt(84,75,"취소",{size:8.5,fill:C.sub,w:700,a:"middle"})
  +K.rect(98,64,28,16,{f:C.blue,r:8})+btxt(112,75,"저장",8.5);

// 글 사이에 낀 색 상자 (배너는 화면 위 띠, 알럿은 뜨는 창)
TH2["인라인 알림"]=K=>K.card(10,4,140,92,14)+tbar(22,14,50,5)+gbar(22,24,116)
  +K.rect(22,34,116,36,{f:"#FFF5DD",r:8})+K.rect(22,34,4.5,36,{f:C.amber,r:2.2})
  +K.icon("alert",39,46,12,"#C77E0A",1.8)+K.txt(49,49.3,"주의",{size:9,fill:"#8A5A00",w:700})
  +K.bar(34,58,94,3.5,"#EBD9AE")
  +gbar(22,78,116)+gbar(22,86,80);

// 단계 표시와 '다음' 이 있는 안내 (코치마크는 한 번 짚고 끝)
TH2["제품 투어"]=K=>K.blk(14,34,132,26,10)+K.blk(14,66,132,26,10)+K.blk(84,8,62,20,10)
  +K.rect(0,0,160,100,{f:DIMD})
  +K.rect(14,8,60,20,{f:C.sf,r:10})+K.icon("search",27,18,9,C.ink,1.8)+gbar(36,16,28)
  +K.rect(11,5,66,26,{s:"#fff",sw:1.2,r:13})
  +K.card(14,38,132,54,12)+tri("M38 38.6l6-6.6 6 6.6z","#fff")
  +K.txt(26,55,"여기서 찾아요",{size:9,w:700})+gbar(26,61,84,3.5)
  +K.txt(26,82.6,"2 / 4",{size:8,fill:C.sub,w:700})
  +[0,1,2,3].map(i=>K.circ(60+i*8,79.8,2.2,{f:i===1?C.blue:OFF})).join("")
  +K.rect(102,72,34,15,{f:C.blue,r:7.5})+btxt(119,82.4,"다음",8);

// 화면 전체를 막으로 덮고 가운데서 돎 (스피너는 표시 자체)
TH2["로딩 오버레이"]=K=>scene()+K.rect(0,0,160,100,{f:DIMD})
  +K.card(50,20,60,60,14)+spin(80,44,11,3.6,C.skel,C.blue)
  +K.txt(80,70,"처리 중",{size:8.5,w:700,a:"middle"});

TH2["앱 평가 요청"]=K=>scene()+K.rect(0,0,160,100,{f:DIM})
  +K.card(28,6,104,88,14)
  +K.rect(69,13,22,22,{f:C.blue,r:6.5})+fillIcon("sparkle",80,24,15,"#fff")
  +K.txt(80,48,"앱이 어땠나요?",{size:9,w:700,a:"middle"})
  +[0,1,2,3,4].map(i=>i<4?fillIcon("star",52+i*14,60,14,C.amber):K.icon("star",52+i*14,60,14,OFF,1.6)).join("")
  +K.line(28,72,132,72,{s:C.line,sw:.6})
  +K.txt(80,86,"나중에",{size:8.5,fill:C.blue,a:"middle"});

// '나중에' 로 미룰 수 있음 (강제 업데이트는 버튼 하나뿐)
TH2["업데이트 안내"]=K=>scene()+K.rect(0,0,160,100,{f:DIM})
  +K.card(26,10,108,80,14)
  +K.circ(80,28,10,{f:C.blueSoft})+K.icon("download",80,28,12,C.blue,1.9)
  +K.txt(80,51,"새 버전이 나왔어요",{size:8.5,w:700,a:"middle"})+gbar(52,56.5,56,3.5)
  +K.rect(34,67,44,16,{f:KEY,r:8})+K.txt(56,77.8,"나중에",{size:8,fill:C.sub,w:700,a:"middle"})
  +K.rect(82,67,44,16,{f:C.blue,r:8})+btxt(104,77.8,"업데이트",8);

// 막 없이 화면 옆에 나란히 붙어, 고른 것의 속성을 보여 줌 (드로어는 덮으며 밀려 나옴)
TH2["사이드 패널"]=K=>K.blk(8,8,82,84,10)
  +K.rect(24,30,50,36,{f:"#C9D6FF",r:6})+K.rect(22,28,54,40,{s:C.blue,sw:1.2,r:7})
  +[[22,28],[76,28],[22,68],[76,68]].map(([x,y])=>K.rect(x-2.2,y-2.2,4.4,4.4,{f:"#fff",s:C.blue,sw:1,r:1})).join("")
  +K.card(96,-4,70,108,0)
  +K.txt(106,16,"속성",{size:9,w:700})
  +K.txt(106,34,"너비",{size:7.5,fill:C.sub})+K.rect(126,24.5,26,13,{f:KEY,r:4})+K.txt(139,33.8,"120",{size:7.5,a:"middle"})
  +K.txt(106,52,"높이",{size:7.5,fill:C.sub})+K.rect(126,42.5,26,13,{f:KEY,r:4})+K.txt(139,51.8,"80",{size:7.5,a:"middle"})
  +K.txt(106,70,"색",{size:7.5,fill:C.sub})+K.rect(126,60.5,13,13,{f:C.blue,r:4})
  +K.line(96,80,160,80,{s:C.line,sw:.6})
  +K.rect(106,87,46,4,{f:OFF,r:2})+K.rect(106,87,28,4,{f:C.blue,r:2})+knob(134,89,5);

// 구석의 말풍선 버튼 + 먼저 건네는 인사 (FAB 는 주요 동작 +)
TH2["상담 버블"]=K=>K.blk(14,10,132,16,8)+K.blk(14,32,84,12,6)
  +K.card(20,54,84,24,12)+tri("M103 61l7.5 5-7.5 5z","#fff")+K.txt(62,69.2,"도와드릴까요?",{size:8.5,w:700,a:"middle"})
  +K.card(112,52,38,38,19,C.blue)+K.icon("chat",131,71.5,18,"#fff",2)
  +K.circ(145,57,5.8,{f:C.red,s:"#fff",sw:1.3})+btxt(145,59.7,"1",7.5);

// 목록 아래에 남은 재생 띠: 표지 · 제목 · 일시정지 · 진행 줄
TH2["미니 플레이어"]=K=>K.blk(16,6,128,18,9)+K.blk(16,30,128,18,9)
  +K.card(8,54,144,38,12)+photo(15,60,24,24,6)
  +K.txt(47,70.5,"밤 산책",{size:9,w:700})+gbar(47,76,34,3.5)
  +K.icon("q12pause",112,72,15,C.ink,2.6)+K.icon("q12skip",135,72,12,C.ink,1.8)
  +K.rect(20,87.6,120,2,{f:OFF,r:1})+K.rect(20,87.6,46,2,{f:C.blue,r:1});

// 다른 화면 위 구석에 뜬 작은 영상 창 (미니 플레이어는 아래 띠)
TH2["PIP"]=K=>K.blk(12,8,136,14,7)+K.blk(12,28,136,10,5)+[44,60,76].map((y,i)=>K.blk(12,y,[52,44,48][i],10,5)).join("")
  +K.rect(68,36,84,56,{f:C.sf,r:9,fx:"url(#b2lift)"})+photo(68,36,84,56,9)
  +K.circ(110,64,10.5,{f:"rgba(18,20,30,.55)"})+K.icon("q12pause",110,64,12,"#fff",2.4)
  +K.circ(78.5,46.5,5.8,{f:"rgba(18,20,30,.55)"})+K.icon("x",78.5,46.5,6,"#fff",1.8)
  +K.circ(141.5,46.5,5.8,{f:"rgba(18,20,30,.55)"})+K.icon("q12expand",141.5,46.5,7,"#fff",1.7)
  +K.rect(75,85,70,2.2,{f:"rgba(255,255,255,.5)",r:1.1})+K.rect(75,85,30,2.2,{f:"#fff",r:1.1});
}
