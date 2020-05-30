// const calcBtnsEl = document.getElementById('calc-buttons');
// let activeNum = document.getElementById('num1');
// let activeSign = document.getElementById('sign');

// // calcBtnsEl.addEventListener('click', (ev) => {
// //     if (ev.target.nodeName === 'BUTTON' && !ev.target.dataset.sign) {
// //         const attrVal = ev.target.getAttribute('data-num');
// //         activeNum.innerText += attrVal;
// //     } 

// //     if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '+') {
// //         const attrSign = ev.target.getAttribute('data-sign');
// //         activeSign.innerText = attrSign;
// //         activeNum = document.getElementById('num2');
// //     } 

// //     if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=') {
// //         let num1Val = +document.getElementById('num1').innerText;
// //         let num2Val = +document.getElementById('num2').innerText;

// //         const result = num1Val + num2Val;
// //         document.querySelector('#result span').innerText = result;
// //     }

//     // if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'c') {
//     //     document.querySelector('#result span').innerText = "";
//     //     document.getElementById('num1').innerText = "";
//     //     document.getElementById('num2').innerText = "";
//     // }

//     // if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'c-c') {
//     //     document.getElementById('sign').innerText = "";
//     // }
// // })


// let res = document.getElementById('result');
// let str = '';
// let calcEl = document.getElementById('calc-buttons');

// calcEl.addEventListener('click', function (event) {
//     if (event.target.dataset.num) {
//         str += event.target.dataset.num;
//     } 

//     if (event.target.dataset.sign) {
//         str += event.target.dataset.sign;
//     }

//     result.innerHTML = "Result: " + str;
// })

function insert(num) {
    document.form.textview.value += num;
}

function clean() {
    document.form.textview.value = "";
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}