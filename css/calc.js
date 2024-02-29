const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('zero');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const mult = document.getElementById('mult');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');

const screen = document.getElementById('screen');
const op = document.getElementById('operator');
one.onclick = function() {
    screen.innerHTML += 1
};
two.onclick = function() {
    screen.innerHTML += 2
};
three.onclick = function() {
    screen.innerHTML += 3
};
four.onclick = function() {
    screen.innerHTML += 4
};
five.onclick = function() {
    screen.innerHTML += 5
};
six.onclick = function() {
    screen.innerHTML += 6
};
seven.onclick = function() {
    screen.innerHTML += 7
};
eight.onclick = function() {
    screen.innerHTML += 8
};
nine.onclick = function() {
    screen.innerHTML +=9
};
zero.onclick = function() {
    screen.innerHTML += '0'
};

let leftvalue = 0;
let rightvalue = 0;
let operator = '';
plus.onclick = function() {
    leftvalue = Number(screen.innerHTML);
    operator = '+';
    op.innerHTML = '+' 
    screen.innerHTML = ''
};
minus.onclick = function () {
    leftvalue = Number(screen.innerHTML);
    operator = '-';
    op.innerHTML = '-' 
    screen.innerHTML = ''
    // screen.innerHTML += '-'
}
mult.onclick = function() {
    leftvalue = Number(screen.innerHTML);
    operator = '*';
    op.innerHTML = '*' 
    screen.innerHTML = ''
    // screen.innerHTML += '*'
};
divide.onclick = function() {
    leftvalue = Number(screen.innerHTML);
    operator = '/';
    op.innerHTML = '/' 
    screen.innerHTML = ''
    // screen.innerHTML += '/'
};
equals.onclick = function() {
    rightvalue = Number(screen.innerHTML);
    if (operator === '+') {
        screen.innerHTML = '= ';
        screen.innerHTML += leftvalue + rightvalue;;
    }
    // screen.innerHTML += '='
};