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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class = \"container\">\n  <flash-messages></flash-messages>\n      <router-outlet></router-outlet>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/leaderboard/leaderboard.component */ "./src/app/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_reglogin_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/reglogin.service */ "./src/app/services/reglogin.service.ts");
/* harmony import */ var _guards_reglogin_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/reglogin.guard */ "./src/app/guards/reglogin.guard.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//meagadjuk az utakat bizonyos oldalakhoz
var appRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_reglogin_guard__WEBPACK_IMPORTED_MODULE_16__["RegLoginGuard"]] },
    { path: 'leaderboard', component: _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_11__["LeaderboardComponent"], canActivate: [_guards_reglogin_guard__WEBPACK_IMPORTED_MODULE_16__["RegLoginGuard"]] },
    { path: 'game', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_10__["GameComponent"], canActivate: [_guards_reglogin_guard__WEBPACK_IMPORTED_MODULE_16__["RegLoginGuard"]] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_17__["AdminGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_10__["GameComponent"],
                _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_11__["LeaderboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_14__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_reglogin_service__WEBPACK_IMPORTED_MODULE_15__["RegLoginService"], _guards_reglogin_guard__WEBPACK_IMPORTED_MODULE_16__["RegLoginGuard"], _services_game_service__WEBPACK_IMPORTED_MODULE_18__["GameService"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_17__["AdminGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"jumbotron text-center\">\n    <h1 >{{kerdes.kerdes}}</h1>\n    <div>\n    <button style=\"margin: 40px\" type=\"button\" class=\"btn btn-primary\" [disabled]='perc >= 10' [disabled]='valasztott > 0 ' (click)=\"valasztott= 1; helyesvalasz()\" >{{kerdes.valasz1}}</button>\n    <button style=\"margin: 40px\" type=\"button\" class=\"btn btn-warning\" [disabled]='perc >= 10' [disabled]='valasztott > 0 ' (click)=\"valasztott= 2; helyesvalasz()\">{{kerdes.valasz2}}</button>\n    <button style=\"margin: 40px\" type=\"button\" class=\"btn btn-info\" [disabled]='perc >= 10' [disabled]='valasztott > 0 ' (click)=\"valasztott= 3; helyesvalasz()\">{{kerdes.valasz3}}</button>\n    <button style=\"margin: 40px\" type=\"button\" class=\"btn btn-danger\" [disabled]='perc >= 10' [disabled]='valasztott > 0 ' (click)=\"valasztott= 4; helyesvalasz()\">{{kerdes.valasz4}}</button>\n  </div>\n    <button style=\"margin: 40px\" type=\"button\" class=\"btn btn-secondary\" [disabled]='perc >= 10' [disabled]='valasztott == 0' (click)=\"valasztott=0; kovetkezo()\" >Next question</button>\n    <br>\n    <button style=\"margin: 40px\" type=\"button\" class=\"btn btn-secondary\" [hidden]='perc < 10 && pontszam < 50' (click)='levonas()' [routerLink]=\"['/leaderboard']\" >Save Game</button>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h2>User Information</h2>\n    <h3>Username: {{felhasznalo.felhasznalonev}}</h3>\n    <h3>Score: {{felhasznalo.pontszam}}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <h2 >Time</h2>\n    <h2>{{perc}} minutes {{masodperc}} seconds</h2>\n  </div>\n  <div class=\"col-md-4\">\n    <h2>Actual Score</h2>\n    <h3 (ngModelChange)=\"pontszam\">Score: {{pontszam}}</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reglogin.service */ "./src/app/services/reglogin.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/timer */ "./node_modules/rxjs-compat/_esm5/observable/timer.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameComponent = /** @class */ (function () {
    function GameComponent(flashMessage, gameService, regloginService) {
        this.flashMessage = flashMessage;
        this.gameService = gameService;
        this.regloginService = regloginService;
        this.pontszam = 0;
        this.perc = 0;
        this.masodperc = 0;
        this.valasztott = 0;
        this.kerdes = {
            kerdes: '',
            valasz1: '',
            valasz2: '',
            valasz3: '',
            valasz4: '',
            helyes: 0
        };
        this.felhasznalo = {
            felhasznalonev: '',
            pontszam: 0
        };
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pontszam = 0;
        //lekerjuk a felhasznalo adatait tudjuk majd megjeleniteni mikozben jatszik
        this.regloginService.profilLekeres().subscribe(function (profil) {
            _this.felhasznalo = profil.felhasznalo;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.gameService.kerdesLekeres().subscribe(function (kerdes) {
            //console.log(kerdes);
            _this.kerdes = kerdes.eredmeny1;
        }, function (err) {
            console.log(err);
            return false;
        });
        //timer inicializalasa es inditasa
        var t = Object(rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_4__["timer"])(5000, 1000);
        var subscription = t.subscribe(function (x) {
            if (x % 60 == 0 && x != 0) {
                _this.masodperc = x % 60;
                _this.perc++;
            }
            else {
                _this.masodperc = x % 60;
            }
            if (_this.perc == 10) {
                _this.pontszam -= 10;
                subscription.unsubscribe();
            }
        });
    };
    GameComponent.prototype.levonas = function () {
        this.pontszam -= 10;
    };
    GameComponent.prototype.helyesvalasz = function () {
        if (this.valasztott == this.kerdes.helyes) {
            this.pontszam++;
            this.flashMessage.show("Congratulations your answer is correct!!!", { cssClass: 'alert-success', timeout: 5000 });
        }
        else {
            this.pontszam = this.pontszam - 2;
            this.flashMessage.show("Unfortunately your answer is incorrect!!!\n Correct answer is: " + this.kerdes['valasz' + this.kerdes.helyes], { cssClass: 'alert-danger', timeout: 5000 });
        }
    };
    GameComponent.prototype.kovetkezo = function () {
        var _this = this;
        this.gameService.kerdesLekeres().subscribe(function (kerdes) {
            _this.kerdes = kerdes.eredmeny1;
            //console.log(this.kerdes);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this.felhasznalo.pontszam += this.pontszam;
        this.gameService.pontszamMentes(this.felhasznalo).subscribe(function (sikeres) {
            //console.log(sikeres);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__["RegLoginService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"jumbotron text-center\">\n  <h1>Web programming Quiz Game Project</h1>\n  <p class=\"lead\">Welcome to my quiz game written for Webprogramming class</p>\n  <p> Author : Simon Norbert <br> ID: snim1671 <br> Group: 524 <br> Second Year Computer Science<p>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>About</h3>\n    <p>This application is a quiz game based on general knowledge questions from different themes.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Implementation</h3>\n    <p>Implemented with MEAN stack which stands for (MongoDB, Express, Angular, NodeJs)</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Goals</h3>\n    <p>Finishing my last exam <br> And having fun learning new things of course.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">No.</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Username</th>\r\n        <th scope=\"col\">Score</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let i of ranglista; let j = index\" class=\"table-danger\">\r\n        <th scope=\"row\">{{j+1}}.</th>\r\n        <td>{{i.nev}}</td>\r\n        <td>{{i.felhasznalonev}}</td>\r\n        <td>{{i.pontszam}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reglogin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reglogin.service */ "./src/app/services/reglogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(regloginService, router) {
        this.regloginService = regloginService;
        this.router = router;
    }
    //tehat mikor betoltjuk a leaderbord oldalt akkor le kell kerjuk a felhasznalo adatait amit majd megjelenitunk
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regloginService.ranglistaLekeres().subscribe(function (ranglista) {
            _this.ranglista = ranglista;
            _this.ranglista.sort(function (a, b) { return a.pontszam > b.pontszam ? -1 : a.pontszam < b.pontszam ? 1 : 0; });
            //console.log(this.ranglista)
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    LeaderboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/components/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/components/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reglogin_service__WEBPACK_IMPORTED_MODULE_1__["RegLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"login()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"felhasznalonev\" name=\"felhasznalonev\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"jelszo\" name=\"jelszo\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reglogin.service */ "./src/app/services/reglogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, regloginService, router) {
        this.flashMessage = flashMessage;
        this.regloginService = regloginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var felhasznalo = {
            felhasznalonev: this.felhasznalonev,
            jelszo: this.jelszo
        };
        this.regloginService.loginVegrehajt(felhasznalo).subscribe(function (data) {
            if (data.succes) {
                //lementjuk a tokent es a felhasznaloadatokat ha sikeres a login es atiranyitjuk a home-ra
                _this.regloginService.adatokMentese(data.token, data.felhasznalo);
                _this.flashMessage.show("Succesfull login!!!", { cssClass: 'alert-success', timeout: 3500 });
                _this.router.navigate(['/home']);
            }
            else {
                //ha nem sikeres a login a akkor message es vissza loginra
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3500 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__["RegLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n       <a class=\"navbar-brand\" [routerLink] = \"['/home']\">Simon's Quizz Game</a>\n\n       <div id=\"navbar\" class=\"collapse navbar-collapse\" >\n\n         <ul class=\"nav navbar-nav mr-auto\">\n           <li class=\"nav-item\">\n             <a class=\"nav-link\" [routerLink] = \"['/home']\">Home</a>\n           </li>\n\n\n           <li *ngIf=\"regloginService.loggedIn()\" class=\"nav-item\">\n             <a class=\"nav-link\" [routerLink] = \"['/game']\">Game</a>\n           </li>\n\n           <li *ngIf=\"regloginService.loggedIn()\" class=\"nav-item\">\n             <a class=\"nav-link\" [routerLink] = \"['/profile']\">My profile</a>\n           </li>\n\n\n         <li *ngIf=\"regloginService.loggedIn()\" class=\"nav-item\">\n           <a class=\"nav-link\" [routerLink] = \"['/leaderboard']\">Leaderboard</a>\n         </li>\n\n         <li *ngIf=\"regloginService.adminLoggedIn()\" class=\"nav-item\">\n           <a class=\"nav-link\" [routerLink] = \"['/settings']\">Settings</a>\n         </li>\n       </ul>\n\n         <button *ngIf=\"!regloginService.loggedIn()\" class=\"btn btn-outline-success my-2 my-sm-\" type=\"button\" [routerLink] = \"['/login']\" >Login</button>\n         <button *ngIf=\"!regloginService.loggedIn()\" class=\"btn btn-outline-success my-2 my-sm-\" type=\"button\" [routerLink] = \"['/register']\" style=\"margin:10px\" >Register</button>\n         <button *ngIf=\"regloginService.loggedIn()\" class=\"btn btn-outline-success my-2 my-sm-\" type=\"button\" href=\"#\" (click) =\"logout()\" >Logout</button>\n        </div>\n     </nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reglogin.service */ "./src/app/services/reglogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(flashMessage, regloginService, router) {
        this.flashMessage = flashMessage;
        this.regloginService = regloginService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    //elkuldjuk a reglogin service-nek a kerest hogy loggoljon ki majd atiranyitunk a login oldalra
    NavbarComponent.prototype.logout = function () {
        this.regloginService.logoutVegrehajt();
        this.flashMessage.show("You are now logged out!!!", { cssClass: "alert-success", timeout: 3500 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__["RegLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"felhasznalo\">\n  <h1 style=\"text-align: center\">{{felhasznalo.nev}}</h1>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{felhasznalo.felhasznalonev}}</li>\n    <li class=\"list-group-item\">Email: {{felhasznalo.email}}</li>\n    <li class=\"list-group-item\">Score: {{felhasznalo.pontszam}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reglogin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reglogin.service */ "./src/app/services/reglogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(regloginService, router) {
        this.regloginService = regloginService;
        this.router = router;
    }
    //tehat mikor betoltjuk a profil oldalt akkor le kell kerjuk a felhasznalo adataid 
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regloginService.profilLekeres().subscribe(function (profil) {
            _this.felhasznalo = profil.felhasznalo;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reglogin_service__WEBPACK_IMPORTED_MODULE_1__["RegLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"regisztracio()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"nev\" name=\"nev\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"felhasznalonev\" name=\"felhasznalonev\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"jelszo\" name=\"jelszo\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_reglogin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reglogin.service */ "./src/app/services/reglogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    //be kell inejktelni a validate service-t hogy tudjuk hasznalni ebben a componentben
    function RegisterComponent(validateService, flashMessage, regloginService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.regloginService = regloginService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.regisztracio = function () {
        var _this = this;
        var felhasznalo = {
            nev: this.nev,
            felhasznalonev: this.felhasznalonev,
            email: this.email,
            jelszo: this.jelszo
        };
        //meghivjuk a validateservice-ben megirt ellenorzeseket
        if (!this.validateService.kiVanToltve(felhasznalo)) {
            this.flashMessage.show("Please fill all the fields!!!", { cssClass: 'alert-danger', timeout: 3500 });
            return false;
        }
        if (!this.validateService.helyesEmail(felhasznalo.email)) {
            this.flashMessage.show("Email doesn't match requirements!!!", { cssClass: 'alert-danger', timeout: 3500 });
            return false;
        }
        //ha minden rendben van akkor kezdodhet a regisztracio
        this.regloginService.regVegrehajt(felhasznalo).subscribe(function (data) {
            //visszakuld a szerver egy json tokent hogy succes==true vagy nem es az alapjan uzenunk a felhasznalonak
            if (data.succes) {
                _this.flashMessage.show("Succesfull registration now you can log in!!!", { cssClass: 'alert-success', timeout: 3500 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show("Unsuccesfull registration please try again!!!", { cssClass: 'alert-danger', timeout: 3500 });
                _this.router.navigate(['/register']);
            }
        });
    };
    //megnezzuk van mar ilyen nevu felhasznalo
    RegisterComponent.prototype.ellenorzes = function () {
        var _this = this;
        var keres = {
            felhasznalonev: this.felhasznalonev
        };
        this.regloginService.felhasznalonevCheck(keres).subscribe(function (data) {
            console.log(data);
            if (data.success === true) {
                _this.flashMessage.show("Username is free to use!!!", { cssClass: 'alert-success', timeout: 3500 });
                return true;
            }
            else {
                _this.flashMessage.show("Username is already in use!!!", { cssClass: 'alert-danger', timeout: 3500 });
                return false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_reglogin_service__WEBPACK_IMPORTED_MODULE_3__["RegLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add question</h2>\n<form (submit)=\"hozzaadas()\">\n  <div class=\"form-group\">\n    <label>Question</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"kerdes\" name=\"kerdes\">\n  </div>\n  <div class=\"form-group\">\n    <label>Answer 1</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"valasz1\" name=\"valasz1\">\n  </div>\n  <div class=\"form-group\">\n    <label>Answer 2</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"valasz2\" name=\"valasz2\">\n  </div>\n  <div class=\"form-group\">\n    <label>Answer 3</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"valasz3\" name=\"valasz3\">\n  </div>\n  <div class=\"form-group\">\n    <label>Answer 4</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"valasz4\" name=\"valasz4\">\n  </div>\n  <div class=\"form-group\">\n    <label>Number of correct anwser</label>\n    <select [(ngModel)]=\"helyes\" name=\"helyes\" class=\"custom-select\">\n      <option value=\"1\">One (1)</option>\n      <option value=\"2\">Two (2)</option>\n      <option value=\"3\">Three (3)</option>\n      <option value=\"4\">Four (4)</option>\n    </select>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Add question\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(flashMessage, gameService, router) {
        this.flashMessage = flashMessage;
        this.gameService = gameService;
        this.router = router;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.hozzaadas = function () {
        var _this = this;
        var kerdes = {
            kerdes: this.kerdes,
            valasz1: this.valasz1,
            valasz2: this.valasz2,
            valasz3: this.valasz3,
            valasz4: this.valasz4,
            helyes: this.helyes
        };
        this.gameService.kerdesHozzaadas(kerdes).subscribe(function (data) {
            if (data.succes) {
                //ha sikeres volt a kerdeshozzadas jelezzuk a felhasznalonak es visszaterunk a fooldalra
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3500 });
                _this.router.navigate(['/home']);
            }
            else {
                //ha nem sikeres a hozzadas  akkor visszajelzes es ujra erre az oldalra
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3500 });
                _this.router.navigate(['/settings']);
            }
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/reglogin.service */ "./src/app/services/reglogin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(regloginService, router) {
        this.regloginService = regloginService;
        this.router = router;
    }
    //lechekolja hogy admin van-e belepve
    AdminGuard.prototype.canActivate = function () {
        if (this.regloginService.loggedIn() && this.regloginService.adminLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__["RegLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/reglogin.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/reglogin.guard.ts ***!
  \******************************************/
/*! exports provided: RegLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegLoginGuard", function() { return RegLoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/reglogin.service */ "./src/app/services/reglogin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegLoginGuard = /** @class */ (function () {
    function RegLoginGuard(regloginService, router) {
        this.regloginService = regloginService;
        this.router = router;
    }
    //lechekolja hogy van bejelentkezve felhasznalo ha nincs redirektel loginra
    RegLoginGuard.prototype.canActivate = function () {
        if (this.regloginService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    RegLoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_reglogin_service__WEBPACK_IMPORTED_MODULE_2__["RegLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegLoginGuard);
    return RegLoginGuard;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
    }
    //lekerunk egy kerdest
    GameService.prototype.kerdesLekeres = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('games/game', { headers: headers }).map(function (res) { return res.json(); });
    };
    //kerdes hozzaadas keres elkuldese
    GameService.prototype.kerdesHozzaadas = function (kerdes) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('games/addquestion', kerdes, { headers: headers }).map(function (res) { return res.json(); });
    };
    //elkuldi a szervernek a pontszamot hogy mentse le
    GameService.prototype.pontszamMentes = function (felhasznalo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/savegame', felhasznalo, { headers: headers }).map(function (res) { return res.json(); });
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/reglogin.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/reglogin.service.ts ***!
  \**********************************************/
/*! exports provided: RegLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegLoginService", function() { return RegLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegLoginService = /** @class */ (function () {
    function RegLoginService(http) {
        this.http = http;
    }
    //elkuldjuk a szervernek miutan jsonna alakitottuk
    RegLoginService.prototype.regVegrehajt = function (felhasznalo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', felhasznalo, { headers: headers }).map(function (res) { return res.json(); });
    };
    //elkuldjuk a szervernek a login adatokat es visszakapjuk a tokent meg a user infot
    RegLoginService.prototype.loginVegrehajt = function (felhasznalo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/login', felhasznalo, { headers: headers }).map(function (res) { return res.json(); });
    };
    //lementjuk a locastorage-ba az adatokat sikeres login eseten
    RegLoginService.prototype.adatokMentese = function (token, felhasznalo) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('felhasznalo', JSON.stringify(felhasznalo));
        this.regToken = token;
        this.felhasznalo = felhasznalo;
    };
    //elkuldjuk a  felhasznalo tokenjet es visszakapjuk a szervertol az adatait
    RegLoginService.prototype.profilLekeres = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.tokenBetolt();
        headers.append('Authorization', this.regToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    //lekerjuk egy adott felhasznalo letezik-e vagy sem
    RegLoginService.prototype.felhasznalonevCheck = function (felhasznalo) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/checkuser', felhasznalo, { headers: headers }).map(function (res) { return res.json(); });
    };
    //elkuldjuk a  felhasznalo tokenjet es visszakapjuk a szervertol az adatait
    RegLoginService.prototype.ranglistaLekeres = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/leaderboard', { headers: headers }).map(function (res) { return res.json(); });
    };
    //betoltjuk a tokent
    RegLoginService.prototype.tokenBetolt = function () {
        var token = localStorage.getItem('id_token');
        this.regToken = token;
    };
    //megmondja hogy be van loggolval token alapjan
    RegLoginService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])('id_token');
    };
    //megnezuk hogy admin van-e bejelentkezve
    RegLoginService.prototype.adminLoggedIn = function () {
        var adminjog = JSON.parse(localStorage.getItem('felhasznalo'));
        if (adminjog == null)
            return false;
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])('id_token') && adminjog.admin;
    };
    //kilepunk es toroljuk a locastorage-ot
    RegLoginService.prototype.logoutVegrehajt = function () {
        this.regToken = null;
        this.felhasznalo = null;
        localStorage.clear();
    };
    RegLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RegLoginService);
    return RegLoginService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    //ellenorzom hogy minden mezo ki van-e toltve
    ValidateService.prototype.kiVanToltve = function (felhasznalo) {
        if (felhasznalo.nev == undefined || felhasznalo.felhasznalonev == undefined ||
            felhasznalo.email == undefined || felhasznalo.jelszo == undefined)
            return false;
        else
            return true;
    };
    //lab2-bol hasznalt minta alapjan ellenorzom az email helyesseget
    ValidateService.prototype.helyesEmail = function (email) {
        var minta = /^[^@]+@(yahoo|gmail|hotmail|freemail)\.[a-z]*/;
        return minta.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programozas\Web\Projekt\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map