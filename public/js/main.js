// Show text in About section
function aboutShowText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more-text");
    var showMore = document.getElementById("show-more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        showMore.innerHTML = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        showMore.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
}

// Experience modal
var modal = document.getElementById("work-modal");
var btn = document.getElementById("work-modal-btn");
var span = document.getElementsByClassName("close")[0];
// open the modal
btn.onclick = function () {
    modal.style.display = "block";
}
// close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}