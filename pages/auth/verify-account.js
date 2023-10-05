import React from 'react';
import styles from 'styles/pages/auth.module.scss';
import Buttons from 'components/forms/buttons';
import { HStack, PinInput, PinInputField } from '@chakra-ui/react';

import { useRouter } from 'next/router';

import Passcode from 'assets/images/passcode.svg';
import Arrow from 'assets/images/arrow-right.svg';
import Counter from 'components/ui/counter';

export default function VerifyAccount() {
  const router = useRouter();
  const timer = 3;
  return (
    <div className={styles.auth}>
      <Passcode />
      <h1 className='text_header mt-2.5'>Verify account ownership</h1>
      <p className='text_body'>
        Enter the 6-digit code sent to your BVN linked phone number
        080********123
      </p>

      <div className='flex flex-col items-center w-full mt-20'>
        <span className='mb-2 text_xs text_dark'>Enter code</span>
        <HStack className=' mb-3 '>
          <PinInput mask placeholder='0' otp>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Counter timer={timer} />
      </div>

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
