import React, { useEffect, useState } from 'react';
import DestinationsList from '../components/Destinations/DestinationsList';

function DestinationPage() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(
      'https://book.tripx.se/wp-json/tripx/v1/destinations'
    );

    const data = await response.json();

    setDestinations(data);
  };

  return <DestinationsList destinations={destinations} />;
}

export default DestinationPage;
