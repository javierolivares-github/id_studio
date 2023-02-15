// VARIABLES
const navbarLang = document.querySelector(".navbar__lang");
const navbarLangMobile = document.querySelector(".navbar__lang__mobile");
const navbarItemMobile = document.querySelector(".navbar__item__mobile span");
const navbarLangEn = document.querySelector(".navbar__lang__en");
const navbarLangEs = document.querySelector(".navbar__lang__es");
const navbarLangIcon = document.querySelector(".navbar__lang__icon");
const navbarPhone = document.querySelector(".navbar__phone");
const navbarLinks = [...document.querySelectorAll(".navbar__link")];
const heroTitle = document.querySelector(".hero__title");
const heroCopy = document.querySelector(".hero__copy");
const heroBtn = document.querySelector(".hero__content .btn__primary")
const aboutHeading = document.querySelector(".about__heading");
const aboutCopies = document.querySelectorAll(".about__copy");
const servicesHeading = document.querySelector(".services__heading");
const servicesCardTitles = document.querySelectorAll(".services__card__title");
const servicesCardCopies = document.querySelectorAll(".services__card__copy");
const servicesButton = document.querySelector(".services .btn__primary");
const portfolioHeading = document.querySelector(".portfolio__heading");
const portfolioMenu = [...document.querySelectorAll(".portfolio__menu__item")];
const plans__heading = document.querySelector(".plans__heading");
const plans__card__headings = [...document.querySelectorAll(".plans__card__heading")];
const plans__card__numbers = [...document.querySelectorAll(".plans__card__number")];
const plans__card__periods = [...document.querySelectorAll(".plans__card__period")];
const plans__card__items = [...document.querySelectorAll(".plans__card__item")];
const plans__card__buttons = [...document.querySelectorAll(".plans__card .btn__secondary")];
const testimonials__heading = document.querySelector(".testimonials__heading");
const testimonials__card__jobs = [...document.querySelectorAll(".testimonials__card__job")];
const cta__heading = document.querySelector(".cta__heading");
const cta__button = document.querySelector(".cta .btn__primary");
const footer__copy = document.querySelector(".footer__copy");
const footer__author = document.querySelector(".footer__author");
const footer__menu__heading = document.querySelector(".footer__menu__heading");
const footer__menu__links = [...document.querySelectorAll(".footer__menu__link")];
const footer__contact__heading = document.querySelector(".footer__contact__heading");
const footer__address__headings = [...document.querySelectorAll(".footer__address__heading")];
const footer__address__copies = [...document.querySelectorAll(".footer__address__copy")];
const languagesDB__URL = "../languagesDB.json";




// ESCUCHAS DE EVENTO
// Agrega un evento onChange al selector de idiomas y corre una función para cambiar el idioma de la página.
navbarLang.addEventListener('change', changeLanguage);
navbarLangMobile.addEventListener('change', changeLangFromMobile);


// FUNCIONES
// Función para animar el cambio de idioma en el navbar
function changeLanguage() {
  const index = navbarLang.selectedIndex;
  const selectedOption = navbarLang.options[index].value;

  switch (selectedOption) {
    case 'spanish':
      spanishContent();
      break;
    case 'english':
      englishContent();
      break;
    default:
      englishContent();
  }
}

function changeLangFromMobile() {
  const index = navbarLangMobile.selectedIndex;
  const selectedOption = navbarLang.options[index].value;

  switch (selectedOption) {
    case 'spanish':
      spanishContent();
      break;
    case 'english':
      englishContent();
      break;
    default:
      englishContent();
  }
}




// Función para crear una UI en Español
const spanishContent = async () => {
  const res = await fetch(languagesDB__URL);
  const data = await res.json();
  const spanishDB = data[0];

  // NAVBAR
  navbarLinks[0].textContent = `${spanishDB.navbarLinks__0}`;
  navbarLinks[1].textContent = `${spanishDB.navbarLinks__1}`;
  navbarLinks[2].textContent = `${spanishDB.navbarLinks__2}`;
  navbarPhone.textContent = `${spanishDB.navbarPhone}`;
  navbarItemMobile.innerHTML = `${spanishDB.navbarItemMobile}`;
  // HERO
  heroTitle.textContent = `${spanishDB.heroTitle}`;
  heroCopy.textContent = `${spanishDB.heroCopy}`;
  heroBtn.textContent = `${spanishDB.heroBtn}`;
  // ABOUT
  aboutHeading.innerHTML = `${spanishDB.aboutHeading}`;
  aboutCopies[0].textContent = `${spanishDB.aboutCopies__0}`;
  aboutCopies[1].textContent = `${spanishDB.aboutCopies__1}`;
  // SERVICES
  servicesHeading.innerHTML = `${spanishDB.servicesHeading}`;
  servicesCardTitles[0].textContent = `${spanishDB.servicesCardTitles__0}`;
  servicesCardTitles[1].textContent = `${spanishDB.servicesCardTitles__1}`;
  servicesCardTitles[2].textContent = `${spanishDB.servicesCardTitles__2}`;
  servicesCardTitles[3].textContent = `${spanishDB.servicesCardTitles__3}`;
  servicesCardCopies[0].textContent = `${spanishDB.servicesCardCopies__0}`;
  servicesCardCopies[1].textContent = `${spanishDB.servicesCardCopies__1}`;
  servicesCardCopies[2].textContent = `${spanishDB.servicesCardCopies__2}`;
  servicesCardCopies[3].textContent = `${spanishDB.servicesCardCopies__3}`;
  servicesButton.textContent = `${spanishDB.servicesButton}`;
  // PORTFOLIO
  portfolioHeading.innerHTML = `${spanishDB.portfolioHeading}`;
  portfolioMenu[0].innerHTML = `${spanishDB.portfolioMenu__0}`;
  portfolioMenu[1].innerHTML = `${spanishDB.portfolioMenu__1}`;
  portfolioMenu[2].innerHTML = `${spanishDB.portfolioMenu__2}`;
  portfolioMenu[3].innerHTML = `${spanishDB.portfolioMenu__3}`;
  // PLANS
  plans__heading.innerHTML = `${spanishDB.plans__heading}`;
  plans__card__headings[0].textContent = `${spanishDB.plans__card__headings__0}`;
  plans__card__headings[1].textContent = `${spanishDB.plans__card__headings__1}`;
  plans__card__headings[2].textContent = `${spanishDB.plans__card__headings__2}`;
  plans__card__numbers[0].textContent = `${spanishDB.plans__card__numbers__0}`;
  plans__card__numbers[1].textContent = `${spanishDB.plans__card__numbers__1}`;
  plans__card__numbers[2].textContent = `${spanishDB.plans__card__numbers__2}`;
  for (let i = 0; i < plans__card__numbers.length; i++) {
    plans__card__numbers[i].style.font = "var(--headline-1)";
  }
  plans__card__periods[0].textContent = `${spanishDB.plans__card__periods__0}`;
  plans__card__periods[1].textContent = `${spanishDB.plans__card__periods__1}`;
  plans__card__periods[2].textContent = `${spanishDB.plans__card__periods__2}`;
  plans__card__items[0].textContent = `${spanishDB.plans__card__items__0}`;
  plans__card__items[1].textContent = `${spanishDB.plans__card__items__1}`;
  plans__card__items[2].textContent = `${spanishDB.plans__card__items__2}`;
  plans__card__items[3].textContent = `${spanishDB.plans__card__items__3}`;
  plans__card__items[4].textContent = `${spanishDB.plans__card__items__4}`;
  plans__card__items[5].textContent = `${spanishDB.plans__card__items__5}`;
  plans__card__items[6].textContent = `${spanishDB.plans__card__items__6}`;
  plans__card__items[7].textContent = `${spanishDB.plans__card__items__7}`;
  plans__card__items[8].textContent = `${spanishDB.plans__card__items__8}`;
  plans__card__items[9].textContent = `${spanishDB.plans__card__items__9}`;
  plans__card__items[10].textContent = `${spanishDB.plans__card__items__10}`;
  plans__card__items[11].textContent = `${spanishDB.plans__card__items__11}`;
  plans__card__items[12].textContent = `${spanishDB.plans__card__items__12}`;
  plans__card__buttons[0].textContent = `${spanishDB.plans__card__buttons__0}`;
  plans__card__buttons[1].textContent = `${spanishDB.plans__card__buttons__1}`;
  plans__card__buttons[2].textContent = `${spanishDB.plans__card__buttons__2}`;
  // TESTIMONIALS
  testimonials__heading.innerHTML = `${spanishDB.testimonials__heading}`;
  testimonials__card__jobs[0].textContent = `${spanishDB.testimonials__card__jobs__0}`;
  testimonials__card__jobs[1].textContent = `${spanishDB.testimonials__card__jobs__1}`;
  testimonials__card__jobs[2].textContent = `${spanishDB.testimonials__card__jobs__2}`;
  testimonials__card__jobs[3].textContent = `${spanishDB.testimonials__card__jobs__3}`;
  testimonials__card__jobs[4].textContent = `${spanishDB.testimonials__card__jobs__4}`;
  testimonials__card__jobs[5].textContent = `${spanishDB.testimonials__card__jobs__5}`;
  // CTA
  cta__heading.innerHTML = `${spanishDB.cta__heading}`;
  cta__button.textContent = `${spanishDB.cta__button}`;
  // FOOTER
  footer__copy.textContent = `${spanishDB.footer__copy}`;
  footer__author.innerHTML = `${spanishDB.footer__author}`;
  footer__menu__heading.textContent = `${spanishDB.footer__menu__heading}`;
  footer__menu__links[0].textContent = `${spanishDB.footer__menu__links__0}`;
  footer__menu__links[1].textContent = `${spanishDB.footer__menu__links__1}`;
  footer__menu__links[2].textContent = `${spanishDB.footer__menu__links__2}`;
  footer__menu__links[3].textContent = `${spanishDB.footer__menu__links__3}`;
  footer__menu__links[4].textContent = `${spanishDB.footer__menu__links__4}`;
  footer__contact__heading.textContent = `${spanishDB.footer__address__heading}`;
  footer__address__headings[0].textContent = `${spanishDB.footer__address__headings__0}`;
  footer__address__headings[1].textContent = `${spanishDB.footer__address__headings__1}`;
  footer__address__headings[2].textContent = `${spanishDB.footer__address__headings__2}`;
  footer__address__copies[0].textContent = `${spanishDB.footer__address__copies__0}`;
  footer__address__copies[1].textContent = `${spanishDB.footer__address__copies__1}`;
  footer__address__copies[2].textContent = `${spanishDB.footer__address__copies__2}`;
}



// Función para crear una UI en Ingles
const englishContent = async () => {
  const res = await fetch(languagesDB__URL);
  const data = await res.json();
  const englishDB = data[1];

  // NAVBAR
  navbarLinks[0].textContent = `${englishDB.navbarLinks__0}`;
  navbarLinks[1].textContent = `${englishDB.navbarLinks__1}`;
  navbarLinks[2].textContent = `${englishDB.navbarLinks__2}`;
  navbarPhone.textContent = `${englishDB.navbarPhone}`;
  navbarItemMobile.innerHTML = `${englishDB.navbarItemMobile}`;
  // HERO
  heroTitle.textContent = `${englishDB.heroTitle}`;
  heroCopy.textContent = `${englishDB.heroCopy}`;
  heroBtn.textContent = `${englishDB.heroBtn}`;
  // ABOUT
  aboutHeading.innerHTML = `${englishDB.aboutHeading}`;
  aboutCopies[0].textContent = `${englishDB.aboutCopies__0}`;
  aboutCopies[1].textContent = `${englishDB.aboutCopies__1}`;
  // SERVICES
  servicesHeading.innerHTML = `${englishDB.servicesHeading}`;
  servicesCardTitles[0].textContent = `${englishDB.servicesCardTitles__0}`;
  servicesCardTitles[1].textContent = `${englishDB.servicesCardTitles__1}`;
  servicesCardTitles[2].textContent = `${englishDB.servicesCardTitles__2}`;
  servicesCardTitles[3].textContent = `${englishDB.servicesCardTitles__3}`;
  servicesCardCopies[0].textContent = `${englishDB.servicesCardCopies__0}`;
  servicesCardCopies[1].textContent = `${englishDB.servicesCardCopies__1}`;
  servicesCardCopies[2].textContent = `${englishDB.servicesCardCopies__2}`;
  servicesCardCopies[3].textContent = `${englishDB.servicesCardCopies__3}`;
  servicesButton.textContent = `${englishDB.servicesButton}`;
  // PORTFOLIO
  portfolioHeading.innerHTML = `${englishDB.portfolioHeading}`;
  portfolioMenu[0].innerHTML = `${englishDB.portfolioMenu__0}`;
  portfolioMenu[1].innerHTML = `${englishDB.portfolioMenu__1}`;
  portfolioMenu[2].innerHTML = `${englishDB.portfolioMenu__2}`;
  portfolioMenu[3].innerHTML = `${englishDB.portfolioMenu__3}`;
  // PLANS
  plans__heading.innerHTML = `${englishDB.plans__heading}`;
  plans__card__headings[0].textContent = `${englishDB.plans__card__headings__0}`;
  plans__card__headings[1].textContent = `${englishDB.plans__card__headings__1}`;
  plans__card__headings[2].textContent = `${englishDB.plans__card__headings__2}`;
  plans__card__numbers[0].textContent = `${englishDB.plans__card__numbers__0}`;
  plans__card__numbers[1].textContent = `${englishDB.plans__card__numbers__1}`;
  plans__card__numbers[2].textContent = `${englishDB.plans__card__numbers__2}`;
  plans__card__periods[0].textContent = `${englishDB.plans__card__periods__0}`;
  plans__card__periods[1].textContent = `${englishDB.plans__card__periods__1}`;
  plans__card__periods[2].textContent = `${englishDB.plans__card__periods__2}`;
  plans__card__items[0].textContent = `${englishDB.plans__card__items__0}`;
  plans__card__items[1].textContent = `${englishDB.plans__card__items__1}`;
  plans__card__items[2].textContent = `${englishDB.plans__card__items__2}`;
  plans__card__items[3].textContent = `${englishDB.plans__card__items__3}`;
  plans__card__items[4].textContent = `${englishDB.plans__card__items__4}`;
  plans__card__items[5].textContent = `${englishDB.plans__card__items__5}`;
  plans__card__items[6].textContent = `${englishDB.plans__card__items__6}`;
  plans__card__items[7].textContent = `${englishDB.plans__card__items__7}`;
  plans__card__items[8].textContent = `${englishDB.plans__card__items__8}`;
  plans__card__items[9].textContent = `${englishDB.plans__card__items__9}`;
  plans__card__items[10].textContent = `${englishDB.plans__card__items__10}`;
  plans__card__items[11].textContent = `${englishDB.plans__card__items__11}`;
  plans__card__items[12].textContent = `${englishDB.plans__card__items__12}`;
  plans__card__buttons[0].textContent = `${englishDB.plans__card__buttons__0}`;
  plans__card__buttons[1].textContent = `${englishDB.plans__card__buttons__1}`;
  plans__card__buttons[2].textContent = `${englishDB.plans__card__buttons__2}`;
  // TESTIMONIALS
  testimonials__heading.innerHTML = `${englishDB.testimonials__heading}`;
  testimonials__card__jobs[0].textContent = `${englishDB.testimonials__card__jobs__0}`;
  testimonials__card__jobs[1].textContent = `${englishDB.testimonials__card__jobs__1}`;
  testimonials__card__jobs[2].textContent = `${englishDB.testimonials__card__jobs__2}`;
  testimonials__card__jobs[3].textContent = `${englishDB.testimonials__card__jobs__3}`;
  testimonials__card__jobs[4].textContent = `${englishDB.testimonials__card__jobs__4}`;
  testimonials__card__jobs[5].textContent = `${englishDB.testimonials__card__jobs__5}`;
  // CTA
  cta__heading.innerHTML = `${englishDB.cta__heading}`;
  cta__button.textContent = `${englishDB.cta__button}`;
  // FOOTER
  footer__copy.textContent = `${englishDB.footer__copy}`;
  footer__author.innerHTML = `${englishDB.footer__author}`;
  footer__menu__heading.textContent = `${englishDB.footer__menu__heading}`;
  footer__menu__links[0].textContent = `${englishDB.footer__menu__links__0}`;
  footer__menu__links[1].textContent = `${englishDB.footer__menu__links__1}`;
  footer__menu__links[2].textContent = `${englishDB.footer__menu__links__2}`;
  footer__menu__links[3].textContent = `${englishDB.footer__menu__links__3}`;
  footer__menu__links[4].textContent = `${englishDB.footer__menu__links__4}`;
  footer__contact__heading.textContent = `${englishDB.footer__address__heading}`;
  footer__address__headings[0].textContent = `${englishDB.footer__address__headings__0}`;
  footer__address__headings[1].textContent = `${englishDB.footer__address__headings__1}`;
  footer__address__headings[2].textContent = `${englishDB.footer__address__headings__2}`;
  footer__address__copies[0].textContent = `${englishDB.footer__address__copies__0}`;
  footer__address__copies[1].textContent = `${englishDB.footer__address__copies__1}`;
  footer__address__copies[2].textContent = `${englishDB.footer__address__copies__2}`;
}






