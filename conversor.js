var pegar = document.getElementById('temp');
const temp = document.getElementById('temperatura');
const botao = document.getElementById('bnt');
var resulta = document.getElementById('valor');


botao.addEventListener("click", function(){
    resulta.innerHTML =  Converter(pegar.value, temp);
})


function Converter(tempe, tipo){
    if(tipo.value == 'Celsius'){
        tempe = parseFloat(tempe);
        tempe = (tempe-32)*5/9;
        tempe = tempe+'°C';
        return tempe;
    }
    if(tipo.value == 'Fahrenheit'){
        tempe = parseFloat(tempe);
        tempe = (tempe*9/5)+32;
        tempe = tempe+'°F';
        return tempe;
    }

}