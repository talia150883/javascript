/*

let p = document.querySelector('P');
let div = p.parentNode;//recuperer un parent
console.log(div)
div.style.color = 'blue';


let b = document.body;
console.log(b);
let div = b.childNodes[3];
console.log(div);
let pPremier = div.childNodes[1];
console.log(pPremier);
*/

let toutLesP = document.querySelectorAll('.para');
console.log(toutLesP);

let p2 = toutLesP[1].firstChild;
console.log(p2);
