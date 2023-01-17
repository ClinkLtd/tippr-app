import React from 'react';
import styles from 'styles/pages/auth.module.scss';
import Buttons from 'components/forms/buttons';
import { useRouter } from 'next/router';

import Bank from 'assets/images/bank.svg';
import Arrow from 'assets/images/arrow-right.svg';
import TipprInput from 'components/forms/tippr-input';

export default function LinkBankAccount() {
  const router = useRouter();

  return (
    <div className={styles.auth}>
      <Bank />
      <h1 className='text_header mt-2.5'>Link a Bank Account</h1>
      <p className='text_body mt-1'>
        You need to link a bank account to verify your identity and enable you
        receive payments on Tippr
      </p>

      <div>
        <TipprInput />
        <TipprInput />
      </div>

      <div className={styles.footer}>
        <Buttons
          handleClick={() => router.push('/auth/tippr')}
          state='primary'
          text='Continue'
          Icon={Arrow}
        />
      </div>
    </div>
  );
}
