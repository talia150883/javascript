//les selecteurs en jQuery

// en javascript = document.getElemntbytagname//


//cibler un element avec sont ID
//$ (document).ready(function(){
//  $("button").click( function(){
//    $('#test').hide();


//cibler un element en html
// $("button").click()(function (){
// $('p').hide();


// cibler un element de da classe
// $ (document).ready(function(){
//  $("button").click( function(){
//  $('.maclasse').hide();

//cibler les elements p qui ont la classe test
// $ (document).ready(function(){
// $("button").click( function(){
// $('p.test').hide();

//cibler le premier element p
//$ (document).ready(function(){
//   $("button").click( function(){
//       $('p:first').hide();

//cibler l'element ul
//$(document).ready(function () {
  //  $("button").click(function () {
//        $('ul').hide();


//    });
//});

$ (document).ready(function() {
    $("button").click(function () {
        $('p:first').hide();

    });
});