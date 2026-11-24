// B2 그림 보충 (N=43): tr 화면 전환 11개 (전부 움직임)
// 앞 화면 = 흰 면 + 회색 목록, 다음 화면 = 파란 머리 띠 + 파란 사진 + 글.
// 도감은 평소 animation:none 으로 멈춰 있다. 그래서 요소의 기본 상태(인라인 style)를 "전환이 한창인 순간"으로 두고, 키프레임이 그 위를 덮는다.
{
const C=K.C, n2=K.n2;
const A=(c,inner,st="")=>`<g class="b2x43 b2a-n43${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,dur,frames,extra="")=>css(`.b2a-n43${name}{animation-name:b2a-n43${name};animation-duration:${dur}s;${extra}}@keyframes b2a-n43${name}{${frames}}`);
css(`.b2x43{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.2,.7,.3,1)}`);
const EIO="animation-timing-function:cubic-bezier(.65,0,.35,1)", EIN="animation-timing-function:cubic-bezier(.55,0,.8,.2)", LIN="animation-timing-function:linear";
const D=3;
// 화면 틀
const X=24,Y=10,W=112,H=80,R=12;
const photo=(x,y,w,h,r,alt)=>{const i=K.id(),g="b243p"+i,c="b243q"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${y+h}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${x+w} ${n2(y+h*.9)}V${y+h}Z" style="fill:${mt}"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:h/2});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:h/2});
const clip=(inner,x=X,y=Y,w=W,h=H,r=R)=>{const c="b243c"+K.id();return `<defs><clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const frame=()=>K.card(X,Y,W,H,R);
// 앞 화면: 띠 5장 (0 = 제목, 1~4 = 목록 줄). 띠마다 흰 바탕이 있어 혼자 떼어 움직여도 된다
const oldRow=i=>{const y=Y+16*i;
  return K.rect(X,y,W,16,{f:"#fff"})+(i===0?tbar(34,y+6,44):K.circ(38,y+8,4.5,{f:"#D3D8E3"})+gbar(48,y+6,i%2?70:56));};
const oldS=()=>[0,1,2,3,4].map(oldRow).join("");
// 다음 화면: 파란 머리 띠 + 큰 사진 + 글
const newS=()=>K.rect(X,Y,W,H,{f:"#fff"})+K.rect(X,Y,W,16,{f:C.blue})+K.rect(34,16,40,4,{f:"rgba(255,255,255,.85)",r:2})
  +photo(34,32,92,30,7)+tbar(34,69,52)+gbar(34,79,74);
const at=(dx,inner)=>`<g transform="translate(${dx} 0)">${inner}</g>`;

/* 블라인드: 띠가 제자리에서 한꺼번에 돌아 눕는다 (옆으로 안 움직임) */
TH2["블라인드"]=K=>frame()+clip(newS()
  +[0,1,2,3,4].map(i=>A("bl",oldRow(i)+K.rect(X,Y+16*i,W,16,{f:"#2A3350",o:1,cls:"b2x43 b2a-n43bls"})+K.rect(X,Y+16*i+15.3,W,.7,{f:"#C9CFDB"}),"transform:scaleY(.4)")).join(""));
css(`.b2a-n43bls{opacity:.22}`);
kf("bl",D,"0%,12%{transform:scaleY(1)}54%,86%{transform:scaleY(0)}100%{transform:scaleY(1)}",EIO);
kf("bls",D,"0%,12%{opacity:0}54%,86%{opacity:.5}100%{opacity:0}",EIO);

/* 슬라이스 전환: 조각이 엇갈려 옆으로 빠진다 */
const SLD=[64,52,40,28,16];
TH2["슬라이스 전환"]=K=>frame()+clip(newS()
  +[0,1,2,3,4].map(i=>A("sl"+i,oldRow(i).replace("<rect ",`<rect filter="url(#b2lift)" `),`transform:translateX(${(i%2?1:-1)*SLD[i]}px)`)).join(""));
[0,1,2,3,4].forEach(i=>{const s=10+i*6,d=(i%2?1:-1)*124;kf("sl"+i,D,`0%,${s}%{transform:none}${s+28}%,86%{transform:translateX(${d}px)}100%{transform:none}`,EIN)});

/* 오버레이 와이프: 색판이 덮었다가 반대쪽으로 걷힌다 */
TH2["오버레이 와이프"]=K=>frame()+clip(newS()+A("owo",oldS(),"opacity:0")
  +A("owp",K.rect(X,Y,W,H,{f:"#1F2329"})+K.rect(X+W-4,Y,4,H,{f:C.blue}),"transform:translateX(58px)"));
kf("owp",D,"0%,10%{transform:translateX(-118px)}36%,44%{transform:none}72%,100%{transform:translateX(118px)}",EIO);
kf("owo",D,"0%,39.5%{opacity:1}40%,90%{opacity:0}100%{opacity:1}",LIN);

/* 잉크 번짐: 울퉁불퉁한 얼룩이 퍼지며 다음 화면이 차오른다 */
const blob=(cx,cy,r0)=>{let d="";for(let i=0;i<72;i++){const t=i/72*2*Math.PI,r=r0*(1+.15*Math.sin(3*t)+.09*Math.sin(5*t+1)+.05*Math.sin(8*t+2));d+=(i?"L":"M")+n2(cx+r*Math.cos(t))+" "+n2(cy+r*Math.sin(t))}return d+"Z"};
const DROPS=[[104,26,4.5],[40,76,3.6],[112,74,3]];
const inkShape=(k,cls)=>`<path class="b2x43 b2a-n43ik" style="transform:scale(1)${cls||""}" d="${blob(70,50,24*k)}"/>`
  +DROPS.map(([x,y,r])=>`<circle class="b2x43 b2a-n43id" cx="${x}" cy="${y}" r="${n2(r*k)}"${cls||""}/>`).join("");
TH2["잉크 번짐"]=K=>{const c="b243i"+K.id();
  return frame()+clip(oldS()+A("iko",
    `<g style="fill:${C.blue}">${inkShape(1.2)}</g>`
    +`<defs><clipPath id="${c}">${inkShape(1)}</clipPath></defs><g clip-path="url(#${c})">${newS()}</g>`))};
kf("ik",D,"0%,10%{transform:scale(.04)}58%,100%{transform:scale(4.6)}","animation-timing-function:cubic-bezier(.4,.1,.6,1)");
kf("id",D,"0%,18%{transform:scale(0)}58%,100%{transform:scale(9)}","animation-timing-function:cubic-bezier(.4,.1,.6,1)");
kf("iko",D,"0%,88%{opacity:1}97%,100%{opacity:0}",LIN);

/* 픽셀 전환: 큰 네모 픽셀로 거칠어졌다가 다음 화면으로 또렷해진다 */
const MO_OLD=[
  ["#E4E6EA","#A9AEB9","#A9AEB9","#C4C8D0","#fff","#fff","#fff","#fff"],
  ["#D6DAE2","#CDD2DC","#DCE0E8","#DCE0E8","#DCE0E8","#DCE0E8","#E9ECF1","#fff"],
  ["#D6DAE2","#CDD2DC","#DCE0E8","#DCE0E8","#DCE0E8","#E9ECF1","#fff","#fff"],
  ["#D6DAE2","#CDD2DC","#DCE0E8","#DCE0E8","#DCE0E8","#DCE0E8","#E9ECF1","#fff"],
  ["#D6DAE2","#CDD2DC","#DCE0E8","#DCE0E8","#DCE0E8","#E9ECF1","#fff","#fff"]];
const MO_NEW=[
  [0,.3,.3,.2,0,0,0,0],
  ["#E6ECFF","#C6D5FF","#C3D3FF","#C6D2FF","#CBD3FC","#E4DDF5","#CDD0F8","#EEF1FF"],
  ["#E9EBFB","#A9B6F2","#8DA2EE","#A3B3F1","#B2BBF2","#97A9EF","#B5BDF3","#EFF0FC"],
  ["#EEEFF3","#9EA4BC","#9AA1BC","#A7ADC6","#C6CCE6","#D6DEF8","#D6DEF8","#F7F8FC"],
  ["#F9F9FB","#E8EBF1","#E8EBF1","#E8EBF1","#E8EBF1","#E8EBF1","#F4F5F8","#fff"]];
const mosaic=m=>m.map((row,r)=>row.map((v,c)=>{const x=X+14*c,y=Y+16*r;
  return typeof v==="number"?K.rect(x,y,14,16,{f:C.blue})+(v?K.rect(x,y,14,16,{f:"#fff",o:v}):""):K.rect(x,y,14,16,{f:v})}).join("")).join("");
TH2["픽셀 전환"]=K=>frame()+clip(newS()+A("pxo",oldS(),"opacity:0")+A("pxa",mosaic(MO_OLD))+A("pxb",mosaic(MO_NEW),"opacity:.7"));
kf("pxo",D,"0%,24%{opacity:1}24.5%,88%{opacity:0}100%{opacity:1}",LIN);
kf("pxa",D,"0%,10%{opacity:0}24%,30%{opacity:1}38%,100%{opacity:0}","animation-timing-function:steps(3,end)");
kf("pxb",D,"0%,26%{opacity:0}36%,42%{opacity:1}56%,100%{opacity:0}","animation-timing-function:steps(3,end)");

/* 글리치 전환: 가로로 툭툭 어긋나고 색이 갈라진다 */
const GL_SRC=[1,0,1,0,1], GL_DX=[7,-11,3,-15,9];
const GL_KEY=[[0,6,-9,4,0],[0,-12,8,-5,0],[0,4,-3,12,0],[0,-8,14,-10,0],[0,10,-6,7,0]];
TH2["글리치 전환"]=K=>{const f="b243g"+K.id();
  const strips=[0,1,2,3,4].map(i=>{const c="b243s"+K.id();
    return A("gs"+i,`<defs><clipPath id="${c}"><rect x="${X}" y="${Y+16*i}" width="${W}" height="16"/></clipPath></defs><g clip-path="url(#${c})">${GL_SRC[i]?newS():oldS()}</g>`,`transform:translateX(${GL_DX[i]}px)`)}).join("");
  return `<defs><filter id="${f}" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB"><feOffset in="SourceGraphic" dx="-2.6" result="a"/><feColorMatrix in="a" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r"/><feOffset in="SourceGraphic" dx="2.6" result="b"/><feColorMatrix in="b" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" result="c"/><feBlend in="r" in2="c" mode="screen"/></filter></defs>`
   +frame()+clip(newS()+A("glo",oldS(),"opacity:0")+A("glg",`<g filter="url(#${f})">${strips}</g>`))};
kf("glo",D,"0%,32%{opacity:1}32.5%,88%{opacity:0}100%{opacity:1}",LIN);
kf("glg",D,"0%,13.9%{opacity:0}14%,22%{opacity:1}22.1%,25.9%{opacity:0}26%,49.9%{opacity:1}50%,100%{opacity:0}",LIN);
[0,1,2,3,4].forEach(i=>{const k=GL_KEY[i];kf("gs"+i,D,`0%,14%{transform:translateX(${k[1]}px)}20%,28%{transform:translateX(${k[2]}px)}34%{transform:translateX(${k[3]}px)}42%,100%{transform:translateX(${k[4]}px)}`,"animation-timing-function:steps(1,end)")});

/* 줌 블러 전환: 가운데로 빨려 들며 사방으로 흐려진다 */
const ghosts=s=>s+[[1.16,.35],[1.36,.18]].map(([k,o])=>`<g transform="translate(80 50) scale(${k}) translate(-80 -50)" style="opacity:${o}">${s}</g>`).join("");
const RAYS=[...Array(16)].map((_,i)=>{const t=i/16*2*Math.PI+.2,a=i%2?16:22,b=i%2?50:62;return K.line(80+a*Math.cos(t),50+a*Math.sin(t)*.72,80+b*Math.cos(t),50+b*Math.sin(t)*.72,{s:"#fff",sw:1.6,o:.85})}).join("");
TH2["줌 블러 전환"]=K=>{const f="b243z"+K.id();
  return `<defs><filter id="${f}" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1.8"/></filter></defs>`
   +frame()+clip(newS()+A("zbo",oldS(),"opacity:0")
    +A("zba",`<g filter="url(#${f})">${ghosts(oldS())}</g>`,"opacity:1;transform:scale(1.3)")
    +A("zbb",`<g filter="url(#${f})">${ghosts(newS())}</g>`,"opacity:.55;transform:scale(1.45)")
    +A("zbr",RAYS,"opacity:1"))};
kf("zbo",D,"0%,12%{opacity:1}12.5%,88%{opacity:0}100%{opacity:1}",LIN);
kf("zba",D,"0%,12%{opacity:1;transform:scale(1)}34%{opacity:1;transform:scale(1.7)}40%,100%{opacity:0;transform:scale(1.9)}",EIN);
kf("zbb",D,"0%,28%{opacity:0;transform:scale(1.8)}38%{opacity:.7;transform:scale(1.4)}54%{opacity:1;transform:scale(1)}58%,100%{opacity:0;transform:scale(1)}","animation-timing-function:cubic-bezier(.2,.6,.3,1)");
kf("zbr",D,"0%,14%{opacity:0;transform:scale(1.4)}34%{opacity:1;transform:scale(.9)}52%,100%{opacity:0;transform:scale(.6)}",LIN);

/* 휩 팬: 옆으로 확 쓸리며 뭉개지고, 다음 화면이 같은 방향에서 와서 멈춘다 */
const STREAK=[22,34,47,58,70,82].map((y,i)=>K.line(X+8+(i%3)*14,y,X+W-10-(i%2)*20,y,{s:"#fff",sw:1.4,o:.8})).join("");
TH2["휩 팬"]=K=>{const f="b243w"+K.id();
  return `<defs><filter id="${f}" x="-20%" y="-5%" width="140%" height="110%"><feGaussianBlur stdDeviation="7 0"/></filter></defs>`
   +frame()+clip(A("wpn",newS())+A("wpo",oldS(),"opacity:0")
    +A("wpt",`<g filter="url(#${f})">${oldS()+at(W,newS())}</g>`,"transform:translateX(-58px)")
    +A("wps",STREAK))};
kf("wpn",D,"0%,46%{transform:translateX(5px)}54%,100%{transform:none}","animation-timing-function:cubic-bezier(.3,1.6,.5,1)");
kf("wpo",D,"0%,15%{opacity:1}15.5%,88%{opacity:0}100%{opacity:1}",LIN);
kf("wpt",D,"0%,15%{opacity:0;transform:none}15.5%{opacity:1;transform:none}46%{opacity:1;transform:translateX(-112px)}46.5%,100%{opacity:0;transform:translateX(-112px)}","animation-timing-function:cubic-bezier(.75,0,.25,1)");
kf("wps",D,"0%,16%{opacity:0;transform:translateX(30px)}30%{opacity:1;transform:none}46%,100%{opacity:0;transform:translateX(-30px)}",LIN);

/* 플래시 전환: 하얗게 번쩍했다가 걷힌다 */
TH2["플래시 전환"]=K=>{const g="b243f"+K.id();
  return `<defs><radialGradient id="${g}"><stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset=".6" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>`
   +A("fhg",`<ellipse cx="80" cy="50" rx="78" ry="50" style="fill:url(#${g})"/>`,"opacity:.8")
   +frame()+clip(newS()+A("fho",oldS(),"opacity:0")+A("fhw",K.rect(X,Y,W,H,{f:"#fff"}),"opacity:.62"))};
kf("fho",D,"0%,27%{opacity:1}27.5%,88%{opacity:0}100%{opacity:1}",LIN);
kf("fhw",D,"0%,12%{opacity:0}24%,30%{opacity:1}58%,100%{opacity:0}","animation-timing-function:cubic-bezier(.5,0,.5,1)");
kf("fhg",D,"0%,12%{opacity:0;transform:scale(.8)}24%,30%{opacity:1;transform:scale(1.04)}58%,100%{opacity:0;transform:scale(.9)}","animation-timing-function:cubic-bezier(.5,0,.5,1)");

/* 딥 투 블랙: 검게 어두워졌다가(겹침 없음) 다음 화면이 밝아진다 */
TH2["딥 투 블랙"]=K=>frame()+clip(newS()+A("dbo",oldS(),"opacity:0")+A("dbk",K.rect(X,Y,W,H,{f:"#0B0D12"}),"opacity:.62"));
kf("dbo",D,"0%,39%{opacity:1}39.5%,88%{opacity:0}100%{opacity:1}",LIN);
kf("dbk",D,"0%,8%{opacity:0}33%,45%{opacity:1}70%,100%{opacity:0}","animation-timing-function:ease-in-out");

/* 스와이프 페이징: 손가락으로 밀면 한 장씩 넘어가고 아래 점이 바뀐다 */
const PH=66;
const pOld=()=>K.rect(X,Y,W,PH,{f:"#fff"})+tbar(34,19,44)+[0,1,2].map(i=>K.circ(38,37+i*13,4.5,{f:"#D3D8E3"})+gbar(48,35+i*13,i%2?56:70)).join("");
const pNew=()=>K.rect(X,Y,W,PH,{f:"#fff"})+K.rect(X,Y,W,14,{f:C.blue})+K.rect(34,15,40,4,{f:"rgba(255,255,255,.85)",r:2})+photo(34,29,92,28,7)+tbar(34,63,52,4.5);
TH2["스와이프 페이징"]=K=>frame()
  +clip(A("pgt",pOld()+K.rect(X+W-.5,Y+8,1,PH-16,{f:C.line})+at(W,pNew()),"transform:translateX(-62px)"),X,Y,W,PH+2,R)
  +K.line(X,Y+PH+2,X+W,Y+PH+2,{s:C.line,sw:.6})
  +[70,80,90].map(x=>K.circ(x,84,2.2,{f:"#D3D8E3"})).join("")
  +A("pgd",K.rect(65,81.8,10,4.4,{f:C.blue,r:2.2}),"transform:translateX(10px)")
  +A("pgf",K.fing(98,46),"opacity:1;transform:translateX(-28px)");
kf("pgt",D,"0%,14%{transform:none}40%{transform:translateX(-70px)}52%,86%{transform:translateX(-112px)}100%{transform:none}",EIO);
kf("pgd",D,"0%,40%{transform:none}48%,88%{transform:translateX(10px)}98%,100%{transform:none}",EIO);
kf("pgf",D,"0%,10%{opacity:0;transform:translateX(8px)}14%{opacity:1;transform:translateX(8px)}40%{opacity:1;transform:translateX(-62px)}46%,100%{opacity:0;transform:translateX(-62px)}",EIO);
}
