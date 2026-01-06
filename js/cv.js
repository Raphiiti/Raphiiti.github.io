function imprimerCV() {
  window.print();
}

function afficherHobby(type) {
  const data = {
    music: "🎸 Je pratique la guitare électrique depuis 5 ans (Blues & Rock).",
    velo: "🚴‍♂️ J'aime le cyclotourisme et les sorties sportives le week-end.",
    photo: "📷 Passionné par la photographie de rue et l'argentique.",
    tech: "💻 Veille technologique constante sur le Web et l'IA.",
  };

  const container = document.getElementById("zone-info-hobby");
  const texte = document.getElementById("texte-hobby");

  texte.innerText = data[type];
  container.classList.remove("d-none");
}
