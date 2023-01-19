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

export function AddPersonalLinkDrawer(props) {
  const { isOpen = true, onOpen, onClose } = props;

  return (
    <Fragment>
      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <span className='text_body block w-full text-center mb-10'>
              Add a Personal Link
            </span>

            <TipprInput
              label='Link name'
              name='bvn'
              placeholder='e.g BEP20, ERC20, TRC20'
            />
            <TipprInput
              label='Link URL'
              name='bvn'
              placeholder='e.g ETH, BTC, USDT, USDC'
            />

            <div className='mt-10'>
              <Buttons
                handleClick={() => router.push('/auth/tippr')}
                state='primary'
                text='Add'
              />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
