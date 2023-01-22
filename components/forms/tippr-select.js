import React, { Fragment } from 'react';
import Arrow from 'assets/images/arrow-right.svg';
import Select, { components } from 'react-select';

const TipprSelect = props => {
  const { label } = props;

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <Arrow />
      </components.DropdownIndicator>
    );
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Fragment>
      <Select
        components={{ IndicatorSeparator: () => null, DropdownIndicator }}
        isFocused={true}
        className='tippr-select-container'
        classNamePrefix='tippr-select'
        options={options}
      />
    </Fragment>
  );
};

export default TipprSelect;
