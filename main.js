function addToCart() {
    var size = document.getElementById("selected-size").innerText;
    if (size) {
        document.getElementById("cart-count").innerText++;
        if (size === "S") {
            document.getElementsByClassName("cart-item")[0].style.display = "block";
            document.getElementsByClassName("cart-quantity")[0].innerText++;
        }
        if (size === "M") {
            document.getElementsByClassName("cart-item")[1].style.display = "block";
            document.getElementsByClassName("cart-quantity")[1].innerText++;
        }
        if (size === "L") {
            document.getElementsByClassName("cart-item")[2].style.display = "block";
            document.getElementsByClassName("cart-quantity")[2].innerText++;
        }
    }
}

function select(size) {
    document.getElementsByClassName("item-size-button")[0].className = "item-size-button";
    document.getElementsByClassName("item-size-button")[1].className = "item-size-button";
    document.getElementsByClassName("item-size-button")[2].className = "item-size-button";
    switch (size) {
        case 0:
            document.getElementsByClassName("item-size-button")[0].className = "item-size-button selected";
            document.getElementById("selected-size").innerText = "S";
            break;
        case 1:
            document.getElementsByClassName("item-size-button")[1].className = "item-size-button selected";
            document.getElementById("selected-size").innerText = "M";
            break;
        case 2:
            document.getElementsByClassName("item-size-button")[2].className = "item-size-button selected";
            document.getElementById("selected-size").innerText = "L";
    }
}

function showCart() {
    document.getElementById("cart").classList.toggle("show");
}