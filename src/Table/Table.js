import React from 'react';
import s from './Table.module.scss';

export const Table = ({data, onSelect}) => {
  const onCheckBoxClick = (contract, isSelected) => {
    onSelect(contract, isSelected);
  };

  return (
    <div>
      <h1>Table</h1>
      {data.map((invoice) => {
        return (
          <div className={s.row}>
            <input
              type="checkbox"
              onClick={(e) => {
                onCheckBoxClick(invoice, e.target.checked);
              }}
            />
            {Object.entries(invoice).map(([columnName, value]) => (
              <div className={s.cell}>{value}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

Table.displayName = 'Table';
