const fs = require('fs');
// read content from file-1 and file-2 write the data into file-3

console.log('Global code starts here...')

fs.readFile('./file_1.txt', 'utf8', (err, data1) => {
    console.log(data1)
    fs.readFile('./file_2.txt', 'utf8', (err, data2) => {
        console.log(data2)
        fs.writeFile('./file_3.txt', `${data1}\n${data2}`, (err, data) => {
            console.log('Data added to file-3')
        })
    })
})

console.log('Global code ends here...')