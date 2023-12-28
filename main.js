// light and dark mode
let light = document.getElementById('light')
let dark = document.getElementById('dark')
let body = document.querySelector('body');
let main = document.getElementById('main');
let alink = document.querySelectorAll('a')
let btn = document.getElementById('btn')
let cv = document.getElementById('cv')
let nameEffect = document.getElementById('name')
let greetingEffect = document.getElementById('greeting')
let mine_c = document.getElementById('mine_c')
let mine_bw = document.getElementById('mine_bw')
let role = document.getElementById('role')

dark.addEventListener('click', function () {
    body.style.backgroundColor = 'black'
    main.style.color = '#fff'
    dark.style.display = 'none'
    light.style.display = 'block'
    alink.forEach((e) => {
        e.style.color = '#fff'
    })
    btn.style.color = '#fff'
    btn.style.borderColor = '#fff'
    cv.style.color = '#000'
    nameEffect.style.textShadow = '0 0 7px lightblue,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa'
    greetingEffect.style.textShadow = '0 0 7px #94bbe9,0 0 10px #94bbe9,0 0 21px #fff,0 0 42px #94bbe9,0 0 82px #94bbe9'
    role.style.textShadow = '0px 0px 10px lightblue, 0 0 20px rgb(247, 54, 54), 0 0 60px plum, 0 0 100px limegreen'
    mine_c.style.display = 'block'
    mine_bw.style.display = 'none'
});

light.addEventListener('click', function () {
    body.style.backgroundColor = '#fff'
    main.style.color = '#000'
    alink.forEach((e) => {
        e.style.color = '#000'
    })
    btn.style.color = '#000'
    btn.style.borderColor = '#000'
    light.style.display = 'none'
    dark.style.display = 'block'
    nameEffect.style.textShadow = 'none'
    greetingEffect.style.textShadow = 'none'
    role.style.textShadow = 'none'
    mine_c.style.display = 'none'
    mine_bw.style.display = 'block'
});

// hambuger menu

const open = document.getElementById('open') 
const close = document.getElementById('close') 
const navbar = document.querySelector(".nav")

open.addEventListener('click', ()=>{
    navbar.style.left = 0;
    close.style.display = 'block'
    open.style.display = 'none'
})
close.addEventListener('click', ()=>{
    navbar.style.left = "-100%";
    open.style.display = 'block'
    close.style.display = 'none'
})




// language

let changeLan = document.querySelector('#lang');
let changeTxt = document.querySelector('.txts');
let changed = document.querySelector('.txts_another_llan');

changeLan.addEventListener('click', function () {
    if (value == 0) {
        changeTxt.style.display = 'none'
        changed.style.display = 'flex'
        close.style.display = 'none'
        normal.style.display = 'block'
        value = 1
    }
    else {
        changeTxt.style.display = 'flex'
        changed.style.display = 'none'
        close.style.display = 'none'
        normal.style.display = 'block'
        value = 0
    }
})

// mouse move

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = 'block'


    document.addEventListener('mouseout', () => {
        cursor.style.display = 'none'
    })
});



// owl animation
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})