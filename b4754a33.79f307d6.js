(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(118)),o={title:"Permission"},c={unversionedId:"metadata/object/permission",id:"metadata/object/permission",isDocsHomePage:!1,title:"Permission",description:"Represents a permission that grants access to a custom feature. This type extends the Metadata metadata type and inherits its name field.",source:"@site/docs/metadata/object/permission.md",slug:"/metadata/object/permission",permalink:"/docs/metadata/object/permission",editUrl:"https://github.com/steedos/steedos-platform/edit/master/docs/metadata/object/permission.md",version:"current",sidebar:"someSidebar",previous:{title:"Button",permalink:"/docs/metadata/object/button"},next:{title:"Validation Rule",permalink:"/docs/metadata/object/validation_rule"}},s=[{value:"Declarative Metadata File Suffix and Directory Location",id:"declarative-metadata-file-suffix-and-directory-location",children:[]},{value:"Declarative Metadata Sample Definition",id:"declarative-metadata-sample-definition",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Represents a permission that grants access to a custom feature. This type extends the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../metadata"}),"Metadata")," metadata type and inherits its name field."),Object(i.b)("h2",{id:"declarative-metadata-file-suffix-and-directory-location"},"Declarative Metadata File Suffix and Directory Location"),Object(i.b)("p",null,"Permissions components have the suffix ",Object(i.b)("inlineCode",{parentName:"p"},".permission")," and are stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"permissions")," folder as additional part of a CustomObject component. The component can represent a custom object or a standard object, such as an account."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"my-app\n\u251c\u2500\u2500 steedos-app/main/default\n\u251c\u2500\u2500 ...\n\u2502\xa0\xa0 \u2514\u2500\u2500 objects\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0 \u2514\u2500\u2500 accounts\n// highlight-start\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \u2514\u2500\u2500 permissions\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \u2514\u2500\u2500 contract_manager.permission.yml\n// highlight-end\n\u251c\u2500\u2500 ...\n")),Object(i.b)("h2",{id:"declarative-metadata-sample-definition"},"Declarative Metadata Sample Definition"),Object(i.b)("p",null,"A sample yml definition of a list view in a custom object is shown below."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title="my-app/steedos-app/main/default/objects/accounts/permissions/contract_manager.permission.yml"',title:'"my-app/steedos-app/main/default/objects/accounts/permissions/contract_manager.permission.yml"'}),"allowCreate: true\nallowEdit: true\nallowDelete: true\nallowRead: true\nmodifyAllRecords: true\nviewAllRecords: true\n")))}p.isMDXComponent=!0},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return a?r.a.createElement(f,c(c({ref:t},l),{},{components:a})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);