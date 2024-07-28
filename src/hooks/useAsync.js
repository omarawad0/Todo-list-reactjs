import * as React from "react";

const defaultInitialState = { status: "idle", data: [], error: null };

function useAsync(initialState) {
  const [{ status, data, error }, setState] = React.useReducer(
    (s, a) => ({ ...s, ...a }),
    { ...defaultInitialState, ...initialState }
  );

  const setData = (data) => setState({ data, status: "resolved" });
  const setError = (error) => setState({ error, status: "rejected" });

  const run = (promise) => {
    if (!promise || !promise.then) {
      throw new Error(
        `The argument passed to useAsync().run must be a promise. You passed: ${promise}`
      );
    }
    setState({ status: "pending" });
    return promise.then(
      (data) => {
        setData(data);
        return data;
      },
      (error) => {
        setError(error);
        return Promise.reject(error);
      }
    );
  };

  return {
    // using the same names that react-query uses for convenience
    isIdle: status === "idle",
    isLoading: status === "pending",
    isError: status === "rejected",
    isSuccess: status === "resolved",
    error,
    status,
    data,
    run,
  };
}

export default useAsync;
