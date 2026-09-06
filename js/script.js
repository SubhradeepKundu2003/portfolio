// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with localStorage persistence
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = safeGet('theme');

  if (stored) {
    root.setAttribute('data-theme', stored);
    updateIcon(stored);
  }

  toggle.addEventListener('click', () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    updateIcon(next);
    safeSet('theme', next);
  });

  function updateIcon(theme) {
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }
})();

// Mobile menu toggle
(function () {
  const menuBtn = document.getElementById('menuBtn');
  const navMobile = document.getElementById('navMobile');

  menuBtn.addEventListener('click', () => {
    navMobile.classList.toggle('open');
  });

  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navMobile.classList.remove('open'));
  });
})();

// Typewriter effect for hero role
(function () {
  const el = document.getElementById('typewriter');
  const roles = [
    'Spring Boot Backend Developer',
    'Full-Stack Engineer',
    'React Native Developer',
    'iOS AR Developer (ARKit)',
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }

  tick();
})();

// Fade-in sections on scroll
(function () {
  const sections = document.querySelectorAll('.section, .hero');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(24px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Hero should be visible immediately
  const hero = document.getElementById('hero');
  if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'none';
  }
})();
