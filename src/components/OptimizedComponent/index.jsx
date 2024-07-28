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
  const [isOptimized, setIsOptimized] = useState([]);
  const [recordsLimit, setRecordsLimit] = useState(10);
  const [counter, setCounter] = useState(0);

  const toggleIsOptimized = () => {
    setIsOptimized(!isOptimized);
  };

  const setRandomLimit = () => {
    setRecordsLimit(Math.floor(Math.random() * 100));
  };

  const getRecordsLimit = () => {
    return recordsLimit;
  };
  // Use useCallback to prevent unnecessary re-renders when the counter is clicked
  const optimizedGetRecordsLimit = useCallback(() => {
    return recordsLimit;
  }, [recordsLimit]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            name="isOptimized"
            checked={isOptimized}
            onChange={toggleIsOptimized}
          />
          Is Component Optimized
        </label>
      </div>
      <button onClick={setRandomLimit}>Set Random Query Limit</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <h4>Counter: {counter}</h4>
      <QueryList
        getRecordsLimit={
          isOptimized ? optimizedGetRecordsLimit : getRecordsLimit
        }
      />
    </div>
  );
};

export default OptimizedComponent;
