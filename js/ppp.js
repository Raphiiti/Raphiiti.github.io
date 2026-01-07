/* SCROLL AUTOMATIQUE*/

function ScrollVersProchaineSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

/* BOUTON "LIRE PLUS"*/
function lirePlus(id) {
  const text = document.getElementById(id);
  //On préfère toggle à add ou delete
  text.classList.toggle("d-none");
}
