// =====================
// Preloader Animation
// =====================
document.body.classList.add("loading");

window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");
    document.body.classList.remove("loading");
  }, 5000); // 5 seconds
});


// =====================
// Particles Background
// =====================
tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    shape: {
      type: "star",
    },
    size: {
      value: 4,
      random: true
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: true,
      outModes: {
        default: "out"
      }
    },
    links: {
      enable: true,
      distance: 170,
      color: "#d1ff33", // Corrected the color format
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "repulse"
      },
      onClick: {
        enable: false,
        mode: "push"
      }
    }
  }
});


// =====================
// Mobile Menu Toggle
// =====================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  if (mobileMenu.classList.contains('show')) {
    mobileMenu.classList.remove('show');
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 400);
  } else {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
      mobileMenu.classList.add('show');
    }, 10);
  }
});
// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.opacity = '1';
    scrollToTopBtn.style.transform = 'scale(1)';
  } else {
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.style.transform = 'scale(0)';
  }
};

// When the button is clicked, scroll to the top
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
