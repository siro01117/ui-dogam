// B2 그림 추가 41: tr 화면 전환 12개 (전부 움직임)
// 기기 화면 틀 하나 안에서 앞 화면(흰 면 + 회색 막대) → 다음 화면(파란 머리 띠가 든 흰 면).
// 도감은 평소 animation:none 으로 멈춰 있다. 그래서 요소의 기본 상태(인라인 style)를 "전환이 한창인 중간 장면"으로 두고, 키프레임이 그 위를 덮는다.
// 한 주기 3초: 0~14% 앞 화면 · 14~58% 전환 · 58~84% 다음 화면 · 84~100% 처음으로.
{
const C=K.C, n2=K.n2;
const A=(c,inner,st="")=>`<g class="b2x41 b2a-n41${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,frames,extra="")=>css(`.b2a-n41${name}{animation-name:b2a-n41${name};${extra}}@keyframes b2a-n41${name}{${frames}}`);
css(`.b2x41{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.65,0,.35,1)}`);
const LIFT="url(#b2lift)";
const X0=24, Y0=8, W=112, H=84, R=12;           // 기기 화면 자리
const clip=(x,y,w,h,r,inner)=>{const c="b241c"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const photo=(x,y,w,h,r)=>{const i=K.id(),g="b241p"+i,c="b241q"+i;
  return `<defs>${K.grad(g,[[0,"#9DB8FF"],[1,"#D9C8F6"]],0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:#5F7FE6"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const WB="rgba(255,255,255,.9)";
// 화면 한 장: 흰 면(그림자) + 둥글게 자른 내용
const scr=inner=>K.rect(X0,Y0,W,H,{f:C.sf,r:R,fx:LIFT})+clip(X0,Y0,W,H,R,K.rect(X0,Y0,W,H,{f:C.sf})+inner);
const rows=(ci)=>[0,1,2,3].map(i=>{const cy=Y0+31+i*14;return K.circ(X0+17,cy,4.5,{f:ci})+gbar(X0+27,cy-4,68,3.5)+gbar(X0+27,cy+1.5,42,3)}).join("");
// 앞 화면: 목록 (회색)
const gList=()=>scr(tbar(X0+12,Y0+11,40)+rows(C.skel));
// 앞 화면: 상세 (회색 사진 자리) — 뒤로 갈 때 떠나는 화면
const gDetail=()=>scr(K.icon("back",X0+12,Y0+13,9,C.ink,2)+tbar(X0+21,Y0+10.5,36)+K.rect(X0+10,Y0+24,W-20,34,{f:C.skel,r:7})+tbar(X0+10,Y0+64,48)+gbar(X0+10,Y0+73,78));
// 다음 화면: 파란 머리 띠 + 큰 사진 + 글
const head=back=>K.rect(X0,Y0,W,20,{f:C.blue})+(back?K.icon("back",X0+12,Y0+10,9,"#fff",2):"")+K.rect(X0+(back?21:12),Y0+8,40,4,{f:WB,r:2});
const bDetail=()=>scr(head(true)+photo(X0+10,Y0+26,W-20,32,7)+tbar(X0+10,Y0+64,52)+gbar(X0+10,Y0+73,80));
// 다음 화면: 파란 머리 띠 + 목록 — 뒤로 가서 돌아온 화면
const bList=()=>scr(head(false)+rows("#C9D6FF"));
const dim=(c,o)=>A(c,K.rect(X0,Y0,W,H,{f:"#1A1F33",r:R}),`opacity:${o}`);
// 기기 틀: 얇은 짙은 테두리 + 바탕 + 안쪽만 보이게 자름
const frame=(inner,bg="#E3E7F0")=>K.rect(X0-3,Y0-3,W+6,H+6,{f:"#2A2F3C",r:R+3,fx:LIFT})+K.rect(X0,Y0,W,H,{f:bg,r:R})+clip(X0,Y0,W,H,R,inner);

// 프레임 꼴
const IN_X=`0%,14%{opacity:1;transform:translateX(${W}px)}58%,84%{opacity:1;transform:none}96%{opacity:0;transform:none}100%{opacity:0;transform:translateX(${W}px)}`;
const IN_Y=`0%,14%{opacity:1;transform:translateY(${H}px)}58%,84%{opacity:1;transform:none}96%{opacity:0;transform:none}100%{opacity:0;transform:translateY(${H}px)}`;
const OUT_BACK=t=>`0%,14%{opacity:1;transform:none}58%{opacity:1;transform:${t}}84%{opacity:0;transform:${t}}85%{opacity:0;transform:none}96%,100%{opacity:1;transform:none}`;

// 팝: 떠나는 화면이 오른쪽으로 빠지고, 돌아오는 화면이 왼쪽에서 제자리로
TH2["팝 전환"]=K=>frame(A("pob",bList()+dim("pod",.14),"transform:translateX(-18px)")+A("poa",gDetail(),`transform:translateX(${W/2}px)`));
kf("pob","0%,14%{transform:translateX(-36px)}58%,96%{transform:none}100%{transform:translateX(-36px)}");
kf("pod","0%,14%{opacity:.3}58%,96%{opacity:0}100%{opacity:.3}");
kf("poa",OUT_BACK(`translateX(${W}px)`));

// 예측형 뒤로가기: 손가락을 끄는 동안 지금 화면이 작은 둥근 카드로 줄고, 뒤에 돌아갈 화면이 보임
TH2["예측형 뒤로가기"]=K=>frame(bList()+dim("pbd",.16)+A("pba",gDetail(),"transform:translateX(8px) scale(.78)")+A("pbf",K.fing(X0+9,Y0+46),"transform:translateX(11px)"));
kf("pbd","0%,14%{opacity:.35}50%{opacity:.16}64%,100%{opacity:0}");
kf("pba","0%,14%{opacity:1;transform:none}50%{opacity:1;transform:translateX(8px) scale(.78)}64%{opacity:0;transform:translateX(46px) scale(.78)}84%{opacity:0;transform:translateX(46px) scale(.78)}85%{opacity:0;transform:none}96%,100%{opacity:1;transform:none}");
kf("pbf","0%,10%{opacity:0;transform:none}16%{opacity:1;transform:none}50%{opacity:1;transform:translateX(12px)}56%,100%{opacity:0;transform:translateX(12px)}");

// 가로 · 세로 · 깊이 공유 축: 조금만 움직이며 흐려졌다 나타남
const axis=(nm,o0,o1,n0,n1)=>{
  TH2[nm[0]]=K=>frame(A(nm[1]+"a",gList(),`opacity:.35;transform:${o0}`)+A(nm[1]+"b",bDetail(),`opacity:.65;transform:${n0}`));
  kf(nm[1]+"a",`0%,14%{opacity:1;transform:none}38%{opacity:0;transform:${o1}}84%{opacity:0;transform:${o1}}85%,100%{opacity:1;transform:none}`);
  kf(nm[1]+"b",`0%,24%{opacity:0;transform:${n1}}58%,84%{opacity:1;transform:none}96%{opacity:0;transform:none}100%{opacity:0;transform:${n1}}`)};
axis(["가로 공유 축","sx"],"translateX(-14px)","translateX(-30px)","translateX(14px)","translateX(30px)");
axis(["세로 공유 축","sy"],"translateY(-11px)","translateY(-24px)","translateY(11px)","translateY(24px)");
axis(["깊이 공유 축","sz"],"scale(1.07)","scale(1.15)","scale(.9)","scale(.8)");

// 페이드 스루: 앞 화면이 다 사라진 뒤에야 다음 화면이 살짝 커지며 나타남 (겹치는 순간 없음)
TH2["페이드 스루"]=K=>frame(A("fta",gList(),"opacity:0")+A("ftb",bDetail(),"opacity:.55;transform:scale(.93)"));
kf("fta","0%,14%{opacity:1}34%,84%{opacity:0}85%,100%{opacity:1}","animation-timing-function:linear");
kf("ftb","0%,37%{opacity:0;transform:scale(.92)}60%,84%{opacity:1;transform:none}96%{opacity:0;transform:none}100%{opacity:0;transform:scale(.92)}");

// 시트 전환: 다음 화면이 아래서 올라와 덮고, 뒤 화면은 작아져 위 모서리만 남음
TH2["시트 전환"]=K=>frame(A("sta",gList()+dim("std",.12),"transform:scale(.95)")+A("stb",bDetail(),"transform:translateY(44px)"),"#20242F");
kf("sta","0%,14%{transform:none}58%,84%{transform:scale(.9)}96%,100%{transform:none}");
kf("std","0%,14%{opacity:0}58%,84%{opacity:.25}96%,100%{opacity:0}");
kf("stb","0%,14%{opacity:1;transform:translateY(84px)}58%,84%{opacity:1;transform:translateY(10px)}96%{opacity:0;transform:translateY(10px)}100%{opacity:0;transform:translateY(84px)}");

// 패럴랙스 푸시: 다음 화면은 끝까지, 앞 화면은 1/3만 밀리며 어두워짐
TH2["패럴랙스 푸시"]=K=>frame(A("ppa",gList()+dim("ppd",.15),"transform:translateX(-18px)")+A("ppb",bDetail(),`transform:translateX(${W/2}px)`));
kf("ppa",`0%,14%{transform:none}58%,84%{transform:translateX(-${n2(W/3)}px)}85%,100%{transform:none}`);
kf("ppd","0%,14%{opacity:0}58%,84%{opacity:.32}85%,100%{opacity:0}");
kf("ppb",IN_X);

// 커버: 다음 화면만 들어와 덮음. 앞 화면은 가만히
TH2["커버"]=K=>frame(gList()+A("cvb",bDetail(),`transform:translateX(${W/2}px)`));
kf("cvb",IN_X);

// 언커버: 위에 있던 지금 화면이 빠져나가고, 밑에 가만히 있던 다음 화면이 드러남
TH2["언커버"]=K=>frame(bDetail()+A("uca",gList(),`transform:translateX(-${W/2}px)`));
kf("uca",OUT_BACK(`translateX(-${W}px)`));

// 스택 전환: 다음 화면이 카드처럼 앞에 쌓이고, 앞 화면은 뒤로 물러나 작아지고 어두워짐
TH2["스택 전환"]=K=>frame(A("ska",gList()+dim("skd",.14),"transform:scale(.9)")+A("skb",bDetail(),"transform:translateX(50px)"),"#D5DBE8");
kf("ska","0%,14%{transform:none}58%,84%{transform:scale(.84)}96%,100%{transform:none}");
kf("skd","0%,14%{opacity:0}58%,84%{opacity:.3}96%,100%{opacity:0}");
kf("skb",IN_X);

// 세로 푸시: 다음 화면이 아래서 밀고 올라오며 앞 화면을 위로 밀어냄
TH2["세로 푸시"]=K=>frame(A("vpa",gList(),"transform:translateY(-42px)")+A("vpb",bDetail(),"transform:translateY(42px)"));
kf("vpa",`0%,14%{transform:none}58%,84%{transform:translateY(-${H}px)}85%,100%{transform:none}`);
kf("vpb",IN_Y);
}
