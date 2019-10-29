import cx from 'classnames';
import PropTypes from 'prop-types';

const Pagination = ({
  handlePagination,
  currentPage,
  numPages,
}) => {
  const canNext = (currentPage < numPages);
  const canPrev = (currentPage > 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className={cx('page-item', { disabled: !canPrev })}>
          <button
            type="button"
            className="page-link"
            onClick={(ev) => canPrev && handlePagination(ev, currentPage - 1)}
          >
            Previous
          </button>
        </li>
        <li className={cx('page-item', { disabled: !canNext })}>
          <button
            type="button"
            className="page-link"
            onClick={(ev) => canNext && handlePagination(ev, currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  handlePagination: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default Pagination;
