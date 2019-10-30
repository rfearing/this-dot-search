import React, { useState } from 'react';
import css from 'BASE/scss/base.scss';
import { generateQueryString } from 'BASE/utils';
import { searchGitHub } from 'ACTIONS';
import {
  Header,
  Footer,
  AdvancedSearch,
  ResultsList,
  Pagination,
} from 'COMPONENTS';

const LIMIT = 10;

/**
 * This is the Single Page of the App
 */
const Home = () => {
  const [params, setParams] = useState({});
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (ev, pageNum = currentPage) => {
    try {
      const query = generateQueryString(params);
      const gitHubResults = await searchGitHub(`${query}&per_page=${LIMIT}&page=${pageNum}`);

      setTotalCount(gitHubResults.total_count);
      setResults(gitHubResults.items);
      setHasSearched(true);
      setError(false);
    } catch (e) {
      setError(e);
    }
  };

  /**
   * Set the query to be passed to GitHub
   * @param {event} ev
   */
  const handlePagination = (ev, pageNum) => {
    setCurrentPage(pageNum);
    handleSearch(ev, pageNum);
  };

  /**
   * Set the query to be passed to GitHub
   * @param {event} ev
   */
  const handleQuery = (ev) => {
    ev.preventDefault();
    const { value, id } = ev.target;
    const isEnterKey = ev.key === 'Enter';
    setParams({ ...params, [id]: value });

    if (isEnterKey) {
      handleSearch();
    }
  };

  const numPages = Math.ceil(totalCount / LIMIT);

  return (
    <>
      <Header
        query={params.q || ''}
        handleQuery={handleQuery}
        handleSearch={handleSearch}
      />

      {/* Body */}
      <div className={`container mt-4 ${css.pageBody}`}>
        <AdvancedSearch
          params={params}
          handleQuery={handleQuery}
          handleSearch={handleSearch}
        />

        <div className="my-4">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error.message}
            </div>
          )}

          <ResultsList
            hasSearched={hasSearched}
            results={results}
            count={totalCount}
            numPages={numPages}
            page={currentPage}
          />
        </div>
        <Pagination
          handlePagination={handlePagination}
          numPages={numPages}
          currentPage={currentPage}
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;
