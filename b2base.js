// 예시 그림 B2 스타일 공통 바탕 (thumbs.js 다음, b2_*.js 앞에 읽는다)
// B2: 파랑→분홍 옅은 그라데이션 바탕, 주변은 흰 반투명 블록 한두 개, 대상만 실제 모양·색으로 흰 면에 살짝 떠 있음.
// 그림 함수는 TH2["이름"] = K => "SVG 안쪽 마크업" (viewBox 0 0 160 100). 이름이 겹치면 "분류키:이름".
// 움직이는 그림은 클래스 b2a-... 로 감싸고 CSS 는 B2CSS 에 덧붙인다.
const TH2={};
let B2CSS="";
const K=(()=>{
  const n2=v=>Math.round(v*100)/100;
  let uid=0;
  const C={
    blue:"var(--acc)", blueSoft:"var(--acc-soft)", ink:"#12141A", sub:"#6B7280", mute:"#9AA1AE", line:"#E2E6EC", red:"#E5484D", green:"#1FA971", amber:"#F2A93B",
    blk:"rgba(255,255,255,.55)", sf:"#FFFFFF", hair:"rgba(47,60,120,.08)", toast:"#1F2329", toastInk:"#FFFFFF",
    skel:"#E7EAF2", skelHi:"#F5F7FB", dim:"rgba(40,50,110,.10)", soft:"rgba(47,107,255,.10)"
  };
  // 색은 style 로 넣어 CSS 변수(포인트색)가 먹게 한다
  const st=(f,s,sw,o)=>`style="fill:${f};stroke:${s};stroke-width:${sw}${o<1?`;opacity:${o}`:""}"`;
  const rect=(x,y,w,h,{f="none",s="none",sw=1,r=0,o=1,fx="",cls=""}={})=>`<rect x="${n2(x)}" y="${n2(y)}" width="${n2(w)}" height="${n2(h)}" rx="${r}" ${st(f,s,sw,o)}${fx?` filter="${fx}"`:""}${cls?` class="${cls}"`:""}/>`;
  const circ=(cx,cy,r,{f="none",s="none",sw=1,o=1,cls=""}={})=>`<circle cx="${n2(cx)}" cy="${n2(cy)}" r="${r}" ${st(f,s,sw,o)}${cls?` class="${cls}"`:""}/>`;
  const line=(x1,y1,x2,y2,{s=C.line,sw=1,o=1,cls=""}={})=>`<line x1="${n2(x1)}" y1="${n2(y1)}" x2="${n2(x2)}" y2="${n2(y2)}" ${st("none",s,sw,o)}${cls?` class="${cls}"`:""}/>`;
  const path=(d,{f="none",s=C.ink,sw=1.4,o=1,cls=""}={})=>`<path d="${d}" ${st(f,s,sw,o)}${cls?` class="${cls}"`:""}/>`;
  const txt=(x,y,s,{size=7,fill=C.ink,w=500,a="start",cls=""}={})=>`<text x="${n2(x)}" y="${n2(y)}" font-size="${size}" font-weight="${w}" text-anchor="${a}" style="fill:${fill}"${cls?` class="${cls}"`:""}>${s}</text>`;
  const ICON={
    home:"M4 11l8-7 8 7v9h-5v-6h-6v6H4z",
    search:["M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z","M15.5 15.5L20 20"],
    bookmark:"M7 4h10v16l-5-3.5L7 20z",
    user:["M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z","M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"],
    check:"M5 12.5l4.5 4.5L19 7",
    alert:["M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18z","M12 7.5v5.5","M12 16.6v.01"],
    bell:["M6 16V11a6 6 0 0 1 12 0v5l2 2H4z","M10 20a2 2 0 0 0 4 0"],
    back:"M15 5l-7 7 7 7",
    next:"M9 5l7 7-7 7",
    x:["M6 6l12 12","M18 6L6 18"],
    plus:["M12 5v14","M5 12h14"],
    heart:"M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
    star:"M12 3.5l2.5 5.3 5.8.7-4.3 3.9 1.2 5.7L12 16.3l-5.2 2.8 1.2-5.7-4.3-3.9 5.8-.7z",
    menu:["M4 7h16","M4 12h16","M4 17h16"],
    more:["M12 5.5v.01","M12 12v.01","M12 18.5v.01"],
    share:["M12 4v11","M7.5 8.5L12 4l4.5 4.5","M5 13v6h14v-6"],
    edit:["M4 20h4L19 9l-4-4L4 16z","M14 6l4 4"],
    trash:["M5 7h14","M9 7V4h6v3","M7 7l1 13h8l1-13"],
    eye:["M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z","M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"],
    calendar:["M5 6h14v14H5z","M5 10h14","M9 4v4","M15 4v4"],
    filter:"M4 5h16l-6 8v6l-4-2v-4z",
    sort:["M8 5v14","M5 16l3 3 3-3","M16 19V5","M13 8l3-3 3 3"],
    refresh:["M20 12a8 8 0 1 1-2.4-5.7","M20 4v4.5h-4.5"],
    undo:["M9 14L4 9l5-5","M4 9h10a6 6 0 0 1 0 12h-3"],
    send:"M4 12l16-8-6 16-3-7z",
    mic:["M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z","M6 11a6 6 0 0 0 12 0","M12 17v3"],
    image:["M4 5h16v14H4z","M4 16l5-5 4 4 3-3 4 4","M15.5 8.5v.01"],
    link:["M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1","M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"],
    lock:["M6 11h12v9H6z","M8.5 11V8a3.5 3.5 0 0 1 7 0v3"],
    cart:["M4 5h2l2 10h10l2-7H7","M9 19.5v.01","M17 19.5v.01"],
    chat:"M4 5h16v11H9l-5 4z",
    sparkle:"M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
    stop:"M7 7h10v10H7z",
    copy:["M9 9h11v11H9z","M5 15V4h11"],
    download:["M12 4v11","M7.5 10.5L12 15l4.5-4.5","M5 19h14"],
    qr:["M4 4h6v6H4z","M14 4h6v6h-6z","M4 14h6v6H4z","M14 14h2v2h-2z","M18 18h2v2h-2z"],
    settings:["M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z","M12 3v3","M12 18v3","M3 12h3","M18 12h3","M5.6 5.6l2.1 2.1","M16.3 16.3l2.1 2.1","M5.6 18.4l2.1-2.1","M16.3 7.7l2.1-2.1"],
    hand:["M9 11V5.5a1.5 1.5 0 0 1 3 0V11","M12 10V4.5a1.5 1.5 0 0 1 3 0V11","M15 10.5V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L3.5 13a1.5 1.5 0 0 1 2.4-1.8L9 14"],
    grid:["M4 4h7v7H4z","M13 4h7v7h-7z","M4 13h7v7H4z","M13 13h7v7h-7z"],
    list:["M8 6h12","M8 12h12","M8 18h12","M4 6v.01","M4 12v.01","M4 18v.01"],
    wifiOff:["M3 3l18 18","M8.5 16.4a5 5 0 0 1 7 0","M5 12.6a10 10 0 0 1 4-2.3","M12 20v.01"],
  };
  const icon=(n,cx,cy,size,color=C.ink,sw=1.6,cls="")=>{const s=size/24;return `<g transform="translate(${n2(cx-size/2)} ${n2(cy-size/2)}) scale(${n2(s)})" style="fill:none;stroke:${color};stroke-width:${n2(sw/s)}"${cls?` class="${cls}"`:""}>${[].concat(ICON[n]).map(d=>`<path d="${d}"/>`).join("")}</g>`};
  const id=()=>++uid;
  // 떠 보이는 면: 은은한 깊이(lift 필터) + 머리카락 선. f 를 주면 그 색 면
  const card=(x,y,w,h,r,f,cls="")=>`<g${cls?` class="${cls}"`:""}>`+rect(x,y,w,h,{f:f||C.sf,r,fx:"url(#b2lift)"})+rect(x+.25,y+.25,w-.5,h-.5,{s:C.hair,sw:.5,r})+`</g>`;
  const blk=(x,y,w,h,r=10)=>rect(x,y,w,h,{f:C.blk,r});           // 흐린 주변 블록
  const bar=(x,y,w,h=4,f=C.skel)=>rect(x,y,w,h,{f,r:h/2});        // 글줄 대신 쓰는 짧은 막대
  const fing=(cx,cy,cls="")=>`<g${cls?` class="${cls}"`:""}>`+circ(cx,cy,7,{f:"rgba(47,107,255,.18)"})+circ(cx,cy,4,{f:C.blue})+`</g>`; // 손가락 닿은 자리
  const grad=(gid,stops,x2=1,y2=1)=>`<linearGradient id="${gid}" x1="0" y1="0" x2="${x2}" y2="${y2}">${stops.map(([o,c])=>`<stop offset="${o}" stop-color="${c}"/>`).join("")}</linearGradient>`;
  return {C,n2,rect,circ,line,path,txt,icon,ICON,card,blk,bar,fing,grad,id};
})();
// 한 칸 그리기: 바탕 그라데이션 + 깊이 필터를 깔고 TH2 함수 결과를 얹는다 (defs 는 페이지에 한 번만 있어도 되지만 칸마다 자급)
const B2DEFS=`<linearGradient id="b2bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E6EEFF"/><stop offset=".55" stop-color="#F1EEFF"/><stop offset="1" stop-color="#FBF4FA"/></linearGradient><filter id="b2lift" x="-20%" y="-30%" width="140%" height="170%"><feDropShadow dx="0" dy="2.5" stdDeviation="3.5" flood-color="#4B5BA8" flood-opacity=".14"/></filter>`;
function thumb2(t,label){
  const k=TH2[t.c+":"+t.k]!==undefined?t.c+":"+t.k:t.k;const f=TH2[k];if(!f)return null;
  return `<svg class="th b2" viewBox="0 0 160 100" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="${label||t.k} 예시"><defs>${B2DEFS}</defs><rect width="160" height="100" fill="url(#b2bg)"/>${f(K)}</svg>`;
}
