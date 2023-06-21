import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GreetingF = (props) => {
  // Breve introduccion de useStates
  const [age, setAge] = useState(29);

  const brithday = () => {
    // actualizamos el State
    setAge(age + 1);
  };

  return (
    <div>
      <h1>!HOLA {props.name} desde componente funcional!</h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={brithday}>Cumplir años</button>
      </div>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
