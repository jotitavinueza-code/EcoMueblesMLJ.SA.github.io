/* =============================================
   ECO MUEBLES MLJ S.A. — Stylesheet
   Palette: Deep Forest Green + Charcoal + Cream
   ============================================= */

:root {
  --green-dark: #1a4a2e;
  --green-mid: #2d7a4f;
  --green-light: #4caf7d;
  --green-accent: #7ed957;
  --charcoal: #1c1c1c;
  --charcoal-mid: #2e2e2e;
  --cream: #f5f0e8;
  --cream-dark: #ede6d6;
  --white: #ffffff;
  --text-main: #1c1c1c;
  --text-muted: #5a5a5a;
  --radius: 16px;
  --radius-sm: 8px;
  --shadow: 0 8px 40px rgba(0,0,0,0.12);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.18);
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  color: var(--text-main);
  background: var(--cream);
  overflow-x: hidden;
}

img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }

/* ======================== NAVBAR ======================== */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 2rem;
  transition: var(--transition);
  background: transparent;
}
.navbar.scrolled {
  background: rgba(26, 74, 46, 0.97);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 24px rgba(0,0,0,0.2);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.nav-logo img {
  height: 48px;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
}
.nav-logo span {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 0.25rem;
  align-items: center;
}
.nav-links a {
  color: rgba(255,255,255,0.9);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.5rem 0.85rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  letter-spacing: 0.02em;
}
.nav-links a:hover {
  color: var(--green-accent);
  background: rgba(255,255,255,0.08);
}
.nav-admin {
  background: var(--green-light) !important;
  color: var(--white) !important;
  padding: 0.5rem 1rem !important;
}
.nav-admin:hover { background: var(--green-accent) !important; color: var(--charcoal) !important; }
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  width: 24px; height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: var(--transition);
}

/* ======================== HERO ======================== */
.hero {
  min-height: 100vh;
  background: var(--green-dark);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 100px 2rem 60px;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 70% 50%, rgba(45,122,79,0.4) 0%, transparent 60%),
    radial-gradient(ellipse 40% 40% at 20% 80%, rgba(76,175,125,0.15) 0%, transparent 50%);
  pointer-events: none;
}
.hero-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(126,217,87,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
}
.hero::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0; right: 0;
  height: 80px;
  background: var(--cream);
  clip-path: ellipse(55% 100% at 50% 100%);
}
.hero-content {
  flex: 1;
  max-width: 600px;
  position: relative;
  z-index: 2;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(126,217,87,0.15);
  border: 1px solid rgba(126,217,87,0.4);
  color: var(--green-accent);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  animation: fadeUp 0.6s ease both;
}
.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  line-height: 1.1;
  color: var(--white);
  margin-bottom: 1.2rem;
  animation: fadeUp 0.7s 0.1s ease both;
}
.hero-accent {
  color: var(--green-accent);
  position: relative;
}
.hero-sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
  margin-bottom: 2rem;
  animation: fadeUp 0.7s 0.2s ease both;
}
.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  animation: fadeUp 0.7s 0.3s ease both;
}
.hero-stats {
  display: flex;
  gap: 2rem;
  animation: fadeUp 0.7s 0.4s ease both;
}
.stat { display: flex; flex-direction: column; }
.stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--green-accent);
}
.stat-label {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}
.hero-img-wrap {
  width: 380px;
  height: 380px;
  border-radius: 50% 40% 50% 40% / 40% 50% 40% 50%;
  background: rgba(255,255,255,0.06);
  border: 2px solid rgba(126,217,87,0.25);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 4s ease-in-out infinite;
  position: relative;
}
.hero-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}
.hero-img-wrap.no-img img { display: none; }
.hero-img-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.3);
  font-size: 0.85rem;
}
.hero-img-placeholder i { font-size: 4rem; }
.hero-img-wrap img ~ .hero-img-placeholder { display: none; }
.hero-img-wrap.no-img .hero-img-placeholder { display: flex; }

/* ======================== BUTTONS ======================== */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--green-light);
  color: var(--white);
  padding: 0.9rem 1.8rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  transition: var(--transition);
  box-shadow: 0 4px 20px rgba(76,175,125,0.4);
  border: none;
  cursor: pointer;
}
.btn-primary:hover {
  background: var(--green-accent);
  color: var(--charcoal);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(126,217,87,0.4);
}
.btn-primary.full { width: 100%; justify-content: center; border-radius: var(--radius-sm); }
.btn-outline {
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 1.8rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.9rem;
  border: 2px solid rgba(255,255,255,0.3);
  color: var(--white);
  transition: var(--transition);
}
.btn-outline:hover {
  border-color: var(--green-accent);
  color: var(--green-accent);
}

/* ======================== SECTIONS ======================== */
.section { padding: 100px 2rem; }
.section-dark { background: var(--charcoal); }
.section-green { background: var(--green-dark); }
.section-light { background: var(--cream-dark); }
.container { max-width: 1200px; margin: 0 auto; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }

.section-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green-light);
  margin-bottom: 0.8rem;
}
.section-tag.light { color: var(--green-accent); }
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 1.15;
  margin-bottom: 1.5rem;
  color: var(--text-main);
}
.section-title.light { color: var(--white); }
.section-sub {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 3rem;
  max-width: 560px;
  line-height: 1.7;
}
.section-sub.light { color: rgba(255,255,255,0.7); }
.body-text {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 1.2rem;
}

/* ======================== ABOUT ======================== */
.values-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
}
.value-chip {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  background: var(--cream-dark);
  border: 1px solid rgba(45,122,79,0.2);
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--green-dark);
  transition: var(--transition);
}
.value-chip:hover { background: var(--green-light); color: var(--white); }
.about-img-wrap {
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  overflow: hidden;
  background: var(--green-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.about-img-wrap img {
  width: 100%; height: 100%; object-fit: cover;
  position: absolute; inset: 0;
}
.about-img-wrap.no-img img { display: none; }
.about-img-placeholder { color: rgba(255,255,255,0.2); font-size: 5rem; }
.about-img-wrap img ~ .about-img-placeholder { display: none; }
.about-img-wrap.no-img .about-img-placeholder { display: flex; }
.about-badge {
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  background: var(--green-light);
  color: var(--white);
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.8rem 1.4rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.col-visual { position: relative; }

/* ======================== MISSION/VISION/GOAL ======================== */
.mvg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}
.mvg-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 2rem;
  transition: var(--transition);
}
.mvg-card:hover {
  background: rgba(76,175,125,0.1);
  border-color: var(--green-light);
  transform: translateY(-4px);
}
.mvg-icon {
  width: 52px; height: 52px;
  background: rgba(76,175,125,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--green-accent);
  margin-bottom: 1.2rem;
}
.mvg-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: var(--white);
  margin-bottom: 0.8rem;
}
.mvg-card p {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
}

/* ======================== PRODUCTS ======================== */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}
.product-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}
.product-img-wrap {
  height: 220px;
  background: var(--cream-dark);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-img-wrap img {
  width: 100%; height: 100%; object-fit: cover;
  position: absolute; inset: 0;
  transition: transform 0.5s ease;
}
.product-card:hover .product-img-wrap img { transform: scale(1.06); }
.product-img-wrap.no-img img { display: none; }
.product-placeholder {
  color: rgba(45,122,79,0.2);
  font-size: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-img-wrap img ~ .product-placeholder { display: none; }
.product-img-wrap.no-img .product-placeholder { display: flex; }
.product-badge {
  position: absolute;
  top: 12px; right: 12px;
  background: var(--green-light);
  color: var(--white);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
}
.product-info { padding: 1.4rem; }
.product-info h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  margin-bottom: 0.6rem;
  color: var(--green-dark);
}
.product-info p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 0.9rem;
}
.product-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.product-tags span {
  font-size: 0.75rem;
  background: var(--cream-dark);
  color: var(--green-dark);
  padding: 0.25rem 0.65rem;
  border-radius: 100px;
  font-weight: 500;
}

/* ======================== PROCESS ======================== */
.process-steps {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 2.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
}
.process-step {
  flex: 1;
  min-width: 140px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius);
  padding: 1.8rem 1.2rem;
  text-align: center;
  transition: var(--transition);
}
.process-step:hover {
  background: rgba(76,175,125,0.12);
  border-color: var(--green-accent);
}
.step-num {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 900;
  color: rgba(126,217,87,0.2);
  line-height: 1;
  margin-bottom: 0.4rem;
}
.step-icon {
  font-size: 1.6rem;
  color: var(--green-accent);
  margin-bottom: 0.8rem;
}
.process-step h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
}
.process-step p {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.5;
}
.process-arrow {
  color: var(--green-light);
  font-size: 1rem;
  padding-top: 3rem;
  flex-shrink: 0;
}

/* ======================== IMPACT ======================== */
.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.impact-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  border: 1px solid rgba(45,122,79,0.1);
  box-shadow: var(--shadow);
  transition: var(--transition);
  text-align: center;
}
.impact-card:hover {
  transform: translateY(-4px);
  border-color: var(--green-light);
}
.impact-icon { font-size: 2.8rem; margin-bottom: 1rem; }
.impact-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  margin-bottom: 0.7rem;
  color: var(--green-dark);
}
.impact-card p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.65;
}
.impact-banner {
  background: var(--green-dark);
  border-radius: var(--radius);
  padding: 2.5rem 3rem;
  text-align: center;
}
.impact-big {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: var(--green-accent);
  font-style: italic;
}

/* ======================== GALLERY ======================== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  min-height: 200px;
}
.gallery-item {
  border-radius: var(--radius-sm);
  overflow: hidden;
  aspect-ratio: 1;
  background: var(--cream-dark);
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery-item img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.4s ease;
}
.gallery-item:hover img { transform: scale(1.07); }
.gallery-empty {
  grid-column: 1/-1;
  text-align: center;
  padding: 3rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}
.gallery-empty i { font-size: 2rem; display: block; margin-bottom: 0.5rem; opacity: 0.3; }

/* ======================== CONTACT ======================== */
.contact-info { display: flex; flex-direction: column; gap: 1.2rem; margin-bottom: 2rem; }
.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.contact-item i {
  width: 44px; height: 44px;
  background: rgba(76,175,125,0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--green-accent);
  flex-shrink: 0;
}
.contact-item strong { display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.45); margin-bottom: 0.15rem; }
.contact-item span { color: var(--white); font-size: 0.95rem; }
.social-links { display: flex; gap: 0.8rem; }
.social-btn {
  width: 46px; height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: var(--transition);
  color: var(--white);
}
.social-btn.ig { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
.social-btn.fb { background: #1877f2; }
.social-btn.wa { background: #25d366; }
.social-btn:hover { transform: scale(1.12) translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }

.contact-form {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  padding: 2.5rem;
}
.contact-form h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: var(--white);
  margin-bottom: 1.8rem;
}
.form-group { margin-bottom: 1.2rem; }
.form-group label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.55);
  margin-bottom: 0.5rem;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--white);
  padding: 0.85rem 1rem;
  border-radius: var(--radius-sm);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  transition: var(--transition);
  outline: none;
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: rgba(255,255,255,0.3); }
.form-group select option { background: var(--charcoal-mid); color: var(--white); }
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--green-light);
  background: rgba(76,175,125,0.08);
}
.form-group textarea { resize: vertical; }
.form-success {
  display: none;
  margin-top: 1rem;
  background: rgba(76,175,125,0.15);
  border: 1px solid var(--green-light);
  color: var(--green-accent);
  padding: 0.9rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  text-align: center;
}

/* ======================== FOOTER ======================== */
.footer {
  background: #0d2218;
  padding: 3rem 2rem 1.5rem;
  color: rgba(255,255,255,0.6);
}
.footer-top {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 1.5rem;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.footer-logo { height: 50px; }
.footer-brand strong { display: block; color: var(--white); font-size: 1rem; }
.footer-brand p { font-size: 0.8rem; color: rgba(255,255,255,0.4); }
.footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.footer-links a {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
  transition: var(--transition);
}
.footer-links a:hover { color: var(--green-accent); }
.footer-social { display: flex; gap: 0.8rem; }
.footer-social a {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;
  transition: var(--transition);
}
.footer-social a:hover { background: var(--green-light); color: var(--white); }
.footer-bottom { max-width: 1200px; margin: 0 auto; text-align: center; font-size: 0.78rem; }

/* ======================== WHATSAPP FLOAT ======================== */
.whatsapp-float {
  position: fixed;
  bottom: 2rem; right: 2rem;
  width: 58px; height: 58px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--white);
  box-shadow: 0 6px 24px rgba(37,211,102,0.5);
  z-index: 99;
  transition: var(--transition);
  animation: pulse-wa 2s ease-in-out infinite;
}
.whatsapp-float:hover { transform: scale(1.1); box-shadow: 0 10px 30px rgba(37,211,102,0.6); }

/* ======================== ANIMATIONS ======================== */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}
@keyframes pulse-wa {
  0%, 100% { box-shadow: 0 6px 24px rgba(37,211,102,0.5); }
  50%       { box-shadow: 0 6px 40px rgba(37,211,102,0.75); }
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ======================== RESPONSIVE ======================== */
@media (max-width: 900px) {
  .two-col { grid-template-columns: 1fr; gap: 3rem; }
  .mvg-grid { grid-template-columns: 1fr; }
  .impact-grid { grid-template-columns: 1fr; }
  .hero { flex-direction: column; text-align: center; }
  .hero-visual { margin-top: 2rem; }
  .hero-img-wrap { width: 260px; height: 260px; }
  .hero-stats { justify-content: center; }
  .hero-ctas { justify-content: center; }
  .nav-links { display: none; flex-direction: column; position: absolute; top: 72px; left: 0; right: 0; background: rgba(26,74,46,0.97); padding: 1.5rem; gap: 0.5rem; }
  .nav-links.open { display: flex; }
  .hamburger { display: flex; }
  .process-steps { flex-direction: column; align-items: stretch; }
  .process-arrow { display: none; }
}
@media (max-width: 480px) {
  .section { padding: 70px 1.2rem; }
  .hero { padding: 90px 1.2rem 60px; }
  .footer-top { flex-direction: column; text-align: center; }
}
