(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,a,t){e.exports=t(349)},141:function(e,a,t){},143:function(e,a,t){},349:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),i=t.n(r),o=(t(141),t(24)),c=t(25),s=t(27),m=t(26),u=t(28),d=(t(143),t(9)),h=t.n(d),p=t(82),v=t.n(p),b=t(124),E=t(43),f=[{label:"Helsinki",value:"helsinki"},{label:"Espoo",value:"espoo"},{label:"Vantaa",value:"vantaa"},{label:"Kauniainen",value:"kauniainen"},{label:"Tampere",value:"tampere"},{label:"Turku",value:"turku"},{label:"Kaarina",value:"kaarina"},{label:"Raisio",value:"raisio"},{label:"Tallinn",value:"tallinn"}],g=[{label:1,value:1},{label:2,value:2},{label:3,value:3},{label:4,value:4},{label:5,value:5},{label:6,value:6},{label:7,value:7},{label:8,value:8},{label:"9+",value:"9+"}],y=[{label:"Excellent",value:"5"},{label:"Good",value:"4"},{label:"Decent",value:"3"},{label:"Bad",value:"2"}],C=t(21),O=t.n(C),x=t(44),k=t.n(x),_=t(23),j=t.n(_),w=t(45),q=t.n(w),S=t(22),N=t.n(S),z=t(36),R=t.n(z),I=t(35),W=t.n(I),F=t(79),L=t.n(F),V=t(81),T=t.n(V),B=t(16),Y=t.n(B),A=t(31),D=t.n(A),P=t(125),X=t.n(P),G="get_valuation_data";function H(){var e=X.a.post("https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data",{who_rules:"kodit.io"}).then(function(e){return{valuationFeedback:e.data[0],valuationList:e.data.slice(1)}});return{type:G,payload:e}}var J=t(32),K=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={formError:!1,city:"",address:"",postcode:"",floor:"",totalFloors:"",size:"",numberOfRooms:"",constructionYear:"",maintenanceCost:"",apartmentCondition:"",landOwnership:"",elevator:"",balcony:"",pipeRenovation:"",facadeRenovation:""},t.handleChange=function(e){return function(a){t.setState(Object(E.a)({},e,a.target.value))}},t.validateForm=function(){var e=!0;return Object.keys(t.state).forEach(function(a){e=e&&""!==t.state[a]}),e},t.handleSubmit=function(){var e=Object(b.a)(v.a.mark(function e(a){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.validateForm()){e.next=5;break}t.setState({formError:!0}),e.next=16;break;case 5:return t.setState({formError:!1}),e.prev=6,e.next=9,t.props.dispatch(H());case 9:n=e.sent,console.log("Insight data",n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),t.setState({formError:!0});case 16:case"end":return e.stop()}},e,this,[[6,13]])}));return function(a){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.formError,t=e.city,n=e.address,r=e.postcode,i=e.floor,o=e.totalFloors,c=e.size,s=e.numberOfRooms,m=e.constructionYear,u=e.maintenanceCost,d=e.apartmentCondition,p=e.landOwnership,v=e.elevator,b=e.balcony,E=e.pipeRenovation,C=e.facadeRenovation;return l.a.createElement(D.a,{square:!0,style:{padding:20}},l.a.createElement("div",{className:"valuation-form-wrapper"},l.a.createElement(Y.a,{variant:"h4",component:"h2"},"Home Price Valuation"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(h.a,{container:!0,spacing:8},l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{name:"city",select:!0,label:"City",value:t,onChange:this.handleChange("city"),margin:"normal",required:!0,fullWidth:!0},f.map(function(e){return l.a.createElement(k.a,{key:e.value,value:e.value},e.label)}))),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{label:"Address",name:"address",type:"text",required:!0,onChange:this.handleChange("address"),value:n,margin:"normal",fullWidth:!0})),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{label:"Postcode",name:"postcode",type:"number",required:!0,onChange:this.handleChange("postcode"),value:r,margin:"normal",fullWidth:!0})),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{name:"floor",select:!0,label:"Floor",value:i,onChange:this.handleChange("floor"),margin:"normal",required:!0,fullWidth:!0},g.map(function(e){return l.a.createElement(k.a,{key:e.value,value:e.value},e.label)}))),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{name:"totalFloors",select:!0,label:"Total floors",value:o,onChange:this.handleChange("totalFloors"),margin:"normal",required:!0,fullWidth:!0},g.map(function(e){return l.a.createElement(k.a,{key:e.value,value:e.value},e.label)}))),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{name:"numberOfRooms",select:!0,label:"Number of rooms",value:s,onChange:this.handleChange("numberOfRooms"),margin:"normal",required:!0,fullWidth:!0},g.map(function(e){return l.a.createElement(k.a,{key:e.value,value:e.value},e.label)}))),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{label:"Living area size",name:"size",type:"number",required:!0,onChange:this.handleChange("size"),value:c,margin:"normal",fullWidth:!0})),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{label:"Construction year",name:"constructionYear",type:"number",required:!0,onChange:this.handleChange("constructionYear"),value:m,margin:"normal",fullWidth:!0})),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{label:"Maintenance cost",name:"maintenanceCost",type:"number",required:!0,onChange:this.handleChange("maintenanceCost"),value:u,margin:"normal",fullWidth:!0})),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(O.a,{label:"Apartment condition",name:"apartmentCondition",select:!0,value:d,onChange:this.handleChange("apartmentCondition"),margin:"normal",required:!0,fullWidth:!0},y.map(function(e){return l.a.createElement(k.a,{key:e.value,value:e.value},e.label)}))),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(R.a,{component:"fieldset",fullWidth:!0},l.a.createElement(W.a,{component:"legend"},"Land ownership"),l.a.createElement(q.a,{"aria-label":"Land ownership",name:"landOwnership",value:p,onChange:this.handleChange("landOwnership")},l.a.createElement(N.a,{value:"own",control:l.a.createElement(j.a,null),label:"Own"}),l.a.createElement(N.a,{value:"rented",control:l.a.createElement(j.a,null),label:"Rented"})))),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(R.a,{component:"fieldset",fullWidth:!0},l.a.createElement(W.a,{component:"legend"},"Is there an elevator in the building"),l.a.createElement(q.a,{"aria-label":"Is there an elevator in the building",name:"elevator",value:v,onChange:this.handleChange("elevator")},l.a.createElement(N.a,{value:"yes",control:l.a.createElement(j.a,null),label:"Yes"}),l.a.createElement(N.a,{value:"no",control:l.a.createElement(j.a,null),label:"No"})))),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(R.a,{component:"fieldset",fullWidth:!0},l.a.createElement(W.a,{component:"legend"},"Is there balcony in the apartment"),l.a.createElement(q.a,{"aria-label":"Is there balcony in the apartment",name:"balcony",value:b,onChange:this.handleChange("balcony")},l.a.createElement(N.a,{value:"yes",control:l.a.createElement(j.a,null),label:"Yes"}),l.a.createElement(N.a,{value:"no",control:l.a.createElement(j.a,null),label:"No"})))),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(R.a,{component:"fieldset",fullWidth:!0},l.a.createElement(W.a,{component:"legend"},"Is there pipe renovation planned within 5 years"),l.a.createElement(q.a,{"aria-label":"Is there pipe renovation planned within 5 years",name:"pipeRenovation",value:E,onChange:this.handleChange("pipeRenovation")},l.a.createElement(N.a,{value:"yes",control:l.a.createElement(j.a,null),label:"Yes"}),l.a.createElement(N.a,{value:"no",control:l.a.createElement(j.a,null),label:"No"})))),l.a.createElement(h.a,{item:!0,xs:6},l.a.createElement(R.a,{component:"fieldset",fullWidth:!0},l.a.createElement(W.a,{component:"legend"},"Is there facade renovation planned within 10 years"),l.a.createElement(q.a,{"aria-label":"Is there facade renovation planned within 10 years",name:"facadeRenovation",value:C,onChange:this.handleChange("facadeRenovation")},l.a.createElement(N.a,{value:"yes",control:l.a.createElement(j.a,null),label:"Yes"}),l.a.createElement(N.a,{value:"no",control:l.a.createElement(j.a,null),label:"No"})))),a&&l.a.createElement(h.a,{item:!0,xs:12},l.a.createElement(L.a,{error:!0},"Please check the form again")),l.a.createElement(h.a,{item:!0,xs:12},l.a.createElement(T.a,{variant:"contained",color:"primary",onClick:this.handleSubmit},"Get price valuation"))))))}}]),a}(n.Component),U=Object(J.b)()(K),M=t(60),Q=t(49),Z=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.valuationFeedback,t=e.classes;return l.a.createElement("div",null,a?l.a.createElement(D.a,{className:t.root,elevation:1},l.a.createElement(Y.a,{variant:"h5",component:"h3"},"Your price valuation"),l.a.createElement(Y.a,{component:"p",color:"textSecondary",gutterBottom:!0},parseInt(a.price_sqm,10),"\u20ac per square meter"),l.a.createElement(Y.a,{color:"primary",gutterBottom:!0,variant:"body2"},parseInt(a.price_sqm*a.size_sqm,10)," ","\u20ac")):l.a.createElement(Y.a,{variant:"h5",component:"h3"},"Please submit the form to get your valuation"))}}]),a}(n.Component);Z.defaultProps={valuationFeedback:null};var $=Object(J.b)(function(e){return{valuationFeedback:e.valuation.valuationFeedback}})(Object(Q.withStyles)(function(e){return{root:Object(M.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit})}})(Z)),ee=t(5),ae=t.n(ee),te=t(129),ne=t.n(te),le=t(130),re=t.n(le),ie=t(83),oe=t.n(ie),ce=t(132),se=t.n(ce),me=t(80),ue=t.n(me),de=t(131),he=t.n(de),pe=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={expanded:!1},t.handleExpandClick=function(){t.setState(function(e){return{expanded:!e.expanded}})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props;return l.a.createElement(ne.a,null,l.a.createElement(oe.a,null,l.a.createElement(Y.a,{variant:"h5",component:"h2",className:"address",gutterBottom:!0},"".concat(e.street," ").concat(e.street_number)),l.a.createElement(Y.a,{color:"textSecondary",className:"description",gutterBottom:!0},e.size_sqm," m",l.a.createElement("sup",null,"2")," ",e.description),l.a.createElement(Y.a,{color:"primary",className:"price",gutterBottom:!0,variant:"body2"},parseInt(e.price_sqm*e.size_sqm,10)," \u20ac")),l.a.createElement(re.a,null,l.a.createElement(ue.a,{className:ae()(e.classes.expand,Object(E.a)({},e.classes.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},l.a.createElement(he.a,null))),l.a.createElement(se.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},l.a.createElement(oe.a,null,l.a.createElement(Y.a,{paragraph:!0},"Balcony: ",e.balcony),l.a.createElement(Y.a,{paragraph:!0},"Number of rooms: ",e.room_count),l.a.createElement(Y.a,{paragraph:!0},"Construction year: ",e.built_year))))}}]),a}(n.Component),ve=Object(Q.withStyles)(function(e){return{expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})(pe),be=function(e){return l.a.createElement(h.a,{container:!0,spacing:24},e.list?e.list.map(function(e,a){return l.a.createElement(h.a,{item:!0,xs:12,sm:4,key:a},l.a.createElement(ve,e))}):null)},Ee=t(133),fe=t.n(Ee),ge=t(62),ye=t.n(ge),Ce=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={filter:"similar_size",tabValue:0},t.filterValuation=function(e){t.setState({filter:e})},t.handleChange=function(e,a){var n="";switch(a){case 0:n="similar_size";break;case 1:n="similar_price";break;case 2:n="same_area";break;default:n="similar_size"}t.setState({tabValue:a,filter:n})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.filter,a=this.props,t=a.currentValuation,n=a.valuationList,r=n.filter(function(a){switch(e){case"similar_size":return t.size_sqm-10<=a.size_sqm&&a.size_sqm<=t.size_sqm+10;case"similar_price":return t.price_sqm-100<=a.price_sqm&&a.price_sqm<=t.price_sqm+100;case"same_area":return t.street===a.street;default:return!1}});return l.a.createElement("div",null,n.length>0&&l.a.createElement(D.a,{square:!0,style:{padding:20}},l.a.createElement(fe.a,{value:this.state.tabValue,indicatorColor:"primary",textColor:"primary",onChange:this.handleChange,centered:!0},l.a.createElement(ye.a,{label:"Similar size"}),l.a.createElement(ye.a,{label:"Similar price"}),l.a.createElement(ye.a,{label:"Same area"})),l.a.createElement("div",{className:"valuation-list",style:{marginTop:20}},l.a.createElement(be,{list:r}))))}}]),a}(n.Component);Ce.defaultProps={valuationList:[],currentValuation:{}};var Oe=Object(J.b)(function(e){return{valuationList:e.valuation.valuationList,currentValuation:e.valuation.valuationFeedback}})(Ce),xe=function(){return l.a.createElement("div",{className:"valuation-feedback-container"},l.a.createElement(h.a,{container:!0,spacing:24},l.a.createElement(h.a,{item:!0,xs:12},l.a.createElement($,null)),l.a.createElement(h.a,{item:!0,xs:12},l.a.createElement(Oe,null))))},ke=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App",style:{padding:20}},l.a.createElement(h.a,{container:!0,spacing:24},l.a.createElement(h.a,{item:!0,xs:12,sm:4},l.a.createElement(U,null)),l.a.createElement(h.a,{item:!0,xs:12,sm:8},l.a.createElement(xe,null))))}}]),a}(n.Component),_e=t(34),je=t(134),we=t.n(je),qe=t(135);var Se=Object(_e.c)({valuation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case G:return Object(M.a)({},e,a.payload);default:return e}}}),Ne=Object(_e.a)(we.a,qe.a)(_e.d);i.a.render(l.a.createElement(J.a,{store:Ne(Se,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},l.a.createElement(ke,null)),document.getElementById("root"))}},[[136,2,1]]]);
//# sourceMappingURL=main.6c8a8e7e.chunk.js.map