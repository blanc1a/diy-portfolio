//navigation
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav");
  const navItems = document.querySelectorAll("a");
  if (window.scrollY > 100) {
    gsap.to(navItems, {
      fontSize: "16px",
      duration: 0.2,
      ease: "power1.inOut",
    });
  } else {
    gsap.to(navItems, {
      fontSize: "30px",
      duration: 0.2,
      ease: "power1.inOut",
    });
  }
});

//filter projects
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

console.log(filterButtons, filterableCards);

function filterCards(event) {
  console.log(event.target);
  //give the clicked button the class active
  document.querySelector(".active").classList.remove("active");
  event.target.classList.add("active");

  //iterate over each filterable card
  filterableCards.forEach((card) => {
    card.classList.add("hide");
    //check if the card matches the selected filter or "all" is selected
    if (
      card.dataset.name === event.target.dataset.name ||
      event.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
}

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

//url to other html file
const cardLink = document.querySelectorAll(".card");

cardLink.forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");
    if (url) {
      window.location.href = url;
    }
  });
});
