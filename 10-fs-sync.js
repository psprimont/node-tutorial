// require fs - this method will require falling the fs module each time a method is invoked, ie: fs.whateverMethod
const fs = require('fs');

// an alternative is the following, which only invokes particular methods from the fs module
// const { readFileSync, writeFileSync } = require ('fs');
// with this method you won't need to preface methods with fs.

// reads the data from files
const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/second.txt', 'utf8')

// writes the data from files; in this case, creates a new file; then, using flag, appends to the same file
fs.writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a'} 
    );