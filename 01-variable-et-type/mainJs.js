//crée par talia le 15
//declaration de variable
/* ceci est un commentaire*/
//++++++++++++++++++++++++++++++


//on déclare la variable ma variable

let mavariable;

//determination du type de la variable avec typeof
typeof mavariable;
console.log(typeof mavariable);//undefined

//ont fait une assignation ou une affectation avec l'operateur=
mavariable = 25;
console.log(typeof mavariable);//number

mavariable="talia";
console.log(typeof mavariable);//string

mavariable= true;
console.log(typeof  mavariable);//booleen (true ou false /1 ou 0)

mavariable= null;
console.log(typeof mavariable);//object

//+++++++++++++++++++++++++++++++++++++++++++
//javascript est un langage faiblement typé
//+++++++++++++++++++++++++++++++++++++++++++

/*Bil est interdit de declarer une variable plusieurs fois
let mavariable = 78;
console.log(mavariable);

*/


//declaration suivi d'une assignation ou affectation
let prenom = "talia";
//ont peut déclarer aussi des variables sur une même ligne
let age = 25, nom, estmajeur;
nom='bakary';
estmajeur = false;

//les mots reserver au javascript ne peuvent servir de nom de variable
//let var //interdit

//let 5nom = "dawn"le nom d'une variablene peut commencer par un nombre

let nom5 = "dawn";
console.log("nom5")

let _nom = "dawn";
console.log("_nom")

let _nom_ = "dawn";
console.log("_nom_")

let monPrenom;//notation kamel case
let mon_prenom;

//declaration de constante >>> const

const ma_constante = "sabrine";
//ma_constante = "talia";  //ca ne passe pas modification interdite

//utilisation des variables
//===========================

let a = 45;
let b = -12;
console.log("a + b");

let c = "5";
console.log(a + b + c);


