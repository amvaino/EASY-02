const subscriptionButton = document.querySelector(".subscription__button"); //находим кнопку "Подписка"
subscriptionButton.addEventListener("click", (event) => {
    if (subscriptionButton.innerHTML == "готово!") {
        subscriptionButton.innerHTML = "подписка";
    } else {
        subscriptionButton.innerHTML = "готово!";
    }
});
