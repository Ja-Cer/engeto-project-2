const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-square-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-square-xmark");
    menuList.style.display = "none";
  }
});

// menuIcon.addEventListener("click", () => {
//   if (hamburgerIcon.classList[1] === "fa-bars") {
//     hamburgerIcon.classList.add("fa-square-xmark");
//     hamburgerIcon.classList.remove("fa-bars");
//     menuList.style.visibility = "visible";
//   } else {
//     hamburgerIcon.classList.add("fa-bars");
//     hamburgerIcon.classList.remove("fa-square-xmark");
//     menuList.style.visibility = "hidden";
//   }
// });
