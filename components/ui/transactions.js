import React from 'react';
import styles from './transactions.module.scss';

const Transactions = props => {
  const { amount, date } = props;
  return (
    <div className={styles.wrapper}>
      <div className='flex flex-col'>
        <span>Zion Ibitoye</span>
        <span className='text_xs'>Today, [time]</span>
      </div>
      <span className='text_body_bold text_body_dark'>₦1,500.00</span>
    </div>
  );
};

export default Transactions;
