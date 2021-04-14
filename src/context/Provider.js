import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children}) => {
  const [cars, setCar] = useState({
    red: false,
    blue: false,
    yellow:false,
  })
  const [color, setSignal] = useState('red');

  const moveCar = (car, side) => {
    setCar({
      ...cars,
      [car]: side,
    })
  };

  const changeSignal = (signalColor) => {
    setSignal(signalColor);
  };

    const context = {
      cars,
      color,
      moveCar,
      changeSignal
    };

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
