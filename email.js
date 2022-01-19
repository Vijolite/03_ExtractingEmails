const fs = require("fs");
const file =fs.readFileSync("test.txt","utf8");

var counter = 0;

let re = /@softwire\.com[\W//g]/g;
var softwireArray = file.match(re);
var softwireArrayAll = file.matchAll(re);

console.log(softwireArray);

let c=0;
for (m of softwireArrayAll) {
    console.log(`reg exp ${m[0]}, index =${m.index}`);
    c++;
}

console.log(softwireArray.length);
console.log(c);//(softwireArrayAll[0].length);


// for(var i = 0; i < file.length;i++){
//   if ((file.substring(i, i+13) === '@softwire.com')) { counter = counter + 1 }
// }

// console.log(counter);
