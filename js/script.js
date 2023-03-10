// VARIABLES
const portfolioMenuItems = [...document.querySelectorAll(".portfolio__menu__item")];
const portfolioImagesEl = document.querySelector(".portfolio__images");
const urlPortfolioDB = "../portfolioDB.json";
const plansCards = [...document.querySelectorAll(".plans__card")];
const plansCardsButtons = document.querySelectorAll(".plans__card .btn__secondary");
const testimonialsCardsWrapper = document.querySelector(".testimonials__cards");
const testimonialsCards = [...document.querySelectorAll(".testimonials__card")];
const testimonialsButtons = [...document.querySelectorAll(".testimonials__button")];
const navbarMenuIcons = document.querySelector('.navbar__menu__icons');
const menuIcon = document.querySelector(".menu-outline");
const closeIcon = document.querySelector(".close-outline");
const navbarMenu = document.querySelector(".navbar__menu");



// EVENT - NAVBAR MOBILE MENU
// Al dar click al icono menu se despliega el menu
navbarMenuIcons.addEventListener('click', toggleMenu);
navbarLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
})

// FUNCTION
function toggleMenu() {
  menuIcon.classList.toggle('hide');
  closeIcon.classList.toggle('show');
  navbarMenu.classList.toggle('active');
}

function closeMenu() {
  navbarMenu.classList.remove('active');
}

// EVENT - PLANS CARD
// Agrega un evento de click a cada tarjeta y activa una funcion para destacar la tarjeta
plansCards.forEach(card => {
  card.addEventListener("click", function () {
    console.log("ok")

    // Elimina el estado current de cada tarjeta
    for (let i = 0; i < plansCards.length; i++) {
      plansCards[i].classList.remove("current");
    }
    // Agrega el estado current a la tarjeta
    card.classList.add("current");
    // Elimina el estado btn__secondary--white de cada boton
    // Agrega el estado btn__secondary--gold a cada boton
    for (let i = 0; i < plansCardsButtons.length; i++) {
      plansCardsButtons[i].classList.remove("btn__secondary--white");
      plansCardsButtons[i].classList.add("btn__secondary--gold");
    }
    // Obtiene el indice de la tarjeta seleccionada
    const indexOfCardSelected = plansCards.indexOf(card);
    // Agrega el estado btn__secondary--white a la tarjeta seleccionada
    plansCardsButtons[indexOfCardSelected].classList.add("btn__secondary--white")
  })
})

// EVENT - PORTFOLIO MENU
// Agrega un evento de click a cada elemento del menu de la secci??n portafolio y corre una funci??n
portfolioMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    // Elimina el estado current de cada elemento del menu
    for (let i = 0; i < portfolioMenuItems.length; i++) {
      portfolioMenuItems[i].classList.remove("current");
    }
    // Agrega el estado current al elemento del menu seleccionado
    item.classList.add("current");

    // Corre una funci??n especifica dependiento del valor del id del elemento seleccionado
    switch (item.id) {
      case "commercial":
        getCommercialImages();
        break;
      case "residential":
        getResidentialImages();
        break;
      case "office":
        getOfficeImages();
        break;
      default:
        getAllImages();
    }
  })
})

// FUNCTION - PORTFOLIO IMAGES
// Function to create a Layout for all images
const getAllImages = async () => {
  const res = await fetch(urlPortfolioDB);
  const data = await res.json();

  // Create a Placeholder Layout for every item comes from DB
  let placeholderImageUI = "";
  data.forEach(item => {
    placeholderImageUI += `
      <div class="portfolio__image__wrapper placeholder__image"></div>
    `
  });

  // Create a layout for every item comes from DB
  let allImagesUI = "";
  data.forEach(item => {
    allImagesUI += `
      <div class="portfolio__image__wrapper">
        <img src="${item.path}" class="portfolio__image" alt="Image project" />
      </div>
    `
  });

  // Create an output
  portfolioImagesEl.innerHTML = placeholderImageUI;

  setTimeout(() => {
    portfolioImagesEl.innerHTML = allImagesUI;
  }, 400);
}

// FUNCTION - PORTFOLIO IMAGES
// Function to create a Layout for commercial images
const getCommercialImages = async () => {
  const res = await fetch(urlPortfolioDB);
  const data = await res.json();

  // Filter by commercial data
  let commercialData = data.filter(item => item.type === "Commercial");

  // Create a Placeholder Layout for every item in the DB
  let placeholderImageUI = "";
  commercialData.forEach(item => {
    placeholderImageUI += `
      <div class="portfolio__image__wrapper placeholder__image"></div>
    `
  });

  // Create a layout for every item comes from DB
  let commercialImagesUI = "";
  commercialData.forEach(item => {
    commercialImagesUI += `
    <div class="portfolio__image__wrapper">
      <img src="${item.path}" class="portfolio__image" alt="Image project" />
    </div>
    `
  });

  // Create an output
  portfolioImagesEl.innerHTML = placeholderImageUI;

  setTimeout(() => {
    portfolioImagesEl.innerHTML = commercialImagesUI;
  }, 400);
}

// FUNCTION - PORTFOLIO IMAGES
// Function to create a Layout for residential images
const getResidentialImages = async () => {
  const res = await fetch(urlPortfolioDB);
  const data = await res.json();
  // Filter by residential data from DB
  let residentialData = data.filter(item => item.type === "Residential");

  // Create a Placeholder Layout for every item in the DB
  let placeholderImageUI = "";
  residentialData.forEach(item => {
    placeholderImageUI += `
      <div class="portfolio__image__wrapper placeholder__image"></div>
    `
  });

  // Create a Layout for every item comes from DB
  let residentialImagesUI = "";
  residentialData.forEach(item => {
    residentialImagesUI += `
    <div class="portfolio__image__wrapper">
      <img src="${item.path}" class="portfolio__image" alt="Image project" />
    </div>
    `
  });
  // Create an output
  portfolioImagesEl.innerHTML = placeholderImageUI;

  setTimeout(() => {
    portfolioImagesEl.innerHTML = residentialImagesUI;
  }, 400);
}

// FUNCTION - PORTFOLIO IMAGES
// Function to create a Layout for office images
const getOfficeImages = async () => {
  const res = await fetch(urlPortfolioDB);
  const data = await res.json();
  // Filter by office images
  let officesData = data.filter(item => item.type === "Office");

  // Create a Placeholder Layout for every item in the DB
  let placeholderImageUI = "";
  officesData.forEach(item => {
    placeholderImageUI += `
      <div class="portfolio__image__wrapper placeholder__image"></div>
    `
  });

  // Create a Layout for every item comes from DB
  let officeImagesUI = "";
  officesData.forEach(item => {
    officeImagesUI += `
      <div class="portfolio__image__wrapper">
        <img src="${item.path}" class="portfolio__image" alt="Image project" />
      </div>
    `
  });
  // Create an output in the DOM
  portfolioImagesEl.innerHTML = placeholderImageUI;

  setTimeout(() => {
    portfolioImagesEl.innerHTML = officeImagesUI;
  }, 400);
}

// INITIALIZATIONS
getAllImages();


// TESTIMONIALS SLIDER
// Logic to create a card slider
let testiCardsWidth = testimonialsCardsWrapper.clientWidth;
let bodyWidth = document.querySelector('body').clientWidth;
let cardWidth = testimonialsCards[0].clientWidth;
let testiCardIndex = 0;
let buttonIndex = 0;
let testiCardInterval = setInterval(runCardInterval, 3000);
let buttonInterval = setInterval(runButtonInterval, 3000);

function runCardInterval() {
  testiCardIndex++;
  changeTestiCard();
}

function runButtonInterval() {
  buttonIndex++;
  changeButton();
}

function changeTestiCard() {
  if (testiCardIndex > testimonialsCards.length - 4) {
    testiCardIndex = 0;
  } else if (testiCardIndex < 0) {
    testiCardIndex = testimonialsCards.length - 4;
  }

  if (bodyWidth > 1250) {
    testimonialsCardsWrapper.style.transform = `translateX(-${testiCardIndex * (1204 + 32)}px)`;
  } else if (bodyWidth < 1250 && bodyWidth > 420) {
    testimonialsCardsWrapper.style.transform = `translateX(-${testiCardIndex * (cardWidth + 32)}px)`;
    testimonialsCards[3].style.display = 'none'
    testimonialsCards[4].style.display = 'none'
    testimonialsCards[5].style.display = 'none'
  } else if (bodyWidth < 420) {
    testimonialsCardsWrapper.style.transform = `translateX(-${testiCardIndex * (cardWidth + 32)}px)`;
    testimonialsCards[3].style.display = 'none'
    testimonialsCards[4].style.display = 'none'
    testimonialsCards[5].style.display = 'none'
  }
}

function changeButton() {
  if (buttonIndex > testimonialsButtons.length - 1) {
    buttonIndex = 0;
  } else if (buttonIndex < 0) {
    buttonIndex = testimonialsButtons.length - 1;
  }

  testimonialsButtons[0].classList.remove('current');
  testimonialsButtons[1].classList.remove('current');
  testimonialsButtons[2].classList.remove('current');

  testimonialsButtons[buttonIndex].classList.add('current');
  // console.log(testiCardIndex, buttonIndex)
}

function resetInteval() {
  clearInterval(testiCardInterval)
  clearInterval(buttonInterval)
  testiCardInterval = setInterval(runCardInterval, 3000);
  buttonInterval = setInterval(runButtonInterval, 3000);
}

// Evento click para botones para cambiar la imagen
testimonialsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    testiCardIndex = index;
    buttonIndex = index;
    changeTestiCard();
    changeButton();
    resetInteval();
  })
});











