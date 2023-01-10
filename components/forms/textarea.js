import React from 'react';
import styles from './textarea.module.scss';

const TipprTextArea = props => {
  const { handleChange, placeholder, label } = props;
  return (
    <div className={styles.wrapper}>
      <label htmlFor=''>{label}</label>
      <textarea
        className='primary_line_break'
        onChange={handleChange}
        placeholder={placeholder}
        name=''
        id=''></textarea>
    </div>
  );
};

export default TipprTextArea;
