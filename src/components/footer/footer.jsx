import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Developer:{' '}
        <a href="https://github.com/stolbovvv" target="_blank" rel="noopener noreferrer">
          stolbovvv
        </a>
      </p>
      <p className="footer__text">React | Redux | 2023</p>
    </footer>
  );
}

export { Footer };
