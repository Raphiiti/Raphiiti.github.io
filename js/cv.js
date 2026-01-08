function imprimerCV() {
	window.print();
}

document.getElementById("emailLink").onclick = (evenement) => {
	evenement.preventDefault();
	navigator.clipboard.writeText(evenement.target.textContent);
	copyMsg.classList.remove("d-none");
	setTimeout(() => copyMsg.classList.add("d-none"), 1500);
};

const hobbies = {
	music: {
		title: "Musique",
		text: "Je pratique la musique depuis plusieurs années. Elle m’a permis de développer la rigueur, l’écoute et le travail en groupe.",
	},
	velo: {
		title: "Vélo",
		text: "Le vélo est une passion centrale dans mon quotidien. Il développe l’endurance, la persévérance et l’esprit d’effort.",
	},
	photo: {
		title: "Photographie",
		text: "La photographie me permet d’exprimer ma créativité et de développer mon sens de l’observation.",
	},
	tech: {
		title: "Bénévolat",
		text: "Le bénévolat m’a permis de développer des compétences humaines comme l’entraide, l’organisation et l’engagement.",
	},
};

function afficherHobby(cle) {
	document.getElementById("modalTitre").innerText = hobbies[cle].title;

	document.getElementById("modalTexte").innerText = hobbies[cle].text;

	const modal = new bootstrap.Modal(document.getElementById("modal"));
	modal.show();
}