(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(t,e,i){"use strict";i.r(e);var M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"hHh Lpr fFf"}},[i("q-header",{staticStyle:{"background-color":"#00a1ed"},attrs:{reveal:"",elevated:"","height-hint":"98"}},[i("q-toolbar",{staticStyle:{"justify-content":"space-between"}},[i("q-btn",{staticClass:"burger-menu",style:"visibility: "+(t.isAuthenticated?"visible":"hidden"),on:{click:function(e){t.drawer=!t.drawer}}},[i("div"),i("div",{staticStyle:{"margin-left":"-10px"}}),i("div")]),i("div",{staticStyle:{display:"flex","align-items":"center","margin-top":"-3px"}},[i("span",{staticClass:"q-mr-sm"},[t._v("v"+t._s(t.appVersion))]),t.isAuthenticated?i("q-btn",{staticStyle:{"margin-right":"-6px","margin-left":"-6px"},attrs:{"no-caps":""},on:{click:function(e){return t.accountURL()}}},[t._v(t._s(t.accountName))]):t._e(),i("span",{staticStyle:{height:"10px","border-right":"1px solid #eee"}}),t.isAuthenticated?i("q-btn",{staticStyle:{"margin-right":"-6px","margin-left":"-6px"},attrs:{"no-caps":""},on:{click:function(e){return t.logoutSubmit()}}},[t._v("Logout")]):t._e()],1)],1)],1),i("q-drawer",{attrs:{persistent:t.isPersist,width:220,"show-if-above":"",bordered:"",overlay:"","content-class":"bg-grey-0"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("q-scroll-area",{staticClass:"fit",staticStyle:{"box-shadow":"5px 5px #000"}},[i("div",{staticClass:"flex justify-end q-pr-md q-pt-sm q-pb-sm"},[i("q-icon",{staticClass:"cursor-pointer",staticStyle:{"font-size":"2rem"},attrs:{name:"close"},on:{click:function(e){t.drawer=!t.drawer}}})],1),i("q-list",[i("q-separator"),t._l(t.menuList,(function(e,M){return[t.handleFunctionCall(e.displayCondition)?i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:M,attrs:{clickable:"",active:t.selectedItemLabel===e.label,"active-class":"bg-grey-4"},on:{click:function(i){return t.onSelectMenu(e)}}},[i("q-item-section",{staticStyle:{"align-items":"center"},attrs:{avatar:""}},[i("img",{staticClass:"menu-icon",attrs:{src:e.icon,alt:"menu-icon"}})]),i("q-item-section",{staticClass:"text-subtitle1"},[i("strong",[t._v(t._s(e.label))])])],1):t._e(),e.separator?i("q-separator",{key:"sep"+M}):t._e()]}))],2)],1)],1),i("q-page-container",{staticClass:"page-container page-container-main"},[i("div",{staticClass:"flex justify-center text-center",staticStyle:{width:"80px",height:"80px",margin:"20px auto 0px auto"}},[i("svg",{staticClass:"freeos-logo-icon inline-block fill-current text-primary header-logoicon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 84 84"}},[i("path",{attrs:{fill:"#00a1ed",d:"M41.7 0C18.7 0 0 18.7 0 41.7c0 23 18.7 41.7 41.7 41.7 23 0 41.7-18.7 41.7-41.7C83.4 18.7 64.8 0 41.7 0zM26.9 68.6c-2.7 0-5.3-1-7.3-2.8-13.3-12.2-14.2-32.9-2-46.3C23.8 12.8 32.6 9 41.7 9c1.7 0 3.4.1 5.1.4h.2c-5.6 2.3-9.7 7.5-10.6 13.5-.1.6-.2 1.3-.2 1.9V26c-.1 4.1.1 8.2.6 12.3l-10.6 3.9c-.7.3-1.1 1.1-.8 1.8l.5 1.2c1.4 4 5.8 6 9.8 4.6.4-.2.9-.4 1.3-.6l1-.6.3-.2v.4c.2 3 .1 6-.2 9H38c0 .3 0 .6-.1 1-.1.6-.2 1.2-.4 1.8-1.4 4.8-5.7 8-10.6 8zm14.8 5.9c-1.8 0-3.7-.2-5.5-.5 6-2.5 10.1-8 10.8-14.5.7-5.4.7-10.9-.1-16.3l10.8-6.4c1.2-.7 1.7-2.2 1.2-3.5l-.1-.3c-.5-1.4-2-2.1-3.4-1.6L45.9 35l-.2.1V35c-.4-2.8-.5-5.7-.4-8.5.4-8.3 5.3-11.7 11.3-11.6 2.5.1 4.8.9 6.8 2.4.5.4.9.8 1.4 1.3 12.8 12.6 12.9 33.3.2 46.2-6.2 6.2-14.5 9.7-23.3 9.7z"}})])]),i("router-view")],1)],1)},s=[],a=i("ded3"),L=i.n(a),w=(i("ee95"),i("2f62"));const u=[{icon:i("c48b"),label:"Claim",separator:!0,route:"/claim"},{icon:i("124e"),label:"Transfer",separator:!0,route:"/transfer"},{icon:i("a8e5"),label:"Mint",separator:!0,route:"/mint"},{icon:i("4f79"),label:"Stake",separator:!0,displayCondition:"showStake",route:"/stake"},{icon:i("c367"),label:"Vote",separator:!0,route:"/vote",displayCondition:"showUserHasStakedORHasAirkey"},{icon:i("933b"),label:"Re-register",separator:!0,route:"/re-register"},{icon:i("a39d"),label:"Alcor",separator:!0,route:"https://proton.alcor.exchange/"},{icon:i("b63b"),label:"Auctions",separator:!0,route:"https://auction.freeos.io"},{icon:i("07e6"),label:"Info",separator:!0,route:"/info"}];var c={data(){return{isShowDrawerButton:!1,drawer:!1,selectedItemLabel:null,isPersist:!(this.$q.screen.width<1023),menuList:u}},computed:L()(L()({},Object(w["c"])("freeos",["user","isAuthenticated","accountName","stakeRequirement","isFreeosEnabled","userHasStaked","userStake","airkeyBalance"])),{},{appVersion:function(){return"0.5.12a-qa5"}}),components:{},methods:L()(L()(L()({},Object(w["b"])("freeos",["monitorBlockChain"])),{},{async logoutSubmit(){await this.logout()},handleFunctionCall(t){return!t||this[t]()},showStake:function(){return!this.userHasStaked&&!this.airkeyBalance||this.userStake>0},showUserHasStakedORHasAirkey:function(){return this.userHasStaked||this.airkeyBalance},accountURL(){window.open("https://proton-test.bloks.io/account/"+this.accountName,"_blank")},onSigninFinish(t){t.isFinished&&(this.isShowDrawerButton=!0,this.drawer=!0,this.onSelectMenu(u[0]))},onSelectMenu(t){t.route.startsWith("http")?window.open(t.route,"_blank"):this.$route.path!==t.route&&this.$router.push(t.route)}},Object(w["b"])("account",["checkIfLoggedIn","connectWallet","logout","getAccountInfo","getClaimDetailInfo"])),Object(w["b"])("calendar",["getClaimCalendar"])),created(){this.monitorBlockChain()},watch:{isFreeosEnabled:{immediate:!0,handler:function(t,e){!1===t&&this.$router.push({path:"/"})}},isAuthenticated:{handler:function(t,e){!1===t&&this.$router.push({path:"/"})}},$route(t,e){let i=u.filter((e=>e.route==t.path));i.length&&(this.selectedItemLabel=i[0].label)}}},n=c,o=(i("89d3"),i("2877")),l=i("4d5a"),r=i("e359"),j=i("65c6"),C=i("9c40"),I=i("9404"),b=i("4983"),y=i("0016"),g=i("1c1c"),d=i("eb85"),A=i("66e5"),N=i("4074"),D=i("09e3"),S=i("7ff0"),x=i("6ac5"),p=i("cb32"),T=i("b498"),m=i("714f"),z=i("eebe"),h=i.n(z),E=Object(o["a"])(n,M,s,!1,null,null,null);e["default"]=E.exports;h()(E,"components",{QLayout:l["a"],QHeader:r["a"],QToolbar:j["a"],QBtn:C["a"],QDrawer:I["a"],QScrollArea:b["a"],QIcon:y["a"],QList:g["a"],QSeparator:d["a"],QItem:A["a"],QItemSection:N["a"],QPageContainer:D["a"],QFooter:S["a"],QToolbarTitle:x["a"],QAvatar:p["a"],QColor:T["a"]}),h()(E,"directives",{Ripple:m["a"]})},"89d3":function(t,e,i){"use strict";i("e87e")},a8e5:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgICA8cGF0aCBkPSJNMTQsMTIuNkgxLjVjLTAuNCwwLTAuNy0wLjMtMC43LTAuN2MwLTAuNCwwLjMtMC43LDAuNy0wLjdIMTRjMC40LDAsMC43LDAuMywwLjcsMC43QzE0LjcsMTIuMywxNC40LDEyLjYsMTQsMTIuNnoiIC8+CiAgICA8cGF0aCBkPSJNMTAuNiwxNmMtMC4yLDAtMC4zLTAuMS0wLjUtMC4yYy0wLjMtMC4zLTAuMy0wLjcsMC0wLjlsMy0zbC0zLTNjLTAuMy0wLjMtMC4zLTAuNywwLTAuOWMwLjMtMC4zLDAuNy0wLjMsMC45LDBsMy41LDMuNQoJYzAuMywwLjMsMC4zLDAuNywwLDAuOUwxMSwxNS45QzEwLjksMTYsMTAuNywxNiwxMC42LDE2eiIgLz4KICAgIDxwYXRoIGQ9Ik0xMy4yLDIxLjVjLTQsMC03LjQtMi40LTguOS02LjFjLTAuMS0wLjMsMC0wLjcsMC40LTAuOGMwLjMtMC4xLDAuNywwLDAuOCwwLjRjMS4zLDMuMiw0LjMsNS4yLDcuNyw1LjIKCWM0LjUsMCw4LjMtMy43LDguMy04LjNzLTMuNy04LjMtOC4zLTguM2MtMy40LDAtNi40LDIuMS03LjcsNS4yQzUuNCw5LjIsNSw5LjQsNC43LDkuM0M0LjMsOS4xLDQuMiw4LjgsNC4zLDguNAoJYzEuNC0zLjcsNC45LTYuMSw4LjktNi4xYzUuMywwLDkuNiw0LjMsOS42LDkuNlMxOC41LDIxLjUsMTMuMiwyMS41eiIgLz4KPC9zdmc+Cg=="},b63b:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNC42IDM0LjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0LjYgMzQuNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjQiIGN5PSIxNy40IiByPSIxNi4yIi8+CjxnPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE4LjEsMTkuNkwxNywyMC43Yy0wLjEsMC4xLTAuNCwwLjEtMC41LDBsLTQuMS00LjFjLTAuMS0wLjEtMC4xLTAuNCwwLTAuNWwxLjEtMS4xYzAuMS0wLjEsMC40LTAuMSwwLjUsMAoJCWw0LjEsNC4xQzE4LjMsMTkuMiwxOC4zLDE5LjUsMTguMSwxOS42eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI3LjcsMTBsLTEsMWMtMC4yLDAuMi0wLjQsMC4yLTAuNiwwbC00LTRjLTAuMi0wLjItMC4yLTAuNCwwLTAuNmwxLTFjMC4yLTAuMiwwLjQtMC4yLDAuNiwwbDQsNAoJCUMyNy45LDkuNiwyNy45LDkuOCwyNy43LDEweiIvPgoJCgkJPHJlY3QgeD0iMTQuNCIgeT0iMTAuOCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAtMy4zNDE5IDE4LjAwMTcpIiBjbGFzcz0ic3QxIiB3aWR0aD0iMTEuMyIgaGVpZ2h0PSI0LjQiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjAuNiwxNS42IDIyLjcsMTMuNiAzMi43LDIzLjYgMzEuMiwyNi4zIAkiLz4KPC9nPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjEsMjkuNEgxMC4xYy0wLjUsMC0wLjktMC40LTAuOS0wLjlWMjdjMC0wLjUsMC40LTAuOSwwLjktMC45SDIxYzAuNSwwLDAuOSwwLjQsMC45LDAuOXYxLjYKCUMyMS45LDI5LjEsMjEuNSwyOS40LDIxLDI5LjR6Ii8+Cjwvc3ZnPgo="},c367:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNC42IDM0LjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0LjYgMzQuNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTciIGN5PSIxNyIgcj0iMTUuOSIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjMuNiwxMy44SDkuOGMtMC44LDAtMS40LTAuNi0xLjQtMS40VjcuM2MwLTAuOCwwLjYtMS40LDEuNC0xLjRoMTMuOGMwLjgsMCwxLjQsMC42LDEuNCwxLjR2NS4xCglDMjUsMTMuMiwyNC40LDEzLjgsMjMuNiwxMy44eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTEuNywyNi43YzAuNywxLjQsMi4zLDMuMywzLjksMy4zaDQuN2MwLjMsMCwwLjUsMCwwLjgtMC4yYzAuNi0wLjMsMS44LTEsMi4xLTIuNGMwLjQtMiwwLjktNC41LDAuOS05LjUKCWMwLTAuNi0wLjUtMS4xLTEuMS0xLjFjLTAuNiwwLTEuMSwwLjUtMS4xLDEuMWwwLDAuMWwwLDBjMCwwLjEtMC4xLDAuMy0wLjIsMC4zYy0wLjIsMC4xLTAuNS0wLjEtMC41LTAuM2MwLDAsMCwwLDAsMGwwLTAuOAoJYzAtMC42LTAuNS0xLjEtMS4yLTEuMWMtMC42LDAtMS4xLDAuNS0xLjIsMS4xbDAsMC44bDAsMGMwLDAuMS0wLjEsMC4zLTAuMiwwLjNjLTAuMiwwLjEtMC41LTAuMS0wLjUtMC4zYzAsMCwwLDAsMCwwbDAtMS41CgljMC0wLjYtMC41LTEuMS0xLjItMS4xYy0wLjYsMC0xLjEsMC41LTEuMiwxLjFsMCwxLjNsMCwwYzAsMC4xLTAuMSwwLjMtMC4yLDAuM2MtMC4yLDAuMS0wLjUtMC4xLTAuNS0wLjNjMCwwLDAsMCwwLDBsMC0wLjQKCWMwLTAuMiwwLTAuNCwwLTAuNGwwLTcuMmMwLTAuNi0wLjUtMS4yLTEuMS0xLjNjLTAuNywwLTEuMywwLjUtMS4zLDEuMmMwLDAsMCw3LjgsMCw5LjhsMCwyLjFjMCwwLDAsMCwwLDBjMCwwLTAuNywwLjMtMS4xLTAuMgoJYy0wLjUtMC42LTEtMi4xLTMuMS0yLjJjLTAuMiwwLTAuNSwwLTAuOCwwLjRjLTAuMSwwLjEtMC4xLDAuMy0wLjEsMC40YzAsMC4zLDAuMiwwLjYsMC41LDAuN2MwLDAsMCwwLDAsMGMwLjUsMC4zLDEuNywxLjksMi4zLDMuMQoJQzEwLjUsMjQuMSwxMS4yLDI1LjgsMTEuNywyNi43eiIvPgo8L3N2Zz4K"},e87e:function(t,e,i){}}]);