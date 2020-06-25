


/*
function somme(a ,b){

    return a + b;
}
somme (2,3);

let modulo = function ( a,b){
    return a % b ;
}
modulo (9,4);

let division = (a,b)=>{
    return a/b;
}

 /*
let message;
function auSecours(){
    let message = `a l'aide je suis au pris au piege par les flammes`;
    console.log(message);
}
//auSecours();
//console.log(message);

let oiseau = "duck Algerien";
function nomOiseau(){
    let oiseau = "corbeau Iranien";
    console.log(oiseau);
}

//console.log(oiseau);
//nomOiseau();

let rayon = 8;
if (rayon > 8) {
  const PI = Math.PI;
  let perimetre = 2 * PI * rayon;
}

//console.log(rayon);
//console.log(PI);
//console.log(perimetre);

let externe = () =>{
    let hero = "spiderman";
    function intern(){
        let appleAide =`${hero}, s'il te plait aide moi`;
    }
}
// externe();
//interne();

//function definitDeuxFois(fonct){
 //   fonct();
 //   fonct();
//}

//function rire(){
 //   console.log("ahahahahahaha");
//}
//definitDeuxFois(rire);

//let tab = [1, 2, 3, 4];
//let tabmap = tab.map(function (i )) {
//    return i *3;
//}
//console.log(tab);

//let tableau = [48, -69, 78, -1, -23, 45];
//console.log(tableau);
//let tableauTrie = tableau.sort(compareFn)
*/



//+++++++++++++++++++//
//PARTIE 04 EXERCICE//
//++++++++++++++++++//

//1. Créer une chaîne de caractères de 50 '-'
let tiret ='_';
console.log(`tiret: ${tiret.repeat(50)}`);




//2. Inverser une chaîne de caractères (sans supprimer l'originale).
let tata = 'talia doit travailler';
let lala = tata.split("").reverse().join("");
console.log(lala);








//3. Remplacer tous les caractères d'une chaîne par une‘*'

maison = ' ma maison';
maisonné = maison.replace(/[ma maison]/gi,"*" );                                //replace('ma maison','*');
console.log(maisonné);




//4 Remplacer toutes les occurrences d'une lettre par une autre dans une chaîne de caractères.

couleurs = 'rouge, jaune, rouge,vert';
nvllcouleur = couleurs.split('r').join('t');
console.log(nvllcouleur);



//5. Supprimer toutes les occurrences d'une lettre dans une chaîne de caractères.
//last index
voyage = 'je part en vacance en italie la plus belle des ville';
voyage2 = voyage.split('e').join('');
console.log(voyage2);





//6. Afficher la présence d'une lettre dans une chaîne (si oui,en afficher le nombre (quantité,si non,afficher "absent").

let animeaux = "j'ai un chien deux chats et un perroquet";
console.log(animeaux[5]);
let arr=[];
let chr="u"
for(let item of animeaux){
    if(item === chr)arr.push(item);
}
console.log("nbr de",chr,"=",arr.length)



//7. Compter le nombre d'occurrence de chaque lettre dans une chaine


let voyage3 = 'je part en italie en vacance';
let count = 0;
let pos = voyage3.indexOf("i");

while( pos != -1){
    count++;
    pos = voyage3.indexOf("i",pos +1);

}
console.log(count);








//8. Remplacer les double-espace (ou +) dans une chaîne de caractères par un espace.
let journée = ' un jour   de    plus   de     au  soleil ';
console.log (journée);
 journée2 = journée.replace(/ +/g, ' ');
console.log(journée2);
//let journée2 = journée.replace(/ +/g, '');

//console.log(journée);
//console.log(journée.trim('-'));
//console.log(journée2);





//9. Découper une chaîne de caractères en mots avec l'espace comme séparateur et les compter.
/*
let fruits ="j'aime les pommes et les poires"
console.log(fruits.split(","));
console.log(fruits.length);
*/
let fruits = 'pomme poire prune';
let tab = fruits.split(" ");
for( let i = 0; i < tab.length; i++){
    console.log(tab[i]);

}
console.log(fruits.length);
console.log(tab.lenght)






//++++++++++//
//PARTIE 05//
//++++++++++//










 //['a','e','i','o','u','y'];


















//1. Ecrire la fonction isMultiple, qui prend deux entiers n et m et retourne vrai si et seulement si n est un multiplede m
/*
let n = Number (prompt("nombre de valeur a saisir"));
let m = Number (prompt("nombre de valeur a saisir"));

if (number.isNaN(n),(m)){

    do {
        alert("Votre saisie doit etre un nombre");
        n = Number(prompt("Nombre de valeurs à saisir"));
    } while (Number.isNaN(n));
}

let somme = 0;
for (let i = 1; i <= n; i++) {
    let saisie = Number(prompt(`Nombre N°${i}`));
    if (Number.isNaN(saisie)) {
        do {
            alert("Votre saisie doit etre un nombre");
            saisie = Number(prompt(`Nombre N°${i}`));
        } while (Number.isNaN(n));
    }
    somme += saisie;
}
console.log(`moyenne = ${somme / n}`);
*/

//2. Ecrire la fonction isEven, qui prend un entier i et retourne vrai si et seulement si i est un nombre pair. « Notre méthode ne peut pas utiliser la multiplication,le module,ou la division comme operateur en son sein»
//let i = 'nombre pair';

//function isEven (i = true){



/*

function ismultiple() {
    let n=Number(prompt("n="));
    let m=Number(prompt("m="));
    if ((n % m)==0){
        alert(`${n}`+`est un multiple de `+` ${m}`);
    }
    else {
        alert(`${n}`+`n'est pas un multiple de `+` ${m}`);
    }
    return n%m;
}
ismultiple();

*/
/*
function pair(chiffre){
    chiffre=Number(prompt("n="));
    chiffre=parseInt(chiffre);
    return ((chiffre & 1)=='0')?true:false;
}
alert(pair());
*/












//5 ECRIRE UNE METHODE QUI COMPTE LES VOYELLE










//let index = 'tous les eleves travailles depuis ce matin';

//function talia (a){
//    let c = a.match(/[aeiou]/gi);
//    return b === null? o : m.length;
  //  console.log(a);
//}

//nom = "talia".replace(/[aeiou]/g," ").lenght;
//console.log(nom);









