import{$ as e,E as t,En as n,G as r,Gt as i,M as a,T as o,Ut as s,Vn as c,Y as l,Z as u,Zt as d,d as f,gn as p,gt as m,i as h,p as g,s as _}from"../app.CHZCehUw.js";import{r as v}from"./mermaid-parser.core-IUqLcEgg.BStY4NMf.js";import{t as y}from"./chunk-4BX2VUAB-C26Bjnn3.B8-JFQuk.js";import{t as b}from"./ordinal-CPia_Vrk.BcI3QpQL.js";import{t as x}from"./arc-B3mVcKdf.DgYwVJ19.js";function S(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function C(e){return e}function w(){var e=C,t=S,n=null,r=f(0),a=f(c),o=f(0);function s(s){var l,u=(s=i(s)).length,d,f,p=0,m=Array(u),h=Array(u),g=+r.apply(this,arguments),_=Math.min(c,Math.max(-c,a.apply(this,arguments)-g)),v,y=Math.min(Math.abs(_)/u,o.apply(this,arguments)),b=y*(_<0?-1:1),x;for(l=0;l<u;++l)(x=h[m[l]=l]=+e(s[l],l,s))>0&&(p+=x);for(t==null?n!=null&&m.sort(function(e,t){return n(s[e],s[t])}):m.sort(function(e,n){return t(h[e],h[n])}),l=0,f=p?(_-u*b)/p:0;l<u;++l,g=v)d=m[l],x=h[d],v=g+(x>0?x*f:0)+b,h[d]={data:s[d],index:l,value:x,startAngle:g,endAngle:v,padAngle:y};return h}return s.value=function(t){return arguments.length?(e=typeof t==`function`?t:f(+t),s):e},s.sortValues=function(e){return arguments.length?(t=e,n=null,s):t},s.sort=function(e){return arguments.length?(n=e,t=null,s):n},s.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:f(+e),s):r},s.endAngle=function(e){return arguments.length?(a=typeof e==`function`?e:f(+e),s):a},s.padAngle=function(e){return arguments.length?(o=typeof e==`function`?e:f(+e),s):o},s}var T=u.pie,E={sections:new Map,showData:!1},D=E.sections,O=E.showData,k=structuredClone(T),A={getConfig:p(()=>structuredClone(k),`getConfig`),clear:p(()=>{D=new Map,O=E.showData,m()},`clear`),setDiagramTitle:h,getDiagramTitle:o,setAccTitle:g,getAccTitle:_,setAccDescription:r,getAccDescription:l,addSection:p(({label:e,value:n})=>{if(n<0)throw Error(`"${e}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);D.has(e)||(D.set(e,n),t.debug(`added new section: ${e}, with value: ${n}`))},`addSection`),getSections:p(()=>D,`getSections`),setShowData:p(e=>{O=e},`setShowData`),getShowData:p(()=>O,`getShowData`)},j=p((e,t)=>{y(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),M={parse:p(async e=>{let n=await v(`pie`,e);t.debug(n),j(n,A)},`parse`)},N=p(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),P=p(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return w().value(e=>e.value)(n)},`createPieArcs`),F={parser:M,db:A,renderer:{draw:p((r,i,o,c)=>{t.debug(`rendering pie chart
`+r);let l=c.db,u=d(),f=n(l.getConfig(),u.pie),p=s(i),m=p.append(`g`);m.attr(`transform`,`translate(225,225)`);let{themeVariables:h}=u,[g]=e(h.pieOuterStrokeWidth);g??=2;let _=f.textPosition,v=x().innerRadius(0).outerRadius(185),y=x().innerRadius(185*_).outerRadius(185*_);m.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+g/2).attr(`class`,`pieOuterCircle`);let S=l.getSections(),C=P(S),w=[h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=b(w);m.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,v).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),m.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+y.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),m.append(`text`).text(l.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`);let O=[...S.entries()].map(([e,t])=>({label:e,value:t})),k=m.selectAll(`.legend`).data(O).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*O.length/2;return`translate(216,`+(t*22-n)+`)`});k.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),k.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>l.getShowData()?`${e.label} [${e.value}]`:e.label);let A=512+Math.max(...k.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));p.attr(`viewBox`,`0 0 ${A} 450`),a(p,450,A,f.useMaxWidth)},`draw`)},styles:N};export{F as diagram};