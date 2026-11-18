// UI 이름 도감 — 어떤 모양이 어떤 이름인지. 그림 + 이름 + 즐겨찾기 (data.js · thumbs.js · anim.js 다음에 읽는다)
const ETC=["st","ty","tp","ps","rs"];
// 상위 묶음: 사이드바와 본문에서 구분선으로만 나눈다. 분류 순서도 이 순서를 따른다
const SUP=[["parts","부품",["ct","in","nv","ov","ic"]],["screen","화면 · 구성",["ly","pg","sc","sr","dt","sh","ai"]],["act","동작 · 반응",["fb","mo","ge"]],["style","스타일 · 글자",["st","ty","tp"]],["know","심리 · 리서치",["ps","rs"]]];
{const used=SUP.flatMap(s=>s[2]);Object.keys(CATS).forEach(c=>{if(!used.includes(c))SUP[SUP.length-1][2].push(c)})}
const GRP={all:"전체",ui:"UI",etc:"기타"};
const AL=typeof ALIAS!=="undefined"?ALIAS:{};
const ANIM_=typeof ANIM!=="undefined"?ANIM:{};
const look=(o,t)=>o[t.c+":"+t.k]!==undefined?o[t.c+":"+t.k]:o[t.k];
const CHO="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const cho=s=>[...s].map(ch=>{const c=ch.charCodeAt(0)-0xAC00;return c>=0&&c<11172?CHO[Math.floor(c/588)]:ch}).join("");
const seen=new Set();
const D=RAW.trim().split("\n").map((l,i)=>{const[k,e,c,d,p]=l.split("|");const key=seen.has(k)?c+":"+k:k;seen.add(k);
  const t={id:"t"+i,key,k,e,c,d,p,g:ETC.includes(c)?"etc":"ui",ch:cho(k).replace(/\s/g,"")};t.anim=look(ANIM_,t);return t});
const byKey={};D.forEach(t=>byKey[t.key]=t);
// 헷갈리는 짝: 서로 가리키게 묶어 둔다 (크게 보기 창에서 나란히 보여 줌)
const SIM={};
{const byName={};D.forEach(t=>(byName[t.k]=byName[t.k]||[]).push(t));
 const link=(a,b)=>{if(a===b)return;const l=SIM[a.key]=SIM[a.key]||[];if(!l.includes(b))l.push(b)};
 D.forEach(t=>{const cs=t.p&&byName[t.p];if(!cs)return;const o=cs.find(x=>x.c===t.c)||cs[0];link(t,o);link(o,t)});}

const S={grp:"all",q:"",pal:"blue",theme:"",fav:[],only:false,zoom:1,mtab:"cat",mcat:null};
const ZOOM=[140,180,240,320,420];   // 카드 최소 폭(px): 작게 → 크게
const store={get(k){try{return localStorage.getItem("dogam-"+k)}catch(e){return null}},set(k,v){try{localStorage.setItem("dogam-"+k,v)}catch(e){}}};
const save=(k,v)=>{store.set(k,v);window.dogam.onChange&&window.dogam.onChange(k,v)};
function applySaved(o){
  if(o.pal)S.pal=o.pal;if(o.theme==="light"||o.theme==="dark")S.theme=o.theme;
  if(o.zoom!==undefined&&o.zoom!==null&&ZOOM[+o.zoom])S.zoom=+o.zoom;
  if(o.fav){try{const a=JSON.parse(o.fav);if(Array.isArray(a))S.fav=a.filter(k=>byKey[k])}catch(e){}}
}
window.dogam={onChange:null,apply(o){applySaved(o);render()}};
applySaved({grp:store.get("grp"),pal:store.get("pal"),theme:store.get("theme"),fav:store.get("fav"),zoom:store.get("zoom")});

const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]);
const norm=s=>s.toLowerCase().replace(/\s/g,"");
const isFav=k=>S.fav.includes(k);
// 찾기: 이름 · 영어 · 뜻 · 분류 · 검색어(생김새 말 · 별칭)에서. 통째로 맞는 것 먼저, 없으면 낱말이 다 맞는 것, 그것도 없으면 절반 넘게 맞는 것
D.forEach(t=>t.hay=norm(t.k+t.e+t.d+CATS[t.c]+(AL[t.key]||AL[t.k]||"")));
function scope(){
  const base=D.filter(t=>(S.q||S.only||S.grp==="all"||t.g===S.grp)&&(!S.only||isFav(t.key)));
  if(!S.q)return base;
  const n=norm(S.q);
  if(/^[ㄱ-ㅎ]+$/.test(n))return base.filter(t=>t.ch.includes(n));
  const ws=S.q.toLowerCase().split(/[\s,]+/).filter(Boolean);
  const sc=t=>ws.filter(w=>t.hay.includes(w)).length;
  let r=base.filter(t=>t.hay.includes(n));
  if(!r.length)r=base.filter(t=>sc(t)===ws.length);
  if(!r.length&&ws.length>1){const need=Math.ceil(ws.length/2);r=base.filter(t=>sc(t)>=need).sort((x,y)=>sc(y)-sc(x))}
  return r;
}

const FAVI='<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.2l2.6 5.5 6 .7-4.5 4.1 1.2 5.9L12 16.5l-5.3 2.9 1.2-5.9-4.5-4.1 6-.7z"/></svg>';
const MOVE='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>';
const REPLAY='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/></svg>';
const favBtn=t=>`<button class="fav${isFav(t.key)?" on":""}" data-fav="${esc(t.key)}" aria-pressed="${isFav(t.key)}" aria-label="${esc(t.k)} 즐겨찾기" title="즐겨찾기">${FAVI.replace("<svg",`<svg fill="${isFav(t.key)?"currentColor":"none"}"`)}</button>`;
// 그림: 새 B2 그림(TH2)이 있으면 그것, 없으면 옛 움직이는 그림 · 옛 그림. 한 번 만들어 둔다
const HAS_B2=typeof thumb2==="function";
// 같은 id 가 여러 그림에 있으면 문서의 첫 정의를 쓴다 → 늘 보이는 정의 하나를 맨 앞에 둔다(숨겨진 카드 때문에 바탕이 사라지지 않게)
if(HAS_B2)document.body.insertAdjacentHTML("afterbegin",`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${B2DEFS}</defs></svg>`);
D.forEach(t=>{
  const b2=HAS_B2?thumb2(t,esc(t.k)):null;
  if(b2){t.pic=b2;t.anim=b2.includes("b2a-")}
  else if(t.anim){t.pic=`<svg class="th" viewBox="0 0 160 100" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="${esc(t.k)} 예시"><defs><filter id="blur"><feGaussianBlur stdDeviation="2.2"/></filter></defs>${t.anim}</svg>`;t.anim=true}
  else t.pic=thumbHTML(t);
});
const picHTML=t=>t.pic;
const card=t=>`<article class="card${isFav(t.key)?" on":""}" id="${t.id}" data-key="${esc(t.key)}" tabindex="0" aria-label="${esc(t.k)} 크게 보기">
  <div class="pic${t.anim?" anim":""}">${picHTML(t)}${t.anim?`<span class="pb mv" aria-hidden="true" title="올리면 움직여요">${MOVE}</span>`:""}</div>
  <div class="body"><div class="head"><div class="name">${esc(t.k)}<span class="en">${esc(t.e)}</span></div>${favBtn(t)}</div></div></article>`;

// 지금 목록에 있는 분류만 상위 묶음별로
function groups(list){
  return SUP.map(([id,name,cs])=>{const on=cs.filter(c=>list.some(t=>t.c===c));
    return {id,name,cs:on,n:list.filter(t=>on.includes(t.c)).length}}).filter(g=>g.cs.length);
}
function renderShelf(list,gs){
  return gs.map(g=>`<div class="supsec"><div class="suphead">${g.name}<span>${g.n}</span></div>`+(g.cs.map(c=>{const ts=list.filter(t=>t.c===c);
    return `<section class="catsec" id="C-${c}"><h2>${CATS[c]}<span>${ts.length}</span></h2><div class="grid">${ts.map(card).join("")}</div></section>`}).join(""))+`</div>`).join("");
}
const isDark=()=>{const t=S.theme||document.documentElement.dataset.theme;return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches};
function applyTheme(){
  if(S.theme)document.documentElement.dataset.theme=S.theme;
  const dark=isDark(),b=$("#theme");
  b.setAttribute("aria-label",dark?"밝은 화면으로":"어두운 화면으로");b.title=b.getAttribute("aria-label");
  b.innerHTML=dark?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>';
}
function renderFbar(){
  $("#fbar").innerHTML=`<button class="chip only" data-only="1" aria-pressed="${S.only}">${FAVI.replace("<svg",`<svg width="14" height="14" fill="${S.only?"currentColor":"none"}"`)}즐겨찾기만<span>${S.fav.length}</span></button><span class="sp"></span><div class="zoom" role="group" aria-label="카드 크기"><button data-z="-1" ${S.zoom?"":"disabled"} aria-label="작게" title="작게 ( - )"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 12h12"/></svg></button><span>${S.zoom+1}/${ZOOM.length}</span><button data-z="1" ${S.zoom<ZOOM.length-1?"":"disabled"} aria-label="크게" title="크게 ( + )"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 12h12M12 6v12"/></svg></button></div>`;
  document.documentElement.style.setProperty("--cw",ZOOM[S.zoom]+"px");
}
// 좁은 화면(모바일): 아래 탭 바 = 분류 / 찾기 / 즐겨찾기. 분류 탭은 분류 목록 → 그 분류 카드
const MQ=matchMedia("(max-width:760px)");
const isM=()=>MQ.matches;
const MT={cat:["분류",'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>'],find:["찾기",'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'],fav:["즐겨찾기",'<path d="M12 3.2l2.6 5.5 6 .7-4.5 4.1 1.2 5.9L12 16.5l-5.3 2.9 1.2-5.9-4.5-4.1 6-.7z"/>']};
document.body.insertAdjacentHTML("beforeend",`<nav class="mtab" id="mtab" aria-label="보기"></nav>`);
function renderMobile(){
  document.body.dataset.m=S.mtab;
  $("#mtab").innerHTML=Object.keys(MT).map(k=>`<button data-mtab="${k}" aria-pressed="${S.mtab===k}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round">${MT[k][1]}</svg>${MT[k][0]}${k==="fav"&&S.fav.length?`<i>${S.fav.length}</i>`:""}</button>`).join("");
  $("#count").textContent=S.mtab==="fav"?`즐겨찾기 ${S.fav.length}개`:`${D.length}개 · 모양으로 이름 찾기`;
  S.grp="all";S.only=S.mtab==="fav";if(S.mtab!=="find"&&S.q){S.q="";$("#q").value=""}
  let html="",m="";
  if(S.mtab==="cat"&&!S.mcat){
    html=SUP.map(([id,name,cs])=>`<div class="supsec"><div class="suphead">${name}</div><div class="ctiles">${cs.map(c=>{const ts=D.filter(t=>t.c===c);if(!ts.length)return"";
      return `<button class="ctile" data-mcat="${c}"><span class="cpic">${ts[0].pic}</span><b>${CATS[c]}</b><small>${ts.length}</small></button>`}).join("")}</div></div>`).join("");
  }else if(S.mtab==="cat"){
    const ts=D.filter(t=>t.c===S.mcat);
    html=`<button class="mback" data-mcat=""><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 5l-7 7 7 7"/></svg>분류</button><section class="catsec" id="C-${S.mcat}"><h2>${CATS[S.mcat]}<span>${ts.length}</span></h2><div class="grid">${ts.map(card).join("")}</div></section>`;
  }else{
    const list=scope();
    if(S.q)m=`“${S.q}” ${list.length}개`;
    html=list.length?renderShelf(list,groups(list)):`<p class="empty">${S.only?"아직 즐겨찾기한 게 없어요. 카드의 ☆를 눌러 보세요.":"찾는 이름이 없어요. 생김새나 영어, 초성으로도 찾아보세요."}</p>`;
  }
  $("#meta").textContent=m;$("#meta").hidden=!m;
  $("#out").innerHTML=html;
  fitThc($("#out"));
}
try{MQ.addEventListener("change",()=>{if(!isM()){delete document.body.dataset.m;S.only=false}render()})}catch(e){}
function render(){
  document.documentElement.dataset.pal=S.pal;applyTheme();
  $$(".pal button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.pal===S.pal));
  $$(".grp button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.g===S.grp&&!S.q&&!S.only));
  $$(".grp button span").forEach(s=>s.textContent=D.filter(t=>s.parentNode.dataset.g==="all"||t.g===s.parentNode.dataset.g).length);
  $("#count").textContent=`${D.length}개 · 모양으로 이름 찾기`;
  renderFbar();
  if(isM()){renderMobile();return}
  const list=scope();
  const gs=groups(list);
  $("#aisle").innerHTML=`<h3>${S.only?"즐겨찾기":S.q?"찾은 분류":GRP[S.grp]}</h3>`+gs.map(g=>`<div class="sup">${g.name}</div>`+(g.cs.map(c=>`<button data-jump="C-${c}">${CATS[c]}<span>${list.filter(t=>t.c===c).length}</span></button>`).join(""))).join("");
  const m=S.q?`“${S.q}” ${list.length}개`:"";
  $("#meta").textContent=m;$("#meta").hidden=!m;
  $("#out").innerHTML=list.length?renderShelf(list,gs):`<p class="empty">${S.only?"아직 즐겨찾기한 게 없어요. 카드의 ☆를 눌러 보세요.":"찾는 이름이 없어요. 영어나 초성으로도 찾아보세요."}</p>`;
  observe();fitThc($("#out"));
}
// 스타일 견본(HTML)은 230px 폭 기준으로 만들어져 있어 그림 폭에 맞춰 통째로 키운다
const roThc="ResizeObserver" in window?new ResizeObserver(es=>es.forEach(e=>e.target.style.setProperty("--z",(e.contentRect.width/230).toFixed(3)))):null;
function fitThc(root){if(roThc)root.querySelectorAll(".thc").forEach(el=>roThc.observe(el))}
function toggleFav(k){
  const i=S.fav.indexOf(k);if(i<0)S.fav.push(k);else S.fav.splice(i,1);
  save("fav",JSON.stringify(S.fav));
  if(S.only){render();return}
  if(isM()){const b=$('#mtab [data-mtab="fav"]');if(b){const i=b.querySelector("i");if(i)i.remove();if(S.fav.length)b.insertAdjacentHTML("beforeend",`<i>${S.fav.length}</i>`)}}
  $$(`[data-fav="${CSS.escape(k)}"]`).forEach(b=>b.outerHTML=favBtn(byKey[k]));
  $$(`.card[data-key="${CSS.escape(k)}"]`).forEach(el=>el.classList.toggle("on",isFav(k)));
  renderFbar();
}
// 카드 크기: 보던 카드가 화면에서 같은 자리에 남도록 바꾼 뒤 다시 맞춘다
function setZoom(z){
  if(!ZOOM[z]||z===S.zoom)return;
  const anchor=[...$$(".card")].find(c=>c.getBoundingClientRect().bottom>90);
  const y0=anchor?anchor.getBoundingClientRect().top:0;
  S.zoom=z;save("zoom",String(z));renderFbar();
  if(anchor)window.scrollBy(0,anchor.getBoundingClientRect().top-y0);
}
// 크게 보기 창: 카드를 누르면 그림을 크게. ← → 로 지금 보이는 목록 안에서 옆 카드로
document.body.insertAdjacentHTML("beforeend",`<div class="dlg view" id="dlg" role="dialog" aria-modal="true" aria-label="크게 보기" hidden><button class="nav prev" data-step="-1" aria-label="이전"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 5l-7 7 7 7"/></svg></button><div class="dlgbox"><button class="x" id="dlgX" aria-label="닫기"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg></button><div id="dlgBody"></div></div><button class="nav next" data-step="1" aria-label="다음"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 5l7 7-7 7"/></svg></button></div>`);
let viewKey=null,lastFocus=null;
// 크게 보기에서 손가락으로: 좌우로 밀면 옆 카드, 맨 위에서 아래로 밀면 닫기
{let x0=0,y0=0,top0=0;const dlg=$("#dlg");
 dlg.addEventListener("touchstart",e=>{const t=e.touches[0];x0=t.clientX;y0=t.clientY;top0=$(".dlgbox").scrollTop},{passive:true});
 dlg.addEventListener("touchend",e=>{const t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;
   if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)stepView(dx<0?1:-1);
   else if(dy>110&&dy>Math.abs(dx)*1.5&&top0<=0)closeView()},{passive:true});}
function openView(k){
  const t=byKey[k];if(!t)return;
  if($("#dlg").hidden)lastFocus=document.activeElement;
  viewKey=k;
  $("#dlgBody").innerHTML=`<div class="bigpic${t.anim?" anim":""}">${picHTML(t)}${t.anim?`<button class="pb rp" data-replay="1" title="다시 재생" aria-label="다시 재생">${REPLAY}</button>`:""}</div><div class="bighead"><div class="name">${esc(t.k)}<span class="en">${esc(t.e)}</span></div>${favBtn(t)}</div>${t.d?`<p class="bigdesc">${esc(t.d)}</p>`:""}`+simHTML(t);
  fitThc($("#dlgBody"));
  $("#dlg").hidden=false;document.body.style.overflow="hidden";
}
function simHTML(t){
  const l=(SIM[t.key]||[]).slice(0,3);if(!l.length)return"";
  return `<div class="sim"><h4>헷갈리기 쉬운 것</h4><div class="simrow">${l.map(o=>`<div class="simc" role="button" tabindex="0" data-view="${esc(o.key)}"><span class="simpic">${o.pic}</span><b>${esc(o.k)}</b><small>${esc(o.d)}</small></div>`).join("")}</div></div>`;
}
function closeView(){if($("#dlg").hidden)return;$("#dlg").hidden=true;$("#dlgBody").innerHTML="";document.body.style.overflow="";viewKey=null;lastFocus&&lastFocus.focus&&lastFocus.focus()}
function stepView(d){const ks=[...$$("#out .card")].map(c=>c.dataset.key);const i=ks.indexOf(viewKey);if(i<0||!ks.length)return;openView(ks[(i+d+ks.length)%ks.length])}
document.addEventListener("click",e=>{
  if(e.target.closest("button"))return;
  if(e.target.id==="dlg"){closeView();return}
  const c=e.target.closest("#out .card");if(c)openView(c.dataset.key);
});
// 마우스를 올리면 뜨는 설명 말풍선 (카드 아래쪽에 붙고, 화면 밖으로 안 나가게)
document.body.insertAdjacentHTML("beforeend",`<div class="tip" id="tip" role="tooltip" hidden></div>`);
let tipT=null,tipFor=null;
function showTip(c){
  const t=byKey[c.dataset.key];if(!t||!t.d)return;
  const el=$("#tip");el.innerHTML=`<b>${esc(t.k)}</b>${esc(t.d)}`;el.hidden=false;el.classList.remove("in");
  const r=c.getBoundingClientRect(),w=el.offsetWidth,h=el.offsetHeight;
  let x=r.left+r.width/2-w/2;x=Math.max(12,Math.min(x,innerWidth-w-12));
  let y=r.bottom+8;const up=y+h>innerHeight-12;if(up)y=r.top-h-8;
  el.style.left=x+"px";el.style.top=y+"px";el.dataset.up=up?"1":"";
  el.style.setProperty("--ax",(r.left+r.width/2-x)+"px");
  requestAnimationFrame(()=>el.classList.add("in"));
}
function hideTip(){clearTimeout(tipT);tipFor=null;const el=$("#tip");el.classList.remove("in");el.hidden=true}
let hoverKey=null;
document.addEventListener("mouseover",e=>{
  const c=e.target.closest("#out .card[data-key]");hoverKey=c?c.dataset.key:null;
  if(c===tipFor)return;hideTip();
  if(c){tipFor=c;tipT=setTimeout(()=>showTip(c),450)}
});
document.addEventListener("scroll",hideTip,{passive:true});
document.addEventListener("mousedown",hideTip);
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&document.activeElement.matches("#out .card")){openView(document.activeElement.dataset.key)}else if(e.key==="Enter"&&document.activeElement.matches("[data-view]")){openView(document.activeElement.dataset.view)}});
document.addEventListener("click",e=>{
  const v=e.target.closest("[data-view]");if(v){openView(v.dataset.view);$(".dlgbox").scrollTop=0;return}
  const b=e.target.closest("button");if(!b)return;const d=b.dataset;
  if(d.fav){toggleFav(d.fav);return}
  if(d.mtab){S.mtab=d.mtab;S.mcat=null;render();window.scrollTo(0,0);if(d.mtab==="find")$("#q").focus();return}
  if("mcat" in d){S.mcat=d.mcat||null;render();window.scrollTo(0,0);return}
  if(d.step){stepView(+d.step);return}
  if(b.id==="dlgX"){closeView();return}
  if(d.z){setZoom(S.zoom+(+d.z));return}
  if(d.only){S.only=!S.only;render();window.scrollTo({top:0});return}
  if(d.g){S.grp=d.g;S.q="";S.only=false;$("#q").value="";render();window.scrollTo({top:0});return}
  if(d.pal){S.pal=d.pal;save("pal",S.pal);render();return}
  if(d.jump){const el=document.getElementById(d.jump);el&&el.scrollIntoView({behavior:"smooth",block:"start"});return}
  if(d.replay){const s=b.parentNode.querySelector("svg");s.replaceWith(s.cloneNode(true));return}
  if(b.id==="theme"){S.theme=isDark()?"light":"dark";save("theme",S.theme);applyTheme();return}
});
$("#q").addEventListener("input",e=>{S.q=e.target.value.trim();render()});
document.addEventListener("keydown",e=>{
  if(!$("#dlg").hidden){
    if(e.key==="Escape")closeView();else if(e.key==="ArrowLeft")stepView(-1);else if(e.key==="ArrowRight")stepView(1);else if(e.key.toLowerCase()==="f"&&viewKey)toggleFav(viewKey);
    return;
  }
  if(/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;
  if(e.key==="/"){e.preventDefault();$("#q").focus();return}
  if(e.key.toLowerCase()==="f"&&hoverKey)toggleFav(hoverKey);
  if(e.key==="-")setZoom(S.zoom-1);
  if(e.key==="="||e.key==="+")setZoom(S.zoom+1);
});
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",applyTheme)}catch(e){}
// 움직이는 그림은 보일 때만 돌고, 스크롤 위치에 맞춰 왼쪽 분류 표시
const hasIO="IntersectionObserver" in window;
const ioSec=hasIO?new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting){const id=en.target.id;$$(".aisle button").forEach(x=>x.classList.toggle("on",x.dataset.jump===id))}})},{rootMargin:"-90px 0px -70% 0px"}):null;
function observe(){
  if(!hasIO)return;
  ioSec.disconnect();$$(".catsec").forEach(s=>ioSec.observe(s));
}
{const css=(typeof ANIM_CSS!=="undefined"?ANIM_CSS:"")+(typeof B2CSS!=="undefined"?B2CSS:"");if(css){const st=document.createElement("style");st.textContent=css;document.head.appendChild(st)}}
render();
