const child_process = require('child_process');

child_process.exec("cp.txt",(err,stdout,stdin)=>{
    if(err) throw err;
    console.log(stdout);
});

child_process.exec("java Fh",(err,stdout,stdin)=>{
    if(err) throw err;
    console.log(stdout);
});