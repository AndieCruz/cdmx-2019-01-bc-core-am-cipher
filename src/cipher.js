window.cipher = {
  // ... para cifrar
 encode: (offset, msj)=> {
    //tener un mensaje
    let mensaje = msj;
    //capturar el offset
    let espacios = parseInt(offset);
    //cambiar mayusculas
    let mayus= mensaje.toUpperCase();
    //el lugar del mensaje descifrado
    let final="";
    //iterar la palabra
    for(let i=0; i<mayus.length; i++){
      //que agarre esa letra
      let letra= mayus.charCodeAt(i);
      //identificar posicion de caracteres
      //encontrar el valor en el codigo ascii
      //poner la formula
      let formula = (letra- 65+espacios)%26+65;
      //obtener letra del descifrado
      let resultado = String.fromCharCode(formula);
      //guardarlo en la variable final
      final +=resultado;
    }
  return  final;
},

  decode: (offset,msj)=> {
    //tener un mensaje
    let mensaje = msj;
    //capturar el offset
    let espacios = offset;
    //cambiar mayusculas
    let mayus= mensaje.toUpperCase();
    //el lugar del mensaje descifrado
    let final="";
    //iterar la palabra
    for(let i=0; i<mayus.length; i++){
      //que agarre esa letra
      let letra= mayus.charAt(i);
      //identificar posicion de caracteres
      //encontrar el valor en el codigo ascii
      let valor=letra.charCodeAt(0);
      //poner la formula
      let formula = (valor+65-espacios)%26+65;
      //obtener letra del descifrado
      let resultado = String.fromCharCode(formula);
      //guardarlo en la variable final
      final = final+resultado;
    }
  return  final;
  //insert.innerHTML = msj;
}
};
  //insert.innerHTML = msj;
  //console.log(insert);
