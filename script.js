var paraID = document.getElementById("less-content");
var oldValue = paraID.innerHTML;
// var cmtID = document.getElementById('cmt');
console.log(paraID);
var newVal = oldValue.substring(0, 300) + "&hellip;<button type='button' class='btn' onclick='readFullArticle();'>" + "Read More" + "<span class='glyphicon glyphicon glyphicon-chevron-right' aria-hidden='true'></span></button> ";
paraID.innerHTML = newVal;
console.log(paraID.innerHTML);

function readFullArticle() {
    paraID.innerHTML = oldValue;
}
// function openCmtArea() {
//     cmtID.style.visibility = 'visible';
// }