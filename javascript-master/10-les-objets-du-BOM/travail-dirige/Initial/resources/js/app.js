//Partie 1
//=========

let scoresGlobals =[0, 0];
let scoreEncours = 0;
let joueurActif  = 1;
let jouer = true;

//PARTIE 2
//==========
initialiselejeu();
/*
document.getElementById('score-1').textContent = '0';
document.getElementById('score-2').textContent = '0';
document.getElementById('encours-1').textContent = '0';
document.getElementById('encours-2').textContent = '0';
document.querySelector('.de').style.display = 'none';
*/
//PARTIE 3
//==========

let btnLancezLeDe = document.querySelector(`.btn-lancer`);
btnLancezLeDe.addEventListener('click', () =>{
    if(jouer) {
        let de = Math.floor(Math.random() * 6) + 1;
        let domde = document.querySelector('.de');
        domde.style.display = 'block';
        domde.src = ` resources/images/de-${de}.png`;
        if (de !== 1) {
            scoreEncours += de;
            document.getElementById(`en cours-${joueurActif}`).textContent = scoreEncours;
        }else{
            joueurSuivant();
        }
    }
});

//PARTIE 4
//+++++++++++++++

let btncommutez = document.querySelector('.btn-commuter');
btncommutez.addEventListener('click',() => {
    if (jouer) {
        scoresGlobals[joueurActif - 1] += scoreEncours;
        document.getElementById(`score${joueurActif}`).textContent = scoresGlobals[joueurActif - 1];
        if (scoresGlobals[joueurActif - 1] >= 100) {
            document.getElementById(`nom${joueurActif}`).textContent = 'bravo !!!';
            document.querySelector(`.de`).style.display = 'none';
            document.querySelector(`.joueur-${joueurActif}-panel`).classList.add('vainqueur');
            document.querySelector(`.joueur-${joueurActif}-panel`).classList.remove('active');
            jouer = false;
        }else{
            joueurSuivant();
        }
    }
});

//partie 5
//++++++++++++

function joueurSuivant () {
        joueurActif === 1? joueurActifn = 2 : joueurActif = 1;
        scoreEncours = 0;
        document.getElementById(`encours-${joueurActif}`).textContent = '0';
        document.querySelector(`.joueur-1-panel`).classList.toggle('active');
        document.querySelector(`.joueur-2-panel`).classList.toggle('active');
        document.querySelector(`.de`).style.display = 'none';
}


//PARTIE 06
//+++++++++++
let btnNouveauJeu = document.querySelector(`.btn-nouveau`);
btnNouveauJeu.addEventListener(`click`,() => {
    initialiselejeu();
});



//partie 07
//============

function initialiselejeu() {
    let scoresGlobals =[0, 0];
    let scoreEncours = 0;
    let joueurActif  = 1;

    document.querySelector('.de').style.display = 'none';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('encours-1').textContent = '0';
    document.getElementById('encours-2').textContent = '0';
    document.getElementById('nom-1').textContent = 'joueur 1';
    document.getElementById('nom-2').textContent = 'joueur 2';
    document.querySelector(`.joueur-panel-1`).classList.remove(`vainqueur`);
    document.querySelector(`.joueur-panel-2`).classList.remove(`vainqueur`);
    document.querySelector(`.joueur-panel-2`).classList.remove(`active`);
    document.querySelector(`.joueur-panel-1`).classList.add(`active`);

}












