function retournerCarte(idCarte) {
  var carte = document.getElementById(idCarte);

  var faceUno = carte.getElementsByClassName("card-uno")[0];
  var faceContenu = carte.getElementsByClassName("card-contenu")[0];

  // Préparer transition et perspective
  carte.style.transition = "transform 0.6s, box-shadow 0.6s";
  carte.style.transformStyle = "preserve-3d";
  carte.style.perspective = "1000px";

  // Si la carte n'est pas retournée (UNO visible)
  if (carte.dataset.retournee !== "true") {
    carte.style.transform = "rotateY(90deg)";

    setTimeout(function () {
      faceUno.classList.add("d-none");
      faceContenu.classList.remove("d-none");

      carte.style.transform = "rotateY(0deg)";
      carte.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
      carte.style.backgroundColor = "#fff";
      carte.style.border = "1px solid rgba(0,0,0,.125)";
    }, 300);

    carte.dataset.retournee = "true";
  } else {
    // Si la carte est déjà retournée (contenu visible) → revenir à UNO
    carte.style.transform = "rotateY(90deg)";

    setTimeout(function () {
      faceContenu.classList.add("d-none");
      faceUno.classList.remove("d-none");

      carte.style.transform = "rotateY(0deg)";
      carte.style.boxShadow = "none";
      carte.style.backgroundColor = "transparent";
      carte.style.border = "0";
    }, 300);

    carte.dataset.retournee = "false";
  }
}
