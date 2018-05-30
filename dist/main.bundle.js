webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedDetailComponent = (function () {
    function FeedDetailComponent(_route, _router, _feedService) {
        this._route = _route;
        this._router = _router;
        this._feedService = _feedService;
    }
    FeedDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        var type = this._route.snapshot.url["0"].path;
        console.log(type);
        this._feedService.getSingle(type, id)
            .subscribe(function (data) { return _this.detail = data; }, function (error) { return _this.error = error; });
    };
    return FeedDetailComponent;
}());
FeedDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-feed-detail',
        template: __webpack_require__(178),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _c || Object])
], FeedDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/feed-detail.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedGuard = (function () {
    function FeedGuard(_router) {
        this._router = _router;
    }
    FeedGuard.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid feed Id');
            this._router.navigate(['/feed']);
            return false;
        }
        ;
        return true;
    };
    return FeedGuard;
}());
FeedGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], FeedGuard);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/feed-guard.service.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_variables_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FeedComponent = (function () {
    function FeedComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
    }
    //  toggleImage(): void {
    //    this.showImage = !this.showImage;
    //  }
    FeedComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        this._globalService.setLoading(false);
        //  if(!this.feed){
        //    this.getPage(0);
        //  }
    };
    FeedComponent.prototype.concatResults = function (obj) {
        this.feed.results = this.feed.results.concat(obj.results);
        this.feed.next_page = obj.next_page;
        this.feed.page = obj.page;
        this.feed.total_pages = obj.total_pages;
        this.feed.prev_page = obj.prev_page;
    };
    FeedComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getFeed('post', page)
            .subscribe(function (feed) {
            if (page == 0) {
                _this.feed = feed;
                _this._globalService.setLoading(false);
            }
            else {
                _this.concatResults(feed);
            }
        }, function (error) {
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    FeedComponent.prototype.onWindowScroll = function () {
        var number = this.document.body.scrollTop;
        console.log(window.innerHeight);
        var body = document.body, html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowBottom = window.innerHeight + window.pageYOffset;
        if ((windowBottom >= docHeight) && (this.paginationInProcess == false)) {
            // alert('bottom reached');
            if (this.feed) {
                if ((this.feed.page + 1) < this.feed.total_pages) {
                    this.getPage(this.feed.next_page);
                }
            }
        }
    };
    return FeedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FeedComponent.prototype, "onWindowScroll", null);
FeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        // selector: 'app-feed',
        template: __webpack_require__(179),
        styles: [__webpack_require__(169)]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prismic_service__["a" /* PrismicService */]) === "function" && _b || Object, Object])
], FeedComponent);

var _a, _b;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/feed.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styling_styling_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styling_styling_detail_styling_detail_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_detail_feed_detail_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feed_guard_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { ProductFilterPipe } from './product-filter.pipe';



var FeedModule = (function () {
    function FeedModule() {
    }
    return FeedModule;
}());
FeedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__feed_component__["a" /* FeedComponent */],
            __WEBPACK_IMPORTED_MODULE_5__feed_detail_feed_detail_component__["a" /* FeedDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_3__styling_styling_component__["a" /* StylingComponent */],
            __WEBPACK_IMPORTED_MODULE_4__styling_styling_detail_styling_detail_component__["a" /* StylingDetailComponent */]
            // ProductFilterPipe
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                // { path: '/event', component: EventComponent },
                { path: 'look/:id', component: __WEBPACK_IMPORTED_MODULE_5__feed_detail_feed_detail_component__["a" /* FeedDetailComponent */] },
                // { path: '/look', component: LookComponent },
                // { path: '/fashionweek', component: FashionweekComponent },
                { path: 'editorial', component: __WEBPACK_IMPORTED_MODULE_5__feed_detail_feed_detail_component__["a" /* FeedDetailComponent */] },
                { path: 'styling/:styling', component: __WEBPACK_IMPORTED_MODULE_4__styling_styling_detail_styling_detail_component__["a" /* StylingDetailComponent */] },
                { path: 'styling', component: __WEBPACK_IMPORTED_MODULE_3__styling_styling_component__["a" /* StylingComponent */] },
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__feed_component__["a" /* FeedComponent */] }
                // { path: 'fashionweek/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
            ])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__feed_guard_service__["a" /* FeedGuard */]
        ]
    })
], FeedModule);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/feed.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StylingDetailComponent = (function () {
    function StylingDetailComponent() {
    }
    StylingDetailComponent.prototype.ngOnInit = function () {
    };
    return StylingDetailComponent;
}());
StylingDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-styling-detail',
        template: __webpack_require__(180),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], StylingDetailComponent);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/styling-detail.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { PrismicService } from '../../shared/prismic.service';
var StylingComponent = (function () {
    function StylingComponent() {
    }
    StylingComponent.prototype.ngOnInit = function () {
    };
    return StylingComponent;
}());
StylingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        // selector: 'app-styling',
        template: __webpack_require__(181),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], StylingComponent);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/styling.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoComponent = (function () {
    function LogoComponent(_globalService) {
        this._globalService = _globalService;
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    return LogoComponent;
}());
LogoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-logo',
        template: __webpack_require__(182),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object])
], LogoComponent);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/logo.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogotypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogotypeComponent = (function () {
    function LogotypeComponent(_globalService) {
        this._globalService = _globalService;
    }
    LogotypeComponent.prototype.ngOnInit = function () {
    };
    return LogotypeComponent;
}());
LogotypeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-logotype',
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* trigger */])('navLiState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({
                    height: '0px',
                    position: 'absolute'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({
                    height: '50px',
                    position: 'relative'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('0 => 1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('1 => 0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* animate */])('500ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* trigger */])('navUlState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('0 => 1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('1 => 0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* animate */])('500ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_variables_service__["a" /* GlobalService */]) === "function" && _a || Object])
], LogotypeComponent);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/logotype.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent() {
        this.isNav = 0;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.openNav = function () {
        this.isNav = 1;
    };
    NavComponent.prototype.closeNav = function () {
        var _this = this;
        setTimeout(function () {
            _this.isNav = 0;
        }, 3000);
    };
    return NavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], NavComponent.prototype, "isNav", void 0);
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__(184),
        styles: [__webpack_require__(174)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* trigger */])('navLiState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    height: '0px',
                    position: 'absolute'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({
                    height: '50px',
                    position: 'relative'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('0 => 1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('1 => 0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])('500ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* trigger */])('navUlState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({})),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('0 => 1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])('500ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* transition */])('1 => 0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* animate */])('500ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/nav.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prismic_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__variables_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_3__prismic_service__["a" /* PrismicService */], __WEBPACK_IMPORTED_MODULE_4__variables_service__["a" /* GlobalService */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ]
    })
], SharedModule);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/shared.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/environment.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalService = (function () {
    function GlobalService() {
        this.pageLoading = true;
    }
    GlobalService.prototype.setLoading = function (val) {
        this.pageLoading = val;
    };
    GlobalService.prototype.getValue = function (val) {
        return this.pageLoading;
    };
    return GlobalService;
}());
GlobalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalService);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/variables.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"), url(\"/assets/fonts/didot/Didot.otf\") format(\"otf\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\nhtml {\n  background-color: #000000; }\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n.detail {\n  width: 100%;\n  height: auto; }\n\n.detail-cover {\n  width: 100%;\n  position: fixed;\n  z-index: 3; }\n  .detail-cover img {\n    width: 100vw; }\n\n.detail-title {\n  position: fixed;\n  top: 25px;\n  right: 25px;\n  z-index: 4; }\n\n.detail-ul {\n  padding-top: 100vh;\n  z-index: 4;\n  position: relative; }\n  .detail-ul .detail-li {\n    width: 100vw;\n    height: auto;\n    margin-top: 100px;\n    margin-bottom: 100px;\n    display: block; }\n    .detail-ul .detail-li:first-child {\n      margin-top: 150px; }\n    .detail-ul .detail-li:last-child {\n      margin-bottom: 150px; }\n    .detail-ul .detail-li .detail-img {\n      width: 100%;\n      margin: auto; }\n      .detail-ul .detail-li .detail-img img {\n        width: 50vw;\n        margin: auto;\n        display: block; }\n\n.detail-gallery {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: scroll;\n  white-space: nowrap; }\n  .detail-gallery img {\n    display: inline-block;\n    width: 80vw; }\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"), url(\"/assets/fonts/didot/Didot.otf\") format(\"otf\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.feed {\n  width: 100vw;\n  height: auto; }\n\n.feed-content {\n  width: 100vw; }\n\n.feed-ul {\n  width: 100vw;\n  padding-bottom: 100vh; }\n  .feed-ul .feed-li {\n    z-index: 7;\n    position: relative;\n    margin-top: 100px; }\n    .feed-ul .feed-li:first-child {\n      margin-top: 150px; }\n    .feed-ul .feed-li:last-child {\n      margin-bottom: 150px; }\n    .feed-ul .feed-li a {\n      width: auto;\n      display: block; }\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"), url(\"/assets/fonts/didot/Didot.otf\") format(\"otf\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.logo {\n  position: fixed;\n  width: 100px;\n  height: 100px;\n  top: 50%;\n  left: 50%;\n  margin-left: -50px;\n  margin-top: -50px;\n  z-index: 0; }\n  .logo svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n    display: block; }\n"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: didot;\n  src: url(\"/assets/fonts/didot/Didot.woff2\") format(\"woff2\"), url(\"/assets/fonts/didot/Didot.woff\") format(\"woff\"), url(\"/assets/fonts/didot/Didot.otf\") format(\"otf\"); }\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.logotype {\n  position: fixed;\n  width: 150px;\n  height: 60px;\n  top: 50%;\n  left: 50%;\n  margin-left: -75px;\n  margin-top: -30px;\n  z-index: 0; }\n  .logotype svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n    display: block; }\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.nav {\n  position: fixed;\n  bottom: 25px;\n  left: 25px;\n  width: 100px;\n  z-index: 10; }\n\n.nav-ul {\n  width: 100%;\n  display: block;\n  height: auto;\n  position: relative; }\n  .nav-ul .nav-li {\n    width: 100px;\n    position: relative;\n    display: inline-block; }\n    .nav-ul .nav-li a {\n      width: 100%;\n      display: block;\n      height: 100%;\n      line-height: auto;\n      vertical-align: middle;\n      transition: margin 0.5s ease;\n      -webkit-transition: margin 0.5s ease;\n      -moz-transition: margin 0.5s ease;\n      -ms-transition: margin 0.5s ease;\n      -o-transition: margin 0.5s ease;\n      font-size: 24px;\n      line-height: 30px;\n      font-family: \"didot\";\n      letter-spacing: 0px;\n      font-weight: 900;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n      @media only screen and (min-width: 0px) and (max-width: 767px) {\n        .nav-ul .nav-li a {\n          font-size: 20px;\n          line-height: 30px; } }\n      .nav-ul .nav-li a:hover {\n        margin-left: 5px; }\n\n.nav-ul.open .nav-li {\n  position: relative; }\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<p>\n  about page\n</p>\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-logo></app-logo>\n\n<!-- <app-nav></app-nav>  -->\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\" *ngIf=\"detail\">\n\n<h1 class=\"detail-title\">{{detail.data[\"post.title\"].value[\"0\"].text}}</h1>\n\n<div class=\"detail-cover\">\n  <img [src]=\"detail.data['post.cover'].value[0].image.value.main.url\" alt=\"\">\n</div>\n  <!-- <h1>{{detail.data['post.title'].value[0].text}}</h1> -->\n\n  <div class=\"detail-content\" >\n\n    <ul class=\"detail-ul\">\n      <li class=\"detail-li\" *ngFor=\"let d of detail.data['post.post'].value\">\n\n\n        <div class=\"detail-img\" *ngIf=\"d.slice_type=='image'\">\n          <img src=\"{{d.value.value[0].image.value.main.url}}\" alt=\"\">\n        </div>\n\n        <div class=\"detail-gallery\" *ngIf=\"d.slice_type=='gallery'\">\n          <img src=\"{{g.image.value.main.url}}\" alt=\"\" *ngFor=\"let g of d.value.value\">\n        </div>\n        <!-- <img src=\"d.value.value[0].image.value.main.url\" alt=\"\" *ngIf=\"d.slice_type =='image'\"> -->\n\n\n      <!-- detail -->\n\n    </li>\n    </ul>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n\n  <!-- <div class=\"feed-content\" *ngIf=\"feed\">\n    <ul class=\"feed-ul\">\n      <li *ngFor='let f of feed.results' class=\"feed-li\">\n        <a [routerLink]=\"[f.data['post.type'].value, f.uid]\" class=\"feed-a\">\n          <img class=\"feed-img\" [src]=\"f.data['post.cover'].value[0].image.value.main.url\"\n          [style.width]=\"f.data['post.cover'].value[0].width.value + 'vw'\"\n          [style.margin-left]=\"f.data['post.cover'].value[0].left.value + 'vw'\"\n          alt=\"\" >\n        </a>\n      </li>\n    </ul>\n  </div> -->\n\n</div>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<p>\n  styling-detail works!\n</p>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<p>\n  styling works!\n</p>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\" *ngIf=\"!_globalService.pageLoading\">\n  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n  \t width=\"4000px\" height=\"4000px\" viewBox=\"0 0 4000 4000\" style=\"enable-background:new 0 0 4000 4000;\" xml:space=\"preserve\">\n  <g>\n  \t<g>\n  \t\t<path style=\"fill:#FFFFFF;stroke:#010101;stroke-width:22.4374;stroke-miterlimit:10;\" d=\"M1046.213,2515.425H733.849v-1030.85\n  \t\t\th312.365V2515.425z\"/>\n  \t\t<path style=\"fill:#FFFFFF;stroke:#010101;stroke-width:22.4374;stroke-miterlimit:10;\" d=\"M3266.151,2515.425h-321.903\n  \t\t\tl-109.689-197.739h-672.418l-109.689,197.739h-309.979l593.734-1030.85h336.211L3266.151,2515.425z M2739.182,2149.028\n  \t\t\tl-240.834-434.73l-240.83,434.73H2739.182z\"/>\n  \t</g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  <g>\n  </g>\n  </svg>\n</div>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"logotype\" *ngIf=\"_globalService.pageLoading\">\n\n\n\n</div>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n   <!-- (mouseenter)='openNav()' (mouseout)='closeNav()' -->\n  <ul class=\"nav-ul\">\n     <!-- [@navUlState]=\"isNav\" -->\n    <li class=\"nav-li\" >\n       <!-- [@navLiState]=\"isNav\" -->\n      <a [routerLink]=\"['/']\" class=\"nav-a\">home</a>\n    </li>\n    <li class=\"nav-li\">\n      <a [routerLink]=\"['/about']\" class=\"nav-a\">about</a>\n    </li>\n    <li class=\"nav-li\">\n      <a [routerLink]=\"['/contact']\" class=\"nav-a\">contact</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrismicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {Feed} from './feed';




var PrismicService = (function () {
    function PrismicService(_http) {
        this._http = _http;
        this._getUrl = 'api/prismic/get/all';
    }
    PrismicService.prototype.getFeed = function (type, page) {
        console.log(type, page);
        return this._http.get(this._getUrl + '?page=' + page + '&type=' + type)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.getSingle = function (type, uid) {
        return this._http.get('api/prismic/get/single?type=' + type + '&uid=' + uid)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    PrismicService.prototype.handleError = function (error) {
        console.log("error", error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return PrismicService;
}());
PrismicService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PrismicService);

var _a;
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/prismic.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 61;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(98);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        template: __webpack_require__(175),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/about.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInDownAnimation; });

// Component transition animations
var slideInDownAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* trigger */])('routeAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* style */])({
        opacity: 1
        // transform: 'translateX(0)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* style */])({
            opacity: 0
            // transform: 'translateX(-100%)'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('0.2s ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('0.5s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* style */])({
            opacity: 0
            // transform: 'translateY(100%)'
        }))
    ])
]);
//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/animations.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {}
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.routeAnimation = true;
        this.display = 'block';
        // @HostBinding('style.position')  position = 'absolute';
    }
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('@routeAnimation'),
    __metadata("design:type", Object)
], AppComponent.prototype, "routeAnimation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('style.display'),
    __metadata("design:type", Object)
], AppComponent.prototype, "display", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(176),
        styles: [__webpack_require__(166)],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* slideInDownAnimation */]]
    })
], AppComponent);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_feed_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logo_logo_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__logo_logotype_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_variables_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__logo_logo_component__["a" /* LogoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__logo_logotype_component__["a" /* LogotypeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__feed_feed_module__["a" /* FeedModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
                { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] },
                // {path:'', redirectTo:'home', pathMatch: 'full'},
                { path: '**', redirectTo: '', pathMatch: 'full' }
            ]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__shared_variables_service__["a" /* GlobalService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(177),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=/Users/eliafornari/Desktop/web_Q/infinitearchives/src/contact.component.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.map