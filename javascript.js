window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('loaded');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);
  });


 