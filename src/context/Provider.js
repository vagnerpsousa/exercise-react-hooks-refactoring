import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {
  const [cars, setState] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => {
    setState({
      ...cars,
      [car]: side,
    });
  }

    return (
      <CarsContext.Provider value={{ cars, moveCar }}>
        {children}
      </CarsContext.Provider>
    );

};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
