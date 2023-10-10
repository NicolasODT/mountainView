const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  if (navLinks.style.display === "none" || navLinks.style.display === "") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});

function adjustBackgroundImageAndText() {
  const pageConfig = {
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
  };

  let pageName = window.location.pathname.split("/").pop();

  let divElement = document.querySelector("header");
  let h1Element = document.querySelector("h1");

  if (pageConfig[pageName]) {
    divElement.style.backgroundImage = `url('${pageConfig[pageName].backgroundImage}')`;
    divElement.style.height = "60vh";
    h1Element.textContent = pageConfig[pageName].text;
  } else {
    divElement.style.backgroundImage = `url('./img/header.jpg')`;

    divElement.style.height = "";
  }
}

window.onload = adjustBackgroundImageAndText;