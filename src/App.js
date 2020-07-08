import React, { useState } from 'react';
// import Layout from './Components/Layout';

function App() {
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);
  const [action, setAction] = useState(undefined);

  const appendDigit = (digit) => {
    const newValue = `${value}${digit}`;
    setValue(parseFloat(newValue));
  };

  const appendDot = (dot) => {
    if (value % 1 === 0) {
      const newTotal = `${value}${dot}`;
      setValue(newTotal);
      console.log(newTotal);
    }
  };

  const changeAction = (newAction) => {
    if (!action) {
      // if action wasn't set beforehand
      setTotal(total + value);
      setValue(0);
    }

    setAction(newAction);
  };

  const calculateTotal = () => {
    if (action === '+') setTotal(total + value);
    else if (action === '-') setTotal(total - value);
    else if (action === '*') setTotal(total * value);
    else if (action === '/') setTotal(total / value);
    else if (action === '%') setTotal(total / 100);
    else if (action === '+/-') setTotal(total * -1);

    setValue(0);
  };

  return (
    <div className="App">
      <div className="calc-body">
        <div className="calc-screen">
          <div className="calc-typed">
            {total === 0 ? '' : total} {action} {value === 0 ? '' : value}
            <span className="blink-me">_</span>
          </div>
        </div>
        <div className="calc-button-row">
          <div
            name="C"
            className="button c"
            onClick={() => {
              setTotal(0);
              setValue(0);
              setAction(undefined);
            }}
          >
            C
          </div>
          <div
            name="+/-"
            className="button l"
            onClick={() => {
              setTotal((total + value) * -1);
              setValue(0);
            }}
          >
            +/-
          </div>
          <div
            name="%"
            className="button l"
            onClick={() => {
              setTotal((total + value) / 100);
              setValue(0);
            }}
          >
            %
          </div>
          <div name="/" className="button l" onClick={() => changeAction('/')}>
            /
          </div>
        </div>
        <div className="calc-button-row">
          <div name="7" className="button" onClick={() => appendDigit(7)}>
            7
          </div>
          <div name="8" className="button" onClick={() => appendDigit(8)}>
            8
          </div>
          <div name="9" className="button" onClick={() => appendDigit(9)}>
            9
          </div>
          <div name="*" className="button l" onClick={() => changeAction('*')}>
            *
          </div>
        </div>
        <div className="calc-button-row">
          <div name="4" className="button" onClick={() => appendDigit(4)}>
            4
          </div>
          <div name="5" className="button" onClick={() => appendDigit(5)}>
            5
          </div>
          <div name="6" className="button" onClick={() => appendDigit(6)}>
            6
          </div>
          <div name="-" className="button l" onClick={() => changeAction('-')}>
            −
          </div>
        </div>
        <div className="calc-button-row">
          <div name="1" className="button" onClick={() => appendDigit(1)}>
            1
          </div>
          <div name="2" className="button" onClick={() => appendDigit(2)}>
            2
          </div>
          <div name="3" className="button" onClick={() => appendDigit(3)}>
            3
          </div>
          <div name="+" className="button l" onClick={() => changeAction('+')}>
            +
          </div>
        </div>
        <div className="calc-button-row">
          <div name="0" className="button O" onClick={() => appendDigit(0)}>
            0
          </div>
          <div
            name="."
            className="button"
            onClick={
              () => appendDot('.')
              //setTotal(parseFloat(total.toString.concat('.')))
              // total % 1 === 0 ? setTotal(parseFloat(total.toFixed(0))) : 'null'
            }
          >
            .
          </div>
          <div name="=" className="button l" onClick={() => calculateTotal()}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
