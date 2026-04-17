function funcion(event) {
    //no recarga automaticamente la pagina
    event.preventDefault();
    //obtenemos el valor input en una variable local
    let numero = document.getElementById("numero").value;
    //calculo la raiz cuadrada mediante la funcion Math.sqrt
    resultado = Math.sqrt(numero);
    //muestro el resultado con el documento
    //calculo del seno deun numero
    var resultado2 = Math.sin(resultado);
    //NUMERO ELEVADO AL CUBO
    var resultado3=Math.pow(resultado2,3);
    document.getElementById("resultado").innerHTML = "La raiz del numero " + numero + " es: " + resultado + "<br>" + "El resulatdo del seno es: " + resultado2+ "<br>"+ "El resultado de tu potencia es: " +resultado3;

}
