import React from 'react';

export const Slider = ({max, step, value, onChange}) => {
  const onRangeChange = (e) => {
    onChange(Number(e.target.value));
  };
  const onMouseUp = () => {
    console.log('calculate contracts here');
  };

  return (
    <div>
      <input type="range" onMouseUp={onMouseUp} onChange={onRangeChange} value={value} min={0} step={step} max={max} />
    </div>
  );
};

Slider.displayName = 'Slider';
