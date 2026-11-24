// B2 그림 보충 (N=42): tr 화면 전환 11. 전부 움직임.
// 앞 화면 = 흰 면 + 회색 막대(목록), 다음 화면 = 파란 머리 띠 + 파란 사진 + 글.
// 도감은 평소 animation:none 으로 멈춰 있다. 요소의 기본 상태(인라인 style)를 "전환이 한창인 중간 장면"으로 둔다.
// 한 주기 3초: 0~14% 앞 화면 · 14~58% 전환 · 58~86% 다음 화면 · 86~100% 처음으로.
{
const C=K.C, n2=K.n2;
const A=(c,inner,st="")=>`<g class="b2x42 b2a-n42${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,frames,extra="")=>css(`.b2a-n42${name}{animation-name:b2a-n42${name};${extra}}@keyframes b2a-n42${name}{${frames}}`);
css(`.b2x42{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.65,0,.35,1)}`);
const LIN="animation-timing-function:linear";
const X=20,Y=10,W=120,H=80,R=12;
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;

const clip=(x,y,w,h,r,inner)=>{const c="b242c"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const photo=(x,y,w,h,r,alt)=>{x=n2(x);y=n2(y);w=n2(w);h=n2(h);r=n2(r);const i=K.id(),g="b242p"+i,c="b242q"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${n2(y+h)}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${n2(x+w)} ${n2(y+h*.9)}V${n2(y+h)}Z" style="fill:${mt}"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:n2(h/2)});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:n2(h/2)});
// 앞 화면: 제목 + 목록 세 줄
const oldScr=(x=X,y=Y,w=W,h=H,r=R)=>{const u=w/120,v=h/80;
  return K.rect(x,y,w,h,{f:C.sf,r})+tbar(x+12*u,y+12*v,46*u,5*v)
   +[0,1,2].map(i=>K.circ(x+18*u,y+(32+i*16)*v,n2(5*Math.min(u,v)),{f:C.skel})+gbar(x+28*u,y+(30+i*16)*v,[70,58,64][i]*u,4*v)).join("")};
// 다음 화면: 파란 머리 띠 + 큰 사진 + 글
const newScr=(x=X,y=Y,w=W,h=H,r=R)=>{const u=w/120,v=h/80,m=Math.min(u,v);
  return K.rect(x,y,w,h,{f:C.sf,r})+clip(x,y,w,h,r,K.rect(x,y,w,16*v,{f:C.blue}))
   +K.icon("back",x+10*u,y+8*v,8*m,"#fff",2)+K.rect(x+20*u,y+6*v,36*u,4*v,{f:"#fff",r:n2(2*v),o:.85})
   +photo(x+10*u,y+24*v,100*u,32*v,8*m)+tbar(x+10*u,y+62*v,52*u,5*v)+gbar(x+10*u,y+71*v,74*u,4*v)};
const DIM="#141A3C";

/* 시트 확장: 아래 미니 띠를 끌어올리면 화면 전체로 커짐 */
TH2["시트 확장"]=K=>K.card(X,Y,W,H,R)+clip(X,Y,W,H,R,
  oldScr()
  +A("sd",K.rect(X,Y,W,H,{f:DIM}),"opacity:.16")
  +A("sh",K.rect(X,Y,W,H,{f:C.sf,r:10,fx:"url(#b2lift)"})+K.rect(74,Y+2.5,12,2.4,{f:"#C5CBD8",r:1.2})
     +K.rect(X+8,Y+6,11,11,{f:C.blue,r:3})+tbar(X+24,Y+7.5,36,3.6)+gbar(X+24,Y+13,22,3)
     +photo(X+10,Y+22,W-20,36,8)+tbar(X+10,Y+64,50)+gbar(X+10,Y+73,70),"transform:translateY(31px)")
  +A("sf",K.fing(X+98,Y+11.5),"transform:translateY(31px)"));
kf("sh","0%,14%{transform:translateY(62px)}58%,86%{transform:translateY(0px)}96%,100%{transform:translateY(62px)}");
kf("sd","0%,14%{opacity:0}58%,86%{opacity:.3}96%,100%{opacity:0}");
kf("sf","0%,6%{opacity:0;transform:translateY(62px)}12%{opacity:1;transform:translateY(62px)}14%{transform:translateY(62px)}54%{opacity:1}58%{transform:translateY(0px)}64%,100%{opacity:0;transform:translateY(0px)}");

/* 앱 실행 확대: 홈 화면 아이콘 자리에서 앱 화면이 커지며 열림 */
TH2["앱 실행 확대"]=K=>K.card(X,Y,W,H,R)+clip(X,Y,W,H,R,
  A("hm",K.rect(X,Y,W,H,{f:C.sf})
    +[0,1].map(j=>[0,1,2,3].map(i=>{const x=38+i*24,y=22+j*24;return j===0&&i===3
      ?K.rect(x,y,16,16,{f:C.blue,r:4.5})+K.rect(x+4,y+4,8,8,{f:"rgba(255,255,255,.75)",r:2})
      :K.rect(x,y,16,16,{f:"#E3E8F2",r:4.5})}).join("")).join("")
    +K.rect(X+12,Y+H-18,W-24,12,{f:"#EEF1F7",r:6})+[0,1,2,3].map(i=>K.rect(48+i*18,Y+H-15.5,7,7,{f:"#D6DCE8",r:2})).join(""),"transform:scale(1.05);opacity:.6")
  +A("ap",newScr(),"transform:translate(19px,-10px) scale(.56,.6)"));
kf("hm","0%,14%{transform:none;opacity:1}58%,86%{transform:scale(1.12);opacity:.3}86.5%,100%{transform:none;opacity:1}");
kf("ap","0%,14%{opacity:0;transform:translate(38px,-20px) scale(.133,.2)}22%{opacity:1}58%,86%{opacity:1;transform:none}96%{opacity:0;transform:none}97%,100%{opacity:0;transform:translate(38px,-20px) scale(.133,.2)}");

/* 스플래시 확대 전환: 로고가 확 커지며 그 구멍 안으로 홈 화면이 드러남 */
{const LOGO="M80 34Q85.5 44.5 96 50Q85.5 55.5 80 66Q74.5 55.5 64 50Q74.5 44.5 80 34Z";
TH2["스플래시 확대 전환"]=K=>K.card(X,Y,W,H,R)+clip(X,Y,W,H,R,
  K.rect(X,Y,W,H,{f:C.sf})+tbar(X+12,Y+10,40)+K.circ(X+W-16,Y+12.5,5,{f:C.skel})
  +photo(X+12,Y+22,46,40,8)+photo(X+62,Y+22,46,40,8,true)+gbar(X+12,Y+67,40)+gbar(X+62,Y+67,34)+gbar(X+12,Y+74,28,3.5)+gbar(X+62,Y+74,22,3.5)
  +A("sp",`<path d="M-400 -450H560V550H-400Z${LOGO}" style="fill:${C.blue};fill-rule:evenodd"/>`
    +A("lg",`<path d="${LOGO}" style="fill:#fff"/>`,"opacity:0"),"transform:scale(2.6)"));
kf("sp","0%,12%{transform:scale(1);opacity:1}22%{transform:scale(.82)}58%,86%{transform:scale(10);opacity:1}86.5%{transform:scale(1);opacity:0}96%,100%{transform:scale(1);opacity:1}","animation-timing-function:cubic-bezier(.55,0,.85,.45)");
kf("lg","0%,14%{opacity:1}22%,86.5%{opacity:0}96%,100%{opacity:1}");}

/* 원형 리빌: 누른 자리(오른쪽 아래 버튼)에서 원이 퍼지며 다음 화면 */
{const AT="at 85% 82.5%";
TH2["원형 리빌"]=K=>K.card(X,Y,W,H,R)+clip(X,Y,W,H,R,
  oldScr()+K.circ(122,76,7.5,{f:C.blue})+K.icon("plus",122,76,9,"#fff",2)
  +A("cr",newScr(),`clip-path:circle(50% ${AT})`)
  +A("cf",K.fing(122,76),"opacity:.9"));
kf("cr",`0%,14%{opacity:1;clip-path:circle(0% ${AT})}58%,86%{opacity:1;clip-path:circle(125% ${AT})}96%{opacity:0;clip-path:circle(125% ${AT})}97%,100%{opacity:0;clip-path:circle(0% ${AT})}`);
kf("cf","0%,4%{opacity:0}9%,18%{opacity:1}30%,100%{opacity:0}");}

/* 아이리스: 원이 작아지며 앞 화면을 닫고(검정), 다음 화면에서 원이 커지며 열림 */
TH2["아이리스"]=K=>K.card(X,Y,W,H,R)+clip(X,Y,W,H,R,
  K.rect(X,Y,W,H,{f:"#12141A"})
  +A("io",oldScr(),"clip-path:circle(0% at 50% 50%)")
  +A("in",newScr(),"clip-path:circle(32% at 50% 50%)"));
kf("io","0%,14%{clip-path:circle(75% at 50% 50%)}36%,86%{clip-path:circle(0% at 50% 50%)}86.5%,100%{clip-path:circle(75% at 50% 50%)}");
kf("in","0%,42%{opacity:1;clip-path:circle(0% at 50% 50%)}64%,86%{opacity:1;clip-path:circle(75% at 50% 50%)}96%{opacity:0;clip-path:circle(75% at 50% 50%)}97%,100%{opacity:0;clip-path:circle(0% at 50% 50%)}");

/* 페이지 컬: 오른쪽 아래 모서리부터 종이처럼 말려 넘어가며 밑의 다음 화면이 드러남 */
{const cp=(pts,f)=>{const o=[];for(let i=0;i<pts.length;i++){const a=pts[i],b=pts[(i+1)%pts.length],fa=f(a),fb=f(b);
    if(fa>=0)o.push(a);if((fa>=0)!==(fb>=0)){const t=fa/(fa-fb);o.push([a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t])}}return o};
  const box=p=>[q=>q[0],q=>W-q[0],q=>q[1],q=>H-q[1]].reduce((s,f)=>cp(s,f),p);
  const poly=p=>{p=p.slice();if(!p.length)p=[[W,H]];while(p.length<8)p.push(p[p.length-1]);return `polygon(${p.map(([x,y])=>`${n2(x)}px ${n2(y)}px`).join(",")})`};
  // 접는 선 x+y=c (화면 왼쪽 위 기준). c=200 이면 안 접힘, 0 이면 다 넘어감
  const curl=c=>{const hp=q=>c-q[0]-q[1];
    return [poly(cp([[0,0],[W,0],[W,H],[0,H]],hp)),poly(box(cp([[c,c],[c,c-W],[c-H,c-W],[c-H,c]],hp)))]};
  const steps=[];for(let t=14;t<=58;t+=2)steps.push([t,200-200*ease((t-14)/44)]);
  const fr=k=>`0%{clip-path:${curl(200)[k]}}`+steps.map(([t,c])=>`${t}%{clip-path:${curl(c)[k]}}`).join("")+`86%{clip-path:${curl(0)[k]}}86.5%,100%{clip-path:${curl(200)[k]}}`;
  kf("pco",fr(0),LIN);
  kf("pcw","0%,86%{opacity:1}86.5%{opacity:0}96%,100%{opacity:1}");
  kf("pcf",fr(1),LIN);
  const M=curl(118);
TH2["페이지 컬"]=K=>{const g="b242g"+K.id();
  return K.card(X,Y,W,H,R)+clip(X,Y,W,H,R,newScr()
  +A("pcw",A("pco",oldScr(),`clip-path:${M[0]}`))
  +`<defs>${K.grad(g,[[0,"#C9D1E2"],[.5,"#F4F6FA"],[1,"#DCE2EE"]],1,1)}</defs>`
  +A("pcf",K.rect(X,Y,W,H,{f:`url(#${g})`}),`clip-path:${M[1]}`))};}

/* 수평 플립 전환: 화면 전체가 세로축으로 뒤집혀 뒷면이 다음 화면 */
TH2["수평 플립 전환"]=K=>`<path d="M80 3V97" style="fill:none;stroke:${C.mute};stroke-width:1;stroke-dasharray:2.5 3"/>`
  +A("fo",K.card(X,Y,W,H,R)+oldScr(),"transform:scaleX(0) skewY(-8deg)")
  +A("fn",K.card(X,Y,W,H,R)+newScr(),"transform:scaleX(.42) skewY(6deg)");
kf("fo","0%,14%{transform:none}36%,86%{transform:scaleX(0) skewY(-8deg)}86.5%,100%{transform:none}","animation-timing-function:cubic-bezier(.5,0,.9,.6)");
kf("fn","0%,36%{opacity:1;transform:scaleX(0) skewY(8deg)}58%,86%{opacity:1;transform:none}96%{opacity:0;transform:none}97%,100%{opacity:0;transform:scaleX(0) skewY(8deg)}","animation-timing-function:cubic-bezier(.1,.4,.5,1)");

/* 모프 전환: 앞뒤 슬라이드의 같은 사진이 자리 · 크기를 옮기며 이어짐 */
TH2["모프 전환"]=K=>K.card(20,14,120,70,6)
  +A("mo",K.rect(20,14,120,70,{f:"rgba(255,255,255,0)"})+tbar(62,26,48)+gbar(62,36,58)+gbar(62,44,40)+gbar(32,54,40)+gbar(32,62,64),"opacity:.4")
  +A("mn",K.rect(20,14,120,70,{f:"rgba(255,255,255,0)"})+K.rect(32,58,40,6,{f:C.blue,r:3})+gbar(32,69,42)+gbar(32,76,30,3.5),"opacity:.6")
  +A("mp",photo(82,22,48,44,6),"transform:translate(-31px,-4.5px) scale(.75)");
kf("mp","0%,14%{transform:translate(-62px,-9px) scale(.5)}58%,86%{transform:none}96%,100%{transform:translate(-62px,-9px) scale(.5)}");
kf("mo","0%,14%{opacity:1}40%,86%{opacity:0}96%,100%{opacity:1}");
kf("mn","0%,30%{opacity:0}58%,86%{opacity:1}92%,100%{opacity:0}");

/* 스왑: 두 화면이 엇갈려 앞뒤 자리를 맞바꿈 */
{const sx=38,sy=18,sw=84,sh=64,sr=10;
TH2["스왑"]=K=>A("wb",K.card(sx,sy,sw,sh,sr)+newScr(sx,sy,sw,sh,sr),"opacity:0")
  +A("wo",K.card(sx,sy,sw,sh,sr)+oldScr(sx,sy,sw,sh,sr),"opacity:.8;transform:translate(-24px,-7px) scale(.82)")
  +A("wn",K.card(sx,sy,sw,sh,sr)+newScr(sx,sy,sw,sh,sr),"transform:translate(20px,5px) scale(.96)");
kf("wb","0%,14%{opacity:.6;transform:translate(0px,-12px) scale(.82)}36%{opacity:1;transform:translate(30px,0px) scale(.9)}36.1%,86%{opacity:0;transform:translate(30px,0px) scale(.9)}86.1%{opacity:0;transform:translate(0px,-12px) scale(.82)}96%,100%{opacity:.6;transform:translate(0px,-12px) scale(.82)}");
kf("wo","0%,14%{opacity:1;transform:none}36%{opacity:1;transform:translate(-30px,0px) scale(.86)}58%,86%{opacity:.6;transform:translate(0px,-12px) scale(.82)}96%,100%{opacity:1;transform:none}");
kf("wn","0%,36%{opacity:0;transform:translate(30px,0px) scale(.9)}36.1%{opacity:1}58%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:none}");}

/* 문 열림: 가운데서 갈라진 두 문짝이 안쪽으로 열리고 뒤 화면이 다가옴 */
{const half=(x,y,w,h,r,side,f)=>side==="l"
   ?`<path d="M${x+r} ${y}H${x+w}V${y+h}H${x+r}A${r} ${r} 0 0 1 ${x} ${y+h-r}V${y+r}A${r} ${r} 0 0 1 ${x+r} ${y}Z" style="fill:${f}"/>`
   :`<path d="M${x} ${y}H${x+w-r}A${r} ${r} 0 0 1 ${x+w} ${y+r}V${y+h-r}A${r} ${r} 0 0 1 ${x+w-r} ${y+h}H${x}Z" style="fill:${f}"/>`;
TH2["문 열림"]=K=>K.rect(X,Y,W,H,{f:"rgba(255,255,255,.4)",r:R})
  +A("dn",K.card(X,Y,W,H,R)+newScr(),"transform:scale(.92)")
  +A("dl",half(X,Y,60,H,R,"l",C.sf)+tbar(32,22,40)+[0,1,2].map(i=>K.circ(38,42+i*16,5,{f:C.skel})+gbar(48,40+i*16,32)).join("")
     +A("dsl",half(X,Y,60,H,R,"l",DIM),"opacity:.14"),"transform-origin:0 50%;transform:scaleX(.42) skewY(7deg)")
  +A("dr",half(80,Y,60,H,R,"r",C.sf)+K.circ(126,24.5,4.5,{f:C.skel})+[0,1,2].map(i=>gbar(81,40+i*16,[38,26,32][i])).join("")
     +A("dsr",half(80,Y,60,H,R,"r",DIM),"opacity:.14"),"transform-origin:100% 50%;transform:scaleX(.42) skewY(-7deg)");
kf("dn","0%,14%{transform:scale(.84)}58%,86%{transform:none}96%,100%{transform:scale(.84)}");
kf("dl","0%,14%{transform:none}58%,86%{transform:scaleX(0) skewY(12deg)}96%,100%{transform:none}");
kf("dr","0%,14%{transform:none}58%,86%{transform:scaleX(0) skewY(-12deg)}96%,100%{transform:none}");
["dsl","dsr"].forEach(n=>kf(n,"0%,14%{opacity:0}58%,86%{opacity:.3}96%,100%{opacity:0}"));}

/* 폴드: 앞 화면이 병풍처럼 접히며 왼쪽으로 사라지고, 다음 화면이 오른쪽에서 펼쳐짐 */
{const PW=40;
  const ft=(i,f,right)=>{const s=1-.9*f,th=24*f,d=PW*s*Math.tan(th*Math.PI/180);
    const tx=right?(W-(3-i)*PW*s)-PW*i:PW*i*(s-1), odd=right?i%2===0:i%2===1, ty=(odd?d:0)-d/2;
    return `translate(${n2(tx)}px,${n2(ty)}px) skewY(${n2(odd?-th:th)}deg) scaleX(${n2(s)})`};
  const shade=(i,f,right)=>n2(((right?i%2===0:i%2===1)?.26:.07)*f);
  // 앞: 14~48% 접힘, 다음: 24~58% 펼쳐짐
  const fo=t=>t<=14?0:t>=48?1:ease((t-14)/34), fnn=t=>t<=24?1:t>=58?0:1-ease((t-24)/34);
  const T=[0,14,18,22,26,30,34,38,42,46,48];const T2=[24,28,32,36,40,44,48,52,56,58];
  for(let i=0;i<3;i++){
    kf("fo"+i,T.map(t=>`${t}%{transform:${ft(i,fo(t),false)};opacity:${t>=48?0:1}}`).join("")+`86%{transform:${ft(i,1,false)};opacity:0}86.5%,100%{transform:${ft(i,0,false)};opacity:1}`,LIN);
    kf("fs"+i,T.map(t=>`${t}%{opacity:${shade(i,fo(t),false)}}`).join("")+`86%{opacity:${shade(i,1,false)}}86.5%,100%{opacity:0}`,LIN);
    kf("fn"+i,`0%,22%{transform:${ft(i,1,true)};opacity:0}`+T2.map(t=>`${t}%{transform:${ft(i,fnn(t),true)};opacity:1}`).join("")+`86%{transform:${ft(i,0,true)};opacity:1}96%{transform:${ft(i,0,true)};opacity:0}97%,100%{transform:${ft(i,1,true)};opacity:0}`,LIN);
    kf("ft"+i,`0%,22%{opacity:${shade(i,1,true)}}`+T2.map(t=>`${t}%{opacity:${shade(i,fnn(t),true)}}`).join("")+`86%,100%{opacity:0}`,LIN);
  }
  const pnl=(i,f)=>{const x=X+i*PW;return i===0?`<path d="M${x+R} ${Y}H${x+PW}V${Y+H}H${x+R}A${R} ${R} 0 0 1 ${x} ${Y+H-R}V${Y+R}A${R} ${R} 0 0 1 ${x+R} ${Y}Z" style="fill:${f}"/>`
    :i===2?`<path d="M${x} ${Y}H${x+PW-R}A${R} ${R} 0 0 1 ${x+PW} ${Y+R}V${Y+H-R}A${R} ${R} 0 0 1 ${x+PW-R} ${Y+H}H${x}Z" style="fill:${f}"/>`:K.rect(x,Y,PW,H,{f})};
  const oldP=i=>pnl(i,C.sf)+[
     tbar(32,22,26)+[0,1,2].map(r=>K.circ(36,42+r*16,5,{f:C.skel})+gbar(44,40+r*16,14)).join(""),
     tbar(62,22,16)+[34,26,30].map((w,r)=>gbar(62,40+r*16,w)).join(""),
     [26,18,22].map((w,r)=>gbar(102,40+r*16,w)).join("")][i];
  const MT=["M30 64L60 47.36V64Z","M60 64V47.36L82 57L100 50V64Z","M100 64V50L130 60.8V64Z"];
  const newP=(i,g)=>{const x=X+i*PW,x0=Math.max(30,x),x1=Math.min(130,x+PW);
    return pnl(i,C.sf)+clip(X,Y,W,H,R,K.rect(x,Y,PW,16,{f:C.blue}))
     +K.rect(x0,32,x1-x0,32,{f:`url(#${g})`})+(i===2?K.circ(112,40,4,{f:"#FFF6DE"}):"")+`<path d="${MT[i]}" style="fill:#6A86E8"/>`
     +[tbar(30,70,28)+gbar(30,79,24)+K.rect(32,6+Y,22,4,{f:"#fff",r:2,o:.85}),gbar(62,70,30)+gbar(62,79,20),gbar(102,70,18)][i]};
  const FO=.66, FN=.5;
TH2["폴드"]=K=>{const g="b242f"+K.id();
  return `<defs><linearGradient id="${g}" gradientUnits="userSpaceOnUse" x1="0" y1="32" x2="0" y2="64"><stop offset="0" stop-color="#AFC6FF"/><stop offset="1" stop-color="#E5C8F3"/></linearGradient></defs>`
  +K.rect(X,Y,W,H,{f:"rgba(255,255,255,.4)",r:R})
  +[0,1,2].map(i=>A("fo"+i,oldP(i)+A("fs"+i,pnl(i,DIM),`opacity:${shade(i,FO,false)}`),`transform-origin:0 50%;transform:${ft(i,FO,false)}`)).join("")
  +[0,1,2].map(i=>A("fn"+i,newP(i,g)+A("ft"+i,pnl(i,DIM),`opacity:${shade(i,FN,true)}`),`transform-origin:0 50%;transform:${ft(i,FN,true)}`)).join("")};}
}
