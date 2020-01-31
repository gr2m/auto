(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{75:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=n(r(3)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(0));n(r(2)),n(r(106));function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===n)t.children=a;else if(n>1){for(var l=new Array(n),d=0;d<n;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c=e=>{let{to:t}=e,r=u(e,["to"]);return t.includes("http")?i.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=a.default.join("/auto/","pages/extras/release.html")+t),i.default.createElement("a",d({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const o=new URL(a.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const i=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(i),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,r;return r=t=class extends i.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?i.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),r};h(()=>r.e(31).then(r.bind(null,107))),h(()=>r.e(31).then(r.bind(null,108)));var p=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",s("br",{}),"    ",s("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",s("span",{className:"hljs-string"},void 0,'"auto release"'),s("br",{}),"  }",s("br",{}),"}",s("br",{}))),f=s("p",{},void 0,"Make sure the branch/tag you're releasing is on github before running ",s("code",{},void 0,"auto release"),". You will need to push the tags to github first:"),v=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",s("br",{}),"    ",s("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",s("span",{className:"hljs-string"},void 0,'"git push --follow-tags --set-upstream origin $branch && auto release"'),s("br",{}),"  }",s("br",{}),"}",s("br",{}))),g=s("code",{},void 0,"auto changelog");var b=e=>s("div",{className:e.className},void 0,s("section",{},void 0,s("h2",{id:"usage"},void 0,"Usage ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#usage","aria-hidden":"true"})),p,f,v,s("h2",{id:"github-release-Details"},void 0,"Github Release Details ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#github-release-Details","aria-hidden":"true"})),s("p",{},void 0,"The Details / description published with the Github release will be identical to those generated by the ",g," command. See information regarding the release note format ",s(c,{currentPage:e.currentPage,to:"/auto/pages/extras/changelog.html#changelog-titles"},void 0,"here"),".")));t.default=b,e.exports=t.default},87:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=n(r(3)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(0));n(r(2)),n(r(106));function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===n)t.children=a;else if(n>1){for(var l=new Array(n),d=0;d<n;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c=e=>{let{to:t}=e,r=u(e,["to"]);return t.includes("http")?i.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=a.default.join("/auto/","pages/generated/release.html")+t),i.default.createElement("a",d({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const o=new URL(a.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const i=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(i),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,r;return r=t=class extends i.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?i.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),r};h(()=>r.e(31).then(r.bind(null,107))),h(()=>r.e(31).then(r.bind(null,108)));var p=s("h1",{},void 0,s("code",{},void 0,"release")),f=s("p",{},void 0,"Auto-generate a github release"),v=s("table",{},void 0,s("thead",{},void 0,s("tr",{},void 0,s("th",{},void 0,"Flag"),s("th",{},void 0,"Type"),s("th",{},void 0,"Description"))),s("tbody",{},void 0,s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--dry-run"),", ",s("code",{},void 0,"-d")),s("td",{},void 0,"Boolean"),s("td",{},void 0,"Report what command will do but do not actually do anything")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--no-version-prefix")),s("td",{},void 0,"Boolean"),s("td",{},void 0,"Use the version as the tag without the 'v' prefix")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--name")),s("td",{},void 0,"String"),s("td",{},void 0,"Git name to commit and release with. Defaults to package definition for the platform")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--email")),s("td",{},void 0,"String"),s("td",{},void 0,"Git email to commit with. Defaults to package definition for the platform")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--from")),s("td",{},void 0,"String"),s("td",{},void 0,"Git revision (tag, commit sha, ...) to start release notes from. Defaults to latest tag.")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--use-version")),s("td",{},void 0,"String"),s("td",{},void 0,"Version number to publish as. Defaults to reading from the package definition for the platform.")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--base-branch")),s("td",{},void 0,"String"),s("td",{},void 0,'Branch to treat as the "master" branch')),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--prerelease")),s("td",{},void 0,"Boolean"),s("td",{},void 0,"Publish a prerelease.")))),g=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"auto release",s("br",{}))),b=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"auto release --from v0.20.1 --use-version v0.21.0",s("br",{}))),m=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",s("br",{}),"    ",s("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",s("span",{className:"hljs-string"},void 0,'"auto release"'),s("br",{}),"  }",s("br",{}),"}",s("br",{}))),y=s("p",{},void 0,"Make sure the branch/tag you're releasing is on github before running ",s("code",{},void 0,"auto release"),". You will need to push the tags to github first:"),w=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",s("br",{}),"    ",s("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",s("span",{className:"hljs-string"},void 0,'"git push --follow-tags --set-upstream origin $branch && auto release"'),s("br",{}),"  }",s("br",{}),"}",s("br",{}))),j=s("code",{},void 0,"auto changelog");var O=e=>s("div",{className:e.className},void 0,s("section",{},void 0,p,f,s("h2",{id:"options"},void 0,"Options ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),v,s("h2",{id:"examples"},void 0,"Examples ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#examples","aria-hidden":"true"})),g,b,s("h2",{id:"usage"},void 0,"Usage ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#usage","aria-hidden":"true"})),m,y,w,s("h2",{id:"github-release-Details"},void 0,"Github Release Details ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#github-release-Details","aria-hidden":"true"})),s("p",{},void 0,"The Details / description published with the Github release will be identical to those generated by the ",j," command. See information regarding the release note format ",s(c,{currentPage:e.currentPage,to:"/auto/pages/generated/changelog.html#changelog-titles"},void 0,"here"),".")));t.default=O,e.exports=t.default}}]);
//# sourceMappingURL=release.js.map