import React from 'react';

const loader = () => (
  <div className="siteLoading" id="siteLoading">
    <div className="siteLoading-frame">
      <img
        className="siteLoading-image"
        src={process.env.PUBLIC_URL + '/images/loader.gif'}
        alt="loader"
      />
    </div>
  </div>
);

export default loader;
