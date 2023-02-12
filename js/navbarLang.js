// VARIABLES
const navbarLang = document.querySelector(".navbar__lang");
const navbarLangEn = document.querySelector(".navbar__lang__en");
const navbarLangEs = document.querySelector(".navbar__lang__es");
const navbarLangIcon = document.querySelector(".navbar__lang__icon");
const navbarPhone = document.querySelector(".navbar__phone");
const navbarLinks = document.querySelectorAll(".navbar__link");
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

// EVENTS
navbarLang.addEventListener("click", function () {
  navbarLangEn.classList.toggle("hide");
  navbarLangEs.classList.toggle("show");
  navbarLangIcon.classList.toggle("rotate");

  navbarLinks[0].textContent = "Servicios";
  navbarLinks[1].textContent = "Portafolio";
  navbarLinks[2].textContent = "Planes";
  navbarPhone.textContent = "(+56) 2-72416395"
  heroTitle.textContent = "Mejoramos tus espacios";
  heroCopy.textContent = "Nuestro equipo crea espacios confortables para nuestros clientes. Desde 1999 diseñamos tu día a día y tu trabajo a través de grandes ideas.";
  heroBtn.textContent = "EMPIECE HOY";
  aboutHeading.innerHTML = `Acerca del <span>Estudio</span>`;
  aboutCopies[0].textContent = "Id Studios es un Estudio galardonado de arquitectura y diseño de interiores con sede en Nueva York. Trabajamos internacionalmente en proyectos de diseño de interiores residenciales y comerciales que requieren un enfoque creativo. Nuestros talentosos y experimentados diseñadores aprovechan su conocimiento y experiencia para crear interiores únicos y cómodos para usted.";
  aboutCopies[1].textContent = "Nuestro equipo sabe que el diseño de interiores puede ser estresante para el cliente y hacemos todo lo posible para que sea lo más fácil posible. Escuchamos sus necesidades, ideas y aportes. Y lo más importante, lo hacemos emocionante y agradable para nuestros clientes.";
  servicesHeading.innerHTML = `Nuestros <span>Servicios</span>`;
  servicesCardTitles[0].textContent = "DISEÑO DE INTERIORES";
  servicesCardTitles[1].textContent = "SERVICIOS DE DECORACIÓN";
  servicesCardTitles[2].textContent = "PLANIFICACIÓN DE ESPACIOS";
  servicesCardTitles[3].textContent = "GESTIÓN DE PROYECTOS";
  servicesCardCopies[0].textContent = "Los servicios de diseño de interiores ofrecen una gran variedad de soluciones para las casas y oficinas de nuestros clientes";
  servicesCardCopies[1].textContent = "Nuestros decoradores profesionales estarán encantados de ayudarle a cambiar el aspecto interior de su casa.";
  servicesCardCopies[2].textContent = "Creamos mejores experiencias interiores a través de nuestros servicios de planificación de espacios.";
  servicesCardCopies[3].textContent = "Brindamos una adecuada gestión de proyectos ya que es uno de los principales factores de éxito en el diseño de interiores.";
  servicesButton.textContent = "CONSULTA GRATIS";
  portfolioHeading.innerHTML = `Nuestro <span>Portafolio</span>`;
  portfolioMenu[0].innerHTML = "TODOS";
  portfolioMenu[2].innerHTML = "RESIDENCIAL";
  portfolioMenu[3].innerHTML = "OFICINAS";
})