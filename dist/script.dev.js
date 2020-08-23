"use strict";

var parasTags = document.getElementsByTagName("p");
var oldValue = [];
var newValue = []; // var cmtID = document.getElementById('cmt');
// console.log(oldValue);

for (var i = 0; i < parasTags.length; i++) {
  oldValue.push(parasTags[i].innerHTML);
  newValue.push(oldValue[i].substring(0, 300) + "&hellip;<button type='button' class='btn' onclick='readFullArticle(" + i + ");'>" + "Read More" + "<span class='glyphicon glyphicon glyphicon-chevron-right' aria-hidden='true'></span></button> ");
  parasTags[i].innerHTML = newValue[i]; //console.log(i + "th Para \n\n" + parasTags[i].innerHTML);
}

var prev;

function readFullArticle(i) {
  var parasTagsR = document.getElementsByTagName("p");

  if (prev != undefined) {
    parasTagsR[prev].innerHTML = newValue[prev];
  }

  parasTagsR[i].innerHTML = oldValue[i];
  prev = i;
}