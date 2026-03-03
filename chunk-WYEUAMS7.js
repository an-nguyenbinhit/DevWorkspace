import{d as St,g as Nt,h as Bt,i as Ft,s as Y}from"./chunk-UKY24RV4.js";import{a as Ot,c as J,h as Mt,i as _t}from"./chunk-WDIB5L22.js";import{$a as h,$c as kt,Ab as Z,Cb as N,Db as W,Eb as Q,Ed as It,Fb as ht,Gb as ut,Hb as q,Hc as bt,Ib as G,Ja as w,Jc as gt,Lc as vt,Mc as F,Md as wt,N as lt,Nd as Ct,O as f,P as m,Pb as ft,Qb as p,Qc as xt,R as b,Sa as tt,Sd as Lt,T as r,Tc as H,Ua as dt,Xa as C,Ya as g,Yb as v,Yd as Dt,Za as $,Zd as M,_ as P,_a as L,_c as yt,ab as A,ac as mt,ad as Tt,da as R,de as y,ea as at,ed as x,gb as T,ge as k,ha as ct,he as V,id as st,ie as l,ja as S,jc as B,jd as X,je as E,kd as Et,la as a,md as K,nc as c,ob as u,pb as et,qb as it,rb as U,ub as pt,uc as d,vb as nt,vc as D,vd as O,wb as ot}from"./chunk-MDW6M3T4.js";import{a as z}from"./chunk-VOSPIT4N.js";var Vt=`
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
`;var Jt={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},zt=(()=>{class e extends y{name="tooltip";style=Vt;classes=Jt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=a(e)))(i||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var Pt=new b("TOOLTIP_INSTANCE"),Fe=(()=>{class e extends V{zone;viewContainer;componentName="Tooltip";$pcTooltip=r(Pt,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;showOnEllipsis=!1;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;appendTo=c(void 0);$appendTo=B(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,showOnEllipsis:!1,id:Lt("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=r(zt);interactionInProgress=!1;ptTooltip=c();pTooltipPT=c();pTooltipUnstyled=c();constructor(t,n){super(),this.zone=t,this.viewContainer=n,S(()=>{let i=this.ptTooltip()||this.pTooltipPT();i&&this.directivePT.set(i)}),S(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){xt(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:!0}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:!0})),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}onChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.showOnEllipsis&&this.setOption({showOnEllipsis:t.showOnEllipsis.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=z(z({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(H(t.relatedTarget,"p-tooltip")||H(t.relatedTarget,"p-tooltip-text")||H(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onTouchStart(t){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener())}onTouchEnd(t){this.isAutoHide()&&this.deactivate()}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",t=>{this.container&&!this.container.contains(t.target)&&!this.el.nativeElement.contains(t.target)&&(this.deactivate(),this.unbindDocumentTouchListener())}))}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null)}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}hasEllipsis(){let t=this.el.nativeElement;return t.offsetWidth<t.scrollWidth||t.offsetHeight<t.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=X("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let t=X("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(t),this.tooltipText=X("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?st(this.container,this.el.nativeElement):st(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Et(this.container,250),this.getOption("tooltipZIndex")==="auto"?Y.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Y.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t&&typeof t.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(t);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[t]||[];for(let[o,s]of i.entries())if(o===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),n=t.left+kt(),i=t.top+Tt();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?K(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,n=x(t),i=(O(t)-O(this.container))/2;this.alignTooltip(n,i);let o=this.getArrowElement();o.style.top="50%",o.style.right=null,o.style.bottom=null,o.style.left="0"}alignLeft(){this.preAlign("left");let t=this.getArrowElement(),n=x(this.container),i=(O(this.el.nativeElement)-O(this.container))/2;this.alignTooltip(-n,i),t.style.top="50%",t.style.right="0",t.style.bottom=null,t.style.left=null}alignTop(){this.preAlign("top");let t=this.getArrowElement(),n=this.getHostOffset(),i=x(this.container),o=(x(this.el.nativeElement)-x(this.container))/2,s=O(this.container);this.alignTooltip(o,-s);let _=n.left-this.getHostOffset().left+i/2;t.style.top=null,t.style.right=null,t.style.bottom="0",t.style.left=_+"px"}getArrowElement(){return K(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let t=this.getArrowElement(),n=x(this.container),i=this.getHostOffset(),o=(x(this.el.nativeElement)-x(this.container))/2,s=O(this.el.nativeElement);this.alignTooltip(o,s);let _=i.left-this.getHostOffset().left+n/2;t.style.top="0",t.style.right=null,t.style.bottom=null,t.style.left=_+"px"}alignTooltip(t,n){let i=this.getHostOffset(),o=i.left+t,s=i.top+n;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=z(z({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return H(t,"p-inputwrapper")?K(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+t,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let t=this.container.getBoundingClientRect(),n=t.top,i=t.left,o=x(this.container),s=O(this.container),_=yt();return i+o>_.width||i<0||n<0||n+s>_.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new St(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),t==="focus"||t==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):It(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&Y.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||e)(tt(at),tt(dt))};static \u0275dir=$({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",d],showDelay:[2,"showDelay","showDelay",D],hideDelay:[2,"hideDelay","hideDelay",D],life:[2,"life","life",D],positionTop:[2,"positionTop","positionTop",D],positionLeft:[2,"positionLeft","positionLeft",D],autoHide:[2,"autoHide","autoHide",d],fitContent:[2,"fitContent","fitContent",d],hideOnEscape:[2,"hideOnEscape","hideOnEscape",d],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",d],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[v([zt,{provide:Pt,useExisting:e},{provide:k,useExisting:e}]),h]})}return e})(),Ve=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=g({type:e});static \u0275inj=m({imports:[E,E]})}return e})();var Yt=["data-p-icon","minus"],At=(()=>{class e extends Bt{static \u0275fac=(()=>{let t;return function(i){return(t||(t=a(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["","data-p-icon","minus"]],features:[h],attrs:Yt,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,i){n&1&&(P(),pt(0,"path",0))},encapsulation:2})}return e})();var Ht=`
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
`;var te=["icon"],ee=["input"],ie=(e,I,t)=>({checked:e,class:I,dataP:t});function ne(e,I){if(e&1&&U(0,"span",8),e&2){let t=N(3);p(t.cx("icon")),u("ngClass",t.checkboxIcon)("pBind",t.ptm("icon")),T("data-p",t.dataP)}}function oe(e,I){if(e&1&&(P(),U(0,"svg",9)),e&2){let t=N(3);p(t.cx("icon")),u("pBind",t.ptm("icon")),T("data-p",t.dataP)}}function se(e,I){if(e&1&&(nt(0),A(1,ne,1,5,"span",6)(2,oe,1,4,"svg",7),ot()),e&2){let t=N(2);w(),u("ngIf",t.checkboxIcon),w(),u("ngIf",!t.checkboxIcon)}}function re(e,I){if(e&1&&(P(),U(0,"svg",10)),e&2){let t=N(2);p(t.cx("icon")),u("pBind",t.ptm("icon")),T("data-p",t.dataP)}}function le(e,I){if(e&1&&(nt(0),A(1,se,3,2,"ng-container",3)(2,re,1,4,"svg",5),ot()),e&2){let t=N();w(),u("ngIf",t.checked),w(),u("ngIf",t._indeterminate())}}function ae(e,I){}function ce(e,I){e&1&&A(0,ae,0,0,"ng-template")}var de=`
    ${Ht}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,pe={root:({instance:e})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":e.checked,"p-disabled":e.$disabled(),"p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-checkbox-sm p-inputfield-sm":e.size()==="small","p-checkbox-lg p-inputfield-lg":e.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},jt=(()=>{class e extends y{name="checkbox";style=de;classes=pe;static \u0275fac=(()=>{let t;return function(i){return(t||(t=a(e)))(i||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var Rt=new b("CHECKBOX_INSTANCE"),he={provide:Ot,useExisting:lt(()=>$t),multi:!0},$t=(()=>{class e extends _t{componentName="Checkbox";hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=c();size=c();onChange=new R;onFocus=new R;onBlur=new R;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:Ct(this.value,this.modelValue())}_indeterminate=ct(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=r(jt);bindDirectiveInstance=r(l,{self:!0});$pcCheckbox=r(Rt,{optional:!0,skipSelf:!0})??void 0;$variant=B(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}onChanges(t){t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(t){let n,i=this.injector.get(J,null,{optional:!0,self:!0}),o=i&&!this.formControl?i.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=o.filter(s=>!wt(s,this.value)):n=o?[...o,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(t,n){n(t),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=a(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,i,o){if(n&1&&ht(o,te,4)(o,Dt,4),n&2){let s;q(s=G())&&(i.checkboxIconTemplate=s.first),q(s=G())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&ut(ee,5),n&2){let o;q(o=G())&&(i.inputViewChild=o.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(T("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.$disabled())("data-p",i.dataP),p(i.cn(i.cx("root"),i.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",d],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",D],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",d],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",d],autofocus:[2,"autofocus","autofocus",d],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[v([he,jt,{provide:Rt,useExisting:e},{provide:k,useExisting:e}]),L([l]),h],decls:5,vars:26,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(n,i){n&1&&(et(0,"input",1,0),Z("focus",function(s){return i.onInputFocus(s)})("blur",function(s){return i.onInputBlur(s)})("change",function(s){return i.handleChange(s)}),it(),et(2,"div",2),A(3,le,3,2,"ng-container",3)(4,ce,1,0,null,4),it()),n&2&&(ft(i.inputStyle),p(i.cn(i.cx("input"),i.inputClass)),u("checked",i.checked)("pBind",i.ptm("input")),T("id",i.inputId)("value",i.value)("name",i.name())("tabindex",i.tabindex)("required",i.required()?"":void 0)("readonly",i.readonly?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),w(2),p(i.cx("box")),u("pBind",i.ptm("box")),T("data-p",i.dataP),w(),u("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),w(),u("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",mt(22,ie,i.checked,i.cx("icon"),i.dataP)))},dependencies:[F,bt,gt,vt,M,Ft,At,E,l],encapsulation:2,changeDetection:0})}return e})(),pi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=g({type:e});static \u0275inj=m({imports:[$t,M,M]})}return e})();var Ut=`
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
`;var ue=`
    ${Ut}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,fe={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},Zt=(()=>{class e extends y{name="inputtext";style=ue;classes=fe;static \u0275fac=(()=>{let t;return function(i){return(t||(t=a(e)))(i||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var Wt=new b("INPUTTEXT_INSTANCE"),Di=(()=>{class e extends Mt{componentName="InputText";hostName="";ptInputText=c();pInputTextPT=c();pInputTextUnstyled=c();bindDirectiveInstance=r(l,{self:!0});$pcInputText=r(Wt,{optional:!0,skipSelf:!0})??void 0;ngControl=r(J,{optional:!0,self:!0});pcFluid=r(Nt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=c();fluid=c(void 0,{transform:d});invalid=c(void 0,{transform:d});$variant=B(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=r(Zt);constructor(){super(),S(()=>{let t=this.ptInputText()||this.pInputTextPT();t&&this.directivePT.set(t)}),S(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||e)};static \u0275dir=$({type:e,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,i){n&1&&Z("input",function(){return i.onInput()}),n&2&&(T("data-p",i.dataP),p(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[v([Zt,{provide:Wt,useExisting:e},{provide:k,useExisting:e}]),L([l]),h]})}return e})(),Oi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=g({type:e});static \u0275inj=m({})}return e})();var Qt=`
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
`;var me=["*"],be={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},qt=(()=>{class e extends y{name="iconfield";style=Qt;classes=be;static \u0275fac=(()=>{let t;return function(i){return(t||(t=a(e)))(i||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})();var Gt=new b("ICONFIELD_INSTANCE"),ge=(()=>{class e extends V{componentName="IconField";hostName="";_componentStyle=r(qt);$pcIconField=r(Gt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let t;return function(i){return(t||(t=a(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,i){n&2&&p(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[v([qt,{provide:Gt,useExisting:e},{provide:k,useExisting:e}]),L([l]),h],ngContentSelectors:me,decls:1,vars:0,template:function(n,i){n&1&&(W(),Q(0))},dependencies:[F,E],encapsulation:2,changeDetection:0})}return e})(),Ui=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=g({type:e});static \u0275inj=m({imports:[ge]})}return e})();var ve=["*"],xe={root:"p-inputicon"},Xt=(()=>{class e extends y{name="inputicon";classes=xe;static \u0275fac=(()=>{let t;return function(i){return(t||(t=a(e)))(i||e)}})();static \u0275prov=f({token:e,factory:e.\u0275fac})}return e})(),Kt=new b("INPUTICON_INSTANCE"),ye=(()=>{class e extends V{componentName="InputIcon";hostName="";styleClass;_componentStyle=r(Xt);$pcInputIcon=r(Kt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(l,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(i){return(t||(t=a(e)))(i||e)}})();static \u0275cmp=C({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,i){n&2&&p(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[v([Xt,{provide:Kt,useExisting:e},{provide:k,useExisting:e}]),L([l]),h],ngContentSelectors:ve,decls:1,vars:0,template:function(n,i){n&1&&(W(),Q(0))},dependencies:[F,M,E],encapsulation:2,changeDetection:0})}return e})(),sn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=g({type:e});static \u0275inj=m({imports:[ye,M,M]})}return e})();export{Fe as a,Ve as b,$t as c,pi as d,Di as e,Oi as f,ge as g,Ui as h,ye as i,sn as j};
