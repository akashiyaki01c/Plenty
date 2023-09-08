/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Phaser = __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'phaser'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nconst game_1 = __webpack_require__(/*! ./scene/game */ \"./src/scene/game.ts\");\nconst startScene_1 = __webpack_require__(/*! ./scene/startScene */ \"./src/scene/startScene.ts\");\nconst ua_parser_js_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ua-parser-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst config = {\n    type: Phaser.AUTO,\n    width: 800,\n    height: 600,\n    pixelArt: false,\n    parent: 'game-app',\n    scene: [\n        startScene_1.StartScene,\n        game_1.Game\n    ],\n    physics: {\n        default: \"arcade\",\n        arcade: {\n            gravity: { y: 0, x: 0 },\n            debug: false,\n        }\n    },\n    scale: {\n        mode: Phaser.Scale.FIT,\n    },\n};\nnew Phaser.Game(config);\n{\n    let uaParser = new ua_parser_js_1.UAParser();\n    console.log(uaParser.getResult());\n    if (uaParser.getOS().name === \"Android\" || uaParser.getOS().name === \"iOS\") {\n        console.error(\"スマートフォンには対応していません。\");\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/model/notes/note.ts":
/*!*********************************!*\
  !*** ./src/model/notes/note.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DefaultNote = void 0;\nclass DefaultNote {\n    constructor(timing, leftLayer, rightLayer, type) {\n        this.id = \"\";\n        this.timing = 0;\n        // object: Phaser.GameObjects.Image | null = null;\n        this.type = \"\";\n        this.leftLayer = 0;\n        this.rightLayer = 0;\n        this.toString = () => {\n            return `${this.id}`;\n        };\n        this.timing = timing;\n        this.leftLayer = leftLayer || 0;\n        this.rightLayer = rightLayer || 0;\n        this.type = type || \"normal\";\n        this.id = `${timing}_${this.type}_${leftLayer}`;\n    }\n}\nDefaultNote.END = () => { return new DefaultNote(undefined, 0, 0, \"END\"); };\nexports.DefaultNote = DefaultNote;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/model/notes/note.ts?");

/***/ }),

/***/ "./src/model/notes/noteObject.ts":
/*!***************************************!*\
  !*** ./src/model/notes/noteObject.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NoteObject = void 0;\nclass NoteObject {\n    constructor(note, gameObject) {\n        this.isDrawn = () => this.gameObject !== undefined;\n        this.isFailed = false;\n        this.note = note;\n        this.gameObject = gameObject;\n    }\n}\nexports.NoteObject = NoteObject;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/model/notes/noteObject.ts?");

/***/ }),

/***/ "./src/model/notes/notesManager.ts":
/*!*****************************************!*\
  !*** ./src/model/notes/notesManager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NotesManager = void 0;\nconst note_1 = __webpack_require__(/*! ./note */ \"./src/model/notes/note.ts\");\nconst noteObject_1 = __webpack_require__(/*! ./noteObject */ \"./src/model/notes/noteObject.ts\");\nclass NotesManager {\n    getAllNote() {\n        return this.notes;\n    }\n    ;\n    constructor(notes) {\n        this.notes = [];\n        this.index = 0;\n        this.preloadingCount = 3;\n        this.peek = (i = 0) => {\n            return this.notes[this.index + i] || new noteObject_1.NoteObject(note_1.DefaultNote.END(), undefined);\n        };\n        this.peekAll = () => {\n            let result = new Array();\n            result.push(this.peek());\n            for (let i = 1; i < this.preloadingCount; i++) {\n                let note = this.peek(i);\n                if (result[0].note.timing === note.note.timing) {\n                    result.push(note);\n                }\n            }\n            return result.filter(n => n.note.type !== \"END\");\n        };\n        this.dequeue = () => {\n            if (this.isLast()) {\n                return note_1.DefaultNote.END();\n            }\n            let note = this.notes[this.index];\n            this.index += 1;\n            return note;\n        };\n        this.isLast = () => {\n            return this.index >= this.notes.length;\n        };\n        this.notes = notes;\n    }\n}\nexports.NotesManager = NotesManager;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/model/notes/notesManager.ts?");

/***/ }),

/***/ "./src/model/notes/scoreManager.ts":
/*!*****************************************!*\
  !*** ./src/model/notes/scoreManager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ScoreManager = void 0;\nclass ScoreManager {\n    constructor() {\n        this.combo = 0; // コンボ数\n        this.perfectCount = 0; // 良の数\n        this.greatCount = 0; // 可の数\n        this.coolCount = 0; // 不可の数\n        this.score = 0; // スコア\n    }\n    perfect() {\n        this.combo += 1;\n        this.perfectCount += 1;\n        this.score += 100;\n    }\n    great() {\n        this.combo += 1;\n        this.greatCount += 1;\n        this.score += 50;\n    }\n    cool() {\n        this.combo = 0;\n        this.coolCount += 1;\n    }\n    toString() {\n        return `{combo: ${this.combo}, count: ${this.perfectCount}/${this.greatCount}/${this.coolCount}, score: ${this.score}}`;\n    }\n}\nexports.ScoreManager = ScoreManager;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/model/notes/scoreManager.ts?");

/***/ }),

/***/ "./src/model/song/songConfig.ts":
/*!**************************************!*\
  !*** ./src/model/song/songConfig.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SongConfig = void 0;\nclass SongConfig {\n    constructor() {\n        // [ms]\n        this.measures = [];\n        this.title = \"\";\n    }\n}\nexports.SongConfig = SongConfig;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/model/song/songConfig.ts?");

/***/ }),

/***/ "./src/model/song/songConfigParser.ts":
/*!********************************************!*\
  !*** ./src/model/song/songConfigParser.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ParseGameMeasureTiming = exports.ParseGameNotes = exports.ParseSongConfig = void 0;\nconst note_1 = __webpack_require__(/*! ../notes/note */ \"./src/model/notes/note.ts\");\nconst noteObject_1 = __webpack_require__(/*! ../notes/noteObject */ \"./src/model/notes/noteObject.ts\");\nconst songConfig_1 = __webpack_require__(/*! ./songConfig */ \"./src/model/song/songConfig.ts\");\nfunction ParseSongConfig(obj) {\n    let result = new songConfig_1.SongConfig();\n    if (obj.measures === undefined) {\n        return result;\n    }\n    for (let i = 0; i < obj.measures.length; i++) {\n        result.measures.push({\n            count: i,\n            bpm: obj.measures[i].bpm || 120,\n            beatCount: obj.measures[i].beatCount || 4,\n            notes: obj.measures[i].notes\n        });\n    }\n    return result;\n}\nexports.ParseSongConfig = ParseSongConfig;\nfunction ParseGameNotes(config) {\n    let result = [];\n    let measureStartTime = 0; // 小節はじめの秒数\n    for (const measure of config.measures) {\n        const beatTime = 60 / measure.bpm * 1000;\n        for (const note of measure.notes) {\n            result.push(new noteObject_1.NoteObject(new note_1.DefaultNote(measureStartTime + beatTime * note.position, note.leftLayer, note.rightLayer, note.type), undefined));\n        }\n        measureStartTime += beatTime * measure.beatCount;\n    }\n    return result;\n}\nexports.ParseGameNotes = ParseGameNotes;\n// 小節はじめのバーを描画するタイミングを返す関数\nfunction ParseGameMeasureTiming(config) {\n    let result = [];\n    let measureStartTime = 0;\n    for (const measure of config.measures) {\n        const beatTime = 60 / measure.bpm * 1000;\n        result.push(measureStartTime);\n        measureStartTime += beatTime * measure.beatCount;\n    }\n    return result;\n}\nexports.ParseGameMeasureTiming = ParseGameMeasureTiming;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/model/song/songConfigParser.ts?");

/***/ }),

/***/ "./src/scene/game.ts":
/*!***************************!*\
  !*** ./src/scene/game.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Game = void 0;\nconst Phaser = __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'phaser'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nconst input_1 = __webpack_require__(/*! ./input */ \"./src/scene/input.ts\");\nconst scoreManager_1 = __webpack_require__(/*! ../model/notes/scoreManager */ \"./src/model/notes/scoreManager.ts\");\nconst spawnChecker_1 = __webpack_require__(/*! ./game/spawnChecker */ \"./src/scene/game/spawnChecker.ts\");\nconst measureLineSpawner_1 = __webpack_require__(/*! ./game/measureLineSpawner */ \"./src/scene/game/measureLineSpawner.ts\");\nconst notesSpawner_1 = __webpack_require__(/*! ./game/notesSpawner */ \"./src/scene/game/notesSpawner.ts\");\nconst fixedLineSpawner_1 = __webpack_require__(/*! ./game/fixedLineSpawner */ \"./src/scene/game/fixedLineSpawner.ts\");\nconst pressLineSpawner_1 = __webpack_require__(/*! ./game/pressLineSpawner */ \"./src/scene/game/pressLineSpawner.ts\");\nclass Game extends Phaser.Scene {\n    constructor() {\n        super('maingame');\n        this.songAudioPath = \"\";\n        this.songConfigPath = \"\";\n        this.spawnChecker = new spawnChecker_1.SpawnChecker(this); // ノーツ生成/破棄タイミング\n        this.measureLineSpawner = new measureLineSpawner_1.MeasureLineSpawner(this); // 小節線を管理するクラス\n        this.notesSpawner = new notesSpawner_1.NotesSpawner(this); // ノーツオブジェクトを管理するクラス\n        this.scoreManager = null; // スコアを管理するクラス\n        this.songConfig = null; // 譜面の設定を保持するクラス\n        this.fixedLineSpawner = new fixedLineSpawner_1.FixedLineSpawner(this); // 固定線を保持するクラス\n        this.pressLineSpawner = new pressLineSpawner_1.PressLineSpawner(this); // 押下線を保持するクラス\n        this.debugText = null;\n        this.debugText2 = null;\n        this.debugText3 = null;\n        this.notesSpeed = 500; // ノーツの速度 [pixel/s]\n        this.hitScale = 0.75; // 画面高さと判定線高さの比率\n        this.layerWidth = 75; // レイヤ幅\n        this.hitHeight = 30; // ノーツ幅\n        this.startTime = 0; // このシーンが初期化された際の時間を保持\n        this.updateTime = 0; // 現在の時間を保持\n        this.offset = 2000; // オフセット [ms]\n        this.keys = null;\n        this.scoreManager = new scoreManager_1.ScoreManager();\n    }\n    init(data) {\n        this.songAudioPath = data.songAudioPath;\n        this.songConfigPath = data.songConfigPath;\n        console.log(this.songAudioPath, this.songConfigPath);\n    }\n    // アセットの読み込みを行う関数\n    preload() {\n        this.load.image(\"robot\", \"./assets/robot.png\");\n        this.load.image(\"street\", \"./assets/street.png\");\n        this.load.image(\"note\", \"./assets/note_test.png\");\n        this.load.image(\"measureline\", \"./assets/measureline.png\");\n        this.load.audio(\"song\", \"./data/\" + this.songAudioPath);\n        this.load.json(\"songConfig\", \"./data/\" + this.songConfigPath);\n    }\n    // 入力イベントを割り当てる関数\n    createInputEvent() {\n        this.keys = new input_1.Input(this);\n        this.keys.D.onDown = () => this.keyDown(0);\n        this.keys.D.onUp = () => this.keyUp(0);\n        this.keys.F.onDown = () => this.keyDown(1);\n        this.keys.F.onUp = () => this.keyUp(1);\n        this.keys.G.onDown = () => this.keyDown(2);\n        this.keys.G.onUp = () => this.keyUp(2);\n        this.keys.H.onDown = () => this.keyDown(3);\n        this.keys.H.onUp = () => this.keyUp(3);\n        this.keys.J.onDown = () => this.keyDown(4);\n        this.keys.J.onUp = () => this.keyUp(4);\n        this.keys.K.onDown = () => this.keyDown(5);\n        this.keys.K.onUp = () => this.keyUp(5);\n        this.keys.Mouse.onMouseDown = (v) => { console.log(v); };\n        this.keys.Mouse.startListeners();\n    }\n    createDebugText() {\n        this.debugText = this.add.text(0, 0, \"\").setFontFamily(\"Ubuntu Mono\");\n        this.debugText2 = this.add.text(0, 35, \"\").setFontFamily(\"Ubuntu Mono\");\n        this.debugText3 = this.add.text(0, 70, \"\").setFontFamily(\"Ubuntu Mono\");\n    }\n    // ゲーム生成時に呼び出される関数\n    create() {\n        this.songConfig = this.cache.json.get(\"songConfig\");\n        this.spawnChecker.create();\n        this.measureLineSpawner.create();\n        this.notesSpawner.create();\n        this.fixedLineSpawner.create();\n        this.pressLineSpawner.create();\n        this.createInputEvent();\n        this.createDebugText();\n    }\n    ;\n    // ノーツとのずれから判定を下す関数\n    // delay: ノーツと押下時のズレ\n    judgeNote(delay) {\n        if (Math.abs(delay) < 50) {\n            return \"良\";\n        }\n        else if (Math.abs(delay) < 80) {\n            return \"可\";\n        }\n        else if (Math.abs(delay) < 110) {\n            return \"不可\";\n        }\n        else {\n            return ``;\n        }\n    }\n    // 入力キーが押された時に呼び出される関数\n    keyDown(layer) {\n        var _a, _b, _c;\n        this.pressLineSpawner.pressLine[layer].alpha = 1;\n        const notes = this.notesSpawner.displayNotes\n            .filter(n => n.note.leftLayer <= layer || layer <= n.note.rightLayer) // レイヤ判定\n            .filter(n => !n.isFailed) // 不可を取り除く\n            .filter(n => {\n            const noteTimingGap = (this.updateTime - this.offset + this.spawnChecker.spawnTimeOffset) - n.note.timing;\n            return (Math.abs(noteTimingGap) < 200);\n        })\n            .sort((a, b) => {\n            const aTimeGap = Math.abs((this.updateTime - this.offset) - a.note.timing);\n            const bTimeGap = Math.abs((this.updateTime - this.offset) - b.note.timing);\n            return aTimeGap - bTimeGap;\n        });\n        console.log(notes);\n        const note = notes[0];\n        if (note === undefined) {\n            return;\n        }\n        const noteTimingGap = (this.updateTime - this.offset + this.spawnChecker.spawnTimeOffset) - (note === null || note === void 0 ? void 0 : note.note.timing);\n        switch (this.judgeNote(noteTimingGap)) {\n            case \"良\":\n                this.debugText2.text = `良 ${((this.updateTime - this.offset + this.spawnChecker.spawnTimeOffset) - (note === null || note === void 0 ? void 0 : note.note.timing)).toFixed(2)}`;\n                this.scoreManager.perfect();\n                (_a = note.gameObject) === null || _a === void 0 ? void 0 : _a.destroy();\n                this.notesSpawner.displayNotes = this.notesSpawner.displayNotes.filter(n => n.note.id !== note.note.id);\n                break;\n            case \"可\":\n                this.debugText2.text = `可 ${((this.updateTime - this.offset + this.spawnChecker.spawnTimeOffset) - (note === null || note === void 0 ? void 0 : note.note.timing)).toFixed(2)}`;\n                this.scoreManager.great();\n                (_b = note.gameObject) === null || _b === void 0 ? void 0 : _b.destroy();\n                this.notesSpawner.displayNotes.pop();\n                break;\n            case \"不可\":\n                this.debugText2.text = `不可1 ${((this.updateTime - this.offset + this.spawnChecker.spawnTimeOffset) - (note === null || note === void 0 ? void 0 : note.note.timing)).toFixed(2)}`;\n                this.scoreManager.cool();\n                (_c = note.gameObject) === null || _c === void 0 ? void 0 : _c.destroy();\n                this.notesSpawner.displayNotes.pop();\n                break;\n            default:\n                this.debugText2.text = `不可2 ${((this.updateTime - this.offset + this.spawnChecker.spawnTimeOffset) - (note === null || note === void 0 ? void 0 : note.note.timing)).toFixed(2)}`;\n        }\n    }\n    // 入力キーが離された時に呼び出される関数\n    keyUp(layer) {\n        this.pressLineSpawner.pressLine[layer].alpha = 0;\n    }\n    // 毎フレーム呼び出される関数\n    // time: 現在の秒数 [ms]\n    update(time, delta) {\n        if (this.startTime === 0) {\n            this.startTime = time;\n            setTimeout(() => this.sound.play(\"song\"), this.offset - this.spawnChecker.spawnTimeOffset);\n        }\n        this.updateTime = time - this.startTime;\n        this.measureLineSpawner.update(this.updateTime);\n        this.notesSpawner.update(this.updateTime);\n        this.debugText.text = `time: ${this.startTime.toFixed(2)}/${time.toFixed(2)}/${this.updateTime.toFixed(2)} (fps: ${(1 / (delta * 0.001)).toFixed(2)})\\nnote: [${this.notesSpawner.notesManager.peekAll().map(n => n.toString()).join(\", \")}] notesCount: ${this.notesSpawner.displayNotes.length}`;\n        this.debugText3.text = `combo: ${this.scoreManager}`;\n    }\n}\nexports.Game = Game;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scene/game.ts?");

/***/ }),

/***/ "./src/scene/game/fixedLineSpawner.ts":
/*!********************************************!*\
  !*** ./src/scene/game/fixedLineSpawner.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FixedLineSpawner = void 0;\nclass FixedLineSpawner {\n    constructor(game) {\n        this.game = null;\n        this.container = null;\n        this.game = game;\n    }\n    create() {\n        let objs = [];\n        objs.push(this.game.add.line(this.game.sys.canvas.width * .5, this.game.sys.canvas.height * this.game.hitScale + this.game.hitHeight * .5, 0, 0, this.game.layerWidth * 6, 0, 0xFFFFFF));\n        objs.push(this.game.add.line(this.game.sys.canvas.width * .5, this.game.sys.canvas.height * this.game.hitScale - this.game.hitHeight * .5, 0, 0, this.game.layerWidth * 6, 0, 0xFFFFFF));\n        for (let i = -3; i <= 3; i++) {\n            let line = this.game.add.line(this.game.sys.canvas.width * .5 + i * this.game.layerWidth, this.game.sys.canvas.height * .5, 0, 0, 0, this.game.sys.canvas.height, 0xFFFFFF);\n            objs.push(line);\n        }\n        this.container = this.game.add.container(0, 0, objs);\n    }\n}\nexports.FixedLineSpawner = FixedLineSpawner;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scene/game/fixedLineSpawner.ts?");

/***/ }),

/***/ "./src/scene/game/measureLineSpawner.ts":
/*!**********************************************!*\
  !*** ./src/scene/game/measureLineSpawner.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MeasureLineSpawner = void 0;\nconst songConfigParser_1 = __webpack_require__(/*! ../../model/song/songConfigParser */ \"./src/model/song/songConfigParser.ts\");\n// 小節線の生成/破棄を行うクラス\nclass MeasureLineSpawner {\n    constructor(game) {\n        this.game = null;\n        this.container = null;\n        this.measureLines = []; // 小節線の一覧 [ms]\n        this.displayMeasureLines = []; // 表示中の小節線の一覧\n        this.game = game;\n    }\n    create() {\n        this.measureLines = (0, songConfigParser_1.ParseGameMeasureTiming)(this.game.songConfig);\n        this.container = this.game.add.container();\n    }\n    // 小節線を出現させる関数\n    spawnMeasureLine() {\n        let obj = this.game.physics.add.image(this.game.sys.canvas.width / 2, 0, \"measureline\");\n        obj.setDisplaySize(this.game.layerWidth * 6, 2);\n        obj.setVelocityY(this.game.notesSpeed);\n        obj.setFriction(0, 0, 0);\n        this.container.add(obj);\n        return obj;\n    }\n    // 小節線が出現するかを判定する関数\n    spawnMeasureLineCheck(time) {\n        let measureTime = this.measureLines[0];\n        if (time - this.game.offset >= this.game.spawnChecker.getSpawnTiming(measureTime)) {\n            this.measureLines.shift();\n            this.displayMeasureLines.push({ timing: measureTime, object: this.spawnMeasureLine() });\n        }\n    }\n    // 小節線が破棄されるかを判定する関数\n    despawnMeasureLineCheck(time) {\n        if (this.displayMeasureLines === null || this.displayMeasureLines.length === 0)\n            return;\n        if (time >= this.game.spawnChecker.getDespawnTiming(this.displayMeasureLines[0].timing)) {\n            this.displayMeasureLines[0].object.destroy();\n            this.displayMeasureLines.shift();\n        }\n    }\n    // time: [ms]\n    update(time) {\n        this.spawnMeasureLineCheck(time);\n        this.despawnMeasureLineCheck(time);\n    }\n}\nexports.MeasureLineSpawner = MeasureLineSpawner;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scene/game/measureLineSpawner.ts?");

/***/ }),

/***/ "./src/scene/game/notesSpawner.ts":
/*!****************************************!*\
  !*** ./src/scene/game/notesSpawner.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NotesSpawner = void 0;\nconst notesManager_1 = __webpack_require__(/*! ../../model/notes/notesManager */ \"./src/model/notes/notesManager.ts\");\nconst songConfigParser_1 = __webpack_require__(/*! ../../model/song/songConfigParser */ \"./src/model/song/songConfigParser.ts\");\n// ノーツを生成/破棄するクラス\nclass NotesSpawner {\n    constructor(game) {\n        this.game = null;\n        this.container = null;\n        this.notesManager = null; // ノーツを管理するクラス\n        this.displayNotes = []; // 現在描画中のノーツ\n        this.game = game;\n    }\n    // ノーツを出現させる関数\n    spawnNoteObejct(note) {\n        let obj = this.game.physics.add.image(this.game.sys.canvas.width / 2 + (note.note.rightLayer - note.note.leftLayer + 1) / 2 * this.game.layerWidth - this.game.layerWidth * 1 - this.game.layerWidth * 2, 0, \"note\");\n        obj.displayWidth = (note.note.rightLayer - note.note.leftLayer + 1) * this.game.layerWidth;\n        obj.setVelocityY(this.game.notesSpeed);\n        obj.setFriction(0, 0, 0);\n        note.gameObject = obj;\n        this.container.add(obj);\n        this.displayNotes.push(note);\n    }\n    // ノーツを破棄する関数\n    despawnNoteObject(note) {\n        var _a;\n        if (note.gameObject !== undefined) {\n            this.game.scoreManager.cool();\n        }\n        (_a = note.gameObject) === null || _a === void 0 ? void 0 : _a.destroy();\n        note.gameObject = undefined;\n    }\n    // ノーツが破棄されるかを判定する関数\n    despawnNotesCheck(time) {\n        for (const n of this.displayNotes) {\n            if (time >= this.game.spawnChecker.getDespawnTiming(n.note.timing)) {\n                this.despawnNoteObject(n);\n                this.displayNotes = this.displayNotes.filter(o => o.note.id !== n.note.id);\n            }\n        }\n    }\n    // ノーツが出現するかを判定する関数\n    spawnNotesCheck(time) {\n        let notes = this.notesManager.peekAll();\n        for (const n of notes) {\n            if (time - this.game.offset >= this.game.spawnChecker.getSpawnTiming(n.note.timing)) {\n                this.notesManager.dequeue();\n                this.spawnNoteObejct(n);\n            }\n        }\n    }\n    create() {\n        this.notesManager = new notesManager_1.NotesManager((0, songConfigParser_1.ParseGameNotes)(this.game.songConfig));\n        this.container = this.game.add.container();\n    }\n    // timing [ms]\n    update(timing) {\n        this.spawnNotesCheck(timing);\n        this.despawnNotesCheck(timing);\n        this.displayNotes.forEach(note => {\n            if (timing - this.game.offset + 110 > note.note.timing) {\n                note.isFailed = true;\n            }\n        });\n    }\n}\nexports.NotesSpawner = NotesSpawner;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scene/game/notesSpawner.ts?");

/***/ }),

/***/ "./src/scene/game/pressLineSpawner.ts":
/*!********************************************!*\
  !*** ./src/scene/game/pressLineSpawner.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PressLineSpawner = void 0;\nclass PressLineSpawner {\n    constructor(game) {\n        this.game = null;\n        this.container = null;\n        this.pressLine = [];\n        this.game = game;\n    }\n    create() {\n        for (let i = -3; i < 3; i++) {\n            let line = this.game.add.line(this.game.sys.canvas.width * .5 + (i * this.game.layerWidth) + this.game.layerWidth * .5, this.game.sys.canvas.height * this.game.hitScale + 6, 0, 0, this.game.layerWidth, 0, 0xFF0000, 1);\n            line.alpha = 0;\n            line.displayHeight = this.game.hitHeight / 2;\n            this.pressLine.push(line);\n        }\n        this.container = this.game.add.container();\n        this.container.add(this.pressLine);\n    }\n}\nexports.PressLineSpawner = PressLineSpawner;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scene/game/pressLineSpawner.ts?");

/***/ }),

/***/ "./src/scene/game/spawnChecker.ts":
/*!****************************************!*\
  !*** ./src/scene/game/spawnChecker.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SpawnChecker = void 0;\n// ノーツの生成/破棄タイミングを確認する関数\nclass SpawnChecker {\n    constructor(game) {\n        this.game = null;\n        this.notesSpeed = null; // ノーツの速度 [pixel/s]\n        this.hitScale = null; // 画面高さと判定線高さの比率\n        this.spawnTimeOffset = 1000; // ノーツ生成から画面上端までの猶予時間 [ms]\n        this.despawnTimeOffset = 2000; // 画面下端からノーツ破棄までの猶予時間 [ms]\n        this.startToHitTime = 0; // 画面上端から判定高までの時間 [ms]\n        this.hitToEndTime = 0; // 判定高から画面下端までの時間 [ms]\n        this.startToEndTime = 0; // 画面上端から画面下端までの時間 [ms]\n        this.getSpawnTiming = null; // ノーツ生成時の秒数を取得する関数 [ms]\n        this.getStartTiming = null; // ノーツが画面上端に触れる秒数を取得する関数 [ms]\n        this.getEndTiming = null; // ノーツが画面下端に触れる秒数を取得する関数 [ms]\n        this.getDespawnTiming = null; // ノーツ破棄時の秒数を取得する関数 [ms]\n        this.getSpawnStartPosition = null; // ノーツ生成時の座標位置を取得する関数 [pixel]\n        this.game = game;\n    }\n    create() {\n        this.notesSpeed = this.game.notesSpeed;\n        this.hitScale = this.game.hitScale;\n        this.startToHitTime = this.game.sys.canvas.height * this.hitScale / this.notesSpeed * 1000;\n        this.hitToEndTime = this.game.sys.canvas.height * (1 - this.hitScale) / this.notesSpeed * 1000;\n        this.startToEndTime = this.game.sys.canvas.height / this.notesSpeed * 1000;\n        this.getSpawnTiming = (timing) => timing - this.startToHitTime - this.spawnTimeOffset;\n        this.getStartTiming = (timing) => timing - this.startToHitTime;\n        this.getEndTiming = (timing) => timing + this.hitToEndTime;\n        this.getDespawnTiming = (timing) => timing + this.hitToEndTime + this.despawnTimeOffset;\n        this.getSpawnStartPosition = () => this.notesSpeed * this.spawnTimeOffset / 1000;\n    }\n}\nexports.SpawnChecker = SpawnChecker;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scene/game/spawnChecker.ts?");

/***/ }),

/***/ "./src/scene/input.ts":
/*!****************************!*\
  !*** ./src/scene/input.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Input = void 0;\nclass Input {\n    constructor(game) {\n        this.D = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);\n        this.F = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);\n        this.G = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);\n        this.H = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);\n        this.J = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);\n        this.K = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);\n        this.Mouse = new Phaser.Input.Mouse.MouseManager(game.input.manager);\n    }\n}\nexports.Input = Input;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scene/input.ts?");

/***/ }),

/***/ "./src/scene/startScene.ts":
/*!*********************************!*\
  !*** ./src/scene/startScene.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StartScene = void 0;\nclass StartScene extends Phaser.Scene {\n    constructor() {\n        super({ key: 'StartScene', active: true });\n    }\n    startGame() {\n        this.scene.start(\"maingame\", {\n            songAudioPath: \"ChikyuSaigono/song.mp3\",\n            songConfigPath: \"ChikyuSaigono/song.json\"\n        });\n    }\n    create() {\n        let text = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'Press SPACE KEY')\n            .setFontSize(64)\n            .setColor('#ff0')\n            .setOrigin(0.5, 1)\n            .setFontFamily(\"Ubuntu Mono\");\n        this.input.on(\"\", () => {\n            this.scene.start(\"maingame\");\n        });\n        let spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);\n        spaceKey.onDown = (e) => { this.startGame(); };\n        this.input.mouse.onMouseDown = (e) => { this.startGame(); };\n    }\n}\nexports.StartScene = StartScene;\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scene/startScene.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;