const fs = require('fs');
const { encode } = require('punycode');
//const{resolve}= require('path')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent, (error)=>{
		//console.log(error);
		console.log("i am write  function")
	})

}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name

	const data = await fs.readFile(fileName, {encoding:"utf-8"},(error,data)=>{
		console.log(data);
		//console.log(error);
		console.log("i am read  function")
	})
	console.log(data)
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName, fileContent, (error)=>{
		// console.log(error);
		// console.log(data);
		console.log("i am update  function")

	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName, (error)=>{
		//console.log(error)
		console.log("i am delete  function")
	});
}


// myFileWriter("text.txt","Hello")
// myFileReader("text.txt")
// myFileUpdater("text.txt", " World")
// myFileReader("text.txt")
// // myFileDeleter("text.txt")
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }