const subscriptionButton = document.querySelector(".subscription__button"); //находим кнопку "Подписка"
const sliderLeft = document.querySelector(".gallery__arrow_left"); //стрелка слайдер влево
const sliderRight = document.querySelector(".gallery__arrow_right"); //стрелка слайдер вправо
subscriptionButton.addEventListener("click", (event) => {
    if (subscriptionButton.innerHTML == "готово!") {
        subscriptionButton.innerHTML = "подписка";
    } else {
        subscriptionButton.innerHTML = "готово!";
    }
});
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("gallery__item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}
sliderLeft.onclick = function () {
    onclick = minusSlide();
};
sliderRight.onclick = function () {
    onclick = plusSlide();
};
