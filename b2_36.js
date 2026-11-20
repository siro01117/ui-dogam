// B2 그림 보충 (N=36): fn 대표 폰트 17 · ta 글자 생김새 19.
// 글자는 시스템 글꼴에 기대지 않고 rect / path 로 직접 그린다. 가리키는 부분만 파랑.
// 파란 표시는 3.2초 박자로 켜졌다 꺼진다(꺼지면 검은 글자 그대로 보인다). 멈춘 모습은 켜진 상태.
{
const C=K.C, W="#FFFFFF", n2=K.n2, INK="#12141A", BL=C.blue, GH="#B4BBC8", GL="#CDD2DC";
// 깜빡임: lit · lis = 글자의 일부(파랑 ↔ 글자색, fill · stroke), mk · mq = 글자가 아닌 표시(투명도 1 ↔ 0 · 1 ↔ .25)
B2CSS+=`.b2x36{animation-duration:3.2s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}
.b2a-n36lit{animation-name:b2a-n36lit}.b2a-n36lis{animation-name:b2a-n36lis}.b2a-n36mk{animation-name:b2a-n36mk}.b2a-n36mq{animation-name:b2a-n36mq}
@keyframes b2a-n36lit{0%,42%,100%{fill:var(--acc)}50%,92%{fill:var(--off,#12141A)}}
@keyframes b2a-n36lis{0%,42%,100%{stroke:var(--acc)}50%,92%{stroke:var(--off,#12141A)}}
@keyframes b2a-n36mk{0%,42%,100%{opacity:1}50%,92%{opacity:0}}
@keyframes b2a-n36mq{0%,42%,100%{opacity:1}50%,92%{opacity:.25}}
`;
const LIT="b2x36 b2a-n36lit", LIS="b2x36 b2a-n36lis";
const MK=m=>`<g class="b2x36 b2a-n36mk">${m}</g>`, MQ=m=>`<g class="b2x36 b2a-n36mq">${m}</g>`;   // 글자가 아닌 표시를 감싼다
// P · PE · S · R 은 색이 파랑(BL)이고 불투명하면 "글자의 일부"로 보고 깜빡임 클래스를 붙인다. 글자가 아닌 표시는 mR · mP · K.* 로 그려 MK / MQ 로 감싼다
const P=(d,f,o=1)=>`<path d="${d}" style="fill:${f}${o<1?`;opacity:${o}`:""}"${f===BL&&o===1?` class="${LIT}"`:""}/>`;
const PE=(d,f)=>`<path d="${d}" fill-rule="evenodd" style="fill:${f}"${f===BL?` class="${LIT}"`:""}/>`;
const S=(d,c,sw,x="")=>`<path d="${d}" style="fill:none;stroke:${c};stroke-width:${sw};stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:8${x}"${c===BL?` class="${LIS}"`:""}/>`;
const R=(x,y,w,h,f,o=1)=>K.rect(x,y,w,h,{f,o,cls:f===BL&&o===1?LIT:""});
const mR=(x,y,w,h,o=1)=>K.rect(x,y,w,h,{f:BL,o});
const mP=(d,o=1)=>`<path d="${d}" style="fill:${BL}${o<1?`;opacity:${o}`:""}"/>`;
const mL=(x1,y1,x2,y2,sw=1.4)=>`<path d="M${n2(x1)} ${n2(y1)}L${n2(x2)} ${n2(y2)}" style="fill:none;stroke:${BL};stroke-width:${sw};stroke-linecap:butt"/>`;
const ell=(cx,cy,rx,ry,rot=0)=>{const a=rot*Math.PI/180,dx=rx*Math.cos(a),dy=rx*Math.sin(a);
  return `M${n2(cx+dx)} ${n2(cy+dy)}A${rx} ${ry} ${rot} 1 0 ${n2(cx-dx)} ${n2(cy-dy)}A${rx} ${ry} ${rot} 1 0 ${n2(cx+dx)} ${n2(cy+dy)}Z`};
const pt=(cx,cy,r,deg)=>{const a=deg*Math.PI/180;return `${n2(cx+r*Math.cos(a))} ${n2(cy+r*Math.sin(a))}`};
const foot=(a,b,B,l,t,bh=0)=>`M${n2(a-l)} ${B}V${n2(B-t)}Q${a} ${n2(B-t)} ${a} ${n2(B-t-bh)}H${b}Q${b} ${n2(B-t)} ${n2(b+l)} ${n2(B-t)}V${B}Z`;
const head=(a,b,Tp,l,t,bh=0)=>`M${n2(a-l)} ${Tp}V${n2(Tp+t)}Q${a} ${n2(Tp+t)} ${a} ${n2(Tp+t+bh)}H${b}Q${b} ${n2(Tp+t)} ${n2(b+l)} ${n2(Tp+t)}V${Tp}Z`;
const card=()=>K.card(12,10,136,80,14);
const page=(m,dx=0,dy=0)=>card()+(dx||dy?`<g transform="translate(${dx} ${dy})">${m}</g>`:m);
const guide=(y,x1=20,x2=140,s=C.line)=>K.line(x1,y,x2,y,{s,sw:.8});

/* ───────── 대문자 · 소문자 부품 ───────── */
// A: 굵기 w(가로 두께), 밑 반폭 hw. o.apex 는 두 획이 겹친 꼭대기 조각의 색
const cA=(cx,t,b,w,hw,c=INK,o={})=>{const H=b-t,k=hw-w/2,y1=n2(t+w/(2*k)*H),by=o.by||n2(t+H*.6),bh=o.bh||n2(w*.8),bx=n2(k*(by+bh-t)/H-w/2+1);
  return R(cx-bx,by,2*bx,bh,c)+P(`M${n2(cx-w/2)} ${t}h${w}L${n2(cx-hw+w)} ${b}h${-w}Z`,c)+P(`M${n2(cx-w/2)} ${t}h${w}L${n2(cx+hw)} ${b}h${-w}Z`,c)
  +(o.apex?P(`M${n2(cx-w/2)} ${t}h${w}L${n2(cx+w)} ${y1}h${-2*w}Z`,o.apex):"")};
// V: 왼쪽 위 x0, 반폭 hv. vx 는 밑 꼭짓점 조각의 색
const cV=(x0,t,b,w,hv,c=INK,vx="")=>{const H=b-t,k=hv-w/2,y1=n2(b-w/(2*k)*H),xm=x0+hv;
  return P(`M${n2(x0)} ${t}h${w}L${n2(xm+w/2)} ${b}h${-w}Z`,c)+P(`M${n2(x0+2*hv-w)} ${t}h${w}L${n2(xm+w/2)} ${b}h${-w}Z`,c)
  +(vx?P(`M${n2(xm-w/2)} ${b}h${w}L${n2(xm+w)} ${y1}h${-2*w}Z`,vx):"")};
const cW=(x0,t,b,w,hv,c=INK,{vx="",apex=""}={})=>{const H=b-t,k=hv-w/2,y1=n2(t+w/(2*k)*H),cm=x0+2*hv-w/2;
  return cV(x0,t,b,w,hv,c,vx)+cV(x0+2*hv-w,t,b,w,hv,c,vx)+(apex?P(`M${n2(cm-w/2)} ${t}h${w}L${n2(cm+w)} ${y1}h${-2*w}Z`,apex):"")};
const cH=(x,t,b,w,W2,c=INK,bh=w*.85)=>R(x+w-1,n2((t+b)/2-bh/2),W2-2*w+2,bh,c)+R(x,t,w,b-t,c)+R(x+W2-w,t,w,b-t,c);
const cE=(x,t,b,w,c=INK,arm=c)=>{const ah=n2(w*.85);return R(x,t,w,b-t,c)+R(x+w,t,24,ah,arm)+R(x+w,n2((t+b)/2-ah/2),20,ah,arm)+R(x+w,b-ah,24,ah,arm)};
// K: 팔(위로 뻗는 비스듬한 획)과 다리(팔 아랫변에서 나와 바닥을 딛는 획)
const cK=(x,t,b,w,c=INK,{arm=c,leg=c}={})=>{const sx=x+w,xr=sx+31,aw=11,y1=t+26,y4=y1+aw*(y1-t)/(xr-aw-sx),ax=xr-sx,ay=t-y4,q=1.1,lw=11.5,
    u1=.1,u2=u1+lw/(ax-ay*q),e=leg===c?3:0,p=u=>[sx+u*ax-e*q,y4+u*ay-e],[p1x,p1y]=p(u1),[p2x,p2y]=p(u2),
    lg=P(`M${n2(p1x)} ${n2(p1y)}L${n2(p2x)} ${n2(p2y)}L${n2(p2x+(b-p2y)*q)} ${b}H${n2(p1x+(b-p1y)*q)}Z`,leg),
    am=P(`M${sx} ${y1}L${xr-aw} ${t}H${xr}L${sx} ${n2(y4)}Z`,arm);
  return R(x,t,w,b-t,c)+(e?lg+am:am+lg)};
// R: 볼 + 다리. o.leg=[볼 밑 바깥 원에서 다리가 시작하는 두 자리(볼 중심 x 기준), 바닥의 두 x(글자 왼쪽 기준)], o.lc 다리 색
const cR=(x,t,b,w,c=INK,o={})=>{const r=o.r||10.5,a=x+w+(o.a||10),cy=t+w/2+r,lc=o.lc||c,Ro=r+w/2-(lc===c?2.5:0),yc=d=>n2(cy+Math.sqrt(Ro*Ro-d*d)),
    [l1,l2,b1,b2]=o.leg||[0,8.75,w+19.6,w+30];
  return S(`M${x+w-1} ${n2(t+w/2)}H${a}a${r} ${r} 0 0 1 0 ${2*r}H${x+w-1}`,c,w)+R(x,t,w,b-t,c)
  +P(`M${n2(a+l1)} ${yc(l1)}A${Ro} ${Ro} 0 0 0 ${n2(a+l2)} ${yc(l2)}L${n2(x+b2)} ${b}H${n2(x+b1)}Z`,lc)};
// S: 위아래 두 원호. spine 은 가운데를 지나는 큰 곡선의 색
const cS=(cx,cy,r,sw,c=INK,spine="")=>S(`M${pt(cx,cy-r,r,-38)}A${r} ${r} 0 1 0 ${cx} ${cy}A${r} ${r} 0 1 1 ${pt(cx,cy+r,r,142)}`,c,sw)
  +(spine?S(`M${pt(cx,cy-r,r,165)}A${r} ${r} 0 0 0 ${cx} ${cy}A${r} ${r} 0 0 1 ${pt(cx,cy+r,r,-15)}`,spine,sw):"");
// e: 가로 획 밑선이 고리와 만나는 각에서 시작해 한 바퀴 가까이 돈다
const le=(cx,cy,r,sw,c=INK,{bh=n2(sw*.8),end=48}={})=>{const a=Math.asin(bh/2/r)*180/Math.PI;
  return R(n2(cx-r),n2(cy-bh/2),n2(r*1.96),bh,c)+S(`M${pt(cx,cy,r,a)}A${r} ${r} 0 1 0 ${pt(cx,cy,r,end)}`,c,sw)};
const wedge=(cx,cy,ri,ro,a1,a2)=>MK(mP(`M${pt(cx,cy,ri,a1)}L${pt(cx,cy,ro,a1)}A${ro} ${ro} 0 0 1 ${pt(cx,cy,ro,a2)}L${pt(cx,cy,ri,a2)}A${ri} ${ri} 0 0 0 ${pt(cx,cy,ri,a1)}Z`,.32));
// 두 층짜리 g: 볼(위 고리) · 이어(오른쪽 위 작은 획) · 링크(이음 획) · 루프(아래 닫힌 고리)
const dg=(cx,{ear=INK,loop=INK}={})=>{const by=37;
  return S(`M${cx-6.5} ${by+9.5}C${cx-15} ${by+14} ${cx-15} ${by+22} ${cx-5} ${by+24.6}`,INK,5)
  +`<ellipse cx="${cx+2}" cy="71" rx="17" ry="9.5" style="fill:none;stroke:${loop};stroke-width:6"${loop===BL?` class="${LIS}"`:""}/>`
  +S(`M${cx+7.5} ${by-7.5}C${cx+11} ${by-12} ${cx+16} ${by-13} ${cx+22} ${by-11.5}`,ear,5.5)
  +K.circ(cx,by,11.5,{s:INK,sw:7})};

/* ───────── ta · 글자 생김새 ───────── */
// 세리프 H: 줄기 둘에 돌기 여덟. kind "br" = 줄기와 돌기 사이 곡선(파랑), "hl" = 실처럼 가는 직선 돌기(파랑)
const serH=(kind)=>{const t=22,b=78,sw=kind==="br"?12:13,l=kind==="br"?8.5:9,th=kind==="br"?3.6:1.7,bh=9,xs=[40,108-sw+12];
  const st=a=>{const z=a+sw;let m=R(a,t,sw,b-t,INK);
    if(kind==="hl")return m+R(a-l,t,sw+2*l,th,BL)+R(a-l,b-th,sw+2*l,th,BL);
    m+=R(a-l,t,sw+2*l,th,INK)+R(a-l,b-th,sw+2*l,th,INK);
    const fl=(x,y,sx,sy)=>P(`M${n2(x+sx*l)} ${n2(y)}Q${x} ${n2(y)} ${x} ${n2(y+sy*bh)}V${n2(y)}Z`,BL);
    return m+fl(a,t+th,-1,1)+fl(z,t+th,1,1)+fl(a,b-th,-1,-1)+fl(z,b-th,1,-1)};
  return card()+R(xs[0]+sw-1,50-(kind==="br"?1.8:.85),xs[1]-xs[0]-sw+2,kind==="br"?3.6:1.7,INK)+st(xs[0])+st(xs[1])};
TH2["브래킷 세리프"]=K=>serH("br");
TH2["헤어라인 세리프"]=K=>serH("hl");

// 두 획이 위에서 만나는 꼭짓점(파랑): A 꼭대기, W 가운데 봉우리
TH2["에이펙스"]=K=>page(cA(48,24,76,9,24,INK,{apex:BL})+cW(80,24,76,9,16,INK,{apex:BL}));
// 두 획이 아래에서 만나는 꼭짓점(파랑): V 밑, W 밑 두 곳
TH2["버텍스"]=K=>page(cV(24,24,76,9,22,INK,BL)+cW(80,24,76,9,16,INK,{vx:BL}));

// 한쪽 끝만 붙고 옆 · 위로 뻗은 획(파랑): E 의 가로 획 셋, K 의 위쪽 획
TH2["암"]=K=>page(cE(34,24,76,9.5,INK,BL)+cK(84,24,76,9.5,INK,{arm:BL}));
// 아래로 비스듬히 뻗어 바닥을 딛는 획(파랑): K · R
TH2["레그"]=K=>page(cK(32,24,76,9.5,INK,{leg:BL})+cR(88,24,76,9.5,INK,{lc:BL}));

// 글자 아래로 삐져나온 꼬리(파랑): Q 의 꼬리, y 의 내려간 획
TH2["테일"]=K=>{const bs=68,xt=38,ds=85,x=98,sl=10.75/(bs-xt),q=n2((ds-bs)*sl);
  return page(guide(bs)+PE(ell(52,44,23,24)+ell(52,44,14.5,15.5),INK)+S(`M57 53L77 75`,BL,8.5)
  +P(`M${x} ${xt}h8.5L${x+19.25} ${bs}h-8.5Z`,INK)+P(`M${x+21.5} ${xt}h8.5L${x+19.25} ${bs}h-8.5Z`,INK)
  +P(`M${x+10.75} ${bs}h8.5L${n2(x+19.25-q)} ${ds}h-8.5Z`,BL),2,-3)};

// 두 층짜리 g 의 머리 오른쪽 위에 붙은 작은 획
TH2["이어"]=K=>page(guide(22,44,116)+guide(52,44,116)+dg(78,{ear:BL}),0,-2);
// 두 층짜리 g 의 아래쪽 닫힌 고리
TH2["루프"]=K=>page(guide(22,44,116)+guide(52,44,116)+dg(78,{loop:BL}),0,-2);

// 기둥에서 나와 둥글게 넘어가는 곡선 획(파랑): h · n · m
TH2["숄더"]=K=>{const sw=7.5,r=10,xh=40,bs=72,as=16,cy=xh+sw/2+r;
  const arch=x=>S(`M${x+sw/2} ${cy}a${r} ${r} 0 0 1 ${2*r} 0`,BL,sw)+R(x+2*r,cy,sw,bs-cy,INK),st=(x,y)=>R(x,y,sw,bs-y,INK);
  return page(arch(22)+st(22,as)+arch(57)+st(57,xh)+arch(92)+arch(112)+st(92,xh),0,6)};

// S 의 가운데를 휘어 지나가는 큰 곡선
TH2["스파인"]=K=>page(cS(80,50,13.5,9.5,INK,BL));

// G 의 곡선과 기둥이 만나는 아래쪽에 삐죽 나온 돌기
TH2["스퍼"]=K=>{const cx=77,cy=50,r=22,sw=9.5,Ro=r+sw/2,xs=cx+Ro-.5-sw,b=cy+Ro;
  return page(R(cx+2,cy+1,xs-cx-1,8,INK)+S(`M${pt(cx,cy,r,-42)}A${r} ${r} 0 1 0 ${pt(cx,cy,r,36)}`,INK,sw)+R(xs,cy+1,sw,b-cy-1,INK)+R(xs,b-8,sw,8,BL))};

// e 의 가로 획 위에 닫힌 작은 속공간
TH2["아이"]=K=>{const cx=80,cy=50,r=21,sw=9.5,bh=7.5,ri=r-sw/2,hc=n2(Math.sqrt(ri*ri-bh*bh/4));
  return page(MK(mP(`M${cx-hc} ${cy-bh/2}A${ri} ${ri} 0 0 1 ${cx+hc} ${cy-bh/2}Z`))+le(cx,cy,r,sw,INK,{bh}))};

// 속공간이 밖으로 트인 입구(파랑): c · e
TH2["애퍼처"]=K=>{const cy=50,r=18,sw=9,bh=7,a=Math.asin(bh/2/r)*180/Math.PI;
  return page(wedge(52,cy,r-sw/2,r+sw/2,-48,48)+S(`M${pt(52,cy,r,-48)}A${r} ${r} 0 1 0 ${pt(52,cy,r,48)}`,INK,sw)
  +wedge(108,cy,r-sw/2,r+sw/2,a,48)+le(108,cy,r,sw,INK,{bh}))};

// i · j 위에 찍힌 점
TH2["타이틀"]=K=>page(guide(40,40,120)+guide(70,40,120)+R(56,40,11,30,INK)+K.circ(61.5,25,6.6,{f:BL,cls:LIT})
  +S(`M97.5 40V72a9 9 0 0 1 -9 9h-4`,INK,11)+K.circ(97.5,25,6.6,{f:BL,cls:LIT}),0,-2.5);

// 가는 곳끼리 이은 축: 왼쪽은 기울고, 오른쪽은 곧다
TH2["스트레스"]=K=>{const ax=(cx,rot)=>{const a=rot*Math.PI/180,dx=-29*Math.sin(a),dy=29*Math.cos(a);return MK(mL(cx-dx,43-dy,cx+dx,43+dy,1.5))};
  return K.card(12,12,64,76,12)+PE(ell(44,43,18,23)+ell(44,43,10.5,19.8,-24),INK)+ax(44,-24)+K.txt(44,82,"기운 축",{size:7.5,fill:C.sub,w:700,a:"middle"})
  +K.card(84,12,64,76,12)+PE(ell(116,43,18,23)+ell(116,43,9,21.4),INK)+ax(116,0)+K.txt(116,82,"곧은 축",{size:7.5,fill:C.sub,w:700,a:"middle"})};

// 둥근 글자가 위아래 선 밖으로 살짝 넘어간 부분(파랑)
TH2["오버슈트"]=K=>{const t=28,b=72,cx=106,cy=50,Ro=25.2,hc=n2(Math.sqrt(Ro*Ro-(cy-t)*(cy-t)));
  return page(guide(t,20,140,GL)+guide(b,20,140,GL)+cH(32,t,b,9.5,38)+K.circ(cx,cy,Ro-4.75,{s:INK,sw:9.5})
  +P(`M${cx-hc} ${t}A${Ro} ${Ro} 0 0 1 ${cx+hc} ${t}Z`,BL)+P(`M${cx-hc} ${b}A${Ro} ${Ro} 0 0 0 ${cx+hc} ${b}Z`,BL))};

// 글자 양옆에 미리 넣어 둔 빈틈(파랑)
TH2["사이드베어링"]=K=>page(R(23,26,9.5,48,GL)+R(127.5,26,9.5,48,GL)
  +MK(mR(48,18,12,64,.26)+mR(100,18,12,64,.26))+MQ(mL(48,16,48,84,1.2)+mL(112,16,112,84,1.2))
  +cH(60,26,74,9.5,40));

// 글자를 그려 넣는 정사각 틀(파란 점선). 한 변 = 글자 크기
TH2["em 박스"]=K=>{const x=46,y=16,s=68,bs=69,px=83;
  return page(MQ(K.rect(x,y,s,s,{f:C.soft,r:2})+`<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="2" style="fill:none;stroke:${BL};stroke-width:1.3;stroke-dasharray:3.2 2.6"/>`)
  +K.line(x+3,bs,x+s-3,bs,{s:GH,sw:.7})
  +cH(53,22,bs,8,25)+PE(`M${px+4} ${n2(54-13.6)}A14.5 14.5 0 1 1 ${px+4} ${n2(54+13.6)}Z`+ell(px+9.5,54,7,7),INK)+R(px,39.5,8,84-39.5-1.5,INK))};

/* ───────── fn · 대표 폰트: 라틴 ───────── */
// 헬베티카: 획 끝이 수평으로 잘린다(파랑), R 의 다리는 수직으로 내려온다(파랑)
TH2["헬베티카"]=K=>{const i=K.id(),c1="b236a"+i,c2="b236b"+i,cx=54,cy=50,r=21.5,g=9.5,sw=10;
  return `<defs><clipPath id="${c1}"><path d="M0 0H160V${cy-g}H${cx}V${cy+g}H160V100H0Z"/></clipPath><clipPath id="${c2}"><path d="M${cx} ${cy-g-4.5}H160V${cy-g}H${cx}ZM${cx} ${cy+g}H160V${cy+g+4.5}H${cx}Z"/></clipPath></defs>`
  +card()+`<g clip-path="url(#${c1})">`+K.circ(cx,cy,r,{s:INK,sw})+`</g><g clip-path="url(#${c2})">`+K.circ(cx,cy,r,{s:BL,sw,cls:LIS})+`</g>`
  +cR(95,24,76,10,INK,{lc:BL,leg:[2.5,12.5,22.5,32.5]})};

// 푸투라: A 꼭대기가 뾰족해 대문자 선 위로 솟는다(파랑), O 는 정원(파란 밑그림)
TH2["푸투라"]=K=>{const cx=50,t=20,b=76,hw=25,w=9,yi=n2(t+(b-t)*w/hw),ox=110;
  return page(guide(24)+guide(76)+R(cx-12,58,24,6.5,INK)+P(`M${cx} ${t}L${cx+hw} ${b}h${-w}L${cx} ${yi}L${cx-hw+w} ${b}h${-w}Z`,INK)
  +P(`M${cx} ${t}L${cx+w} ${yi}h${-2*w}Z`,BL)+K.circ(ox,50,21.75,{s:INK,sw:8.5})
  +MK(K.rect(ox-26,24,52,52,{s:BL,sw:.9,o:.6})+mL(ox-26,50,ox+26,50,.7)+mL(ox,24,ox,76,.7)+K.circ(ox,50,26,{s:BL,sw:1.1})))};

// 가라몬드: 비스듬한 머리 돌기(파랑), e 의 가로 획이 높아 눈이 작다(파랑), 굵기 축이 기운다
TH2["가라몬드"]=K=>{const i=K.id(),cp="b236g"+i,bs=72,cy=57,bx=56,ex=103;
  return `<defs><clipPath id="${cp}"><path clip-rule="evenodd" d="M0 0H160V100H0ZM${ex+2} ${cy-3.4}H${ex+30}V${cy+10.5}L${ex+2} ${cy+2.6}Z"/></clipPath></defs>`
  +page(guide(42,24,136)+guide(bs,24,136)
  +PE(ell(bx,cy,14.5,15.5)+ell(bx,cy,8,12.4,-22),INK)+R(bx-14,22,7.5,bs-22,INK)
  +P(`M${bx-19.5} 21.8L${bx-6.5} 16V26H${bx-14}Q${bx-14} 22.4 ${bx-19.5} 21.8Z`,BL)
  +`<g clip-path="url(#${cp})">`+PE(ell(ex,cy,14,15.5)+ell(ex,cy,8.6,12.4,-22),INK)+`</g>`+R(ex-10.5,cy-5.6,21.5,2.2,BL),1,6)};

// 보도니: 굵은 획 옆의 실 같은 획 · 가로 획 · 돌기(파랑), 굵기 축이 곧다
TH2["보도니"]=K=>{const cx=51,t=24,b=74,bb=b-1.6,ox=114,jy=n2(t+.239*(bb-t));
  return page(P(`M${cx} ${t}L${cx-21} ${bb}h1.9L${n2(cx+.8)} ${t+2}Z`,BL)+R(cx-13,56,19,1.7,BL)
  +P(`M${cx} ${t}L${cx+25} ${bb}H${cx+14}L${n2(cx-5.02)} ${jy}Z`,INK)
  +R(cx-28.5,bb,15,1.6,BL)+R(cx+7.5,bb,24,1.6,BL)
  +PE(ell(ox,49,22,26.6)+ell(ox,49,10.5,25),INK))};

// 타임스 뉴 로먼: 가로 획 끝의 부리 같은 돌기 · 곡선으로 이은 발(파랑), r 끝의 물방울(파랑)
TH2["타임스 뉴 로먼"]=K=>{const x=38,t=24,b=74,rx=96;
  return page(R(x,t,40,3.2,INK)+R(x+15.5,t,9,b-t-2.4,INK)
  +P(`M${x} ${t}V${t+13}h1.6Q${x+2.6} ${t+4.6} ${x+9} ${t+3.2}V${t}Z`,BL)+P(`M${x+40} ${t}V${t+13}h-1.6Q${x+37.4} ${t+4.6} ${x+31} ${t+3.2}V${t}Z`,BL)
  +P(foot(x+15.5,x+24.5,b,7,2.4,6),BL)
  +S(`M${rx+7} 57C${rx+9} 49 ${rx+15} 45.6 ${rx+21} 47`,INK,3.6)+R(rx,47,8,b-47-2.4,INK)
  +P(`M${rx-6.5} 48.6L${rx+8} 44V54H${rx}Q${rx} 49.8 ${rx-6.5} 48.6Z`,BL)+P(foot(rx,rx+8,b,6,2.4,5),BL)
  +K.circ(rx+21.6,49.6,4.7,{f:BL,cls:LIT}))};

// 인터: 소문자 키(파란 띠)가 대문자에 견줘 아주 크다
TH2["인터"]=K=>{const t=24,b=74,xt=36.5,x=84;
  return page(guide(t)+MK(mR(20,xt,120,b-xt,.16))+MQ(mR(20,xt-.7,120,1.4)+mR(20,b-.7,120,1.4))
  +cH(36,t,b,9.5,37)+P(`M${x} ${xt}h10.8L${x+37} ${b}h-10.8Z`,INK)+P(`M${x+37} ${xt}h-10.8L${x} ${b}h10.8Z`,INK))};

// 로보토: R 의 다리가 곧게 뻗고(파랑) i 의 점이 둥글다(파랑)
TH2["로보토"]=K=>page(guide(74,30,130)+cR(46,24,74,9.5,INK,{lc:BL})+R(104,38.5,9.5,35.5,INK)+K.circ(108.75,27.2,5.7,{f:BL,cls:LIT}));

// SF Pro: 기기 화면의 시계 숫자로 익숙한 시스템 글꼴
TH2["SF Pro"]=K=>{const sw=8,t=28,b=72,n=43.5,f=78,o=115;
  return page(K.circ(n,t+14,10,{s:INK,sw})+S(`M${n+10} ${t+14}V55a13 13 0 0 1 -13 13h-5`,INK,sw)
  +K.circ(66.5,41,4.3,{f:INK})+K.circ(66.5,62,4.3,{f:INK})
  +R(f,53,30,7.5,INK)+R(f+17,t,sw,b-t,INK)+P(`M${f+15.5} ${t}h9.5L${f+9.5} 57H${f}Z`,INK)
  +R(o+7,t,sw,b-t,INK)+P(`M${o+7} ${t}v9.5L${o-1} 43v-8.5Z`,INK))};

/* ───────── 한글 견본: 칸 40×44 단위, v=[x,y1,y2,머리 자유] · h=[x1,x2,y,끝 자유] · ends=[x,y,방향] 열린 획 끝 ───────── */
const AH=[[32,2,42,1]], AHh=[[32,39,21,0]], AHe=[[32,2,"u"],[32,42,"d"],[39,21,"r"]];
const NA={v:[[8,6,31,1],[31,2,42,1]],h:[[8,23,31,1],[31,39,21,0]],ends:[[8,6,"u"],[23,31,"r"],[31,2,"u"],[31,42,"d"],[39,21,"r"]]};
const MU={v:[[9,4,20,1],[31,4,20,0],[20,29,42,0]],h:[[9,31,4,0],[9,31,20,0],[2,38,29,1]],ends:[[2,29,"l"],[38,29,"r"],[20,42,"d"]]};
const BA={v:[[7,5,31,1],[22,5,31,1]].concat(AH),h:[[7,22,17,0],[7,22,31,0]].concat(AHh),ends:[[7,5,"u"],[22,5,"u"]].concat(AHe)};
const DA={v:[[7,7,31,0]].concat(AH),h:[[7,23,7,1],[7,23,31,1]].concat(AHh),ends:[[23,7,"r"],[23,31,"r"]].concat(AHe)};
const RL={v:[[22,6,18,0],[7,18,31,0]],h:[[7,22,6,0],[7,22,18,0],[7,23,31,1]],ends:[[7,6,"l"],[23,31,"r"]]};
const RA={v:RL.v.concat(AH),h:RL.h.concat(AHh),ends:RL.ends.concat(AHe)};
const RI={v:RL.v.concat(AH),h:RL.h,ends:RL.ends.concat([[32,2,"u"],[32,42,"d"]])};
const SC=1.3, OY=21.4, OX1=19.5, OX2=80.5;
// 고딕 획: 굵기 sw, 모서리 반지름 rr(0 반듯 · 조금 · sw/2 완전히 둥글게). 열린 획 끝은 파랑
const got=(g,ox,sw,rr)=>{const X=x=>n2(ox+SC*x),Y=y=>n2(OY+SC*y),h=sw/2,L=Math.max(4,rr+1.2),rot={u:0,r:90,d:180,l:270};
  return g.v.map(([x,y1,y2])=>K.rect(X(x)-h,Y(y1)-h,sw,SC*(y2-y1)+sw,{f:INK,r:rr})).join("")
  +g.h.map(([x1,x2,y])=>K.rect(X(x1)-h,Y(y)-h,SC*(x2-x1)+sw,sw,{f:INK,r:rr})).join("")
  +g.ends.map(([x,y,d])=>`<g transform="translate(${X(x)} ${Y(y)}) rotate(${rot[d]})">`
    +P(`M${-h} ${n2(L-h)}V${n2(-h+rr)}a${rr} ${rr} 0 0 1 ${rr} ${-rr}H${n2(h-rr)}a${rr} ${rr} 0 0 1 ${rr} ${rr}V${n2(L-h)}Z`,BL)+`</g>`).join("")};
// 명조 획: 세로는 굵고 가로는 가늘다. 획 머리에 부리(파랑), 가로 획 끝에 맺음
const myj=(g,ox,vw,hw)=>{let ink="",post="";
  const bu=(X,t)=>{const a=n2(X-vw/2),b=n2(X+vw/2);return `M${a} ${n2(t+8)}Q${n2(a-.4)} ${n2(t+5.4)} ${n2(a-4.8)} ${n2(t+4.3)}L${n2(b-1.1)} ${n2(t-2.1)}Q${b} ${n2(t-1.6)} ${b} ${n2(t+.6)}V${n2(t+8)}Z`};
  for(const [x,y1,y2,fr] of g.v){const X=ox+SC*x,t=OY+SC*y1-hw/2,cut=fr?6:0;
    ink+=R(X-vw/2,t+cut,vw,SC*(y2-y1)+hw-cut,INK);if(fr)post+=P(bu(X,t),BL)}
  for(const [x1,x2,y,fr] of g.h){const Y=OY+SC*y,xe=n2(ox+SC*x2+vw/2),yt=n2(Y-hw/2),lead=g.v.some(([x,y1,,f])=>f&&x===x1&&y1===y)?vw-1.2:0;
    ink+=R(ox+SC*x1-vw/2+lead,yt,SC*(x2-x1)+vw-lead,hw,INK);
    if(fr)ink+=P(`M${n2(xe-6.5)} ${yt}L${n2(xe-1.3)} ${n2(yt-2.8)}L${xe} ${yt}Z`,INK)}
  return ink+post};

/* ───────── fn · 대표 폰트: 한글 ───────── */
// 프리텐다드: 한글과 영문의 키 · 굵기를 맞췄다(파란 선 = 같은 높이)
TH2["프리텐다드"]=K=>{const cx=53,t=24,b=74,sw=7.6,px=95;
  return page(MQ(mR(20,t-.7,120,1.4)+mR(20,b-.7,120,1.4))
  +R(cx-17,t,34,sw,INK)+R(cx-11.5,t,sw,26,INK)+R(cx+3.9,t,sw,26,INK)+R(cx-19,t+19.5,38,sw,INK)+R(cx-23,b-sw,46,sw,INK)
  +S(`M${px+sw-1} ${t+sw/2}H${px+19}a11.2 11.2 0 0 1 0 22.4H${px+sw-1}`,INK,sw)+R(px,t,sw,b-t,INK))};

// 노토 산스: 세계 문자를 한 벌로. 라틴 · 한글 · 키릴 글자가 같은 굵기와 결
const tile=(cx,y,h)=>K.rect(cx-18,y,36,h,{f:"#F3F5F9",r:8});
const tA=(cx,t,b)=>cA(cx,t,b,6,15.5,INK,{bh:5});
const tGa=(cx,t)=>R(cx-14.5,t+2,15.5,5.5,INK)+P(`M${cx-4.5} ${t+2}h5.5L${cx-8.5} ${t+29}h-6Z`,INK)+R(cx+6.5,t-1,5.5,33,INK)+R(cx+12,t+11.5,5.5,5.5,INK);
const tR=(x,t,b)=>cR(x,t,b,6,INK,{r:6.2,a:6.5,leg:[0,5.5,13.5,23.5]});
TH2["노토 산스"]=K=>{const t=35,b=65;
  return page(tile(38,22,56)+tile(80,22,56)+tile(122,22,56)+tA(38,t,b)+tGa(80,t)
  +`<g transform="translate(${2*122} 0) scale(-1 1)">`+tR(110.5,t,b)+`</g>`)};

// 본고딕: 한국 · 중국 · 일본 글자를 한 벌로 맞춘 고딕
TH2["본고딕"]=K=>{const t=26,cy=41,lab=(cx,s)=>K.txt(cx,81,s,{size:8,fill:C.sub,w:700,a:"middle"}),cj=80,cn=122;
  return page(tile(38,16,52)+tile(80,16,52)+tile(122,16,52)+tGa(38,t)
  +R(cj-13,33,26,5,INK)+R(cj-13,46.5,26,5,INK)+R(cj-13,33,5,18.5,INK)+R(cj+8,33,5,18.5,INK)+R(cj-2.5,t-1,5,33,INK)
  +S(`M${cn+2.5} ${cy-11.5}C${cn+1.5} ${cy-1} ${cn-3.5} ${cy+10} ${cn-9} ${cy+10}C${cn-16} ${cy+10} ${cn-16} ${cy-8.5} ${cn-1} ${cy-12}C${cn+16} ${cy-15} ${cn+18} ${cy+9} ${cn+3} ${cy+14}`,INK,5)
  +lab(38,"한")+lab(80,"중")+lab(122,"일"))};

// 나눔고딕: 고딕인데 획 끝 모서리를 살짝 둥글렸다(파랑)
TH2["나눔고딕"]=K=>card()+got(NA,OX1,6.8,2.1)+got(MU,OX2,6.8,2.1);

// 스포카 한 산스: 한글에 다른 글꼴의 영문 · 숫자(파랑)를 합쳤다
TH2["스포카 한 산스"]=K=>{const cx=47,t=24,b=74,sw=8,sx=94,ox=117;
  return page(P(`M${cx-3.5} ${t}h8L${cx-11.5} 56h-8.5Z`,INK)+P(`M${cx+2} 28.8L${cx+20} 56h-8.5L${cx-3} 34Z`,INK)+R(cx-23,b-sw,46,sw,INK)
  +cS(sx,49,10.5,8.4,BL)+R(ox+7,t,8.4,b-t,BL)+P(`M${ox+7} ${t}v9.5L${ox-1} 39.5v-8.5Z`,BL))};

// 굴림체: 획 끝과 꺾이는 모서리가 완전히 둥글다(파랑)
TH2["굴림체"]=K=>card()+got(BA,OX1,7,3.5)+got(DA,OX2,7,3.5);

// 돋움체: 꾸밈 없이 획 끝이 반듯하게 잘린다(파랑)
TH2["돋움체"]=K=>card()+got(DA,OX1,6.8,0)+got(RI,OX2,6.8,0);

// 바탕체: 명조 계열. 세로가 굵고 가로가 가늘며 획 머리에 부리(파랑)
TH2["바탕체"]=K=>card()+myj(NA,OX1,7,2.4)+myj(RA,OX2,7,2.4);

// 궁서체: 붓으로 눌러 시작하고(파랑) 끝은 뾰족하게 빠진다(파랑)
TH2["궁서체"]=K=>{
  // 세로 획: 비스듬히 눌러 시작, 아래는 뾰족. 머리 · 끝 조각은 파랑
  const bv=(x,y1,y2,w,tip=1,hd=1)=>P(`M${x-w*.5} ${y1+8}V${y2-10}`+(tip?`Q${n2(x-w*.42)} ${y2-3} ${n2(x-w*.05)} ${y2+3}Q${n2(x+w*.42)} ${y2-3} ${x+w*.5} ${y2-10}`:`V${y2}H${x+w*.5}`)+`V${y1+8}Z`,INK)
    +P(`M${n2(x-w*1.05)} ${n2(y1+3)}L${n2(x+w*.5)} ${n2(y1-2.2)}Q${n2(x+w*.66)} ${n2(y1+2.5)} ${x+w*.5} ${y1+8.3}H${x-w*.5}Q${n2(x-w*.5)} ${n2(y1+4.6)} ${n2(x-w*1.05)} ${n2(y1+3)}Z`,hd?BL:INK)
    +(tip?P(`M${x-w*.5} ${y2-10}Q${n2(x-w*.42)} ${y2-3} ${n2(x-w*.05)} ${y2+3}Q${n2(x+w*.42)} ${y2-3} ${x+w*.5} ${y2-10}Z`,BL):"");
  // 가로 획: 왼쪽에서 눌러 시작해 오른쪽으로 살짝 올라가고 끝에서 한 번 눌러 맺는다
  const bh=(x1,x2,y,w)=>P(`M${x1-1} ${n2(y-w*.8)}Q${x1+3} ${n2(y-w*.5)} ${x1+8} ${n2(y-w*.36)}L${x2-8} ${n2(y-w*.36-1.6)}Q${x2-3} ${n2(y-w*.95-1.6)} ${x2+1} ${n2(y-1.2)}Q${n2(x2+.6)} ${n2(y+w*.6)} ${x2-5} ${n2(y+w*.42-.8)}L${x1+4} ${n2(y+w*.42)}Q${n2(x1-.6)} ${n2(y+w*.36)} ${x1-1} ${n2(y-w*.8)}Z`,INK);
  return card()
  +bh(31,53,61,5.4)+bv(31,31,58,6.4,0)+bh(61,71,48,4.6)+bv(60,24,76,7)          // 나
  +bh(93,121,27,4.6)+bh(93,121,47,4.6)+bv(93,27,45,6,0,0)+bv(121,27,45,6,0,0)       // ㅁ
  +bh(84,134,60,5.4)+bv(108,62,80,6.6)};                                          // ㅜ
}
