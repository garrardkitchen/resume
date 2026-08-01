(function () {
  const header = document.querySelector('[data-site-header]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navMenu.classList.toggle('is-open', !open);
      document.body.classList.toggle('nav-open', !open);
    });

    navMenu.addEventListener('click', (event) => {
      if (!event.target.closest('a')) return;
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    });
  }

  const certToggle = document.querySelector('[data-cert-toggle]');
  const certGrid = document.querySelector('[data-cert-grid]');
  if (certToggle && certGrid) {
    certToggle.addEventListener('click', () => {
      const expanded = certToggle.getAttribute('aria-expanded') === 'true';
      certToggle.setAttribute('aria-expanded', String(!expanded));
      certToggle.textContent = expanded ? 'Show all certifications' : 'Show fewer certifications';
      certGrid.classList.toggle('is-expanded', !expanded);
    });
  }

  const skillSearch = document.querySelector('[data-skill-search]');
  const skillGroups = Array.from(document.querySelectorAll('[data-skill-group]'));
  const skillsToggle = document.querySelector('[data-skills-toggle]');
  const skillEmpty = document.querySelector('[data-skill-empty]');

  if (skillSearch && skillGroups.length) {
    skillSearch.addEventListener('input', () => {
      const query = skillSearch.value.trim().toLowerCase();
      let visibleGroups = 0;

      skillGroups.forEach((group) => {
        const items = Array.from(group.querySelectorAll('[data-skill]'));
        const heading = group.querySelector('summary span').textContent.toLowerCase();
        const headingMatches = heading.includes(query);
        let visibleItems = 0;

        items.forEach((item) => {
          const matches = !query || headingMatches || item.dataset.skill.includes(query);
          item.hidden = !matches;
          if (matches) visibleItems += 1;
        });

        const groupMatches = visibleItems > 0;
        group.hidden = !groupMatches;
        if (groupMatches) visibleGroups += 1;
        if (query && groupMatches) group.open = true;
      });

      if (skillEmpty) skillEmpty.hidden = visibleGroups > 0;
    });
  }

  if (skillsToggle && skillGroups.length) {
    skillsToggle.addEventListener('click', () => {
      const expanded = skillsToggle.getAttribute('aria-expanded') === 'true';
      skillsToggle.setAttribute('aria-expanded', String(!expanded));
      skillsToggle.textContent = expanded ? 'Expand all' : 'Collapse all';
      skillGroups.forEach((group) => { if (!group.hidden) group.open = !expanded; });
    });
  }
})();
