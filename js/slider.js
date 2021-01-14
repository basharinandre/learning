$(document).ready(function () {
    $('.slider--first-js').slick({
        dots: true,
    });
});

$(document).ready(function () {
    $('.slider--second-js').slick({
        dots: true,
    });
});

$(document).ready(function () {
    $('.slider--third-js').slick({
        dots: true,
    });
});

let question = 'Привет, как дела?'

function Сontinue(answer){
    if(answer === 'Хей, привет'){
        alert('Классные котики у тебя, сильная и независимая)')
    }else if(answer === 'Отвали'){
        alert('(((, но котики всё-равно классные!')
    }else(answer === 'Ух ты, так ещё никто не подкатывал)'){
        alert('То ли ещё будет!')
    }
}