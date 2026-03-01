import{a as So,b as ko,c as It,d as pn,e as fn,f as mn,g as hn,h as To,i as gn,k as Io,l as Eo}from"./chunk-CDE2EN54.js";import{a as Do,b as Mo}from"./chunk-CCNKVAIE.js";import{$ as St,$a as H,$b as lo,A as ni,Ab as Ye,Ac as Tt,Bb as sn,Bc as Vt,Cb as He,Cc as ln,Db as rt,Dc as fo,E as Ri,Ea as qi,Eb as kt,Ec as mo,F as Vi,Fa as Qi,Fb as M,Fc as ho,G as ii,Ga as oi,Gb as B,Gc as go,H as Hi,Ha as Zi,Hb as Se,Hc as bo,I as Kt,Ia as zt,Ib as fe,Ic as et,Jb as ri,Ka as on,Kb as no,Lb as io,Lc as ai,M as en,Mb as oo,Mc as Ht,N as F,Na as k,Nb as G,Nc as vo,O as ee,Oa as te,Oc as dn,Pa as Te,Pb as an,Q as X,Qa as pe,Qb as Rt,Ra as L,Rb as ro,Rc as ht,S as c,Sa as ne,Sb as so,Tc as yo,Uc as cn,Vb as w,Wc as xo,X as q,Xa as Gi,Xb as Ce,Xc as li,Y as Q,Ya as D,Yb as b,Yc as di,Z as oe,Za as Yi,Zb as qe,Zc as un,_ as $i,_a as Xi,_b as ao,_c as Co,a as Oi,aa as ji,ab as $,ad as wo,bb as Ji,bc as z,bd as _o,c as ei,ca as Me,cb as Ki,cc as Ae,cd as ci,d as Ai,da as tt,db as eo,dc as si,dd as $e,e as Ue,eb as u,ed as $t,fb as f,fd as gt,g as Pi,ga as Z,gb as m,gd as ae,h as zi,hb as _,ia as J,ib as Be,ja as dt,jb as Le,k as Pt,ka as Wi,kb as he,kd as re,la as I,lb as nt,m as Xt,mb as it,na as yt,nb as ot,nd as le,ob as ve,oc as pt,od as de,pb as ct,pc as co,pd as E,qb as O,qc as ft,qd as Ne,ra as tn,rb as to,rc as uo,sb as g,sc as mt,tb as Ie,tc as R,ub as Ee,v as ti,va as nn,vb as ut,w as Jt,wb as rn,xb as ye,xc as xt,ya as Ui,yb as xe,za as d,zb as Ke,zc as po}from"./chunk-Q4IN7XGQ.js";import{a as be,b as Kn}from"./chunk-IMPBB4AK.js";var ui={ignoreWhitespace:!1,ignoreCase:!1,ignoreBlankLines:!1,ignoreComments:!1,trimLines:!1,wordDiff:!0,charDiff:!1,contextLines:3};var st=class{diff(o,e,n={}){let i;typeof n=="function"?(i=n,n={}):"callback"in n&&(i=n.callback);let r=this.castInput(o,n),s=this.castInput(e,n),l=this.removeEmpty(this.tokenize(r,n)),a=this.removeEmpty(this.tokenize(s,n));return this.diffWithOptionsObj(l,a,n,i)}diffWithOptionsObj(o,e,n,i){var r;let s=V=>{if(V=this.postProcess(V,n),i){setTimeout(function(){i(V)},0);return}else return V},l=e.length,a=o.length,p=1,h=l+a;n.maxEditLength!=null&&(h=Math.min(h,n.maxEditLength));let v=(r=n.timeout)!==null&&r!==void 0?r:1/0,T=Date.now()+v,C=[{oldPos:-1,lastComponent:void 0}],A=this.extractCommon(C[0],e,o,0,n);if(C[0].oldPos+1>=a&&A+1>=l)return s(this.buildValues(C[0].lastComponent,e,o));let Y=-1/0,ue=1/0,se=()=>{for(let V=Math.max(Y,-p);V<=Math.min(ue,p);V+=2){let W,ie=C[V-1],K=C[V+1];ie&&(C[V-1]=void 0);let Pe=!1;if(K){let ze=K.oldPos-V;Pe=K&&0<=ze&&ze<l}let Qe=ie&&ie.oldPos+1<a;if(!Pe&&!Qe){C[V]=void 0;continue}if(!Qe||Pe&&ie.oldPos<K.oldPos?W=this.addToPath(K,!0,!1,0,n):W=this.addToPath(ie,!1,!0,1,n),A=this.extractCommon(W,e,o,V,n),W.oldPos+1>=a&&A+1>=l)return s(this.buildValues(W.lastComponent,e,o))||!0;C[V]=W,W.oldPos+1>=a&&(ue=Math.min(ue,V-1)),A+1>=l&&(Y=Math.max(Y,V+1))}p++};if(i)(function V(){setTimeout(function(){if(p>h||Date.now()>T)return i(void 0);se()||V()},0)})();else for(;p<=h&&Date.now()<=T;){let V=se();if(V)return V}}addToPath(o,e,n,i,r){let s=o.lastComponent;return s&&!r.oneChangePerToken&&s.added===e&&s.removed===n?{oldPos:o.oldPos+i,lastComponent:{count:s.count+1,added:e,removed:n,previousComponent:s.previousComponent}}:{oldPos:o.oldPos+i,lastComponent:{count:1,added:e,removed:n,previousComponent:s}}}extractCommon(o,e,n,i,r){let s=e.length,l=n.length,a=o.oldPos,p=a-i,h=0;for(;p+1<s&&a+1<l&&this.equals(n[a+1],e[p+1],r);)p++,a++,h++,r.oneChangePerToken&&(o.lastComponent={count:1,previousComponent:o.lastComponent,added:!1,removed:!1});return h&&!r.oneChangePerToken&&(o.lastComponent={count:h,previousComponent:o.lastComponent,added:!1,removed:!1}),o.oldPos=a,p}equals(o,e,n){return n.comparator?n.comparator(o,e):o===e||!!n.ignoreCase&&o.toLowerCase()===e.toLowerCase()}removeEmpty(o){let e=[];for(let n=0;n<o.length;n++)o[n]&&e.push(o[n]);return e}castInput(o,e){return o}tokenize(o,e){return Array.from(o)}join(o){return o.join("")}postProcess(o,e){return o}get useLongestToken(){return!1}buildValues(o,e,n){let i=[],r;for(;o;)i.push(o),r=o.previousComponent,delete o.previousComponent,o=r;i.reverse();let s=i.length,l=0,a=0,p=0;for(;l<s;l++){let h=i[l];if(h.removed)h.value=this.join(n.slice(p,p+h.count)),p+=h.count;else{if(!h.added&&this.useLongestToken){let v=e.slice(a,a+h.count);v=v.map(function(T,C){let A=n[p+C];return A.length>T.length?A:T}),h.value=this.join(v)}else h.value=this.join(e.slice(a,a+h.count));a+=h.count,h.added||(p+=h.count)}}return i}};var pi=class extends st{},Bo=new pi;function fi(t,o,e){return Bo.diff(t,o,e)}function mi(t,o){let e;for(e=0;e<t.length&&e<o.length;e++)if(t[e]!=o[e])return t.slice(0,e);return t.slice(0,e)}function hi(t,o){let e;if(!t||!o||t[t.length-1]!=o[o.length-1])return"";for(e=0;e<t.length&&e<o.length;e++)if(t[t.length-(e+1)]!=o[o.length-(e+1)])return t.slice(-e);return t.slice(-e)}function bn(t,o,e){if(t.slice(0,o.length)!=o)throw Error(`string ${JSON.stringify(t)} doesn't start with prefix ${JSON.stringify(o)}; this is a bug`);return e+t.slice(o.length)}function vn(t,o,e){if(!o)return t+e;if(t.slice(-o.length)!=o)throw Error(`string ${JSON.stringify(t)} doesn't end with suffix ${JSON.stringify(o)}; this is a bug`);return t.slice(0,-o.length)+e}function Et(t,o){return bn(t,o,"")}function jt(t,o){return vn(t,o,"")}function gi(t,o){return o.slice(0,Kr(t,o))}function Kr(t,o){let e=0;t.length>o.length&&(e=t.length-o.length);let n=o.length;t.length<o.length&&(n=t.length);let i=Array(n),r=0;i[0]=0;for(let s=1;s<n;s++){for(o[s]==o[r]?i[s]=i[r]:i[s]=r;r>0&&o[s]!=o[r];)r=i[r];o[s]==o[r]&&r++}r=0;for(let s=e;s<t.length;s++){for(;r>0&&t[s]!=o[r];)r=i[r];t[s]==o[r]&&r++}return r}function Dt(t){let o;for(o=t.length-1;o>=0&&t[o].match(/\s/);o--);return t.substring(o+1)}function at(t){let o=t.match(/^\s*/);return o?o[0]:""}var yn="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",es=new RegExp(`[${yn}]+|\\s+|[^${yn}]`,"ug"),bi=class extends st{equals(o,e,n){return n.ignoreCase&&(o=o.toLowerCase(),e=e.toLowerCase()),o.trim()===e.trim()}tokenize(o,e={}){let n;if(e.intlSegmenter){let s=e.intlSegmenter;if(s.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=[];for(let l of Array.from(s.segment(o))){let a=l.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(a)?n[n.length-1]+=a:n.push(a)}}else n=o.match(es)||[];let i=[],r=null;return n.forEach(s=>{/\s/.test(s)?r==null?i.push(s):i.push(i.pop()+s):r!=null&&/\s/.test(r)?i[i.length-1]==r?i.push(i.pop()+s):i.push(r+s):i.push(s),r=s}),i}join(o){return o.map((e,n)=>n==0?e:e.replace(/^\s+/,"")).join("")}postProcess(o,e){if(!o||e.oneChangePerToken)return o;let n=null,i=null,r=null;return o.forEach(s=>{s.added?i=s:s.removed?r=s:((i||r)&&Lo(n,r,i,s),n=s,i=null,r=null)}),(i||r)&&Lo(n,r,i,null),o}},No=new bi;function yi(t,o,e){return e?.ignoreWhitespace!=null&&!e.ignoreWhitespace?Oo(t,o,e):No.diff(t,o,e)}function Lo(t,o,e,n){if(o&&e){let i=at(o.value),r=Dt(o.value),s=at(e.value),l=Dt(e.value);if(t){let a=mi(i,s);t.value=vn(t.value,s,a),o.value=Et(o.value,a),e.value=Et(e.value,a)}if(n){let a=hi(r,l);n.value=bn(n.value,l,a),o.value=jt(o.value,a),e.value=jt(e.value,a)}}else if(e){if(t){let i=at(e.value);e.value=e.value.substring(i.length)}if(n){let i=at(n.value);n.value=n.value.substring(i.length)}}else if(t&&n){let i=at(n.value),r=at(o.value),s=Dt(o.value),l=mi(i,r);o.value=Et(o.value,l);let a=hi(Et(i,l),s);o.value=jt(o.value,a),n.value=bn(n.value,i,a),t.value=vn(t.value,i,i.slice(0,i.length-a.length))}else if(n){let i=at(n.value),r=Dt(o.value),s=gi(r,i);o.value=jt(o.value,s)}else if(t){let i=Dt(t.value),r=at(o.value),s=gi(i,r);o.value=Et(o.value,s)}}var vi=class extends st{tokenize(o){let e=new RegExp(`(\\r?\\n)|[${yn}]+|[^\\S\\n\\r]+|[^${yn}]`,"ug");return o.match(e)||[]}},Fo=new vi;function Oo(t,o,e){return Fo.diff(t,o,e)}var xi=class extends st{constructor(){super(...arguments),this.tokenize=ts}equals(o,e,n){return n.ignoreWhitespace?((!n.newlineIsToken||!o.includes(`
`))&&(o=o.trim()),(!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(o.endsWith(`
`)&&(o=o.slice(0,-1)),e.endsWith(`
`)&&(e=e.slice(0,-1))),super.equals(o,e,n)}},Ao=new xi;function Ci(t,o,e){return Ao.diff(t,o,e)}function ts(t,o){o.stripTrailingCr&&(t=t.replace(/\r\n/g,`
`));let e=[],n=t.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(let i=0;i<n.length;i++){let r=n[i];i%2&&!o.newlineIsToken?e[e.length-1]+=r:e.push(r)}return e}var xn=class t{compute(o,e,n,i=!1){let r=this.applyIgnoreOptions(o,n),s=this.applyIgnoreOptions(e,n),l=Ci(r,s,{ignoreWhitespace:n.ignoreWhitespace}),a=this.pairLines(l),p=0,h=0,v=0,T=0;for(let ie of a)ie.type==="added"?p++:ie.type==="removed"?h++:ie.type==="modified"?v++:T++;let C=this.buildHunks(a,n.contextLines,i),A=[],Y=[],ue=[],se=[];for(let ie of C)for(let K of ie){if(K.type==="fold"){let Fe={lineNumber:null,type:"fold",raw:"",tokens:null,highlightedHtml:"",foldedCount:K.foldedCount,hunkIndex:K.hunkIndex},x=be({},Fe);A.push(Fe),Y.push(x),ue.push({left:Fe,right:x,index:ue.length}),se.push(Fe);continue}let Pe=K.leftText??"",Qe=K.rightText??"",ze=null,je=null;if(K.type==="modified"&&(n.wordDiff||n.charDiff)){let{left:Fe,right:x}=this.computeWordDiff(Pe,Qe,n.charDiff);ze=Fe,je=x}let ke={lineNumber:K.leftLineNum,type:K.type==="added"?"unchanged":K.type,raw:this.escapeHtml(Pe),tokens:ze,highlightedHtml:this.escapeHtml(Pe)},we={lineNumber:K.rightLineNum,type:K.type==="removed"?"unchanged":K.type,raw:this.escapeHtml(Qe),tokens:je,highlightedHtml:this.escapeHtml(Qe)};K.type==="added"?(ke.type="unchanged",ke.lineNumber=null,ke.raw="",ke.highlightedHtml="",we.type="added"):K.type==="removed"?(ke.type="removed",we.type="unchanged",we.lineNumber=null,we.raw="",we.highlightedHtml=""):K.type==="modified"?(ke.type="modified",we.type="modified"):(ke.type="unchanged",we.type="unchanged"),A.push(ke),Y.push(we),ue.push({left:ke,right:we,index:ue.length}),K.type==="added"?se.push(we):K.type==="removed"?se.push(ke):K.type==="modified"?(se.push(ke),se.push(we)):se.push(ke)}let V=p+h+v+T,W=V>0?Math.round(T/V*100):100;return{flatLeft:A,flatRight:Y,sideBySideRows:ue,inlineRows:se,totalAdded:p,totalRemoved:h,totalModified:v,totalUnchanged:T,similarityPercent:W}}applyIgnoreOptions(o,e){let n=o.split(/\r?\n|\r/);return e.ignoreBlankLines&&(n=n.filter(i=>i.trim().length>0)),e.trimLines?n=n.map(i=>i.trim()):e.ignoreWhitespace&&(n=n.map(i=>i.trimEnd())),e.ignoreComments&&(n=n.filter(i=>!this.isCommentLine(i))),n.join(`
`)}isCommentLine(o){let e=o.trim();return e.startsWith("//")||e.startsWith("#")||e.startsWith("*")||e.startsWith("/*")||e.startsWith("--")||e.startsWith("<!--")}pairLines(o){let e=[],n=1,i=1,r=[];for(let l of o){let a=l.value.split(`
`);a[a.length-1]===""&&a.pop(),r.push({added:l.added??!1,removed:l.removed??!1,lines:a})}let s=0;for(;s<r.length;){let l=r[s];if(l.removed&&s+1<r.length&&r[s+1].added){let a=l.lines,p=r[s+1].lines,h=Math.max(a.length,p.length);for(let v=0;v<h;v++){let T=v<a.length?a[v]:null,C=v<p.length?p[v]:null;T!==null&&C!==null?e.push({type:T===C?"unchanged":"modified",leftText:T,rightText:C,leftLineNum:n++,rightLineNum:i++}):T!==null?e.push({type:"removed",leftText:T,rightText:null,leftLineNum:n++,rightLineNum:null}):e.push({type:"added",leftText:null,rightText:C,leftLineNum:null,rightLineNum:i++})}s+=2}else if(l.removed){for(let a of l.lines)e.push({type:"removed",leftText:a,rightText:null,leftLineNum:n++,rightLineNum:null});s++}else if(l.added){for(let a of l.lines)e.push({type:"added",leftText:null,rightText:a,leftLineNum:null,rightLineNum:i++});s++}else{for(let a of l.lines)e.push({type:"unchanged",leftText:a,rightText:a,leftLineNum:n++,rightLineNum:i++});s++}}return e}buildHunks(o,e,n=!1){if(n)return o.length>0?[o]:[];let i=new Set;o.forEach((l,a)=>{if(l.type!=="unchanged")for(let p=Math.max(0,a-e);p<=Math.min(o.length-1,a+e);p++)i.add(p)});let r=[],s=[];for(let l=0;l<o.length;l++)if(i.has(l))s.push(o[l]);else{let a=l;for(;a<o.length&&!i.has(a);)a++;let p=a-l;if(p>0){s.length>0&&(r.push(s),s=[]);let h={type:"fold",leftText:null,rightText:null,leftLineNum:null,rightLineNum:null,foldedCount:p};r.push([h]),l=a-1}}return s.length>0&&r.push(s),r}computeWordDiff(o,e,n){let i=n?fi(o,e):yi(o,e),r=[],s=[];for(let l of i)l.added?s.push({text:l.value,type:"added"}):l.removed?r.push({text:l.value,type:"removed"}):(r.push({text:l.value,type:"equal"}),s.push({text:l.value,type:"equal"}));return{left:r,right:s}}escapeHtml(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})};var ns={".ts":"typescript",".tsx":"tsx",".js":"javascript",".jsx":"jsx",".mjs":"javascript",".py":"python",".java":"java",".cs":"csharp",".cpp":"cpp",".c":"c",".h":"c",".go":"go",".rs":"rust",".rb":"ruby",".php":"php",".swift":"swift",".kt":"kotlin",".scala":"scala",".html":"markup",".htm":"markup",".xml":"xml",".svg":"markup",".css":"css",".scss":"scss",".sass":"sass",".less":"less",".json":"json",".yaml":"yaml",".yml":"yaml",".toml":"toml",".md":"markdown",".sql":"sql",".sh":"bash",".bash":"bash",".zsh":"bash",".bat":"batch",".ps1":"powershell",".dockerfile":"docker",".graphql":"graphql",".gql":"graphql",".r":"r",".dart":"dart",".lua":"lua",".perl":"perl",".pl":"perl"},Mt=class t{loadedLanguages=new Set;prismLoaded=!1;detectLanguage(o){if(!o||o==="untitled")return"plaintext";let e=o.toLowerCase(),n=e.lastIndexOf(".");if(n===-1)return e==="dockerfile"?"docker":e==="makefile"?"makefile":"plaintext";let i=e.substring(n);return ns[i]??"plaintext"}async loadPrism(){if(!this.prismLoaded)try{await import("./chunk-QDIVFPPY.js"),this.prismLoaded=!0}catch{}}async loadLanguage(o){if(!(o==="plaintext"||this.loadedLanguages.has(o))){await this.loadPrism();try{let e={typescript:"typescript",javascript:"javascript",python:"python",java:"java",csharp:"csharp",cpp:"cpp",go:"go",rust:"rust",ruby:"ruby",php:"php",markup:"markup",css:"css",scss:"scss",json:"json",yaml:"yaml",markdown:"markdown",sql:"sql",bash:"bash",kotlin:"kotlin",swift:"swift",dart:"dart",graphql:"graphql",docker:"docker"};e[o]&&await import(`prismjs/components/prism-${e[o]}`),this.loadedLanguages.add(o)}catch{this.loadedLanguages.add(o)}}}highlightLine(o,e){if(e==="plaintext"||!o)return o;try{let n=this.unescapeHtml(o),i=window.Prism??globalThis.Prism;return i?.languages?.[e]?i.highlight(n,i.languages[e],e):o}catch{return o}}unescapeHtml(o){return o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})};var Cn="code-compare-session",De=class t{diffEngine=c(xn);syntaxHighlight=c(Mt);leftFile=Z(null);rightFile=Z(null);options=Z(be({},ui));viewMode=Z("side-by-side");searchState=Z({query:"",matchIndices:[],currentMatchIndex:0});scrollRatio=Z(0);showAllUnchanged=Z(!1);fontSize=Z(14);lineHeight=w(()=>this.fontSize()+10);diffResult=w(()=>{let o=this.leftFile(),e=this.rightFile();return!o||!e?null:this.diffEngine.compute(o.content,e.content,this.options(),this.showAllUnchanged())});constructor(){this.loadFromSession(),J(()=>{this.persistToSession()}),J(()=>{let o=this.leftFile(),e=this.rightFile();o&&this.syntaxHighlight.loadLanguage(o.language),e&&this.syntaxHighlight.loadLanguage(e.language)})}setFile(o,e){o==="left"?this.leftFile.set(e):this.rightFile.set(e)}clearFile(o){o==="left"?this.leftFile.set(null):this.rightFile.set(null)}clearAll(){this.reset()}reset(){this.leftFile.set(null),this.rightFile.set(null),this.options.set(be({},ui)),this.viewMode.set("side-by-side"),this.searchState.set({query:"",matchIndices:[],currentMatchIndex:0}),this.scrollRatio.set(0),this.showAllUnchanged.set(!1),this.fontSize.set(14),sessionStorage.removeItem(Cn)}increaseFontSize(){this.fontSize.update(o=>Math.min(o+2,22))}decreaseFontSize(){this.fontSize.update(o=>Math.max(o-2,10))}toggleShowAllUnchanged(){this.showAllUnchanged.update(o=>!o)}swapFiles(){let o=this.leftFile(),e=this.rightFile();this.leftFile.set(e),this.rightFile.set(o)}updateOptions(o){this.options.update(e=>be(be({},e),o))}setViewMode(o){this.viewMode.set(o)}setSearch(o){if(!o){this.searchState.set({query:"",matchIndices:[],currentMatchIndex:0});return}let e=this.diffResult();if(!e)return;let n=[],i=o.toLowerCase();e.inlineRows.forEach((r,s)=>{r.raw.toLowerCase().includes(i)&&n.push(s)}),this.searchState.set({query:o,matchIndices:n,currentMatchIndex:0})}nextMatch(){this.searchState.update(o=>{if(o.matchIndices.length===0)return o;let e=(o.currentMatchIndex+1)%o.matchIndices.length;return Kn(be({},o),{currentMatchIndex:e})})}prevMatch(){this.searchState.update(o=>{if(o.matchIndices.length===0)return o;let e=(o.currentMatchIndex-1+o.matchIndices.length)%o.matchIndices.length;return Kn(be({},o),{currentMatchIndex:e})})}setScrollRatio(o){this.scrollRatio.set(o)}persistToSession(){try{let o={leftFile:this.leftFile(),rightFile:this.rightFile(),options:this.options(),viewMode:this.viewMode(),fontSize:this.fontSize()};sessionStorage.setItem(Cn,JSON.stringify(o))}catch{}}loadFromSession(){try{let o=sessionStorage.getItem(Cn);if(!o)return;let e=JSON.parse(o);e.leftFile&&this.leftFile.set(e.leftFile),e.rightFile&&this.rightFile.set(e.rightFile),e.options&&this.options.set(e.options),e.viewMode&&this.viewMode.set(e.viewMode),e.fontSize&&this.fontSize.set(e.fontSize)}catch{sessionStorage.removeItem(Cn)}}static \u0275fac=function(e){return new(e||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})};var wi=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=W=>{if(W)return getComputedStyle(W).getPropertyValue("position")==="relative"?W:r(W.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),l=n.offsetHeight,a=n.getBoundingClientRect(),p=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),v=this.getViewport(),C=r(e)?.getBoundingClientRect()||{top:-1*p,left:-1*h},A,Y,ue="top";a.top+l+s.height>v.height?(A=a.top-C.top-s.height,ue="bottom",a.top+A<0&&(A=-1*a.top)):(A=l+a.top-C.top,ue="top");let se=a.left+s.width-v.width,V=a.left-C.left;if(s.width>v.width?Y=(a.left-C.left)*-1:se>0?Y=V-se:Y=a.left-C.left,e.style.top=A+"px",e.style.left=Y+"px",e.style.transformOrigin=ue,i){let W=fo(/-anchor-gutter$/)?.value;e.style.marginTop=ue==="bottom"?`calc(${W??"2px"} * -1)`:W??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,l=r.width,a=n.offsetHeight,p=n.offsetWidth,h=n.getBoundingClientRect(),v=this.getWindowScrollTop(),T=this.getWindowScrollLeft(),C=this.getViewport(),A,Y;h.top+a+s>C.height?(A=h.top+v-s,e.style.transformOrigin="bottom",A<0&&(A=v)):(A=a+h.top+v,e.style.transformOrigin="top"),h.left+l>C.width?Y=Math.max(0,h.left+T+p-l):Y=h.left+T,e.style.top=A+"px",e.style.left=Y+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=l=>{let a=window.getComputedStyle(l,null);return r.test(a.getPropertyValue("overflow"))||r.test(a.getPropertyValue("overflowX"))||r.test(a.getPropertyValue("overflowY"))};for(let l of i){let a=l.nodeType===1&&l.dataset.scrollselectors;if(a){let p=a.split(",");for(let h of p){let v=this.findSingle(l,h);v&&s(v)&&n.push(v)}}l.nodeType!==9&&s(l)&&n.push(l)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,a=e.getBoundingClientRect(),h=n.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-r-l,v=e.scrollTop,T=e.clientHeight,C=this.getOuterHeight(n);h<0?e.scrollTop=v+h:h+C>T&&(e.scrollTop=v+h-T+C)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,l=r/s;let a=setInterval(()=>{i=i-l,i<=0&&(i=0,clearInterval(a)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,l=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:l}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let l=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((a,p)=>{if(p!=null){let h=typeof p;if(h==="string"||h==="number")a.push(p);else if(h==="object"){let v=Array.isArray(p)?i(r,p):Object.entries(p).map(([T,C])=>r==="style"&&(C||C===0)?`${T.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${C}`:C?T:void 0);a=v.length?a.concat(v.filter(T=>!!T)):a}}return a},l)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let l=r.match(/^on(.+)/);l?e.addEventListener(l[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var wn=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=wi.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Po=(()=>{class t extends de{autofocus=!1;focused=!1;platformId=c(tn);document=c(St);host=c(yt);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){xt(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=wi.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275dir=Te({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[L]})}return t})();var zo=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var is=`
    ${zo}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,os={root:({instance:t})=>{let o=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,i=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":Co(o)&&String(o).length===1,"p-badge-dot":un(o),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},Ro=(()=>{class t extends re{name="badge";style=is;classes=os;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Vo=new X("BADGE_INSTANCE");var _i=(()=>{class t extends de{$pcBadge=c(Vo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=b();badgeSize=b();size=b();severity=b();value=b();badgeDisabled=b(!1,{transform:z});_componentStyle=c(Ro);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(D("data-p",i.dataP),M(i.cn(i.cx("root"),i.styleClass())),He("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[G([Ro,{provide:Vo,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],decls:1,vars:1,template:function(n,i){n&1&&B(0),n&2&&Se(i.value())},dependencies:[R,ae,Ne],encapsulation:2,changeDetection:0})}return t})(),_n=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[_i,ae,ae]})}return t})();var ss=["*"],as={root:"p-fluid"},Ho=(()=>{class t extends re{name="fluid";classes=as;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var $o=new X("FLUID_INSTANCE"),Bt=(()=>{class t extends de{$pcFluid=c($o,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(Ho);static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&M(i.cx("root"))},features:[G([Ho,{provide:$o,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],ngContentSelectors:ss,decls:1,vars:0,template:function(n,i){n&1&&(Ie(),Ee(0))},dependencies:[R],encapsulation:2,changeDetection:0})}return t})();var ls=["*"],ds=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,jo=(()=>{class t extends re{name="baseicon";css=ds;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ve=(()=>{class t extends de{spin=!1;_componentStyle=c(jo);getClassNames(){return po("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&M(i.getClassNames())},inputs:{spin:[2,"spin","spin",z]},features:[G([jo]),L],ngContentSelectors:ls,decls:1,vars:0,template:function(n,i){n&1&&(Ie(),Ee(0))},encapsulation:2,changeDetection:0})}return t})();var cs=["data-p-icon","check"],Sn=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","check"]],features:[L],attrs:cs,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,i){n&1&&(oe(),he(0,"path",0))},encapsulation:2})}return t})();var us=["data-p-icon","exclamation-triangle"],Wo=(()=>{class t extends Ve{pathId;onInit(){this.pathId="url(#"+$e()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","exclamation-triangle"]],features:[L],attrs:us,decls:7,vars:2,consts:[["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(oe(),Be(0,"g"),he(1,"path",0)(2,"path",1)(3,"path",2),Le(),Be(4,"defs")(5,"clipPath",3),he(6,"rect",4),Le()()),n&2&&(D("clip-path",i.pathId),d(5),ct("id",i.pathId))},encapsulation:2})}return t})();var ps=["data-p-icon","info-circle"],Uo=(()=>{class t extends Ve{pathId;onInit(){this.pathId="url(#"+$e()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","info-circle"]],features:[L],attrs:ps,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(oe(),Be(0,"g"),he(1,"path",0),Le(),Be(2,"defs")(3,"clipPath",1),he(4,"rect",2),Le()()),n&2&&(D("clip-path",i.pathId),d(3),ct("id",i.pathId))},encapsulation:2})}return t})();var fs=["data-p-icon","minus"],qo=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","minus"]],features:[L],attrs:fs,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(oe(),he(0,"path",0))},encapsulation:2})}return t})();var ms=["data-p-icon","spinner"],Qo=(()=>{class t extends Ve{pathId;onInit(){this.pathId="url(#"+$e()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","spinner"]],features:[L],attrs:ms,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(oe(),Be(0,"g"),he(1,"path",0),Le(),Be(2,"defs")(3,"clipPath",1),he(4,"rect",2),Le()()),n&2&&(D("clip-path",i.pathId),d(3),ct("id",i.pathId))},encapsulation:2})}return t})();var hs=["data-p-icon","times"],kn=(()=>{class t extends Ve{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","times"]],features:[L],attrs:hs,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(oe(),he(0,"path",0))},encapsulation:2})}return t})();var gs=["data-p-icon","times-circle"],Zo=(()=>{class t extends Ve{pathId;onInit(){this.pathId="url(#"+$e()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["","data-p-icon","times-circle"]],features:[L],attrs:gs,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(oe(),Be(0,"g"),he(1,"path",0),Le(),Be(2,"defs")(3,"clipPath",1),he(4,"rect",2),Le()()),n&2&&(D("clip-path",i.pathId),d(3),ct("id",i.pathId))},encapsulation:2})}return t})();var Go=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var bs=["content"],vs=["loadingicon"],ys=["icon"],xs=["*"],Jo=(t,o)=>({class:t,pt:o});function Cs(t,o){t&1&&ot(0)}function ws(t,o){if(t&1&&_(0,"span",7),t&2){let e=g(3);M(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),u("pBind",e.ptm("loadingIcon")),D("aria-hidden",!0)}}function _s(t,o){if(t&1&&(oe(),_(0,"svg",8)),t&2){let e=g(3);M(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),u("pBind",e.ptm("loadingIcon"))("spin",!0),D("aria-hidden",!0)}}function Ss(t,o){if(t&1&&(nt(0),ne(1,ws,1,4,"span",3)(2,_s,1,5,"svg",6),it()),t&2){let e=g(2);d(),u("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),d(),u("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function ks(t,o){}function Ts(t,o){if(t&1&&ne(0,ks,0,0,"ng-template",9),t&2){let e=g(2);u("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Is(t,o){if(t&1&&(nt(0),ne(1,Ss,3,2,"ng-container",2)(2,Ts,1,1,null,5),it()),t&2){let e=g();d(),u("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),d(),u("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Rt(3,Jo,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Es(t,o){if(t&1&&_(0,"span",7),t&2){let e=g(2);M(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),u("pBind",e.ptm("icon")),D("data-p",e.dataIconP)}}function Ds(t,o){}function Ms(t,o){if(t&1&&ne(0,Ds,0,0,"ng-template",9),t&2){let e=g(2);u("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Bs(t,o){if(t&1&&(nt(0),ne(1,Es,1,4,"span",3)(2,Ms,1,1,null,5),it()),t&2){let e=g();d(),u("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),d(),u("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Rt(3,Jo,e.cx("icon"),e.ptm("icon")))}}function Ls(t,o){if(t&1&&(f(0,"span",7),B(1),m()),t&2){let e=g();M(e.cx("label")),u("pBind",e.ptm("label")),D("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),d(),Se(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function Ns(t,o){if(t&1&&_(0,"p-badge",10),t&2){let e=g();u("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var Fs={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Yo=(()=>{class t extends re{name="button";style=Go;classes=Fs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Xo=new X("BUTTON_INSTANCE");var Ct=(()=>{class t extends de{hostName="";$pcButton=c(Xo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(E,{self:!0});_componentStyle=c(Yo);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=b(void 0,{transform:z});onClick=new Me;onFocus=new Me;onBlur=new Me;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=c(Bt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&ut(r,bs,5)(r,vs,5)(r,ys,5)(r,gt,4),n&2){let s;ye(s=xe())&&(i.contentTemplate=s.first),ye(s=xe())&&(i.loadingIconTemplate=s.first),ye(s=xe())&&(i.iconTemplate=s.first),ye(s=xe())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",z],raised:[2,"raised","raised",z],rounded:[2,"rounded","rounded",z],text:[2,"text","text",z],plain:[2,"plain","plain",z],outlined:[2,"outlined","outlined",z],link:[2,"link","link",z],tabindex:[2,"tabindex","tabindex",Ae],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",z],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",z],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[G([Yo,{provide:Xo,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],ngContentSelectors:xs,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(Ie(),f(0,"button",0),O("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),Ee(1),ne(2,Cs,1,0,"ng-container",1)(3,Is,3,6,"ng-container",2)(4,Bs,3,6,"ng-container",2)(5,Ls,2,6,"span",3)(6,Ns,1,4,"p-badge",4),m()),n&2&&(M(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),u("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),D("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),d(2),u("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),d(),u("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),d(),u("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),d(),u("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),d(),u("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[R,ft,mt,uo,gn,Po,Qo,_n,_i,ae,E],encapsulation:2,changeDetection:0})}return t})(),Lt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[R,Ct,ae,ae]})}return t})();var Ko=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var Os=`
    ${Ko}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,As={root:({instance:t})=>["p-textarea p-component",{"p-filled":t.$filled(),"p-textarea-resizable ":t.autoResize,"p-variant-filled":t.$variant()==="filled","p-textarea-fluid":t.hasFluid,"p-inputfield-sm p-textarea-sm":t.pSize==="small","p-textarea-lg p-inputfield-lg":t.pSize==="large","p-invalid":t.invalid()}]},er=(()=>{class t extends re{name="textarea";style=Os;classes=As;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var tr=new X("TEXTAREA_INSTANCE"),nr=(()=>{class t extends hn{bindDirectiveInstance=c(E,{self:!0});$pcTextarea=c(tr,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=b();pTextareaUnstyled=b();autoResize;pSize;variant=b();fluid=b(void 0,{transform:z});invalid=b(void 0,{transform:z});$variant=w(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new Me;ngControlSubscription;_componentStyle=c(er);ngControl=c(It,{optional:!0,self:!0});pcFluid=c(Bt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),J(()=>{let e=this.pTextareaPT();e&&this.directivePT.set(e)}),J(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Te({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(n,i){n&1&&O("input",function(s){return i.onInput(s)}),n&2&&M(i.cx("root"))},inputs:{pTextareaPT:[1,"pTextareaPT"],pTextareaUnstyled:[1,"pTextareaUnstyled"],autoResize:[2,"autoResize","autoResize",z],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[G([er,{provide:tr,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L]})}return t})(),ir=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({})}return t})();var zs=Object.defineProperty,or=Object.getOwnPropertySymbols,Rs=Object.prototype.hasOwnProperty,Vs=Object.prototype.propertyIsEnumerable,rr=(t,o,e)=>o in t?zs(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,sr=(t,o)=>{for(var e in o||(o={}))Rs.call(o,e)&&rr(t,e,o[e]);if(or)for(var e of or(o))Vs.call(o,e)&&rr(t,e,o[e]);return t},Hs=(t,o,e)=>new Promise((n,i)=>{var r=a=>{try{l(e.next(a))}catch(p){i(p)}},s=a=>{try{l(e.throw(a))}catch(p){i(p)}},l=a=>a.done?n(a.value):Promise.resolve(a.value).then(r,s);l((e=e.apply(t,o)).next())}),In="animation",Wt="transition";function $s(t){return t?t.disabled||!!(t.safe&&yo()):!1}function js(t,o){return t?sr(sr({},t),Object.entries(o).reduce((e,[n,i])=>{var r;return e[n]=(r=t[n])!=null?r:i,e},{})):o}function Ws(t){let{name:o,enterClass:e,leaveClass:n}=t||{};return{enter:{from:e?.from||`${o}-enter-from`,to:e?.to||`${o}-enter-to`,active:e?.active||`${o}-enter-active`},leave:{from:n?.from||`${o}-leave-from`,to:n?.to||`${o}-leave-to`,active:n?.active||`${o}-leave-active`}}}function Us(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function qs(t,o){let e=window.getComputedStyle(t),n=C=>{let A=e[`${C}Delay`],Y=e[`${C}Duration`];return[A.split(", ").map(ci),Y.split(", ").map(ci)]},[i,r]=n(Wt),[s,l]=n(In),a=Math.max(...r.map((C,A)=>C+i[A])),p=Math.max(...l.map((C,A)=>C+s[A])),h,v=0,T=0;return o===Wt?a>0&&(h=Wt,v=a,T=r.length):o===In?p>0&&(h=In,v=p,T=l.length):(v=Math.max(a,p),h=v>0?a>p?Wt:In:void 0,T=h?h===Wt?r.length:l.length:0),{type:h,timeout:v,count:T}}function Qs(t,o){return typeof t=="number"?t:typeof t=="object"&&t[o]!=null?t[o]:null}function Zs(t,o=!0,e=!1){if(!o&&!e)return;let n=mo(t);o&&di(t,"--pui-motion-height",n.height+"px"),e&&di(t,"--pui-motion-width",n.width+"px")}var Gs={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function ki(t,o){if(!t)throw new Error("Element is required.");let e={},n=!1,i={},r=null,s={},l=h=>{if(Object.assign(e,js(h,Gs)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");s=Us(e),n=$s(e),i=Ws(e),r=null},a=h=>Hs(null,null,function*(){r?.();let{onBefore:v,onStart:T,onAfter:C,onCancelled:A}=s[h]||{},Y={element:t};if(n){v?.(Y),T?.(Y),C?.(Y);return}let{from:ue,active:se,to:V}=i[h]||{};return Zs(t,e.autoHeight,e.autoWidth),v?.(Y),Vt(t,ue),Vt(t,se),t.offsetHeight,ln(t,ue),Vt(t,V),T?.(Y),new Promise(W=>{let ie=Qs(e.duration,h),K=()=>{ln(t,[V,se]),r=null},Pe=()=>{K(),C?.(Y),W()};r=()=>{K(),A?.(Y),W()},Xs(t,e.type,ie,Pe)})});l(o);let p={enter:()=>e.enter?a("enter"):Promise.resolve(),leave:()=>e.leave?a("leave"):Promise.resolve(),cancel:()=>{r?.(),r=null},update:(h,v)=>{if(!h)throw new Error("Element is required.");t=h,p.cancel(),l(v)}};return e.appear&&p.enter(),p}var Ys=0;function Xs(t,o,e,n){let i=t._motionEndId=++Ys,r=()=>{i===t._motionEndId&&n()};if(e!=null)return setTimeout(r,e);let{type:s,timeout:l,count:a}=qs(t,o);if(!s){n();return}let p=s+"end",h=0,v=()=>{t.removeEventListener(p,T,!0),r()},T=C=>{C.target===t&&++h>=a&&v()};t.addEventListener(p,T,{capture:!0,once:!0}),setTimeout(()=>{h<a&&v()},l+1)}var Js=["*"];function Ks(t,o){t&1&&Ee(0)}var En=new WeakMap;function Ut(t,o){if(t)switch(En.has(t)||En.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight}),o){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0";break}}function Dn(t,o){if(!t)return;let e=En.get(t)??t.style;switch(o){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"";break}En.delete(t)}var ea=`
    .p-motion {
        display: block;
    }
`,ta={root:"p-motion"},Ti=(()=>{class t extends re{name="motion";style=ea;classes=ta;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var ar=new X("MOTION_INSTANCE"),na=(()=>{class t extends de{$pcMotion=c(ar,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(Ti);visible=b(!1);mountOnEnter=b(!0);unmountOnLeave=b(!0);name=b(void 0);type=b(void 0);safe=b(void 0);disabled=b(!1);appear=b(!1);enter=b(!0);leave=b(!0);duration=b(void 0);hideStrategy=b("display");enterFromClass=b(void 0);enterToClass=b(void 0);enterActiveClass=b(void 0);leaveFromClass=b(void 0);leaveToClass=b(void 0);leaveActiveClass=b(void 0);options=b({});onBeforeEnter=Ce();onEnter=Ce();onAfterEnter=Ce();onEnterCancelled=Ce();onBeforeLeave=Ce();onLeave=Ce();onAfterLeave=Ce();onLeaveCancelled=Ce();motionOptions=w(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=Z(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),J(()=>{let e=this.hideStrategy();this.isInitialMount?(Ut(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(Ut(this.$el,e),this.rendered.set(!0))}),J(()=>{this.motion||(this.motion=ki(this.$el,this.motionOptions()))}),si(async()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await cn(),Dn(this.$el,n),(e||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount||(await cn(),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(Ut(this.$el,n),this.unmountOnLeave()&&(await cn(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Dn(this.$el,this.hideStrategy()),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=k({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,i){n&2&&M(i.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[G([Ti,{provide:ar,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],ngContentSelectors:Js,decls:1,vars:1,template:function(n,i){n&1&&(Ie(),H(0,Ks,1,0)),n&2&&$(i.rendered()?0:-1)},dependencies:[R,Ne],encapsulation:2})}return t})(),lr=new X("MOTION_DIRECTIVE_INSTANCE"),dr=(()=>{class t extends de{$pcMotionDirective=c(lr,{optional:!0,skipSelf:!0})??void 0;visible=b(!1,{alias:"pMotion"});name=b(void 0,{alias:"pMotionName"});type=b(void 0,{alias:"pMotionType"});safe=b(void 0,{alias:"pMotionSafe"});disabled=b(!1,{alias:"pMotionDisabled"});appear=b(!1,{alias:"pMotionAppear"});enter=b(!0,{alias:"pMotionEnter"});leave=b(!0,{alias:"pMotionLeave"});duration=b(void 0,{alias:"pMotionDuration"});hideStrategy=b("display",{alias:"pMotionHideStrategy"});enterFromClass=b(void 0,{alias:"pMotionEnterFromClass"});enterToClass=b(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=b(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=b(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=b(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=b(void 0,{alias:"pMotionLeaveActiveClass"});options=b({},{alias:"pMotionOptions"});onBeforeEnter=Ce({alias:"pMotionOnBeforeEnter"});onEnter=Ce({alias:"pMotionOnEnter"});onAfterEnter=Ce({alias:"pMotionOnAfterEnter"});onEnterCancelled=Ce({alias:"pMotionOnEnterCancelled"});onBeforeLeave=Ce({alias:"pMotionOnBeforeLeave"});onLeave=Ce({alias:"pMotionOnLeave"});onAfterLeave=Ce({alias:"pMotionOnAfterLeave"});onLeaveCancelled=Ce({alias:"pMotionOnLeaveCancelled"});motionOptions=w(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),J(()=>{this.motion||(this.motion=ki(this.$el,this.motionOptions()))}),si(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(Dn(this.$el,n),(e||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount?Ut(this.$el,n):this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&Ut(this.$el,n)}),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Dn(this.$el,this.hideStrategy()),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Te({type:t,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[G([Ti,{provide:lr,useExisting:t},{provide:le,useExisting:t}]),L]})}return t})(),Mn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[na]})}return t})();var cr=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var oa=["container"],ra=["icon"],sa=["closeicon"],aa=["*"],la=t=>({closeCallback:t});function da(t,o){t&1&&ot(0)}function ca(t,o){if(t&1&&ne(0,da,1,0,"ng-container",4),t&2){let e=g();u("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function ua(t,o){if(t&1&&_(0,"i",1),t&2){let e=g();M(e.cn(e.cx("icon"),e.icon)),u("pBind",e.ptm("icon")),D("data-p",e.dataP)}}function pa(t,o){t&1&&ot(0)}function fa(t,o){if(t&1&&ne(0,pa,1,0,"ng-container",5),t&2){let e=g();u("ngTemplateOutlet",e.containerTemplate||e._containerTemplate)("ngTemplateOutletContext",an(2,la,e.closeCallback))}}function ma(t,o){if(t&1&&_(0,"span",9),t&2){let e=g(3);u("pBind",e.ptm("text"))("ngClass",e.cx("text"))("innerHTML",e.text,nn),D("data-p",e.dataP)}}function ha(t,o){if(t&1&&(f(0,"div"),ne(1,ma,1,4,"span",8),m()),t&2){let e=g(2);d(),u("ngIf",!e.escape)}}function ga(t,o){if(t&1&&(f(0,"span",7),B(1),m()),t&2){let e=g(3);u("pBind",e.ptm("text"))("ngClass",e.cx("text")),D("data-p",e.dataP),d(),Se(e.text)}}function ba(t,o){if(t&1&&ne(0,ga,2,4,"span",10),t&2){let e=g(2);u("ngIf",e.escape&&e.text)}}function va(t,o){if(t&1&&(ne(0,ha,2,1,"div",6)(1,ba,1,1,"ng-template",null,0,so),f(3,"span",7),Ee(4),m()),t&2){let e=sn(2),n=g();u("ngIf",!n.escape)("ngIfElse",e),d(3),u("pBind",n.ptm("text"))("ngClass",n.cx("text")),D("data-p",n.dataP)}}function ya(t,o){if(t&1&&_(0,"i",7),t&2){let e=g(2);M(e.cn(e.cx("closeIcon"),e.closeIcon)),u("pBind",e.ptm("closeIcon"))("ngClass",e.closeIcon),D("data-p",e.dataP)}}function xa(t,o){t&1&&ot(0)}function Ca(t,o){if(t&1&&ne(0,xa,1,0,"ng-container",4),t&2){let e=g(2);u("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function wa(t,o){if(t&1&&(oe(),_(0,"svg",14)),t&2){let e=g(2);M(e.cx("closeIcon")),u("pBind",e.ptm("closeIcon")),D("data-p",e.dataP)}}function _a(t,o){if(t&1){let e=ve();f(0,"button",11),O("click",function(i){q(e);let r=g();return Q(r.close(i))}),H(1,ya,1,5,"i",12),H(2,Ca,1,1,"ng-container"),H(3,wa,1,4,":svg:svg",13),m()}if(t&2){let e=g();M(e.cx("closeButton")),u("pBind",e.ptm("closeButton")),D("aria-label",e.closeAriaLabel)("data-p",e.dataP),d(),$(e.closeIcon?1:-1),d(),$(e.closeIconTemplate||e._closeIconTemplate?2:-1),d(),$(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var Sa={root:({instance:t})=>["p-message p-component p-message-"+t.severity,t.variant&&"p-message-"+t.variant,{"p-message-sm":t.size==="small","p-message-lg":t.size==="large"}],contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},ur=(()=>{class t extends re{name="message";style=cr;classes=Sa;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var pr=new X("MESSAGE_INSTANCE"),Ii=(()=>{class t extends de{_componentStyle=c(ur);bindDirectiveInstance=c(E,{self:!0});$pcMessage=c(pr,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;motionOptions=b(void 0);computedMotionOptions=w(()=>be(be({},this.ptm("motion")),this.motionOptions()));onClose=new Me;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=Z(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant==="outlined",simple:this.variant==="simple",[this.severity]:this.severity,[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-message"]],contentQueries:function(n,i,r){if(n&1&&ut(r,oa,4)(r,ra,4)(r,sa,4)(r,gt,4),n&2){let s;ye(s=xe())&&(i.containerTemplate=s.first),ye(s=xe())&&(i.iconTemplate=s.first),ye(s=xe())&&(i.closeIconTemplate=s.first),ye(s=xe())&&(i.templates=s)}},hostAttrs:["role","alert","aria-live","polite"],hostVars:5,hostBindings:function(n,i){n&1&&(Yi(function(){return"p-message-enter-active"}),Xi(function(){return"p-message-leave-active"})),n&2&&(D("data-p",i.dataP),M(i.cn(i.cx("root"),i.styleClass)),rt("p-message-leave-active",!i.visible()))},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",z],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",z],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant",motionOptions:[1,"motionOptions"]},outputs:{onClose:"onClose"},features:[G([ur,{provide:pr,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],ngContentSelectors:aa,decls:7,vars:12,consts:[["escapeOut",""],[3,"pBind"],[3,"pBind","class"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(n,i){n&1&&(Ie(),f(0,"div",1)(1,"div",1),H(2,ca,1,1,"ng-container"),H(3,ua,1,4,"i",2),H(4,fa,1,4,"ng-container")(5,va,5,5),H(6,_a,4,8,"button",3),m()()),n&2&&(M(i.cx("contentWrapper")),u("pBind",i.ptm("contentWrapper")),D("data-p",i.dataP),d(),M(i.cx("content")),u("pBind",i.ptm("content")),D("data-p",i.dataP),d(),$(i.iconTemplate||i._iconTemplate?2:-1),d(),$(i.icon?3:-1),d(),$(i.containerTemplate||i._containerTemplate?4:5),d(2),$(i.closable?6:-1))},dependencies:[R,pt,ft,mt,kn,gn,ae,E,Mn],encapsulation:2,changeDetection:0})}return t})(),fr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[Ii,ae,ae]})}return t})();function Ta(){let t=[],o=(r,s)=>{let l=t.length>0?t[t.length-1]:{key:r,value:s},a=l.value+(l.key===r?0:s)+2;return t.push({key:r,value:a}),a},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,l)=>{s&&(s.style.zIndex=String(o(r,l)))},clear:r=>{r&&(e(i(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:e}}var bt=Ta();var mr=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var Ia={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},hr=(()=>{class t extends re{name="tooltip";style=mr;classes=Ia;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var gr=new X("TOOLTIP_INSTANCE"),Nt=(()=>{class t extends de{zone;viewContainer;$pcTooltip=c(gr,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=b(void 0);$appendTo=w(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:$e("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=c(hr);interactionInProgress=!1;ptTooltip=b();pTooltipPT=b();pTooltipUnstyled=b();constructor(e,n){super(),this.zone=e,this.viewContainer=n,J(()=>{let i=this.ptTooltip()||this.pTooltipPT();i&&this.directivePT.set(i)}),J(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){xt(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}onChanges(e){e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=be(be({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Tt(e.relatedTarget,"p-tooltip")||Tt(e.relatedTarget,"p-tooltip-text")||Tt(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=Ht("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let e=Ht("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(e),this.tooltipText=Ht("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?ai(this.container,this.el.nativeElement):ai(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),vo(this.container,250),this.getOption("tooltipZIndex")==="auto"?bt.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&bt.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e&&typeof e.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[e]||[];for(let[r,s]of i.entries())if(r===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+go(),i=e.top+bo();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?dn(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=et(e),i=(ht(e)-ht(this.container))/2;this.alignTooltip(n,i);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=et(this.container),i=(ht(this.el.nativeElement)-ht(this.container))/2;this.alignTooltip(-n,i),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),i=et(this.container),r=(et(this.el.nativeElement)-et(this.container))/2,s=ht(this.container);this.alignTooltip(r,-s);let l=n.left-this.getHostOffset().left+i/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=l+"px"}getArrowElement(){return dn(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=et(this.container),i=this.getHostOffset(),r=(et(this.el.nativeElement)-et(this.container))/2,s=ht(this.el.nativeElement);this.alignTooltip(r,s);let l=i.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=l+"px"}alignTooltip(e,n){let i=this.getHostOffset(),r=i.left+e,s=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=be(be({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Tt(e,"p-inputwrapper")?dn(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+e,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,r=et(this.container),s=ht(this.container),l=ho();return i+r>l.width||i<0||n<0||n+s>l.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new wn(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):xo(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&bt.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(zt(tt),zt(on))};static \u0275dir=Te({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",z],showDelay:[2,"showDelay","showDelay",Ae],hideDelay:[2,"hideDelay","hideDelay",Ae],life:[2,"life","life",Ae],positionTop:[2,"positionTop","positionTop",Ae],positionLeft:[2,"positionLeft","positionLeft",Ae],autoHide:[2,"autoHide","autoHide",z],fitContent:[2,"fitContent","fitContent",z],hideOnEscape:[2,"hideOnEscape","hideOnEscape",z],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[G([hr,{provide:gr,useExisting:t},{provide:le,useExisting:t}]),L]})}return t})(),Ft=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[Ne,Ne]})}return t})();var Da=["fileInput"];function Ma(t,o){if(t&1&&(f(0,"span",5),B(1),m()),t&2){let e=g();u("pTooltip",e.fileName()),d(),Se(e.fileName())}}function Ba(t,o){if(t&1&&_(0,"p-tag",6),t&2){let e=g();u("value",e.detectedLanguage())}}function La(t,o){if(t&1){let e=ve();f(0,"p-button",16),O("onClick",function(){q(e);let i=g();return Q(i.clear())}),m()}t&2&&u("rounded",!0)("text",!0)}function Na(t,o){t&1&&(f(0,"div",12)(1,"div",17),_(2,"i",18),f(3,"p",19),B(4,"Drop file here"),m()()())}function Fa(t,o){if(t&1&&_(0,"p-message",15),t&2){let e=g();u("text",e.errorMessage())}}function Oa(t,o){t&1&&(f(0,"span",7),_(1,"i",20),B(2," Reading file... "),m())}function Aa(t,o){if(t&1&&(f(0,"span"),B(1),m(),H(2,Oa,3,0,"span",7)),t&2){let e=g();d(),Se(e.lineCount()>0?e.lineCount()+" lines":""),d(),$(e.isLoading()?2:-1)}}var Pa=10*1024*1024,br=[".txt",".js",".ts",".jsx",".tsx",".py",".java",".go",".rb",".php",".cs",".cpp",".c",".h",".json",".yaml",".yml",".xml",".html",".css",".scss",".md",".sql",".sh",".bat",".env",".log",".csv",".rs",".swift",".kt",".dart",".toml",".graphql",".r",".lua",".dockerfile",".mjs"],Bn=class t{side=b.required();state=c(De);syntaxHighlight=c(Mt);fileInputRef=qe("fileInput");text=Z("");fileName=Z(null);detectedLanguage=Z("plaintext");isDragOver=Z(!1);isLoading=Z(!1);errorMessage=Z(null);lineCount=w(()=>{let o=this.text();return o?o.split(`
`).length:0});supportedExtensions=br.join(",");debounceTimer=null;skipNextSync=!1;constructor(){J(()=>{let o=this.side()==="left"?this.state.leftFile():this.state.rightFile(),e=o?.content??"";dt(()=>this.text())!==e&&(this.skipNextSync=!0,this.text.set(e),this.fileName.set(o?.name??null),this.detectedLanguage.set(o?.language??"plaintext"))}),J(()=>{let o=this.text();if(this.skipNextSync){this.skipNextSync=!1,this.debounceTimer&&(clearTimeout(this.debounceTimer),this.debounceTimer=null);return}this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>this.syncToState(o),400)})}syncToState(o){if(!o.trim()){this.state.clearFile(this.side());return}this.state.setFile(this.side(),{name:this.fileName()??"untitled",content:o,encoding:"UTF-8",language:this.detectedLanguage(),size:o.length})}clear(){this.text.set(""),this.fileName.set(null),this.detectedLanguage.set("plaintext"),this.errorMessage.set(null),this.state.clearFile(this.side())}triggerFileInput(){this.fileInputRef()?.nativeElement.click()}onDragOver(o){o.preventDefault(),o.stopPropagation(),this.isDragOver.set(!0)}onDragLeave(o){o.preventDefault(),this.isDragOver.set(!1)}onDrop(o){o.preventDefault(),o.stopPropagation(),this.isDragOver.set(!1);let e=o.dataTransfer?.files?.[0];e&&this.processFile(e)}onFileSelected(o){let e=o.target,n=e.files?.[0];n&&this.processFile(n),e.value=""}processFile(o){if(this.errorMessage.set(null),o.size>Pa){this.errorMessage.set(`File too large: ${this.formatSize(o.size)}. Maximum is 10MB.`);return}let e=this.getExtension(o.name);if(e&&!br.includes(e)){this.errorMessage.set(`Unsupported file type: ${e}. Please use a text file.`);return}this.isLoading.set(!0);let n=new FileReader;n.onload=i=>{let r=i.target?.result,s=this.detectEncoding(r);this.readAsText(o,s)},n.onerror=()=>{this.isLoading.set(!1),this.errorMessage.set("Failed to read file.")},n.readAsArrayBuffer(o.slice(0,4))}readAsText(o,e){let n=new FileReader;n.onload=i=>{this.isLoading.set(!1);let r=i.target?.result;if(r.includes("\0")){this.errorMessage.set("Binary file detected. Only text files are supported.");return}let s=this.syntaxHighlight.detectLanguage(o.name),l={name:o.name,content:r,encoding:e,language:s,size:o.size};this.skipNextSync=!0,this.text.set(r),this.fileName.set(o.name),this.detectedLanguage.set(s),this.state.setFile(this.side(),l),this.errorMessage.set(null)},n.onerror=()=>{this.isLoading.set(!1),this.errorMessage.set("Failed to read file.")},n.readAsText(o,e)}detectEncoding(o){let e=new Uint8Array(o);return e[0]===239&&e[1]===187&&e[2]===191?"UTF-8":e[0]===255&&e[1]===254?"UTF-16LE":e[0]===254&&e[1]===255?"UTF-16BE":"UTF-8"}getExtension(o){let e=o.lastIndexOf(".");return e>=0?o.substring(e).toLowerCase():""}formatSize(o){return o<1024?`${o} B`:o<1024*1024?`${(o/1024).toFixed(1)} KB`:`${(o/(1024*1024)).toFixed(1)} MB`}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["p-code-input"]],viewQuery:function(e,n){e&1&&Ke(n.fileInputRef,Da,5),e&2&&Ye()},inputs:{side:[1,"side"]},decls:18,vars:13,consts:[["fileInput",""],[1,"flex","flex-col","gap-2"],[1,"flex","items-center","justify-between","gap-2"],[1,"flex","items-center","gap-2","min-w-0"],[1,"font-semibold","text-sm","text-surface-700","dark:text-surface-200","shrink-0"],["tooltipPosition","bottom",1,"inline-block","px-2","py-0.5","rounded","bg-surface-100","dark:bg-surface-700","text-surface-600","dark:text-surface-200","text-xs","truncate","min-w-0","max-w-36","shrink",3,"pTooltip"],["severity","secondary","styleClass","text-xs",3,"value"],[1,"flex","items-center","gap-1"],["label","Attach file","icon","pi pi-paperclip","severity","primary","size","small",3,"onClick","outlined"],["icon","pi pi-times","severity","secondary","size","small","pTooltip","Clear",3,"rounded","text"],[1,"relative",3,"dragover","dragleave","drop"],["pTextarea","",1,"font-mono","text-sm","w-full","resize-y",3,"ngModelChange","rows","placeholder","ngModel"],[1,"absolute","inset-0","flex","items-center","justify-center","bg-primary-50/90","dark:bg-primary-950/90","pointer-events-none","border-2","border-primary","border-dashed","rounded-border"],["type","file",1,"hidden",3,"change","accept"],[1,"flex","items-center","justify-between","text-xs","text-surface-400","px-0.5","min-h-4"],["severity","error","styleClass","w-full",3,"text"],["icon","pi pi-times","severity","secondary","size","small","pTooltip","Clear",3,"onClick","rounded","text"],[1,"text-center"],[1,"pi","pi-cloud-upload","text-2xl","text-primary"],[1,"text-primary","font-medium","text-sm","mt-1"],[1,"pi","pi-spin","pi-spinner"]],template:function(e,n){if(e&1){let i=ve();f(0,"div",1)(1,"div",2)(2,"div",3)(3,"span",4),B(4),m(),H(5,Ma,2,2,"span",5),H(6,Ba,1,1,"p-tag",6),m(),f(7,"div",7)(8,"p-button",8),O("onClick",function(){return q(i),Q(n.triggerFileInput())}),m(),H(9,La,1,2,"p-button",9),m()(),f(10,"div",10),O("dragover",function(s){return q(i),Q(n.onDragOver(s))})("dragleave",function(s){return q(i),Q(n.onDragLeave(s))})("drop",function(s){return q(i),Q(n.onDrop(s))}),f(11,"textarea",11),oo("ngModelChange",function(s){return q(i),io(n.text,s)||(n.text=s),Q(s)}),m(),H(12,Na,5,0,"div",12),f(13,"input",13,0),O("change",function(s){return q(i),Q(n.onFileSelected(s))}),m()(),f(15,"div",14),H(16,Fa,1,1,"p-message",15)(17,Aa,3,2),m()()}e&2&&(d(4),fe(" ",n.side()==="left"?"Code A":"Code B"," "),d(),$(n.fileName()?5:-1),d(),$(n.detectedLanguage()!=="plaintext"&&n.fileName()?6:-1),d(2),u("outlined",!0),d(),$(n.text()?9:-1),d(2),rt("!border-primary",n.isDragOver()),u("rows",11)("placeholder",n.side()==="left"?"Paste or type original code here...":"Paste or type modified code here..."),no("ngModel",n.text),d(),$(n.isDragOver()?12:-1),d(),u("accept",n.supportedExtensions),d(3),$(n.errorMessage()?16:17))},dependencies:[R,mn,ko,pn,fn,Lt,Ct,ir,nr,fr,Ii,Mo,Do,Ft,Nt],encapsulation:2})};var vr=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var za=["icon"],Ra=["input"],Va=(t,o,e)=>({checked:t,class:o,dataP:e});function Ha(t,o){if(t&1&&_(0,"span",8),t&2){let e=g(3);M(e.cx("icon")),u("ngClass",e.checkboxIcon)("pBind",e.ptm("icon")),D("data-p",e.dataP)}}function $a(t,o){if(t&1&&(oe(),_(0,"svg",9)),t&2){let e=g(3);M(e.cx("icon")),u("pBind",e.ptm("icon")),D("data-p",e.dataP)}}function ja(t,o){if(t&1&&(nt(0),ne(1,Ha,1,5,"span",6)(2,$a,1,4,"svg",7),it()),t&2){let e=g(2);d(),u("ngIf",e.checkboxIcon),d(),u("ngIf",!e.checkboxIcon)}}function Wa(t,o){if(t&1&&(oe(),_(0,"svg",10)),t&2){let e=g(2);M(e.cx("icon")),u("pBind",e.ptm("icon")),D("data-p",e.dataP)}}function Ua(t,o){if(t&1&&(nt(0),ne(1,ja,3,2,"ng-container",3)(2,Wa,1,4,"svg",5),it()),t&2){let e=g();d(),u("ngIf",e.checked),d(),u("ngIf",e._indeterminate())}}function qa(t,o){}function Qa(t,o){t&1&&ne(0,qa,0,0,"ng-template")}var Za=`
    ${vr}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Ga={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},yr=(()=>{class t extends re{name="checkbox";style=Za;classes=Ga;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var xr=new X("CHECKBOX_INSTANCE"),Ya={provide:So,useExisting:en(()=>Ln),multi:!0},Ln=(()=>{class t extends To{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=b();size=b();onChange=new Me;onFocus=new Me;onBlur=new Me;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:_o(this.value,this.modelValue())}_indeterminate=Z(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=c(yr);bindDirectiveInstance=c(E,{self:!0});$pcCheckbox=c(xr,{optional:!0,skipSelf:!0})??void 0;$variant=w(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let n,i=this.injector.get(It,null,{optional:!0,self:!0}),r=i&&!this.formControl?i.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=r.filter(s=>!wo(s,this.value)):n=r?[...r,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,i,r){if(n&1&&ut(r,za,4)(r,gt,4),n&2){let s;ye(s=xe())&&(i.checkboxIconTemplate=s.first),ye(s=xe())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&rn(Ra,5),n&2){let r;ye(r=xe())&&(i.inputViewChild=r.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(D("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.$disabled())("data-p",i.dataP),M(i.cn(i.cx("root"),i.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",z],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Ae],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",z],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",z],autofocus:[2,"autofocus","autofocus",z],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[G([Ya,yr,{provide:xr,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],decls:5,vars:26,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(n,i){if(n&1){let r=ve();f(0,"input",1,0),O("focus",function(l){return q(r),Q(i.onInputFocus(l))})("blur",function(l){return q(r),Q(i.onInputBlur(l))})("change",function(l){return q(r),Q(i.handleChange(l))}),m(),f(2,"div",2),ne(3,Ua,3,2,"ng-container",3)(4,Qa,1,0,null,4),m()}n&2&&(kt(i.inputStyle),M(i.cn(i.cx("input"),i.inputClass)),u("checked",i.checked)("pBind",i.ptm("input")),D("id",i.inputId)("value",i.value)("name",i.name())("tabindex",i.tabindex)("required",i.required()?"":void 0)("readonly",i.readonly?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),d(2),M(i.cx("box")),u("pBind",i.ptm("box")),D("data-p",i.dataP),d(),u("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),d(),u("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",ro(22,Va,i.checked,i.cx("icon"),i.dataP)))},dependencies:[R,pt,ft,mt,ae,Sn,qo,Ne,E],encapsulation:2,changeDetection:0})}return t})(),Cr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[Ln,ae,ae]})}return t})();var wr=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Ja=`
    ${wr}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Ka={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},_r=(()=>{class t extends re{name="inputtext";style=Ja;classes=Ka;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Sr=new X("INPUTTEXT_INSTANCE"),kr=(()=>{class t extends hn{hostName="";ptInputText=b();pInputTextPT=b();pInputTextUnstyled=b();bindDirectiveInstance=c(E,{self:!0});$pcInputText=c(Sr,{optional:!0,skipSelf:!0})??void 0;ngControl=c(It,{optional:!0,self:!0});pcFluid=c(Bt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=b();fluid=b(void 0,{transform:z});invalid=b(void 0,{transform:z});$variant=w(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=c(_r);constructor(){super(),J(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),J(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Te({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,i){n&1&&O("input",function(){return i.onInput()}),n&2&&(D("data-p",i.dataP),M(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[G([_r,{provide:Sr,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L]})}return t})(),Tr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({})}return t})();var Ir=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var tl=["*"],nl={root:({instance:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align==null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align==null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},il={root:({instance:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},Er=(()=>{class t extends re{name="divider";style=Ir;classes=il;inlineStyles=nl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Dr=new X("DIVIDER_INSTANCE"),qt=(()=>{class t extends de{$pcDivider=c(Dr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=c(Er);get dataP(){return this.cn({[this.align]:this.align,[this.layout]:this.layout,[this.type]:this.type})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:6,hostBindings:function(n,i){n&2&&(D("aria-orientation",i.layout)("data-p",i.dataP),kt(i.sx("root")),M(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[G([Er,{provide:Dr,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],ngContentSelectors:tl,decls:2,vars:3,consts:[[3,"pBind"]],template:function(n,i){n&1&&(Ie(),f(0,"div",0),Ee(1),m()),n&2&&(M(i.cx("content")),u("pBind",i.ptm("content")))},dependencies:[R,ae,Ne,E],encapsulation:2,changeDetection:0})}return t})(),Nn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[qt,Ne,Ne]})}return t})();var Br=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var ol=["*"],rl={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},Lr=(()=>{class t extends re{name="iconfield";style=Br;classes=rl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Nr=new X("ICONFIELD_INSTANCE"),Di=(()=>{class t extends de{hostName="";_componentStyle=c(Lr);$pcIconField=c(Nr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,i){n&2&&M(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[G([Lr,{provide:Nr,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],ngContentSelectors:ol,decls:1,vars:0,template:function(n,i){n&1&&(Ie(),Ee(0))},dependencies:[R,Ne],encapsulation:2,changeDetection:0})}return t})(),Fr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[Di]})}return t})();var al=["*"],ll={root:"p-inputicon"},Or=(()=>{class t extends re{name="inputicon";classes=ll;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})(),Ar=new X("INPUTICON_INSTANCE"),Mi=(()=>{class t extends de{hostName="";styleClass;_componentStyle=c(Or);$pcInputIcon=c(Ar,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=k({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,i){n&2&&M(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[G([Or,{provide:Ar,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],ngContentSelectors:al,decls:1,vars:0,template:function(n,i){n&1&&(Ie(),Ee(0))},dependencies:[R,ae,Ne],encapsulation:2,changeDetection:0})}return t})(),Pr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[Mi,ae,ae]})}return t})();var zr=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;var cl=(t,o)=>({$implicit:t,closeFn:o}),ul=t=>({$implicit:t});function pl(t,o){t&1&&ot(0)}function fl(t,o){if(t&1&&ne(0,pl,1,0,"ng-container",3),t&2){let e=g();u("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",Rt(2,cl,e.message,e.onCloseIconClick))}}function ml(t,o){if(t&1&&_(0,"span",4),t&2){let e=g(3);M(e.cn(e.cx("messageIcon"),e.message==null?null:e.message.icon)),u("pBind",e.ptm("messageIcon"))}}function hl(t,o){if(t&1&&(oe(),_(0,"svg",11)),t&2){let e=g(4);M(e.cx("messageIcon")),u("pBind",e.ptm("messageIcon")),D("aria-hidden",!0)}}function gl(t,o){if(t&1&&(oe(),_(0,"svg",12)),t&2){let e=g(4);M(e.cx("messageIcon")),u("pBind",e.ptm("messageIcon")),D("aria-hidden",!0)}}function bl(t,o){if(t&1&&(oe(),_(0,"svg",13)),t&2){let e=g(4);M(e.cx("messageIcon")),u("pBind",e.ptm("messageIcon")),D("aria-hidden",!0)}}function vl(t,o){if(t&1&&(oe(),_(0,"svg",14)),t&2){let e=g(4);M(e.cx("messageIcon")),u("pBind",e.ptm("messageIcon")),D("aria-hidden",!0)}}function yl(t,o){if(t&1&&(oe(),_(0,"svg",12)),t&2){let e=g(4);M(e.cx("messageIcon")),u("pBind",e.ptm("messageIcon")),D("aria-hidden",!0)}}function xl(t,o){if(t&1&&H(0,hl,1,4,":svg:svg",7)(1,gl,1,4,":svg:svg",8)(2,bl,1,4,":svg:svg",9)(3,vl,1,4,":svg:svg",10)(4,yl,1,4,":svg:svg",8),t&2){let e,n=g(3);$((e=n.message.severity)==="success"?0:e==="info"?1:e==="error"?2:e==="warn"?3:4)}}function Cl(t,o){if(t&1&&(nt(0),H(1,ml,1,3,"span",2)(2,xl,5,1),f(3,"div",6)(4,"div",6),B(5),m(),f(6,"div",6),B(7),m()(),it()),t&2){let e=g(2);d(),$(e.message.icon?1:2),d(2),u("pBind",e.ptm("messageText"))("ngClass",e.cx("messageText")),D("data-p",e.dataP),d(),u("pBind",e.ptm("summary"))("ngClass",e.cx("summary")),D("data-p",e.dataP),d(),fe(" ",e.message.summary," "),d(),u("pBind",e.ptm("detail"))("ngClass",e.cx("detail")),D("data-p",e.dataP),d(),Se(e.message.detail)}}function wl(t,o){t&1&&ot(0)}function _l(t,o){if(t&1&&_(0,"span",4),t&2){let e=g(4);M(e.cn(e.cx("closeIcon"),e.message==null?null:e.message.closeIcon)),u("pBind",e.ptm("closeIcon"))}}function Sl(t,o){if(t&1&&ne(0,_l,1,3,"span",17),t&2){let e=g(3);u("ngIf",e.message.closeIcon)}}function kl(t,o){if(t&1&&(oe(),_(0,"svg",18)),t&2){let e=g(3);M(e.cx("closeIcon")),u("pBind",e.ptm("closeIcon")),D("aria-hidden",!0)}}function Tl(t,o){if(t&1){let e=ve();f(0,"div")(1,"button",15),O("click",function(i){q(e);let r=g(2);return Q(r.onCloseIconClick(i))})("keydown.enter",function(i){q(e);let r=g(2);return Q(r.onCloseIconClick(i))}),H(2,Sl,1,1,"span",2)(3,kl,1,4,":svg:svg",16),m()()}if(t&2){let e=g(2);d(),u("pBind",e.ptm("closeButton")),D("class",e.cx("closeButton"))("aria-label",e.closeAriaLabel)("data-p",e.dataP),d(),$(e.message.closeIcon?2:3)}}function Il(t,o){if(t&1&&(f(0,"div",4),ne(1,Cl,8,12,"ng-container",5)(2,wl,1,0,"ng-container",3),H(3,Tl,4,5,"div"),m()),t&2){let e=g();M(e.cn(e.cx("messageContent"),e.message==null?null:e.message.contentStyleClass)),u("pBind",e.ptm("messageContent")),d(),u("ngIf",!e.template),d(),u("ngTemplateOutlet",e.template)("ngTemplateOutletContext",an(7,ul,e.message)),d(),$((e.message==null?null:e.message.closable)!==!1?3:-1)}}var El=["message"],Dl=["headless"];function Ml(t,o){if(t&1){let e=ve();f(0,"p-toastItem",1),O("onClose",function(i){q(e);let r=g();return Q(r.onMessageClose(i))})("onAnimationEnd",function(){q(e);let i=g();return Q(i.onAnimationEnd())})("onAnimationStart",function(){q(e);let i=g();return Q(i.onAnimationStart())}),m()}if(t&2){let e=o.$implicit,n=o.index,i=g();u("message",e)("index",n)("life",i.life)("clearAll",i.clearAllTrigger())("template",i.template||i._template)("headlessTemplate",i.headlessTemplate||i._headlessTemplate)("pt",i.pt)("unstyled",i.unstyled())("motionOptions",i.computedMotionOptions())}}var Bl={root:({instance:t})=>{let{_position:o}=t;return{position:"fixed",top:o==="top-right"||o==="top-left"||o==="top-center"?"20px":o==="center"?"50%":null,right:(o==="top-right"||o==="bottom-right")&&"20px",bottom:(o==="bottom-left"||o==="bottom-right"||o==="bottom-center")&&"20px",left:o==="top-left"||o==="bottom-left"?"20px":o==="center"||o==="top-center"||o==="bottom-center"?"50%":null}}},Ll={root:({instance:t})=>["p-toast p-component",`p-toast-${t._position}`],message:({instance:t})=>({"p-toast-message":!0,"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:t})=>({"p-toast-message-icon":!0,[`pi ${t.message.icon}`]:!!t.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:t})=>({"p-toast-close-icon":!0,[`pi ${t.message.closeIcon}`]:!!t.message.closeIcon})},Fn=(()=>{class t extends re{name="toast";style=zr;classes=Ll;inlineStyles=Bl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var Rr=new X("TOAST_INSTANCE"),Nl=(()=>{class t extends de{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=b();clearAll=b(null);onAnimationStart=Ce();onAnimationEnd=Ce();onBeforeEnter(e){this.onAnimationStart.emit(e.element)}onAfterLeave(e){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(e.element))}onClose=new Me;_componentStyle=c(Fn);timeout;visible=Z(void 0);isDestroyed=!1;isClosing=!1;constructor(e){super(),this.zone=e,J(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=e=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(n){return new(n||t)(zt(tt))};static \u0275cmp=k({type:t,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",Ae],life:[2,"life","life",Ae],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[G([Fn]),L],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(n,i){if(n&1){let r=ve();f(0,"div",1,0),O("pMotionOnBeforeEnter",function(l){return q(r),Q(i.onBeforeEnter(l))})("pMotionOnAfterLeave",function(l){return q(r),Q(i.onAfterLeave(l))})("mouseenter",function(){return q(r),Q(i.onMouseEnter())})("mouseleave",function(){return q(r),Q(i.onMouseLeave())}),H(2,fl,1,5,"ng-container")(3,Il,4,9,"div",2),m()}n&2&&(M(i.cn(i.cx("message"),i.message==null?null:i.message.styleClass)),u("pMotion",i.visible())("pMotionAppear",!0)("pMotionName","p-toast-message")("pMotionOptions",i.motionOptions())("pBind",i.ptm("message")),D("id",i.message==null?null:i.message.id)("data-p",i.dataP),d(2),$(i.headlessTemplate?2:3))},dependencies:[R,pt,ft,mt,Sn,Wo,Uo,kn,Zo,ae,E,Mn,dr],encapsulation:2,changeDetection:0})}return t})(),Bi=(()=>{class t extends de{$pcToast=c(Rr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=b(void 0);computedMotionOptions=w(()=>be(be({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new Me;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=c($t);_componentStyle=c(Fn);styleElement;id=$e("pn_id_");templates;clearAllTrigger=Z(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let n=e.filter(i=>this.canAdd(i));this.add(n)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this._template=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let n=this.key===e.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,e)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,e)),n}containsMessage(e,n){return e?e.find(i=>i.summary===n.summary&&i.detail==n.detail&&i.severity===n.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&bt.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&un(this.messages)&&bt.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",li(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints){let i="";for(let r in this.breakpoints[n])i+=r+":"+this.breakpoints[n][r]+" !important;";e+=`
                    @media screen and (max-width: ${n}) {
                        .p-toast[${this.id}] {
                           ${i}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e),li(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&bt.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=k({type:t,selectors:[["p-toast"]],contentQueries:function(n,i,r){if(n&1&&ut(r,El,5)(r,Dl,5)(r,gt,4),n&2){let s;ye(s=xe())&&(i.template=s.first),ye(s=xe())&&(i.headlessTemplate=s.first),ye(s=xe())&&(i.templates=s)}},hostVars:5,hostBindings:function(n,i){n&2&&(D("data-p",i.dataP),kt(i.sx("root")),M(i.cn(i.cx("root"),i.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",z],baseZIndex:[2,"baseZIndex","baseZIndex",Ae],life:[2,"life","life",Ae],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",z],preventDuplicates:[2,"preventDuplicates","preventDuplicates",z],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[G([Fn,{provide:Rr,useExisting:t},{provide:le,useExisting:t}]),pe([E]),L],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(n,i){n&1&&ne(0,Ml,1,9,"p-toastItem",0),n&2&&u("ngForOf",i.messages)},dependencies:[R,co,Nl,ae],encapsulation:2,changeDetection:0})}return t})(),Vr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[Bi,ae,ae]})}return t})();var On=class t{exportHtml(o,e,n,i,r,s=14){let l=i==="inline"?this.buildInlineHtmlExport(o,e,n,r,s):this.buildSideBySideHtmlExport(o,e,n,r,s);this.downloadFile(`diff-${Date.now()}.html`,l,"text/html;charset=utf-8")}exportImage(o,e,n,i,r,s=14){return i==="inline"?this.renderInlineCanvas(o,e,n,r,s):this.renderSideBySideCanvas(o,e,n,r,s)}renderSideBySideCanvas(o,e,n,i,r){return new Promise((s,l)=>{let a=r+8,p=52,h=8,v=60,T=o.sideBySideRows,C=`${r}px "Courier New", Consolas, monospace`,A=(P,S=!1)=>`${S?"bold ":""}${P}px system-ui, -apple-system, sans-serif`,ue=document.createElement("canvas").getContext("2d");ue.font=C;let se=300;T.forEach(P=>{P.left.type!=="fold"&&(se=Math.max(se,ue.measureText(this.unescapeHtml(P.left.raw??"")).width),se=Math.max(se,ue.measureText(this.unescapeHtml(P.right.raw??"")).width))});let V=Math.max(500,Math.min(se+h*2+16,1600)),W=p*2+V*2,ie=V-h*2,K=(P,S,N)=>{let U=[],ce=[],_e=0,Ge=(me,ge)=>{let Oe=ue.measureText(me).width;_e>0&&_e+Oe>N&&(U.push(ce),ce=[],_e=0);let Re=ce[ce.length-1];Re&&Re.highlight===ge?Re.text+=me:ce.push({text:me,highlight:ge}),_e+=Oe};if(P&&P.length>0)for(let me of P){let ge=me.type==="added"?"added":me.type==="removed"?"removed":void 0;for(let Oe of this.unescapeHtml(me.text))Ge(Oe,ge)}else for(let me of this.unescapeHtml(S??""))Ge(me,void 0);return(ce.length>0||U.length===0)&&U.push(ce),U},Pe=T.map(P=>{if(P.left.type==="fold")return{isFold:!0,foldCount:P.left.foldedCount,leftSegs:[],rightSegs:[],leftType:"fold",rightType:"fold",leftNum:null,rightNum:null,lineCount:1};let S=K(P.left.tokens,P.left.raw??"",ie),N=K(P.right.tokens,P.right.raw??"",ie);return{isFold:!1,leftSegs:S,rightSegs:N,leftType:P.left.type,rightType:P.right.type,leftNum:P.left.lineNumber,rightNum:P.right.lineNumber,lineCount:Math.max(S.length,N.length)}}),Qe=Pe.reduce((P,S)=>P+S.lineCount,0),ze=v+Qe*a+4,je=65535,ke=268435456,we=ze*2<=je&&W*2*ze*2<=ke?2:1;if(ze>je||W*ze>ke){l(new Error("Diff is too large to export as image. Try exporting as HTML instead."));return}let Fe=document.createElement("canvas");Fe.width=W*we,Fe.height=ze*we;let x=Fe.getContext("2d");if(!x){l(new Error("Canvas 2D context not available"));return}x.scale(we,we),x.fillStyle="#ffffff",x.fillRect(0,0,W,ze),x.fillStyle="#f8f9fa",x.fillRect(0,0,W,36),x.fillStyle="#212529",x.font=A(14,!0),x.textBaseline="middle",x.textAlign="left",x.fillText(`${e.name}  \u2194  ${n.name}`,12,18);let y=this.getActiveOptionsSummary(i),Gt=`Side-by-side${y?"  \u2022  "+y:""}`;x.font=A(11),x.fillStyle="#6c757d",x.textAlign="right",x.fillText(Gt,W-12,18),x.textAlign="left",x.fillStyle="#fcfcfc",x.fillRect(0,36,W,20),x.font=A(12),x.textBaseline="middle";let _t=(P,S,N,U)=>{let ce=x.measureText(P).width+14;return x.fillStyle=N,x.fillRect(U,40,ce,14),x.fillStyle=S,x.fillText(P,U+7,47),U+ce+8},We=12;We=_t(`+${o.totalAdded} added`,"#155724","#d4edda",We),We=_t(`-${o.totalRemoved} removed`,"#721c24","#f8d7da",We),We=_t(`~${o.totalModified} modified`,"#856404","#fff3cd",We),_t(`${o.similarityPercent}% similar`,"#444444","#e9ecef",We),x.fillStyle="#dee2e6",x.fillRect(0,55,W,1);let Ze=v;Pe.forEach(P=>{let S=P.lineCount*a,N=Ze;if(P.isFold){x.fillStyle="#e9ecef",x.fillRect(0,N,W,a),x.fillStyle="#868e96",x.font=`italic ${r-1}px system-ui, sans-serif`,x.textAlign="center",x.textBaseline="middle",x.fillText(`\xB7\xB7\xB7 ${P.foldCount??0} unchanged lines \xB7\xB7\xB7`,W/2,N+a/2),x.textAlign="left",Ze+=a;return}let U=(ce,_e,Ge,me)=>{x.fillStyle="#f8f9fa",x.fillRect(me,N,p,S),ce!=null&&(x.fillStyle="#adb5bd",x.font=C,x.textAlign="right",x.textBaseline="middle",x.fillText(String(ce),me+p-6,N+a/2));let ge=this.getBgColor(Ge);x.fillStyle=ge==="transparent"?"#ffffff":ge,x.fillRect(me+p,N,V,S),x.font=C,x.textBaseline="middle",x.textAlign="left",_e.forEach((Oe,Re)=>{let lt=me+p+h,Xn=N+Re*a+a/2;Oe.forEach(Yt=>{let Jn=ue.measureText(Yt.text).width;Yt.highlight==="added"?(x.fillStyle="#acf2bd",x.fillRect(lt,Xn-a/2+2,Jn,a-4)):Yt.highlight==="removed"&&(x.fillStyle="#fdb8c0",x.fillRect(lt,Xn-a/2+2,Jn,a-4)),x.fillStyle="#212529",x.fillText(Yt.text,lt,Xn),lt+=Jn})})};U(P.leftNum,P.leftSegs,P.leftType,0),U(P.rightNum,P.rightSegs,P.rightType,p+V),x.fillStyle="#f0f0f0",x.fillRect(0,N+S-1,W,1),x.fillStyle="#dee2e6",x.fillRect(p+V-1,N,2,S),Ze+=S}),Fe.toBlob(P=>{if(!P){l(new Error("Failed to generate image blob"));return}let S=URL.createObjectURL(P),N=document.createElement("a");N.href=S,N.download=`diff-${Date.now()}.png`,N.style.display="none",document.body.appendChild(N),N.click(),document.body.removeChild(N),setTimeout(()=>URL.revokeObjectURL(S),1e3),s()},"image/png")})}renderInlineCanvas(o,e,n,i,r){return new Promise((s,l)=>{let a=r+8,p=52,h=24,v=8,T=60,C=o.inlineRows,A=`${r}px "Courier New", Consolas, monospace`,Y=(S,N=!1)=>`${N?"bold ":""}${S}px system-ui, -apple-system, sans-serif`,se=document.createElement("canvas").getContext("2d");se.font=A;let V=400;C.forEach(S=>{S.type!=="fold"&&(V=Math.max(V,se.measureText(this.unescapeHtml(S.raw??"")).width))});let W=Math.max(600,Math.min(V+v*2+16,1800)),ie=p+h+W,K=W-v*2,Pe=(S,N,U)=>{let ce=[],_e=[],Ge=0,me=(ge,Oe)=>{let Re=se.measureText(ge).width;Ge>0&&Ge+Re>U&&(ce.push(_e),_e=[],Ge=0);let lt=_e[_e.length-1];lt&&lt.highlight===Oe?lt.text+=ge:_e.push({text:ge,highlight:Oe}),Ge+=Re};if(S&&S.length>0)for(let ge of S){let Oe=ge.type==="added"?"added":ge.type==="removed"?"removed":void 0;for(let Re of this.unescapeHtml(ge.text))me(Re,Oe)}else for(let ge of this.unescapeHtml(N??""))me(ge,void 0);return(_e.length>0||ce.length===0)&&ce.push(_e),ce},Qe=C.map(S=>{if(S.type==="fold")return{isFold:!0,foldCount:S.foldedCount,segs:[],type:"fold",lineNum:null,marker:"",lineCount:1};let N=Pe(S.tokens,S.raw??"",K),U=S.type==="added"?"+":S.type==="removed"?"-":S.type==="modified"?"~":" ";return{isFold:!1,segs:N,type:S.type,lineNum:S.lineNumber,marker:U,lineCount:N.length}}),ze=Qe.reduce((S,N)=>S+N.lineCount,0),je=T+ze*a+4,ke=65535,we=268435456,Fe=je*2<=ke&&ie*2*je*2<=we?2:1;if(je>ke||ie*je>we){l(new Error("Diff is too large to export as image. Try exporting as HTML instead."));return}let x=document.createElement("canvas");x.width=ie*Fe,x.height=je*Fe;let y=x.getContext("2d");if(!y){l(new Error("Canvas 2D context not available"));return}y.scale(Fe,Fe),y.fillStyle="#ffffff",y.fillRect(0,0,ie,je),y.fillStyle="#f8f9fa",y.fillRect(0,0,ie,36),y.fillStyle="#212529",y.font=Y(14,!0),y.textBaseline="middle",y.textAlign="left",y.fillText(`${e.name}  \u2194  ${n.name}`,12,18);let Gt=this.getActiveOptionsSummary(i),_t=`Inline${Gt?"  \u2022  "+Gt:""}`;y.font=Y(11),y.fillStyle="#6c757d",y.textAlign="right",y.fillText(_t,ie-12,18),y.textAlign="left",y.fillStyle="#fcfcfc",y.fillRect(0,36,ie,20),y.font=Y(12),y.textBaseline="middle";let We=(S,N,U,ce)=>{let _e=y.measureText(S).width+14;return y.fillStyle=U,y.fillRect(ce,40,_e,14),y.fillStyle=N,y.fillText(S,ce+7,47),ce+_e+8},Ze=12;Ze=We(`+${o.totalAdded} added`,"#155724","#d4edda",Ze),Ze=We(`-${o.totalRemoved} removed`,"#721c24","#f8d7da",Ze),Ze=We(`~${o.totalModified} modified`,"#856404","#fff3cd",Ze),We(`${o.similarityPercent}% similar`,"#444444","#e9ecef",Ze),y.fillStyle="#dee2e6",y.fillRect(0,55,ie,1);let P=T;Qe.forEach(S=>{let N=S.lineCount*a,U=P;if(S.isFold){y.fillStyle="#e9ecef",y.fillRect(0,U,ie,a),y.fillStyle="#868e96",y.font=`italic ${r-1}px system-ui, sans-serif`,y.textAlign="center",y.textBaseline="middle",y.fillText(`\xB7\xB7\xB7 ${S.foldCount??0} unchanged lines \xB7\xB7\xB7`,ie/2,U+a/2),y.textAlign="left",P+=a;return}y.fillStyle=this.getGutterBgColor(S.type),y.fillRect(0,U,p,N),S.lineNum!=null&&(y.fillStyle="#adb5bd",y.font=A,y.textAlign="right",y.textBaseline="middle",y.fillText(String(S.lineNum),p-6,U+a/2)),y.fillStyle=this.getGutterBgColor(S.type),y.fillRect(p,U,h,N),S.marker.trim()&&(y.fillStyle=this.getMarkerColor(S.type),y.font=Y(13,!0),y.textAlign="center",y.textBaseline="middle",y.fillText(S.marker,p+h/2,U+a/2));let ce=this.getBgColor(S.type);y.fillStyle=ce==="transparent"?"#ffffff":ce,y.fillRect(p+h,U,W,N),y.font=A,y.textBaseline="middle",y.textAlign="left",S.segs.forEach((_e,Ge)=>{let me=p+h+v,ge=U+Ge*a+a/2;_e.forEach(Oe=>{let Re=se.measureText(Oe.text).width;Oe.highlight==="added"?(y.fillStyle="#acf2bd",y.fillRect(me,ge-a/2+2,Re,a-4)):Oe.highlight==="removed"&&(y.fillStyle="#fdb8c0",y.fillRect(me,ge-a/2+2,Re,a-4)),y.fillStyle="#212529",y.fillText(Oe.text,me,ge),me+=Re})}),y.fillStyle="#f0f0f0",y.fillRect(0,U+N-1,ie,1),y.fillStyle="#dee2e6",y.fillRect(p,U,1,N),y.fillRect(p+h,U,1,N),P+=N}),x.toBlob(S=>{if(!S){l(new Error("Failed to generate image blob"));return}let N=URL.createObjectURL(S),U=document.createElement("a");U.href=N,U.download=`diff-${Date.now()}.png`,U.style.display="none",document.body.appendChild(U),U.click(),document.body.removeChild(U),setTimeout(()=>URL.revokeObjectURL(N),1e3),s()},"image/png")})}buildSideBySideHtmlExport(o,e,n,i,r){let s=o.sideBySideRows.map(a=>{if(a.left.type==="fold")return`<tr style="background:#e8e8e8"><td colspan="4" style="padding:4px 8px;text-align:center;color:#666;font-style:italic">... ${a.left.foldedCount??0} unchanged lines ...</td></tr>`;let p=this.getBgColor(a.left.type),h=this.getBgColor(a.right.type),v=a.left.lineNumber??"",T=a.right.lineNumber??"",C=this.renderTokensOrRaw(a.left),A=this.renderTokensOrRaw(a.right);return`<tr>
  <td style="width:40px;text-align:right;padding:2px 8px;color:#999;background:#f5f5f5;border-right:1px solid #ddd;user-select:none;white-space:nowrap">${v}</td>
  <td style="background:${p==="transparent"?"transparent":p};padding:2px 8px;font-family:monospace;white-space:pre-wrap;word-break:break-all;overflow-wrap:break-word">${C}</td>
  <td style="width:40px;text-align:right;padding:2px 8px;color:#999;background:#f5f5f5;border-left:1px solid #ddd;border-right:1px solid #ddd;user-select:none;white-space:nowrap">${T}</td>
  <td style="background:${h==="transparent"?"transparent":h};padding:2px 8px;font-family:monospace;white-space:pre-wrap;word-break:break-all;overflow-wrap:break-word">${A}</td>
</tr>`}).join(`
`),l=this.getActiveOptionsSummary(i);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diff: ${this.escapeHtml(e.name)} vs ${this.escapeHtml(n.name)}</title>
<style>
  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; background: #fff; }
  h1 { font-size: 1.1rem; color: #333; margin-bottom: 4px; }
  .meta { font-size: 0.8rem; color: #888; margin-bottom: 8px; }
  .summary { display: flex; gap: 16px; margin-bottom: 16px; font-size: 0.9rem; }
  .added { color: #155724; background: #d4edda; padding: 2px 8px; border-radius: 4px; }
  .removed { color: #721c24; background: #f8d7da; padding: 2px 8px; border-radius: 4px; }
  .modified { color: #856404; background: #fff3cd; padding: 2px 8px; border-radius: 4px; }
  table { width: 100%; border-collapse: collapse; font-size: ${r}px; table-layout: fixed; }
  td { border-bottom: 1px solid #f0f0f0; vertical-align: top; }
  .mark-add { background: #acf2bd; }
  .mark-del { background: #fdb8c0; }
</style>
</head>
<body>
<h1>Diff: <code>${this.escapeHtml(e.name)}</code> vs <code>${this.escapeHtml(n.name)}</code></h1>
<div class="meta">Side-by-side view${l?" &nbsp;\u2022&nbsp; "+this.escapeHtml(l):""}</div>
<div class="summary">
  <span class="added">+${o.totalAdded} added</span>
  <span class="removed">-${o.totalRemoved} removed</span>
  <span class="modified">~${o.totalModified} modified</span>
  <span>${o.similarityPercent}% similar</span>
</div>
<table>
<thead>
  <tr style="background:#f5f5f5;font-weight:bold">
    <th style="width:40px"></th>
    <th style="padding:4px 8px;text-align:left">${this.escapeHtml(e.name)}</th>
    <th style="width:40px"></th>
    <th style="padding:4px 8px;text-align:left">${this.escapeHtml(n.name)}</th>
  </tr>
</thead>
<tbody>
${s}
</tbody>
</table>
</body>
</html>`}buildInlineHtmlExport(o,e,n,i,r){let s=o.inlineRows.map(a=>{if(a.type==="fold")return`<tr style="background:#e8e8e8"><td colspan="3" style="padding:4px 8px;text-align:center;color:#666;font-style:italic">... ${a.foldedCount??0} unchanged lines ...</td></tr>`;let p=this.getBgColor(a.type),h=a.lineNumber??"",v=this.renderTokensOrRaw(a),T=a.type==="added"?"+":a.type==="removed"?"-":a.type==="modified"?"~":"",C=a.type==="added"?"#155724":a.type==="removed"?"#721c24":a.type==="modified"?"#856404":"#999";return`<tr>
  <td style="width:40px;text-align:right;padding:2px 8px;color:#999;background:#f5f5f5;border-right:1px solid #ddd;user-select:none;white-space:nowrap">${h}</td>
  <td style="width:20px;text-align:center;padding:2px 4px;color:${C};background:#f5f5f5;border-right:1px solid #ddd;user-select:none;font-weight:bold">${T}</td>
  <td style="background:${p==="transparent"?"transparent":p};padding:2px 8px;font-family:monospace;white-space:pre-wrap;word-break:break-all;overflow-wrap:break-word">${v}</td>
</tr>`}).join(`
`),l=this.getActiveOptionsSummary(i);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diff: ${this.escapeHtml(e.name)} vs ${this.escapeHtml(n.name)}</title>
<style>
  body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; background: #fff; }
  h1 { font-size: 1.1rem; color: #333; margin-bottom: 4px; }
  .meta { font-size: 0.8rem; color: #888; margin-bottom: 8px; }
  .summary { display: flex; gap: 16px; margin-bottom: 16px; font-size: 0.9rem; }
  .added { color: #155724; background: #d4edda; padding: 2px 8px; border-radius: 4px; }
  .removed { color: #721c24; background: #f8d7da; padding: 2px 8px; border-radius: 4px; }
  .modified { color: #856404; background: #fff3cd; padding: 2px 8px; border-radius: 4px; }
  table { width: 100%; border-collapse: collapse; font-size: ${r}px; table-layout: fixed; }
  td { border-bottom: 1px solid #f0f0f0; vertical-align: top; }
  .mark-add { background: #acf2bd; }
  .mark-del { background: #fdb8c0; }
</style>
</head>
<body>
<h1>Diff: <code>${this.escapeHtml(e.name)}</code> vs <code>${this.escapeHtml(n.name)}</code></h1>
<div class="meta">Inline view${l?" &nbsp;\u2022&nbsp; "+this.escapeHtml(l):""}</div>
<div class="summary">
  <span class="added">+${o.totalAdded} added</span>
  <span class="removed">-${o.totalRemoved} removed</span>
  <span class="modified">~${o.totalModified} modified</span>
  <span>${o.similarityPercent}% similar</span>
</div>
<table>
<thead>
  <tr style="background:#f5f5f5;font-weight:bold">
    <th style="width:40px"></th>
    <th style="width:20px"></th>
    <th style="padding:4px 8px;text-align:left">${this.escapeHtml(e.name)} &nbsp;\u2194&nbsp; ${this.escapeHtml(n.name)}</th>
  </tr>
</thead>
<tbody>
${s}
</tbody>
</table>
</body>
</html>`}getActiveOptionsSummary(o){let e=[];return o.ignoreWhitespace&&e.push("Ignore whitespace"),o.ignoreCase&&e.push("Ignore case"),o.ignoreBlankLines&&e.push("Ignore blank lines"),o.ignoreComments&&e.push("Ignore comments"),o.trimLines&&e.push("Trim lines"),e.join(" \u2022 ")}getBgColor(o){switch(o){case"added":return"#d4edda";case"removed":return"#f8d7da";case"modified":return"#fff3cd";default:return"transparent"}}getGutterBgColor(o){switch(o){case"added":return"#c3e6cb";case"removed":return"#f5c6cb";case"modified":return"#ffeeba";default:return"#f8f9fa"}}getMarkerColor(o){switch(o){case"added":return"#155724";case"removed":return"#721c24";case"modified":return"#856404";default:return"#999999"}}renderTokensOrRaw(o){return o.tokens&&o.tokens.length>0?o.tokens.map(e=>e.type==="added"?`<span class="mark-add">${e.text}</span>`:e.type==="removed"?`<span class="mark-del">${e.text}</span>`:e.text).join(""):o.highlightedHtml||o.raw||"&nbsp;"}downloadFile(o,e,n){let i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=o,s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(r),1e3)}escapeHtml(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}unescapeHtml(o){return o.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})};function Ol(t,o){if(t&1&&(f(0,"span",12),B(1),m()),t&2){let e=g();d(),ri(" ",e.currentDiffIndex()+1,"/",e.totalDiffBlocks()," ")}}function Al(t,o){if(t&1&&(f(0,"span",15),B(1),m()),t&2){let e=g();d(),ri(" ",e.searchState().currentMatchIndex+1,"/",e.searchState().matchIndices.length," ")}}var An=class t{state=c(De);exportService=c(On);messageService=c($t);imageStatus=Z("idle");imageLabel=w(()=>this.imageStatus()==="done"?"Saved!":"Export Image");diffViewer=b(null);viewOptions=[{label:"Side by Side",value:"side-by-side"},{label:"Inline",value:"inline"}];viewMode=w(()=>this.state.viewMode());options=w(()=>this.state.options());showAllUnchanged=w(()=>this.state.showAllUnchanged());searchState=w(()=>this.state.searchState());searchQuery=w(()=>this.state.searchState().query);diffResult=w(()=>this.state.diffResult());currentDiffIdx=Z(0);diffBlocks=w(()=>{let o=this.state.diffResult();if(!o)return[];let e=[],n=!1,i=0;return o.sideBySideRows.forEach((r,s)=>{let l=r.left.type==="removed"||r.left.type==="modified"||r.right.type==="added";l&&!n&&e.push({sbIdx:s,inlineIdx:i}),i+=r.left.type==="modified"?2:1,n=l}),e});totalDiffBlocks=w(()=>this.diffBlocks().length);currentDiffIndex=w(()=>this.currentDiffIdx());constructor(){J(()=>{this.diffBlocks(),dt(()=>this.currentDiffIdx.set(0))})}onViewModeChange(o){this.state.setViewMode(o)}onSearch(o){let e=o.target.value;this.state.setSearch(e)}nextDiff(){let o=this.diffBlocks();if(o.length===0)return;let e=(this.currentDiffIdx()+1)%o.length;this.currentDiffIdx.set(e),this.scrollToBlock(o[e])}prevDiff(){let o=this.diffBlocks();if(o.length===0)return;let e=(this.currentDiffIdx()-1+o.length)%o.length;this.currentDiffIdx.set(e),this.scrollToBlock(o[e])}scrollToBlock(o){let e=this.state.viewMode()==="side-by-side"?o.sbIdx:o.inlineIdx;this.diffViewer()?.scrollToIndex(e)}onExportHtml(){let o=this.state.diffResult(),e=this.state.leftFile(),n=this.state.rightFile();!o||!e||!n||(this.exportService.exportHtml(o,e,n,this.state.viewMode(),this.state.options(),this.state.fontSize()),this.messageService.add({severity:"success",summary:"Exported",detail:"HTML diff file downloaded",life:2e3}))}async onExportImage(){let o=this.state.diffResult(),e=this.state.leftFile(),n=this.state.rightFile();if(!(!o||!e||!n)){this.imageStatus.set("exporting");try{await this.exportService.exportImage(o,e,n,this.state.viewMode(),this.state.options(),this.state.fontSize()),this.imageStatus.set("done"),this.messageService.add({severity:"success",summary:"Exported",detail:"Diff image downloaded as PNG",life:2e3}),setTimeout(()=>this.imageStatus.set("idle"),2e3)}catch(i){this.imageStatus.set("idle");let r=i instanceof Error?i.message:"Could not generate image";this.messageService.add({severity:"error",summary:"Export failed",detail:r,life:4e3})}}}onKeydown(o){o.altKey&&o.key==="ArrowDown"?(o.preventDefault(),this.nextDiff()):o.altKey&&o.key==="ArrowUp"&&(o.preventDefault(),this.prevDiff())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["p-diff-toolbar"]],hostBindings:function(e,n){e&1&&O("keydown",function(r){return n.onKeydown(r)},Ui)},inputs:{diffViewer:[1,"diffViewer"]},features:[G([$t])],decls:37,vars:21,consts:[[1,"flex","flex-wrap","items-center","gap-3","px-4","py-2","bg-surface-0","dark:bg-surface-900","border","border-surface-200","dark:border-surface-700","rounded-border"],["optionLabel","label","optionValue","value","size","small",3,"ngModelChange","options","ngModel"],["layout","vertical","styleClass","!m-0 !h-6"],[1,"flex","flex-wrap","items-center","gap-3","text-sm"],[1,"flex","items-center","gap-1.5","cursor-pointer"],["inputId","ignoreWS",3,"ngModelChange","binary","ngModel"],["inputId","ignoreCase",3,"ngModelChange","binary","ngModel"],["inputId","ignoreBlank",3,"ngModelChange","binary","ngModel"],["inputId","wordDiff",3,"ngModelChange","binary","ngModel"],[1,"flex","items-center","gap-1"],["icon","pi pi-angle-up","severity","secondary","size","small","pTooltip","Previous diff (Alt+\u2191)","tooltipPosition","top","aria-label","Previous diff",3,"onClick","text"],["icon","pi pi-angle-down","severity","secondary","size","small","pTooltip","Next diff (Alt+\u2193)","tooltipPosition","top","aria-label","Next diff",3,"onClick","text"],[1,"text-xs","text-surface-400","px-1"],[1,"pi","pi-search"],["pInputText","","type","text","size","small","placeholder","Search... (Ctrl+F)","aria-label","Search in diff",1,"!text-sm",2,"width","180px",3,"input","value"],[1,"text-xs","text-surface-500"],[1,"ml-auto","flex","items-center","gap-1"],["icon","pi pi-file-export","label","Export HTML","severity","primary","size","small","pTooltip","Download diff as self-contained HTML file","tooltipPosition","top",3,"onClick","outlined"],["icon","pi pi-image","severity","secondary","size","small","pTooltip","Download diff as PNG image","tooltipPosition","top",3,"onClick","label","outlined","loading"],["icon","pi pi-arrows-h","label","Swap","severity","secondary","size","small","pTooltip","Swap left and right",3,"onClick","outlined"],["icon","pi pi-times","label","Clear all","severity","danger","size","small","pTooltip","Clear all and start over",3,"onClick","outlined"],["position","bottom-right"]],template:function(e,n){e&1&&(f(0,"div",0)(1,"p-selectbutton",1),O("ngModelChange",function(r){return n.onViewModeChange(r)}),m(),_(2,"p-divider",2),f(3,"div",3)(4,"label",4)(5,"p-checkbox",5),O("ngModelChange",function(r){return n.state.updateOptions({ignoreWhitespace:r})}),m(),f(6,"span"),B(7,"Ignore whitespace"),m()(),f(8,"label",4)(9,"p-checkbox",6),O("ngModelChange",function(r){return n.state.updateOptions({ignoreCase:r})}),m(),f(10,"span"),B(11,"Ignore case"),m()(),f(12,"label",4)(13,"p-checkbox",7),O("ngModelChange",function(r){return n.state.updateOptions({ignoreBlankLines:r})}),m(),f(14,"span"),B(15,"Ignore blank lines"),m()(),f(16,"label",4)(17,"p-checkbox",8),O("ngModelChange",function(r){return n.state.updateOptions({wordDiff:r})}),m(),f(18,"span"),B(19,"Word diff"),m()()(),_(20,"p-divider",2),f(21,"div",9)(22,"p-button",10),O("onClick",function(){return n.prevDiff()}),m(),f(23,"p-button",11),O("onClick",function(){return n.nextDiff()}),m(),H(24,Ol,2,2,"span",12),m(),_(25,"p-divider",2),f(26,"p-iconfield"),_(27,"p-inputicon",13),f(28,"input",14),O("input",function(r){return n.onSearch(r)}),m()(),H(29,Al,2,2,"span",15),f(30,"div",16)(31,"p-button",17),O("onClick",function(){return n.onExportHtml()}),m(),f(32,"p-button",18),O("onClick",function(){return n.onExportImage()}),m(),_(33,"p-divider",2),f(34,"p-button",19),O("onClick",function(){return n.state.swapFiles()}),m(),f(35,"p-button",20),O("onClick",function(){return n.state.clearAll()}),m()()(),_(36,"p-toast",21)),e&2&&(d(),u("options",n.viewOptions)("ngModel",n.viewMode()),d(4),u("binary",!0)("ngModel",n.options().ignoreWhitespace),d(4),u("binary",!0)("ngModel",n.options().ignoreCase),d(4),u("binary",!0)("ngModel",n.options().ignoreBlankLines),d(4),u("binary",!0)("ngModel",n.options().wordDiff),d(5),u("text",!0),d(),u("text",!0),d(),$(n.diffResult()?24:-1),d(4),u("value",n.searchQuery()),d(),$(n.searchState().matchIndices.length>0?29:-1),d(2),u("outlined",!0),d(),u("label",n.imageLabel())("outlined",!0)("loading",n.imageStatus()==="exporting"),d(2),u("outlined",!0),d(),u("outlined",!0))},dependencies:[R,mn,pn,fn,Lt,Ct,Eo,Io,Cr,Ln,Tr,kr,Ft,Nt,Nn,qt,Fr,Di,Pr,Mi,Vr,Bi],encapsulation:2})};function Pl(t,o){if(t&1){let e=ve();f(0,"p-button",16),O("onClick",function(){q(e);let i=g(2);return Q(i.state.toggleShowAllUnchanged())}),m()}if(t&2){let e=g(2);u("icon",e.showAllUnchanged()?"pi pi-eye-slash":"pi pi-eye")("label",e.showAllUnchanged()?"Hide unchanged":"Show unchanged")("text",!0)("pTooltip",e.showAllUnchanged()?"Collapse unchanged lines":"Expand all unchanged lines")}}function zl(t,o){if(t&1){let e=ve();f(0,"div",0)(1,"div",1)(2,"span",2),B(3),m()(),f(4,"div",1)(5,"span",3),B(6),m()(),f(7,"div",1)(8,"span",4),B(9),m()(),f(10,"div",1)(11,"span",5),B(12),m()(),_(13,"p-divider",6),f(14,"div",1)(15,"div",7),_(16,"div",8),m(),f(17,"span",9),B(18),m()(),H(19,Pl,1,4,"p-button",10),f(20,"div",11)(21,"p-button",12),O("onClick",function(){q(e);let i=g();return Q(i.state.decreaseFontSize())}),m(),f(22,"span",13),B(23),m(),f(24,"p-button",14),O("onClick",function(){q(e);let i=g();return Q(i.state.increaseFontSize())}),m()(),f(25,"div",15),B(26),m()()}if(t&2){let e=g();d(3),fe(" +",e.summary().totalAdded," added "),d(3),fe(" -",e.summary().totalRemoved," removed "),d(3),fe(" ~",e.summary().totalModified," modified "),d(3),fe(" ",e.summary().totalUnchanged," unchanged "),d(4),He("width",e.summary().similarityPercent,"%"),d(2),fe(" ",e.summary().similarityPercent,"% similar "),d(),$(e.summary().totalUnchanged>0?19:-1),d(2),u("text",!0)("disabled",e.state.fontSize()<=10),d(2),fe("",e.state.fontSize(),"px"),d(),u("text",!0)("disabled",e.state.fontSize()>=22),d(2),fe(" Total: ",e.summary().total," lines ")}}var Pn=class t{state=c(De);showAllUnchanged=w(()=>this.state.showAllUnchanged());summary=w(()=>{let o=this.state.diffResult();return o?{totalAdded:o.totalAdded,totalRemoved:o.totalRemoved,totalModified:o.totalModified,totalUnchanged:o.totalUnchanged,similarityPercent:o.similarityPercent,total:o.totalAdded+o.totalRemoved+o.totalModified+o.totalUnchanged}:null});static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["p-diff-summary"]],decls:1,vars:1,consts:[[1,"flex","flex-wrap","items-center","gap-4","px-4","py-2","bg-surface-50","dark:bg-surface-800","rounded-border","border","border-surface-200","dark:border-surface-700","text-sm"],[1,"flex","items-center","gap-1.5"],[1,"inline-flex","items-center","gap-1","px-2","py-0.5","rounded","text-xs","font-semibold","bg-green-100","dark:bg-green-900","text-green-700","dark:text-green-300"],[1,"inline-flex","items-center","gap-1","px-2","py-0.5","rounded","text-xs","font-semibold","bg-red-100","dark:bg-red-900","text-red-700","dark:text-red-300"],[1,"inline-flex","items-center","gap-1","px-2","py-0.5","rounded","text-xs","font-semibold","bg-yellow-100","dark:bg-yellow-900","text-yellow-700","dark:text-yellow-300"],[1,"inline-flex","items-center","gap-1","px-2","py-0.5","rounded","text-xs","font-semibold","bg-surface-200","dark:bg-surface-700","text-surface-600","dark:text-surface-300"],["layout","vertical","styleClass","!m-0 !h-4"],[1,"w-24","h-2","bg-surface-200","dark:bg-surface-600","rounded-full","overflow-hidden"],[1,"h-full","bg-primary","rounded-full","transition-all"],[1,"text-surface-600","dark:text-surface-300","font-medium"],["severity","secondary","size","small","tooltipPosition","top",3,"icon","label","text","pTooltip"],[1,"flex","items-center","gap-0.5"],["icon","pi pi-minus","severity","secondary","size","small","pTooltip","Decrease font size","tooltipPosition","top","aria-label","Decrease font size",3,"onClick","text","disabled"],[1,"text-xs","text-surface-500","w-10","text-center","font-mono","select-none"],["icon","pi pi-plus","severity","secondary","size","small","pTooltip","Increase font size","tooltipPosition","top","aria-label","Increase font size",3,"onClick","text","disabled"],[1,"ml-auto","text-xs","text-surface-400"],["severity","secondary","size","small","tooltipPosition","top",3,"onClick","icon","label","text","pTooltip"]],template:function(e,n){e&1&&H(0,zl,27,14,"div",0),e&2&&$(n.summary()?0:-1)},dependencies:[R,_n,Lt,Ct,Nn,qt,Ft,Nt],encapsulation:2})};function Qt(t,o=0){return Rl(t)?Number(t):arguments.length===2?o:0}function Rl(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Hr(t){return t instanceof yt?t.nativeElement:t}var Li;try{Li=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Li=!1}var zn=(()=>{class t{_platformId=c(tn);isBrowser=this._platformId?xt(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Li)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vl=new X("cdk-dir-doc",{providedIn:"root",factory:()=>c(St)}),Hl=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function $l(t){let o=t?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?Hl.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var $r=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Z("ltr");change=new Me;constructor(){let e=c(Vl,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set($l(n||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Je=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Je||{}),Rn,wt;function jr(){if(wt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return wt=!1,wt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)wt=!0;else{let t=Element.prototype.scrollTo;t?wt=!/\{\s*\[native code\]\s*\}/.test(t.toString()):wt=!1}}return wt}function Ot(){if(typeof document!="object"||!document)return Je.NORMAL;if(Rn==null){let t=document.createElement("div"),o=t.style;t.dir="rtl",o.width="1px",o.overflow="auto",o.visibility="hidden",o.pointerEvents="none",o.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),Rn=Je.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Rn=t.scrollLeft===0?Je.NEGATED:Je.INVERTED),t.remove()}return Rn}var Ni=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({})}return t})();var Vn=class{};function Wr(t){return t&&typeof t.connect=="function"&&!(t instanceof Ai)}var Hn=class extends Vn{_data;constructor(o){super(),this._data=o}connect(){return Xt(this._data)?this._data:Pt(this._data)}disconnect(){}},Zt=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(Zt||{}),$n=class{viewCacheSize=20;_viewCache=[];applyChanges(o,e,n,i,r){o.forEachOperation((s,l,a)=>{let p,h;if(s.previousIndex==null){let v=()=>n(s,l,a);p=this._insertView(v,a,e,i(s)),h=p?Zt.INSERTED:Zt.REPLACED}else a==null?(this._detachAndCacheView(l,e),h=Zt.REMOVED):(p=this._moveView(l,a,e,i(s)),h=Zt.MOVED);r&&r({context:p?.context,operation:h,record:s})})}detach(){for(let o of this._viewCache)o.destroy();this._viewCache=[]}_insertView(o,e,n,i){let r=this._insertViewFromCache(e,n);if(r){r.context.$implicit=i;return}let s=o();return n.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(o,e){let n=e.detach(o);this._maybeCacheView(n,e)}_moveView(o,e,n,i){let r=n.get(o);return n.move(r,e),r.context.$implicit=i,r}_maybeCacheView(o,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(o);else{let n=e.indexOf(o);n===-1?o.destroy():e.remove(n)}}_insertViewFromCache(o,e){let n=this._viewCache.pop();return n&&e.insert(n,o),n||null}};var jl=["contentWrapper"],Wl=["*"],Zr=new X("VIRTUAL_SCROLL_STRATEGY"),Fi=class{_scrolledIndexChange=new Ue;scrolledIndexChange=this._scrolledIndexChange.pipe(ni());_viewport=null;_itemSize;_minBufferPx;_maxBufferPx;constructor(o,e,n){this._itemSize=o,this._minBufferPx=e,this._maxBufferPx=n}attach(o){this._viewport=o,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(o,e,n){n<e,this._itemSize=o,this._minBufferPx=e,this._maxBufferPx=n,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(o,e){this._viewport&&this._viewport.scrollToOffset(o*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;let o=this._viewport.getRenderedRange(),e={start:o.start,end:o.end},n=this._viewport.getViewportSize(),i=this._viewport.getDataLength(),r=this._viewport.measureScrollOffset(),s=this._itemSize>0?r/this._itemSize:0;if(e.end>i){let a=Math.ceil(n/this._itemSize),p=Math.max(0,Math.min(s,i-a));s!=p&&(s=p,r=p*this._itemSize,e.start=Math.floor(s)),e.end=Math.max(0,Math.min(i,e.start+a))}let l=r-e.start*this._itemSize;if(l<this._minBufferPx&&e.start!=0){let a=Math.ceil((this._maxBufferPx-l)/this._itemSize);e.start=Math.max(0,e.start-a),e.end=Math.min(i,Math.ceil(s+(n+this._minBufferPx)/this._itemSize))}else{let a=e.end*this._itemSize-(r+n);if(a<this._minBufferPx&&e.end!=i){let p=Math.ceil((this._maxBufferPx-a)/this._itemSize);p>0&&(e.end=Math.min(i,e.end+p),e.start=Math.max(0,Math.floor(s-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(Math.round(this._itemSize*e.start)),this._scrolledIndexChange.next(Math.floor(s))}};function Ul(t){return t._scrollStrategy}var jn=(()=>{class t{get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=Qt(e)}_itemSize=20;get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=Qt(e)}_minBufferPx=100;get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=Qt(e)}_maxBufferPx=200;_scrollStrategy=new Fi(this.itemSize,this.minBufferPx,this.maxBufferPx);ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Te({type:t,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[G([{provide:Zr,useFactory:Ul,deps:[en(()=>t)]}]),Wi]})}return t})(),ql=20,Ql=(()=>{class t{_ngZone=c(tt);_platform=c(zn);_renderer=c(oi).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new Ue;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ql){return this._platform.isBrowser?new ei(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(Jt(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Pt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let i=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(ti(r=>!r||i.indexOf(r)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,e)&&n.push(r)}),n}_scrollableContainsElement(e,n){let i=Hr(n),r=e.getElementRef().nativeElement;do if(i==r)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gr=(()=>{class t{elementRef=c(yt);scrollDispatcher=c(Ql);ngZone=c(tt);dir=c($r,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Ue;_renderer=c(Zi);_cleanupScroll;_elementScrolled=new Ue;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),i&&Ot()!=Je.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),Ot()==Je.INVERTED?e.left=e.right:Ot()==Je.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;jr()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",i="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?i:n:e=="end"&&(e=s?n:i),s&&Ot()==Je.INVERTED?e==n?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&Ot()==Je.NEGATED?e==n?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==n?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Te({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),Zl=20,Gl=(()=>{class t{_platform=c(zn);_listeners;_viewportSize=null;_change=new Ue;_document=c(St);constructor(){let e=c(tt),n=c(oi).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=r=>this._change.next(r);this._listeners=[n.listen("window","resize",i),n.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+n,height:i,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),i=e.documentElement,r=i.getBoundingClientRect(),s=-r.top||e.body?.scrollTop||n.scrollY||i.scrollTop||0,l=-r.left||e.body?.scrollLeft||n.scrollX||i.scrollLeft||0;return{top:s,left:l}}change(e=Zl){return e>0?this._change.pipe(Jt(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=F({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ur=new X("VIRTUAL_SCROLLABLE"),Yl=(()=>{class t extends Gr{constructor(){super()}measureViewportSize(e){let n=this.elementRef.nativeElement;return e==="horizontal"?n.clientWidth:n.clientHeight}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Te({type:t,features:[L]})}return t})();function Xl(t,o){return t.start==o.start&&t.end==o.end}var Jl=typeof requestAnimationFrame<"u"?zi:Pi,Yr=new X("CDK_VIRTUAL_SCROLL_VIEWPORT"),Wn=(()=>{class t extends Yl{elementRef=c(yt);_changeDetectorRef=c(ao);_scrollStrategy=c(Zr,{optional:!0});scrollable=c(Ur,{optional:!0});_platform=c(zn);_detachedSubject=new Ue;_renderedRangeSubject=new Ue;_renderedContentOffsetSubject=new Ue;get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}_orientation="vertical";appendOnly=!1;scrolledIndexChange=new ei(e=>this._scrollStrategy.scrolledIndexChange.subscribe(n=>Promise.resolve().then(()=>this.ngZone.run(()=>e.next(n)))));_contentWrapper;renderedRangeStream=this._renderedRangeSubject;renderedContentOffset=this._renderedContentOffsetSubject.pipe(ti(e=>e!==null),ni());_totalContentSize=0;_totalContentWidth=Z("");_totalContentHeight=Z("");_renderedContentTransform;_renderedRange={start:0,end:0};_dataLength=0;_viewportSize=0;_forOf=null;_renderedContentOffset=0;_renderedContentOffsetNeedsRewrite=!1;_changeDetectionNeeded=Z(!1);_runAfterChangeDetection=[];_viewportChanges=Oi.EMPTY;_injector=c($i);_isDestroyed=!1;constructor(){super();let e=c(Gl);this._scrollStrategy,this._viewportChanges=e.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this);let n=J(()=>{this._changeDetectionNeeded()&&this._doChangeDetection()},{injector:c(Gi).injector});c(ji).onDestroy(()=>void n.destroy())}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe(ii(null),Jt(0,Jl),Kt(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),this._isDestroyed=!0,super.ngOnDestroy()}attach(e){this._forOf,this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe(Kt(this._detachedSubject)).subscribe(n=>{let i=n.length;i!==this._dataLength&&(this._dataLength=i,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){Xl(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,n="to-start"){e=this.appendOnly&&n==="to-start"?0:e;let i=this.dir&&this.dir.value=="rtl",r=this.orientation=="horizontal",s=r?"X":"Y",a=`translate${s}(${Number((r&&i?-1:1)*e)}px)`;this._renderedContentOffset=e,n==="to-end"&&(a+=` translate${s}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=a&&(this._renderedContentTransform=a,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,n="auto"){let i={behavior:n};this.orientation==="horizontal"?i.start=e:i.top=e,this.scrollable.scrollTo(i)}scrollToIndex(e,n="auto"){this._scrollStrategy.scrollToIndex(e,n)}measureScrollOffset(e){let n;return this.scrollable==this?n=i=>super.measureScrollOffset(i):n=i=>this.scrollable.measureScrollOffset(i),Math.max(0,n(e??(this.orientation==="horizontal"?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let n,i="left",r="right",s=this.dir?.value=="rtl";e=="start"?n=s?r:i:e=="end"?n=s?i:r:e?n=e:n=this.orientation==="horizontal"?"left":"top";let l=this.scrollable.measureBoundingClientRectWithScrollOffset(n);return this.elementRef.nativeElement.getBoundingClientRect()[n]-l}measureRenderedContentSize(){let e=this._contentWrapper.nativeElement;return this.orientation==="horizontal"?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),!dt(this._changeDetectionNeeded)&&this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this.ngZone.run(()=>{this._changeDetectionNeeded.set(!0)})})})}_doChangeDetection(){this._isDestroyed||this.ngZone.run(()=>{this._changeDetectorRef.markForCheck(),this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart()),qi(()=>{this._changeDetectionNeeded.set(!1);let e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(let n of e)n()},{injector:this._injector})})}_calculateSpacerSize(){this._totalContentHeight.set(this.orientation==="horizontal"?"":`${this._totalContentSize}px`),this._totalContentWidth.set(this.orientation==="horizontal"?`${this._totalContentSize}px`:"")}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=k({type:t,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(n,i){if(n&1&&rn(jl,7),n&2){let r;ye(r=xe())&&(i._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(n,i){n&2&&rt("cdk-virtual-scroll-orientation-horizontal",i.orientation==="horizontal")("cdk-virtual-scroll-orientation-vertical",i.orientation!=="horizontal")},inputs:{orientation:"orientation",appendOnly:[2,"appendOnly","appendOnly",z]},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[G([{provide:Gr,useFactory:()=>c(Ur,{optional:!0})||c(t)},{provide:Yr,useExisting:t}]),L],ngContentSelectors:Wl,decls:4,vars:4,consts:[["contentWrapper",""],[1,"cdk-virtual-scroll-content-wrapper"],[1,"cdk-virtual-scroll-spacer"]],template:function(n,i){n&1&&(Ie(),Be(0,"div",1,0),Ee(2),Le(),he(3,"div",2)),n&2&&(d(3),He("width",i._totalContentWidth())("height",i._totalContentHeight()))},styles:[`cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}
`],encapsulation:2,changeDetection:0})}return t})();function qr(t,o,e){let n=e;if(!n.getBoundingClientRect)return 0;let i=n.getBoundingClientRect();return t==="horizontal"?o==="start"?i.left:i.right:o==="start"?i.top:i.bottom}var Un=(()=>{class t{_viewContainerRef=c(on);_template=c(Qi);_differs=c(lo);_viewRepeater=new $n;_viewport=c(Yr,{skipSelf:!0});viewChange=new Ue;_dataSourceChanges=new Ue;get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,Wr(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new Hn(Xt(e)?e:Array.from(e||[])))}_cdkVirtualForOf;get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(n,i)=>e(n+(this._renderedRange?this._renderedRange.start:0),i):void 0}_cdkVirtualForTrackBy;set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=Qt(e)}dataStream=this._dataSourceChanges.pipe(ii(null),Ri(),Hi(([e,n])=>this._changeDataSource(e,n)),Vi(1));_differ=null;_data=[];_renderedItems=[];_renderedRange={start:0,end:0};_needsUpdate=!1;_destroyed=new Ue;constructor(){let e=c(tt);this.dataStream.subscribe(n=>{this._data=n,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(Kt(this._destroyed)).subscribe(n=>{this._renderedRange=n,this.viewChange.observers.length&&e.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,n){if(e.start>=e.end)return 0;e.start<this._renderedRange.start||e.end>this._renderedRange.end;let i=e.start-this._renderedRange.start,r=e.end-e.start,s,l;for(let a=0;a<r;a++){let p=this._viewContainerRef.get(a+i);if(p&&p.rootNodes.length){s=l=p.rootNodes[0];break}}for(let a=r-1;a>-1;a--){let p=this._viewContainerRef.get(a+i);if(p&&p.rootNodes.length){l=p.rootNodes[p.rootNodes.length-1];break}}return s&&l?qr(n,"end",l)-qr(n,"start",s):0}ngDoCheck(){if(this._differ&&this._needsUpdate){let e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,n)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,n):n)),this._needsUpdate=!0)}_changeDataSource(e,n){return e&&e.disconnect(this),this._needsUpdate=!0,n?n.connect(this):Pt()}_updateContext(){let e=this._data.length,n=this._viewContainerRef.length;for(;n--;){let i=this._viewContainerRef.get(n);i.context.index=this._renderedRange.start+n,i.context.count=e,this._updateComputedContextProperties(i.context),i.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(r,s,l)=>this._getEmbeddedViewArgs(r,l),r=>r.item),e.forEachIdentityChange(r=>{let s=this._viewContainerRef.get(r.currentIndex);s.context.$implicit=r.item});let n=this._data.length,i=this._viewContainerRef.length;for(;i--;){let r=this._viewContainerRef.get(i);r.context.index=this._renderedRange.start+i,r.context.count=n,this._updateComputedContextProperties(r.context)}}_updateComputedContextProperties(e){e.first=e.index===0,e.last=e.index===e.count-1,e.even=e.index%2===0,e.odd=!e.even}_getEmbeddedViewArgs(e,n){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:n}}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)};static \u0275dir=Te({type:t,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"}})}return t})();var Qr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({})}return t})(),qn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=te({type:t});static \u0275inj=ee({imports:[Ni,Qr,Ni,Qr]})}return t})();function Kl(t,o){t&1&&(f(0,"span"),B(1,"\xB7\xB7\xB7"),m())}function ed(t,o){if(t&1&&B(0),t&2){let e=g();fe(" ",e.line().lineNumber??""," ")}}function td(t,o){if(t&1&&(f(0,"span",4),B(1),m()),t&2){let e=g();d(),fe(" ... ",e.line().foldedCount," unchanged lines ... ")}}function nd(t,o){if(t&1&&(f(0,"span",6),B(1),m()),t&2){let e=o.$implicit,n=g(2);u("ngClass",n.tokenClass(e)),d(),Se(e.text)}}function id(t,o){if(t&1&&Ki(0,nd,2,2,"span",6,Ji),t&2){let e=g();eo(e.line().tokens)}}function od(t,o){if(t&1&&_(0,"span",5),t&2){let e=g();u("innerHTML",e.highlightedContent(),nn)}}function rd(t,o){t&1&&(f(0,"span"),B(1,"\xA0"),m())}var At=class t{line=b.required();searchQuery=b("");fontSize=b(14);lineHeight=b(24);hasTokens=w(()=>{let o=this.line().tokens;return o!==null&&o.length>0});rowClass=w(()=>{let o=this.line().type;return{"bg-green-50 dark:bg-green-950":o==="added","bg-red-50 dark:bg-red-950":o==="removed","bg-yellow-50 dark:bg-yellow-950":o==="modified","bg-surface-0 dark:bg-surface-900":o==="unchanged","bg-surface-100 dark:bg-surface-800":o==="fold","border-b border-surface-100 dark:border-surface-800":o!=="fold"}});gutterClass=w(()=>{let o=this.line().type;return{"bg-green-100 dark:bg-green-900":o==="added","bg-red-100 dark:bg-red-900":o==="removed","bg-yellow-100 dark:bg-yellow-900":o==="modified","bg-surface-50 dark:bg-surface-800":o==="unchanged","bg-surface-100 dark:bg-surface-700":o==="fold"}});markerClass=w(()=>{let o=this.line().type;return{"text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900":o==="added","text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900":o==="removed","text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900":o==="modified","text-surface-400 bg-surface-50 dark:bg-surface-800":o==="unchanged","bg-surface-100 dark:bg-surface-700":o==="fold"}});marker=w(()=>{switch(this.line().type){case"added":return"+";case"removed":return"-";case"modified":return"~";default:return""}});highlightedContent=w(()=>{let o=this.line().highlightedHtml||"&nbsp;",e=this.searchQuery();if(!e||!o)return o;let n=this.escapeRegex(this.escapeHtml(e));return o.replace(new RegExp(`(${n})`,"gi"),'<mark class="bg-yellow-300 dark:bg-yellow-600 rounded">$1</mark>')});tokenClass(o){return{"bg-green-200 dark:bg-green-800 rounded-sm":o.type==="added","bg-red-200 dark:bg-red-800 line-through rounded-sm":o.type==="removed"}}escapeHtml(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}escapeRegex(o){return o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["p-diff-line"]],inputs:{line:[1,"line"],searchQuery:[1,"searchQuery"],fontSize:[1,"fontSize"],lineHeight:[1,"lineHeight"]},decls:11,vars:12,consts:[[1,"flex","min-w-max","font-mono","select-text","group",3,"ngClass"],[1,"w-10","shrink-0","text-right","pr-2","text-xs","text-surface-400","dark:text-surface-500","select-none","border-r","border-surface-200","dark:border-surface-700","py-0.5",3,"ngClass"],[1,"w-5","shrink-0","text-center","text-xs","font-bold","py-0.5","select-none",3,"ngClass"],[1,"flex-1","px-2","py-0.5","whitespace-pre"],[1,"text-surface-500","dark:text-surface-400","italic","text-xs"],[3,"innerHTML"],[3,"ngClass"]],template:function(e,n){e&1&&(f(0,"div",0)(1,"div",1),H(2,Kl,2,0,"span")(3,ed,1,1),m(),f(4,"div",2),B(5),m(),f(6,"div",3),H(7,td,2,1,"span",4)(8,id,2,0)(9,od,1,1,"span",5)(10,rd,2,0,"span"),m()()),e&2&&(He("font-size",n.fontSize(),"px")("line-height",n.lineHeight(),"px")("min-height",n.lineHeight(),"px"),u("ngClass",n.rowClass()),d(),u("ngClass",n.gutterClass()),d(),$(n.line().type==="fold"?2:3),d(2),u("ngClass",n.markerClass()),d(),fe(" ",n.marker()," "),d(2),$(n.line().type==="fold"?7:n.hasTokens()?8:n.line().highlightedHtml?9:10))},dependencies:[R,pt],encapsulation:2})};var sd=["leftViewport"],ad=["rightViewport"];function ld(t,o){if(t&1&&_(0,"p-diff-line",8),t&2){let e=o.$implicit,n=g();u("line",e.left)("searchQuery",n.searchQuery())("fontSize",n.state.fontSize())("lineHeight",n.state.lineHeight())}}function dd(t,o){if(t&1&&_(0,"p-diff-line",8),t&2){let e=o.$implicit,n=g();u("line",e.right)("searchQuery",n.searchQuery())("fontSize",n.state.fontSize())("lineHeight",n.state.lineHeight())}}var Qn=class t{state=c(De);leftViewport=qe.required("leftViewport");rightViewport=qe.required("rightViewport");rows=w(()=>this.state.diffResult()?.sideBySideRows??[]);leftName=w(()=>this.state.leftFile()?.name??"Code A");rightName=w(()=>this.state.rightFile()?.name??"Code B");searchQuery=w(()=>this.state.searchState().query);syncing=!1;leftScrollListener=null;rightScrollListener=null;ngAfterViewInit(){let o=this.leftViewport().elementRef.nativeElement,e=this.rightViewport().elementRef.nativeElement;this.leftScrollListener=()=>{if(this.syncing)return;this.syncing=!0;let n=o.scrollTop/(o.scrollHeight-o.clientHeight||1);e.scrollTop=n*(e.scrollHeight-e.clientHeight),this.state.setScrollRatio(n),this.syncing=!1},this.rightScrollListener=()=>{if(this.syncing)return;this.syncing=!0;let n=e.scrollTop/(e.scrollHeight-e.clientHeight||1);o.scrollTop=n*(o.scrollHeight-o.clientHeight),this.state.setScrollRatio(n),this.syncing=!1},o.addEventListener("scroll",this.leftScrollListener),e.addEventListener("scroll",this.rightScrollListener)}ngOnDestroy(){let o=this.leftViewport().elementRef.nativeElement,e=this.rightViewport().elementRef.nativeElement;this.leftScrollListener&&o.removeEventListener("scroll",this.leftScrollListener),this.rightScrollListener&&e.removeEventListener("scroll",this.rightScrollListener)}trackRow(o,e){return e.index}scrollToIndex(o){this.leftViewport().scrollToIndex(o,"smooth"),this.rightViewport().scrollToIndex(o,"smooth")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["p-side-by-side-view"]],viewQuery:function(e,n){e&1&&Ke(n.leftViewport,sd,5)(n.rightViewport,ad,5),e&2&&Ye(2)},decls:13,vars:8,consts:[["leftViewport",""],["rightViewport",""],[1,"flex","h-full","border","border-surface-200","dark:border-surface-700","rounded-border","overflow-hidden"],[1,"flex-1","flex","flex-col","min-w-0","border-r","border-surface-200","dark:border-surface-700"],[1,"px-3","py-1.5","bg-surface-50","dark:bg-surface-800","border-b","border-surface-200","dark:border-surface-700","text-xs","font-medium","text-surface-600","dark:text-surface-300","truncate"],[1,"flex-1","overflow-auto",3,"itemSize"],[3,"line","searchQuery","fontSize","lineHeight",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],[1,"flex-1","flex","flex-col","min-w-0"],[3,"line","searchQuery","fontSize","lineHeight"]],template:function(e,n){e&1&&(f(0,"div",2)(1,"div",3)(2,"div",4),B(3),m(),f(4,"cdk-virtual-scroll-viewport",5,0),ne(6,ld,1,4,"p-diff-line",6),m()(),f(7,"div",7)(8,"div",4),B(9),m(),f(10,"cdk-virtual-scroll-viewport",5,1),ne(12,dd,1,4,"p-diff-line",6),m()()()),e&2&&(d(3),fe(" ",n.leftName()," "),d(),u("itemSize",n.state.lineHeight()),d(2),u("cdkVirtualForOf",n.rows())("cdkVirtualForTrackBy",n.trackRow),d(3),fe(" ",n.rightName()," "),d(),u("itemSize",n.state.lineHeight()),d(2),u("cdkVirtualForOf",n.rows())("cdkVirtualForTrackBy",n.trackRow))},dependencies:[R,qn,jn,Un,Wn,At],encapsulation:2})};var cd=["viewport"];function ud(t,o){if(t&1&&_(0,"p-diff-line",6),t&2){let e=o.$implicit,n=g();u("line",e)("searchQuery",n.searchQuery())("fontSize",n.state.fontSize())("lineHeight",n.state.lineHeight())}}var Zn=class t{state=c(De);viewport=qe.required("viewport");rows=w(()=>this.state.diffResult()?.inlineRows??[]);leftName=w(()=>this.state.leftFile()?.name??"Code A");rightName=w(()=>this.state.rightFile()?.name??"Code B");searchQuery=w(()=>this.state.searchState().query);onScroll(o){let e=this.viewport().elementRef.nativeElement,n=e.scrollTop/(e.scrollHeight-e.clientHeight||1);this.state.setScrollRatio(n)}trackLine(o,e){return o}scrollToIndex(o){this.viewport().scrollToIndex(o,"smooth")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["p-inline-view"]],viewQuery:function(e,n){e&1&&Ke(n.viewport,cd,5),e&2&&Ye()},decls:11,vars:5,consts:[["viewport",""],[1,"flex","flex-col","h-full","border","border-surface-200","dark:border-surface-700","rounded-border","overflow-hidden"],[1,"flex","px-3","py-1.5","bg-surface-50","dark:bg-surface-800","border-b","border-surface-200","dark:border-surface-700","text-xs","font-medium","text-surface-600","dark:text-surface-300","gap-3"],[1,"text-surface-300","dark:text-surface-600"],[1,"flex-1","overflow-auto",3,"scrolledIndexChange","itemSize"],[3,"line","searchQuery","fontSize","lineHeight",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],[3,"line","searchQuery","fontSize","lineHeight"]],template:function(e,n){if(e&1){let i=ve();f(0,"div",1)(1,"div",2)(2,"span"),B(3),m(),f(4,"span",3),B(5,"\u2194"),m(),f(6,"span"),B(7),m()(),f(8,"cdk-virtual-scroll-viewport",4,0),O("scrolledIndexChange",function(s){return q(i),Q(n.onScroll(s))}),ne(10,ud,1,4,"p-diff-line",5),m()()}e&2&&(d(3),Se(n.leftName()),d(4),Se(n.rightName()),d(),u("itemSize",n.state.lineHeight()),d(2),u("cdkVirtualForOf",n.rows())("cdkVirtualForTrackBy",n.trackLine))},dependencies:[R,qn,jn,Un,Wn,At],encapsulation:2})};var pd=["sideBySide"],fd=["inline"];function md(t,o){t&1&&_(0,"p-side-by-side-view",3,0)}function hd(t,o){t&1&&_(0,"p-inline-view",3,1)}var Gn=class t{state=c(De);sideBySide=qe("sideBySide");inline=qe("inline");viewMode=w(()=>this.state.viewMode());constructor(){J(()=>{let o=this.state.searchState();if(o.matchIndices.length===0)return;let e=o.matchIndices[o.currentMatchIndex];dt(()=>{this.inline()?.scrollToIndex(e);let n=this.inlineToSideBySideIdx(e);this.sideBySide()?.scrollToIndex(n)})})}inlineToSideBySideIdx(o){let e=this.state.diffResult()?.sideBySideRows??[],n=0;for(let i=0;i<e.length;i++){let r=e[i].left.type==="modified"?2:1;if(o<n+r)return i;n+=r}return Math.max(0,e.length-1)}scrollToIndex(o){this.sideBySide()?.scrollToIndex(o),this.inline()?.scrollToIndex(o)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["p-diff-viewer"]],viewQuery:function(e,n){e&1&&Ke(n.sideBySide,pd,5)(n.inline,fd,5),e&2&&Ye(2)},decls:3,vars:1,consts:[["sideBySide",""],["inline",""],[1,"h-full"],[1,"block","h-full"]],template:function(e,n){e&1&&(f(0,"div",2),H(1,md,2,0,"p-side-by-side-view",3)(2,hd,2,0,"p-inline-view",3),m()),e&2&&(d(),$(n.viewMode()==="side-by-side"?1:2))},dependencies:[R,Qn,Zn],encapsulation:2})};var gd=["minimapCanvas"],bd={added:"#86efac",removed:"#fca5a5",modified:"#fde047",unchanged:"transparent",fold:"#e2e8f0"},vd={added:"#166534",removed:"#991b1b",modified:"#854d0e",unchanged:"transparent",fold:"#334155"},Yn=class t{state=c(De);minimapCanvas=qe("minimapCanvas");indicatorTop=w(()=>this.state.scrollRatio());indicatorHeight=w(()=>{let o=this.state.diffResult();if(!o)return 1;let n=(this.state.viewMode()==="side-by-side"?o.sideBySideRows.length:o.inlineRows.length)||1,i=Math.min(40,n);return Math.min(1,i/n)});isDark=!1;constructor(){this.isDark=document.documentElement.classList.contains("app-dark"),J(()=>{let o=this.state.diffResult(),e=this.state.viewMode();o&&setTimeout(()=>this.drawMinimap(),0)})}drawMinimap(){let o=this.minimapCanvas();if(!o)return;let e=o.nativeElement,n=this.state.diffResult();if(!n)return;let r=this.state.viewMode()==="side-by-side"?n.sideBySideRows.map(v=>v.left.type!=="unchanged"?v.left.type:v.right.type):n.inlineRows.map(v=>v.type),s=e.parentElement?.clientHeight??400,l=e.parentElement?.clientWidth??48;e.width=l,e.height=Math.max(s,50);let a=e.getContext("2d");if(!a)return;a.clearRect(0,0,e.width,e.height);let p=this.isDark?vd:bd,h=e.height/r.length;r.forEach((v,T)=>{let C=p[v];C!=="transparent"&&(a.fillStyle=C,a.fillRect(0,T*h,e.width,Math.max(h,1)))})}onMinimapClick(o){let e=this.minimapCanvas();if(!e)return;let i=e.nativeElement.getBoundingClientRect(),s=(o.clientY-i.top)/i.height;this.state.setScrollRatio(Math.max(0,Math.min(1,s)))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["p-diff-minimap"]],viewQuery:function(e,n){e&1&&Ke(n.minimapCanvas,gd,5),e&2&&Ye()},decls:7,vars:4,consts:[["minimapCanvas",""],[1,"relative","flex","flex-col","h-full"],[1,"text-xs","text-center","text-surface-400","py-1","select-none"],[1,"relative","flex-1","cursor-pointer",3,"click"],["aria-label","Diff overview minimap. Click to navigate.","role","button","tabindex","0",1,"w-full","h-full","block","rounded-sm","border","border-surface-200","dark:border-surface-700"],[1,"absolute","left-0","right-0","bg-primary/20","border","border-primary/40","pointer-events-none","transition-all","duration-100"]],template:function(e,n){if(e&1){let i=ve();Be(0,"div",1)(1,"div",2),B(2,"Map"),Le(),Be(3,"div",3),to("click",function(s){return q(i),Q(n.onMinimapClick(s))}),he(4,"canvas",4,0)(6,"div",5),Le()()}e&2&&(d(6),He("top",n.indicatorTop()*100,"%")("height",n.indicatorHeight()*100,"%"))},dependencies:[R],encapsulation:2})};function yd(t,o){if(t&1){let e=ve();f(0,"div",2)(1,"div",5),O("click",function(){q(e);let i=g();return Q(i.inputCollapsed.set(!i.inputCollapsed()))}),f(2,"div",6),_(3,"i",7),f(4,"span",8),B(5),m(),f(6,"span",9),B(7),m(),_(8,"i",10)(9,"i",7),f(10,"span",8),B(11),m(),f(12,"span",9),B(13),m()(),_(14,"i",11),m(),f(15,"div",12)(16,"div",13),O("focusout",function(i){q(e);let r=g();return Q(r.onInputPanelBlur(i))}),f(17,"div",14)(18,"div",15),_(19,"p-code-input",16),m(),f(20,"div",15),_(21,"p-code-input",17),m()()()()()}if(t&2){let e,n,i=g();d(5),Se(((e=i.state.leftFile())==null?null:e.name)??"untitled"),d(2),fe("",i.leftLineCount()," lines"),d(4),Se(((n=i.state.rightFile())==null?null:n.name)??"untitled"),d(2),fe("",i.rightLineCount()," lines"),d(),rt("pi-chevron-up",!i.inputCollapsed())("pi-chevron-down",i.inputCollapsed()),d(),He("grid-template-rows",i.inputCollapsed()?"0fr":"1fr")}}function xd(t,o){if(t&1&&(f(0,"div",19),_(1,"i",20),f(2,"span"),B(3),m()()),t&2){let e=g(2);d(3),fe("Add code to the ",e.state.leftFile()?"right (Code B)":"left (Code A)"," panel to start comparing.")}}function Cd(t,o){if(t&1){let e=ve();f(0,"div",13),O("focusout",function(i){q(e);let r=g();return Q(r.onInputPanelBlur(i))}),f(1,"div",14)(2,"div",18),_(3,"p-code-input",16),m(),f(4,"div",18),_(5,"p-code-input",17),m()(),H(6,xd,4,1,"div",19),m()}if(t&2){let e=g();d(6),$(e.hasAnyFile()?6:-1)}}function wd(t,o){if(t&1&&(f(0,"div",4),_(1,"p-diff-toolbar",21)(2,"p-diff-summary"),f(3,"div",22)(4,"div",23),_(5,"p-diff-viewer",24,0),m(),f(7,"div",25),_(8,"p-diff-minimap"),m()()()),t&2){let e=sn(6),n=g();d(),u("diffViewer",e),d(2),He("height",n.inputCollapsed()?"calc(100vh - 22rem)":"65vh")}}var Jr=class t{state=c(De);hasAnyFile=w(()=>!!(this.state.leftFile()||this.state.rightFile()));hasBothFiles=w(()=>!!(this.state.leftFile()&&this.state.rightFile()));leftLineCount=w(()=>this.state.leftFile()?.content.split(`
`).length??0);rightLineCount=w(()=>this.state.rightFile()?.content.split(`
`).length??0);inputCollapsed=Z(!1);constructor(){J(()=>{this.hasBothFiles()||this.inputCollapsed.set(!1)})}onInputPanelBlur(o){let e=o.currentTarget,n=o.relatedTarget;this.hasBothFiles()&&(!n||!e.contains(n))&&this.inputCollapsed.set(!0)}ngOnInit(){this.state.reset()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=k({type:t,selectors:[["p-code-compare"]],decls:4,vars:2,consts:[["diffViewerRef",""],[1,"flex","flex-col"],[1,"mx-4","mb-2","bg-surface-0","dark:bg-surface-900","border","border-surface-200","dark:border-surface-700","rounded-border","overflow-hidden"],[1,"overflow-hidden"],[1,"flex","flex-col","gap-2","px-4","pb-4"],[1,"flex","items-center","px-4","py-2.5","bg-surface-50","dark:bg-surface-800","cursor-pointer","select-none","hover:bg-surface-100","dark:hover:bg-surface-700","transition-colors",3,"click"],[1,"flex-1","flex","items-center","justify-center","gap-2","min-w-0"],[1,"pi","pi-file","text-primary","text-sm","shrink-0"],[1,"text-sm","font-medium","text-surface-700","dark:text-surface-200","truncate","max-w-[200px]"],[1,"text-xs","text-surface-400","shrink-0"],[1,"pi","pi-arrows-h","text-surface-300","dark:text-surface-600","shrink-0","mx-2"],[1,"pi","text-surface-400","text-sm","shrink-0"],[1,"grid","transition-[grid-template-rows]","duration-500","ease-in-out"],[1,"overflow-hidden",3,"focusout"],[1,"grid","grid-cols-1","md:grid-cols-2","gap-4","p-4"],[1,"p-4","border","border-surface-200","dark:border-surface-700","rounded-border"],["side","left"],["side","right"],[1,"p-4","bg-surface-0","dark:bg-surface-900","border","border-surface-200","dark:border-surface-700","rounded-border"],[1,"flex","items-center","px-4","pb-4","gap-2","text-sm","text-surface-400"],[1,"pi","pi-info-circle"],[3,"diffViewer"],[1,"flex","gap-3","transition-[height]","duration-500","ease-in-out"],[1,"flex-1","min-w-0","h-full"],[1,"block","h-full"],[1,"w-14","shrink-0"]],template:function(e,n){e&1&&(f(0,"div",1),H(1,yd,22,10,"div",2)(2,Cd,7,1,"div",3),H(3,wd,9,3,"div",4),m()),e&2&&(d(),$(n.hasBothFiles()?1:2),d(2),$(n.hasBothFiles()?3:-1))},dependencies:[R,Bn,An,Pn,Gn,Yn],encapsulation:2})};export{Jr as CodeCompare};
