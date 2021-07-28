const getPlanetsAPI = async () => {
  const requestAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const results = await requestAPI.json();
  return results;
};

export default getPlanetsAPI;
