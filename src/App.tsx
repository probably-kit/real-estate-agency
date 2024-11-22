

function App() {

  return (
    <>
      <div className="container">
        {/* Navigation Bar */}
        <nav className="navbar">
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
            <img src="src/assets/Background main image.jpg" alt="Building" />
            <div className="overlay-content">
              <h1>Designing Your Next Chapter.</h1>
              <p>Where Dreams Become Apartments. <br /> Transforming Visions into Vibrant Living Spaces.</p>
              <div className="hero-buttons">
                <a href="#" className="btn">Explore Projects</a>
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
              <p>Happy Clients</p>
            </div>
          </div>
        </section>


        {/* Features Section */}

        <section className="features-container">
          <div className="left-section">
            <img src="src/assets/forest home.webp" alt="Property Image" />
            <div>
              <h2>Find Your Dream Property At The Best Price</h2>
              <p>We support our clients at every stage of the buying and selling process, ensuring a seamless and stress-free experience from start to finish.</p>
              <a href="#" className="button">Learn More</a>
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
              <h3>50K+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="info-card">
              <h3>5+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
