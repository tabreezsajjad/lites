import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Gem,
  Instagram,
  Lightbulb,
  MapPin,
  Menu,
  Ruler,
  Phone,
  Sparkles,
  SunMedium,
  X,
  WandSparkles,
} from 'lucide-react';
import './styles.css';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.1,
    },
  },
};

const navItems = [
  { label: 'Collections', href: '#collections' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Visit', href: '#visit' },
];

const sectionLinks = [
  {
    label: 'Explore collections',
    detail: 'Chandeliers, pendants, profile lights',
    href: '#collections',
    icon: Gem,
  },
  {
    label: 'Plan a room',
    detail: 'Scale, layout, finishes, installation',
    href: '#services',
    icon: Ruler,
  },
  {
    label: 'Visit the studio',
    detail: 'See the glow before you decide',
    href: '#visit',
    icon: MapPin,
  },
];

const collections = [
  {
    title: 'Statement Chandeliers',
    detail: 'Crystal, brass, glass, and sculptural centerpieces for halls and double-height spaces.',
    tone: 'champagne',
  },
  {
    title: 'Pendant Stories',
    detail: 'Dining clusters, kitchen islands, bedside drops, and cafe-style feature lighting.',
    tone: 'teal',
  },
  {
    title: 'Architectural Lines',
    detail: 'Concealed profiles, downlights, wall grazers, outdoor fixtures, and warm linear details.',
    tone: 'coral',
  },
  {
    title: 'Wall & Mirror Lights',
    detail: 'Soft wall washers, vanity lights, picture lights, and bedside accents.',
    tone: 'champagne',
  },
  {
    title: 'Outdoor Fixtures',
    detail: 'Weather-ready gate, balcony, garden, and facade lights for warm evenings.',
    tone: 'teal',
  },
  {
    title: 'Table & Floor Lamps',
    detail: 'Portable layers for lounges, reading corners, bedrooms, and hospitality spaces.',
    tone: 'coral',
  },
];

const services = [
  'Lighting layouts for homes, hotels, boutiques, and offices',
  'On-site selection support with scale and finish guidance',
  'Curated premium fixtures sourced across styles and budgets',
  'Installation coordination for complex chandelier and profile work',
];

const materialNotes = [
  { label: 'Brass', value: 'Warm metal' },
  { label: 'Crystal', value: 'Statement sparkle' },
  { label: 'Profile', value: 'Clean lines' },
];

const journeySteps = [
  {
    step: '01',
    title: 'Bring the room',
    text: 'Share photos, measurements, ceiling height, and the mood you want the space to hold.',
  },
  {
    step: '02',
    title: 'See the glow',
    text: 'Compare warm whites, glass, crystal, brass, profiles, and scale in a real showroom setting.',
  },
  {
    step: '03',
    title: 'Finish the plan',
    text: 'Leave with fixture choices, placement notes, and installation guidance for a cleaner result.',
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.45], [1.06, 1.16]);
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.33], [1, 0.58]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main>
      <section className="hero" id="home">
        <motion.img
          className="hero__image"
          src="/assets/lites-showroom-hero.png"
          alt="Warm premium lighting showroom with chandeliers and pendant lights"
          style={{ scale: heroScale, y: heroY, opacity: heroOpacity }}
          initial={{ scale: 1.12, filter: 'saturate(0.95) contrast(0.96)' }}
          animate={{ scale: 1.06, filter: 'saturate(1.08) contrast(1.04)' }}
          transition={{ duration: 1.8, ease }}
        />
        <div className="hero__shade" />
        <motion.div
          className="hero__glow hero__glow--one"
          aria-hidden="true"
          animate={{ x: [-18, 18, -18], y: [0, 22, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__glow hero__glow--two"
          aria-hidden="true"
          animate={{ x: [20, -16, 20], y: [12, -18, 12], scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="hero__sparkles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <motion.header
          className="nav"
          aria-label="Primary navigation"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <a className="brand" href="#home" aria-label="Lites home">
            <span className="brand__mark">L</span>
            <span>Lites</span>
          </a>
          <nav className="nav__links">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="nav__action" href="tel:+910000000000">
            <Phone size={17} />
            Call showroom
          </a>
          <button
            className="nav__menu"
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.header>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="mobile-nav mobile-nav--open"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease }}
            >
              {navItems.map((item) => (
                <a href={item.href} key={item.href} onClick={closeMenu}>
                  {item.label}
                  <ArrowRight size={16} />
                </a>
              ))}
              <a href="tel:+910000000000" onClick={closeMenu}>
                Call showroom
                <Phone size={16} />
              </a>
            </motion.nav>
          )}
        </AnimatePresence>

        <motion.div className="hero__content" variants={staggerGroup} initial="hidden" animate="visible">
          <motion.p className="eyebrow" variants={fadeUp}>
            <Sparkles size={16} />
            Premium lighting studio in Guwahati
          </motion.p>
          <motion.h1 variants={fadeUp}>Lites</motion.h1>
          <motion.p className="hero__copy" variants={fadeUp}>
            Chandeliers, pendants, architectural lights, and warm design guidance for spaces
            that need to feel finished the moment the switch turns on.
          </motion.p>
          <motion.div className="hero__actions" variants={fadeUp}>
            <motion.a className="button button--primary" href="#collections" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Explore collections
              <ArrowRight size={18} />
            </motion.a>
            <motion.a className="button button--ghost" href="#visit" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Visit studio
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.aside className="hero__panel" aria-label="Showroom highlights" initial="hidden" animate="visible" variants={staggerGroup}>
          <motion.div variants={fadeUp}>
            <strong>4.8</strong>
            <span>Customer-loved local showroom</span>
          </motion.div>
          <motion.div variants={fadeUp}>
            <strong>360+</strong>
            <span>Lighting options across modern and classic styles</span>
          </motion.div>
          <motion.div variants={fadeUp}>
            <strong>Plan</strong>
            <span>Fixture choices, layout flow, finish matching</span>
          </motion.div>
        </motion.aside>
        <motion.a
          className="scroll-cue"
          href="#sections"
          aria-label="Jump to site sections"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} />
        </motion.a>
      </section>

      <motion.section
        className="section-links"
        id="sections"
        aria-label="Site sections"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerGroup}
      >
        {sectionLinks.map(({ label, detail, href, icon: Icon }) => (
          <motion.a className="section-link" href={href} key={href} variants={fadeUp} whileHover={{ y: -5 }}>
            <span className="section-link__icon">
              <Icon size={21} />
            </span>
            <span>
              <strong>{label}</strong>
              <small>{detail}</small>
            </span>
            <ArrowRight size={18} />
          </motion.a>
        ))}
      </motion.section>

      <motion.section className="intro" id="studio" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={staggerGroup}>
        <div>
          <motion.p className="section-kicker" variants={fadeUp}>Designed for real rooms</motion.p>
          <motion.h2 variants={fadeUp}>Choose fixtures the way designers build a room.</motion.h2>
        </div>
        <motion.div className="selection-board" variants={fadeUp}>
          <div className="selection-board__visual" aria-hidden="true">
            <span className="selection-board__sample selection-board__sample--brass" />
            <span className="selection-board__sample selection-board__sample--crystal" />
            <span className="selection-board__sample selection-board__sample--profile" />
            <span className="selection-board__line selection-board__line--one" />
            <span className="selection-board__line selection-board__line--two" />
          </div>
          <div className="selection-board__panel">
            <p>Bring a photo, plan, or loose idea. Lites helps compare scale, finish, proportion, and installation fit before you choose the final fixture.</p>
            <div className="selection-board__notes" aria-label="Material and fixture notes">
              {materialNotes.map((note) => (
                <div className="selection-board__note" key={note.label}>
                  <b>{note.label}</b>
                  <span>{note.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="collections"
        id="collections"
        aria-label="Lighting collections"
      >
        <div className="collections__header">
          <p className="section-kicker">Product display</p>
          <h2>More lights visible, even on mobile.</h2>
        </div>
        {collections.map((item) => (
          <motion.article className={`collection collection--${item.tone}`} key={item.title} whileHover={{ y: -8 }}>
            <div className="collection__icon">
              {item.tone === 'champagne' && <Gem size={24} />}
              {item.tone === 'teal' && <Lightbulb size={24} />}
              {item.tone === 'coral' && <SunMedium size={24} />}
            </div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
            <a href="#visit">
              Ask about this range
              <ArrowRight size={16} />
            </a>
          </motion.article>
        ))}
      </motion.section>

      <motion.section className="experience" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerGroup}>
        <motion.div className="experience__heading" variants={fadeUp}>
          <p className="section-kicker">The studio route</p>
          <h2>From snapshot to switch-on.</h2>
        </motion.div>
        <div className="journey">
          {journeySteps.map((card) => (
            <motion.article className="journey__step" key={card.step} variants={fadeUp} whileHover={{ y: -5 }}>
              <span>{card.step}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="feature-band" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerGroup}>
        <motion.div className="feature-band__media" aria-hidden="true" variants={fadeUp}>
          <span />
          <span />
          <span />
        </motion.div>
        <motion.div className="feature-band__copy" variants={staggerGroup}>
          <motion.p className="section-kicker" variants={fadeUp}>Curated, not crowded</motion.p>
          <motion.h2 variants={fadeUp}>See the glow, compare the finish, choose with confidence.</motion.h2>
          <motion.p variants={fadeUp}>
            A lighting fixture changes color, shadow, height, and atmosphere. Lites makes
            those choices tangible with warm displays, close-up materials, and practical
            recommendations for each room.
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.section className="services" id="services" aria-label="Services" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerGroup}>
        <motion.div className="services__heading" variants={fadeUp}>
          <WandSparkles size={28} />
          <h2>From inspiration to installation</h2>
        </motion.div>
        <motion.div className="service-list" variants={staggerGroup}>
          {services.map((service) => (
            <motion.div className="service" key={service} variants={fadeUp} whileHover={{ x: 5 }}>
              <BadgeCheck size={21} />
              <span>{service}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="visit" id="visit" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={staggerGroup}>
        <motion.div variants={staggerGroup}>
          <motion.p className="section-kicker" variants={fadeUp}>Visit Lites</motion.p>
          <motion.h2 variants={fadeUp}>Bring your room dimensions. We will help with the glow.</motion.h2>
          <motion.p variants={fadeUp}>
            Stop by the showroom for chandeliers, ceiling lights, outdoor fixtures, profile
            lights, and custom recommendations for your project.
          </motion.p>
        </motion.div>
        <motion.div className="visit__actions" variants={fadeUp}>
          <motion.a className="button button--primary" href="https://www.google.com/search?q=lites+guwahati" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <MapPin size={18} />
            Find on Google
          </motion.a>
          <motion.a className="button button--outline" href="https://www.instagram.com/" aria-label="Open Instagram" whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Instagram size={18} />
            Instagram
          </motion.a>
        </motion.div>
      </motion.section>

      <footer className="footer">
        <a className="brand" href="#home" aria-label="Lites home">
          <span className="brand__mark">L</span>
          <span>Lites</span>
        </a>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p>Premium lighting, chandeliers, pendants, and architectural glow for Guwahati spaces.</p>
      </footer>
    </main>
  );
}

export default App;

createRoot(document.getElementById('root')).render(<App />);
