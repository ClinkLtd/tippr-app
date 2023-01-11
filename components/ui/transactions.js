import React from 'react';
import Link from 'next/link';
import styles from './transactions.module.scss';

import RightArrow from 'assets/images/play-arrow.svg';

const Transactions = props => {
  const {
    amount = '₦1,500.00',
    date = 'Today, [time]',
    link = '',
    name = 'Zion Ibitoye',
  } = props;
  if (link) {
    return (
      <Link href={link} className={styles.wrapper}>
        <div className='flex flex-col'>
          <span>{amount}</span>
          <span className='text_xs'>{date}</span>
        </div>
        <RightArrow />
      </Link>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className='flex flex-col'>
        <span>{name}</span>
        <span className='text_xs'>{date}</span>
      </div>
      <span className='text_body_bold text_dark'>{amount}</span>
    </div>
  );
};

export default Transactions;
