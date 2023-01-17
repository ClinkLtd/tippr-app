import React from 'react';

import Buttons from 'components/forms/buttons';
import Transactions from 'components/ui/transactions';

import { useRouter } from 'next/router';

import Share from 'assets/images/share-white.svg';
import Twitter from 'assets/images/twitter-dark.svg';
import Whatsapp from 'assets/images/whatsapp-dark.svg';
import Coins from 'assets/images/coins-stacked.svg';
import Edit from 'assets/images/edit-dark.svg';

export default function LinkBankAccount() {
  const router = useRouter();

  return (
    <div className={'main-container'}>
      <div className='flex justify-between items-center mb-5'>
        <div className='flex flex-col'>
          <span className='text_body'>Your unpaid balance</span>
          <span className='text_xl'>₦45,192.18</span>
        </div>
        <div className='flex flex-col items-end'>
          <span className='text_body'>Share Tippr</span>
          <div className='flex'>
            <button className='mr-2.5'>
              <Twitter />
            </button>
            <button>
              <Whatsapp />
            </button>
          </div>
        </div>
      </div>

      <div className='mb-20'>
        <Buttons
          handleClick={() => router.push('/payout-history')}
          style='mb-2.5'
          square={true}
          state='auth'
          text='Payout history'
          Icon={Coins}
        />
        <Buttons
          handleClick={() => router.push('/tippr')}
          square={true}
          state='auth'
          text='Manage your Tippr page'
          Icon={Edit}
        />
      </div>

      <Buttons state='primary' text='Share your Tippr Link' Icon={Share} />

      <div className='mt-5'>
        <span className='text_body mb-2.5'>Tip history</span>
        <Transactions />
        <Transactions />
        <Transactions />
        <Transactions />
        <Transactions />
        <Transactions />
      </div>
    </div>
  );
}
