import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {


    const [ counter, setCounter ] = useState( value );

    // handleSum
    const handleSum = () => {
        setCounter( counter + 1 );
    }

    // handleRes
    const handleRes = () => {
        setCounter( counter - 1 );
    }

    // handleReset
    const handleReset = () => {
        setCounter( value );
    }



    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleSum }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleRes }>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: 1,
};

export default CounterApp;
