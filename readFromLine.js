if ((process.argv).length>2){
    console.log("Hello", process.argv[2])
    }
else if (process.env.USERNAME){
    let USERNAME=process.env.USERNAME;
    console.log("Hello "+USERNAME);
}
else {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    }); 
        readline.question(`Please enter your name Shashank: `, name => {
        console.log(`Hello ${name}`);
        readline.close();
    });
}  