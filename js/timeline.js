// --- 1. FONCTIONS DE SURVOL (Déjà présentes dans ton code) ---
function afficherDescription(btn) {
	const desc = btn.querySelector(".d-none");
	if (desc) desc.classList.remove("d-none");
}

function cacherDescription(btn) {
	// Cette logique dépend de comment tu veux gérer la sortie
	// Si tu veux recacher le texte, tu peux remettre d-none ici
	// const desc = btn.querySelector('p:last-child');
	// if (desc) desc.classList.add('d-none');
}

// --- 2. GESTION DU SCROLL ANIMÉ ---

// On cible spécifiquement les cartes DANS la timeline
// Cela évite de cacher la ligne verticale qui est sur le parent
var elementsTimeline = document.querySelectorAll(".timeline-2 .card");

// A. Initialisation : On cache les cartes via JS au chargement
for (var i = 0; i < elementsTimeline.length; i++) {
	elementsTimeline[i].style.opacity = "0"; // Invisible
	elementsTimeline[i].style.transition = "all 0.6s ease-out"; // Animation fluide
	elementsTimeline[i].style.transform = "translateY(50px)"; // Décalé vers le bas
}

// B. Fonction qui vérifie la position au scroll
function animerTimeline() {
	var hauteurEcran = window.innerHeight;
	var margeDeDeclenchement = 150; // On déclenche 150px avant le bas

	for (var i = 0; i < elementsTimeline.length; i++) {
		var element = elementsTimeline[i];
		var position = element.getBoundingClientRect().top;

		// Si l'élément entre dans la zone visible
		if (position < hauteurEcran - margeDeDeclenchement) {
			// On affiche et on remet à sa place
			element.style.opacity = "1";
			element.style.transform = "translateY(0)";
		}
	}
}

// C. On lance l'écouteur d'événement
window.addEventListener("scroll", animerTimeline);

// D. On lance une fois au démarrage pour afficher les premiers éléments
animerTimeline();

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