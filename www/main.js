(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-navigator [page]=\"root\" swipeable></ons-navigator>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.root = _page1_page1_component__WEBPACK_IMPORTED_MODULE_1__["Page1Component"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var _page1_side_side_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page1/side/side.component */ "./src/app/page1/side/side.component.ts");
/* harmony import */ var _page1_content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page1/content/content.component */ "./src/app/page1/content/content.component.ts");
/* harmony import */ var _page1_content_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page1/content/tab1/tab1.component */ "./src/app/page1/content/tab1/tab1.component.ts");
/* harmony import */ var _page1_content_tab2_tab2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page1/content/tab2/tab2.component */ "./src/app/page1/content/tab2/tab2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/**
 * Page components
 */
var pages = [
    _page1_page1_component__WEBPACK_IMPORTED_MODULE_5__["Page1Component"],
    _page2_page2_component__WEBPACK_IMPORTED_MODULE_6__["Page2Component"],
    _page1_side_side_component__WEBPACK_IMPORTED_MODULE_7__["SideComponent"],
    _page1_content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
    _page1_content_tab1_tab1_component__WEBPACK_IMPORTED_MODULE_9__["Tab1Component"],
    _page1_content_tab2_tab2_component__WEBPACK_IMPORTED_MODULE_10__["Tab2Component"],
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ].concat(pages),
            entryComponents: pages.slice(),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["OnsenModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * Core module
 */
var CoreModule = /** @class */ (function () {
    /**
     * Constructor for Core module
     * @param parentModule
     */
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [_services__WEBPACK_IMPORTED_MODULE_1__["MenuService"]]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.service */ "./src/app/core/services/menu/menu.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return _menu_menu_service__WEBPACK_IMPORTED_MODULE_0__["MenuService"]; });




/***/ }),

/***/ "./src/app/core/services/menu/menu.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/menu/menu.service.ts ***!
  \****************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuService = /** @class */ (function () {
    function MenuService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Object.defineProperty(MenuService.prototype, "open$", {
        /**
         * Get menu state
         */
        get: function () {
            return this.subject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggle menu
     */
    MenuService.prototype.open = function () {
        this.subject.next();
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/page1/content/content.component.html":
/*!******************************************************!*\
  !*** ./src/app/page1/content/content.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\r\n  <div class=\"left\">\r\n    <ons-toolbar-button (click)=\"openMenu()\">\r\n      <ons-icon icon=\"ion-navicon, material:md-menu\"></ons-icon>\r\n    </ons-toolbar-button>\r\n  </div>\r\n  <div class=\"center\">{{title}}</div>\r\n</ons-toolbar>\r\n<ons-tabbar position=\"auto\" swipeable (prechange)=\"onPrechange($event)\">\r\n  <ons-tab [attr.label]=\"tabs[0].label\" [attr.icon]=\"tabs[0].icon\" [page]=\"tabs[0].page\" active></ons-tab>\r\n  <ons-tab [attr.label]=\"tabs[1].label\" [attr.icon]=\"tabs[1].icon\" [page]=\"tabs[1].page\"></ons-tab>\r\n</ons-tabbar>\r\n"

/***/ }),

/***/ "./src/app/page1/content/content.component.scss":
/*!******************************************************!*\
  !*** ./src/app/page1/content/content.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page1/content/content.component.ts":
/*!****************************************************!*\
  !*** ./src/app/page1/content/content.component.ts ***!
  \****************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _tab1_tab1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1/tab1.component */ "./src/app/page1/content/tab1/tab1.component.ts");
/* harmony import */ var _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2/tab2.component */ "./src/app/page1/content/tab2/tab2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function ContentComponent(zone, menuService) {
        this.zone = zone;
        this.menuService = menuService;
        // Tabs
        this.tabs = [{
                label: 'Tab 1',
                icon: 'ion-home',
                page: _tab1_tab1_component__WEBPACK_IMPORTED_MODULE_2__["Tab1Component"],
            }, {
                label: 'Tab 2',
                icon: 'ion-gear-a',
                page: _tab2_tab2_component__WEBPACK_IMPORTED_MODULE_3__["Tab2Component"],
            }];
        // Title
        this.title = this.tabs[0].label;
    }
    /**
     * Initialize
     */
    ContentComponent.prototype.ngOnInit = function () {
    };
    /**
     * Callback for prechange
     */
    ContentComponent.prototype.onPrechange = function (event) {
        var _this = this;
        this.zone.run(function () {
            var index = event.activeIndex;
            _this.title = _this.tabs[index].label;
        });
    };
    /**
     * Open menu
     */
    ContentComponent.prototype.openMenu = function () {
        this.menuService.open();
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ons-page[content]',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/page1/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/page1/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _core_services__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/page1/content/tab1/tab1.component.html":
/*!********************************************************!*\
  !*** ./src/app/page1/content/tab1/tab1.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; margin: 10px\">\r\n  <p>This is the first tab.</p>\r\n  <ons-button (click)=\"push()\">Push page</ons-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page1/content/tab1/tab1.component.scss":
/*!********************************************************!*\
  !*** ./src/app/page1/content/tab1/tab1.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page1/content/tab1/tab1.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page1/content/tab1/tab1.component.ts ***!
  \******************************************************/
/*! exports provided: Tab1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Component", function() { return Tab1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../page2/page2.component */ "./src/app/page2/page2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tab1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function Tab1Component(navi) {
        this.navi = navi;
    }
    /**
     * Initialize
     */
    Tab1Component.prototype.ngOnInit = function () {
    };
    /**
     * Push page
     */
    Tab1Component.prototype.push = function () {
        this.navi.nativeElement.pushPage(_page2_page2_component__WEBPACK_IMPORTED_MODULE_2__["Page2Component"]);
    };
    Tab1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ons-page[tab1]',
            template: __webpack_require__(/*! ./tab1.component.html */ "./src/app/page1/content/tab1/tab1.component.html"),
            styles: [__webpack_require__(/*! ./tab1.component.scss */ "./src/app/page1/content/tab1/tab1.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__["OnsNavigator"]])
    ], Tab1Component);
    return Tab1Component;
}());



/***/ }),

/***/ "./src/app/page1/content/tab2/tab2.component.html":
/*!********************************************************!*\
  !*** ./src/app/page1/content/tab2/tab2.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; margin: 10px\">\r\n  <p>This is the second tab.</p>\r\n  <ons-button (click)=\"push()\">Push page</ons-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page1/content/tab2/tab2.component.scss":
/*!********************************************************!*\
  !*** ./src/app/page1/content/tab2/tab2.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page1/content/tab2/tab2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page1/content/tab2/tab2.component.ts ***!
  \******************************************************/
/*! exports provided: Tab2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Component", function() { return Tab2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../page2/page2.component */ "./src/app/page2/page2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tab2Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function Tab2Component(navi) {
        this.navi = navi;
    }
    /**
     * Initialize
     */
    Tab2Component.prototype.ngOnInit = function () {
    };
    /**
     * Push page
     */
    Tab2Component.prototype.push = function () {
        this.navi.nativeElement.pushPage(_page2_page2_component__WEBPACK_IMPORTED_MODULE_2__["Page2Component"]);
    };
    Tab2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ons-page[tab2]',
            template: __webpack_require__(/*! ./tab2.component.html */ "./src/app/page1/content/tab2/tab2.component.html"),
            styles: [__webpack_require__(/*! ./tab2.component.scss */ "./src/app/page1/content/tab2/tab2.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__["OnsNavigator"]])
    ], Tab2Component);
    return Tab2Component;
}());



/***/ }),

/***/ "./src/app/page1/page1.component.html":
/*!********************************************!*\
  !*** ./src/app/page1/page1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-splitter #splitter>\r\n  <ons-splitter-side [page]=\"side\" swipeable collapse width=\"250px\"></ons-splitter-side>\r\n  <ons-splitter-content [page]=\"content\"></ons-splitter-content>\r\n</ons-splitter>\r\n"

/***/ }),

/***/ "./src/app/page1/page1.component.scss":
/*!********************************************!*\
  !*** ./src/app/page1/page1.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page1/page1.component.ts":
/*!******************************************!*\
  !*** ./src/app/page1/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side/side.component */ "./src/app/page1/side/side.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.component */ "./src/app/page1/content/content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Page1Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function Page1Component(menuService) {
        this.menuService = menuService;
        this.onDestroy$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.side = _side_side_component__WEBPACK_IMPORTED_MODULE_3__["SideComponent"];
        this.content = _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"];
    }
    /**
     * Initialize
     */
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.open$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.onDestroy$))
            .subscribe(function (state) {
            _this.splitter.nativeElement.side.open();
        });
    };
    /**
     * Finalize
     */
    Page1Component.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('splitter'),
        __metadata("design:type", Object)
    ], Page1Component.prototype, "splitter", void 0);
    Page1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ons-page[page1]',
            template: __webpack_require__(/*! ./page1.component.html */ "./src/app/page1/page1.component.html"),
            styles: [__webpack_require__(/*! ./page1.component.scss */ "./src/app/page1/page1.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "./src/app/page1/side/side.component.html":
/*!************************************************!*\
  !*** ./src/app/page1/side/side.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\r\n  <div class=\"center\">Side</div>\r\n</ons-toolbar>\r\n<ons-list>\r\n  <ons-list-item modifier=\"chevron\" tappable>Menu 1</ons-list-item>\r\n  <ons-list-item modifier=\"chevron\" tappable>Menu 2</ons-list-item>\r\n</ons-list>\r\n"

/***/ }),

/***/ "./src/app/page1/side/side.component.scss":
/*!************************************************!*\
  !*** ./src/app/page1/side/side.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page1/side/side.component.ts":
/*!**********************************************!*\
  !*** ./src/app/page1/side/side.component.ts ***!
  \**********************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function SideComponent() {
    }
    /**
     * Initialize
     */
    SideComponent.prototype.ngOnInit = function () {
    };
    SideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ons-page[side]',
            template: __webpack_require__(/*! ./side.component.html */ "./src/app/page1/side/side.component.html"),
            styles: [__webpack_require__(/*! ./side.component.scss */ "./src/app/page1/side/side.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SideComponent);
    return SideComponent;
}());



/***/ }),

/***/ "./src/app/page2/page2.component.html":
/*!********************************************!*\
  !*** ./src/app/page2/page2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ons-toolbar>\r\n  <div class=\"left\">\r\n    <ons-back-button></ons-back-button>\r\n  </div>\r\n  <div class=\"center\">Page 2</div>\r\n</ons-toolbar>\r\n<div style=\"text-align: center; margin: 10px\">\r\n  <p>This is the second page.</p>\r\n  <ons-button (click)=\"pop()\">Pop page</ons-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page2/page2.component.scss":
/*!********************************************!*\
  !*** ./src/app/page2/page2.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page2/page2.component.ts":
/*!******************************************!*\
  !*** ./src/app/page2/page2.component.ts ***!
  \******************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page2Component = /** @class */ (function () {
    /**
     * Constructor
     */
    function Page2Component(navi) {
        this.navi = navi;
    }
    /**
     * Initialize
     */
    Page2Component.prototype.ngOnInit = function () {
    };
    /**
     * Pop page
     */
    Page2Component.prototype.pop = function () {
        this.navi.nativeElement.popPage();
    };
    Page2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ons-page[page2]',
            template: __webpack_require__(/*! ./page2.component.html */ "./src/app/page2/page2.component.html"),
            styles: [__webpack_require__(/*! ./page2.component.scss */ "./src/app/page2/page2.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_onsenui__WEBPACK_IMPORTED_MODULE_1__["OnsNavigator"]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
if (ngx_onsenui__WEBPACK_IMPORTED_MODULE_2__["onsPlatform"].isIPhoneX()) {
    var html = document.documentElement;
    html.setAttribute('onsflag-iphonex-portrait', '');
    html.setAttribute('onsflag-iphonex-landscape', '');
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hernest\Documents\syss\workspace\com.syss.app.manguitas.frontend.mobile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map