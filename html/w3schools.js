// let button = alert("Hello User!");
// let info = prompt("What is your name?");
// let result = ("Welcome to our page ");
// let caps = info.slice(0,1);
// let next = caps.toUpperCase();
// let rabs = info.slice(1,info.length);
// let rest = alert( result + next + rabs );

// let red = document.getElementById('red');
// let blue = document.getElementById('blue');
// let green = document.getElementById('green');
// let yellow = document.getElementById('yellow');
// let brown = document.getElementById('brown');

// red.onclick = function red() {
//     console.log('i am red and i have been clicked')
// };
// blue.onclick = function blue() {
//     console.log('i am blue and i have been clicked')
// };

// const one = document.getElementById('1');
// const two = document.getElementById('2');
// const three = document.getElementById('3');
// const four = document.getElementById('4');
// const five = document.getElementById('5');
// const six = document.getElementById('6');
// const seven = document.getElementById('7');
// const eight = document.getElementById('8');
// const nine = document.getElementById('9');
// const zero = document.getElementById('0');
// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const divide = document.getElementById('divide');
// const times = document.getElementById('times');
// const equals = document.getElementById('equals');

// operators
// plus.onclick = function()

// const screen = document.getElementById('screen');

// one.onclick = function(){screen.innnerHTML +=1};
// two.onclick = function(){screen.innnerHTML +=2};

// one.onclick = function one() {
//     this.innerHTML="i am one"
// }

document.getElementById('shareButton').addEventListener('click', function() {
    document.getElementById('iconContainer').style.display = 'block';
});


document.getElementById('svg0').addEventListener('click', function () {
   document.getElementById('svg1').style.display = 'block'
});