// require fs - this method will require falling the fs module each time a method is invoked, ie: fs.whateverMethod
const fs = require('fs');

// an alternative is the following, which only invokes particular methods from the fs module
// const { readFileSync, writeFileSync } = require ('fs');
// with this method you won't need to preface methods with fs.

fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        } 
        const second = result;
        fs.writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if (err) {
                    console.log(err);
                    return
                }
            })
    })
} )