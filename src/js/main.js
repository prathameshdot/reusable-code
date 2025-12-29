import { initNavigation } from './modules/navigation.js';
import { initForm } from './modules/form.js';

document.addEventListener('DOMContentLoaded', () => {
  // Load sections
  const sections = ['header', 'hero', 'about', 'services', 'portfolio', 'footer'];
  sections.forEach(section => {
    fetch(`sections/${section}.html`)
      .then(response => response.text())
      .then(html => {
        document.getElementById(section).innerHTML = html;
      })
      .then(() => {
        // Initialize after loading
        if (section === 'header') initNavigation();
      });
  });

  // Smooth scrolling for anchor links
  setTimeout(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, 1000); // Delay to ensure sections are loaded

  // Hero carousel
  setTimeout(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");
    const totalSlides = slides.length;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
      });

      slides[index].classList.add("active");
      dots[index].classList.add("active");
      currentSlide = index;
    }

    // Auto play
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }, 4000); // 4 seconds
  }, 1000);

  // Menu toggle
  setTimeout(() => {
    // Add toggleMenu function for onclick
    window.toggleMenu = function() {
      document.querySelector('.nav').classList.toggle('active');
    };

    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        document.querySelector('.nav').classList.toggle('active');
      });
    }

    // Dropdown toggle for mobile
    document.querySelectorAll('.nav > li > a').forEach(link => {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
          let parent = this.parentElement;
          if (parent.querySelector('ul')) {
            e.preventDefault();
            parent.classList.toggle('open');
          }
        }
      });
    });

    // Sub dropdown
    document.querySelectorAll('.nav li ul li > a').forEach(link => {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
          let parent = this.parentElement;
          if (parent.querySelector('ul')) {
            e.preventDefault();
            parent.classList.toggle('open');
          }
        }
      });
    });
  }, 1000);
});