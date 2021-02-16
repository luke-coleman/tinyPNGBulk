const tinify = require("tinify");
tinify.key = "enter key here";

const directoryName = "./unop/";
const optimisedDir = "./op/"
const fs = require('fs');

fs.readdir(directoryName, function (err, files) {
    if (err) throw err;
  
    var filenames = [];
    for (var index in files) {
      console.log(files[index]);
      filenames.push(files[index]);
    }
    console.log(filenames.length);
    for(var i = 0; i < filenames.length; i++){
        if(i == 0){
            console.log(filenames[i] + " is not a valid file.");
        } else {
            let source = tinify.fromFile(directoryName+filenames[i]);
            source.toFile(optimisedDir+filenames[i]);
        }
    }
  });