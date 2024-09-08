const fs = require('fs');

fs.exists("cp.txt",(err)=>{
        if(err){
        console.log("file found");
    }
    else{
        console.log("file not found");
    }
});

data = fs.stat("cp.txt",(err,data)=>{
    console.log(data);
});

data = fs.readFile("cp.txt",(err,data)=>{
    console.log(data.toString());
});

data = fs.writeFile("cp.txt","yash patel",(err)=>{
    console.log("file written successfully");
});

data = fs.appendFile("cp.txt"," fraudy",(err)=>{
    console.log("file appended successfully");
});

data = fs.unlink("cp.txt",(err)=>{
    console.log("file deleted successfully");
});