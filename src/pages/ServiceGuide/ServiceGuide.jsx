import './serviceGuide.css'


const ServiceGuide = () => {
  return (
    <div className="serviceGuide">
      <section
        id="home-builder"
        style={{ background: 'linear-gradient(90deg, rgb(250, 255, 137) 0%, rgb(234, 114, 173) 100%)' }}
      >
        <header className="bullet">Home Builder</header>
        <p>In this section we always try to find a new way that can help you when you build or redesign your home.</p>
      </section>

      <section
        id="paints-maker"
        style={{ background: 'linear-gradient(90deg, rgb(181, 151, 246) 0%, rgb(150, 198, 234) 100%)' }}
      >
        <header style={{ color: '#722f37' }}>Paints Maker</header>
        <p>
          Paints Maker is a tool where you can find and choose different types of colors for your home interior and
          exterior. These colors and their codes are based on Asian Paints. Select your color and note the name/code to
          buy it from your nearest dealer.
        </p>
      </section>

      <section
        id="tiles-calculator"
        style={{ background: 'linear-gradient(to right, #ff6e7f, #bfe9ff)' }}
      >
        <header style={{ color: 'royalblue' }}>Tiles Calculator</header>
        <p>This tool helps you calculate how many tiles and marbles you need. It includes:</p>
        <ol>
          <li>Measure your walls or floors.</li>
          <li>Select a size.</li>
          <li>Click the calculate button.</li>
        </ol>
        <p>You will get the total quantity required.</p>
      </section>

      <section
        id="worker-finder"
        style={{ background: 'linear-gradient(to bottom, #12c2e9, #c471ed, #f64f59)' }}
      >
        <header style={{ color: 'purple' }}>Workers Finder</header>
        <p>This tool connects workers and people looking to hire. Choose your option:</p>
        <ol>
          <li>I am a Worker</li>
          <p>
            If you're looking for work, select this option. Fill out the registration form and your profile will be
            added after approval.
          </p>
          <li>I want Workers</li>
          <p>
            If you need workers, go to the Workers Finder section and select this option. Browse profiles (plumber,
            welder, electrician, etc.) and contact them directly.
          </p>
        </ol>
      </section>

      <section id="vehicle-reservation">
        <header>Vehicle Reservation</header>
        <p>This service is only for villagers in Jharsuguda district, Kolabira block.</p>
        <p>
          If you need to travel but can't find a nearby vehicle, fill out the form in this section. We will contact you
          shortly after submission.
        </p>
      </section>

      <section
        id="shop-together"
        style={{
          background: 'linear-gradient(to right, #f12711, #f5af19)',
          color: '#fff',
        }}
      >
        <header style={{ color: '#222' }}>Shop Together</header>
        <p>
          If you buy a small amount of construction materials, transport charges are still high. This tool helps reduce
          that cost.
        </p>
        <h4 style={{ color: '#222' }}>How does it work?</h4>
        <p>
          If two users need similar materials and live along the same route, we combine the orders in one vehicle and
          split the transport cost. This helps you save money.
        </p>
      </section>
    </div>
  );
};

export default ServiceGuide;