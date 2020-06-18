
//NOTION DES OBJET EN JS
//++++++++++++++++++++++++
/*
//a eviter comme syntaxe
let personne = new Object();
personne.prenom = "joachim";
personne.age = "52";
personne.sexe = 'm';

console.log(personne)

 */



//ont va preferer la notation 'JSON'/javascript
//====================================/
/*
 let personne = {
        prenom: 'toulepsi',
        age:'23',
         sexe:'m'
    };
    console.log(personne);
    console.log(personne.age);//ex1
    console.log(personne['age']);//la meme chose que celui du haut ex1
    console.log(typeof personne);//type objet

let personneProp = Object.getOwnPropertyNames(personne);//pour chercher ne nombre de
console.log(personneProp);

*/

//NOTION DE FONCTION
//+++++++++++++++++++++

//let a = 2;
//let b = 3;

//je definit une fonction
/*
function addition(){  // fonction sans argument
    let a = Number(prompt("a"));
    let b = Number(prompt("b"));
 let resultat = a + b ;
 console.log(resultat);
}

//appel de la fonction
addition();


function addition(m, n){ // fonction avec deux argument
    console.log(m + n);
}


 */
/*
function addition(m, n){
    let resultat = m + n ;
    console.log(resultat);
    return resultat;
}

//let autreresultat = addition(-7,5)*6;
//console.log(autreresultat);

//console.log(addition(-7,5));
//console.log(addition(5,6,96))
*/

/*
function addition(m Number = 3, n Number = -1) {
    let resultat = m + n;
    return resultat;
}
console.log(addition());

 */
/*
function addition(...n) {

    let resultat = 0;
    for (const valeur of n);
    resultat += i;
}
return resultat;
}
*/
let addition2 = function (...listeArg) {
    let resultat = 0;
    for(const valeur of listeArg){
        resultat += valeur;
    }
return resultat;
}
addition2(5 );