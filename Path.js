const path = require('path');

const normalizePath = path.normalize("E://NodeJS//..");
console.log("Normalized path is:", normalizePath);

const joinedPath = path.join("E:/NodeJS", "abc.txt");
console.log("Joined path is:", joinedPath);

const extName = path.extname("E:/NodeJS");
console.log("Extension name is:", extName);

const baseName = path.basename("E:/NodeJS");
console.log("Base name is:", baseName);

const directoryName = path.dirname("E:/NodeJS");
console.log("Directory name is:", directoryName);