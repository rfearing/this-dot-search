import PropTypes from 'prop-types';
import Result from './result';
import css from './results.scss';

/**
 * Map over an array of users. If no users are found, return text.
 */
const ResultsList = ({
  results,
  count,
  numPages,
  hasSearched,
  page,
}) => {
  // Don't show anything if we haven't searched yet.
  if (!hasSearched) { return null; }

  // If we searched and don't have results:
  if (!results || results.length === 0) {
    return <h4>No Results</h4>;
  }

  const usersFound = results.map((user) => <Result key={user.id} user={user} />);

  return (
    <div className="row">
      <div className="col-md-3">
        <h3>Results:</h3>
        <h4>Total Count: <span className="badge badge-light">{count}</span></h4>
        <h4>
          On Page&nbsp;
          <span className="badge badge-light">{page}</span> of <span className="badge badge-light">{numPages}</span>
        </h4>
      </div>

      <div className="col-md">
        <ul className={css.resultsList}>
          {usersFound}
        </ul>
      </div>
    </div>

  );
};

ResultsList.propTypes = {
  hasSearched: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.object),
  count: PropTypes.number,
  numPages: PropTypes.number,
  page: PropTypes.number,
};

ResultsList.defaultProps = {
  results: [],
  count: 0,
  numPages: 0,
  page: 0,
};

export default ResultsList;
