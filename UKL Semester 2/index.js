document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Menambahkan klik ke tombol sakelar menu
  menuToggle.addEventListener("click", function () {
    // untuk menampilkan/menyembunyikan menu
    navLinks.classList.toggle("active");
    // menu untuk mengubah tampilannya
    menuToggle.classList.toggle("active");
  });

  // klik ke setiap tautan navigasi untuk menutup menu saat diklik
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // Menutup menu saat mengklik di luar
  document.addEventListener("click", function (event) {
    if (
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target) &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});
