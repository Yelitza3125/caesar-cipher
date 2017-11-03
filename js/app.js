
//   Creando la función de cifrado, con el parámetro input, que es lo que ingresa el usuario.
function cipher(input) {
// validando la función, para que no permita el ingreso de string vacíos o numbers.
  	if (input === '' || typeof(input) === 'number') {
		  // retorna una alerta
  		alert('Ingrese una cadena');
  	} else {
    // Creamos una variable vacía donde se concatenará el output
    var output = '';
    // recorriendo el input ingresado
	 for (var i = 0; i < input.length; i++) {
	 // para saber el número de la letra en Ascii
	 var letterAscii = input.charCodeAt(i); 
	 // obteniendo el nuevo código Ascii de cada letra.
	 var codeAssi = (letterAscii - 65 + 33) % 26 + 65;
		 // pasando ese nuevo código y obtener la letra en Ascii:
		  var newLetter = String.fromCharCode(codeAssi);
		  // concatenando las letras cifradas a la variable output.
		  output += newLetter;
    } 
    // retornando la variable cifrada
  		  return output;
  	}
}  
  
// Declarando una variable para que el usuario ingrese una frase.
var input = prompt('Ingrese una frase');


cipher(input);


// Creando la función descipher
function descipher(descipherInput) {
// Validando que no se ingrese un string vacío o un number
  if (descipherInput === '' || typeof(descipherInput) === 'number') {
  // Genera una alerta que pide al usuario ingresar una cadena
    alert('Ingrese una cadena');
  	} else {
  // Creando la variable donde concatenará el descifrado.
    var descipherInput = '';
    // Recorriendo la frase a descifrar
	 for (var i = 0; i < descipherInput.length; i++) {
	  // condicionando para obtener la letra en al codigo ASCII
	 if ((descipherInput.charCodeAt(i) - 33) % 26 >= -26) {
        var formule = ((descipherInput.charCodeAt(i) - 33) % 26) + 65;
        descipherInput += String.fromCharCode(formule);
	 } else if ((descipherInput.charCodeAt(i) - 33) % 26 < -26) {
	 		var formule2 = (((descipherInput.charCodeAt(i) - 33) % 26) + 26 + 26) + 33;
	 		  descipherInput += String.fromCharCode(formule2);
	 	} 
	  }
	   return descipherInput;
  }	
}	
	
var descipherInput = prompt('Ingrese una frase');


descipher(descipherInput);	