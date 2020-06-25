// Crée par Joachim Zadi le 21/06/2020 à 16:24
// ===========================================

// Retrait d' un nouvel element HTML
// ****************************

let titreH1 = document.getElementById('gros titre');
let parent = document.body;//parent élément
parent.removeChild(titreH1);//supprimer un élémént


// Creer un nouvel element HTML
// ****************************

let newTitle = document.createElement('h2');
newTitle.id = "titreMoyen";
newTitle.textContent= "Expert en Dom";
newTitle.style.color= "orange";
parent.replaceChild(newTitle,titre_h1);