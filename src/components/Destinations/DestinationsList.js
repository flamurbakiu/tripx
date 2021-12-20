import React from 'react';
import DestinationItem from './DestinationItem';

import classes from './DestinationsList.module.css';

function DestinationsList(props) {
  return (
    <div className={classes.destinations}>
      {props.destinations.map((destination) => (
        <DestinationItem
          key={destination.name}
          thumbnail={destination.thumbnail}
          name={destination.name}
        />
      ))}
    </div>
  );
}

export default DestinationsList;
