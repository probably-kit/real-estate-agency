

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
              <p>Where Dreams Become Apartments. Transforming Visions into Vibrant Living Spaces.</p>
              <div className="hero-buttons">
                <a href="#" className="btn">Explore Projects</a>
                <button className="play-button">Our Process</button>
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="features-section">
          <div className="feature">
            <img src="src/assets/forest home.webp" alt="Property" />
            <h3>Find Your Dream Property At The Best Price</h3>
            <p>We support our clients at every stage of the buying and selling process, ensuring a seamless and stress-free experience from start to finish.</p>
            <a href="#" className="btn">Learn More</a>
          </div>
          <div className="statistics">
            <div className="stat"><strong>100k+</strong> Property Constructed</div>
            <div className="stat"><strong>100+</strong> Award Winning</div>
            <div className="stat"><strong>50k+</strong> Satisfied Clients</div>
            <div className="stat"><strong>5+</strong> Years of Experience</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
