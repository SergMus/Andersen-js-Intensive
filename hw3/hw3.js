
Array.prototype.myFilter = function (callback, objectArg) {

    let contextObj = this;

    if (arguments.length > 1) {
      contextObj = objectArg;
    }

    let result = [];

    for(let i = 0; i < this.length; i++) {
      if(i in this) {

        let current = this[i];

       if(callback.call(contextObj, current, i, this)) {
         result.push(current)
       }  

      }
    }

    return result;
}



const createDebounceFunction = (log, ms)=> {
  let timer;

  return function () {

    const debounceLog =()=> {
      return log.apply(this, arguments)
    }

    clearTimeout(timer);

    timer = setTimeout(debounceLog, ms)
  }
}



