function client(URL, limit = 10, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return fetch(URL, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data.slice(0, limit);
    } else {
      return Promise.reject(data);
    }
  });
}

export { client };
