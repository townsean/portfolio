(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],p=0,m=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"0898":function(e,t,a){"use strict";var r=a("691e"),n=a.n(r);n.a},3828:function(e,t,a){"use strict";var r=a("c8d9"),n=a.n(r);n.a},"54f0":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("f13c"),i=a.n(n),o=a("ecee"),s=a("c074"),c=a("42b9"),l=a("ad3d"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("header",[a("nav",{staticClass:"small-navbar"},[a("p",[e._v("Hi, I'm "+e._s(e.data.firstname)+".")])]),a("nav",{staticClass:"fullsize-navbar"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:e.data.avatar_url,alt:"Profile picture"}})]),a("ul",[a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#about",container:"#resume"},expression:"{el: '#about', container: '#resume'}"}],attrs:{href:"#about"}},[e._v("About")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#experience",container:"#resume"},expression:"{el: '#experience', container: '#resume'}"}],attrs:{href:"#experience"}},[e._v("Experience")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#skills",container:"#resume"},expression:"{el: '#skills', container: '#resume'}"}],attrs:{href:"#skills"}},[e._v("Skills")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#education",container:"#resume"},expression:"{el: '#education', container: '#resume'}"}],attrs:{href:"#education"}},[e._v("Education")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#projects",container:"#resume"},expression:"{el: '#projects', container: '#resume'}"}],attrs:{href:"#projects"}},[e._v("Projects")])]),a("li",{staticClass:"nav-item"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#interests",container:"#resume"},expression:"{el: '#interests', container: '#resume'}"}],attrs:{href:"#interests"}},[e._v("Interests")])])])])]),a("main",{attrs:{id:"resume"}},[a("AboutSection",{attrs:{id:"about",profile:e.data}}),a("hr"),a("ExperienceSection",{attrs:{id:"experience",experience:e.data.experience}}),a("hr"),a("SkillSection",{attrs:{id:"skills",skills:e.data.skills}}),a("hr"),a("EducationSection",{attrs:{id:"education",schools:e.data.education}}),a("hr"),a("ProjectSection",{attrs:{id:"projects",projects:e.data.projects}}),a("hr"),a("InterestSection",{attrs:{id:"interests",interests:e.data.interests}})],1)])},p=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"name"},[e._v("\n        "+e._s(e.profile.firstname)+"\n        "),a("span",{staticClass:"lastname"},[e._v(" "+e._s(e.profile.lastname))])]),a("section",{staticClass:"contact"},[a("span",[e._v(e._s(e.profile.location)+" ")]),a("span",[e._v("•")]),a("span",[e._v(" "+e._s(e.profile.phone)+" ")]),a("span",[e._v("•")]),a("span",[e._v(" "+e._s(e.profile.email)+" ")])]),a("section",{staticClass:"summary"},[a("p",[e._v(e._s(e.profile.summary))])]),a("section",{staticClass:"links"},[a("a",{staticClass:"icon",attrs:{href:e.profile.github,title:"GitHub"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),a("a",{staticClass:"icon",attrs:{href:e.profile.twitter,title:"Twitter"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),a("a",{staticClass:"icon",attrs:{href:e.profile.website,title:"Website"}},[a("font-awesome-icon",{attrs:{icon:"globe"}})],1)])])},g=[],d={name:"AboutSection",props:["profile"]},f=d,v=(a("70dc"),a("2877")),h=Object(v["a"])(f,m,g,!1,null,null,null),_=h.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("Experience")]),e._l(e.experience,(function(t){return a("section",{key:t.id},[a("h3",[e._v(e._s(t.company))]),e._l(t.roles,(function(t){return a("section",{key:t.id},[a("h4",[e._v(e._s(t.job))]),a("span",{staticClass:"date-range"},[e._v(e._s(t.start)+" - "+e._s(t.end))]),a("ul",e._l(t.tasks,(function(t){return a("li",{key:t.id},[e._v("\n                    "+e._s(t)+"\n                ")])})),0)])}))],2)}))],2)},b=[],w={name:"ExperienceSection",props:["experience"]},k=w,C=Object(v["a"])(k,y,b,!1,null,null,null),S=C.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("Skills")]),a("section",e._l(e.categories,(function(t,r){return a("div",{key:r.id,staticClass:"category-group"},[a("h3",[e._v(e._s(r))]),a("div",{staticClass:"skill-container"},e._l(t,(function(t){return a("section",{key:t.id,staticClass:"skill-card"},[a("div",{staticClass:"image-container"},[a("img",{attrs:{src:"assets/"+t.image_url,alt:t.name}})]),a("h5",[e._v(e._s(t.name))]),a("ProficiencyBar",{attrs:{value:t.proficiency_level}})],1)})),0)])})),0)])},j=[],A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"proficiency-bar-container"},[a("div",{staticClass:"proficiency-bar",attrs:{title:e._f("proficiencyLevelToText")(e.value)}},[e._v("\n        "+e._s(e.value)+"\n        "),a("div",{staticClass:"proficiency-gradient",style:{width:e.decimalToPercentage(e.value)}})])])},P=[],O={name:"ProficiencyBar",props:["value"],methods:{decimalToPercentage:function(e){return 100*e+"%"}},filters:{proficiencyLevelToText:function(e){var t="";return e<.2?t="Fundamental Awareness (basic knowledge)":e>=.2&&e<.4?t="Novice (limited experience)":e>=.4&&e<.6?t="Intermediate (practical application)":e>=.6&&e<.8?t="Advanced (applied theory)":e>=.8&&(t="Expert (recognized authority)"),t}}},E=O,L=(a("0898"),Object(v["a"])(E,A,P,!1,null,null,null)),T=L.exports,D={name:"SkillSection",props:["skills"],components:{ProficiencyBar:T},methods:{groupBy:function(e,t){return e.reduce((function(e,a){var r=a[t];return e[r]||(e[r]=[]),e[r].push(a),e}),{})}},computed:{categories:function(){return this.groupBy(this.skills,"category")}}},M=D,I=(a("ea4d"),Object(v["a"])(M,x,j,!1,null,null,null)),W=I.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("Education")]),e._l(e.schools,(function(t){return a("section",{key:t.id},[a("h3",[e._v(e._s(t.school))]),a("h4",[e._v(e._s(t.degree))]),a("span",{staticClass:"date-range"},[e._v(e._s(t.start)+" - "+e._s(t.end))]),a("p",[e._v(e._s(t.major))])])}))],2)},N=[],B={name:"EducationSection",props:["schools"]},H=B,z=Object(v["a"])(H,F,N,!1,null,null,null),$=z.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("Projects")]),e._l(e.projects,(function(t){return a("div",{key:t.id,staticClass:"project"},[a("h3",[a("a",{attrs:{href:t.source}},[e._v(e._s(t.name)+" "),a("font-awesome-icon",{attrs:{icon:["fas","external-link-alt"]}})],1)]),a("p",[e._v(e._s(t.description)+" "),a("em",[e._v("("+e._s(t.start)+")")])]),t.preview_url?a("figure",[a("a",{attrs:{href:"assets/project_previews/"+t.preview_url}},[a("img",{attrs:{src:"assets/project_previews/"+t.preview_url,alt:t.name+"Demo Image"}})]),a("figcaption",[a("a",{attrs:{href:t.source}},[e._v("Source")]),e._v(" | "),a("a",{attrs:{href:t.website}},[e._v("Website")])])]):e._e()])}))],2)},J=[],G={name:"ProjectSection",props:["projects"]},q=G,R=(a("3828"),Object(v["a"])(q,V,J,!1,null,"2874e902",null)),Q=R.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("Interests")]),a("p",{domProps:{innerHTML:e._s(e.interests)}})])},K=[],X={name:"InterestSection",props:["interests"]},Y=X,Z=Object(v["a"])(Y,U,K,!1,null,null,null),ee=Z.exports,te=a("bd50"),ae={name:"app",components:{AboutSection:_,ExperienceSection:S,SkillSection:W,EducationSection:$,ProjectSection:Q,InterestSection:ee},data:function(){return{data:te}}},re=ae,ne=(a("034f"),Object(v["a"])(re,u,p,!1,null,null,null)),ie=ne.exports;o["c"].add(s["a"],c["b"],c["c"],s["c"],c["a"],s["b"]),r["a"].component("font-awesome-icon",l["a"]),r["a"].config.productionTip=!1,r["a"].use(i.a),new r["a"]({render:function(e){return e(ie)}}).$mount("#app")},"64a9":function(e,t,a){},"691e":function(e,t,a){},"70dc":function(e,t,a){"use strict";var r=a("54f0"),n=a.n(r);n.a},bd50:function(e){e.exports=JSON.parse('{"firstname":"Ashley","lastname":"Grenon","email":"hello@handmadewithashley.com","location":"Huntsville, AL","phone":"256-262-7935","avatar_url":"https://avatars2.githubusercontent.com/u/1208961?s=460&v=4","github":"https://github.com/townsean","twitter":"https://twitter.com/thecodingcouple","website":"https://www.thecodingcouple.com/","summary":"Ashley is a software engineer with 10+ years of professional experience.","education":[{"school":"University of Alabama in Huntsville","degree":"Bachelor of Science","major":"Computer Science","minor":"Mathematics","start":"August 2005","end":"December 2009"}],"experience":[{"company":"COLSA Corporation","roles":[{"job":"Software Engineer 3","start":"December 2016","end":"Present","tasks":["My work experience at COLSA as a software engineer"]}]},{"company":"SAIC","roles":[{"job":"Software Engineer","start":"January 2010","end":"December 2016","tasks":["Developed an analysis and visualization tool for helicopter pilots, safety and training officers.","Worked on a development team using the Scrum process.","Created a web interface in Angular 2 for interacting with a rules engine.","Refactored a tightly coupled data layer to use the repository pattern making the software more maintainable and unit testable.","Wrote a RESTful API for an existing backend using ASP.NET Web API.","Refactored a WinForms application into a WPF application with a a more maintainable design.","Developed rich user interfaces using WPF, C# and the Prism framework.","Crafted user interfaces for aircraft flight visualization and analysis tools.","Applied the Model-View-ViewModel (MVVM) design pattern to create more maintainable applications.","Created 3D tool for locating tracked parts on helicopters using the Microsoft\'s XNA game framework."]}]},{"company":"COLSA Corporation","roles":[{"job":"Computer Operator (Intern)","start":"August 2007","end":"December 2009","tasks":["Hired as an intern.","Developed dashboard software for a high altitude test-bed lab framework and payload flight computer.","Worked on a development team using the Scrum process.","Analyzed software requirements.","Developed Windows and Linux software using C#, C++, and Python.","Maintained and upgraded user interface for monitoring the flight computer status in C# and IronPython.","Developed web-based user interface for monitoring payload status in ASP.NET Web Forms."]}]}],"skills":[{"name":"JavaScript","category":"Languages","image_url":"js.png","proficiency_level":".65"},{"name":"TypeScript","category":"Languages","image_url":"typescript.png","proficiency_level":".65"},{"name":"Python","category":"Languages","image_url":"python.png","proficiency_level":".6"},{"name":"C#","category":"Languages","image_url":"csharp.png","proficiency_level":".75"},{"name":"HTML","category":"Languages","image_url":"html.png","proficiency_level":".7"},{"name":"CSS","category":"Languages","image_url":"css.png","proficiency_level":".5"},{"name":"Arduino","category":"Languages","image_url":"arduino.jpg","proficiency_level":".3"},{"name":"Phaser","category":"Frameworks and Libraries","image_url":"phaser.png","proficiency_level":".3"},{"name":"MySQL","category":"Databases","image_url":"mysql.png","proficiency_level":".5"},{"name":"MSSQL","category":"Databases","image_url":"database.jpg","proficiency_level":".5"},{"name":"MongoDB","category":"Databases","image_url":"mongodb.png","proficiency_level":".4"},{"name":"Vue.js","category":"Frameworks and Libraries","image_url":"vuejs.png","proficiency_level":".55"},{"name":"Angular","category":"Frameworks and Libraries","image_url":"angular.png","proficiency_level":".6"},{"name":"Aurelia","category":"Frameworks and Libraries","image_url":"aurelia.svg","proficiency_level":".3"},{"name":".NET Core","category":"Frameworks and Libraries","image_url":"netcore.png","proficiency_level":".79"},{"name":"ASP.NET Core","category":"Frameworks and Libraries","image_url":"asp.netcore.jpg","proficiency_level":".60"},{"name":"Entity Framework Core","category":"Frameworks and Libraries","image_url":"entityframeworkcore.png","proficiency_level":".5"},{"name":".NET Framework","category":"Frameworks and Libraries","image_url":"netframework.png","proficiency_level":".79"},{"name":"Git","category":"Development Tools","image_url":"git.png","proficiency_level":".7"},{"name":"Visual Studio Code","category":"Development Tools","image_url":"vscode.png","proficiency_level":".79"},{"name":"Visual Studio","category":"Development Tools","image_url":"visualstudio.png","proficiency_level":".79"},{"name":"SketchUp","category":"Other Software","image_url":"sketchup.png","proficiency_level":".4"},{"name":"GIMP","category":"Other Software","image_url":"gimp.jpg","proficiency_level":".4"},{"name":"Inkscape","category":"Other Software","image_url":"inkscape.png","proficiency_level":".3"},{"name":"Bitbucket","category":"Development Tools","image_url":"bitbucket.png","proficiency_level":".75"},{"name":"Jira","category":"Development Tools","image_url":"jira.jpg","proficiency_level":".75"},{"name":"Confluence","category":"Development Tools","image_url":"confluence.jpg","proficiency_level":".75"},{"name":"CircuitPython","category":"Languages","image_url":"circuitpython.png","proficiency_level":".3"}],"interests":"In her spare time, Ashley enjoys woodworking (<a href=\'https://www.ashleygrenon.com/\'>Handmade with Ashley</a>), 3D printing, tabletop gaming (<a href=\'http://www.cardboardbits.com/\'>Cardboard Bits</a>), binge watching Korean dramas and spending time with her family.","projects":[{"name":"Canvas Pixel Color Counter","start":"October 2019","description":"Canvas Pixel Color Counter is a vanilla JS web application that accepts an image file (selected by the user) and displays the total number of pixels per a unique color.","source":"https://github.com/townsean/canvas-pixel-color-counter","website":"https://townsean.github.io/canvas-pixel-color-counter/","preview_url":"canvas-pixel-color-counter.gif"},{"name":"Pixel Color Counter","start":"October 2019","description":"Pixel Color Counter is a Python script that sums the total number of pixels per a unique color.","source":"https://github.com/townsean/pixel-color-count","website":"https://www.thecodingcouple.com/counting-pixels-by-color-in-python-with-pillow-a-pil-fork/","preview_url":"python-pixel-color-count.png"},{"name":"Resume Website","start":"April 2019","description":"An resume/portfolio web application built with Vue.js.","source":"https://github.com/townsean/portfolio","website":"https://townsean.github.io/portfolio/","preview_url":"portfolio-sample.gif"},{"name":"Moody","start":"May 2016","description":"Moody is an Angular web app that displays the emotional polarity of a Twitter newsfeed. (An Angular Attack 48-Hour Hackathon entry)","source":"https://github.com/thecodingcouple/angularattack2016-thecodingcouple","website":"https://www.thecodingcouple.com/surviving-hackathon-angular-attack-2016/","preview_url":"angularattack2016.gif"},{"name":"Ice Wizard","start":"April 2016","description":"Ice Wizard is a 2D web game where players control a wizard gliding on ice and dodging enemies. (A Ludem Dare 35 game jam entry)","source":"https://github.com/thecodingcouple/ludum-dare-35","website":"http://thecodingcouple.github.io/ludum-dare-35/","preview_url":"ice_wizard.gif"},{"name":"Bingo Card Generator","start":"April 2016","description":"An Aurelia web app that generates themed bingo cards.","source":"https://github.com/townsean/bingo-card-generator","website":"http://townsean.github.io/bingo-card-generator/","preview_url":"bingo-card-generator.gif"},{"name":"Image Watermarker","start":"August 2015","description":"Image Watermaker is a Python script gives users the ability to watermark image files in bulk.","source":"https://github.com/townsean/image-marker","website":"https://www.thecodingcouple.com/watermark-images-python-pillow-pil/","preview_url":"image-marker-output.png"}]}')},c8d9:function(e,t,a){},ea4d:function(e,t,a){"use strict";var r=a("f978"),n=a.n(r);n.a},f978:function(e,t,a){}});
//# sourceMappingURL=app.46fe6e9b.js.map