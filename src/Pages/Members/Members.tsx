import PraiseNight from '../../assets/praisenight.jpg';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './Members.css';

const Members = () => {
  return (
    <>
      <div className="banner">
        <div>
          <h1>Members</h1>
        </div>
        <NavBar />
        <img src={PraiseNight} alt="Praise Night" className="banner-image" />
      </div>
      <div className="home-body">
        <div className="section">
          <h2>St. Michael's Korean Young Adult Group</h2>
          <div>Our Young Adult Group is a fsdkjafkjdsfkj</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Members;
