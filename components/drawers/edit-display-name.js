import React, { Fragment } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from '@chakra-ui/react';
import TipprInput from 'components/forms/tippr-input';
import Buttons from 'components/forms/buttons';

export function EditDisplayNameDrawer(props) {
  const { isOpen = true, onOpen, onClose } = props;

  return (
    <Fragment>
      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <span className='text_body block w-full text-center mb-10'>
              Edit your display name
            </span>

            <TipprInput
              label='Display name'
              name='bvn'
              placeholder='e.g BEP20, ERC20, TRC20'
            />

            <div className='mt-44'>
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
