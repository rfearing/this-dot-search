import css from 'BASE/scss/base.scss';

const currentYear = new Date().getFullYear();

/**
 * The Footer for the default Layout
 */
export default () => (
  <footer className={`bg-light ${css.pageFooter}`}>
    <div className="container py-2">
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <p className="m-0 text-dark">Thanks for taking a look at my project</p>
        <p className="m-0 text-dark">
          <span role="img" aria-label="Metal hand emoji">🤘</span>ing in {currentYear}&nbsp;|&nbsp;
          <a href="https://ricardofearing.com" rel="noopener noreferrer" target="_blank">
            ricardofearing.com
          </a>
        </p>
      </div>
    </div>
  </footer>
);
