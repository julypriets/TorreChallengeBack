(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,r){"use strict";var o=r(1),n=r(160),c=r.n(n);o.default.component("v-date-picker",c.a)},105:function(e,t,r){"use strict";t.a=function(e){e.$axios.setBaseURL("'https://torre-challenge.herokuapp.com/api/'")}},144:function(e,t,r){var content=r(212);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("2743b10a",content,!0,{sourceMap:!1})},162:function(e,t,r){"use strict";var o={methods:{logout:function(){this.$cookies.remove("user"),this.$store.dispatch("auth/setAuthenticated",!1),this.$router.push("/")}}},n=r(22),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"navigation"},[r("NuxtLink",{staticClass:"navigation__wrap",attrs:{to:"/"}},[r("span",{staticClass:"material-icons navigation__menu"},[e._v("\n        menu\n      ")]),e._v(" "),r("div",{staticClass:"navigation__logo"},[e._v("torre")])]),e._v(" "),r("div",{staticClass:"navigation__wrap"},[r("NuxtLink",{staticClass:"navigation__link",attrs:{to:"learning"}},[r("span",{staticClass:"material-icons navigation__link-icon"},[e._v("\n          psychology\n        ")]),e._v(" "),r("p",{staticClass:"navigation__link-text"},[e._v("Learning")])]),e._v(" "),r("NuxtLink",{staticClass:"navigation__link",attrs:{to:"/showcase"}},[r("span",{staticClass:"material-icons navigation__link-icon"},[e._v("\n          stars\n        ")]),e._v(" "),r("p",{staticClass:"navigation__link-text"},[e._v("Showcase")])]),e._v(" "),r("div",{staticClass:"navigation__link",on:{click:e.logout}},[r("span",{staticClass:"material-icons navigation__link-icon"},[e._v("\n          exit_to_app\n        ")]),e._v(" "),r("p",{staticClass:"navigation__link-text"},[e._v("Exit")])])],1)],1),e._v(" "),r("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},163:function(e,t,r){"use strict";r(211);var o=r(22),component=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[this._m(0),this._v(" "),t("Nuxt")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"navigation"},[t("div",{staticClass:"navigation__wrap"},[t("div",{staticClass:"navigation__logo"},[this._v("torre")])])])}],!1,null,"24a96465",null);t.a=component.exports},165:function(e,t,r){r(166),e.exports=r(167)},184:function(e,t,r){"use strict";r.r(t),t.default=function(e){var t=e.store,r=e.redirect;if(!1===t.state.authenticated)return r("/")}},209:function(e,t,r){var content=r(210);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(68).default)("199cdc7e",content,!0,{sourceMap:!1})},210:function(e,t,r){(t=r(67)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap);"]),t.push([e.i,'*,:after,:before{margin:0;padding:0;box-sizing:inherit}:focus{outline:none}body,html{height:100%}html{font-size:62.5%!important}body{box-sizing:border-box}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background-color:transparent;border-radius:10px}::-webkit-scrollbar-thumb{border-radius:10px;background-color:#414346}.nuxt-link-active,.nuxt-link-exact-active{color:#e9eaea;text-decoration:none}.nuxt-link-prefetched,a{color:#b4b4b6}a{text-decoration:none}.fade-enter-active,.fade-leave-active{transition:opacity .7s}.fade-enter,.fade-leave-to{opacity:0}body{font-family:"Noto Sans JP",sans-serif;font-size:1.6rem;color:#b4b4b6}.heading-primary{font-size:4rem;color:#e9eaea;margin-bottom:2rem}.heading-secondary{color:#e9eaea;font-size:2.4rem;font-weight:500}.heading-tertiary{color:#e9eaea;font-size:2rem;font-weight:500;margin-bottom:2rem}.u-margin-top-sm{margin-top:1.5rem!important}.btn-add{display:inline-flex;align-items:center;cursor:pointer}.btn-add__icon{color:#cddc39;margin-top:.5rem;margin-left:.6rem}.btn-standard,.btn-standard--disabled,.btn-standard--inverted{color:#cddc39;border:none;background-color:transparent;font-family:inherit;font-size:1.5rem;cursor:pointer;transition:all .3s;padding:.6rem 1.5rem .8rem}.btn-standard--disabled:hover,.btn-standard--inverted:hover,.btn-standard:hover{background-color:rgba(65,67,70,.9)}.btn-standard--disabled{color:rgba(205,220,57,.5);cursor:not-allowed}.btn-standard--disabled:hover{background-color:#27292d}.btn-standard--inverted{background-color:#cddc39;color:#27292d}.btn-standard--inverted:hover{background-color:rgba(205,220,57,.8)}.card__bottom{display:flex;justify-content:flex-end;padding:0 0 1.5rem}.course-card{display:flex;height:10.5rem;width:calc(50% - 3rem);min-width:calc(50% - 3rem);position:relative;margin-right:2rem;margin-bottom:1.5rem}.course-card__img{background-size:cover;background-color:#27292d;height:10.5rem;width:12rem;background-position:50%}.course-card__content{background-color:#27292d;padding:.6rem 3rem .5rem 1.5rem;width:calc(100% - 8rem)}.course-card__options{color:#b4b4b6;font-weight:700;position:absolute;right:1rem;top:-.2rem;margin:0;cursor:pointer}.course-card__title{font-size:1.4rem;font-weight:500;color:#cddc39;margin-bottom:.5rem;text-overflow:ellipsis;overflow:hidden}.course-card__subtitle{font-size:1.3rem;margin-bottom:.6rem}.course-card__date{font-size:1.2rem;display:flex}.course-card__popover{z-index:2;background-color:#27292d;box-shadow:0 4px 4px rgba(0,0,0,.25);position:absolute;top:-.2rem;right:-8rem}.course-card__popover-item{padding:.6rem 2rem;transition:all .3s;font-size:1.4rem;cursor:pointer}.course-card__popover-item:hover{background-color:rgba(233,234,234,.1)}.course-card__list-bottom{font-size:1.4rem;color:#cddc39;font-weight:500}.job-card{background-color:#27292d;width:32rem;height:31rem}.job-card__img{height:14rem;width:100%;-o-object-fit:cover;object-fit:cover;background-color:#414346}.job-card__title{font-weight:500;color:#e9eaea;margin-bottom:1rem}.job-card__content{padding:1rem 2rem}.job-card__item,.job-card__item--icon{font-size:1.4rem;margin-bottom:.5rem}.job-card__item--icon{display:flex;align-items:center}.job-card__item--icon span{font-size:1.5rem;margin-right:.4rem}.job-card__button{margin-right:3rem}.suggested-course-card{min-width:25rem;width:25rem;box-shadow:0 4px 4px rgba(0,0,0,.25);background-color:#27292d;position:relative;margin-right:2rem}.suggested-course-card__img{height:12rem;width:100%;background-color:#414346;-o-object-fit:cover;object-fit:cover}.suggested-course-card__img--sm{height:3.5rem;width:8rem;background-color:#fff;position:absolute;right:0;top:42%;box-shadow:0 4px 4px rgba(0,0,0,.25)}.suggested-course-card__content{padding:1.8rem 1.8rem 2rem}.suggested-course-card__title{color:#e9eaea;font-size:1.5rem;text-overflow:ellipsis;overflow:hidden}.suggested-course-card__subtitle{font-size:1.3rem}.suggested-course-card__bottom{position:absolute;bottom:0;right:1rem}.overview-card{height:20rem;min-width:25rem;width:25rem;margin-right:2rem;display:flex;flex-direction:column;justify-content:flex-end;padding:1rem 2rem;background-image:linear-gradient(0deg,#27292d 20%,rgba(39,41,45,.5) 60%,transparent),url(https://www.linuxadictos.com/wp-content/uploads/kubernetes-logo.jpg);background-size:cover;background-position:50%}.overview-card__title{font-size:1.4rem;color:#e9eaea}.overview-card__subtitle{font-size:1.3rem;color:#e9eaea}.overview-card__text{font-size:1.2rem;color:#cddc39}.showcase-card,.showcase-card--selected{background-color:#27292d;width:90%;display:flex;justify-content:space-between;padding:.8rem 2rem 1rem;margin-bottom:1rem;cursor:pointer;transition:all .3s;height:6rem}.showcase-card--selected,.showcase-card--selected:hover,.showcase-card:hover{background-color:#414346}.showcase-card__title{color:#e9eaea;font-weight:500}.showcase-card__date{font-size:1.3rem}.showcase-card__icon{color:#cddc39}.form{max-width:80rem;margin:0 auto;padding:0 5rem}.form__title{font-weight:700;font-family:inherit;border:none;background-color:transparent;font-size:2rem;text-align:center;color:#e9eaea;margin:.5rem 0 1rem}.form__title::-moz-placeholder{color:rgba(233,234,234,.8);border:2px solid red}.form__title:-ms-input-placeholder{color:rgba(233,234,234,.8);border:2px solid red}.form__title::placeholder{color:rgba(233,234,234,.8);border:2px solid red}.form__wrap{display:flex;justify-content:space-between;flex-wrap:wrap}.form__wrap input{max-width:24rem}.form__date-input,.form__date-input--first,.form__file-upload,.form__input{background-color:#414346;border:none;font-family:inherit;font-size:1.4rem;color:#e9eaea;padding:.5rem 1.5rem .6rem;width:100%;margin-top:1.5rem}.form__date{position:relative}.form__date-input,.form__date-input--first{max-width:24rem;padding-left:4rem;margin-top:0}.form__date-input--first{margin-right:2rem}.form__date-button{background-color:transparent;border:none;display:flex;justify-content:center;align-items:center;position:absolute;left:.5rem;top:50%;transform:translateY(-50%)}.form__date-icon{font-size:2rem;color:#b4b4b6}.form__checkbox{margin-top:.5rem;padding-left:.2rem;font-size:1.4rem;display:flex;align-items:center}.form__checkbox-label{margin-left:.6rem}.form__warning{display:flex;align-items:center;font-size:1rem;margin-top:.5rem}.form__warning-icon{height:1.5rem;width:1.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:#d50000;margin-right:.5rem}.form__warning-text{color:#e9eaea}.form__file-input{display:none}.form__file-upload{width:100%;display:flex;align-items:center}.form__file-upload-btn{background-color:#27292d;color:#cddc39;border:none;padding:.6rem 2rem;cursor:pointer;transition:all .3s}.form__file-upload-btn:hover{background-color:rgba(39,41,45,.7)}.form__file-upload-name{margin-left:2rem}.modal{position:fixed;display:flex;align-items:center;justify-content:center}.modal,.modal__mask{top:0;left:0;width:100vw;height:100vh;z-index:10}.modal__mask{background:rgba(0,0,0,.5);position:absolute}.modal__wrapper{position:relative;width:50%;min-height:35vmin;background:#27292d;color:inherit;display:flex;border-radius:.2em;box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);overflow-x:hidden;z-index:11}.modal__container{flex:1;display:flex;flex-direction:column;z-index:10}.modal__header{display:flex;justify-content:center;padding:1em;z-index:10}.modal__body{flex:1;width:100%;z-index:10}.modal__footer{padding:2rem 3rem 1rem;text-align:right;z-index:10}.modal__x{cursor:pointer;color:inherit;position:absolute;right:2rem;top:1rem;font-size:2rem}.modal [v-cloak]{display:none!important}.container{width:100%}.container,.content{height:100%;overflow-x:hidden}.content{background-color:#1c1e21;min-height:100vh;overflow-y:auto;padding-top:5rem}.navigation{position:fixed;background-color:#27292d;height:5.6rem;width:100%;z-index:10;justify-content:space-between;padding:0 2rem}.navigation,.navigation__wrap{display:flex;align-items:center}.navigation__wrap{height:100%}.navigation__menu{margin-right:4rem;color:#b4b4b6}.navigation__logo{font-size:2.5rem;font-weight:500;color:#e9eaea}.navigation__link{text-align:center;padding:0 2rem;height:100%;cursor:pointer;display:flex;justify-content:center;flex-direction:column;transition:all .3s}.navigation__link:hover{background-color:rgba(28,30,33,.5)}.navigation__link-icon{font-size:2.4rem;margin-bottom:.4rem}.navigation__link-text{font-size:1rem}.home{padding-left:12rem;padding-right:12rem}.home__wrap{margin-top:5rem;display:flex;justify-content:space-between;margin-bottom:10rem}.home__header-text{max-width:80%;margin-bottom:2rem}.home__login-input{max-width:32rem;padding-top:.8rem;padding-bottom:.8rem}.home__login-btn-wrap{width:32rem;display:flex;margin-top:.8rem;justify-content:flex-end}.home__login-btn-wrap button{font-weight:500}.home__show{position:relative}.home__show,.home__show-video{min-height:30rem;min-width:54.5rem;margin-right:3rem;margin-top:2rem}.home__show-video{background-color:#27292d;position:absolute;left:0;padding:2rem 3rem}.home__show-deco,.home__show-deco--2{height:20rem;width:20rem;background-color:#cddc39;position:absolute;top:-1.5rem;right:-1.5rem}.home__show-deco--2{left:-1.5rem;bottom:-1.5rem;top:auto}.home__features{max-width:30%;margin-right:6rem;margin-top:2rem}.home__features-list{margin-top:2rem}.home__feature{display:flex;align-items:center;margin-bottom:1.5rem}.home__feature-icon{font-size:4rem;margin-right:2rem}.home__feature-text{display:block;font-size:1.5rem}.learning{display:flex}.learning__left{width:62%;padding:3rem 1rem 0 8rem;margin-bottom:5rem;height:-webkit-max-content;height:-moz-max-content;height:max-content}.learning__quote{color:#b4b4b6;max-width:80%}.learning__quote-author{font-size:1.4rem;margin-top:1rem}.learning__courses{margin-top:4rem}.learning__courses-cards{display:flex;flex-wrap:wrap}.learning__section{margin-top:2rem}.learning__jobs{margin-top:5rem}.learning__jobs-cards{margin-top:3rem}.learning__right{width:38%;height:-webkit-max-content;height:-moz-max-content;height:max-content;align-self:stretch;box-shadow:-4px 4px 4px rgba(0,0,0,.25)}.learning__card{display:flex;align-items:center;padding:1rem 6rem 1rem 3rem;box-shadow:0 4px 4px rgba(0,0,0,.25)}.learning__card-img{background-position:50%;background-size:cover;height:8rem;width:8rem;border-radius:50%;background-color:#414346;margin-right:2rem;-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%)}.learning__card-content{width:calc(100% - 8rem)}.learning__card-header-wrap{margin-top:1.6rem;display:flex;justify-content:space-between}.learning__card-next-level{color:#e9eaea;font-size:1.4rem}.learning__card-next-level--primary{font-size:1.4rem;color:#cddc39;font-weight:500}.learning__card-level{font-size:1.3rem;margin-right:1rem}.learning__card-level-wrap{display:flex;align-items:center;position:relative}.learning__card-level-wrap span{font-size:1.8rem;color:#414346}.learning__card-level-wrap:hover .learning__card-level-info{display:block}.learning__card-level-info{position:absolute;right:-20rem;top:-1rem;background-color:rgba(39,41,45,.9);font-size:1.2rem;width:22rem;padding:1rem 1.5rem 1.5rem;display:none}.learning__card-progress{background-color:#27292d;height:1rem;width:60%;margin-top:1.5rem}.learning__card-progress-bar{background-color:#cddc39;height:100%;width:20%}.learning__card-hours{font-size:1.2rem;margin:1rem 0}.learning__suggested{padding:3rem 4rem;box-shadow:0 4px 4px rgba(0,0,0,.25)}.learning__overview-subtitle,.learning__suggested-subtitle{font-size:1.4rem;margin-top:1rem}.learning__suggested-cards{margin-top:2.5rem;display:flex;overflow-x:hidden}.learning__suggested-cards:hover{overflow-x:auto}.learning__overview{padding:3rem 4rem}.learning__overview-cards{margin-top:2rem;display:flex;overflow-x:hidden}.learning__overview-cards:hover{overflow-x:auto}.showcase{padding:4rem;margin-top:3rem}.showcase__container{display:flex;margin-top:5rem}.showcase__left{width:30%;margin-top:2rem;overflow-y:auto;max-height:100%}.showcase__right{background-color:#27292d;width:70%;padding:2.5rem 4rem}.showcase__right-title{color:#e9eaea;font-size:2.8rem}.showcase__right-date{font-size:1.3rem}.showcase__right-description{margin-top:2rem}.showcase__right-pictures{margin-top:2rem;display:flex}.showcase__right-big-pic{height:30rem;width:50rem;background-color:#414346}.showcase__right-pic{height:6.8rem;width:15rem;margin-left:2rem;margin-bottom:1rem;background-color:#414346}.showcase__projects{margin-top:2rem}',""]),e.exports=t},211:function(e,t,r){"use strict";r(144)},212:function(e,t,r){(t=r(67)(!1)).push([e.i,".navigation__logo[data-v-24a96465]{margin-left:5rem}",""]),e.exports=t},213:function(e,t,r){"use strict";r.r(t),t.default={state:function(){return{url:"localhostURL"}},mutations:{},getters:{url:function(e){return e.url}}}},214:function(e,t,r){"use strict";r.r(t),t.default={setAuthenticated:function(e,t){(0,e.commit)("setAuthenticated",t)}}},215:function(e,t,r){"use strict";r.r(t),t.default={isAuthenticated:function(e){return e.authenticated}}},216:function(e,t,r){"use strict";r.r(t),t.default={setAuthenticated:function(e,t){e.authenticated=t}}},217:function(e,t,r){"use strict";r.r(t),t.default=function(){return{authenticated:!1}}},218:function(e,t,r){"use strict";r.r(t),t.default={addCourse:function(e,data){(0,e.commit)("addCourse",data)},addCourses:function(e,data){(0,e.commit)("addCourses",data)},setCourses:function(e,data){(0,e.commit)("setCourses",data)}}},219:function(e,t,r){"use strict";r.r(t);r(54);t.default={courses:function(e){return e.courses},currentCourses:function(e){return e.courses?e.courses.filter((function(e){return!0===e.current})):[]},completedCourses:function(e){return e.courses?e.courses.filter((function(e){return!1===e.current})):[]}}},220:function(e,t,r){"use strict";r.r(t);r(51);t.default={addCourse:function(e,data){e.courses.unshift(data)},addCourses:function(e,data){e.courses=data.concat(e.currentCourses)},setCourses:function(e,data){e.courses=data}}},221:function(e,t,r){"use strict";r.r(t),t.default=function(){return{courses:[]}}},222:function(e,t,r){"use strict";r.r(t),t.default={storeQuote:function(e,t){(0,e.commit)("storeQuote",t)}}},223:function(e,t,r){"use strict";r.r(t),t.default={getQuote:function(e){return e.quote}}},224:function(e,t,r){"use strict";r.r(t),t.default={storeQuote:function(e,t){e.quote=t}}},225:function(e,t,r){"use strict";r.r(t),t.default=function(){return{quote:{}}}}},[[165,5,1,6]]]);