const makeObjectDeepCopy = (obj) => {
  if (typeof obj != "object" || obj === null) {
    throw new Error("obj type must be an Object");
  } else {
    let newObj = {};

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key];
      }
    }

    return newObj;
  }
};



const selectFromInterval = (arr, num1, num2) => {
  if (!Array.isArray(arr) || typeof num1 != "number" || typeof num2 != "number")
    throw new Error("Ошибка!");

  const array = arr.find((item) => typeof item != "number");
  if (array != undefined) throw new Error("Ошибка!");

  if (num2 < num1) {
    return arr.filter((item) => item <= num1 && item >= num2);
  } else {
    return arr.filter((item) => item >= num1 && item <= num2);
  }
};



const myIterable = {
  from: 1,
  to: 5,
};

myIterable[Symbol.iterator] = function () {
  if (typeof this.from != "number" || typeof this.to != "number")
    throw new Error("Ошибка!");
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};


