import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './header.scss';

/**
 * The Header for the default Layout
 */
const Header = ({
  query,
  handleQuery,
  handleSearch,
}) => (
  <header className={`bg-light ${css.pageHeader}`}>
    <div className="container pt-4 pb-3">
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <h1 className={`m-0 text-dark ${css.headerTitle}`}>
          <FaGithub /> GitHub User Search
        </h1>

        <div className="form-group d-flex flex-grow-1">
          <input
            type="text"
            className="form-control"
            id="q"
            alt="Text for search query"
            placeholder="Search Users: e.g. 'thisdot'"
            onChange={handleQuery}
            value={query}
          />

          <div className="input-group-prepend">
            <button
              type="button"
              className="btn btn-outline-secondary ml-2"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  query: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Header;
