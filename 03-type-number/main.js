//Les Nombre en JS

20;

-45;

2.654;

-231.254;

//operation de bases
/*
let addition = 45 + 3.2;
console.log(`resultat=${addition}`);

let soustraction = 45-8;
console.log(`soustraction= ${soustraction}`);

let multiplication =  45*3.2;
console.log(`multiplication= ${multiplication}`);

let division = 45/8;
console.log(`division= ${division}`);

let modulo = 45% 8;
 console.log(`modulo=${modulo}`);



 // ordre de prioroté des operation
 let resultat =3 - 9 * 2;
console.log(`3-9*2=${resultat}`);

resultat = (3 - 9) * 2;
console.log(`(3 - 9) * 2 = ${resultat}`);

// les exposants
console.log(2 ** 3);
console.log(2 ** 5);
console.log(2 ** 3);

//le nombre NaN ou NOT A NUMBER
resultat = 0/0;
console.log(`resultat = ${resultat}`);
console.log(typeof resultat)


resultat = 1 / NaN;
console.log(`resultat = ${resultat}`);
console.log(typeof resultat);


resultat = 1 / 0;
console.log(`resultat = ${resultat}`);

resultat = 0;
console.log(`resultat = ${resultat}`);

resultat = -0;
console.log(`resultat = ${resultat}`);

*/

// LES OPERATEURS D'ASIGNATIONS

let x = 3;
x = x + 4;
x += 6;//==> x = x + 6
x -= 1;
x *= 1;
x /=5;

x = 12;
x %=5;

x++;//==> x = x + 1
x--;


++x;
--x;


console.log(`x = ${x}`);



let a = 25;
x = 3;

let resultat = a + x;
console.log(`resultat = ${resultat}`);
/*
resultat = a + x ++;==> post incrémentation
console.log(`x = ${x}`);
console.log(`resultat = ${resultat}`);
*/
/*
resultat = a +  ++ x ;//==> pré incrémentation
console.log(`x = ${x}`);
console.log(`resultat = ${resultat}`);

//EXERCICE
console.log(1.5 + 1.5 * 2);
console.log((10 % 6) ** 2);
console.log(200 + 0 / 0);

// Les Arrondis

console.log(Math.floor (x0.9) );
console.log (Math.floor (x 1.1) );

console.log(Math.floor (x 0.49) );
console.log(Math.floor (x 0.5) );
console.log(Math.floor (x 2.9) );

console.log(Math.cell (x 0.1) );
console.log(Math.cell (x 0.9) );
console.log(Math.cell (x 21) );
console.log(Math.cell (x 21,2) );
*/

// Generateur De Nombre Aleatoire


let aleatoire = Math.random() * 101;
console.log(`aleatoire = ${Math.floor(aleatoire)}`);


//console.log(`aleatoire = ${aleatoire}`);

// Les Opérateur de comparaison

console.log(4<5);
console.log(4<3);
console.log(4<=3);
console.log(4<=4);
console.log(4>=4);
console.log(4>3);
console.log(4 == 3);
console.log(4 == 4);
console.log(4 == '4');
console.log(4 === '4');
console.log(4 === 4);
console.log(4 != 4);
console.log(4 != '4');
