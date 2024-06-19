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
          <div>Every Sunday 5:30pm (Korean)</div>
        </div>
        <div className="section">
          <h2>St. Michael's Korean Young Adult Group</h2>
          <div>
            The Young Adult Group consists of about 40 members between the ages
            of a high school graduate and 40 years old. Open to all those who
            participate in the Sunday evening mass, the group members are mostly
            bilinguals and include those who have recently arrived in the U.S.
            The group seeks to provide support in daily lives and faith
            development, by deepening fellowship both among the members and with
            young adult groups in nearby parishes. The members serve for the
            Sunday evening mass, partake in community service, hold weekly bible
            studies, and provide volunteer service in planning and hosting
            church events throughout the year.
          </div>
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
