import BackToTop from '@/components/BackToTop';
import './styles.scss';

const timelineData = [
  {
    side: 'left',
    heading: 'SWE Intern @ MongoDB',
    subtitle: 'Jun 2025 – Aug 2025 | New York City, NY',
    text: (
      <>
        Designed and built an internal tool that automatically detects performance regressions by
        comparing PR benchmark results to mainline metrics and posting flagged deviations as PR
        comments. Originally built for open-source MongoDB Go Driver (8k+ users), now generalized
        for use across all drivers. <b>Golang, Bash</b>
      </>
    ),
  },
  {
    side: 'right',
    heading: 'SDE Mentor @ DALI Lab',
    subtitle: 'Sep 2023 – Current | Hanover, NH',
    text: (
      <>
        Tech lead on the Link~VT team. Built a web app that connects local citizens in Vermont who
        are out of work due to injury to personalized services and career coaches. Implemented
        databases, user accounts, resource table and search filters. Projected to reach 400+ users
        in VT. <b>React.js, Directus</b>
      </>
    ),
  },
  {
    side: 'left',
    heading: 'CS52 Teaching Assistant',
    subtitle: 'Jan 2023 – Current | Hanover, NH',
    text: (
      <>
        TA'd for COSC 001 (Intro to programming & computation) <b>Python</b>, COSC 010 (Problem
        solving via object-oriented programming) <b>Java</b>, COSC 052 (Full-stack development){' '}
        <b>React.js, MongoDB</b>.
      </>
    ),
  },
  {
    side: 'right',
    heading: 'SWE Intern @ MongoDB',
    subtitle: 'Jun 2024 – Aug 2024 | Austin, TX',
    text: (
      <>
        Completed a large-scale project migrating an outdated repository to a standardized
        mono-repo, impacting 300+ internal developers. Also implemented a debounced fuzzy-search
        feature for trigger names used across 250+ global applications. <b>Typescript, React</b>
      </>
    ),
  },
  {
    side: 'left',
    heading: 'Media Intern @ OIC Philly',
    subtitle: 'Jun 2023 – Aug 2023 | Philadelphia, PA',
    text: (
      <>
        Developed event website for registration, sponsors, and ticket sales for inaugural OIC
        Alumni Block Party. Created marketing graphics for SEPTA ads during Aug 2023 campaign. Took
        and produced promotional photos. <b>Figma, Lightroom, HTML/CSS</b>
      </>
    ),
  },
];

function ExperiencesPage() {
  return (
    <div className="experiences-page">
      <div className="timeline">
        {timelineData.map((entry, index) => (
          <div key={index} className={`timeline-entry ${entry.side}`}>
            <h1>{entry.heading}</h1>
            <p className="subtitle">{entry.subtitle}</p>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
      <BackToTop />
    </div>
  );
}

export default ExperiencesPage;
