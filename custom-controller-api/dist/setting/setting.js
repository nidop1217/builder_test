System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime","jimu-ui","jimu-theme","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker"],(function(e,t){var a={},i={},n={},l={},o={},r={},s={},c={};return{setters:[function(e){a.AnimationType=e.AnimationType,a.BrowserSizeMode=e.BrowserSizeMode,a.Immutable=e.Immutable,a.React=e.React,a.ReactRedux=e.ReactRedux,a.classNames=e.classNames,a.css=e.css,a.getNextAnimationId=e.getNextAnimationId,a.hooks=e.hooks,a.jsx=e.jsx,a.polished=e.polished},function(e){i.builderAppSync=e.builderAppSync,i.getAppConfigAction=e.getAppConfigAction},function(e){n.DirectionSelector=e.DirectionSelector,n.SettingRow=e.SettingRow,n.SettingSection=e.SettingSection},function(e){l.defaultMessages=e.defaultMessages,l.searchUtils=e.searchUtils},function(e){o.Button=e.Button,o.CollapsablePanel=e.CollapsablePanel,o.CollapsableToggle=e.CollapsableToggle,o.DistanceUnits=e.DistanceUnits,o.Icon=e.Icon,o.Label=e.Label,o.MultiSelect=e.MultiSelect,o.Radio=e.Radio,o.Select=e.Select,o.Switch=e.Switch,o.Tab=e.Tab,o.Tabs=e.Tabs,o.Tooltip=e.Tooltip,o.defaultMessages=e.defaultMessages},function(e){r.styled=e.styled,r.useTheme=e.useTheme,r.useTheme2=e.useTheme2},function(e){s.AnimationSettingComponent=e.AnimationSettingComponent,s.FixedPositionSize=e.FixedPositionSize,s.FontStyle=e.FontStyle,s.InputUnit=e.InputUnit},function(e){c.ThemeColorPicker=e.ThemeColorPicker}],execute:function(){e((()=>{var e={5508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},3242:(e,t,a)=>{"use strict";a.d(t,{bC:()=>i,ob:()=>l});const i="controller";var n;!function(e){e.TopLeft="TOP_LEFT",e.TopRight="TOP_RIGHT",e.BottomLeft="BOTTOM_LEFT",e.BottomRight="BOTTOM_RIGHT",e.TopCenter="TOP_CENTER",e.BottomCenter="BOTTOM_CENTER",e.MiddleLeft="MIDDLE_LEFT",e.MiddleRight="MIDDLE_RIGHT",e.MiddleCenter="MIDDLE_CENTER"}(n||(n={}));const l={position:n.TopRight,width:"320px",height:"480px",offsetX:0,offsetY:0};document.body,document},6393:(e,t,a)=>{"use strict";a.d(t,{A:()=>i});const i={_widgetLabel:"Widget Controller",behavior:"Behavior",openWidget:"How many widgets can be opened",displayType:"Display type",iconStyle:"Icon",showIconLabel:"Label",iconSizeOverride:"Size",iconInterval:"Spacing",textFormatOverride:"Text",iconBackgroundOverride:"Icon",openStart:"Open widgets on loading",widgetsSelected:"{widgetNumber} widgets selected",appearanceTip:"Select the widgets inside the Widget Controller, and customize their icons, labels, or styles to change their appearances.",widgetPanelArrangment:"Widget panel arrangement",panelFloating:"Floating",indicator:"Indicator",messageAction_openWidget:"Open widget"}},9244:e=>{"use strict";e.exports=a},4108:e=>{"use strict";e.exports=i},1496:e=>{"use strict";e.exports=l},1888:e=>{"use strict";e.exports=r},4321:e=>{"use strict";e.exports=o},9298:e=>{"use strict";e.exports=n},5562:e=>{"use strict";e.exports=s},4337:e=>{"use strict";e.exports=c}},t={};function d(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,d),n.exports}d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var a in t)d.o(t,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var p={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(p),d.d(p,{__set_webpack_public_path__:()=>P,default:()=>O,useControlledWidgets:()=>k});var e,t=d(9244),a=d(4108),i=d(9298),n=d(1496);!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(e||(e={}));var l,o=d(4321),r=d(6393),s=d(1888);!function(e){e[e.Circle=0]="Circle",e[e.Rectangle=1]="Rectangle"}(l||(l={}));const c=e=>{const{className:a,title:i,type:n,active:r,onClick:c}=e,d=(()=>{const e=(0,s.useTheme)(),a=null==e?void 0:e.ref.palette.white,i=null==e?void 0:e.sys.color.primary.light,n=null==e?void 0:e.ref.palette.neutral[1200];return t.React.useMemo((()=>t.css`
    background-color: ${a} !important;
    padding: 0px !important;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${t.polished.rem(28)};
    height: ${t.polished.rem(28)};
    margin: 2px;
    border-radius: 0px; 
    &.active{
      border: 2px ${i} solid !important;
    }
    .inner {
      width: 66%;
      height: 66%;
      border: 1px ${n} solid;
      border-radius: 2px;
      &.circle {
        border-radius: 50%;
    }
    }
  `),[a,i,n])})(),p=(0,t.classNames)("shapes",{active:r},a);return(0,t.jsx)(o.Button,{css:d,onClick:c,title:i,"aria-label":i,"aria-pressed":r,className:p},(0,t.jsx)("div",{className:(0,t.classNames)("inner",{rectangle:n===l.Rectangle},{circle:n===l.Circle})}))};var u=d(5562),v=d(3242),g=d(4337);const m=e=>{const{bold:a,italic:i,underline:n,strike:l,color:o,onChange:r}=e,c=(0,s.useTheme2)();return t.React.createElement("div",{className:"font-setting d-flex align-items-center",role:"group","aria-label":e["aria-label"]},t.React.createElement(u.FontStyle,{bold:a,italic:i,underline:n,strike:l,onChange:r}),t.React.createElement(g.ThemeColorPicker,{className:"jimu-outline-inside",specificTheme:c,value:o,onChange:e=>{r("color",e)}}))},h=["default","active","hover"],b=e=>{const{className:a,variant:n,onChange:l}=e,c=t.hooks.useTranslation(r.A,o.defaultMessages),d=(0,s.useTheme2)();return(0,t.jsx)(i.SettingRow,{className:"sw-controller__advanced-setting",role:"group","aria-label":c("advance"),flow:"wrap"},(0,t.jsx)(o.Tabs,{type:"pills",className:(0,t.classNames)("flex-grow-1 w-100 h-100",a),fill:!0,defaultValue:h[0]},h.map(((e,a)=>{const r=null==n?void 0:n[e];return(0,t.jsx)(o.Tab,{key:a,id:e,className:"tab-title-item",title:c("active"===e?"selected":e)},(0,t.jsx)(i.SettingRow,{className:"mt-4",label:c("textFormatOverride"),flow:"no-wrap",truncateLabel:!0},(0,t.jsx)(m,{"aria-label":c("textFormatOverride"),bold:null==r?void 0:r.bold,italic:null==r?void 0:r.italic,underline:null==r?void 0:r.underline,strike:null==r?void 0:r.strike,color:null==r?void 0:r.color,onChange:(t,a)=>{l(e,t,a)}})),(0,t.jsx)(i.SettingRow,{className:"mt-2",label:c("iconBackgroundOverride"),flow:"no-wrap",truncateLabel:!0},(0,t.jsx)(g.ThemeColorPicker,{className:"jimu-outline-inside","aria-label":c("iconBackgroundOverride"),specificTheme:d,value:null==r?void 0:r.bg,onChange:t=>{l(e,"bg",t)}})))}))))};var x=d(5508),f=d.n(x);const w=e=>{const a=(()=>{const e=(0,s.useTheme)(),a=null==e?void 0:e.ref.palette.neutral[1e3],i=null==e?void 0:e.ref.palette.black;return t.css`
    .jimu-icon {
      color: ${a};
      &:hover {
        color: ${i};
      }
    }
  `})(),{className:i,tooltip:n="",icon:l=f()}=e;return(0,t.jsx)(o.Tooltip,{title:n},(0,t.jsx)(o.Button,{icon:!0,size:"sm",type:"tertiary",css:a,className:(0,t.classNames)("icon-tooltip d-flex align-items-center",i)},(0,t.jsx)(o.Icon,{icon:l})))},S=e=>{const{className:a,label:i,tooltip:n="",icon:l}=e;return(0,t.jsx)("div",{className:(0,t.classNames)("label-tooltip d-flex align-items-center justify-content-between",a)},(0,t.jsx)("div",{className:"text-truncate",title:i},i),(0,t.jsx)(w,{icon:l,tooltip:n}))};function y(e){return(null==e?void 0:e.type)&&e.type!==t.AnimationType.None}function j(e){const{controllerId:n}=e,l=t.ReactRedux.useSelector((e=>{var t,a;return null===(a=null===(t=e.appStateInBuilder.appConfig.controllerPanels)||void 0===t?void 0:t[n])||void 0===a?void 0:a.effect})),o=t.hooks.useTranslation(),r=t.React.useCallback(((e,i)=>{const l=(0,a.getAppConfigAction)(),o=l.appConfig.controllerPanels[n];l.editControllerPanel(n,o.set("effect",i)).exec(),y(i)&&a.builderAppSync.publishAnimationPreviewToApp({controllerId:n,id:(0,t.getNextAnimationId)()})}),[n]),s=t.React.useCallback((()=>{y(l)&&a.builderAppSync.publishAnimationPreviewToApp({controllerId:n,id:(0,t.getNextAnimationId)()})}),[l,n]);return(0,t.jsx)(i.SettingSection,{className:"p-0 mt-4",role:"group","aria-label":o("animation"),title:o("animation")},(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(u.AnimationSettingComponent,{effectSetting:l,onSettingChange:r,previewEnabled:!0,supportAsOne:!0,supportOneByOne:!1,onPreviewClicked:s,formatMessage:o})))}const C=s.styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--ref-palette-neutral-500);
  margin: 16px 0;
`,T=e=>{const{id:i}=e,n=t.ReactRedux.useSelector((e=>{var a,n;return null!==(n=null===(a=e.appStateInBuilder.appConfig.controllerPanels)||void 0===a?void 0:a[i])&&void 0!==n?n:(0,t.Immutable)(v.ob)}));return t.React.createElement("div",{className:"w-100"},t.React.createElement(u.FixedPositionSize,{fixedPositionSizeJson:n,onChange:e=>{(0,a.getAppConfigAction)().editControllerPanel(i,e).exec()}}),t.React.createElement(C,null),t.React.createElement(j,{controllerId:i}))},R="#080808",I="none",N=t.css`
    font-size: 13px;
    font-weight: lighter;
    .setting-row-item {
      width: 100%;
      display: flex;
      margin-top: 0.5rem;
      > span.jimu-radio {
        flex-shrink: 0;
        margin-top: 0.1rem;
      }
      > label {
        margin-bottom: 0;
      }
    }
    .jimu-multi-select {
      width: 100%;
      > .jimu-dropdown {
        width: 100%;
      }
      > .jimu-menu-item {
        width: 100%;
        height: ${t.polished.rem(26)};
      }
    }
  `,k=(e,a)=>{const i=(e=>{var t,a,i;let n=(null!==(i=null===(a=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===a?void 0:a.call(t))&&void 0!==i?i:[]).map((t=>{var a;return null===(a=e.content)||void 0===a?void 0:a[t]}));return n=n.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),n.map((e=>e.id)).map((t=>{var a,i;return null===(i=null===(a=e.content)||void 0===a?void 0:a[t])||void 0===i?void 0:i.widgetId}))})(t.ReactRedux.useSelector((t=>{var i,l,o,r;const s=null===(o=null===(l=null===(i=(t=t.appStateInBuilder).appConfig.widgets)||void 0===i?void 0:i[e])||void 0===l?void 0:l.layouts)||void 0===o?void 0:o[a],c=t.browserSizeMode,d=t.appConfig.mainSizeMode,p=n.searchUtils.findLayoutId(s,c,d);return null===(r=t.appConfig.layouts)||void 0===r?void 0:r[p]}))),l=t.ReactRedux.useSelector((e=>e.appStateInBuilder.appConfig.widgets));return(0,t.Immutable)(i||[]).map((e=>{var t;return{label:null===(t=l[e])||void 0===t?void 0:t.label,value:e}}))},A=(e,t)=>{var a,i,n,l,o;const r=(null===(i=null===(a=null==t?void 0:t.appearance)||void 0===a?void 0:a.card.avatar)||void 0===i?void 0:i.type)||"primary";let s=null===(o=null===(l=null===(n=null==e?void 0:e.components)||void 0===n?void 0:n.button)||void 0===l?void 0:l.variants)||void 0===o?void 0:o[r];return s=s.setIn(["default","color"],R),s=s.setIn(["active","color"],R),s},O=d=>{var p,g,m,h,x,f,w,y,j,C,R,O,P,M,B,L,z,_,E,D,F;const{id:W,config:U,onSettingChange:G}=d,$=t.ReactRedux.useSelector((e=>{var a;return(null===(a=e.appStateInBuilder)||void 0===a?void 0:a.browserSizeMode)===t.BrowserSizeMode.Small})),H=null===(p=null==U?void 0:U.behavior)||void 0===p?void 0:p.onlyOpenOne,V=null===(g=null==U?void 0:U.behavior)||void 0===g?void 0:g.displayType,q=null!==(h=null===(m=null==U?void 0:U.behavior)||void 0===m?void 0:m.arrangement)&&void 0!==h?h:"floating",X=null===(x=null==U?void 0:U.behavior)||void 0===x?void 0:x.vertical,Y=null===(f=null==U?void 0:U.behavior)||void 0===f?void 0:f.openStarts,J=null===(w=null==U?void 0:U.appearance)||void 0===w?void 0:w.space,K=null===(y=null==U?void 0:U.appearance)||void 0===y?void 0:y.advanced,Q=null===(j=null==U?void 0:U.appearance.card)||void 0===j?void 0:j.showLabel,Z=null===(R=null===(C=null==U?void 0:U.appearance.card)||void 0===C?void 0:C.showIndicator)||void 0===R||R,ee=null===(P=null===(O=null==U?void 0:U.appearance.card)||void 0===O?void 0:O.showTooltip)||void 0===P||P,te=null!==(B=null===(M=null==U?void 0:U.appearance.card)||void 0===M?void 0:M.labelGrowth)&&void 0!==B?B:0,ae=null===(z=null===(L=null==U?void 0:U.appearance.card)||void 0===L?void 0:L.avatar)||void 0===z?void 0:z.size,ie=null===(E=null===(_=null==U?void 0:U.appearance.card)||void 0===_?void 0:_.avatar)||void 0===E?void 0:E.shape,ne=null!==(D=null==Y?void 0:Y[0])&&void 0!==D?D:I,le=X?J:te,oe=t.React.useRef(0),re=(0,s.useTheme2)(),se=k(W,v.bC),ce=t.hooks.useTranslation(o.defaultMessages,n.defaultMessages,r.A),de=K?null===(F=null==U?void 0:U.appearance)||void 0===F?void 0:F.card.variant:A(re,U),pe=(e,t)=>{let a=null;a=Array.isArray(e)?U.setIn(e,t):U.set(e,t),G({id:W,config:a})},ue=(i,n,l)=>{if(!i.currentTarget.checked)return;let o=null;const r=(0,a.getAppConfigAction)();"onlyOpenOne"===n?(o=U.setIn(["behavior","openStarts"],(0,t.Immutable)([])).setIn(["behavior",n],l),l||(o=o.setIn(["behavior","arrangement"],"floating")),ve(r,"floating")):"displayType"===n&&(l=l?e.Stack:e.SideBySide,o=U.setIn(["behavior",n],l)),r.editWidget({id:W,config:o}).exec()},ve=(e,t)=>"floating"===t?e.removeControllerPanel(W):"fixed"===t?e.editControllerPanel(W,v.ob):void 0,ge=(e,t)=>{var i;if(!e.currentTarget.checked)return;const n=U.set("behavior",null===(i=null==U?void 0:U.behavior)||void 0===i?void 0:i.set("arrangement",t)),l=(0,a.getAppConfigAction)();ve(l,t),l.editWidget({id:W,config:n}).exec()},me=e=>{let t=U.setIn(["appearance","advanced"],e);if(e){const e=A(re,U);t=t.setIn(["appearance","card","variant"],e)}else t=t.setIn(["appearance","card","variant"],void 0);G({id:W,config:t})};return(0,t.jsx)("div",{className:"widget-setting-controller jimu-widget-setting",css:N},(0,t.jsx)(i.SettingSection,null,(0,t.jsx)(i.SettingRow,{flow:"no-wrap",label:ce("direction")},(0,t.jsx)(i.DirectionSelector,{"aria-label":ce("direction"),size:"sm",vertical:X,onChange:e=>{var t,i;let n=U.setIn(["behavior","vertical"],e);if(e){const e=null!==(t=n.appearance.card.labelGrowth)&&void 0!==t?t:0;n=n.setIn(["appearance","card","labelGrowth"],0).setIn(["appearance","space"],oe.current),oe.current=e}else{const e=null!==(i=n.appearance.space)&&void 0!==i?i:0;n=n.setIn(["appearance","space"],0).setIn(["appearance","card","labelGrowth"],oe.current),oe.current=e}(0,a.getAppConfigAction)().editWidget({id:W,config:n}).exchangeWidthAndHeight().exec()}}))),(0,t.jsx)(i.SettingSection,{title:ce("behavior"),role:"group","aria-label":ce("behavior")},(0,t.jsx)(i.SettingRow,{flow:"wrap",label:ce("openWidget")},(0,t.jsx)("div",{role:"radiogroup",className:"setting-row-item","aria-label":ce("openWidget")},(0,t.jsx)(o.Radio,{id:"only-open-one",style:{cursor:"pointer"},name:"only-open-one",onChange:e=>{ue(e,"onlyOpenOne",!0)},checked:H}),(0,t.jsx)(o.Label,{style:{cursor:"pointer"},for:"only-open-one",className:"ml-2"},ce("single"))),(0,t.jsx)("div",{className:"setting-row-item"},(0,t.jsx)(o.Radio,{id:"open-multiple",style:{cursor:"pointer"},name:"only-open-one",onChange:e=>{ue(e,"onlyOpenOne",!1)},checked:!H}),(0,t.jsx)(o.Label,{style:{cursor:"pointer"},for:"open-multiple",className:"ml-2"},ce("multiple")))),(0,t.jsx)(i.SettingRow,{flow:"wrap",label:ce("openStart")},!H&&(0,t.jsx)(o.MultiSelect,{size:"sm","a11y-description":ce("openStart"),values:Y,items:se,onClickItem:(e,t,a)=>{const i=H?a.length?[t]:[]:a;pe(["behavior","openStarts"],i)},displayByValues:e=>{if(H&&e.length){const t=se.find((t=>t.value===e[0]));return null==t?void 0:t.label}{const t=(null==e?void 0:e.length)||0;return ce("widgetsSelected",{widgetNumber:t})}}}),H&&(0,t.jsx)(o.Select,{"a11y-description":ce("openStart"),value:ne,size:"sm",onChange:e=>{const t=e.target.value;let a=[];t!==I&&(a=[t]),pe(["behavior","openStarts"],a)},className:"w-100"},(0,t.jsx)("option",{value:I},ce("none")),null==se?void 0:se.map((e=>(0,t.jsx)("option",{key:e.value,value:e.value},e.label))))),!H&&(0,t.jsx)(i.SettingRow,{flow:"wrap",label:ce("displayType")},(0,t.jsx)("div",{role:"radiogroup",className:"setting-row-item","aria-label":ce("displayType")},(0,t.jsx)(o.Radio,{id:"display-stack",style:{cursor:"pointer"},name:"display-type",onChange:e=>{ue(e,"displayType",!0)},checked:V===e.Stack}),(0,t.jsx)(o.Label,{style:{cursor:"pointer"},for:"display-stack",className:"ml-2"},ce("stack"))),(0,t.jsx)("div",{className:"setting-row-item"},(0,t.jsx)(o.Radio,{id:"display-side-by-side",style:{cursor:"pointer"},name:"display-type",onChange:e=>{ue(e,"displayType",!1)},checked:V===e.SideBySide}),(0,t.jsx)(o.Label,{style:{cursor:"pointer"},for:"display-side-by-side",className:"ml-2"},ce("sideBySide"))))),!$&&H&&(0,t.jsx)(i.SettingSection,null,(0,t.jsx)(o.CollapsablePanel,{defaultIsOpen:!0,label:ce("widgetPanelArrangment")},(0,t.jsx)(i.SettingRow,{flow:"wrap",role:"group","aria-label":ce("widgetPanelArrangment")},(0,t.jsx)("div",{role:"radiogroup",className:"setting-row-item","aria-label":ce("widgetPanelArrangment")},(0,t.jsx)(o.Radio,{id:"panel-floating",style:{cursor:"pointer"},name:"panel-arrangment",onChange:e=>{ge(e,"floating")},checked:"floating"===q}),(0,t.jsx)(o.Label,{style:{cursor:"pointer"},for:"panel-floating",className:"ml-2"},ce("panelFloating"))),(0,t.jsx)("div",{className:"setting-row-item"},(0,t.jsx)(o.Radio,{id:"panel-fixed",style:{cursor:"pointer"},name:"panel-arrangment",onChange:e=>{ge(e,"fixed")},checked:"fixed"===q}),(0,t.jsx)(o.Label,{style:{cursor:"pointer"},for:"panel-fixed",className:"ml-2"},ce("fixed")))),"fixed"===q&&(0,t.jsx)(i.SettingRow,{flow:"wrap",label:ce("positionAndSize")},(0,t.jsx)(T,{id:W})))),(0,t.jsx)(i.SettingSection,null,(0,t.jsx)(o.CollapsablePanel,{defaultIsOpen:!0,label:(0,t.jsx)(S,{label:ce("appearance"),tooltip:ce("appearanceTip")})},(0,t.jsx)(i.SettingRow,{flow:"wrap",label:ce("iconStyle"),className:"mt-4"},(0,t.jsx)("div",{role:"group",className:"d-flex","aria-label":ce("iconStyle")},(0,t.jsx)(c,{type:l.Circle,title:ce("circle",!0),className:"mr-2",active:"circle"===ie,onClick:()=>{pe(["appearance","card","avatar","shape"],"circle")}}),(0,t.jsx)(c,{type:l.Rectangle,title:ce("rectangle"),active:"rectangle"===ie,onClick:()=>{pe(["appearance","card","avatar","shape"],"rectangle")}}))),(0,t.jsx)(i.SettingRow,{label:ce("showIconLabel")},(0,t.jsx)(o.Switch,{checked:Q,"aria-label":ce("showIconLabel"),onChange:e=>{pe(["appearance","card","showLabel"],e.target.checked)}})),(0,t.jsx)(i.SettingRow,{label:ce("indicator")},(0,t.jsx)(o.Switch,{checked:Z,"aria-label":ce("indicator"),onChange:e=>{pe(["appearance","card","showIndicator"],e.target.checked)}})),(0,t.jsx)(i.SettingRow,{label:ce("tooltip")},(0,t.jsx)(o.Switch,{checked:ee,"aria-label":ce("tooltip"),onChange:e=>{pe(["appearance","card","showTooltip"],e.target.checked)}})),(0,t.jsx)(i.SettingRow,{flow:"no-wrap",label:ce("iconSizeOverride")},(0,t.jsx)(o.Select,{size:"sm","aria-label":ce("iconSizeOverride"),value:ae,onChange:e=>{pe(["appearance","card","avatar","size"],e.target.value)},className:"w-50"},(0,t.jsx)("option",{value:"sm"},ce("small")),(0,t.jsx)("option",{value:"default"},ce("medium")),(0,t.jsx)("option",{value:"lg"},ce("large")))),(0,t.jsx)(i.SettingRow,{flow:"no-wrap",label:ce("iconInterval")},(0,t.jsx)(u.InputUnit,{className:"w-50",min:0,max:999,description:ce("iconInterval"),value:{distance:le,unit:o.DistanceUnits.PIXEL},onChange:({distance:e})=>{(e=>{e=+e,isNaN(e)&&(e=0);let t=U;t=t.behavior.vertical?t.setIn(["appearance","space"],e).setIn(["appearance","card","labelGrowth"],0):t.setIn(["appearance","card","labelGrowth"],e).setIn(["appearance","space"],0),G({id:W,config:t})})(e)}})))),(0,t.jsx)(i.SettingSection,null,(0,t.jsx)(o.CollapsableToggle,{label:ce("advance"),isOpen:K,onRequestOpen:()=>{me(!0)},onRequestClose:()=>{me(!1)}},(0,t.jsx)(b,{className:"mt-4",variant:de,onChange:(e,t,a)=>{pe(["appearance","card","variant",e,t],a)}}))))};function P(e){d.p=e}})(),p})())}}}));