// 움직이는 썸네일. 키 = 이름(겹치면 "분류키:이름", 예: "ge:탭"). 값 = SVG 내부 마크업 (viewBox 160×100)
// thumbs.js 다음에 로드. 헬퍼 R/C/P/T/LN/I/FING, 상수 PG/DIM/IC 를 그대로 쓴다.
// 움직이는 부분은 class="an-…" 로 감싸고, 스타일은 아래 ANIM_CSS 하나에 모은다.
const AN_G=(cls,inner,st="")=>`<g class="${cls}"${st?` style="${st}"`:""}>${inner}</g>`;
// 차례로 나오는 것들(타이핑 · 스트리밍 · 카운트 업 · 스크램블)의 시간표
const AN_TY=[0,1,2,3,4].map(i=>10+i*9);                       // 타이핑: 글자별 등장 %
const AN_CU={v:["0","96","312","584","841","1,052","1,197","1,284"],t:[0,8,13,19,26,34,43,54]}; // 카운트 업
const AN_SC={ch:["안","녕","하","세"],sym:[["#","@"],["%","&"],["*","$"],["@","#"]],r:[30,42,54,66]}; // 스크램블
const AN_ST=(()=>{const w=[130,130,130,60],tot=w.reduce((a,b)=>a+b),o=[];let s=10;w.forEach((wi,i)=>{const e=s+wi/tot*60;o.push({w:wi,s:+s.toFixed(1),e:+e.toFixed(1)});s=e+.2});return o})(); // 스트리밍

const ANIM={
/* 모션 · 전환 */
"페이드 업":R(30,14,100,28,"g",5)+AN_G("an-fadeup",R(30,54,100,28,"a",5))+P("M140 84V58M135 63l5-5 5 5","sk",1.6),
"패럴랙스":AN_G("an-plxb",R(10,12,140,40,"g",5))+AN_G("an-plxf",R(30,30,100,36,"a",5))+P("M150 20v10M147 27l3 3 3-3","sg",1.6)+P("M140 70v22M137 89l3 3 3-3","sk",1.6),
"스케일 인":R(30,14,100,72,"sg",8)+AN_G("an-scalein",R(58,34,44,32,"a",5))+P("M54 30l-10-8M106 30l10-8M54 70l-10 8M106 70l10 8","sk",1.6),
"텍스트 리빌":[0,1,2,3].map(i=>AN_G("an-rv"+i,R(20,24+i*16,i<3?120:72,6,"k",3))).join(""),
"스태거":[0,1,2].map(i=>AN_G("an-stg"+i,R(20+i*14,12+i*28,100,22,"a",5))).join(""),
"푸시 전환":AN_G("an-pushold",R(4,10,72,80,"g",6))+AN_G("an-pushnew",R(80,10,72,80,"a",6)+LN(88,22,56,4,9,"k"))+P("M70 96h-30M45 92l-5 4 5 4","sk",1.6),
"모달 등장":R(20,6,120,88,"g",6)+AN_G("an-modal",R(20,38,120,62,"a",8))+P("M148 92V60M144 64l4-4 4 4","sk",1.6),
"탭 전환":AN_G("an-tabstrip",R(-100,8,116,74,"g",5)+R(22,8,116,74,"a an-tabp0",5)+R(144,8,116,74,"g an-tabp1",5)+R(266,8,116,74,"g",5))+R(0,86,160,14,"fr",0)+[0,1,2].map(i=>C(40+i*40,93,3,"g")).join("")+AN_G("an-tabdot",C(80,93,3,"k")),
"카드 확장":R(10,30,40,40,"g",5)+`<path d="M52 32l12-22M52 68l12 22" class="sk" stroke-width="1.4" stroke-dasharray="3 3"/>`+AN_G("an-cardx",R(64,8,88,84,"a",6)),
"공유 요소 전환":R(4,10,70,80,"fr",6)+R(12,18,26,20,"g",4)+R(86,10,70,80,"fr",6)+`<path d="M38 28C60 28 70 30 88 30" class="sk" stroke-width="1.4" stroke-dasharray="3 3"/>`+AN_G("an-shared",R(86,10,70,40,"a",6)),
"이즈 아웃":R(20,14,120,72,"sg",4)+P("M20 86C44 30 80 14 140 14","sa",3)+P("M20 86C44 30 80 14 140 14","sk",1)+AN_G("an-efade",AN_G("an-ex",AN_G("an-eoy",C(20,86,4.5,"k")))),
"이즈 인":R(20,14,120,72,"sg",4)+P("M20 86C80 86 116 70 140 14","sa",3)+P("M20 86C80 86 116 70 140 14","sk",1)+AN_G("an-efade",AN_G("an-ex",AN_G("an-eiy",C(20,86,4.5,"k")))),
"스프링":R(20,24,120,62,"sg",4)+P("M20 86C40 10 60 6 74 20S100 34 112 26 132 22 140 24","sa",3)+P("M20 86C40 10 60 6 74 20S100 34 112 26 132 22 140 24","sk",1)+`<path d="M20 24h120" class="sk" stroke-width="1" stroke-dasharray="3 3"/>`+AN_G("an-efade",AN_G("an-ex",AN_G("an-spy",C(20,86,4.5,"k")))),
"러버밴드":AN_G("an-rubber",[0,1,2].map(i=>R(10,4+i*20,140,16,"g",4)).join("")+R(10,64,140,16,"g",4)+R(10,82,140,14,"a",4))+P("M150 66v26M146 88l4 4 4-4","sk",1.4),
"타이핑 효과":AN_TY.map((_,i)=>AN_G("an-ty"+i,T(20+i*16.5,58,"안녕하세요"[i],"tk",16,"start",500))).join("")+AN_G("an-tycur",AN_G("an-blink",R(19,43,3,18,"a",1))),
"카운트 업":AN_CU.v.map((v,i)=>AN_G("an-cu"+i,T(70,60,v,"tk",22,"middle",300))).join("")+R(120,36,22,28,"a",5)+P("M131 58V42M126 47l5-5 5 5","sk",1.8),
"스크램블":AN_SC.ch.map((ch,i)=>{const x=53+i*18;return AN_G("an-scr"+i,R(x-9,41,18,24,"a",3)+AN_G("an-flka",T(x,58,AN_SC.sym[i][0],"tk",18,"middle",500))+AN_G("an-flkb",T(x,58,AN_SC.sym[i][1],"tk",18,"middle",500)))+AN_G("an-fin"+i,T(x,58,ch,"tk",18,"middle",500))}).join(""),
"블러 인":R(40,32,80,36,"a",6)+AN_G("an-blurin",T(80,58,"안녕","tk",18,"middle",700)),
/* 제스처 */
"ge:탭":AN_G("an-tapring",C(80,48,16,"sga"))+AN_G("an-tapdot",C(80,48,8,"a"))+AN_G("an-taphand",I(IC.hand,86,62,1.1,"sk",1.4)),
"더블 탭":AN_G("an-dt0",C(80,44,14,"sga"))+AN_G("an-dt1",C(80,44,14,"sga"))+AN_G("an-dtdot",C(80,44,7,"a"))+AN_G("an-dthand",I(IC.hand,86,60,1.1,"sk",1.4)),
"길게 누르기":C(80,46,16,"sg2")+`<circle cx="80" cy="46" r="16" class="sa3 an-hold" stroke-width="4" pathLength="100" stroke-dasharray="100" transform="rotate(-90 80 46)"/>`+AN_G("an-holddot",C(80,46,7,"a"))+T(80,84,"0.5초","tk",8,"middle",700),
"스와이프":P("M100 78H52M58 73l-6 5 6 5","sg",1.6)+AN_G("an-swtrail",`<path d="M110 50H50" class="sa" stroke-width="10" opacity=".5"/>`)+AN_G("an-swf",FING(110,50)),
"드래그":`<rect x="14" y="30" width="50" height="40" rx="5" class="sk" stroke-width="1.2" stroke-dasharray="3 3"/>`+AN_G("an-drag",R(92,22,54,40,"a",5)+C(118,42,6,"k")),
"핀치":AN_G("an-pimg",R(68,38,24,24,"g",4))+AN_G("an-pf1",C(64,58,7,"a"))+AN_G("an-pf2",C(96,42,7,"a"))+P("M46 70v6h6M114 30v-6h-6","sk",2),
"밀어서 삭제":R(10,14,140,20,"g",4)+R(120,40,40,20,"x",0)+T(140,53,"삭제","tw",8,"middle",700)+AN_G("an-sdel",R(-30,40,154,20,"g",4)+C(100,50,6,"a"))+R(10,66,140,20,"g",4),
"엣지 스와이프":AN_G("an-edgepg",LN(90,20,60,8,8,"g"))+R(0,0,6,100,"a",0)+P("M30 86h40M64 81l6 5-6 5","sg",1.6)+AN_G("an-edgef",C(14,50,7,"a")),
/* 움직임이 핵심인 다른 항목 */
"토스트":PG+AN_G("an-toast",R(40,76,80,14,"a",7)+R(54,81.5,52,3,"k",1.5)),
"바텀시트":PG+AN_G("an-dim",DIM)+AN_G("an-sheet",R(0,46,160,60,"a",10)+R(68,52,24,3,"k",1.5)+LN(16,64,128,3,9,"k")),
"드로어":PG+AN_G("an-dim",DIM)+AN_G("an-drawer",R(-10,0,92,100,"a",8)+LN(10,16,56,6,10,"k")),
"스켈레톤":AN_G("an-skel",R(10,10,30,30,"a",15)+LN(48,16,100,2,9,"a")+R(10,48,140,28,"a",5)+LN(10,82,140,2,8,"a")),
"스피너":C(80,50,16,"sg")+AN_G("an-spin",P("M80 34a16 16 0 0 1 16 16","sa",4)),
"시머":`<defs><linearGradient id="an-shg" x1="0" x2="1"><stop offset="0" style="stop-color:var(--acc-fill);stop-opacity:0"/><stop offset=".5" style="stop-color:var(--acc-fill)"/><stop offset="1" style="stop-color:var(--acc-fill);stop-opacity:0"/></linearGradient><clipPath id="an-shc"><rect x="10" y="10" width="30" height="30" rx="15"/><rect x="48" y="16" width="100" height="3" rx="1.5"/><rect x="48" y="25" width="60" height="3" rx="1.5"/><rect x="10" y="48" width="140" height="40" rx="5"/></clipPath></defs>`+R(10,10,30,30,"g",15)+R(48,16,100,3,"g",1.5)+R(48,25,60,3,"g",1.5)+R(10,48,140,40,"g",5)+`<g clip-path="url(#an-shc)">${AN_G("an-shim",`<rect x="-60" y="0" width="60" height="100" fill="url(#an-shg)"/>`)}</g>`,
"당겨서 새로고침":AN_G("an-ptricon",AN_G("an-ptrspin",C(80,16,9,"a")+P("M80 9a7 7 0 1 1-6 3.5","sk",1.6)))+AN_G("an-ptrlist",[0,1,2].map(i=>R(10,44+i*20,140,16,"g",4)).join("")),
"진행 바":T(14,40,"3/5 완료","tk",9,"start",700)+R(14,48,132,8,"g",4)+AN_G("an-prog",R(14,48,132,8,"a",4)),
"스크롤 진행 바":AN_G("an-scrc",R(10,12,80,8,"f")+LN(10,28,140,12,8,"g"))+AN_G("an-scrb",R(0,0,160,4,"a",0)),
"캐러셀":AN_G("an-carstrip",R(-134,16,140,60,"g",6)+R(10,16,140,60,"a an-car0",6)+R(154,16,140,60,"g an-car1",6)+R(298,16,140,60,"g an-car2",6)+R(442,16,140,60,"g",6))+[0,1,2,3].map(i=>C(68+i*8,88,2.5,"g")).join("")+AN_G("an-cardot",C(68,88,2.5,"k")),
"무한 스크롤":AN_G("an-inf",[0,1,2,3].map(i=>R(14,8+i*24,132,20,"g",4)).join("")+R(14,104,132,20,"a an-infrow",4)+AN_G("an-infic",AN_G("an-infspin",I(IC.refresh,80,114,.4,"sk",2)))),
"토글":LN(20,44,60,2,8,"g")+R(100,38,40,24,"a an-tgtrack",12)+AN_G("an-tgknob",C(128,50,9,"w")),
"체크 그리기":AN_G("an-chkc",C(80,50,22,"a"))+`<path d="M69 50l7 7 14-14" class="sk an-chk" stroke-width="3.2" pathLength="1" stroke-dasharray="1"/>`,
"생각 중 표시":R(12,14,90,20,"g",10)+R(12,44,56,22,"a",11)+[0,1,2].map(i=>AN_G("an-think",C(28+i*12,55,2.8,"k"),`animation-delay:${(i*.15).toFixed(2)}s`)).join(""),
"스트리밍 답변":R(70,8,80,16,"g",8)+AN_ST.map((l,i)=>AN_G("an-st"+i,R(12,34+i*9,l.w,3,"g",1.5))).join("")+AN_G("an-stcur",R(12,31,3,9,"a",1)),
};

const AN_EASE="cubic-bezier(.2,.7,.3,1)";
const ANIM_CSS=`
[class^="an-"],[class*=" an-"]{transform-box:fill-box;transform-origin:center;animation-duration:2.6s;animation-timing-function:${AN_EASE};animation-iteration-count:infinite;animation-fill-mode:both}
.an-blink{animation-name:an-blink;animation-duration:.8s;animation-timing-function:linear}
@keyframes an-blink{0%,49%{opacity:1}50%,100%{opacity:0}}

/* 모션 · 전환 */
.an-fadeup{animation-name:an-fadeup;animation-duration:2.4s}
@keyframes an-fadeup{0%,10%{opacity:0;transform:translateY(16px)}45%,82%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
.an-plxb{animation-name:an-plxb;animation-duration:3s}.an-plxf{animation-name:an-plxf;animation-duration:3s}
@keyframes an-plxb{0%,12%{transform:none}50%,62%{transform:translateY(-5px)}100%{transform:none}}
@keyframes an-plxf{0%,12%{transform:none}50%,62%{transform:translateY(-22px)}100%{transform:none}}
.an-scalein{animation-name:an-scalein;animation-duration:2.4s}
@keyframes an-scalein{0%,10%{opacity:0;transform:scale(.35)}45%,82%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
${[0,1,2,3].map(i=>{const s=8+i*14;return `.an-rv${i}{animation-name:an-rv${i};animation-duration:2.8s}@keyframes an-rv${i}{0%,${s}%{opacity:.12}${s+16}%,84%{opacity:1}96%,100%{opacity:.12}}`}).join("\n")}
${[0,1,2].map(i=>{const s=8+i*12;return `.an-stg${i}{animation-name:an-stg${i};animation-duration:2.6s}@keyframes an-stg${i}{0%,${s}%{opacity:0;transform:translateY(10px)}${s+22}%,82%{opacity:1;transform:none}95%,100%{opacity:0;transform:none}}`}).join("\n")}
.an-pushnew{animation-name:an-pushnew;animation-duration:2.8s}.an-pushold{animation-name:an-pushold;animation-duration:2.8s}
@keyframes an-pushnew{0%,10%{transform:translateX(84px);opacity:1}50%,84%{transform:none;opacity:1}97%{transform:none;opacity:0}100%{transform:translateX(84px);opacity:0}}
@keyframes an-pushold{0%,10%{transform:none;opacity:1}50%,84%{transform:translateX(-24px);opacity:.5}100%{transform:none;opacity:1}}
.an-modal{animation-name:an-modal;animation-duration:2.6s}
@keyframes an-modal{0%,10%{transform:translateY(64px);opacity:1}48%,84%{transform:none;opacity:1}97%{transform:none;opacity:0}100%{transform:translateY(64px);opacity:0}}
.an-tabstrip,.an-tabdot,.an-tabp0,.an-tabp1{animation-duration:3s}
.an-tabstrip{animation-name:an-tabstrip}.an-tabdot{animation-name:an-tabdot}.an-tabp0{animation-name:an-tabp0}.an-tabp1{animation-name:an-tabp1}
@keyframes an-tabstrip{0%,12%{transform:none}42%,62%{transform:translateX(-122px)}92%,100%{transform:none}}
@keyframes an-tabdot{0%,12%{transform:none}42%,62%{transform:translateX(40px)}92%,100%{transform:none}}
@keyframes an-tabp0{0%,12%{fill:var(--acc-fill)}42%,62%{fill:var(--line)}92%,100%{fill:var(--acc-fill)}}
@keyframes an-tabp1{0%,12%{fill:var(--line)}42%,62%{fill:var(--acc-fill)}92%,100%{fill:var(--line)}}
.an-cardx{animation-name:an-cardx;animation-duration:2.8s;transform-origin:0 0}
@keyframes an-cardx{0%{opacity:0;transform:translate(-54px,22px) scale(.4545,.4762)}8%,16%{opacity:1;transform:translate(-54px,22px) scale(.4545,.4762)}52%,84%{opacity:1;transform:none}97%{opacity:0;transform:none}100%{opacity:0;transform:translate(-54px,22px) scale(.4545,.4762)}}
.an-shared{animation-name:an-shared;animation-duration:2.8s;transform-origin:0 0}
@keyframes an-shared{0%{opacity:0;transform:translate(-74px,8px) scale(.3714,.5)}8%,16%{opacity:1;transform:translate(-74px,8px) scale(.3714,.5)}52%,84%{opacity:1;transform:none}97%{opacity:0;transform:none}100%{opacity:0;transform:translate(-74px,8px) scale(.3714,.5)}}
/* 이즈 · 스프링: 점이 x 는 일정하게, y 는 그래프 곡선 그대로 움직여 선을 따라간다 */
.an-efade,.an-ex,.an-eoy,.an-eiy,.an-spy{animation-duration:2.6s}
.an-efade{animation-name:an-efade}.an-ex{animation-name:an-ex}.an-eoy{animation-name:an-eoy}.an-eiy{animation-name:an-eiy}.an-spy{animation-name:an-spy}
@keyframes an-efade{0%{opacity:0}6%,86%{opacity:1}97%,100%{opacity:0}}
@keyframes an-ex{0%,14%{transform:none;animation-timing-function:linear}70%,100%{transform:translateX(120px)}}
@keyframes an-eoy{0%,14%{transform:none;animation-timing-function:cubic-bezier(.2,.78,.5,1)}70%,100%{transform:translateY(-72px)}}
@keyframes an-eiy{0%,14%{transform:none;animation-timing-function:cubic-bezier(.5,0,.8,.222)}70%,100%{transform:translateY(-72px)}}
@keyframes an-spy{0%,14%{transform:none;animation-timing-function:cubic-bezier(.2,.8,.4,1)}32.5%{transform:translateY(-73px);animation-timing-function:cubic-bezier(.37,0,.63,1)}50%{transform:translateY(-55px);animation-timing-function:cubic-bezier(.37,0,.63,1)}64%{transform:translateY(-65px);animation-timing-function:cubic-bezier(.37,0,.63,1)}70%,100%{transform:translateY(-62px)}}
.an-rubber{animation-name:an-rubber;animation-duration:2.4s}
@keyframes an-rubber{0%,15%{transform:none}38%{transform:translateY(-14px);animation-timing-function:cubic-bezier(.3,1.5,.5,1)}62%,100%{transform:none}}
${AN_TY.map((s,i)=>`.an-ty${i}{animation-name:an-ty${i};animation-duration:3s}@keyframes an-ty${i}{0%,${s}%{opacity:0}${s+.1}%,86%{opacity:1}96%,100%{opacity:0}}`).join("\n")}
.an-tycur{animation-name:an-tycur;animation-duration:3s;animation-timing-function:linear}
@keyframes an-tycur{0%{transform:none}${AN_TY.map((s,i)=>`${s}%{transform:translateX(${(i*16.5).toFixed(1)}px)}${s+.1}%{transform:translateX(${((i+1)*16.5).toFixed(1)}px)}`).join("")}96%{transform:translateX(${(5*16.5).toFixed(1)}px)}100%{transform:none}}
${AN_CU.v.map((_,i)=>{const t=AN_CU.t,last=i===t.length-1;return `.an-cu${i}{animation-name:an-cu${i};animation-duration:3s}@keyframes an-cu${i}{`+(last?`0%,${t[i]}%{opacity:0}${t[i]+.1}%,86%{opacity:1}96%,100%{opacity:0}`:i===0?`0%,${t[1]}%{opacity:1}${t[1]+.1}%,100%{opacity:0}`:`0%,${t[i]}%{opacity:0}${t[i]+.1}%,${t[i+1]}%{opacity:1}${t[i+1]+.1}%,100%{opacity:0}`)+`}`}).join("\n")}
${AN_SC.r.map((r,i)=>`.an-scr${i}{animation-name:an-scr${i};animation-duration:3s}.an-fin${i}{animation-name:an-fin${i};animation-duration:3s}@keyframes an-scr${i}{0%,${r}%{opacity:1}${r+.1}%,88%{opacity:0}96%,100%{opacity:1}}@keyframes an-fin${i}{0%,${r}%{opacity:0}${r+.1}%,88%{opacity:1}96%,100%{opacity:0}}`).join("\n")}
.an-flka,.an-flkb{animation-duration:.24s;animation-timing-function:linear}
.an-flka{animation-name:an-flka}.an-flkb{animation-name:an-flkb}
@keyframes an-flka{0%,49%{opacity:1}50%,100%{opacity:0}}
@keyframes an-flkb{0%,49%{opacity:0}50%,100%{opacity:1}}
.an-blurin{animation-name:an-blurin;animation-duration:2.6s}
@keyframes an-blurin{0%,10%{filter:blur(4px);opacity:.35}50%,84%{filter:blur(0px);opacity:1}97%,100%{filter:blur(4px);opacity:.35}}

/* 제스처 */
.an-tapring,.an-tapdot,.an-taphand{animation-duration:2.4s}
.an-tapring{animation-name:an-tapring}.an-tapdot{animation-name:an-tapdot}.an-taphand{animation-name:an-taphand}
@keyframes an-taphand{0%,18%{transform:translate(3px,6px)}32%{transform:none}38%{transform:scale(.93)}46%,62%{transform:none}84%,100%{transform:translate(3px,6px)}}
@keyframes an-tapring{0%,36%{opacity:0;transform:scale(.45)}39%{opacity:1;transform:scale(.55)}72%,100%{opacity:0;transform:scale(1.3)}}
@keyframes an-tapdot{0%,36%{transform:none}43%{transform:scale(1.25)}58%,100%{transform:none}}
.an-dt0,.an-dt1,.an-dtdot,.an-dthand{animation-duration:2.6s}
.an-dt0{animation-name:an-dt0}.an-dt1{animation-name:an-dt1}.an-dtdot{animation-name:an-dtdot}.an-dthand{animation-name:an-dthand}
@keyframes an-dthand{0%,18%{transform:translate(3px,6px)}30%{transform:none}34%{transform:scale(.93)}39%{transform:none}43%{transform:scale(.93)}49%,62%{transform:none}84%,100%{transform:translate(3px,6px)}}
@keyframes an-dt0{0%,33%{opacity:0;transform:scale(.45)}35%{opacity:1;transform:scale(.55)}62%,100%{opacity:0;transform:scale(1.35)}}
@keyframes an-dt1{0%,42%{opacity:0;transform:scale(.45)}44%{opacity:1;transform:scale(.55)}74%,100%{opacity:0;transform:scale(1.5)}}
@keyframes an-dtdot{0%,33%{transform:none}37%{transform:scale(1.2)}41%{transform:none}46%{transform:scale(1.3)}60%,100%{transform:none}}
.an-hold{animation-name:an-hold;animation-duration:2.6s;animation-timing-function:linear}
@keyframes an-hold{0%,10%{stroke-dashoffset:100;opacity:1}60%,84%{stroke-dashoffset:0;opacity:1}96%,100%{stroke-dashoffset:0;opacity:0}}
.an-holddot{animation-name:an-holddot;animation-duration:2.6s}
@keyframes an-holddot{0%,6%{transform:none}12%,60%{transform:scale(.85)}66%{transform:scale(1.25)}76%,100%{transform:none}}
.an-swf,.an-swtrail{animation-duration:2.4s}
.an-swf{animation-name:an-swf}.an-swtrail{animation-name:an-swtrail;transform-origin:right center}
@keyframes an-swf{0%,12%{opacity:0;transform:none}18%{opacity:1;transform:none}56%{opacity:1;transform:translateX(-60px)}72%,100%{opacity:0;transform:translateX(-60px)}}
@keyframes an-swtrail{0%,18%{opacity:1;transform:scaleX(0)}56%{opacity:1;transform:scaleX(1)}72%,100%{opacity:0;transform:scaleX(1)}}
.an-drag{animation-name:an-drag;animation-duration:2.8s}
@keyframes an-drag{0%,12%{opacity:1;transform:translate(-78px,8px)}18%{transform:translate(-78px,8px) scale(1.05)}55%{transform:scale(1.05)}62%,84%{opacity:1;transform:none}96%{opacity:0;transform:none}100%{opacity:0;transform:translate(-78px,8px)}}
.an-pimg,.an-pf1,.an-pf2{animation-duration:2.8s}
.an-pimg{animation-name:an-pimg}.an-pf1{animation-name:an-pf1}.an-pf2{animation-name:an-pf2}
@keyframes an-pimg{0%,14%{transform:none}50%,70%{transform:scale(1.8)}96%,100%{transform:none}}
@keyframes an-pf1{0%,14%{transform:none}50%,70%{transform:translate(-10px,10px)}96%,100%{transform:none}}
@keyframes an-pf2{0%,14%{transform:none}50%,70%{transform:translate(10px,-10px)}96%,100%{transform:none}}
.an-sdel{animation-name:an-sdel;animation-duration:2.8s}
@keyframes an-sdel{0%,14%{transform:translateX(40px)}50%,74%{transform:none}96%,100%{transform:translateX(40px)}}
.an-edgef,.an-edgepg{animation-duration:2.6s}
.an-edgef{animation-name:an-edgef}.an-edgepg{animation-name:an-edgepg}
@keyframes an-edgef{0%,12%{opacity:0;transform:none}18%{opacity:1;transform:none}55%{opacity:1;transform:translateX(60px)}70%,100%{opacity:0;transform:translateX(60px)}}
@keyframes an-edgepg{0%,18%{opacity:1;transform:none}55%,80%{opacity:.25;transform:translateX(56px)}96%,100%{opacity:1;transform:none}}

/* 그 밖의 움직임 */
.an-toast{animation-name:an-toast;animation-duration:2.8s}
@keyframes an-toast{0%,10%{opacity:0;transform:translateY(14px)}34%,74%{opacity:1;transform:none}90%,100%{opacity:0;transform:none}}
.an-dim,.an-sheet,.an-drawer{animation-duration:2.8s}
.an-dim{animation-name:an-dim}.an-sheet{animation-name:an-sheet}.an-drawer{animation-name:an-drawer}
@keyframes an-dim{0%,10%{opacity:0}40%,80%{opacity:1}94%,100%{opacity:0}}
@keyframes an-sheet{0%,10%{transform:translateY(58px)}42%,80%{transform:none}96%,100%{transform:translateY(58px)}}
@keyframes an-drawer{0%,10%{transform:translateX(-84px)}42%,80%{transform:none}96%,100%{transform:translateX(-84px)}}
.an-skel{animation-name:an-skel;animation-duration:2s;animation-timing-function:ease-in-out}
@keyframes an-skel{0%,100%{opacity:1}50%{opacity:.4}}
.an-spin{animation-name:an-spin;animation-duration:1s;animation-timing-function:linear;transform-box:view-box;transform-origin:80px 50px}
@keyframes an-spin{to{transform:rotate(360deg)}}
.an-shim{animation-name:an-shim;animation-duration:2.2s;animation-timing-function:cubic-bezier(.45,0,.4,1)}
@keyframes an-shim{0%{transform:none}70%,100%{transform:translateX(220px)}}
.an-ptricon,.an-ptrspin,.an-ptrlist{animation-duration:2.8s}
.an-ptricon{animation-name:an-ptricon}.an-ptrlist{animation-name:an-ptrlist}
.an-ptrspin{animation-name:an-ptrspin;transform-box:view-box;transform-origin:80px 16px}
@keyframes an-ptrlist{0%,10%{transform:translateY(-16px)}36%,72%{transform:none}90%,100%{transform:translateY(-16px)}}
@keyframes an-ptricon{0%,14%{opacity:0;transform:translateY(-12px)}36%,72%{opacity:1;transform:none}86%,100%{opacity:0;transform:translateY(-12px)}}
@keyframes an-ptrspin{0%,14%{transform:rotate(-120deg)}36%{transform:none;animation-timing-function:linear}72%,100%{transform:rotate(360deg)}}
.an-prog{animation-name:an-prog;animation-duration:2.6s;transform-origin:left center}
@keyframes an-prog{0%,10%{opacity:1;transform:scaleX(.08)}55%,86%{opacity:1;transform:scaleX(.6)}96%{opacity:0;transform:scaleX(.6)}100%{opacity:0;transform:scaleX(.08)}}
.an-scrc,.an-scrb{animation-duration:3s}
.an-scrc{animation-name:an-scrc}.an-scrb{animation-name:an-scrb;transform-origin:left center}
@keyframes an-scrc{0%,12%{transform:none}64%,84%{transform:translateY(-40px)}100%{transform:none}}
@keyframes an-scrb{0%,12%{transform:scaleX(.1)}64%,84%{transform:scaleX(.85)}100%{transform:scaleX(.1)}}
.an-carstrip,.an-cardot,.an-car0,.an-car1,.an-car2{animation-duration:3.6s}
.an-carstrip{animation-name:an-carstrip}.an-cardot{animation-name:an-cardot}.an-car0{animation-name:an-car0}.an-car1{animation-name:an-car1}.an-car2{animation-name:an-car2}
@keyframes an-carstrip{0%,15%{transform:none}30%,48%{transform:translateX(-144px)}63%,81%{transform:translateX(-288px)}96%,100%{transform:none}}
@keyframes an-cardot{0%,15%{transform:none}30%,48%{transform:translateX(8px)}63%,81%{transform:translateX(16px)}96%,100%{transform:none}}
@keyframes an-car0{0%,15%{fill:var(--acc-fill)}30%,81%{fill:var(--line)}96%,100%{fill:var(--acc-fill)}}
@keyframes an-car1{0%,15%{fill:var(--line)}30%,48%{fill:var(--acc-fill)}63%,100%{fill:var(--line)}}
@keyframes an-car2{0%,48%{fill:var(--line)}63%,81%{fill:var(--acc-fill)}96%,100%{fill:var(--line)}}
.an-inf,.an-infrow,.an-infic{animation-duration:3s}
.an-inf{animation-name:an-inf}.an-infrow{animation-name:an-infrow}.an-infic{animation-name:an-infic}
.an-infspin{animation-name:an-spin;animation-duration:1s;animation-timing-function:linear;transform-box:view-box;transform-origin:80px 114px}
@keyframes an-inf{0%{opacity:0;transform:none}5%,10%{opacity:1;transform:none}35%,86%{opacity:1;transform:translateY(-24px)}96%{opacity:0;transform:translateY(-24px)}100%{opacity:0;transform:none}}
@keyframes an-infrow{0%,70%{fill:var(--acc-fill)}80%,100%{fill:var(--line)}}
@keyframes an-infic{0%,70%{opacity:1}80%,100%{opacity:0}}
.an-tgtrack,.an-tgknob{animation-duration:2.6s}
.an-tgtrack{animation-name:an-tgtrack}.an-tgknob{animation-name:an-tgknob}
@keyframes an-tgtrack{0%,15%{fill:var(--line)}35%,65%{fill:var(--acc-fill)}85%,100%{fill:var(--line)}}
@keyframes an-tgknob{0%,15%{transform:translateX(-16px)}35%,65%{transform:none}85%,100%{transform:translateX(-16px)}}
.an-chkc,.an-chk{animation-duration:2.6s}
.an-chkc{animation-name:an-chkc}.an-chk{animation-name:an-chk}
@keyframes an-chkc{0%,8%{opacity:0;transform:scale(.6)}24%{opacity:1;transform:scale(1.06)}32%,84%{opacity:1;transform:none}96%,100%{opacity:0;transform:none}}
@keyframes an-chk{0%,26%{stroke-dashoffset:1;opacity:1}50%,84%{stroke-dashoffset:0;opacity:1}96%,100%{stroke-dashoffset:0;opacity:0}}
.an-think{animation-name:an-think;animation-duration:1.2s;animation-timing-function:ease-in-out}
@keyframes an-think{0%,60%,100%{opacity:.4;transform:none}30%{opacity:1;transform:translateY(-3px)}}
${AN_ST.map((l,i)=>`.an-st${i}{animation-name:an-st${i};animation-duration:3.2s;animation-timing-function:linear;transform-origin:left center}@keyframes an-st${i}{0%,${l.s}%{opacity:1;transform:scaleX(0)}${l.e}%,86%{opacity:1;transform:none}96%{opacity:0;transform:none}100%{opacity:0;transform:scaleX(0)}}`).join("\n")}
.an-stcur{animation-name:an-stcur;animation-duration:3.2s;animation-timing-function:linear}
@keyframes an-stcur{0%{opacity:1;transform:none}${AN_ST.map((l,i)=>`${l.s}%{transform:translate(0px,${i*9}px)}${l.e}%{transform:translate(${l.w}px,${i*9}px)}`).join("")}86%{opacity:1;transform:translate(${AN_ST[3].w}px,27px)}96%{opacity:0}100%{opacity:0;transform:none}}

@media (prefers-reduced-motion:reduce){[class^="an-"],[class*=" an-"]{animation:none!important}
${AN_SC.r.map((_,i)=>".an-scr"+i).concat(AN_CU.v.slice(0,-1).map((_,i)=>".an-cu"+i)).join(",")}{opacity:0}}
`;
