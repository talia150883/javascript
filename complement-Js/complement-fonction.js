


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

 */
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






//PARTIE 04 EXERCICE//

//1. Créer une chaîne de caractères de 50 '-'
let tiret ='_';
console.log(`tiret: ${tiret.repeat(50)}`);




//2. Inverser une chaîne de caractères (sans supprimer l'originale).
//let tableau = [1, 2, 3, 4, 5];
//tableau.reverse();
//console.log(tableau);

let tata = 'talia doit travailler';
let lala = tata.split("").reverse().join("");
console.log(lala);








//3. Remplacer tous les caractères d'une chaîne par une‘*’
maison = ' ma maison';
maisonné = maison.replace('ma maison','*');
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




//7. Compter le nombre d'occurrence de chaque lettre dans une chaine
let voyage3 = 'je part en italie en vacance';
let lettreE ='e';
let indexoffirst = voyage3.indexOf('lettreE');
console.log(indexoffirst);







//8. Remplacer les double-espace (ou +) dans une chaîne de caractères par un espace.







//9. Découper une chaîne de caractères en mots avec l'espace comme séparateur et les compter.

let fruits ="j'aime, les, pommes ,et, les, poires";
console.log(fruits.split(","));
console.log(fruits.length);





















