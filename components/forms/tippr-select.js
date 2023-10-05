import React, { Fragment } from 'react';
import Select from 'react-select';

const TipprSelect = props => {
  const {
    label,
    options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
  } = props;

  return (
    <Fragment>
      {label && <label className='text_xs text_dark'>{label}</label>}
      <Select
        components={{ IndicatorSeparator: () => null }}
        isFocused={true}
        className='tippr-select-container'
        classNamePrefix='tippr-select'
        options={options}
      />
    </Fragment>
  );
};

export default TipprSelect;
