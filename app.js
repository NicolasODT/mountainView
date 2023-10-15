const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

/**
 * Active ou désactive le menu de navigation en fonction de son état actuel.
 */

function toggleNavLinksDisplay() {
    navLinks.classList.toggle('active');
}

burgerMenu.addEventListener("click", toggleNavLinksDisplay);




const PAGE_CONFIG = {
  "details1.html": {
      backgroundImage: "./img/details1.jpg",
      text: "NORVEGE",
  },
  "details2.html": {
      backgroundImage: "./img/details2.jpg",
      text: "NEW-ZEALANDE",
  },
  "details3.html": {
      backgroundImage: "./img/details3.jpg",
      text: "CANADA",
  },
  "default": {
      backgroundImage: './img/header.jpg',
      text: 'MOUNTAIN VIEW',
  }
};

const HEADER_HEIGHT = "60vh";

/**
 * Ajuste l'image de fond et le texte de la page selon le nom de fichier de la page en cours.
 * 
 * - Récupère le nom de la page actuelle depuis l'URL.
 * - Si ce nom est dans `PAGE_CONFIG`, utilise les paramètres associés; sinon, utilise les paramètres par défaut.
 * - Modifie l'image de fond du `<header>`. Si c'est l'image par défaut, ajuste la hauteur.
 * - Met à jour le texte du titre principal (`<h1>`).
 */

function adjustBackgroundImageAndText() {
  const pageName = window.location.pathname.split("/").pop();
  const { backgroundImage, text } = PAGE_CONFIG[pageName] || PAGE_CONFIG.default;

  const divElement = document.querySelector("header");
  const h1Element = document.querySelector("h1");

  divElement.style.backgroundImage = `url('${backgroundImage}')`;
  divElement.style.height = backgroundImage === PAGE_CONFIG.default.backgroundImage ? "" : HEADER_HEIGHT;
  h1Element.textContent = text;
}

window.onload = adjustBackgroundImageAndText;
