const menuMail = document.querySelector(".navbar-email");
const contenidoMenuMail = document.querySelector(".desktop-menu");
const btnMenuCarrito = document.querySelector(".navbar-shopping-cart");
const menuCarrito = document.querySelector(".product-detail");
const btnMenuMobile = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

function toggleMenuMail() {
    contenidoMenuMail.classList.toggle("inactive");
}

function toggleMenuCarrito(){
    const estOcultoMenuMobile = menuMobile.classList.contains("inactive");
    if (!estOcultoMenuMobile) {
        menuMobile.classList.add("inactive");
    }
    menuCarrito.classList.toggle("inactive");
}

function toggleMobileMenu() {
    menuMobile.classList.toggle("inactive");
}
menuMail.addEventListener("click", toggleMenuMail);
btnMenuCarrito.addEventListener("click", toggleMenuCarrito);
btnMenuMobile.addEventListener("click", toggleMobileMenu);


const listaProductos = []
listaProductos.push({
    nombre: 'Bicicleta',
    precio: 55000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

listaProductos.push({
    nombre: 'Moto',
    precio: 355000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

listaProductos.push({
    nombre: 'Monopatin',
    precio: 67000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

const containerCards = document.querySelector(".cards-container");

for (producto of listaProductos) {
    const divProductCard = document.createElement("div");
    divProductCard.classList.add("product-card");

    const imgProducto = document.createElement("img");
    imgProducto.setAttribute("src", producto.img);
    divProductCard.appendChild(imgProducto);

    const divProductInfo = document.createElement("div");
    divProductInfo.classList.add("product-info");
    divProductInfo.innerHTML=`
        <div>
            <p>${producto.precio}</p>
            <p>${producto.nombre}</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    `
    divProductCard.appendChild(divProductInfo);
    containerCards.appendChild(divProductCard);
}