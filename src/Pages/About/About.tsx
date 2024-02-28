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
      </div>
      <div className="home-body">
        <div className="section"></div>
      </div>

      <Footer />
    </>
  );
};

export default About;
