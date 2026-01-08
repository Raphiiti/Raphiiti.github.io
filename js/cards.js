function retournerCarte(idCarte) {
  var carte = document.getElementById(idCarte);

  var faceUno = carte.getElementsByClassName("card-uno")[0];
  var faceContenu = carte.getElementsByClassName("card-contenu")[0];

  faceUno.classList.add("d-none");
  faceContenu.classList.remove("d-none");
}
