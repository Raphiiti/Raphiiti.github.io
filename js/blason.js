// --- Citation en mode "machine à écrire" ---
// Source Gemini car j'avais l'idée en tête mais je ne savais pas comment la mettre en oeuvre
onload = function() {
	const elementCitation = document.getElementById("texte-citation");
	const phrase =
		"“La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.”";
	elementCitation.innerText = ""; //Permet d'être ok avec le W3 Validator pour ne pas avoir de h1 vide
	let index = 0;

	// Fonction qui s'appelle elle-même pour écrire lettre par lettre
	function ecrireLettre() {
		if (index < phrase.length) {
			// On ajoute la lettre correspondant à l'index actuel
			elementCitation.textContent += phrase.charAt(index);
			index++;
			// On attend 50ms avant d'écrire la suivante
			setTimeout(ecrireLettre, 50);
		}
	}
	ecrireLettre();
};

// --- Qualités ---
// Fait à la main sauf quand j'ai fait vérifier mon code par Gemini et j'ai remplacé innerHTML par innerText

const texteQualite = document.getElementById("texte-qualite");
const imgQualite = document.getElementById("img-qualite");

// J'ai codé comme si je codais en python avec des dictionnaires

const dataQualite = {
	ensoleillé: {
		src: "./img/blason-soleil.png",
		txt: "Toujours de bonne humeur, j'apporte de la lumière !",
	},
	curieux: {
		src: "./img/blason-loupe.png",
		txt: "J'adore apprendre et comprendre le comment du pourquoi.",
	},
	sociable: {
		src: "./img/blason-sociable.png",
		txt: "Le contact humain est mon moteur au quotidien.",
	},
	ecoute: {
		src: "./img/blason-oreille.png",
		txt: "Je sais prêter une oreille attentive aux autres.",
	},
};

function changerQualite(type) {
	if (dataQualite[type]) {
		imgQualite.src = dataQualite[type].src;
		texteQualite.innerText = dataQualite[type].txt;
	}
}

function resetQualite() {
	imgQualite.src = "./img/blason-qualite.png";
	texteQualite.innerText = "Passe ta souris sur une qualité !";
}

// --- ¨Passions ---
// Source : Le code JS des qualités mais en modifiant en onclick au lieu de mouseover ou mouseout

function changerPassion(type) {
	const imgElement = document.getElementById("img-passion");
	const titreElement = document.getElementById("titre-passion");

	// Objet JS contenant les données (Image + Texte) pour chaque passion
	const dataPassions = {
		musique: {
			src: "./img/blason-iron-maiden.png",
			txt: "Iron Maiden - Le Groupe de Métal qui a changé mon lycée",
		},
		cinema: {
			src: "./img/blason-cercle-poetes-disparus.png",
			txt: "Le Cercle des Poètes Disparus - Carpe Diem",
		},
		sport: {
			src: "./img/blason-stade-rennais.webp",
			txt: "Stade Rennais F.C. - Mon Club de Coeur ❤️🖤",
		},
	};

	// Mise à jour des passions avec les données correspondantes
	if (dataPassions[type]) {
		imgElement.src = dataPassions[type].src;
		titreElement.innerText = dataPassions[type].txt;
	}
}

// ---Rêves ---
// Source : Structure = Moi mais la partie netoyage = Gemini
function activerReve(reve, couleurFond, couleurTexte) {
	const cardReves = document.getElementById("card-reves");
	const descriptionReve = document.getElementById("description-reve");

	// 1. Nettoyage des anciennes classes de couleur
	cardReves.classList.remove(
		"bg-success-subtle",
		"bg-primary-subtle",
		"bg-warning-subtle",
		"bg-danger-subtle"
	);

	descriptionReve.classList.remove(
		"text-success",
		"text-primary",
		"text-warning",
		"text-danger"
	);

	// 2. Ajout de la nouvelle couleur de fond
	cardReves.classList.add(couleurFond);

	// 4. Ajout de la nouvelle couleur du texte
	descriptionReve.classList.add(couleurTexte);
	// 3. Mise à jour du texte selon le bouton cliqué
	if (reve === "velo") {
		descriptionReve.innerText =
			"🚴‍♂️ Objectif : Réaliser un tour de France complet à vélo en parcournant les frontières naturelles. Je souhaiterai aussi dormir chez l'habitant afin de pouvoir rencontrer des personnes, des cultures, des vies complètements différentes de la mienne et aussi de me dépasser pour ne plus avoir peur du regard des autres en demandant de dormir chez eux ! 🙆‍♂️";
	} else if (reve === "maison") {
		descriptionReve.innerText =
			"🏠Je souhaite construire ou rénover une maison dans la campagne en Bretagne qui soit totalement indépendante énergétiquement. Cela est un engagement écologique mais aussi un investissement dans le long terme pour ne plus devoir payer de factures d'énergie. 🌈 ";
	} else if (reve === "local") {
		descriptionReve.innerText =
			"🥕Je souhaite avoir de l'argent pour pouvoir me permettre de soutenir totalement les producteurs locaux et consommer sainement. Cela veut aussi dire que je ne veux plus du tout être dépendant des grandes surfaces et ne manger que local mais aussi avoir des vêtements plus chers mais de meilleurs qualité et pas fabriqué en Chine mais par des artisants rémunérés correctement. 🥔";
	}
}