//Выбранная картинка из страницы index.html
const url = localStorage.getItem('lastUsedImage')
const image = document.querySelectorAll('.changable-image')

if (url && image) {
    for (let i = 0; i < image.length; i++)
        image[i].src = url
}
//====================================================
document.body.addEventListener("keydown", (event) => {
    if (event.ctrlKey) { event.preventDefault() }
});

var boxshadow = "";
for (var i = 0; i <= 4000; i++) {
    px = Math.random() < 0.5 ? "-" : "";
    py = Math.random() < 0.5 ? "-" : "";
    x = Math.floor((Math.random() * window.innerWidth * 2) + 1);
    y = Math.floor((Math.random() * window.innerHeight * 2) + 1);
    s = Math.floor((Math.random() * 2) - 1);
    boxshadow += px + x + "px " + py + y + "px 0 " + s + "px #fff,";
}

boxshadow = boxshadow.slice(0, -1);

stars.style.boxShadow = boxshadow;
//=============showmenu================

let smenu = document.querySelectorAll('.menuShow')
for (let i = 0; i < smenu.length; i++) {
    let div = document.createElement('div');
    div.className = "showMenu";
    div.innerHTML = `<a href = "index.html"> Главная</a >
        <a href="korolev.html">Первый спутник Земли 🛸</a>
        <a href="sobaki.html">Первые животные в космосе 🌠</a>
        <a href="gagarin.html">Первый человек в космосе 🪂</a>
        <a href="Pomnit.html">Герои-космонавты 🪐</a>
        <a href="Kosmonavt.html">Найди космонавта по фотографии 🚡</a>
        <a href="S1991.html">1991 🎇</a>
        <a href="Belka.html">Белорусские спутники 🎑</a>
        <a href="f2012.html">2012 🚁</a>
        <a href="puzzle.html">Собери картинку спутника Белка 🚨</a>
        <a href="dostig2.html">Использованию космического пространства 🚦</a>
        <a href="dostig.html">Для чего Беларуси спутники? 🚦</a>
        <a href="Marina.html">Первый суверенный космонавт 🚦</a>
        <a href="victorina.html">Викторина ⚓</a>`;
    document.querySelector('nav p').append(div);
}

for (let i = 0; i < smenu.length; i++) {
    smenu[i].onclick = function () {
        document.querySelector('nav div').classList.toggle('hiddenMenu')
    }
}


//==================

const eys = document.getElementById('yes')
const no = document.getElementById('no')
const vibor = document.getElementById('vibor')
if (eys != null)
    eys.addEventListener('click', eysF)

if (no != null)
    no.addEventListener('click', noF)
function eysF() {
    // vibor.style.display='block';
    eys.innerHTML = `Правильно! Давай в этом убедимся.`;
    eys.style.fontSize = '1.1em';
    eys.style.textTransform = 'inherit';
}
function noF() {
    // vibor.style.display='block';
    no.innerHTML = `Сомне<wbr>ваешься? Давай в этом убедимся.`;
    no.style.fontSize = '1.1em';
    no.style.textTransform = 'inherit';
}
//===============================
function replaseImg(event) {
    let elem = event.target
    let src = elem.getAttribute('src')
    let elem2 = document.querySelector('a.strelka2')
    elem2.style.display = 'block'
    let elem3 = document.querySelector('a.str2 img')
    elem3.src = src

    localStorage.setItem('lastUsedImage', elem3.src)
    return elem3.src;
}

const sputn = document.querySelectorAll('.sputnic .hero')

Array.from(sputn).forEach(item => {
    item.addEventListener('click', replaseImg)
});
//==================================================
function replaseImg2(event) {
    let elem = event.target
    let src = elem.getAttribute('src')

    text10.classList.remove('str')
    if (src == 'image/спутник21.png') {
        let elem2 = document.querySelector('img.sputnik')
        elem2.src = src
        text10.innerHTML = ' Молодец!!! Путешествие продолжается'
        text10.classList.add('trAnsv2')
        text10.classList.remove('falAnsv2')
    }
    else {
        text10.innerHTML = ' Неправильно. Попробуй ещё. '
        text10.classList.add('falAnsv2')
        text10.classList.remove('trAnsv2')
    }
}

const sputn2 = document.querySelectorAll('.sputnic .sl2')

Array.from(sputn2).forEach(item => {
    item.addEventListener('click', replaseImg2)
});
//=======
//===========sobaki v kosmose==================
function replaseImg3(event) {
    let elem = event.target
    let src = elem.getAttribute('src')
    text10.classList.remove('str')
    if (src == 'image/собаки0.jpg') {
        let elem4 = document.querySelector('.dog img');
        elem4.style.opacity = '1';
        elem4.src = 'image/Собаки.png'
        elem4.style.left = 0 + 'px'
        elem4.classList.add('sobaki')

        //   console.log(elem2)
        text10.innerHTML = ' Молодец!!! Путешествие продолжается'
        text10.classList.add('trAnsv2')
        text10.classList.remove('falAnsv2')
        // elem2.src=src
        // elem2.style.cssText='border-radius: 50%; width: 30%;'
        // console.log(elem2.src)
    }
    else {
        text10.innerHTML = ' Неправильно. Попробуй ещё. '
        text10.classList.add('falAnsv2')
        text10.classList.remove('trAnsv2')
    }

}

const sputn3 = document.querySelectorAll('.sputnic .flora')
console.log(sputn3)
Array.from(sputn3).forEach(item => {
    item.addEventListener('click', replaseImg3)
});
//02_04
//====================================
function replaseImg4(event) {
    let elem = event.target
    let src = elem.getAttribute('src')
    text13.classList.remove('str')

    if (src == 'image/байконур5.png') {
        console.log(src)
        text13.innerHTML = ' Молодец!!! Путешествие продолжается'
        text13.classList.add('trAnsv2')
        text13.classList.remove('falAnsv2')
    }
    else {
        text13.innerHTML = ' Неправильно. Попробуй ещё. '
        text13.classList.add('falAnsv2')
        text13.classList.remove('trAnsv2')
    }
}

const sputn4 = document.querySelectorAll('.sputnic .gag')

Array.from(sputn4).forEach(item => {
    item.addEventListener('click', replaseImg4)
});
//=======================================
//=======================================
const dragstart = function (event) {
    event.dataTransfer.setData('id', event.target.id)
    // console.log(event.target.id)
}


const images = document.querySelectorAll('.kosmKosm .col1 img')
Array.from(images).forEach((element) => {
    element.addEventListener('dragstart', dragstart)
});
//=================================
const dragover = function (event) {
    event.preventDefault();

}
const drop = function (event) {
    event.preventDefault();
    let attr = event.target.dataset.num;
    console.log(attr)//id блока
    let pict = event.dataTransfer.getData('id') //attrib picture
    if (attr == pict) {
        event.target.style.border = '0'
        event.target.appendChild(document.getElementById(pict))
    }
    else return;
    //console.log(pict)

}

const cells = document.querySelectorAll('.otvetKosm .col2')
Array.from(cells).forEach((element) => {
    element.addEventListener("dragover", dragover)
    element.addEventListener("drop", drop)
})
//==============================
//===============1991=================
function replaseImg5(event) {
    let elem = event.target
    let src = elem.getAttribute('src')
    //  text33.classList.remove('str')

    if (src == 'image/ссср.jpg') {

        text33.innerHTML = 'Молодец!!! Путешествие продолжается'
        text33.classList.add('trAnsv2')
        text33.classList.remove('falAnsv2')
        console.log(text33.innerHTML)
    }
    else if (src == 'image/рб.jpg') {
        console.log(src)
        text33.innerHTML = 'Белоруссия входила в состав Советского Союза! Но подумай ещё'
        text33.classList.add('trAnsv2')
        text33.classList.remove('falAnsv2')
    }
    else {
        text33.innerHTML = ' Неправильно. Попробуй ещё. '
        text33.classList.add('falAnsv2')
        text33.classList.remove('trAnsv2')
    }
}

const sputn5 = document.querySelectorAll('.sputnic .sl4')

Array.from(sputn5).forEach(item => {
    item.addEventListener('click', replaseImg5)
});
//==========belka===============
function replaseImg6(event) {
    let elem = event.target
    let src = elem.getAttribute('src')
    if (src == 'image/novicki.png') {

        text14.innerHTML = 'Олег Новицкий - летчик-космонавт Российской Федерации'
        text14.classList.add('falAnsv2')
    }
    else if (src == 'image/2_0.jpg') {

        text14.innerHTML = 'Дважды Герой Советского Союза Петр Климук совершил <br>свои полеты еще во времена СССР'
        text14.classList.add('falAnsv2')
    }

    else if (src == 'image/kovalenok.png') {
        text14.classList.add('falAnsv2')
        text14.innerHTML = 'Дважды Герой Советского Союза  Владимир Коваленок  совершил <br>свои полеты еще во времена СССР'
    }
    else {
        elem.src = 'img/Марина.png';
        text14.innerHTML = 'Первый космонавт суверенной республики Беларусь Марина Василевская.'
        text14.classList.add('trAnsv2')
    }

}
const sputn6 = document.querySelectorAll('.sputnic .belka')
console.log(sputn6)
Array.from(sputn6).forEach(item => {
    item.addEventListener('click', replaseImg6)
});
//=========================
function replaseImg7(event) {
    let elem = event.target
    let src = elem.getAttribute('src')
    text23.classList.remove('str')

    if (src == 'image/8_0.jpg') {
        console.log(src)
        text23.innerHTML = 'Правильно. Это телекоммуникационный спутник «Белинтерсат-1»'
        text23.classList.add('trAnsv')
        text23.classList.remove('falAnsv')
    }
    else if (src == 'image/5_0.jpg') {
        console.log(src)
        text23.innerHTML = 'Молодец. «БелКа»  - это аббревиатура от «Белорусский космический аппарат».'
        text23.classList.add('trAnsv2')
        text23.classList.remove('falAnsv2')
    }

    else {

        text23.innerHTML = ' Подумай еще раз '
        text23.classList.add('falAnsv2')
        text23.classList.remove('trAnsv2')
        console.log(src)
    }
}

const sputn7 = document.querySelectorAll('.sputnic .s24')
console.log(sputn7)
Array.from(sputn7).forEach(item => {
    item.addEventListener('click', replaseImg7)
});
///================================
//=====================bssr
let dx = 2; let x0 = 0
let bssr = document.getElementById('bssr')
let x4 = document.getElementById('Club')
let x5, bssrLeft, rasst, dLeft
if (bssr != null) {

    x5 = Math.floor(getCoords(x4).left);
    bssrLeft = Math.floor(getCoords(bssr).left);
    rasst = x5 - bssrLeft
    dLeft = (x4.width - bssr.width) / 2
    bssrMove();
}

function bssrMove() {
    if (x0 < rasst + dLeft) {
        x0 = x0 + dx
        bssr.style.left = `${x0}px`;
        setTimeout('bssrMove()', 20)
    }
}
function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}
//==========================
//===========pazle===============
const arrayRis = ['01', '09', '16', "11", '04', '15', '07', '12', '14', '05', '10', '13', '08', '02', '06', '03'];
const zon1 = document.getElementById('zone1')
if (zon1 !== null)
    for (let i = 0; i < arrayRis.length; i++) {
        zon1.innerHTML += `<img src="image/k_${arrayRis[i]}.png" id="${i}" draggable="true">`
    }


const dragstart2 = function (event) {
    event.dataTransfer.setData('id', event.target.id)
    console.log(event.target.id)
}
const images2 = document.querySelectorAll('#zone1 img') //коллекция
console.log(images2)
Array.from(images2).forEach((element) => { element.addEventListener('dragstart', dragstart2) })

const dragover2 = function (event) {

    event.preventDefault()

}
const drop2 = function (event) {
    event.preventDefault()
    if (event.target.tagName === 'IMG') return;
    let imageId = event.dataTransfer.getData('id')
    console.log(imageId)
    event.target.appendChild(document.getElementById(imageId))

}

//====================
const cells2 = document.querySelectorAll('#containerPazl .col7')
Array.from(cells2).forEach((element) => {
    element.addEventListener('dragover', dragover2)
    element.addEventListener('drop', drop2)
});

//====================
let showingTooltip;

document.onmouseover = function (e) {
    var target = e.target;
    var tooltip = target.getAttribute('data-tooltip');
    if (!tooltip) {
        target = e.target.closest('figure');

        if (target) {
            tooltip = target.getAttribute('data-tooltip');
        }
    }
    if (!tooltip) return
    var tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltip;
    document.body.appendChild(tooltipElem);

    var coords = target.getBoundingClientRect();

    var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не вылезать за левую границу окна

    var top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    showingTooltip = tooltipElem;
};

document.onmouseout = function (e) {

    if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = null;
    }

};


//==================== victorina==================
let questions = [
    {
        question: "В каком году был произведен запуск первого искусственного спутника планеты 'Земля'?",
        answer: ['1937 год', '1957 год', "2000 год", "1986 год"],
        correct: 2,
    }
    , {
        question: "Кто является первым космонавтом планеты 'Земля'?",
        answer: [
            'Юрий Гагарин',
            'Нил Армстронг',
            "Петр Климук",
            "Алексей Леонов"],
        correct: 1,
    },
    {
        question: "Кто является первым человеком в открытом космосе?",
        answer: ['Юрий Гагарин',
            'Нил Армстронг',
            "Петр Климук",
            "Алексей Леонов"],
        correct: 4,
    },
    {
        question: "Какие животные первыми побывали в космосе?",
        answer: ['Стрелка и Белка',
            'Рекс, Бим и Стелла',
            "Мухтар и Звезда",
            "Стрела и Бром"],
        correct: 1,
    },
    {
        question: "В каком году начали эксплуатировать МКС (международная космическая станция)?",
        answer: ['1965 год',
            '2004 год',
            "1998 год",
            "2020 год"],
        correct: 3,
    },
    {
        question: "Первая женщина побывавшая в космосе?",
        answer: ['Валентина Терешкова',
            'Марина Василевская ',
            "Светлана Савицкая",
            "Баба Яга"],
        correct: 1,
    },
    {
        question: "Как назывался первый искусственный спутник планеты 'Земля'?",
        answer: ['Юнона',
            'СПУТНИК-1',
            "Вояджер-1",
            "Falcon"],
        correct: 2,
    },
    {
        question: "Кто был первый белорусский суверенный космонавт?",
        answer: ['Юрий Гагарин',
            'Петр Климук',
            "Марина Василевская",
            "Валентина Терешкова",
        ],
        correct: 3,
    },
    {
        question: "Какого числа отмечается день космонавтики?",
        answer: ['30 февраля ',
            '26 апреля ',
            "21 августа ",
            "12 апреля "],
        correct: 4,
    },
    {
        question: "Как назывался первый белорусский спутник?",
        answer: ['Белорусочка',
            'Стрелка',
            "Белка",
            "Беларусь"],
        correct: 3,
    },
]
//form.addEventListener('submit', addQuestion);
const progress = document.querySelector('.rot div')
const questBox = document.querySelector('#container h2')
const rez = document.querySelector('#container')
const listQuests = document.querySelector('#container ul')
const questUser = document.querySelector('#container ul li')
let step = 0;
let scope = 0;
localStorage.setItem('step0', 0);
//==============1
function saveToLocalStorage() {
    localStorage.setItem('questions', JSON.stringify(questions))
}
saveToLocalStorage();
//2
if (localStorage.getItem('questions')) {
    //  console.log(localStorage.getItem('questions'))
    questions = JSON.parse(localStorage.getItem('questions'))
}

function victorinaStart() {
    console.log(questions.length)
    progress.style.width = Math.round((step + 1) / questions.length * 100) + '%'
    console.log(Math.round((step + 1) / questions.length * 100))
    let quest = questions[step];
    progress.innerHTML = `<p> ${step + 1} из ${questions.length} </p>`
    const questionText = `${quest.question}`;
    questBox.innerHTML = questionText;
    // listQuests.innerHTML = questions.map(item => `<li>${item.answer}</li>`)
    for (let i = 0; i < questions[step].answer.length; i++) {
        listQuests.innerHTML += `<li onclick=f1(${i})>${questions[step].answer[i]}</li>`

    }
}
function clearTest() {
    questBox.innerHTML = '';
    listQuests.innerHTML = "";
}
function f1(index) {

    if (index === questions[step].correct - 1) {
        scope++;
    }

    console.log(scope)
    step++;
    clearTest();
    (step !== questions.length) ? victorinaStart() : rezult();

}
if (progress)
    victorinaStart();


function rezItog(sc) {
    if (sc === questions.length)
        return 'Молодец! Наша виртуальная экскурсия закончилась. Спасибо.'
    else if (scope === 0)
        return 'Надо поучить материал. <br> Повтори экскурсию по музею.'
    else return 'Уже неплохо, но повтори экскурсию по музею.'
}
function rezult() {

    rez.innerHTML = `
    <img src="img/marinaKosm.webp" class=img2>

       <p class=p>${rezItog(scope)}<p>
    <h2> Вы ответили правильно на ${scope}   из ${questions.length} </ h2>
            <button class='btn1' onclick=reStart()> начать заново </button>
    `

}
function reStart() {
    document.location.reload();
}
/*===============================================*/
const inpt = document.querySelector('#container ul')
if (document.querySelector('#container ul li input[type=text]'))
    document.querySelector('#container ul ').onkeydown = function (e) {
        //let tabindex = 3
        if (e.keyCode == 13) {
            // let li = document.createElement('li')
            // li.innerHTML = `<input type=text tabindex=${tabindex++} />`
            // inpt.appendChild(li);
            let li = document.createElement('li')
            let inp = document.createElement('input')
            li.appendChild(inp)
            inpt.appendChild(li);
            inp.focus()
        }

        if (e.keyCode === 27) return;

    }
if (document.querySelector('.btn2'))
    document.querySelector('.btn2').onclick = (e) => {
        document.querySelector('.text').innerHTML = '';
        document.querySelector('.correct').innerHTML = '';
        document.querySelector('.answer').innerHTML = '';
        e.preventDefault();
        let question = document.querySelector('#container textarea').value;

        const answerBox = document.querySelectorAll('#container ul li input')
        const answer = [];
        for (let i = 0; i < answerBox.length; i++) {
            if (answerBox[i].value == '')
                document.querySelector('.answer').innerHTML = 'заполните поле ответа'
            else {
                answer.push(answerBox[i].value)
                document.querySelector('.answer').innerHTML = ''
            }
        }
        const correct = document.querySelector('#container input[type=number]').value
        if (question == '')
            document.querySelector('.text').innerHTML = 'заполните поле вопроса'

        if (correct == '')
            document.querySelector('.correct').innerHTML = 'заполните поле варианта ответа'

        const quest = {
            question: question,
            answer: answer,
            correct: correct

        }
        if (question !== '' && answer.length !== 0 && correct !== '') {
            console.log(quest)
            questions.push(quest)
            saveToLocalStorage();
            document.querySelector('#container textarea').value = '';
            document.querySelector('#container input[type=number]').value = '';
            document.querySelector('#container form ul').innerHTML = '<li><input type="text"/></li > ';
            console.log(document.querySelectorAll('#container form ul'))
        }
    }
if (document.querySelector('#container form')) {
    document.querySelector('#container input[type=number]').onfocus = () => {
        document.querySelector('.correct').innerHTML = ''
    }
    document.querySelector('#container li input[type=text]').onfocus = () => {
        document.querySelector('.answer').innerHTML = ''
    }
    document.querySelector('#container textarea').onfocus = () => {
        document.querySelector('.text').innerHTML = ''
    }
}
(function () {
    // define variables
    var items = document.querySelectorAll(".timeline li");
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
    //.timeline ul li div


    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();
