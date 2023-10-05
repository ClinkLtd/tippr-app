import React, { Fragment } from 'react';
import styles from 'styles/pages/auth.module.scss';
import Buttons from 'components/forms/buttons';
import { useRouter } from 'next/router';

import Bank from 'assets/images/bank.svg';
import Arrow from 'assets/images/arrow-right.svg';
import TipprInput from 'components/forms/tippr-input';
import TipprSelect from 'components/forms/tippr-select';

export default function LinkBankAccount() {
  const router = useRouter();

  const bankOptions = [
    { label: 'Gtbank', value: 'guarantee' },
    { label: 'First bank', value: 'first_bank' },
  ];
  return (
    <Fragment>
      <div className={styles.auth}>
        <Bank />
        <h1 className='text_header mt-2.5'>Link a Bank Account</h1>
        <p className='text_body mt-1'>
          You need to link a bank account to verify your identity and enable you
          receive payments on Tippr
        </p>

        <div className='mt-20'>
          <TipprInput
            type='number'
            label='Account number'
            placeholder='0142468037'
          />
          <TipprSelect options={bankOptions} label='Bank' />
        </div>

        <div className={styles.footer}>
          <Buttons
            handleClick={() => router.push('/tippr')}
            state='primary'
            text='Continue'
            Icon={Arrow}
          />
        </div>
      </div>
    </Fragment>
  );
}
