/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

let length;

document.getElementById("length").addEventListener("change", () => {
  length = charLength();
});

document.getElementById("btn").addEventListener("click", () => {
  let viewPoint = document.getElementById("password__result");
  let upperCase = document.getElementById("uppercase");
  let lowerCase = document.getElementById("lowercase");
  let number = document.getElementById("numbers");
  let symbol = document.getElementById("symbols");

  if (upperCase.checked === true) {
    viewPoint.value = randomUppercase(length);
  } else if (lowerCase.checked == true) {
    viewPoint.value = randomlowercase(length);
  } else if (number.checked == true) {
    viewPoint.value = passGenerator(length);
  }
});

function randomUppercase(length) {
  let str = "";
  for (let i = 0; i < length; i++) {
    let letter = Math.random() * 26;
    str += String.fromCharCode(65 + letter);
  }
  return str;
}

function randomlowercase(length) {
  let str = "";
  for (let i = 0; i < length; i++) {
    let letter = Math.random() * 26;
    str += String.fromCharCode(97 + letter);
  }
  return str;
}

function passGeneratorUpperLowerAndNum(length) {
  let str = "";
  let checker =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  while (str.length !== length) {
    let letter = Math.random() * 75;
    if (checker.includes(String.fromCharCode(48 + letter)) === true) {
      str += String.fromCharCode(48 + letter);
    }
  }
  return str;
}

function passGeneratorUpperAndLower(length) {
  let str = "";
  let checker = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  while (str.length !== length) {
    let letter = Math.random() * 58;
    if (checker.includes(String.fromCharCode(65 + letter)) === true) {
      str += String.fromCharCode(65 + letter);
    }
  }
  return str;
}

function passGeneratorNum() {}
function passGenerator(length) {
  let str = "";
  while (str.length !== length) {
    let letter = Math.random() * 126;
    str += String.fromCharCode(letter);
    if (str.includes(" ")) {
      str.trim();
    }
  }
  return str;
}

// console.log(passGeneratorUpperLowerAndNum(18));
