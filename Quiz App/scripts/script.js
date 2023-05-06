const result1 = document.querySelector('.result1');
const answer1 = document.querySelector('#answer1');

const sendBtn = document.querySelector('#sendBtn')
const block1 = document.querySelector('.block1');

sendBtn.addEventListener('click', function () {
    if (answer1.value === '2') {
        result1.textContent = 'Правильно ✅'
    } else if (answer1.value === '') {
        result1.textContent = 'Вы не заполнили поле ⌛'
    }

    else {
        result1.textContent = 'Не правильно ❌';
    }


    block1.style.display = 'block'
})

const sendBtn1 = document.querySelector('#sendBtn1');
const answer2 = document.querySelector('#answer2');
const result2 = document.querySelector('.result2');

const block2 = document.querySelector('.block2')

sendBtn1.addEventListener('click', function () {
    if (answer2.value === '3') {
        result2.textContent = 'Правильно ✅'
    } else if (answer2.value === '') {
        result2.textContent = 'Вы не заполнили поле ⌛'
    }
    else {
        result2.textContent = 'Не правильно ❌';
    }

    block2.style.display = 'block';
})

const answer3 = document.querySelector('#answer3');
const sendBtn3 = document.querySelector('#sendBtn3');
const result3 = document.querySelector('.result3');
const block3 = document.querySelector('.block3');

sendBtn3.addEventListener('click', function() {
    if (answer3.value === '2') {
        result3.textContent = 'Правильно ✅'
    } else if (answer3.value === '') {
        result3.textContent = 'Вы не заполнили поле ⌛'
    }
    else {
        result3.textContent = 'Не правильно ❌';
    }

    block3.style.display = 'block';
})

const answer4 = document.querySelector('#answer4');
const sendBtn4 = document.querySelector('#sendBtn4');
const result4 = document.querySelector('.result4');

sendBtn4.addEventListener('click', function() {
    if (answer4.value === '2') {
        result4.textContent = 'Правильно ✅';
    } else if (answer4.value === '') {
        result4.textContent = 'Вы не заполнили поле ⌛';
    } else {
        result4.textContent = 'Не правильно ❌'
    }
})