import PropertyCard from './components/PropertyCard';
import FaqSection from './components/FAQSection';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const properties = [
    {
      imageUrl: 'https://via.placeholder.com/400x300',
      title: 'Sunnyvale Retreat',
      price: '$450,000',
      address: '23 Sunnyvale Rd',
      beds: 4,
      baths: 3,
      area: 2500,
    },
    {
      imageUrl: 'https://via.placeholder.com/400x300',
      title: 'Mountain View Escape',
      price: '$550,000',
      address: '45 Mountain View Rd',
      beds: 5,
      baths: 4,
      area: 3000,
    },
    {
      imageUrl: 'https://via.placeholder.com/400x300',
      title: 'Downtown Delight',
      price: '$600,000',
      address: '789 Downtown St',
      beds: 3,
      baths: 2,
      area: 1800,
    },
    // Add more properties as needed
  ];

  return (
    <>
      <div className="container">
        {/* Navigation Bar */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="logo">WERNER HOME</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Property</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#" className="btn">Let's Talk</a></li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-image-container">
            <img src="/Background main image.jpg" alt="Building" />
            <div className="overlay-content">
              <h1>Designing Your Next Chapter.</h1>
              <p>Where Dreams Become Apartments. <br /> Transforming Visions into Vibrant Living Spaces.</p>
              <div className="hero-buttons">
                <a href="#" className="transparent-btn">Explore Projects</a>
                <a href="#" className="btn">Our Process</a>
              </div>
            </div>
            <svg className="svg-inverted-border" width="28" height="26">
              <path d="M25,0 L25,25 L0,25 A25,25 0 0,0 25,0 Z" fill="white" />
            </svg>
            <svg className="svg-inverted-border2" width="25" height="25">
              <path d="M25,0 L25,25 L0,25 A25,25 0 0,0 25,0 Z" fill="white" />
            </svg>
            <div className="hero-feedback">
              <div className="avatars">
                <div className="avatar"><img src="https://via.placeholder.com/40" alt="Client 1" /></div>
                <div className="avatar"><img src="https://via.placeholder.com/40" alt="Client 2" /></div>
                <div className="avatar"><img src="https://via.placeholder.com/40" alt="Client 3" /></div>
                <div className="avatar"><img src="https://via.placeholder.com/40" alt="Client 4" /></div>
              </div>
              <div className="details">
                50k+ Happy Clients
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}

        <section className="features-container">
          <div className="left-section">
            <img src="/forest home.webp" alt="Property Image" />
            <div>
              <h2>Find Your Dream Property At The Best Price</h2>
              <p>We support our clients at every stage of the buying and selling process, ensuring a seamless and stress-free experience from start to finish.</p>
              <br />
              <a href="#" className="transparent-btn">Learn More</a>
            </div>
          </div>
          <div className="right-section">
            <div className="info-card">
              <h3>100k+</h3>
              <p>Property Constructed</p>
            </div>
            <div className="info-card">
              <h3>100+</h3>
              <p>Award Winning</p>
            </div>
            <div className="info-card">
              <h3>50k+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="info-card">
              <h3>5+</h3>
              <p>Years of Experience</p>
            </div>

          </div>
        </section>

        <section className="property-grid">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              imageUrl={property.imageUrl}
              title={property.title}
              price={property.price}
              address={property.address}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
            />
          ))}
        </section>

        <section className='standards-grid'>
          <div className="standards-grid-card">
            <img src="https://via.placeholder.com/60" alt="Market Analysis Icon" />
            <h3>Market Analysis</h3>
            <p>In-depth understanding of market trends to guide pricing and strategy.</p>
          </div>
          <div className="standards-grid-card">
            <img src="https://via.placeholder.com/60" alt="Property Valuation Icon" />
            <h3>Property Valuation</h3>
            <p>Accurate assessments to determine the true value of your favorite apartment, cottage, etc.</p>
          </div>
          <div className="standards-grid-card">
            <img src="https://via.placeholder.com/60" alt="Legal Assistance Icon" />
            <h3>Legal Assistance</h3>
            <p>Helping clients navigate the complexities of legal paperwork to ensure a smooth transaction.</p>
          </div>
          <div className="standards-grid-card">
            <img src="https://via.placeholder.com/60" alt="Post-Sale Support Icon" />
            <h3>Post-Sale Support</h3>
            <p>Providing assistance even after the sale, ensuring clients feel supported throughout their journey.</p>
          </div>
          <div className="standards-grid-card">
            <img src="https://via.placeholder.com/60" alt="Negotiation Skills Icon" />
            <h3>Negotiation Skills</h3>
            <p>In-depth understanding of market trends to guide pricing and strategy.</p>
          </div>
          <div className="standards-grid-card">
            <img src="https://via.placeholder.com/60" alt="Tailored Marketing Plans Icon" />
            <h3>Tailored Marketing Plans</h3>
            <p>Developing customized strategies to showcase properties and attract buyers.</p>
          </div>
        </section>
        <section>
          <FaqSection />
        </section>
        <Footer/>






      </div>
    </>
  )
}

export default App
