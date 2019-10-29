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
  page,
}) => {
  if (!results || results.length === 0) {
    return <h4>No Results</h4>;
  }

  const usersFound = results.map((user) => <Result key={user.id} user={user} />);

  return (
    <div className="row">
      <div className="col-md-3">
        <h3>Results:</h3>
        <h4>Total Count: {count}</h4>
        <h4>On Page {page} of {numPages}</h4>
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
