$(document).ready(function () {
    $('.slider--first-js').slick({
        dots: true,
        infinite: true,
    });
});

$(document).ready(function () {
    $('.slider--second-js').slick({
        dots: true,
        // infinite: false,
        slidesToShow: 4,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // variableWidth: true,
                }
            },{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // variableWidth: true,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.slider--third-js').slick({
        dots: true,
    });
});

(function(){
    // let toggle = document.querySelector('header__toggle')
    let toggle = document.getElementById('toggle-menu')
    toggle.addEventListener('click', function(event){
        event.preventDefault
    // let dropdown = event.target.parentNode
    let drop = document.getElementById('list-wrapper')
    drop.classList.toggle('is-open')
    // let button = document.getElementById("main-button")
    // button.classList.toggle('is-visible')
    // dropdown.classList.toggle('is-open')
    })
}());