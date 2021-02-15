// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [
    cars = {},
    updateCars
  ] = useState({ red: false, blue: false, yellow: false });

  const moveCar = (car, side) => {
    updateCars((currentState) => ({...currentState, [car]: side}));
  };

  const context = {
    cars,
    moveCar,
  }

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
