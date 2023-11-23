(window.webpackJsonp=window.webpackJsonp||[]).push([[194,11],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),constants_window=__webpack_require__("./src/constants/window.ts"),components_VContentPagevue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VContentPage",setup:function setup(){return{skipToContentTargetId:constants_window.b}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_c6o4jnezmjuztgvwsjmw37opv4/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("main",{staticClass:"flex-grow pt-5 md:pt-10",attrs:{id:this.skipToContentTargetId,tabindex:"-1",dir:"ltr"}},[_c("div",{staticClass:"prose-h1:text-bold prose prose-sm mx-auto mb-10 max-w-none px-6 md:prose-base prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-semibold md:max-w-4xl md:prose-h1:mb-10 md:prose-h2:mt-10 md:prose-h3:mt-10 lg:mb-30 lg:px-0 lg:prose-headings:text-3xl lg:prose-h1:text-6xl xl:max-w-5xl"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/search-help.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var slicedToArray=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),runtime=(__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_j25mhj5aambesoof37dkoeldru/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VLink=__webpack_require__("./src/components/VLink.vue"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),operators={and:{symbol:"+",query:"dog+cat"},not:{symbol:"-",query:"dog-cat"},or:{symbol:"|",query:"dog|cat"},prefix:{symbol:"*",query:"net*"},precedence:{symbol:"()",query:"dogs+(corgis|labrador)"},fuzziness:{symbol:"~",query:"theatre~1",reference:"https://en.wikipedia.org/wiki/Levenshtein_distance"}},pages_search_helpvue_type_script_lang_ts_=Object(runtime.b)({name:"VSearchHelpPage",components:{VLink:VLink.default,VContentPage:VContentPage.default},layout:"content-layout",setup:function setup(){var i18n=Object(use_i18n.a)(),searchStore=Object(search.b)();Object(runtime.j)({title:"".concat(i18n.t("searchGuide.title",{openverse:"Openverse"})," | Openverse"),meta:[{hid:"robots",name:"robots",content:"all"}]});return{pathFromQuery:function pathFromQuery(queryString){return searchStore.getSearchPath({query:{q:queryString}})},operators:operators}},head:{}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_c6o4jnezmjuztgvwsjmw37opv4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_search_helpvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VContentPage",[_c("h1",[_vm._v(_vm._s(_vm.$t("searchGuide.title",{openverse:"Openverse"})))]),_vm._v(" "),_c("p",[_vm._v(_vm._s(_vm.$t("searchGuide.intro")))]),_vm._v(" "),_c("h2",[_vm._v(_vm._s(_vm.$t("searchGuide.exact.title")))]),_vm._v(" "),_c("i18n",{attrs:{path:"searchGuide.exact.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("searchGuide.exact.ariaLabel"),href:_vm.pathFromQuery('"Claude Monet"')}},[_c("em",[_vm._v(_vm._s(_vm.$t("searchGuide.exact.claudeMonet")))])])]},proxy:!0}])}),_vm._v(" "),_c("h2",[_vm._v(_vm._s(_vm.$t("searchGuide.combine.title")))]),_vm._v(" "),_c("p",[_vm._v(_vm._s(_vm.$t("searchGuide.combine.description")))]),_vm._v(" "),_c("ul",{staticClass:"not-prose list-inside list-disc marker:text-dark-charcoal-20"},_vm._l(Object.entries(_vm.operators),(function(_ref){var _ref2=Object(slicedToArray.a)(_ref,2),name=_ref2[0],operator=_ref2[1];return _c("i18n",{key:name,attrs:{path:"searchGuide.combine.".concat(name),tag:"li"},scopedSlots:_vm._u([{key:"symbol",fn:function fn(){return[_c("code",{attrs:{"aria-label":_vm.$t("searchGuide.combine.ariaLabels.".concat(name)).toString()}},[_vm._v(_vm._s(operator.symbol))])]},proxy:!0}],null,!0)})})),1),_vm._v(" "),_c("i18n",{attrs:{path:"searchGuide.example.and.description",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("searchGuide.example.and.ariaLabel").toString(),href:_vm.pathFromQuery("dog+cat")}},[_c("em",[_vm._v(_vm._s(_vm.$t("searchGuide.example.and.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"searchGuide.example.or.description",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("searchGuide.example.or.ariaLabel"),href:_vm.pathFromQuery("dog|cat")}},[_c("em",[_vm._v(_vm._s(_vm.$t("searchGuide.example.or.example").toString()))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mt-4",attrs:{path:"searchGuide.example.negate.description",tag:"p"},scopedSlots:_vm._u([{key:"operator",fn:function fn(){return[_c("em",{attrs:{"aria-label":_vm.$t("searchGuide.example.negate.operatorAriaLabel").toString()}},[_vm._v("- "+_vm._s(_vm.$t("searchGuide.example.negate.operatorName").toString()))])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mb-4",attrs:{path:"searchGuide.example.negate.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("searchGuide.example.negate.ariaLabel"),href:_vm.pathFromQuery("dog -pug")}},[_c("em",[_vm._v(_vm._s(_vm.$t("searchGuide.example.negate.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mt-4",attrs:{path:"searchGuide.example.prefix.description",tag:"p"},scopedSlots:_vm._u([{key:"operator",fn:function fn(){return[_c("em",{attrs:{"aria-label":_vm.$t("searchGuide.example.prefix.ariaLabel").toString()}},[_vm._v("* "+_vm._s(_vm.$t("searchGuide.example.prefix.operatorName").toString()))])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mb-4",attrs:{path:"searchGuide.example.prefix.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("searchGuide.example.prefix.ariaLabel"),href:_vm.pathFromQuery("net*")}},[_c("em",[_vm._v(_vm._s(_vm.$t("searchGuide.example.prefix.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"searchGuide.example.precedence.description",tag:"p"},scopedSlots:_vm._u([{key:"highlight",fn:function fn(){return[_c("em",[_vm._v("( and )")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mb-4",attrs:{path:"searchGuide.example.precedence.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("searchGuide.example.precedence.ariaLabel"),href:_vm.pathFromQuery("dog (corgis | labrador)")}},[_c("em",[_vm._v(_vm._s(_vm.$t("searchGuide.example.precedence.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"searchGuide.example.fuzziness.description",tag:"p"},scopedSlots:_vm._u([{key:"highlight",fn:function fn(){return[_c("em",{attrs:{"aria-label":"tilde N"}},[_vm._v("~N")])]},proxy:!0},{key:"link",fn:function fn(){return[_c("VLink",{attrs:{href:"https://en.wikipedia.org/wiki/Levenshtein_distance"}},[_vm._v("\n        "+_vm._s(_vm.$t("searchGuide.example.fuzziness.linkText"))+"\n      ")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"searchGuide.example.fuzziness.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("searchGuide.example.fuzziness.ariaLabel"),href:_vm.pathFromQuery("theatre~1")}},[_c("em",[_vm._v(_vm._s(_vm.$t("searchGuide.example.fuzziness.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__("./src/components/VLink.vue").default,VContentPage:__webpack_require__("./src/components/VContentPage.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSearchHelpPage",exportName:"default",description:"",tags:{}}}}]);