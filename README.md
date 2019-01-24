# Desarrollo del proyecto
## Descripción

TripBack es una agencia de viajes que brinda servicios de primera calidad a sus clientes. Pero últimamente las reservaciones se confuden y los clientes no están a gusto con los inconvenientes que están teniendo. Ya que los datos de sus clientes se confunden, duplican o pierden entre miles de datos que recopilan.


## Definición de objetivos
* Que la agencia de viajes TripBack lleve una base de datos más segura y ordenada para sus clientes.
+ Evitar se confundir o perder las reservaciones.
+ El cliente reciba una atención personalizada.
+ Que al reservar un viaje sea de manera confiable.
+ Poder verificar que se haya hecho correctamente una reservación.

## Resolución del problema
Con esta web app, el usuario (TripBack) puede llevar los datos de sus clientes de una manera confidencial haciendo que su base de datos sea confiable.

Cada cliente cuenta con una combianción de 3 digitos máx. Esto le facilita a Tripback ingresar una reservacion que aunque se repita, siempre será única al momento de cifrarla. Si se necesita saber una reservación previamente hecha, la pueden descrifrar.

Así las reservaciones ya no se intercambian y se evita dar información a otros clientes. Brindando seguridad y confianza.

## Usuarios de producto
Empleados y encargados de la angencia de viajes TripBack.

## Diseño y distribución del sitio
El diseño de la interfaz es intuitiva y clara, los empleados al ingresar a la página encontrarán un botón desplegable en donde se indican las intrucciones para aquellos que no hayan realizado este procedimiento antes. Las instrucciones se encuentran ocultas para los empleados no necesitan leer de nuevo las intrucciones.
Hay tres columas en donde te indica que pasa en cada una. La primera es para ingresas el numero de cliente, la segunda es para ingresar la reservación y por último una tercer columna en donde te arroja los datos, tanto cifrados como descifrados. Para ingresar un nuevo cliente se facilita con el botón de RESET, que borra todos los datos ingresado.


## Pre requisitos
1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/),
   [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux como tu Sistema Operativo.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/Laboratoria/cdmx-2019-01-bc-core-am-cipher) de tu cohort, tus _coaches_ te compartirán un _link_ a un repositorio y te
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.
7. A codear se ha dicho! :rocket:
