import { Link } from 'react-router-dom';
import '../styles/home.css';

const instruments = [
  {
    path: '/baroque-flute',
    label: 'Baroque Flute',
    desc: 'Traverso — complete fingering chart with historical sources',
    img: '/images/baroque-flute.jpg',
  },
  {
    path: '/transverse-flute',
    label: 'Transverse Flute',
    desc: 'Modern Böhm-system flute fingering chart',
    img: '/images/transverse-flute.jpeg',
  },
  {
    path: '/piccolo',
    label: 'Piccolo',
    desc: 'Piccolo fingering chart',
    img: '/images/piccolo.jpg',
  },
  {
    path: '/recorder',
    label: 'Recorder',
    desc: 'Recorder (Blockflöte) fingering chart',
    img: '/images/recorder.jpeg',
    badge: 'Coming soon',
  },
];

function InstrumentCard(inst: (typeof instruments)[number]) {
  if (inst.badge) {
    return (
      <div key={inst.path} className="instrument-card">
        <img src={inst.img} alt={inst.label} className="instrument-card-img" loading="lazy" />
        <div className="instrument-card-body">
          <h2>{inst.label}</h2>
          <p>{inst.desc}</p>
          <span className="instrument-card-badge">{inst.badge}</span>
        </div>
      </div>
    );
  }
  return (
    <Link key={inst.path} to={inst.path} className="instrument-card">
      <img src={inst.img} alt={inst.label} className="instrument-card-img" loading="lazy" />
      <div className="instrument-card-body">
        <h2>{inst.label}</h2>
        <p>{inst.desc}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <section className="content-section">
        <div className="instrument-grid">
          {instruments.map(InstrumentCard)}
        </div>
      </section>
    </>
  );
}