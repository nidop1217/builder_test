System.register(["jimu-core"],(function(e,t){var r={};return{setters:[function(e){r.AbstractMessageAction=e.AbstractMessageAction,r.MessageType=e.MessageType,r.appActions=e.appActions,r.getAppStore=e.getAppStore}],execute:function(){e((()=>{"use strict";var e={9244:e=>{e.exports=r}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};s.r(o),s.d(o,{default:()=>n});var a=s(9244);class n extends a.AbstractMessageAction{filterMessageDescription(e){return e.messageType===a.MessageType.ButtonClick||e.messageType===a.MessageType.ViewChange||e.messageType===a.MessageType.DataRecordsSelectionChange}filterMessage(){return!0}onExecute(e){return e.type===a.MessageType.DataRecordsSelectionChange&&0===e.records.length||(0,a.getAppStore)().dispatch(a.appActions.widgetStatePropChange(this.widgetId,"collapse",!0)),!0}}return o})())}}}));