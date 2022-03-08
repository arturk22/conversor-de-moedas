var valorEmDolarTexto = prompt("Qual valor em dólar você quer converter?")

var valorEmDolarTexto = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarTexto* 5.51
var valorEmRealFixado = valorEmReal.toFixed (2)

alert("O Valor em Real é R$ " + valorEmRealFixado) 