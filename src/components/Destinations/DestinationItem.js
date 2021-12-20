import React from 'react';

import classes from './DestinationItem.module.css';

function DestinationItem(props) {
  return (
    <div className={classes.destination}>
      <img src={props.thumbnail} alt={props.name} />
      <h2>{props.name}</h2>
    </div>
  );
}

export default DestinationItem;
