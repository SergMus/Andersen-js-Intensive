
function currying(fn) {
    return function(...a) {
        return function(...b){
            if(!arguments.length) return fn(a)
            return function(...c) {
                if(!arguments.length) return fn(a,b)
                return fn(a,b,c); 
            }
        }
    }
}

function sumStr (...strs) {
    let separator = "", result = "";

    for (let str of strs) {
        if (str[0] && typeof str[0] !== "string") 
        throw new Error('typeof of arguments isn`t a string!!!');
        if (str[0]) result += str[0];
        if (str[1]) separator = str[1];

        result += separator;
    }
    
    if(separator.length) result = result.slice(0, result.length-1);

    return result;
}

let concatStrings = currying(sumStr);





class Calculator {
    constructor(num1, num2){
      if (!this.isNumeric(num1) || 
      !this.isNumeric(num2)) throw new Error('params must be a number!')

      this.num1 = num1
      this.num2 = num2
    }
    
    isNumeric(num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    }

    randomNum(num) {
       return Math.floor(Math.random(num) * 100) + 1
    }
    
    setX(num1){
        if (arguments.length < 1) throw new Error ('Please, add some parameter')
        return this.randomNum(num1)
    }

    setY(num2){
        if (arguments.length < 1) throw new Error ('Please, add some parameter')
        return this.randomNum(num2)
    }

    logSum(){
        return console.log(this.num1 + this.num2);
    }

    logMul(){
        return console.log(this.num1 * this.num2);
    }

    logSub(){
        return console.log(this.num1 - this.num2);
    }

    logDiv(){
        if(this.num2 === 0) throw new Error('num2 cannot be a 0')
        return console.log(this.num1 / this.num2);
    }
}
