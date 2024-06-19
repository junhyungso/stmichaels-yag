import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './About.css';

const About = () => {
  return (
    <>
      <div className="banner">
        <NavBar />
        <div>
          <h1>About</h1>
        </div>
        <div>
          The Young Adult Group consists of 50 members between the ages of a
          high school graduate and 40 years old. Open to all those who
          participate in the Sunday evening mass, the group members are mostly
          bilinguals and include those who have recently arrived in the U.S. The
          group seeks to provide support in daily lives and faith development,
          by deepening fellowship both among the members and with young adult
          groups in nearby parishes. The members serve for the Sunday evening
          mass, partake in community service, hold weekly bible studies, and
          provide volunteer service in planning and hosting church events
          throughout the year.
        </div>
      </div>
      <div className="home-body">
        <div className="section"></div>
      </div>

      <Footer />
    </>
  );
};

export default About;
