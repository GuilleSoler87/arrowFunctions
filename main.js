// 1. Funciones flecha

// Convierte la siguiente función en una función flecha:

// function saludar() {
//   return "Hola";
// }

const saludar = () => "Hola";
console.log(saludar())

// Convierte la siguiente función en una función flecha en línea:

// function division(a,b) {
//   return a / b;
// }

const division = (a, b) => a / b;
console.log(division(10, 5))

// Convierte la siguiente función en una función flecha:

// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre("Guillermo"));

// Convierte las siguientes funciones en funciones flecha:

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }	

const test2 = () => {
    console.log("Función test 2 ejecutada.");
}

const test1 = (callback) => {
    callback();
}

test1(test2);


//   2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];


// Crea un array con la gente mayor de 25 años y muéstralo por consola.

const genteMayor25 = [];
gente.forEach(persona => {
    if (persona.edad >= 25) {
        genteMayor25.push(persona);
    }
});

console.log(genteMayor25);

// Crea un array con la gente que empieza por J. 

const genteJ = [];
gente.forEach(persona => {
    if (persona.nombre[0] === "J") {
        genteJ.push(persona);
    }
});
console.log(genteJ)


// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const gente25Mayor = gente.map(persona => {
    if (persona.edad >= 25) {
        return persona;
    }
});

console.log(gente25Mayor)

// Crea un array con la gente que empieza por J. 

const Jgente = gente.map(persona => {
    if (persona.nombre[0] === "J") {
        return persona;
    }
});

console.log(Jgente)

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [4, 5, 6, 7, 8, 9, 10];

const numbersSquared = numbers.map((num) => {
    return Math.pow(num, num);
});

console.log(numbersSquared);

// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]


// 4. Filter
// Crea un segundo array que devuelva los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numImpa = numbers2.filter(numero => numero % 2 !== 0);

console.log(numImpa)

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];
/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/

const platoVeg = foodList.filter(plato => plato.isVeggie);

const expresiones = platoVeg.map(plato => `Que rico ${plato.name} me voy a comer!`);

console.log(expresiones);


// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros = [39, 2, 4, 25, 62];
const multNum = numeros.reduce((a, b) => a * b)

console.log(multNum)

// Salida--> 483600


// Extras
// Map
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];

const staffFrases = staff.map(persona => `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(' y ')}.`);

console.log(staffFrases);

// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */



// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];
const foodFrases = foodList2.map(food => {
    if (food === 'Pizza') {
        return `Como soy de Italia, amo comer ${food}`;
    } else if (food === 'Ramen') {
        return `Como soy de Japón, amo comer ${food}`;
    } else if (food === 'Paella') {
        return `Como soy de Valencia, amo comer ${food}`;
    } else if (food === 'Entrecot') {
        return `Aunque no como carne, el ${food} es sabroso`;
    } else {
        return `No me gusta ningún plato`;
    }
}
);

console.log(foodFrases);

//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/
// He añadido un else que indica "No me gusta ningún plato" Por lo que en el array si no coincide ningún String, o es un string vacío, devolverá este valor else.


// Filter
// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/

const caro300 = inventory.filter(cosas => cosas.price > 300);

const filt300 = caro300.map(cosas => cosas.name);

console.log(filt300);


// Reduce
// Concatena todos los elementos del array con reduce para que devuelva una sola frase


const sentenceElements = [
    'Me', 
    'llamo',
    'Guillermo',/* Tu nombre aquí! */
    'y',,
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const sum = sentenceElements.reduce((a,b)=> `${a} ${b}`);
console.log (sum)

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
