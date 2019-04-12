(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)o=s[u],i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"54f0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("f13c"),r=n.n(i),o=n("ecee"),s=n("c074"),c=n("42b9"),l=n("ad3d"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[n("nav",{staticClass:"small-navbar"},[n("p",[e._v("Hi, I'm "+e._s(e.data.firstname)+".")])]),n("nav",{staticClass:"fullsize-navbar"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.data.avatar_url,alt:"Profile picture"}})]),n("ul",[n("li",{staticClass:"nav-item"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#about",container:"#resume"},expression:"{el: '#about', container: '#resume'}"}],attrs:{href:"#about"}},[e._v("About")])]),n("li",{staticClass:"nav-item"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#experience",container:"#resume"},expression:"{el: '#experience', container: '#resume'}"}],attrs:{href:"#experience"}},[e._v("Experience")])]),n("li",{staticClass:"nav-item"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#skills",container:"#resume"},expression:"{el: '#skills', container: '#resume'}"}],attrs:{href:"#skills"}},[e._v("Skills")])]),n("li",{staticClass:"nav-item"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#education",container:"#resume"},expression:"{el: '#education', container: '#resume'}"}],attrs:{href:"#education"}},[e._v("Education")])]),n("li",{staticClass:"nav-item"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#projects",container:"#resume"},expression:"{el: '#projects', container: '#resume'}"}],attrs:{href:"#projects"}},[e._v("Projects")])]),n("li",{staticClass:"nav-item"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#interests",container:"#resume"},expression:"{el: '#interests', container: '#resume'}"}],attrs:{href:"#interests"}},[e._v("Interests")])])])])]),n("main",{attrs:{id:"resume"}},[n("AboutSection",{attrs:{id:"about",profile:e.data}}),n("ExperienceSection",{attrs:{id:"experience",experience:e.data.experience}}),n("SkillSection",{attrs:{id:"skills",skills:e.data.skills}}),n("EducationSection",{attrs:{id:"education",schools:e.data.education}}),n("ProjectSection",{attrs:{id:"projects",projects:e.data.projects}}),n("InterestSection",{attrs:{id:"interests",interests:e.data.interests}})],1)])},u=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"name"},[e._v("\n        "+e._s(e.profile.firstname)+"\n        "),n("span",{staticClass:"lastname"},[e._v(" "+e._s(e.profile.lastname))])]),n("section",{staticClass:"contact"},[n("span",[e._v(e._s(e.profile.location)+" ")]),n("span",[e._v("•")]),n("span",[e._v(" "+e._s(e.profile.phone)+" ")]),n("span",[e._v("•")]),n("span",[e._v(" "+e._s(e.profile.email)+" ")])]),n("section",{staticClass:"summary"},[n("p",[e._v(e._s(e.profile.summary))])]),n("section",{staticClass:"links"},[n("a",{staticClass:"icon",attrs:{href:e.profile.github,title:"GitHub"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),n("a",{staticClass:"icon",attrs:{href:e.profile.twitter,title:"Twitter"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),n("a",{staticClass:"icon",attrs:{href:e.profile.website,title:"Website"}},[n("font-awesome-icon",{attrs:{icon:"globe"}})],1)])])},d=[],f={name:"AboutSection",props:["profile"]},g=f,v=(n("70dc"),n("2877")),h=Object(v["a"])(g,m,d,!1,null,null,null),_=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Experience")]),e._l(e.experience,function(t){return n("section",{key:t.id},[n("h3",[e._v(e._s(t.job))]),n("h4",[e._v(e._s(t.company))]),n("span",{staticClass:"date-range"},[e._v(e._s(t.start)+" - "+e._s(t.end))]),n("ul",e._l(t.tasks,function(t){return n("li",{key:t.id},[e._v("\n                "+e._s(t)+"\n            ")])}),0)])})],2)},y=[],w={name:"ExperienceSection",props:["experience"]},k=w,S=Object(v["a"])(k,b,y,!1,null,null,null),C=S.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Skills")]),n("main",{staticClass:"skill-container"},e._l(e.skills,function(t){return n("section",{key:t.id,staticClass:"skill-card"},[n("div",{staticClass:"image-container"},[n("img",{attrs:{src:"assets/"+t.image_url,alt:t.name}})]),n("h5",[e._v(e._s(t.name))]),n("div",{staticClass:"proficiency-bar-container"},[n("div",{staticClass:"proficiency-bar",attrs:{title:e._f("proficiencyLevelToText")(t.proficiency_level)}},[e._v("\n                    "+e._s(t.proficiency_level)+"\n                    "),n("div",{staticClass:"proficiency-gradient",style:{width:e.decimalToPercentage(t.proficiency_level)}})])])])}),0)])},x=[],A={name:"SkillSection",props:["skills"],methods:{decimalToPercentage:function(e){return 100*e+"%"}},filters:{proficiencyLevelToText:function(e){var t="";return e<.2?t="Fundamental Awareness (basic knowledge)":e>=.2&&e<.4?t="Novice (limited experience)":e>=.4&&e<.6?t="Intermediate (practical application)":e>=.6&&e<.8?t="Advanced (applied theory)":e>=.8&&(t="Expert (recognized authority)"),t}}},P=A,E=(n("ea4d"),Object(v["a"])(P,j,x,!1,null,null,null)),O=E.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Education")]),e._l(e.schools,function(t){return n("section",{key:t.id},[n("h3",[e._v(e._s(t.school))]),n("h4",[e._v(e._s(t.degree))]),n("span",{staticClass:"date-range"},[e._v(e._s(t.start)+" - "+e._s(t.end))]),n("p",[e._v(e._s(t.major))])])})],2)},M=[],I={name:"EducationSection",props:["schools"]},N=I,D=Object(v["a"])(N,T,M,!1,null,null,null),W=D.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Projects")]),e._l(e.projects,function(t){return n("ul",{key:t.id},[n("li",[n("a",{attrs:{href:t.source}},[e._v(e._s(t.name))])])])})],2)},L=[],$={name:"ProjectSection",props:["projects"]},F=$,V=Object(v["a"])(F,H,L,!1,null,null,null),z=V.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Interests")]),n("p",[e._v(e._s(e.interests))])])},G=[],J={name:"InterestSection",props:["interests"]},R=J,U=Object(v["a"])(R,B,G,!1,null,null,null),q=U.exports,K=n("bd50"),Q={name:"app",components:{AboutSection:_,ExperienceSection:C,SkillSection:O,EducationSection:W,ProjectSection:z,InterestSection:q},data:function(){return{data:K}}},X=Q,Y=(n("034f"),Object(v["a"])(X,p,u,!1,null,null,null)),Z=Y.exports;o["c"].add(s["a"],c["b"],c["c"],s["b"],c["a"]),a["a"].component("font-awesome-icon",l["a"]),a["a"].config.productionTip=!1,a["a"].use(r.a),new a["a"]({render:function(e){return e(Z)}}).$mount("#app")},"64a9":function(e,t,n){},"70dc":function(e,t,n){"use strict";var a=n("54f0"),i=n.n(a);i.a},bd50:function(e){e.exports={firstname:"Ashley",lastname:"Grenon",email:"hello@handmadewithashley.com",location:"Huntsville, AL",phone:"256-262-7935",avatar_url:"https://avatars2.githubusercontent.com/u/1208961?s=460&v=4",github:"https://github.com/townsean",twitter:"https://twitter.com/thecodingcouple",website:"https://www.thecodingcouple.com/",summary:"Ashley is a software engineer with 10 years of professionial experience.",education:[{school:"University of Alabama in Huntsville",degree:"Bachelor of Science",major:"Computer Science",minor:"Mathematics",start:"August 2005",end:"December 2009"}],experience:[{company:"COLSA Corporation",job:"Software Engineer",start:"December 2016",end:"Present",tasks:["My work experience at COLSA as a software engineer"]},{company:"SAIC",job:"Software Engineer",start:"January 2010",end:"December 2016",tasks:["Developed an analysis and visualization tool for helicopter pilots, safety and training officers.","Worked on a development team using the Scrum process.","Created a web interface in Angular 2 for interacting with a rules engine.","Refactored a tightly coupled data layer to use the repository pattern making the software more maintainable and unit testable.","Wrote a RESTful API for an existing backend using ASP.NET Web API.","Refactored a WinForms application into a WPF application with a a more maintainable design.","Developed rich user interfaces using WPF, C# and the Prism framework.","Crafted user interfaces for aircraft flight visualization and analysis tools.","Applied the Model-View-ViewModel (MVVM) design pattern to create more maintainable applications.","Created 3D tool for locating tracked parts on helicopters using the Microsoft's XNA game framework."]},{company:"COLSA Corporation",job:"Computer Operator (Intern)",start:"August 2007",end:"December 2009",tasks:["Hired as an intern.","Developed dashboard software for a high altitude test-bed lab framework and payload flight computer.","Worked on a development team using the Scrum process.","Analyzed software requirements.","Developed Windows and Linux software using C#, C++, and Python.","Maintained and upgraded user interface for monitoring the flight computer status in C# and IronPython.","Developed web-based user interface for monitoring payload status in ASP.NET Web Forms."]}],skills:[{name:"JavaScript",image_url:"js.png",proficiency_level:".65"},{name:"TypeScript",image_url:"typescript.png",proficiency_level:".65"},{name:"Python",image_url:"python.png",proficiency_level:".6"},{name:"C#",image_url:"csharp.png",proficiency_level:".75"},{name:"HTML",image_url:"html.png",proficiency_level:".7"},{name:"CSS",image_url:"css.png",proficiency_level:".5"},{name:"Arduino",image_url:"arduino.jpg",proficiency_level:".3"},{name:"Phaser",image_url:"phaser.png",proficiency_level:".3"},{name:"SQL",image_url:"database.jpg",proficiency_level:".5"},{name:"MongoDB",image_url:"mongodb.png",proficiency_level:".4"},{name:".NET Core",image_url:"netcore.png",proficiency_level:".79"},{name:"ASP.NET Core",image_url:"asp.netcore.jpg",proficiency_level:".60"},{name:"Entity Framework Core",image_url:"entityframeworkcore.png",proficiency_level:".5"},{name:".NET Framework",image_url:"netframework.png",proficiency_level:".79"},{name:"Git",image_url:"git.png",proficiency_level:".7"},{name:"Visual Studio Code",image_url:"vscode.png",proficiency_level:".79"},{name:"Visual Studio",image_url:"visualstudio.png",proficiency_level:".79"},{name:"SketchUp",image_url:"sketchup.png",proficiency_level:".4"},{name:"GIMP",image_url:"gimp.jpg",proficiency_level:".4"},{name:"Inkscape",image_url:"inkscape.png",proficiency_level:".3"},{name:"Bitbucket",image_url:"bitbucket.png",proficiency_level:".75"},{name:"Jira",image_url:"jira.jpg",proficiency_level:".75"},{name:"Confluence",image_url:"confluence.jpg",proficiency_level:".75"}],interests:"In her spare time, Ashley enjoys woodworking (Handmade with Ashley), 3D printing, tabletop gaming (Cardboard Bits), binge watching Korean dramas and spending time with her family.",projects:[{name:"Resume Website",start:"April 2019",description:"An resume/portfolio web application built with Vue.js.",source:"https://github.com/townsean/portfolio",website:"https://townsean.github.io/portfolio/"},{name:"Moody",start:"May 2016",description:"An Angular web app that displays the emotional polarity of a Twitter newsfeed. (An Angular Attack 48-Hour Hackathon entry)",source:"https://github.com/thecodingcouple/angularattack2016-thecodingcouple",website:"https://www.thecodingcouple.com/surviving-hackathon-angular-attack-2016/"},{name:"Bingo Card Generator",start:"April 2016",description:"An Aurelia web app that generates themed bingo cards.",source:"https://github.com/townsean/bingo-card-generator",website:"http://townsean.github.io/bingo-card-generator/"},{name:"Image Watermarker",start:"August 2015",description:"https://github.com/townsean/image-marker",source:"https://github.com/townsean/image-marker",website:"https://www.thecodingcouple.com/watermark-images-python-pillow-pil/"}]}},ea4d:function(e,t,n){"use strict";var a=n("f978"),i=n.n(a);i.a},f978:function(e,t,n){}});
//# sourceMappingURL=app.24ab1264.js.map