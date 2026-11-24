// B2 그림 보충 (N=46): tr 화면 전환 12개 (PowerPoint 전환, 전부 움직임)
// 앞 화면 = 흰 면 + 회색 목록, 다음 화면 = 파란 머리 띠 + 파란 사진 + 글. (b2_43.js 와 같은 틀 · 같은 색)
// 도감은 평소 animation:none 으로 멈춰 있다. 요소의 기본 상태(인라인 style)를 "전환이 한창인 중간 장면"으로 둔다.
// 한 주기 3초: 0~14% 앞 화면 · 14~58% 전환 · 58~86% 다음 화면 · 86~100% 처음으로. (임의 전환만 3초 × 3번)
// "동적 콘텐츠" 묶음(이동 · 관람차 · 컨베이어 · 회전 · 창 · 궤도)은 틀과 회색 머리 띠가 고정, 안 내용만 움직인다.
{
const C=K.C, n2=K.n2;
const A=(c,inner,st="")=>`<g class="b2x46 b2a-n46${c}"${st?` style="${st}"`:""}>${inner}</g>`;
const css=s=>{B2CSS+=s+"\n"};
const kf=(name,frames,extra="")=>css(`.b2a-n46${name}{animation-name:b2a-n46${name};${extra}}@keyframes b2a-n46${name}{${frames}}`);
css(`.b2x46{transform-box:fill-box;transform-origin:center;animation-duration:3s;animation-iteration-count:infinite;animation-fill-mode:both;animation-timing-function:cubic-bezier(.65,0,.35,1)}`);
const LIN="animation-timing-function:linear", EIN="animation-timing-function:cubic-bezier(.55,0,.8,.2)", EOUT="animation-timing-function:cubic-bezier(.2,.7,.3,1)";
const X=24,Y=10,W=112,H=80,R=12;
const VB=(x,y)=>`transform-box:view-box;transform-origin:${n2(x)}px ${n2(y)}px`;
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const cl=v=>Math.max(0,Math.min(1,v));
const P=v=>n2(v)+"%";

const photo=(x,y,w,h,r,alt)=>{x=n2(x);y=n2(y);w=n2(w);h=n2(h);r=n2(r);const i=K.id(),g="b246p"+i,c="b246q"+i;
  const st=alt?[[0,"#FFE0BE"],[1,"#F6B9CB"]]:[[0,"#AFC6FF"],[1,"#E5C8F3"]], mt=alt?"#E68FA3":"#6A86E8";
  return `<defs>${K.grad(g,st,0,1)}<clipPath id="${c}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">`
   +K.rect(x,y,w,h,{f:`url(#${g})`})+K.circ(x+w*.74,y+h*.32,n2(Math.min(w,h)*.13),{f:"#FFF6DE"})
   +`<path d="M${x} ${n2(y+h)}L${n2(x+w*.3)} ${n2(y+h*.48)}L${n2(x+w*.52)} ${n2(y+h*.78)}L${n2(x+w*.7)} ${n2(y+h*.56)}L${n2(x+w)} ${n2(y+h*.9)}V${n2(y+h)}Z" style="fill:${mt}"/></g>`};
const tbar=(x,y,w,h=5)=>K.rect(x,y,w,h,{f:"#3A4050",r:n2(h/2)});
const gbar=(x,y,w,h=4)=>K.rect(x,y,w,h,{f:"#D3D8E3",r:n2(h/2)});
const clip=(inner,x=X,y=Y,w=W,h=H,r=R)=>{const c="b246c"+K.id();return `<defs><clipPath id="${c}"><rect x="${n2(x)}" y="${n2(y)}" width="${n2(w)}" height="${n2(h)}" rx="${r}"/></clipPath></defs><g clip-path="url(#${c})">${inner}</g>`};
const frame=()=>K.card(X,Y,W,H,R);
const at=(dx,inner,dy=0)=>`<g transform="translate(${n2(dx)} ${n2(dy)})">${inner}</g>`;

// 앞 화면 요소 (조각으로 자를 때 겹치는 것만 고르려고 상자를 같이 적는다)
const OLD=[];
[0,1,2,3,4].forEach(i=>{const y=Y+16*i;
  if(i===0)OLD.push({b:[34,y+6,44,5],s:tbar(34,y+6,44)});
  else{OLD.push({b:[33.5,y+3.5,9,9],s:K.circ(38,y+8,4.5,{f:"#D3D8E3"})});const w=i%2?70:56;OLD.push({b:[48,y+6,w,4],s:gbar(48,y+6,w)})}});
const oldS=()=>K.rect(X,Y,W,H,{f:"#fff"})+OLD.map(e=>e.s).join("");
const newS=alt=>K.rect(X,Y,W,H,{f:"#fff"})+K.rect(X,Y,W,16,{f:C.blue})+K.rect(34,16,40,4,{f:"rgba(255,255,255,.85)",r:2})
  +photo(34,32,92,30,7,alt)+tbar(34,69,52)+gbar(34,79,74);
const hit=(b,e)=>e[0]<b[0]+b[2]&&e[0]+e[2]>b[0]&&e[1]<b[1]+b[3]&&e[1]+e[3]>b[1];
// 앞 화면 한 조각: shape 모양으로 자른 흰 면 + 그 자리에 걸친 막대
const piece=(shape,b)=>{const c="b246k"+K.id();
  return `<defs><clipPath id="${c}">${shape}</clipPath></defs><g clip-path="url(#${c})">${K.rect(b[0],b[1],b[2],b[3],{f:"#fff"})}${OLD.filter(e=>hit(b,e.b)).map(e=>e.s).join("")}</g>`};

/* 반짝이: 다이아몬드 조각이 왼쪽부터 차례로 뒤집히며 반짝, 다음 화면으로 */
const GA=10.4, GT=10, GS=30;
const GL=[];for(let m=0;m<=12;m++)for(let n=0;n<=8;n++)if((m+n)%2===0)GL.push([m,X+10*m,Y+10*n]);
const dia=(cx,cy,a)=>`M${n2(cx)} ${n2(cy-a)}L${n2(cx+a)} ${n2(cy)}L${n2(cx)} ${n2(cy+a)}L${n2(cx-a)} ${n2(cy)}Z`;
const star=(cx,cy,r)=>`<path d="M${n2(cx)} ${n2(cy-r)}Q${n2(cx)} ${n2(cy)} ${n2(cx+r)} ${n2(cy)}Q${n2(cx)} ${n2(cy)} ${n2(cx)} ${n2(cy+r)}Q${n2(cx)} ${n2(cy)} ${n2(cx-r)} ${n2(cy)}Q${n2(cx)} ${n2(cy)} ${n2(cx)} ${n2(cy-r)}Z" style="fill:#fff"/>`;
const gs=m=>14+m*2.6;
TH2["반짝이"]=K=>{const g="b246g"+K.id();
  const tiles=GL.map(([m,cx,cy])=>{const s=gs(m),sx=1-cl((GS-s)/GT);
    return A("gt"+m,piece(`<path d="${dia(cx,cy,GA)}"/>`,[cx-GA,cy-GA,2*GA,2*GA]),`${VB(cx,cy)};transform:scaleX(${n2(sx)})`)}).join("");
  const shines=GL.map(([m,cx,cy],i)=>{const s=gs(m),t=GS;
    const o=t<s-1?0:t<s+5?(t-s+1)/6:Math.max(0,1-(t-s-5)/9), k=t<s-1?.4:t<s+5?.4+.6*(t-s+1)/6:1-.4*cl((t-s-5)/9);
    return A("gs"+m,`<path d="${dia(cx,cy,8.2)}" style="fill:url(#${g});stroke:#fff;stroke-width:.8"/>`+(i%3===0?star(cx,cy,5.2):""),`${VB(cx,cy)};opacity:${n2(o)};transform:scale(${n2(k)})`)}).join("");
  return `<defs>${K.grad(g,[[0,"#FFFFFF"],[.45,"#CFE0FF"],[1,"#7FA2FF"]])}</defs>`+frame()+clip(newS()+tiles+shines)};
for(let m=0;m<=12;m++){const s=gs(m);
  kf("gt"+m,`0%,${P(s)}{transform:scaleX(1);opacity:1}${P(s+GT)},86%{transform:scaleX(0);opacity:1}86.5%{transform:scaleX(1);opacity:0}100%{transform:scaleX(1);opacity:1}`);
  kf("gs"+m,`0%,${P(s-1)}{opacity:0;transform:scale(.4)}${P(s+5)}{opacity:1;transform:scale(1)}${P(s+14)},100%{opacity:0;transform:scale(.6)}`,LIN)}

/* 소용돌이: 네모 조각이 바깥부터 가운데를 돌며 빨려 나간다 */
const VX=[];for(let r=0;r<5;r++)for(let c=0;c<7;c++){const x=X+16*c,y=Y+16*r,cx=x+8,cy=y+8;
  VX.push({x,y,i:VX.length,d:cl(Math.hypot((cx-80)/48,(cy-50)/32)/Math.SQRT2)})}
const VD=20, VT=25;
const vfr=v=>{const s=14+(1-v.d)*24, rt=290+(v.i%4)*25;return {s,rt,f:[[s,0,1,1],[s+VD/2,rt*.45,.6,1],[s+VD,rt,.04,0]]}};
const lerp3=(f,t)=>{if(t<=f[0][0])return f[0].slice(1);for(let i=1;i<f.length;i++)if(t<=f[i][0]){const a=f[i-1],b=f[i],u=(t-a[0])/(b[0]-a[0]);return [1,2,3].map(j=>a[j]+(b[j]-a[j])*u)}return f[f.length-1].slice(1)};
TH2["소용돌이"]=K=>frame()+clip(newS()+VX.map(v=>{const [r,s,o]=lerp3(vfr(v).f,VT);
  return A("vx"+v.i,piece(`<rect x="${v.x-.2}" y="${v.y-.2}" width="16.4" height="16.4"/>`,[v.x-.2,v.y-.2,16.4,16.4])+K.rect(v.x+.3,v.y+.3,15.4,15.4,{s:C.line,sw:.4}),`${VB(80,50)};transform:rotate(${n2(r)}deg) scale(${n2(s)});opacity:${n2(o)}`)}).join(""));
VX.forEach(v=>{const {f,rt}=vfr(v);
  kf("vx"+v.i,`0%,${P(f[0][0])}{transform:rotate(0deg) scale(1);opacity:1}${P(f[1][0])}{transform:rotate(${n2(rt*.45)}deg) scale(.6);opacity:1}${P(f[2][0])},86%{transform:rotate(${rt}deg) scale(.04);opacity:0}86.5%{transform:rotate(0deg) scale(1);opacity:0}100%{transform:rotate(0deg) scale(1);opacity:1}`,LIN)});

/* 분쇄: 가는 세로 띠로 잘려 들쭉날쭉 아래로 빠진다 */
const SW=8, SD=28, ST=31;
const shs=k=>14+(k%2)*6+k*.3;
const shred=k=>{const x=X+SW*k,y0=Y-5,y1=Y+H+5;let d=`M${x} ${y0}`;
  for(let j=1;j<=4;j++)d+=`L${n2(x+SW*j/4)} ${n2(y0+(j%2?-1.8:0))}`;d+=`L${x+SW} ${n2(y1)}`;
  for(let j=3;j>=0;j--)d+=`L${n2(x+SW*j/4)} ${n2(y1+(j%2?1.8:0))}`;return d+"Z"};
TH2["분쇄"]=K=>frame()+clip(newS()+[...Array(14)].map((_,k)=>{const x=X+SW*k,p=cl((ST-shs(k))/SD),r=(k%2?1.6:-1.6)*p;
  return A("sh"+k,piece(`<path d="${shred(k)}"/>`,[x,Y,SW,H]),`${VB(x+4,Y)};transform:translateY(${n2(100*p*p)}px) rotate(${n2(r)}deg)`)}).join(""));
[...Array(14)].forEach((_,k)=>{const s=shs(k),r=k%2?1.6:-1.6;
  kf("sh"+k,`0%,${P(s)}{transform:translateY(0px) rotate(0deg);opacity:1}${P(s+SD)},86%{transform:translateY(100px) rotate(${r}deg);opacity:1}86.5%{transform:translateY(0px) rotate(0deg);opacity:0}100%{transform:translateY(0px) rotate(0deg);opacity:1}`,EIN)});

/* 갤러리 전환: 뒤로 물러나 바닥에 비친 사진들처럼 줄지어 옆으로 넘어간 뒤 다음 화면으로 다가감 */
TH2["갤러리 전환"]=K=>{const m="b246m"+K.id(),g="b246n"+K.id();
  const cards=frame()+clip(oldS())+at(124,frame()+clip(newS()))+at(248,frame()+clip(newS(true)));
  return `<defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="${m}" maskUnits="userSpaceOnUse" x="-200" y="${Y+H}" width="600" height="${H}"><rect width="600" height="${H}" x="-200" y="${Y+H}" fill="url(#${g})"/></mask></defs>`
   +K.card(X,Y,W,H,R,"#F1F3F9")+clip(K.rect(X,70,W,20,{f:"#E3E7F0"})
   +A("gl",cards+`<g mask="url(#${m})" style="opacity:.5"><g transform="translate(0 ${2*(Y+H)}) scale(1 -1)">${cards}</g></g>`,`${VB(80,50)};transform:translateX(-31px) scale(.5) skewY(-4deg)`))};
kf("gl",`0%,14%{transform:translateX(0px) scale(1) skewY(0deg)}26%{transform:translateX(0px) scale(.5) skewY(-4deg)}46%{transform:translateX(-62px) scale(.5) skewY(-4deg)}58%,86%{transform:translateX(-124px) scale(1) skewY(0deg)}100%{transform:translateX(0px) scale(1) skewY(0deg)}`);

/* 날아가기 전환: 앞 화면은 카메라를 지나치듯 커지며 사라지고, 다음 화면이 멀리서 다가옴 */
TH2["날아가기 전환"]=K=>frame()+clip(K.rect(X,Y,W,H,{f:"#E4E9F5"})
  +A("fto",oldS(),`${VB(80,50)};opacity:.42;transform:scale(1.8)`)
  +A("ftn",frame()+clip(newS()),`${VB(80,50)};opacity:1;transform:scale(.46)`));
kf("fto",`0%,14%{opacity:1;transform:scale(1)}42%{opacity:0;transform:scale(2.6)}86%{opacity:0;transform:scale(2.6)}86.5%{opacity:0;transform:scale(1)}100%{opacity:1;transform:scale(1)}`,EIN);
kf("ftn",`0%,22%{opacity:0;transform:scale(.12)}30%{opacity:1;transform:scale(.3)}52%{opacity:1;transform:scale(1.03)}58%,86%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}`,EOUT);

/* 임의 전환: 9초에 세 번 넘김. 밀기 → 흐려지기 → 원 드러내기, 주사위 눈이 바뀜 */
const RD="animation-duration:9s";
const scrC=()=>K.rect(X,Y,W,H,{f:"#fff"})+K.rect(X,Y,W,16,{f:C.blue})+K.rect(34,16,30,4,{f:"rgba(255,255,255,.85)",r:2})
  +[0,1].map(r=>[0,1].map(c=>photo(34+c*47,31+r*28,45,24,5,true)).join("")).join("");
const PIP={a:[[-3.4,-3.4],[0,0],[3.4,3.4]],b:[[-3.4,-3.4],[3.4,-3.4],[0,0],[-3.4,3.4],[3.4,3.4]],c:[[-3.4,-3.4],[3.4,3.4]]};
TH2["임의 전환"]=K=>{const k="b246r"+K.id();
  return frame()+clip(A("rdb",newS(),"transform:translateX(56px)")+A("rdc",scrC(),"opacity:0")
    +A("rda",`<defs><clipPath id="${k}"><circle class="b2x46 b2a-n46rdk" cx="80" cy="50" r="72"/></clipPath></defs><g clip-path="url(#${k})">${oldS()}</g>`,"transform:translateX(-56px)"))
   +K.card(122,3,17,17,4.5,C.blue)
   +["a","b","c"].map(f=>A("rp"+f,PIP[f].map(([dx,dy])=>K.circ(130.5+dx,11.5+dy,1.5,{f:"#fff"})).join(""),f==="a"?"":"opacity:0")).join("")};
kf("rda","0%,4.4%{transform:translateX(0px)}17.8%,69.9%{transform:translateX(-112px)}70%,100%{transform:translateX(0px)}",RD);
kf("rdb","0%,4.4%{transform:translateX(112px)}17.8%,99.4%{transform:translateX(0px)}99.5%,100%{transform:translateX(112px)}",RD);
kf("rdc","0%,37.8%{opacity:0}51.1%,99.4%{opacity:1}99.5%,100%{opacity:0}",RD+";animation-timing-function:ease-in-out");
kf("rdk","0%,69.6%{transform:scale(1)}69.7%,71.1%{transform:scale(0)}84.4%,100%{transform:scale(1)}",RD);
kf("rpa","0%,33.2%{opacity:1}33.3%,99.9%{opacity:0}100%{opacity:1}",RD+";"+LIN);
kf("rpb","0%,33.2%{opacity:0}33.3%,66.5%{opacity:1}66.6%,100%{opacity:0}",RD+";"+LIN);
kf("rpc","0%,66.5%{opacity:0}66.6%,99.9%{opacity:1}100%{opacity:0}",RD+";"+LIN);

/* ---- 동적 콘텐츠: 틀 · 머리 띠는 그대로, 안 내용만 ---- */
const CY=Y+16, CH=H-16;
const hdr=()=>K.rect(X,Y,W,16,{f:"#EEF1F6"})+tbar(34,Y+5.5,34)+K.circ(114,Y+8,3,{f:"#C9CFDB"})+K.circ(124,Y+8,3,{f:"#C9CFDB"})+K.rect(X,Y+15.6,W,.6,{f:"#DCE1EA"});
const dyn=inner=>frame()+clip(K.rect(X,Y,W,H,{f:"#fff"})+clip(inner,X,CY,W,CH,0)+hdr());
// 내용 (112×64 기준, 크기에 맞춰 줄임)
const oldC=(x,y,w,h)=>{const u=w/112,v=h/64;return [0,1,2].map(i=>K.circ(x+16*u,y+(14+i*18)*v,n2(4.5*Math.min(u,v)),{f:"#D3D8E3"})+gbar(x+26*u,y+(12+i*18)*v,[70,56,64][i]*u,4*v)).join("")};
const newC=(x,y,w,h)=>{const u=w/112,v=h/64;return photo(x+10*u,y+6*v,w-20*u,30*v,6*Math.min(u,v))+tbar(x+10*u,y+42*v,52*u,5*v)+gbar(x+10*u,y+52*v,72*u,4*v)};
const blk=(x,y,w,h,nw)=>K.card(x,y,w,h,7)+(nw?newC(x,y,w,h):oldC(x,y,w,h));

/* 이동 전환: 내용만 위로 쭉 밀려 올라감 */
TH2["이동 전환"]=K=>dyn(A("pn",oldC(X,CY,W,CH)+K.rect(X+10,CY+CH-.3,W-20,.6,{f:C.line})+at(0,newC(X,CY,W,CH),CH),"transform:translateY(-30px)"));
kf("pn","0%,14%{transform:translateY(0px)}58%,86%{transform:translateY(-64px)}100%{transform:translateY(0px)}");

/* 관람차: 둥근 길을 따라 돌아 나가고 들어옴. 칸은 늘 똑바로 선 채 */
const FP=[80,100], FA=70, FC=[80,56], FW=54, FH=32;
const gond=(nw,ang)=>`<g transform="rotate(${ang} ${FP[0]} ${FP[1]})"><g transform="rotate(${-ang} ${FC[0]} ${FC[1]})">`
  +A(nw?"fgn":"fgo",K.line(FC[0],FC[1]-FH/2-3,FC[0],FC[1]-FH/2,{s:"#9AA1AE",sw:1.2})+K.circ(FC[0],FC[1]-FH/2-3,1.6,{f:"#9AA1AE"})+blk(FC[0]-FW/2,FC[1]-FH/2,FW,FH,nw),`transform:rotate(${FA/2}deg)`)+`</g></g>`;
TH2["관람차"]=K=>dyn(A("fw",`<circle cx="${FP[0]}" cy="${FP[1]}" r="${FP[1]-FC[1]+FH/2+3}" style="fill:none;stroke:#C9CFDB;stroke-width:1.2;stroke-dasharray:3 2.5"/>`
  +[0,1,2,3].map(a=>`<g transform="rotate(${a*FA} ${FP[0]} ${FP[1]})">${K.line(FP[0],FP[1],FC[0],FC[1]-FH/2-3,{s:"#D3D8E3",sw:1.2})}</g>`).join("")+gond(false,0)+gond(true,FA),`${VB(FP[0],FP[1])};transform:rotate(${-FA/2}deg)`));
kf("fw",`0%,14%{transform:rotate(0deg)}58%,86%{transform:rotate(${-FA}deg)}100%{transform:rotate(0deg)}`);
["fgo","fgn"].forEach(n=>kf(n,`0%,14%{transform:rotate(0deg)}58%,86%{transform:rotate(${FA}deg)}100%{transform:rotate(0deg)}`));

/* 컨베이어: 내용이 비스듬히 기운 채 벨트를 타고 옆으로 흘러감 */
const belt=()=>{const c="b246b"+K.id();
  return K.rect(X+6,CY+52,W-12,8,{f:"#3A4050",r:4})+`<defs><clipPath id="${c}"><rect x="${X+8}" y="${CY+53}" width="${W-16}" height="6" rx="3"/></clipPath></defs><g clip-path="url(#${c})">`
   +A("cvb",[...Array(24)].map((_,i)=>K.line(X+i*6,CY+59,X+i*6+3,CY+53,{s:"#6B7280",sw:1.2})).join(""),"transform:translateX(-12px)")+`</g>`
   +[X+10,X+W-10].map(x=>K.circ(x,CY+56,2.2,{f:"#9AA1AE"})).join("")};
TH2["컨베이어"]=K=>dyn(belt()+A("cv",blk(32,CY+4,96,44,false)+at(112,blk(32,CY+4,96,44,true)),`${VB(80,CY+50)};transform:translateX(-48px) skewY(-8deg) scale(.86)`));
kf("cv",`0%,14%{transform:translateX(0px) skewY(0deg) scale(1)}24%{transform:translateX(0px) skewY(-8deg) scale(.86)}48%{transform:translateX(-96px) skewY(-8deg) scale(.86)}58%,86%{transform:translateX(-112px) skewY(0deg) scale(1)}100%{transform:translateX(0px) skewY(0deg) scale(1)}`);
kf("cvb","0%,14%{transform:translateX(0px)}58%,86%{transform:translateX(-24px)}100%{transform:translateX(0px)}");

/* 회전 전환: 내용 판(위 · 아래)이 세로축으로 차례로 돌아 뒷면이 다음 내용 */
const RT=[CY+6,30], RB=[CY+42,18];
const rFace=(y,h,inner)=>K.rect(34,y,92,h,{f:"#fff",r:5})+inner;
const rOldT=()=>rFace(RT[0],RT[1],K.rect(34,RT[0],92,RT[1],{f:"#F1F3F7",r:5})+[0,1].map(i=>K.circ(44,RT[0]+9+i*12,4,{f:"#D3D8E3"})+gbar(53,RT[0]+7+i*12,i?50:62)).join(""));
const rNewT=()=>rFace(RT[0],RT[1],photo(34,RT[0],92,RT[1],5));
const rOldB=()=>rFace(RB[0],RB[1],gbar(38,RB[0]+3,76)+gbar(38,RB[0]+11,58));
const rNewB=()=>rFace(RB[0],RB[1],tbar(34,RB[0]+2,52)+gbar(34,RB[0]+12,72));
const axis=(y,h)=>K.line(80,y-2,80,y+h+2,{s:"#C9CFDB",sw:.7});
TH2["회전 전환"]=K=>dyn(axis(RT[0],RT[1])+axis(RB[0],RB[1])
  +A("rto",rOldT(),"transform:scaleX(0)")+A("rtn",rNewT(),"transform:scaleX(.62) skewY(-3.5deg)")
  +A("rbo",rOldB(),"transform:scaleX(.42) skewY(5.5deg)")+A("rbn",rNewB(),"transform:scaleX(0)"));
const rOut=(s,k)=>`0%,${s}%{transform:scaleX(1) skewY(0deg);opacity:1}${s+14}%,86%{transform:scaleX(0) skewY(${k}deg);opacity:1}86.5%{transform:scaleX(1) skewY(0deg);opacity:0}100%{transform:scaleX(1) skewY(0deg);opacity:1}`;
const rIn=(s,k)=>`0%,${s+14}%{transform:scaleX(0) skewY(${-k}deg);opacity:1}${s+28}%,86%{transform:scaleX(1) skewY(0deg);opacity:1}100%{transform:scaleX(1) skewY(0deg);opacity:0}`;
kf("rto",rOut(14,10),EIN);kf("rtn",rIn(14,10),EOUT);kf("rbo",rOut(26,10),EIN);kf("rbn",rIn(26,10),EOUT);

/* 창 전환: 내용이 창문 두 짝처럼 가운데서 바깥으로 열림 */
const half=(left)=>{const x=left?X:80;
  return clip(K.rect(x,CY,56,CH,{f:"#fff"})+oldC(X,CY,W,CH),x,CY,56,CH,0)
   +K.rect(x+.5,CY+.5,55,CH-1,{s:"#C9CFDB",sw:1})+K.rect(left?x+55:x,CY,1,CH,{f:"#9AA1AE"})
   +A("wns",K.rect(x,CY,56,CH,{f:"#1F2A4A"}),"opacity:.14")};
TH2["창 전환"]=K=>dyn(A("wnn",newC(X,CY,W,CH),`${VB(80,CY+32)};transform:scale(.95);opacity:.9`)
  +A("wnl",half(true),`${VB(X,CY+32)};transform:scaleX(.45) skewY(8deg)`)
  +A("wnr",half(false),`${VB(X+W,CY+32)};transform:scaleX(.45) skewY(-8deg)`));
kf("wnl","0%,14%{transform:scaleX(1) skewY(0deg)}52%,86%{transform:scaleX(.07) skewY(15deg)}100%{transform:scaleX(1) skewY(0deg)}");
kf("wnr","0%,14%{transform:scaleX(1) skewY(0deg)}52%,86%{transform:scaleX(.07) skewY(-15deg)}100%{transform:scaleX(1) skewY(0deg)}");
kf("wnn","0%,14%{transform:scale(.88);opacity:.6}52%,86%{transform:scale(1);opacity:1}100%{transform:scale(.88);opacity:.6}");
kf("wns","0%,14%{opacity:0}52%,86%{opacity:.4}100%{opacity:0}");

/* 궤도: 내용이 타원 궤도를 따라 뒤로 돌아가고 다음 내용이 앞으로 */
const OC=[80,56];
const opos=f=>{const z=Math.cos(f);return {dx:-44*Math.sin(f),dy:-12*(1-z)/2,s:.55+.45*(1+z)/2}};
const otf=f=>{const p=opos(f);return `transform:translate(${n2(p.dx)}px,${n2(p.dy)}px) scale(${n2(p.s)})`};
const orbKF=(ph0,op)=>{let fr="0%,14%{"+otf(ph0)+";opacity:"+op(0)+"}";
  for(let i=1;i<=10;i++){const u=i/10;fr+=`${P(14+44*u)}{${otf(ph0+Math.PI*ease(u))};opacity:${n2(op(u))}}`}
  fr=fr.replace(/58%\{/,"58%,86%{");
  for(let i=1;i<=6;i++){const u=1-i/6;fr+=`${P(86+14*i/6)}{${otf(ph0+Math.PI*ease(u))};opacity:${n2(op(u))}}`}
  return fr};
const opO=u=>1-cl((u-.6)/.25), opN=u=>cl((u-.2)/.2);
TH2["궤도"]=K=>dyn(`<ellipse cx="80" cy="50" rx="44" ry="6" style="fill:none;stroke:#B8C0CF;stroke-width:1.2;stroke-dasharray:3 2.5"/>`
  +A("obo",blk(45,34,70,44,false),`${VB(OC[0],OC[1])};${otf(Math.PI*.7)};opacity:.9`)
  +A("obn",blk(45,34,70,44,true),`${VB(OC[0],OC[1])};${otf(Math.PI*1.65)};opacity:1`));
kf("obo",orbKF(0,opO),LIN);kf("obn",orbKF(Math.PI,opN),LIN);
}
