/* SCROLL AUTOMATIQUE*/

function ScrollVersProchaineSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

// On ajoute le paramètre 'btn' pour récupérer le bouton cliqué
function lirePlus(id, btn) {
  const text = document.getElementById(id);
  //On préfère toggle à add ou delete
  text.classList.toggle("d-none");

  // Si l'élément a la classe d-none, il est caché -> on affiche "Lire plus"
  // Sinon, il est visible -> on affiche "Voir moins"
  if (text.classList.contains("d-none")) {
    btn.textContent = "Lire plus";
  } else {
    btn.textContent = "Voir moins";
  }
}
