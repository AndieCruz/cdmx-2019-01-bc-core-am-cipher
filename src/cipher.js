window.cipher = {
  // ... para cifrar
 encode: (offset, msj)=> {
    let espacios = parseInt(offset);
    //el lugar en donde se guarda el mensaje cifrado
    let final="";
    //iterar la palabra
    for(let i=0; i<msj.length; i++){
      //encontrar el valor en el codigo ascii
      let letra= msj.charCodeAt(i);
      //que salte los caracteres especiales y numeros
      if(letra >=65 && letra <=90 ){
        //poner la formula para mayusculas
        let formula = (letra - 65+espacios)%26+65;
        //obtener letra del descifrado
        let resultado = String.fromCharCode(formula);
        //que se sume la oración
        final +=resultado;
      } else if (letra >=97 && letra<=122){
        //poner la formula para minusculas
        let formula = (letra - 97+espacios)%26+97;
        //obtener letra del descifrado
        let resultado = String.fromCharCode(formula);
        //que se sume la oración
        final +=resultado;
      }else{
        //si no encuentra mayusculas ni minusculas entonces que...
        let resultado = String.fromCharCode(letra);
        final +=resultado;
      }
    }
  return  final;
},

  decode: (offset,msj)=> {
    let espacios = parseInt(offset);
    //el lugar en donde se guarda el mensaje descifrado
    let final="";
    //iterar la palabra
    for(let i=0; i<msj.length; i++){
      //que agarre esa letra
    let letra= msj.charCodeAt(i);
//para saltar caracteres especiales y numeros
    if(letra >=65 && letra <=90 ){
      //poner la formula para mayusculas
      let formula = (letra + 65-espacios)%26+65;
      //obtener letra del descifrado
      let resultado = String.fromCharCode(formula);
      //que se sume la oración
      final +=resultado;
    }else if(letra >=97 && letra<=122){
      //poner la formula para minusculas
      let formula = (letra - 122 - espacios)%26+122;
      //obtener letra del descifrado
      let resultado = String.fromCharCode(formula);
      //que se sume la oración
      final +=resultado;
    }else{
      let resultado = String.fromCharCode(letra);
      final +=resultado;
    }
  }
return  final;
}
};
