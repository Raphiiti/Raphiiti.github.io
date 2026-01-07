function afficherDescription(card) {
  const description = card.querySelector(".card-body p.mb-0");

  description.classList.remove("d-none");

  card.classList.add("shadow-lg");
  card.style.transform = "scale(1.02)";
  card.style.transition = "0.2s";
}

function cacherDescription(card) {
  const description = card.querySelector(".card-body p.mb-0");

  description.classList.add("d-none");

  card.classList.remove("shadow-lg");
  card.style.transform = "scale(1)";
}
