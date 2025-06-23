// === Exercice 1 - Télécommande de lampe ===
// TODO:
// 1. Cibler le bouton et l'ampoule
//    - Utiliser document.querySelector() pour sélectionner les éléments
//    - Stocker les références dans des variables
const button = document.querySelector('.switch-btn');
const ampoule = document.querySelector('.light-bulb');
// 2. Ajouter un écouteur d'événement sur le bouton
//    - Utiliser addEventListener() avec l'événement 'click'
// 3. Au clic, basculer la classe 'on' sur l'ampoule
//    - Utiliser classList.toggle() pour ajouter/retirer la classe
button.addEventListener('click', () => {
    ampoule.classList.toggle('on');
});

// === Exercice 2 - Afficheur de mot mystère ===
// TODO:
// 1. Cibler l'input, le bouton et le paragraphe de résultat
// 2. Ajouter un écouteur d'événement sur le bouton
// 3. Au clic, récupérer la valeur de l'input et l'afficher dans le paragraphe

// === Exercice 3 - Simulateur d'humeur ===
// TODO:
// 1. Cibler les boutons et la zone d'affichage
// 2. Ajouter des écouteurs d'événements sur chaque bouton
// 3. Au clic, modifier le texte selon l'humeur sélectionnée

// === Exercice 4 - Contrôle de volume ===

// === Exercice 5 - Nom d'utilisateur en direct ===
