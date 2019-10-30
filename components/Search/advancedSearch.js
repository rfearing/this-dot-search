import PropTypes from 'prop-types';
import { generateReadableQueryString } from 'BASE/utils';
import Accordion from '../Accordion/accordion';
import Languages from './languages';

const AdvancedSearch = ({
  params,
  handleQuery,
  handleSearch,
}) => {
  const queryString = generateReadableQueryString(params);
  return (
    <Accordion id="user-advanced-search">
      <div label="Advanced Search">
        <div className="form-group row">
          <label htmlFor="full-query" className="col-md-4 col-form-label">
            <b>Your Full Search Query:</b>
          </label>
          <div className="col-md-8">
            <input
              readOnly
              disabled
              type="text"
              className="form-control"
              id="full-query"
              placeholder={queryString}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="fullname" className="col-md-4 col-form-label">
            With this full name
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Ricardo Fearing"
              onChange={handleQuery}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="location" className="col-md-4 col-form-label">
            Location
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Harrisonburg, VA"
              onChange={handleQuery}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="followers" className="col-md-4 col-form-label">
            With this many followers
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="followers"
              placeholder="20..50, >200, <2"
              onChange={handleQuery}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="repos" className="col-md-4 col-form-label">
            With this many public repositories
          </label>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              id="repos"
              placeholder="0, <42, >5"
              onChange={handleQuery}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="language" className="col-md-4 col-form-label">
            Working in this language
          </label>
          <div className="col-md-8">
            <select
              id="language"
              className="custom-select"
              onChange={handleQuery}
            >
              <Languages />
            </select>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-outline-secondary float-right"
          onClick={(ev) => handleSearch(ev, 1)}
        >
          Search
        </button>
      </div>
    </Accordion>
  );
};

AdvancedSearch.propTypes = {
  params: PropTypes.shape({}),
  handleQuery: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

AdvancedSearch.defaultProps = {
  params: {},
};

export default AdvancedSearch;
