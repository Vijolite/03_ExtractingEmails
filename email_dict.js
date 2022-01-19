const fs = require("fs");
const file =fs.readFileSync("test.txt","utf8");

var counter = 0;

let re = /@(\S+)\b/g; //    let re =/@\w+\.\w+\.*\w*[\W//g]/g; 
//let re = /@\w+\.\w+\.*\w*[\W//g][^\r\n)+]/g;
var emailArray = file.match(re);

var emailDict ={};
for (let i=0;i<emailArray.length;i++){
    emailArray[i]=emailArray[i].substring(0,emailArray[i].length-1);
    if (emailArray[i] in emailDict) {
        emailDict[emailArray[i]]++;
    }
    else {
        emailDict[emailArray[i]]=1;
    }
}


console.log(emailArray);
console.log(emailArray.length);
console.log(emailDict);

let sortable = [] ;
for (var dom in emailDict){
    sortable.push([dom, emailDict[dom]]);
}
sortable.sort(function(a,b){
    return b[1] - a[1];
});
console.log(sortable);

