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

export function UpdateSettlementDrawer(props) {
  const { isOpen = true, onOpen, onClose } = props;

  return (
    <Fragment>
      <Drawer placement='bottom' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <span className='text_body block w-full text-center mb-10'>
              Update settlement account
            </span>

            <div className={classNames(styles.crypto_warning, 'mb-5')}>
              You can only have one settlement account at a time, the account
              name on your settlement account must match the account name on the
              bank account we verified you with
            </div>

            <TipprInput
              label='Account number'
              name='bvn'
              placeholder='0142468037'
            />

            {/* TODO: Add dropdown */}

            <TipprInput
              isDisabled={true}
              label='Account name'
              name='bvn'
              placeholder='Peter Oghenakhogie Abu-Ekpeshie'
            />

            <div className='mt-20'>
              <Buttons
                handleClick={() => router.push('/auth/tippr')}
                state='primary'
                text='Update'
              />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
