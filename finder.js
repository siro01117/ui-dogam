// 질문으로 좁혀 찾기 (시안 a 마법사 · b 쌓이는 질문 줄 · c 옆 패널). 주소에 ?f=a|b|c 가 있을 때만 켜진다
// app.js 다음에 읽는다. medium.js(MEDCAT · MED) · facet.js(FACET) 는 없으면 없는 대로 동작
(function(){
const FV=new URLSearchParams(location.search).get("f");
if(!["a","b","c"].includes(FV))return;

// ── 데이터 ──
const toSet=v=>new Set((Array.isArray(v)?v:typeof v==="string"?v.split(","):[]).map(s=>String(s).trim()).filter(Boolean));
const has=(set,t)=>set.has(t.c+":"+t.k)||(t.key===t.k&&set.has(t.k));
let MC={},MD={},FC={};
try{if(typeof MEDCAT!=="undefined"&&MEDCAT)MC=MEDCAT}catch(e){}
try{if(typeof MED!=="undefined"&&MED)MD=MED}catch(e){}
try{if(typeof FACET!=="undefined"&&FACET)FC=FACET}catch(e){}
const MP=toSet(MD.p),MV=toSet(MD.v),MX=toSet(MD.x),CP=new Set(Array.isArray(MC.p)?MC.p:[]),CV=new Set(Array.isArray(MC.v)?MC.v:[]);
const MEDOK={app:t=>t.pl!=="w"&&!has(MX,t),web:t=>t.pl!=="m"&&!has(MX,t),doc:t=>CP.has(t.c)||has(MP,t),vid:t=>CV.has(t.c)||has(MV,t)};
const SUPOF={};SUP.forEach(([id,,cs])=>cs.forEach(c=>SUPOF[c]=id));
const fcOk=c=>!!(c&&FC[c]&&Array.isArray(FC[c].o)&&FC[c].o.length&&FC[c].t);
const fsets={};
const fset=(c,v)=>{const k=c+"|"+v;if(!fsets[k])fsets[k]=toSet(FC[c].t[v]);return fsets[k]};

const L_MED=[["app","앱"],["web","웹"],["doc","발표 · 문서"],["vid","영상"]];
const L_SUP={parts:["화면에 놓는 부품"],screen:["화면 전체 구성"],svc:["서비스별 기능","검색 · 채팅 · 쇼핑 …"],act:["움직임"],style:["생김새 · 글꼴"],know:["설계 개념 · 용어"]};
const ORDER={parts:["ct","in","nv","ov","ds","ld","dt","ic"],screen:["ly","pg","sc"],svc:["sr","sh","ai","cm","md","mp","gm","dv"],act:["tr","mo","ge","fb"],style:["co","st","sy","ty","tf","fn","ta","tp"],know:["ps","dp","rs","dl","mt","ax","tl"]};
const L_CAT={ct:"누르는 것",in:"입력하는 것",nv:"이동하는 것",ov:"위에 뜨는 것",ds:"내용을 보여 주는 것",ld:"기다리는 동안 나오는 것",dt:"수치를 그림으로",ic:"아이콘",
  ly:"배치 · 격자",pg:"페이지 한 구역",sc:"화면 한 장 통째로",
  sr:"검색 · 필터",sh:"소셜 · 공유",ai:"채팅 · AI",cm:"쇼핑",md:"영상 · 음악 재생",mp:"지도",gm:"게임",dv:"기기 시스템 화면",
  tr:"화면 전체가 바뀜",mo:"일부만 움직임",ge:"손가락 동작",fb:"결과를 알려 줌",
  co:"색",st:"전체 분위기",sy:"디자인 시스템",ty:"글자 꾸밈",tf:"글꼴 종류",fn:"유명 글꼴",ta:"글자 부위 이름",tp:"글 배치",
  ps:"사람 심리 · 법칙",dp:"속이는 설계",rs:"사용자 조사",dl:"설계 문서",mt:"지표",ax:"접근성",tl:"디자인 도구"};

// ── 질문 상태: A[s] = undefined(아직) · null(건너뜀) · 값 ──
const STEPS=["med","sup","cat","fc"];
const A={med:undefined,sup:undefined,cat:undefined,fc:undefined};
const F={at:null,open:null,sheet:false,jump:false};
const avail=s=>s==="med"||s==="sup"||(s==="cat"&&!!A.sup)||(s==="fc"&&fcOk(A.cat));
function opts(s){
  if(s==="med")return L_MED.map(([v,n])=>[v,n]);
  if(s==="sup")return SUP.map(([id,name])=>[id,(L_SUP[id]||[name])[0],(L_SUP[id]||[])[1]]);
  if(s==="cat"){if(!A.sup)return[];const cs=(SUP.find(x=>x[0]===A.sup)||[,,[]])[2],o=(ORDER[A.sup]||[]).filter(c=>cs.includes(c));cs.forEach(c=>{if(!o.includes(c))o.push(c)});return o.map(c=>[c,L_CAT[c]||CATS[c]])}
  if(s==="fc")return fcOk(A.cat)?FC[A.cat].o.map(([v,n])=>[v,n]):[];
  return[];
}
const qtext=s=>s==="med"?"어디에 쓸 거예요?":s==="sup"?"무엇을 찾아요?":s==="cat"?(A.sup?"그중 어떤 거예요?":"조금 더 좁히기"):(fcOk(A.cat)&&FC[A.cat].q)||"모습으로 고르기";
const skipText=s=>s==="med"?"상관없음":"모르겠어요, 건너뛰기";
function test(s,v,t){
  if(s==="med")return MEDOK[v]?MEDOK[v](t):true;
  if(s==="sup")return SUPOF[t.c]===v;
  if(s==="cat")return t.c===v;
  if(s==="fc")return fcOk(A.cat)&&FC[A.cat].t[v]!==undefined&&has(fset(A.cat,v),t);
  return true;
}
const pass=(s,t)=>A[s]==null||!avail(s)||test(s,A[s],t);
const pre=s=>{const ss=STEPS.slice(0,STEPS.indexOf(s));return D.filter(t=>ss.every(x=>pass(x,t)))};
const results=()=>D.filter(t=>STEPS.every(s=>pass(s,t)));
const current=()=>STEPS.find(s=>avail(s)&&A[s]===undefined)||null;
const label=s=>{const v=A[s];if(v===null)return s==="med"?"상관없음":"건너뜀";const o=opts(s).find(x=>x[0]===v);return o?o[1]:""};
// 앞 답을 바꾸면 뒤 답은 아직 맞을 때만 남긴다
function answer(s,v){
  A[s]=v;
  for(const x of STEPS.slice(STEPS.indexOf(s)+1)){
    if(A[x]===undefined)continue;
    if(!avail(x)){A[x]=undefined;continue}
    if(A[x]===null)continue;
    if(!opts(x).some(o=>o[0]===A[x])||!pre(x).some(t=>test(x,A[x],t)))A[x]=undefined;
  }
}
function reset(){STEPS.forEach(s=>A[s]=undefined);F.at=null;F.open=null}
// 보기 하나 = [값, 이름, 덧말, 남은 개수, 대표 항목]
function choices(s){const base=pre(s);return opts(s).map(([v,n,sub])=>{const m=base.filter(t=>test(s,v,t));return[v,n,sub,m.length,m[0]]})}

// ── 공통 조각 ──
const pressed=(s,v)=>A[s]===v;
const btnAttr=(s,v)=>`data-fnq="${s}" data-fnv="${v===null?"":esc(v)}"`;
const empty=`<p class="empty">조건에 맞는 이름이 없어요. 앞 답을 바꿔 보세요.</p>`;
const shelf=list=>list.length?renderShelf(list,groups(list)):empty;
const resetBtn=`<button class="btn ghost" data-fnact="reset">처음부터 다시</button>`;
const answeredChips=(act)=>STEPS.filter(s=>avail(s)&&A[s]!==undefined).map(s=>`<button class="chip" ${act?`data-fnact="${act}" data-fnstep="${s}"`:""} aria-pressed="${A[s]!==null}" title="${esc(qtext(s))}">${esc(label(s))}</button>`).join("");

// ── a. 마법사: 한 화면에 질문 하나 ──
function viewA(R){
  let at=F.at;
  if(at!=="done"&&!(at&&avail(at)))at=current()||"done";
  const dotsSteps=STEPS.filter(s=>s==="med"||s==="sup"||(s==="cat"&&A.sup!==null)||(s==="fc"&&fcOk(A.cat)));
  const prevOf=s=>{const ss=STEPS.filter(x=>avail(x));const i=s==="done"?ss.length:ss.indexOf(s);return i>0?ss[i-1]:null};
  const back=prevOf(at);
  const idx=at==="done"?dotsSteps.length:dotsSteps.indexOf(at)+1;
  const top=`<div class="fa-top"><button class="mback" data-fnact="go" data-fnstep="${back||""}" ${back?"":"disabled"} style="margin:0${back?"":";visibility:hidden"}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 5l-7 7 7 7"/></svg>이전</button>
    <div class="fa-dots" aria-label="질문 ${Math.min(idx,dotsSteps.length)} / ${dotsSteps.length}">${dotsSteps.map(s=>{const done=avail(s)&&A[s]!==undefined;return `<button data-fnact="go" data-fnstep="${s}" class="${done?"done":""}" ${s===at?'aria-current="step"':""} ${done||s===at?"":"disabled"} aria-label="${esc(qtext(s))}"></button>`}).join("")}<small>${Math.min(idx,dotsSteps.length)} / ${dotsSteps.length}</small></div>
    <span class="sp"></span>${resetBtn}</div>`;
  if(at==="done"){
    const more=current();
    return{meta:"",out:`<div class="fa">${top}<h2 class="fz-q">찾은 이름 ${R.length}개</h2><div class="fa-sum">${answeredChips("go")}${more?`<button class="chip" data-fnact="go" data-fnstep="${more}">더 좁히기</button>`:""}</div></div>${shelf(R)}`};
  }
  const pic=at!=="med";
  const cs=choices(at);
  const tiles=cs.map(([v,n,sub,cnt,rep])=>`<button class="ctile${pic?" pic":""}" ${btnAttr(at,v)} aria-pressed="${pressed(at,v)}" ${cnt?"":"disabled"}>${pic&&rep?`<span class="cpic">${rep.pic}</span>`:""}<b>${esc(n)}</b>${sub?`<small class="fz-sub">${esc(sub)}</small><br>`:""}<small>${cnt}개</small></button>`).join("");
  const n=isM()?4:6;
  return{meta:"",out:`<div class="fa">${top}<h2 class="fz-q">${esc(qtext(at))}</h2><div class="fa-opts">${tiles}</div>
    <button class="chip" ${btnAttr(at,null)} aria-pressed="${A[at]===null}">${skipText(at)}<span>${pre(at).length}</span></button>
    <div class="fa-now"><b>지금 ${R.length}개</b><span class="sp"></span><button class="chip" data-fnact="go" data-fnstep="done">${R.length}개 다 보기</button></div>
    ${R.length?`<section class="catsec"><div class="grid">${R.slice(0,n).map(card).join("")}</div></section>`:empty}</div>`};
}

// ── b. 쌓이는 질문 줄: 답한 줄은 칩으로 접히고 다음 줄이 열린다 ──
function viewB(R){
  const cur=current();
  const rows=STEPS.filter(s=>avail(s)&&(A[s]!==undefined||s===cur)).map(s=>{
    const open=s===F.open||(s===cur&&!F.open);
    if(!open)return `<div class="fb-row done"><span class="fb-q">${esc(qtext(s))}</span><div class="fb-opts"><button class="chip" data-fnact="open" data-fnstep="${s}" aria-pressed="${A[s]!==null}">${esc(label(s))}</button><button class="lnk" data-fnact="open" data-fnstep="${s}" style="margin:0 0 0 4px">바꾸기</button></div></div>`;
    return `<div class="fb-row cur"><span class="fb-q">${esc(qtext(s))}</span><div class="fb-opts">${choices(s).map(([v,n,sub,cnt])=>`<button class="chip" ${btnAttr(s,v)} aria-pressed="${pressed(s,v)}" ${cnt?"":"disabled"}>${esc(n)}${sub?` <small class="fz-sub">${esc(sub)}</small>`:""}<span>${cnt}</span></button>`).join("")}<button class="chip skip" ${btnAttr(s,null)} aria-pressed="${A[s]===null}">${skipText(s)}</button></div></div>`;
  }).join("");
  return{meta:"",out:`<div class="fb">${rows}<div class="fb-foot"><b>지금 ${R.length}개</b>${cur?"":`<span class="fz-sub">질문을 다 골랐어요</span>`}<span class="sp"></span>${resetBtn}</div></div>${shelf(R)}`};
}

// ── c. 옆 패널(모바일은 아래 시트): 질문 넷이 다 보이고, 아직 못 고르는 단계는 흐리게 ──
function panel(){
  return `<div class="fpanel">${STEPS.map(s=>{
    if(!avail(s)){
      const why=s==="cat"?(A.sup===null?"건너뛰어서 이 질문은 없어요":"앞에서 무엇을 찾는지 고르면 나와요"):(A.cat?"이 분류는 더 나누지 않아요":"분류를 고르고 모습으로 나눌 수 있으면 나와요");
      return `<div class="fp-step off" data-s="${s}"><div class="fp-q">${esc(qtext(s))}</div><p class="fp-note">${why}</p></div>`}
    return `<div class="fp-step" data-s="${s}"><div class="fp-q">${esc(qtext(s))}</div>${choices(s).map(([v,n,sub,cnt])=>`<button class="fo" ${btnAttr(s,v)} aria-pressed="${pressed(s,v)}" ${cnt?"":"disabled"}><em>${esc(n)}${sub?`<small>${esc(sub)}</small>`:""}</em><span>${cnt}</span></button>`).join("")}<button class="fo skip" ${btnAttr(s,null)} aria-pressed="${A[s]===null}"><em>${skipText(s)}</em><span>${pre(s).length}</span></button></div>`;
  }).join("")}<div class="fp-foot">${resetBtn}</div></div>`;
}
function viewC(R){
  const cur=current();
  if(!isM()){$("#aisle").innerHTML=`<h3>질문으로 찾기</h3>`+panel();return{meta:`${R.length}개`,out:shelf(R)}}
  const ss=STEPS.filter(s=>avail(s)),i=cur?ss.indexOf(cur)+1:ss.length;
  sheet().innerHTML=`<button class="fs-head" data-fnact="sheet" aria-expanded="${F.sheet}"><span class="t"><b>${cur?`질문 ${i}: ${esc(qtext(cur))}`:"질문을 다 골랐어요"}</b><small>${STEPS.filter(s=>avail(s)&&A[s]!==undefined).map(s=>esc(label(s))).join(" · ")||"눌러서 질문에 답하기"}</small></span><span class="n">${R.length}개</span><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2"><path d="${F.sheet?"M5 9l7 7 7-7":"M5 15l7-7 7 7"}"/></svg></button>${F.sheet?`<div class="fs-body">${panel()}</div>`:""}`;
  sheet().hidden=false;placeSheet();
  return{meta:"",out:shelf(R)};
}
let sh=null;
const sheet=()=>{if(!sh){sh=document.createElement("div");sh.className="fsheet";sh.id="fsheet";sh.hidden=true;document.body.appendChild(sh)}return sh};
const placeSheet=()=>{const m=$("#mtab");if(sh&&m)sh.style.bottom=m.offsetHeight+"px"};
addEventListener("resize",placeSheet);

// ── app.js render() 고리: 찾기 화면이면 여기서 그리고 true ──
window.dogam.view=function(){
  const on=S.mtab==="ask";
  document.body.classList.toggle("fnd",on);
  const fb=$("#fnBtn");if(fb)fb.setAttribute("aria-pressed",String(on));
  if(sh&&(!on||FV!=="c"||!isM()))sh.hidden=true;
  if(!on)return false;
  S.only=false;S.mcat=null;
  try{ioSec&&ioSec.disconnect()}catch(e){}
  try{hideTip()}catch(e){}
  $$(".grp button").forEach(b=>b.setAttribute("aria-pressed","false"));
  if(isM()){
    document.body.dataset.m="ask";
    if(S.q){S.q="";$("#q").value=""}
    $("#mtab").innerHTML=Object.keys(MT).map(k=>`<button data-mtab="${k}" aria-pressed="${S.mtab===k}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round">${MT[k][1]}</svg>${MT[k][0]}${k==="fav"&&S.fav.length?`<i>${S.fav.length}</i>`:""}</button>`).join("");
  }else $("#aisle").innerHTML="";
  const R=results();
  const v=FV==="a"?viewA(R):FV==="b"?viewB(R):viewC(R);
  $("#meta").textContent=v.meta;$("#meta").hidden=!v.meta;
  $("#out").innerHTML=v.out;
  fitThc($("#out"));if(sh&&!sh.hidden)fitThc(sh);
  if(FV==="c"&&F.jump){F.jump=false;const box=isM()?$("#fsheet .fs-body"):$("#aisle"),s=current()||STEPS.filter(x=>avail(x)).pop(),el=box&&box.querySelector(`[data-s="${s}"]`);if(el)box.scrollTop+=el.getBoundingClientRect().top-box.getBoundingClientRect().top-8}
  return true;
};

// ── 들어가는 곳: 데스크톱은 머리의 버튼, 모바일은 아래 탭 ──
{const f=MT.find,v=MT.fav;delete MT.find;delete MT.fav;
 MT.ask=["질문으로 찾기",'<path d="M9.2 9a2.9 2.9 0 1 1 4 2.7c-.8.4-1.2 1-1.2 1.9v.6"/><circle cx="12" cy="17.6" r=".6" fill="currentColor"/><circle cx="12" cy="12" r="9"/>'];
 MT.find=f;MT.fav=v;}
$(".search").insertAdjacentHTML("afterend",`<button class="chip" id="fnBtn" data-fnact="enter" aria-pressed="false">질문으로 찾기</button>`);
// 다른 보기(묶음 버튼 · 검색)로 가면 찾기를 끈다. app.js 처리보다 먼저 돌도록 capture
document.addEventListener("click",e=>{if(S.mtab==="ask"&&!isM()&&e.target.closest(".grp [data-g]"))S.mtab="cat"},true);
$("#q").addEventListener("input",()=>{if(S.mtab==="ask"&&!isM())S.mtab="cat"},true);

document.addEventListener("click",e=>{
  const b=e.target.closest("[data-fnq],[data-fnact]");if(!b||b.disabled)return;
  const d=b.dataset;
  if(d.fnq){
    const s=d.fnq,v=d.fnv===""?null:d.fnv;
    answer(s,v);
    if(FV==="a"){const nx=STEPS.slice(STEPS.indexOf(s)+1).find(x=>avail(x)&&A[x]===undefined);F.at=nx||"done";window.scrollTo(0,0)}
    if(FV==="b")F.open=null;
    if(FV!=="a")window.scrollTo(0,0);
    F.jump=true;
    render();return;
  }
  const a=d.fnact;
  if(a==="enter"){S.mtab=S.mtab==="ask"?"cat":"ask";render();window.scrollTo(0,0);return}
  if(a==="reset"){reset();render();window.scrollTo(0,0);return}
  if(a==="go"){F.at=d.fnstep||null;render();window.scrollTo(0,0);return}
  if(a==="open"){F.open=F.open===d.fnstep?null:d.fnstep;render();return}
  if(a==="sheet"){F.sheet=!F.sheet;F.jump=F.sheet;render();return}
});

// ── 스타일: 기존 토큰 · 칩 · 타일 · 진열대 버튼 모양을 그대로 쓴다 ──
const css=`/* finder */
.mtab{grid-template-columns:repeat(4,1fr)}
#fnBtn{flex:0 0 auto;padding:8px 14px}
body.fnd #fbar .seg.plat,body.fnd #fbar .chip.only{display:none}
body.fnd #mplat{display:none!important}
@media (min-width:761px){
  body.fnd:not([data-fv="c"]) .shell{grid-template-columns:minmax(0,1fr)}
  body.fnd:not([data-fv="c"]) .aisle{display:none}
  body.fnd[data-fv="c"] .shell{grid-template-columns:260px minmax(0,1fr)}
}
@media (max-width:760px){#fnBtn{display:none}}
.chip[disabled],.ctile[disabled]{color:var(--faint);border-color:var(--line);cursor:default}
.chip[disabled] span{opacity:1}
.fz-q{font-size:24px;font-weight:700;letter-spacing:-.02em;margin:0 0 18px}
.fz-sub{color:var(--dim);font-size:12px;font-weight:400}
.chip[aria-pressed="true"] .fz-sub{color:inherit}
.fa{max-width:860px;margin:0 auto}
.fa-top{display:flex;align-items:center;gap:14px;margin:0 0 22px}
.fa-top .sp{flex:1}
.fa-dots{display:flex;gap:7px;align-items:center}
.fa-dots button{width:9px;height:9px;border-radius:50%;border:0;padding:0;background:var(--line);cursor:pointer}
.fa-dots button.done{background:var(--dim)}
.fa-dots button[aria-current="step"]{background:var(--fg)}
.fa-dots button[disabled]{cursor:default}
.fa-dots small{margin-left:6px;color:var(--dim);font-size:12px;font-variant-numeric:tabular-nums}
.fa-opts{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px 10px;margin-bottom:16px}
.fa-opts .ctile{padding:14px 14px 12px}
.fa-opts .ctile.pic{padding:6px 6px 10px}
.fa-opts .ctile b{margin:0 0 2px}
.fa-opts .ctile.pic b{margin:9px 6px 1px}
.fa-opts .ctile small{margin:0}
.fa-opts .ctile.pic small{margin:0 6px}
.ctile:not([disabled]):hover{border-color:color-mix(in srgb,var(--fg) 25%,var(--line))}
.ctile[aria-pressed="true"]{border-color:var(--acc);box-shadow:0 0 0 1px var(--acc)}
.ctile[disabled] .cpic{opacity:.35}
.fa-now{display:flex;align-items:center;gap:10px;margin:30px 0 16px;padding-top:18px;border-top:1px solid var(--line)}
.fa-now .sp{flex:1}
.fa-sum{display:flex;flex-wrap:wrap;gap:6px;margin:-6px 0 30px}
.fb{margin:0 0 32px;border-top:1px solid var(--line)}
.fb-row{display:flex;gap:8px 18px;align-items:flex-start;padding:12px 0;border-bottom:1px solid var(--line)}
.fb-q{flex:0 0 160px;font-size:13.5px;color:var(--dim);font-weight:600;padding-top:5px}
.fb-row.cur .fb-q{color:var(--fg)}
.fb-opts{display:flex;flex-wrap:wrap;gap:6px;align-items:center;flex:1;min-width:0}
.fb-opts .chip.skip{border-style:dashed}
.fb-foot{display:flex;align-items:center;gap:12px;padding:12px 0 0}
.fb-foot .sp{flex:1}
.fpanel{display:flex;flex-direction:column;gap:2px}
.fp-q{font-size:12px;color:var(--dim);font-weight:600;padding:14px 12px 6px;margin-top:10px;border-top:1px solid var(--line)}
.fp-step:first-child .fp-q{margin-top:0;border-top:0;padding-top:0}
.fp-step{display:flex;flex-direction:column;gap:2px}
.fpanel button.fo{display:flex;justify-content:space-between;align-items:center;gap:8px;width:100%;border:0;background:transparent;text-align:left;padding:8px 12px;border-radius:11px;cursor:pointer;font-size:14px;color:var(--fg)}
.fpanel button.fo em{font-style:normal;min-width:0}
.fpanel button.fo em small{display:block;font-size:11.5px;color:var(--dim);font-weight:400}
.fpanel button.fo span{color:var(--dim);font-size:12px;font-variant-numeric:tabular-nums}
.fpanel button.fo:hover{background:var(--card)}
.fpanel button.fo[aria-pressed="true"]{background:var(--acc-soft);font-weight:700}
.fpanel button.fo[aria-pressed="true"] span{color:var(--acc)}
.fpanel button.fo[disabled]{color:var(--faint);cursor:default;background:transparent}
.fpanel button.fo[disabled] span{color:var(--faint)}
.fpanel button.fo.skip{color:var(--dim);font-size:13px}
.fp-step.off .fp-q{color:var(--faint)}
.fp-note{margin:0;padding:2px 12px 6px;font-size:12.5px;color:var(--faint)}
.fp-foot{margin-top:12px;padding-top:8px;border-top:1px solid var(--line);display:flex}
.fsheet{position:fixed;left:0;right:0;z-index:29;background:var(--bg);border-top:1px solid var(--line);border-radius:20px 20px 0 0;display:flex;flex-direction:column;max-height:62dvh}
.fsheet[hidden]{display:none}
.fs-head{display:flex;align-items:center;gap:10px;width:100%;border:0;background:none;font:inherit;color:var(--fg);text-align:left;padding:12px 16px;cursor:pointer}
.fs-head .t{flex:1;min-width:0}
.fs-head .t b{display:block;font-size:14.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fs-head .t small{display:block;font-size:12px;color:var(--dim);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fs-head .n{font-weight:700;font-variant-numeric:tabular-nums}
.fs-body{overflow:auto;padding:0 8px 14px;border-top:1px solid var(--line)}
.fs-body .fpanel{padding-top:12px}
@media (max-width:760px){
  .fz-q{font-size:20px}
  .fa-opts{grid-template-columns:1fr 1fr}
  .fb-row{flex-direction:column;gap:8px}
  .fb-row.done{flex-direction:row;align-items:center}
  .fb-row.done .fb-q{flex:1;padding:0}
  .fb-row.done .fb-opts{flex:0 0 auto}
  .fb-q{flex:none;padding:0}
  .fb-row.done .fb-opts{width:auto}
  body.fnd[data-fv="c"] .shell{padding-bottom:180px}
}`;
const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
document.body.dataset.fv=FV;
render();
})();
