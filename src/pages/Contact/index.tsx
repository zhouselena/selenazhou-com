import IconCal from '@/assets/icon_cal.svg';
import IconEmail from '@/assets/icon_email.svg';
import IconGithub from '@/assets/icon_github.svg';
import IconIG from '@/assets/icon_ig.svg';
import IconLinkedIn from '@/assets/icon_linkedin.svg';
import IconPDF from '@/assets/icon_pdf.svg';
import './styles.scss';

const contactButtons = [
  { href: 'https://www.linkedin.com/in/selena-zhou/', imgSrc: IconLinkedIn, title: 'LinkedIn' },
  { href: 'https://calendly.com/selena-zhou', imgSrc: IconCal, title: 'Calendly' },
  { href: 'https://github.com/zhouselena', imgSrc: IconGithub, title: 'Github' },
  { href: 'mailto:selena.yj.zhou@gmail.com', imgSrc: IconEmail, title: 'Email' },
  { href: 'src/assets/resume_25x.pdf', imgSrc: IconPDF, title: 'Resume' },
  { href: 'https://instagram.com/seldigicams/', imgSrc: IconIG, title: 'Photography' },
];

function ContactPage() {
  const classes = ['blue', 'orange'];

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Let's chat!</h1>
        <p>
          I love to meet new people! Feel free to set up a coffee chat on my Calendly, or reach me
          through my other socials. I also have some creative accounts that I’ve linked below.
          Thanks for reaching out!
        </p>
      </div>

      <div className="contact-buttons">
        {contactButtons.map((btn, index) => (
          <a key={index} href={btn.href} target="_blank" rel="noopener noreferrer">
            <button className={classes[index % classes.length]}>
              <img src={btn.imgSrc} alt={btn.title} />
              {btn.title}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactPage;
