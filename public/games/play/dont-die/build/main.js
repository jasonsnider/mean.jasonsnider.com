webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/game-over/game-over.module": [
		151
	],
	"../pages/game/game.module": [
		153
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverPageModule", function() { return GameOverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_over__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GameOverPageModule = /** @class */ (function () {
    function GameOverPageModule() {
    }
    GameOverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__game_over__["a" /* GameOverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__game_over__["a" /* GameOverPage */]),
            ],
        })
    ], GameOverPageModule);
    return GameOverPageModule;
}());

//# sourceMappingURL=game-over.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';
var GameOverPage = /** @class */ (function () {
    function GameOverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GameOverPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.score = this.navParams.data.score;
        setTimeout(function () {
            _this.toHome();
        }, 3000);
    };
    GameOverPage.prototype.toHome = function () {
        //this.navCtrl.push(HomePage);
        location.reload();
    };
    GameOverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game-over',template:/*ion-inline-start:"/Users/jasonsnider/dont-die/src/pages/game-over/game-over.html"*/'<ion-content>\n  <h1 text-center>Game Over</h1>\n\n  <h2 text-center>{{ score }} PTS</h2>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <button class="start-button" ion-button large color="danger" (tap)="toHome()">\n          HOME\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/jasonsnider/dont-die/src/pages/game-over/game-over.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GameOverPage);
    return GameOverPage;
}());

//# sourceMappingURL=game-over.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageModule", function() { return GamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GamePageModule = /** @class */ (function () {
    function GamePageModule() {
    }
    GamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */]),
            ],
        })
    ], GamePageModule);
    return GamePageModule;
}());

//# sourceMappingURL=game.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Player */
/* unused harmony export Spawn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_over_game_over__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());

var Spawn = /** @class */ (function () {
    function Spawn() {
    }
    return Spawn;
}());

var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, navParams, 
        //private device:Device,
        platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.score = 0;
        this.dropSpeed = 400;
        this.gamePlay = true;
        this.lastThousand = 0;
        this.spawnSpeedMin = 1;
        this.spawnSpeedMax = 5;
        this.playerSpeed = 3;
        this.baseWidth = 320;
        this.baseHeight = 568;
        this.sizeMultiplier = 1;
        this.scoreMultiplier = 1;
    }
    GamePage.prototype.init = function () {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.body = document.querySelector('ion-content');
        this.canvas.height = Math.max(this.body.scrollHeight, this.body.offsetHeight);
        this.canvas.width = Math.max(this.body.scrollWidth, this.body.offsetWidth);
        var diffWidth = (this.platform.width() / this.baseWidth);
        var diffHeight = (this.platform.height() / this.baseHeight);
        this.sizeMultiplier = diffWidth;
        if (this.platform.width() > this.platform.height()) {
            this.sizeMultiplier = diffHeight;
            this.dropSpeed = 300;
        }
        this.playerSpeed = (2.5 * this.sizeMultiplier);
        this.spawnSpeedMax = (5 * diffHeight);
        var playerHeight = 25;
        var playerWidth = 25;
        this.player = {
            x: 0,
            y: (this.canvas.height - (this.canvas.height * .24)),
            h: playerHeight,
            w: playerWidth,
            s: this.playerSpeed,
            c: 'white',
            d: 'r'
        };
        this.spawns = [];
    };
    GamePage.prototype.ionViewDidLoad = function () {
        this.init();
        this.launchSpawns();
        this.draw();
    };
    GamePage.prototype.draw = function () {
        this.setPlayerColor();
        this.moveSpawns();
        this.movePlayer();
        if (this.gamePlay == true) {
            window.requestAnimationFrame(this.draw.bind(this));
        }
    };
    //Controls - change direction on keyup
    GamePage.prototype.changeDirection = function () {
        if (this.player.d === 'l') {
            this.player.d = 'r';
        }
        else if (this.player.d === 'r') {
            this.player.d = 'l';
        }
        //Trigger a player redraw in the opposite direction
        //on click rather than on the next animation frame.
        this.movePlayer();
    };
    GamePage.prototype.movePlayer = function () {
        this.ctx.save();
        this.ctx.fillStyle = this.player.c;
        this.ctx.clearRect(this.player.x - 1, this.player.y - 1, this.player.w + 2, this.player.h + 2);
        if (this.player.x >= (this.canvas.width - this.player.w)) {
            this.player.d = 'l';
        }
        if (this.player.x <= 0) {
            this.player.d = 'r';
        }
        if (this.player.d === 'r') {
            this.player.x = (this.player.x + this.player.s);
        }
        else {
            this.player.x = (this.player.x - this.player.s);
        }
        this.ctx.fillRect(this.player.x, this.player.y, this.player.w, this.player.h);
        this.ctx.restore();
    };
    GamePage.prototype.launchSpawns = function () {
        var _this = this;
        this.spawner = setInterval(function () {
            //Use psuedo-random strings to name the new spawns
            var text = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 10; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            var type = 'posion';
            var size = 5;
            var pts = 10;
            var color = 'yellow';
            _this.spawns[text] = {
                x: Math.floor(Math.random() * _this.canvas.width),
                y: 0,
                h: size,
                w: size,
                s: _this.getRandomInt(_this.spawnSpeedMin, _this.spawnSpeedMax),
                t: type,
                c: color,
                p: pts,
                counted: false
            };
        }, this.dropSpeed);
    };
    GamePage.prototype.moveSpawns = function () {
        var _this = this;
        for (var spawn in this.spawns) {
            if (this.spawns[spawn].y <= this.canvas.height) {
                if (this.spawns[spawn].c === 'rand') {
                    this.ctx.fillStyle = this.randomColor();
                    this.randomPastel(64, 64);
                }
                else {
                    this.ctx.fillStyle = this.spawns[spawn].c;
                }
                this.ctx.save();
                this.ctx.clearRect(this.spawns[spawn].x - 1, this.spawns[spawn].y - 1, this.spawns[spawn].w + 2, this.spawns[spawn].h + 2);
                this.ctx.fillRect(this.spawns[spawn].x, this.spawns[spawn].y = (this.spawns[spawn].y + this.spawns[spawn].s), this.spawns[spawn].w, this.spawns[spawn].h);
                this.ctx.restore();
                //collision
                if (this.spawns[spawn].t == 'posion') {
                    if (this.player.x < this.spawns[spawn].x + this.spawns[spawn].w &&
                        this.spawns[spawn].x > this.player.x && this.spawns[spawn].x < (this.player.x + this.player.w) &&
                        this.player.y < this.spawns[spawn].y + this.spawns[spawn].h &&
                        this.player.y + this.player.h > this.spawns[spawn].y) {
                        //cancelAnimationFrame(this.gamePlay);
                        this.gamePlay = false;
                        setInterval(function () {
                            _this.canvas.style.background = _this.randomColor();
                        }, 100);
                        setTimeout(function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_over_game_over__["a" /* GameOverPage */], { score: _this.score });
                        }, 1500);
                    }
                }
                if (this.spawns[spawn].t == 'bonus') {
                    if (this.player.x < this.spawns[spawn].x + this.spawns[spawn].w &&
                        this.spawns[spawn].x > this.player.x && this.spawns[spawn].x < (this.player.x + this.player.w) &&
                        this.player.y < this.spawns[spawn].y + this.spawns[spawn].h &&
                        this.player.y + this.player.h > this.spawns[spawn].y) {
                        if (this.spawns[spawn].counted == false) {
                            this.setScore(this.spawns[spawn]);
                            this.spawns[spawn].counted = true;
                        }
                        this.ctx.clearRect(this.spawns[spawn].x, this.spawns[spawn].y, this.spawns[spawn].w, this.spawns[spawn].h);
                        delete this.spawns[spawn];
                    }
                }
            }
            else {
                if (this.spawns[spawn].counted == false && this.spawns[spawn].t == 'posion') {
                    this.setScore(this.spawns[spawn]);
                    this.spawns[spawn].counted = true;
                    delete this.spawns[spawn];
                }
            }
        }
    };
    GamePage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    GamePage.prototype.randomColor = function () {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };
    GamePage.prototype.randomPastel = function (colorNum, colors) {
        if (colors < 1)
            colors = 1; // defaults to one color - avoid divide by zero
        return "hsl(" + (colorNum * (360 / colors) % 360) + ",100%,80%)";
    };
    GamePage.prototype.setScore = function (spawn) {
        var newPts = Math.round(spawn.p * this.scoreMultiplier);
        this.score = this.score + newPts;
    };
    GamePage.prototype.setPlayerColor = function () {
        if (this.score < 1000) {
            this.player.c = '#ffffff';
        }
        else if (this.score > (this.lastThousand + 1000)) {
            this.scoreMultiplier = this.scoreMultiplier + .25;
            this.lastThousand = this.score;
            this.player.c = this.randomPastel(this.getRandomInt(1, 32), 32);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('canvas'),
        __metadata("design:type", Object)
    ], GamePage.prototype, "canvas", void 0);
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/Users/jasonsnider/dont-die/src/pages/game/game.html"*/'<ion-content if="canvas" (tap)="changeDirection()">\n  <div id="scorePanel">  \n    Score: {{ score }}\n  </div>\n  <canvas></canvas>\n</ion-content>\n'/*ion-inline-end:"/Users/jasonsnider/dont-die/src/pages/game/game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.toGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jasonsnider/dont-die/src/pages/home/home.html"*/'<ion-content>\n  <h1 text-center>Don\'t Die</h1>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <button class="start-button" ion-button large  (tap)="toGame()">\n          <br>START<br><br>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row align-items-center>\n      <ion-col class="game-play" text-center>\n        <br><br>  \n        Tap the screen to change direction. <br><br>  \n        Touching a yellow sprite ends the game.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jasonsnider/dont-die/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_game_game_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_game_over_game_over_module__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/game-over/game-over.module#GameOverPageModule', name: 'GameOverPage', segment: 'game-over', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game/game.module#GamePageModule', name: 'GamePage', segment: 'game', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__pages_game_game_module__["GamePageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_game_over_game_over_module__["GameOverPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            // let status bar overlay webview
            statusBar.overlaysWebView(true);
            // set status bar to white
            statusBar.backgroundColorByHexString('#000000');
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jasonsnider/dont-die/src/app/app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/jasonsnider/dont-die/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map