System.register(["jimu-core","jimu-ui","jimu-theme","jimu-layouts/layout-runtime"],(function(e,t){var o={},a={},i={},n={};return{setters:[function(e){o.AppMode=e.AppMode,o.BaseVersionManager=e.BaseVersionManager,o.ContainerType=e.ContainerType,o.ErrorBoundary=e.ErrorBoundary,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished},function(e){a.Button=e.Button,a.FloatingPanel=e.FloatingPanel,a.Icon=e.Icon,a.Loading=e.Loading,a.MobilePanel=e.MobilePanel,a.NavButtonGroup=e.NavButtonGroup,a.Popper=e.Popper,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages,a.styleUtils=e.styleUtils,a.utils=e.utils},function(e){i.styled=e.styled},function(e){n.searchUtils=e.searchUtils}],execute:function(){e((()=>{var e={9859:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M4 4h2v1H4zM8 4h2v1H8zM14 4h-2v1h2zM15 4h1v2h-1zM16 8h-1v2h1zM4 14h1v2H4zM5 6H4v2h1zM4 10h1v2H4zM16 12h-1v2h1zM16 15v1h-2v-1zM12 15h-2v1h2zM6 15h2v1H6z"></path><path fill="#000" fill-rule="evenodd" d="M18 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" clip-rule="evenodd"></path></svg>'},2838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},718:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjQyIiB2aWV3Qm94PSIwIDAgMTA5IDQyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTA5IiBoZWlnaHQ9IjQyIiByeD0iNiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUwLjI0IDE3LjgxOFYxNi40MDRINDQuNjEyVjE3LjgxOEg1MC4yNFpNNTEuNjY4IDEzLjg0MlYxOC45NTJINDMuMTg0VjEzLjg0Mkg0NC42MTJWMTUuMjk4SDUwLjI0VjEzLjg0Mkg1MS42NjhaTTQ0LjU0MiAyMi4zODJWMjQuNjY0SDUxLjg5MlYyNS44NEg0My4xVjIyLjM4Mkg0NC41NDJaTTQxLjcgMjAuMDE2SDUzLjE2NlYyMS4xNzhINDguMjY2VjIzLjQzMkg0Ni44MjRWMjEuMTc4SDQxLjdWMjAuMDE2Wk02Mi4wNDA5IDE5LjMzTDYxLjI3MDkgMjAuNDVDNTkuOTEyOSAxOS45NiA1OC45MDQ5IDE4Ljk4IDU4LjM3MjkgMTcuNzM0QzU3LjgxMjkgMTkuMDkyIDU2Ljc3NjkgMjAuMTcgNTUuMzIwOSAyMC43MTZMNTQuNTY0OSAxOS41NjhDNTYuNTUyOSAxOC44NjggNTcuNjMwOSAxNy4xODggNTcuNjMwOSAxNS4zNFYxNC4wOEg1OS4wODY5VjE1LjQyNEM1OS4wODY5IDE3LjA3NiA2MC4xNjQ5IDE4LjY3MiA2Mi4wNDA5IDE5LjMzWk01Ni41Mzg5IDIyLjczMlYyMS41ODRINjUuMDY0OVYyNi4wOTJINjMuNjIyOVYyMi43MzJINTYuNTM4OVpNNjMuNjIyOSAxMy40MjJINjUuMDY0OVYyMC45NEg2My42MjI5VjE3LjEzMkg2MS4wNjA5VjE1Ljk0Mkg2My42MjI5VjEzLjQyMlpNNzMuODk3OCAyMy4zNzZINzguOTIzOFYyNC41NjZINjcuNDcxOFYyMy4zNzZINzIuNDU1OFYyMC4zOTRINjguODcxOFYxNC4zODhINzcuNTIzOFYxNS41NUg3MC4zMTM4VjE5LjIzMkg3Ny42MzU4VjIwLjM5NEg3My44OTc4VjIzLjM3NlpNOTEuNzg4NyAxOS42MVYyMC44SDg2Ljc0ODdWMjYuMDc4SDg1LjI5MjdWMjAuOEg4MC4zNTA3VjE5LjYxSDg4LjU2ODdDODguOTMyNyAxNy44NDYgODguOTMyNyAxNi41MyA4OC45MzI3IDE1LjM2OEg4MS43MjI3VjE0LjIwNkg5MC4zNDY3VjE1LjMxMkM5MC4zNDY3IDE2LjUwMiA5MC4zNDY3IDE3LjgxOCA5MC4wMjQ3IDE5LjYxSDkxLjc4ODdaIiBmaWxsPSIjM0QzRDNEIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yNDdfMzIpIj4KPHBhdGggZD0iTTMwLjEyMzggMTEuMzAwMkMyOS4wODMyIDExLjMwODkgMjguMjQ3IDEyLjE2ODkgMjguMjU1NiAxMy4yMjA0QzI4LjI1NzkgMTMuNDkyMiAyOC4zMTczIDEzLjc2IDI4LjQzMDcgMTQuMDA2NUwyNy43MzkgMTQuNzg4N0MyMy4yMTg1IDcuNDU2OTMgMTIuMDM4IDExLjU3OTUgMTMuMzU2OCAyMC4yMTZMMTIuMjkyNCAyMC44NzQyQzExLjk5OTQgMjEuMDYxOCAxMS45MTE4IDIxLjQ1MzcgMTIuMDk3NCAyMS43NTAzQzEyLjIxMDcgMjEuOTMxNyAxMi40MDczIDIyLjA0MjcgMTIuNjE5NSAyMi4wNDU4QzEyLjg3MjMgMjIuMDc3NCAxMy40NjkgMjEuNjAzOCAxMy42ODQzIDIxLjQ5NTlDMTUuMTgyOCAyNi4wOTgxIDIwLjk1MzMgMjguMjg2OSAyNS4wOTQ5IDI1LjY0ODFMMjcuODU5NCAyOC40NDM0QzI4LjU5MTMgMjkuMTg0OCAyOS43NzkxIDI5LjE4NjQgMzAuNTEzIDI4LjQ0NjVDMzEuMjQ2NCAyNy43MDY2IDMxLjI0NzkgMjYuNTA1NyAzMC41MTYxIDI1Ljc2MzlDMzAuNTE0OSAyNS43NjI3IDMwLjUxNDEgMjUuNzYxOSAzMC41MTMgMjUuNzYwN0wyNy43NDggMjIuOTY1OUMyOC45OTQ5IDIwLjg2MzUgMjkuMjExOCAxOC4yOTcgMjguMzM1NyAxNi4wMTEzTDI5LjMxNDEgMTQuOTA0OEMzMC4yNDc2IDE1LjM1NzYgMzEuMzY3NSAxNC45NTkgMzEuODE0OSAxNC4wMTUyQzMyLjI2MjcgMTMuMDcxNSAzMS44Njg1IDExLjkzOTcgMzAuOTM1IDExLjQ4N0MzMC42ODE4IDExLjM2NDIgMzAuNDA0MyAxMS4zMDA2IDMwLjEyMzQgMTEuMzAwNkwzMC4xMjM4IDExLjMwMDJaTTE0LjQ5MzkgMTguODg0OEMxNC41ODAyIDExLjkzNzggMjMuNjQ4MyA5Ljc1NDQzIDI2Ljg1ODMgMTUuNzg0NkwyNC4yNyAxOC43MTE0QzIzLjU2NyAxOC40MjM4IDIyLjc2MjEgMTguNTg5MyAyMi4yMjY4IDE5LjEzMjVMMjAuMTEwOSAxOC4xMjY3QzIwLjIxNDQgMTcuMDg1IDE5LjQ2MyAxNi4xNTU1IDE4LjQzMjYgMTYuMDUwNEMxNy40MDIyIDE1Ljk0NTggMTYuNDgyOCAxNi43MDU0IDE2LjM3ODggMTcuNzQ3MUMxNi4zNTk3IDE3Ljk0MTUgMTYuMzY5OSAxOC4xMzc0IDE2LjQxMDEgMTguMzI4NkwxNC41MjQ0IDE5LjQ5NDNDMTQuNTA2IDE5LjI5MzMgMTQuNDkzOSAxOS4wOTA2IDE0LjQ5MzkgMTguODg1MlYxOC44ODQ4Wk0yMi45ODk1IDIwLjIwNzRDMjMuMTM0MSAxOS44ODk4IDIzLjUwNjEgMTkuNzUwNyAyMy44MjAyIDE5Ljg5NjlDMjQuMDM5OCAxOS45OTkyIDI0LjE4MTcgMjAuMjIwNCAyNC4xODQ0IDIwLjQ2NDlDMjQuMTg4MyAyMC44MTQ1IDIzLjkxMTMgMjEuMTAwOSAyMy41NjU1IDIxLjEwNDlDMjMuMjE5NyAyMS4xMDg4IDIyLjkzNjQgMjAuODI4NyAyMi45MzI1IDIwLjQ3OTFDMjIuOTMxMyAyMC4zODU1IDIyLjk1MDggMjAuMjkyNyAyMi45ODk5IDIwLjIwNzRIMjIuOTg5NVpNMTcuNjE5OSAxNy45MzY3QzE3LjYyNDkgMTcuNTg3NSAxNy45MDkgMTcuMzA4NiAxOC4yNTQgMTcuMzEzOEMxOC41OTI0IDE3LjMxODkgMTguODY1MiAxNy41OTQ2IDE4Ljg3MDIgMTcuOTM2N0MxOC44NjUyIDE4LjI4NTkgMTguNTgxMSAxOC41NjQ4IDE4LjIzNjEgMTguNTU5N0MxNy44OTc3IDE4LjU1NDUgMTcuNjI0OSAxOC4yNzg4IDE3LjYxOTkgMTcuOTM2N1pNMjkuNjI4NyAyNi42NTQzQzI5Ljg2OTggMjYuOTA1MSAyOS44NjM5IDI3LjMwNTcgMjkuNjE2MiAyNy41NDk0QzI5LjM3MzEgMjcuNzg4IDI4Ljk4NjMgMjcuNzg4IDI4Ljc0MzYgMjcuNTQ5NEwyNi4xMjA2IDI0Ljg5NzZDMjYuNDM4NiAyNC42MjM0IDI2LjczNDQgMjQuMzI0NCAyNy4wMDU2IDI0LjAwMjhMMjkuNjI4NyAyNi42NTQ3VjI2LjY1NDNaTTI3LjYyMyAxOC44ODQ4QzI3LjQ0MTcgMjYuNTQ0MSAxNy4wOTk0IDI4LjAxMTIgMTQuNzc5OSAyMC44MTgxTDE3LjA2MjcgMTkuNDA3QzE3LjgxMzcgMjAuMDE0NiAxOC44OTU2IDE5Ljk1NTMgMTkuNTc3NSAxOS4yNjk2TDIxLjY5MzQgMjAuMjc1M0MyMS41ODk4IDIxLjMxNyAyMi4zNDA5IDIyLjI0NjUgMjMuMzcxMyAyMi4zNTE2QzI0LjQwMTcgMjIuNDU2MyAyNS4zMjExIDIxLjY5NyAyNS40MjUgMjAuNjU1M0MyNS40NjI5IDIwLjI3MzcgMjUuMzg1NiAxOS44ODk4IDI1LjIwMzEgMTkuNTUzNkwyNy4zNzQ1IDE3LjA5ODFDMjcuNTM3OCAxNy42Nzk1IDI3LjYyMTQgMTguMjgwOCAyNy42MjMgMTguODg1MlYxOC44ODQ4Wk0zMC4xMjM4IDEzLjgyODRDMjkuNzc4MyAxMy44MjI5IDI5LjUwMjkgMTMuNTM1NyAyOS41MDgzIDEzLjE4NjVDMjkuNTEzNCAxMi44NDUyIDI5Ljc4NjIgMTIuNTY5NCAzMC4xMjM4IDEyLjU2NDNDMzAuNDY5MiAxMi41Njk0IDMwLjc0NDcgMTIuODU2NiAzMC43Mzk2IDEzLjIwNThDMzAuNzM0NSAxMy41NDc1IDMwLjQ2MTggMTMuODIzMyAzMC4xMjM4IDEzLjgyODRaIiBmaWxsPSIjM0QzRDNEIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjQ3XzMyIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIgMTEpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},9244:e=>{"use strict";e.exports=o},1496:e=>{"use strict";e.exports=n},1888:e=>{"use strict";e.exports=i},4321:e=>{"use strict";e.exports=a}},t={};function l(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,l),i.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var r={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(r),l.d(r,{__set_webpack_public_path__:()=>ne,default:()=>ie});var e=l(9244),t=l(4321);const o="controller",a={sm:24,default:32,lg:48},i={width:150,height:120},n={width:300,height:300},s={x:70,y:70},c={x:30,y:30};var d;!function(e){e.TopLeft="TOP_LEFT",e.TopRight="TOP_RIGHT",e.BottomLeft="BOTTOM_LEFT",e.BottomRight="BOTTOM_RIGHT",e.TopCenter="TOP_CENTER",e.BottomCenter="BOTTOM_CENTER",e.MiddleLeft="MIDDLE_LEFT",e.MiddleRight="MIDDLE_RIGHT",e.MiddleCenter="MIDDLE_CENTER"}(d||(d={}));d.TopRight;const u=[{name:"preventOverflow",options:{boundary:document.body,rootBoundary:document}},{name:"offset",options:{offset:[0,16]}}];var p=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o};const g=(e,t,o)=>{let i=a[e];t&&(i+=21);return i+=2*M(e,o),i},M=(e,t)=>"circle"===t?"sm"===e||"default"===e||"lg"===e?0:void 0:0,v={none:"0",sm:"0",default:"var(--sys-shape-1)",lg:"var(--sys-shape-2)"},j=e.React.forwardRef(((o,a)=>{var i;const{label:n,className:l,title:r,showLabel:s,showIndicator:c=!0,showTooltip:d=!0,labelGrowth:u=0,icon:j,marker:y,onClick:I,onMarkerClick:h,avatar:N,autoFlip:m,active:x,editDraggable:f,disabled:w,widgetid:b}=o,D=p(o,["label","className","title","showLabel","showIndicator","showTooltip","labelGrowth","icon","marker","onClick","onMarkerClick","avatar","autoFlip","active","editDraggable","disabled","widgetid"]),z=N||{},{shape:T,style:O}=z,S=p(z,["shape","style"]),A=(null==S?void 0:S.size)||"default",L=((t,o,a,i,n)=>e.React.useMemo((()=>{g(t,o,i);const n=M(t,i);return e.css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${o?"space-around":"center"};
      width: 5rem !important;
      height: 5rem !important;
      .tool-drag-handler {
        cursor: auto;
      }
      .avatar {
        padding: ${n}px;
        position: relative;
        text-align: center;
        &:hover .marker {
          visibility: visible;
        }
        .marker {
          position: absolute;
          right: 0;
          top: 0;
          padding: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-btn-sizer {
            min-width: 3rem !important;
            min-height: 3rem !important;
          }
          visibility: hidden;
        }
      }
      ${a?".avatar.active {\n        .avatar-button, .marker {\n          transform: translateY(-7px);\n        }\n        .marker {\n          z-index: 1;\n        }\n        ::after {\n          content: '';\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          transform: translateX(-50%);\n          border: 1px solid var(--ref-palette-white);\n          border-radius: 3px;\n          width: 6px;\n          height: 3px;\n          background-color: var(--sys-color-primary-main);\n          box-sizing: content-box;\n        }\n      }":""}
      .avatar-label {
        text-align: center;
        width: 100%;
        min-height: ${e.polished.rem(10)};
        cursor: default;
      }
    `}),[t,o,i,n,a]))(A,s,c,T,u),E=v[A],C=(0,e.jsx)(t.Button,Object.assign({"data-widgetid":b,icon:!0,active:x,className:(0,e.classNames)("avatar-button",{disabled:w}),ref:a},S,{style:Object.assign({borderRadius:"circle"===T?"50%":E},O),onClick:I}),(0,e.jsx)(t.Icon,{style:{width:"24px",height:"24px"},color:"string"!=typeof j&&(null===(i=j.properties)||void 0===i?void 0:i.color),icon:"string"!=typeof j?j.svg:j,autoFlip:m}));return(0,e.jsx)("div",Object.assign({},D,{className:(0,e.classNames)("avatar-card",`${l} avatar-card`),css:L}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!f,active:x},"avatar tool-drag-handler")},y&&(0,e.jsx)(t.Button,{className:"marker",size:"lg",icon:!0,onClick:h},(0,e.jsx)(t.Icon,{size:8,icon:y})),d?(0,e.jsx)(t.Tooltip,{title:r||n,style:{pointerEvents:"none"}},C):C),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-truncate",{active:x})},n))})),y=(t,o,a=0,i=a,n)=>{let l=((t,o=500,a=!1,i)=>{var n,l;const r=a?"clientHeight":"clientWidth",[s,c]=e.React.useState(null!==(l=null===(n=t.current)||void 0===n?void 0:n[r])&&void 0!==l?l:0),d=!i&&!window.jimuConfig.isInBuilder,u=e.hooks.useLatest((()=>{const e=t.current[r]||0;c(e)})),p=e.React.useMemo((()=>e.lodash.debounce((()=>{u.current()}),o,{leading:!0})),[]);return e.React.useEffect((()=>{if(d)return;const e=t.current;e&&p();const o=new ResizeObserver(p);return o.observe(e),()=>{o.disconnect(),p.cancel()}}),[t,p,d]),s})(t,500,o,!n);l+=a,l=Math.max(l,i);const r=((t=500,o=!1)=>{const a=o?"clientHeight":"clientWidth",[i,n]=e.React.useState((()=>document.body[a]-40));e.hooks.useUpdateEffect((()=>{n(document.body[a]-40)}),[a]);const l=e.React.useMemo((()=>e.lodash.debounce((()=>{n(document.body[a]-40)}),t)),[a,t]);return e.React.useEffect((()=>(window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[l]),i})(500,o);return l=n?r:Math.min(l,r),l},I=(e,t,o)=>{let a=e,i=t;return i-a>o?i=e+o:i-a<o&&(a=0,i=a+o),[a,i]};var h=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o};const N=[],m=e.React.forwardRef(((o,a)=>{const{scrollRef:i,className:n,lists:l=N,createItem:r,vertical:s,itemLength:c,space:d,onChange:u,autoHideArrow:p,minLength:g=c,autoScrollEnd:M,autoSize:v,onScrollStatusChange:j}=o,m=h(o,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","minLength","autoScrollEnd","autoSize","onScrollStatusChange"]),x=e.hooks.useTranslation(t.defaultMessages),[f,w]=e.hooks.useForwardRef(a),{start:b,end:D,disablePrevious:z,disableNext:T,hideArrow:O,scroll:S}=(t=>{var o;const{rootRef:a,lists:i,itemLength:n,autoSize:l,vertical:r,space:s,minLength:c,autoScrollEnd:d}=t,u=null!==(o=null==i?void 0:i.length)&&void 0!==o?o:0,p=y(a,r,s,c,l),g=Math.floor(p/n)>u?u:Math.floor(p/n),[M,v]=e.React.useState(I(0,0,g)[0]),[j,h]=e.React.useState(I(0,0,g)[1]),N=e.hooks.useLatest(M),m=e.hooks.useLatest(j),x=j-M>=u,f=0===M,w=j===u;e.React.useEffect((()=>{if(0===p)return;const[e,t]=I(m.current,N.current,g);v(e),h(t)}),[g,p,m,N]);const b=e.hooks.useEventCallback(((e,t=!0)=>{const o=t?1:g;let a=0,i=0;e?(a=M-o,a<0?(a=0,i=a+g):i=j-o):(i=j+o,i>u?(i=u,a=i-g):a=M+o),v(a),h(i)})),D=e.React.useRef([]),z=e.hooks.useEventCallback((()=>{const e=u>0&&D.current.length>0&&i[i.length-1]!==D.current[D.current.length-1];if(d&&e&&D.current.length>u){let e=0,t=0;t=u,e=t-g,e=Math.max(0,e),v(e),h(t)}}));return e.React.useEffect((()=>{z(),D.current=i}),[i,z]),{start:M,end:j,disablePrevious:f,disableNext:w,hideArrow:x,scroll:b}})({rootRef:f,lists:l,itemLength:c,autoSize:v,vertical:s,space:d,minLength:g,autoScrollEnd:M}),A=l.slice(b,D),L=((t,o,a,i,n)=>e.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button.previous, button.next {
      flex-shrink: 0;
      display: ${n?"none":"block"};
    }
    .root {
      flex-direction: ${t?"column":"row"};
      width: 100%;
      height: 100%;
      ${t?`min-height: ${a}px;`:`min-width: ${a}px;`} 
      max-height: ${i?"100%":"calc(100% - 20px)"};
      max-width: ${i?"100%":"calc(100% - 20px)"};
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      .scroll-list-item {
        &:not(:first-of-type) {
          margin-top: ${t?o+"px":"unset"};
          margin-left: ${t?"unset":o+"px"};
        }
      }
    }
`)(s,d,g,v,O);e.React.useEffect((()=>{null==j||j(O,z,T)}),[T,z,O,j]),e.React.useEffect((()=>{t.utils.setRef(i,S)}),[S,i]);return(0,e.jsx)(t.NavButtonGroup,Object.assign({},m,{css:L,type:"tertiary",vertical:s,onChange:e=>{null==u||u(e),S(e,!0)},disablePrevious:z,disableNext:T,previousAriaLabel:x("previous"),nextAriaLabel:x("next"),className:(0,e.classNames)("scroll-list",n)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:w},l.map((t=>{const o=!A.includes(t);return r(t,(0,e.classNames)("scroll-list-item",{"d-none":o}))}))))}));var x=l(2838),f=l.n(x);const w=o=>{var a,i;const{markerEnabled:n,onMarkerClick:l,widgetid:r,showLabel:s,showIndicator:c,showTooltip:d,labelGrowth:u,avatar:p,onClick:g,active:M,editDraggable:v,className:y}=o,I=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[r]}));return I?e.React.createElement(j,{"data-widgetid":r,widgetid:r,className:`widget-avatar-card ${y}`,showLabel:s,showIndicator:c,showTooltip:d,labelGrowth:u,avatar:p,label:I.label,icon:I.icon,autoFlip:null===(i=null===(a=null==I?void 0:I.manifest)||void 0===a?void 0:a.properties)||void 0===i?void 0:i.flipIcon,marker:n?f():"",active:M,editDraggable:v,onMarkerClick:l,onClick:g}):e.React.createElement(t.Loading,null)};l(9859);(0,l(1888).styled)("div",{shouldForwardProp:e=>!["vertical","space"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.vertical?"column":"row"};
  .avatar-placeholder {
    &:not(:first-of-type) {
      margin-top: ${t=>t.vertical?e.polished.rem(t.space):"unset"};
      margin-left: ${t=>t.vertical?"unset":e.polished.rem(t.space)};
    }
  }
`,(e=>{const t=[];for(;e>0;)t.push(e),e--})(3);var b=l(1496);const D=(t,o)=>{const a=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),i=z(t,o),n=T(i);return e.React.useMemo((()=>{const t={};return n.forEach((o=>{var i;const n=null!==(i=null==a?void 0:a[o])&&void 0!==i?i:{isClassLoaded:!1};t[o]=(0,e.Immutable)(n)})),(0,e.Immutable)(t)}),[n,a])},z=(t,o)=>e.ReactRedux.useSelector((e=>{var a,i,n,l;const r=null===(n=null===(i=null===(a=e.appConfig.widgets)||void 0===a?void 0:a[t])||void 0===i?void 0:i.layouts)||void 0===n?void 0:n[o],s=e.browserSizeMode,c=e.appConfig.mainSizeMode,d=b.searchUtils.findLayoutId(r,s,c);return null===(l=e.appConfig.layouts)||void 0===l?void 0:l[d]})),T=e=>{const t=(e=>{var t,o,a;let i=(null!==(a=null===(o=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===o?void 0:o.call(t))&&void 0!==a?a:[]).map((t=>{var o;return null===(o=e.content)||void 0===o?void 0:o[t]}));return i=i.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),i.map((e=>e.id))})(e);return t.map((t=>{var o,a;return null===(a=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===a?void 0:a.widgetId}))},O=(e,t)=>{if(null!=(null==e?void 0:e.content)&&t)return Object.keys(e.content).find((o=>e.content[o].widgetId===t))},S=t=>[e.WidgetState.Opened,e.WidgetState.Active].includes(t.state);var A=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o};function L(o){const{widgetId:a,canCrossLayoutBoundary:i,className:n,layoutId:l,layoutItemId:r}=o,s=A(o,["widgetId","canCrossLayoutBoundary","className","layoutId","layoutItemId"]),c=e.hooks.useCancelablePromiseMaker(),[d,u]=e.React.useState(null),[p,g]=e.React.useState(""),[M,v]=e.React.useState("");e.React.useEffect((()=>{u(null),g("");const t=c((t=>{var o,a;if(!t)return;return(null===(a=null===(o=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===o?void 0:o[t])||void 0===a?void 0:a.isClassLoaded)?Promise.resolve(e.WidgetManager.getInstance().getWidgetClass(t)):e.WidgetManager.getInstance().loadWidgetClass(t)})(a));t.then((e=>{u(e),g(a)}),(e=>{var t;v(null!==(t=null==e?void 0:e.message)&&void 0!==t?t:e)}))}),[c,a]);const j=e.React.useCallback((()=>{var t,o;if(M)return;if(window.jimuConfig.isBuilder)return;(null===(o=null===(t=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===t?void 0:t[a])||void 0===o?void 0:o.state)===e.WidgetState.Active||(0,e.getAppStore)().dispatch(e.appActions.activateWidget(a))}),[M,a]),y=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Design)),I=e.ReactRedux.useSelector((e=>{var t,o,i;const n=e.appConfig.widgets[a];return null!==(i=null===(o=null===(t=null==n?void 0:n.manifest)||void 0===t?void 0:t.properties)||void 0===o?void 0:o.supportInlineEditing)&&void 0!==i&&i})),h=e.ReactRedux.useSelector((e=>{const t=e.widgetsRuntimeInfo[a];return I&&(null==t?void 0:t.isInlineEditing)})),N=e.ReactRedux.useSelector((t=>{var o;const i=t.appConfig.widgets[a];return(null===(o=null==i?void 0:i.manifest)||void 0===o?void 0:o.widgetType)!==e.WidgetType.Layout})),m=e.ReactRedux.useSelector((e=>{var t,o,i;const n=e.appConfig.widgets[a];return(null===(o=null===(t=null==n?void 0:n.manifest)||void 0===t?void 0:t.properties)||void 0===o?void 0:o.hasEmbeddedLayout)&&Object.keys(null!==(i=n.layouts)&&void 0!==i?i:{}).length>0})),x=y&&!h&&N&&!m,f=e.React.useCallback((t=>{I&&(t.stopPropagation(),(0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(a,!0)))}),[a,I]),w=(0,e.classNames)("widget-renderer w-100 h-100",n),b=(t=>e.React.useMemo((()=>e.css`
      overflow: ${t?"visible":"hidden"};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
      .widget-mask {
        position: absolute;
        background: transparent;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
      }
  `),[t]))(i);return(0,e.jsx)("div",Object.assign({css:b,className:w,onMouseDownCapture:j,onDoubleClickCapture:f,"data-widgetid":p},s),(0,e.jsx)("div",{className:"widget-content p-1"},M,!M&&d&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(d,{widgetId:p,layoutId:l,layoutItemId:r})),!M&&!d&&(0,e.jsx)(t.Loading,null)),x&&(0,e.jsx)("div",{className:"widget-mask"}))}const E=(0,e.Immutable)({}),C=a=>{var i,n,l;const{controllerId:r,containerMapId:s,onClose:c,widgets:d=E}=a,u=null!==(i=Object.keys(d).find((e=>S(d[e]))))&&void 0!==i?i:"",p=null===(l=null===(n=(0,e.getAppStore)().getState().appConfig.widgets)||void 0===n?void 0:n[u])||void 0===l?void 0:l.label,g=z(r,o),M=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const i=null==g?void 0:g.id,n=O(g,o),l=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;l&&l.layoutId===i&&l.layoutItemId===n||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:i,layoutItemId:n}))}),[g]);return e.React.createElement(t.MobilePanel,{className:(0,e.classNames)("mobile-widget-launcher",{"d-none":!u}),mapWidgetId:s,title:p,open:!!u,keepMount:!0,onClick:e=>{M(e,u)},onClose:e=>{null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==c||c(u)}},Object.entries(d).map((([t,o])=>{if(!(void 0!==o.state))return null;const a=S(o),i=null==g?void 0:g.id,n=O(g,t);return e.React.createElement(L,{key:t,widgetId:t,layoutId:i,layoutItemId:n,onClick:e=>{M(e,t)},className:(0,e.classNames)({"d-none":!a})})})))};var k;!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(k||(k={}));const R={_widgetLabel:"Widget Controller",_action_openWidget_label:"Open widget",resizerTooltip:"Customize the window size by dragging and dropping."},Q=e=>document.querySelector(`.widget-controller .avatar-card[data-widgetid='${e}']`),U=()=>{const t=`url("data:image/svg+xml;base64,${window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">\n    <g clip-path="url(#rectangle)">\n      <path d="M10 2.77832V0L0 10H2.77832L10 2.77832Z" fill="#000000" />\n      <path d="M10 5.60674L5.60675 10H10V5.60674Z" fill="#000000" />\n    </g>\n    <defs>\n      <clipPath id="rectangle">\n        <rect width="10" height="10" fill="white" />\n      </clipPath>\n    </defs>\n  </svg>')}")`;return e.css`
    .resizer {
      bottom: 4px !important;
      right: 4px !important;
      background-color: var(--sys-color-secondary-dark);
      mask-image: ${t};
      border: none !important;
    }
  `},Y=()=>e.css`
    .resizer {
      width: 9px !important;
      height: 9px !important;
      position: absolute;
      bottom: 4px !important;
      right: 4px !important;
      border: 1px solid #000 !important;
      background: #fff;
      clip-path: polygon(5px 0px, 9px 0px, 9px 9px, 0px 9px, 0px 5px, 5px 5px);
      &::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
      }
    }
  `,P=()=>{const o=e.hooks.useTranslation(R),a=e.React.useMemo((()=>e.css`
    position: absolute;
    width: 15px;
    height: 15px;
    bottom: 0;
    right: 0;
  `),[]);return e.React.useMemo((()=>(0,e.jsx)(t.Tooltip,{title:o("resizerTooltip")},(0,e.jsx)("div",{className:"resizer-tooltip",css:a}))),[a,o])},W=(t,a)=>{const i=((t,o)=>{var a,i,n,l;const r=(0,e.getAppStore)().getState().appConfig,s=(0,e.getAppStore)().getState().browserSizeMode,c=null===(n=null===(i=null===(a=r.widgets)||void 0===a?void 0:a[t])||void 0===i?void 0:i.layouts)||void 0===n?void 0:n[o],d=b.searchUtils.findLayoutId(c,s,r.mainSizeMode);return null===(l=r.layouts)||void 0===l?void 0:l[d]})(a,o),n=Object.keys(i.content).find((e=>i.content[e].widgetId===t));(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:i.id,layoutItemId:n}))},B=()=>document.body.getBoundingClientRect(),$=(t,o,a,i,n)=>{const[l,r]=e.React.useState((()=>B())),[s,c]=e.React.useState([a]),d=e.React.useRef(0);e.React.useEffect((()=>{const e=()=>{const e=B();r(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const u=(e,t)=>e.right>=t.right||e.left<=t.left,p=(e,t)=>e.bottom>=t.bottom||e.top<=t.top,g=e.hooks.useEventCallback((e=>{if(d.current++,d.current>7)return console.warn(`Number of cycles: ${d.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`),e;const o=((e,t)=>!(!e||!t)&&(u(e,t)||p(e,t)))(e,l);if(!o)return e;const{width:i,height:r}=e;let{left:s,top:c,right:M,bottom:v}=e;if(o){const e=u({left:s,top:c,right:M,bottom:v,width:i,height:r},l),o=p({left:s,top:c,right:M,bottom:v,width:i,height:r},l);e&&(s=t===k.SideBySide?a.x:l.right-i),o||t!==k.SideBySide||(c+=n),M=s+i,v=c+r}return g({left:s,top:c,right:M,bottom:v,width:i,height:r})}));return e.React.useEffect((()=>{const e=[];let l={width:0,height:0};Object.keys(o).forEach(((r,s)=>{const c=o[r],u=0!==s?e[s-1]:a;let{x:p,y:M}=u;if(t===k.SideBySide){const{width:e}=l;p+=i>0?e:-e,p+=0!==s?i:0}else t===k.Stack&&(p+=0!==s?i:0,M+=0!==s?n:0);const v={left:p,top:M,right:p+c.width,bottom:M+c.height,width:c.width,height:c.height},{left:j,top:y}=g(v);d.current>7?(p=u.x,M=u.y):(p=j,M=y),d.current=0,e.push({x:p,y:M}),l=c})),c(e)}),[t,a,i,n,l.width,l.height,g,o]),s},V=(0,e.Immutable)({}),F=a=>{const{mode:i,start:l,spaceX:r,spaceY:s,sizes:c,controllerId:d,widgets:u=V,onResizeStop:p,onClose:g}=a,M=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),[v,j]=e.React.useState(c),y=e.React.useMemo((()=>((t,o)=>{let a=(0,e.Immutable)({});return Object.keys(t).forEach((e=>{a=a.set(e,o[e]||n)})),a})(u,v)),[v,u]),I=z(d,o),h=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const i=null==I?void 0:I.id,n=O(I,o),l=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;l&&l.layoutId===i&&l.layoutItemId===n||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:i,layoutItemId:n}))}),[I]),N=e=>{const t=Q(e),o=null==t?void 0:t.querySelector("button");null==o||o.focus()},[m,x]=e.React.useState(!1),f=$(i,y,l,r,s),w=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Run)),b=w?U():Y();return(0,e.jsx)(e.React.Fragment,null,Object.entries(u).map((([o,a],i)=>{var n;if(!(void 0!==a.state))return null;const l=S(a),r=f[i];if(!r)return null;const s=y[o],c=null===(n=null==M?void 0:M[o])||void 0===n?void 0:n.label,d=null==I?void 0:I.id,u=O(I,o);return(0,e.jsx)(t.FloatingPanel,{key:o,css:b,style:{maxWidth:"100vw"},headerTitle:c,defaultPosition:r,defaultSize:s,className:(0,e.classNames)({"d-none":!l},"multiple-widget-launcher"),showHeaderClose:!0,showHeaderCollapse:!0,activateOnlyForHeader:!0,autoFocus:l,dragBounds:"body",onClick:e=>{h(e,o)},onResize:e=>{((e,t)=>{j(v.set(e,t)),x(!0)})(o,e)},onResizeStop:e=>{((e,t)=>{null==p||p(e,t),x(!1)})(o,e)},onLeave:()=>{N(o)},onHeaderClose:e=>{((e,t)=>{null==t||t.stopPropagation(),null==g||g(e),N(e)})(o,e)}},(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(L,{widgetId:o,layoutId:d,layoutItemId:u}),!m&&!w&&(0,e.jsx)(P,null)))})))},H=(0,e.Immutable)({}),G=a=>{const{controllerId:l,widgets:r=H,root:s,placement:c,sizes:d,onResizeStop:p,onClose:g}=a,M=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),v=z(l,o),j=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const i=null==v?void 0:v.id,n=O(v,o),l=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;l&&l.layoutId===i&&l.layoutItemId===n||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:i,layoutItemId:n}))}),[v]),[y,I]=e.React.useState(d),[h,N]=e.React.useState(!1),m=(e,t)=>{var o;t.stopPropagation(),null==g||g(e);const a=null===(o=Q(e))||void 0===o?void 0:o.querySelector("button");null==a||a.focus()},x=e.ReactRedux.useSelector((t=>t.appRuntimeInfo.appMode===e.AppMode.Run)),f=x?U():Y();return(0,e.jsx)(e.React.Fragment,null,Object.entries(r).map((([o,a])=>{var l,r;if(!(void 0!==a.state))return null;const d=a.state!==e.WidgetState.Closed,g=null!==(l=y[o])&&void 0!==l?l:n,w=null===(r=null==M?void 0:M[o])||void 0===r?void 0:r.label;let b=Q(o);b&&b.offsetParent||(b=null==s?void 0:s.querySelector(".avatar-card"));const D=null==v?void 0:v.id,z=O(v,o);return(0,e.jsx)(t.Popper,{key:o,css:f,style:{maxWidth:"100vw"},modifiers:u,className:(0,e.classNames)({"d-none":!d},"single-widget-launcher"),headerTitle:w,activateOnlyForHeader:!0,minSize:i,dragBounds:"body",defaultSize:g,onResize:e=>{var t,a;t=o,a=e,I((e=>e.set(t,a))),N(!0)},onResizeStop:e=>{var t,a;t=o,a=e,null==p||p(t,a),N(!1)},onHeaderClose:e=>{m(o,e)},showHeaderCollapse:!0,floating:!0,open:!0,autoFocus:d,reference:b,toggle:e=>{((e,t)=>{"Escape"===(null==t?void 0:t.key)&&m(e,t)})(o,e)},onClick:e=>{j(e,o)},placement:c},(0,e.jsx)(L,{widgetId:o,layoutId:D,layoutItemId:z}),!h&&!x&&(0,e.jsx)(P,null))})))},_=t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=Object.values(null!=o?o:{}).find((e=>{var o;return null===(o=e.views)||void 0===o?void 0:o.includes(t)}));return null==a?void 0:a.id},Z=(t,o)=>{const a=(t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=t?Object.values(t).map((e=>e.currentViewId)):[],i=a.map(_),n=Object.values(null!=o?o:{}).map((e=>{var t;if(!i.includes(e.id))return null===(t=e.views)||void 0===t?void 0:t[0]})).filter((e=>!!e)),l=a;return n.forEach((e=>{a.includes(e)||l.push(e)})),l})(t),i=(0,e.getAppStore)().getState().browserSizeMode,n=(0,e.getAppStore)().getState().appConfig,l=b.searchUtils.getContentContainerInfo(n,o,e.LayoutItemType.Widget,i);let r=!0;if(!l)return r;if(l.type===e.ContainerType.View)if(a.includes(l.id)){const t=l.id,o=_(t),s=b.searchUtils.getContentContainerInfo(n,o,e.LayoutItemType.Section,i);s&&s.type===e.ContainerType.View&&(a.includes(s.id)||(r=!1))}else r=!1;return r};function J(t){var a,i,l,r,d,u,p,g,M,v;const{id:j,config:y,version:I,rootRef:h,onResizeStop:N}=t,m=e.hooks.useCheckSmallBrowserSizeMode(),x=null===(a=y.behavior)||void 0===a?void 0:a.onlyOpenOne,f=null!==(l=null===(i=null==y?void 0:y.behavior)||void 0===i?void 0:i.arrangement)&&void 0!==l?l:"floating",w=x&&"floating"===f,z=!x&&"floating"===f,T=e.React.useCallback((t=>{if(!t)return;(0,e.getAppStore)().dispatch(e.appActions.closeWidget(t));const o=Q(t);null==o||o.focus(),(0,e.getAppStore)().dispatch(e.appActions.selectionChanged(null))}),[]),O=(t=>e.ReactRedux.useSelector((e=>{var o,a,i,n;const l=e.appConfig,r=e.browserSizeMode,s=l.widgets[t].parent;let c=null!==(o=s[r])&&void 0!==o?o:[];0===c.length&&(c=null!==(a=s[l.mainSizeMode])&&void 0!==a?a:[]);const d=null===(i=c[0])||void 0===i?void 0:i.layoutId,u=b.searchUtils.getWidgetIdThatUseTheLayoutId(l,d),p=l.widgets[u];return"arcgis-map"===(null===(n=null==p?void 0:p.manifest)||void 0===n?void 0:n.name)?p.id:""})))(j),A=(null===(r=y.behavior)||void 0===r?void 0:r.vertical)?"right-start":"bottom",L=null===(d=y.behavior)||void 0===d?void 0:d.displayType,E=null===(g=null===(p=null===(u=(0,e.getAppStore)())||void 0===u?void 0:u.getState())||void 0===p?void 0:p.appContext)||void 0===g?void 0:g.isRTL,k=e.React.useMemo((()=>E?Object.assign(Object.assign({},s),{x:document.body.clientWidth-n.width-s.x}):s),[E]),R=e.React.useMemo((()=>E?Object.assign(Object.assign({},c),{x:-c.x}):c),[E]),U=null===(M=y.behavior)||void 0===M?void 0:M.size,Y=D(j,o),P=Object.keys(Y),W=P.filter((e=>S(Y[e]))),B=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId));e.hooks.useUpdateEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.resetWidgetsState(P))}),[I,B]);const $=(t=>{const o=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos}));return Z(o,t)})(j),V=e.ReactRedux.useSelector((e=>e.appContext.isInBuilder)),H=null===(v=y.behavior)||void 0===v?void 0:v.openStarts;return e.hooks.useUpdateEffect((()=>{$?!V&&(null==H?void 0:H.length)>0&&setTimeout((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets(H,j))}),1e3):(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(W))}),[$]),e.React.useEffect((()=>{V&&(0,e.getAppStore)().dispatch(e.appActions.resetWidgetsState(P)),!V&&(null==H?void 0:H.length)&&$&&setTimeout((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets(H,j))}),1e3)}),[]),(0,e.jsx)(e.React.Fragment,null,m&&(0,e.jsx)(C,{containerMapId:O,controllerId:j,widgets:Y,onClose:T}),!m&&w&&(0,e.jsx)(G,{sizes:U,root:h.current,placement:A,controllerId:j,widgets:Y,onResizeStop:N,onClose:T}),!m&&z&&(0,e.jsx)(F,{sizes:U,mode:L,start:k,spaceX:R.x,spaceY:R.y,controllerId:j,widgets:Y,onResizeStop:N,onClose:T}))}var K=l(718),q=l.n(K);const X=t=>{var a,i,n,l,r,s;const{id:c,config:d,version:u,autoSize:p}=t,M=null===(a=d.behavior)||void 0===a?void 0:a.onlyOpenOne,v=null===(i=d.behavior)||void 0===i?void 0:i.vertical,j=null===(n=null==d?void 0:d.appearance)||void 0===n?void 0:n.card,y=((e,t)=>{const o=null==e?void 0:e.showLabel,a=null==e?void 0:e.labelGrowth,i=null==e?void 0:e.avatar.size,n=null==e?void 0:e.avatar.shape;return g(i,o,n)+t+a})(null===(l=null==d?void 0:d.appearance)||void 0===l?void 0:l.card,null===(r=null==d?void 0:d.appearance)||void 0===r?void 0:r.space),I=e.hooks.useCheckSmallBrowserSizeMode(),h=e.React.useRef(null),[N,x]=e.React.useState(!1),f=D(c,o),b=Object.keys(f),z=b.filter((e=>S(f[e]))),T=e.React.useCallback((t=>{var o;const a=null===(o=t.currentTarget.dataset)||void 0===o?void 0:o.widgetid;if(!a)return;const i=!!I||M;z.includes(a)||t.stopPropagation(),((t,o,a,i)=>{i?((0,e.getAppStore)().dispatch(e.appActions.closeWidgets(a)),a.includes(o)||((0,e.getAppStore)().dispatch(e.appActions.openWidget(o,t)),W(o,t))):a.includes(o)?(0,e.getAppStore)().dispatch(e.appActions.closeWidget(o)):((0,e.getAppStore)().dispatch(e.appActions.openWidget(o,t)),W(o,t))})(c,a,z,i)}),[I,M,z,c]),O=e.React.useCallback(((t,o)=>{const a=z.includes(t);return e.React.createElement(w,Object.assign({},j,{key:t,className:`${o} layout-item`,widgetid:t,markerEnabled:!1,active:a,onClick:T}))}),[j,T,z]);return e.React.createElement("div",{className:"controller-runtime w-100 h-100"},e.React.createElement("div",{className:"toggle-list-button",onMouseEnter:()=>{document.querySelector(".toggle-list-button").style.border="2px solid rgb(37, 143, 255)"},onMouseLeave:()=>{document.querySelector(".toggle-list-button").style.border="2px solid transparent"},onClick:()=>{x((e=>!e))},style:{display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid transparent",borderRadius:"6px",cursor:"pointer",width:"109px",height:"42px",background:`url(${q()})`}}),e.React.createElement(J,{id:c,config:d,version:u,rootRef:h}),N&&e.React.createElement(m,{ref:h,className:"runtime--scroll-list",vertical:v,itemLength:y,space:null===(s=d.appearance)||void 0===s?void 0:s.space,autoHideArrow:!0,autoSize:p,lists:b,createItem:O}))},ee={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,showTooltip:!0,showIndicator:!1,avatar:{type:"primary",size:"default",shape:"circle"}}}};class te extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{if(!e)return ee;if(e.behavior&&e.appearance)return e;{let o=e;return e.behavior||(o=o.setIn(["behavior","openStarts"],[]),o=o.setIn(["behavior","onlyOpenOne"],e.onlyOpenOne),o=o.setIn(["behavior","displayType"],e.displayType),o=o.setIn(["behavior","vertical"],e.vertical),o=o.setIn(["behavior","size"],e.size),o=o.without(["onlyOpenOne","displayType","size"])),e.appearance||(o=o.setIn(["appearance","advanced"],!1),e.vertical?o=o.setIn(["appearance","space"],e.space):(o=o.setIn(["appearance","space"],0),o=o.setIn(["appearance","card","labelGrowth"],e.space)),o=o.setIn(["appearance","card","showLabel"],e.showLabel),o=o.setIn(["appearance","card","avatar","size"],"SMALL"===(t=e.iconSize)?"sm":"MEDIUM"===t?"default":"LARGE"===t?"lg":t),o=o.setIn(["appearance","card","avatar","shape"],e.iconStyle),o=o.setIn(["appearance","card","avatar","type"],"primary"),o=o.without(["space","showLabel","iconSize","iconStyle","vertical"])),o}var t}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>{var t,o;if(!e)return ee;let a=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card;const i=null==a?void 0:a.variants,n=null===(o=null==a?void 0:a.avatar)||void 0===o?void 0:o.type;let l=e;if(i){const e=((e,t="primary")=>null==e?void 0:e[t])(i,n);a=null==a?void 0:a.set("variant",e).without("variants"),l=l.setIn(["appearance","card"],a)}return l}},{version:"1.6.0",description:"Version manager for release 1.6.0",upgrader:e=>{var t;if(!e)return ee;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,a=e;return o&&(o=o.set("showTooltip",!0),a=a.setIn(["appearance","card"],o)),a}},{version:"1.14.0",description:"Version manager for release 1.14.0",upgrader:e=>{var t;if(!e)return ee;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,a=e;return o&&(o=o.set("showIndicator",!1),a=a.setIn(["appearance","card"],o)),a}}]}}const oe=new te,ae=o=>{var i,n,l,r;const{builderSupportModules:s,id:c,config:d,onInitResizeHandler:u,autoWidth:p,autoHeight:g}=o,M=null===(i=d.behavior)||void 0===i?void 0:i.onlyOpenOne,v=null===(n=d.behavior)||void 0===n?void 0:n.displayType,j=null===(l=null==d?void 0:d.behavior)||void 0===l?void 0:l.vertical,y=null==d?void 0:d.appearance.advanced,I=null===(r=null==d?void 0:d.appearance)||void 0===r?void 0:r.card.variant,h=j?g:p,N=e.ReactRedux.useSelector((e=>e.appContext.isInBuilder)),m=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode));e.React.useEffect((()=>{null==u||u(null,null,(()=>{b((e=>e+1))}))}),[u]);const x=N&&m!==e.AppMode.Run,f=x&&s.widgetModules.Builder,[w,b]=e.React.useState(0);e.hooks.useUpdateEffect((()=>{b((e=>e+1))}),[M,v,m]);const D=((t,o,i)=>{const n=t?0:a.sm,l=t?0:a.sm,r=o?"0px":0,s=i?"0px":0;return e.React.useMemo((()=>e.css`
      overflow: visible;
      white-space: nowrap;
      .controller-container {
        border-radius: 5px;
        width: 100%;
        height: 100%;
        padding: ${r} ${s};
        min-width:  ${n}px;
        min-height: ${l}px;
      }
    `),[r,s,n,l])})(h,p,g),z=((o,a)=>{const i=null==o?void 0:o.default,n=null==o?void 0:o.active,l=null==o?void 0:o.hover;return e.React.useMemo((()=>a?e.css`
      .scroll-list {
        background : #FFF;
        border-radius : 5px; 
      }
      
      .toggle-list-button {
        width : 100%;
        height : 40px;
        font-weight: 700;
        font-size: 14px;
      }
      
      .avatar-card:not(.add-widget-btn) {
        background: #fff;
        padding : 2px;
        ${i&&e.css`
          > .avatar {
            > .avatar-button {
              background-color: ${i.bg};
              border-color: ${i.bg};
            }
          }
          > .avatar-label {
            color: ${i.color};
            font-size : 10px;
            font-style: ${(null==i?void 0:i.italic)?"italic":"normal"};
            font-weight: ${(null==i?void 0:i.bold)?"bold":"normal"};
            text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:i.underline,strike:i.strike})};
          }
        `}
        ${l&&e.css`
          &:hover {
            > .avatar {
              > .avatar-button {
                background-color: ${l.bg};
                border-color: ${l.bg};
              }
            }
            > .avatar-label {
              color: ${l.color};
              font-size : 10px;
              font-style: ${(null==l?void 0:l.italic)?"italic":"normal"};
              font-weight: ${(null==l?void 0:l.bold)?"bold":"normal"};
              text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:l.underline,strike:l.strike})};
            }
          }
        `}
        ${n&&e.css`
          > .avatar {
            > .avatar-button {
              &:not(:disabled):not(.disabled):active,
              &:not(:disabled):not(.disabled).active,
              &[aria-expanded='true'] {
                background-color: ${n.bg};
                border-color: ${n.bg};
              }
            }
            &::after {
              background-color: ${n.bg};
            }
          }
          > .avatar-label {
            &:not(:disabled):not(.disabled):active,
            &:not(:disabled):not(.disabled).active {
              font-size : 10px;
              color: ${n.color};
              font-style: ${(null==n?void 0:n.italic)?"italic":"normal"};
              font-weight: ${(null==n?void 0:n.bold)?"bold":"normal"};
              text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:n.underline,strike:n.strike})};
            }
          }
        `}
      }
    `:e.css``),[a,i,n,l])})(I,y);return(0,e.jsx)("div",{className:"widget-controller jimu-widget rw-controller",css:[D,z]},(0,e.jsx)("div",{className:"controller-container"},!x&&(0,e.jsx)(X,{id:c,version:w,config:d,autoSize:h}),x&&f&&(0,e.jsx)(f,{id:c,version:w,config:d,autoSize:h})))};ae.versionManager=oe;const ie=ae;function ne(e){l.p=e}})(),r})())}}}));