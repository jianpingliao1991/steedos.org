(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(118)),o={title:"ListView"},c={unversionedId:"metadata/object/listview",id:"metadata/object/listview",isDocsHomePage:!1,title:"ListView",description:"ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.",source:"@site/docs/metadata/object/listview.md",slug:"/metadata/object/listview",permalink:"/docs/metadata/object/listview",editUrl:"https://github.com/steedos/steedos-platform/edit/master/docs/metadata/object/listview.md",version:"current",sidebar:"someSidebar",previous:{title:"Field",permalink:"/docs/metadata/object/field"},next:{title:"Button",permalink:"/docs/metadata/object/button"}},s=[{value:"Declarative Metadata File Suffix and Directory Location",id:"declarative-metadata-file-suffix-and-directory-location",children:[]},{value:"Declarative Metadata Sample Definition",id:"declarative-metadata-sample-definition",children:[]}],l={rightToc:s};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.\nThis type extends the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../metadata"}),"Metadata")," metadata type and inherits its name field. See \u201cCreate a Custom List View in Steedos\u201d in Steedos Help."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"List views with the Visible only to me Restrict Visibility option are not accessible in Metadata API. Each of these list views is associated with a particular user."))),Object(r.b)("h2",{id:"declarative-metadata-file-suffix-and-directory-location"},"Declarative Metadata File Suffix and Directory Location"),Object(r.b)("p",null,"ListViews components have the suffix ",Object(r.b)("inlineCode",{parentName:"p"},".listView")," and are stored in the ",Object(r.b)("inlineCode",{parentName:"p"},"listviews")," folder as additional part of a CustomObject component. The component can represent a custom object or a standard object, such as an account."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"my-app\n\u251c\u2500\u2500 steedos-app/main/default\n\u251c\u2500\u2500 ...\n\u2502\xa0\xa0 \u2514\u2500\u2500 objects\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0 \u2514\u2500\u2500 accounts\n// highlight-start\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \u2514\u2500\u2500 listviews\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \u2514\u2500\u2500 mine.listView.yml\n// highlight-end\n\u251c\u2500\u2500 ...\n")),Object(r.b)("h2",{id:"declarative-metadata-sample-definition"},"Declarative Metadata Sample Definition"),Object(r.b)("p",null,"A sample yml definition of a list view in a custom object is shown below."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title="my-app/steedos-app/main/default/objects/accounts/listviews/mine.listView.yml"',title:'"my-app/steedos-app/main/default/objects/accounts/listviews/mine.listView.yml"'}),"name: my_customers\nlabel: My Customers\ncolumns:\n  - field: name\n    width: 300\n    wrap: true\n  - field: type\n    width: 120\n  - field: rating\n    width: 120\n  - field: billing_address\n    width: 400\n  - field: shipping_address\n    width: 400\n  - field: owner\n    width: 120\nfilter_scope: mine\nfilter_fields:\n  - type\n  - industry\n  - rating\n  - name\n")))}d.isMDXComponent=!0},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,b=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return a?i.a.createElement(b,c(c({ref:t},l),{},{components:a})):i.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);