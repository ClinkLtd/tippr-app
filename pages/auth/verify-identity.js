import React from 'react';
import styles from 'styles/pages/auth.module.scss';
import Buttons from 'components/forms/buttons';
import TipprInput from 'components/forms/tippr-input';

import { useRouter } from 'next/router';

import Bank from 'assets/images/bank.svg';
import Arrow from 'assets/images/arrow-right.svg';
import User from 'assets/images/user.svg';
import Calendar from 'assets/images/calendar.svg';
import Phone from 'assets/images/phone.svg';

export default function VerifyIdentity() {
  const router = useRouter();

  return (
    <div className={styles.auth}>
      <Bank />
      <h1 className='text_header mt-2.5'>Verify your Identity</h1>
      <p className='text_body'>Enter your 11-digit Bank Verification Number</p>

      <div className='mt-20'>
        <TipprInput label='Your BVN' name='bvn' placeholder='Enter BVN' />
      </div>

      <div className='mt-10'>
        <p className='text_dark text_body'>Why we need your BVN</p>
        <p className='text_body'>
          We only require your BVN once to confirm your identity, here's what we
          have access to
        </p>

        <ul className='mt-4'>
          <li className={`${styles.list} text_body text_dark`}>
            <User />
            <span> Your full, legal name</span>
          </li>
          <li className={`${styles.list} text_body text_dark`}>
            <Calendar />
            <span> BVN-linked phone number</span>
          </li>
          <li className={`${styles.list} text_body text_dark`}>
            <Phone />
            <span> Your Date of Birth</span>
          </li>
        </ul>
      </div>

      <div className={styles.footer}>
        <Buttons
          handleClick={() => router.push('/auth/verify-account')}
          state='primary'
          text='Continue'
          Icon={Arrow}
        />
      </div>
    </div>
  );
}
