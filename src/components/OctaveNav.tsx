import { useEffect, useRef } from 'react';

export default function OctaveNav() {
  const linksRef = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const links = document.querySelectorAll('#octave-nav .octave-link');
    links.forEach((l) => {
      const href = l.getAttribute('href');
      if (href) linksRef.current.set(href, l as HTMLAnchorElement);
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => {
              l.classList.toggle(
                'active',
                l.getAttribute('href') === '#' + e.target.id
              );
            });
          }
        });
      },
      { rootMargin: '-70px 0px -50% 0px' }
    );

    document
      .querySelectorAll('#octave-1, #octave-2, #octave-3, #octave-4')
      .forEach((o) => obs.observe(o));

    return () => obs.disconnect();
  }, []);

  return (
    <nav id="octave-nav">
      <span className="nav-label">Octaves</span>
      <a href="#octave-1" className="octave-link"><span className="octave-num">1</span></a>
      <a href="#octave-2" className="octave-link"><span className="octave-num">2</span></a>
      <a href="#octave-3" className="octave-link"><span className="octave-num">3</span></a>
      <a href="#octave-4" className="octave-link"><span className="octave-num">4</span></a>
    </nav>
  );
}
