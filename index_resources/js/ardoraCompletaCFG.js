//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=250; timeIni=250; timeBon=3;
var successes=0; successesMax=11; attempts=0; attemptsMax=3;
var score=0; scoreMax=11; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0000FF"; colorText="#000000"; colorSele="#FF8040";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excellente"; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img tabindex="0" alt="" class="imaup imaLeft" src="index_resources/media/c1_Captura.JPG"  align="left"><p>Canva es una herramienta gratuita, su estrategia de negocio se basa en que ciertos contenidos son Premium, es decir, de pago, con imágenes extras, plantillas, etc. Aún así el contenido gratuito y los textos e imágenes prediseñados pueden servirnos para crear </p><p> contenidos atractivos para nuestro blog, redes sociales, posters, infografías, o incluso para crear unas tarjetas de visita o un CV. Todo depende del buen gusto y de un cierto sentido de la estética, por supuesto, pero se puede sacar partido de esta herramienta con relativa facilidad.  </p><p>  </p><p> En el enlace encontrará la guía para Canva: https://drive.google.com/file/d/1w91ZT7tECdCTFDs8mQG35loI0ZU4VUT9/view?usp=sharing </p><p>  </p><p>  </p><p>  </p><p> Elementos de la interface de CANVA </p><p> Una vez elegida nuestra plantillas, cambiamos de pantalla y nos aparece una ventana dividida por una columna lateral izquierda y un área de trabajo a la derecha. </p><p> <input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraDropInput" readonly> </p><p> En la parte superior aparece un buscador, donde podemos buscar por nombre: Plantillas,fotos, elementos, según estemos en alguna de las pestañas de la parte izquierda. </p><p> <input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraDropInput" readonly> </p><p> Desde la barra lateral podemos acceder a la pestaña Plantillas o Layouts  donde encontraremos plantillas de diseños. Estas cambian dependiendo de la selección que hallamos hecho al comienzo. </p><p> <input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraDropInput" readonly> </p><p> En esta pestaña podemos navegar entre miles de fotos por temáticas o buscar un tema concreto en el buscador. </p><p> Podremos: Aplicar filtros, Ajustar, recortar, girar, cambiar de posición (alinear), modificar la transparencia, hacer enlaces o bloquear posición.  </p><p>  </p><p> <input aria-label="Item 4" type="text" name="item4" id="item4" class="ardoraDropInput" readonly> </p><p> En esta pestaña encontrarás elementos gráficos, desde cuadrículas de diseño, diagramas, marcos, formas sencillas, degradados… hasta líneas, ilustraciones e iconos. </p><p> Podremos: cambiar de color, recortar, girar, cambiar de posición (alinear), crear enlaces o bloquear posición.  </p><p> <input aria-label="Item 5" type="text" name="item5" id="item5" class="ardoraDropInput" readonly> </p><p> Debajo de la pestaña Elementos tenemos Texto, aquí encontramos textos prediseñados en formatos muy distintos, que por supuesto podemos cambiar a voluntad. Añadir textos y editarlos con la barra superior es relativamente sencillo, podremos cambiar tipografías,tamaños, colores, alineación  como cualquier editor de texto sencillo que utilizamos habitualmente. </p><p> <input aria-label="Item 6" type="text" name="item6" id="item6" class="ardoraDropInput" readonly> </p><p> A continuación una nueva pestaña para incluir fondos a nuestro diseño, pudiendo utilizar colores planos, texturas o imágenes. </p><p> <input aria-label="Item 7" type="text" name="item7" id="item7" class="ardoraDropInput" readonly> </p><p> Y por último la pestaña de Upload  para subir nuestros propios elementos al diseño. Una de las características interesantes de la aplicación es que guarda nuestras imágenes o elementos que hayamos subido, para poder reutilizarlos en otros diseño. También podemos utilizar las imágenes de nuestra cuenta de Facebook. </p><p> <input aria-label="Item 8" type="text" name="item8" id="item8" class="ardoraDropInput" readonly> </p><p> Una serie de carpetas, la mayoría premium. Las del perfil gratuito serán Comprado  y Me gusta. NO podrás carpetas con fotos, utilizar tus diseños como plantillas, ni crear carpetas con tus diseños. </p><p> <input aria-label="Item 9" type="text" name="item9" id="item9" class="ardoraDropInput" readonly> </p><p> En esta pestaña encontrarás la manera de utilizar fotos de otras aplicaciones como Pexels o Pixabay, añadir código multimedia, agregar emojis, etc.  </p><p> <input aria-label="Item 10" type="text" name="item10" id="item10" class="ardoraDropInput" readonly> </p><p> Una vez hemos seleccionado una plantilla, se nos muestra en el cuadro central. Todos los elementos de la plantilla son seleccionables de manera individual. Tanto imágenes como texto son colocados en capas superpuestas. </p><p> <input aria-label="Item 11" type="text" name="item11" id="item11" class="ardoraDropInput" readonly> </p><p> Para finalizar nuestro trabajo, podemos compartir directamente en Redes Sociales, pulsando en el menu superior derecha del área de trabajo, o podemos exportar la imagen en formato JPG, PNG, PDF estándar ó PDF para impresión en la versión gratuita y Animación (Mp4/gif) en la versión Premium. </p><p> </p>'];
var answers=["TEXTO","BUSCADOR","PLANTILLAS","FOTOS","ELEMENTOS","FONDO","ARCHIVOS SUBIDOS (UPLOAD)","CARPETAS","MÁS","ÁREA DE TRABAJO","Exportar y Compartir"];
var a=["NQ==","MQ==","Mg==","Mw==","NA==","Ng==","Nw==","OA==","OQ==","MTA=","MTE="];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fHelp="Verdana, Geneva, sans-serif";
var imaW=["320","300","300","300"];
var imaH=["101","225","225","225"];
var info=["","","",""];
