function hideClosestId($pos) {
    $pos.closest("[id]").style.display="none";
}
function popUp($el) {
    var elem = $el.parentNode.parentNode.lastElementChild.getAttribute("src");
    document.getElementById("popup").style.display="block";
    document.getElementsByClassName("container")[0].style.backgroundImage="url("+elem+")";
}