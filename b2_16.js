// B2 그림 추가 16: mo 모션 · ge 제스처 (전부 움직임)
// 움직이는 부분은 class="b2x16 b2a-n16…" (b2x16 = 이 파일 공통 속성). transform 속성이 있는 요소에는 클래스를 직접 달지 않고 겉 g 로 감싼다.
// 도감은 평소 animation:none 으로 멈춰 보여 준다. 그래서 요소의 기본 상태(인라인 style)를 "움직이는 도중의 대표 모습"으로 두고, 키프레임은 그 상태에서 시작해 그 상태로 돌아온다.
{
const A=(c,inner,st="")=>`<g class="b2x16 b2a-n16${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n16${name}{animation-name:b2a-n16${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n16${name}{${frames}}`);
css(`.b2x16{transform-box:fill-box;transform-origin:center;animation-duration:2.8s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const n2=K.n2, C=K.C;
const SOFT="#C9D6FF", MID="#9DB6FF";
const EIO="animation-timing-function:ease-in-out";
const LIFT="url(#b2lift)";

// 사진 한 장 (하늘 · 해 · 산)
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b216p"+i,c="b216c"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});        // 진한 제목 줄
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});        // 흰 면 위 글줄
const dash=(x,y,w,h,r)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" style="fill:rgba(47,107,255,.06);stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`;
// 둥근 모서리로 잘라 내는 틀
const clip=(x,y,w,h,r,inner)=>{const c="b216k"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const face=(x,y,w,h,r)=>K.rect(x,y,w,h,{f:C.sf,r,fx:LIFT});          // 떠 있는 흰 면 (안을 잘라 채울 때)
// 마우스 커서 (끝이 x,y)
const cur=(x,y)=>`<g transform="translate(${x} ${y})"><path d="M0 0v15l4.2-3.6 2.8 6.4 2.6-1.1-2.8-6.3H12z" style="fill:#fff;stroke:${C.ink};stroke-width:1.3"/></g>`;

/* ───────── mo · 모션 ───────── */
// 같은 자리에서 겹쳐 바뀜 (움직임 없음)
TH2["크로스페이드"]=K=>K.blk(10,30,18,40,8)+K.blk(132,30,18,40,8)
  +face(36,12,88,76,14)+photo(36,12,88,76,14)
  +A("xf",`<g transform="translate(160 0) scale(-1 1)">`+photo(36,12,88,76,14,true)+`</g>`,"opacity:.5");
kf("xf",3.2,"0%,10%{opacity:.5}34%,50%{opacity:1}74%,84%{opacity:0}100%{opacity:.5}",EIO);

// 앞 사진은 그대로 있고 경계선이 쓸고 지나감 (창은 움직이고 안쪽은 반대로 움직여 제자리)
TH2["와이프"]=K=>{const c="b216w"+K.id();
  return K.blk(10,30,18,40,8)+K.blk(132,30,18,40,8)
  +face(36,12,88,76,14)
  +clip(36,12,88,76,14,photo(36,12,88,76,0)
    +`<defs><clipPath id="${c}"><rect x="36" y="12" width="88" height="76"/></clipPath></defs><g class="b2x16 b2a-n16wpo" clip-path="url(#${c})" style="transform:translateX(-44px)">`+A("wpi",photo(36,12,88,76,0,true),"transform:translateX(44px)")+`</g>`
    +A("wpl",K.rect(122.5,12,3,76,{f:"#fff"}),"transform:translateX(-44px)"))};
const LIN="animation-timing-function:linear";
kf("wpo",3.2,"0%{opacity:1;transform:translateX(-44px)}30%,48%{opacity:1;transform:none}56%{opacity:0;transform:none}57%{opacity:0;transform:translateX(-88px)}64%{opacity:1;transform:translateX(-88px)}100%{opacity:1;transform:translateX(-44px)}",LIN);
kf("wpi",3.2,"0%{transform:translateX(44px)}30%,56%{transform:none}57%,64%{transform:translateX(88px)}100%{transform:translateX(44px)}",LIN);
kf("wpl",3.2,"0%{opacity:1;transform:translateX(-44px)}30%{opacity:1;transform:none}36%,56%{opacity:0;transform:none}57%{opacity:0;transform:translateX(-88px)}64%{opacity:1;transform:translateX(-88px)}100%{opacity:1;transform:translateX(-44px)}",LIN);

// 가운데 칸으로 빨려 들어가듯 커지며 다음 화면
TH2["줌 전환"]=K=>face(24,8,112,84,14)
  +clip(24,8,112,84,14,
    A("za",[0,1,2].map(r=>[0,1,2].map(c=>{const x=32+c*34,y=14+r*25;
      return r===1&&c===1?photo(x,y,28,20,5):K.rect(x,y,28,20,{f:(r+c)%2?SOFT:"#E3E9F8",r:5})}).join("")).join(""))
    +A("zb",K.rect(22,6,116,88,{f:"#fff",r:12})+photo(24,8,112,84,10)+K.rect(34,70,44,6,{f:"#fff",r:3})+K.rect(34,80,28,4,{f:"#fff",r:2,o:.7}),"transform:scale(.56)"));
kf("za",3.2,"0%,10%{opacity:1;transform:none}40%,62%{opacity:0;transform:scale(2.6)}80%,100%{opacity:1;transform:none}",EIO);
kf("zb",3.2,"0%,10%{opacity:1;transform:scale(.56)}40%,62%{opacity:1;transform:none}74%,82%{opacity:0;transform:scale(.28)}100%{opacity:1;transform:scale(.56)}",EIO);

// 아래 칸들이 밀려 내려가며 내용이 열림
const chev=(cx,cy)=>K.path(`M${cx-4} ${cy-2}l4 4 4-4`,{s:C.sub,sw:1.6});
TH2["아코디언 펼침"]=K=>face(20,8,120,84,14)
  +clip(20,8,120,84,14,
    K.rect(20,30,120,18,{f:C.soft})+gbar(32,34.5,84)+gbar(32,41.5,70)
    +A("acl",K.rect(20,30,120,92,{f:C.sf})+[0,1,2].map(i=>{const y=30+i*22;
      return K.line(20,y,140,y,{s:C.line,sw:.8})+tbar(32,y+8.5,[40,52,34][i])+chev(126,y+11)}).join(""),"transform:translateY(18px)")
    +tbar(32,16.5,46)+A("acv",chev(126,19),"transform:rotate(180deg)"));
kf("acl",3.2,"0%,10%{transform:translateY(18px)}24%,38%{transform:none}66%,100%{transform:translateY(18px)}",EIO);
kf("acv",3.2,"0%,10%{transform:rotate(180deg)}24%,38%{transform:none}66%,100%{transform:rotate(180deg)}",EIO);

// 큰 머리 → 얇은 바, 제목도 같이 작아짐 (점선 = 줄어들기 전 크기)
TH2["헤더 축소"]=K=>face(30,4,100,92,14)
  +clip(30,4,100,92,14,
    A("chl",[0,1,2,3,4,5,6].map(i=>{const y=58+i*16;return K.circ(45,y+5,5,{f:i%3?SOFT:MID})+gbar(56,y+.5,[52,44,58,48][i%4],3.5)+gbar(56,y+6.5,[36,50,40,30][i%4],3.5)}).join(""),"transform:translateY(-22px)")
    +`<path d="M31 20V48.6H129V20" style="fill:none;stroke:${C.blue};stroke-width:1.2;stroke-dasharray:3 3"/>`
    +A("chh",K.rect(30,4,100,46,{f:C.blue}),"transform-origin:50% 0;transform:scaleY(.348)")
    +A("cht",K.txt(40,42,"여행",{size:14,w:700,fill:"#fff"}),"transform-origin:0 100%;transform:translateY(-28px) scale(.62)"));
kf("chh",3.2,"0%,12%{transform:scaleY(.348)}40%,60%{transform:none}88%,100%{transform:scaleY(.348)}",EIO);
kf("cht",3.2,"0%,12%{transform:translateY(-28px) scale(.62)}40%,60%{transform:none}88%,100%{transform:translateY(-28px) scale(.62)}",EIO);
kf("chl",3.2,"0%,12%{transform:translateY(-22px)}40%,60%{transform:none}88%,100%{transform:translateY(-22px)}",EIO);

// 칸마다 숫자 띠가 위아래로 굴러감 (칸마다 조금씩 늦게). 멈춘 모습은 뒤 두 칸이 굴러가는 도중
const RNB=[0,0,-8,-20];
TH2["숫자 롤링"]=K=>K.blk(36,8,88,10,5)+K.blk(48,84,64,8,4)
  +K.card(22,24,116,52,14)
  +[[1,2,3],[2,4,5],[8,0,9],[0,2,4]].map((ds,i)=>{const x=31+i*25;
    return K.rect(x,30,23,40,{f:"#F1F4FA",r:7})
     +clip(x,30,23,40,7,A("rn"+i,ds.map((d,j)=>K.txt(x+11.5,58+j*40,d,{size:22,w:700,a:"middle"})).join(""),`transform:translateY(${RNB[i]}px)`))}).join("");
[0,1,2,3].forEach(i=>kf("rn"+i,3,`0%,${6+i*5}%{transform:translateY(${RNB[i]}px)}${40+i*5}%,${64+i*4}%{transform:translateY(-80px)}${90+i*3}%,100%{transform:translateY(${RNB[i]}px)}`,"animation-timing-function:cubic-bezier(.3,.1,.2,1)"));

// 흐린 밑그림 위로 파란 선이 이어 그려짐
TH2["선 그리기"]=K=>{const d=K.ICON.heart;
  return K.blk(12,36,22,28,8)+K.blk(126,36,22,28,8)
  +K.card(40,10,80,80,16)
  +`<g transform="translate(51.2 17) scale(2.4)"><path d="${d}" style="fill:none;stroke:#DDE2EC;stroke-width:1.1"/>`
  +`<path d="${d}" pathLength="100" class="b2x16 b2a-n16ld" style="fill:none;stroke:${C.blue};stroke-width:1.1;stroke-dasharray:100;stroke-dashoffset:38"/></g>`};
kf("ld",3.2,"0%{stroke-dashoffset:38;opacity:1}32%,50%{stroke-dashoffset:0;opacity:1}58%{stroke-dashoffset:0;opacity:0}59%{stroke-dashoffset:100;opacity:0}64%{stroke-dashoffset:100;opacity:1}100%{stroke-dashoffset:38;opacity:1}","animation-timing-function:linear");

// 동그란 구멍이 커지며 사진이 드러남
TH2["마스크 리빌"]=K=>K.blk(10,30,14,40,7)+K.blk(136,30,14,40,7)
  +K.card(30,10,100,80,14)+gbar(42,24,50)+gbar(42,36,76)+gbar(42,64,76)+gbar(42,76,40)
  +clip(30,10,100,80,14,A("mk",photo(30,10,100,80,0,true),"clip-path:circle(36% at 50% 50%)"));
kf("mk",3.2,"0%,8%{clip-path:circle(36% at 50% 50%)}38%,56%{clip-path:circle(75% at 50% 50%)}74%,80%{clip-path:circle(14% at 50% 50%)}100%{clip-path:circle(36% at 50% 50%)}",EIO);

// 커서 쪽으로 기울어짐 (제자리, 떠오르지 않음)
TH2["틸트"]=K=>K.blk(10,30,26,40,8)+K.blk(124,30,26,40,8)
  +K.rect(58,83,44,6,{f:"rgba(75,91,168,.18)",r:3})
  +A("tl",K.card(50,16,60,66,12)+photo(56,22,48,32,8)+tbar(56,61,30,4)+gbar(56,69,44,3.5),"transform:skewY(7deg) scaleX(.88)")
  +A("tlc",cur(80,48),"transform:translate(-22px,-18px)");
kf("tl",3.2,"0%,14%{transform:skewY(7deg) scaleX(.88)}44%,58%{transform:skewY(-7deg) scaleX(.88)}88%,100%{transform:skewY(7deg) scaleX(.88)}",EIO);
kf("tlc",3.2,"0%,14%{transform:translate(-22px,-18px)}44%,58%{transform:translate(18px,-18px)}88%,100%{transform:translate(-22px,-18px)}",EIO);

// 커서는 버튼 밖에 있는데 버튼이 그쪽으로 끌려감 (점선 = 원래 자리)
TH2["자석 버튼"]=K=>K.blk(14,8,132,10,5)+K.blk(14,82,132,10,5)
  +dash(50,36,60,28,14)
  +A("mgb",K.card(50,36,60,28,14,C.blue)+K.txt(80,54.2,"시작",{size:11,w:700,fill:"#fff",a:"middle"}),"transform:translate(12px,6px)")
  +A("mgc",cur(80,50),"transform:translate(46px,18px)");
kf("mgb",3.2,"0%,14%{transform:translate(12px,6px)}30%,44%{transform:translate(-11px,-6px)}56%{transform:translate(3px,2px)}64%,74%{transform:none}88%,100%{transform:translate(12px,6px)}");
kf("mgc",3.2,"0%,14%{transform:translate(46px,18px)}30%,44%{transform:translate(-46px,-28px)}60%,72%{transform:translate(60px,34px)}86%,100%{transform:translate(46px,18px)}",EIO);

// 좌우로 기우뚱, 점점 잦아듦 (멈춘 모습: 기운 채 + 반대쪽 잔상)
TH2["워블"]=K=>K.blk(14,8,40,10,5)+K.blk(26,82,108,8,4)
  +A("wbg",K.rect(50,20,60,58,{f:C.blue,r:16}),"transform-origin:50% 100%;transform:translateX(11px) rotate(8deg);opacity:.2")
  +A("wb",K.card(50,20,60,58,16,C.blue)+K.icon("star",80,49,30,"#fff",1.8),"transform-origin:50% 100%;transform:translateX(-11px) rotate(-8deg)");
kf("wbg",2.8,"0%{opacity:.2}6%,94%{opacity:0}100%{opacity:.2}");
kf("wb",2.8,"0%,8%{transform:translateX(-11px) rotate(-8deg)}20%{transform:translateX(11px) rotate(8deg)}31%{transform:translateX(-9px) rotate(-5deg)}41%{transform:translateX(6px) rotate(3deg)}50%{transform:translateX(-3px) rotate(-1.2deg)}59%,82%{transform:none}100%{transform:translateX(-11px) rotate(-8deg)}",EIO);

// 천천히 오르내림, 그림자가 같이 숨 쉼
TH2["둥둥 뜨기"]=K=>K.blk(12,36,26,28,8)+K.blk(122,36,26,28,8)
  +A("fls",K.rect(58,84,44,6,{f:"rgba(75,91,168,.24)",r:3}))
  +A("fl",K.card(52,18,56,54,16)+K.icon("sparkle",80,44,32,C.blue,1.8));
kf("fl",3,"0%,100%{transform:translateY(5px) rotate(-1.5deg)}50%{transform:translateY(-7px) rotate(1.5deg)}",EIO);
kf("fls",3,"0%,100%{opacity:1;transform:none}50%{opacity:.5;transform:scaleX(.7)}",EIO);

/* ───────── ge · 제스처 ───────── */
// 통째로 밀려 나가고 아래 카드가 올라와 메움 (삭제 버튼 없음)
TH2["밀어서 닫기"]=K=>K.blk(14,10,132,22,11)
  +A("smb",K.card(14,68,132,24,12)+K.circ(28,80,7,{f:MID})+tbar(41,75,38,4)+gbar(41,82,58,3.5))
  +A("smc",K.card(14,39,132,24,12)+K.circ(28,51,7,{f:C.blue})+K.icon("bell",28,51,9,"#fff",1.8)+tbar(41,46,46,4)+gbar(41,53,68,3.5),"transform:translateX(64px);opacity:.75")
  +A("smf",K.fing(52,51),"transform:translateX(64px)");
kf("smc",3,"0%,6%{opacity:.75;transform:translateX(64px)}18%{opacity:0;transform:translateX(150px)}32%{opacity:0;transform:scale(.9)}46%,64%{opacity:1;transform:none}100%{opacity:.75;transform:translateX(64px)}");
kf("smf",3,"0%,6%{opacity:1;transform:translateX(64px)}14%{opacity:0;transform:translateX(64px)}15%,56%{opacity:0;transform:none}64%{opacity:1;transform:none}100%{opacity:1;transform:translateX(64px)}");
kf("smb",3,"0%,14%{transform:none}24%,32%{transform:translateY(-29px)}44%,100%{transform:none}");

// 두 점이 동시에 한 번 → 지도가 한 단계 작아짐
TH2["두 손가락 탭"]=K=>K.card(18,8,124,84,14)
  +clip(18,8,124,84,14,A("tfm",
    K.rect(-14,-10,204,146,{f:"#EAF0FB"})
    +K.rect(-14,-10,60,40,{f:"#D5EEDD",r:8})+K.rect(96,60,50,36,{f:"#D5EEDD",r:8})+K.rect(150,-10,40,60,{f:"#CFE0FF",r:8})+K.rect(20,96,60,40,{f:"#CFE0FF",r:8})
    +K.line(-14,46,190,34,{s:"#fff",sw:7})+K.line(62,-10,84,136,{s:"#fff",sw:7})+K.line(-14,100,190,112,{s:"#fff",sw:5})+K.line(128,-10,120,136,{s:"#fff",sw:5})
    +K.circ(104,56,6,{f:C.red})+K.circ(104,56,2.2,{f:"#fff"})))
  +A("tfr",K.circ(62,62,12,{s:C.blue,sw:2}))+A("tfr",K.circ(94,44,12,{s:C.blue,sw:2}))
  +A("tff",K.fing(62,62))+A("tff",K.fing(94,44));
kf("tfm",2.8,"0%,28%{transform:scale(1.5)}46%,82%{transform:none}98%,100%{transform:scale(1.5)}");
kf("tff",2.8,"0%,8%{opacity:0;transform:translateY(8px)}20%{opacity:1;transform:none}28%{opacity:1;transform:scale(.78)}36%,56%{opacity:1;transform:none}72%,100%{opacity:0;transform:translateY(8px)}");
kf("tfr",2.8,"0%,26%{opacity:0;transform:scale(.4)}28%{opacity:1;transform:scale(.5)}56%,100%{opacity:0;transform:scale(1.6)}");

// 재생 바를 잡고 앞뒤로 문지르면 장면이 따라 바뀜
TH2["스크럽"]=K=>face(20,8,120,84,14)
  +clip(20,8,120,84,14,photo(20,8,120,58,0)+A("sbx",photo(20,8,120,58,0,true)))
  +K.rect(32,76.5,96,3,{f:"#D3D8E3",r:1.5})
  +A("sbp",K.rect(32,76.5,18,3,{f:C.blue,r:1.5}),"transform-origin:0 50%")
  +A("sbk",K.rect(35,42,30,23,{f:"#fff",r:6,fx:LIFT})+photo(37,44,26,19,4.5,true)+K.circ(50,78,5,{f:"#fff",s:C.blue,sw:1.6})+K.fing(50,78));
kf("sbk",3,"0%,10%{transform:none}44%{transform:translateX(60px)}68%{transform:translateX(24px)}92%,100%{transform:none}",EIO);
kf("sbp",3,"0%,10%{transform:none}44%{transform:scaleX(4.333)}68%{transform:scaleX(2.333)}92%,100%{transform:none}",EIO);
kf("sbx",3,"0%,10%{opacity:0}44%{opacity:1}68%{opacity:.4}92%,100%{opacity:0}",EIO);

// 누르고 있는 동안 뒤는 어두워지고 미리보기 카드가 크게 뜸 (메뉴 아님)
TH2["길게 눌러 미리보기"]=K=>K.card(20,6,120,88,14)
  +K.rect(24,74,112,17,{f:C.soft,r:8})
  +[0,1,2,3].map(i=>{const y=6+i*22;return K.circ(34,y+11,5,{f:i===3?MID:SOFT})+tbar(44,y+6.5,[40,34,46,38][i],4)+gbar(44,y+13,[60,52,56,36][i],3.5)}).join("")
  +A("pkd",K.rect(20,6,120,88,{f:"rgba(18,20,26,.32)",r:14}))
  +A("pkc",K.card(34,10,92,58,12)+photo(40,16,80,30,7)+tbar(40,51.5,38,4)+gbar(40,59.5,58,3.5),"transform-origin:50% 100%")
  +A("pkr",K.circ(108,82,11,{s:C.blue,sw:2.2}))
  +A("pkf",K.fing(108,82));
kf("pkf",3,"0%,4%{opacity:0}10%,80%{opacity:1}90%,100%{opacity:0}");
kf("pkr",3,"0%,10%{opacity:0;transform:scale(.5)}32%{opacity:1;transform:none}40%,100%{opacity:0;transform:none}","animation-timing-function:linear");
kf("pkd",3,"0%,32%{opacity:0}42%,80%{opacity:1}92%,100%{opacity:0}");
kf("pkc",3,"0%,32%{opacity:0;transform:scale(.4)}44%,80%{opacity:1;transform:none}92%,100%{opacity:0;transform:scale(.7)}");

// 마우스 오른쪽 버튼이 눌림 → 커서 자리에 메뉴
TH2["우클릭"]=K=>K.blk(88,10,60,80,12)
  +K.card(22,16,52,68,26)
  +K.path("M48 16a26 26 0 0 1 26 26v6h-26z",{f:C.blue,s:"none",sw:0,o:.2})
  +A("rcb",K.path("M48 16a26 26 0 0 1 26 26v6h-26z",{f:C.blue,s:"none",sw:0}))
  +K.line(48,16,48,48,{s:"#C5CBD6",sw:1.2})+K.line(22,48,74,48,{s:"#C5CBD6",sw:1.2})
  +K.rect(45.5,24,5,12,{f:"#fff",s:"#9AA1AE",sw:1.2,r:2.5})
  +A("rct",K.path("M72 14l4-5M78 21l6-3M80 30h6",{s:C.blue,sw:1.8}))
  +A("rcm",K.card(102,36,42,46,10)+[0,1,2].map(i=>gbar(110,46+i*12,[26,20,24][i],4)).join(""),"transform-origin:0 0")
  +cur(96,24);
kf("rcb",2.8,"0%,16%{opacity:0}22%,42%{opacity:1}56%,100%{opacity:0}");
kf("rct",2.8,"0%,16%{opacity:0;transform:scale(.6)}24%,36%{opacity:1;transform:none}48%,100%{opacity:0;transform:none}");
kf("rcm",2.8,"0%,24%{opacity:0;transform:scale(.7)}34%,84%{opacity:1;transform:none}95%,100%{opacity:0;transform:none}");

// 키캡 두 개를 같이 누름 → 바로 실행
const key=(x,w,label,size,a,h)=>K.rect(x,31,w,34,{f:"#B4BCCC",r:9})
  +A(a,K.rect(x,26,w,34,{f:"#fff",s:"#D3D8E3",sw:.8,r:9})
    +A(h,K.rect(x,26,w,34,{f:"rgba(47,107,255,.14)",s:C.blue,sw:1.6,r:9}))
    +K.txt(x+w/2,43+size*.36,label,{size,w:700,a:"middle"}));
TH2["키보드 단축키"]=K=>K.blk(14,6,132,10,5)
  +key(22,58,"Ctrl",13,"k1","h1")+K.txt(90,47.5,"+",{size:13,w:700,fill:C.sub,a:"middle"})+key(100,38,"C",16,"k2","h2")
  +A("kst",K.rect(54,74,52,17,{f:C.toast,r:8.5})+K.txt(80,85.6,"복사됨",{size:8,w:600,fill:"#fff",a:"middle"}));
kf("k1",2.8,"0%,12%{transform:none}20%,64%{transform:translateY(4px)}74%,100%{transform:none}");
kf("h1",2.8,"0%,12%{opacity:0}20%,64%{opacity:1}74%,100%{opacity:0}");
kf("k2",2.8,"0%,30%{transform:none}38%,58%{transform:translateY(4px)}68%,100%{transform:none}");
kf("h2",2.8,"0%,30%{opacity:0}38%,58%{opacity:1}68%,100%{opacity:0}");
kf("kst",2.8,"0%,38%{opacity:0;transform:translateY(5px)}48%,84%{opacity:1;transform:none}95%,100%{opacity:0;transform:none}");
}
