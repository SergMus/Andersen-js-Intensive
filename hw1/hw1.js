function func1() {
  let answer1 = parseInt(prompt("введите первое число"));
  if (isNaN(answer1)) {
    return alert("Некорректный ввод");
  } else {
    let answer2 = parseInt(prompt("введите второе число"));

    if (isNaN(answer2)) return alert("Некорректный ввод");

    alert(answer1.toString(answer2));
  }
}

function func2() {
  let answer1 = parseInt(prompt("введите первое число"));
  if (isNaN(answer1)) {
    return alert("Некорректный ввод");
  } else {
    let answer2 = parseInt(prompt("введите второе число"));

    if (isNaN(answer2)) return alert("Некорректный ввод");

    let result1 = answer1 + answer2;
    let result2 = answer1 / answer2;
    alert(`Ответ: ${result1}, ${result2}`);
  }
}
