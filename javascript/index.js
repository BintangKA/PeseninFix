const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  });
}

if (menuClose && mobileMenu) {
  menuClose.addEventListener("click", function () {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
  });
}

// FAQ
document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const toggle = accordion.querySelector(".accordion-toggle");
    const content = accordion.querySelector(".accordion-content");
    const svgIcon = toggle.querySelector("svg");

    // Pastikan semua konten tersembunyi secara default
    content.style.maxHeight = null;
    content.style.display = "none";
    // Hapus kelas aktif/highlighting dari semua item saat inisialisasi
    accordion.classList.remove(
      "border",
      "border-orange-500",
      "rounded-lg",
      "shadow-md"
    );
    toggle.classList.remove("bg-orange-50");
    content.classList.remove("border-t", "border-orange-500");
    toggle.setAttribute("aria-expanded", "false");
    svgIcon.classList.remove("rotate-180");

    toggle.addEventListener("click", () => {
      // Cek apakah accordion yang sedang diklik sudah terbuka
      const isOpen = accordion.classList.contains("active");

      // Tutup semua accordion lain
      accordions.forEach((item) => {
        const otherContent = item.querySelector(".accordion-content");
        const otherSvg = item.querySelector("svg");
        const otherToggle = item.querySelector(".accordion-toggle");

        // Pastikan bukan accordion yang sedang diklik
        if (item !== accordion) {
          otherContent.style.maxHeight = null; // Tutup konten
          otherContent.style.display = "none"; // Sembunyikan sepenuhnya
          item.classList.remove("active"); // Hapus kelas active
          // Hapus kelas highlight dari item lain
          item.classList.remove(
            "border",
            "border-orange-500",
            "rounded-lg",
            "shadow-md"
          );
          otherToggle.classList.remove("bg-orange-50");
          otherContent.classList.remove("border-t", "border-orange-500");

          if (otherSvg) otherSvg.classList.remove("rotate-180"); // Putar ikon kembali
          otherToggle.setAttribute("aria-expanded", "false"); // Set aria-expanded ke false
        }
      });

      // Toggle accordion yang diklik
      if (!isOpen) {
        // Jika sebelumnya tertutup, buka
        accordion.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.display = "block"; // Tampilkan konten
        toggle.setAttribute("aria-expanded", "true");
        if (svgIcon) svgIcon.classList.add("rotate-180");

        // Tambahkan kelas highlight saat aktif
        accordion.classList.add(
          "border",
          "border-orange-500",
          "rounded-lg",
          "shadow-md"
        );
        toggle.classList.add("bg-orange-50");
        content.classList.add("border-t", "border-orange-500");
      } else {
        // Jika sebelumnya terbuka, tutup
        accordion.classList.remove("active");
        content.style.maxHeight = null;
        content.style.display = "none"; // Sembunyikan konten
        toggle.setAttribute("aria-expanded", "false");
        if (svgIcon) svgIcon.classList.remove("rotate-180");

        // Hapus kelas highlight saat tidak aktif
        accordion.classList.remove(
          "border",
          "border-orange-500",
          "rounded-lg",
          "shadow-md"
        );
        toggle.classList.remove("bg-orange-50");
        content.classList.remove("border-t", "border-orange-500");
      }
    });
  });
});

// Animasi Javascript
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // supaya animasi hanya sekali
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".animate-on-scroll").forEach((elem) => {
  observer.observe(elem);
});


