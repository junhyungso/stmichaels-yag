import PraiseNight from '../assets/praisenight.jpg';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <div>st.michael's Korean YAG</div>
        <img src={PraiseNight} alt="Praise Night" />
      </div>
      <div>
        <h2>St. Michael's Korean Young Adult Group</h2>
        <div>Our Young Adult Group is a fsdkjafkjdsfkj</div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
