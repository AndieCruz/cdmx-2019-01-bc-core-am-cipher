//Variables que guardan el valor de mis ID's
const mensajeClean = document.getElementById("boxMessage");
const insert= document.getElementById("message");
const num= document.getElementById("offset");
const button= document.getElementById("a");
const buttond= document.getElementById("b");

button.addEventListener("click", ()=>{
	let offset = num.value;
	let msj = mensajeClean.value;
	document.getElementById('message').innerHTML=window.cipher.encode(offset, msj);
})

buttond.addEventListener("click", ()=>{
	let offset = parseInt(num.value);
	let msj = mensajeClean.value;
	document.getElementById('message').innerHTML=window.cipher.decode(offset, msj);
})
