// import express from "../node_modules/express";
// import *  '../node_modules/path-is-absolute';
// import canvas from 'canvas';
import express from "express";
// 
import path from "../node_modules/path";
// import {path} from "path";e
const app = express();
console.log("hererer");

const root_dir = path.join(path.dirname(), '..');

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
app.use(express.static('public'));
app.use(express.static('public/classes'));
app.use(express.static('views'));

// app.use(express.static(path.join(root_dir, 'public/assets')));
// app.use(express.static(path.join(root_dir, 'public/')));

const PORT = 3000;
// console.log(root_dir, 'views');

let data: {x: number, y: number, path: string};

var x = 0;
var y = 0;

app.get("/", (req, res)=>{
    // res.send("Hello uwu bitch");
    // res.render('background', {coordinates: data});
    res.render('background');
    // coordinates = req.f
});




app.listen(PORT, () =>{
    console.log(`listening from port: ${PORT}`);
});

// app.listen(5010,function(){
//     console.log("server is running on port 5010");
//  });

// $(document).ready(function(){
// window.globalX = 20;
// }app


// declare let window
