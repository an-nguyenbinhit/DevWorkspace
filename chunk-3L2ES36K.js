import{a as He,c as qt,h as $e,i as Re,j as je}from"./chunk-WDIB5L22.js";import{$a as b,$b as Ot,$c as Be,$d as ae,Ab as dt,Ad as Ne,Cb as C,Cd as Wt,Db as ot,Eb as it,Ed as Ae,Fb as Et,Gb as ve,Gd as ie,Hb as Y,Hc as Rt,Hd as se,Ib as K,Ic as Ie,Id as Zt,Ja as f,Jc as kt,Kc as Ee,Kd as Fe,Lc as _t,Mc as R,Md as Pe,N as he,Nb as ye,Nd as ze,O as M,P as A,Pb as $t,Qb as g,Qc as Nt,R as B,Rb as xt,Rd as re,Sa as Bt,Sb as wt,Sc as we,Sd as J,T as u,Tb as Ce,Tc as Mt,Ua as ge,Uc as At,Vc as ke,Wc as jt,Wd as Ve,Xa as T,Xc as _e,Y as Tt,Ya as F,Yb as _,Yc as Me,Yd as St,Z as It,Za as lt,Zc as Se,Zd as L,_ as k,_a as V,_b as xe,_c as De,aa as fe,ab as U,ac as Te,ad as Le,da as rt,de as S,ea as Ht,ed as ct,gb as y,ge as O,ha as Ct,he as D,id as oe,ie as v,ja as q,jb as ht,jc as st,jd as Ft,je as tt,kb as ft,kd as Oe,la as p,mc as P,md as Ut,na as be,nc as l,ob as c,pb as Q,qb as X,ra as me,rb as H,sb as et,tb as nt,ub as $,uc as I,vb as ut,vc as W,vd as mt,wb as pt,wc as ne,xb as Lt,yb as ee,zb as bt}from"./chunk-MDW6M3T4.js";import{a as Z}from"./chunk-VOSPIT4N.js";var le=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let s=0;s<o.length;s++)t.classList.add(o[s])}else{let o=n.split(" ");for(let s=0;s<o.length;s++)t.className+=" "+o[s]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(s=>this.removeClass(t,s)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var s=0;s<n.length;s++){if(n[s]==t)return o;n[s].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],s=0;for(var r=0;r<o.length;r++){if(o[r]==t)return s;o[r].attributes&&o[r].attributes[n]&&o[r].nodeType==1&&s++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",s=!0){t&&n&&(s&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let s=at=>{if(at)return getComputedStyle(at).getPropertyValue("position")==="relative"?at:s(at.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,d=n.getBoundingClientRect(),x=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),m=this.getViewport(),w=s(t)?.getBoundingClientRect()||{top:-1*x,left:-1*h},N,z,yt="top";d.top+a+r.height>m.height?(N=d.top-w.top-r.height,yt="bottom",d.top+N<0&&(N=-1*d.top)):(N=a+d.top-w.top,yt="top");let Dt=d.left+r.width-m.width,Vt=d.left-w.left;if(r.width>m.width?z=(d.left-w.left)*-1:Dt>0?z=Vt-Dt:z=d.left-w.left,t.style.top=N+"px",t.style.left=z+"px",t.style.transformOrigin=yt,o){let at=Me(/-anchor-gutter$/)?.value;t.style.marginTop=yt==="bottom"?`calc(${at??"2px"} * -1)`:at??""}}static absolutePosition(t,n,o=!0){let s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=s.height,a=s.width,d=n.offsetHeight,x=n.offsetWidth,h=n.getBoundingClientRect(),m=this.getWindowScrollTop(),E=this.getWindowScrollLeft(),w=this.getViewport(),N,z;h.top+d+r>w.height?(N=h.top+m-r,t.style.transformOrigin="bottom",N<0&&(N=m)):(N=d+h.top+m,t.style.transformOrigin="top"),h.left+a>w.width?z=Math.max(0,h.left+E+x-a):z=h.left+E,t.style.top=N+"px",t.style.left=z+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),s=/(auto|scroll)/,r=a=>{let d=window.getComputedStyle(a,null);return s.test(d.getPropertyValue("overflow"))||s.test(d.getPropertyValue("overflowX"))||s.test(d.getPropertyValue("overflowY"))};for(let a of o){let d=a.nodeType===1&&a.dataset.scrollselectors;if(d){let x=d.split(",");for(let h of x){let m=this.findSingle(a,h);m&&r(m)&&n.push(m)}}a.nodeType!==9&&r(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),s=o?parseFloat(o):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),a=r?parseFloat(r):0,d=t.getBoundingClientRect(),h=n.getBoundingClientRect().top+document.body.scrollTop-(d.top+document.body.scrollTop)-s-a,m=t.scrollTop,E=t.clientHeight,w=this.getOuterHeight(n);h<0?t.scrollTop=m+h:h+w>E&&(t.scrollTop=m+h-E+w)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,s=0,r=function(){s=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=s,o=+new Date,+s<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,n){var o=1,s=50,r=n,a=s/r;let d=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(d)),t.style.opacity=o},s)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return s.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let s=getComputedStyle(t);o+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let s=getComputedStyle(t);o+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,s=n.getElementsByTagName("body")[0],r=t.innerWidth||o.clientWidth||s.clientWidth,a=t.innerHeight||o.clientHeight||s.clientHeight;return{width:r,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var s=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),s=[];for(let r of o){let a=getComputedStyle(r);this.isVisible(r)&&a.display!="none"&&a.visibility!="hidden"&&s.push(r)}return s}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let s=getComputedStyle(o);if(this.isVisible(o)&&s.display!="none"&&s.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),s=0;if(o&&o.length>0){let r=o.indexOf(o[0].ownerDocument.activeElement);n?r==-1||r===0?s=o.length-1:s=r-1:r!=-1&&r!==o.length-1&&(s=r+1)}return o[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let s=document.createElement(t);return this.setAttributes(s,n),s.append(...o),s}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(s,r)=>{let a=t?.$attrs?.[s]?[t?.$attrs?.[s]]:[];return[r].flat().reduce((d,x)=>{if(x!=null){let h=typeof x;if(h==="string"||h==="number")d.push(x);else if(h==="object"){let m=Array.isArray(x)?o(s,x):Object.entries(x).map(([E,w])=>s==="style"&&(w||w===0)?`${E.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${w}`:w?E:void 0);d=m.length?d.concat(m.filter(E=>!!E)):d}}return d},a)};Object.entries(n).forEach(([s,r])=>{if(r!=null){let a=s.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),r):s==="pBind"?this.setAttributes(t,r):(r=s==="class"?[...new Set(o("class",r))].join(" ").trim():s==="style"?o("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[s]=r),t.setAttribute(s,r))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();function Ai(){ke({variableName:ae("scrollbar.width").name})}function Fi(){_e({variableName:ae("scrollbar.width").name})}var Gt=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=le.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ue=(()=>{class e extends D{autofocus=!1;focused=!1;platformId=u(me);document=u(fe);host=u(be);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Nt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=le.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275dir=lt({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[b]})}return e})();var We=`
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
`;var zn=`
    ${We}

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
`,Vn={root:({instance:e})=>{let i=typeof e.value=="function"?e.value():e.value,t=typeof e.size=="function"?e.size():e.size,n=typeof e.badgeSize=="function"?e.badgeSize():e.badgeSize,o=typeof e.severity=="function"?e.severity():e.severity;return["p-badge p-component",{"p-badge-circle":Fe(i)&&String(i).length===1,"p-badge-dot":Zt(i),"p-badge-sm":t==="small"||n==="small","p-badge-lg":t==="large"||n==="large","p-badge-xl":t==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},Ze=(()=>{class e extends S{name="badge";style=zn;classes=Vn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var qe=new B("BADGE_INSTANCE");var de=(()=>{class e extends D{componentName="Badge";$pcBadge=u(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=l();badgeSize=l();size=l();severity=l();value=l();badgeDisabled=l(!1,{transform:I});_componentStyle=u(Ze);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,o){n&2&&(y("data-p",o.dataP),g(o.cn(o.cx("root"),o.styleClass())),ye("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[_([Ze,{provide:qe,useExisting:e},{provide:O,useExisting:e}]),V([v]),b],decls:1,vars:1,template:function(n,o){n&1&&xt(0),n&2&&wt(o.value())},dependencies:[R,L,tt],encapsulation:2,changeDetection:0})}return e})(),Ge=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=A({imports:[de,L,L]})}return e})();var $n=["*"],Rn={root:"p-fluid"},Qe=(()=>{class e extends S{name="fluid";classes=Rn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Xe=new B("FLUID_INSTANCE"),Qt=(()=>{class e extends D{componentName="Fluid";$pcFluid=u(Xe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=u(Qe);static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&g(o.cx("root"))},features:[_([Qe,{provide:Xe,useExisting:e},{provide:O,useExisting:e}]),V([v]),b],ngContentSelectors:$n,decls:1,vars:0,template:function(n,o){n&1&&(ot(),it(0))},dependencies:[R],encapsulation:2,changeDetection:0})}return e})();var jn=["*"],Un=`
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
`,Ye=(()=>{class e extends S{name="baseicon";css=Un;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var G=(()=>{class e extends D{spin=!1;_componentStyle=u(Ye);getClassNames(){return we("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&g(o.getClassNames())},inputs:{spin:[2,"spin","spin",I]},features:[_([Ye]),b],ngContentSelectors:jn,decls:1,vars:0,template:function(n,o){n&1&&(ot(),it(0))},encapsulation:2,changeDetection:0})}return e})();var Wn=["data-p-icon","check"],Xt=(()=>{class e extends G{static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","check"]],features:[b],attrs:Wn,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(k(),$(0,"path",0))},encapsulation:2})}return e})();var Zn=["data-p-icon","exclamation-triangle"],Ke=(()=>{class e extends G{pathId;onInit(){this.pathId="url(#"+J()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","exclamation-triangle"]],features:[b],attrs:Zn,decls:7,vars:2,consts:[["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(k(),et(0,"g"),$(1,"path",0)(2,"path",1)(3,"path",2),nt(),et(4,"defs")(5,"clipPath",3),$(6,"rect",4),nt()()),n&2&&(y("clip-path",o.pathId),f(5),bt("id",o.pathId))},encapsulation:2})}return e})();var qn=["data-p-icon","info-circle"],Je=(()=>{class e extends G{pathId;onInit(){this.pathId="url(#"+J()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","info-circle"]],features:[b],attrs:qn,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(k(),et(0,"g"),$(1,"path",0),nt(),et(2,"defs")(3,"clipPath",1),$(4,"rect",2),nt()()),n&2&&(y("clip-path",o.pathId),f(3),bt("id",o.pathId))},encapsulation:2})}return e})();var Gn=["data-p-icon","minus"],tn=(()=>{class e extends G{static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","minus"]],features:[b],attrs:Gn,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(k(),$(0,"path",0))},encapsulation:2})}return e})();var Qn=["data-p-icon","spinner"],en=(()=>{class e extends G{pathId;onInit(){this.pathId="url(#"+J()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","spinner"]],features:[b],attrs:Qn,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(k(),et(0,"g"),$(1,"path",0),nt(),et(2,"defs")(3,"clipPath",1),$(4,"rect",2),nt()()),n&2&&(y("clip-path",o.pathId),f(3),bt("id",o.pathId))},encapsulation:2})}return e})();var Xn=["data-p-icon","times"],nn=(()=>{class e extends G{static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","times"]],features:[b],attrs:Xn,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(k(),$(0,"path",0))},encapsulation:2})}return e})();var Yn=["data-p-icon","times-circle"],on=(()=>{class e extends G{pathId;onInit(){this.pathId="url(#"+J()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["","data-p-icon","times-circle"]],features:[b],attrs:Yn,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(k(),et(0,"g"),$(1,"path",0),nt(),et(2,"defs")(3,"clipPath",1),$(4,"rect",2),nt()()),n&2&&(y("clip-path",o.pathId),f(3),bt("id",o.pathId))},encapsulation:2})}return e})();var sn=`
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
        content: "\xA0";
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
`;var Kn=["content"],Jn=["loadingicon"],to=["icon"],eo=["*"],dn=(e,i)=>({class:e,pt:i});function no(e,i){e&1&&Lt(0)}function oo(e,i){if(e&1&&H(0,"span",7),e&2){let t=C(3);g(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),c("pBind",t.ptm("loadingIcon")),y("aria-hidden",!0)}}function io(e,i){if(e&1&&(k(),H(0,"svg",8)),e&2){let t=C(3);g(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),c("pBind",t.ptm("loadingIcon"))("spin",!0),y("aria-hidden",!0)}}function so(e,i){if(e&1&&(ut(0),U(1,oo,1,4,"span",3)(2,io,1,5,"svg",6),pt()),e&2){let t=C(2);f(),c("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),f(),c("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function ro(e,i){}function ao(e,i){if(e&1&&U(0,ro,0,0,"ng-template",9),e&2){let t=C(2);c("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function lo(e,i){if(e&1&&(ut(0),U(1,so,3,2,"ng-container",2)(2,ao,1,1,null,5),pt()),e&2){let t=C();f(),c("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),f(),c("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Ot(3,dn,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function co(e,i){if(e&1&&H(0,"span",7),e&2){let t=C(2);g(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),c("pBind",t.ptm("icon")),y("data-p",t.dataIconP)}}function uo(e,i){}function po(e,i){if(e&1&&U(0,uo,0,0,"ng-template",9),e&2){let t=C(2);c("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function ho(e,i){if(e&1&&(ut(0),U(1,co,1,4,"span",3)(2,po,1,1,null,5),pt()),e&2){let t=C();f(),c("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),f(),c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Ot(3,dn,t.cx("icon"),t.ptm("icon")))}}function fo(e,i){if(e&1&&(Q(0,"span",7),xt(1),X()),e&2){let t=C();g(t.cx("label")),c("pBind",t.ptm("label")),y("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),f(),wt(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function bo(e,i){if(e&1&&H(0,"p-badge",10),e&2){let t=C();c("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var mo={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!e.label&&!e.buttonProps?.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label,"p-button-icon-top":(e.iconPos==="top"||e.buttonProps?.iconPos==="top")&&e.label||e.buttonProps?.label,"p-button-icon-bottom":(e.iconPos==="bottom"||e.buttonProps?.iconPos==="bottom")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.cx("icon")).filter(([,i])=>!!i).reduce((i,[t])=>i+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},rn=(()=>{class e extends S{name="button";style=sn;classes=mo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var an=new B("BUTTON_INSTANCE");var go=(()=>{class e extends D{componentName="Button";hostName="";$pcButton=u(an,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(v,{self:!0});_componentStyle=u(rn);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=l(void 0,{transform:I});onClick=new rt;onFocus=new rt;onBlur=new rt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=u(Qt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["p-button"]],contentQueries:function(n,o,s){if(n&1&&Et(s,Kn,5)(s,Jn,5)(s,to,5)(s,St,4),n&2){let r;Y(r=K())&&(o.contentTemplate=r.first),Y(r=K())&&(o.loadingIconTemplate=r.first),Y(r=K())&&(o.iconTemplate=r.first),Y(r=K())&&(o.templates=r)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",I],raised:[2,"raised","raised",I],rounded:[2,"rounded","rounded",I],text:[2,"text","text",I],plain:[2,"plain","plain",I],outlined:[2,"outlined","outlined",I],link:[2,"link","link",I],tabindex:[2,"tabindex","tabindex",W],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",I],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",I],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[_([rn,{provide:an,useExisting:e},{provide:O,useExisting:e}]),V([v]),b],ngContentSelectors:eo,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,o){n&1&&(ot(),Q(0,"button",0),dt("click",function(r){return o.onClick.emit(r)})("focus",function(r){return o.onFocus.emit(r)})("blur",function(r){return o.onBlur.emit(r)}),it(1),U(2,no,1,0,"ng-container",1)(3,lo,3,6,"ng-container",2)(4,ho,3,6,"ng-container",2)(5,fo,2,6,"span",3)(6,bo,1,4,"p-badge",4),X()),n&2&&(g(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),c("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),y("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),f(2),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),f(),c("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),f(),c("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),f(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),f(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))))},dependencies:[R,kt,_t,Ee,je,Ue,en,Ge,de,L,v],encapsulation:2,changeDetection:0})}return e})(),xr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=A({imports:[R,go,L,L]})}return e})();var cn=class e{static isArray(i,t=!0){return Array.isArray(i)&&(t||i.length!==0)}static isObject(i,t=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(t||Object.keys(i).length!==0)}static equals(i,t,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(t,n):this.equalsByValue(i,t)}static equalsByValue(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var n=Array.isArray(i),o=Array.isArray(t),s,r,a;if(n&&o){if(r=i.length,r!=t.length)return!1;for(s=r;s--!==0;)if(!this.equalsByValue(i[s],t[s]))return!1;return!0}if(n!=o)return!1;var d=this.isDate(i),x=this.isDate(t);if(d!=x)return!1;if(d&&x)return i.getTime()==t.getTime();var h=i instanceof RegExp,m=t instanceof RegExp;if(h!=m)return!1;if(h&&m)return i.toString()==t.toString();var E=Object.keys(i);if(r=E.length,r!==Object.keys(t).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,E[s]))return!1;for(s=r;s--!==0;)if(a=E[s],!this.equalsByValue(i[a],t[a]))return!1;return!0}return i!==i&&t!==t}static resolveFieldData(i,t){if(i&&t){if(this.isFunction(t))return t(i);if(t.indexOf(".")==-1)return i[t];{let n=t.split("."),o=i;for(let s=0,r=n.length;s<r;++s){if(o==null)return null;o=o[n[s]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,t,n){let o;i&&t!==n&&(n>=i.length&&(n%=i.length,t%=i.length),i.splice(n,0,i.splice(t,1)[0]))}static insertIntoOrderedArray(i,t,n,o){if(n.length>0){let s=!1;for(let r=0;r<n.length;r++)if(this.findIndexInList(n[r],o)>t){n.splice(r,0,i),s=!0;break}s||n.push(i)}else n.push(i)}static findIndexInList(i,t){let n=-1;if(t){for(let o=0;o<t.length;o++)if(t[o]==i){n=o;break}}return n}static contains(i,t){if(i!=null&&t&&t.length){for(let n of t)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,t,n,o=1){let s=-1,r=this.isEmpty(i),a=this.isEmpty(t);return r&&a?s=0:r?s=o:a?s=-o:typeof i=="string"&&typeof t=="string"?s=i.localeCompare(t,n,{numeric:!0}):s=i<t?-1:i>t?1:0,s}static sort(i,t,n=1,o,s=1){let r=e.compare(i,t,o,n),a=n;return(e.isEmpty(i)||e.isEmpty(t))&&(a=s===1?n:s),a*r}static merge(i,t){if(!(i==null&&t==null)){{if((i==null||typeof i=="object")&&(t==null||typeof t=="object"))return Z(Z({},i||{}),t||{});if((i==null||typeof i=="string")&&(t==null||typeof t=="string"))return[i||"",t||""].join(" ")}return t||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...t){return this.isFunction(i)?i(...t):i}static findLastIndex(i,t){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(t)}catch{n=i.lastIndexOf([...i].reverse().find(t))}return n}static findLast(i,t){let n;if(this.isNotEmpty(i))try{n=i.findLast(t)}catch{n=[...i].reverse().find(t)}return n}static deepEquals(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var n=Array.isArray(i),o=Array.isArray(t),s,r,a;if(n&&o){if(r=i.length,r!=t.length)return!1;for(s=r;s--!==0;)if(!this.deepEquals(i[s],t[s]))return!1;return!0}if(n!=o)return!1;var d=i instanceof Date,x=t instanceof Date;if(d!=x)return!1;if(d&&x)return i.getTime()==t.getTime();var h=i instanceof RegExp,m=t instanceof RegExp;if(h!=m)return!1;if(h&&m)return i.toString()==t.toString();var E=Object.keys(i);if(r=E.length,r!==Object.keys(t).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,E[s]))return!1;for(s=r;s--!==0;)if(a=E[s],!this.deepEquals(i[a],t[a]))return!1;return!0}return i!==i&&t!==t}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,t=!0){return typeof i=="string"&&(t||i!=="")}},un=0;function Er(e="pn_id_"){return un++,`${e}${un}`}function vo(){let e=[],i=(s,r)=>{let a=e.length>0?e[e.length-1]:{key:s,value:r},d=a.value+(a.key===s?0:r)+2;return e.push({key:s,value:d}),d},t=s=>{e=e.filter(r=>r.value!==s)},n=()=>e.length>0?e[e.length-1].value:0,o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,r,a)=>{r&&(r.style.zIndex=String(i(s,a)))},clear:s=>{s&&(t(o(s)),s.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:t}}var vt=vo();var pn=`
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
`;var yo={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},hn=(()=>{class e extends S{name="tooltip";style=pn;classes=yo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var fn=new B("TOOLTIP_INSTANCE"),$r=(()=>{class e extends D{zone;viewContainer;componentName="Tooltip";$pcTooltip=u(fn,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;showOnEllipsis=!1;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=l(void 0);$appendTo=st(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,showOnEllipsis:!1,id:J("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=u(hn);interactionInProgress=!1;ptTooltip=l();pTooltipPT=l();pTooltipUnstyled=l();constructor(t,n){super(),this.zone=t,this.viewContainer=n,q(()=>{let o=this.ptTooltip()||this.pTooltipPT();o&&this.directivePT.set(o)}),q(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){Nt(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:!0}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:!0})),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}onChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.showOnEllipsis&&this.setOption({showOnEllipsis:t.showOnEllipsis.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=Z(Z({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(Mt(t.relatedTarget,"p-tooltip")||Mt(t.relatedTarget,"p-tooltip-text")||Mt(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onTouchStart(t){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener())}onTouchEnd(t){this.isAutoHide()&&this.deactivate()}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",t=>{this.container&&!this.container.contains(t.target)&&!this.el.nativeElement.contains(t.target)&&(this.deactivate(),this.unbindDocumentTouchListener())}))}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null)}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}hasEllipsis(){let t=this.el.nativeElement;return t.offsetWidth<t.scrollWidth||t.offsetHeight<t.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=Ft("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let t=Ft("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(t),this.tooltipText=Ft("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?oe(this.container,this.el.nativeElement):oe(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Oe(this.container,250),this.getOption("tooltipZIndex")==="auto"?vt.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&vt.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(t);n.detectChanges(),n.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),o={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[s,r]of o.entries())if(s===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),n=t.left+Be(),o=t.top+Le();return{left:n,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Ut(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,n=ct(t),o=(mt(t)-mt(this.container))/2;this.alignTooltip(n,o);let s=this.getArrowElement();s.style.top="50%",s.style.right=null,s.style.bottom=null,s.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),n=ct(this.container),o=(mt(this.el.nativeElement)-mt(this.container))/2;this.alignTooltip(-n,o),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),n=this.getHostOffset(),o=ct(this.container),s=(ct(this.el.nativeElement)-ct(this.container))/2,r=mt(this.container);this.alignTooltip(s,-r);let a=n.left-this.getHostOffset().left+o/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=a+"px"}getArrowElement(){return Ut(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),n=ct(this.container),o=this.getHostOffset(),s=(ct(this.el.nativeElement)-ct(this.container))/2,r=mt(this.el.nativeElement);this.alignTooltip(s,r);let a=o.left-this.getHostOffset().left+n/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=a+"px"}alignTooltip(t,n){let o=this.getHostOffset(),s=o.left+t,r=o.top+n;this.container.style.left=s+this.getOption("positionLeft")+"px",this.container.style.top=r+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=Z(Z({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return Mt(t,"p-inputwrapper")?Ut(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+t,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let t=this.container.getBoundingClientRect(),n=t.top,o=t.left,s=ct(this.container),r=mt(this.container),a=De();return o+s>a.width||o<0||n<0||n+r>a.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Gt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),t==="focus"||t==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Ae(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&vt.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||e)(Bt(Ht),Bt(ge))};static \u0275dir=lt({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",I],showDelay:[2,"showDelay","showDelay",W],hideDelay:[2,"hideDelay","hideDelay",W],life:[2,"life","life",W],positionTop:[2,"positionTop","positionTop",W],positionLeft:[2,"positionLeft","positionLeft",W],autoHide:[2,"autoHide","autoHide",I],fitContent:[2,"fitContent","fitContent",I],hideOnEscape:[2,"hideOnEscape","hideOnEscape",I],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",I],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[_([hn,{provide:fn,useExisting:e},{provide:O,useExisting:e}]),b]})}return e})(),Rr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=A({imports:[tt,tt]})}return e})();var bn=`
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
`;var Co=["icon"],xo=["input"],To=(e,i,t)=>({checked:e,class:i,dataP:t});function Io(e,i){if(e&1&&H(0,"span",8),e&2){let t=C(3);g(t.cx("icon")),c("ngClass",t.checkboxIcon)("pBind",t.ptm("icon")),y("data-p",t.dataP)}}function Eo(e,i){if(e&1&&(k(),H(0,"svg",9)),e&2){let t=C(3);g(t.cx("icon")),c("pBind",t.ptm("icon")),y("data-p",t.dataP)}}function wo(e,i){if(e&1&&(ut(0),U(1,Io,1,5,"span",6)(2,Eo,1,4,"svg",7),pt()),e&2){let t=C(2);f(),c("ngIf",t.checkboxIcon),f(),c("ngIf",!t.checkboxIcon)}}function ko(e,i){if(e&1&&(k(),H(0,"svg",10)),e&2){let t=C(2);g(t.cx("icon")),c("pBind",t.ptm("icon")),y("data-p",t.dataP)}}function _o(e,i){if(e&1&&(ut(0),U(1,wo,3,2,"ng-container",3)(2,ko,1,4,"svg",5),pt()),e&2){let t=C();f(),c("ngIf",t.checked),f(),c("ngIf",t._indeterminate())}}function Mo(e,i){}function So(e,i){e&1&&U(0,Mo,0,0,"ng-template")}var Do=`
    ${bn}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Bo={root:({instance:e})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":e.checked,"p-disabled":e.$disabled(),"p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-checkbox-sm p-inputfield-sm":e.size()==="small","p-checkbox-lg p-inputfield-lg":e.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},mn=(()=>{class e extends S{name="checkbox";style=Do;classes=Bo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var gn=new B("CHECKBOX_INSTANCE"),Lo={provide:He,useExisting:he(()=>vn),multi:!0},vn=(()=>{class e extends Re{componentName="Checkbox";hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=l();size=l();onChange=new rt;onFocus=new rt;onBlur=new rt;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:ze(this.value,this.modelValue())}_indeterminate=Ct(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=u(mn);bindDirectiveInstance=u(v,{self:!0});$pcCheckbox=u(gn,{optional:!0,skipSelf:!0})??void 0;$variant=st(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}onChanges(t){t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(t){let n,o=this.injector.get(qt,null,{optional:!0,self:!0}),s=o&&!this.formControl?o.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=s.filter(r=>!Pe(r,this.value)):n=s?[...s,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(t,n){n(t),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,s){if(n&1&&Et(s,Co,4)(s,St,4),n&2){let r;Y(r=K())&&(o.checkboxIconTemplate=r.first),Y(r=K())&&(o.templates=r)}},viewQuery:function(n,o){if(n&1&&ve(xo,5),n&2){let s;Y(s=K())&&(o.inputViewChild=s.first)}},hostVars:6,hostBindings:function(n,o){n&2&&(y("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.$disabled())("data-p",o.dataP),g(o.cn(o.cx("root"),o.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",I],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",W],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",I],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",I],autofocus:[2,"autofocus","autofocus",I],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[_([Lo,mn,{provide:gn,useExisting:e},{provide:O,useExisting:e}]),V([v]),b],decls:5,vars:26,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(n,o){n&1&&(Q(0,"input",1,0),dt("focus",function(r){return o.onInputFocus(r)})("blur",function(r){return o.onInputBlur(r)})("change",function(r){return o.handleChange(r)}),X(),Q(2,"div",2),U(3,_o,3,2,"ng-container",3)(4,So,1,0,null,4),X()),n&2&&($t(o.inputStyle),g(o.cn(o.cx("input"),o.inputClass)),c("checked",o.checked)("pBind",o.ptm("input")),y("id",o.inputId)("value",o.value)("name",o.name())("tabindex",o.tabindex)("required",o.required()?"":void 0)("readonly",o.readonly?"":void 0)("disabled",o.$disabled()?"":void 0)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),f(2),g(o.cx("box")),c("pBind",o.ptm("box")),y("data-p",o.dataP),f(),c("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),f(),c("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",Te(22,To,o.checked,o.cx("icon"),o.dataP)))},dependencies:[R,Rt,kt,_t,L,Xt,tn,tt,v],encapsulation:2,changeDetection:0})}return e})(),fa=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=A({imports:[vn,L,L]})}return e})();var yn=`
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
`;var Oo=`
    ${yn}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,No={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},Cn=(()=>{class e extends S{name="inputtext";style=Oo;classes=No;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var xn=new B("INPUTTEXT_INSTANCE"),Ba=(()=>{class e extends $e{componentName="InputText";hostName="";ptInputText=l();pInputTextPT=l();pInputTextUnstyled=l();bindDirectiveInstance=u(v,{self:!0});$pcInputText=u(xn,{optional:!0,skipSelf:!0})??void 0;ngControl=u(qt,{optional:!0,self:!0});pcFluid=u(Qt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=l();fluid=l(void 0,{transform:I});invalid=l(void 0,{transform:I});$variant=st(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=u(Cn);constructor(){super(),q(()=>{let t=this.ptInputText()||this.pInputTextPT();t&&this.directivePT.set(t)}),q(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||e)};static \u0275dir=lt({type:e,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,o){n&1&&dt("input",function(){return o.onInput()}),n&2&&(y("data-p",o.dataP),g(o.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[_([Cn,{provide:xn,useExisting:e},{provide:O,useExisting:e}]),V([v]),b]})}return e})(),La=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=A({})}return e})();var Ao=Object.defineProperty,Tn=Object.getOwnPropertySymbols,Fo=Object.prototype.hasOwnProperty,Po=Object.prototype.propertyIsEnumerable,In=(e,i,t)=>i in e?Ao(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,En=(e,i)=>{for(var t in i||(i={}))Fo.call(i,t)&&In(e,t,i[t]);if(Tn)for(var t of Tn(i))Po.call(i,t)&&In(e,t,i[t]);return e},zo=(e,i,t)=>new Promise((n,o)=>{var s=d=>{try{a(t.next(d))}catch(x){o(x)}},r=d=>{try{a(t.throw(d))}catch(x){o(x)}},a=d=>d.done?n(d.value):Promise.resolve(d.value).then(s,r);a((t=t.apply(e,i)).next())}),Yt="animation",Pt="transition";function Vo(e){return e?e.disabled||!!(e.safe&&Ne()):!1}function Ho(e,i){return e?En(En({},e),Object.entries(i).reduce((t,[n,o])=>{var s;return t[n]=(s=e[n])!=null?s:o,t},{})):i}function $o(e){let{name:i,enterClass:t,leaveClass:n}=e||{};return{enter:{from:t?.from||`${i}-enter-from`,to:t?.to||`${i}-enter-to`,active:t?.active||`${i}-enter-active`},leave:{from:n?.from||`${i}-leave-from`,to:n?.to||`${i}-leave-to`,active:n?.active||`${i}-leave-active`}}}function Ro(e){return{enter:{onBefore:e?.onBeforeEnter,onStart:e?.onEnter,onAfter:e?.onAfterEnter,onCancelled:e?.onEnterCancelled},leave:{onBefore:e?.onBeforeLeave,onStart:e?.onLeave,onAfter:e?.onAfterLeave,onCancelled:e?.onLeaveCancelled}}}function jo(e,i){let t=window.getComputedStyle(e),n=w=>{let N=t[`${w}Delay`],z=t[`${w}Duration`];return[N.split(", ").map(re),z.split(", ").map(re)]},[o,s]=n(Pt),[r,a]=n(Yt),d=Math.max(...s.map((w,N)=>w+o[N])),x=Math.max(...a.map((w,N)=>w+r[N])),h,m=0,E=0;return i===Pt?d>0&&(h=Pt,m=d,E=s.length):i===Yt?x>0&&(h=Yt,m=x,E=a.length):(m=Math.max(d,x),h=m>0?d>x?Pt:Yt:void 0,E=h?h===Pt?s.length:a.length:0),{type:h,timeout:m,count:E}}function Uo(e,i){return typeof e=="number"?e:typeof e=="object"&&e[i]!=null?e[i]:null}function Wo(e,i=!0,t=!1){if(!i&&!t)return;let n=Se(e);i&&se(e,"--pui-motion-height",n.height+"px"),t&&se(e,"--pui-motion-width",n.width+"px")}var Zo={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function ce(e,i){if(!e)throw new Error("Element is required.");let t={},n=!1,o={},s=null,r={},a=h=>{if(Object.assign(t,Ho(h,Zo)),!t.enter&&!t.leave)throw new Error("Enter or leave must be true.");r=Ro(t),n=Vo(t),o=$o(t),s=null},d=h=>zo(null,null,function*(){s?.();let{onBefore:m,onStart:E,onAfter:w,onCancelled:N}=r[h]||{},z={element:e};if(n){m?.(z),E?.(z),w?.(z);return}let{from:yt,active:Dt,to:Vt}=o[h]||{};return Wo(e,t.autoHeight,t.autoWidth),m?.(z),At(e,yt),At(e,Dt),e.offsetHeight,jt(e,yt),At(e,Vt),E?.(z),new Promise(at=>{let Fn=Uo(t.duration,h),pe=()=>{jt(e,[Vt,Dt]),s=null},Pn=()=>{pe(),w?.(z),at()};s=()=>{pe(),N?.(z),at()},Go(e,t.type,Fn,Pn)})});a(i);let x={enter:()=>t.enter?d("enter"):Promise.resolve(),leave:()=>t.leave?d("leave"):Promise.resolve(),cancel:()=>{s?.(),s=null},update:(h,m)=>{if(!h)throw new Error("Element is required.");e=h,x.cancel(),a(m)}};return t.appear&&x.enter(),x}var qo=0;function Go(e,i,t,n){let o=e._motionEndId=++qo,s=()=>{o===e._motionEndId&&n()};if(t!=null)return setTimeout(s,t);let{type:r,timeout:a,count:d}=jo(e,i);if(!r){n();return}let x=r+"end",h=0,m=()=>{e.removeEventListener(x,E,!0),s()},E=w=>{w.target===e&&++h>=d&&m()};e.addEventListener(x,E,{capture:!0,once:!0}),setTimeout(()=>{h<d&&m()},a+1)}var Qo=["*"];function Xo(e,i){e&1&&it(0)}var Kt=new WeakMap;function zt(e,i){if(e)switch(Kt.has(e)||Kt.set(e,{display:e.style.display,visibility:e.style.visibility,maxHeight:e.style.maxHeight}),i){case"display":e.style.display="none";break;case"visibility":e.style.visibility="hidden",e.style.maxHeight="0";break}}function Jt(e,i){if(!e)return;let t=Kt.get(e)??e.style;switch(i){case"display":e.style.display=t?.display||"";break;case"visibility":e.style.visibility=t?.visibility||"",e.style.maxHeight=t?.maxHeight||"";break}Kt.delete(e)}var Yo=`
    .p-motion {
        display: block;
    }
`,Ko={root:"p-motion"},ue=(()=>{class e extends S{name="motion";style=Yo;classes=Ko;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var wn=new B("MOTION_INSTANCE"),Jo=(()=>{class e extends D{$pcMotion=u(wn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(v,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(Z(Z({},this.ptms(["host","root"])),n))}_componentStyle=u(ue);visible=l(!1);mountOnEnter=l(!0);unmountOnLeave=l(!0);name=l(void 0);type=l(void 0);safe=l(void 0);disabled=l(!1);appear=l(!1);enter=l(!0);leave=l(!0);duration=l(void 0);hideStrategy=l("display");enterFromClass=l(void 0);enterToClass=l(void 0);enterActiveClass=l(void 0);leaveFromClass=l(void 0);leaveToClass=l(void 0);leaveActiveClass=l(void 0);options=l({});onBeforeEnter=P();onEnter=P();onAfterEnter=P();onEnterCancelled=P();onBeforeLeave=P();onLeave=P();onAfterLeave=P();onLeaveCancelled=P();motionOptions=st(()=>{let t=this.options();return{name:t.name??this.name(),type:t.type??this.type(),safe:t.safe??this.safe(),disabled:t.disabled??this.disabled(),appear:!1,enter:t.enter??this.enter(),leave:t.leave??this.leave(),duration:t.duration??this.duration(),enterClass:{from:t.enterClass?.from??(t.name?void 0:this.enterFromClass()),to:t.enterClass?.to??(t.name?void 0:this.enterToClass()),active:t.enterClass?.active??(t.name?void 0:this.enterActiveClass())},leaveClass:{from:t.leaveClass?.from??(t.name?void 0:this.leaveFromClass()),to:t.leaveClass?.to??(t.name?void 0:this.leaveToClass()),active:t.leaveClass?.active??(t.name?void 0:this.leaveActiveClass())},onBeforeEnter:t.onBeforeEnter??this.handleBeforeEnter,onEnter:t.onEnter??this.handleEnter,onAfterEnter:t.onAfterEnter??this.handleAfterEnter,onEnterCancelled:t.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:t.onBeforeLeave??this.handleBeforeLeave,onLeave:t.onLeave??this.handleLeave,onAfterLeave:t.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:t.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=Ct(!1);handleBeforeEnter=t=>!this.destroyed&&this.onBeforeEnter.emit(t);handleEnter=t=>!this.destroyed&&this.onEnter.emit(t);handleAfterEnter=t=>!this.destroyed&&this.onAfterEnter.emit(t);handleEnterCancelled=t=>!this.destroyed&&this.onEnterCancelled.emit(t);handleBeforeLeave=t=>!this.destroyed&&this.onBeforeLeave.emit(t);handleLeave=t=>!this.destroyed&&this.onLeave.emit(t);handleAfterLeave=t=>!this.destroyed&&this.onAfterLeave.emit(t);handleLeaveCancelled=t=>!this.destroyed&&this.onLeaveCancelled.emit(t);constructor(){super(),q(()=>{let t=this.hideStrategy();this.isInitialMount?(zt(this.$el,t),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(zt(this.$el,t),this.rendered.set(!0))}),q(()=>{this.motion||(this.motion=ce(this.$el,this.motionOptions()))}),ne(async()=>{if(!this.$el)return;let t=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await Wt(),Jt(this.$el,n),(t||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount||(await Wt(),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(zt(this.$el,n),this.unmountOnLeave()&&(await Wt(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Jt(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=T({type:e,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,o){n&2&&g(o.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[_([ue,{provide:wn,useExisting:e},{provide:O,useExisting:e}]),V([v]),b],ngContentSelectors:Qo,decls:1,vars:1,template:function(n,o){n&1&&(ot(),ht(0,Xo,1,0)),n&2&&ft(o.rendered()?0:-1)},dependencies:[R,tt],encapsulation:2})}return e})(),kn=new B("MOTION_DIRECTIVE_INSTANCE"),_n=(()=>{class e extends D{$pcMotionDirective=u(kn,{optional:!0,skipSelf:!0})??void 0;visible=l(!1,{alias:"pMotion"});name=l(void 0,{alias:"pMotionName"});type=l(void 0,{alias:"pMotionType"});safe=l(void 0,{alias:"pMotionSafe"});disabled=l(!1,{alias:"pMotionDisabled"});appear=l(!1,{alias:"pMotionAppear"});enter=l(!0,{alias:"pMotionEnter"});leave=l(!0,{alias:"pMotionLeave"});duration=l(void 0,{alias:"pMotionDuration"});hideStrategy=l("display",{alias:"pMotionHideStrategy"});enterFromClass=l(void 0,{alias:"pMotionEnterFromClass"});enterToClass=l(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=l(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=l(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=l(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=l(void 0,{alias:"pMotionLeaveActiveClass"});options=l({},{alias:"pMotionOptions"});onBeforeEnter=P({alias:"pMotionOnBeforeEnter"});onEnter=P({alias:"pMotionOnEnter"});onAfterEnter=P({alias:"pMotionOnAfterEnter"});onEnterCancelled=P({alias:"pMotionOnEnterCancelled"});onBeforeLeave=P({alias:"pMotionOnBeforeLeave"});onLeave=P({alias:"pMotionOnLeave"});onAfterLeave=P({alias:"pMotionOnAfterLeave"});onLeaveCancelled=P({alias:"pMotionOnLeaveCancelled"});motionOptions=st(()=>{let t=this.options()??{};return{name:t.name??this.name(),type:t.type??this.type(),safe:t.safe??this.safe(),disabled:t.disabled??this.disabled(),appear:!1,enter:t.enter??this.enter(),leave:t.leave??this.leave(),duration:t.duration??this.duration(),enterClass:{from:t.enterClass?.from??(t.name?void 0:this.enterFromClass()),to:t.enterClass?.to??(t.name?void 0:this.enterToClass()),active:t.enterClass?.active??(t.name?void 0:this.enterActiveClass())},leaveClass:{from:t.leaveClass?.from??(t.name?void 0:this.leaveFromClass()),to:t.leaveClass?.to??(t.name?void 0:this.leaveToClass()),active:t.leaveClass?.active??(t.name?void 0:this.leaveActiveClass())},onBeforeEnter:t.onBeforeEnter??this.handleBeforeEnter,onEnter:t.onEnter??this.handleEnter,onAfterEnter:t.onAfterEnter??this.handleAfterEnter,onEnterCancelled:t.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:t.onBeforeLeave??this.handleBeforeLeave,onLeave:t.onLeave??this.handleLeave,onAfterLeave:t.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:t.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=t=>!this.destroyed&&this.onBeforeEnter.emit(t);handleEnter=t=>!this.destroyed&&this.onEnter.emit(t);handleAfterEnter=t=>!this.destroyed&&this.onAfterEnter.emit(t);handleEnterCancelled=t=>!this.destroyed&&this.onEnterCancelled.emit(t);handleBeforeLeave=t=>!this.destroyed&&this.onBeforeLeave.emit(t);handleLeave=t=>!this.destroyed&&this.onLeave.emit(t);handleAfterLeave=t=>!this.destroyed&&this.onAfterLeave.emit(t);handleLeaveCancelled=t=>!this.destroyed&&this.onLeaveCancelled.emit(t);constructor(){super(),q(()=>{this.motion||(this.motion=ce(this.$el,this.motionOptions()))}),ne(()=>{if(!this.$el)return;let t=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(Jt(this.$el,n),(t||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount?zt(this.$el,n):this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&zt(this.$el,n)}),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Jt(this.$el,this.hideStrategy()),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||e)};static \u0275dir=lt({type:e,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[_([ue,{provide:kn,useExisting:e},{provide:O,useExisting:e}]),b]})}return e})(),Mn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=A({imports:[Jo]})}return e})();var Sn=`
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
`;var ei=(e,i)=>({$implicit:e,closeFn:i}),ni=e=>({$implicit:e});function oi(e,i){e&1&&Lt(0)}function ii(e,i){if(e&1&&U(0,oi,1,0,"ng-container",3),e&2){let t=C();c("ngTemplateOutlet",t.headlessTemplate)("ngTemplateOutletContext",Ot(2,ei,t.message,t.onCloseIconClick))}}function si(e,i){if(e&1&&H(0,"span",4),e&2){let t=C(3);g(t.cn(t.cx("messageIcon"),t.message==null?null:t.message.icon)),c("pBind",t.ptm("messageIcon"))}}function ri(e,i){if(e&1&&(k(),H(0,"svg",11)),e&2){let t=C(4);g(t.cx("messageIcon")),c("pBind",t.ptm("messageIcon")),y("aria-hidden",!0)}}function ai(e,i){if(e&1&&(k(),H(0,"svg",12)),e&2){let t=C(4);g(t.cx("messageIcon")),c("pBind",t.ptm("messageIcon")),y("aria-hidden",!0)}}function li(e,i){if(e&1&&(k(),H(0,"svg",13)),e&2){let t=C(4);g(t.cx("messageIcon")),c("pBind",t.ptm("messageIcon")),y("aria-hidden",!0)}}function di(e,i){if(e&1&&(k(),H(0,"svg",14)),e&2){let t=C(4);g(t.cx("messageIcon")),c("pBind",t.ptm("messageIcon")),y("aria-hidden",!0)}}function ci(e,i){if(e&1&&(k(),H(0,"svg",12)),e&2){let t=C(4);g(t.cx("messageIcon")),c("pBind",t.ptm("messageIcon")),y("aria-hidden",!0)}}function ui(e,i){if(e&1&&ht(0,ri,1,4,":svg:svg",7)(1,ai,1,4,":svg:svg",8)(2,li,1,4,":svg:svg",9)(3,di,1,4,":svg:svg",10)(4,ci,1,4,":svg:svg",8),e&2){let t,n=C(3);ft((t=n.message.severity)==="success"?0:t==="info"?1:t==="error"?2:t==="warn"?3:4)}}function pi(e,i){if(e&1&&(ut(0),ht(1,si,1,3,"span",2)(2,ui,5,1),Q(3,"div",6)(4,"div",6),xt(5),X(),Q(6,"div",6),xt(7),X()(),pt()),e&2){let t=C(2);f(),ft(t.message.icon?1:2),f(2),c("pBind",t.ptm("messageText"))("ngClass",t.cx("messageText")),y("data-p",t.dataP),f(),c("pBind",t.ptm("summary"))("ngClass",t.cx("summary")),y("data-p",t.dataP),f(),Ce(" ",t.message.summary," "),f(),c("pBind",t.ptm("detail"))("ngClass",t.cx("detail")),y("data-p",t.dataP),f(),wt(t.message.detail)}}function hi(e,i){e&1&&Lt(0)}function fi(e,i){if(e&1&&H(0,"span",4),e&2){let t=C(4);g(t.cn(t.cx("closeIcon"),t.message==null?null:t.message.closeIcon)),c("pBind",t.ptm("closeIcon"))}}function bi(e,i){if(e&1&&U(0,fi,1,3,"span",17),e&2){let t=C(3);c("ngIf",t.message.closeIcon)}}function mi(e,i){if(e&1&&(k(),H(0,"svg",18)),e&2){let t=C(3);g(t.cx("closeIcon")),c("pBind",t.ptm("closeIcon")),y("aria-hidden",!0)}}function gi(e,i){if(e&1){let t=ee();Q(0,"div")(1,"button",15),dt("click",function(o){Tt(t);let s=C(2);return It(s.onCloseIconClick(o))})("keydown.enter",function(o){Tt(t);let s=C(2);return It(s.onCloseIconClick(o))}),ht(2,bi,1,1,"span",2)(3,mi,1,4,":svg:svg",16),X()()}if(e&2){let t=C(2);f(),c("pBind",t.ptm("closeButton")),y("class",t.cx("closeButton"))("aria-label",t.closeAriaLabel)("data-p",t.dataP),f(),ft(t.message.closeIcon?2:3)}}function vi(e,i){if(e&1&&(Q(0,"div",4),U(1,pi,8,12,"ng-container",5)(2,hi,1,0,"ng-container",3),ht(3,gi,4,5,"div"),X()),e&2){let t=C();g(t.cn(t.cx("messageContent"),t.message==null?null:t.message.contentStyleClass)),c("pBind",t.ptm("messageContent")),f(),c("ngIf",!t.template),f(),c("ngTemplateOutlet",t.template)("ngTemplateOutletContext",xe(7,ni,t.message)),f(),ft((t.message==null?null:t.message.closable)!==!1?3:-1)}}var yi=["message"],Ci=["headless"];function xi(e,i){if(e&1){let t=ee();Q(0,"p-toastItem",1),dt("onClose",function(o){Tt(t);let s=C();return It(s.onMessageClose(o))})("onAnimationEnd",function(){Tt(t);let o=C();return It(o.onAnimationEnd())})("onAnimationStart",function(){Tt(t);let o=C();return It(o.onAnimationStart())}),X()}if(e&2){let t=i.$implicit,n=i.index,o=C();c("message",t)("index",n)("life",o.life)("clearAll",o.clearAllTrigger())("template",o.template||o._template)("headlessTemplate",o.headlessTemplate||o._headlessTemplate)("pt",o.pt)("unstyled",o.unstyled())("motionOptions",o.computedMotionOptions())}}var Ti={root:({instance:e})=>{let{_position:i}=e;return{position:"fixed",top:i==="top-right"||i==="top-left"||i==="top-center"?"20px":i==="center"?"50%":null,right:(i==="top-right"||i==="bottom-right")&&"20px",bottom:(i==="bottom-left"||i==="bottom-right"||i==="bottom-center")&&"20px",left:i==="top-left"||i==="bottom-left"?"20px":i==="center"||i==="top-center"||i==="bottom-center"?"50%":null}}},Ii={root:({instance:e})=>["p-toast p-component",`p-toast-${e._position}`],message:({instance:e})=>({"p-toast-message":!0,"p-toast-message-info":e.message.severity==="info"||e.message.severity===void 0,"p-toast-message-warn":e.message.severity==="warn","p-toast-message-error":e.message.severity==="error","p-toast-message-success":e.message.severity==="success","p-toast-message-secondary":e.message.severity==="secondary","p-toast-message-contrast":e.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:e})=>({"p-toast-message-icon":!0,[`pi ${e.message.icon}`]:!!e.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:e})=>({"p-toast-close-icon":!0,[`pi ${e.message.closeIcon}`]:!!e.message.closeIcon})},te=(()=>{class e extends S{name="toast";style=Sn;classes=Ii;inlineStyles=Ti;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Dn=new B("TOAST_INSTANCE"),Ei=(()=>{class e extends D{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=l();clearAll=l(null);onAnimationStart=P();onAnimationEnd=P();onBeforeEnter(t){this.onAnimationStart.emit(t.element)}onAfterLeave(t){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(t.element))}onClose=new rt;_componentStyle=u(te);timeout;visible=Ct(void 0);isDestroyed=!1;isClosing=!1;constructor(t){super(),this.zone=t,q(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=t=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),t.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(n){return new(n||e)(Bt(Ht))};static \u0275cmp=T({type:e,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",W],life:[2,"life","life",W],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[_([te]),b],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(n,o){n&1&&(Q(0,"div",1,0),dt("pMotionOnBeforeEnter",function(r){return o.onBeforeEnter(r)})("pMotionOnAfterLeave",function(r){return o.onAfterLeave(r)})("mouseenter",function(){return o.onMouseEnter()})("mouseleave",function(){return o.onMouseLeave()}),ht(2,ii,1,5,"ng-container")(3,vi,4,9,"div",2),X()),n&2&&(g(o.cn(o.cx("message"),o.message==null?null:o.message.styleClass)),c("pMotion",o.visible())("pMotionAppear",!0)("pMotionName","p-toast-message")("pMotionOptions",o.motionOptions())("pBind",o.ptm("message")),y("id",o.message==null?null:o.message.id)("data-p",o.dataP),f(2),ft(o.headlessTemplate?2:3))},dependencies:[R,Rt,kt,_t,Xt,Ke,Je,nn,on,L,v,Mn,_n],encapsulation:2,changeDetection:0})}return e})(),wi=(()=>{class e extends D{componentName="Toast";$pcToast=u(Dn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(t){this._position=t,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=l(void 0);computedMotionOptions=st(()=>Z(Z({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new rt;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=u(Ve);_componentStyle=u(te);styleElement;id=J("pn_id_");templates;clearAllTrigger=Ct(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t)if(Array.isArray(t)){let n=t.filter(o=>this.canAdd(o));this.add(n)}else this.canAdd(t)&&this.add([t])}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"message":this._template=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._template=t.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(t){this.messages=this.messages?[...this.messages,...t]:[...t],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...t]:[...t]),this.cd.markForCheck()}canAdd(t){let n=this.key===t.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,t)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,t)),n}containsMessage(t,n){return t?t.find(o=>o.summary===n.summary&&o.detail==n.detail&&o.severity===n.severity)!=null:!1}onMessageClose(t){this.messages?.splice(t.index,1),this.onClose.emit({message:t.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&vt.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&Zt(this.messages)&&vt.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",ie(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let t="";for(let n in this.breakpoints){let o="";for(let s in this.breakpoints[n])o+=s+":"+this.breakpoints[n][s]+" !important;";t+=`
                    @media screen and (max-width: ${n}) {
                        .p-toast[${this.id}] {
                           ${o}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",t),ie(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&vt.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=T({type:e,selectors:[["p-toast"]],contentQueries:function(n,o,s){if(n&1&&Et(s,yi,5)(s,Ci,5)(s,St,4),n&2){let r;Y(r=K())&&(o.template=r.first),Y(r=K())&&(o.headlessTemplate=r.first),Y(r=K())&&(o.templates=r)}},hostVars:5,hostBindings:function(n,o){n&2&&(y("data-p",o.dataP),$t(o.sx("root")),g(o.cn(o.cx("root"),o.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",W],life:[2,"life","life",W],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",I],preventDuplicates:[2,"preventDuplicates","preventDuplicates",I],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[_([te,{provide:Dn,useExisting:e},{provide:O,useExisting:e}]),V([v]),b],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(n,o){n&1&&U(0,xi,1,9,"p-toastItem",0),n&2&&c("ngForOf",o.messages)},dependencies:[R,Ie,Ei,L],encapsulation:2,changeDetection:0})}return e})(),ml=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=A({imports:[wi,L,L]})}return e})();var Bn=`
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
`;var ki=["*"],_i={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},Ln=(()=>{class e extends S{name="iconfield";style=Bn;classes=_i;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var On=new B("ICONFIELD_INSTANCE"),Mi=(()=>{class e extends D{componentName="IconField";hostName="";_componentStyle=u(Ln);$pcIconField=u(On,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,o){n&2&&g(o.cn(o.cx("root"),o.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[_([Ln,{provide:On,useExisting:e},{provide:O,useExisting:e}]),V([v]),b],ngContentSelectors:ki,decls:1,vars:0,template:function(n,o){n&1&&(ot(),it(0))},dependencies:[R,tt],encapsulation:2,changeDetection:0})}return e})(),Ol=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=A({imports:[Mi]})}return e})();var Si=["*"],Di={root:"p-inputicon"},Nn=(()=>{class e extends S{name="inputicon";classes=Di;static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})(),An=new B("INPUTICON_INSTANCE"),Bi=(()=>{class e extends D{componentName="InputIcon";hostName="";styleClass;_componentStyle=u(Nn);$pcInputIcon=u(An,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(v,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(o){return(t||(t=p(e)))(o||e)}})();static \u0275cmp=T({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,o){n&2&&g(o.cn(o.cx("root"),o.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[_([Nn,{provide:An,useExisting:e},{provide:O,useExisting:e}]),V([v]),b],ngContentSelectors:Si,decls:1,vars:0,template:function(n,o){n&1&&(ot(),it(0))},dependencies:[R,L,tt],encapsulation:2,changeDetection:0})}return e})(),ql=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=F({type:e});static \u0275inj=A({imports:[Bi,L,L]})}return e})();export{le as a,Ai as b,Fi as c,Gt as d,Ue as e,Ge as f,Qt as g,G as h,Xt as i,en as j,nn as k,go as l,xr as m,Jo as n,_n as o,Mn as p,cn as q,Er as r,vt as s,$r as t,Rr as u,vn as v,fa as w,Ba as x,La as y,Mi as z,Ol as A,Bi as B,ql as C,wi as D,ml as E};
