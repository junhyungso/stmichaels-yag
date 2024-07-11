import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import './PrayerIntentions.css';

const PrayerIntentions = () => {
  const [intentions, setIntentions] = useState<string[]>([]);
  const [intention, setIntention] = useState('');

  const handleIntentionSubmit = () => {
    const newIntentions = [...intentions, intention];
    setIntentions(newIntentions);
  };

  return (
    <>
      <div>
        <NavBar />
        <div>
          <h1>Prayer Intentions</h1>
        </div>
      </div>
      <div>
        This is a place to submit anonymous prayer intentions of your choice.
        These intentions will be offered in the prayers and mass of the young
        adult group. The intentions will be refreshed quarterly.
      </div>
      <div>
        <input
          type="text"
          placeholder="Type intentions here..."
          onChange={(e) => setIntention(e.target.value)}
        />
        <button onClick={handleIntentionSubmit}>Submit</button>
      </div>
      <div>
        {intentions.map((intention, i) => (
          <div key={i}>{intention}</div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default PrayerIntentions;
