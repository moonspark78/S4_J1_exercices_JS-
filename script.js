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
const input = document.querySelector('#secret-input');
const button2 = document.querySelector('#show-btn');
const resultParagraph = document.querySelector('#result');
// 2. Ajouter un écouteur d'événement sur le bouton
// 3. Au clic, récupérer la valeur de l'input et l'afficher dans le paragraphe
button2.addEventListener('click', () => {
    const secretWord = input.value;
    resultParagraph.textContent = `Le mot mystère est : ${secretWord}`;
});



// === Exercice 3 - Simulateur d'humeur ===
// TODO:
// 1. Cibler les boutons et la zone d'affichage
const moodButtons = document.querySelectorAll('.mood-btn')
const moodDisplay = document.querySelector('#mood-display')
// 2. Ajouter un écouteur sur chaque bouton
moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 3. Lire la valeur de data-mood
    const mood = button.dataset.mood

    // 4. Modifier le texte selon l’humeur
    if (mood === 'happy') {
      moodDisplay.textContent = "Tu es heureux 😄 !"
    } else if (mood === 'sad') {
      moodDisplay.textContent = "Tu es triste 😢."
    } else if (mood === 'angry') {
      moodDisplay.textContent = "Tu es énervé 😡 !!"
    }
  })
})





// === Exercice 4 - Contrôle de volume ===

// === Exercice 5 - Nom d'utilisateur en direct ===
