import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './Gallery.css';

const Gallery = () => {
  return (
    <>
      <div className="banner">
        <NavBar />
        <div>
          <h1>Gallery</h1>
        </div>
      </div>
      <div className="home-body">
        <div className="section"></div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
