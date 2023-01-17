import React from 'react';

import Transactions from 'components/ui/transactions';

import { useRouter } from 'next/router';

import Close from 'assets/images/close-dark.svg';
import Badge from 'components/ui/badge';

const PayoutHistory = props => {
  const router = useRouter();

  return (
    <div className='main-container'>
      <div className='flex justify-between items-center mb-5'>
        <span className='text_body'>Payout History</span>
        <button onClick={() => router.back()}>
          <Close />
        </button>
      </div>

      <div className='flex flex-col items-center'>
        <span className='text_body'>Paid out so far</span>
        <span className='text_dark text_xl'>₦150,192.18</span>
        <Badge handleClick={() => {}} text='This Week' />
      </div>

      <div className='mt-20'>
        <span className='text_body mb-2.5'>Tip history</span>
        <Transactions link='/payout-details' />
        <Transactions link='/payout-details' />
        <Transactions link='/payout-details' />
        <Transactions link='/payout-details' />
        <Transactions link='/payout-details' />
        <Transactions link='/payout-details' />
      </div>
    </div>
  );
};

export default PayoutHistory;
