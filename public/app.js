"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "../node_modules/express";
// import *  '../node_modules/path-is-absolute';
// import canvas from 'canvas';
const express_1 = __importDefault(require("express"));
// 
const path_1 = __importDefault(require("../node_modules/path"));
// import {path} from "path";e
const app = (0, express_1.default)();
console.log("hererer");
const root_dir = path_1.default.join(path_1.default.dirname(), '..');
// console.log(root_dir + '/public');
// console.log(path.join(root_dir, 'views'));
// console.log(path.join(root_dir, 'public/classes'));
// asdfasgsdf
//sadlkjflsdkjf;
//tsc --build ./tsconfig.json -w
app.set("view engine", 'ejs');
// app.use(express.static(root_dir + '/views'));
// app.use(express.static(root_dir + '/public/views/assets'));
// wtf it's fucking working!!
app.use(express_1.default.static('public'));
app.use(express_1.default.static('public/classes'));
app.use(express_1.default.static('views'));
// app.use(express.static(path.join(root_dir, 'public/assets')));
// app.use(express.static(path.join(root_dir, 'public/')));
const PORT = 3000;
// console.log(root_dir, 'views');
let data;
var x = 0;
var y = 0;
app.get("/", (req, res) => {
    // res.send("Hello uwu bitch");
    // res.render('background', {coordinates: data});
    res.render('background');
    // coordinates = req.f
});
app.listen(PORT, () => {
    console.log(`listening from port: ${PORT}`);
});
// app.listen(5010,function(){
//     console.log("server is running on port 5010");
//  });
// $(document).ready(function(){
// window.globalX = 20;
// }app
// declare let window
