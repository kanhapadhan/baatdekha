import Card from "./Card";
import "./home.css";
import paintsMakerImg from "./paints-maker.jpg";
import tilesCalcImg from "./tiles-calculator.jpg";
import workersFinderImg from "./workers-finder.jpeg";
import shoppingImg from "./shopping-in-raghunathpali.jpeg";
import vehicleReservationImg from "./vehicle-reservation.png";

function Home() {
  return (
    <section className="cards-container">
      <Card
        link="/paints-Maker"
        imgSrc={paintsMakerImg}
        alt="Paints Maker"
        label="Choose a perfect paint and know the price."
      />
      <Card
        link="/workers-app"
        imgSrc={workersFinderImg}
        alt="workers-app"
        label="You can find any types of worker in this section."
      />
      <Card
        link="/tiles-calculator"
        imgSrc={tilesCalcImg}
        alt="tiles-calculator"
        label="Calculate with accuracy and save your money smartly."
      />
      <Card
        link="/shop-together"
        imgSrc={shoppingImg}
        alt="shopping-in-raghunathpali"
        label="Shopping in your local area."
      />
      <Card
        link="/vehicle-reservation"
        imgSrc={vehicleReservationImg}
        alt="vehicle-reservation"
        label="Vehicle Reservation"
      />
    </section>
  );
}

export default Home;
