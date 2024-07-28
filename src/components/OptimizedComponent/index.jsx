import React, { useState, useEffect, useCallback } from "react";
import { config } from "../../config/appConfig";
import { client } from "../../utils/apiClient";
import useAsync from "../../hooks/useAsync";

const QueryList = ({ getRecordsLimit }) => {
  const { data: items, run, isLoading } = useAsync();

  useEffect(() => {
    run(client(config.URL, getRecordsLimit()));
  }, [getRecordsLimit, run]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        items.map((item) => <div key={item.id}>{item.title}</div>)
      )}
    </div>
  );
};

const OptimizedComponent = () => {
  const [recordsLimit, setRecordsLimit] = useState(10);
  const [counter, setCounter] = useState(0);

  const setRandomLimit = () => {
    setRecordsLimit(Math.floor(Math.random() * 100));
  };

  // Use useCallback to prevent unnecessary re-renders when the counter is clicked
  const getRecordsLimit = useCallback(() => {
    return recordsLimit;
  }, [recordsLimit]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={setRandomLimit}>Set Random Query Limit</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <h4>Counter: {counter}</h4>
      <QueryList getRecordsLimit={getRecordsLimit} />
    </div>
  );
};

export default OptimizedComponent;
