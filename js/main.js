"use strict";
function hideClosestId($pos) {
    $pos.closest("[id]").style.display="none";
}
function popUp($el) {
    document.getElementById("popup").style.display="block";
    // var att = $el.closest("id").getAttribute("src");
    $el.closest("img").setAttribute("src='img/");
    // var att = document.getElementById()
    // var att = "img/img2.png";

    document.getElementsByClassName("container")[0].style.backgroundImage="url(img/img2.png)";
    // document.getElementsByClassName("container")[0].style.backgroundImage="url(../"+ $att +")";
    // document.getElementsByClassName("container")[0].style.backgroundImage="url(../"+ $att +")";
//  need get img path and change .container backrgound;
}