var pegar = document.getElementById('temp');
const temp_i = document.getElementById('temperatura_inicio');
const temp_f = document.getElementById('temperatura_final');
const botao = document.getElementById('bnt');
var resulta = document.getElementById('valor');


botao.addEventListener("click", function(){
    resulta.innerHTML =  Converter(pegar.value, temp_i, temp_f);
})


function Converter(tempe, tipo_1, tipo_2){
    if(tipo_1.value == 'Celsius'){
        if(tipo_2.value == 'Fahrenheit'){
            tempe = parseFloat(tempe);
            tempe = (tempe*9/5)+32;
            tempe = Number(tempe).toFixed(2);
            tempe = tempe+'°F';
            return tempe;
        }
        if(tipo_2.value == 'Kelvim'){
            tempe = parseFloat(tempe);
            tempe = tempe+273;
            tempe = Number(tempe).toFixed(2);
            tempe = tempe+'°K';
            return tempe;
        }
        if(isNaN(tempe)){
            return ''
        }
    }
    if(tipo_1.value == 'Fahrenheit'){
        if(tipo_2.value == 'Celsius'){
            tempe = parseFloat(tempe);
            tempe = (tempe-32)*5/9;
            tempe = Number(tempe).toFixed(2);
            tempe = tempe+'°C';
            return tempe;
        }
        if(tipo_2.value == 'Kelvim'){
            tempe = parseFloat(tempe);
            tempe = (tempe-32)*(5/9)+273;
            tempe = Number(tempe).toFixed(2);
            tempe = tempe+'°K';
            return tempe
        }
    }
}