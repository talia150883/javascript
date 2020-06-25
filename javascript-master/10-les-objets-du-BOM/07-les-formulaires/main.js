// Crée par Joachim Zadi le 24/06/2020 à 05:15
// ===========================================

//ETAPE 1

//on selectionne les elements de la page
let formulaire = document.getElementById('formulaire');
let saisie = document.getElementById('saisie');
let erreur = document.getElementById('erreur');


//ETAPE 2

//le systeme genere un nombre aleatoire ( 1 <-> 10)
let alea = Math.floor(Math.random()*10)+1;
let nbcoup = 0;
let nombreChoisit ;





//ETAPE 3

//ont verifie que la saisie est un nombre
saisie.addEventListener("keyup", () =>{
    if( isNaN(saisie)){
        //on affiche le message d'erreur
        erreur.style.display='inline';
    } else {
        erreur.style.display = 'none';
    }


})


//ETAPE 4

//empeche la reactualisation de la page
//ont valide le formulaire
formulaire.addEventListener('submit',function(e){
    //ont desactive le comportement par defaut du navigateur
    e.preventDefault();

    //on verifie les infos saisie par l'utilisateur
    if(isNaN(saisie.value) || saisie.value.trim() == ''){
        //on met une couleur de boedure rouge
        saisie.style.borderColor = 'red';
    }else{
        //ont incremente le nombre de coup
        nbcoup++;

        // on met une couleur argent
        saisie.style.borderColor = 'yellow';

        // on recupere le saisie de l'utilisateur
        nombreChoisit = saisie.value;

        // on reinitialise le champ de saisie
        saisie.value= '';

        //on appelle la fonction de verification
        verifier(nombreChoisit);

    }

    }
);
//ETAPE 5

//on ecrit la fonction de verification

function verifier(nombre){

    //on crée un element qui va encapsuler notre message
    let instruction =document.createElement('p');

    if (nombre < alea){
         instruction.className = 'alert alert-danger';
         instruction.textContent = 'coup n°${nbcoup} [${nombre}], c est plus grand';

    }else if (nombre > alea){
         instruction.className = 'alert alert-danger';
         instruction.textContent = 'coup n°${nbcoup} [${nombre}], c est plus petit';
    }else{
         instruction.className = 'alert alert-danger';
         instruction.textContent = 'coup n°${nbcoup} [${nombre}], bravo c est  le nombre trouvé';
    }
}

document.getElementById('')














