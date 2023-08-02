const {writeFile,readFile} = require('fs')
const {promisify} = require('util')

const readFileasync = promisify(readFile);
const writeFileasync = promisify(writeFile);

const file_handler = async()=>{
	try {
		const content = await writeFileasync('./data.txt',"This   is   a long string");
		try {
			const data = await readFileasync('./data.txt','utf-8');
			console.log("file data are",data);
            let count_word = function countWords(str) {
                const a = str.split(' ');
              
                return a.filter(word => word !== '').length;
              }
              console.log(count_word(data)); 
		} catch (error) {
			throw error;
		}
	} catch (error) {
		throw error;
	}
}

file_handler();
