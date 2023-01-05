function selecionar(id) {
    let ter = {}


    if (id[1] == 'f') {
        ter = document.querySelector("#pratos .selecionado")

    } else if (id[1] == 'b') {
        ter = document.querySelector("#bebidas .selecionado")
    } else {
        ter = document.querySelector("#sobremesas .selecionado")
    }

    //let ter = document.querySelector(".selecionado");

    if (ter != null) {
        ter.classList.remove("selecionado");
    }

    ter = document.querySelector(id);
    ter.classList.add("selecionado");

    ter = document.querySelector("#fechar");
    ter.disabled = false;

    /*quando eu selecionar as tres classes de pedidos
    eu tenho que habilitar o botão e chamar a 
    função fechar pedido*/

    if (document.getElementsByClassName("selecionado").length == 3) {

        habilitar_fechar_pedido();
    }

}


function habilitar_fechar_pedido() {
    let fechar = document.querySelector("#fechar");
    fechar.disabled = false;
    fechar.classList.add("finalizar")
    fechar.innerHTML = "Fechar pedido"
}

function fechar_pedido() {
    console.log("ok")
}

