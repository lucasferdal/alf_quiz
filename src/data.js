// src/data.js
import uno from './assets/uno.jpg'
import dos from './assets/dos.jpg'
import tres from './assets/tres.jpg'
import cuatro from './assets/cuatro.webp'
import cinco from './assets/cinco.png'
import seis from './assets/seis.jpg'
import siete from './assets/siete.png'
import ocho from './assets/ocho.jpg'
import nueve from './assets/nueve.png'
import diez from './assets/diez.jpg'
import once from './assets/once.png'
import doce from './assets/doce.png'

export const slides = [
    {
        image: uno,

        text: 'El abecedario es un conjunto de letras que usamos para escribir y leer en un idioma. Cada letra representa un sonido específico o un grupo de sonidos. En español, el abecedario está compuesto por 27 letras.'
    },
    {
        image: dos,
        text: 'Las letras se dividen en dos categorías principales: vocales y consonantes. Las vocales son A, E, I, O y U, se producen sin obstrucción del aire en el tracto vocal y son la base para la formación de sílabas, mientras que las vocales son todas las demas letras del abecedario.'
    },
    {
        image: tres,
        text: 'La letra Ñ es única del abecedario español y representa un sonido específico que no existe en otros alfabetos latinos.'
    },
    {
        image: cuatro,
        text: 'El abecedario no solo es un conjunto de símbolos gráficos, sino que también tiene una importante función fonológica. Cada letra o grupo de letras representa un sonido, o fonema.'
    },
    {
        image: cinco,
        text: 'Los fenicios desarrollaron uno de los primeros alfabetos conocidos alrededor del año 1500 a.C. Este alfabeto fenicio consistía en 22 letras consonánticas, cada una de las cuales representaba un sonido específico.'
    },
    {
        image: seis,
        text: 'Los griegos adoptaron el alfabeto fenicio alrededor del siglo VIII a.C. y añadieron letras para representar las vocales. Esto permitió una representación escrita más precisa y rica del lenguaje hablado.'
    },
    {
        image: siete,
        text: 'Los romanos adaptaron el alfabeto griego para crear el alfabeto latino durante la expansión de su imperio. El alfabeto latino originalmente tenía 21 letras, pero se expandió a 23 letras con la inclusión de la "Y" y la "Z".'
    },
    {
        image: ocho,
        text: 'Los primeros sistemas de escritura, como los jeroglíficos egipcios y la escritura cuneiforme de Mesopotamia, eran pictográficos y logográficos, donde los símbolos representaban objetos, ideas o sonidos completos.'
    },
    {
        image: nueve,
        text: 'La invención del alfabeto fenicio representó un cambio revolucionario, al reducir los símbolos a un conjunto manejable que representaba sonidos específicos (fonemas). Esto simplificó la escritura y la hizo más accesible.'
    },
    {
        image: diez,
        text: 'A lo largo de los siglos, el alfabeto latino ha sido adoptado y modificado por muchos idiomas. Por ejemplo, en el español, la letra "Ñ" se añadió para representar un sonido específico que no existía en el latín.'
    },
    {
        image: once,
        text: 'Con el tiempo, las letras y la ortografía se han estandarizado para facilitar la comunicación y la educación. La modernización también incluye la digitalización y la codificación de caracteres, como el uso del Unicode.'
    },
    {
        image: doce,
        text: 'La codificación de caracteres, como el uso del Unicode, permite la representación de todos los caracteres del alfabeto en las computadoras y dispositivos digitales, facilitando la comunicación global y el intercambio de información.'
    }
];

export const quiz = [
    {
        "question": "¿Cuántas letras componen el abecedario español?",
        "options": ["26", "27", "28", "29"],
        "correct": 1
    },
    {
        "question": "¿Qué representan las letras del abecedario?",
        "options": ["Objetos", "Colores", "Sonidos específicos o fonemas", "Números"],
        "correct": 2
    },
    {
        "question": "Explica la diferencia principal entre vocales y consonantes.",
        "options": ["Las vocales se producen sin obstrucción del aire en el tracto vocal, mientras que las consonantes se producen con alguna obstrucción del aire.", "Las vocales son siempre más largas que las consonantes.", "Las consonantes no se pueden combinar con vocales para formar sílabas.", "Las vocales solo se encuentran al principio de las palabras."],
        "correct": 0
    },
    {
        "question": "¿Cuál fue una de las principales modificaciones que hicieron los griegos al alfabeto fenicio?",
        "options": ["Añadieron más consonantes", "Añadieron letras para representar las vocales", "Simplificaron los símbolos", "Eliminación de algunas letras"],
        "correct": 1
    },
    {
        "question": "¿En qué siglo los romanos empezaron a adaptar el alfabeto griego para crear el alfabeto latino?",
        "options": ["Siglo VI a.C.", "Siglo VII a.C.", "Siglo VIII a.C.", "Siglo IX a.C."],
        "correct": 1
    },
    {
        "question": "¿Cuántas letras tenía originalmente el alfabeto latino?",
        "options": ["19", "21", "23", "25"],
        "correct": 1
    },
    {
        "question": "¿Cuál de las siguientes letras pertenece al alfabeto griego?",
        "options": ["Δ", "T", "S", "P"],
        "correct": 0
    },
    {
        "question": "Describe cómo la invención del alfabeto fenicio facilitó la alfabetización y el comercio en las sociedades antiguas.",
        "options": ["Redujo los símbolos a un conjunto manejable que representaba sonidos específicos (fonemas), simplificando la escritura, facilitando la enseñanza y el aprendizaje, y promoviendo una mayor alfabetización.", "El alfabeto fenicio añadió símbolos complejos y difíciles de entender, lo que hizo que solo una pequeña élite pudiera aprenderlo.", "El alfabeto fenicio se mantuvo aislado y no tuvo influencia en otras culturas.", "El alfabeto fenicio consistía en solo tres letras, lo que limitaba su uso."],
        "correct": 0
    },
    {
        "question": "¿Cuál es uno de los propósitos principales de la Real Academia Española al realizar reformas ortográficas?",
        "options": ["Añadir más letras al abecedario", "Simplificar y unificar la escritura del español", "Eliminar el uso de vocales", "Cambiar los nombres de las letras"],
        "correct": 1
    },
    {
        "question": "¿Cómo afectó la inclusión de las letras \"J\", \"U\" y \"W\" al alfabeto latino durante la Edad Media?",
        "options": ["Simplificó el alfabeto", "Eliminó la necesidad de las vocales", "Satisfizo las necesidades lingüísticas del latín vulgar y las lenguas romances emergentes", "Redujo el número total de letras"],
        "correct": 2
    },
    {
        "question": "¿Qué sistema se utiliza actualmente para la representación de todos los caracteres del alfabeto en las computadoras y dispositivos digitales?",
        "options": ["ASCII", "Unicode", "Morse", "Braille"],
        "correct": 1
    },
    {
        "question": "¿Qué tipo de sistema de escritura representaban los jeroglíficos egipcios?",
        "options": ["Alfabético", "Silábico", "Pictográfico y logográfico", "Fonético"],
        "correct": 2
    },
];
