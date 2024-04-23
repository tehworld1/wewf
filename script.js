document.addEventListener("DOMContentLoaded", function() {
  // Add animation to the header
  const header = document.querySelector('header');
  header.style.opacity = 0;
  header.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    header.style.transition = 'opacity 0.5s, transform 0.5s';
    header.style.opacity = 1;
    header.style.transform = 'translateY(0)';
  }, 300);

  // Add animation to sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    setTimeout(() => {
      section.style.transition = 'opacity 0.5s, transform 0.5s';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }, (index + 1) * 300);
  });

  // Interactive animation for links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transition = 'color 0.3s';
      this.style.color = 'blue'; // Change color on hover
    });
    link.addEventListener('mouseleave', function() {
      this.style.transition = 'color 0.3s';
      this.style.color = 'initial'; // Revert color on mouse leave
    });
  });

  // Toggle mobile menu
  const btn = document.querySelector(".mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
