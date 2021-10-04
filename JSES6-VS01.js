var button = document.querySelector("Button");

var fn2 = () => console.log(this);

function fn() {
    console.log(this);
}

/*button.addEventListener("click", fn1);*/
button.addEventListener("click", fn2);
