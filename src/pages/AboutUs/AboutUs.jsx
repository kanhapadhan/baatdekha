import './aboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us-page" >
      <section id="map">
        <div>
          <iframe
            className="grid-map__frame"
            title="Map of Jharsuguda"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?q=jharsuguda,%20768213,%20&t=m&z=13&ie=UTF8&output=embed"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(282deg, rgb(8, 255, 189), rgb(255, 255, 255))', padding: '1rem' }}>
        <header>
          <h2>What is Baatdekha?</h2>
        </header>
        <p>Baatdekha is a name of our local language, Sambalpuri.</p>
        <p>It has 3 different types of meaning.</p>
        <ol>
          <li>When you show a way to another, that's called baatdekha.</li>
          <li>When your relatives, friends, or any guests come to your home, they have to give you some surprise, like any type of gift or sweets or any more—that's also called baatdekha.</li>
          <li>Suppose you have a plan to go to your relative's house or any of your friend’s houses, and they already know about that, and they are waiting for you—that is called baatdekha.</li>
        </ol>
        <p>
          In this platform it means the 1st option. That is, we are providing some digital services through our website
          that can help people.
        </p>
      </section>

      <section style={{ background: 'linear-gradient(282deg, rgb(8, 255, 189), rgb(255, 255, 255))', padding: '1rem' }}>
        <p>We offer a wide range of services to the local villages on this platform, some of which are open to all users.</p>

        <ol type="i">
          <li>
            All user services.
            <ol type="a">
              <li>Home Estimators</li>
              <li>Shop Together</li>
            </ol>
          </li>
          <li>
            Our local user services.
            <ol type="a">
              <li>Workers Finder</li>
              <li>Vehicle Reservation</li>
            </ol>
          </li>
        </ol>
      </section>

      <section style={{ background: 'linear-gradient(0deg, rgba(255, 149, 0, 0.48), rgb(255, 255, 255))', padding: '1rem' }}>
        <p>We are always trying to find some basic types of services related to our everyday life. It can benefit a lot of individuals.</p>
        <p><strong>Why use baatdekha.com?</strong></p>
        <ul>
          <li>Easy to use.</li>
          <li>User-friendly.</li>
          <li>Up-to-date service.</li>
          <li>Privacy protection.</li>
          <li>Neat & clean interface.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;