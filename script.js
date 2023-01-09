function selecionar(id) {
    let ter = {};


    if (id[1] === 'f') {
        ter = document.querySelector("#pratos .selecionado");

    } else if (id[1] === 'b') {
        ter = document.querySelector("#bebidas .selecionado");
    } else {
        ter = document.querySelector("#sobremesas .selecionado");
    }

    if (ter !== null) {
        ter.classList.remove("selecionado");
    }

    ter = document.querySelector(id);
    ter.classList.add("selecionado");


    let quantSelecionados = 3;
    if (document.getElementsByClassName("selecionado").length === quantSelecionados) {

        habilitarFecharPedido();
    }

}


function habilitarFecharPedido() {
    const fechar = document.querySelector("#fechar");
    fechar.disabled = false;
    fechar.classList.add("finalizar");
    fechar.innerHTML = "Fechar pedido";
}

function fecharPedido() {
    //função que obtem preços e tamanha dos pedidos

    const preco = pegarPreco();
    const tam = pegarTamanho();
    const link = gerarLink(preco, tam);
    abrirPagina(link);

}

function cancelar() {
    const conf = document.querySelector(".confirmar");
    conf.style.display = "none";
}

function gerarLink(preco, tam) {
    let texto = "Olá, gostaria de fazer o pedido:";
    const prato = "- Prato: Frango Yin Yang" + tam[0];
    const bebida = "- Bebida: Coquinha Gelada" + tam[1];
    const sobre = "- Sobremesa: Pudim" + tam[2];
    const total = parseFloat(preco[0]) + parseFloat(preco[1]) + parseFloat(preco[2]);
    const nome = prompt("Qual o seu nome?");
    const endereco = prompt("Qual o seu endereço?");


    texto = `${encodeURIComponent(texto)}%0A${encodeURIComponent(prato)}%0A${encodeURIComponent(bebida)}%0A${encodeURIComponent(sobre)}%0A%0A${encodeURIComponent("TOTAL: R$" + total)}%0A%0A${encodeURIComponent("nome:" + nome)}%0A${encodeURIComponent("Endereço:" + endereco)}`;

    return `https://wa.me/55015981353028?text=${texto}`;

}

//funcao ativado quando clicamos em fechar o pedido
function confirmar() {

    const preco = pegarPreco();
    let total = 0;
    for (let i = 0; i < 3; i++) {
        total = total + parseFloat(preco[i]);
    }


    const conf = document.querySelector(".confirmar");
    const test = conf.querySelectorAll('#precos');
    test[0].innerHTML = `R\$ ${preco[0]}`;
    test[1].innerHTML = "R$ " + preco[1];
    test[2].innerHTML = "R$ " + preco[2];
    test[3].innerHTML = `R\$ ${total}`;
    conf.style.display = "flex";

}

function pegarPreco() {
    const ped = document.querySelectorAll('.selecionado');
    let preco = [];
    for (let i = 0; i < 3; i++) {
        preco[i] = ped[i].getElementsByTagName('span').namedItem('preco').innerHTML;
    }

    return preco;
}

function pegarTamanho() {
    const ped = document.querySelectorAll('.selecionado');

    let tam = [];
    for (let i = 0; i < 3; i++) {
        tam[i] = ped[i].getElementsByTagName('p').namedItem('tam').innerHTML;
    }

    return tam;
}


function abrirPagina(link) {

    var win = window.open(link, '_blank');
    win.focus();

}

