/* ========================================================
   BANCOS DE PREGUNTAS (4 EXÁMENES OFICIALES FNMT)
   ======================================================== */



// --- EXAMEN 1: FNMT 2022 (100 PREGUNTAS COMPLETAS) ---
const examFNMT2022 = [
  {
    question: "A la hora de cortar un papel, ¿cuál de estos se mostrará más inestable y difícil de igualar?",
    options: ["Offset", "Estucado", "Adhesivo"],
    correct: 2,
    explanation: "El papel adhesivo presenta mayor inestabilidad durante el manipulado e igualado debido al comportamiento de sus capas y adhesivos.",
    source: "Examen Oficial FNMT 2022 (Pregunta 1)"
  },
  {
    question: "Si al igualar una resma de papel fino de unos 80 grs. Observamos que hay aire entre los pliegos, ¿qué deberíamos hacer en relación con el tiempo de prensado antes del corte?",
    options: ["Reducirlo", "Aumentarlo", "Para esta situación es indiferente"],
    correct: 1,
    explanation: "Aumentar el tiempo de prensado permite la evacuación completa de la bolsa de aire contenida entre los pliegos antes de que actúe la cuchilla.",
    source: "Examen Oficial FNMT 2022 (Pregunta 2)"
  },
  {
    question: "¿Cuál es el rango de presiones que admiten los modelos POLAR 115?",
    options: ["De 150-4.500 daN", "De 100-4.000 daN", "De 150-5.000 daN"],
    correct: 0,
    explanation: "El rango técnico de ajuste hidráulico del pisón en las guillotinas POLAR 115 va desde 150 hasta 4.500 daN.",
    source: "Examen Oficial FNMT 2022 (Pregunta 3)"
  },
  {
    question: "Si queremos introducir una medida teórica y que la escuadra avance o retroceda a esa posición que debemos hacer tanto en los modelos X como los XT.",
    options: ["Introducir el valor y pulsar la tecla Enter", "Introducir el valor y poner Modo Automático.", "Pulsar la tecla igual (=) 2 veces."],
    correct: 2,
    explanation: "La pulsación doble de la tecla igual (=) confirma y ejecuta el desplazamiento motorizado de la escuadra a la cota introducida.",
    source: "Examen Oficial FNMT 2022 (Pregunta 4)"
  },
  {
    question: "¿A qué nos referimos cuando hablamos de que el papel está \"tenso\"?",
    options: [
      "Debido a la tensión interfibrilar del papel y a un cambio de humedad desde el almacén hasta el momento de cortarlo, se produce un aumento dimensional.",
      "Debido a que los bordes de los pliegos tienen más humedad que el centro se produce un comportamiento llamado \"emplatado\".",
      "Debido a que los bordes de los pliegos están más secos que el centro se produce un comportamiento llamado \"emplatado\"."
    ],
    correct: 2,
    explanation: "El efecto de papel tenso u ondula por los bordes ocurre cuando los laterales pierden humedad más rápidamente que la zona central.",
    source: "Examen Oficial FNMT 2022 (Pregunta 5)"
  },
  {
    question: "Debido al uso de polvos antimaculantes durante la impresión de los pliegos, ¿qué efecto se produce y cómo podemos solventarlo?",
    options: [
      "La posteta se vuelve esponjosa debido a la presencia de polvos entre sus pliegos, haciendo que el papel se vuelva resbaladizo. Para evitarlo es conveniente hacer un prensado sin corte previo.",
      "La posteta se vuelve esponjosa debido a la presencia de polvos entre sus pliegos, haciendo que el papel se vuelva resbaladizo. Para evitar que el papel se desplace durante el prensado disminuiremos la fuerza del prensado.",
      "La posteta se vuelve esponjosa debido a la presencia de polvos entre sus pliegos, haciendo que el papel se vuelva resbaladizo. Para evitar que el papel se desplace durante el prensado aumentaremos la fuerza del prensado."
    ],
    correct: 2,
    explanation: "Para fijar los pliegos sueltos por el grano de polvo antimaculante y evitar deslizamientos al cortar, se debe incrementar la fuerza de prensado.",
    source: "Examen Oficial FNMT 2022 (Pregunta 6)"
  },
  {
    question: "¿Para qué es conveniente el uso de la función \"Eltrotact\"?",
    options: [
      "Para que la retirada del desperdicio en algunos cortes se automatice y se deposite bajo la mesa de corte.",
      "Para facilitar la colocación de los productos una vez cortados.",
      "Para cortar medidas de productos que se repiten en una misma dirección."
    ],
    correct: 2,
    explanation: "La función Eltrotact permite la repetición secuencial automatizada de medidas en la misma trayectoria de corte.",
    source: "Examen Oficial FNMT 2022 (Pregunta 7)"
  },
  {
    question: "¿Cuál es la protección en caso de rotura de la biela mediante el perno de rotura en los modelos POLAR 115?",
    options: ["10t", "13t", "15t"],
    correct: 1,
    explanation: "El perno de cizallamiento de seguridad en los modelos POLAR 115 está dimensionado para romperse al alcanzar una sobrecarga de 13 toneladas.",
    source: "Examen Oficial FNMT 2022 (Pregunta 8)"
  },
  {
    question: "¿Qué ocurre cuando trabajamos con presiones mucho más elevadas de las recomendadas para un material?",
    options: [
      "La cuchilla queda bloqueada después de realizar el corte y es preciso reiniciar la máquina.",
      "La cuchilla saca el material debajo del pisón y los primeros pliegos son más largos.",
      "La cuchilla se desvía de abajo hacia delante y los pliegos inferiores se alargarán."
    ],
    correct: 2,
    explanation: "Una presión excesiva deforma la pila comprimida, provocando flexión en la cuchilla hacia adelante y alargando las hojas del fondo.",
    source: "Examen Oficial FNMT 2022 (Pregunta 9)"
  },
  {
    question: "¿Cómo podemos reconocer que una cuchilla está cortando sin filo?",
    options: [
      "Con unos guantes de seguridad y mucha precaución deslizando el dedo de delante hacia atrás del filo.",
      "Porque la máquina se para continuamente durante el corte debido a las fuertes presiones que debe soportar.",
      "Cuando observamos que la superficie de corte y/o los desperdicios se pegan entre si después de cortar."
    ],
    correct: 2,
    explanation: "La fricción por rompedura de un filo desgastado genera calor excesivo, provocando que los bordes de los desperdicios se adhieran entre sí.",
    source: "Examen Oficial FNMT 2022 (Pregunta 10)"
  },
  {
    question: "¿De qué grosor es el inserto en las cuchillas de metal duro, tanto las normales, como las de grano superfino?",
    options: ["De 2,5 a 3 mm", "De 3 a 3,5 mm", "De 3,5 a 4 mm"],
    correct: 0,
    explanation: "Las placas o insertos soldados de metal duro en cuchillas de guillotina industrial disponen de un espesor estándar de 2,5 a 3 mm.",
    source: "Examen Oficial FNMT 2022 (Pregunta 11)"
  },
  {
    question: "Las guillotinas Polar nos permiten en caso de que sea usada por más de un operador o cuando se repita el trabajo en el futuro la opción de añadir comentarios que ayuden a operador. ¿De qué tipo son?",
    options: ["Individuales y Funcionales", "Individuales y Generales", "Individuales, Funcionales y Estándar"],
    correct: 2,
    explanation: "El sistema del programa POLAR contempla la adición de comentarios estructurados en tres categorías: Individuales, Funcionales y Estándar.",
    source: "Examen Oficial FNMT 2022 (Pregunta 12)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, Cuanto menor es el gramaje del papel no estucado...",
    options: [
      "más fácil será de igualar y su comportamiento será más estable",
      "más difícil será de igualar pero su comportamiento será más estable",
      "más difícil será de igualar y su comportamiento será más inestable"
    ],
    correct: 2,
    explanation: "Los papeles livianos no estucados pierden rigidez estructural, dificultando el alineado a taco y resultando más inestables al cortar.",
    source: "Examen Oficial FNMT 2022 (Pregunta 13)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, Qué significa el siguiente icono?",
    options: ["Funciones de programa.", "Funciones auxiliares.", "Funciones adicionales."],
    correct: 1,
    explanation: "En la simbología oficial POLAR, el icono indicado representa las 'Funciones auxiliares'.",
    source: "Examen Oficial FNMT 2022 (Pregunta 14)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, ¿Qué significa el siguiente pictograma?",
    options: ["Sujetador activo", "Sujetador arriba", "Sujetador reposo/pasivo"],
    correct: 2,
    explanation: "Corresponde al pictograma indicador del estado 'Sujetador reposo/pasivo'.",
    source: "Examen Oficial FNMT 2022 (Pregunta 15)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, Qué significa el siguiente pictograma?",
    options: ["Correción material", "Formatos de papel", "Marcado II"],
    correct: 0,
    explanation: "El pictograma representa la función de 'Corrección de material'.",
    source: "Examen Oficial FNMT 2022 (Pregunta 16)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, Qué significa el siguiente pictograma?",
    options: ["Tecla de información", "Poner protección de programa/ON", "Tecla Indice de programa"],
    correct: 2,
    explanation: "Representa el mando o acceso a la 'Tecla Índice de programa'.",
    source: "Examen Oficial FNMT 2022 (Pregunta 17)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, En una guillotina XT, la selección de un programa libre, se realiza...",
    options: [
      "Accionando la tecla táctil Selección programa, El siguiente programa libre del segmento actual de memoria se indica en color verde ó accionando la tecla táctil Sinopsis programas, en el campo de entrada se indica el siguiente programa libre del segmento actual de memoria.",
      "Accionando la tecla táctil Procesar Conect. + Selección programa, El siguiente programa libre del segmento actual de memoria se indica en color verde",
      "Accionando la tecla táctil Procesar Conect. + Selección programa, El siguiente programa libre del segmento actual de memoria se indica en color verde ó accionando la tecla táctil Sinopsis programas, en el campo de entrada se indica el siguiente programa libre del segmento actual de memoria."
    ],
    correct: 2,
    explanation: "Procedimiento completo mediante la combinación 'Procesar Conect. + Selección programa' o desde la pantalla de 'Sinopsis programas'.",
    source: "Examen Oficial FNMT 2022 (Pregunta 18)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, En la memorización de informaciones de programa, en el apartado observaciones. Cúantas líneas se pueden memorizar como máximo?",
    options: ["8 líneas", "7 líneas", "9 líneas"],
    correct: 1,
    explanation: "El campo de texto libre para observaciones en los programas de corte POLAR admite un límite máximo de 7 líneas.",
    source: "Examen Oficial FNMT 2022 (Pregunta 19)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, En una guillotina XT, los parámetros pre ajustables son:",
    options: [
      "tiempo de prensado antes del corte, tiempo de prensado sin corte, grado de fuerza de prensado, uso de los sensores de fuerza de prensado, aceleración del avance de la escuadra, velocidad de la escuadra, frenado suave de la escuadra, optimización del pisón, barrera de luz del Pisón, prensado previo suave, corte rápido, autotrim-aire de soplado, autotrim- inicio/finalización del aire de soplado, tiempo para alinear/llevar a depósito",
      "tiempo de prensado antes del corte, tiempo de prensado sin corte, grado de fuerza de prensado, sensores de fuerza de pisón, aceleración del avance de la escuadra, velocidad de la escuadra, frenado suave de la escuadra, optimización del pisón, barrera de luz del Pisón, corte rápido, autotrim-aire de soplado, autotrim inicio/finalización del aire de soplado, tiempo para alinear/llevar a depósito",
      "tiempo de prensado antes del corte, tiempo de prensado sin corte, grado de fuerza de prensado, sensores de fuerza de pisón, aceleración del avance de la escuadra, velocidad de la escuadra, frenado suave de la escuadra, optimización del pisón, barrera de luz del Pisón, prensado previo suave, autotrim-aire de soplado, autotrim- inicio/finalización del aire de soplado, tiempo para alinear/llevar a depósito"
    ],
    correct: 2,
    explanation: "Listado completo de parámetros configurables predefinidos en la interfaz POLAR XT.",
    source: "Examen Oficial FNMT 2022 (Pregunta 20)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, En una guillotina XT, la función soltar pison en PMI (punto muerto inferior) qué ventajas tiene?",
    options: [
      "El pisón baja de forma automática al realizar el corte.",
      "El pisón se mantiene abajo sin necesidad de mantener pulsado el pedal, ganando seguridad en el corte.",
      "El pisón se eleva antes con lo que la escuadra es capaz de ponerse en movimiento antes agilizando el corte."
    ],
    correct: 2,
    explanation: "Liberar anticipadamente el pisón al alcanzar el fondo de carrera (PMI) acorta tiempos de ciclo al anticipar el movimiento de la escuadra.",
    source: "Examen Oficial FNMT 2022 (Pregunta 21)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, Mediante qué elemento el Fixomat es capaz de ayudar a alinear el papel?",
    options: ["Las marcas de registro.", "Las guías de registro", "Las guías de corte"],
    correct: 1,
    explanation: "El dispositivo automatizado Fixomat utiliza las guías de registro fijas/móviles para alinear mecánicamente los pliegos.",
    source: "Examen Oficial FNMT 2022 (Pregunta 22)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, En una guillotina 115 XT, el tiempo total de reacción del sistema al interrumpir la barrera de luz es?",
    options: ["< 150 ms", "< 140 ms", "< 125 ms"],
    correct: 2,
    explanation: "Por norma de seguridad contra atrapamiento, la barrera fotoeléctrica garantiza un freno de emergencia inferior a 125 milisegundos.",
    source: "Examen Oficial FNMT 2022 (Pregunta 23)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, Sobre qué campos se aplica la normalización?",
    options: [
      "Productos, Maquinas, Gestión Medioambiental, Gestión de riesgos en el trabajo, Datos",
      "Materiales, Productos, Maquinas, Gestión Medioambiental, Gestión de riesgos en el trabajo, Datos",
      "Materiales, Productos, Maquinas, Gestión Medioambiental, Gestión de riesgos en el trabajo, Datos, Residuos"
    ],
    correct: 2,
    explanation: "La normalización industrial abarca los 7 campos operativos citados incluyendo la gestión ambiental y de residuos.",
    source: "Examen Oficial FNMT 2022 (Pregunta 24)"
  },
  {
    question: "Según el manual de OF. 1ª Guillotinero, las funciones de autotrim son..",
    options: [
      "1.Separación automática de desperdicios y material / 2.Preparación del transporte de material y de la alineación / 3.Eliminación de desperdicios sin intervención adicional del operador / 4.Transporte automático de material / 5.Alineación automática",
      "1.Separación automática de desperdicios y material / 2.Recogida de material en base / 3.Preparación del transporte de material y de la alineación / 4.Eliminación de desperdicios sin intervención adicional del operador / 5.Transporte automático de material / 6.Alineación automática / 7.Descarga de material especial-estación de alineación",
      "1.Separación automática de desperdicios y material / 2.Recogida de material en base / 3.Preparación del transporte de material y de la alineación / 4.Eliminación de desperdicios sin intervención adicional del operador / 5.Transporte automático de material / 6.Alineación automática"
    ],
    correct: 2,
    explanation: "Secuencia normalizada de 6 fases en el ciclo de trabajo con sistema de evacuación AutoTrim.",
    source: "Examen Oficial FNMT 2022 (Pregunta 25)"
  },
  {
    question: "En las máquinas vibradoras existe un elemento denominado rodillo sacador de aires existente, ¿en qué casos deberemos desconectarlo?",
    options: ["cuando se vibran láminas de plástico", "cuando se vibra papel engomado o adhesivo", "cuando se vibra material con perforaciones"],
    correct: 2,
    explanation: "El rodillo sacador de aire debe desactivarse con materiales troquelados o perforados para evitar arrugas o desgarros.",
    source: "Examen Oficial FNMT 2022 (Pregunta 26)"
  },
  {
    question: "Qué serie relacionada con los formatos de papeles internacionales DIN son los que poseen mayores dimensiones:",
    options: ["DIN A", "DIN B", "DIN C"],
    correct: 1,
    explanation: "A igualdad de número de formato (ej. B0 vs A0), la serie DIN B presenta dimensiones físicamente superiores a la serie A.",
    source: "Examen Oficial FNMT 2022 (Pregunta 27)"
  },
  {
    question: "Qué medida en pulgadas posee el tabloid",
    options: ["17 x 11", "11 x 8.5", "17 x 8.5"],
    correct: 0,
    explanation: "El formato americano Tabloid posee unas dimensiones estándar de 17 × 11 pulgadas.",
    source: "Examen Oficial FNMT 2022 (Pregunta 28)"
  },
  {
    question: "Como norma general el expulsor programable actúa:",
    options: [
      "cuando la medida siguiente es menor que la posición de corte anterior",
      "cuando la mesa delantera está limpia de productos ya cortados",
      "cuando la medida siguiente es mayor que la posición de corte anterior"
    ],
    correct: 2,
    explanation: "El expulsor automático avanza para retirar el material cuando el siguiente paso programado requiere una cota más holgada.",
    source: "Examen Oficial FNMT 2022 (Pregunta 29)"
  },
  {
    question: "El aire para mesa completa se suministra automaticamente:",
    options: ["mientras la escuadra regresa", "mientras la escuadra avanza", "la función del aire no tiene programación automática"],
    correct: 0,
    explanation: "El colchón de aire cubre toda la mesa durante el retorno rápido de la escuadra para facilitar el desplazamiento.",
    source: "Examen Oficial FNMT 2022 (Pregunta 30)"
  },
  {
    question: "De las cuchillas que se indican a continuación cuál es la más duradera:",
    options: ["cuchilla de metal duro", "cuchilla de metal duro con inserto de grano superfino", "cuchilla de acero de corte ultrarrápido"],
    correct: 1,
    explanation: "Las aleaciones de metal duro con grano superfino (carburo micrograno) aportan la máxima durabilidad de filo frente al desgaste.",
    source: "Examen Oficial FNMT 2022 (Pregunta 31)"
  },
  {
    question: "Marcar la presión de prensado en dan recomendable para el papel carbón:",
    options: ["1500-200", "400", "800-1000"],
    correct: 2,
    explanation: "Para evitar la transferencia no deseada de pigmento bajo el pisón, el papel carbón se prensa moderadamente entre 800 y 1.000 daN.",
    source: "Examen Oficial FNMT 2022 (Pregunta 32)"
  },
  {
    question: "En las elevadoras de descarga para el manipulado del papel, el pulsador de descenso de la zona de seguridad se parará automáticamente a:",
    options: ["a 20 cm del suelo", "a 17 cm del suelo", "a 25 cm del suelo"],
    correct: 0,
    explanation: "Como medida anti-atrapamiento de pies, los elevadores detienen el descenso automático al aproximarse a 20 cm del suelo.",
    source: "Examen Oficial FNMT 2022 (Pregunta 33)"
  },
  {
    question: "La presión de seguridad de una guillotina tipo 115 al bajar el pisón por pedal debe ser:",
    options: ["un máximo de 300 n", "un máximo de 30 n", "un máximo de 500 n"],
    correct: 0,
    explanation: "La fuerza máxima admisible en el pisón accionado mediante el pedal de aproximación está limitada legalmente a 300 N.",
    source: "Examen Oficial FNMT 2022 (Pregunta 34)"
  },
  {
    question: "Un elemento importante para la seguridad en guillotinas es la barrera de luz, de cuántos canales dispone:",
    options: ["20", "17", "25"],
    correct: 0,
    explanation: "El circuito emisor/receptor de seguridad fotoeléctrico en estos equipos integra un cortafuegos de 20 canales.",
    source: "Examen Oficial FNMT 2022 (Pregunta 35)"
  },
  {
    question: "La escuadra se puede modificar en su posición para la cuchilla manualmente mediante:",
    options: ["mando adicional DNT", "pernos esféricos", "programa de corte"],
    correct: 0,
    explanation: "El volante o mando manual suplementario DNT posibilita el ajuste micrométrico manual de la posición de la escuadra.",
    source: "Examen Oficial FNMT 2022 (Pregunta 36)"
  },
  {
    question: "Para evitar el efecto cuña de la cuchilla, generalmente en soportes de gran grosor:",
    options: ["realizamos un contracorte", "después del primer corte se gira 270º y vuelve a cortarse", "a y b son correctas"],
    correct: 2,
    explanation: "Tanto la ejecución de un contracorte como el giro estratégico a 270° contrarrestan la desviación por la cuña del bisel.",
    source: "Examen Oficial FNMT 2022 (Pregunta 37)"
  },
  {
    question: "¿Qué norma ha sido adoptada por la mayoría de los organismos nacionales de normalización europeos en relación a los formatos de papel, que fue la base de una norma internacional?",
    options: ["DIN 477", "DIN 476", "DIN 216"],
    correct: 1,
    explanation: "La norma alemana DIN 476 sirvió de cimiento para la especificación internacional de formatos de papel ISO 216.",
    source: "Examen Oficial FNMT 2022 (Pregunta 38)"
  },
  {
    question: "En formatos de hasta 600mm. En las normas DIN/ISO. ¿Cuál será la tolerancia de la desviación de las medidas?",
    options: ["2mm.", "+ 3mm.", "+ 1,5mm."],
    correct: 2,
    explanation: "Para dimensiones comprendidas en el rango de hasta 600 mm, la tolerancia dimensional permitida es de ± 1,5 mm.",
    source: "Examen Oficial FNMT 2022 (Pregunta 39)"
  },
  {
    question: "IPara qué sirven las marcas de registro?",
    options: [
      "Para comprobar que la impresión se ha registrado correctamente a tacón, así como observar el correcto apilado de la posteta.",
      "Para ajustar los diferentes colores que componen el trabajo, así como anverso con reverso.",
      "Para ajustar los colores, la entonación y el brillo de la impresión."
    ],
    correct: 0,
    explanation: "Garantizan la perfecta alineación de la imagen impresa respecto a las guías o esquinas de referencia ('a tacón').",
    source: "Examen Oficial FNMT 2022 (Pregunta 40)"
  },
  {
    question: "El corte a sangre es:",
    options: [
      "Aquel que deja el efecto sin márgenes en blanco alrededor de este.",
      "Aquel que deja el efecto con márgenes en blanco alrededor de este.",
      "El corte que se da antes del desbarbe para igualar una posteta que tiene problemas en la estabilidad de la impresión."
    ],
    correct: 0,
    explanation: "El corte a sangre elimina totalmente los márgenes neutros, dejando el diseño impreso hasta el propio borde del papel.",
    source: "Examen Oficial FNMT 2022 (Pregunta 41)"
  },
  {
    question: "I¿Qué es un documento de reposiciones?",
    options: [
      "Es el documento que se emplea para extraer los efectos defectuosos que se detecten durante todo el proceso de fabricación del producto.",
      "Es el documento que se emplea para controlar la reposición de pliegos, antes y después del proceso de impresión.",
      "Es el documento que se emplea para anotar los efectos defectuosos que se detecten durante todo el proceso de fabricación del producto."
    ],
    correct: 2,
    explanation: "Registro formal utilizado en la FNMT para contabilizar e identificar las unidades rechazadas o defectuosas producidas.",
    source: "Examen Oficial FNMT 2022 (Pregunta 42)"
  },
  {
    question: "I¿Cómo se evita que después del corte los pliegos tengan diferente longitud?",
    options: [
      "Realizando correctamente el aireado y exfoliado del papel.",
      "Utilizando polvos antiadherentes para que los pliegos se deslicen correctamente.",
      "Utilizando un pisón por detrás de la cuchilla para evitar que la cuchilla empuje el material a cortar durante el corte."
    ],
    correct: 2,
    explanation: "El uso de suplementos de contención tras la cuchilla frena el empuje axial sobre los pliegos traseros.",
    source: "Examen Oficial FNMT 2022 (Pregunta 43)"
  },
  {
    question: "El objetivo que buscamos cuando aplicamos el método de corte desde el centro es:",
    options: [
      "Evitar los desbarbes inútiles, ahorrando tiempo.",
      "Evitar las tensiones entre las fibras internas y externas y viceversa.",
      "Solventar los posibles desequilibrios de grosor entre el centro y los bordes de la posteta."
    ],
    correct: 2,
    explanation: "Dividir desde el centro iguala las diferencias volumétricas causadas por la acumulación desigual de tinta o abombamiento.",
    source: "Examen Oficial FNMT 2022 (Pregunta 44)"
  },
  {
    question: "El tiempo entre el prensado y el corte se debe alargar:",
    options: [
      "Cuando la posteta es demasiado alta.",
      "Cuando hay demasiado aire entre los pliegos o el material a cortar no permite un tiempo breve de prensado.",
      "Cuando hay demasiado polvo entre los pliegos."
    ],
    correct: 1,
    explanation: "Permite expulsar el aire atrapado o adaptar la respuesta elástica de materiales de alta compresibilidad.",
    source: "Examen Oficial FNMT 2022 (Pregunta 45)"
  },
  {
    question: "Si deseamos aumentar el tiempo de prensado en un paso concreto de un programa, deberemos ajustarlo en:",
    options: ["Parámetros de paso.", "Ajustes de programa.", "Parámetros de máquina."],
    correct: 0,
    explanation: "Las variaciones específicas para un corte concreto dentro de una secuencia se editan dentro de los 'Parámetros de paso'.",
    source: "Examen Oficial FNMT 2022 (Pregunta 46)"
  },
  {
    question: "¿Qué es un programa de formato?",
    options: [
      "Es un programa con medidas generalistas que se puede adaptar a distintos formatos de papel.",
      "Es un programa predefinido instalado en la guillotina para los formatos de papel más utilizados.",
      "Es una utilidad por la cual el operador introduce los datos más importantes y el programa se crea automáticamente."
    ],
    correct: 2,
    explanation: "Un asistente de programación donde el operario introduce las cotas finales y el software genera los pasos de corte.",
    source: "Examen Oficial FNMT 2022 (Pregunta 47)"
  },
  {
    question: "¿Para qué sirve la escuadra giratoria?",
    options: [
      "Para realizar cortes en diagonal en determinados trabajos.",
      "Para girar la posteta y realizar los cortes transversales.",
      "Para compensar la inexactitud del paralelo de la impresión con respecto al lado de aplicación."
    ],
    correct: 2,
    explanation: "Permite orientar el ángulo de la escuadra para alinear el corte con líneas de impresión desalineadas respecto a las aristas del pliego.",
    source: "Examen Oficial FNMT 2022 (Pregunta 48)"
  },
  {
    question: "¿Cuantos cambios de cuchilla soportará la regla de corte antes de necesitar una nueva?",
    options: ["4", "2", "1"],
    correct: 0,
    explanation: "Los listones sintéticos de cuadradillo permiten aprovechar sus 4 lados ejecutando 4 giros/cambios de cara.",
    source: "Examen Oficial FNMT 2022 (Pregunta 49)"
  },
  {
    question: "¿Para qué se utiliza una plantilla de calidad de producto?",
    options: [
      "Para la verificación del producto.",
      "Para establecer las medidas de los cortes en el programa de corte.",
      "Para verificar cada corte realizado en cada paso de la producción en guillotinas."
    ],
    correct: 0,
    explanation: "Patrón físico transparente o rígido de control para validar el escuadrado y cotas finales del producto fabricado.",
    source: "Examen Oficial FNMT 2022 (Pregunta 50)"
  },
  {
    question: "¿En el papel llamado químico o autocopiativo como denominamos a la hoja que es solo receptora?",
    options: ["CF", "CB", "CFB"],
    correct: 0,
    explanation: "En la serie de papel autocopiativo: CB (Coated Back / emisora), CFB (Coated Front & Back / intermedia) y CF (Coated Front / receptora final).",
    source: "Examen Oficial FNMT 2022 (Pregunta 51)"
  },
  {
    question: "¿Cuántas manos habría en 10,5 resmas de papel?",
    options: ["1050", "220", "210"],
    correct: 2,
    explanation: "Sabiendo que 1 resma de papel equivale a 20 manos (500 pliegos / 25 pliegos por mano): 10,5 × 20 = 210 manos.",
    source: "Examen Oficial FNMT 2022 (Pregunta 52)"
  },
  {
    question: "A consecuencia de la humedad, el papel dilata más a:",
    options: ["Fibra", "Contrafibra", "Por igual"],
    correct: 1,
    explanation: "Las fibras del papel absorben agua aumentando su diámetro transversal, haciendo que la dilatación sea mayor a contrafibra.",
    source: "Examen Oficial FNMT 2022 (Pregunta 53)"
  },
  {
    question: "El volumen medio del aire presente en un soporte papelero puede oscilar entre:",
    options: ["5% al 10%", "15% al 50%", "15% al 70%"],
    correct: 2,
    explanation: "Dependiendo de la porosidad y grado de calandrado, la porosidad/aire interno del soporte oscila entre el 15% y el 70%.",
    source: "Examen Oficial FNMT 2022 (Pregunta 54)"
  },
  {
    question: "¿Dónde sucede principalmente el fenómeno denominado Blistering?",
    options: [
      "Máquinas de offset con tinta UVI",
      "Rotativas de offset de secado por calor \"Heat Set\"",
      "Máquinas de offset con secado convencional."
    ],
    correct: 1,
    explanation: "El blistering (ampollado) ocurre en rotativas Heatset al evaporarse súbitamente la humedad atrapada en papeles estucados dentro del horno.",
    source: "Examen Oficial FNMT 2022 (Pregunta 55)"
  },
  {
    question: "¿En qué año fue patentado el celofán?",
    options: ["En 1938 por Dupont", "En 1908 por J. F. Brandenberger", "En 1953 por Herman Bayer"],
    correct: 1,
    explanation: "El químico suizo Jacques E. Brandenberger inventó y patentó la película de celofán en el año 1908.",
    source: "Examen Oficial FNMT 2022 (Pregunta 56)"
  },
  {
    question: "¿Cómo denominamos a la resistencia que ofrecen ciertos adhesivos a separarse de la superficie sobre la que han sido aplicados mediante medios mecánicos de forma rápida y sin presión?",
    options: ["Tack", "Adhesión", "Strength"],
    correct: 0,
    explanation: "El Tack (adhesión inicial o pegajosidad) es la capacidad de crear una unión instantánea sin requerir presión prolongada.",
    source: "Examen Oficial FNMT 2022 (Pregunta 57)"
  },
  {
    question: "¿Para qué y dónde se usa el alcohol Isopropílico?",
    options: [
      "Para el revelado de las planchas siendo muy importante el efecto de evaporación.",
      "Cómo aditivo en la solución de mojado aumentando la tensión superficial del agua.",
      "Cómo aditivo en la solución de mojado reduciendo la tensión superficial del agua."
    ],
    correct: 2,
    explanation: "En impresión offset, el isopropanol reduce la tensión superficial del agua de mojado para lograr un mojado uniforme con menor capa de fluido.",
    source: "Examen Oficial FNMT 2022 (Pregunta 58)"
  },
  {
    question: "Los papeles estucados altobrillo o cast coated poseen una capa de estuco de",
    options: ["de 20 a 30 gr/m2 por cara", "de 20 a 40 gr/m2 por cara", "de 30 a 50 gr/m2 por cara"],
    correct: 0,
    explanation: "El proceso Cast Coated aplica capas pesadas de estuco de 20 a 30 g/m² por cada cara antes del secado sobre tambor espejo.",
    source: "Examen Oficial FNMT 2022 (Pregunta 59)"
  },
  {
    question: "Cuáles de estas opciones no hace referencia a la alpaca:",
    options: ["plata blanca", "plata nueva", "plata alemana"],
    correct: 0,
    explanation: "La alpaca es conocida comúnmente como 'plata alemana', 'metal blanco' o 'plata nueva', pero no con la denominación 'plata blanca'.",
    source: "Examen Oficial FNMT 2022 (Pregunta 60)"
  },
  {
    question: "El término microcontour, en relación al control o medición de la lisura de un soporte hace referencia a:",
    options: ["un aparato de medida", "una cera", "una tinta"],
    correct: 0,
    explanation: "El Microcontour es un equipo metrológico utilizado para analizar el perfil rugoso de la superficie del papel.",
    source: "Examen Oficial FNMT 2022 (Pregunta 61)"
  },
  {
    question: "La impresión vlf hace referencia a:",
    options: ["flexografía", "metalografía", "gigantografía"],
    correct: 2,
    explanation: "Las siglas VLF (Very Large Format) en las artes gráficas identifican los equipos de impresión de gran formato o gigantografía.",
    source: "Examen Oficial FNMT 2022 (Pregunta 62)"
  },
  {
    question: "La resistencia que ofrece un soporte a romperse cuando es sometido a una fuerza que actúa sobre el perpendicular a su superficie cuando está sujeto, se denomina:",
    options: ["resistencia al estallido", "resistencia al desgarro", "resistencia al impacto"],
    correct: 0,
    explanation: "La resistencia al estallido (mencionada como índice Mullen) mide la presión perpendicular soportada por la hoja antes de fracturarse.",
    source: "Examen Oficial FNMT 2022 (Pregunta 63)"
  },
  {
    question: "Atendiendo a los distintos acabados de la superficie de contacto de la cuchilla reguladora o doctor blade, señala cuál de las siguientes respuestas no es la correcta:",
    options: ["diamonds blade", "beveled blade", "lamella blade"],
    correct: 0,
    explanation: "Las tipologías comerciales estándar de bisel en racletas son Beveled y Lamella; 'Diamonds blade' no corresponde a este catálogo.",
    source: "Examen Oficial FNMT 2022 (Pregunta 64)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Cómo varía la opacidad en los soportes papeleros?",
    options: [
      "Aumenta al colorear el soporte, aumenta si al soporte papelero se le añaden aceites o ceras y disminuye con el refinado.",
      "Aumenta al aumentar el gramaje del soporte, disminuye si al soporte papelero se le añaden aceites o ceras y a igualdad de condiciones, los papeles estucados poseen menor opacidad que los no estucados.",
      "Aumenta al aumentar el gramaje del soporte, disminuye si al soporte papelero se le añaden aceites o ceras y a igualdad de condiciones, los papeles estucados poseen mayor opacidad que los no estucados."
    ],
    correct: 1,
    explanation: "La densidad y cargas en los papeles estucados reducen ligeramente la dispersión de luz haciéndolos menos opacos que un offset de igual gramaje.",
    source: "Examen Oficial FNMT 2022 (Pregunta 65)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Qué distintos métodos podemos utilizar para medir la humedad absoluta en un soporte papelero?",
    options: [
      "Mediante una estufa, por conductividad eléctrica, por absorción de ondas electromagnéticas, por destilación y por radiación infrarroja.",
      "Mediante una balanza electrónica, por conductividad eléctrica, por absorción de ondas electromagnéticas, por destilación y por radiación infrarroja.",
      "Mediante higrómetro de cabello o tipo espada, mediante una balanza electrónica, por conductividad eléctrica, por absorción de ondas electromagnéticas, por destilación y por radiación infrarroja."
    ],
    correct: 0,
    explanation: "Los 5 procedimientos físicos normalizados para obtener la humedad absoluta en ensayos de laboratorio.",
    source: "Examen Oficial FNMT 2022 (Pregunta 66)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Qué método podemos utilizar para medir la porosidad en un soporte papelero?",
    options: [
      "Medir el tiempo que tarda en pasar un volumen de aire de 100 cm³ a través de una superficie del soporte papelero de una pulgada cuadrada a una presión constante.",
      "Utilizar tinta hidrófoga que consiste en depositar una gota de esta tinta en una pesa y colocarla sobre el soporte papelero a distintos tiempos y eliminando la tinta que no ha penetrado en el soporte.",
      "Con un aparato de Bekk."
    ],
    correct: 0,
    explanation: "Definición del ensayo estándar Gurley para la cuantificación de la porosidad y permeabilidad al aire.",
    source: "Examen Oficial FNMT 2022 (Pregunta 67)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Cómo varían la dureza y la compresibilidad en un soporte papelero?",
    options: ["Aumentan conjuntamente.", "Disminuyen conjuntamente.", "Son factores inversos."],
    correct: 2,
    explanation: "Un papel más duro ofrece mayor resistencia a la deformación bajo carga, reduciendo su capacidad de compresión (relación inversa).",
    source: "Examen Oficial FNMT 2022 (Pregunta 68)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿De qué depende la estabilidad dimensional de los soportes papeleros?",
    options: [
      "Cuanto menor es la composición fibrosa, menor es la estabilidad dimensional.",
      "Del refinado de la fibra. A mayor refinación mayor inestabilidad.",
      "De la humedad relativa del ambiente. Cuanto menor diferencia de humedad exista con respecto a la que tenga el soporte papelero, más inestabilidad dimensional."
    ],
    correct: 1,
    explanation: "Un mayor refinado incrementa la superficie específica de las fibras y su capacidad de absorción hídrica, elevando la inestabilidad dimensional.",
    source: "Examen Oficial FNMT 2022 (Pregunta 69)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Cómo influye el sentido de la fibra en un soporte papelero?",
    options: [
      "Los soportes papeleros se rasgan y doblan con más facilidad en sentido de la fibra.",
      "La rigidez de los soportes papeleros es menor en sentido de la fibra.",
      "La tendencia a curvarse de los soportes papeleros es menor en contrafibra."
    ],
    correct: 0,
    explanation: "Al alinearse la estructura interna, la resistencia mecánica al plegado o al rasgado es significativamente menor en la dirección paralela a la fibra.",
    source: "Examen Oficial FNMT 2022 (Pregunta 70)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Cómo varía la resistencia al plegado en un papel?",
    options: ["Es menor al aumentar el refinado", "Es mayor al aumentar el porcentaje de cargas.", "Disminuye con el envejecimiento del soporte papelero."],
    correct: 2,
    explanation: "La degradación química y pérdida de plastificantes hídricos por envejecimiento vuelven el soporte quebradizo al doblez.",
    source: "Examen Oficial FNMT 2022 (Pregunta 71)"
  },
  {
    question: "Los distintos soportes papeleros se diferencian por sus características, que son:",
    options: [
      "Tipo de fibra empleada, superficie, naturaleza de la superficie, presentación, gramaje y uso.",
      "Tipo de fibra empleada, superficie, naturaleza de la superficie, tipo de impresión, gramaje y uso.",
      "Tipo de fibra empleada, superficie, naturaleza de la superficie, grosor, gramaje y uso."
    ],
    correct: 0,
    explanation: "Clasificación integral de especificaciones que definen la naturaleza de los soportes papeleros.",
    source: "Examen Oficial FNMT 2022 (Pregunta 72)"
  },
  {
    question: "Características generales de los papeles estucados:",
    options: [
      "Elevada estabilidad dimensional, alta variabilidad superficial.",
      "Elevada estabilidad dimensional, excelente uniformidad superficial.",
      "Elevada estabilidad dimensional, excelente uniformidad superficial, tienen pasta mecánica."
    ],
    correct: 1,
    explanation: "La capa mineral del estuco alisa los poros creando una cara uniforme idónea para impresiones de alta resolución.",
    source: "Examen Oficial FNMT 2022 (Pregunta 73)"
  },
  {
    question: "El papel celulosa...",
    options: [
      "Se trata de un papel que mantiene una alta resistencia aun después de estar empapado de agua. La resistencia se obtiene añadiendo una resina que forma enlaces con las fibras que hacen que su resistencia al agua sea elevada.",
      "Se elaboran a partir de pastas químicas o mecánicas o también de fibras secundarias.",
      "Está compuesto por pastas al bisulfito crudas o blanqueadas, pasta mecánica o fibras secundarias. Puede ser verjurado, satinado, calandrado..."
    ],
    correct: 2,
    explanation: "Definición técnica del papel celulosa según la bibliografía de Artes Gráficas.",
    source: "Examen Oficial FNMT 2022 (Pregunta 74)"
  },
  {
    question: "Algunas utilidades del papel crespado son:",
    options: ["Libros, enciclopedias, diccionarios.", "Papel higiénico, servilletas, pañuelos.", "Obras de lujo, cartas de prestigio."],
    correct: 1,
    explanation: "El gofrado/crespado aporta alta absorción y flexibilidad, destinándose a papeles sanitarios y tisú.",
    source: "Examen Oficial FNMT 2022 (Pregunta 75)"
  },
  {
    question: "El gramaje de las cartulinas, generalmente, está comprendido entre...",
    options: ["250 y 450 gr/m².", "50 y 600 gr/m².", "350 y 400 gr/m²."],
    correct: 0,
    explanation: "Comercialmente se clasifica como cartulina el rango de masa por unidad de superficie entre 250 y 450 g/m².",
    source: "Examen Oficial FNMT 2022 (Pregunta 76)"
  },
  {
    question: "Podemos encontrar diferentes tipos de cartón:",
    options: [
      "Multicapa o dúplex, blanco sólido, aglomerado y verjurados.",
      "Multicapa o dúplex, blanco sólido, de paja, ondulado y aglomerado.",
      "Multicapa o dúplex, blanco sólido, aglomerado, ondulado y nido de abeja."
    ],
    correct: 1,
    explanation: "Tipologías industriales reconocidas para la fabricación de cartón y empaques.",
    source: "Examen Oficial FNMT 2022 (Pregunta 77)"
  },
  {
    question: "¿Qué compuesto se utiliza como patrón de blancura en los soportes papeleros y se le asigna un valor de un 100% de blancura?",
    options: ["Dióxido de titanio", "Óxido de magnesio.", "Ácido clorhídrico."],
    correct: 1,
    explanation: "El óxido de magnesio (MgO) en estado puro se toma como estándar fotométrico absoluto de blancura (100%).",
    source: "Examen Oficial FNMT 2022 (Pregunta 78)"
  },
  {
    question: "¿Cuál es el orden correcto de los siguientes productos, si los ordenamos de mayor a menor blancura?",
    options: [
      "Pasta semiquímica, pasta sin blanquear al bisulfito, papel estucado dos caras, papel revista, papel periódico.",
      "Papel periódico, papel revista, pasta sin blanquear al bisulfito, papel estucado dos caras, pasta semiquímica.",
      "Papel estucado dos caras, pasta semiquímica, papel revista, pasta sin blanquear al bisulfito, papel periódico."
    ],
    correct: 2,
    explanation: "Secuencia decreciente según el grado de reflectancia ISO de blancura de los materiales papeleros.",
    source: "Examen Oficial FNMT 2022 (Pregunta 79)"
  },
  {
    question: "Los barnices grasos están compuestos al menos por el...",
    options: ["75% de aceites", "75% de resinas", "25% de resinas y 50% de aceites"],
    correct: 0,
    explanation: "Formulación tradicional de barnices grasos para tipografía/offset con alto contenido en aceites ligantes.",
    source: "Examen Oficial FNMT 2022 (Pregunta 80)"
  },
  {
    question: "Halla el área total de un cono de 9 cm de altura y una base de 4 cm de radio.",
    options: ["173.45 cm².", "137,95 cm².", "173,96 cm²"],
    correct: 2,
    explanation: "g = √(9² + 4²) = √97 ≈ 9,85 cm. Á. Base = π×r² ≈ 50,27 cm². Á. Lateral = π×r×g ≈ 123,77 cm². Área total ≈ 173,96 cm².",
    source: "Examen Oficial FNMT 2022 (Pregunta 81)"
  },
  {
    question: "Un joyero quiere fundir un lingote de 3 kg de oro de ley 0,8 con otro de 2 Kg de oro, cuya ley es de 0,9. ¿Cuál es la ley del lingote resultante?",
    options: ["0,85", "0,86", "0,84"],
    correct: 2,
    explanation: "Ley ponderada = (3×0,8 + 2×0,9) / (3 + 2) = (2,4 + 1,8) / 5 = 4,2 / 5 = 0,84.",
    source: "Examen Oficial FNMT 2022 (Pregunta 82)"
  },
  {
    question: "El producto de un número natural aumentado en 5 unidades, por el mismo número disminuido en 2 unidades, es igual a 12 veces dicho número. Halla el valor del número.",
    options: ["12", "10", "11"],
    correct: 1,
    explanation: "(x + 5)(x - 2) = 12x  ⇒  x² + 3x - 10 = 12x  ⇒  x² - 9x - 10 = 0  ⇒  (x - 10)(x + 1) = 0. Al ser natural, x = 10.",
    source: "Examen Oficial FNMT 2022 (Pregunta 83)"
  },
  {
    question: "Cuál es el área del pentágono regular de 8 cm de lado y 6 cm de radio del margen",
    options: ["90 cm²", "89,4 cm²", "85,9 cm²"],
    correct: 1,
    explanation: "Apotema a = √(6² - 4²) = √20 ≈ 4,472 cm. Área = (Perímetro × apotema)/2 = (40 × 4,472)/2 ≈ 89,4 cm².",
    source: "Examen Oficial FNMT 2022 (Pregunta 84)"
  },
  {
    question: "En un concesionario de coches hay modelos de varios colores. Los rojos suponen 1/6 del total, los azules 2/9 del total y los blancos 4/15 del total. Si hay 40 coches azules, ¿Cuántos hay en total?",
    options: ["Hay 170 coches en total.", "Hay 180 coches en total.", "Hay 160 coches en total."],
    correct: 1,
    explanation: "2/9 del Total = 40  ⇒  Total = (40 × 9) / 2 = 180 vehículos.",
    source: "Examen Oficial FNMT 2022 (Pregunta 85)"
  },
  {
    question: "Hace dos años, la tortuga de Estela tenía cuatro veces la edad de su dueña y dentro de cuatro años Estela tendrá la tercera parte de la edad de su tortuga. ¿Cuáles son las edades actuales de Estela y su tortuga?",
    options: ["14 y 50.", "10 y 40.", "15 y 55."],
    correct: 0,
    explanation: "T - 2 = 4(E - 2) y 3(E + 4) = T + 4. Resolviendo el sistema de ecuaciones resulta E = 14 años y T = 50 años.",
    source: "Examen Oficial FNMT 2022 (Pregunta 86)"
  },
  {
    question: "Si en un triángulo rectángulo trazamos la altura sobre la hipotenusa, se cumple: h² = m × n, donde h es la altura ¿y m y n son?",
    options: ["Los catetos.", "Los dos segmentos en que queda dividida la hipotenusa por la altura", "Las dos partes en que queda dividida la hipotenusa por la altura."],
    correct: 1,
    explanation: "Según el teorema de la altura, m y n representan las proyecciones ortogonales de los catetos sobre la hipotenusa.",
    source: "Examen Oficial FNMT 2022 (Pregunta 87)"
  },
  {
    question: "Un magazine dominical tiene más de 8 páginas y menos de 20 páginas. Si el número de páginas del magazine es múltiplo de 3 y 5, ¿Cuántas paginas tiene?",
    options: ["20", "15", "10"],
    correct: 1,
    explanation: "El único múltiplo común de 3 y 5 (múltiplo de 15) comprendido estrictamente entre 8 y 20 es el 15.",
    source: "Examen Oficial FNMT 2022 (Pregunta 88)"
  },
  {
    question: "La distancia que se recorre en una maratón es de 42,195 km. Andrea ha recorrido una maratón en 3,45 h. ¿Cuál ha sido su velocidad media?",
    options: ["11,23 km/h.", "12,33 km/h.", "12,23 km/h."],
    correct: 2,
    explanation: "Velocidad media = Distancia / Tiempo = 42,195 km / 3,45 h = 12,23 km/h.",
    source: "Examen Oficial FNMT 2022 (Pregunta 89)"
  },
  {
    question: "El área de una superficie esférica de radio r es:",
    options: ["A = 4 × π × r²", "A = (4 × π × r³) / 3", "A = 4 × π × r⁴"],
    correct: 0,
    explanation: "Fórmula geométrica estándar para el cálculo de la superficie exterior de una esfera.",
    source: "Examen Oficial FNMT 2022 (Pregunta 90)"
  },
  {
    question: "¿Cuál de las siguientes funciones no está entre las que tiene la comisión de seguimiento del Plan de Igualdad de Oportunidades de la FNMT?",
    options: [
      "Elaboración de un informe anual donde se refleje el avance respecto a los objetivos de igualdad fijados.",
      "Conocimiento y resolución de conflictos derivados de la aplicación e interpretación del Plan.",
      "Puesta en marcha de las medidas recogidas en los protocolos de actuación de dicho Plan."
    ],
    correct: 2,
    explanation: "La ejecución directa de las medidas corresponde a los órganos ejecutivos y de gestión, no a la comisión supervisora.",
    source: "Examen Oficial FNMT 2022 (Pregunta 91)"
  },
  {
    question: "El número de Delegados de Prevención que forman parte del Comité de Seguridad y Salud en el Centro de trabajo de Madrid es de:",
    options: ["4 miembros.", "6 miembros.", "8 miembros."],
    correct: 1,
    explanation: "De acuerdo a la escala por plantilla del centro de trabajo de Madrid de la FNMT, la representación es de 6 delegados.",
    source: "Examen Oficial FNMT 2022 (Pregunta 92)"
  },
  {
    question: "Los reconocimientos médicos realizados a los trabajadores de forma periódica para vigilar su estado de salud en función de los riesgos de su puesto de trabajo son:",
    options: [
      "Obligatorios.",
      "Voluntarios, salvo algunos casos previo informe de los representantes de los trabajadores en materia de prevención.",
      "Depende del tipo de contrato."
    ],
    correct: 1,
    explanation: "La LPRL establece el carácter voluntario de la vigilancia de la salud, salvo excepciones legales específicas.",
    source: "Examen Oficial FNMT 2022 (Pregunta 93)"
  },
  {
    question: "¿Qué organismo es el encargado de vigilar el cumplimiento de la normativa sobre prevención de riesgos laborales?",
    options: ["El Ministerio de Industria.", "La mutua de accidentes de trabajo", "La inspección de trabajo."],
    correct: 2,
    explanation: "Corresponde a la Inspección de Trabajo y Seguridad Social fiscalizar el cumplimiento de las normas de prevención.",
    source: "Examen Oficial FNMT 2022 (Pregunta 94)"
  },
  {
    question: "El trabajador que estime que desempeña funciones de una categoría superior a aquella en la que esté encuadrado, sin ocupar vacante de superior categoría y sin que le abonen las diferencias salariales, podrá reclamar por escrito ante la Comisión Paritaria el reconocimiento de dichas funciones en un plazo máximo de:",
    options: ["20 semanas.", "Un mes.", "18 semanas."],
    correct: 1,
    explanation: "Plazo máximo de tramitación fijado normativamente en 1 mes para iniciar la reclamación ante la Comisión Paritaria.",
    source: "Examen Oficial FNMT 2022 (Pregunta 95)"
  },
  {
    question: "Entre las funciones del Comité de Seguridad y Salud estará:",
    options: [
      "Debatir la conveniencia de los equipos de protección individual de cada puesto de trabajo.",
      "Conocer y analizar los daños producidos en la salud o en la integridad física de los empleados para valorar sus causas y proponer las medidas oportunas.",
      "Participar en la elaboración de los programas de prevención de riesgos en la empresa."
    ],
    correct: 1,
    explanation: "Atribución prioritaria del Comité de Seguridad para evaluar la siniestralidad laboral e implantar medidas correctoras.",
    source: "Examen Oficial FNMT 2022 (Pregunta 96)"
  },
  {
    question: "¿Qué son los medios integrales de protección?",
    options: [
      "Aquellos equipos de protección personal que protegen frente a riesgos que no actúan sobre partes concretas del cuerpo humano.",
      "Los que protegen al trabajador frente a ciertas operaciones con riesgo de caída a distinto nivel.",
      "Son los equipos de protección individual que protegen al trabajador frente a ciertos riesgos del puesto de trabajo."
    ],
    correct: 0,
    explanation: "Definición técnica de EPIs integrales cuya cobertura es global y no focalizada en una extremidad u órgano específico.",
    source: "Examen Oficial FNMT 2022 (Pregunta 97)"
  },
  {
    question: "En la F.N.M.T. ¿Quién facilita a los trabajadores lo equipos de protección individual?",
    options: ["Los técnicos de prevención.", "El servicio médico.", "El jefe de unidad del trabajador."],
    correct: 2,
    explanation: "Es responsabilidad jerárquica del Jefe de Unidad la entrega y dotación de EPIs a la plantilla bajo su mando.",
    source: "Examen Oficial FNMT 2022 (Pregunta 98)"
  },
  {
    question: "Según el art. 6 del XI Convenio Colectivo de FNMT-RCM, el tiempo máximo de un periodo de experimentación de nuevas normas de organización y producción será de:",
    options: ["Diez semanas.", "Quince semanas.", "Dos meses."],
    correct: 0,
    explanation: "El art. 6 del Convenio fije en 10 semanas el límite temporal máximo para pruebas de nuevas pautas organizativas.",
    source: "Examen Oficial FNMT 2022 (Pregunta 99)"
  },
  {
    question: "Según el art. 13 del XI Convenio Colectivo de FNMT-RCM, el periodo de prueba para el personal operario será de:",
    options: ["Un mes.", "Dos meses.", "Quince días."],
    correct: 2,
    explanation: "El periodo de prueba fijado expresamente en el Convenio Colectivo para la categoría de operarios es de 15 días.",
    source: "Examen Oficial FNMT 2022 (Pregunta 100)"
  }
];





// --- EXAMEN 2: FNMT 2023 ---
/* ========================================================
   ESPACIO RESERVADO - EXAMEN FNMT 2023 
   (Pega aquí las preguntas restantes cuando las tengas)
   ======================================================== */
// --- EXAMEN 2: FNMT 2023 (100 PREGUNTAS COMPLETAS) ---
const examFNMT2023 = [
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Cómo afecta el gramaje del papel al proceso de igualación?",
    options: [
      "Cuanto mayor sea el gramaje más difícil será de igualar",
      "Cuanto menor sea el gramaje más difícil será de igualar",
      "El gramaje no afecta al proceso de igualación"
    ],
    correct: 1,
    explanation: "A menor gramaje, el papel pierde rigidez estructural, volviéndose más flexible e inestable al intentar igualarlo a taco.",
    source: "Examen Oficial FNMT 2023 (Pregunta 1)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Cómo se obtienen las medidas de los diferentes formatos DIN A?",
    options: [
      "El formato de referencia de la serie es el AO, cuya superficie mide 1 Lm2. La relación entre las longitudes de los lados vale uno frente a la raíz cuadrada de 2 (v2), redondeando a milímetros enteros. Cada formato de una serie resulta de duplicar el lado menor del formato inmediatamente inferior, o de dividir por la mitad el lado mayor del formato inmediatamente superior.",
      "El formato de referencia de la serie es el A1, cuya superficie mide 1 m2. La relación entre las longitudes de los lados vale uno frente a la raíz cuadrada de (V2), redondeando a milímetros enteros. Cada formato de una serie resulta de duplicar el lado menor del formato inmediatamente inferior, o de dividir por la mitad el lado mayor del formato inmediatamente superior.",
      "El formato de referencia de la serie es el A0, cuya superficie mide 1 m2. La relación entre las longitudes de los lados vale uno frente a la raíz cuadrada de (V2), redondeando a milímetros enteros. Cada formato de una serie resulta de duplicar el lado mayor del formato inmediatamente inferior, o de dividir por la mitad el lado mayor del formato inmediatamente superior."
    ],
    correct: 2,
    explanation: "El formato base A0 equivale a 1 m² con proporción 1:√2, derivando los siguientes formatos al dividir por la mitad su lado mayor.",
    source: "Examen Oficial FNMT 2023 (Pregunta 2)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Qué desviación se tolera para un producto de 250 mm?",
    options: [
      "± 1,5 mm",
      "± 2 mm",
      "± 3 mm"
    ],
    correct: 0,
    explanation: "Para medidas de hasta 600 mm, las normas DIN/ISO establecen una tolerancia dimensional de ± 1,5 mm.",
    source: "Examen Oficial FNMT 2023 (Pregunta 3)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Qué son los tacones de máquina de impresión?",
    options: [
      "Generalmente tienen forma de cruz, sirven para ajustar los diferentes colores que componen el trabajo así como anverso con reverso, están siempre fuera del trabajo, en alguna zona en blanco del pliego.",
      "Nos indicaran cual es la entrada y el costado del pliego en la máquina de impresión, estos deberán de coincidir en la guillotina con la escuadra de esta para dar los primeros cortes.",
      "Delimitan las medidas finales del efecto y ayudan al guillotinero a cortar con exactitud y dentro de las tolerancias establecidas tanto de medidas como de centrado de la estampación con respecto al corte."
    ],
    correct: 1,
    explanation: "Los tacones señalan las guías de entrada y costado usadas en la máquina de imprimir para alinearlas con la escuadra de la guillotina.",
    source: "Examen Oficial FNMT 2023 (Pregunta 4)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Qué es una nota de numeración impresa de resta?",
    options: [
      "El último pliego que sale de la rotativa tiene la numeración más alta.",
      "El primer pliego que sale de la rotativa tiene la numeración más baja.",
      "El último pliego que sale de la rotativa tiene la numeración más baja."
    ],
    correct: 2,
    explanation: "En la numeración en resta, los pliegos se imprimen en orden descendente, por lo que el último pliego lleva el número menor.",
    source: "Examen Oficial FNMT 2023 (Pregunta 5)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, y teniendo en cuenta que en la imagen se representa una nota de numeración de 40 resmas, repartidas en ocho cuadrantes y numeradas de arriba abajo y de izquierda a derecha, impreso en resta, ¿qué numeración corresponde al cuadrante marcado con una X?",
    options: [
      "30.000",
      "50.000",
      "30.001"
    ],
    correct: 2,
    explanation: "40 resmas equivalen a 20.000 pliegos por pila. Al distribuirse en resta de 1 a 20.000 en el primer bloque, el siguiente cuadrante inicia en 30.001.",
    source: "Examen Oficial FNMT 2023 (Pregunta 6)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Qué sucede si se interrumpe la barrera de luz de una guillotina?",
    options: [
      "La cuchilla se para inmediatamente pero el pisón no, suena una señal acústica y aparece una indicación de estado en el monitor: CORTE INTERRUMPIDO BARRERA DE LUZ INTERRUMPIDA.",
      "El pisón y la cuchilla se paran inmediatamente, suena una señal acústica y aparece una indicación de estado en el monitor: IMPOSIBILIDAD DE CORTE BARRERA DE LUZ INTERRUMPIDA.",
      "El pisón y la cuchilla se paran inmediatamente, suena una señal acústica y aparece una indicación de estado en el monitor: CORTE INTERRUMPIDO BARRERA DE LUZ INTERRUMPIDA."
    ],
    correct: 2,
    explanation: "Por motivos de seguridad, la interrupción fotoeléctrica detiene en acto tanto la cuchilla como el pisón, generando la alarma acústica y el aviso en pantalla.",
    source: "Examen Oficial FNMT 2023 (Pregunta 7)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, habiendo interrumpido la barrera de luz en mitad de un corte, ¿Cómo se continúa el corte?",
    options: [
      "Soltando las teclas de corte y accionándolas otra vez.",
      "Pulsando dos veces seguidas la tecla de corte derecha.",
      "Continuar pulsando las teclas de corte tres segundos después de la interrupción."
    ],
    correct: 0,
    explanation: "Para reanudar la marcha tras un paro de seguridad, es necesario soltar los mandos bimanuales y volver a accionarlos simultáneamente.",
    source: "Examen Oficial FNMT 2023 (Pregunta 8)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Qué utilidad tiene la chapa de protección?",
    options: [
      "Facilita el movimiento del papel durante los cambios de posición de la escuadra.",
      "Impide que el dentado del pisón se marque sobre el género de corte sensible.",
      "Ayuda a que el dentado del pisón se marque sobre el género de corte sensible."
    ],
    correct: 1,
    explanation: "La chapa de cubierta o suela del pisón distribuye uniformemente la presión y evita marcas de las ranuras del pisón en papeles delicados.",
    source: "Examen Oficial FNMT 2023 (Pregunta 9)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Cómo se conecta la alimentación de aire para la mesa completa?",
    options: [
      "Accionando la tecla 16 una vez.",
      "Accionando la tecla 16 durante cinco segundos.",
      "Accionando la tecla 16 dos veces."
    ],
    correct: 0,
    explanation: "Una pulsación sobre la tecla 16 activa el soplador para generar el colchón de aire en la mesa completa.",
    source: "Examen Oficial FNMT 2023 (Pregunta 10)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, con la escuadra automática conectada ¿Cuándo se conecta automáticamente el suministro de aire?",
    options: [
      "Con cada retroceso de la escuadra.",
      "Cada vez que la escuadra avanza.",
      "Al finalizar cada corte, sin tener en cuenta si la escuadra avanza o retrocede."
    ],
    correct: 0,
    explanation: "El sistema de aire se habilita automáticamente durante la marcha atrás de la escuadra para disminuir el rozamiento de la pila.",
    source: "Examen Oficial FNMT 2023 (Pregunta 11)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿A qué función corresponde el siguiente icono?: (Expulsor programable)",
    options: [
      "Expulsor programable.",
      "Medida de carga.",
      "Escuadra inclinable."
    ],
    correct: 0,
    explanation: "Identifica la función automática del expulsor programable en el panel de control POLAR.",
    source: "Examen Oficial FNMT 2023 (Pregunta 12)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿A qué función corresponde el siguiente icono?:",
    options: [
      "Cuchilla automático activo.",
      "Cuchilla automático preparado.",
      "Cuchilla automática listo."
    ],
    correct: 0,
    explanation: "El pictograma representa el estado activo del modo de corte automático.",
    source: "Examen Oficial FNMT 2023 (Pregunta 13)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Qué modelos de guillotina disponen de una pantalla táctil?",
    options: [
      "Los modelos XT",
      "Los modelos X",
      "Tanto los modelos X como los XT disponen de pantalla táctil."
    ],
    correct: 0,
    explanation: "La pantalla táctil en color es una característica propia de la serie POLAR XT.",
    source: "Examen Oficial FNMT 2023 (Pregunta 14)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Cómo se ajusta automáticamente la escuadra mediante introducción de medida con teclado numérico en el modelo X?",
    options: [
      "Se introduce la medida en el teclado táctil y se acciona brevemente la tecla = dos veces.",
      "Se introduce la medida en el teclado y se acciona brevemente la tecla = dos veces.",
      "Se introduce la medida en el teclado y se pulsa brevemente la tecla = dos veces o se acciona la tecla táctil liberar función."
    ],
    correct: 1,
    explanation: "En la variante POLAR X, el comando de desplazamiento motorizado se confirma pulsando dos veces la tecla '='.",
    source: "Examen Oficial FNMT 2023 (Pregunta 15)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Cómo se corrige una medida errónea después del almacenamiento en memoria en el modelo XT?",
    options: [
      "Se acciona la tecla \"corregir\", se introduce la medida correcta, se acciona la tecla \"enter\" o la tecla táctil \"liberar función\".",
      "Se acciona la tecla táctil \"procesar Conect.\" + \"Insertar\", se acciona la tecla \"enter\" o la tecla táctil \"liberar función\".",
      "Se acciona la tecla táctil \"procesar Conect.\" + \"Corregir\", se acciona la tecla \"enter\" o la tecla táctil \"liberar función\"."
    ],
    correct: 2,
    explanation: "Secuencia formal para la reescritura de parámetros en la memoria de programas del panel XT.",
    source: "Examen Oficial FNMT 2023 (Pregunta 16)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Cómo se inserta una medida en un programa existente en el modelo X?",
    options: [
      "Se extrae el programa, se selecciona el número de paso al cual debe aplicarse la nueva medida, se acciona la tecla de \"insertar\", se introduce la medida y se acciona la tecla \"enter\".",
      "Se extrae el programa, se selecciona el número de paso al cual debe aplicarse la nueva medida, se acciona la tecla de \"insertar\" o se accionan las teclas táctiles \"procesar conect.\" + \"insertar\", se introduce la medida y se acciona la tecla \"enter\" o accionar la tecla táctil \"liberar función\".",
      "Se extrae el programa, se selecciona el número de paso al cual debe aplicarse la nueva medida, se acciona la tecla de \"insertar\", se introduce la medida y se acciona la tecla \"enter\"."
    ],
    correct: 0,
    explanation: "Procedimiento estándar mediante pulsación de la tecla de inserción en el modelo X.",
    source: "Examen Oficial FNMT 2023 (Pregunta 17)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Cuándo se recomienda cortar desde el centro?",
    options: [
      "Cuando el papel no impreso no es claramente angular.",
      "Cuando el papel no impreso está dañado exteriormente o no se adecúa obviamente al proceso de impresión.",
      "Cuando por las condiciones de almacenamiento el borde del pliego está más seco que el centro."
    ],
    correct: 2,
    explanation: "Cortar desde el centro nivela las deformaciones por higroestabilidad (emplatado) cuando los bordes están más secos que el núcleo.",
    source: "Examen Oficial FNMT 2023 (Pregunta 18)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Qué puede realizar el operador de la guillotina cuando hay polvos entre los pliegos?",
    options: [
      "Disminuir la presión del pisón al cortar.",
      "Realizar un preprensado sin corte.",
      "Accionar el aire en la mesa completa."
    ],
    correct: 1,
    explanation: "Un pre-prensado asienta la masa de papel y evacua el volumen de aire retenido entre las partículas de polvo antimaculante.",
    source: "Examen Oficial FNMT 2023 (Pregunta 19)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Para qué sirve una medida de carga?",
    options: [
      "Facilita girar el papel acercándolo al operador mediante el movimiento de la escuadra.",
      "Para igualar cómodamente el papel. En esta posición de la escuadra no se puede realizar ningún corte.",
      "Para igualar cómodamente el papel. En esta posición de la escuadra sólo se puede cortar cuando la guillotina está en automático."
    ],
    correct: 1,
    explanation: "La cota de carga posiciona la escuadra en un punto óptimo de igualado bloqueando por seguridad el ciclo de bajada de cuchilla.",
    source: "Examen Oficial FNMT 2023 (Pregunta 20)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Se pueden modificar los programas que tienen protección de programa?",
    options: [
      "No se puede modificar ningún parámetro de los programas.",
      "No se pueden modificar los parámetros del programa pero se pueden seguir utilizando las funciones de corrección.",
      "No se pueden modificar los parámetros del programa pero se pueden corregir las medidas de pasos que no llevan corte, como medidas de carga y expulsores programables."
    ],
    correct: 2,
    explanation: "La protección de programa bloquea las cotas de corte principales pero permite ajustar pasos auxiliares sin corte.",
    source: "Examen Oficial FNMT 2023 (Pregunta 21)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿En qué situaciones es muy útil el Eltrotact?",
    options: [
      "Cuando se corta un pliego que presenta medidas de productos que se repiten en una dirección.",
      "Cuando se corta un producto en el que se han utilizado polvos antimaculantes.",
      "Cuando al cortar un producto se genera mucho recorte."
    ],
    correct: 0,
    explanation: "Eltrotact automatiza el avance repetitivo de la escuadra para tiras con tiradas de corte de ancho uniforme.",
    source: "Examen Oficial FNMT 2023 (Pregunta 22)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Qué función tiene el Fixomat?",
    options: [
      "Modifica la posición vertical de la escuadra para adaptarse a las diferentes situaciones de corte.",
      "Sirve para la corrección por motor del ángulo de la escuadra, lo que permite torcer la línea de corte.",
      "Permite la colocación de los puntos en la escuadra para compensar el retardo del papel."
    ],
    correct: 1,
    explanation: "El dispositivo Fixomat inclina motorizadamente la escuadra para corregir desvíos de escuadra e impresión fuera de paralelo.",
    source: "Examen Oficial FNMT 2023 (Pregunta 23)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, habiéndose encontrado como defectuosos los siguientes efectos, del 7Y50026 al 7Y50027 ¿Cuál de las siguientes opciones es correcta?:",
    options: [
      "NÚMERO DE CAMBIOS: 2 | SERIE: 7Y | DEL NÚMERO: 50026 | AL NÚMERO: 50027",
      "NÚMERO DE CAMBIOS: 1 | SERIE: 7Y | DEL NÚMERO: 50026 | AL NÚMERO: 50027",
      "NÚMERO DE CAMBIOS: 2 | SERIE: 7Y | DEL NÚMERO: 50027 | AL NÚMERO: 50026"
    ],
    correct: 0,
    explanation: "Del 50026 al 50027 inclusive comprende exactamente 2 unidades/efectos anulados.",
    source: "Examen Oficial FNMT 2023 (Pregunta 24)"
  },
  {
    question: "Según el Curso oficial 1ª Guillotinero, ¿Cuándo se puede efectuar la corrección de producción?",
    options: [
      "Cuando la guillotina está en manual.",
      "Cuando la guillotina está en automático.",
      "Cuando se está utilizando la función \"eltrotact\"."
    ],
    correct: 1,
    explanation: "El ajuste de corrección global sobre la marcha requiere que el programa se esté ejecutando en modo automático.",
    source: "Examen Oficial FNMT 2023 (Pregunta 25)"
  },
  {
    question: "Where/¿Dónde existe mayor Resistencia al rasgado en el papel?",
    options: [
      "En contrafibra.",
      "A favor de fibra.",
      "En el uso de fibras largas en su fabricación."
    ],
    correct: 0,
    explanation: "Rasgar a contrafibra exige romper transversalmente las fibras papeleras, ofreciendo mayor resistencia que hacerlo en paralelo a ellas.",
    source: "Examen Oficial FNMT 2023 (Pregunta 26)"
  },
  {
    question: "¿De qué depende la Resistencia al rasgado en el papel?",
    options: [
      "Longitud de las fibras, distancia entre las fibras, refinado: mayor resistencia a menor grado de refinado, % de cargas: disminuye la resistencia, gramaje y/o espesor y H.R.: al aumentarla, aumenta la resistencia.",
      "Longitud de las fibras, adherencia entre las fibras, refinado: menor resistencia a mayor grado de refinado, % de cargas: disminuye la resistencia, gramaje y/o espesor y H.R.: al aumentarla, aumenta la resistencia.",
      "Longitud de las fibras, adherencia entre las fibras, refinado: menor resistencia a mayor grado de refinado, % de cargas: aumenta la resistencia, gramaje y/o espesor y H.R.: al disminuir, aumenta la resistencia."
    ],
    correct: 1,
    explanation: "Factores físicos que influyen en el rasgado: mayor refinado entrelaza más las fibras pero acorta su longitud, reduciendo esta resistencia.",
    source: "Examen Oficial FNMT 2023 (Pregunta 27)"
  },
  {
    question: "La resistencia al arrancado del papel depende de:",
    options: [
      "Tiro de la tinta, velocidad de impresión, grado de calandrado, longitud de las fibras, % de lignina, refinado.",
      "Tiro de la tinta, velocidad de impresión, grado de encolado, longitud de las fibras, % cargas, calandrado.",
      "Tiro de la tinta, velocidad de impresión, grado de encolado, longitud de las fibras, % cargas, refinado."
    ],
    correct: 2,
    explanation: "Relación de variables operativas de la tinta e internas del soporte (encolado, refinado y cargas) que evitan el arrancado superficial.",
    source: "Examen Oficial FNMT 2023 (Pregunta 28)"
  },
  {
    question: "¿Cuáles son los efectos en el papel de la Resistencia al arrancado?",
    options: [
      "Picoteado, repelado y repintado",
      "Picoteado, repelado y arrancado.",
      "Porosidad, repelado y arrancado."
    ],
    correct: 1,
    explanation: "Manifestaciones físicas de un papel con insuficiente cohesión superficial frente al tiro de la tinta.",
    source: "Examen Oficial FNMT 2023 (Pregunta 29)"
  },
  {
    question: "¿Qué es la Resistencia al plegado del papel?",
    options: [
      "Es el número de plegados dobles que puede soportar un papel antes de su rotura (papel moneda, por ejemplo).",
      "Es el número de plegados simples que puede soportar un papel antes de su rotura (papel moneda, por ejemplo).",
      "Es el número de plegados a contrafibra que puede soportar un papel antes de su rotura (papel moneda, por ejemplo)."
    ],
    correct: 0,
    explanation: "Cuantificación técnica (ensayo Schopper/MIT) basada en el número de dobles pliegues consecutivos antes de la fractura del soporte.",
    source: "Examen Oficial FNMT 2023 (Pregunta 30)"
  },
  {
    question: "La Resistencia al plegado del papel es mayor:",
    options: [
      "En contrafibra, al aumentar el % de cargas y con el satinado.",
      "En contrafibra, al aumentar el refinado y con el satinado.",
      "En contrafibra, al aumentar el refinado y con el envejecimiento del papel."
    ],
    correct: 1,
    explanation: "La flexibilidad transversal a las fibras sumada a un refinado óptimo y satinado incrementa el número de dobles pliegues soportados.",
    source: "Examen Oficial FNMT 2023 (Pregunta 31)"
  },
  {
    question: "¿En qué papeles es muy importante la Resistencia a la abrasión?",
    options: [
      "En el papel moneda y estucado.",
      "En el papel moneda y de embalar.",
      "En el papel moneda y offset."
    ],
    correct: 1,
    explanation: "Tanto los billetes como los empaques sufren una elevada fricción durante su ciclo de manipulación y transporte.",
    source: "Examen Oficial FNMT 2023 (Pregunta 32)"
  },
  {
    question: "¿Qué es la Resistencia al alargamiento del papel?",
    options: [
      "Es la resistencia que presenta un soporte papelero antes de que se inicie su repelado o su reventamiento cuando se encuentra sometido a un esfuerzo.",
      "Es la resistencia que presenta un soporte papelero antes de que se inicie su rasgado o su alargamiento cuando se encuentra sometido a un esfuerzo.",
      "Es la resistencia que presenta un soporte papelero antes de que se inicie su rasgado o su reventamiento cuando se encuentra sometido a un esfuerzo."
    ],
    correct: 2,
    explanation: "Capacidad de deformación elástica o estiramiento de la hoja antes de sufrir una rotura por tracción o reventamiento.",
    source: "Examen Oficial FNMT 2023 (Pregunta 33)"
  },
  {
    question: "La Resistencia al alargamiento del papel será mayor:",
    options: [
      "En contrafibra porque hay mayor elasticidad de los enlaces entre las fibras y aumenta al aumentar la HR.",
      "A favor de fibra porque hay mayor elasticidad de los enlaces entre las fibras y aumenta al aumentar la HR.",
      "En contrafibra porque hay mayor elasticidad de los enlaces entre las fibras y aumenta al aumentar la HT."
    ],
    correct: 0,
    explanation: "El sentido contrafibra permite mayor cedimiento de las uniones interfibrilares al traccionar, incrementándose con la humedad relativa.",
    source: "Examen Oficial FNMT 2023 (Pregunta 34)"
  },
  {
    question: "¿Qué es la Resistencia a la luz o envejecimiento del papel?",
    options: [
      "Variación de la tonalidad del papel hacia un tono más cálido o amarilleamiento del mismo.",
      "Variación de la tonalidad del papel hacia un tono más pálido o azulado del mismo.",
      "Variación de la tonalidad del papel hacia un tono más pálido o amarilleamiento del mismo."
    ],
    correct: 2,
    explanation: "Pérdida del grado de blancura e incremento de amarilleamiento por degradación fotoquímica de la lignina.",
    source: "Examen Oficial FNMT 2023 (Pregunta 35)"
  },
  {
    question: "¿Qué es la Rigidez del papel?",
    options: [
      "Es la capacidad de un soporte papelero a soportar una fuerza que tiende a doblarlo.",
      "Es la capacidad de un soporte papelero a soportar una fuerza que tiende a curvarlo.",
      "Es la capacidad de un soporte papelero a soportar una fuerza que tiende a enderezarlo."
    ],
    correct: 1,
    explanation: "Resistencia mecánica a la flexión frente a momentos flectores que intentan deformar la superficie del pliego.",
    source: "Examen Oficial FNMT 2023 (Pregunta 36)"
  },
  {
    question: "¿De qué depende la rigidez del papel?",
    options: [
      "Espesor, Gramaje, Sentido de fibra, Refinado: la aumenta, Encolado interno: la aumenta, HR: al aumentar disminuye la rigidez, Contenido de agua, Longitud de fibra: la aumenta, % cargas: disminuye la rigidez.",
      "Espesor, Gramaje, Sentido de fibra, Refinado: la disminuye, Encolado interno: la disminuye, HR: al aumentar disminuye la rigidez, Contenido de agua, Longitud de fibra: la aumenta, % cargas: disminuye la rigidez.",
      "Espesor, Gramaje, Sentido de fibra, Refinado: la aumenta, Encolado interno: la disminuye, HR: al disminuir aumenta la rigidez, Contenido de agua, Longitud de fibra: la aumenta, % cargas: disminuye la rigidez."
    ],
    correct: 0,
    explanation: "La masa, el grosor y el entramado fibroso incrementan la rigidez, mientras que la humedad y las cargas minerales la reducen.",
    source: "Examen Oficial FNMT 2023 (Pregunta 37)"
  },
  {
    question: "¿De qué depende la resistencia al agua del papel?",
    options: [
      "Cantidad de agua presente, humedad a la que se encuentra almacenado, grado de encolado superficial, grado de deterioro del soporte papelero.",
      "Cantidad de agua presente, temperatura a la que se encuentra, grado de estucado superficial, grado de deterioro del soporte papelero.",
      "Cantidad de agua presente, temperatura a la que se encuentra, grado de encolado superficial, grado de deterioro del soporte papelero."
    ],
    correct: 2,
    explanation: "Factores determinantes en el comportamiento hidrófobo del soporte frente al agua de mojado o humedad ambiental.",
    source: "Examen Oficial FNMT 2023 (Pregunta 38)"
  },
  {
    question: "Si el contenido de agua en el papel es bajo, se empiezan a producir:",
    options: [
      "Alteraciones tanto en los elementos físicos como en las fibras.",
      "Alteraciones tanto en los elementos químicos como en las fibras.",
      "Alteraciones tanto en los elementos químicos como en las moléculas que lo forman."
    ],
    correct: 0,
    explanation: "El exceso de sequedad genera fragilidad, cargas electrostáticas y deformaciones físicas en el pliego.",
    source: "Examen Oficial FNMT 2023 (Pregunta 39)"
  },
  {
    question: "Si elevamos la temperatura (130-150°C) el soporte papelero presentará:",
    options: [
      "Una resistencia al rasgado, plegado y arrancado menor pero su resistencia a la tensión y esfuerzos perpendiculares aumentan.",
      "Una resistencia al alargamiento, plegado y repelado menor pero su resistencia a la tensión y esfuerzos perpendiculares aumentan.",
      "Una resistencia al alargamiento, plegado y arrancado menor pero su resistencia a la tensión y esfuerzos perpendiculares disminuyen."
    ],
    correct: 2,
    explanation: "El choque térmico deshidrata las fibras acortando su elasticidad y mermando sus propiedades mecánicas globales.",
    source: "Examen Oficial FNMT 2023 (Pregunta 40)"
  },
  {
    question: "Propiedades de seguridad del papel:",
    options: [
      "Marca que llevan algunos soportes que puede observarse bajo luz ultravioleta.",
      "Marca que llevan algunos soportes que puede observarse mirando al trasluz.",
      "Marca que llevan algunos soportes que puede observarse a diferentes longitudes de onda."
    ],
    correct: 1,
    explanation: "La filigrana o marca de agua se aprecia por transparencia al variarse la densidad de fibra en el proceso de fabricación en mesa plana o bombo.",
    source: "Examen Oficial FNMT 2023 (Pregunta 41)"
  },
  {
    question: "¿Cuáles son algunas de las características que tiene que tener el papel para un sistema de impresión por tipografía?",
    options: [
      "Lisura, compresibilidad y estabilidad dimensional.",
      "Planeidad, no desprender polvillo, microporosidad adecuada para un secado rápido de las tintas y estabilidad dimensional.",
      "Lisura, compresibilidad, microporosidad adecuada para un secado rápido de las tintas y estabilidad dimensional."
    ],
    correct: 2,
    explanation: "Requisitos del soporte para recibir la presión directa de los tipos en relieve sin romper el papel ni emborronar la tinta.",
    source: "Examen Oficial FNMT 2023 (Pregunta 42)"
  },
  {
    question: "¿Cuáles son algunas de las características que tiene que tener el papel para un sistema de impresión offset?",
    options: [
      "Lisura, compresibilidad y estabilidad dimensional.",
      "Planeidad, no desprender polvillo, microporosidad adecuada para un secado rápido de las tintas y estabilidad dimensional.",
      "Lisura, compresibilidad, microporosidad adecuada para un secado rápido de las tintas y estabilidad dimensional."
    ],
    correct: 1,
    explanation: "En offset, evitar la liberación de polvo (que contamina la mantilla) y mantener la planeidad son aspectos prioritarios.",
    source: "Examen Oficial FNMT 2023 (Pregunta 43)"
  },
  {
    question: "¿Cuáles son algunas de las características que tiene que tener el papel para un sistema de impresión por flexografía?",
    options: [
      "Lisura, compresibilidad y estabilidad dimensional.",
      "Lisura, compresibilidad, microporosidad adecuada para un secado rápido de las tintas y estabilidad dimensional.",
      "Soportes bien encolados (tintas al agua), calidad del bobinado (rotativas) y estabilidad dimensional."
    ],
    correct: 2,
    explanation: "Dado que en flexografía priman las tintas líquidas y la alimentación en bobina, el encolado y la tensión de bobinado resultan esenciales.",
    source: "Examen Oficial FNMT 2023 (Pregunta 44)"
  },
  {
    question: "¿Cuáles son algunas de las características que tiene que tener el papel para un sistema de impresión por huecograbado?",
    options: [
      "Lisura, compresibilidad, calidad del bobinado y estabilidad dimensional.",
      "Lisura, compresibilidad y estabilidad dimensional.",
      "Soportes bien encolados (tintas al agua), calidad del bobinado (rotativas) y estabilidad dimensional."
    ],
    correct: 0,
    explanation: "Para extraer la tinta de los alvéolos del cilindro de huecograbado se requiere alta lisura y compresibilidad.",
    source: "Examen Oficial FNMT 2023 (Pregunta 45)"
  },
  {
    question: "En tipografía según su altura, los tipos de astas pueden ser:",
    options: [
      "Recta, curva y mixta.",
      "Ascendente, media o central y descendente.",
      "Modulada, uniforme y descendente."
    ],
    correct: 1,
    explanation: "Anatomía tipográfica de los caracteres agrupados en zonas superior (ascendente), cuerpo central (media) e inferior (descendente).",
    source: "Examen Oficial FNMT 2023 (Pregunta 46)"
  },
  {
    question: "En tipografía, ¿qué nombre recibe el remate de la figura adjunta?",
    options: [
      "Redondeado, lobulado.",
      "Filiforme.",
      "Mistiforme, clásico."
    ],
    correct: 0,
    explanation: "Terminal en forma de gota o círculo denominado remate redondeado o lobulado.",
    source: "Examen Oficial FNMT 2023 (Pregunta 47)"
  },
  {
    question: "¿En tipografía a qué se denomina Kerning?",
    options: [
      "Al cuerpo de la letra.",
      "A la mancha de la letra.",
      "Al espacio lateral de la letra."
    ],
    correct: 2,
    explanation: "Ajuste interlineal o interespaciado entre pares de caracteres para corregir vacíos visuales.",
    source: "Examen Oficial FNMT 2023 (Pregunta 48)"
  },
  {
    question: "En el sistema tipográfico europeo, ¿a qué equivale 1 punto Didot?",
    options: [
      "0,376 mm (0,376065 mm).",
      "1 cícero.",
      "0,351 mm (0,3514729 mm)."
    ],
    correct: 0,
    explanation: "El punto Didot (sistema tipográfico europeo) equivale exactamente a 0,376 mm (a diferencia del punto Pica americano de 0,351 mm).",
    source: "Examen Oficial FNMT 2023 (Pregunta 49)"
  },
  {
    question: "Según el color los originales pueden ser:",
    options: [
      "Monocromáticos y policromáticos.",
      "Opacos y transparentes.",
      "Monocromáticos y transparentes."
    ],
    correct: 0,
    explanation: "Clasificación cromática básica de imágenes de entrada para reproducción gráfica.",
    source: "Examen Oficial FNMT 2023 (Pregunta 50)"
  },
  {
    question: "Según el contraste los originales pueden ser:",
    options: [
      "De línea, de imagen vectorial, de imagen dura, de tono modulado continuo y de tono modulado discontinuo.",
      "De línea, de tono modulado, de imagen suave, de imagen dura, de tono modulado continuo y de tono modulado discontinuo.",
      "De línea, de imagen vectorial, de imagen dura, de tono modulado suave y de tono modulado discontinuo."
    ],
    correct: 1,
    explanation: "Clasificación integral de originales según la escala de grises y gradación del contraste.",
    source: "Examen Oficial FNMT 2023 (Pregunta 51)"
  },
  {
    question: "¿Quién inventó la impresión con tipos móviles?",
    options: [
      "Johannes Gutenberg.",
      "Senefelder",
      "Ottmar Mergenthaler."
    ],
    correct: 0,
    explanation: "Johannes Gutenberg perfeccionó e ideó la imprenta de tipos metálicos móviles en Maguncia alrededor de 1440.",
    source: "Examen Oficial FNMT 2023 (Pregunta 52)"
  },
  {
    question: "¿Cuáles son Fases de producción en el proceso gráfico?",
    options: [
      "Preimpresión, montaje y pasado, pruebas para cliente impresión y postimpresión.",
      "Preimpresión, Impresión y Postimpresión.",
      "Preimpresión, pruebas para cliente impresión y postimpresión."
    ],
    correct: 1,
    explanation: "Las tres grandes fases macroestructurales de la cadena industrial en artes gráficas.",
    source: "Examen Oficial FNMT 2023 (Pregunta 53)"
  },
  {
    question: "¿Cuáles son los procesos dentro de la preimpresión?",
    options: [
      "Composición de Textos, Montaje de página, Ripeado - Imposición, Pruebas de Color y Filmación CTF / CTP.",
      "Composición de Textos y Digitalización de Imágenes, Pruebas de Color y Filmación CTF / CTP.",
      "Composición de Textos y Digitalización de Imágenes, Montaje de página, Ripeado Imposición, Pruebas de Color y Filmación CTF / CTP."
    ],
    correct: 2,
    explanation: "Listado secuencial completo de las operaciones de taller en el área de preimpresión digital.",
    source: "Examen Oficial FNMT 2023 (Pregunta 54)"
  },
  {
    question: "¿Cuáles son algunos de los procesos dentro de la postimpresión?",
    options: [
      "Revisar, corte y reposiciones.",
      "Corte, plegado, alzado-embuchado y encuadernación.",
      "Revisión, corte, reposiciones y empaquetado."
    ],
    correct: 1,
    explanation: "Operaciones características de acabado y manipulado de pliegos impresos.",
    source: "Examen Oficial FNMT 2023 (Pregunta 55)"
  },
  {
    question: "¿Cuáles son las materias primas en la fabricación del papel?",
    options: [
      "Resinosas: pino, Frondosas: eucalipto, Fibras no madereras: algodón Secundarias, Animales: lana, Artificiales y sintéticas: nylon.",
      "Cargas y pigmentos, Frondosas: eucalipto, Fibras no madereras: algodón Secundarias, Animales: lana, Artificiales y sintéticas: nylon.",
      "Cargas y pigmentos, ligantes, Fibras no madereras: algodón Secundarias, Animales: lana, Artificiales y sintéticas: nylon."
    ],
    correct: 0,
    explanation: "Origen y procedencia de las distintas fibras celulósicas y no celulósicas empleadas en la pasta papelera.",
    source: "Examen Oficial FNMT 2023 (Pregunta 56)"
  },
  {
    question: "¿Cuál es la función de las cargas y pigmentos en la fabricación del papel?",
    options: [
      "Dan mayor rugosidad superficial, Aumentan la opacidad, Aumentan la porosidad y, por tanto, la absorción, Aumentan la blancura Aumentan el brillo.",
      "Dan mayor lisura superficial, Aumentan la opacidad, Disminuyen la porosidad y, por tanto, la absorción, Aumentan la blancura Aumentan el brillo, Disminuye el espesor a igualdad de gramaje.",
      "Dan mayor rugosidad superficial, Aumentan la opacidad, Aumentan la porosidad y, por tanto, la absorción, Aumentan la blancura Aumentan el brillo, Disminuye el espesor a igualdad de gramaje."
    ],
    correct: 1,
    explanation: "Los minerales de relleno rellenan los huecos interfibrilares aportando planitud, blancura y opacidad a la hoja.",
    source: "Examen Oficial FNMT 2023 (Pregunta 57)"
  },
  {
    question: "¿Cuáles son algunos tipos de cargas y pigmentos que se incluyen en la fabricación del papel?",
    options: [
      "Caolín, carbonato cálcico, almidón, talco, yeso.",
      "Caolín, látex, carbonato cálcico, talco, yeso.",
      "Caolín, carbonato cálcico, talco, yeso."
    ],
    correct: 2,
    explanation: "Aditivos minerales de carga pura (el almidón y el látex son ligantes, no cargas).",
    source: "Examen Oficial FNMT 2023 (Pregunta 58)"
  },
  {
    question: "¿Si la cantidad de ligantes en la fabricación del papel es alta?",
    options: [
      "Hay defectos de unión entre los componentes del papel y puede dar problemas de arrancado.",
      "La absorción del papel es baja y puede dar problemas de repintado.",
      "Hay defectos de unión entre los componentes del papel y puede dar problemas de repintado."
    ],
    correct: 1,
    explanation: "El exceso de ligante sella los poros impidiendo la penetración rápida de los aceites de la tinta, provocando repintado.",
    source: "Examen Oficial FNMT 2023 (Pregunta 59)"
  },
  {
    question: "¿En la fabricación del papel algunos ligantes son?",
    options: [
      "almidón, látex, apv.",
      "almidón, látex, apv, almidón.",
      "almidón, talco, látex, apv."
    ],
    correct: 0,
    explanation: "Productos ligantes poliméricos y naturales empleados para cohesionar la masa o la capa de estuco.",
    source: "Examen Oficial FNMT 2023 (Pregunta 60)"
  },
  {
    question: "¿En la fabricación del papel algunos aditivos son?",
    options: [
      "Blanqueantes ópticos, apv, Encolantes, Antiespumantes, Colorantes, Microbicidas, Resinas de resistencia en húmedo, Retentivos y floculantes.",
      "Blanqueantes ópticos, Encolantes, Antiespumantes, Colorantes, Microbicidas, Resinas de resistencia en seco, Retentivos y floculantes.",
      "Blanqueantes ópticos, Encolantes, Antiespumantes, Colorantes, Microbicidas, Resinas de resistencia en húmedo, Retentivos y floculantes."
    ],
    correct: 2,
    explanation: "Gama completa de aditivos químicos auxiliares de masa durante la refinación y formación de la hoja.",
    source: "Examen Oficial FNMT 2023 (Pregunta 61)"
  },
  {
    question: "¿Cuándo se tala un árbol, se observan unos anillos concéntricos cuyo número indica?",
    options: [
      "La edad que tiene.",
      "La edad que tiene y el sentido de las fibras.",
      "Las fibras que se han generado durante un año."
    ],
    correct: 0,
    explanation: "Cada anillo de crecimiento anual en la sección del tronco determina exactamente la edad del árbol.",
    source: "Examen Oficial FNMT 2023 (Pregunta 62)"
  },
  {
    question: "Fabricación de papel:",
    options: [
      "Fibras, Vasos, Parénquima, Resinosas y Frondosas.",
      "Fibras, almidón, Parénquima, Resinosas y Frondosas.",
      "Fibras, Vasos, apv, Resinosas y Frondosas."
    ],
    correct: 0,
    explanation: "Componentes histológicos vegetales fundamentales en la clasificación maderera.",
    source: "Examen Oficial FNMT 2023 (Pregunta 63)"
  },
  {
    question: "¿Cómo se denominan las fibras en las resinosas?",
    options: [
      "Vasos.",
      "Astillas.",
      "Traqueidas."
    ],
    correct: 2,
    explanation: "Las maderas de resinosas (coníferas) están compuestas casi en su totalidad por traqueidas (fibras largas).",
    source: "Examen Oficial FNMT 2023 (Pregunta 64)"
  },
  {
    question: "¿Qué permite la Parénquima?",
    options: [
      "La reserva de células.",
      "La circulación de la savia.",
      "La perpendicularidad de las fibras"
    ],
    correct: 0,
    explanation: "Tejido celular vegetal encargado de la acumulación y reserva de sustancias nutritivas.",
    source: "Examen Oficial FNMT 2023 (Pregunta 65)"
  },
  {
    question: "En la fabricación del papel se utilizan pastas mecánicas, ¿Cuáles son algunas de ellas?",
    options: [
      "Pasta mecánica clásica (SGW), Pasta al bisulfito (BSP), Pasta Termomecánica (TMP), Pasta Químico Termomecánica o Semiquímica (CTMP)",
      "Pasta mecánica clásica (SGW), Pasta mecánica de astillas (RMP), Pasta Termomecánica (TMP), Pasta Químico Termomecánica o Semiquímica (CTMP)",
      "Pasta mecánica clásica (SGW), Pasta al sulfato (SFP), Pasta Termomecánica (TMP), Pasta Químico Termomecánica o Semiquímica (CTMP)"
    ],
    correct: 1,
    explanation: "Abreviaturas internacionales de los procesos de obtención de pasta por desfibrado mecánico.",
    source: "Examen Oficial FNMT 2023 (Pregunta 66)"
  },
  {
    question: "En la fabricación del papel se utilizan pastas químicas, ¿Cuáles son algunas de ellas?",
    options: [
      "Al bisulfito: bisulfitos, A la sosa: NaOH, Al sulfato: NaOH, S2Na y S.",
      "Al bisulfito: bisulfitos, Pasta Químico Termomecánica: Na y Sr, Al sulfato: NaOH, S2Na y S.",
      "Al bisulfito: bisulfitos, A la sosa: NaOH, Pasta Semiquímica: Db y Hs."
    ],
    correct: 0,
    explanation: "Reactivos digestores químicos aplicados para la cocción y disolución de la lignina.",
    source: "Examen Oficial FNMT 2023 (Pregunta 67)"
  },
  {
    question: "¿Qué se elimina en las pastas químicas?",
    options: [
      "Los espumantes.",
      "Los dispersantes.",
      "La lignina."
    ],
    correct: 2,
    explanation: "El objetivo del tratamiento químico de cocción es disolver el aglomerante natural (lignina) aislando las fibras puras de celulosa.",
    source: "Examen Oficial FNMT 2023 (Pregunta 68)"
  },
  {
    question: "Los papeles ESTUCADOS ARTE llevan una o dos capas de estuco en máquina y dos fuera de máquina, sus características más generales son:",
    options: [
      "Elevada estabilidad dimensional. Excelente uniformidad superficial. Son del 100% pasta química generalmente. Pueden estar estucados 1/c o 2/c Generalmente son brillantes aunque pueden ser también semi mates y mates. Generalmente son blancos. Pueden gofrarse.",
      "Excelente uniformidad superficial. Son del 100% pasta química generalmente. Pueden ser brillantes 1/c (una cara) o 2/c (dos caras), semimates (2/c) y mates (2/c). Pueden estar estucados 1/c o 2/c aunque lo más normal es encontrarlos estucados por las dos caras. Estabilidad dimensional alta o bastante alta.",
      "Pueden estar estucados 1/c o 2/c. Generalmente son brillantes aunque pueden ser también semi mates y mates. Generalmente son blancos. Pueden gofrarse. Generalmente son blancos aunque también los podemos encontrar con distintas tonalidades. Pueden ser 100% pasta química (estucados modernos), 100% pasta mecánica (estucados de pasta mecánica)."
    ],
    correct: 1,
    explanation: "Especificación completa del papel estucado tipo Arte de máxima gama y acabado.",
    source: "Examen Oficial FNMT 2023 (Pregunta 69)"
  },
  {
    question: "¿Cuál es la Estructura de un papel autocopiativo?",
    options: [
      "Hoja transmisora (CB), papel carbón (CBF) y Hoja receptora-transmisora (CF).",
      "Hoja transmisora (CB), Hoja receptora-transmisora (CBF) y Hoja receptora (CF).",
      "Hoja transmisora (CBF), Hoja receptora-transmisora (CB) y Hoja receptora (CF)."
    ],
    correct: 1,
    explanation: "Secuencia normalizada: Coated Back (CB), Coated Back and Front (CFB) y Coated Front (CF).",
    source: "Examen Oficial FNMT 2023 (Pregunta 70)"
  },
  {
    question: "Los papeles Offset suelen ser:",
    options: [
      "100% pasta semi-mecánica pero en algunos casos pueden llevar un porcentaje de pasta química como en los offset volumen y formularios o fibras secundarias como en los papeles para fotocopias y formularios.",
      "100% pasta química pero en algunos casos pueden llevar un porcentaje de pasta mecánica como en los offset volumen y formularios o fibras secundarias como en los papeles para fotocopias y formularios.",
      "100% pasta mecánica pero en algunos casos pueden llevar un porcentaje de pasta química como en los offset volumen y formularios o fibras secundarias como en los papeles para fotocopias y formularios."
    ],
    correct: 1,
    explanation: "Composición básica de la pasta para papel Offset no estucado.",
    source: "Examen Oficial FNMT 2023 (Pregunta 71)"
  },
  {
    question: "Una de las Características del papel prensa es:",
    options: [
      "No están estucados pero sí tienen un tratamiento superficial en máquina, entre las dos secciones de secado.",
      "Presentan un grado de encolado inferior a 20 gr/m2 para evitar que se corra la tinta, es decir, que se produzcan barbas cuando se escribe con pluma o rotuladores.",
      "Son papeles con un contenido de pasta mecánica muy alto o del 100%."
    ],
    correct: 2,
    explanation: "El papel periódico se elabora casi íntegramente con pasta mecánica económica de fibra corta.",
    source: "Examen Oficial FNMT 2023 (Pregunta 72)"
  },
  {
    question: "El papel engomado es un papel recubierto por una cara con:",
    options: [
      "Un adhesivo formado por resina o cauchos sintéticos.",
      "Una capa de adhesivo de origen vegetal o animal (goma arábiga, cola animal...)",
      "Un adhesivo formado por cauchos naturales o cauchos sintéticos."
    ],
    correct: 1,
    explanation: "Definición clásica de la capa activable por agua con colas hidrosolubles naturales.",
    source: "Examen Oficial FNMT 2023 (Pregunta 73)"
  },
  {
    question: "¿A cuántas resmas corresponde 70 cuadernillos?",
    options: [
      "0,700 resmas.",
      "0,350 resmas.",
      "0,250 resmas."
    ],
    correct: 0,
    explanation: "Sabiendo que 1 cuadernillo = 5 pliegos y 1 resma = 500 pliegos (100 cuadernillos), 70 cuadernillos son 70 / 100 = 0,700 resmas.",
    source: "Examen Oficial FNMT 2023 (Pregunta 74)"
  },
  {
    question: "Podemos definir la porosidad como la relación existente entre:",
    options: [
      "Un volumen determinado de aire (100 cm³) que atraviesa una superficie de 7,5 cm² del soporte papelero a una presión estándar.",
      "El volumen de aire del soporte papelero con respecto al volumen total.",
      "Un volumen determinado de aire (100 cm³) que atraviesa una superficie de 5,5 cm² del soporte papelero a una presión estándar."
    ],
    correct: 1,
    explanation: "Definición volumétrica de la porosidad intrínseca o porcentaje de huecos de aire contenidos en la estructura de la hoja.",
    source: "Examen Oficial FNMT 2023 (Pregunta 75)"
  },
  {
    question: "El gramaje está directamente relacionado con:",
    options: [
      "La porosidad del soporte papelero, el espesor del soporte papelero y el acabado del soporte papelero.",
      "La lisura del soporte papelero, el espesor del soporte papelero y el acabado del soporte papelero.",
      "La porosidad del soporte papelero, el brillo del soporte papelero y el acabado del soporte papelero."
    ],
    correct: 0,
    explanation: "Variables físicas interconectadas directamente con el gramaje del papel.",
    source: "Examen Oficial FNMT 2023 (Pregunta 76)"
  },
  {
    question: "Podemos definir el espesor o calibre como la distancia:",
    options: [
      "Existente entre las diferentes irregularidades del soporte papelero. Se expresa, generalmente, en micras (µ) pero también se puede expresar en mm.",
      "Existente entre la parte más gruesa de una cara y otra del soporte papelero. Se expresa, generalmente, en micras (µ) pero también se puede expresar en mm.",
      "Existente entre una cara y otra del soporte papelero. Se expresa, generalmente, en micras (µ) pero también se puede expresar en mm."
    ],
    correct: 2,
    explanation: "Distancia perpendicular medida entre las dos superficies del pliego expresada habitualmente en micrómetros (µm).",
    source: "Examen Oficial FNMT 2023 (Pregunta 77)"
  },
  {
    question: "Podemos definir la dureza de un soporte papelero como:",
    options: [
      "La relación existente entre la masa y el volumen de la materia que lo constituye.",
      "La resistencia que ofrece un soporte papelero a ser deformado por la presión de una superficie exterior.",
      "Los espacios existentes entre las fibras y se puede definir como la relación entre la masa del soporte papelero con respecto al volumen aparente del mismo."
    ],
    correct: 1,
    explanation: "Oposición mecánica del papel a la penetración o hendidura provocada por un cuerpo rígido o el pisón.",
    source: "Examen Oficial FNMT 2023 (Pregunta 78)"
  },
  {
    question: "La ESTABILIDAD DIMENSIONAL o HIGROESTABILIDAD DIMENSIONAL, la podemos definir como la facultad de los soportes papeleros de mantener estables sus dimensiones cuando:",
    options: [
      "Las condiciones ambientales varían o se someten a tensiones durante la impresión y el manipulado.",
      "La humedad del soporte papelero sea ligeramente superior a la del ambiente.",
      "Más diferencia de humedad relativa del ambiente exista con respecto a la que tenga el soporte papelero."
    ],
    correct: 0,
    explanation: "Propiedad de conservar la forma y medidas ante cambios de humedad o esfuerzos de tracción mecánica.",
    source: "Examen Oficial FNMT 2023 (Pregunta 79)"
  },
  {
    question: "Los tejidos textiles naturales se vienen imprimiendo en:",
    options: [
      "Serigrafia.",
      "Huecograbado.",
      "Flebografía."
    ],
    correct: 0,
    explanation: "La serigrafía es el procedimiento por excelencia para el estampado de soportes textiles por el grosor de capa de tinta depositado.",
    source: "Examen Oficial FNMT 2023 (Pregunta 80)"
  },
  {
    question: "El volumen específico es la relación entre el espesor y el peso del soporte, se mide en:",
    options: [
      "cm²/gr",
      "cm³/gr",
      "cm/gr"
    ],
    correct: 1,
    explanation: "Unidad del volumen específico o mano del papel: centímetros cúbicos por gramo (cm³/g).",
    source: "Examen Oficial FNMT 2023 (Pregunta 81)"
  },
  {
    question: "Resistencia al desgarro es la resistencia que ofrece el soporte a rasgarse cuando es sometido:",
    options: [
      "A dos fuerzas que actúan paralelas y en el mismo sentido en uno de sus bordes.",
      "A dos fuerzas que actúan paralelas y en sentido contrario en uno de sus bordes.",
      "A dos fuerzas que actúan perpendicularmente y en sentido contrario en uno de sus bordes."
    ],
    correct: 1,
    explanation: "Cizalladura provocada por dos fuerzas paralelas en dirección opuesta aplicadas sobre una hendidura inicial.",
    source: "Examen Oficial FNMT 2023 (Pregunta 82)"
  },
  {
    question: "Resistencia al estallido, es la resistencia que ofrece el soporte a romperse cuando es sometido:",
    options: [
      "A una fuerza paralela a su superficie que actúa sobre él, estando éste está sujeto.",
      "A una fuerza que actúa sobre él, perpendicular a su superficie cuando éste está sujeto.",
      "A un intento de estallido manual ejercitado por el propio observador."
    ],
    correct: 1,
    explanation: "Fuerza hidráulica ejercida perpendicularmente mediante un diafragma elástico (ensayo Mullen).",
    source: "Examen Oficial FNMT 2023 (Pregunta 83)"
  },
  {
    question: "Las propiedades fisicoquímicas de los adhesivos afectan:",
    options: [
      "A la unión de los soportes entre sí y con otros soportes y son de suma importancia para el comportamiento posterior del producto terminado.",
      "A la resistencia de fijar adecuadamente y con fuerza las distintas láminas de que se compone el soporte.",
      "A la resistencia que ofrecen entre sí los componentes de los soportes simples o los compuestos a separarse ante una fuerza aplicada dada."
    ],
    correct: 0,
    explanation: "Determinación de la durabilidad y anclaje definitivo en procesos de encuadernación y contracolado.",
    source: "Examen Oficial FNMT 2023 (Pregunta 84)"
  },
  {
    question: "El Alcohol isopropílico -IPA es un aditivo esencial en la mayoría de las soluciones de mojado puesto que reduce:",
    options: [
      "La tensión superficial del papel permitiendo una mejor calidad de impresión.",
      "La temperatura de impresión entre el caucho y el soporte papelero.",
      "La tensión superficial del agua permitiendo usar menos, además de producir un efecto refrigerante al evaporar."
    ],
    correct: 2,
    explanation: "Reduce la tensión superficial hídrica a ~35 mN/m facilitando la humectación de la plancha y refrigerando la batería por evaporación.",
    source: "Examen Oficial FNMT 2023 (Pregunta 85)"
  },
  {
    question: "Las películas de estampación o foils son:",
    options: [
      "Aquellas que se aplican sobre el impreso mediante laminación -también denominado glaxofonado- o mediante encapsulado.",
      "Láminas en estado sólido compuestas de una lámina transferible, un adhesivo y un soporte o primer, opacas -Foil blocking- o transparentes -Transparent foils-, metalizadas, en color o con motivos holográficos, presentándose sobre sopones plásticos en forma de cinta y que se trasfieren al soporte de impresión mediante presión y calor mediante máquinas de estampar.",
      "Películas plásticas que se vienen imprimiendo en huecograbado tienen superficies no absorbentes y son químicamente inertes con tensión interfacial baja."
    ],
    correct: 1,
    explanation: "Definición técnica completa de los foils empleados para termoestampación en caliente.",
    source: "Examen Oficial FNMT 2023 (Pregunta 86)"
  },
  {
    question: "Adhesivos de fusión (HOT MELT).",
    options: [
      "Adhesivos sintéticos termoplásticos, sólidos a temperatura ambiente.",
      "Adhesivo termoplástico a base de copolímeros de Acetato de etilvinilo de fusión por calor.",
      "Adhesivo termoplástico de fusión por calor a partir del poliuretano (PUR)."
    ],
    correct: 0,
    explanation: "Definición genérica de los adhesivos termoplásticos fundibles de aplicación en caliente.",
    source: "Examen Oficial FNMT 2023 (Pregunta 87)"
  },
  {
    question: "La mantilla o caucho es el elemento de intermediación encargado de:",
    options: [
      "Trasladar la tinta desde la forma impresora al soporte de impresión en el procedimiento de huecograbado.",
      "Trasladar la tinta desde la forma impresora al soporte de impresión en el procedimiento flebografía.",
      "Trasladar la tinta desde la forma impresora al soporte de impresión en el procedimiento offset."
    ],
    correct: 2,
    explanation: "La mantilla de elastómero transfiere la imagen entintada desde la plancha cilíndrica hasta la hoja de papel.",
    source: "Examen Oficial FNMT 2023 (Pregunta 88)"
  },
  {
    question: "La solución de humectación, solución de mojado o agua de mojado es el líquido encargado de humectar la:",
    options: [
      "La plancha en el proceso offset a fin de hacer que las zonas sin grafismos rechacen la tinta.",
      "La mantilla en el proceso offset a fin de hacer que las zonas sin grafismos rechacen la tinta.",
      "La plancha en el proceso serigráfico a fin de hacer que las zonas sin grafismos rechacen la tinta."
    ],
    correct: 0,
    explanation: "Mantiene hidrófilas las zonas no impresas de la plancha offset evitando que la tinta grasa las emborrone.",
    source: "Examen Oficial FNMT 2023 (Pregunta 89)"
  },
  {
    question: "¿Qué es el Guaflex?",
    options: [
      "Material de origen celulósico también tratado y con excelentes propiedades mecánicas, resistencia a la abrasión, al repintado y con tratamiento anti huellas.",
      "Soporte elaborado con fibras celulósicas largas, impregnadas con resinas y pintado. Dispone de diferentes acabados obtenidos mediante combinación de barnizado, estampación y gofrado, que por lo general imitan a la piel -Similpiel-.",
      "Soporte celulósico, en este caso recubierto con una capa vinílica que presenta gran flexibilidad y resistencia al desgarro."
    ],
    correct: 1,
    explanation: "Material de encuadernación símil piel obtenido a partir de base celulósica resinada y gofrada.",
    source: "Examen Oficial FNMT 2023 (Pregunta 90)"
  },
  {
    question: "En el Manual de Prevención de Riesgos Laborales de la FNMT-RCM según la Ley General de la Seguridad Social, en su artículo 115 Cuál de las siguientes es la Definición jurídica de \"Accidente de trabajo\":",
    options: [
      "La posibilidad de que un trabajador sufra un determinado daño derivado del trabajo.",
      "Las enfermedades, patologías o lesiones sufridas con motivo u ocasión del trabajo.",
      "Toda lesión corporal que el trabajador sufra con ocasión o por consecuencia del trabajo que ejecuta por cuenta ajena."
    ],
    correct: 2,
    explanation: "Definición legal recogida en el Art. 115 de la Ley General de la Seguridad Social.",
    source: "Examen Oficial FNMT 2023 (Pregunta 91)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM hay otras patologías derivadas del trabajo, cuál de las siguientes afirmaciones está relacionada con el \"estrés\":",
    options: [
      "Estrés es el desgaste que se produce cuando se da un exceso de trabajo sin ser compensado por el descanso.",
      "El estado de estrés se manifiesta en un trabajador cuando su esfuerzo de adaptación a las exigencias del entorno donde desarrolla su actividad es excesivo, superando con creces sus esfuerzos y límites adaptativos.",
      "Es la sensación de falta de gratificación que siente la persona con respecto a sus funciones y entorno de trabajo. El estrés no es estrictamente una enfermedad, pero su presencia durante largos períodos de tiempo está claramente relacionada con el bienestar y con la salud psíquica de los empleados. Además, incide de una forma muy notable en el rendimiento de los trabajadores."
    ],
    correct: 1,
    explanation: "Definición de estrés psicosocial por superación de la capacidad adaptativa del trabajador.",
    source: "Examen Oficial FNMT 2023 (Pregunta 92)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM en la actuación del socorrista se deberá seguir los siguientes pasos:",
    options: [
      "Proteger, avisar y socorrer",
      "Ayudar, señalizar y proteger",
      "Socorrer, proteger y señalizar"
    ],
    correct: 0,
    explanation: "Protocolo universal de primeros auxilios PAS: Proteger, Avisar y Socorrer.",
    source: "Examen Oficial FNMT 2023 (Pregunta 93)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM, el rango de temperatura para trabajos ligeros será de:",
    options: [
      "14-25 °C",
      "17-27 °C",
      "17-25 °C"
    ],
    correct: 1,
    explanation: "De acuerdo al RD 486/1997 sobre lugares de trabajo, la temperatura en locales con trabajos sedentarios/ligeros debe oscilar entre 17 °C y 27 °C.",
    source: "Examen Oficial FNMT 2023 (Pregunta 94)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM, en la clasificación de los tipos de fuego los de clase B involucra:",
    options: [
      "A los combustibles ordinarios o materiales fibrosos, tales como la madera, el papel, la tela, las gomas y ciertos plásticos, estos materiales producen brasa.",
      "A los líquidos inflamables o combustibles y sólidos de bajo punto de fusión que se comportan como tales, como la gasolina, el keroseno, la pintura, los aditivos y el propano.",
      "Involucra a fuegos donde el combustible es un gas."
    ],
    correct: 1,
    explanation: "Fuegos de clase B: combustibles líquidos e hidrocaburos.",
    source: "Examen Oficial FNMT 2023 (Pregunta 95)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM cuál de las siguientes no es una medida preventiva de la carga física o movimientos repetitivos:",
    options: [
      "Evitar el contacto de la mano con superficies muy frías y evitar la transmisión de vibraciones",
      "Restringir la circulación sanguínea",
      "Colocar los elementos del puesto de trabajo a una altura entre las caderas y los hombros permite reducir las posturas forzadas de hombro"
    ],
    correct: 1,
    explanation: "Restringir la circulación es un efecto de riesgo, nunca una medida de prevención ergonómica.",
    source: "Examen Oficial FNMT 2023 (Pregunta 96)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM, un EPI es cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su seguridad o su salud, así como cualquier complemento o accesorio destinado a tal fin. Cuál de los siguientes están excluidos de esta definición:",
    options: [
      "Los equipos de los servicios de socorro y salvamento",
      "Protectores auditivos con aparatos de intercomunicación.",
      "Equipos de submarinismo."
    ],
    correct: 0,
    explanation: "Exclusión explícita recogida en la normativa de EPIs para fuerzas de auxilio y socorro.",
    source: "Examen Oficial FNMT 2023 (Pregunta 97)"
  },
  {
    question: "Según el XI Convenio Colectivo de la Fábrica Nacional de Moneda y Timbre - Real Casa de la Moneda, la comisión paritaria estará constituida por:",
    options: [
      "Seis representantes de la dirección de la FNMT-RCM y seis de los trabajadores, contando ambas partes con dos asesores pertenecientes a la plantilla, designados respectivamente por la Dirección y por el Comité Intercentros",
      "Cinco representantes de la dirección de la FNMT-RCM y cinco de los trabajadores, contando ambas partes con dos asesores pertenecientes a la plantilla, designados respectivamente por la Dirección y por el Comité Intercentros",
      "Seis representantes de la dirección de la FNMT-RCM y seis de los trabajadores, contando ambas partes con tres asesores pertenecientes a la plantilla, designados respectivamente por la Dirección y por el Comité Intercentros"
    ],
    correct: 0,
    explanation: "Composición legal paritaria de 6+6 con 2 asesores por parte fijada en el XI Convenio.",
    source: "Examen Oficial FNMT 2023 (Pregunta 98)"
  },
  {
    question: "Según el XI Convenio Colectivo de la Fábrica Nacional de Moneda y Timbre - Real Casa de la Moneda, el Comité de Seguridad y Salud se reunirá:",
    options: [
      "Semestralmente con carácter ordinario en el centro de Madrid y en el de Burgos, y con carácter extraordinario una vez al año o cuantas veces así lo solicite alguna de las partes representadas en el mismo.",
      "Trimestralmente con carácter ordinario en el centro de Madrid y en el de Burgos, y con carácter extraordinario una vez al año o cuantas veces así lo solicite alguna de las partes representadas en el mismo.",
      "Anualmente con carácter ordinario en el centro de Madrid y en el de Burgos, y con carácter extraordinario una vez al año o cuantas veces así lo solicite alguna de las partes representadas en el mismo."
    ],
    correct: 1,
    explanation: "Periodicidad trimestral obligatoria para reuniones ordinarias del Comité de Seguridad.",
    source: "Examen Oficial FNMT 2023 (Pregunta 99)"
  },
  {
    question: "Según el III Plan de Igualdad de la Fábrica Nacional de Moneda y Timbre - Real Casa de la Moneda, la Comisión de Seguimiento estará compuesta por;",
    options: [
      "cinco miembros de la parte empresarial y cinco miembros de la parte social",
      "cuatro miembros de la parte empresarial y cuatro miembros de la parte social",
      "seis miembros de la parte empresarial y cuatro miembros de la parte social"
    ],
    correct: 0,
    explanation: "Composición paritaria de 5 representación empresarial y 5 representación social establecida en el III Plan de Igualdad.",
    source: "Examen Oficial FNMT 2023 (Pregunta 100)"
  }
]; 





// --- EXAMEN 3: FNMT 2025 ---
/* ========================================================
   ESPACIO RESERVADO - EXAMEN FNMT 2025
   (Pega aquí las preguntas restantes cuando las tengas)
   ======================================================== */
// --- EXAMEN 3: FNMT 2025 (100 PREGUNTAS COMPLETAS) ---
const examFNMT2025 = [
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Cuál es el gramaje máximo considerado para que un soporte se considere papel?",
    options: ["250 gr/m²", "225 gr/m²", "400 gr/m²"],
    correct: 0,
    explanation: "Por convenio industrial en artes gráficas, la masa por unidad de superficie de hasta 250 g/m² se clasifica como papel, pasando a ser cartulina/cartón a partir de esa cifra.",
    source: "Examen Oficial FNMT 2025 (Pregunta 1)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", el papel estucado alto brillo (Cast Coated) se caracteriza por:",
    options: ["Nula uniformidad superficial.", "Capa de estuco entre 2 y 3 gr/m² por cara.", "Alta estabilidad dimensional."],
    correct: 2,
    explanation: "El soporte Cast Coated destaca por poseer una alta estabilidad dimensional unida a su cara lisa espejada.",
    source: "Examen Oficial FNMT 2025 (Pregunta 2)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿qué tipo de papel se emplean comúnmente para albaranes y talonarios?",
    options: ["Papel prensa", "Papel autocopiativo", "Papel biblia"],
    correct: 1,
    explanation: "El papel autocopiativo permite la duplicación de escritura por presión física entre hojas CB, CFB y CF.",
    source: "Examen Oficial FNMT 2025 (Pregunta 3)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", el papel prensa presenta una muy alta proporción de:",
    options: ["Pasta química", "Pasta reciclada", "Pasta mecánica"],
    correct: 2,
    explanation: "El papel periódico se compone principalmente de pasta mecánica desfibrada, de menor coste y alta opacidad.",
    source: "Examen Oficial FNMT 2025 (Pregunta 4)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿cuál de los siguientes, es impermeable a las grasas y a la humedad, cuyo uso es habitual en la envoltura de carnes y pescados?",
    options: ["Papel cristal", "Papel vegetal", "Papel tisú"],
    correct: 1,
    explanation: "El papel vegetal (o sulfurizado) ofrece alta barrera antigrasa e impermeabilidad hídrica.",
    source: "Examen Oficial FNMT 2025 (Pregunta 5)"
  },
  {
    question: "El papel cebolla o seda tiene un gramaje aproximado de:",
    options: ["Más de 100 gr/m²", "50-70 gr/m²", "Menor a 25 gr/m²"],
    correct: 2,
    explanation: "Los papeles de seda o cebolla se encuadran en los papeles ultraligeros con peso inferior a 25 g/m².",
    source: "Examen Oficial FNMT 2025 (Pregunta 6)"
  },
  {
    question: "¿Qué propiedad se relaciona con el índice Mullen (SR)?",
    options: ["Brillo", "Reventamiento", "Alargamiento"],
    correct: 1,
    explanation: "El ensayo y aparato Mullen determina la resistencia al estallido o reventamiento del soporte.",
    source: "Examen Oficial FNMT 2025 (Pregunta 7)"
  },
  {
    question: "Los papeles verjurados se identifican por:",
    options: ["Una capa plástica superficial", "Presentar puntizones y corondeles", "Color negro opaco"],
    correct: 1,
    explanation: "La filigrana continua del verjurado muestra la huella de los alambres de la verjura: puntizones (finos) y corondeles (gruesos).",
    source: "Examen Oficial FNMT 2025 (Pregunta 8)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", las dimensiones del formato clásico de papel en España llamado folio son:",
    options: ["220 mm x 320 mm", "210 mm x 297 mm", "210 mm x 300 mm"],
    correct: 2,
    explanation: "El formato tradicional de folio comercial en España equivale a 210 × 300 mm.",
    source: "Examen Oficial FNMT 2025 (Pregunta 9)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", una bala equivale a:",
    options: ["10 resmas", "5 resmas", "3 resmas"],
    correct: 0,
    explanation: "Una bala de papel agrupa un total de 10 resmas (5.000 pliegos).",
    source: "Examen Oficial FNMT 2025 (Pregunta 10)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Qué es el gramaje?",
    options: ["Grosor total del papel o cartón por m² en condiciones normalizadas.", "Peso de un pliego estándar (70 cm x 100 cm) de papel o cartón.", "Masa por unidad de superficie del papel o cartón."],
    correct: 2,
    explanation: "Definición física normalizada del gramaje expresada habitualmente en g/m².",
    source: "Examen Oficial FNMT 2025 (Pregunta 11)"
  },
  {
    question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Con qué coincide la dirección de fibra que presentan los soportes papeleros?",
    options: ["Dirección en que el papel se corta", "Dirección de fabricación de la máquina de papel", "Dirección de plegado"],
    correct: 1,
    explanation: "Las fibras se orientan longitudinalmente en la dirección de avance de la tela de formación de la máquina continua.",
    source: "Examen Oficial FNMT 2025 (Pregunta 12)"
  },
  {
    question: "¿Qué aparato se utiliza para medir la resistencia al estallido del papel?",
    options: ["Aparato Elmendorf", "Aparato Mullen", "Aparato Clark"],
    correct: 1,
    explanation: "El aparato Mullen mide la presión hidráulica límite que soporta el pliego antes del estallido.",
    source: "Examen Oficial FNMT 2025 (Pregunta 13)"
  },
  {
    question: "¿Qué parámetro influye negativamente en la resistencia al plegado en contrafibra?",
    options: ["Aumento del refinado", "Aumento del encolado interno", "Aumento del satinado"],
    correct: 1,
    explanation: "Un nivel elevado de encolado interno rigidiza en exceso los enlaces restando flexibilidad mecánica al doblez.",
    source: "Examen Oficial FNMT 2025 (Pregunta 14)"
  },
  {
    question: "¿Qué aparato mide la resistencia al plegado usando un movimiento de vaivén entre rodillos?",
    options: ["Aparato MIT", "Aparato Taber", "Aparato Schopper"],
    correct: 2,
    explanation: "El equipo Schopper somete la tira de papel a doblados alternativos de vaivén bajo tensión calibrada.",
    source: "Examen Oficial FNMT 2025 (Pregunta 15)"
  },
  {
    question: "¿Qué hecho aumenta el alargamiento del soporte papelero?",
    options: ["La disminución de la humedad relativa", "Un mayor refinado", "Un aumento de la humedad relativa"],
    correct: 2,
    explanation: "Al humedecerse, las uniones interfibrilares ganan elasticidad permitiendo un mayor estiramiento antes de fracturarse.",
    source: "Examen Oficial FNMT 2025 (Pregunta 16)"
  },
  {
    question: "¿Cuál es un tipo de rigidez del soporte papelero?",
    options: ["Rigidez al alargamiento", "Rigidez al tacto", "Rigidez al envejecimiento"],
    correct: 1,
    explanation: "La rigidez al tacto o subjetiva evalúa la sensación de cuerpo/consistencia al manipular el pliego.",
    source: "Examen Oficial FNMT 2025 (Pregunta 17)"
  },
  {
    question: "¿Cuál no es un tipo de encolado se realiza durante la fabricación del papel?",
    options: ["Superficial", "Térmico", "Interno o en masa"],
    correct: 1,
    explanation: "Los dos métodos de encolado papelero son el encolado en masa (interno) y el superficial (size-press); el encolado 'térmico' no existe como método de fabricación.",
    source: "Examen Oficial FNMT 2025 (Pregunta 18)"
  },
  {
    question: "¿Qué nombre recibe lo opuesto a la opacidad en el soporte papelero?",
    options: ["Reflexión", "Transparencia", "Absorción"],
    correct: 1,
    explanation: "La transparencia es la propiedad inversa a la opacidad visual.",
    source: "Examen Oficial FNMT 2025 (Pregunta 19)"
  },
  {
    question: "I¿Qué disminuye la opacidad del soporte papelero?",
    options: ["Colorear el soporte", "Añadir capas de estucado", "Añadir ceras o aceites"],
    correct: 2,
    explanation: "La incorporación de agentes grasos o ceras satura los micro-poros de aire, volviendo la hoja más translúcida.",
    source: "Examen Oficial FNMT 2025 (Pregunta 20)"
  },
  {
    question: "I¿Cómo se define el brillo en un soporte papelero?",
    options: ["La capacidad de absorber luz.", "La reflexión de un haz de luz con el mismo ángulo con el que incide en la superficie.", "La diferencia existente entre una superficie totalmente plana y la que presenta el soporte papelero."],
    correct: 1,
    explanation: "El brillo especular es la proporción de luz reflejada de forma simétrica al ángulo de incidencia.",
    source: "Examen Oficial FNMT 2025 (Pregunta 21)"
  },
  {
    question: "I¿Qué aparato se usa para medir el brillo del papel?",
    options: ["Brillómetro", "Densitómetro", "Espectrodensitómetro"],
    correct: 0,
    explanation: "El brillómetro o glossímetro es el instrumento fotométrico específico para este ensayo.",
    source: "Examen Oficial FNMT 2025 (Pregunta 22)"
  },
  {
    question: "I¿Cómo se llama el fenómeno contrario a la estabilidad dimensional?",
    options: ["Higroestabilidad", "Dilatación térmica", "Higroexpansividad"],
    correct: 2,
    explanation: "La higroexpansividad es la variación en las dimensiones físicas provocada por los cambios de humedad.",
    source: "Examen Oficial FNMT 2025 (Pregunta 23)"
  },
  {
    question: "I¿Qué provoca una mayor estabilidad dimensional del papel?",
    options: ["Fibras más cortas.", "Mayor humedad del ambiente respecto a la del soporte.", "Fibras más largas."],
    correct: 2,
    explanation: "Las fibras largas entrelazadas disminuyen proporcionalmente el número de uniones higroexpansivas.",
    source: "Examen Oficial FNMT 2025 (Pregunta 24)"
  },
  {
    question: "I¿Cuál es un sistema para medir la estabilidad dimensional?",
    options: ["Con una regla de precisión", "Por inmersión en agua y medición del alargamiento", "Pesando el papel antes y después de secarlo"],
    correct: 1,
    explanation: "Ensayo estándar mediante inmersión directa en agua para determinar el porcentaje de dilatación lineal.",
    source: "Examen Oficial FNMT 2025 (Pregunta 25)"
  },
  {
    question: "I¿Qué se define como: la longitud que puede alcanzar una banda de soporte papelero de anchura uniforme que, suspendida por uno de sus extremos, ¿llegaría a romper por su propio peso?",
    options: ["Longitud crítica", "Longitud de rotura", "Punto de flexión"],
    correct: 1,
    explanation: "La longitud de rotura expresa en metros/kilómetros la resistencia teórica a la tracción por masa propia.",
    source: "Examen Oficial FNMT 2025 (Pregunta 26)"
  },
  {
    question: "I¿Qué efecto tiene en la resistencia a la tensión del soporte papelero un aumento del gramaje por encima de los 110 gr/m²?",
    options: ["La incrementa", "La mantiene constante", "La disminuye"],
    correct: 1,
    explanation: "Superados los 110 g/m², la resistencia específica a la tensión no aumenta proporcionalmente y permanece prácticamente constante.",
    source: "Examen Oficial FNMT 2025 (Pregunta 27)"
  },
  {
    question: "I¿Qué relación existe entre el refinado de la pasta y la resistencia al rasgado inicial?",
    options: ["A mayor refinado, mayor resistencia, siempre.", "A mayor refinado, menor resistencia si disminuye la longitud de las fibras.", "El refinado no afecta esta propiedad."],
    correct: 1,
    explanation: "Un refinado excesivo acorta las fibras cortando su longitud, lo que disminuye la fuerza necesaria para iniciar el rasgado.",
    source: "Examen Oficial FNMT 2025 (Pregunta 28)"
  },
  {
    question: "I¿Qué define la permeabilidad al vapor de agua?",
    options: ["La cantidad de agua líquida absorbida en una hora a temperatura constante", "El agua que un soporte libera al calentarse durante un día", "El agua (en gramos) que atraviesa 1 m² a temperatura constante durante un día"],
    correct: 2,
    explanation: "Definición del índice de transmisión de vapor de agua expresado en g/m² en 24 horas.",
    source: "Examen Oficial FNMT 2025 (Pregunta 29)"
  },
  {
    question: "I¿Qué es la marca al agua o filigrana en papel?",
    options: ["Una marca fluorescente", "Una marca visible al tacto", "Una imagen visible al trasluz"],
    correct: 2,
    explanation: "Elemento de seguridad producido por variación de espesor de fibra visible por luz transmitida (al trasluz).",
    source: "Examen Oficial FNMT 2025 (Pregunta 30)"
  },
  {
    question: "En una guillotina XT, ¿cómo se copia un programa desde Sinopsis de programas?",
    options: [
      "1. Accionar las teclas táctiles Procesar Conect. + Marcar 2. Seleccionar la memoria A o B a través de la tecla táctil selección memoria 3. Seleccionar (marcar) los programas a copiar o introducirlos a través del teclado numérico (p. ej.: 1+=, 3+=, etc.) 4. Accionar la tecla táctil Copiar 5. Seleccionar sector de memoria destino A o B <En el campo de entrada se indica la sinopsis de programas con el programa destino, a partir del cual se ha de insertar los programas a copiar> 6. Aceptar el programa destino pulsando la tecla de Enter o la tecla táctil Liberar función, o introducir otro programa destino a través del teclado numérico. <En el campo de entrada se indica la sinopsis de programas del sector de memoria seleccionado, con mensaje del estado del proceso de copiar y el número de los programas copiados>",
      "1. Accionar la tecla táctil Marcar 2. Seleccionar la memoria A o B a través de la tecla táctil selección memoria 3. Seleccionar (marcar) los programas a copiar o introducirlos a través del teclado numérico (p. ej.: 1+=, 3+=, etc.) 4. Accionar la tecla táctil Copiar 5. Seleccionar sector de memoria destino A o B <En el campo de entrada se indica la sinopsis de programas con el programa destino, a partir del cual se ha de insertar los programas a copiar> 6. Aceptar el programa destino pulsando la tecla de Enter o la tecla táctil Igual dos veces, o introducir otro programa destino a través del teclado numérico. <En el campo de entrada se indica la sinopsis de programas del sector de memoria seleccionado, con mensaje del estado del proceso de copiar y el número de los programas copiados>",
      "1. Accionar las teclas táctiles Procesar Conect. + Marcar 2. Seleccionar la memoria A o B a través de la tecla táctil selección memoria 3. Seleccionar (marcar) los programas a copiar o introducirlos a través del teclado numérico (p. ej.: 1+=, 3+=, etc.) 4. Accionar la tecla táctil Copiar 5. Seleccionar sector de memoria destino A o B <En el campo de entrada se indica la sinopsis de programas con el programa destino, a partir del cual se ha de insertar los programas a copiar> 6. Aceptar el programa destino pulsando la tecla de Igual o la tecla táctil Liberar función, o introducir otro programa destino a través del teclado numérico. <En el campo de entrada se indica la sinopsis de programas del sector de memoria seleccionado, con mensaje del estado del proceso de copiar y el número de los programas copiados>"
    ],
    correct: 0,
    explanation: "Secuencia de mandos para el duplicado de secuencias de corte en la interfaz POLAR XT.",
    source: "Examen Oficial FNMT 2025 (Pregunta 31)"
  },
  {
    question: "¿Qué grosor tiene el inserto de una cuchilla HSS (acero corte ultrarrápido)?",
    options: ["2.5 mm-3 mm", "3 mm-4 mm", "2 mm-4 mm"],
    correct: 1,
    explanation: "El espesor del inserto soldado en cuchillas HSS de guillotina oscila habitualmente entre 3 mm y 4 mm.",
    source: "Examen Oficial FNMT 2025 (Pregunta 32)"
  },
  {
    question: "Según se describe en el manual de la guillotina, ésta cuenta con varias funciones, una de ellas es: programa de formato, ¿para qué sirve?",
    options: [
      "Para crear un programa automáticamente realizando solo la entrada algunos datos como: formato de pliego, formato final del producto, recortes de los bordes en los lados de aplicación, cortes intermedios sin necesidad de determinar el lado de aplicación.",
      "Para crear un programa automáticamente realizando solo la entrada algunos datos como: formato de pliego, formato final del producto, recortes de los bordes en los lados de aplicación, cortes intermedios y lado de aplicación.",
      "Para crear programas automáticamente, solamente con algunos datos como: formato de pliego, formato final del producto, recortes de los bordes en los lados de aplicación, cortes intermedios y lado de aplicación. El operador tendrá que determinar y programar todos los pasos del programa."
    ],
    correct: 1,
    explanation: "Generador asistido de programas a partir de las dimensiones del pliego bruto y producto final indicando el lado de aplicación.",
    source: "Examen Oficial FNMT 2025 (Pregunta 33)"
  },
  {
    question: "En los formatos ISO/DIN, se toleran desviaciones en las medidas:",
    options: [
      "de ±1 mm para medidas de hasta 150 mm, de ±2,5 mm para medidas de hasta 600 mm y de ±3.5 mm para medidas superiores.",
      "de ±1,5 mm para medidas de hasta 150 mm, de ±2 mm para medidas de hasta 500 mm y de +3 mm para superiores.",
      "de ±1,5 mm para medidas de hasta 150 mm, de ±2 mm para medidas de hasta 600 mm y de +3 mm para medidas superiores."
    ],
    correct: 2,
    explanation: "Escala oficial de tolerancias dimensionales ISO/DIN para corte y acabado.",
    source: "Examen Oficial FNMT 2025 (Pregunta 34)"
  },
  {
    question: "En cuchillas normales el inserto es.....",
    options: ["de acero para herramientas con contenido en carbono estándar.", "de acero rápido altamente aleado con un 18% de contenido en wolframio.", "es de metal duro con aleación de widia."],
    correct: 1,
    explanation: "Las cuchillas de acero rápido estándar emplean aleación HSS con un 18% de Wolframio/Tungsteno.",
    source: "Examen Oficial FNMT 2025 (Pregunta 35)"
  },
  {
    question: "El objetivo que buscamos cuando aplicamos el método de corte desde el centro es:",
    options: ["Evitar los desbarbes inútiles, ahorrando tiempo.", "Evitar las tensiones entre las fibras internas y externas y viceversa.", "Solventar los posibles desequilibrios de grosor entre el centro y los bordes de la posteta."],
    correct: 2,
    explanation: "Se busca nivelar las diferencias de abombamiento o volumen central de la pila durante el corte.",
    source: "Examen Oficial FNMT 2025 (Pregunta 36)"
  },
  {
    question: "¿Qué son las cruces de ajuste?",
    options: ["Son las marcas que nos permiten ajustar el corte", "Son las marcas donde se comprueba la coincidencia entre colores y/o entre anverso y reverso", "Son las marcas que nos indican si está bien resmado el papel en rotativas"],
    correct: 1,
    explanation: "Marcas impresas periféricas empleadas para verificar el registro exacto entre pasadas de color y caras del pliego.",
    source: "Examen Oficial FNMT 2025 (Pregunta 37)"
  },
  {
    question: "En los tejuelos de tablero que acompañan al trabajo, entre otras, se puede encontrar las siguientes informaciones:",
    options: ["Taller, labor, orden de fabricación, nota no, resmas, lote papel", "Taller, labor, orden de fabricación, del nº... al nº, defectuosos, el nº de tablero", "Labor, orden de fabricación, nota nº, tablero nº lote de papel"],
    correct: 1,
    explanation: "Campos de identificación y trazabilidad del tejuelo oficial que acompaña las pilas en tablero.",
    source: "Examen Oficial FNMT 2025 (Pregunta 38)"
  },
  {
    question: "Atendiendo a tabla de presiones publicada en el manual del curso de oficial de guillotinero. ¿Cuál es el nivel de presión para una posteta de altura media que ocupa más de dos tercios del ancho de corte, de papel cromo estucado?",
    options: ["3000-4000 daN", "3000-4000 kN", "3500-4000 daN"],
    correct: 0,
    explanation: "Ajuste hidráulico tabulado para estucados cromo en pilas de gran ancho.",
    source: "Examen Oficial FNMT 2025 (Pregunta 39)"
  },
  {
    question: "Según se cita en el manual de oficial de guillotinero, si la cuchilla no tiene filo, hay que cambiarla. No hacer esto conlleva riesgo de grandes diferencias de corte. Al cortar un papel cromo estucado de aproximadamente 1 metro de ancho y 90g, podemos decir respecto a la carga que sufre la máquina que:",
    options: [
      "al usar una cuchilla bien afilada se origina una carga total de aproximadamente una tonelada. Si la cuchilla no tiene filo, se eleva en más del triple esta fuerza que se logra sin más con el accionamiento de la cuchilla.",
      "al usar una cuchilla bien afilada se origina una carga total de aproximadamente 1,5 toneladas. Si la cuchilla no tiene filo, se eleva en más de 4,5 veces esta fuerza que se logra sin más con el accionamiento de la cuchilla.",
      "Al usar una cuchilla bien afilada se origina una carga total de aproximadamente una tonelada. Si la cuchilla no tiene filo, se eleva en más de dos veces esta fuerza que se logra sin más con el accionamiento de la cuchilla."
    ],
    correct: 0,
    explanation: "El desgaste del filo multiplica por más de tres la resistencia mecánica al corte pasando de 1 tonelada a más de 3 toneladas de esfuerzo.",
    source: "Examen Oficial FNMT 2025 (Pregunta 40)"
  },
  {
    question: "Respecto al-Ajuste del tiempo de prensado prolongado antes del corte- es correcto decir:",
    options: [
      "Con un género de corte poco voluminoso puede ser ventajoso seleccionar un tiempo de prensado prolongado antes del corte. Ajuste del tiempo de prensado en el menú -Parámetros de la máquina",
      "Con un género de corte voluminoso puede ser ventajoso seleccionar un tiempo de prensado prolongado antes del corte. Ajuste del tiempo de prensado en el menú - Parámetros de la máquina",
      "Con un género de corte voluminoso puede ser ventajoso seleccionar un tiempo de prensado corto antes del corte. Ajuste del tiempo de prensado en el menú -Parámetros de la máquina"
    ],
    correct: 1,
    explanation: "En pilas esponjosas o de gran volumen es indispensable dar tiempo al pisón para evacuar la bolsa de aire antes de bajar la cuchilla.",
    source: "Examen Oficial FNMT 2025 (Pregunta 41)"
  },
  {
    question: "Según el manual curso de oficial guillotinero, la escuadra giratoria sirve para la corrección por motor del ángulo de la escuadra. Esto permite torcer la línea de corte. Si un programa tiene la función escuadra giratoria en un paso... ¿qué ocurre al realizar el corte?",
    options: [
      "Se pregunta al operario si desea guardar la modificación realizada, para posteriores cortes.",
      "El mando de la máquina reconoce automáticamente la modificación realizada y corrige el programa de manera correspondiente",
      "La escuadra se mantiene con el giro efectuado durante el funcionamiento automático del resto del programa, aunque no esté presente en los demás pasos la función de escuadra giratoria."
    ],
    correct: 2,
    explanation: "La inclinación introducida en la escuadra permanece para los pasos subsecuentes salvo reprogramación expresa.",
    source: "Examen Oficial FNMT 2025 (Pregunta 42)"
  },
  {
    question: "Según se describe en el manual de la guillotina, ¿qué es la guía del operador?",
    options: [
      "Son las indicaciones mostradas en el display de la máquina sobre funciones disponibles. Además, se le muestra actividades posibles, información sobre actividades o teclas que podría usar.",
      "Son las indicaciones mostradas en el display de la máquina sobre el uso de la función actual. Además, se le muestra el estado de funcionamiento, información sobre actividades posibles o teclas que podría usar.",
      "Son las indicaciones mostradas en el display sobre el estado actual de la máquina. Además, se le muestra información sobre actividades y botones disponibles"
    ],
    correct: 1,
    explanation: "Sistema de ayuda interactivo en pantalla que sugiere los siguientes pasos u operaciones al usuario.",
    source: "Examen Oficial FNMT 2025 (Pregunta 43)"
  },
  {
    question: "Qué significa el siguiente icono? (AutoTrim)",
    options: ["Abrir la mesa de Autotrim", "Cerrar la mesa de Autotrim", "Mesa de Autotrim"],
    correct: 0,
    explanation: "Pictograma para la apertura neumática del segmento de mesa frontal en el sistema AutoTrim.",
    source: "Examen Oficial FNMT 2025 (Pregunta 44)"
  },
  {
    question: "Para realizar la Corrección de una introducción errónea, ¿cómo se debe proceder?",
    options: [
      "Si la corrección es después del almacenamiento en memoria (la medida teórica continúa en el campo de introducción). 1. Accionar la tecla C < La medida teórica del campo de introducción se borra.> y 2. Introducir la medida/comentarios correctos Si la corrección es antes del almacenamiento en memoria (La medida teórica ya está en el campo de datos de programa) 1. Seleccionar el número de pasos 2. Accionar la tecla táctil Procesar Conectó. + Corregir 3. Introducir la medida/comentario correctos 4. Accionar la tecla Entre o accionar la tecla táctil Liberar función",
      "Si la corrección es antes del almacenamiento en memoria (la medida teórica continúa en el campo de introducción). 1. Accionar la tecla C < La medida teórica del campo de introducción se borra.> y 2. Introducir la medida/comentarios correctos Si la corrección es después del almacenamiento en memoria (La medida teórica ya está en el campo de datos de programa) 1. Accionar la tecla táctil Procesar Conect. + Corregir 2. Seleccionar el número de pasos 3. Introducir la medida/comentario correctos 4. Accionar la tecla Enter",
      "Si la corrección es antes del almacenamiento en memoria (la medida teórica continúa en el campo de introducción). 1. Accionar la tecla C < La medida teórica del campo de introducción se borra.> y 2. Introducir la medida/comentarios correctos Si la corrección es después del almacenamiento en memoria (La medida teórica ya está en el campo de datos de programa) 1. Seleccionar el número de pasos 2. Accionar la tecla táctil Procesar Conect. + Corregir 3. Introducir la medida/comentario correctos 4. Accionar la tecla Entre o accionar la tecla táctil Liberar función"
    ],
    correct: 2,
    explanation: "Procedimiento correcto diferenciando si el dato está aún en buffer (tecla C) o guardado en programa (Procesar Conect. + Corregir).",
    source: "Examen Oficial FNMT 2025 (Pregunta 45)"
  },
  {
    question: "En el tejuelo de tablero de una nota que conste de dos o más tableros....",
    options: [
      "Se indicará desde el efecto con la numeración más baja al efecto con la numeración más baja del cuadrante más bajo del pliego.",
      "Se indicará desde el efecto con la numeración más baja al efecto con la numeración más alta del cuadrante más bajo del pliego.",
      "Se indicará desde el efecto con la numeración más baja al efecto con la numeración más alta del cuadrante más alto del pliego."
    ],
    correct: 1,
    explanation: "Regla de consignación numérica en tejuelos de notas compuestas por múltiples tableros.",
    source: "Examen Oficial FNMT 2025 (Pregunta 46)"
  },
  {
    question: "¿Cuándo se conecta el aire automáticamente?",
    options: [
      "Cuando con escuadra automática conectada ésta retroceda y/o en los pasos donde esté programada la entrada de aire.",
      "Cuando la escuadra retroceda y/o en los pasos donde esté programada la entrada de aire.",
      "Cuando con escuadra automática conectada ésta avance."
    ],
    correct: 0,
    explanation: "El colchón de aire se activa en retrocesos de escuadra automática o pasos programados.",
    source: "Examen Oficial FNMT 2025 (Pregunta 47)"
  },
  {
    question: "¿Cuándo se recomienda el corte angular?",
    options: [
      "Para realizar la inversión del papel el cual tiene que ser angular y tener dimensiones exactas.",
      "cuando el papel no impreso es claramente angular y/o cuando en el procesado posterior dos lados que están uno junto al otro precisan formar un ángulo derecho (90 grados).",
      "cuando el papel no impreso no es claramente angular y/o cuando en el procesado posterior dos lados que están uno junto al otro precisan formar un ángulo derecho (90 grados)."
    ],
    correct: 2,
    explanation: "Indicado para pliegos brutos sin escuadra perfecta para garantizar la perpendicularidad a 90° de las aristas.",
    source: "Examen Oficial FNMT 2025 (Pregunta 48)"
  },
  {
    question: "¿Para qué sirve la escuadra giratoria?",
    options: [
      "Para realizar cortes en diagonal en determinados trabajos.",
      "Para girar la posteta y realizar los cortes transversales.",
      "Para compensar la inexactitud del paralelo de la impresión con respecto al lado de aplicación."
    ],
    correct: 2,
    explanation: "Corrige desviaciones angulares en la impresión alineando el corte con la imagen.",
    source: "Examen Oficial FNMT 2025 (Pregunta 49)"
  },
  {
    question: "Ante un material que se desliza mal cual es el mejor lado a utilizar suponiendo que el movimiento de la cuchilla al cortar es de izquierda a derecha?",
    options: [
      "A la izquierda. Si se cortara a la derecha, además de las fuerzas por el propio desplazamiento de la cuchilla se añade el atasco contra la regla lateral.",
      "Es indiferente, en cualquier lado tendremos fuerzas por el desplazamiento de la cuchilla.",
      "A la derecha. Si se cortara a la izquierda, además de las fuerzas por el propio desplazamiento de la cuchilla se añade el atasco contra la regla lateral."
    ],
    correct: 0,
    explanation: "Arrimar el material a la izquierda evita la fuerza de aprisionamiento contra la guía lateral derecha causada por la tracción del corte.",
    source: "Examen Oficial FNMT 2025 (Pregunta 50)"
  },
  {
    question: "Nivel de presión para una posteta de altura media (dos tercios del ancho de corte) de celofán",
    options: ["3000-4500", "3000-4000", "2500-3000"],
    correct: 2,
    explanation: "Valor de prensado recomendado de 2.500 a 3.000 daN para celofán.",
    source: "Examen Oficial FNMT 2025 (Pregunta 51)"
  },
  {
    question: "Nivel de presión para una posteta de altura media (dos tercios del ancho de corte) de planchas litograficas",
    options: ["3000 chapa de protección", "3000", "4500 chapa de protección"],
    correct: 0,
    explanation: "Ajuste a 3.000 daN interponiendo obligatoriamente la chapa protectora del pisón.",
    source: "Examen Oficial FNMT 2025 (Pregunta 52)"
  },
  {
    question: "Si deseamos aumentar el tiempo de prensado en un paso concreto de un programa, deberemos ajustarlo en:",
    options: ["Parámetros de paso.", "Ajustes de programa.", "Parámetros de máquina."],
    correct: 0,
    explanation: "Se modifica de manera individualizada dentro de los Parámetros de paso del ciclo.",
    source: "Examen Oficial FNMT 2025 (Pregunta 53)"
  },
  {
    question: "Con el papel de impresión de libros, al cortar con una cuchilla sin filo, el factor de la carga se incrementa...",
    options: [
      "pasa de una tonelada de la cuchilla afilada a aprox. 4,5 toneladas con una cuchilla sin filo",
      "pasa de una tonelada de la cuchilla afilada a aprox. 2 toneladas con una cuchilla sin filo.",
      "pasa de una tonelada de la cuchilla afilada a aprox. 3,5 toneladas con una cuchilla sin filo."
    ],
    correct: 0,
    explanation: "La resistencia al corte en papel offset/libro aumenta hasta unas 4,5 toneladas cuando la cuchilla pierde el filo.",
    source: "Examen Oficial FNMT 2025 (Pregunta 54)"
  },
  {
    question: "¿Sobre qué campos se aplica la normalización?",
    options: [
      "Productos, Maquinas, Gestión Medioambiental, Gestión de riesgos en el trabajo, Datos.",
      "Materiales, Productos, Maquinas, Gestion medioambiental, Gestion de riesgos en el trabajo, Datos.",
      "Materiales, Productos, Maquinas, Gestion medioambiental, Gestion deriesgos en el trabajo, Datos, Residuos."
    ],
    correct: 2,
    explanation: "Relación de las 7 áreas de aplicación de las normas técnicas en la industria gráfica.",
    source: "Examen Oficial FNMT 2025 (Pregunta 55)"
  },
  {
    question: "¿Qué significa el siguiente pictograma?",
    options: ["Sujetador activo", "Sujetador arriba", "Sujetador reposo/pasivo"],
    correct: 2,
    explanation: "Símbolo gráfico indicador de la posición pasiva o de reposo del sujetador.",
    source: "Examen Oficial FNMT 2025 (Pregunta 56)"
  },
  {
    question: "¿Para qué empleamos las plantillas de calidad?",
    options: [
      "Para comprobar las dimensiones del efecto, los ajustes de anverso y reverso, situación de tacas y escuadrado",
      "Para comprobar las dimensiones del efecto, ajustes de numeración y escuadrado",
      "Para comprobar las dimensiones del efecto, así como sus tolerancias"
    ],
    correct: 0,
    explanation: "Verificación tridimensional y óptica de cotas, tacas y coincidencia entre caras.",
    source: "Examen Oficial FNMT 2025 (Pregunta 57)"
  },
  {
    question: "¿Qué significa el siguiente pictograma?",
    options: ["Tecla Corrección", "Lista de corrección de espesor de cuchilla", "Cambio de cuchilla"],
    correct: 1,
    explanation: "Identifica el acceso a la tabla de valores de corrección por grosor de la cuchilla instalada.",
    source: "Examen Oficial FNMT 2025 (Pregunta 58)"
  },
  {
    question: "En una guillotina XT, la selección de un programa libre, se realiza..",
    options: [
      "Accionando la tecla táctil Selección programa, El siguiente programa libre del segmento actual de memoria se indica en color verde ó accionando la tecla táctil Sinopsis programas, en el campo de entrada se indica el siguiente programa libre del segmento actual de memoria.",
      "Accionando la tecla táctil Procesar Conect. + Selección programa, El siguiente programa libre del segmento actual de memoria se indica en color verde",
      "Accionando la tecla táctil Procesar Conect. + Selección programa, El siguiente programa libre del segmento actual de memoria se indica en color verde ó accionando la tecla táctil Sinopsis programas, en el campo de entrada se indica el siguiente programa libre del segmento actual de memoria."
    ],
    correct: 2,
    explanation: "Procedimiento de selección de memoria libre mediante Procesar Conect. + Selección programa o mediante la pantalla de Sinopsis de programas.",
    source: "Examen Oficial FNMT 2025 (Pregunta 59)"
  },
  {
    question: "En formatos de hasta 600mm. En las normas DIN/ISO. ¿Cuál será la tolerancia de la desviación de las medidas?",
    options: ["+ 2mm.", "+ 3mm.", "+ 1,5mm."],
    correct: 2,
    explanation: "Margen de tolerancia dimensional normalizado a ± 1,5 mm.",
    source: "Examen Oficial FNMT 2025 (Pregunta 60)"
  },
  {
    question: "¿Para qué sirven las marcas de registro?",
    options: [
      "Para comprobar que la impresión se ha registrado correctamente a tacón, así como observar el correcto apilado de la posteta.",
      "Para ajustar los diferentes colores que componen el trabajo, así como anverso con reverso.",
      "Para ajustar los colores, la entonación y el brillo de la impresión."
    ],
    correct: 0,
    explanation: "Verificación de la correcta alineación respecto a la escuadra/tacón de la impresora y del apilado.",
    source: "Examen Oficial FNMT 2025 (Pregunta 61)"
  },
  {
    question: "¿Qué norma ha sido adoptada por la mayoría de los organismos nacionales de normalización europeos en relación a los formatos de papel, que fue la base de una norma internacional?",
    options: ["DIN 477", "DIN 476", "DIN 216"],
    correct: 1,
    explanation: "Norma alemana DIN 476 precursora del estándar ISO 216.",
    source: "Examen Oficial FNMT 2025 (Pregunta 62)"
  },
  {
    question: "¿Qué se deberá hacer en el caso de no haber sido cortadas las dos tiras de papel que se colocan después de un cambio de cuchilla para comprobar si ésta remata?",
    options: [
      "Mediante la llave de ajuste, aflojar la retención del perno excéntrico, girar la excéntrica de ajuste de la cuchilla en el sentido de las agujas del reloj y apretar de nuevo la retención del perno",
      "Mediante la llave de ajuste, bajar la cuchilla sobre la regla de corte usando el elevador de cuchilla, después girar las levas de apoyo (primero izquierda y luego derecha) en sentido de las agujas de reloj hasta que hagan tope",
      "Mediante la llave de ajuste, girar levas de apoyo y perno excéntrico en sentido contrario a las agujas de reloj hasta llegar al tope, después apretar el tornillo de seguridad del perno"
    ],
    correct: 0,
    explanation: "Procedimiento de ajuste mecánico del perno excéntrico para corregir la profundidad de corte tras el cambio de cuchilla.",
    source: "Examen Oficial FNMT 2025 (Pregunta 63)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿Cuál de las siguientes es la primera fase en la producción?",
    options: ["Preimpresión", "Impresión.", "Corte y empaquetado."],
    correct: 0,
    explanation: "La preimpresión es la fase inicial donde se preparan y procesan los archivos antes de la forma impresora.",
    source: "Examen Oficial FNMT 2025 (Pregunta 64)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿Cuáles de los siguientes procesos pertenecen a la fase de preimpresión?",
    options: [
      "Ripeado, prueba de color, preparación de materiales, montaje de página.",
      "Filmación CTF / CTP, ajuste de las diferentes máquinas del proceso.",
      "Composición de texto, digitalización de imágenes."
    ],
    correct: 2,
    explanation: "Composición tipográfica y captura/digitalización de originales analógicos.",
    source: "Examen Oficial FNMT 2025 (Pregunta 65)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, para la fabricación de papel, ¿qué materias primas podemos utilizar?",
    options: [
      "Materias resinosas como el pino, frondosas como el eucalipto, fibras no madereras como el algodón, de origen animal como la lana y artificiales/sintéticas como el nylon.",
      "Materias resinosas como el eucalipto, frondosas como el pino, fibras no madereras como el algodón, de origen animal como la lana y artificiales/sintéticas como el nylon.",
      "Materiales de origen vegetal ricos en celulosa, materiales de origen animal como el cuero y la lana, incluso materiales sintéticos polimórficos y electrostáticos."
    ],
    correct: 0,
    explanation: "Resumen de las fuentes de fibra vegetal, sintética y animal aptas para la pasta papelera.",
    source: "Examen Oficial FNMT 2025 (Pregunta 66)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿qué le confiere al papel las cargas y pigmentos?",
    options: [
      "Disminuyen la porosidad, aumentan la absorción y aumentan la blancura.",
      "Dan mayor lisura superficial, aumentan la opacidad, aumentan el brillo, disminuye el espesor a igualdad de gramaje.",
      "Disminuyen la opacidad, aumenta la porosidad y aumenta el espesor."
    ],
    correct: 1,
    explanation: "Aportes físicos indispensables de los aditivos minerales de carga.",
    source: "Examen Oficial FNMT 2025 (Pregunta 67)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿qué componente provoca el amarilleamiento en la fabricación de papel?",
    options: ["La hemicelulosa.", "La celulosa", "La lignina."],
    correct: 2,
    explanation: "La lignina se oxida fotoquímicamente con la luz provocando la pérdida de blancura y el tono amarillento.",
    source: "Examen Oficial FNMT 2025 (Pregunta 68)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿qué tipos de pastas podemos utilizar en la fabricación de papel?",
    options: [
      "Pastas mecánicas: clásica, de astillas, termomecánica. Pastas químicas: se elimina la lignina. Pastas recuperadas.",
      "Pastas mecánicas: clásica, de astillas, termomecánica. Pastas químicas: se eliminan las fibras. Pastas recuperadas.",
      "Pastas mecánicas: clásica, de astillas, termomecánica. Pastas químicas: se elimina la lignina. Pastas sintéticas."
    ],
    correct: 0,
    explanation: "Clasificación general de los tres grupos principales de pastas papeleras.",
    source: "Examen Oficial FNMT 2025 (Pregunta 69)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, en la fabricación de papel, ¿cómo podemos llevar a cabo el blanqueo de pastas?",
    options: [
      "Blanqueo con O₂, O₃ O₄ H₂O.",
      "Blanqueo con Cl₂., ClO₂, O₂",
      "Blanqueo convencional, con ditionita, con ácido sulfhídrico."
    ],
    correct: 1,
    explanation: "Reactivos químicos industriales empleados para el blanqueo oxidante de la pulpa.",
    source: "Examen Oficial FNMT 2025 (Pregunta 70)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, en la fabricación de papel, ¿qué procesos tienen lugar en el prensado?",
    options: [
      "Se elimina la humedad: 20%. Las fibras se enlazan unas con otras debido a la presión. Aumenta la densidad. Disminuye el poder absorbente.",
      "Se aplican ligantes. Disminuye la porosidad. Aumenta la densidad.",
      "Aumenta la permeabilidad al aire. Disminuye el poder absorbente. Se elimina la humedad 80%."
    ],
    correct: 0,
    explanation: "Consecuencias físicas de la sección de prensas húmedas en la máquina de papel.",
    source: "Examen Oficial FNMT 2025 (Pregunta 71)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿qué usos se les suele dar a los papeles estucados de bajo gramaje?",
    options: [
      "Libros de enseñanza, facturas, libros de instrucciones.",
      "Revistas, mailings, folletos publicitarios...",
      "Facturas, revistas fascículos..."
    ],
    correct: 1,
    explanation: "Aplicaciones comerciales típicas del papel estucado LWC (Low Weight Coated).",
    source: "Examen Oficial FNMT 2025 (Pregunta 72)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿qué características tiene el papel reciclado?",
    options: [
      "La cantidad de fibras secundarias utilizadas supera el 65%. Habitualmente se utiliza en publicaciones periódicas, libros, fotocopias, material de archivo...",
      "La cantidad de fibras secundarias utilizadas supera el 50%. Habitualmente se utiliza en publicaciones periódicas, libros, catalogos, material de archivo...",
      "La cantidad de fibras secundarias utilizadas supera el 75%. Habitualmente se utiliza en publicaciones periódicas, libros, listados de ordenador, material de archivo..."
    ],
    correct: 0,
    explanation: "Un papel reciclado debe contener al menos un 65% de pasta secundaria procedente de recuperado.",
    source: "Examen Oficial FNMT 2025 (Pregunta 73)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿qué caracteriza a un papel autoadhesivo?",
    options: [
      "Tiene una o ambas caras con un adhesivo formado por resina o cauchos sintéticos. Se utiliza en etiquetas, cinta enrollada...",
      "Tiene una cara con un adhesivo formado por resina o cauchos sintéticos. Se utiliza en etiquetas, cinta enrollada...",
      "Tiene ambas caras con un adhesivo formado por resina o cauchos sintéticos. Se utiliza en etiquetas, planos, cinta enrollada..."
    ],
    correct: 1,
    explanation: "Estructura del soporte autoadhesivo con una cara recubierta por adhesivo sensibles a la presión.",
    source: "Examen Oficial FNMT 2025 (Pregunta 74)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿qué dimensiones tiene un DIN A-8?",
    options: ["52 mm x 74 mm.", "37 mm x 52 mm.", "32 mm x 57 mm."],
    correct: 1,
    explanation: "El formato DIN A8 mide exactamente 37 × 52 mm (obtenido dividiendo por la mitad el DIN A7 de 52 × 74 mm).",
    source: "Examen Oficial FNMT 2025 (Pregunta 75)"
  },
  {
    question: "Si disponemos de 1 resma, 7 balas, 12 manos y 3 cuadernillos de papel, ¿de cuántos pliegos disponemos?",
    options: ["4135 pliegos.", "38510 pliegos.", "35815 pliegos."],
    correct: 2,
    explanation: "Cálculo: 1 resma (500) + 7 balas (35.000) + 12 manos (300) + 3 cuadernillos (15) = 35.815 pliegos.",
    source: "Examen Oficial FNMT 2025 (Pregunta 76)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿qué es la luminosidad en un papel?",
    options: [
      "Porcentaje de reflectancia a una longitud de onda de 457 nm.",
      "Capacidad de ocultar lo que hay debajo del papel, es decir, capacidad de no dejar pasar luz a su través.",
      "Reflexión de un haz de luz con el mismo ángulo con el que ha incidido sobre el soporte."
    ],
    correct: 0,
    explanation: "Medida óptica del factor de reflectancia azul en la longitud de onda normalizada de 457 nm.",
    source: "Examen Oficial FNMT 2025 (Pregunta 77)"
  },
  {
    question: "Según el manual básico de Artes Gráficas y atendiendo al brillo, ¿cómo se clasifican los soportes?",
    options: [
      "Papeles mate 5%-25% de brillo. Papeles satinados 25%-40% de brillo. Papeles brillantes 40%-80% de brillo.",
      "Papeles mate 5%-20% de brillo. Papeles satinados 20%-40% de brillo. Papeles brillantes 40%-80% de brillo.",
      "Papeles mate 5%-20% de brillo. Papeles satinados 20%-40% de brillo. Papeles brillantes 40%-100% de brillo."
    ],
    correct: 1,
    explanation: "Escala porcentual de brillo especular para papel mate (5-20%), satinado (20-40%) y brillante (40-80%).",
    source: "Examen Oficial FNMT 2025 (Pregunta 78)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, en un papel, ¿qué relación tienen la densidad aparente y el volumen especifico?",
    options: [
      "Está directamente relacionada. A mayor densidad aparente, mayor volumen específico.",
      "Está inversamente relacionada. A menor densidad aparente, menor volumen específico.",
      "Está inversamente relacionada. A mayor densidad aparente, menor volumen específico."
    ],
    correct: 2,
    explanation: "Son magnitudes inversamente proporcionales: a mayor densidad de la masa, menor volumen específico (mano).",
    source: "Examen Oficial FNMT 2025 (Pregunta 79)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿cómo influye la dirección de fibra en las propiedades de un papel?",
    options: [
      "Se rasga más fácil en sentido de fibra. Tiene mayor rigidez en sentido de fibra. Tiene mayor resistencia a la tensión en sentido de fibra. Mayor estabilidad dimensional en sentido de fibra. Mayor tendencia a curvarse en contrafibra. En los libros, la dirección de fibra debe ser paralela al lomo.",
      "Se rasga más fácil en sentido de fibra. Tiene mayor rigidez a contrafibra. Tiene mayor resistencia a la tensión perpendicular a la fibra. Mayor estabilidad dimensional en sentido de fibra. Mayor tendencia a curvarse a contrafibra. En los libros, la dirección de fibra debe ser perpendicular al lomo.",
      "Se rasga más fácil en sentido de fibra. Tiene mayor rigidez en sentido de fibra. Tiene menor resistencia a la tensión en sentido de fibra. Menor estabilidad dimensional en sentido de fibra. Mayor tendencia a curvarse en contrafibra. En los libros, la dirección de fibra debe ser paralela al lomo."
    ],
    correct: 0,
    explanation: "Resumen de las anisotropías físicas del papel provocadas por la orientación de la fibra.",
    source: "Examen Oficial FNMT 2025 (Pregunta 80)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, las fibras de los soportes papeleros...",
    options: [
      "Son químicamente neutras. La acidez o basicidad es debida a la acción del paso del tiempo sobre los componentes añadidos en la fabricación del soporte papelero.",
      "Son químicamente neutras. La acidez o basicidad es debida a los componentes añadidos en el proceso de fabricación.",
      "Son químicamente acidas. La neutralidad se consigue añadiendo componentes en el proceso de fabricación."
    ],
    correct: 1,
    explanation: "La celulosa pura es neutra; el pH final deriva de los encolantes y aditivos introducidos.",
    source: "Examen Oficial FNMT 2025 (Pregunta 81)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿qué aportan las resinas a las tintas?",
    options: [
      "Protegen y fijan el color a la plancha, aumentan la viscosidad y le dan cuerpo a la tinta.",
      "Protegen y fijan el pigmento al soporte, dan brillo a las tintas y son responsables de las propiedades del barniz.",
      "Aumentan el tack en máquina, aportan color y definición a la tinta."
    ],
    correct: 1,
    explanation: "Las resinas actúan como ligante fijando el pigmento al papel y regulando el brillo del impreso.",
    source: "Examen Oficial FNMT 2025 (Pregunta 82)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, atendiendo a las características ópticas, ¿cómo podemos clasificar las tintas?",
    options: [
      "Borrables, térmicas, metálicas, negras...",
      "Opacas o cubrientes, trasparentes, rígidas...",
      "Luminiscentes, semicubrientes, apagadas..."
    ],
    correct: 1,
    explanation: "Clasificación óptica según su grado de opacidad/transparencia.",
    source: "Examen Oficial FNMT 2025 (Pregunta 83)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿cómo podemos distinguir un impreso realizado en huecograbado?",
    options: [
      "Contiene: caracteres perfectamente definidos, puntos de diferente gradación de tinta y punteado blanco en zonas de masa.",
      "Contiene: capa de tinta irregular y tinta bien seca desde poco tiempo después a la impresión.",
      "Contiene: bordes de los caracteres en dientes de sierra, puntos de diferente gradación de tinta y punteado blanco en zonas de masa."
    ],
    correct: 2,
    explanation: "El grabado mediante tramado helicoidal/alvéolos genera el característico borde aserrado ('dientes de sierra') en las letras.",
    source: "Examen Oficial FNMT 2025 (Pregunta 84)"
  },
  {
    question: "Según el manual básico de Artes Gráficas, ¿cuál de las siguientes afirmaciones no es correcta?",
    options: [
      "Uno de los inconvenientes de los sistemas de impresión digital es el elevado coste para tiradas largas.",
      "La postimpresión abarca todos los procesos que se suceden posteriores a la impresión hasta obtener el producto terminado, salvo el proceso de encuadernación, proceso que ya pertenecería al finalizado del producto.",
      "La impresión offset se trata de un sistema de impresión planográfico, basado en la repulsión entre el agua, la tinta y las características de una superficie que aceptará a ambas."
    ],
    correct: 1,
    explanation: "Es FALSO afirmar que la encuadernación no pertenece a la postimpresión; la encuadernación forma parte fundamental de la postimpresión.",
    source: "Examen Oficial FNMT 2025 (Pregunta 85)"
  },
  {
    question: "Una señal de color rojo en el puesto de trabajo indicará:",
    options: ["Prohibición.", "Advertencia (Atención, precaución, zona de riesgo)", "Obligación"],
    correct: 0,
    explanation: "Símbolos de seguridad: el color rojo indica prohibición, parada o material de incendios.",
    source: "Examen Oficial FNMT 2025 (Pregunta 86)"
  },
  {
    question: "A la hora de elegir un equipo de protección personal se tendrá en cuenta:",
    options: ["Que el equipo sea lo más vistoso posible.", "El grado de protección que requiere la situación de riesgo.", "La capacidad del trabajador de adaptarse al propio equipo."],
    correct: 1,
    explanation: "Criterio técnico de selección de EPI basado en el nivel de riesgo evaluado en el puesto.",
    source: "Examen Oficial FNMT 2025 (Pregunta 87)"
  },
  {
    question: "¿Qué son los medios integrales de protección?",
    options: [
      "Aquellos equipos de protección personal que protegen frente a riesgos que no actúan sobre partes concretas del cuerpo humano.",
      "Los que protegen al trabajador frente a ciertas operaciones con riesgo de caída a distinto nivel.",
      "Son los equipos de protección individual que protegen al trabajador frente a ciertos riesgos del puesto de trabajo."
    ],
    correct: 0,
    explanation: "Protegen al operario frente a riesgos globales no localizados sobre un órgano específico.",
    source: "Examen Oficial FNMT 2025 (Pregunta 88)"
  },
  {
    question: "El número de Delegados de Prevención que forman parte del Comité de Seguridad y Salud en el Centro de trabajo de Madrid es de:",
    options: ["4 miembros", "6 miembros", "8 miembros"],
    correct: 1,
    explanation: "Asignación de 6 delegados de prevención para la plantilla del centro de trabajo de Madrid.",
    source: "Examen Oficial FNMT 2025 (Pregunta 89)"
  },
  {
    question: "Según la normativa vigente en Prevención de Riesgos Laborales, deberán usar obligatoriamente protectores auditivos aquellos trabajadores expuestos a valores de exposición superiores a:",
    options: ["75dB", "80dB", "85dB"],
    correct: 2,
    explanation: "Uso obligatorio de protección auditiva a partir de 85 dB(A) de exposición continuada.",
    source: "Examen Oficial FNMT 2025 (Pregunta 90)"
  },
  {
    question: "Los reconocimientos médicos realizados a los trabajadores de forma periódica para vigilar su estado de salud en función de los riesgos de su puesto de trabajo son:",
    options: [
      "Obligatorios.",
      "Voluntarios, salvo algunos casos previo informe de los representantes de los trabajadores en materia de prevención.",
      "Depende del tipo de contrato."
    ],
    correct: 1,
    explanation: "Principio de voluntariedad en la vigilancia de la salud salvo supuestos excepcionales de la LPRL.",
    source: "Examen Oficial FNMT 2025 (Pregunta 91)"
  },
  {
    question: "En la F.N.M.T. ¿Quién facilita a los trabajadores lo equipos de protección individual?",
    options: ["Los técnicos de prevención.", "El servicio médico", "El jefe de unidad del trabajador."],
    correct: 2,
    explanation: "Suministro directo a cargo del Jefe de Unidad del empleado.",
    source: "Examen Oficial FNMT 2025 (Pregunta 92)"
  },
  {
    question: "La jornada anual máxima que figura en el XI Convenio Colectivo de FNMT-RCM es:",
    options: ["1547 horas", "2300 horas", "1875,5 horas"],
    correct: 0,
    explanation: "Jornada anual pactada en el XI Convenio de la FNMT fijada en 1.547 horas.",
    source: "Examen Oficial FNMT 2025 (Pregunta 93)"
  },
  {
    question: "Según el art. 13 del XI Convenio Colectivo de FNMT-RCM, el periodo de prueba para el personal operario será de:",
    options: ["Un mes.", "Dos meses.", "Quince días"],
    correct: 2,
    explanation: "Periodo de prueba de 15 días regulado para operarios en el convenio.",
    source: "Examen Oficial FNMT 2025 (Pregunta 94)"
  },
  {
    question: "Según el art. 6 del XI Convenio Colectivo de FNMT-RCM, el tiempo máximo de un periodo de experimentación de nuevas normas de organización y producción será de:",
    options: ["Diez semanas.", "Quince semanas.", "Dos meses."],
    correct: 0,
    explanation: "Plazo de experimentación fijado en 10 semanas máximo.",
    source: "Examen Oficial FNMT 2025 (Pregunta 95)"
  },
  {
    question: "Es obligatorio que el manual de la máquina esté disponible para su consulta por parte de los operarios de la máquina.",
    options: ["No", "Si", "Solo en caso de maquinaria compleja."],
    correct: 1,
    explanation: "Requisito legal de seguridad: el manual de instrucciones debe estar siempre accesible en el puesto de trabajo.",
    source: "Examen Oficial FNMT 2025 (Pregunta 96)"
  },
  {
    question: "El plan de igualdad de la FNMT-RCM tiene entre sus objetivos principales:",
    options: [
      "Que nadie sea discriminado por cuestiones políticas, de raza o de sexo.",
      "Realizar acciones formativas y de sensibilización sobre igualdad de trato y de oportunidades.",
      "La igualdad en un ámbito de promoción y de relaciones laborales y personales."
    ],
    correct: 1,
    explanation: "Objetivo prioritario del Plan de Igualdad centrado en la capacitación y sensibilización.",
    source: "Examen Oficial FNMT 2025 (Pregunta 97)"
  },
  {
    question: "I¿Qué organismo es el encargado de vigilar el cumplimiento de la normativa sobre prevención de riesgos laborales?",
    options: ["El Ministerio de Industria.", "La mutua de accidentes de trabajo", "La inspección de trabajo."],
    correct: 2,
    explanation: "Competencia de la Inspección de Trabajo y Seguridad Social.",
    source: "Examen Oficial FNMT 2025 (Pregunta 98)"
  },
  {
    question: "El trabajador que crea dañado su derecho a realizar superior categoría podrá solicitar la tutela del mismo al siguiente organismo:",
    options: ["A la sección sindical correspondiente.", "A la comisión paritaria.", "A la comisión de igualdad."],
    correct: 1,
    explanation: "Recurso ante la Comisión Paritaria del convenio colectivo.",
    source: "Examen Oficial FNMT 2025 (Pregunta 99)"
  },
  {
    question: "Entre las funciones del Comité de Seguridad y Salud estará:",
    options: [
      "Debatir la conveniencia de los equipos de protección individual de cada puesto de trabajo.",
      "Conocer y analizar los daños producidos en la salud o en la integridad física de los empleados para valorar sus causas y proponer las medidas oportunas.",
      "Participar en la elaboración de los programas de prevención de riesgos en la empresa."
    ],
    correct: 1,
    explanation: "Análisis sistemático de accidentes y daños a la salud para proponer medidas correctivas.",
    source: "Examen Oficial FNMT 2025 (Pregunta 100)"
  }
];





// --- EXAMEN 4: FNMT 2026 ---
/* ========================================================
   ESPACIO RESERVADO - EXAMEN FNMT 2026
   (Pega aquí las preguntas restantes cuando las tengas)
   ======================================================== */
// --- EXAMEN 4: FNMT 2026 (100 PREGUNTAS COMPLETAS) ---
const examFNMT2026 = [
  {
    question: "Según el manual oficial del puesto de trabajo, ¿Cuál es la función de las mesas igualadoras-vibradoras?",
    options: [
      "Estas mesas nos ayudan al igualado del material después del corte.",
      "Estas mesas nos ayudan al igualado y al transporte del material antes del corte.",
      "Estas mesas nos ayudan a la estabilización del material almacenado cerca de la guillotina."
    ],
    correct: 1,
    explanation: "Las mesas aireadoras/vibradoras permiten la alineación a taco y el desplazamiento de las postetas de papel antes del ciclo de corte.",
    source: "Examen Oficial FNMT 2026 (Pregunta 1)"
  },
  {
    question: "Según el manual oficial del puesto de trabajo, ¿qué características tienen las cuchillas de corte ultrarrápido?",
    options: [
      "La duración útil de la cuchilla es de tres a cinco veces superior al de una cuchilla normal con sesga de acero para herramientas.",
      "Se utilizan casi exclusivamente para el corte de PVC.",
      "La vida útil de la cuchilla se reduce considerablemente debido a su delicadeza."
    ],
    correct: 0,
    explanation: "Las cuchillas de acero rápido (HSS) prolongan la durabilidad del filo entre 3 y 5 veces respecto a las convencionales de acero al carbono.",
    source: "Examen Oficial FNMT 2026 (Pregunta 2)"
  },
  {
    question: "Según el manual oficial del puesto de trabajo, ¿qué conlleva cortar con una cuchilla sin filo?",
    options: [
      "El ruido en cada uno de los cortes se incrementa, con la consiguiente molestia para el operario. Pero no existe ningún otro perjuicio.",
      "Implica irremisiblemente el riesgo de grandes diferencias de corte. Además, la cuchilla sufre y eventualmente la máquina también.",
      "Es imposible cortar con una cuchilla sin filo. Las cuchillas sin filo solo se utilizan el plegado."
    ],
    correct: 1,
    explanation: "El desgaste del filo eleva la resistencia mecánica provocando desvíos dimensionales en el pliego y sobrecargas en la guillotina.",
    source: "Examen Oficial FNMT 2026 (Pregunta 3)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿cuál de las siguientes opciones es un tipo de plegado?",
    options: [
      "Plegado en zigzag doble.",
      "Plegado paralelo al borde",
      "Plegado en puerta doble."
    ],
    correct: 2,
    explanation: "El plegado en ventana o puerta doble es un esquema estándar de plegado en postimpresión.",
    source: "Examen Oficial FNMT 2026 (Pregunta 4)"
  },
  {
    question: "Según el manual básico de artes gráficas, para realizar un trabajo digital, ¿cuál sería el flujo de los trabajos a realizar?",
    options: [
      "Imposición, maquetación, CTP, insolación y revelado.",
      "Imposición, maquetación, CTP, impresión.",
      "Maquetación, imposición, CTP, impresión."
    ],
    correct: 2,
    explanation: "Secuencia lógica en preimpresión: maquetado de páginas, imposición del pliego, grabado CTP e impresión final.",
    source: "Examen Oficial FNMT 2026 (Pregunta 5)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿qué características principales tiene un trabajo impreso en huecograbado?",
    options: [
      "Lisura, compresibilidad y estabilidad dimensional.",
      "Planeidad, no desprende polvillo, microporosidad adecuada para un secado rápido de las tintas",
      "Cotes bajos, posibilidad de multitud de soportes y secado instantáneo."
    ],
    correct: 0,
    explanation: "Para transferir la tinta retenida en los alvéolos del cilindro se exigen soportes de máxima lisura, compresibilidad y estabilidad.",
    source: "Examen Oficial FNMT 2026 (Pregunta 6)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿cómo se mide la resistencia a la abrasión en los soportes papeleros?",
    options: [
      "Con un densitómetro.",
      "Con abrasímetros.",
      "Con un micrómetro."
    ],
    correct: 1,
    explanation: "Los abrasímetros cuantifican la pérdida de masa o fricción superficial sufrida por la muestra.",
    source: "Examen Oficial FNMT 2026 (Pregunta 7)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿qué es la resistencia a la tensión en un papel?",
    options: [
      "Esfuerzo que puede soportar un papel antes de su rotura.",
      "Numero de plegados dobles que puede soportar un papel antes de su rotura.",
      "Es la resistencia que presenta un soporte papelero antes de que se inicie su rasgado o su reventamiento cuando se encuentra sometido a un esfuerzo."
    ],
    correct: 0,
    explanation: "Fuerza máxima por unidad de ancho que aguanta la tira de papel sometida a tracción axial antes de fracturarse.",
    source: "Examen Oficial FNMT 2026 (Pregunta 8)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿qué puede suceder en caso de falta de planicidad en un papel?",
    options: [
      "Pilas de papel inestables y corte en guillotina irregular.",
      "Se produce blistering.",
      "Problemas de registro, problemas a la entrada en máquina, doble impresión y remosqueo."
    ],
    correct: 2,
    explanation: "Los ondulamientos o curvaturas del pliego alteran el registro de entrada en máquina y generan fallos de impresión.",
    source: "Examen Oficial FNMT 2026 (Pregunta 9)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿cómo se define el grado de blancura?",
    options: [
      "El factor de reflectancia difusa intrínseca determinado a una longitud de onda determinada (457 nanómetros).",
      "La facultad de un papel para repeler todas las longitudes de onda del espectro de la luz.",
      "La característica de un papel para evitar el amarillamiento."
    ],
    correct: 0,
    explanation: "Definición óptica normalizada del valor ISO de blancura espectral a 457 nm.",
    source: "Examen Oficial FNMT 2026 (Pregunta 10)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿cómo varía en un papel el índice de penetración o absorción?",
    options: [
      "Aumenta al aumentar el grado de refinado y el encolado superficial.",
      "Disminuye con el calandrado y el revestimiento superficial.",
      "Disminuye con la porosidad y el grado de refinado."
    ],
    correct: 1,
    explanation: "El satinado/calandrado y la barrera del estuco cierran los poros de la superficie disminuyendo la absorción de líquidos.",
    source: "Examen Oficial FNMT 2026 (Pregunta 11)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿qué valor de pH debe tener una disolución para ser neutra?",
    options: ["7", "0", "Menos de 0"],
    correct: 0,
    explanation: "El valor 7 representa el punto neutro en la escala logarítmica de pH.",
    source: "Examen Oficial FNMT 2026 (Pregunta 12)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿cómo influye la humedad relativa en un soporte papelero?",
    options: [
      "Al aumentar la humedad relativa el secado del impreso aumenta.",
      "Disminuye la resistencia a la tracción al aumentar la humedad relativa, aunque aumenta cuando ésta es muy alta.",
      "La resistencia al plegado disminuye mucho cuando la humedad relativa es relativamente alta."
    ],
    correct: 1,
    explanation: "La absorción hídrica flexibiliza las fibras mermando la resistencia mecánica a la tracción.",
    source: "Examen Oficial FNMT 2026 (Pregunta 13)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿sobre qué características del papel influye la porosidad?",
    options: [
      "Afecta a la densidad, la dimensión y el color.",
      "Afecta a la blancura, al sentido de fibra y al grosor del papel.",
      "Afecta a la absorbencia, la dureza y la compresibilidad."
    ],
    correct: 2,
    explanation: "Los huecos de aire estructurales determinan directamente el ritmo de penetración de tintas y la rigidez de la hoja.",
    source: "Examen Oficial FNMT 2026 (Pregunta 14)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿con qué está relacionado directamente el gramaje de un soporte papelero?",
    options: [
      "Porosidad, espesor y acabado.",
      "Humedad relativa y absoluta.",
      "Peso, blancura y aplanado."
    ],
    correct: 0,
    explanation: "El peso base (g/m²) se correlaciona intrínsecamente con el volumen, calibre y tratamiento superficial.",
    source: "Examen Oficial FNMT 2026 (Pregunta 15)"
  },
  {
    question: "Según el manual básico de artes gráficas, ¿qué características tiene el papel de pergamino?",
    options: [
      "Muy refinado e inestable dimensionalmente. Se utiliza en obras de lujo y cartas de prestigio.",
      "Recubierto por una cara con adhesivo formado por resina o cauchos sintéticos.",
      "Gramaje muy bajo. Se utiliza para envolver alimentos."
    ],
    correct: 0,
    explanation: "Su altísimo grado de refinación celulósica le aporta transparencia y un comportamiento inestable ante la humedad.",
    source: "Examen Oficial FNMT 2026 (Pregunta 16)"
  },
  {
    question: "Según el libro de materiales de producción artes gráficas, ¿qué tamaño tiene una cuartilla?",
    options: ["148,5 mm x 210 mm.", "160 mm x 210 mm.", "160 mm x 220 mm."],
    correct: 2,
    explanation: "El formato tradicional de la cuartilla comercial en España equivale a 160 × 220 mm.",
    source: "Examen Oficial FNMT 2026 (Pregunta 17)"
  },
  {
    question: "Según el libro de materiales de producción artes gráficas, ¿cómo podemos medir el sentido de fibra en un papel?",
    options: [
      "Al ser las fibras de tamaño microscópico tan solo podremos medir el sentido de fibra con un microscopio.",
      "Debemos rasgar el papel en direcciones perpendiculares. El perdil que resulte más recto, será perpendicular a la dirección de fibra.",
      "Rascar con una uña en direcciones perpendiculares. Cuando el sentido de fibra es perpendicular a la dirección rascada, se producen altos y valles."
    ],
    correct: 2,
    explanation: "Al presionar y rascar con la uña de forma perpendicular a la fibra, el papel se deforma formando pequeñas ondas.",
    source: "Examen Oficial FNMT 2026 (Pregunta 18)"
  },
  {
    question: "¿Cuál de estas respuestas es falsa, ¿Cómo se pueden blanquear las pastas de papel?",
    options: ["Blanqueo con dióxido de cloro", "Blanqueo con lignina", "Blanqueo con ditionita"],
    correct: 1,
    explanation: "La lignina es el componente responsable del amarilleamiento que se busca eliminar, no un reactivo de blanqueo.",
    source: "Examen Oficial FNMT 2026 (Pregunta 19)"
  },
  {
    question: "La variedad de papel Kraft, Kraft liner:",
    options: [
      "Es de fibra larga de pastas de importación",
      "Es de fibra corta de pastas de importación",
      "Es de fibra larga de pastas nacionales"
    ],
    correct: 0,
    explanation: "El Kraft liner de alta tenacidad se elabora con fibras largas de coníferas procedentes de pastas importadas.",
    source: "Examen Oficial FNMT 2026 (Pregunta 20)"
  },
  {
    question: "Un papel se considera ecológico cuando la cantidad de AOX es menor de:",
    options: ["0,2 kg./tn.", "0,1 kg./tn.", "0,3 kg./tn."],
    correct: 2,
    explanation: "Límite máximo de halógenos orgánicos absorbiles (AOX) fijado en 0,3 kg por tonelada de pasta producida.",
    source: "Examen Oficial FNMT 2026 (Pregunta 21)"
  },
  {
    question: "Cuáles son las dimensiones de un formato A8:",
    options: ["74x105mm", "52x74mm", "37x52mm"],
    correct: 2,
    explanation: "El estándar internacional ISO 216 asigna al formato DIN A8 las medidas de 37 × 52 mm.",
    source: "Examen Oficial FNMT 2026 (Pregunta 22)"
  },
  {
    question: "Que gramaje tiene un cartón del número 7:",
    options: ["762 gr/m²", "635 gr/m²", "889 gr/m²"],
    correct: 0,
    explanation: "En la clasificación por números del cartón en pliego, la denominación número 7 corresponde a 762 g/m².",
    source: "Examen Oficial FNMT 2026 (Pregunta 23)"
  },
  {
    question: "Cuál de los siguientes productos tiene mayor índice de blancura:",
    options: ["Pasta mecánica blanqueada", "Pasta blanqueadora kraft", "Papel estucado de dos caras"],
    correct: 2,
    explanation: "La salsa mineral de estuco aplicada a dos caras proporciona el grado de reflectancia más elevado.",
    source: "Examen Oficial FNMT 2026 (Pregunta 24)"
  },
  {
    question: "Debido a las propiedades de las tintas, una tinta con un PH demasiado alcalino produce:",
    options: [
      "Un retraso en el secado de la tinta",
      "Una fluidez excesiva de la tinta",
      "Falta de brillo en el producto expreso"
    ],
    correct: 1,
    explanation: "Un pH excesivamente alto degrada la reología del vehículo graso reduciendo drásticamente su viscosidad.",
    source: "Examen Oficial FNMT 2026 (Pregunta 25)"
  },
  {
    question: "En una tinta, una diferencia de 1ºC produce una diferencia de viscosidad de un:",
    options: ["5%", "10%", "20%"],
    correct: 1,
    explanation: "Variación térmica de la viscosidad estimada en aproximadamente un 10% por cada grado Celsius de diferencia.",
    source: "Examen Oficial FNMT 2026 (Pregunta 26)"
  },
  {
    question: "Al aumentar la velocidad de impresión:",
    options: [
      "Aumenta la viscosidad de la tinta",
      "Disminuye la viscosidad de la tinta",
      "Se mantiene igual la viscosidad de la tinta"
    ],
    correct: 1,
    explanation: "Por efecto del comportamiento tixotrópico, la fricción y fuerza de cizalla reducen la viscosidad aparente en máquina.",
    source: "Examen Oficial FNMT 2026 (Pregunta 27)"
  },
  {
    question: "La blancura del papel es una propiedad óptica subjetiva, el blanco patrón utilizado es:",
    options: ["El dióxido de calcio", "El carbonato de magnesio", "El óxido de magnesio"],
    correct: 2,
    explanation: "El óxido de magnesio (MgO) representa el estándar fotométrico internacional para la blancura ideal.",
    source: "Examen Oficial FNMT 2026 (Pregunta 28)"
  },
  {
    question: "El gramaje de las cartulinas no estucadas varia:",
    options: ["200-400gr/m2", "250-300 gr/m2", "250-400 gr/m2"],
    correct: 2,
    explanation: "Rango de masa especificado para cartulinas sin recubrimiento mineral.",
    source: "Examen Oficial FNMT 2026 (Pregunta 29)"
  },
  {
    question: "El brillo de un soporte papelero",
    options: [
      "Disminuye con el gramaje de la capa de estuco",
      "No depende de la composición de la salsa de estucado",
      "Aumenta con el calandro, cepillado o satinado"
    ],
    correct: 2,
    explanation: "La presión mecánica de los rodillos de calandra o cepillos alinea la superficie incrementando la reflexión de la luz.",
    source: "Examen Oficial FNMT 2026 (Pregunta 30)"
  },
  {
    question: "Un papel es muy poco poroso:",
    options: [
      "Si el tamaño de los poros es inferior a 1 micra",
      "Si el tamaño de los poros es entre 4 y 5 micras",
      "Si el tamaño de los poros es entre 1 y 2 micras"
    ],
    correct: 0,
    explanation: "Un diámetro medio de poro por debajo de 1 micrómetro caracteriza a los papeles impermeables o cerrados.",
    source: "Examen Oficial FNMT 2026 (Pregunta 31)"
  },
  {
    question: "Si hablamos de humedad absoluta del papel, las fibras absorben agua a nivel químico:",
    options: [
      "Menor a un 25% del peso del papel",
      "Menor a un 10% del peso del papel",
      "Menor a un 4% del peso del papel"
    ],
    correct: 0,
    explanation: "El punto de saturación por absorción molecular de las paredes celulares celulósicas se sitúa en torno al 25%.",
    source: "Examen Oficial FNMT 2026 (Pregunta 32)"
  },
  {
    question: "Cuantos pliegos son 1 bala, 20 manos y 50 cuadernillos:",
    options: ["10250", "5250", "5750"],
    correct: 2,
    explanation: "1 bala (5.000) + 20 manos (500) + 50 cuadernillos (250) = 5.750 pliegos.",
    source: "Examen Oficial FNMT 2026 (Pregunta 33)"
  },
  {
    question: "Qué porcentaje de brillo tiene un papel satinado:",
    options: ["40-80%", "20-40%", "20-60%"],
    correct: 1,
    explanation: "En la clasificación de soportes papeleros, el acabado satinado comprende valores de brillo entre el 20% y el 40%.",
    source: "Examen Oficial FNMT 2026 (Pregunta 34)"
  },
  {
    question: "Las fibras de papel al absorber humedad:",
    options: [
      "Se hinchan más a lo largo que a lo ancho",
      "Se hinchan más a lo ancho que a lo largo",
      "Se hinchan por igual"
    ],
    correct: 1,
    explanation: "La dilatación física de las fibras al humedecerse es marcadamente transversal (a lo ancho).",
    source: "Examen Oficial FNMT 2026 (Pregunta 35)"
  },
  {
    question: "En la higroestabilidad dimensional del papel:",
    options: [
      "El alargamiento no ha de ser superior al 2,5%",
      "El alargamiento no ha de ser superior al 3%",
      "El alargamiento no ha de ser superior al 3,5%"
    ],
    correct: 0,
    explanation: "Límite técnico máximo tolerado de variación dimensional hídrica del 2,5%.",
    source: "Examen Oficial FNMT 2026 (Pregunta 36)"
  },
  {
    question: "Hablando de papel, un PH demasiado alcalino produce:",
    options: [
      "Disminución de color con el tiempo",
      "Retraso del secado de la tinta",
      "Otros defectos"
    ],
    correct: 1,
    explanation: "Las soluciones o papeles alcalinos alteran la reacción de secado oxidativo de las tintas grasas.",
    source: "Examen Oficial FNMT 2026 (Pregunta 37)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿qué superficie tiene el formato A0?",
    options: ["0.5 m²", "1 m²", "2 m²"],
    correct: 1,
    explanation: "El pliego A0 se define internacionalmente con un área exacta de 1 metro cuadrado.",
    source: "Examen Oficial FNMT 2026 (Pregunta 38)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", si queremos pasar de un formato inferior a uno superior en la Serie A, ¿qué debemos hacer?",
    options: [
      "Dividir por dos el lado mayor y mantener constante el menor",
      "Multiplicar por dos el lado mayor y mantener constante el menor",
      "Multiplicar por dos el lado menor y mantener constante el mayor"
    ],
    correct: 2,
    explanation: "Regla geométrica de la serie A: duplicar la cota menor conservando la mayor.",
    source: "Examen Oficial FNMT 2026 (Pregunta 39)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿qué medida corresponde al formato B0?",
    options: ["1000 x 1414 mm", "707 x 1000 mm", "500 x 707 mm"],
    correct: 0,
    explanation: "Dimensiones normalizadas del formato B0: 1.000 × 1.414 mm.",
    source: "Examen Oficial FNMT 2026 (Pregunta 40)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿qué operación consiste en rizar una hoja de papel para aumentar su alargamiento o suavidad?",
    options: ["Gofrado", "Contracolado", "Crepado o crespado"],
    correct: 2,
    explanation: "Tratamiento mecánico de micro-plegado (crespado) para dotar de elasticidad al papel.",
    source: "Examen Oficial FNMT 2026 (Pregunta 41)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", glosario del capítulo 2. ¿Qué características debe tener el \"Cartón para encuadernación\"?",
    options: [
      "Ser plano, liso, resistente y compacto.",
      "Ser rugoso, grueso y flexible.",
      "Ser poroso, ligero y blanco."
    ],
    correct: 0,
    explanation: "Exigencias de fabricación del cartón gris/cubiertas para resistir la tensión del lomo.",
    source: "Examen Oficial FNMT 2026 (Pregunta 42)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿qué nombre recibe la tendencia de la hoja de papel a enrollarse sobre sí misma de forma cilíndrica?",
    options: ["Abollado", "Abarquillado", "Arrancado"],
    correct: 1,
    explanation: "El abarquillamiento o curvatura ocurre por asimetría de tensiones o humedad entre ambas caras.",
    source: "Examen Oficial FNMT 2026 (Pregunta 43)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", en el lenguaje técnico, ¿qué es el \"Blanco\"?",
    options: [
      "El conjunto de sustancias químicas empleadas en el calandrado del papel.",
      "La cara del papel que se imprime primero.",
      "La cantidad de residuo mineral tras la combustión del soporte, en prueba de laboratorio."
    ],
    correct: 1,
    explanation: "En la jerga de taller, 'imprimir el blanco' es pasar la primera cara del pliego a máquina.",
    source: "Examen Oficial FNMT 2026 (Pregunta 44)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿qué propiedad define a una sustancia que tiene la capacidad de absorber agua?",
    options: ["Hidrofóbica", "Higroscópica", "Hidrofílica"],
    correct: 1,
    explanation: "Característica de las materias capaces de incorporar humedad ambiente a su estructura.",
    source: "Examen Oficial FNMT 2026 (Pregunta 45)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿cómo se define la \"Viscosidad\" en el glosario de soportes no papeleros?",
    options: [
      "Medida de la fricción interna que resulta al desplazar una capa de líquido en relación con otra.",
      "El peso total de una sustancia en función de su volumen.",
      "La capacidad de un material para ser estirado y fluir."
    ],
    correct: 0,
    explanation: "Resistencia interna ofrecida por un fluido al desplazamiento relativo de sus moléculas.",
    source: "Examen Oficial FNMT 2026 (Pregunta 46)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿qué es la \"Tixotropía\"?",
    options: [
      "La resistencia de un plástico a romperse por impacto.",
      "El estado de materiales tipo gel en reposo que se hacen líquidos al ser agitados.",
      "El proceso de endurecimiento del caucho con azufre."
    ],
    correct: 1,
    explanation: "Propiedad de reología donde un fluido disminuye su viscosidad al someterse a agitación o cizalla.",
    source: "Examen Oficial FNMT 2026 (Pregunta 47)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿qué propiedad permite a una sustancia producir luz cuando actúa sobre ella una energía de radiación (ej. luz UV)?",
    options: ["Fosforescencia.", "Fluorescencia.", "Reflectancia."],
    correct: 1,
    explanation: "Emisión instantánea de luz visible al recibir radiación ultravioleta de menor longitud de onda.",
    source: "Examen Oficial FNMT 2026 (Pregunta 48)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿qué unidad se utiliza para medir la viscosidad?",
    options: ["Newton.", "Poise.", "Gramo/metro cuadrado."],
    correct: 1,
    explanation: "El Poise (y su submúltiplo el centipoise) es la unidad del Sistema CGS para la viscosidad dinámica.",
    source: "Examen Oficial FNMT 2026 (Pregunta 49)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿qué término describe el aspecto borroso de una muestra que debería ser transparente?",
    options: ["Opacidad.", "Turbiedad.", "Matizado."],
    correct: 1,
    explanation: "La turbiedad es la falta de transparencia o velo óptico visible en un soporte translúcido.",
    source: "Examen Oficial FNMT 2026 (Pregunta 50)"
  },
  {
    question: "Según el documento \"Curso Oficial 1ª Guillotinero\", ¿qué sucede con el material debido al ángulo en el lado frontal de la cuchilla durante el corte?",
    options: [
      "Se desplaza hacia atrás contra la escuadra.",
      "Se separa y se desplaza hacia delante.",
      "Se mantiene perfectamente vertical."
    ],
    correct: 1,
    explanation: "El bisel frontal ejerce una fuerza de empuje que proyecta la porción cortada hacia el frente.",
    source: "Examen Oficial FNMT 2026 (Pregunta 51)"
  },
  {
    question: "Según el documento \"Curso Oficial 1ª Guillotinero\", ¿por qué algunos operadores cortan alternativamente a la derecha, izquierda y centro?",
    options: [
      "Para usar la cuchilla más tiempo al perder filo de manera uniforme.",
      "Para evitar que el papel se cargue de electricidad estática.",
      "Porque es obligatorio por norma UNE."
    ],
    correct: 0,
    explanation: "Alternar la posición distribuirá el desgaste mecánico a lo largo de toda la longitud del filo.",
    source: "Examen Oficial FNMT 2026 (Pregunta 52)"
  },
  {
    question: "Según el art. 13 del XI Convenio Colectivo de FNMT-RCM, el periodo de prueba para el personal operario será de:",
    options: ["Un mes.", "Dos meses.", "Quince días."],
    correct: 2,
    explanation: "Periodo fijado expresamente en 15 días para la plantilla de operarios.",
    source: "Examen Oficial FNMT 2026 (Pregunta 53)"
  },
  {
    question: "Según el documento \"Curso Oficial 1ª Guillotinero\", ¿cómo puede detectar el operador que la presión de prensado es demasiado baja?",
    options: [
      "La cuchilla saca el material de debajo del pisón.",
      "La máquina hace un ruido agudo.",
      "Los pliegos se pegan entre sí."
    ],
    correct: 0,
    explanation: "La falta de sujeciòn provoca que el avance en cuña del filo arrastre hojas fuera del pisón.",
    source: "Examen Oficial FNMT 2026 (Pregunta 54)"
  },
  {
    question: "Según el manual oficial del puesto de trabajo, ¿qué es la barrera de luz en una guillotina?",
    options: [
      "La barrera de luz forma un retículo luminoso invisible en la zona de trabajo delante de la cuchilla. Si este retículo luminoso se interrumpe, la presión y el corte no pueden producirse.",
      "La barrera de luz forma un retículo luminoso invisible en la zona de trabajo tras la cuchilla. Si este retículo luminoso se interrumpe, la presión y el corte no pueden producirse.",
      "La barrera de luz forma un retículo luminoso invisible en la zona de trabajo delante de la cuchilla. Si este retículo luminoso se interrumpe, el corte no puede producirse."
    ],
    correct: 0,
    explanation: "Dispositivo fotoeléctrico de protección bimanual y de zona frontal contra atrapamientos.",
    source: "Examen Oficial FNMT 2026 (Pregunta 55)"
  },
  {
    question: "Según el documento \"Curso Oficial 1ª Guillotinero\". Según la tabla de presiones, ¿qué presión en daN requiere el \"Papel de etiquetas\"?",
    options: ["1500-2000", "3500-4000", "800-1000"],
    correct: 1,
    explanation: "Presión hidráulica tabulada para el corte de papel denso de etiquetas (3.500 a 4.000 daN).",
    source: "Examen Oficial FNMT 2026 (Pregunta 56)"
  },
  {
    question: "Según el documento \"Curso Oficial 1ª Guillotinero\", ¿qué porcentaje de wolframio contiene el inserto de una cuchilla HSS?",
    options: ["12%", "18%", "40%"],
    correct: 1,
    explanation: "Proporción de aleación de Wolframio/Tungsteno del 18% en aceros rápidos HSS.",
    source: "Examen Oficial FNMT 2026 (Pregunta 57)"
  },
  {
    question: "Según el manual oficial del puesto de trabajo, ¿cuál de las siguientes afirmaciones es correcta?",
    options: [
      "Si se interrumpe la barrera de luz, el pisón no puede bajarse con el pedal.",
      "Una interrupción de la barrera de luz genera una señal luminosa y acústica.",
      "El accionamiento bimanual de corte con mando de simultaneidad y bloqueo de repetición es una medida de seguridad en la guillotina."
    ],
    correct: 2,
    explanation: "Medida activa indispensable según normativa UNE-EN de seguridad en guillotinas.",
    source: "Examen Oficial FNMT 2026 (Pregunta 58)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿por qué el material se suelta de la escuadra durante el prensado?",
    options: [
      "Por la electricidad estática.",
      "Por la acción de la mesa de aire.",
      "Por la reducción de su altura en la zona del pisón."
    ],
    correct: 2,
    explanation: "Al comprimirse la pila bajo la suela del pisón, la reducción volumétrica despega las hojas de la guía vertical.",
    source: "Examen Oficial FNMT 2026 (Pregunta 59)"
  },
  {
    question: "Según el documento \"Materiales de producción en artes gráficas\", ¿a qué dureza Rockwell llega el inserto de una cuchilla HSS?",
    options: ["61-63", "18-20", "80-90"],
    correct: 0,
    explanation: "Dureza superficial comprendida entre 61 y 63 HRC.",
    source: "Examen Oficial FNMT 2026 (Pregunta 60)"
  },
  {
    question: "Según el curso de oficial 1º guillotinero, el papel estucado:",
    options: [
      "El igualado del papel se dificulta de manera notable y a la hora de cortarlo se mostrará muy inestable.",
      "El igualado del papel se facilita de manera notable y a la hora de cortarlo se mostrará muy inestable.",
      "El igualado del papel se dificulta de manera notable y a la hora de cortarlo se mostrará muy estable."
    ],
    correct: 1,
    explanation: "La lisura del estucado ayuda al deslizamiento al igualar pero la pila tiende a resbalar inestablemente al cortar.",
    source: "Examen Oficial FNMT 2026 (Pregunta 61)"
  },
  {
    question: "Según el curso de oficial 1º guillotinero, ¿cuál de las siguientes afirmaciones es correcta?:",
    options: [
      "Los formatos de la serie A son siempre mayores que los de la serie B y los de la serie C se encuentran entre estos.",
      "Los formatos de la serie A son siempre mayores que los de la serie B y mayores que los de la serie C.",
      "Los formatos de la serie B son siempre mayores que los de la serie A y los de la serie C se encuentran entre estos."
    ],
    correct: 2,
    explanation: "Proporción física de formatos ISO: B > C > A para un mismo número correlativo.",
    source: "Examen Oficial FNMT 2026 (Pregunta 62)"
  },
  {
    question: "Según el curso de oficial 1º guillotinero, ¿cuál de las siguientes afirmaciones es correcta?:",
    options: [
      "Se toleran desviaciones en las medidas de ±1,5 mm para medidas de hasta 150 mm, de ±2 mm para medidas de hasta 600 mm y de ±3 mm para medidas superiores.",
      "Se toleran desviaciones en las medidas de ±1 mm para medidas de hasta 150 mm, de ±2 mm para medidas de hasta 600 mm y de ±3 mm para medidas superiores.",
      "Se toleran desviaciones en las medidas de ±1,5 mm para medidas de hasta 150 mm, de ±2,5 mm para medidas de hasta 600 mm y de ±3 mm para medidas superiores."
    ],
    correct: 0,
    explanation: "Tolerancias dimensionales oficiales estandarizadas en manual de guillotina.",
    source: "Examen Oficial FNMT 2026 (Pregunta 63)"
  },
  {
    question: "Al realizar la plancha de impresión se incluye además del trabajo a imprimir, una serie de marcas o tacas que ayudan tanto al impresor como a los operarios posteriores que realizan el manipulado de pliegos, una de ellas son las Marcas de registro. ¿Para qué sirven?:",
    options: [
      "Delimitan las medidas finales del efecto y ayudan al guillotinero a cortar con exactitud y dentro de las tolerancias establecidas tanto de medidas como de centrado de la estampación.",
      "Generalmente tienen forma de cruz, sirven para ajustar los diferentes colores que componen el trabajo, así como anverso con reverso, están siempre fuera del trabajo, en alguna zona en blanco del pliego.",
      "Generalmente tienen forma de cruz, sirven para ajustar los diferentes colores que componen el trabajo, así como anverso con reverso, están siempre dentro del trabajo, en alguna zona en blanco del pliego."
    ],
    correct: 1,
    explanation: "Cruces perimetrales empleadas para casar la superposición de tintas y caras del impreso.",
    source: "Examen Oficial FNMT 2026 (Pregunta 64)"
  },
  {
    question: "Según el curso oficial 1º guillotinero, en general cada guillotina está equipada con una función automática de expulsor. Esta función actúa cuando:",
    options: [
      "La medida siguiente a tratar es mayor que la posición anterior.",
      "La medida siguiente a tratar es menor que la posición anterior.",
      "Solo actúa cuando es programada por el operario."
    ],
    correct: 0,
    explanation: "El expulsor empuja el paquete cortado cuando el siguiente paso exige retraer la escuadra a una posición mayor.",
    source: "Examen Oficial FNMT 2026 (Pregunta 65)"
  },
  {
    question: "Uno de los dispositivos útiles en una guillotina es la Medida de carga, según el curso oficial 1º guillotina, esta sirve para:",
    options: [
      "La medida de carga es una posición de la escuadra donde no se puede realizar ningún corte. Sirve para cargar el material en una posición donde el material a cortar no se pueda cortar incorrectamente por error.",
      "La medida de carga es una posición de la escuadra donde se empieza a cortar. Sirve para cargar el material en la primera posición de corte desde donde empezaremos a cortar.",
      "La medida de carga es una posición de la escuadra donde no se puede realizar ningún corte. Sirve para cargar el material en una posición desde donde, sin quitar la función y sin mover la escuadra, empezaremos a cortar."
    ],
    correct: 0,
    explanation: "Cota de seguridad para apilado/igualado donde el pedal y cuchilla quedan inhabilitados.",
    source: "Examen Oficial FNMT 2026 (Pregunta 66)"
  },
  {
    question: "Según el curso oficial 1º guillotinero, respecto a la escuadra giratoria, ¿cuál de las siguientes afirmaciones es correcta?:",
    options: [
      "Gira el papel en función del lado que tengamos que cortar.",
      "Permite torcer la línea de corte deseada en el papel para la cuchilla.",
      "No existe la escuadra giratoria en guillotinas."
    ],
    correct: 1,
    explanation: "Ajusta en ángulo la pared de la escuadra para compensar desalineaciones respecto a la cuchilla.",
    source: "Examen Oficial FNMT 2026 (Pregunta 67)"
  },
  {
    question: "Según el curso oficial 1º guillotinero, en guillotina polar 115 XT, ¿cuál es la presión máxima al bajar el pisón mediante el pedal?",
    options: ["400 N", "300 N", "500 N"],
    correct: 1,
    explanation: "Fuerza límite de aproximación por pedal fijada en 300 N.",
    source: "Examen Oficial FNMT 2026 (Pregunta 68)"
  },
  {
    question: "Según el curso oficial 1º guillotinero, si tenemos un material con malas propiedades de deslizamiento, ¿qué debemos hacer?:",
    options: [
      "Si el material a cortar se desliza mal, se puede colocar indistintamente tanto a la izquierda como a la derecha.",
      "Si el material a cortar se desliza mal, debería colocarse lo más a la derecha posible y cortarse. Si se cortara a la izquierda, a las fuerzas de desplazamiento ya altas delante de la cuchilla se añadiría el atasco mediante la regla lateral triangular a la izquierda.",
      "Si el material a cortar se desliza mal, debería colocarse lo más a la izquierda posible y cortarse. Si se cortara a la derecha, a las fuerzas de desplazamiento ya altas delante de la cuchilla se añadiría el atasco mediante la regla lateral triangular a la derecha."
    ],
    correct: 2,
    explanation: "El sentido del corte desplaza el material hacia la derecha; arrimarlo a la izquierda evita atascamientos.",
    source: "Examen Oficial FNMT 2026 (Pregunta 69)"
  },
  {
    question: "Según el curso oficial 1º guillotinero, en cuanto a la presión de prensado correcta, podemos afirmar que:",
    options: [
      "Si la presión de prensado es demasiado alta, el operador podrá verlo en que la cuchilla saca el material a cortar de debajo del pisón. Si la presión de prensado es demasiado baja, es más difícil de reconocer porque la imagen de error que aparece también puede ser causada por otros problemas.",
      "Si la presión de prensado es demasiado baja, el operador podrá verlo en que la cuchilla saca el material a cortar de debajo del pisón. Si la presión de prensado es demasiado alta, es más difícil de reconocer porque la imagen de error que aparece también puede ser causada por otros problemas.",
      "Si la presión de prensado es demasiado baja, el operador podrá verlo en que la cuchilla saca el material a cortar de debajo del pisón. Si la presión de prensado es demasiado baja, es más difícil de reconocer porque la imagen de error que aparece también puede ser causada por otros problemas."
    ],
    correct: 1,
    explanation: "El desplazamiento de pliegos fuera del pisón evidencia una falta de presión hidráulica de sujeción.",
    source: "Examen Oficial FNMT 2026 (Pregunta 70)"
  },
  {
    question: "Según el curso oficial 1º guillotinero, para el papel de impresión normal, ¿Cuál es la correcta presión de prensado en daN?",
    options: ["2000.", "3000.", "2500."],
    correct: 0,
    explanation: "Ajuste estándar recomendado de 2.000 daN para offset y papeles de impresión común.",
    source: "Examen Oficial FNMT 2026 (Pregunta 71)"
  },
  {
    question: "Según el curso oficial 1º guillotinero, ¿a qué tipo de cuchilla corresponde una cuchilla HSS?",
    options: [
      "Cuchilla de acero de corte ultrarrápido.",
      "Cuchilla de metal duro normal.",
      "Cuchilla de metal duro de grano superfino."
    ],
    correct: 0,
    explanation: "Las siglas HSS (High Speed Steel) identifican las cuchillas de acero de corte ultrarrápido.",
    source: "Examen Oficial FNMT 2026 (Pregunta 72)"
  },
  {
    question: "Al usar la función \"Eltrotact\" hay que considerar unas reglas fundamentales, que son:",
    options: [
      "Inicio, medida del producto, cantidad del producto, repetición de la medida de producto y cantidad del producto, fin de la secuencia Eltrotact por cortes totales.",
      "Medida de carga, medida del producto, repetición de la medida del producto, cantidad del producto, fin de la secuencia Eltrotact por cortes totales.",
      "Medida del producto, cantidad del producto, repetición de la medida de producto y fin de la secuencia Eltrotact por cortes totales."
    ],
    correct: 1,
    explanation: "Estructura parametrizada para la programación repetitiva de cortes Eltrotact.",
    source: "Examen Oficial FNMT 2026 (Pregunta 73)"
  },
  {
    question: "Según el curso oficial 1º guillotinero, para el ajuste de precisión de la medida manual:",
    options: [
      "Tirar hacia afuera de la rueda de mano y girar hacia la derecha o hacia la izquierda.",
      "Presionamos hacia dentro la rueda de mano y girar hacia la derecha o hacia la izquierda.",
      "Giramos la rueda de mano hacia la derecha o hacia la izquierda."
    ],
    correct: 1,
    explanation: "El volante manual de precisión se embraga presionándolo hacia adentro antes de girar.",
    source: "Examen Oficial FNMT 2026 (Pregunta 74)"
  },
  {
    question: "Según el curso oficial 1º guillotinero, en los modelos polar X y XT ¿cómo se realiza la puesta en marcha del posicionado de una medida teórica una vez introducida a través del teclado numérico?",
    options: [
      "Pulsar brevemente 2 veces la tecla \"=\", o accionar la tecla táctil \"liberar función\".",
      "Pulsar brevemente la tecla \"0\", o accionar la tecla táctil \"liberar función\".",
      "Pulsar brevemente la tecla \"=\", o accionar la tecla táctil \"liberar función\"."
    ],
    correct: 0,
    explanation: "Doble pulsación de la tecla '=' para validar y activar la marcha de la escuadra.",
    source: "Examen Oficial FNMT 2026 (Pregunta 75)"
  },
  {
    question: "En el modelo polar XT de el curso oficial 1º guillotinero, en la imagen básica \"índice de funciones\" se indican todos los programas ocupados de la memoria seleccionada (A/B) cada uno de los segmentos (A/B) tiene una capacidad de:",
    options: [
      "499 programas en cada segmento (A/B)",
      "999 programas en cada segmento (A/B).",
      "899 programas en cada segmento (A/B)."
    ],
    correct: 0,
    explanation: "Capacidad límite de almacenamiento fijada en 499 programas por cada banco de memoria.",
    source: "Examen Oficial FNMT 2026 (Pregunta 76)"
  },
  {
    question: "En el curso oficial de 1º guillotinero, en los elementos de control (modelos XT) ¿dónde encontraremos la tecla de \"insertar medida\" en la pantalla táctil?",
    options: [
      "En la barra lateral a la derecha.",
      "En la barra lateral a la izquierda.",
      "En el campo de entrada."
    ],
    correct: 0,
    explanation: "Ubicación táctil del botón de inserción en el margen derecho de la interfaz POLAR XT.",
    source: "Examen Oficial FNMT 2026 (Pregunta 77)"
  },
  {
    question: "¿Qué norma ha sido adoptada por la mayoría de los organismos nacionales de normalización europeos en relación a los formatos de papel, que fue la base de una norma internacional?",
    options: ["DIN 477", "DIN 476", "DIN 216"],
    correct: 1,
    explanation: "Norma DIN 476 precursora de la norma ISO 216.",
    source: "Examen Oficial FNMT 2026 (Pregunta 78)"
  },
  {
    question: "Según su gramaje, tendrán la consideración de cartulinas los papeles que estén entre:",
    options: [
      "de 140 a 450 gr/m2",
      "de 150 a 500gr/m2.",
      "de 150 a 450 gr/m2"
    ],
    correct: 2,
    explanation: "Clasificación de cartulina entre 150 y 450 g/m² de peso base.",
    source: "Examen Oficial FNMT 2026 (Pregunta 79)"
  },
  {
    question: "¿Cuál es elemento más crítico a la hora de posicionar el papel en la guillotina?",
    options: [
      "La limpieza de todos los elementos de la guillotina (carro, mesa, cuchilla, etc.)",
      "El igualado de papel.",
      "La rugosidad de la parte inferior del papel."
    ],
    correct: 1,
    explanation: "Un correcto alineado/igualado a taco resulta crucial para evitar desvíos en el corte.",
    source: "Examen Oficial FNMT 2026 (Pregunta 80)"
  },
  {
    question: "El trabajador que crea dañado su derecho a realizar superior categoría podrá solicitar la tutela del mismo al siguiente organismo:",
    options: [
      "A la sección sindical correspondiente.",
      "A la comisión paritaria.",
      "A la comisión de igualdad."
    ],
    correct: 1,
    explanation: "Órgano colegiado de arbitraje del convenio encargado de tramitar reclamaciones de categoría.",
    source: "Examen Oficial FNMT 2026 (Pregunta 81)"
  },
  {
    question: "¿Cómo se evita que después del corte los pliegos tengan diferente longitud?",
    options: [
      "Realizando correctamente el aireado y exfoliado del papel.",
      "Utilizando polvos antiadherentes para que los pliegos se deslicen correctamente.",
      "Utilizando un pisón por detrás de la cuchilla para evitar que la cuchilla empuje el material a cortar durante el corte."
    ],
    correct: 2,
    explanation: "El retenedor/pisón posterior contrarresta el empuje de la cuchilla igualando la cota final.",
    source: "Examen Oficial FNMT 2026 (Pregunta 82)"
  },
  {
    question: "Si se emplea fuerza excesiva durante el prensado en el corte. ¿Qué efectos negativos tendría en el mismo?",
    options: [
      "Dañaría el material a cortar, pero no tendría efecto en la calidad del corte.",
      "Dañaría el material a cortar, el efecto en la calidad del corte sería si el material es duro.",
      "Si el material a cortar se comprime excesivamente, puede producirse una desviación de la cuchilla."
    ],
    correct: 2,
    explanation: "La compresión excesiva altera la rigidez de la pila desviando la trayectoria vertical de la cuchilla.",
    source: "Examen Oficial FNMT 2026 (Pregunta 83)"
  },
  {
    question: "Con la escuadra automática conectada. ¿se conecta automáticamente la mesa de aire en cada retroceso de la misma?",
    options: ["Si.", "No.", "Sólo si está programado de esta manera."],
    correct: 0,
    explanation: "El aire de soplado se acopla de manera automática durante los retrocesos de escuadra.",
    source: "Examen Oficial FNMT 2026 (Pregunta 84)"
  },
  {
    question: "El objetivo que buscamos cuando aplicamos el método de corte desde el centro es:",
    options: [
      "Evitar los desbarbes inútiles, ahorrando tiempo.",
      "Evitar las tensiones entre las fibras internas y externas y viceversa.",
      "Solventar los posibles desequilibrios de grosor entre el centro y los bordes de la posteta."
    ],
    correct: 2,
    explanation: "Repartir volumétricamente las irregularidades de lomo o centro de la masa de papel.",
    source: "Examen Oficial FNMT 2026 (Pregunta 85)"
  },
  {
    question: "El tiempo entre el prensado y el corte se debe alargar:",
    options: [
      "Cuando la posteta es demasiado alta.",
      "Cuando hay demasiado aire entre los pliegos o el material a cortar no permite un tiempo breve de prensado.",
      "Cuando hay demasiado polvo entre los pliegos."
    ],
    correct: 1,
    explanation: "Permite la salida del aire acumulado asegurando la firmeza de la pila antes de bajar el filo.",
    source: "Examen Oficial FNMT 2026 (Pregunta 86)"
  },
  {
    question: "Si deseamos aumentar el tiempo de prensado en un paso concreto de un programa, deberemos ajustarlo en:",
    options: ["Parámetros de paso.", "Ajustes de programa.", "Parámetros de máquina."],
    correct: 0,
    explanation: "Sub-menú específico para editar parámetros individuales de una línea de corte.",
    source: "Examen Oficial FNMT 2026 (Pregunta 87)"
  },
  {
    question: "¿Qué es un programa de formato?",
    options: [
      "Es un programa con medidas generalistas que se puede adaptar a distintos formatos de papel.",
      "Es un programa predefinido instalado en la guillotina para los formatos de papel más utilizados.",
      "Es una utilidad por la cual el operador introduce los datos más importantes y el programa se crea automáticamente."
    ],
    correct: 2,
    explanation: "Generador interactivo que construye la pauta de corte a partir de los datos brutos y finales.",
    source: "Examen Oficial FNMT 2026 (Pregunta 88)"
  },
  {
    question: "¿Qué es la prueba de presión?",
    options: [
      "Es una comparación entre distintas postetas para establecer las márgenes de presión y cantidad de polvo contenido.",
      "Es una prueba para determinar la cantidad de aire contenido en una posteta y determinar la presión del pisón.",
      "Es una comparación de la pila de papel en cuestión con una pila de referencia."
    ],
    correct: 2,
    explanation: "Verificación comparativa de resistencia a la compresión frente a un patrón conocido.",
    source: "Examen Oficial FNMT 2026 (Pregunta 89)"
  },
  {
    question: "En la salud laboral se debe velar por:",
    options: [
      "El bienestar físico, psíquico y laboral.",
      "El bienestar físico, psíquico y relacional.",
      "El bienestar físico, psíquico y social."
    ],
    correct: 2,
    explanation: "Definición oficial de Salud de la OMS: estado completo de bienestar físico, mental y social.",
    source: "Examen Oficial FNMT 2026 (Pregunta 90)"
  },
  {
    question: "¿Cuáles son las disciplinas técnicas que existen en la prevención para evitar el daño a la salud de los trabajadores?",
    options: [
      "Higiene industrial, Seguridad en el trabajo y Psicología laboral.",
      "Higiene industrial, Seguridad en el trabajo y Ergonomía y Psicosociología.",
      "Salud industrial, Seguridad en el trabajo y Ergonomía y Psicosociología."
    ],
    correct: 1,
    explanation: "Las tres especialidades preventivas técnicas junto con la Medicina del Trabajo.",
    source: "Examen Oficial FNMT 2026 (Pregunta 91)"
  },
  {
    question: "Los riesgos higiénicos, de tipo físico, químico o biológico generan:",
    options: ["Enfermedades profesionales.", "Accidentes laborales.", "Situaciones de riesgo físico o biológico."],
    correct: 0,
    explanation: "La exposición a contaminantes higiénicos deriva típicamente en enfermedades profesionales.",
    source: "Examen Oficial FNMT 2026 (Pregunta 92)"
  },
  {
    question: "Según la Ley General de la Seguridad Social, en su artículo 115, la definición de accidente de trabajo es:",
    options: [
      "Toda lesión corporal que el trabajador sufra con ocasión o por consecuencia del trabajo.",
      "Cualquier lesión producida en las personas como consecuencia de la actividad laboral.",
      "Toda lesión corporal que el trabajador sufra con ocasión o por consecuencia del trabajo que ejecuta por cuenta ajena."
    ],
    correct: 2,
    explanation: "Definición jurídica exacta contenida en el Art. 115 de la Ley General de la Seguridad Social.",
    source: "Examen Oficial FNMT 2026 (Pregunta 93)"
  },
  {
    question: "¿Qué significa el protocolo PAS en la actuación de un socorrista?",
    options: [
      "Programar, Alertar, Socorrer.",
      "Proteger, Avisar, Socorrer.",
      "Prevenir, Alertar, Sacar."
    ],
    correct: 1,
    explanation: "Acrónimo de actuación básica en emergencias: Proteger, Avisar y Socorrer.",
    source: "Examen Oficial FNMT 2026 (Pregunta 94)"
  },
  {
    question: "Según el manual de PRL de la FNMT, una señal luminosa o acústica indicará, al ponerse en marcha:",
    options: [
      "La necesidad de realizar una determinada acción.",
      "La imperiosa necesidad de evacuar la zona y avisar a todas las personas que nos encontremos a nuestro paso.",
      "La necesidad de realizar una determinada acción, y se mantendrá mientras persista tal necesidad."
    ],
    correct: 2,
    explanation: "Criterio de funcionamiento de las señales de advertencia y alarma activa.",
    source: "Examen Oficial FNMT 2026 (Pregunta 95)"
  },
  {
    question: "El plan de igualdad de la FNMT-RCM tiene entre sus objetivos principales:",
    options: [
      "Actualizar la nomenclatura relativa al lenguaje de género en la comunicación de la FNMT.",
      "Velar por la compensación de las trabas históricas con motivo del género en la incorporación a la FNMT.",
      "Conseguir procesos de selección y promoción en igualdad que eviten la segregación vertical y horizontal y la utilización de lenguaje sexista."
    ],
    correct: 2,
    explanation: "Eje prioritario del Plan de Igualdad para eliminar techos de cristal y sesgos de selección.",
    source: "Examen Oficial FNMT 2026 (Pregunta 96)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM, en una hemorragia:",
    options: [
      "Si la sangre es roja y sale en forma intermitente es de una vena.",
      "Si la sangre es oscura y sale en forma continua es de una vena.",
      "Si la sangre es oscura y sale en forma continua es de una arteria."
    ],
    correct: 1,
    explanation: "Identificación de hemorragias: la sangre venosa es oscura y fluye de manera continua.",
    source: "Examen Oficial FNMT 2026 (Pregunta 97)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM, en la técnica del masaje cardiaco, se han de realizar ciclos de:",
    options: [
      "2 insuflaciones + 30 compresiones cardiacas",
      "2 insuflaciones + 20 compresiones cardiacas",
      "3 insuflaciones + 20 compresiones cardiacas"
    ],
    correct: 0,
    explanation: "Secuencia de reanimación cardiopulmonar (RCP) estándar de 30 compresiones y 2 insuflaciones.",
    source: "Examen Oficial FNMT 2026 (Pregunta 98)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM, ¿en cuál de los siguientes grupos se incluyen todos los riesgos profesionales que tienen su origen en las condiciones materiales en las que se desarrolla un determinado trabajo?",
    options: [
      "Riesgos ligados a las condiciones de trabajo.",
      "Riesgos higiénicos.",
      "Riesgos derivados de la organización del trabajo."
    ],
    correct: 0,
    explanation: "Denominación del grupo de riesgos derivados de equipos, herramientas y la propia infraestructura.",
    source: "Examen Oficial FNMT 2026 (Pregunta 99)"
  },
  {
    question: "Según el Manual de Prevención de Riesgos Laborales de la FNMT-RCM, NO es un requisito que se ha de cumplir para definir una enfermedad profesional como tal:",
    options: [
      "Que se dé como consecuencia del trabajo.",
      "Que su origen sea debido al desempeño de las actividades que se especifican en el cuadro de enfermedades profesionales publicado en el R.D. 1299/2006, de 10 de noviembre, por el que se aprueba el cuadro de enfermedades profesionales.",
      "Que no sea provocada por la acción de elementos y sustancias indicadas en el citado cuadro."
    ],
    correct: 2,
    explanation: "Es FALSO que no deba estar provocado por dichos elementos; al contrario, debe estar provocada por los elementos catalogados en el cuadro oficial.",
    source: "Examen Oficial FNMT 2026 (Pregunta 100)"
  }
];





/* ========================================================
   LÓGICA DE NAVEGACIÓN Y MOTOR DE EVALUACIÓN
   ======================================================== */
let currentTestType = "";
let activeBank = [];
let currentQuestionsPool = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let timeLeft = 0;
let timerInterval;

let currentShuffledOptions = [];
let currentCorrectIndexShuffled = -1;

function showMainMenu() {
  clearInterval(timerInterval);
  document.getElementById("progress").textContent = "Menú Principal";
  document.getElementById("timer").textContent = "00:00";

  const quizArea = document.getElementById("quiz-area");
  quizArea.innerHTML = `
    <div class="menu-card">
      <h2>Exámenes Oficiales FNMT - Guillotina y Artes Gráficas</h2>
      <button class="menu-main-btn" onclick="showSubmenu('fnmt2022')">📄 Examen Oficial FNMT 2022 (${examFNMT2022.length} Preguntas)</button>
      <button class="menu-main-btn" onclick="showSubmenu('fnmt2023')">📄 Examen Oficial FNMT 2023 (${examFNMT2023.length} Preguntas)</button>
      <button class="menu-main-btn" onclick="showSubmenu('fnmt2025')">📄 Examen Oficial FNMT 2025 (${examFNMT2025.length} Preguntas)</button>
      <button class="menu-main-btn" onclick="showSubmenu('fnmt2026')">📄 Examen Oficial FNMT 2026 (${examFNMT2026.length} Preguntas)</button>
    </div>
  `;
}

function showSubmenu(testType) {
  currentTestType = testType;
  let title = "";

  switch (testType) {
    case 'fnmt2022':
      activeBank = examFNMT2022;
      title = "📄 Examen Oficial FNMT 2022";
      break;
    case 'fnmt2023':
      activeBank = examFNMT2023;
      title = "📄 Examen Oficial FNMT 2023";
      break;
    case 'fnmt2025':
      activeBank = examFNMT2025;
      title = "📄 Examen Oficial FNMT 2025";
      break;
    case 'fnmt2026':
      activeBank = examFNMT2026;
      title = "📄 Examen Oficial FNMT 2026";
      break;
  }

  document.getElementById("progress").textContent = title;
  const quizArea = document.getElementById("quiz-area");

  // Opciones dinámicas según cantidad disponible en el banco
  const steps = [10, 20, 50, 100];
  let optionsHTML = '<option value="5">5 Preguntas</option>';

  steps.forEach(step => {
    if (step <= activeBank.length) {
      optionsHTML += `<option value="${step}">${step} Preguntas</option>`;
    }
  });

  optionsHTML += `<option value="repaso" selected>Modo Completo (${activeBank.length} Preguntas)</option>`;

  quizArea.innerHTML = `
    <div class="menu-card">
      <button class="btn-back" onclick="showMainMenu()">← Volver al Menú Principal</button>
      <h2>${title}</h2>
      <label class="menu-label" for="questions-count-select">Cantidad de Preguntas:</label>
      <select id="questions-count-select" class="menu-select">
        ${optionsHTML}
      </select>
      <button class="start-btn" onclick="startQuizFromMenu()">Iniciar Examen</button>
    </div>
  `;
}

function getRandomQuestions(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, array.length));
}

function startQuizFromMenu() {
  const countSelect = document.getElementById("questions-count-select");
  const selectedValue = countSelect.value;
  let selectedCount = selectedValue === "repaso" ? activeBank.length : parseInt(selectedValue, 10);

  currentQuestionsPool = getRandomQuestions(activeBank, selectedCount);
  currentQuestionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  
  timeLeft = selectedCount * 45; // 45 segundos por pregunta

  const quizArea = document.getElementById("quiz-area");
  quizArea.innerHTML = `
    <div class="question-card">
      <h2 id="question">Cargando pregunta...</h2>
    </div>
    <div class="options-container" id="options-container"></div>
    
    <div class="explanation-card" id="explanation-card">
      <div class="explanation-title">Explicación:</div>
      <div id="explanation-text"></div>
      <div class="explanation-source" id="explanation-source"></div>
    </div>

    <button class="next-btn" id="next-btn" onclick="nextQuestion()">Siguiente</button>
  `;

  loadQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function loadQuestion() {
  const currentQuestion = currentQuestionsPool[currentQuestionIndex];
  document.getElementById("progress").textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestionsPool.length}`;
  document.getElementById("question").textContent = currentQuestion.question;
  
  const originalOptions = currentQuestion.options;
  const correctText = originalOptions[currentQuestion.correct];

  currentShuffledOptions = [...originalOptions].sort(() => 0.5 - Math.random());
  currentCorrectIndexShuffled = currentShuffledOptions.indexOf(correctText);

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";
  
  currentShuffledOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
    button.onclick = () => selectOption(index, button);
    optionsContainer.appendChild(button);
  });

  document.getElementById("explanation-card").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
}

function selectOption(selectedIndex, selectedButton) {
  const currentQuestion = currentQuestionsPool[currentQuestionIndex];
  const buttons = document.querySelectorAll(".option-btn");
  
  buttons.forEach(button => button.disabled = true);

  if (selectedIndex === currentCorrectIndexShuffled) {
    selectedButton.style.backgroundColor = "#2ECC71";
    correctCount++;
  } else {
    selectedButton.style.backgroundColor = "#E74C3C";
    buttons[currentCorrectIndexShuffled].style.backgroundColor = "#2ECC71";
    wrongCount++;
  }
  
  document.getElementById("explanation-text").textContent = currentQuestion.explanation;
  document.getElementById("explanation-source").textContent = "Origen: " + currentQuestion.source;
  document.getElementById("explanation-card").style.display = "block";

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestionsPool.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  clearInterval(timerInterval);
  const unansweredCount = currentQuestionsPool.length - (correctCount + wrongCount);
  const penaltyPoints = wrongCount * (1 / 3);
  const rawScore = (correctCount - penaltyPoints);
  
  let finalScore = (rawScore / currentQuestionsPool.length) * 10;
  if (finalScore < 0) finalScore = 0;

  const quizArea = document.getElementById("quiz-area");
  quizArea.innerHTML = `
    <div class="results-card">
      <h2>Resultados del Examen FNMT</h2>
      <br>
      <div class="result-item">Preguntas acertadas: <span class="result-correct">${correctCount}</span></div>
      <div class="result-item">Preguntas no acertadas: <span class="result-wrong">${wrongCount}</span></div>
      <div class="result-item">Preguntas no respondidas: <span class="result-unanswered">${unansweredCount}</span></div>
      <div class="result-item">Descuento por errores (-1/3): <span class="result-penalty">-${penaltyPoints.toFixed(2)} pts</span></div>
      <div class="result-item">Calificación final: <span class="result-score">${finalScore.toFixed(2)} / 10</span></div>
      <button class="restart-btn" onclick="showMainMenu()">Menú Principal</button>
    </div>
  `;
}

// Iniciar aplicación
showMainMenu();

 