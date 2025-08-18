import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa6';
import './styles.scss';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setVisible(false);
  };

  return (
    <div>
      <button onClick={handleClick} className={`back-to-top-button ${visible ? 'visible' : ''}`}>
        <FaChevronUp className="bounce-icon" />
        back to top
      </button>
      <div className={`back-to-top-wrapper ${visible ? 'visible' : ''}`}></div>
    </div>
  );
}

export default BackToTop;
