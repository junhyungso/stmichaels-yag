import PraiseNight from '../../assets/praisenight.jpg';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="banner">
        <NavBar />
        <div>
          <h1>St. Michael's Korean YAG</h1>
        </div>
        <img src={PraiseNight} alt="Praise Night" className="banner-image" />
      </div>
      <div className="home-body">
        <div className="section">
          <h2>Mass Schedule</h2>
          <div>Every Sunday 5:30pm</div>
        </div>
        <div className="section">
          <h2>St. Michael's Korean Young Adult Group</h2>
          <div>Our Young Adult Group is a fsdkjafkjdsfkj</div>
        </div>
        <div className="section">
          <h2>Upcoming Events</h2>
          <div>
            <p>St. Patricks Day</p>
            <p>Easter</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
