//navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar Hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//pindah posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

//clear form after submit
// function eraseText() {
//   document.getElementById("nd").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("output").value = "";
// }

// menambahkan event handler pada tombol submit
// document.getElementById("submitButtonId").addEventListener("click", function(event) {
//   event.preventDefault(); // mencegah form dari submit secara default

//   // mengambil value dari input field
//   var inputValue = document.getElementById("inputFieldId").value;

//   // mengirim data ke server
//   document.getElementById("formId").submit();

// });

// menambahkan event handler pada tombol submit
document.getElementById("subform").addEventListener("click", function (event) {
  event.preventDefault(); // mencegah form dari submit secara default

  // mengambil value dari input field
  var inputValue = document.getElementById("nd").value;
  var inputValue = document.getElementById("email").value;
  var inputValue = document.getElementById("output").value;

  // melakukan proses yang diinginkan (misalnya mengirim data ke server atau menampilkan data di halaman)
  document.getElementById("contacts").submit();

  // mereset form
  document.getElementById("contacts").reset();
});
