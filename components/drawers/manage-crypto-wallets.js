import React, { Fragment } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from '@chakra-ui/react';
import styles from './drawers.module.scss';
import classNames from 'classnames';
import TipprInput from 'components/forms/tippr-input';
import Buttons from 'components/forms/buttons';

export function ManageCryptoWalletDrawer(props) {
  const { isOpen = true, onOpen, onClose } = props;

  return (
    <Fragment>
      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <span className='text_body block w-full text-center mb-10'>
              Manage Crypto Wallet Address
            </span>

            <div className={classNames(styles.crypto_warning, 'mb-5')}>
              We currently don’t check if the address you add is valid, we also
              cannot track or record transactions made through a crypto wallet,
              we only provide this option to let tippers know you can receive
              tips through crypto
            </div>

            <TipprInput
              label='Network name'
              name='bvn'
              placeholder='e.g BEP20, ERC20, TRC20'
            />
            <TipprInput
              label='Token name'
              name='bvn'
              placeholder='e.g ETH, BTC, USDT, USDC'
            />
            <TipprInput
              label='Wallet address'
              name='bvn'
              placeholder='enter wallet address'
            />

            <div className='mt-8'>
              <Buttons
                handleClick={() => router.push('/auth/tippr')}
                state='primary'
                text='Update'
              />

              <Buttons
                style='mt-2'
                handleClick={() => router.push('/auth/tippr')}
                state='secondary'
                text='Delete'
              />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
