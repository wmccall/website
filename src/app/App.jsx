import React from 'react';
import { PropTypes } from 'prop-types';

import Home from './views/Home';
import TagPage from './views/TagPage';
import BasePage from './views/BasePage';

const PAGES = {
  home: Home,
  tag: TagPage,
};

const renderPage = pageName => {
  const Page = PAGES[pageName];
  return <Page />;
};

const App = props => {
  const { page } = props;
  return (
    <div className="app">
      <BasePage>{renderPage(page)}</BasePage>
    </div>
  );
};

App.propTypes = {
  page: PropTypes.string.isRequired,
};

export default App;
