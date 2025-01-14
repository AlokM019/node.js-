
// const fs = require('fs')

// // console.log(chalk.red.underline.inverse("Hello World"))
// fs.readFile("npmModule/package.json","utf-8", (err,data)=> {
//    if(err){
//       console.log(err)
//    }
//    else{console.log(data)}
// }


// const chalk = require('chalk')
import chalk from 'chalk';
console.log(chalk.green.italic.bold.inverse("Success"))
console.log(chalk.red.inverse('fail'))


console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
  
))

console.log(`coloring the words by their color name : ${chalk.red("Red")}, ${chalk.green('Green')}, ${chalk.blue("Blue")}, ${chalk.white("White")}, ${chalk.cyan.underline('some')}`)


// const validator = require('validator')

import validator from "validator";


const response = validator.isEmail("alok1@some.com")
const res = validator.isAlphanumeric("sfdsf5")
console.log(response ? chalk.green(response): chalk.red(response))
console.log(res ?  chalk.green(res): chalk.red(res))

console.log("something that never changes")

console.log(chalk.red("color"))

const fun = function (arr){
	console.log("this function does print some numbers ")
	for(let i=0; i<arr.length; i++){
		console.log(chalk.blueBright(arr[i]*3))
	}
	
}

let arr = [1,2,3,4,5,6,7,8,9,10]
fun(arr)