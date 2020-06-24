let p1 = document.querySelector('p');
p1.addEventListener( 'click', function () {
    this.innerHTML= "<h2>bravo, vous venez de cliquer !!!</h2>";
    this.style.color = "red";
    this.style.textTransform = "uppercase";


});

//let p2 = document.getElementsByTagName('p');
//console.log(p2);

let p2 = document.querySelector('p')[1];
console.log(p2)

p2.addEventListener( 'mouseenter', function () {
    this.innerHTML= "<h2>vous survolez le paragraphe 2</h2>";
    this.style.color = "blue";
    this.style.textTransform = "uppercase";


});

p2.addEventListener( 'mouseleave', function () {
    this.innerHTML= "<h2>vous survolez le paragraphe 2</h2>";
    this.style.color = "orange";
    //this.style.textTransform = "uppercase";


});
