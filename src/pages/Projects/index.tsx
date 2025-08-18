import AstrorunSS from '@/assets/astrorun_ss.png';
import NoteamSS from '@/assets/noteam_ss.png';
import PengulingoSS from '@/assets/pengulingo_ss.png';
import WhisperchainSS from '@/assets/whisperchain_ss.png';
import BackToTop from '@/components/BackToTop';
import './styles.scss';

function ProjectPage() {
  return (
    <div className="projects-page">
      <div className="projects-list">
        <div className="pictextbuttons">
          <img className="screenshot" src={NoteamSS} />
          <div className="contents-textbuttons">
            <h1>Noteam</h1>
            <p>
              Noteam is a collaborative notes web app where users can post stickies and watch others
              write notes in real time. Supports markdown and live updating.
              <b> React.js, Firebase DB</b>
            </p>
            <div className="button-stack">
              <a href="https://github.com/zhouselena/noteam" target="_blank">
                <button className="outline">Github</button>
              </a>
              <a href="https://noteam.onrender.com/" target="_blank">
                <button className="filled">Try it out</button>
              </a>
            </div>
          </div>
        </div>
        <div className="pictextbuttons">
          <div className="contents-textbuttons right">
            <h1>WhisperChain+</h1>
            <p>
              WhisperChain+ is secure anonymous compliment delivery system. Users can sign up and
              send and receive messages in a securely encrypted environment.
              <b> Python</b>
            </p>
            <div className="button-stack right">
              <a href="https://github.com/zhouselena/whisperchain" target="_blank">
                <button className="outline">Github</button>
              </a>
              <a href="https://github.com/zhouselena/whisperchain" target="_blank">
                <button className="filled">Try it out</button>
              </a>
            </div>
          </div>
          <img className="screenshot" src={WhisperchainSS} />
        </div>
        <div className="pictextbuttons">
          <img className="screenshot" src={PengulingoSS} />
          <div className="contents-textbuttons">
            <h1>Pengulingo</h1>
            <p>
              Pengulingo is a multiplayer language learning arcade, designed as a mix between
              multiplayer games like Kahoot or Jackbox, and language learning apps like Duolingo.
              The goal is to learn languages through applying them in real-life scenarios, and
              create an interactive space for people to be more immersed in the language.
              <b> React.js, MongoDB</b>
            </p>
            <div className="button-stack">
              <a
                href="https://www.youtube.com/watch?v=fjZj0D4-1LM&ab_channel=SelenaZhou"
                target="_blank"
              >
                <button className="outline">Demo Vid</button>
              </a>
              <a href="https://pengulingo.onrender.com/" target="_blank">
                <button className="filled">Try it out</button>
              </a>
            </div>
          </div>
        </div>
        <div className="pictextbuttons">
          <div className="contents-textbuttons right">
            <h1>AstroRun</h1>
            <p>
              Astro Runner is a 2D platformer game written on PyGame. It features a little astronaut
              creature trying to avoid asteroids and other space-related obstacles. All art is
              original!
              <b> Python</b>
            </p>
            <div className="button-stack right">
              <a href="https://github.com/zhouselena/astrorun" target="_blank">
                <button className="outline">Github</button>
              </a>
              <a
                href="https://www.youtube.com/watch?v=SshlwcV6xRs&ab_channel=SelenaZhou"
                target="_blank"
              >
                <button className="filled">Demo Vid</button>
              </a>
            </div>
          </div>
          <img className="screenshot" src={AstrorunSS} />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

export default ProjectPage;
