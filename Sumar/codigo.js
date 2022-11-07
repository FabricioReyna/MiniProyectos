var sum1 = document.getElementById("sumando1");
var sum2 = document.getElementById("sumando2");
var resultado = document.getElementById("resultado");
document.getElementById("boton").addEventListener('click', function(event){
    //event.preventDefault;
    var sumando1 = parseInt(sum1.value, 10);
    var sumando2 = parseInt(sum2.value, 10);
var suma = sumando1 + sumando2;
resultado.innerHTML= <h2>La suma vale: ${suma}</h2>
})