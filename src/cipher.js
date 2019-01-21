window.cipher = {
  // ... para cifrar
 encode: (offset, msj)=> {
    //tener un mensaje
    let mensaje = msj;
    //capturar el offset
    let espacios = parseInt(offset);
    //cambiar mayusculas
    let mayus= mensaje;
    //el lugar del mensaje descifrado
    let final="";
    //iterar la palabra
    for(let i=0; i<mayus.length; i++){
      //que agarre esa letra
      let letra= mayus.charCodeAt(i);
      //identificar posicion de caracteres
      //encontrar el valor en el codigo ascii
      //que salte los caracteres especiales y numeros
      if(letra >=65 && letra <=90 ){
        //poner la formula para mayusculas
        let formula = (letra - 65+espacios)%26+65;
        //obtener letra del descifrado
        let resultado = String.fromCharCode(formula);
        //que se sume la oración
        final +=resultado;
      } else if(letra >=97 && letra<=122){
        //poner la formula para mayusculas
        let formula = (letra - 97+espacios)%26+97;
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
},

  decode: (offset,msj)=> {
    //tener un mensaje
    let mensaje = msj;
    //capturar el offset
    let espacios = offset;
    //cambiar mayusculas
    let mayus= mensaje;
    //el lugar del mensaje descifrado
    let final="";
    //iterar la palabra
    for(let i=0; i<mayus.length; i++){
      //que agarre esa letra
    let letra= mayus.charCodeAt(i);

    if(letra >=65 && letra <=90 ){
      //poner la formula para mayusculas
      let formula = (letra + 65-espacios)%26+65;
      //obtener letra del descifrado
      let resultado = String.fromCharCode(formula);
      //que se sume la oración
      final +=resultado;
    } else if(letra >=97 && letra<=122){
      //poner la formula para mayusculas
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
