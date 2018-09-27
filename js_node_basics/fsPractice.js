const fs = require("fs");

function listFiles(dirName) {
  // fs is the FileSystem
  fs.readdir(dirName, (err, data) => {
    if(err) {
      console.log(`could not read directory ${err}`);
    } else {
      console.log(data);
    }
  });
}

listFiles('./modules_practice');
listFiles('./sadfasdfadsfafsd');


function handleFileData(error, fileData) {
  if(error) {
    console.log(`could not read directory ${error}`);
  } else {
    console.log(fileData);
  }
}

fs.readdir(dirName, handleFileData);