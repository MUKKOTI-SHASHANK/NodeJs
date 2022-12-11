const {myFileWriter, myFileUpdater, myFileReader, myFileDeleter } = require("./index")

myFileWriter("text.txt","Hello")
myFileReader("text.txt")
myFileUpdater("text.txt", " World")
myFileReader("text.txt")
// myFileDeleter("text.txt")