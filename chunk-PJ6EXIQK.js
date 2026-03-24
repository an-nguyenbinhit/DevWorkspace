import{a as le}from"./chunk-D35YLMTC.js";import{b as B,c as j,j as i,k as N,o as de,p as se}from"./chunk-XWJLVUGV.js";import{Aa as re,W as oe,X as ie,ma as ce,na as b,ua as M,xa as ae}from"./chunk-JFVULKGI.js";import{j as ee,l as ne,n as te,s as _}from"./chunk-5P2WU4EE.js";import{$ as F,Bb as d,Cb as P,Db as O,Eb as E,Ec as W,Hb as G,Ib as $,Ic as L,Jb as H,La as h,O as R,P as k,Pb as U,Q as x,Rb as C,S as g,Sb as S,Tb as V,Tc as T,U as r,Ub as K,Uc as Y,Vb as X,Wb as z,Xb as A,Za as u,_a as v,bb as y,cb as f,cc as Z,db as w,dc as l,ea as D,ia as q,ma as s,nc as I,rb as m,rc as J}from"./chunk-X5CCZJ6Y.js";var Ce=["data-p-icon","minus"],pe=(()=>{class e extends de{static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275cmp=u({type:e,selectors:[["","data-p-icon","minus"]],features:[f],attrs:Ce,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,t){o&1&&(F(),G(0,"path",0))},encapsulation:2})}return e})();var he=`
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
`;var Ie=["icon"],_e=["input"],Me=(e,p,n)=>({checked:e,class:p,dataP:n});function Be(e,p){if(e&1&&E(0,"span",8),e&2){let n=C(3);l(n.cx("icon")),d("ngClass",n.checkboxIcon)("pBind",n.ptm("icon")),m("data-p",n.dataP)}}function Ne(e,p){if(e&1&&(F(),E(0,"svg",9)),e&2){let n=C(3);l(n.cx("icon")),d("pBind",n.ptm("icon")),m("data-p",n.dataP)}}function Fe(e,p){if(e&1&&($(0),w(1,Be,1,5,"span",6)(2,Ne,1,4,"svg",7),H()),e&2){let n=C(2);h(),d("ngIf",n.checkboxIcon),h(),d("ngIf",!n.checkboxIcon)}}function we(e,p){if(e&1&&(F(),E(0,"svg",10)),e&2){let n=C(2);l(n.cx("icon")),d("pBind",n.ptm("icon")),m("data-p",n.dataP)}}function Te(e,p){if(e&1&&($(0),w(1,Fe,3,2,"ng-container",3)(2,we,1,4,"svg",5),H()),e&2){let n=C();h(),d("ngIf",n.checked),h(),d("ngIf",n._indeterminate())}}function De(e,p){}function Ee(e,p){e&1&&w(0,De,0,0,"ng-template")}var Se=`
    ${he}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Ve={root:({instance:e})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":e.checked,"p-disabled":e.$disabled(),"p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-checkbox-sm p-inputfield-sm":e.size()==="small","p-checkbox-lg p-inputfield-lg":e.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},ue=(()=>{class e extends M{name="checkbox";style=Se;classes=Ve;static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var fe=new g("CHECKBOX_INSTANCE"),ze={provide:ae,useExisting:R(()=>me),multi:!0},me=(()=>{class e extends le{componentName="Checkbox";hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=L();size=L();onChange=new D;onFocus=new D;onBlur=new D;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:ie(this.value,this.modelValue())}_indeterminate=q(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=r(ue);bindDirectiveInstance=r(i,{self:!0});$pcCheckbox=r(fe,{optional:!0,skipSelf:!0})??void 0;$variant=W(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"icon":this._checkboxIconTemplate=n.template;break;case"checkboxicon":this._checkboxIconTemplate=n.template;break}})}onChanges(n){n.indeterminate&&this._indeterminate.set(n.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(n){let o,t=this.injector.get(re,null,{optional:!0,self:!0}),c=t&&!this.formControl?t.value:this.modelValue();this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(o),this.onModelChange(o)):(this.checked||this._indeterminate()?o=c.filter(a=>!oe(a,this.value)):o=c?[...c,this.value]:[this.value],this.onModelChange(o),this.writeModelValue(o),this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:n})}handleChange(n){this.readonly||this.updateModel(n)}onInputFocus(n){this.focused=!0,this.onFocus.emit(n)}onInputBlur(n){this.focused=!1,this.onBlur.emit(n),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(n,o){o(n),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275cmp=u({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,t,c){if(o&1&&K(c,Ie,4)(c,ce,4),o&2){let a;z(a=A())&&(t.checkboxIconTemplate=a.first),z(a=A())&&(t.templates=a)}},viewQuery:function(o,t){if(o&1&&X(_e,5),o&2){let c;z(c=A())&&(t.inputViewChild=c.first)}},hostVars:6,hostBindings:function(o,t){o&2&&(m("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.$disabled())("data-p",t.dataP),l(t.cn(t.cx("root"),t.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",T],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Y],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",T],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",T],autofocus:[2,"autofocus","autofocus",T],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[I([ze,ue,{provide:fe,useExisting:e},{provide:B,useExisting:e}]),y([i]),f],decls:5,vars:26,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(o,t){o&1&&(P(0,"input",1,0),U("focus",function(a){return t.onInputFocus(a)})("blur",function(a){return t.onInputBlur(a)})("change",function(a){return t.handleChange(a)}),O(),P(2,"div",2),w(3,Te,3,2,"ng-container",3)(4,Ee,1,0,null,4),O()),o&2&&(Z(t.inputStyle),l(t.cn(t.cx("input"),t.inputClass)),d("checked",t.checked)("pBind",t.ptm("input")),m("id",t.inputId)("value",t.value)("name",t.name())("tabindex",t.tabindex)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),h(2),l(t.cx("box")),d("pBind",t.ptm("box")),m("data-p",t.dataP),h(),d("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),h(),d("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",J(22,Me,t.checked,t.cx("icon"),t.dataP)))},dependencies:[_,ee,ne,te,b,se,pe,N,i],encapsulation:2,changeDetection:0})}return e})(),bn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=x({imports:[me,b,b]})}return e})();var ke=`
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
`;var Ae=["*"],je={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},xe=(()=>{class e extends M{name="iconfield";style=ke;classes=je;static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})();var ge=new g("ICONFIELD_INSTANCE"),Pe=(()=>{class e extends j{componentName="IconField";hostName="";_componentStyle=r(xe);$pcIconField=r(ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(i,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275cmp=u({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(o,t){o&2&&l(t.cn(t.cx("root"),t.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[I([xe,{provide:ge,useExisting:e},{provide:B,useExisting:e}]),y([i]),f],ngContentSelectors:Ae,decls:1,vars:0,template:function(o,t){o&1&&(S(),V(0))},dependencies:[_,N],encapsulation:2,changeDetection:0})}return e})(),Dn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=x({imports:[Pe]})}return e})();var Oe=["*"],$e={root:"p-inputicon"},ve=(()=>{class e extends M{name="inputicon";classes=$e;static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275prov=k({token:e,factory:e.\u0275fac})}return e})(),ye=new g("INPUTICON_INSTANCE"),He=(()=>{class e extends j{componentName="InputIcon";hostName="";styleClass;_componentStyle=r(ve);$pcInputIcon=r(ye,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=r(i,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275cmp=u({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(o,t){o&2&&l(t.cn(t.cx("root"),t.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[I([ve,{provide:ye,useExisting:e},{provide:B,useExisting:e}]),y([i]),f],ngContentSelectors:Oe,decls:1,vars:0,template:function(o,t){o&1&&(S(),V(0))},dependencies:[_,b,N],encapsulation:2,changeDetection:0})}return e})(),qn=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=v({type:e});static \u0275inj=x({imports:[He,b,b]})}return e})();export{me as a,bn as b,Pe as c,Dn as d,He as e,qn as f};
