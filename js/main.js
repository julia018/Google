let langLink = document.getElementById('lang');
let mailLink = document.getElementById('mail');
let imagesLink = document.getElementById('images');
let signinLink = document.getElementById('sign-in');
let microphone = document.getElementById('micro');
let menu = document.getElementById('menu');
let search = document.getElementById('search');
let keyboard = document.getElementById('keyboard');
let searchBtn = document.getElementById('search-btn');
let luckyBtn = document.getElementById('lucky-btn');
let info = document.getElementById('info');
let advertisment = document.getElementById('advertisment');
let forBusiness = document.getElementById('for-business');
let aboutGoogle = document.getElementById('about-google');
let howSearchWorks = document.getElementById('how-search-works');
let confident = document.getElementById('confident');
let conditions = document.getElementById('conditions');
let settings = document.getElementById('settings');

langLink.onclick = toogleLang

function toogleLang() {
    //header    
    mailLink.innerHTML == "Gmail" ? mailLink.innerHTML = "Почта" : mailLink.innerHTML = "Gmail"
    imagesLink.innerHTML == "Вiдарысы" ? imagesLink.innerHTML = "Картинки" : imagesLink.innerHTML = "Вiдарысы"
    signinLink.innerHTML == "Увайсці" ? signinLink.innerHTML = "Войти" : signinLink.innerHTML = "Увайсці"
    menu.title == "Праграмы Google" ? menu.title = "Приложения Google" : menu.title = "Праграмы Google"

    //content
    search.title == "Шукаць" ? search.title = "Поиск" : search.title = "Шукаць"
    keyboard.title == "Iнструменты ўводу" ? keyboard.title = "Экранная клавиатура" : keyboard.title = "Iнструменты ўводу"
    microphone.style.display == "none" ? microphone.style.display = "inline-block" : microphone.style.display = "none"
    searchBtn.innerHTML == "Пошук Google" ? searchBtn.innerHTML = "Поиск в Google" : searchBtn.innerHTML = "Пошук Google"
    luckyBtn.innerHTML == "Мне пашанцуе" ? luckyBtn.innerHTML = "Мне повезёт!" : luckyBtn.innerHTML = "Мне пашанцуе"
    info.innerHTML == "Даступная мова" ? info.innerHTML = "Сервисы Google доступны на разных языках:" : info.innerHTML = "Даступная мова:"
    langLink.innerHTML == " Беларуская" ? langLink.innerHTML = " русский" : langLink.innerHTML = " Беларуская"

    //footer
    advertisment.innerHTML == "Рэклама" ? advertisment.innerHTML = "Реклама" : advertisment.innerHTML = "Рэклама"
    forBusiness.innerHTML == "Бізнес" ? forBusiness.innerHTML = "Для бизнеса" : forBusiness.innerHTML = "Бізнес"
    aboutGoogle.innerHTML == "Аб Google" ? aboutGoogle.innerHTML = "Всё о Google" : aboutGoogle.innerHTML = "Аб Google"
    howSearchWorks.innerHTML == "Як працуе пошук" ? howSearchWorks.innerHTML = "Как работает Google Поиск" : howSearchWorks.innerHTML = "Як працуе пошук"
    confident.innerHTML == "Прыватнасць" ? confident.innerHTML = "Конфиденциальность" : confident.innerHTML = "Прыватнасць"
    conditions.innerHTML == "Умовы" ? conditions.innerHTML = "Условия" : conditions.innerHTML = "Умовы"
    settings.innerText == "Налады" ? settings.innerText = "Настройки" : settings.innerText = "Налады"
}
