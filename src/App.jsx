import React, { useState } from 'react';
import {
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  Heart,
  Zap,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  Flame
} from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: "Tropical Mango Paradise",
    category: "Tropical",
    price: 7.99,
    description: "Ripe Alphonso mango blended with passionfruit, coconut water, and a touch of organic honey.",
    ingredients: ["Mango", "Passionfruit", "Coconut Water", "Honey"],
    tag: "Bestseller",
    image: "/images/tropical-mango.svg"
  },
  {
    id: 2,
    name: "Wild Berry Blast",
    category: "Berry",
    price: 8.49,
    description: "Antioxidant super-charge with acai berries, organic blueberries, raspberries, and almond milk.",
    ingredients: ["Acai", "Blueberry", "Raspberry", "Almond Milk"],
    tag: "Superfood",
    image: "/images/berry-blast.svg"
  },
  {
    id: 3,
    name: "Green Goddess Glow",
    category: "Detox",
    price: 8.99,
    description: "Nutrient-dense spinach, crisp green apple, cucumber, ginger, and fresh squeezed lime juice.",
    ingredients: ["Spinach", "Green Apple", "Cucumber", "Lime", "Ginger"],
    tag: "Detox Special",
    image: "/images/green-goddess.svg"
  },
  {
    id: 4,
    name: "Strawberry Banana Dream",
    category: "Berry",
    price: 6.99,
    description: "Classic creamy blend of sun-ripened strawberries, sweet bananas, and vanilla Greek yogurt.",
    ingredients: ["Strawberry", "Banana", "Greek Yogurt", "Vanilla"],
    tag: "Kid's Favorite",
    image: "/images/strawberry-banana.svg"
  },
  {
    id: 5,
    name: "Chocolate Protein Power",
    category: "Protein",
    price: 9.49,
    description: "25g plant protein with raw cacao, peanut butter, oats, banana, and unsweetened oat milk.",
    ingredients: ["Plant Protein", "Cacao", "Peanut Butter", "Oats", "Oat Milk"],
    tag: "High Protein",
    image: "/images/protein-power.svg"
  },
  {
    id: 6,
    name: "Citrus Sunshine Zest",
    category: "Tropical",
    price: 7.49,
    description: "Revitalizing citrus burst featuring blood orange, pineapple, turmeric root, and coconut juice.",
    ingredients: ["Orange", "Pineapple", "Turmeric", "Coconut Juice"],
    tag: "Immunity Booster",
    image: "/images/citrus-sunshine.svg"
  }
];

const FRUIT_BENEFITS = [
  {
    icon: "⚡",
    title: "Instant Energy Boost",
    description: "Natural fruit sugars combined with essential vitamins provide clean, sustained stamina without caffeine crashes.",
    color: "#FFF3E0"
  },
  {
    icon: "🛡️",
    title: "Immunity Shield",
    description: "Packed with Vitamin C and powerful antioxidants to keep your immune system strong and resilient every day.",
    color: "#E8F5E9"
  },
  {
    icon: "✨",
    title: "Radiant Skin Glow",
    description: "Deep hydration paired with natural collagen-supporting nutrients promotes clear, glowing skin naturally.",
    color: "#FFF0F2"
  },
  {
    icon: "🌱",
    title: "Optimal Digestion",
    description: "Rich in active dietary fibers and enzymes like bromelain to support gut health and smooth digestion.",
    color: "#F3E5F5"
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const filteredMenu = activeCategory === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="app">
      {/* Header & Navigation */}
      <header className="header">
        <div className="nav-container">
          <a href="#" className="logo">
            <img src="/logo.svg" alt="Zest & Glow Logo" width="36" height="36" />
            <span>Zest & Glow</span>
          </a>

          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#menu">Smoothie Menu</a></li>
            <li><a href="#benefits">Health Benefits</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact & Location</a></li>
          </ul>

          <div className="nav-actions">
            <button className="cart-btn" aria-label="Cart" onClick={() => alert(`Items in cart: ${cartCount}`)}>
              <ShoppingBag size={20} />
              <span>Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <a href="#menu" className="order-now-nav">Order Now</a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Smoothie Menu</a>
          <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>Health Benefits</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact & Location</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} /> 100% Organic & Fresh Daily
            </div>
            <h1 className="hero-title">
              Sip the Pure Goodness of <span>Fresh Sunshine</span>
            </h1>
            <p className="hero-subtitle">
              Handcrafted, cold-pressed fruit smoothies packed with natural vitamins, zero added sugar, and endless vitality. Freshly blended on every order!
            </p>
            <div className="hero-actions">
              <a href="#menu" className="btn-primary">
                Explore Menu <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-secondary">
                Our Story
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/images/hero-smoothie.svg"
              alt="Fresh Tropical Smoothie Showcase"
              className="hero-img"
            />
            <div className="floating-card floating-card-1">
              <Flame size={20} color="#FF5252" />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#747D8C' }}>Natural Boost</div>
                <div style={{ fontSize: '0.95rem', color: '#2F3542' }}>0% Added Sugar</div>
              </div>
            </div>
            <div className="floating-card floating-card-2">
              <Heart size={20} color="#FF4081" />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#747D8C' }}>Community Favorite</div>
                <div style={{ fontSize: '0.95rem', color: '#2F3542' }}>4.9 ★ Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section">
        <div className="section-header">
          <span className="section-tag">Crafted With Love</span>
          <h2 className="section-title">Our Signature Smoothie Menu</h2>
          <p className="section-desc">
            Choose from our chef-curated recipes made with farm-fresh organic fruits, rich plant proteins, and superfood blends.
          </p>
        </div>

        {/* Category Filter */}
        <div className="filter-container">
          {["All", "Tropical", "Berry", "Detox", "Protein"].map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="menu-grid">
          {filteredMenu.map(item => (
            <div className="smoothie-card" key={item.id}>
              <div className="card-img-wrapper">
                <span className="card-tag">{item.tag}</span>
                <img src={item.image} alt={item.name} className="card-img" />
              </div>
              <div className="card-content">
                <div className="card-title-row">
                  <h3 className="card-title">{item.name}</h3>
                  <span className="card-price">${item.price.toFixed(2)}</span>
                </div>
                <p className="card-desc">{item.description}</p>

                <div className="card-ingredients">
                  {item.ingredients.map((ing, i) => (
                    <span className="ingredient-chip" key={i}>{ing}</span>
                  ))}
                </div>

                <button className="add-cart-btn" onClick={handleAddToCart}>
                  <ShoppingBag size={18} /> Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Fresh Fruits Section */}
      <section id="benefits" className="section benefits-bg">
        <div className="section-header">
          <span className="section-tag">Why Fresh Matters</span>
          <h2 className="section-title">The Power of Fresh Fruits</h2>
          <p className="section-desc">
            Every cup is loaded with bio-available nutrients designed to fuel your mind, body, and soul.
          </p>
        </div>

        <div className="benefits-grid">
          {FRUIT_BENEFITS.map((b, idx) => (
            <div className="benefit-card" key={idx}>
              <div className="benefit-icon" style={{ backgroundColor: b.color }}>
                {b.icon}
              </div>
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <div className="about-grid">
          <div className="about-img-box">
            <div className="about-card-inner">
              <span className="section-tag">Our Philosophy</span>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>From Local Farms Straight to Your Glass</h2>
              <p className="section-desc" style={{ fontSize: '1rem', marginTop: '1rem' }}>
                At Zest & Glow, we believe that nature creates the finest flavors. That’s why we partner exclusively with certified organic regional farmers to source fresh fruits picked at peak ripeness.
              </p>
              <ul style={{ listStyle: 'none', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                  <CheckCircle2 color="#2ED573" size={20} /> 100% Cold-pressed & freshly blended
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                  <CheckCircle2 color="#2ED573" size={20} /> Zero artificial preservatives or syrups
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 600 }}>
                  <CheckCircle2 color="#2ED573" size={20} /> Eco-friendly compostable straw & cup options
                </li>
              </ul>
            </div>
          </div>

          <div className="about-info">
            <span className="section-tag">Since 2021</span>
            <h2 className="section-title">Crafting Healthy Habits One Smoothie at a Time</h2>
            <p className="section-desc">
              Founded by passionate nutrition advocates, Zest & Glow was born from a simple mission: make delicious, nutrient-dense fresh fruit smoothies accessible to everybody in our bustling city.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h4>50k+</h4>
                <p>Smoothies Blended</p>
              </div>
              <div className="stat-item">
                <h4>100%</h4>
                <p>Organic Fruits</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>Local Farm Partners</p>
              </div>
              <div className="stat-item">
                <h4>4.9 ★</h4>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Location Section */}
      <section id="contact" className="section benefits-bg">
        <div className="section-header">
          <span className="section-tag">Visit & Connect</span>
          <h2 className="section-title">Contact & Bar Location</h2>
          <p className="section-desc">
            Stop by our cozy bar for a quick refreshment or send us a message!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="info-item">
              <div className="info-icon"><MapPin /></div>
              <div className="info-text">
                <h4>Our Location</h4>
                <p>742 Sunshine Blvd, Suite 100<br />Fruitville, CA 90210</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Clock /></div>
              <div className="info-text">
                <h4>Opening Hours</h4>
                <p>Mon - Fri: 7:00 AM - 8:00 PM<br />Sat - Sun: 8:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone /></div>
              <div className="info-text">
                <h4>Call Us</h4>
                <p>(555) 382-9011</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Mail /></div>
              <div className="info-text">
                <h4>Email Us</h4>
                <p>hello@zestglowsmoothies.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={50} color="#2ED573" style={{ marginBottom: '1rem' }} />
                <h3>Message Sent Successfully!</h3>
                <p style={{ color: '#747D8C', marginTop: '0.5rem' }}>
                  Thank you for reaching out. We will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                <h3 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h3>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="form-control"
                    placeholder="Tell us about your catering request, question, or feedback..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo" style={{ color: 'white' }}>
              <img src="/logo.svg" alt="Logo" width="30" height="30" />
              <span style={{ color: 'white' }}>Zest & Glow</span>
            </a>
            <p>
              Delivering nature's finest smoothie creations crafted with pure fruits, clean ingredients, and sustainable love.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#menu">Smoothie Menu</a></li>
              <li><a href="#benefits">Health Benefits</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Categories</h4>
            <ul className="footer-links">
              <li><a href="#menu">Tropical Blends</a></li>
              <li><a href="#menu">Berry Superfoods</a></li>
              <li><a href="#menu">Green Detox</a></li>
              <li><a href="#menu">Protein Shakes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Stay Refreshed</h4>
            <p style={{ fontSize: '0.9rem', color: '#A4B0BE', marginBottom: '1rem' }}>
              Subscribe for weekly smoothie recipes & special discount codes!
            </p>
            {subscribed ? (
              <p style={{ color: '#2ED573', fontWeight: 600 }}>Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary" style={{ width: '100%', borderRadius: '8px', padding: '0.6rem' }}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zest & Glow Smoothie Bar. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Instagram size={20} cursor="pointer" />
            <Facebook size={20} cursor="pointer" />
            <Twitter size={20} cursor="pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
