

//les booleens
let estvrai = true;
let estfaux = false;

/*
//Operateur de Negation
console.log(!estvrai) ;

//une parenthese en passant
console.log("a"<"b");
console.log("A"<"b");
console.log("A">"b");
console.log(0 == '');
/*

let age = 23;

if(age >= 25){
    console.log("super division");
}

 if ((age >= 18) && (age < 25)){
     console.log("division normale");
 }

 if (age < 18){
     console.log("division mineur");
 }
*/
/*
let age = 23;

if(age >= 25){
    console.log("super division");
}
else

if ((age >= 18) && (age < 25)){
    console.log("division normale");
}
else

if (age < 18){
    console.log("division mineur");
}

let condition = false;
condition = 0;
condition = "";
condition =NaN;
condition = undefined;
condition = null;

condition = true;
condition = 2;
condition = "zjtf";


if(condition){
    console.log("condition verifiée!!!");
}


// operateur ternaire

//let age + Number (prompt("saisir votre age"));
/*
let message;
if(age >= 18){
    message = "vous etes majeur";

}
else{
    message = "vous etes mineur parce que vous" ;
}
*/
//message = (age >= 18 ?"vous etes majeur":"vous etes mineur");
//alert(`message = ${message}`);




//switch

let numerodujour = Number(prompt(`saisir le numero de jour de la semaine`));
let message ;

switch(numerodujour){
    case 1:
        message = "lundi"
        break;

    case 2:
        message ="mardi"
        break;

    case 3:
        message ="mercredi"
        break;


    case 4:
        message ="jeudi"
        break;


    case 5:
        message ="vendredi"
        break;


    case 6:
        message ="samedi"
        break;


    case 7:
        message ="dimanche"
        break;

    default:
        message = "_un jour inconnu du systeme";
        break;


}
alert (`votre saisie correspond au jour ${message}`);