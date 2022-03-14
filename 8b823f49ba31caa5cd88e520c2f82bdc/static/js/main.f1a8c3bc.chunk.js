(this["webpackJsonpminting-dapp"]=this["webpackJsonpminting-dapp"]||[]).push([[0],{24:function(t){t.exports=JSON.parse('{"CONTRACT_ADDRESS":"0x974B7da7e620A8228FfEFe5b28bDB2A2cb887Ccf","NETWORK":{"NAME":"Polygon","SYMBOL":"MATIC","ID":80001},"NFT_NAME":"Meta Lion Kingdom","SYMBOL":"MLK","MAX_SUPPLY":6337,"PUBLIC_WEI_COST":170000000000000000,"PUBLIC_DISPLAY_COST":0.17,"WL_WEI_COST":150000000000000000,"WL_DISPLAY_COST":0.15,"MARKETPLACE":"Opensea","MARKETPLACE_LINK":"","API_URL":"https://mlk-api.herokuapp.com","PRIMARY_STATE":"RAFFLE"}')},289:function(t){t.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PER_WALLET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hiddenMetadataUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintEnded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintedSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hiddenMetadataUri","type":"string"}],"name":"setHiddenMetadataUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriSuffix","type":"string"}],"name":"setUriSuffix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},291:function(t){t.exports=JSON.parse('["0xF14DC73beda25c7e0bf547BC80870032b83C842A"]')},329:function(t,e){},332:function(t,e){},336:function(t,e){},362:function(t,e){},364:function(t,e){},373:function(t,e){},375:function(t,e){},385:function(t,e){},387:function(t,e){},506:function(t,e){},508:function(t,e){},515:function(t,e){},516:function(t,e){},541:function(t,e){},544:function(t,e){},551:function(t,e){},554:function(t,e){},607:function(t,e){},610:function(t,e){},636:function(t,e,n){},638:function(t,e,n){"use strict";n.r(e);var a,i=n(0),r=n.n(i),s=n(124),o=n.n(s),c=n(20),u=n(44),l=n(53),p=n(18),d=n.n(p),y=n(174),b=n.n(y),f=n(287),m=n.n(f),O=n(105),h=n(288),T=n(26),j={loading:!1,account:null,smartContract:null,web3:null,errorMsg:"",networkId:null,hasParticipatedInRaffle:null},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(T.a)(Object(T.a)({},j),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(T.a)(Object(T.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3,networkId:e.payload.networkId});case"CONNECTION_FAILED":return Object(T.a)(Object(T.a)({},j),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(T.a)(Object(T.a)({},t),{},{account:e.payload.account});case"RAFFLE_STATUS":return Object(T.a)(Object(T.a)({},t),{},{hasParticipatedInRaffle:e.payload.hasParticipatedInRaffle});default:return t}},g=n(24),E={loading:!1,totalSupply:"?",availableSupply:g.MAX_SUPPLY,price:g.PUBLIC_WEI_COST/1e18,maxPerTx:null,mintPaused:null,mintEnded:null,whitelistedOnly:null,error:!1,errorMsg:""},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(T.a)(Object(T.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(T.a)(Object(T.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,availableSupply:e.payload.availableSupply,price:e.payload.price,maxPerTx:e.payload.maxPerTx,mintPaused:e.payload.mintPaused,mintEnded:e.payload.mintEnded,whitelistedOnly:e.payload.whitelistedOnly,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(T.a)(Object(T.a)({},E),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},x={isLoading:!1},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;return e.type,t},I=Object(O.b)({blockchain:C,data:v,app:S}),A=[h.a],w=Object(O.c)(O.a.apply(void 0,A)),N=Object(O.d)(I,w),_=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},M=function(){return function(){var t=Object(l.a)(d.a.mark((function t(e){var n,a,i,r,s,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,N.getState().blockchain.smartContract.methods.totalSupply().call();case 4:return n=t.sent,t.next=7,N.getState().blockchain.smartContract.methods.availableSupply().call();case 7:return a=t.sent,t.next=10,N.getState().blockchain.smartContract.methods.PRICE().call();case 10:return i=t.sent,t.next=13,N.getState().blockchain.smartContract.methods.MAX_PER_TX().call();case 13:return r=t.sent,t.next=16,N.getState().blockchain.smartContract.methods.mintPaused().call();case 16:return s=t.sent,t.next=19,N.getState().blockchain.smartContract.methods.mintEnded().call();case 19:o=t.sent,!0,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:+n,availableSupply:+a,price:i,maxPerTx:+r,mintPaused:s,mintEnded:o,whitelistedOnly:!0}}),t.next=28;break;case 24:t.prev=24,t.t0=t.catch(1),console.log(t.t0),e(_("Could not load data from contract."));case 28:case"end":return t.stop()}}),t,null,[[1,24]])})));return function(e){return t.apply(this,arguments)}}()},R=n(289),L=function(t){return{type:"CONNECTION_SUCCESS",payload:t}},P=function(t){return{type:"RAFFLE_STATUS",payload:t}},D=new m.a({cacheProvider:!0,providerOptions:{}}),k=function(){return function(){var t=Object(l.a)(d.a.mark((function t(e){var n,a,i,r,s,o,c,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.clearCachedProvider();case 2:return console.log(D),t.next=5,D.connect();case 5:return n=t.sent,e({type:"CONNECTION_REQUEST"}),a=new b.a(n),t.prev=8,t.next=11,a.eth.getAccounts();case 11:return i=t.sent,t.next=14,a.eth.net.getId();case 14:return r=t.sent,s=new a.eth.Contract(R,g.CONTRACT_ADDRESS),e(L({account:i[0],smartContract:s,web3:a,networkId:r})),n.on("accountsChanged",(function(t){e(U(t[0]))})),n.on("chainChanged",Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.eth.net.getId();case 2:n=t.sent,e(L({account:i[0],smartContract:s,web3:a,networkId:n}));case 4:case"end":return t.stop()}}),t)})))),t.next=21,fetch("".concat(g.API_URL,"/raffle/").concat(i[0]),{headers:{Accept:"application/json","Content-Type":"application/json"}});case 21:return o=t.sent,t.next=24,o.json();case 24:c=t.sent,u=c.status,e(P({hasParticipatedInRaffle:"participated"===u})),t.next=33;break;case 30:t.prev=30,t.t0=t.catch(8),e({type:"CONNECTION_FAILED",payload:"Something went wrong."});case 33:case"end":return t.stop()}}),t,null,[[8,30]])})));return function(e){return t.apply(this,arguments)}}()},U=function(t){return function(){var e=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(M());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=n(676),F=n(660),B=n(674),Y=n(677),K=n(678),G=n(1);function H(){var t=Object(u.b)(),e=Object(i.useState)(a.OPEN),n=Object(c.a)(e,2),r=n[0],s=(n[1],Object(u.c)((function(t){return t.blockchain})));Object(i.useEffect)((function(){return o()}),[s.account]);var o=function(){""!==s.account&&null!==s.smartContract&&t(M())};return r===a.NOT_STARTED?Object(G.jsxs)(F.a,{spacing:2,flex:1,children:[Object(G.jsx)(W.a,{variant:"h2",children:"Raffle will soon start"}),Object(G.jsx)(W.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Come back later to participate in the raffle to get a chance to get whitelisted."})]}):s.account||r!==a.OPEN?r===a.OPEN&&!1===s.hasParticipatedInRaffle?Object(G.jsxs)(F.a,{spacing:2,flex:1,children:[Object(G.jsx)(W.a,{variant:"h2",children:"Take now part in raffle"}),Object(G.jsx)(W.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Simply click the button below to take part in the raffle without paying any gas."}),Object(G.jsx)(Y.a,{variant:"contained",onClick:function(e){t(function(){var t=Object(l.a)(d.a.mark((function t(e){var n,a,i,r,s,o,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.connect();case 2:return n=t.sent,a=new b.a(n),t.prev=4,t.next=7,a.eth.getAccounts();case 7:return i=t.sent,t.next=10,a.eth.personal.sign("Rawrr",i[0],null);case 10:return r=t.sent,t.next=13,fetch("".concat(g.API_URL,"/raffle"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({address:i[0],signature:r})});case 13:return t.next=15,fetch("".concat(g.API_URL,"/raffle/").concat(i[0]),{headers:{Accept:"application/json","Content-Type":"application/json"}});case 15:return s=t.sent,t.next=18,s.json();case 18:o=t.sent,c=o.status,e(P({hasParticipatedInRaffle:"participated"===c})),t.next=27;break;case 24:t.prev=24,t.t0=t.catch(4),console.error(t.t0);case 27:case"end":return t.stop()}}),t,null,[[4,24]])})));return function(e){return t.apply(this,arguments)}}())},fullWidth:!0,children:"Join Raffle"})]}):r!==a.OPEN&&r!==a.CLOSED||!0!==s.hasParticipatedInRaffle?r===a.CLOSED?Object(G.jsxs)(F.a,{spacing:2,flex:1,children:[Object(G.jsx)(W.a,{variant:"h2",children:"The raffle has been closed"}),Object(G.jsx)(W.a,{variant:"body1",gutterBottom:!0,align:"center"})]}):Object(G.jsx)(F.a,{spacing:2,justifyContent:"space-between",flex:1,children:Object(G.jsx)(F.a,{direction:"column",justifyContent:"center",alignItems:"center",children:Object(G.jsx)(K.a,{size:24})})}):Object(G.jsxs)(F.a,{spacing:2,flex:1,children:[Object(G.jsx)(W.a,{variant:"h2",children:"You claimed your spot in the raffle"}),Object(G.jsx)(W.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Make sure to follow us to get notified when the results are in and the mint starts."})]}):Object(G.jsxs)(F.a,{spacing:2,flex:1,children:[Object(G.jsx)(W.a,{variant:"h2",children:"Raffle is now open"}),Object(G.jsx)(W.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Connect with your wallet to join the raffle, and get a chance to get whitelisted."}),Object(G.jsx)(B.a,{onClick:function(e){e.preventDefault(),t(k()),o()},variant:"contained",fullWidth:!0,children:"Connect Your Wallet"})]})}!function(t){t[t.NOT_CONNECTED=0]="NOT_CONNECTED",t[t.NOT_STARTED=1]="NOT_STARTED",t[t.OPEN=2]="OPEN",t[t.ALREADY_PARTICIPATED=3]="ALREADY_PARTICIPATED",t[t.CLOSED=4]="CLOSED"}(a||(a={}));var z,J=n(681),X=n(671),Q=n(672),V=n(680),q=n(679),Z=n(293),$=n.n(Z),tt=n(294),et=n.n(tt),nt=n(291);function at(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.data})),n=Object(u.c)((function(t){return t.blockchain})),a=Object(i.useState)(!1),r=Object(c.a)(a,2),s=r[0],o=r[1],p=Object(i.useState)(1),y=Object(c.a)(p,2),b=y[0],f=y[1],m=Object(i.useState)(""),O=Object(c.a)(m,2),h=O[0],T=O[1],j=Object(i.useState)(null),C=Object(c.a)(j,2),E=C[0],v=C[1],x=function(){""!==n.account&&null!==n.smartContract&&t(M())};Object(i.useEffect)((function(){return x()}),[n.account]);var S=function(){var a=Object(l.a)(d.a.mark((function a(){var i,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(!0),a.prev=1,i=e.whitelistedOnly?g.WL_WEI_COST:g.PUBLIC_WEI_COST,a.next=5,n.smartContract.methods.mint(b).send({to:g.CONTRACT_ADDRESS,from:n.account,value:i*b});case 5:r=a.sent,console.log(r),o(!1),v(r),t(M()),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(1),s=a.t0,console.error(s),s.message?T(s.message):T("Something went wrong while trying to mint the NFT"),o(!1);case 16:case"end":return a.stop()}var s}),a,null,[[1,12]])})));return function(){return a.apply(this,arguments)}}();function I(){return n.account&&null!==n.smartContract?n.networkId!=g.NETWORK.ID?z.WRONG_NETWORK:e.mintPaused?z.NOT_STARTED:s?z.CLAIMING:E?z.MINTED:e.totalSupply>=e.availableSupply||e.mintEnded?z.CLOSED:e.whitelistedOnly?nt.includes(n.account)?z.PUBLIC_SALE:z.WHITELISTED_ONLY:!1===e.mintPaused?z.PUBLIC_SALE:z.LOADING:z.NOT_CONNECTED}return I()===z.NOT_CONNECTED?Object(G.jsx)("div",{children:Object(G.jsx)(B.a,{onClick:function(e){e.preventDefault(),t(k()),x()},variant:"contained",fullWidth:!0,children:"Connect Your Wallet"})}):I()===z.WRONG_NETWORK?Object(G.jsx)(X.a,{variant:"outlined",severity:"error",children:"You are not connected to the Ethereum network, please open Metamask and make sure you are connected with the right account to the Ethereum network."}):I()===z.NOT_STARTED?Object(G.jsxs)(F.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1.25,children:[Object(G.jsx)(W.a,{variant:"h2",children:"Minting is yet to start."}),Object(G.jsx)(W.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Once minting starts, you will be able to mint NFTs here."})]}):I()===z.PUBLIC_SALE||I()===z.CLAIMING?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(F.a,{direction:"row",spacing:4,children:[Object(G.jsx)(Q.a,{value:b,disableUnderline:!0,startAdornment:Object(G.jsx)(V.a,{position:"start",children:Object(G.jsx)(q.a,{"aria-label":"decrement",size:"small",onClick:function(t){t.preventDefault(),function(){var t=b-1;t<1&&(t=1),f(t)}()},disabled:I()===z.CLAIMING,children:Object(G.jsx)($.a,{})})}),endAdornment:Object(G.jsx)(V.a,{position:"start",children:Object(G.jsx)(q.a,{"aria-label":"decrement",size:"small",onClick:function(t){t.preventDefault(),function(){var t=b+1;t<=Math.min(e.maxPerTx,e.availableSupply-e.totalSupply)&&f(t)}()},disabled:I()===z.CLAIMING,children:Object(G.jsx)(et.a,{})})}),inputProps:{style:{textAlign:"center"}},fullWidth:!0}),Object(G.jsx)(Y.a,{disabled:I()===z.CLAIMING,loading:I()===z.CLAIMING,variant:"contained",onClick:function(t){t.preventDefault(),S(),x()},fullWidth:!0,children:"Mint NFT"})]}),h&&Object(G.jsx)(X.a,{variant:"outlined",severity:"error",children:h})]}):I()===z.CLOSED?Object(G.jsxs)(F.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1.25,children:[Object(G.jsx)(W.a,{variant:"h2",children:"Minting period has ended"}),Object(G.jsx)(W.a,{variant:"body1",gutterBottom:!0,align:"center",children:"The whole collection be will revealed soon, go to OpenSea to check it out!"}),Object(G.jsx)(B.a,{variant:"contained",href:g.MARKETPLACE_LINK,children:"See collection"})]}):I()===z.MINTED?Object(G.jsxs)(F.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1.25,children:[Object(G.jsx)(W.a,{variant:"body1",gutterBottom:!0,align:"center",children:"NFT has been minted! It should soon be visible in your OpenSea account, you can check the transaction below to follow it's progress."}),Object(G.jsx)(B.a,{variant:"contained",href:"https://etherscan.io/tx/".concat(E.transactionHash),children:"View Transaction"})]}):I()===z.WHITELISTED_ONLY?Object(G.jsxs)(F.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1.25,children:[Object(G.jsx)(W.a,{variant:"h2",children:"You are not whitelisted"}),Object(G.jsx)(W.a,{variant:"body1",gutterBottom:!0,align:"center"})]}):Object(G.jsx)(F.a,{direction:"column",justifyContent:"center",alignItems:"center",children:Object(G.jsx)(K.a,{size:24})})}function it(){var t=Object(u.c)((function(t){return t.data})),e=t.whitelistedOnly?g.WL_WEI_COST:g.PUBLIC_WEI_COST;return Object(G.jsxs)(F.a,{spacing:2,justifyContent:"space-between",flex:1,children:[Object(G.jsxs)(F.a,{direction:"row",justifyContent:"space-between",children:[Object(G.jsxs)(J.a,{children:[Object(G.jsx)(W.a,{variant:"subtitle2",align:"left",gutterBottom:!0,children:"Price"}),Object(G.jsxs)(W.a,{variant:"subtitle1",align:"left",children:[e/1e18," ",g.NETWORK.SYMBOL]})]}),Object(G.jsxs)(J.a,{children:[Object(G.jsx)(W.a,{variant:"subtitle2",align:"right",gutterBottom:!0,children:"Total Minted"}),Object(G.jsxs)(W.a,{variant:"subtitle1",align:"right",children:[t.totalSupply,"/",t.availableSupply]})]})]}),Object(G.jsx)(at,{})]})}!function(t){t[t.NOT_CONNECTED=0]="NOT_CONNECTED",t[t.WRONG_NETWORK=1]="WRONG_NETWORK",t[t.CONNECTED=2]="CONNECTED",t[t.NOT_STARTED=3]="NOT_STARTED",t[t.WHITELISTED_ONLY=4]="WHITELISTED_ONLY",t[t.PUBLIC_SALE=5]="PUBLIC_SALE",t[t.PRE_SALE=6]="PRE_SALE",t[t.CLAIMING=7]="CLAIMING",t[t.MINTED=8]="MINTED",t[t.ERROR=9]="ERROR",t[t.CLOSED=10]="CLOSED",t[t.LOADING=11]="LOADING"}(z||(z={}));var rt=function(){return"RAFFLE"===g.PRIMARY_STATE?Object(G.jsx)(H,{}):"MINT"===g.PRIMARY_STATE?Object(G.jsx)(it,{}):void 0},st=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,682)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),r(t),s(t)}))},ot=n(675),ct=n(295),ut=Object(ct.a)({palette:{mode:"dark",primary:{main:"#b79861"},background:{default:"#1d1c2e"}},typography:{fontSize:16,fontFamily:"inherit",button:{textTransform:"none",fontSize:"1rem",fontWeight:600},h2:{fontSize:"1.6rem",fontWeight:500,letterSpacing:"1.3px"},body1:{fontSize:"1rem",fontWeight:400,lineHeight:"1.5rem"},subtitle1:{fontSize:"1.25rem",fontWeight:500},subtitle2:{fontSize:"0.875rem",textTransform:"uppercase",fontWeight:400,letterSpacing:"0.125rem"}},shape:{borderRadius:0},components:{MuiButtonBase:{defaultProps:{disableRipple:!0,disableTouchRipple:!0}},MuiButton:{defaultProps:{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,disableElevation:!0},styleOverrides:{root:{height:"44px"}}},MuiFilledInput:{styleOverrides:{input:{padding:"8px 0"}}}}});n(636);o.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(u.a,{store:N,children:Object(G.jsx)(ot.a,{theme:ut,children:Object(G.jsx)(rt,{})})})}),document.getElementById("root")),st()}},[[638,1,2]]]);
//# sourceMappingURL=main.f1a8c3bc.chunk.js.map