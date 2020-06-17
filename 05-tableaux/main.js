
//les tableaux
//===============
/*
// Declaration

let stagiaire = [`Roxana,Talia,Sabrine,Bakary,souly,aoukas,toulepi,badji`];
//tableau de chaine de caractere en string nouvelle version privilégier

//ancienne facon de faire les tableaux
let numeros = Array(`1,2,3`);
//ancienne facon de faire les tableaux
let tabMixe = new Array(`true,68,chat,null,[45,joachim]`);


// Tailles du Tableaux ==> lenght
//===================================

let tailles = stagiaire.length
console.log(`taille = ${tailles}`);
console.log(`tailleNumero = ${numeros.length}`);
console.log(`tailleTabMixed = ${tabMixed.length}`);

// Acces au elements du tableau
//==============================

console.log(stagiaire[0]);
console.log(stagiaire[7]);
console.log(stagiaire[3]);
console.log(stagiaire[8]);

//Modifier les elements d'un tableau
//====================================

stagiaire[8] = `tayachi`;
console.log(stagiaire[8]);

stagiare[2] = `Gueda`;
console.log(stagiaire[2]);


/*

//Methode de Tableaux
//=======================
let numeros = [1,2,3,4];
console.log(numeros);

//ajoute en fin de tableau
//=========================
numeros.push(-5);
console.log(numeros);
*/

/*
//supprime le dernier element du tableau
//=======================================
numeros.pop();
console.log(numeros);


//Ajout en debut de tableau
//===========================
numeros.unshift(-5);
console.log(numeros);
*/


/*
//Supprime le premier element du tableau
//========================================
let numeros = [1,2,3,4];
numeros.shift();
numeros.shift();
console.log(numeros);
*/

//les Boucles
//================

//Pour ==> For
//==============
/*
for (let i = 1; i <= 10; i++){
    console.log(i);
}
*/
//Tant Que ==> while
//====================
/*
let i = 1;

while ( i<= 10){
    console.log(i);
    i++;
    // i+1 i+2 i+3 jusqu'a 10
}


// Repeter Tant Que ==> Do ... While
//======================================

let compteur = 1 ;
//console.log("Do ... While");

do {
    //instruction
    console.log(compteur);
    compteur++;
}
while(compteur <= 10)
*/

//let stagiaire = ['roxana', 'talia','sabrine','bakary','souly','aoukas','toulepi','bakary'];
//for(let i=0; i < stagiaire.length; i++){
//   console.log(stagiaire[i]);
//}
/*
let compteur = 0;
while(compteur<stagiaire.length){
    console.log(stagiaire[compteur]);
    compteur++;
}
*/
//For ... Of ==> Pour Acceder aux elements du tableau
//=====================================================
/*
let stagiaires = ['roxana', 'talia','sabrine','bakary','souly','aoukas','toulepi','bakary'];

for (let stagiaire of stagiaires ){

    console.log(stagiaire);
}



//For... In ==> pour acceder au index du taleau
//=================================================

for (let position in stagiaires) {
    console.log(`(${position},${stagiaires[position]})`);
}


 */


//Mot cle Break & Continue
//=================
/*
for (let i = 1 ; i < 10 ; i++){
    if (i === 6){
    //break;
        continue;

}
console.log(i);
}
*/
//exo 1
//========


 //for (let i=1; i<11; i++){
//    console.log(i);
//}

//exo2
//======
//let somme = 0;
//for(let i = 1; i<11; i++){
//    console.log(i);
//}


//exo3
//=======
// let somme = n;
// for(let somme = n; somme < m;){
 //   alert(message = ${n doit être inferieur a m});
//}
/*
let n = number(prompt(`n = `));
let m = number(prompt(`m = `));
let message;
if (n>m){

message = "m doir etre inferieur a n ";
}
alert(message);

 */

/*
if (n >= m) {
    let c = n;
    n = m;
    m = c;

    for (let i = n; i <= m; i++) {
        console.log(i);
    }
}

 */


//if(n>= m){
 //   for(let i = n; i >= n; i--);{
//        console.log(i);
 //   }
//}

/*

if (n >= m){
    let somme = 0;
    for (let i = m; i <= n; i++);
    if(1 % 2 === 0){
        somme += i;
    }
}

console.log(`somme = ${somme}`);

*/
/*
let plusGrand;
let tabNombres = [];

for (let i = 1; i <= 10; i++){
let nombre = Number(prompt(`entrez le nombre ${i}`));
tabNombres[i] = nombre;

if(plusGrand === undefined || plusGrand < nombre){
    plusGrand = nombre;
}
}
console.log(tabNombres);
console.log(`plusGrand = ${plusGrand}`);

*/

let plusPetit;
let tabNombres = [];
let indicePlusPetit = -1;

for (let i = 0; i =>10; i++){
    let nombre = Number(prompt(`entrez le nombre ${i}`));
    tabNombres[i] = nombre;

    if(plusPetit === undefined ||  nombre < plusPetit){
        plusPetit = nombre;
        indicePlusPetit = i;
    }
}
console.log(tabNombres);
console.log(`plusGrand = ${plusPetit}`);
console.log(`indicePlusPetit`)



