(this["webpackJsonpminting-dapp"]=this["webpackJsonpminting-dapp"]||[]).push([[0],{37:function(e){e.exports=JSON.parse('{"MINTER_ADDRESS":"0xD608c5A83F8B4727E7587AdCB0D6370B5ea45045","ERC721_ADDRESS":"0x56F318aB1C4D4319b60e1B3Bf2a449D763DE8e26","MINTPASS_ADDRESS":"","NETWORK":{"NAME":"Ethereum","SYMBOL":"ETH","ID":1},"NFT_NAME":"Meta Lion Kingdom","SYMBOL":"MLK","MAX_SUPPLY":6337,"PUBLIC_WEI_COST":170000000000000000,"PUBLIC_DISPLAY_COST":0.17,"WL_WEI_COST":150000000000000000,"WL_DISPLAY_COST":0.15,"MARKETPLACE":"Opensea","MARKETPLACE_LINK":"https://opensea.io/collection/metalionkingdom","API_URL":"https://mlk-api.herokuapp.com","PRIMARY_STATE":"MINT"}')},404:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_erc721","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"MAX_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PER_WALLET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PUBLIC_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"availableSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"erc721","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintEnded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintedSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recoverERC721Ownership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerWallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"},{"internalType":"bool","name":"_state","type":"bool"}],"name":"setWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setWhitelistedOnly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistedOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},405:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"},{"internalType":"bool","name":"_state","type":"bool"}],"name":"setWhitelisted","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')},406:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_proxyRegistryAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"mintTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_hiddenMetadataUri","type":"string"}],"name":"setHiddenMetadataUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setRevealed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')},445:function(e,t){},448:function(e,t){},452:function(e,t){},476:function(e,t){},478:function(e,t){},487:function(e,t){},489:function(e,t){},499:function(e,t){},501:function(e,t){},617:function(e,t){},619:function(e,t){},626:function(e,t){},627:function(e,t){},652:function(e,t){},655:function(e,t){},662:function(e,t){},665:function(e,t){},718:function(e,t){},721:function(e,t){},746:function(e,t){},810:function(e,t,n){},812:function(e,t,n){"use strict";n.r(t);var a,i=n(0),r=n.n(i),s=n(191),o=n.n(s),l=n(33),u=n(74),c=n(94),p=n(18),d=n.n(p),y=n(274),b=n.n(y),m=n(401),f=n.n(m),h=n(402),O=n.n(h),T=n(168),j=n(403),g=n(42),x={loading:!1,account:null,minter:null,mintPass:null,erc721:null,web3:null,errorMsg:"",networkId:null,hasParticipatedInRaffle:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(g.a)(Object(g.a)({},x),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{loading:!1,account:t.payload.account,minter:t.payload.minter,mintPass:t.payload.mintPass,erc721:t.payload.erc721,web3:t.payload.web3,networkId:t.payload.networkId});case"CONNECTION_FAILED":return Object(g.a)(Object(g.a)({},x),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(g.a)(Object(g.a)({},e),{},{account:t.payload.account});case"RAFFLE_STATUS":return Object(g.a)(Object(g.a)({},e),{},{hasParticipatedInRaffle:t.payload.hasParticipatedInRaffle});default:return e}},E=n(37),w={loading:!1,totalSupply:"?",availableSupply:E.MAX_SUPPLY,price:E.PUBLIC_WEI_COST/1e18,maxPerWallet:null,mintPaused:null,mintEnded:null,whitelistedOnly:null,isWhitelisted:null,amountMinted:null,error:!1,errorMsg:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(g.a)(Object(g.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,availableSupply:t.payload.availableSupply,price:t.payload.price,maxPerWallet:t.payload.maxPerWallet,mintPaused:t.payload.mintPaused,mintEnded:t.payload.mintEnded,whitelistedOnly:t.payload.whitelistedOnly,isWhitelisted:t.payload.isWhitelisted,amountMinted:t.payload.amountMinted,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(g.a)(Object(g.a)({},w),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},C={isLoading:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I=Object(T.b)({blockchain:v,data:S,app:M}),N=[j.a],A=Object(T.c)(T.a.apply(void 0,N)),_=Object(T.d)(I,A),P=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},R=function(){return function(){var e=Object(c.a)(d.a.mark((function e(t){var n,a,i,r,s,o,l,u,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,_.getState().blockchain.erc721.methods.totalSupply().call();case 4:return n=e.sent,e.next=7,_.getState().blockchain.minter.methods.availableSupply().call();case 7:return a=e.sent,e.next=10,_.getState().blockchain.minter.methods.MAX_PER_WALLET().call();case 10:return i=e.sent,e.next=13,_.getState().blockchain.minter.methods.mintPaused().call();case 13:return r=e.sent,e.next=16,_.getState().blockchain.minter.methods.mintEnded().call();case 16:return s=e.sent,e.next=19,_.getState().blockchain.minter.methods.whitelistedOnly().call();case 19:return o=e.sent,e.next=22,_.getState().blockchain.account;case 22:return l=e.sent,e.next=25,_.getState().blockchain.minter.methods.whitelisted(l).call();case 25:return u=e.sent,e.next=28,_.getState().blockchain.minter.methods.mintedSale(l).call();case 28:c=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:+n,availableSupply:+a,maxPerWallet:+i,mintPaused:r,mintEnded:s,whitelistedOnly:o,isWhitelisted:u,amountMinted:+c}}),e.next=36;break;case 32:e.prev=32,e.t0=e.catch(1),console.log(e.t0),t(P("Could not load data from contract."));case 36:case"end":return e.stop()}}),e,null,[[1,32]])})));return function(t){return e.apply(this,arguments)}}()},L=n(404),D=n(405),k=n(406),W=function(e){return{type:"CONNECTION_SUCCESS",payload:e}},B={walletlink:{package:O.a,options:{appName:"MLK Mint",infuraId:"1cdd280a1c68480f908bf48406db4ca5"}}},U=new f.a({cacheProvider:!1,providerOptions:B}),F=function(){return function(){var e=Object(c.a)(d.a.mark((function e(t){var n,a,i,r,s,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.clearCachedProvider();case 2:return e.next=4,U.connect();case 4:return n=e.sent,t({type:"CONNECTION_REQUEST"}),a=new b.a(n),e.prev=7,e.next=10,a.eth.getAccounts();case 10:return i=e.sent,e.next=13,a.eth.net.getId();case 13:r=e.sent,s=new a.eth.Contract(L,E.MINTER_ADDRESS),o=new a.eth.Contract(D,E.MINTPASS_ADDRESS),l=new a.eth.Contract(k,E.ERC721_ADDRESS),t(W({account:i[0],minter:s,mintPass:o,erc721:l,web3:a,networkId:r})),n.on("accountsChanged",(function(e){t(K(e[0]))})),n.on("chainChanged",Object(c.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.eth.net.getId();case 2:n=e.sent,t(W({account:i[0],minter:s,mintPass:o,erc721:l,web3:a,networkId:n}));case 4:case"end":return e.stop()}}),e)})))),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(7),t({type:"CONNECTION_FAILED",payload:"Something went wrong."});case 25:case"end":return e.stop()}}),e,null,[[7,22]])})));return function(t){return e.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(c.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(R());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Y=n(853),z=n(836),G=n(850),H=n(854),J=n(855),X=n(1);function Q(){var e=Object(u.b)(),t=Object(i.useState)(a.OPEN),n=Object(l.a)(t,2),r=n[0],s=(n[1],Object(u.c)((function(e){return e.blockchain})));Object(i.useEffect)((function(){return o()}),[s.account]);var o=function(){""!==s.account&&null!==s.minter&&e(R())};return r===a.NOT_STARTED?Object(X.jsxs)(z.a,{spacing:2,flex:1,children:[Object(X.jsx)(Y.a,{variant:"h2",children:"Raffle will soon start"}),Object(X.jsx)(Y.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Come back later to participate in the raffle to get a chance to get whitelisted."})]}):s.account||r!==a.OPEN?r===a.OPEN&&!1===s.hasParticipatedInRaffle?Object(X.jsxs)(z.a,{spacing:2,flex:1,children:[Object(X.jsx)(Y.a,{variant:"h2",children:"Take now part in raffle"}),Object(X.jsx)(Y.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Simply click the button below to take part in the raffle without paying any gas."}),Object(X.jsx)(H.a,{variant:"contained",onClick:function(t){e(function(){var e=Object(c.a)(d.a.mark((function e(t){var n,a,i,r,s,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.connect();case 2:return n=e.sent,a=new b.a(n),e.prev=4,e.next=7,a.eth.getAccounts();case 7:return i=e.sent,e.next=10,a.eth.personal.sign("Rawrr",i[0],null);case 10:return r=e.sent,e.next=13,fetch("".concat(E.API_URL,"/raffle"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({address:i[0],signature:r})});case 13:return e.next=15,fetch("".concat(E.API_URL,"/raffle/").concat(i[0]),{headers:{Accept:"application/json","Content-Type":"application/json"}});case 15:return s=e.sent,e.next=18,s.json();case 18:o=e.sent,l=o.status,t({type:"RAFFLE_STATUS",payload:{hasParticipatedInRaffle:"participated"===l}}),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(4),console.error(e.t0);case 27:case"end":return e.stop()}}),e,null,[[4,24]])})));return function(t){return e.apply(this,arguments)}}())},fullWidth:!0,children:"Join Raffle"})]}):r!==a.OPEN&&r!==a.CLOSED||!0!==s.hasParticipatedInRaffle?r===a.CLOSED?Object(X.jsxs)(z.a,{spacing:2,flex:1,children:[Object(X.jsx)(Y.a,{variant:"h2",children:"The raffle has been closed"}),Object(X.jsx)(Y.a,{variant:"body1",gutterBottom:!0,align:"center"})]}):Object(X.jsx)(z.a,{spacing:2,justifyContent:"space-between",flex:1,children:Object(X.jsx)(z.a,{direction:"column",justifyContent:"center",alignItems:"center",children:Object(X.jsx)(J.a,{size:24})})}):Object(X.jsxs)(z.a,{spacing:2,flex:1,children:[Object(X.jsx)(Y.a,{variant:"h2",children:"You claimed your spot in the raffle"}),Object(X.jsx)(Y.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Make sure to follow us to get notified when the results are in and the mint starts."})]}):Object(X.jsxs)(z.a,{spacing:2,flex:1,children:[Object(X.jsx)(Y.a,{variant:"h2",children:"Raffle is now open"}),Object(X.jsx)(Y.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Connect with your wallet to join the raffle, and get a chance to get whitelisted."}),Object(X.jsx)(G.a,{onClick:function(t){t.preventDefault(),e(F()),o()},variant:"contained",fullWidth:!0,children:"Connect Your Wallet"})]})}!function(e){e[e.NOT_CONNECTED=0]="NOT_CONNECTED",e[e.NOT_STARTED=1]="NOT_STARTED",e[e.OPEN=2]="OPEN",e[e.ALREADY_PARTICIPATED=3]="ALREADY_PARTICIPATED",e[e.CLOSED=4]="CLOSED"}(a||(a={}));var q,V,Z=n(858),$=n(847),ee=n(848),te=n(857),ne=n(856),ae=n(409),ie=n.n(ae),re=n(410),se=n.n(re),oe=n(411),le=n.n(oe),ue=n(213),ce=n(851),pe=n(277);function de(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.data})),n=Object(u.c)((function(e){return e.blockchain})),a=Object(i.useState)(!1),r=Object(l.a)(a,2),s=r[0],o=r[1],p=Object(i.useState)(1),y=Object(l.a)(p,2),b=y[0],m=y[1],f=Object(i.useState)(""),h=Object(l.a)(f,2),O=h[0],T=h[1],j=Object(i.useState)(null),g=Object(l.a)(j,2),x=g[0],v=g[1],w=function(){""!==n.account&&null!==n.minter&&e(R())};Object(i.useEffect)((function(){return m(t.maxPerWallet-t.amountMinted)}),[t.maxPerWallet,t.amountMinted]),Object(i.useEffect)((function(){return w()}),[n.account]);var S=function(){var a=Object(c.a)(d.a.mark((function a(){var i,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(!0),a.prev=1,i=t.whitelistedOnly?E.WL_WEI_COST:E.PUBLIC_WEI_COST,a.next=5,n.minter.methods.mint(b).send({to:E.MINTER_ADDRESS,from:n.account,value:i*b});case 5:r=a.sent,console.log(r),o(!1),v(r),e(R()),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(1),s=a.t0,console.error(s),s.message?T(s.message):T("Something went wrong while trying to mint the NFT"),o(!1);case 16:case"end":return a.stop()}var s}),a,null,[[1,12]])})));return function(){return a.apply(this,arguments)}}();function C(){return n.account&&null!==n.minter?n.networkId!=E.NETWORK.ID?q.WRONG_NETWORK:t.mintPaused?q.NOT_STARTED:s?q.CLAIMING:x?q.MINTED:t.totalSupply>=t.availableSupply||t.mintEnded?q.CLOSED:t.whitelistedOnly?t.isWhitelisted?q.PUBLIC_SALE:q.WHITELISTED_ONLY:!1===t.mintPaused?q.PUBLIC_SALE:q.LOADING:q.NOT_CONNECTED}return C()===q.NOT_CONNECTED?Object(X.jsx)(z.a,{spacing:2,children:pe.isMobile?Object(X.jsx)(X.Fragment,{children:"undefined"===typeof window.ethereum?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Y.a,{children:"Continue in"}),Object(X.jsxs)(z.a,{direction:"row",spacing:2,children:[Object(X.jsx)(G.a,{variant:"contained",fullWidth:!0,href:"https://metamask.app.link/dapp/t.co/PdqQplEb1N",children:"Metamask"}),Object(X.jsx)(G.a,{onClick:function(t){t.preventDefault(),e(F()),w()},variant:"contained",fullWidth:!0,children:"Coinbase"})]})]}):Object(X.jsx)(G.a,{onClick:function(t){t.preventDefault(),e(F()),w()},variant:"contained",fullWidth:!0,children:"Connect Your Wallet"})}):Object(X.jsx)(G.a,{onClick:function(t){t.preventDefault(),e(F()),w()},variant:"contained",fullWidth:!0,children:"Connect Your Wallet"})}):C()===q.WRONG_NETWORK?Object(X.jsxs)($.a,{variant:"outlined",severity:"error",children:["You are not connected to the ",E.NETWORK.NAME," network, please open Metamask and make sure you are connected with the right account to the Ethereum network."]}):C()===q.NOT_STARTED?Object(X.jsx)(z.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1.25,children:Object(X.jsx)(Y.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Minting has not started yet. Once the timer reaches zero, refresh this page and be the first to mint."})}):C()===q.PUBLIC_SALE||C()===q.CLAIMING?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(z.a,{direction:"row",spacing:4,children:[Object(X.jsx)(ee.a,{value:b,disableUnderline:!0,startAdornment:Object(X.jsx)(te.a,{position:"start",children:Object(X.jsx)(ne.a,{"aria-label":"decrement",size:"small",onClick:function(e){e.preventDefault(),function(){var e=b-1;e<1&&(e=1),m(e)}()},disabled:C()===q.CLAIMING,children:Object(X.jsx)(ie.a,{})})}),endAdornment:Object(X.jsx)(te.a,{position:"start",children:Object(X.jsx)(ne.a,{"aria-label":"decrement",size:"small",onClick:function(e){e.preventDefault(),function(){var e=b+1;e<=Math.min(t.maxPerWallet-t.amountMinted,t.availableSupply-t.totalSupply)&&m(e)}()},disabled:C()===q.CLAIMING,children:Object(X.jsx)(se.a,{})})}),inputProps:{style:{textAlign:"center"}},fullWidth:!0}),Object(X.jsx)(H.a,{disabled:C()===q.CLAIMING,loading:C()===q.CLAIMING,variant:"contained",onClick:function(e){e.preventDefault(),S(),w()},fullWidth:!0,children:"Mint NFT"})]}),Object(X.jsxs)(Y.a,{variant:"subtitle2",children:[t.amountMinted," of ",t.maxPerWallet," minted"]}),O&&Object(X.jsx)($.a,{variant:"outlined",severity:"error",children:O})]}):C()===q.CLOSED?Object(X.jsxs)(z.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(X.jsx)(Y.a,{variant:"body1",gutterBottom:!0,align:"center",children:"Minting period has ended. The whole collection be will revealed soon, go to OpenSea to check it out!"}),Object(X.jsx)(G.a,{variant:"contained",href:E.MARKETPLACE_LINK,target:"_blank",children:"See collection"})]}):C()===q.MINTED?Object(X.jsxs)(z.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1.25,children:[Object(X.jsx)(Y.a,{variant:"body1",gutterBottom:!0,align:"center",children:"NFT has been minted! It should soon be visible in your OpenSea account, you can check the transaction below to follow it's progress."}),Object(X.jsx)(G.a,{variant:"contained",href:"https://etherscan.io/tx/".concat(x.transactionHash),target:"_blank",children:"View Transaction"})]}):C()===q.WHITELISTED_ONLY?Object(X.jsx)(z.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:1.25,children:Object(X.jsx)(Y.a,{variant:"body1",gutterBottom:!0,align:"center",children:"The wallet you are using is not whitelisted, keep an eye on this page to be the first when the public sale starts."})}):Object(X.jsx)(z.a,{direction:"column",justifyContent:"center",alignItems:"center",children:Object(X.jsx)(J.a,{size:24})})}!function(e){e[e.NOT_CONNECTED=0]="NOT_CONNECTED",e[e.WRONG_NETWORK=1]="WRONG_NETWORK",e[e.CONNECTED=2]="CONNECTED",e[e.NOT_STARTED=3]="NOT_STARTED",e[e.WHITELISTED_ONLY=4]="WHITELISTED_ONLY",e[e.PUBLIC_SALE=5]="PUBLIC_SALE",e[e.PRE_SALE=6]="PRE_SALE",e[e.CLAIMING=7]="CLAIMING",e[e.MINTED=8]="MINTED",e[e.ERROR=9]="ERROR",e[e.CLOSED=10]="CLOSED",e[e.LOADING=11]="LOADING"}(q||(q={})),function(e){e[e.NotStarted=0]="NotStarted",e[e.WhitelistedOnly=1]="WhitelistedOnly",e[e.Public=2]="Public"}(V||(V={}));var ye=16474572e5,be=16475436e5,me=164763e7;function fe(){var e=+new Date;return e>=ye&&e<be?V.WhitelistedOnly:e>=be?V.Public:V.NotStarted}function he(){Object(u.b)();var e=fe()===V.WhitelistedOnly||fe()===V.NotStarted,t=e?E.WL_WEI_COST:E.PUBLIC_WEI_COST,n=Object(u.c)((function(e){return e.blockchain}));Object(i.useEffect)((function(){"Notification"in window?Notification.requestPermission():console.log("This browser does not support desktop notification")}),[]);var a,r=fe();return Object(X.jsxs)(z.a,{spacing:2,justifyContent:"space-between",flex:1,children:[Object(X.jsx)(z.a,{mb:1,children:Object(X.jsx)(Z.a,{children:n.account&&Object(X.jsx)(ce.a,{size:"small",label:"Connected with ".concat((a=n.account,a.length<10?a:"".concat(a.slice(0,6),"...").concat(a.slice(a.length-4)))),icon:Object(X.jsx)(le.a,{sx:{fontSize:"12px!important",marginLeft:"12px!important",color:"lightgreen!important"}}),sx:{fontSize:"12px!important"}})})}),Object(X.jsxs)(z.a,{direction:"row",justifyContent:"space-between",children:[Object(X.jsxs)(Z.a,{children:[Object(X.jsx)(Y.a,{variant:"subtitle2",align:"left",gutterBottom:!0,children:e?"WL Price":"Price"}),Object(X.jsxs)(Y.a,{variant:"subtitle1",align:"left",children:[t/1e18," ",E.NETWORK.SYMBOL]})]}),Object(X.jsxs)(Z.a,{children:[r===V.NotStarted&&Object(X.jsx)(ue.a,{date:ye,renderer:function(e){var t=e.days,n=e.hours,a=e.minutes;e.seconds;return e.completed?null:Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(Y.a,{variant:"subtitle2",align:"right",gutterBottom:!0,children:[pe.isMobile?"WL":"Whitelist"," sale starts in"]}),Object(X.jsxs)(Y.a,{variant:"subtitle1",align:"right",gutterBottom:!0,children:[t>0&&"".concat(t," days, ")," ",n," hours and"," ",a," minutes"]})]})}}),r===V.WhitelistedOnly&&Object(X.jsx)(ue.a,{date:be,renderer:function(e){var t=e.days,n=e.hours,a=e.minutes;e.seconds;return e.completed?null:Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Y.a,{variant:"subtitle2",align:"right",gutterBottom:!0,children:"Public starts sale in"}),Object(X.jsxs)(Y.a,{variant:"subtitle1",align:"right",gutterBottom:!0,children:[t," days, ",n," hours and ",a," minutes"]})]})}}),r===V.Public&&Object(X.jsx)(ue.a,{date:me,renderer:function(e){var t=e.days,n=e.hours,a=e.minutes;e.seconds;return e.completed?null:Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Y.a,{variant:"subtitle2",align:"right",gutterBottom:!0,children:"Time left until mint closes"}),Object(X.jsxs)(Y.a,{variant:"subtitle1",align:"right",gutterBottom:!0,children:[t," days, ",n," hours and ",a," minutes"]})]})}})]})]}),Object(X.jsx)(de,{})]})}var Oe=function(){return"RAFFLE"===E.PRIMARY_STATE?Object(X.jsx)(Q,{}):"MINT"===E.PRIMARY_STATE?Object(X.jsx)(he,{}):void 0},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,859)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))},je=n(852),ge=n(412),xe=Object(ge.a)({palette:{mode:"dark",primary:{main:"#b79861"},background:{default:"#1d1c2e"}},typography:{fontSize:16,fontFamily:"inherit",button:{textTransform:"none",fontSize:"1rem",fontWeight:600},h2:{fontSize:"1.6rem",fontWeight:500,letterSpacing:"1.3px"},body1:{fontSize:"1rem",fontWeight:400,lineHeight:"1.5rem"},subtitle1:{fontSize:"1.25rem",fontWeight:500},subtitle2:{fontSize:"0.875rem",textTransform:"uppercase",fontWeight:400,letterSpacing:"0.125rem"}},shape:{borderRadius:0},components:{MuiButtonBase:{defaultProps:{disableRipple:!0,disableTouchRipple:!0}},MuiButton:{defaultProps:{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,disableElevation:!0},styleOverrides:{root:{height:"44px"}}},MuiFilledInput:{styleOverrides:{input:{padding:"8px 0"}}},MuiAlert:{styleOverrides:{message:{fontSize:"0.875rem"}}}}});n(810);o.a.render(Object(X.jsx)(r.a.StrictMode,{children:Object(X.jsx)(u.a,{store:_,children:Object(X.jsx)(je.a,{theme:xe,children:Object(X.jsx)(Oe,{})})})}),document.getElementById("root")),Te()}},[[812,1,2]]]);
//# sourceMappingURL=main.7c43d84a.chunk.js.map