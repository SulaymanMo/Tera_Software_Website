let bars = document.querySelector('header .bars');
let aside = document.querySelector('aside');
let asideImgs = document.querySelectorAll('aside a img'); /* */
let main = document.querySelector('main');
let links = document.querySelectorAll('aside a'); 
let h3 = document.querySelectorAll('aside a h3'); 
let portLinks = document.querySelectorAll('main .port ul li a');
let botChats = document.querySelectorAll('.port .botChat');

let mode;
let content = document.body;
let switchKey = document.querySelector('.fa-lightbulb');

switchKey.addEventListener('click', () => {
    content.classList.toggle('dark');
    if (content.classList.contains('dark')) {
        mode = 'Dark';
    } else {
        mode = 'Light';
    }
    localStorage.setItem('mode', JSON.stringify(mode))
})

if (JSON.parse(localStorage.getItem('mode')) === 'Dark') {
    content.classList = ('dark');
}

// setInterval(() => {
//     botChats.forEach(chat => {
//         chat.classList.toggle('act');
//         if (chat.className == 'act') {
//             chat.style.fontSize = '80px';
//         }
//         });
//     }, 8000);

function toggleAside() {
    bars.classList.toggle('toggleBars');
    aside.classList.toggle('toggleAside');
    main.classList.toggle('toggleMain');
}

function actImg(img) {
    asideImgs.forEach(x => {
        x.classList.add('actImg');
    });
    img.classList.remove('actImg');
}

function actLinks(x) {
    x.classList.add('act');
}
function disLinks(x) {
    x.classList.remove('act');
}

function actLink(link) {
    portLinks.forEach(link => {
        link.classList.remove('active');
    });
    link.classList.add('active');
}