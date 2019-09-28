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
};


function decode(expr) {
    var expr = expr.match(/.{1,10}/g)||[];
    let x = 0;
    let word = '';
    expr.forEach(function(a) {
        var desired = '';
        for(x = 0; x < 10; x+=2) {
            if(a[x] == '*') {
                word += ' ';
                break;
            }
            if(a.substring(x, x+2) == 10) {
                desired += '.';
            } else if (a.substring(x,x+2) == 11) {
                desired += '-';
            }
        }
            if(desired!='') {
                Object.entries(MORSE_TABLE).forEach(function([code, result]) {
                    if(desired==code) {
                        word += result;
                    }
                });
            }
        });
        return word;
        }

module.exports = {
    decode
}