
const add = function(a, b){
   return a+b
}


const sub = (a,b) => {
   return a-b;
}

const mult = (a,b) => {
   return a*b;
}

function iterable_obj(...args){
   if(args = []){
      for(let i =0 ; i<args.length; i++){
         console.log(args[i])
      }
   }
}

let name = "Name1"

module.exports = {add, sub, mult , name, iterable_obj}