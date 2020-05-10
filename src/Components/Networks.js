import React from 'react';

const networks = (props)=> props.social.map((network) => (
  <li key={network.name}>
    <a href={network.url} target="_blank" rel="noopener noreferrer">
      <i className={network.className}/>
    </a>
  </li>
));
export default networks;
