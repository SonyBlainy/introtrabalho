var nome = document.getElementById('nome');
const botao = document.getElementById('bnt');
var test = document.getElementById('hehe');

botao.addEventListener("click", function(){
    Teste(nome, test);
})




function Teste(nome, testando){
    testando.innerHTML = nome.value;
}