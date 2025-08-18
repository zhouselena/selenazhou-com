import { Link } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';
import HomePicture from '@/assets/homepicture.png';
import './styles.scss';

function Home() {
  return (
    <div className="homepage">
      <div className="pictextbuttons">
        <img src={HomePicture} />
        <div className="contents-textbuttons">
          <h1>Hi! I'm Selena.</h1>
          <p>
            I’m currently majoring in <b>computer science</b> and double minoring in{' '}
            <b>film studies</b> and <b>french</b> at <b>Dartmouth College.</b>
            <br />
            <br />I like to bike, write funny Letterboxd reviews of movies, play stardew valley,
            gym, watch football, put together lego sets, amongst other things.
          </p>
          <div className="button-stack">
            <Link to={ROUTES.PROJECTS}>
              <button className="outline">My Projects</button>
            </Link>
            <Link to={ROUTES.CONTACT}>
              <button className="filled">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
