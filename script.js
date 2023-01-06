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

    if (ter !== null) {
        ter.classList.remove("selecionado");
    }

    ter = document.querySelector(id);
    ter.classList.add("selecionado");



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

    //função que obtem preços e tamanha dos pedidos

    let ped = document.querySelectorAll('.selecionado');
    let preco = pegarPreco();
    let tam = pegarTamanho();
    let link = gerar_link(preco, tam);
    abrir_pagina(link)

}

function cancelar() {
    let conf = document.querySelector(".confirmar");
    conf.style.display = "none";
}

function gerar_link(preco, tam) {
    let texto = "Olá, gostaria de fazer o pedido:";
    let prato = "- Prato: Frango Yin Yang" + tam[0];
    let bebida = "- Bebida: Coquinha Gelada" + tam[1];
    let sobre = "- Sobremesa: Pudim" + tam[2];
    let total = parseFloat(preco[0]) + parseFloat(preco[1]) + parseFloat(preco[2]);
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual o seu endereço?");


    texto = `${encodeURIComponent(texto)}%0A${encodeURIComponent(prato)}%0A${encodeURIComponent(bebida)}%0A${encodeURIComponent(sobre)}%0A${encodeURIComponent("TOTAL: R$" + total)}%0A%0A${encodeURIComponent("nome:" + nome)}%0A${encodeURIComponent("Endereço:" + endereco)}`;

    let link = `https://wa.me/55015981353028?text=${texto}`;

    return link;
}

//funcao ativado quando clicamos em fechar o pedido
function confirmar() {

    let preco = pegarPreco();
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total = total + parseFloat(preco[i])
    }


    let conf = document.querySelector(".confirmar");
    let test = conf.querySelectorAll('#precos');
    test[0].innerHTML = `R\$ ${preco[0]
        }`
    test[1].innerHTML = "R$ " + preco[1];
    test[2].innerHTML = "R$ " + preco[2];
    test[3].innerHTML = `R\$ ${total}`
    conf.style.display = "flex";

}

function pegarPreco() {
    let ped = document.querySelectorAll('.selecionado');
    let preco = [];
    for (let i = 0; i < 3; i++) {
        preco[i] = ped[i].getElementsByTagName('span').namedItem('preco').innerHTML;
    }

    return preco;
}

function pegarTamanho() {
    let ped = document.querySelectorAll('.selecionado');

    let tam = [];
    for (let i = 0; i < 3; i++) {
        tam[i] = ped[i].getElementsByTagName('p').namedItem('tam').innerHTML;
    }

    return tam;
}


function abrir_pagina(link) {
    var win = window.open(link, '_blank');
    win.focus();
}

