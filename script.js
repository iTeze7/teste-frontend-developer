document.addEventListener('DOMContentLoaded', () => {

  if (window.lucide) {
    lucide.createIcons();
  }

  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach((item) => {
    const button = item.querySelector('.faq__question');

    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach((faq) => {
        faq.classList.remove('active');
        faq.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name');

      alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
      contactForm.reset();
    });
  }
});
