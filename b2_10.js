// B2 그림 추가 10: ic · sh · ai
{
const A=(c,inner,st="")=>`<g class="b2x10 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x10{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const n2=K.n2, C=K.C;

// 톱니바퀴: 이 8개
const gear=(()=>{const p=[];for(let i=0;i<8;i++){const a=i*Math.PI/4;
  [[-.27,7],[-.15,9.2],[.15,9.2],[.27,7]].forEach(([d,r])=>p.push(n2(12+r*Math.cos(a+d))+" "+n2(12+r*Math.sin(a+d))))}
  return "M"+p.join("L")+"z"})();
Object.assign(K.ICON,{
  q10gear:[gear,"M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"],
  q10profile:["M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z","M12 12.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z","M6 18.7c1.2-2.6 3.4-3.9 6-3.9s4.8 1.3 6 3.9"],
  q10trash:["M5 7h14","M9 7V4h6v3","M7 7l1 13h8l1-13","M10.3 11v5.5","M13.7 11v5.5"],
  q10info:["M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z","M12 11v5.5","M12 7.6v.01"],
  q10warn:["M12 4L21.5 20h-19z","M12 10v4.5","M12 17.2v.01"],
  q10lock:["M6 11h12v9H6z","M8.5 11V8a3.5 3.5 0 0 1 7 0v3","M12 14.5v2"],
  q10clip:"M20 11.5l-8.2 8.2a5 5 0 0 1-7.1-7.1l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4l7.8-7.8",
  q10thumb:["M7 10v10H4V10z","M7 10l4-7a2 2 0 0 1 2.6 2.3L13 9h5a2 2 0 0 1 2 2.4l-1.3 7a2 2 0 0 1-2 1.6H7"],
  q10up:["M12 19V5","M6.5 10.5L12 5l5.5 5.5"],
});
const photo=(x,y,w,h,r)=>{const i=K.id(),g="b210p"+i,c="b210c"+i;
  return `<defs>${K.grad(g,[[0,"#AFC6FF"],[1,"#E5C8F3"]],0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:#6A86E8"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const tri=(cx,cy,s,f)=>`<path d="M${n2(cx-s)} ${n2(cy-s*.55)}h${n2(s*2)}l${n2(-s)} ${n2(s*1.2)}z" style="fill:${f};stroke:${f};stroke-width:1"/>`;   // 채운 작은 삼각형 ▾
const ub=(x,y,w)=>K.card(x,y,w,20,10,C.blue)+K.rect(x+10,y+8,w-20,4,{f:"rgba(255,255,255,.75)",r:2});
const ai=(cx,cy)=>K.icon("sparkle",cx,cy,11,C.blue,1.8);

/* ───────── 아이콘: 흰 면 위 큰 아이콘 하나 ───────── */
const big=(n,color=C.ink)=>K=>K.card(46,16,68,68,20)+K.icon(n,80,50,40,color,2.2);
TH2["설정 아이콘"]=big("q10gear");
TH2["알림 아이콘"]=big("bell");
TH2["홈 아이콘"]=big("home");
TH2["프로필 아이콘"]=big("q10profile");
TH2["더하기 아이콘"]=big("plus");
TH2["삭제 아이콘"]=big("q10trash",C.red);
TH2["다운로드 아이콘"]=big("download");
TH2["필터 아이콘"]=big("filter");
TH2["정보 아이콘"]=big("q10info",C.blue);
TH2["경고 아이콘"]=big("q10warn",C.amber);
TH2["셰브론 아이콘"]=big("next");                                         // 열린 꺾쇠 ›
TH2["캐럿 아이콘"]=K=>K.card(46,16,68,68,20)+tri(80,48,11,C.ink);          // 채운 작은 삼각형 ▾
TH2["잠금 아이콘"]=big("q10lock");
TH2["첨부 아이콘"]=big("q10clip");

/* ───────── 공유 ───────── */
TH2["링크 미리보기 카드"]=K=>K.card(28,6,104,88,14)+photo(34,12,92,42,9)
  +tbar(34,61,64)+gbar(34,70,84)
  +K.icon("link",38,84,8,C.mute,1.8)+K.txt(45,86.5,"dogam.kr",{size:7.5,fill:C.sub});

TH2["초대 링크"]=K=>K.card(14,10,132,80,14)
  +[["#C9D6FF",56],["#F6B9CB",70],["#BFE6D2",84]].map(([f,x])=>K.circ(x,32,9.5,{f,s:"#fff",sw:2})).join("")
  +`<circle cx="104" cy="32" r="8.5" style="fill:#fff;stroke:${C.blue};stroke-width:1.3;stroke-dasharray:2.6 2.6"/>`+K.icon("plus",104,32,9,C.blue,2)
  +K.rect(22,54,116,24,{f:"#F3F5FA",r:12})+K.icon("link",34,66,9,C.mute,1.8)+K.txt(42,68.8,"join/x7Kq",{size:7.5,fill:C.sub})
  +K.rect(100,58,34,16,{f:C.blue,r:8})+K.txt(117,68.8,"초대",{size:8,w:700,fill:"#fff",a:"middle"});

TH2["임베드"]=K=>K.card(18,6,124,88,14)+gbar(28,15,80)+gbar(28,23,56)
  +K.rect(28,32,104,44,{f:"#1F2329",r:8})
  +K.circ(80,52,9,{f:"rgba(255,255,255,.92)"})+`<path d="M77.5 47.5v9l7.5-4.5z" style="fill:#1F2329;stroke:#1F2329;stroke-width:1"/>`
  +K.rect(36,68,60,2.4,{f:"rgba(255,255,255,.3)",r:1.2})+K.rect(36,68,22,2.4,{f:C.blue,r:1.2})
  +K.rect(102,37,25,13,{f:C.blue,r:6.5})+K.txt(114.5,46.2,"&lt;/&gt;",{size:7.5,w:700,fill:"#fff",a:"middle"})
  +gbar(28,83,90);

TH2["공유 권한 설정"]=K=>{const role=(y,l,on)=>K.rect(96,y,40,17,{f:on?C.blueSoft:"#F3F5FA",r:8.5})+K.txt(104,y+11.6,l,{size:8,w:700,fill:on?C.blue:C.ink})+tri(127,y+8.5,3,on?C.blue:C.sub);
  return K.card(14,8,132,84,14)
  +K.circ(32,26,7,{f:"#C9D6FF"})+tbar(44,21,34,4)+gbar(44,28,24,3.5)+role(17.5,"편집",false)
  +K.circ(32,50,7,{f:"#F6B9CB"})+tbar(44,45,28,4)+gbar(44,52,36,3.5)+role(41.5,"보기",true)
  +K.line(24,64,136,64,{s:C.line,sw:.6})
  +K.icon("q10lock",32,78,11,C.sub,1.8)+gbar(44,76,40)+role(69.5,"제한",false)};

/* ───────── AI 채팅 화면 ───────── */
TH2["말풍선"]=K=>K.card(14,12,96,30,15)+`<path d="M22 36c0 6-3 10-8 12c8 1 14-2 17-7z" style="fill:#fff"/>`
  +K.txt(62,31,"안녕하세요",{size:10,w:700,a:"middle"})
  +K.card(50,54,96,30,15,C.blue)+`<path d="M138 78c0 6 3 10 8 12c-8 1-14-2-17-7z" style="fill:${C.blue}"/>`
  +K.txt(98,73,"반가워요",{size:10,w:700,fill:"#fff",a:"middle"});

TH2["답변 평가"]=K=>K.card(14,8,132,40,12)+ai(24,20)+gbar(34,18,96)+gbar(34,27,100)+gbar(34,36,64)
  +K.card(34,58,42,32,16)+K.rect(34,58,42,32,{f:C.blueSoft,r:16})+K.icon("q10thumb",55,74,19,C.blue,2)
  +K.card(84,58,42,32,16)+`<g transform="rotate(180 105 74)">`+K.icon("q10thumb",105,74,19,C.mute,2)+`</g>`;

TH2["복사 버튼"]=K=>K.card(14,8,132,44,12)+ai(24,20)+gbar(34,18,96)+gbar(34,27,100)+gbar(34,36,64)
  +K.card(18,60,66,26,13)+K.icon("copy",36,73,13,C.blue,2)+K.txt(47,76.2,"복사",{size:9,w:700})
  +K.icon("refresh",100,73,10,C.mute,1.8)+K.icon("more",118,73,10,C.mute,2.2);

TH2["모델 선택"]=K=>K.card(30,6,100,22,11)+ai(44,17)+K.txt(54,20,"균형",{size:8.5,w:700})+tri(116,17,3.4,C.sub)
  +K.card(30,32,100,62,12)
  +[["빠름",false],["균형",true],["정밀",false]].map(([l,on],i)=>{const y=37+i*18;
    return (on?K.rect(35,y,90,16,{f:C.blueSoft,r:8}):"")+K.txt(46,y+11,l,{size:8.5,w:on?700:500,fill:on?C.blue:C.ink})+gbar(70,y+6,on?26:32,3.5)+(on?K.icon("check",114,y+8,9,C.blue,2.2):"")}).join("");

TH2["파일 첨부"]=K=>K.blk(16,6,96,14,7)
  +K.card(10,28,140,64,16)
  +K.rect(20,36,88,26,{f:"#F3F5FA",r:9})+K.rect(25,40,18,18,{f:C.red,r:5})+K.txt(34,51.6,"PDF",{size:7,w:700,fill:"#fff",a:"middle"})
  +tbar(49,44,36,4)+gbar(49,52,22,3.5)+K.icon("x",99,49,7,C.sub,2)
  +K.circ(26,77,9,{f:C.blueSoft})+K.icon("q10clip",26,77,12,C.blue,2)+K.txt(40,79.8,"메시지 입력",{size:8,fill:C.mute})
  +K.circ(134,77,9,{f:C.blue})+K.icon("q10up",134,77,10,"#fff",2.2);

TH2["음성 입력"]=K=>K.blk(56,8,88,14,7)+K.blk(16,74,72,14,7)
  +K.card(10,30,140,38,19)
  +K.circ(31,49,12,{f:C.blue})+K.icon("mic",31,49,14,"#fff",2)
  +[5,11,7,16,22,12,18,8,14,20,9,5,10,6].map((h,i)=>K.rect(52+i*6.6,49-h/2,3,h,{f:i<9?C.blue:"#C9D6FF",r:1.5})).join("");

TH2["대화 목록"]=K=>K.blk(92,8,58,18,9)+K.blk(92,32,46,30,10)+K.blk(92,76,58,16,8)
  +K.card(8,6,78,88,12)
  +K.rect(14,12,66,16,{f:"#F3F5FA",r:8})+K.icon("plus",23,20,8,C.ink,2)+K.txt(30,22.8,"새 대화",{size:7.5,w:700})
  +K.txt(16,40,"오늘",{size:7,fill:C.mute})
  +[52,34,44,38].map((w,i)=>{const y=44+i*12,on=i===0;return (on?K.rect(12,y,70,11,{f:C.blueSoft,r:5.5}):"")+K.rect(17,y+3.5,w,4,{f:on?C.blue:"#D3D8E3",r:2})}).join("");

TH2["캔버스 패널"]=K=>K.blk(6,12,44,14,7)+K.blk(6,32,36,26,9)+K.blk(6,76,46,14,7)
  +K.card(58,6,96,88,12)
  +tbar(68,15.5,36)+K.icon("copy",122,18,8,C.sub,1.8)+K.icon("download",133,18,8,C.sub,1.8)+K.icon("x",144,18,7,C.sub,2)
  +K.line(58,29,154,29,{s:C.line,sw:.6})
  +K.rect(68,36,48,6,{f:"#3A4050",r:3})+gbar(68,48,76)+gbar(68,56,66)
  +K.rect(68,65,76,22,{f:C.blueSoft,r:6})+K.rect(74,71,30,3.5,{f:C.blue,r:1.75})+K.rect(74,78,46,3.5,{f:C.blue,r:1.75,o:.45});

TH2["코드 블록"]=K=>{const ln=(x,y,w,f)=>K.rect(x,y,w,4.5,{f,r:2.25});
  return K.card(14,10,132,80,12,"#1F2329")
  +`<path d="M14 31V22a12 12 0 0 1 12-12h108a12 12 0 0 1 12 12v9z" style="fill:#2D323D"/>`
  +K.txt(26,24,"js",{size:8.5,w:700,fill:"#9AA1AE"})+K.icon("copy",116,20.5,9,"#C3C8D2",1.8)+K.txt(123,23.5,"복사",{size:7.5,fill:"#C3C8D2"})
  +ln(26,40,20,"#C792EA")+ln(50,40,34,"#E6E9F0")+ln(88,40,8,"#8A92A3")
  +ln(36,51,26,"#7AA7FF")+ln(66,51,40,"#F2C97D")
  +ln(36,62,18,"#C792EA")+ln(58,62,48,"#8FD6A8")
  +ln(26,73,8,"#8A92A3")};

TH2["도구 사용 표시"]=K=>ub(84,6,60)+ai(18,44)
  +K.card(28,32,118,24,12)+K.circ(42,44,6.5,{f:"rgba(31,169,113,.14)"})+K.icon("check",42,44,8,C.green,2.2)+K.txt(54,47,"파일 읽기",{size:8.5,fill:C.sub})+K.icon("next",136,44,7,C.mute,2)
  +K.card(28,62,118,24,12)+K.icon("search",42,74,11,C.blue,2)+K.txt(54,77,"웹 검색 중",{size:8.5,w:700})
  +`<circle cx="134" cy="74" r="5" class="b2x10 b2a-n10spin" style="fill:none;stroke:${C.blue};stroke-width:2;stroke-dasharray:20 11.4"/>`;
kf("n10spin",2.4,"0%{transform:rotate(0deg)}100%{transform:rotate(720deg)}","animation-timing-function:linear");

TH2["수정 후 다시 보내기"]=K=>K.icon("edit",14,20,10,C.mute,1.8)
  +K.card(26,8,124,62,14)+K.rect(26.6,8.6,122.8,60.8,{s:C.blue,sw:1.2,r:13.5})
  +tbar(36,19,78,4.5)+tbar(36,29,44,4.5)+K.rect(83,26,2.2,10,{f:C.blue,r:1.1})
  +K.rect(66,47,34,16,{f:"#F3F5FA",r:8})+K.txt(83,58,"취소",{size:8,a:"middle"})
  +K.rect(104,47,38,16,{f:C.blue,r:8})+K.txt(123,58,"보내기",{size:8,w:700,fill:"#fff",a:"middle"})
  +K.blk(12,78,100,14,7);
}
