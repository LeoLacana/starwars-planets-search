import React, { useContext } from 'react';
import contextPlanets from '../context/ContextPlanets';

export default function FilterPlanets() {
  const { filters, setFilters } = useContext(contextPlanets);

  const handleFilterPlanets = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  const handleNumericValues = () => {
    const columnFilter = document.getElementById('column-filter').value;
    const comparisonFilter = document.getElementById('comparison-filter').value;
    const valueFilter = document.getElementById('value-filter').value;
    setFilters({ ...filters,
      filterByNumericValues: [
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    });
  };

  return (
    <div>
      Planets
      <input data-testid="name-filter" type="text" onChange={ handleFilterPlanets } />
      <select data-testid="column-filter" id="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter" id="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input type="number" data-testid="value-filter" id="value-filter" />
      <button data-testid="button-filter" type="submit" onClick={ handleNumericValues }>Filtrar</button>
    </div>
  );
}
