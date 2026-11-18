// B2 그림 추가 13: ic · ly · pg
{
const A=(c,inner,st="")=>`<g class="b2x13 b2a-${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-${name}{animation-name:b2a-${name};animation-duration:${dur}s;${extra}}@keyframes b2a-${name}{${frames}}`);
css(`.b2x13{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const n2=K.n2, C=K.C;

Object.assign(K.ICON,{
  q13comment:["M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z","M8 11v.01","M12 11v.01","M16 11v.01"],
  q13send:["M21 3L3 10.5l7 3 3 7z","M21 3L10 13.5"],
  q13camera:["M4 8h3.5l1.5-2.5h6L16.5 8H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z","M12 10a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"],
  q13pin:["M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z","M12 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"],
  q13cal:["M5 6h14v14H5z","M5 10h14","M9 4v4","M15 4v4","M9 14v.01","M12 14v.01","M15 14v.01","M9 17v.01","M12 17v.01"],
  q13clock:["M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z","M12 7v5l3.5 2"],
  q13eyeoff:["M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z","M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z","M4 4l16 16"],
  q13ext:["M10 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4","M14 4h6v6","M20 4l-9 9"],
  q13mute:["M4 9.5h3.5L12 6v12l-4.5-3.5H4z","M16 9.5l5 5","M21 9.5l-5 5"],
  q13full:["M4 9V4h5","M15 4h5v5","M20 15v5h-5","M9 20H4v-5"],
  q13shield:["M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z","M8.8 12l2.4 2.4 4.2-4.6"],
  q13medal:["M12 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12z","M8.5 14l-1.5 7 5-2.5 5 2.5-1.5-7","M12 6.8v4.4"],
});
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b213p"+i,c="b213c"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});

/* ───────── 아이콘: 흰 면 위 큰 아이콘 하나 ───────── */
const big=(n,color=C.ink)=>K=>K.card(46,16,68,68,20)+K.icon(n,80,50,40,color,2.2);
// 짝으로 보여 줄 때: 흰 면 둘
const two=(a,b)=>K.card(12,20,62,60,18)+a(43,50)+K.card(86,20,62,60,18)+b(117,50);
TH2["댓글 아이콘"]=big("q13comment");
TH2["보내기 아이콘"]=big("q13send",C.blue);
TH2["카메라 아이콘"]=big("q13camera");
TH2["마이크 아이콘"]=big("mic");
TH2["위치 핀"]=big("q13pin",C.red);
TH2["달력 아이콘"]=big("q13cal");
TH2["시계 아이콘"]=big("q13clock");
TH2["장바구니 아이콘"]=big("cart");
TH2["보기 · 숨김 아이콘"]=K=>two((x,y)=>K.icon("eye",x,y,36,C.ink,2.2),(x,y)=>K.icon("q13eyeoff",x,y,36,C.mute,2.2));
TH2["별 아이콘"]=K=>K.card(46,16,68,68,20)
  +`<g transform="translate(60 30) scale(1.67)"><path d="${K.ICON.star}" style="fill:${C.amber};stroke:${C.amber};stroke-width:1.3"/></g>`;
TH2["체크 아이콘"]=big("check",C.green);
TH2["외부 링크 아이콘"]=big("q13ext");
TH2["음소거 아이콘"]=big("q13mute");
TH2["재생 · 일시정지"]=K=>two(
  (x,y)=>`<path d="M${x-8} ${y-12}L${x+12} ${y}L${x-8} ${y+12}z" style="fill:${C.ink};stroke:${C.ink};stroke-width:3"/>`,
  (x,y)=>K.rect(x-11,y-13,8,26,{f:C.ink,r:2.5})+K.rect(x+3,y-13,8,26,{f:C.ink,r:2.5}));
TH2["전체 화면 아이콘"]=big("q13full");

/* ───────── 배치 · 목록 ───────── */
// 왼쪽 목록에서 고른 줄 → 오른쪽에 그 내용
TH2["마스터 디테일"]=K=>K.card(8,8,144,84,12)
  +[["#C9D6FF",false],["#F6B9CB",true],["#BFE6D2",false],["#FFE0BE",false]].map(([f,on],i)=>{const y=13+i*19;
    return (on?K.rect(12,y,48,17,{f:C.blueSoft,r:7}):"")+K.circ(22,y+8.5,5.5,{f})+K.rect(31,y+4,on?24:20,4,{f:on?C.blue:"#3A4050",r:2})+gbar(31,y+11,on?18:24,3)}).join("")
  +K.line(64,8,64,92,{s:C.line,sw:.8})
  +photo(72,16,72,30,8,true)+K.circ(79,58,5.5,{f:"#F6B9CB"})+tbar(88,55.5,40)+gbar(72,69,70)+gbar(72,77,62)+gbar(72,85,44);

// 탭 아래 내용 칸이 주인공: 고른 탭과 한 몸으로 이어진 흰 면
TH2["탭 패널"]=K=>K.blk(62,8,40,20,8)+K.blk(106,8,40,20,8)
  +K.txt(82,21,"후기",{size:8,fill:C.sub,a:"middle"})+K.txt(126,21,"문의",{size:8,fill:C.sub,a:"middle"})
  +K.card(14,26,132,66,12)
  +`<path d="M14 40V16a8 8 0 0 1 8-8h28a8 8 0 0 1 8 8v24z" style="fill:#fff"/>`
  +K.txt(36,21,"정보",{size:8.5,w:700,fill:C.blue,a:"middle"})+K.rect(24,25,24,2.4,{f:C.blue,r:1.2})
  +K.rect(14.6,26.6,130.8,64.8,{s:C.blue,sw:1.2,r:11.5})+K.rect(15.4,22,41.2,8,{f:"#fff"})
  +photo(24,38,40,44,8)+tbar(72,42,56)+gbar(72,54,64)+gbar(72,63,58)+gbar(72,72,40);

TH2["말줄임"]=K=>K.blk(20,8,90,12,6)
  +K.card(14,28,132,54,14)
  +K.txt(26,53,`긴 제목은 이렇<tspan dx="1.5" font-size="17" style="fill:${C.blue}">…</tspan>`,{size:14,w:700})
  +gbar(26,64,108,4.5)+gbar(26,72.5,64,4.5);

TH2["종횡비"]=K=>K.card(10,20,86,50,10)+photo(14,24,78,42,7)
  +K.card(104,20,48,50,10)+photo(108,24,40,42,7,true)
  +K.txt(53,86,"16:9",{size:10,w:700,a:"middle"})+K.txt(128,86,"1:1",{size:10,w:700,a:"middle"});

// 노치 · 홈 막대에 안 가리는 안쪽
TH2["세이프 에어리어"]=K=>{const c="b213s"+K.id();
  return K.blk(8,30,34,14,7)+K.blk(118,56,34,14,7)
  +K.card(50,4,60,92,13)
  +`<defs><clipPath id="${c}"><rect x="50" y="4" width="60" height="92" rx="13"/></clipPath></defs><g clip-path="url(#${c})">`
  +K.rect(50,4,60,16,{f:"rgba(229,72,77,.16)"})+K.rect(50,84,60,12,{f:"rgba(229,72,77,.16)"})+`</g>`
  +K.rect(68,8,24,7,{f:"#1F2329",r:3.5})+K.rect(66,89,28,2.6,{f:"#1F2329",r:1.3})
  +`<rect x="54" y="22" width="52" height="60" rx="5" style="fill:rgba(47,107,255,.07);stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`
  +K.rect(60,29,30,5,{f:C.blue,r:2.5})+gbar(60,40,40)+gbar(60,48,34)+K.rect(60,58,40,17,{f:C.blue,r:6,o:.22})};

// 글자 밑선이 같은 간격 가로줄 위에 앉는다
TH2["베이스라인 그리드"]=K=>K.card(16,6,128,88,12)
  +[20,32,44,56,68,80].map(y=>K.line(16.5,y,143.5,y,{s:C.blue,sw:.7,o:.55})).join("")
  +K.txt(28,32,"제목 Ag",{size:19,w:700})
  +K.txt(28,56,"가나다라 Abg",{size:9.5,fill:C.sub})
  +K.txt(28,68,"마바사아 Hpq",{size:9.5,fill:C.sub})
  +K.txt(28,80,"자차카타 Xjy",{size:9.5,fill:C.sub});

// 둥근 상자로 덩어리를 나눈 목록
TH2["묶음 리스트"]=K=>{const row=(y,f,w)=>K.rect(30,y+3.5,9,9,{f,r:3})+tbar(45,y+6,w,4)+K.icon("next",126,y+8,6,C.mute,2);
  const grp=(y,l,rows)=>K.txt(28,y,l,{size:7.5,w:700,fill:C.sub})
    +K.card(22,y+4,116,rows.length*16,9)
    +rows.map(([f,w],i)=>row(y+4+i*16,f,w)+(i?K.line(45,y+4+i*16,138,y+4+i*16,{s:C.line,sw:.6}):"")).join("");
  return grp(13,"계정",[[C.blue,40],["#F6B9CB",52]])+grp(58,"알림",[[C.green,46],[C.amber,34]])};

// 겹쳐 쌓은 카드, 맨 위 한 장을 옆으로 넘긴다
TH2["카드 덱"]=K=>K.rect(58,5,44,60,{f:"rgba(255,255,255,.6)",r:11})
  +K.card(53,9,54,62,12)+K.rect(53,9,54,62,{f:"#EEF1F8",r:12})
  +A("n13deck",K.card(48,14,64,66,13)+photo(54,20,52,38,8,true)+tbar(54,64,34)+gbar(54,72,46,3.5))
  +K.circ(62,90,6.5,{f:"#fff"})+K.icon("x",62,90,6.5,C.sub,2)
  +K.circ(98,90,6.5,{f:"#fff"})+K.icon("heart",98,90,8,C.red,2);
kf("n13deck",3,"0%,18%{opacity:1;transform:none}48%{opacity:1;transform:translateX(34px) rotate(13deg)}60%,68%{opacity:0;transform:translateX(52px) rotate(18deg)}69%{opacity:0;transform:scale(.9)}88%,100%{opacity:1;transform:none}");

// 많이 쓰인 낱말일수록 크게
TH2["태그 클라우드"]=K=>{const w=(x,y,s,size,o)=>K.txt(x,y,s,{size,w:size>=13?700:500,fill:o===1?C.blue:o===2?C.ink:C.sub});
  return K.card(12,8,136,84,14)
  +w(22,33,"버튼",9)+w(45,36,"디자인",18,1)+w(102,33,"색",11,2)+w(120,31,"모션",8)
  +w(24,57,"여백",13,2)+w(56,55,"아이콘",9)+w(89,58,"앱",15,1)+w(112,55,"글꼴",9.5)
  +w(28,77,"카드",8)+w(50,79,"목록",12,2)+w(82,80,"화면",16,1)+w(122,77,"탭",9.5)};

/* ───────── 페이지 섹션 ───────── */
// 위 구역 전체: 얇은 보조 줄 + 로고 · 메뉴 · 버튼 줄
TH2["헤더"]=K=>K.card(6,8,148,48,12)
  +gbar(96,15,18,3.5)+gbar(120,15,24,3.5)
  +K.line(6,24,154,24,{s:C.line,sw:.6})
  +K.circ(20,40,6,{f:C.blue})+K.rect(29,37,18,6,{f:"#3A4050",r:3})
  +K.txt(58,43,"소개",{size:8})+K.txt(78,43,"요금",{size:8})
  +K.icon("search",105,40,10,C.ink,1.8)
  +K.rect(116,31,32,18,{f:C.blue,r:9})+K.txt(132,43,"로그인",{size:7.5,w:700,fill:"#fff",a:"middle"})
  +K.blk(14,64,74,28,10)+K.blk(96,64,50,28,10);

TH2["연락처 폼"]=K=>{const fld=(y,h,l)=>K.rect(38,y,84,h,{f:"#F3F5FA",s:C.line,sw:.6,r:6})+K.txt(44,y+10,l,{size:7.5,fill:C.mute});
  return K.card(30,4,100,92,13)
  +fld(11,14,"이름")+fld(29,14,"이메일")+fld(47,24,"문의 내용")
  +K.rect(38,76,84,15,{f:C.blue,r:7.5})+K.txt(80,86.3,"보내기",{size:8,w:700,fill:"#fff",a:"middle"})};

TH2["지도 섹션"]=K=>{const c="b213m"+K.id();
  return K.card(10,8,140,84,14)
  +`<defs><clipPath id="${c}"><rect x="10" y="8" width="140" height="84" rx="14"/></clipPath></defs><g clip-path="url(#${c})">`
  +K.rect(10,8,140,84,{f:"#E9EEF6"})
  +K.rect(100,8,50,30,{f:"#CFEBDC"})+`<path d="M10 78C40 70 60 96 96 92V92H10z" style="fill:#C5DBFF"/>`
  +`<path d="M10 40L150 26M54 8L70 92M10 66L150 58M112 8L122 92" style="fill:none;stroke:#fff;stroke-width:5"/>`
  +`</g>`
  +K.icon("q13pin",96,36,30,C.red,2.2)+K.circ(96,33.5,2.2,{f:C.red})
  +K.card(18,56,66,28,9)+tbar(26,63,36,4.5)+gbar(26,72,48,3.5)};

TH2["영상 섹션"]=K=>K.blk(44,6,72,10,5)
  +K.card(16,22,128,72,12)+photo(16,22,128,72,12)
  +K.rect(16,22,128,72,{f:"rgba(18,20,26,.28)",r:12})
  +K.circ(80,56,15,{f:"rgba(255,255,255,.95)"})+`<path d="M76 49v14l11.5-7z" style="fill:${C.blue};stroke:${C.blue};stroke-width:2"/>`
  +K.rect(26,85,108,2.6,{f:"rgba(255,255,255,.45)",r:1.3})+K.rect(26,85,34,2.6,{f:"#fff",r:1.3});

TH2["블로그 카드 목록"]=K=>[0,1,2].map(i=>{const x=7+i*50;
  return K.card(x,12,46,76,10)+photo(x+4,16,38,28,7,i===1)
   +K.txt(x+5,55,["11.19","11.12","11.05"][i],{size:7,fill:C.mute})
   +tbar(x+5,60,34,4.5)+tbar(x+5,67.5,[22,28,18][i],4.5)+gbar(x+5,77,30,3.5)}).join("");

// 실제 장터 로고 대신 중립 도형
TH2["앱 다운로드 배지"]=K=>{const bd=(y,shape,l)=>K.card(28,y,104,32,9,"#1F2329")+shape
    +K.txt(60,y+13,"다운로드",{size:7,fill:"#C3C8D2"})+K.txt(60,y+25,l,{size:10.5,w:700,fill:"#fff"});
  return bd(14,K.circ(45,30,8,{f:"#fff"}),"iOS 앱")
  +bd(54,K.rect(37,62,16,16,{f:"#fff",r:4.5}),"Android 앱")};

TH2["인증 배지"]=K=>[["q13shield",C.green,"안전 결제"],["q13medal",C.amber,"공식 인증"],["lock",C.blue,"암호화"]].map(([n,col,l],i)=>{const x=10+i*48;
  return K.card(x,20,44,60,12)+K.circ(x+22,43,14,{f:col,o:.14})+K.icon(n,x+22,43,19,col,2)
   +K.txt(x+22,70,l,{size:7.5,w:700,a:"middle"})}).join("");

// 손잡이 왼쪽은 전(빛바랜 사진), 오른쪽은 후
TH2["비포 애프터 슬라이더"]=K=>{const c="b213b"+K.id();
  return K.card(14,10,132,80,14)+photo(14,10,132,80,14,true)
  +`<defs><clipPath id="${c}"><rect x="14" y="10" width="132" height="80" rx="14"/></clipPath></defs><g clip-path="url(#${c})">`
  +`<rect x="14" y="10" width="66" height="80" class="b2x13 b2a-n13ba" style="fill:rgba(196,201,212,.88)"/></g>`
  +K.rect(20,16,20,13,{f:"rgba(18,20,26,.55)",r:6.5})+K.txt(30,25.6,"전",{size:8,w:700,fill:"#fff",a:"middle"})
  +K.rect(120,16,20,13,{f:C.blue,r:6.5})+K.txt(130,25.6,"후",{size:8,w:700,fill:"#fff",a:"middle"})
  +A("n13bah",K.rect(79,10,2,80,{f:"#fff"})+K.circ(80,50,9,{f:"#fff",s:C.hair,sw:.5})
    +`<path d="M77 46.5l-3.5 3.5 3.5 3.5M83 46.5l3.5 3.5-3.5 3.5" style="fill:none;stroke:${C.blue};stroke-width:1.8"/>`)};
kf("n13ba",3.2,"0%,10%{transform:none}35%,45%{transform:scaleX(.52)}75%,85%{transform:scaleX(1.48)}100%{transform:none}","transform-origin:left center;animation-timing-function:ease-in-out");
kf("n13bah",3.2,"0%,10%{transform:none}35%,45%{transform:translateX(-31.68px)}75%,85%{transform:translateX(31.68px)}100%{transform:none}","animation-timing-function:ease-in-out");
}
