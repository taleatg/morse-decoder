const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
  let array = [];
  while (expr.length > 0) {
    let arr = expr.slice(0, 10);
    let a = arr.split("").findIndex((item) => item === "1");
    let b = arr.split("");
    b.splice(0, a);
    expr = expr.replace(arr, "");
    array.push(b.join(""));
  }

  let symbol = [];
  let slovo = [];
  let SlovoMorse = [];

  for (let i = 0; i < array.length; i++) {
    symbol = array[i];
    slovo = [];

    let dot;
    let dush;

    while (symbol.length > 0) {
      for (let j = 0; j <= symbol.length; j++) {
        let arrSymbol = symbol.slice(0, 2);
        symbol = symbol.replace(arrSymbol, "");
        slovo.push(arrSymbol);

        dot = slovo.map((item) => (item === "10" ? "." : item));
        dush = dot.map((item) => (item === "11" ? "-" : item));
      }
    }

    SlovoMorse.push(dush.join(""));
  }

  for (let i = 0; i < SlovoMorse.length; i++) {
    for (var key in MORSE_TABLE) {
      if (SlovoMorse[i] === key) {
        SlovoMorse[i] = MORSE_TABLE[key];
      }
    }
  }
  return SlovoMorse.join("");
}


module.exports = {
    decode
}