import React from 'react';
import styles from 'styles/pages/auth.module.scss';
import Buttons from 'components/forms/buttons';

import { useRouter } from 'next/router';

import Passcode from 'assets/images/passcode.svg';
import Arrow from 'assets/images/arrow-right.svg';

export default function VerifyAccount() {
  const router = useRouter();
  return (
    <div className={styles.auth}>
      <Passcode />
      <h1 className='text_header mt-2.5'>Verify account ownership</h1>
      <p className='text_body'>
        Enter the 6-digit code sent to your BVN linked phone number
        080********123
      </p>

      <div className={styles.footer}>
        <Buttons
          handleClick={() => router.push('/auth/verification-sucess')}
          state='primary'
          text='Verify'
          Icon={Arrow}
        />
        <Buttons state='secondary' text='Go Back' />
      </div>
    </div>
  );
}
