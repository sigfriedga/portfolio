function aboutShowText () {
    var dots=document.getElementById("dots");
    var moreText=document.getElementById("more-text");
    var showMore=document.getElementById("show-more");

    if (dots.style.display==="none") {
        dots.style.display="inline";
        showMore.innerHTML="Show more";
        moreText.style.display="none";
    }

    else {
        dots.style.display="none";
        showMore.innerHTML="Show less";
        moreText.style.display="inline";
    }
}



// document.getElementById('ver-mas').addEventListener('click', function() {
//         var textoAdicional=document.querySelector('.work-details');
//         var boton=document.getElementById('ver-mas');

//         if (textoAdicional.style.display==='none'|| textoAdicional.style.display==='') {
//             textoAdicional.style.display='block';
//             boton.textContent='Ver menos';
//         }

//         else {
//             textoAdicional.style.display='none';
//             boton.textContent='Ver más';
//         }
//     }

// );

// Get the modal
var modal = document.getElementById("work-modal");

// Get the button that opens the modal
var btn = document.getElementById("work-modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}