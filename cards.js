document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CONFIGURATION DU STYLE VIA JS (Pour respecter l'interdiction de CSS) ---

  // On définit la hauteur des images pour qu'elles soient propres
  const images = document.querySelectorAll(".card-img-top");
  images.forEach((img) => {
    img.style.height = "200px";
  });

  // Configuration des Scènes (Conteneurs)
  const scenes = document.querySelectorAll(".js-scene");
  scenes.forEach((scene) => {
    scene.style.perspective = "1000px";
    scene.style.height = "420px"; // Hauteur fixe obligatoire pour l'effet flip
    scene.style.cursor = "pointer";
  });

  // Configuration des Cartes (L'objet qui tourne)
  const cards = document.querySelectorAll(".js-card");
  cards.forEach((card) => {
    card.style.width = "100%";
    card.style.height = "100%";
    card.style.position = "relative";
    card.style.transition = "transform 0.8s";
    card.style.transformStyle = "preserve-3d";
  });

  // Configuration des Faces (Avant et Arrière)
  const allFaces = document.querySelectorAll(".js-face-front, .js-face-back");
  allFaces.forEach((face) => {
    face.style.position = "absolute";
    face.style.width = "100%";
    face.style.height = "100%";
    // La propriété magique pour cacher le dos
    face.style.backfaceVisibility = "hidden";
    face.style.webkitBackfaceVisibility = "hidden";
  });

  // Configuration Spécifique de la face arrière (Le contenu caché)
  const backFaces = document.querySelectorAll(".js-face-back");
  backFaces.forEach((back) => {
    // On la tourne de 180° par défaut pour qu'elle soit "dos au mur"
    back.style.transform = "rotateY(180deg)";
  });

  // --- 2. GESTION DU CLIC (INTERACTION) ---

  cards.forEach((card) => {
    // État initial
    card.dataset.flipped = "false";

    card.addEventListener("click", function () {
      if (this.dataset.flipped === "false") {
        // Si pas retourné, on tourne à 180°
        this.style.transform = "rotateY(180deg)";
        this.dataset.flipped = "true";
      } else {
        // Si déjà retourné, on remet à 0°
        this.style.transform = "rotateY(0deg)";
        this.dataset.flipped = "false";
      }
    });
  });
});
