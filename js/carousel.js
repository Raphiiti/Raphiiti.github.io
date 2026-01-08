/*Fonction Affichage description ou cacher 
Elle marche comme celle pour le PPP avec un toggle et une condition pour "afficher" ou "cacher" la description*/

function toggleDescription(id, btn) {
  const description = document.getElementById(id);
  description.classList.toggle("d-none");

  if (description.classList.contains("d-none")) {
    btn.textContent = "Afficher la description";
  } else {
    btn.textContent = "Cacher la description";
  }
}
