import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './Signup.css';

const Signup = () => {
  return (
    <>
      <div className="banner">
        <NavBar />
        <div>
          <h1>Signup</h1>
        </div>
      </div>
      <div className="home-body">
        <div className="section">
          <form>
            <label>Name: </label>
            <input />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
