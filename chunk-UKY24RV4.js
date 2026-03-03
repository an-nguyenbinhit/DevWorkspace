import{j as ye}from"./chunk-WDIB5L22.js";import{$a as x,$b as It,$d as qt,Ab as mt,Ad as me,Cb as m,Cd as Dt,Db as st,Eb as rt,Fb as St,Gd as Ut,Hb as J,Hc as le,Hd as Zt,Ib as tt,Ic as de,Id as At,Ja as f,Jc as Mt,Kc as ce,Kd as he,Lc as Bt,Mc as $,Nb as ie,O as N,P as q,Pb as se,Qb as I,Qc as Wt,R as W,Rb as dt,Rd as jt,Sa as oe,Sb as ht,Sc as ue,Sd as U,T as v,Tb as re,Uc as wt,Vc as pe,Wc as kt,Wd as ve,Xa as w,Xc as be,Y as ut,Ya as G,Yb as P,Yc as fe,Yd as Pt,Z as pt,Za as bt,Zc as ge,Zd as F,_,_a as Q,_b as ae,aa as Jt,ab as L,da as lt,de as V,ea as te,gb as C,ge as Z,ha as Ct,he as D,ie as E,ja as et,jb as nt,jc as vt,je as Ft,kb as ot,la as y,mc as S,na as ee,nc as d,ob as u,pb as Y,qb as X,ra as ne,rb as A,sb as O,tb as z,ub as k,uc as M,vb as ft,vc as ct,wb as gt,wc as Rt,xb as xt,yb as Ht,zb as it}from"./chunk-MDW6M3T4.js";import{a as K}from"./chunk-VOSPIT4N.js";var Gt=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let s=0;s<o.length;s++)t.classList.add(o[s])}else{let o=n.split(" ");for(let s=0;s<o.length;s++)t.className+=" "+o[s]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(s=>this.removeClass(t,s)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var s=0;s<n.length;s++){if(n[s]==t)return o;n[s].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],s=0;for(var r=0;r<o.length;r++){if(o[r]==t)return s;o[r].attributes&&o[r].attributes[n]&&o[r].nodeType==1&&s++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",s=!0){t&&n&&(s&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let s=j=>{if(j)return getComputedStyle(j).getPropertyValue("position")==="relative"?j:s(j.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),b=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),p=this.getViewport(),h=s(t)?.getBoundingClientRect()||{top:-1*b,left:-1*c},T,B,at="top";l.top+a+r.height>p.height?(T=l.top-h.top-r.height,at="bottom",l.top+T<0&&(T=-1*l.top)):(T=a+l.top-h.top,at="top");let yt=l.left+r.width-p.width,Tt=l.left-h.left;if(r.width>p.width?B=(l.left-h.left)*-1:yt>0?B=Tt-yt:B=l.left-h.left,t.style.top=T+"px",t.style.left=B+"px",t.style.transformOrigin=at,o){let j=fe(/-anchor-gutter$/)?.value;t.style.marginTop=at==="bottom"?`calc(${j??"2px"} * -1)`:j??""}}static absolutePosition(t,n,o=!0){let s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=s.height,a=s.width,l=n.offsetHeight,b=n.offsetWidth,c=n.getBoundingClientRect(),p=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),h=this.getViewport(),T,B;c.top+l+r>h.height?(T=c.top+p-r,t.style.transformOrigin="bottom",T<0&&(T=p)):(T=l+c.top+p,t.style.transformOrigin="top"),c.left+a>h.width?B=Math.max(0,c.left+g+b-a):B=c.left+g,t.style.top=T+"px",t.style.left=B+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),s=/(auto|scroll)/,r=a=>{let l=window.getComputedStyle(a,null);return s.test(l.getPropertyValue("overflow"))||s.test(l.getPropertyValue("overflowX"))||s.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let b=l.split(",");for(let c of b){let p=this.findSingle(a,c);p&&r(p)&&n.push(p)}}a.nodeType!==9&&r(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),s=o?parseFloat(o):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),a=r?parseFloat(r):0,l=t.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-s-a,p=t.scrollTop,g=t.clientHeight,h=this.getOuterHeight(n);c<0?t.scrollTop=p+c:c+h>g&&(t.scrollTop=p+c-g+h)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,s=0,r=function(){s=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=s,o=+new Date,+s<1&&(window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,16))};r()}static fadeOut(t,n){var o=1,s=50,r=n,a=s/r;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},s)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return s.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let s=getComputedStyle(t);o+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let s=getComputedStyle(t);o+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,s=n.getElementsByTagName("body")[0],r=t.innerWidth||o.clientWidth||s.clientWidth,a=t.innerHeight||o.clientHeight||s.clientHeight;return{width:r,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var s=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),s=[];for(let r of o){let a=getComputedStyle(r);this.isVisible(r)&&a.display!="none"&&a.visibility!="hidden"&&s.push(r)}return s}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let s=getComputedStyle(o);if(this.isVisible(o)&&s.display!="none"&&s.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),s=0;if(o&&o.length>0){let r=o.indexOf(o[0].ownerDocument.activeElement);n?r==-1||r===0?s=o.length-1:s=r-1:r!=-1&&r!==o.length-1&&(s=r+1)}return o[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let s=document.createElement(t);return this.setAttributes(s,n),s.append(...o),s}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(s,r)=>{let a=t?.$attrs?.[s]?[t?.$attrs?.[s]]:[];return[r].flat().reduce((l,b)=>{if(b!=null){let c=typeof b;if(c==="string"||c==="number")l.push(b);else if(c==="object"){let p=Array.isArray(b)?o(s,b):Object.entries(b).map(([g,h])=>s==="style"&&(h||h===0)?`${g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?g:void 0);l=p.length?l.concat(p.filter(g=>!!g)):l}}return l},a)};Object.entries(n).forEach(([s,r])=>{if(r!=null){let a=s.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),r):s==="pBind"?this.setAttributes(t,r):(r=s==="class"?[...new Set(o("class",r))].join(" ").trim():s==="style"?o("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[s]=r),t.setAttribute(s,r))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();function Bo(){pe({variableName:qt("scrollbar.width").name})}function ko(){be({variableName:qt("scrollbar.width").name})}var Ce=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=Gt.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var xe=(()=>{class e extends D{autofocus=!1;focused=!1;platformId=v(ne);document=v(Jt);host=v(ee);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Wt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Gt.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=bt({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[x]})}return e})();var Ie=`
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
`;var Je=`
    ${Ie}

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
`,tn={root:({instance:e})=>{let i=typeof e.value=="function"?e.value():e.value,t=typeof e.size=="function"?e.size():e.size,n=typeof e.badgeSize=="function"?e.badgeSize():e.badgeSize,o=typeof e.severity=="function"?e.severity():e.severity;return["p-badge p-component",{"p-badge-circle":he(i)&&String(i).length===1,"p-badge-dot":At(i),"p-badge-sm":t==="small"||n==="small","p-badge-lg":t==="large"||n==="large","p-badge-xl":t==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},we=(()=>{class e extends V{name="badge";style=Je;classes=tn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Ee=new W("BADGE_INSTANCE");var Qt=(()=>{class e extends D{componentName="Badge";$pcBadge=v(Ee,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=d();badgeSize=d();size=d();severity=d();value=d();badgeDisabled=d(!1,{transform:M});_componentStyle=v(we);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,o){n&2&&(C("data-p",o.dataP),I(o.cn(o.cx("root"),o.styleClass())),ie("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[P([we,{provide:Ee,useExisting:e},{provide:Z,useExisting:e}]),Q([E]),x],decls:1,vars:1,template:function(n,o){n&1&&dt(0),n&2&&ht(o.value())},dependencies:[$,F,Ft],encapsulation:2,changeDetection:0})}return e})(),_e=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=q({imports:[Qt,F,F]})}return e})();var nn=["*"],on={root:"p-fluid"},Te=(()=>{class e extends V{name="fluid";classes=on;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Se=new W("FLUID_INSTANCE"),Me=(()=>{class e extends D{componentName="Fluid";$pcFluid=v(Se,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=v(Te);static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&I(o.cx("root"))},features:[P([Te,{provide:Se,useExisting:e},{provide:Z,useExisting:e}]),Q([E]),x],ngContentSelectors:nn,decls:1,vars:0,template:function(n,o){n&1&&(st(),rt(0))},dependencies:[$],encapsulation:2,changeDetection:0})}return e})();var sn=["*"],rn=`
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
`,Be=(()=>{class e extends V{name="baseicon";css=rn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var R=(()=>{class e extends D{spin=!1;_componentStyle=v(Be);getClassNames(){return ue("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&I(o.getClassNames())},inputs:{spin:[2,"spin","spin",M]},features:[P([Be]),x],ngContentSelectors:sn,decls:1,vars:0,template:function(n,o){n&1&&(st(),rt(0))},encapsulation:2,changeDetection:0})}return e})();var an=["data-p-icon","check"],ke=(()=>{class e extends R{static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["","data-p-icon","check"]],features:[x],attrs:an,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(_(),k(0,"path",0))},encapsulation:2})}return e})();var ln=["data-p-icon","exclamation-triangle"],De=(()=>{class e extends R{pathId;onInit(){this.pathId="url(#"+U()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["","data-p-icon","exclamation-triangle"]],features:[x],attrs:ln,decls:7,vars:2,consts:[["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(_(),O(0,"g"),k(1,"path",0)(2,"path",1)(3,"path",2),z(),O(4,"defs")(5,"clipPath",3),k(6,"rect",4),z()()),n&2&&(C("clip-path",o.pathId),f(5),it("id",o.pathId))},encapsulation:2})}return e})();var dn=["data-p-icon","info-circle"],Ae=(()=>{class e extends R{pathId;onInit(){this.pathId="url(#"+U()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["","data-p-icon","info-circle"]],features:[x],attrs:dn,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(_(),O(0,"g"),k(1,"path",0),z(),O(2,"defs")(3,"clipPath",1),k(4,"rect",2),z()()),n&2&&(C("clip-path",o.pathId),f(3),it("id",o.pathId))},encapsulation:2})}return e})();var cn=["data-p-icon","spinner"],Pe=(()=>{class e extends R{pathId;onInit(){this.pathId="url(#"+U()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["","data-p-icon","spinner"]],features:[x],attrs:cn,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(_(),O(0,"g"),k(1,"path",0),z(),O(2,"defs")(3,"clipPath",1),k(4,"rect",2),z()()),n&2&&(C("clip-path",o.pathId),f(3),it("id",o.pathId))},encapsulation:2})}return e})();var un=["data-p-icon","times"],Fe=(()=>{class e extends R{static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["","data-p-icon","times"]],features:[x],attrs:un,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(_(),k(0,"path",0))},encapsulation:2})}return e})();var pn=["data-p-icon","times-circle"],Ne=(()=>{class e extends R{pathId;onInit(){this.pathId="url(#"+U()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["","data-p-icon","times-circle"]],features:[x],attrs:pn,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(_(),O(0,"g"),k(1,"path",0),z(),O(2,"defs")(3,"clipPath",1),k(4,"rect",2),z()()),n&2&&(C("clip-path",o.pathId),f(3),it("id",o.pathId))},encapsulation:2})}return e})();var Le=`
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
`;var fn=["content"],gn=["loadingicon"],mn=["icon"],hn=["*"],$e=(e,i)=>({class:e,pt:i});function vn(e,i){e&1&&xt(0)}function yn(e,i){if(e&1&&A(0,"span",7),e&2){let t=m(3);I(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),u("pBind",t.ptm("loadingIcon")),C("aria-hidden",!0)}}function Cn(e,i){if(e&1&&(_(),A(0,"svg",8)),e&2){let t=m(3);I(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),u("pBind",t.ptm("loadingIcon"))("spin",!0),C("aria-hidden",!0)}}function xn(e,i){if(e&1&&(ft(0),L(1,yn,1,4,"span",3)(2,Cn,1,5,"svg",6),gt()),e&2){let t=m(2);f(),u("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),f(),u("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function In(e,i){}function wn(e,i){if(e&1&&L(0,In,0,0,"ng-template",9),e&2){let t=m(2);u("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function En(e,i){if(e&1&&(ft(0),L(1,xn,3,2,"ng-container",2)(2,wn,1,1,null,5),gt()),e&2){let t=m();f(),u("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),f(),u("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",It(3,$e,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function _n(e,i){if(e&1&&A(0,"span",7),e&2){let t=m(2);I(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),u("pBind",t.ptm("icon")),C("data-p",t.dataIconP)}}function Tn(e,i){}function Sn(e,i){if(e&1&&L(0,Tn,0,0,"ng-template",9),e&2){let t=m(2);u("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Mn(e,i){if(e&1&&(ft(0),L(1,_n,1,4,"span",3)(2,Sn,1,1,null,5),gt()),e&2){let t=m();f(),u("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),f(),u("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",It(3,$e,t.cx("icon"),t.ptm("icon")))}}function Bn(e,i){if(e&1&&(Y(0,"span",7),dt(1),X()),e&2){let t=m();I(t.cx("label")),u("pBind",t.ptm("label")),C("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),f(),ht(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function kn(e,i){if(e&1&&A(0,"p-badge",10),e&2){let t=m();u("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var Dn={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!e.label&&!e.buttonProps?.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label,"p-button-icon-top":(e.iconPos==="top"||e.buttonProps?.iconPos==="top")&&e.label||e.buttonProps?.label,"p-button-icon-bottom":(e.iconPos==="bottom"||e.buttonProps?.iconPos==="bottom")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.cx("icon")).filter(([,i])=>!!i).reduce((i,[t])=>i+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},Oe=(()=>{class e extends V{name="button";style=Le;classes=Dn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var ze=new W("BUTTON_INSTANCE");var An=(()=>{class e extends D{componentName="Button";hostName="";$pcButton=v(ze,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(E,{self:!0});_componentStyle=v(Oe);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=d(void 0,{transform:M});onClick=new lt;onFocus=new lt;onBlur=new lt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=v(Me,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["p-button"]],contentQueries:function(n,o,s){if(n&1&&St(s,fn,5)(s,gn,5)(s,mn,5)(s,Pt,4),n&2){let r;J(r=tt())&&(o.contentTemplate=r.first),J(r=tt())&&(o.loadingIconTemplate=r.first),J(r=tt())&&(o.iconTemplate=r.first),J(r=tt())&&(o.templates=r)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",M],raised:[2,"raised","raised",M],rounded:[2,"rounded","rounded",M],text:[2,"text","text",M],plain:[2,"plain","plain",M],outlined:[2,"outlined","outlined",M],link:[2,"link","link",M],tabindex:[2,"tabindex","tabindex",ct],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",M],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",M],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[P([Oe,{provide:ze,useExisting:e},{provide:Z,useExisting:e}]),Q([E]),x],ngContentSelectors:hn,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,o){n&1&&(st(),Y(0,"button",0),mt("click",function(r){return o.onClick.emit(r)})("focus",function(r){return o.onFocus.emit(r)})("blur",function(r){return o.onBlur.emit(r)}),rt(1),L(2,vn,1,0,"ng-container",1)(3,En,3,6,"ng-container",2)(4,Mn,3,6,"ng-container",2)(5,Bn,2,6,"span",3)(6,kn,1,4,"p-badge",4),X()),n&2&&(I(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),u("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),C("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),f(2),u("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),f(),u("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),f(),u("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),f(),u("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),f(),u("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))))},dependencies:[$,Mt,Bt,ce,ye,xe,Pe,_e,Qt,F,E],encapsulation:2,changeDetection:0})}return e})(),gs=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=q({imports:[$,An,F,F]})}return e})();var Pn=Object.defineProperty,Ve=Object.getOwnPropertySymbols,Fn=Object.prototype.hasOwnProperty,Nn=Object.prototype.propertyIsEnumerable,He=(e,i,t)=>i in e?Pn(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,Re=(e,i)=>{for(var t in i||(i={}))Fn.call(i,t)&&He(e,t,i[t]);if(Ve)for(var t of Ve(i))Nn.call(i,t)&&He(e,t,i[t]);return e},Ln=(e,i,t)=>new Promise((n,o)=>{var s=l=>{try{a(t.next(l))}catch(b){o(b)}},r=l=>{try{a(t.throw(l))}catch(b){o(b)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,r);a((t=t.apply(e,i)).next())}),Lt="animation",Et="transition";function On(e){return e?e.disabled||!!(e.safe&&me()):!1}function zn(e,i){return e?Re(Re({},e),Object.entries(i).reduce((t,[n,o])=>{var s;return t[n]=(s=e[n])!=null?s:o,t},{})):i}function $n(e){let{name:i,enterClass:t,leaveClass:n}=e||{};return{enter:{from:t?.from||`${i}-enter-from`,to:t?.to||`${i}-enter-to`,active:t?.active||`${i}-enter-active`},leave:{from:n?.from||`${i}-leave-from`,to:n?.to||`${i}-leave-to`,active:n?.active||`${i}-leave-active`}}}function Vn(e){return{enter:{onBefore:e?.onBeforeEnter,onStart:e?.onEnter,onAfter:e?.onAfterEnter,onCancelled:e?.onEnterCancelled},leave:{onBefore:e?.onBeforeLeave,onStart:e?.onLeave,onAfter:e?.onAfterLeave,onCancelled:e?.onLeaveCancelled}}}function Hn(e,i){let t=window.getComputedStyle(e),n=h=>{let T=t[`${h}Delay`],B=t[`${h}Duration`];return[T.split(", ").map(jt),B.split(", ").map(jt)]},[o,s]=n(Et),[r,a]=n(Lt),l=Math.max(...s.map((h,T)=>h+o[T])),b=Math.max(...a.map((h,T)=>h+r[T])),c,p=0,g=0;return i===Et?l>0&&(c=Et,p=l,g=s.length):i===Lt?b>0&&(c=Lt,p=b,g=a.length):(p=Math.max(l,b),c=p>0?l>b?Et:Lt:void 0,g=c?c===Et?s.length:a.length:0),{type:c,timeout:p,count:g}}function Rn(e,i){return typeof e=="number"?e:typeof e=="object"&&e[i]!=null?e[i]:null}function Wn(e,i=!0,t=!1){if(!i&&!t)return;let n=ge(e);i&&Zt(e,"--pui-motion-height",n.height+"px"),t&&Zt(e,"--pui-motion-width",n.width+"px")}var Un={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function Yt(e,i){if(!e)throw new Error("Element is required.");let t={},n=!1,o={},s=null,r={},a=c=>{if(Object.assign(t,zn(c,Un)),!t.enter&&!t.leave)throw new Error("Enter or leave must be true.");r=Vn(t),n=On(t),o=$n(t),s=null},l=c=>Ln(null,null,function*(){s?.();let{onBefore:p,onStart:g,onAfter:h,onCancelled:T}=r[c]||{},B={element:e};if(n){p?.(B),g?.(B),h?.(B);return}let{from:at,active:yt,to:Tt}=o[c]||{};return Wn(e,t.autoHeight,t.autoWidth),p?.(B),wt(e,at),wt(e,yt),e.offsetHeight,kt(e,at),wt(e,Tt),g?.(B),new Promise(j=>{let Xe=Rn(t.duration,c),Kt=()=>{kt(e,[Tt,yt]),s=null},Ke=()=>{Kt(),h?.(B),j()};s=()=>{Kt(),T?.(B),j()},jn(e,t.type,Xe,Ke)})});a(i);let b={enter:()=>t.enter?l("enter"):Promise.resolve(),leave:()=>t.leave?l("leave"):Promise.resolve(),cancel:()=>{s?.(),s=null},update:(c,p)=>{if(!c)throw new Error("Element is required.");e=c,b.cancel(),a(p)}};return t.appear&&b.enter(),b}var Zn=0;function jn(e,i,t,n){let o=e._motionEndId=++Zn,s=()=>{o===e._motionEndId&&n()};if(t!=null)return setTimeout(s,t);let{type:r,timeout:a,count:l}=Hn(e,i);if(!r){n();return}let b=r+"end",c=0,p=()=>{e.removeEventListener(b,g,!0),s()},g=h=>{h.target===e&&++c>=l&&p()};e.addEventListener(b,g,{capture:!0,once:!0}),setTimeout(()=>{c<l&&p()},a+1)}var qn=["*"];function Gn(e,i){e&1&&rt(0)}var Ot=new WeakMap;function _t(e,i){if(e)switch(Ot.has(e)||Ot.set(e,{display:e.style.display,visibility:e.style.visibility,maxHeight:e.style.maxHeight}),i){case"display":e.style.display="none";break;case"visibility":e.style.visibility="hidden",e.style.maxHeight="0";break}}function zt(e,i){if(!e)return;let t=Ot.get(e)??e.style;switch(i){case"display":e.style.display=t?.display||"";break;case"visibility":e.style.visibility=t?.visibility||"",e.style.maxHeight=t?.maxHeight||"";break}Ot.delete(e)}var Qn=`
    .p-motion {
        display: block;
    }
`,Yn={root:"p-motion"},Xt=(()=>{class e extends V{name="motion";style=Qn;classes=Yn;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var We=new W("MOTION_INSTANCE"),Xn=(()=>{class e extends D{$pcMotion=v(We,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(E,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(K(K({},this.ptms(["host","root"])),n))}_componentStyle=v(Xt);visible=d(!1);mountOnEnter=d(!0);unmountOnLeave=d(!0);name=d(void 0);type=d(void 0);safe=d(void 0);disabled=d(!1);appear=d(!1);enter=d(!0);leave=d(!0);duration=d(void 0);hideStrategy=d("display");enterFromClass=d(void 0);enterToClass=d(void 0);enterActiveClass=d(void 0);leaveFromClass=d(void 0);leaveToClass=d(void 0);leaveActiveClass=d(void 0);options=d({});onBeforeEnter=S();onEnter=S();onAfterEnter=S();onEnterCancelled=S();onBeforeLeave=S();onLeave=S();onAfterLeave=S();onLeaveCancelled=S();motionOptions=vt(()=>{let t=this.options();return{name:t.name??this.name(),type:t.type??this.type(),safe:t.safe??this.safe(),disabled:t.disabled??this.disabled(),appear:!1,enter:t.enter??this.enter(),leave:t.leave??this.leave(),duration:t.duration??this.duration(),enterClass:{from:t.enterClass?.from??(t.name?void 0:this.enterFromClass()),to:t.enterClass?.to??(t.name?void 0:this.enterToClass()),active:t.enterClass?.active??(t.name?void 0:this.enterActiveClass())},leaveClass:{from:t.leaveClass?.from??(t.name?void 0:this.leaveFromClass()),to:t.leaveClass?.to??(t.name?void 0:this.leaveToClass()),active:t.leaveClass?.active??(t.name?void 0:this.leaveActiveClass())},onBeforeEnter:t.onBeforeEnter??this.handleBeforeEnter,onEnter:t.onEnter??this.handleEnter,onAfterEnter:t.onAfterEnter??this.handleAfterEnter,onEnterCancelled:t.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:t.onBeforeLeave??this.handleBeforeLeave,onLeave:t.onLeave??this.handleLeave,onAfterLeave:t.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:t.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=Ct(!1);handleBeforeEnter=t=>!this.destroyed&&this.onBeforeEnter.emit(t);handleEnter=t=>!this.destroyed&&this.onEnter.emit(t);handleAfterEnter=t=>!this.destroyed&&this.onAfterEnter.emit(t);handleEnterCancelled=t=>!this.destroyed&&this.onEnterCancelled.emit(t);handleBeforeLeave=t=>!this.destroyed&&this.onBeforeLeave.emit(t);handleLeave=t=>!this.destroyed&&this.onLeave.emit(t);handleAfterLeave=t=>!this.destroyed&&this.onAfterLeave.emit(t);handleLeaveCancelled=t=>!this.destroyed&&this.onLeaveCancelled.emit(t);constructor(){super(),et(()=>{let t=this.hideStrategy();this.isInitialMount?(_t(this.$el,t),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(_t(this.$el,t),this.rendered.set(!0))}),et(()=>{this.motion||(this.motion=Yt(this.$el,this.motionOptions()))}),Rt(async()=>{if(!this.$el)return;let t=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(await Dt(),zt(this.$el,n),(t||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount||(await Dt(),this.motion?.leave()?.then(async()=>{this.$el&&!this.cancelled&&!this.visible()&&(_t(this.$el,n),this.unmountOnLeave()&&(await Dt(),this.cancelled||this.rendered.set(!1)))})),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,zt(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=w({type:e,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,o){n&2&&I(o.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[P([Xt,{provide:We,useExisting:e},{provide:Z,useExisting:e}]),Q([E]),x],ngContentSelectors:qn,decls:1,vars:1,template:function(n,o){n&1&&(st(),nt(0,Gn,1,0)),n&2&&ot(o.rendered()?0:-1)},dependencies:[$,Ft],encapsulation:2})}return e})(),Ue=new W("MOTION_DIRECTIVE_INSTANCE"),Ze=(()=>{class e extends D{$pcMotionDirective=v(Ue,{optional:!0,skipSelf:!0})??void 0;visible=d(!1,{alias:"pMotion"});name=d(void 0,{alias:"pMotionName"});type=d(void 0,{alias:"pMotionType"});safe=d(void 0,{alias:"pMotionSafe"});disabled=d(!1,{alias:"pMotionDisabled"});appear=d(!1,{alias:"pMotionAppear"});enter=d(!0,{alias:"pMotionEnter"});leave=d(!0,{alias:"pMotionLeave"});duration=d(void 0,{alias:"pMotionDuration"});hideStrategy=d("display",{alias:"pMotionHideStrategy"});enterFromClass=d(void 0,{alias:"pMotionEnterFromClass"});enterToClass=d(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=d(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=d(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=d(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=d(void 0,{alias:"pMotionLeaveActiveClass"});options=d({},{alias:"pMotionOptions"});onBeforeEnter=S({alias:"pMotionOnBeforeEnter"});onEnter=S({alias:"pMotionOnEnter"});onAfterEnter=S({alias:"pMotionOnAfterEnter"});onEnterCancelled=S({alias:"pMotionOnEnterCancelled"});onBeforeLeave=S({alias:"pMotionOnBeforeLeave"});onLeave=S({alias:"pMotionOnLeave"});onAfterLeave=S({alias:"pMotionOnAfterLeave"});onLeaveCancelled=S({alias:"pMotionOnLeaveCancelled"});motionOptions=vt(()=>{let t=this.options()??{};return{name:t.name??this.name(),type:t.type??this.type(),safe:t.safe??this.safe(),disabled:t.disabled??this.disabled(),appear:!1,enter:t.enter??this.enter(),leave:t.leave??this.leave(),duration:t.duration??this.duration(),enterClass:{from:t.enterClass?.from??(t.name?void 0:this.enterFromClass()),to:t.enterClass?.to??(t.name?void 0:this.enterToClass()),active:t.enterClass?.active??(t.name?void 0:this.enterActiveClass())},leaveClass:{from:t.leaveClass?.from??(t.name?void 0:this.leaveFromClass()),to:t.leaveClass?.to??(t.name?void 0:this.leaveToClass()),active:t.leaveClass?.active??(t.name?void 0:this.leaveActiveClass())},onBeforeEnter:t.onBeforeEnter??this.handleBeforeEnter,onEnter:t.onEnter??this.handleEnter,onAfterEnter:t.onAfterEnter??this.handleAfterEnter,onEnterCancelled:t.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:t.onBeforeLeave??this.handleBeforeLeave,onLeave:t.onLeave??this.handleLeave,onAfterLeave:t.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:t.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=t=>!this.destroyed&&this.onBeforeEnter.emit(t);handleEnter=t=>!this.destroyed&&this.onEnter.emit(t);handleAfterEnter=t=>!this.destroyed&&this.onAfterEnter.emit(t);handleEnterCancelled=t=>!this.destroyed&&this.onEnterCancelled.emit(t);handleBeforeLeave=t=>!this.destroyed&&this.onBeforeLeave.emit(t);handleLeave=t=>!this.destroyed&&this.onLeave.emit(t);handleAfterLeave=t=>!this.destroyed&&this.onAfterLeave.emit(t);handleLeaveCancelled=t=>!this.destroyed&&this.onLeaveCancelled.emit(t);constructor(){super(),et(()=>{this.motion||(this.motion=Yt(this.$el,this.motionOptions()))}),Rt(()=>{if(!this.$el)return;let t=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(zt(this.$el,n),(t||!this.isInitialMount)&&this.motion?.enter()):this.isInitialMount?_t(this.$el,n):this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&_t(this.$el,n)}),this.isInitialMount=!1})}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,zt(this.$el,this.hideStrategy()),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||e)};static \u0275dir=bt({type:e,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[P([Xt,{provide:Ue,useExisting:e},{provide:Z,useExisting:e}]),x]})}return e})(),je=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=q({imports:[Xn]})}return e})();var qe=class e{static isArray(i,t=!0){return Array.isArray(i)&&(t||i.length!==0)}static isObject(i,t=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(t||Object.keys(i).length!==0)}static equals(i,t,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(t,n):this.equalsByValue(i,t)}static equalsByValue(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var n=Array.isArray(i),o=Array.isArray(t),s,r,a;if(n&&o){if(r=i.length,r!=t.length)return!1;for(s=r;s--!==0;)if(!this.equalsByValue(i[s],t[s]))return!1;return!0}if(n!=o)return!1;var l=this.isDate(i),b=this.isDate(t);if(l!=b)return!1;if(l&&b)return i.getTime()==t.getTime();var c=i instanceof RegExp,p=t instanceof RegExp;if(c!=p)return!1;if(c&&p)return i.toString()==t.toString();var g=Object.keys(i);if(r=g.length,r!==Object.keys(t).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,g[s]))return!1;for(s=r;s--!==0;)if(a=g[s],!this.equalsByValue(i[a],t[a]))return!1;return!0}return i!==i&&t!==t}static resolveFieldData(i,t){if(i&&t){if(this.isFunction(t))return t(i);if(t.indexOf(".")==-1)return i[t];{let n=t.split("."),o=i;for(let s=0,r=n.length;s<r;++s){if(o==null)return null;o=o[n[s]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,t,n){let o;i&&t!==n&&(n>=i.length&&(n%=i.length,t%=i.length),i.splice(n,0,i.splice(t,1)[0]))}static insertIntoOrderedArray(i,t,n,o){if(n.length>0){let s=!1;for(let r=0;r<n.length;r++)if(this.findIndexInList(n[r],o)>t){n.splice(r,0,i),s=!0;break}s||n.push(i)}else n.push(i)}static findIndexInList(i,t){let n=-1;if(t){for(let o=0;o<t.length;o++)if(t[o]==i){n=o;break}}return n}static contains(i,t){if(i!=null&&t&&t.length){for(let n of t)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,t,n,o=1){let s=-1,r=this.isEmpty(i),a=this.isEmpty(t);return r&&a?s=0:r?s=o:a?s=-o:typeof i=="string"&&typeof t=="string"?s=i.localeCompare(t,n,{numeric:!0}):s=i<t?-1:i>t?1:0,s}static sort(i,t,n=1,o,s=1){let r=e.compare(i,t,o,n),a=n;return(e.isEmpty(i)||e.isEmpty(t))&&(a=s===1?n:s),a*r}static merge(i,t){if(!(i==null&&t==null)){{if((i==null||typeof i=="object")&&(t==null||typeof t=="object"))return K(K({},i||{}),t||{});if((i==null||typeof i=="string")&&(t==null||typeof t=="string"))return[i||"",t||""].join(" ")}return t||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...t){return this.isFunction(i)?i(...t):i}static findLastIndex(i,t){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(t)}catch{n=i.lastIndexOf([...i].reverse().find(t))}return n}static findLast(i,t){let n;if(this.isNotEmpty(i))try{n=i.findLast(t)}catch{n=[...i].reverse().find(t)}return n}static deepEquals(i,t){if(i===t)return!0;if(i&&t&&typeof i=="object"&&typeof t=="object"){var n=Array.isArray(i),o=Array.isArray(t),s,r,a;if(n&&o){if(r=i.length,r!=t.length)return!1;for(s=r;s--!==0;)if(!this.deepEquals(i[s],t[s]))return!1;return!0}if(n!=o)return!1;var l=i instanceof Date,b=t instanceof Date;if(l!=b)return!1;if(l&&b)return i.getTime()==t.getTime();var c=i instanceof RegExp,p=t instanceof RegExp;if(c!=p)return!1;if(c&&p)return i.toString()==t.toString();var g=Object.keys(i);if(r=g.length,r!==Object.keys(t).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,g[s]))return!1;for(s=r;s--!==0;)if(a=g[s],!this.deepEquals(i[a],t[a]))return!1;return!0}return i!==i&&t!==t}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,t=!0){return typeof i=="string"&&(t||i!=="")}},Ge=0;function Ps(e="pn_id_"){return Ge++,`${e}${Ge}`}function Jn(){let e=[],i=(s,r)=>{let a=e.length>0?e[e.length-1]:{key:s,value:r},l=a.value+(a.key===s?0:r)+2;return e.push({key:s,value:l}),l},t=s=>{e=e.filter(r=>r.value!==s)},n=()=>e.length>0?e[e.length-1].value:0,o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,r,a)=>{r&&(r.style.zIndex=String(i(s,a)))},clear:s=>{s&&(t(o(s)),s.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:t}}var $t=Jn();var Qe=`
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
`;var to=(e,i)=>({$implicit:e,closeFn:i}),eo=e=>({$implicit:e});function no(e,i){e&1&&xt(0)}function oo(e,i){if(e&1&&L(0,no,1,0,"ng-container",3),e&2){let t=m();u("ngTemplateOutlet",t.headlessTemplate)("ngTemplateOutletContext",It(2,to,t.message,t.onCloseIconClick))}}function io(e,i){if(e&1&&A(0,"span",4),e&2){let t=m(3);I(t.cn(t.cx("messageIcon"),t.message==null?null:t.message.icon)),u("pBind",t.ptm("messageIcon"))}}function so(e,i){if(e&1&&(_(),A(0,"svg",11)),e&2){let t=m(4);I(t.cx("messageIcon")),u("pBind",t.ptm("messageIcon")),C("aria-hidden",!0)}}function ro(e,i){if(e&1&&(_(),A(0,"svg",12)),e&2){let t=m(4);I(t.cx("messageIcon")),u("pBind",t.ptm("messageIcon")),C("aria-hidden",!0)}}function ao(e,i){if(e&1&&(_(),A(0,"svg",13)),e&2){let t=m(4);I(t.cx("messageIcon")),u("pBind",t.ptm("messageIcon")),C("aria-hidden",!0)}}function lo(e,i){if(e&1&&(_(),A(0,"svg",14)),e&2){let t=m(4);I(t.cx("messageIcon")),u("pBind",t.ptm("messageIcon")),C("aria-hidden",!0)}}function co(e,i){if(e&1&&(_(),A(0,"svg",12)),e&2){let t=m(4);I(t.cx("messageIcon")),u("pBind",t.ptm("messageIcon")),C("aria-hidden",!0)}}function uo(e,i){if(e&1&&nt(0,so,1,4,":svg:svg",7)(1,ro,1,4,":svg:svg",8)(2,ao,1,4,":svg:svg",9)(3,lo,1,4,":svg:svg",10)(4,co,1,4,":svg:svg",8),e&2){let t,n=m(3);ot((t=n.message.severity)==="success"?0:t==="info"?1:t==="error"?2:t==="warn"?3:4)}}function po(e,i){if(e&1&&(ft(0),nt(1,io,1,3,"span",2)(2,uo,5,1),Y(3,"div",6)(4,"div",6),dt(5),X(),Y(6,"div",6),dt(7),X()(),gt()),e&2){let t=m(2);f(),ot(t.message.icon?1:2),f(2),u("pBind",t.ptm("messageText"))("ngClass",t.cx("messageText")),C("data-p",t.dataP),f(),u("pBind",t.ptm("summary"))("ngClass",t.cx("summary")),C("data-p",t.dataP),f(),re(" ",t.message.summary," "),f(),u("pBind",t.ptm("detail"))("ngClass",t.cx("detail")),C("data-p",t.dataP),f(),ht(t.message.detail)}}function bo(e,i){e&1&&xt(0)}function fo(e,i){if(e&1&&A(0,"span",4),e&2){let t=m(4);I(t.cn(t.cx("closeIcon"),t.message==null?null:t.message.closeIcon)),u("pBind",t.ptm("closeIcon"))}}function go(e,i){if(e&1&&L(0,fo,1,3,"span",17),e&2){let t=m(3);u("ngIf",t.message.closeIcon)}}function mo(e,i){if(e&1&&(_(),A(0,"svg",18)),e&2){let t=m(3);I(t.cx("closeIcon")),u("pBind",t.ptm("closeIcon")),C("aria-hidden",!0)}}function ho(e,i){if(e&1){let t=Ht();Y(0,"div")(1,"button",15),mt("click",function(o){ut(t);let s=m(2);return pt(s.onCloseIconClick(o))})("keydown.enter",function(o){ut(t);let s=m(2);return pt(s.onCloseIconClick(o))}),nt(2,go,1,1,"span",2)(3,mo,1,4,":svg:svg",16),X()()}if(e&2){let t=m(2);f(),u("pBind",t.ptm("closeButton")),C("class",t.cx("closeButton"))("aria-label",t.closeAriaLabel)("data-p",t.dataP),f(),ot(t.message.closeIcon?2:3)}}function vo(e,i){if(e&1&&(Y(0,"div",4),L(1,po,8,12,"ng-container",5)(2,bo,1,0,"ng-container",3),nt(3,ho,4,5,"div"),X()),e&2){let t=m();I(t.cn(t.cx("messageContent"),t.message==null?null:t.message.contentStyleClass)),u("pBind",t.ptm("messageContent")),f(),u("ngIf",!t.template),f(),u("ngTemplateOutlet",t.template)("ngTemplateOutletContext",ae(7,eo,t.message)),f(),ot((t.message==null?null:t.message.closable)!==!1?3:-1)}}var yo=["message"],Co=["headless"];function xo(e,i){if(e&1){let t=Ht();Y(0,"p-toastItem",1),mt("onClose",function(o){ut(t);let s=m();return pt(s.onMessageClose(o))})("onAnimationEnd",function(){ut(t);let o=m();return pt(o.onAnimationEnd())})("onAnimationStart",function(){ut(t);let o=m();return pt(o.onAnimationStart())}),X()}if(e&2){let t=i.$implicit,n=i.index,o=m();u("message",t)("index",n)("life",o.life)("clearAll",o.clearAllTrigger())("template",o.template||o._template)("headlessTemplate",o.headlessTemplate||o._headlessTemplate)("pt",o.pt)("unstyled",o.unstyled())("motionOptions",o.computedMotionOptions())}}var Io={root:({instance:e})=>{let{_position:i}=e;return{position:"fixed",top:i==="top-right"||i==="top-left"||i==="top-center"?"20px":i==="center"?"50%":null,right:(i==="top-right"||i==="bottom-right")&&"20px",bottom:(i==="bottom-left"||i==="bottom-right"||i==="bottom-center")&&"20px",left:i==="top-left"||i==="bottom-left"?"20px":i==="center"||i==="top-center"||i==="bottom-center"?"50%":null}}},wo={root:({instance:e})=>["p-toast p-component",`p-toast-${e._position}`],message:({instance:e})=>({"p-toast-message":!0,"p-toast-message-info":e.message.severity==="info"||e.message.severity===void 0,"p-toast-message-warn":e.message.severity==="warn","p-toast-message-error":e.message.severity==="error","p-toast-message-success":e.message.severity==="success","p-toast-message-secondary":e.message.severity==="secondary","p-toast-message-contrast":e.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:e})=>({"p-toast-message-icon":!0,[`pi ${e.message.icon}`]:!!e.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:e})=>({"p-toast-close-icon":!0,[`pi ${e.message.closeIcon}`]:!!e.message.closeIcon})},Vt=(()=>{class e extends V{name="toast";style=Qe;classes=wo;inlineStyles=Io;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=N({token:e,factory:e.\u0275fac})}return e})();var Ye=new W("TOAST_INSTANCE"),Eo=(()=>{class e extends D{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=d();clearAll=d(null);onAnimationStart=S();onAnimationEnd=S();onBeforeEnter(t){this.onAnimationStart.emit(t.element)}onAfterLeave(t){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(t.element))}onClose=new lt;_componentStyle=v(Vt);timeout;visible=Ct(void 0);isDestroyed=!1;isClosing=!1;constructor(t){super(),this.zone=t,et(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=t=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),t.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(n){return new(n||e)(oe(te))};static \u0275cmp=w({type:e,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",ct],life:[2,"life","life",ct],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[P([Vt]),x],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(n,o){n&1&&(Y(0,"div",1,0),mt("pMotionOnBeforeEnter",function(r){return o.onBeforeEnter(r)})("pMotionOnAfterLeave",function(r){return o.onAfterLeave(r)})("mouseenter",function(){return o.onMouseEnter()})("mouseleave",function(){return o.onMouseLeave()}),nt(2,oo,1,5,"ng-container")(3,vo,4,9,"div",2),X()),n&2&&(I(o.cn(o.cx("message"),o.message==null?null:o.message.styleClass)),u("pMotion",o.visible())("pMotionAppear",!0)("pMotionName","p-toast-message")("pMotionOptions",o.motionOptions())("pBind",o.ptm("message")),C("id",o.message==null?null:o.message.id)("data-p",o.dataP),f(2),ot(o.headlessTemplate?2:3))},dependencies:[$,le,Mt,Bt,ke,De,Ae,Fe,Ne,F,E,je,Ze],encapsulation:2,changeDetection:0})}return e})(),_o=(()=>{class e extends D{componentName="Toast";$pcToast=v(Ye,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=v(E,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(t){this._position=t,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=d(void 0);computedMotionOptions=vt(()=>K(K({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new lt;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=v(ve);_componentStyle=v(Vt);styleElement;id=U("pn_id_");templates;clearAllTrigger=Ct(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t)if(Array.isArray(t)){let n=t.filter(o=>this.canAdd(o));this.add(n)}else this.canAdd(t)&&this.add([t])}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"message":this._template=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._template=t.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(t){this.messages=this.messages?[...this.messages,...t]:[...t],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...t]:[...t]),this.cd.markForCheck()}canAdd(t){let n=this.key===t.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,t)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,t)),n}containsMessage(t,n){return t?t.find(o=>o.summary===n.summary&&o.detail==n.detail&&o.severity===n.severity)!=null:!1}onMessageClose(t){this.messages?.splice(t.index,1),this.onClose.emit({message:t.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&$t.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&At(this.messages)&&$t.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",Ut(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let t="";for(let n in this.breakpoints){let o="";for(let s in this.breakpoints[n])o+=s+":"+this.breakpoints[n][s]+" !important;";t+=`
                    @media screen and (max-width: ${n}) {
                        .p-toast[${this.id}] {
                           ${o}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",t),Ut(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&$t.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=w({type:e,selectors:[["p-toast"]],contentQueries:function(n,o,s){if(n&1&&St(s,yo,5)(s,Co,5)(s,Pt,4),n&2){let r;J(r=tt())&&(o.template=r.first),J(r=tt())&&(o.headlessTemplate=r.first),J(r=tt())&&(o.templates=r)}},hostVars:5,hostBindings:function(n,o){n&2&&(C("data-p",o.dataP),se(o.sx("root")),I(o.cn(o.cx("root"),o.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",M],baseZIndex:[2,"baseZIndex","baseZIndex",ct],life:[2,"life","life",ct],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",M],preventDuplicates:[2,"preventDuplicates","preventDuplicates",M],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[P([Vt,{provide:Ye,useExisting:e},{provide:Z,useExisting:e}]),Q([E]),x],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(n,o){n&1&&L(0,xo,1,9,"p-toastItem",0),n&2&&u("ngForOf",o.messages)},dependencies:[$,de,Eo,F],encapsulation:2,changeDetection:0})}return e})(),or=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=G({type:e});static \u0275inj=q({imports:[_o,F,F]})}return e})();export{Gt as a,Bo as b,ko as c,Ce as d,xe as e,_e as f,Me as g,R as h,ke as i,Pe as j,Fe as k,An as l,gs as m,Xn as n,Ze as o,je as p,qe as q,Ps as r,$t as s,_o as t,or as u};
