import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState();
  const [error, setError] = useEffect("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        const product = response.data;
        console.log(product); // Log the fetched data to the console
        setData(product); // Update the state with the fetched data
      })
      .catch((error) => {
        // console.error('Error fetching data:', error);
        setError(error);
      });
  };

  return (
    <div>
      {error ? error : ''}
      <h1>Fetching Data:</h1>
      <ul>

        {data ? data.products.map((item, index) => (
          <pre key={index}>{item.title}</pre>
        )) : 'No data found'}  
      </ul>
    </div>
  );
};

export default DataFetcher;
