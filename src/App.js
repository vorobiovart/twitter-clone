import React, {useState} from 'react';
import {Table} from './Table';
import {Slider} from './Slider';
import {data} from './dataMock';

function App() {
  const [totalMrr, setTotalMrr] = useState(0);
  const [selectedContracts, setSelectedContracts] = useState([]);

  const onSelectContract = (contract, isSelected) => {
    setSelectedContracts((prevContracts) =>
      isSelected
        ? [...prevContracts, contract]
        : prevContracts.filter(({invoiceID}) => invoiceID !== contract.invoiceID),
    );
    setTotalMrr((prevSum) => {
      return isSelected ? prevSum + contract.mrr : prevSum - contract.mrr;
    });
  };

  const getSliderConfig = () => {
    let maxSliderValue = 0;
    let minMrr = undefined;
    data.forEach(({mrr}) => {
      maxSliderValue += mrr;
      if (minMrr === undefined || minMrr > mrr) {
        minMrr = mrr;
      }
    });
    return {
      maxSliderValue,
      minMrr,
    };
  };

  const {maxSliderValue, minMrr} = getSliderConfig();

  return (
    <div>
      <h2>{totalMrr}</h2>
      <Slider max={maxSliderValue} onChange={setTotalMrr} value={totalMrr} step={minMrr} />
      <Table data={data} onSelect={onSelectContract} />
    </div>
  );
}

export default App;
