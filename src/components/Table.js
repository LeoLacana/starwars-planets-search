import React, { useContext, useEffect } from 'react';
import contextPlanets from '../context/ContextPlanets';

export default function Table() {
  const { planets,
    filters,
    filteredPlanets,
    setFilteredPlanets,
  } = useContext(contextPlanets);

  useEffect(() => {
    const showPlanets = () => {
      const planetFilteredName = planets
        .filter((planet) => planet.name.includes(filters.filterByName.name));
      if (filters.filterByNumericValues.length === 0) {
        setFilteredPlanets(planetFilteredName);
      } else {
        const { filterByNumericValues } = filters;
        const { column, comparison, value } = filterByNumericValues[0];
        const planetFilterNumber = planetFilteredName.filter((planet) => {
          if (comparison === 'maior que') {
            return Number(planet[`${column}`]) > Number(value);
          }
          if (comparison === 'igual a') {
            return Number(planet[`${column}`]) === Number(value);
          }
          return Number(planet[`${column}`]) < Number(value);
        });
        setFilteredPlanets(planetFilterNumber);
      }
    };
    showPlanets();
  }, [planets,
    filters,
    filters.filterByName.name,
    setFilteredPlanets,
    filters.filterByNumericValues,
  ]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
