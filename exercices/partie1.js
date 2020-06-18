

//correction partie 1
//++++++++++++++++++++


//1 afficher les nombres de 1 a 10
//===================================

//boucle for
//=============
/*

for(let comppteur = 1; compteur < 11;compteur++){
    console.log(compteur);
}

//let affichage = "";
for (let compteur = 1; compteur < 11; compteur++){
    //affichage = affichage + compteur + "";
   // affichage += compteur + "";
    //affichage +=`${compteur}`;
}
console.log(affichage);
*/

//boucle while
//===============

//let compteur = 1;
//while(compteur < 11){
//console.log(compteur);
 //   compteur++;
//}

//BOUCLE DO WHILE
//+++++++++++++++++

//let compteur = 1;
//do{
 //   console.log(compteur);
 //   compteur++;
//}
//while(compteur < 11);

//=======================================================================================

//2 AFFICHER LA SOMME DES NOMBRES DE 1 A 10
//+++++++++++++++++++++++++++++++++++++++++++

/*
let somme = 0;
for(let i = 1; i <= 10; i++){
    somme += i;
}
console.log(somme);

 */


//=================================================================

//3 SAISIR DEUX NOMBRE N ET M DANS LE CAS OU N EST SUPPERIREUR A M
//===================================================================

//a= afficher un message indiquant que n doit etre inferierieur a m
//===================================================================
/*
let m = Number(prompt(`M`));
let n = Number(prompt(`N`));
/*
if(n > m){
    console.log("n doit être inferieur à m");
}


//b. Permuter n et m, puis afficher les nombres de n à m.
//=============================================================
if( n > m){
    for (let i = n; i >= m; i --){
        console.log(i);
    }
}
*/

//d. Afficher la somme des nombres pairs de n à m.
//==================================================
/*

let somme = 0;
if ( n > m ){
    for (let i = n; i >= m; i--){
        if(i % 2 === 0){
            somme += i;
        }
    }
}

console.log(somme)

 */
//c. Afficher les nombres de n à m de manière décroissante
//================================================================






//6. Lire n nombres et en calculer la moyenne.
//================================================

/*
let n , somme, moyenne, compteur=0;
do {
    Number(prompt(`entrez le nombre de valeur a saisir`));

}while(Number.isNaN(n));

for(let i =1; i < n; i++){
    let value = Number(prompt(`valeur${i + 1}`));
    if(Number.isNaN(value)){
    somme += value;
    compteur++;

    }
}
moyenne = somme/compteur;
console.log(moyenn
);
*/


















