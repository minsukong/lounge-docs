(() => {
  const scenes = [...document.querySelectorAll('.scene')];
  const links = [...document.querySelectorAll('.rail a')];
  const progress = document.querySelector('.progress span');
  const activate = (id) => links.forEach((link) => link.classList.toggle('active', link.hash === `#${id}`));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        activate(entry.target.id);
      }
    });
  }, { threshold: 0.45 });
  scenes.forEach((scene) => observer.observe(scene));
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
  };
  const currentIndex = () => {
    const middle = scrollY + innerHeight / 2;
    return scenes.reduce((closest, scene, index) => Math.abs(scene.offsetTop - middle) < Math.abs(scenes[closest].offsetTop - middle) ? index : closest, 0);
  };
  addEventListener('scroll', updateProgress, { passive: true });
  addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowDown', 'PageDown'].includes(event.key) ? 1 : -1;
    scenes[Math.max(0, Math.min(scenes.length - 1, currentIndex() + direction))].scrollIntoView({ behavior: 'smooth' });
  });
  updateProgress();
  scenes[0]?.classList.add('is-visible');
})();
