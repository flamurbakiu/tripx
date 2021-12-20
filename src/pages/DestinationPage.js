import React, { Fragment, useEffect, useState } from 'react';
import DestinationsList from '../components/Destinations/DestinationsList';
import LoadingSpinner from '../components/UI/LoadingSpinner';

function DestinationPage() {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://book.tripx.se/wp-json/tripx/v1/destinations'
    );
    const data = await response.json();

    setDestinations(data);
    setIsLoading(false);
  };

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <DestinationsList destinations={destinations} />}
    </Fragment>
  );
}

export default DestinationPage;
