let nomeProduto = "coleira";
let precoProduto = 1200; 
let descontoProduto = 100;
let descontoValido = true;
let precoFinal;

if (descontoValido) {
    precoFinal = precoProduto - descontoProduto;
    console.log(`Preço final com desconto é R$${precoFinal}`);
} else {
    precoFinal = precoProduto;
    console.log(`Preço final sem desconto R$${precoFinal}`);
}

console.log("--------------");

if (precoFinal > 1000) {
    precoFinal = precoFinal - 50;
    console.log(`Preço final com redução de R$50 é R$${precoFinal}`);
} else {
    console.log(`O preço final sem deduções é R$${precoFinal}`);
}

let demandas = [10, 2, 1, 30, 5];
let totalCliente = [];

for (let i = 0; i < demandas.length; i++) {
    let precoCliente = demandas[i] * precoFinal;
    totalCliente.push(precoCliente);
    console.log(`O cliente ${i} irá pagar: R$${precoCliente.toFixed(2)}`);
}

let totalObtido = totalCliente.reduce(function(totalObtido, demandas){
    return totalObtido + demandas;
}, 0);
console.log(`O total de lucro é R$${totalObtido.toFixed(2)}`);

