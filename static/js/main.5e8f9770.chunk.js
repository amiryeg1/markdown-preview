(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{13:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);n(0);var i=n(3),r=n.n(i),c=(n(13),n(2)),s=n(7),a=n.n(s),o=(n(20),n(1)),d=function(){a.a.setOptions({breaks:!0,gfm:!0});var e=Object(c.c)((function(e){return e.inputText.value}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"result",children:"result"}),Object(o.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:a()(e)}})]})},u="\n# Sample Markdown Previewer \n----\n## h2 Heading\n".concat("`this is an inline code`","\n\n---\n","```js","\n","this is a code block","\n","```","\n---\nour list item: \n1. first item\n2. second item\n\n> here is a block quote.\n>\n>> nested block quote.\n\nit also supports images!\n\n![nodejs image](https://res.cloudinary.com/practicaldev/image/fetch/s--_pyWGSyD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/w9u60357jk4ozdho7urq.jpg)\n\n\nText attributes *italic*, **bold**, ","`monospace`",", ~~strikethrough~~ .\n\n---\n\n#### Created by:\n> [Amir Yeganeh](https://github.com/amiryeg1)\n<br>\n"),l=n(4),j={value:u},h=Object(l.b)({name:"inputText",initialState:j,reducers:{setText:function(e,t){e.value=t.payload}}}),b=h.actions.setText,p=h.reducer,m=(n(22),function(){var e=Object(c.b)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/marked/marked.min.js"}),Object(o.jsx)("h2",{style:{textAlign:"center"},children:"enter markdown"}),Object(o.jsx)("textarea",{id:"editor",onChange:function(t){e(b(t.target.value))},typeof:"text",spellCheck:"false",children:u})]})});n(23);var x=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:" markdown previewer"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(m,{}),Object(o.jsx)(d,{})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))},v=Object(l.a)({reducer:{inputText:p}});r.a.render(Object(o.jsx)(c.a,{store:v,children:Object(o.jsx)(x,{})}),document.getElementById("root")),g()}},[[24,1,2]]]);
//# sourceMappingURL=main.5e8f9770.chunk.js.map