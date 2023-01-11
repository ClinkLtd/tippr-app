import React from 'react';
import styles from 'styles/pages/auth.module.scss';
import Buttons from 'components/forms/buttons';

import Arrow from 'assets/images/arrow-right.svg';
import SuccessIcon from 'assets/images/verification-success.svg';

import { useRouter } from 'next/router';

export default function VerificationSuccess() {
  const router = useRouter();
  return (
    <div className={styles.auth}>
      <div className={styles.verify_success_wrapper}>
        <SuccessIcon />
        <h1 className='text_header mt-2'>Verification Successful</h1>
        <p className='text_body mt-1'>
          Your account and identity have been verified, you can now create a
          Tippr page
        </p>
      </div>

      <div className={styles.footer}>
        <Buttons
          handleClick={() => {
            router.push('/auth/link-bank-account');
          }}
          state='primary'
          text='Create a Tippr Page'
          Icon={Arrow}
        />
      </div>
    </div>
  );
}
