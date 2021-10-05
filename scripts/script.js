function myFunction() {
    let change = document.querySelector(".subscription__button");
    console.log(change);
    if (change.innerHTML == "Подписка") {
        change.innerHTML = "Готово!";
    } else {
        change.innerHTML = "Подписка";
    }
}
