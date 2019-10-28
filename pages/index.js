import React from 'react';
import Header from 'COMPONENTS/header';
import Footer from 'COMPONENTS/footer';
import AdvancedSearch from 'COMPONENTS/advancedSearch';
import ResultsList from 'COMPONENTS/resultsList';
import css from 'BASE/scss/base.scss';

const Home = () => (
  <>
    <Header />
    <div className={`container mt-4 ${css.pageBody}`}>
      <AdvancedSearch />
      <div className="my-4">
        <ResultsList />
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
