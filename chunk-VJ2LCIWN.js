import{a as un,b as qn}from"./chunk-B2CO5IUF.js";import{a as fn,b as hn}from"./chunk-SOALMYIM.js";import{a as cn,b as mn}from"./chunk-5RHGAHLF.js";import"./chunk-YRB7RDXC.js";import"./chunk-JWAJNWJP.js";import{a as bn,b as gn}from"./chunk-I7MVOXSN.js";import{b as rn}from"./chunk-OEF5LE7T.js";import"./chunk-23YLFAYD.js";import{a as an,b as sn}from"./chunk-APAXAKHP.js";import{b as on}from"./chunk-VRAJS77Y.js";import{a as ln}from"./chunk-EFOCEJGP.js";import{E as dn,F as pn,b as me,c as Ze,j as F,k as en,u as nn,w as tn}from"./chunk-P2ZJ4752.js";import{ja as pe,la as Qe,ma as Q,na as D,u as de,ua as ce}from"./chunk-FVWAUT2G.js";import{a as He,c as Je,e as $e,f as Ye,m as Ke,n as Xe}from"./chunk-ID27I7KF.js";import{j as Ae,l as Re,m as U,n as Ve,o as se,s as Ue,t as W,y as We}from"./chunk-OGRZIKY5.js";import{$a as R,Ac as Ne,Db as d,Eb as r,Fb as a,Gb as h,La as s,Mb as le,Nb as z,O as Se,P as Z,Q as ee,Qa as Te,Rb as N,S as ne,Tb as g,U as M,Ua as Pe,Ub as Ee,Vb as Fe,Vc as Le,Wb as re,Wc as Ge,Yb as L,Z as B,Zb as G,_ as O,ab as te,cc as ae,db as ie,dc as Be,ea as j,eb as oe,ec as he,fb as w,fc as S,gc as p,hc as Y,ic as K,jc as Oe,lc as T,ma as J,mc as P,nc as E,pc as V,qc as I,rc as Ie,tb as $,uc as De,vc as je,yc as ze}from"./chunk-PFTFWWA5.js";import{a as fe}from"./chunk-JGDRNPQP.js";var vn=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var In=["content"],Dn=i=>({$implicit:i});function jn(i,o){if(i&1&&(r(0,"div"),p(1),a()),i&2){let e=g(2);ae("display",e.value!=null&&e.value!==0?"flex":"none"),s(),Oe("",e.value,"",e.unit)}}function zn(i,o){i&1&&le(0)}function Nn(i,o){if(i&1&&(r(0,"div",2)(1,"div",2),w(2,jn,2,4,"div",3)(3,zn,1,0,"ng-container",4),a()()),i&2){let e=g();S(e.cn(e.cx("value"),e.valueStyleClass)),ae("width",e.value+"%")("display","flex")("background",e.color),d("pBind",e.ptm("value")),$("data-p",e.dataP),s(),S(e.cx("label")),d("pBind",e.ptm("label")),$("data-p",e.dataP),s(),d("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),s(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Ie(17,Dn,e.value))}}function Ln(i,o){if(i&1&&h(0,"div",2),i&2){let e=g();S(e.cn(e.cx("value"),e.valueStyleClass)),ae("background",e.color),d("pBind",e.ptm("value")),$("data-p",e.dataP)}}var Gn={root:({instance:i})=>["p-progressbar p-component",{"p-progressbar-determinate":i.mode=="determinate","p-progressbar-indeterminate":i.mode=="indeterminate"}],value:"p-progressbar-value",label:"p-progressbar-label"},yn=(()=>{class i extends ce{name="progressbar";style=vn;classes=Gn;static \u0275fac=(()=>{let e;return function(t){return(e||(e=J(i)))(t||i)}})();static \u0275prov=Z({token:i,factory:i.\u0275fac})}return i})();var wn=new ne("PROGRESSBAR_INSTANCE"),ve=(()=>{class i extends Ze{componentName="ProgressBar";$pcProgressBar=M(wn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=M(F,{self:!0});value;showValue=!0;styleClass;valueStyleClass;unit="%";mode="determinate";color;contentTemplate;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=M(yn);templates;_contentTemplate;onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}get dataP(){return this.cn({determinate:this.mode==="determinate",indeterminate:this.mode==="indeterminate"})}static \u0275fac=(()=>{let e;return function(t){return(e||(e=J(i)))(t||i)}})();static \u0275cmp=R({type:i,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(n,t,l){if(n&1&&re(l,In,4)(l,Q,4),n&2){let m;L(m=G())&&(t.contentTemplate=m.first),L(m=G())&&(t.templates=m)}},hostAttrs:["role","progressbar"],hostVars:7,hostBindings:function(n,t){n&2&&($("aria-valuemin",0)("aria-valuenow",t.value)("aria-valuemax",100)("aria-level",t.value+t.unit)("data-p",t.dataP),S(t.cn(t.cx("root"),t.styleClass)))},inputs:{value:[2,"value","value",Ge],showValue:[2,"showValue","showValue",Le],styleClass:"styleClass",valueStyleClass:"valueStyleClass",unit:"unit",mode:"mode",color:"color"},features:[V([yn,{provide:wn,useExisting:i},{provide:me,useExisting:i}]),ie([F]),oe],decls:2,vars:2,consts:[[3,"class","pBind","width","display","background",4,"ngIf"],[3,"class","pBind","background",4,"ngIf"],[3,"pBind"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,t){n&1&&w(0,Nn,4,19,"div",0)(1,Ln,1,6,"div",1),n&2&&(d("ngIf",t.mode==="determinate"),s(),d("ngIf",t.mode==="indeterminate"))},dependencies:[W,U,se,D,F],encapsulation:2,changeDetection:0})}return i})(),_n=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=te({type:i});static \u0275inj=ee({imports:[ve,D,D]})}return i})();var Cn=`
    /*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
    .ql-container {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
        visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
        pointer-events: none;
    }
    .ql-clipboard {
        inset-inline-start: -100000px;
        height: 1px;
        overflow-y: hidden;
        position: absolute;
        top: 50%;
    }
    .ql-clipboard p {
        margin: 0;
        padding: 0;
    }
    .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 12px 15px;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .ql-editor > * {
        cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
        margin: 0;
        padding: 0;
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol,
    .ql-editor ul {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
        list-style-type: none;
    }
    .ql-editor ul > li::before {
        content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
        pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
        color: #777;
        cursor: pointer;
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
        content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
        content: '\\2610';
    }
    .ql-editor li::before {
        display: inline-block;
        white-space: nowrap;
        width: 1.2rem;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
        margin-inline-start: -1.5rem;
        margin-inline-end: 0.3rem;
        text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
        margin-inline-start: 0.3rem;
        margin-inline-end: -1.5rem;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
        padding-inline-end: 1.5rem;
    }
    .ql-editor ol li {
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        counter-increment: list-0;
    }
    .ql-editor ol li:before {
        content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
        content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
        counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
        content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
        counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
        content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
        counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
        content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
        counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
        counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
        content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
        counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
        counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
        content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
        counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
        counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
        content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
        counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
        counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
        content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
        counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
        counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
        content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-video {
        display: block;
        max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
        margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
        margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
        background: #000;
    }
    .ql-editor .ql-bg-red {
        background: #e60000;
    }
    .ql-editor .ql-bg-orange {
        background: #f90;
    }
    .ql-editor .ql-bg-yellow {
        background: #ff0;
    }
    .ql-editor .ql-bg-green {
        background: #008a00;
    }
    .ql-editor .ql-bg-blue {
        background: #06c;
    }
    .ql-editor .ql-bg-purple {
        background: #93f;
    }
    .ql-editor .ql-color-white {
        color: #fff;
    }
    .ql-editor .ql-color-red {
        color: #e60000;
    }
    .ql-editor .ql-color-orange {
        color: #f90;
    }
    .ql-editor .ql-color-yellow {
        color: #ff0;
    }
    .ql-editor .ql-color-green {
        color: #008a00;
    }
    .ql-editor .ql-color-blue {
        color: #06c;
    }
    .ql-editor .ql-color-purple {
        color: #93f;
    }
    .ql-editor .ql-font-serif {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-editor .ql-font-monospace {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-editor .ql-size-small {
        font-size: 0.75rem;
    }
    .ql-editor .ql-size-large {
        font-size: 1.5rem;
    }
    .ql-editor .ql-size-huge {
        font-size: 2.5rem;
    }
    .ql-editor .ql-direction-rtl {
        direction: rtl;
        text-align: inherit;
    }
    .ql-editor .ql-align-center {
        text-align: center;
    }
    .ql-editor .ql-align-justify {
        text-align: justify;
    }
    .ql-editor .ql-align-right {
        text-align: right;
    }
    .ql-editor.ql-blank::before {
        color: dt('form.field.placeholder.color');
        content: attr(data-placeholder);
        font-style: italic;
        inset-inline-start: 15px;
        pointer-events: none;
        position: absolute;
        inset-inline-end: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        float: left;
        height: 24px;
        padding-block: 3px;
        padding-inline: 5px;
        width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
        float: left;
        height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
        outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
        display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
        color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
        fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
        stroke: #06c;
    }
    @media (pointer: coarse) {
        .ql-snow.ql-toolbar button:hover:not(.ql-active),
        .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: #444;
        }
    }
    .ql-snow {
        box-sizing: border-box;
    }
    .ql-snow * {
        box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
        display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
        visibility: hidden;
    }
    .ql-snow .ql-tooltip {
        position: absolute;
        transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
        cursor: pointer;
        text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
        transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
        display: inline-block;
        vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #444;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
        fill: none;
        stroke: #444;
        stroke-miterlimit: 10;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow .ql-empty {
        fill: none;
    }
    .ql-snow .ql-even {
        fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
        stroke-width: 1;
    }
    .ql-snow .ql-transparent {
        opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
        display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
        display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
        display: none;
    }
    .ql-snow .ql-editor h1 {
        font-size: 2rem;
    }
    .ql-snow .ql-editor h2 {
        font-size: 1.5rem;
    }
    .ql-snow .ql-editor h3 {
        font-size: 1.17rem;
    }
    .ql-snow .ql-editor h4 {
        font-size: 1rem;
    }
    .ql-snow .ql-editor h5 {
        font-size: 0.83rem;
    }
    .ql-snow .ql-editor h6 {
        font-size: 0.67rem;
    }
    .ql-snow .ql-editor a {
        text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
        border-inline-start: 4px solid #ccc;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding-inline-start: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
        background: #f0f0f0;
        border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
        white-space: pre-wrap;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
        font-size: 85%;
        padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
        background: #23241f;
        color: #f8f8f2;
        overflow: visible;
    }
    .ql-snow .ql-editor img {
        max-width: 100%;
    }
    .ql-snow .ql-picker {
        color: #444;
        display: inline-block;
        float: left;
        inset-inline-start: 0;
        font-size: 14px;
        font-weight: 500;
        height: 24px;
        position: relative;
        vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        padding-inline-start: 8px;
        padding-inline-end: 2px;
        position: relative;
        width: 100%;
    }
    .ql-snow .ql-picker-label::before {
        display: inline-block;
        line-height: 22px;
    }
    .ql-snow .ql-picker-options {
        background: #fff;
        display: none;
        min-width: 100%;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
        cursor: pointer;
        display: block;
        padding-block-end: 5px;
        padding-block-start: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: #ccc;
        z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
        display: block;
        margin-block-start: -1px;
        top: 100%;
        z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
        width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
        inset-inline-end: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
        padding: 4px 0;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
        height: 24px;
        width: 24px;
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
        padding: 3px 5px;
        width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
        border: 1px solid transparent;
        float: left;
        height: 16px;
        margin: 2px;
        padding: 0;
        width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
        position: absolute;
        margin-block-start: -9px;
        inset-inline-end: 0;
        top: 50%;
        width: 18px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
        content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        font-size: 2rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        font-size: 1.5rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        font-size: 1.17rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        font-size: 1rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        font-size: 0.83rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        font-size: 0.67rem;
    }
    .ql-snow .ql-picker.ql-font {
        width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        content: 'Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-snow .ql-picker.ql-size {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
        background: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
        background: #000;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
        margin-inline-end: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
        border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
        border-block-start: 0;
    }
    .ql-snow .ql-tooltip {
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ddd;
        color: #444;
        padding: 5px 12px;
        white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
        content: 'Visit URL:';
        line-height: 26px;
        margin-inline-end: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
        display: none;
        border: 1px solid #ccc;
        font-size: 13px;
        height: 26px;
        margin: 0;
        padding: 3px 5px;
        width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
        display: inline-block;
        max-width: 200px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
        border-inline-end: 1px solid #ccc;
        content: 'Edit';
        margin-inline-start: 16px;
        padding-inline-end: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
        content: 'Remove';
        margin-inline-start: 8px;
    }
    .ql-snow .ql-tooltip a {
        line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
        display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
        display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-inline-end: 0;
        content: 'Save';
        padding-inline-end: 0;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
        content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
        content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
        content: 'Enter video:';
    }
    .ql-snow a {
        color: #06c;
    }
    .ql-container.ql-snow {
        border: 1px solid #ccc;
    }

    .p-editor {
        display: block;
    }

    .p-editor .p-editor-toolbar {
        background: dt('editor.toolbar.background');
        border-start-end-radius: dt('editor.toolbar.border.radius');
        border-start-start-radius: dt('editor.toolbar.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow {
        border: 1px solid dt('editor.toolbar.border.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {
        stroke: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-fill {
        fill: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
        border: 0 none;
        color: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        background: dt('editor.overlay.background');
        border: 1px solid dt('editor.overlay.border.color');
        box-shadow: dt('editor.overlay.shadow');
        border-radius: dt('editor.overlay.border.radius');
        padding: dt('editor.overlay.padding');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
        color: dt('editor.overlay.option.color');
        border-radius: dt('editor.overlay.option.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
        background: dt('editor.overlay.option.focus.background');
        color: dt('editor.overlay.option.focus.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {
        padding: dt('editor.overlay.option.padding');
    }

    .p-editor .p-editor-content {
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .p-editor-content.ql-snow {
        border: 1px solid dt('editor.content.border.color');
    }

    .p-editor .p-editor-content .ql-editor {
        background: dt('editor.content.background');
        color: dt('editor.content.color');
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .ql-snow.ql-toolbar button:hover,
    .p-editor .ql-snow.ql-toolbar button:focus {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }
`;var Rn=["header"],Vn=[[["p-header"]]],Un=["p-header"];function Wn(i,o){i&1&&le(0)}function Qn(i,o){if(i&1&&(r(0,"div",2),Fe(1),w(2,Wn,1,0,"ng-container",3),a()),i&2){let e=g();S(e.cx("toolbar")),d("pBind",e.ptm("toolbar")),s(2),d("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Hn(i,o){if(i&1&&(r(0,"div",2)(1,"span",4)(2,"select",5)(3,"option",6),p(4,"Heading"),a(),r(5,"option",7),p(6,"Subheading"),a(),r(7,"option",8),p(8,"Normal"),a()(),r(9,"select",9)(10,"option",8),p(11,"Sans Serif"),a(),r(12,"option",10),p(13,"Serif"),a(),r(14,"option",11),p(15,"Monospace"),a()()(),r(16,"span",4),h(17,"button",12)(18,"button",13)(19,"button",14),a(),r(20,"span",4),h(21,"select",15)(22,"select",16),a(),r(23,"span",4),h(24,"button",17)(25,"button",18),r(26,"select",19),h(27,"option",8),r(28,"option",20),p(29,"center"),a(),r(30,"option",21),p(31,"right"),a(),r(32,"option",22),p(33,"justify"),a()()(),r(34,"span",4),h(35,"button",23)(36,"button",24)(37,"button",25),a(),r(38,"span",4),h(39,"button",26),a()()),i&2){let e=g();S(e.cx("toolbar")),d("pBind",e.ptm("toolbar")),s(),d("pBind",e.ptm("formats")),s(),d("pBind",e.ptm("header")),s(),d("pBind",e.ptm("option")),s(2),d("pBind",e.ptm("option")),s(2),d("pBind",e.ptm("option")),s(2),d("pBind",e.ptm("select")),s(),d("pBind",e.ptm("option")),s(2),d("pBind",e.ptm("option")),s(2),d("pBind",e.ptm("option")),s(2),d("pBind",e.ptm("formats")),s(),d("pBind",e.ptm("bold")),s(),d("pBind",e.ptm("italic")),s(),d("pBind",e.ptm("underline")),s(),d("pBind",e.ptm("formats")),s(),d("pBind",e.ptm("color")),s(),d("pBind",e.ptm("background")),s(),d("pBind",e.ptm("formats")),s(),d("pBind",e.ptm("list")),s(),d("pBind",e.ptm("list")),s(),d("pBind",e.ptm("select")),s(),d("pBind",e.ptm("option")),s(),d("pBind",e.ptm("option")),s(2),d("pBind",e.ptm("option")),s(2),d("pBind",e.ptm("option")),s(2),d("pBind",e.ptm("formats")),s(),d("pBind",e.ptm("link")),s(),d("pBind",e.ptm("image")),s(),d("pBind",e.ptm("codeBlock")),s(),d("pBind",e.ptm("formats")),s(),d("pBind",e.ptm("clean"))}}var Jn={root:({instance:i})=>["p-editor",{"p-invalid":i.invalid()}],toolbar:"p-editor-toolbar",content:"p-editor-content"},Mn=(()=>{class i extends ce{name="editor";style=Cn;classes=Jn;static \u0275fac=(()=>{let e;return function(t){return(e||(e=J(i)))(t||i)}})();static \u0275prov=Z({token:i,factory:i.\u0275fac})}return i})();var Sn=new ne("EDITOR_INSTANCE"),$n={provide:He,useExisting:Se(()=>ue),multi:!0},ue=(()=>{class i extends ln{componentName="Editor";$pcEditor=M(Sn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=M(F,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}style;styleClass;placeholder;formats;modules;bounds;scrollingContainer;debug;get readonly(){return this._readonly}set readonly(e){this._readonly=e,this.quill&&(this._readonly?this.quill.disable():this.quill.enable())}onEditorInit=new j;onTextChange=new j;onSelectionChange=new j;onEditorChange=new j;onFocus=new j;onBlur=new j;toolbar;value;delayedCommand=null;_readonly=!1;quill;dynamicQuill;headerTemplate;templates;_headerTemplate;get isAttachedQuillEditorToDOM(){return this.quillElements?.editorElement?.isConnected}quillElements;focusListener=null;blurListener=null;_componentStyle=M(Mn);constructor(){super(),Te(()=>{this.initQuillElements(),this.initQuillEditor()})}onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="header"&&(this.headerTemplate=e.template)})}writeControlValue(e){if(this.value=e,this.quill)if(e){let n=()=>{this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2")?{html:this.value}:this.value))};this.isAttachedQuillEditorToDOM?n():this.delayedCommand=n}else{let n=()=>{this.quill.setText("")};this.isAttachedQuillEditorToDOM?n():this.delayedCommand=n}}getQuill(){return this.quill}initQuillEditor(){We(this.platformId)||(this.dynamicQuill?this.createQuillEditor():import("./chunk-QN4HSOYR.js").then(e=>{this.dynamicQuill=e.default,this.createQuillEditor()}).catch(e=>console.error(e.message)))}createQuillEditor(){this.initQuillElements();let{toolbarElement:e,editorElement:n}=this.quillElements,t={toolbar:e},l=this.modules?fe(fe({},t),this.modules):t;this.quill=new this.dynamicQuill(n,{modules:l,placeholder:this.placeholder,readOnly:this.readonly,theme:"snow",formats:this.formats,bounds:this.bounds,debug:this.debug,scrollingContainer:this.scrollingContainer});let m=this.dynamicQuill.version.startsWith("2");this.value&&this.quill.setContents(this.quill.clipboard.convert(m?{html:this.value}:this.value)),this.quill.on("text-change",(c,b,f)=>{if(f==="user"){let q=m?this.quill.getSemanticHTML():de(n,".ql-editor")?.innerHTML,x=this.quill.getText().trim();q==="<p><br></p>"&&(q=null),this.onTextChange.emit({htmlValue:q,textValue:x,delta:c,source:f}),this.onModelChange(q),this.onModelTouched()}}),this.quill.on("selection-change",(c,b,f)=>{this.onSelectionChange.emit({range:c,oldRange:b,source:f})}),this.quill.on("editor-change",(c,...b)=>{this.onEditorChange.emit({eventName:c,args:b})});let u=this.quill.root;this.focusListener=()=>{this.onFocus.emit({source:"user"})},this.blurListener=()=>{this.onBlur.emit({source:"user"})},u.addEventListener("focus",this.focusListener),u.addEventListener("blur",this.blurListener),this.onEditorInit.emit({editor:this.quill})}onDestroy(){if(this.quill&&this.quill.root){let e=this.quill.root;this.focusListener&&(e.removeEventListener("focus",this.focusListener),this.focusListener=null),this.blurListener&&(e.removeEventListener("blur",this.blurListener),this.blurListener=null)}}initQuillElements(){this.quillElements||(this.quillElements={editorElement:de(this.el.nativeElement,'div[data-pc-section="content"]'),toolbarElement:de(this.el.nativeElement,'div[data-pc-section="toolbar"]')})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=R({type:i,selectors:[["p-editor"]],contentQueries:function(n,t,l){if(n&1&&re(l,Qe,5)(l,Rn,4)(l,Q,4),n&2){let m;L(m=G())&&(t.toolbar=m.first),L(m=G())&&(t.headerTemplate=m.first),L(m=G())&&(t.templates=m)}},hostVars:2,hostBindings:function(n,t){n&2&&S(t.cn(t.cx("root"),t.styleClass))},inputs:{style:"style",styleClass:"styleClass",placeholder:"placeholder",formats:"formats",modules:"modules",bounds:"bounds",scrollingContainer:"scrollingContainer",debug:"debug",readonly:"readonly"},outputs:{onEditorInit:"onInit",onTextChange:"onTextChange",onSelectionChange:"onSelectionChange",onEditorChange:"onEditorChange",onFocus:"onFocus",onBlur:"onBlur"},features:[V([$n,Mn,{provide:Sn,useExisting:i},{provide:me,useExisting:i}]),ie([F]),oe],ngContentSelectors:Un,decls:3,vars:6,consts:[[3,"class","pBind",4,"ngIf"],[3,"ngStyle","pBind"],[3,"pBind"],[4,"ngTemplateOutlet"],[1,"ql-formats",3,"pBind"],[1,"ql-header",3,"pBind"],["value","1",3,"pBind"],["value","2",3,"pBind"],["selected","",3,"pBind"],[1,"ql-font",3,"pBind"],["value","serif",3,"pBind"],["value","monospace",3,"pBind"],["aria-label","Bold","type","button",1,"ql-bold",3,"pBind"],["aria-label","Italic","type","button",1,"ql-italic",3,"pBind"],["aria-label","Underline","type","button",1,"ql-underline",3,"pBind"],[1,"ql-color",3,"pBind"],[1,"ql-background",3,"pBind"],["value","ordered","aria-label","Ordered List","type","button",1,"ql-list",3,"pBind"],["value","bullet","aria-label","Unordered List","type","button",1,"ql-list",3,"pBind"],[1,"ql-align",3,"pBind"],["value","center",3,"pBind"],["value","right",3,"pBind"],["value","justify",3,"pBind"],["aria-label","Insert Link","type","button",1,"ql-link",3,"pBind"],["aria-label","Insert Image","type","button",1,"ql-image",3,"pBind"],["aria-label","Insert Code Block","type","button",1,"ql-code-block",3,"pBind"],["aria-label","Remove Styles","type","button",1,"ql-clean",3,"pBind"]],template:function(n,t){n&1&&(Ee(Vn),w(0,Qn,3,4,"div",0)(1,Hn,40,33,"div",0),h(2,"div",1)),n&2&&(d("ngIf",t.toolbar||t.headerTemplate||t._headerTemplate),s(),d("ngIf",!t.toolbar&&!t.headerTemplate&&!t._headerTemplate),s(),S(t.cx("content")),d("ngStyle",t.style)("pBind",t.ptm("content")))},dependencies:[W,U,se,Ve,D,en,F],encapsulation:2,changeDetection:0})}return i})(),Tn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=te({type:i});static \u0275inj=ee({imports:[ue,D,D]})}return i})();var Kn=()=>["Browser-only download","Test data"],Xn=(i,o,e,n,t)=>({"pi-file-pdf text-red-500":i,"pi-image text-blue-500":o,"pi-code text-orange-500":e,"pi-file-excel text-green-500":n,"pi-file text-surface-500":t}),Zn=()=>({label:"String",value:"string"}),et=()=>({label:"Number",value:"number"}),nt=()=>({label:"Boolean",value:"boolean"}),tt=()=>({label:"UUID",value:"uuid"}),it=(i,o,e,n)=>[i,o,e,n],ot=()=>({height:"240px"}),lt=()=>({height:"4px"});function rt(i,o){i&1&&h(0,"i",39)}function at(i,o){if(i&1&&(r(0,"span"),p(1),ze(2,"number"),a()),i&2){let e=g();s(),K("",Ne(2,1,e.progressValue,"1.0-0"),"%")}}function st(i,o){if(i&1&&(r(0,"div",40),h(1,"i",41),r(2,"span"),p(3),a()()),i&2){let e=o.$implicit;s(),d("ngClass",je(2,Xn,e.value==="pdf",e.value==="jpg"||e.value==="png",e.value==="html"||e.value==="json",e.value==="csv",e.value==="txt"||e.value==="log")),s(2),Y(e.label)}}function dt(i,o){if(i&1){let e=z();r(0,"button",42),N("click",function(){let t=B(e).$implicit,l=g();return l.fileSizeInMb=t,O(l.syncDefaultFileName())}),p(1),a()}if(i&2){let e=o.$implicit,n=g();Be("size-preset-button--active",n.fileSizeInMb===e),s(),K(" ",e,"MB ")}}function pt(i,o){i&1&&(r(0,"span",43),p(1,"Plain text repeat"),a())}function ct(i,o){i&1&&(r(0,"span",43),p(1,"Rich content block"),a())}function mt(i,o){i&1&&(r(0,"span",43),p(1,"Caption render"),a())}function ut(i,o){i&1&&(r(0,"span",43),p(1,"Schema-driven rows"),a())}function qt(i,o){if(i&1){let e=z();r(0,"div",49)(1,"div",50)(2,"input",51),E("ngModelChange",function(t){let l=B(e).$implicit;return P(l.name,t)||(l.name=t),O(t)}),a(),r(3,"p-select",52),E("ngModelChange",function(t){let l=B(e).$implicit;return P(l.type,t)||(l.type=t),O(t)}),a()(),r(4,"button",53),N("click",function(){let t=B(e).index,l=g(2);return O(l.removeJsonField(t))}),a()()}if(i&2){let e=o.$implicit,n=g(2);s(2),T("ngModel",e.name),s(),d("options",De(8,it,I(4,Zn),I(5,et),I(6,nt),I(7,tt))),T("ngModel",e.type),s(),d("disabled",n.jsonSchema.length===1)}}function bt(i,o){if(i&1){let e=z();r(0,"div",44)(1,"div",45)(2,"div")(3,"p"),p(4,"JSON Schema"),a(),r(5,"h3"),p(6,"Properties for generated objects"),a()(),r(7,"button",46),N("click",function(){B(e);let t=g();return O(t.addJsonField())}),a()(),r(8,"div",47),w(9,qt,5,13,"div",48),a()()}if(i&2){let e=g();s(9),d("ngForOf",e.jsonSchema)}}function gt(i,o){if(i&1){let e=z();r(0,"div",54)(1,"div",45)(2,"div")(3,"p"),p(4,"Padding Content"),a(),r(5,"h3"),p(6,"Repeated plain text"),a()(),r(7,"span",55),p(8,"Best for TXT, LOG, CSV and PDF filler."),a()(),r(9,"textarea",56),E("ngModelChange",function(t){B(e);let l=g();return P(l.sampleText,t)||(l.sampleText=t),O(t)}),a()()}if(i&2){let e=g();s(9),T("ngModel",e.sampleText),d("rows",10)}}function ft(i,o){i&1&&(r(0,"span",60),h(1,"button",61)(2,"button",62)(3,"button",63)(4,"button",64),a(),r(5,"span",60),h(6,"select",65)(7,"select",66),a(),r(8,"span",60),h(9,"button",67)(10,"button",68)(11,"select",69),a(),r(12,"span",60),h(13,"button",70)(14,"button",71),a(),r(15,"span",60),h(16,"button",72),a())}function ht(i,o){if(i&1){let e=z();r(0,"div",54)(1,"div",45)(2,"div")(3,"p"),p(4,"Padding Content"),a(),r(5,"h3"),p(6,"Rich text editor"),a()(),r(7,"span",55),p(8,"Useful when exporting HTML."),a()(),r(9,"div",57)(10,"p-editor",58),E("ngModelChange",function(t){B(e);let l=g();return P(l.sampleText,t)||(l.sampleText=t),O(t)}),w(11,ft,17,0,"ng-template",59),a()()()}if(i&2){let e=g();s(10),he(I(3,ot)),T("ngModel",e.sampleText)}}function vt(i,o){if(i&1){let e=z();r(0,"div",54)(1,"div",45)(2,"div")(3,"p"),p(4,"Image Caption"),a(),r(5,"h3"),p(6,"Text rendered into the preview image"),a()(),r(7,"span",55),p(8,"Keep it short for cleaner visual output."),a()(),r(9,"input",73),E("ngModelChange",function(t){B(e);let l=g();return P(l.sampleText,t)||(l.sampleText=t),O(t)}),a(),r(10,"span",21),p(11,"Max 120 characters, ASCII recommended."),a()()}if(i&2){let e=g();s(9),T("ngModel",e.sampleText)}}function yt(i,o){if(i&1&&(r(0,"div",74),h(1,"p-progressBar",75),a()),i&2){let e=g();s(),he(I(4,lt)),d("value",e.progressValue)("showValue",!1)}}var Pn=class i{constructor(o){this.messageService=o}browserService=M(gn);sizePresets=[1,10,50,100,200];fileTypes=[{label:"Text Document (.txt)",value:"txt",mime:"text/plain"},{label:"CSV File (.csv)",value:"csv",mime:"text/csv"},{label:"Log File (.log)",value:"log",mime:"text/plain"},{label:"JSON File (.json)",value:"json",mime:"application/json"},{label:"PDF Document (.pdf)",value:"pdf",mime:"application/pdf"},{label:"HTML File (.html)",value:"html",mime:"text/html"},{label:"JPEG Image (.jpg)",value:"jpg",mime:"image/jpeg"},{label:"PNG Image (.png)",value:"png",mime:"image/png"}];selectedFileType="txt";fileSizeInMb=10;sampleText="Generated Dummy Padding Content - ";addRandomNoise=!0;outputFileBaseName=this.buildDefaultBaseName(10);progressValue=0;getTodayDateStr(){let o=new Date;return`${o.getFullYear()}${String(o.getMonth()+1).padStart(2,"0")}${String(o.getDate()).padStart(2,"0")}`}buildDefaultBaseName(o){return`dummy_${this.getTodayDateStr()}_${o}mb`}get outputFileName(){return`${this.outputFileBaseName}.${this.selectedFileType}`}shellStats(){return[{icon:"pi pi-file",label:`${this.selectedFileType.toUpperCase()} output`},{icon:"pi pi-database",label:`${this.fileSizeInMb} MB target`},{icon:"pi pi-bolt",label:this.addRandomNoise?"Noise enabled":"Deterministic payload"}]}isPlainTextFormat(){return["txt","log","csv","pdf"].includes(this.selectedFileType)}isRichTextFormat(){return["html"].includes(this.selectedFileType)}isImageFormat(){return["jpg","png"].includes(this.selectedFileType)}onFileTypeChange(){this.isImageFormat()?this.sampleText="Dummy Image Content":this.isRichTextFormat()?this.sampleText="<p>Generated Dummy Padding Content</p>":this.sampleText="Generated Dummy Padding Content - ",this.syncDefaultFileName()}syncDefaultFileName(){/^dummy_\d{8}_\d+mb$/.test(this.outputFileBaseName)&&(this.outputFileBaseName=this.buildDefaultBaseName(this.fileSizeInMb))}jsonSchema=[{name:"id",type:"uuid"},{name:"name",type:"string"},{name:"isActive",type:"boolean"}];addJsonField(){this.jsonSchema.push({name:"field"+(this.jsonSchema.length+1),type:"string"})}removeJsonField(o){this.jsonSchema.length>1&&this.jsonSchema.splice(o,1)}isGenerating=!1;decodeHtmlEntities(o){let e=this.browserService.nativeWindow;if(!e)return o;let n=e.document.createElement("textarea");return n.innerHTML=o,n.value}generateFile(){if(!this.browserService.isBrowser){this.messageService.add({severity:"warn",summary:"Unavailable",detail:"File generation is only available in the browser."});return}if(!this.fileSizeInMb||this.fileSizeInMb<1){this.messageService.add({severity:"error",summary:"Invalid Size",detail:"File size must be at least 1 MB."});return}if(this.fileSizeInMb>200){this.messageService.add({severity:"error",summary:"Size Too Large",detail:"File size cannot exceed 200 MB to prevent browser crash."});return}let o=this.sampleText;if(this.isImageFormat())o=o?.trim()||"Dummy Image Content";else{if(!o?.trim()||o==="<p><br></p>"){this.messageService.add({severity:"error",summary:"Missing Content",detail:"Sample Text cannot be empty."});return}if(this.selectedFileType!=="html"){let e=o.replace(/<[^>]*>?/gm,"");o=this.decodeHtmlEntities(e).replace(/\u00A0/g," ").trim()}}this.isGenerating=!0,this.progressValue=0,setTimeout(()=>{try{this.processFileGenerationChunked(o)}catch(e){console.error(e),this.isGenerating=!1,this.messageService.add({severity:"error",summary:"Generation Failed",detail:"An error occurred while generating the file."})}},50)}processFileGenerationChunked(o){let e=this.fileSizeInMb*1024*1024,n,t=this.fileTypes.find(b=>b.value===this.selectedFileType)||this.fileTypes[0];if(this.selectedFileType==="pdf"?n=this.generatePdfBuffer(e,o):this.selectedFileType==="html"?n=this.generateHtmlBuffer(e,o):this.selectedFileType==="jpg"?n=this.generateJpgBuffer(e,o):this.selectedFileType==="png"?n=this.generatePngBuffer(e,o):this.selectedFileType==="json"?n=this.generateJsonBuffer(e,o):n=this.generateTextBuffer(e,o),this.addRandomNoise&&n.length>=36){let b=crypto.randomUUID(),q=new TextEncoder().encode(b);n.set(q,n.length-q.length)}this.progressValue=100,this.progressValue=100;let l=this.browserService.nativeWindow;if(!l){this.isGenerating=!1,this.messageService.add({severity:"warn",summary:"Unavailable",detail:"File download is unavailable in this context."});return}let m=new Blob([n],{type:t.mime}),u=URL.createObjectURL(m),c=l.document.createElement("a");c.href=u,c.download=this.outputFileName,l.document.body.appendChild(c),c.click(),l.document.body.removeChild(c),URL.revokeObjectURL(u),this.isGenerating=!1,this.messageService.add({severity:"success",summary:"Success",detail:`File generated: ${this.outputFileName}`})}generateTextBuffer(o,e){let n=new Uint8Array(o),l=new TextEncoder().encode(e);return this.fillBuffer(n,l,0,o),n}generateHtmlBuffer(o,e){let n=new Uint8Array(o),t=new TextEncoder,l=t.encode(`<!DOCTYPE html>
<html>
<head><title>Dummy File</title></head>
<body>
<p>`),m=t.encode(`</p>
</body>
</html>`),u=t.encode(e);n.set(l,0);let c=Math.max(l.length,o-m.length);return this.fillBuffer(n,u,l.length,c),o>m.length&&n.set(m,o-m.length),n}generateJsonBuffer(o,e){let n=new Uint8Array(o),t=new TextEncoder,l=t.encode(`[
`),m=t.encode(`
]`);n.set(l,0);let u=Math.max(l.length,o-m.length),c=l.length,b=!0,f=2e3;for(;c<u;){let q={};for(let v of this.jsonSchema)v.type==="uuid"?q[v.name]=crypto.randomUUID():v.type==="string"?q[v.name]=e.substring(0,20).replace(/[\"\n]/g,"")+" "+Math.random().toString(36).substring(7):v.type==="number"?q[v.name]=Math.floor(Math.random()*1e6):v.type==="boolean"&&(q[v.name]=Math.random()>.5);let x=JSON.stringify(q);b?(x="  "+x,b=!1):x=`,
  `+x;let _=t.encode(x);if(c+_.length>u){let v=u-c;for(let k=0;k<v;k++)n[c+k]=32;c=u;break}n.set(_,c),c+=_.length,c%(1024*1024)<_.length&&(this.progressValue=Math.floor(c/o*100))}return this.progressValue=100,o>m.length&&n.set(m,o-m.length),n}generatePdfBuffer(o,e){let n=new Uint8Array(o),t=new TextEncoder,l=e.replace(/[^\x20-\x7E]/g,""),u=`BT
/F1 24 Tf
50 700 Td
(${(l.length>0?l:"Dummy PDF Content").substring(0,100).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")}) Tj
ET
`,c=u.length,b=`1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
`,f=`2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
`,q=`3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
`,x=`4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
`,_=`5 0 obj
<< /Length ${c} >>
stream
${u}endstream
endobj
`,v=`%PDF-1.4
`,k=v.length,A=k+b.length,C=A+f.length,H=C+q.length,ye=H+x.length,En=v+b+f+q+x+_,we=t.encode(En);n.set(we,0);let qe=t.encode("% "),xe=t.encode(`
`),be=t.encode(e),X=o-400,y=we.length;for(;y<X&&y+qe.length<=X;){n.set(qe,y),y+=qe.length;let Me=X-y,ge=Me<be.length?be.subarray(0,Me):be;if(ge.length>0&&(n.set(ge,y),y+=ge.length),y>=X-1){n.set(xe,y),y+=xe.length;break}}n[y-1]=10;let Fn=y,Bn=`xref
0 6
0000000000 65535 f 
${k.toString().padStart(10,"0")} 00000 n 
${A.toString().padStart(10,"0")} 00000 n 
${C.toString().padStart(10,"0")} 00000 n 
${H.toString().padStart(10,"0")} 00000 n 
${ye.toString().padStart(10,"0")} 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${Fn}
%%EOF
`,ke=`
%%EOF
`,_e=t.encode(ke),Ce=t.encode(Bn.replace(ke,""));for(n.set(Ce,y),y+=Ce.length;y<o-_e.length;)n[y]=32,y++;return n.set(_e,y),n}createBaseImageWithText(o,e){let n=this.browserService.nativeWindow;if(!n)return new Uint8Array;let t=n.document.createElement("canvas");t.width=800,t.height=600;let l=t.getContext("2d");if(l){l.fillStyle="#ffffff",l.fillRect(0,0,t.width,t.height),l.fillStyle="#000000",l.font="bold 30px Arial",l.textAlign="center",l.textBaseline="middle";let q=o.replace(/[^\x20-\x7E\s]/g,""),_=(q.trim().length>0?q:"Dummy Image Content").trim().split(/\s+/),v="",k=[];for(let C=0;C<_.length;C++){let H=v+_[C]+" ";l.measureText(H).width>t.width-100&&C>0?(k.push(v),v=_[C]+" "):v=H}k.push(v);let A=t.height/2-k.length*40/2;for(let C of k)if(l.fillText(C.substring(0,100).trim(),t.width/2,A),A+=40,A>t.height-50)break}let u=t.toDataURL(e,.9).split(",")[1],c=n.atob(u),b=c.length,f=new Uint8Array(b);for(let q=0;q<b;q++)f[q]=c.charCodeAt(q);return f}generateJpgBuffer(o,e){let n=new Uint8Array(o),t=this.createBaseImageWithText(e,"image/jpeg"),l=Math.min(t.length,o);if(n.set(t.subarray(0,l),0),l<o){let u=new TextEncoder().encode(e+`
`),c=l;for(;c<o;){let b=o-c,f=b<u.length?u.subarray(0,b):u;f.length>0?(n.set(f,c),c+=f.length):n[c++]=32}}return n}generatePngBuffer(o,e){let n=new Uint8Array(o),t=this.createBaseImageWithText(e,"image/png"),l=Math.min(t.length,o);if(n.set(t.subarray(0,l),0),l<o){let u=new TextEncoder().encode(e+`
`),c=l;for(;c<o;){let b=o-c,f=b<u.length?u.subarray(0,b):u;f.length>0?(n.set(f,c),c+=f.length):n[c++]=32}}return n}fillBuffer(o,e,n,t){if(e.length===0)return;let l=n;for(;l<t;){let m=t-l,u=m<e.length?e.subarray(0,m):e;o.set(u,l),l+=u.length}}static \u0275fac=function(e){return new(e||i)(Pe(pe))};static \u0275cmp=R({type:i,selectors:[["app-dummy-file-generator"]],features:[V([pe])],decls:81,vars:29,consts:[["eyebrow","Files & Fixtures","title","Dummy File Generator","description","Generate padded TXT, CSV, JSON, HTML, PDF, JPG, and PNG files locally with controllable size, repeatable content, and optional random noise.",3,"badges","stats"],[1,"dummy-generator-page"],[1,"dummy-layout"],[1,"workspace-panel","workspace-panel--sidebar"],[1,"panel-header","panel-header--sidebar"],[1,"panel-body","panel-body--sidebar"],[1,"download-panel","download-panel--top"],[1,"download-panel__header"],[1,"output-file-shell"],["pInputText","","placeholder","filename",1,"download-panel__input",3,"ngModelChange","ngModel"],["pButton","","pRipple","","styleClass","download-button",1,"download-button__native",3,"click","loading"],["class","pi pi-download",4,"ngIf"],[1,"download-panel__meta"],[1,"download-panel__meta-item"],[4,"ngIf"],[1,"field-group"],["htmlFor","fileType",1,"field-label"],["id","fileType","optionLabel","label","optionValue","value","placeholder","Select a File Type","styleClass","dummy-select w-full",3,"ngModelChange","onChange","options","ngModel"],["pTemplate","item"],[1,"field-row"],["htmlFor","fileSize",1,"field-label"],[1,"field-hint"],["id","fileSize","buttonLayout","horizontal","spinnerMode","horizontal","decrementButtonClass","p-button-secondary","incrementButtonClass","p-button-secondary","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus","inputId","horizontal","styleClass","dummy-number-input w-full",3,"ngModelChange","ngModel","min","max","showButtons"],[1,"preset-grid"],["type","button","class","size-preset-button",3,"size-preset-button--active","click",4,"ngFor","ngForOf"],[1,"toggle-card"],[1,"toggle-card__title"],[1,"toggle-card__text"],["inputId","randomNoise",3,"ngModelChange","ngModel"],[1,"workspace-panel","workspace-panel--main"],[1,"panel-header"],[1,"panel-body"],[1,"content-intro"],[1,"content-intro__copy"],[1,"content-intro__chips"],["class","intro-chip",4,"ngIf"],["class","json-schema-panel",4,"ngIf"],["class","editor-panel",4,"ngIf"],["class","progress-strip",4,"ngIf"],[1,"pi","pi-download"],[1,"flex","items-center","gap-2"],[1,"pi",3,"ngClass"],["type","button",1,"size-preset-button",3,"click"],[1,"intro-chip"],[1,"json-schema-panel"],[1,"section-heading"],["pButton","","pRipple","","icon","pi pi-plus","label","Add Field","size","small","outlined","","styleClass","json-add-button",3,"click"],[1,"flex","flex-col","gap-3"],["class","json-schema-row",4,"ngFor","ngForOf"],[1,"json-schema-row"],[1,"json-schema-row__inputs"],["pInputText","","placeholder","Field Name",1,"json-field-name","flex-grow",3,"ngModelChange","ngModel"],["optionLabel","label","optionValue","value","styleClass","json-type-select",3,"ngModelChange","options","ngModel"],["pButton","","pRipple","","icon","pi pi-trash","severity","danger","text","","rounded","","styleClass","json-delete-button",3,"click","disabled"],[1,"editor-panel"],[1,"section-caption"],["placeholder","Enter text that will repeat as padding...",1,"dummy-textarea",3,"ngModelChange","ngModel","rows"],[1,"rich-editor-shell"],[3,"ngModelChange","ngModel"],["pTemplate","header"],[1,"ql-formats"],["aria-label","Bold",1,"ql-bold"],["aria-label","Italic",1,"ql-italic"],["aria-label","Underline",1,"ql-underline"],["aria-label","Strike",1,"ql-strike"],["aria-label","Text Color",1,"ql-color"],["aria-label","Background Color",1,"ql-background"],["value","ordered","aria-label","Ordered List",1,"ql-list"],["value","bullet","aria-label","Unordered List",1,"ql-list"],["aria-label","Text Alignment",1,"ql-align"],["aria-label","Insert Link",1,"ql-link"],["aria-label","Insert Code Block",1,"ql-code-block"],["aria-label","Remove Styles",1,"ql-clean"],["pInputText","","placeholder","Enter a short caption for the image...","maxlength","120",1,"dummy-text-input",3,"ngModelChange","ngModel"],[1,"progress-strip"],[1,"w-full",3,"value","showValue"]],template:function(e,n){e&1&&(h(0,"p-toast"),r(1,"app-tool-page-shell",0)(2,"div",1)(3,"section",2)(4,"aside",3)(5,"header",4)(6,"div")(7,"p"),p(8,"Quick Setup"),a(),r(9,"h2"),p(10,"Configure Output"),a()(),r(11,"span"),p(12),a()(),r(13,"div",5)(14,"div",6)(15,"div",7)(16,"div")(17,"p"),p(18,"Output File"),a()()(),r(19,"div",8)(20,"input",9),E("ngModelChange",function(l){return P(n.outputFileBaseName,l)||(n.outputFileBaseName=l),l}),a(),r(21,"span"),p(22),a()(),r(23,"button",10),N("click",function(){return n.generateFile()}),w(24,rt,1,0,"i",11),r(25,"span"),p(26),a()(),r(27,"div",12)(28,"span",13),p(29,"Default name: "),r(30,"strong"),p(31),a()(),w(32,at,3,4,"span",14),a()(),r(33,"div",15)(34,"label",16),p(35,"Format"),a(),r(36,"p-select",17),E("ngModelChange",function(l){return P(n.selectedFileType,l)||(n.selectedFileType=l),l}),N("onChange",function(){return n.onFileTypeChange()}),w(37,st,4,8,"ng-template",18),a()(),r(38,"div",15)(39,"div",19)(40,"label",20),p(41,"Size"),a(),r(42,"span",21),p(43,"1 to 200 MB"),a()(),r(44,"p-inputNumber",22),E("ngModelChange",function(l){return P(n.fileSizeInMb,l)||(n.fileSizeInMb=l),l}),N("ngModelChange",function(){return n.syncDefaultFileName()}),a(),r(45,"div",23),w(46,dt,2,3,"button",24),a()(),r(47,"div",15)(48,"div",25)(49,"div")(50,"p",26),p(51,"Random Noise"),a(),r(52,"p",27),p(53,"Add a UUID suffix to reduce duplicate file hashes."),a()(),r(54,"p-toggleswitch",28),E("ngModelChange",function(l){return P(n.addRandomNoise,l)||(n.addRandomNoise=l),l}),a()()()()(),r(55,"section",29)(56,"header",30)(57,"div")(58,"p"),p(59,"Content Builder"),a(),r(60,"h2"),p(61,"Define Generated Payload"),a()(),r(62,"span"),p(63),a()(),r(64,"div",31)(65,"div",32)(66,"div",33)(67,"h3"),p(68,"Adjust the content pattern before export"),a(),r(69,"p"),p(70,"Each format exposes the right editor so you can control how the filler content looks once the file is generated."),a()(),r(71,"div",34),w(72,pt,2,0,"span",35)(73,ct,2,0,"span",35)(74,mt,2,0,"span",35)(75,ut,2,0,"span",35),a()(),w(76,bt,10,1,"div",36)(77,gt,10,2,"div",37)(78,ht,12,4,"div",37)(79,vt,12,1,"div",37),a(),w(80,yt,2,5,"div",38),a()()()()),e&2&&(s(),d("badges",I(28,Kn))("stats",n.shellStats()),s(11),Y(n.selectedFileType.toUpperCase()),s(8),T("ngModel",n.outputFileBaseName),s(2),K(".",n.selectedFileType),s(),d("loading",n.isGenerating),s(),d("ngIf",!n.isGenerating),s(2),Y(n.isGenerating?"Generating...":"Download File"),s(5),Y(n.outputFileBaseName),s(),d("ngIf",n.isGenerating),s(4),d("options",n.fileTypes),T("ngModel",n.selectedFileType),s(8),T("ngModel",n.fileSizeInMb),d("min",1)("max",500)("showButtons",!0),s(2),d("ngForOf",n.sizePresets),s(8),T("ngModel",n.addRandomNoise),s(9),K("",n.selectedFileType.toUpperCase()," template"),s(9),d("ngIf",n.isPlainTextFormat()),s(),d("ngIf",n.isRichTextFormat()),s(),d("ngIf",n.isImageFormat()),s(),d("ngIf",n.selectedFileType==="json"),s(),d("ngIf",n.selectedFileType==="json"),s(),d("ngIf",n.isPlainTextFormat()),s(),d("ngIf",n.isRichTextFormat()),s(),d("ngIf",n.isImageFormat()),s(),d("ngIf",n.isGenerating))},dependencies:[W,Ae,Re,U,Xe,Je,$e,Ke,Ye,mn,cn,Q,hn,fn,sn,an,Tn,ue,rn,qn,un,_n,ve,tn,nn,pn,dn,on,bn,Ue],styles:['[_nghost-%COMP%]{display:block;--dummy-panel-bg: var(--p-surface-0);--dummy-panel-bg-alt: color-mix(in srgb, var(--p-surface-0) 94%, var(--p-primary-50) 6%);--dummy-panel-soft: color-mix(in srgb, var(--p-surface-0) 88%, var(--p-surface-100) 12%);--dummy-panel-border: color-mix(in srgb, var(--p-surface-400) 35%, transparent);--dummy-panel-border-strong: color-mix(in srgb, var(--p-surface-400) 48%, transparent);--dummy-text: var(--p-surface-900);--dummy-text-muted: var(--p-surface-500);--dummy-input-bg: var(--p-surface-0);--dummy-pill-bg: color-mix(in srgb, var(--p-surface-0) 86%, var(--p-primary-50) 14%);--dummy-pill-active: linear-gradient(135deg, color-mix(in srgb, var(--p-primary-100) 76%, white) 0%, color-mix(in srgb, var(--p-primary-200) 34%, white) 100%);--dummy-border-hover: color-mix(in srgb, var(--p-primary-400) 55%, transparent);--dummy-border-hover-soft: color-mix(in srgb, var(--p-primary-400) 52%, transparent);--dummy-border-hover-strong: color-mix(in srgb, var(--p-primary-400) 56%, transparent);--dummy-border-active: color-mix(in srgb, var(--p-primary-500) 60%, transparent);--dummy-border-focus: color-mix(in srgb, var(--p-primary-500) 72%, transparent);--dummy-ring-soft: 0 0 0 3px color-mix(in srgb, var(--p-primary-500) 14%, transparent);--dummy-ring: 0 0 0 3px color-mix(in srgb, var(--p-primary-500) 16%, transparent);--dummy-button-tint: color-mix(in srgb, var(--p-primary-100) 55%, transparent);--dummy-button-text: color-mix(in srgb, var(--p-primary-700) 72%, black);--dummy-mono-font: "Consolas", "Monaco", monospace}.app-dark   [_nghost-%COMP%]{--dummy-panel-bg: var(--p-surface-900);--dummy-panel-bg-alt: linear-gradient(180deg, color-mix(in srgb, var(--p-surface-900) 90%, var(--p-primary-950) 10%) 0%, var(--p-surface-950) 100%);--dummy-panel-soft: color-mix(in srgb, var(--p-surface-900) 86%, var(--p-primary-950) 14%);--dummy-panel-border: color-mix(in srgb, var(--p-surface-600) 56%, transparent);--dummy-panel-border-strong: color-mix(in srgb, var(--p-surface-500) 72%, transparent);--dummy-text: var(--p-surface-0);--dummy-text-muted: var(--p-surface-300);--dummy-input-bg: var(--p-surface-950);--dummy-pill-bg: color-mix(in srgb, var(--p-surface-900) 86%, var(--p-primary-950) 14%);--dummy-pill-active: linear-gradient(135deg, color-mix(in srgb, var(--p-primary-900) 64%, var(--p-surface-900)) 0%, color-mix(in srgb, var(--p-primary-700) 20%, var(--p-surface-900)) 100%);--dummy-button-text: var(--p-primary-200)}.dummy-generator-page[_ngcontent-%COMP%]{color:var(--dummy-text)}.dummy-layout[_ngcontent-%COMP%]{display:grid;gap:1.25rem;grid-template-columns:minmax(20rem,24rem) minmax(0,1fr)}.workspace-panel[_ngcontent-%COMP%]{min-width:0;border:1px solid var(--dummy-panel-border);border-radius:1.4rem;background:var(--dummy-panel-bg-alt);overflow:hidden}.panel-header[_ngcontent-%COMP%], .field-row[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%], .download-panel__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;align-items:end}.panel-header[_ngcontent-%COMP%]{padding:1.2rem 1.25rem;border-bottom:1px solid var(--dummy-panel-border)}.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .download-panel__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 .2rem;text-transform:uppercase;letter-spacing:.12em;font-size:.72rem;color:var(--dummy-text-muted)}.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .download-panel__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:var(--dummy-text)}.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.15rem}.panel-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .field-hint[_ngcontent-%COMP%], .section-caption[_ngcontent-%COMP%], .download-panel__meta[_ngcontent-%COMP%], .toggle-card__text[_ngcontent-%COMP%]{color:var(--dummy-text-muted);font-size:.87rem}.panel-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem;padding:1.25rem}.field-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.7rem}.field-label[_ngcontent-%COMP%], .dummy-generator-page[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--dummy-text);font-weight:600}.preset-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:.5rem}.size-preset-button[_ngcontent-%COMP%]{border:1px solid var(--dummy-panel-border-strong);background:var(--dummy-pill-bg);color:var(--dummy-text);border-radius:.9rem;padding:.7rem .4rem;font:inherit;font-size:.82rem;font-weight:700;cursor:pointer}.size-preset-button[_ngcontent-%COMP%]:hover{transform:translateY(-1px);border-color:var(--dummy-border-hover)}.size-preset-button--active[_ngcontent-%COMP%]{background:var(--dummy-pill-active);border-color:var(--dummy-border-active)}.toggle-card[_ngcontent-%COMP%], .editor-panel[_ngcontent-%COMP%], .json-schema-panel[_ngcontent-%COMP%], .download-panel[_ngcontent-%COMP%], .content-intro[_ngcontent-%COMP%]{border:1px solid var(--dummy-panel-border);border-radius:1.1rem;background:var(--dummy-panel-soft)}.toggle-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;align-items:center;padding:1rem}.toggle-card__title[_ngcontent-%COMP%]{margin:0 0 .25rem;font-weight:700}.toggle-card__text[_ngcontent-%COMP%]{margin:0;line-height:1.5}.download-panel[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.9rem;padding:1rem}.output-file-shell[_ngcontent-%COMP%]{display:flex;align-items:center;min-width:0;border:1px solid var(--dummy-panel-border-strong);border-radius:.95rem;overflow:hidden;background:var(--dummy-input-bg)}.output-file-shell[_ngcontent-%COMP%]:hover, .output-file-shell[_ngcontent-%COMP%]:focus-within{border-color:var(--dummy-border-active);box-shadow:var(--dummy-ring-soft)}.output-file-shell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:0 0 auto;height:2.9rem;display:flex;align-items:center;padding:0 .9rem;border-left:1px solid var(--dummy-panel-border);background:var(--dummy-panel-soft);color:var(--dummy-text-muted)}.download-panel__input[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;border:0;background:transparent;color:var(--dummy-text);padding-inline:.95rem;height:2.9rem;font-family:var(--dummy-mono-font);font-weight:700}.download-button__native[_ngcontent-%COMP%]{width:100%}.download-panel__meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap}.content-intro[_ngcontent-%COMP%], .editor-panel[_ngcontent-%COMP%], .json-schema-panel[_ngcontent-%COMP%]{padding:1rem}.content-intro[_ngcontent-%COMP%], .toggle-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem}.content-intro[_ngcontent-%COMP%]{align-items:start}.content-intro__copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .45rem;font-size:1rem}.content-intro__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--dummy-text-muted);line-height:1.6}.content-intro__chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.55rem;justify-content:flex-end}.intro-chip[_ngcontent-%COMP%]{display:inline-flex;align-items:center;border-radius:999px;padding:.55rem .8rem;border:1px solid var(--dummy-panel-border-strong);background:var(--dummy-pill-bg);font-size:.82rem;font-weight:600}.section-heading[_ngcontent-%COMP%]{margin-bottom:.9rem}.json-schema-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:.85rem;border:1px solid var(--dummy-panel-border);border-radius:1rem;background:var(--dummy-panel-bg)}.json-schema-row[_ngcontent-%COMP%]:hover{transform:translateY(-1px);border-color:var(--dummy-border-hover)}.json-schema-row__inputs[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex:1 1 auto;min-width:0}.dummy-textarea[_ngcontent-%COMP%], .dummy-text-input[_ngcontent-%COMP%], .json-field-name[_ngcontent-%COMP%]{width:100%;border:1px solid var(--dummy-panel-border-strong);border-radius:1rem;background:var(--dummy-input-bg);color:var(--dummy-text);padding:.85rem 1rem}.dummy-textarea[_ngcontent-%COMP%]::placeholder, .dummy-text-input[_ngcontent-%COMP%]::placeholder, .json-field-name[_ngcontent-%COMP%]::placeholder{color:var(--dummy-text-muted)}.dummy-textarea[_ngcontent-%COMP%]:hover, .dummy-text-input[_ngcontent-%COMP%]:hover, .json-field-name[_ngcontent-%COMP%]:hover{border-color:var(--dummy-border-hover-soft)}.dummy-textarea[_ngcontent-%COMP%]:focus, .dummy-text-input[_ngcontent-%COMP%]:focus, .json-field-name[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--dummy-border-focus);box-shadow:var(--dummy-ring)}.dummy-textarea[_ngcontent-%COMP%]{min-height:15rem;resize:vertical;font-family:var(--dummy-mono-font);line-height:1.6}.rich-editor-shell[_ngcontent-%COMP%]{border:1px solid var(--dummy-panel-border);border-radius:1rem;overflow:hidden}.progress-strip[_ngcontent-%COMP%]{padding:0 1.25rem 1.25rem}[_nghost-%COMP%]     .dummy-select .p-select, [_nghost-%COMP%]     .dummy-number-input .p-inputnumber, [_nghost-%COMP%]     .json-type-select .p-select{width:100%;border-color:var(--dummy-panel-border-strong);background:var(--dummy-input-bg);color:var(--dummy-text);border-radius:1rem}[_nghost-%COMP%]     .dummy-select .p-select:hover, [_nghost-%COMP%]     .dummy-number-input .p-inputnumber:hover, [_nghost-%COMP%]     .json-type-select .p-select:hover{border-color:var(--dummy-border-hover-strong)}[_nghost-%COMP%]     .dummy-select .p-select.p-focus, [_nghost-%COMP%]     .dummy-number-input .p-inputnumber.p-inputwrapper-focus, [_nghost-%COMP%]     .json-type-select .p-select.p-focus{border-color:var(--dummy-border-focus);box-shadow:var(--dummy-ring)}[_nghost-%COMP%]     .dummy-number-input .p-inputnumber-button:hover{background:var(--dummy-button-tint);color:var(--dummy-button-text)}@media(max-width:1100px){.dummy-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(max-width:720px){.preset-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.content-intro[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%], .field-row[_ngcontent-%COMP%], .download-panel__header[_ngcontent-%COMP%], .download-panel__meta[_ngcontent-%COMP%]{flex-direction:column;align-items:start}.content-intro__chips[_ngcontent-%COMP%]{justify-content:flex-start}.json-schema-row[_ngcontent-%COMP%], .json-schema-row__inputs[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}@media(max-width:520px){.preset-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}']})};export{Pn as DummyFileGeneratorComponent};
