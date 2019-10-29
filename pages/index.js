import React, { useState } from 'react';
import css from 'BASE/scss/base.scss';
import { searchGitHub } from 'ACTIONS';
import {
  Header,
  Footer,
  AdvancedSearch,
  ResultsList,
} from 'COMPONENTS';

/**
 * This is the Single Page of the App
 */
const Home = () => {
  const [params, setParams] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    try {
      const query = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
      const gitHubResults = await searchGitHub(query);
      setResults(gitHubResults.items);
    } catch (e) {
      setError(e);
    }
  };

  /**
   * Set the query to be passed to GitHub
   * @param {event} ev
   */
  const handleQuery = (ev) => {
    ev.preventDefault();
    const { value, id } = ev.target;
    const isEnterKey = ev.key === 'Enter';
    setParams({ [id]: value });

    if (isEnterKey) {
      handleSearch();
    }
  };

  return (
    <>
      <Header
        query={params.q || ''}
        handleQuery={handleQuery}
        handleSearch={handleSearch}
      />

      {/* Body */}
      <div className={`container mt-4 ${css.pageBody}`}>
        <AdvancedSearch params={params} setQuery={setParams} />

        <div className="my-4">
          {error && (
            <div className="alert alert-danger" role="alert">
              <pre>
                {JSON.stringify(error)}
              </pre>
            </div>
          )}

          <ResultsList results={results} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
