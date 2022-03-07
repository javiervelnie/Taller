//FUNCION PARA AÑADIR A TODOS LOS BOTONES DE AÑADIR LA FUNCION addToCartClicked
const addToShoppingCartButtons = document.querySelectorAll(".btn_add");
addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

//FUNCION PARA QUE EL BOTON DE COMPRAR HAGA TODO
const comprarButton = document.querySelector("#btn_comprar");
comprarButton.addEventListener("click", comprarButtonClicked);


const shoppingCartItemsContainer = document.querySelector("#listaCarrito");

function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".piezas"); //El elemento mas cercano al boton sobre el que clicamos que tenga la clase piezas

    const itemTitle = item.querySelector(".nombre_pieza p").textContent;
    const itemPrice = item.querySelector(".precio_pieza p").textContent;

    addItemToShoppingCart(itemTitle, itemPrice);
}

function addItemToShoppingCart(itemTitle, itemPrice) {
    /*Segunda parte. Evitar que si ya esta añadido se duplique y hacer que aumente el input en +1*/
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName("nombre_item");

    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
            let elementQuantity = elementsTitle[i].parentElement.parentElement.querySelector(".item_cantidad");
            elementQuantity.value++;
            updateShoppingCartTotal();
            return; //Este return sirve para que no copie el codigo de añadir otra vez todo. Hace que salga de la funcion por completo
        }
    }

    /*Primera parte. Esto crea el elemento al hacer click sobre añadir*/
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="item"">
        <div class="div_nombre_item">
            <p class="nombre_item">${itemTitle}</p>
        </div>
        <div class="cantidad_item">
            <input type="number" value="1" class="item_cantidad">
        </div>
        <div class="precio_item">
            <p class="dinero_total">${itemPrice}</p>
        </div>
        <div class="cerrar">
            <img src=imagenes/recambios/cerrar.png>
        </div>
    </div>
    `;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector(".item_cantidad").addEventListener("change", quantityChanged);

    shoppingCartRow.querySelector(".cerrar img").addEventListener("click", removeShoppingCartItem);

    updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('#precio_final');

    const shoppingCartItems = document.querySelectorAll('.item');

    shoppingCartItems.forEach(shoppingCartItem => {

        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.dinero_total'); //Esto es el span del precio
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace("€", "")); //Esto es solo el precio. La clase number convierte el valor que haya dentro en un numero

        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(".item_cantidad");
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;

    });

    shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`; //Concatena el valor del total + el simbolo del euro
}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest(".item").parentNode.remove();
    updateShoppingCartTotal();
}

function quantityChanged(event) {

    const input = event.target;
    if (input.value <= 0) {
        input.value = 1;
    }

    updateShoppingCartTotal();
}

function comprarButtonClicked() {
    alert("Compra realizada");
    addPedidoToSessionStorage();
    sacarCompraPorPdf();
    shoppingCartItemsContainer.innerText = "";
    updateShoppingCartTotal();
}

function sacarCompraPorPdf() {

    const shoppingCartItems = document.querySelectorAll('.item');
    var doc = new jspdf.jsPDF();
    var num = 1;
   
    var head = [["Num", "Producto", "Cantidad", "Precio/Ud", "Precio Total"]]
    var body = [];
    for (let i = 0; i < shoppingCartItems.length; i++) {
        var nombreDeCadaItem = shoppingCartItems[i].querySelector(".nombre_item").textContent;
        var cantidadDeCadaItem = shoppingCartItems[i].querySelector(".item_cantidad").value;
        var valorDeCadaItem = shoppingCartItems[i].querySelector(".dinero_total").textContent;
        var valorTotal = Number(cantidadDeCadaItem) * Number(valorDeCadaItem.replace("€", ""));

        var datos = [];
        datos.push(num);
        datos.push(nombreDeCadaItem);
        datos.push(cantidadDeCadaItem);
        datos.push(valorDeCadaItem.replace("€", " eur"));
        datos.push(valorTotal + " eur");
        body.push(datos);
        num++;
    }
    const precioFinal = document.querySelector("#precio_final").textContent;
    body.push(["", "", "", "Total: ", precioFinal.replace("€", " eur")]);

    doc.autoTable({ head: head, body: body });

    doc.save('MiFactura.pdf')
}

/* AÑADIR EL PEDIDO A SESSION STORAGE*/
function addPedidoToSessionStorage(){
    const shoppingCartItems = document.getElementsByClassName('item');
    
    for (let i = 0; i < shoppingCartItems.length; i++) {
        var nombreDeCadaItem = shoppingCartItems[i].querySelector(".nombre_item").textContent;
        var cantidadDeCadaItem = shoppingCartItems[i].querySelector(".item_cantidad").value;
       
        sessionStorage.setItem(nombreDeCadaItem,String(cantidadDeCadaItem));
    }
}

function vaciarSessionStorage(){
    sessionStorage.clear();
}

document.querySelector("#cerrar_sesion").addEventListener('click', vaciarSessionStorage);
