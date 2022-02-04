/*Fabricio Alvares
Ejercicio 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	let mensajeamostrar

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

    mensajeamostrar = "Usted se llama " + nombre + " y tiene " + edad + " años de edad"

	alert(mensajeamostrar);
	
}

